# Generated by Django 3.2.3 on 2021-06-02 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_agenda', '0006_alter_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='phone',
            name='number',
            field=models.CharField(blank=True, max_length=20, null=True, unique=True),
        ),
    ]
