from django.db import models

class Service(models.Model):

    title = models.CharField(max_length=255)
    description = models.TextField()

class Review(models.Model):

    customer_name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField()

class ServiceImage(models.Model):

    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='service_image')
    image = models.ImageField(upload_to='api/images',)