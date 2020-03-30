from rest_framework import serializers
from cinema.models import Movie


class MovieSerializer(serializers.ModelSerializer):
    genre = serializers.StringRelatedField(many=False)
    keywords = serializers.StringRelatedField(many=True)
    actors = serializers.StringRelatedField(many=True)

    class Meta:
        model = Movie
        fields = (
            'id',
            'title',
            'description',
            'release_date',
            'stars',
            'photo',
            'genre',
            'studio',
            'keywords',
            'actors'
        )
