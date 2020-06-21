from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from cinema.models import Show, Seat, AvailableSeat, Room
from cinema.serializers.Room import RoomGetSerializer
from cinema.serializers.show import ShowGetSerializer, ShowCreateSerializer, ShowGetOneSerializer


@api_view(['POST'])
def room_create(request):
    if not request.data:
        return Response({'detail': 'No data provided'}, status=status.HTTP_400_BAD_REQUEST)

    data = request.data

    if 'name' not in data:
        return Response({'detail': 'Missing field name'}, status=status.HTTP_400_BAD_REQUEST)

    room = Room.objects.create(name=data['name'])
    room.save()

    while data['rows'] > 0:
        seats = data['seats']
        while seats > 0:
            Seat.objects.create(number=seats, row=data['rows'], room=room).save()
            seats -= 1
        data['rows'] -= 1

    return Response({'detail': 'Room has been created'}, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def room_overview(request):
    data = Room.objects.get_queryset()
    shows = RoomGetSerializer(data, many=True).data

    return Response(shows, status=status.HTTP_200_OK)


@api_view(['GET'])
def show_overview(request):
    data = Show.objects.get_queryset()
    shows = ShowGetSerializer(data, many=True).data

    return Response(shows, status=status.HTTP_200_OK)


@api_view(['GET'])
def show_detail(request, pk):
    try:
        data = Show.objects.get(pk=pk)
    except Show.DoesNotExist:
        return Response({'detail': 'Could not find show'}, status=status.HTTP_404_NOT_FOUND)
    show = ShowGetOneSerializer(data).data

    seats = []

    for seat in show['seats']:
        seat = Seat.objects.get(pk=seat)
        seat_available = AvailableSeat.objects.get(seat=seat, show=show['id'])
        seat = {
            'id': seat.id,
            'row': seat.row,
            'number': seat.number,
            'available': seat_available.available
        }
        seats.append(seat)
    show['seats'] = seats

    return Response(show, status=status.HTTP_200_OK)


@api_view(['POST'])
def show_create(request):
    if not request.data:
        return Response({'detail': 'No data provided'}, status=status.HTTP_400_BAD_REQUEST)

    data = request.data

    show_validate = ShowCreateSerializer(data=data)
    show_validate.is_valid(raise_exception=True)
    show_validate.save()

    show = Show.objects.get(pk=show_validate.data['id'])

    seats = Seat.objects.filter(room=show.room)

    for seat in seats:
        AvailableSeat.objects.create(show=show, seat=seat).save()

    return Response({'detail': 'Show has been created'}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def reserve_seat(request, pk):
    try:
        show = Show.objects.get(pk=pk)
    except Show.DoesNotExist:
        return Response({'detail': 'Could not find show'}, status=status.HTTP_404_NOT_FOUND)

    if not request.data:
        return Response({'detail': 'No data provided'}, status=status.HTTP_400_BAD_REQUEST)

    for seat in request.data['seats']:
        available_seat = AvailableSeat.objects.get(seat_id=seat, show=show)
        if not available_seat.available:
            return Response({'detail': 'One of the seats has already been reserved'}, status=status.HTTP_400_BAD_REQUEST)
        available_seat.available = False
        available_seat.save()

    return Response({'detail': 'Seats have been reserved'}, status=status.HTTP_200_OK)
