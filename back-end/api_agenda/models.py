from django.db import models


class Phone(models.Model):
    number = models.CharField(max_length=20, unique=True)
    contact = models.ForeignKey("Contact", on_delete=models.CASCADE, related_name='phones')


class Contact(models.Model):
    name = models.CharField(max_length=40, unique=True)

    def __str__(self):
        return self.name
