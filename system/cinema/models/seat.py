from django.db import models
from .room import Room


class Seat(models.Model):
    row = models.IntegerField()
    number = models.IntegerField()
    room = models.ForeignKey(Room, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('row', 'number',)

    def __str__(self):
        return str(self.row) + "-" + str(self.number)

    @classmethod
    def create(cls, row, number, room):
        seat = cls(row, number, room)
        return seat
