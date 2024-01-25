from django.db import models

class Service(models.Model):

    title = models.CharField(max_length=255)
    description = models.TextField()

class Review(models.Model):

    customer_name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField()

