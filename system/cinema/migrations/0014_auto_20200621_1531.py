# Generated by Django 3.0.4 on 2020-06-21 15:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cinema', '0013_auto_20200621_1529'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='seat',
            unique_together={('room',)},
        ),
    ]
