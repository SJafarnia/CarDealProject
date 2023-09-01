from django.db import models
from users.models import User
from Cars.models import Car

class Appointment(models.Model):
    seller = models.ForeignKey(User, on_delete= models.CASCADE, null=True, related_name="seller")
    buyer = models.ForeignKey(User, on_delete= models.CASCADE, null=True, related_name="buyer")
    car =  models.ForeignKey(Car, on_delete= models.CASCADE, null=True, related_name="car_appointment")
    date = models.DateTimeField(auto_now_add=True)
    visit_date = models.DateTimeField(null=True)
    price = models.IntegerField()

class Visit(models.Model):
    check_type = models.CharField(max_length=100)
    check_price = models.IntegerField()
    visitor =  models.ForeignKey(User, on_delete= models.CASCADE, null=True)
    visit =  models.ForeignKey(Appointment, on_delete= models.CASCADE, null=True, related_name="car_visit")
