# Generated by Django 3.0.4 on 2020-06-20 10:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cinema', '0010_merge_20200615_1227'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='seat',
            unique_together={('room', 'row', 'number')},
        ),
    ]