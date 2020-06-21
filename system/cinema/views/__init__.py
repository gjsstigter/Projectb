from django.http import HttpResponse
from .movie import *
from .files import *
from .show import *


def index(request):
    return HttpResponse("Hello, world.")
