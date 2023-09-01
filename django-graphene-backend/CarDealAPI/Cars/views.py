from users.models import User
from .models import Car
from CarOrder.models import Appointment, Visit
from rest_framework import viewsets , mixins, status
from rest_framework import permissions
from rest_framework.response import Response
from .serializers import CarSerializer, AppointmentSerializer, VisitSerializer
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated


class CarViewSet(mixins.RetrieveModelMixin,     
                    mixins.CreateModelMixin,
                    mixins.DestroyModelMixin,
                    mixins.ListModelMixin,
                    viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = (IsAuthenticated,)  

class AppointmentViewSet(mixins.RetrieveModelMixin,
                    mixins.ListModelMixin,
                    mixins.CreateModelMixin,
                    mixins.DestroyModelMixin,
                    viewsets.GenericViewSet):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = (IsAuthenticated,)  

class VisitViewSet(mixins.RetrieveModelMixin,
                    mixins.ListModelMixin,
                    mixins.CreateModelMixin,
                    mixins.DestroyModelMixin,
                    viewsets.GenericViewSet):
    queryset = Visit.objects.all()
    serializer_class = VisitSerializer
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = (IsAuthenticated,)  
