# Generated by Django 3.2.3 on 2021-06-05 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_agenda', '0008_alter_phone_number'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'ordering': ['-name']},
        ),
        migrations.AlterField(
            model_name='contact',
            name='name',
            field=models.CharField(max_length=40, unique=True),
        ),
    ]
