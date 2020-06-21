import base64
import os

from PIL import Image, ImageOps
from django.core.files.base import ContentFile
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from project_b import settings

from cinema.serializers.movie import MovieCreateSerializer, MovieGetSerializer
from cinema.models import Movie, Genre, Keyword, Actor, File


@api_view(['GET'])
def movie_overview(request):
    data = Movie.objects.get_queryset()
    movies = MovieGetSerializer(data, many=True).data

    return Response(movies, status=status.HTTP_200_OK)


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
        keyword, created = Keyword.objects.get_or_create(word=keywords)
        if created:
            keyword.save()
        data['keywords'] = keyword.id
    else:
        return Response({'detail': 'Please enter a Keyword'}, status=status.HTTP_400_BAD_REQUEST)
    if 'actors' in data:
        actor = data['actors']
        actor, created = Actor.objects.get_or_create(name=actor)
        if created:
            actor.save()
        data['actors'] = actor.id
    else:
        return Response({'detail': 'Please enter a Actors'}, status=status.HTTP_400_BAD_REQUEST)

    if 'photo' in data:
        image_data = request.FILES['photo'].file

        photo = ContentFile(image_data.read())
        try:
            latest_id = Movie.objects.latest("id").id
        except Exception:
            latest_id = 0
        try:
            image = Image.open(photo).convert('RGB')
            image = ImageOps.fit(image, (260, 260), Image.ANTIALIAS)
            photo_name = f'{settings.PHOTO_URL}{latest_id + 1}.jpg'
            if not os.path.isdir(settings.PHOTO_ROOT):
                os.mkdir(os.path.join(settings.MEDIA_ROOT, 'photos'))

            image.save(f'{settings.MEDIA_ROOT}/{photo_name}', 'JPEG')
        except IOError:
            return Response({'detail': 'Photo is not a valid image'}, status=status.HTTP_400_BAD_REQUEST)

        file = File()
        file.path = photo_name
        file.type = "image"
        file.save()
        data['photo_id'] = file.id

    movie_validate = MovieCreateSerializer(data=data)
    movie_validate.is_valid(raise_exception=True)
    movie_validate.save()

    return Response(movie_validate.data, status=status.HTTP_201_CREATED)


@api_view(['PATCH'])
def movie_update(request, pk):
    if not request.data:
        return Response({'detail': 'No data provided'}, status=status.HTTP_400_BAD_REQUEST)

    data = request.data

    try:
        movie = Movie.objects.get(pk=pk)
    except Movie.DoesNotExist:
        return Response({'detail': f'Movie with id {pk} does not exist'}, status=status.HTTP_404_NOT_FOUND)

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
        keyword, created = Keyword.objects.get_or_create(word=keywords)
        if created:
            keyword.save()
        data['keywords'] = keyword.id
    else:
        return Response({'detail': 'Please enter a Keyword'}, status=status.HTTP_400_BAD_REQUEST)
    if 'actors' in data:
        actor = data['actors']
        actor, created = Actor.objects.get_or_create(name=actor)
        if created:
            actor.save()
        data['actors'] = actor.id
    else:
        return Response({'detail': 'Please enter a Actors'}, status=status.HTTP_400_BAD_REQUEST)

    if 'photo' in data:
     image_data = request.FILES['photo'].file

     photo = ContentFile(image_data.read())
     try:
         latest_id = Movie.objects.latest("id").id
     except Exception:
         latest_id = 0
     try:
         image = Image.open(photo).convert('RGB')
         image = ImageOps.fit(image, (260, 260), Image.ANTIALIAS)
         photo_name = f'{settings.PHOTO_URL}{latest_id + 1}.jpg'
         if not os.path.isdir(settings.PHOTO_ROOT):
             os.mkdir(os.path.join(settings.MEDIA_ROOT, 'photos'))

         image.save(f'{settings.MEDIA_ROOT}/{photo_name}', 'JPEG')
     except IOError:
         return Response({'detail': 'Photo is not a valid image'}, status=status.HTTP_400_BAD_REQUEST)

     file = File()
     file.path = photo_name
     file.type = "image"
     file.save()
     data['photo_id'] = file.id

    movie_validate = MovieCreateSerializer(movie, data, partial=True)
    movie_validate.is_valid(raise_exception=True)
    movie_validate.save()

    return Response(movie_validate.data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def movie_delete(request, pk):
    try:
        movie = Movie.objects.get(pk=pk)
    except Movie.DoesNotExist:
        return Response({'detail': f'Movie with id {pk} does not exist'}, status=status.HTTP_404_NOT_FOUND)

    movie.delete()

    return Response({'detail': f'Movie with id {pk} has been deleted'})


@api_view(['GET'])
def movie_detail(request, pk):
    try:
        movie = Movie.objects.get(pk=pk)
    except Movie.DoesNotExist:
        return Response({'detail': f'Movie with id {pk} does not exist'}, status=status.HTTP_404_NOT_FOUND)
    data = MovieGetSerializer(movie).data

    return Response(data, status=status.HTTP_200_OK)
