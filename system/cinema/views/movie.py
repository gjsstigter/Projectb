from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from cinema.serializers.movie import MovieSerializer
from cinema.models import Movie, Genre, Keyword, Actor


@api_view(['GET'])
def movie_overview(request):
    data = [
        {
            "id": 1,
            "title": "Filmpie",
            "description": "bla bla bla bla bla bla bla bla bla bla bla bla",
            "release_date": "12-12-2020",
            "stars": 5,
            "photo": "path/to/file",
            "keywords": ['Acteurs', 'Actie', 'Nederlands'],
            "genre": "Horror",
            "studio": "Warner bros",
            "actors": ["Harison ford", "Silvester stalone", "Firstname Lastname"]
        },
        {
            "id": 2,
            "title": "Filmpie 2",
            "description": "bla bla bla bla bla bla bla bla bla bla bla bla",
            "release_date": "12-12-2020",
            "stars": 5,
            "photo": "https://tinypng.com/images/social/website.jpg",
            "keywords": ['Acteurs', 'Actie', 'Nederlands'],
            "genre": "Horror",
            "studio": "Warner bros",
            "actors": ["Harison ford", "Silvester stalone", "Firstname Lastname"]
        },
        {
            "id": 3,
            "title": "Filmpie 3",
            "description": "bla bla bla bla bla bla bla bla bla bla bla bla",
            "release_date": "12-12-2020",
            "stars": 5,
            "photo": "https://tinypng.com/images/social/website.jpg",
            "keywords": ['Acteurs', 'Actie', 'Nederlands'],
            "genre": "Child",
            "studio": "Warner bros",
            "actors": ["Harison ford", "Silvester stalone", "Firstname Lastname"]
        }
    ]

    return Response(data, status=status.HTTP_200_OK)


@api_view(['POST'])
def movie_create(request):
    if not request.data:
        return Response({'detail': 'No data provided'}, status=status.HTTP_400_BAD_REQUEST)

    data = request.data

    if 'genre' in data:
        genre = data['genre']
        genre, created = Genre.objects.get_or_create(name=genre)
        if created:
            genre.save()
        data['genre'] = genre.id
    else:
        return Response({'detail': 'Please enter a Genre'}, status=status.HTTP_400_BAD_REQUEST)

    if 'keywords' in data:
        keywords = data['keywords']

        keyword_ids = []

        for keyword in keywords:
            keyword, created = Keyword.objects.get_or_create(word=keyword)
            if created:
                keyword.save()
            keyword_ids.append(keyword.id)
        data['keywords'] = keyword_ids

    if 'actors' in data:
        actors = data['actors']

        actor_ids = []

        for actor in actors:
            actor, created = Actor.objects.get_or_create(name=actor)
            if created:
                actor.save()
            actor_ids.append(actor.id)
        data['actors'] = actor_ids

    movie_validate = MovieSerializer(data=data)
    movie_validate.is_valid(raise_exception=True)
    movie_validate.save()

    return Response(movie_validate.data, status=status.HTTP_201_CREATED)
