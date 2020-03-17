from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


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
            "photo": "path/to/file",
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
            "photo": "path/to/file",
            "keywords": ['Acteurs', 'Actie', 'Nederlands'],
            "genre": "Horror",
            "studio": "Warner bros",
            "actors": ["Harison ford", "Silvester stalone", "Firstname Lastname"]
        }
    ]

    return Response(data, status=status.HTTP_200_OK)
