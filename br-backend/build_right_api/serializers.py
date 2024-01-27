from rest_framework import serializers
from . import models

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Service
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Review
        fields = '__all__'

class ServiceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ServiceImage
        fields = ['id', 'image']

    def create(self, validated_data):
        service_id = self.context['service_id']
        return models.ServiceImage.objects.create(service_id=service_id, **validated_data)
