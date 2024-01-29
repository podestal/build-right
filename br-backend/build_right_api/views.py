from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.filters import OrderingFilter
from . import models
from . import serializers

class ServiceViewSet(ModelViewSet):

    queryset = models.Service.objects.prefetch_related('service_image').all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    http_method_names = ['get', 'post', 'patch', 'delete']

    def get_serializer_class(self):
        if self.request.method == 'POST' or self.request.method == 'PATCH':
            return serializers.CreateUpdateServiceSerializer
        return serializers.ServiceSerializer


class ReviewViewSet(ModelViewSet):

    queryset = models.Review.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    http_method_names = ['get', 'post', 'patch', 'delete']

    def get_serializer_class(self):
        if self.request.method == 'POST' or self.request.method == 'PATCH':
            return serializers.CreateUpdateReviewSerializer
        return serializers.ReviewSerializer

class ServiceImageViewSet(ModelViewSet):

    serializer_class = serializers.ServiceImageSerializer

    def get_serializer_context(self):
        return {'service_id': self.kwargs['service_pk']}

    def get_queryset(self):
        return models.ServiceImage.objects.filter(service_id=self.kwargs['service_pk'])
    
class ReviewImageViewSet(ModelViewSet):

    serializer_class = serializers.ReviewImageSerializer

    def get_serializer_context(self):
        return {'review_id': self.kwargs['review_pk']}

    def get_queryset(self):
        return models.ReviewImage.objects.filter(review_id=self.kwargs['review_pk'])
    
class RequestViewSet(ModelViewSet):

    queryset = models.Request.objects.all()
    serializer_class = serializers.RequestSerializer
    http_method_names = ['get', 'post', 'patch', 'delete']
    filter_backends = [OrderingFilter]
    ordering_fields = ['completed']

