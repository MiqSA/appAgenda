# Generated by Django 3.2.3 on 2021-06-01 21:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_agenda', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='name',
            field=models.CharField(max_length=30, unique=True),
        ),
        migrations.AlterField(
            model_name='phone',
            name='number',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]
