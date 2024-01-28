from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from . import models
from . import serializers

class ServiceViewSet(ModelViewSet):

    queryset = models.Service.objects.prefetch_related('service_image').all()
    serializer_class = serializers.ServiceSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class ReviewViewSet(ModelViewSet):

    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class ServiceImageViewSet(ModelViewSet):

    serializer_class = serializers.ServiceImageSerializer

    def get_serializer_context(self):
        return {'service_id': self.kwargs['service_pk']}

    def get_queryset(self):
        return models.ServiceImage.objects.filter(service_id=self.kwargs['service_pk'])