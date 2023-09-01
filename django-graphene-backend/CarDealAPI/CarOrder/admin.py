from django.contrib import admin
from .models import Appointment, Visit
# Register your models here.


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ["seller", "visit_date", "price", "buyer", "car"]
    
@admin.register(Visit)
class VisitAdmin(admin.ModelAdmin):
    list_display = ["check_type", "check_price", "visitor", "visit"]


