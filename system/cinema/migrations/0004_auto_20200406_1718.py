# Generated by Django 3.0.4 on 2020-04-06 15:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cinema', '0003_auto_20200406_1712'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='genre',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='cinema.Genre'),
        ),
    ]
