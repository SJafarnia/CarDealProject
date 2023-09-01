from django.urls import path, include
from rest_framework import routers
from .views import CarViewSet, AppointmentViewSet, VisitViewSet
from rest_framework_simplejwt import views as jwt_views


router = routers.DefaultRouter()
router.register(r'cars', CarViewSet)
router.register(r'appointments', AppointmentViewSet)
router.register(r'visits', VisitViewSet)


urlpatterns = [
    path('', include(router.urls)),
    # path('app', include("rest_framework.urls")),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]