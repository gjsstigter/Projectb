from datetime import datetime

from django.db import models
from .room import Room
from .movie import Movie
from .seat import Seat
import random
import string


class Show(models.Model):
    time = models.DateTimeField(default=datetime.now, blank=True)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    seats = models.ManyToManyField(Seat, through='AvailableSeat')

    def __str__(self):
        return self.movie.title + " " + str(self.time)


class AvailableSeat(models.Model):
    show = models.ForeignKey(Show, on_delete=models.CASCADE)
    seat = models.ForeignKey(Seat, on_delete=models.CASCADE)
    available = models.BooleanField(default=True)

    @classmethod
    def create(cls, show, seat, available):
        seat = cls(show, seat, available)
        return seat
