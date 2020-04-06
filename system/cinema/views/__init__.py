from django.http import HttpResponse
from .movie import *


def index(request):
    return HttpResponse("Hello, world.")
