from django.contrib import admin
from .models import User
from django.apps import apps


@admin.register(User)
class UserManager(admin.ModelAdmin):
    fields = ["password", "username", "phone", "email"]
    readonly_fields = ["password"]

app = apps.get_app_config("graphql_auth")

for model_name, model in app.models.items():
    admin.site.register(model)
