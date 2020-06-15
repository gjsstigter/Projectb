from django.db import models


class Room(models.Model):
    name = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.name

    @classmethod
    def create(cls, name):
        name = cls(name)
        return name
