from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from project_b import settings
from cinema.models import File


@api_view(['GET'])
def get_file(self, pk):
    try:
        file = File.objects.get(pk=pk)
    except File.DoesNotExist:
        return Response({'detail': f'File with id {pk} does not exist'}, status=status.HTTP_404_NOT_FOUND)

    if file.type == "image":
        try:
            raw_file = open(settings.MEDIA_ROOT + "/" + str(file.path), 'rb')
        except Exception:
            return Response(str(file))

        return HttpResponse(raw_file.read(), content_type='image/jpg')

    return Response({'detail': 'Could not get file from server'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)