from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from . import models
from . import serializers

class ServiceViewSet(ModelViewSet):

    queryset = models.Service.objects.all()
    serializer_class = serializers.ServiceSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class ReviewViewSet(ModelViewSet):

    queryset = models.Review.objects.all()
    serializer_class = serializers.ReviewSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
