from rest_framework import serializers
from cinema.models import Room


class RoomGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'
