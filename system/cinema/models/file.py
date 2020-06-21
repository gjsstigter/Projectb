from django.db import models


class File(models.Model):
    path = models.FileField(upload_to='photos')

    def __str__(self):
        return self.path.name