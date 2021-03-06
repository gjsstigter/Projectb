# Generated by Django 3.0.4 on 2020-06-15 06:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cinema', '0007_auto_20200614_1737'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='actors',
        ),
        migrations.AddField(
            model_name='movie',
            name='actors',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='cinema.Actor'),
        ),
        migrations.RemoveField(
            model_name='movie',
            name='keywords',
        ),
        migrations.AddField(
            model_name='movie',
            name='keywords',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='cinema.Keyword'),
        ),
    ]
