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

    STATUS_PENDING = 'P'
    STATUS_COMPLETED = 'C'

    STATUS_CHOICES = [
        (STATUS_PENDING, 'Pending'),
        (STATUS_COMPLETED, 'Completed')
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.IntegerField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default=STATUS_PENDING)
