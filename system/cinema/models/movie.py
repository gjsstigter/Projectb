from django.db import models
from .actor import Actor
from .keyword import Keyword
from .genre import Genre


class Movie(models.Model):
    title = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    release_date = models.DateField()
    studio = models.CharField(max_length=255)
    genre = models.OneToOneField(Genre, models.PROTECT)
    stars = models.IntegerField(blank=True)
    photo = models.FilePathField(blank=True)
    keywords = models.ManyToManyField(Keyword, blank=True)
    actors = models.ManyToManyField(Actor, blank=True)

    def __str__(self):
        return self.title
