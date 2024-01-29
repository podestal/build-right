from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()

router.register('services', views.ServiceViewSet)
router.register('reviews', views.ReviewViewSet)
router.register('requests', views.RequestViewSet)

service_router = routers.NestedDefaultRouter(router, 'services', lookup='service')
service_router.register('images', views.ServiceImageViewSet, basename='service-images')

review_router = routers.NestedDefaultRouter(router, 'reviews', lookup='review')
review_router.register('images', views.ReviewImageViewSet, basename='review-images')

urlpatterns = router.urls + service_router.urls + review_router.urls