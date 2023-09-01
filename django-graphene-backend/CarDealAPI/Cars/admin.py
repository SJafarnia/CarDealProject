from django.contrib import admin
from .models import Car, CarGallery, CarView


class CarGalleryInline(admin.TabularInline):
    model = CarGallery
    

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    fields = ["brand", "description","model", "year", "usage", "price", "fuel", "transmission", "seller", "is_new", "front_chassie", "rear_chassie", "color"]
    list_display = ["brand", "id", "model", "year", "seller"]
    inlines = [CarGalleryInline]


@admin.register(CarGallery)
class CarGalleryAdmin(admin.ModelAdmin):
    fields = ["img", "car", "is_main"]

@admin.register(CarView)
class CarViewAdmin(admin.ModelAdmin):
    fields = ["car", "user", "ip"]
