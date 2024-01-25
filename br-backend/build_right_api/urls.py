from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()

router.register('services', views.ServiceViewSet)
router.register('reviews', views.ReviewViewSet)

urlpatterns = router.urls