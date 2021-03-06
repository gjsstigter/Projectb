from rest_framework import serializers
from cinema.models import Movie, Genre, Keyword, Actor


class MovieCreateSerializer(serializers.ModelSerializer):
    genre = serializers.PrimaryKeyRelatedField(many=False, queryset=Genre.objects.all())
    keywords = serializers.PrimaryKeyRelatedField(many=False, queryset=Keyword.objects.all())
    actors = serializers.PrimaryKeyRelatedField(many=False, queryset=Actor.objects.all())
    photo_id = serializers.IntegerField(required=False)

    class Meta:
        model = Movie
        fields = (
            'id',
            'title',
            'description',
            'release_date',
            'stars',
            'genre',
            'studio',
            'keywords',
            'actors',
            'photo_id',
        )


class MovieGetSerializer(serializers.ModelSerializer):
    genre = serializers.StringRelatedField(many=False)
    keywords = serializers.StringRelatedField(many=False)
    actors = serializers.StringRelatedField(many=False)
    photo_id = serializers.StringRelatedField(many=False)

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
            'actors',
            'photo_id'
        )
