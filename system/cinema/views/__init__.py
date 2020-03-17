from django.http import HttpResponse
from .movie import movie_overview


def index(request):
    return HttpResponse("Hello, world.")
