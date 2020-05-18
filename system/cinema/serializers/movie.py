from rest_framework import serializers
from cinema.models import Movie, Genre, Keyword, Actor


class MovieCreateSerializer(serializers.ModelSerializer):
    genre = serializers.PrimaryKeyRelatedField(many=False, queryset=Genre.objects.all())
    keywords = serializers.PrimaryKeyRelatedField(many=True, queryset=Keyword.objects.all())
    actors = serializers.PrimaryKeyRelatedField(many=True, queryset=Actor.objects.all())

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


class MovieGetSerializer(serializers.ModelSerializer):
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
