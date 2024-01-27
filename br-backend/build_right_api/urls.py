from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()

router.register('services', views.ServiceViewSet)
router.register('reviews', views.ReviewViewSet)

service_router = routers.NestedDefaultRouter(router, 'services', lookup='service')
service_router.register('images', views.ServiceImageViewSet, basename='images')

urlpatterns = router.urls + service_router.urls