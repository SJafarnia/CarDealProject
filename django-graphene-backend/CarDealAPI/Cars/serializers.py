from rest_framework import serializers
from users.models import User
from .models import Car
from CarOrder.models import Appointment, Visit


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__' 

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__' 

class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visit
        fields = '__all__' 
