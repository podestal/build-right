from rest_framework import serializers
from . import models

class ServiceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ServiceImage
        fields = ['id', 'image']

    def create(self, validated_data):
        service_id = self.context['service_id']
        return models.ServiceImage.objects.create(service_id=service_id, **validated_data)

class ServiceSerializer(serializers.ModelSerializer):

    service_image = ServiceImageSerializer(many=True, read_only=True)

    class Meta:
        model = models.Service
        fields = ['id', 'title', 'description', 'service_image']

class CreateUpdateServiceSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Service
        fields = ['title', 'description']

class ReviewImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.ReviewImage
        fields = ['id', 'state', 'image']

    def create(self, validated_data):
        review_id = self.context['review_id']
        return models.ReviewImage.objects.create(review_id=review_id, **validated_data)

class ReviewSerializer(serializers.ModelSerializer):

    review_image = ReviewImageSerializer(many=True)

    class Meta:
        model = models.Review
        fields = ['id', 'customer_name', 'title', 'description', 'review_image']

class CreateUpdateReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Review
        fields = ['customer_name', 'title', 'description']

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Request
        fields = '__all__'
