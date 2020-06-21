from rest_framework import serializers
from cinema.models import Movie, Show, AvailableSeat, Room


class ShowCreateSerializer(serializers.ModelSerializer):
    room = serializers.PrimaryKeyRelatedField(many=False, queryset=Room.objects.all())
    movie = serializers.PrimaryKeyRelatedField(many=False, queryset=Movie.objects.all())

    class Meta:
        model = Show
        fields = (
            'id',
            'time',
            'room',
            'movie',
        )


class ShowGetOneSerializer(serializers.ModelSerializer):
    room = serializers.StringRelatedField(many=False)
    movie = serializers.StringRelatedField(many=False)
    seats = serializers.PrimaryKeyRelatedField(many=True, queryset=AvailableSeat.objects.all())

    class Meta:
        model = Show
        fields = (
            'id',
            'time',
            'room',
            'movie',
            'seats',
        )


class ShowGetSerializer(serializers.ModelSerializer):
    room = serializers.StringRelatedField(many=False)
    movie = serializers.StringRelatedField(many=False)

    class Meta:
        model = Show
        fields = (
            'id',
            'time',
            'room',
            'movie',
        )
