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

class ReviewImage(models.Model):

    STATE_BEFORE = 'B'
    STATE_AFTER = 'A'

    STATE_OPTIONS = [
        (STATE_BEFORE, 'Before'),
        (STATE_AFTER, 'After')
    ]
    review = models.ForeignKey(Review, on_delete=models.CASCADE, related_name='review_image')
    image = models.ImageField(upload_to='api/images')
    state = models.CharField(max_length=1, choices=STATE_OPTIONS)


class Request(models.Model):

    title = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False)
    
