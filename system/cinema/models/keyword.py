from django.db import models


class Keyword(models.Model):
    word = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.word

    @classmethod
    def create(cls, word):
        keyword = cls(word)
        return keyword
