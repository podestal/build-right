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

class Request(models.Model):

    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False)
    
