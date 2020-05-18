from django.db import models
import datetime

class Movies(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=60)
    description = models.TextField(max_length=256)
    release_date = models.DateField(blank=True, null=True)
    stars = models.IntegerField(default=0)


    def __str__(self):
        return self.title
