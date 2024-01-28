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

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Review
        fields = '__all__'

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Request
        fields = '__all__'
