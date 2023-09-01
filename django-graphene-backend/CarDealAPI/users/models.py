from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import validate_image_file_extension

class User(AbstractUser):
    phone = models.CharField(max_length=20, null=True, blank=True)
    email_active_code = models.CharField(max_length=100, null=True, blank=True)
    picture = models.ImageField(upload_to="media/userprofiles", null=True, blank=True, validators=[validate_image_file_extension])
    
    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "کاربر"
        verbose_name_plural = "کاربران"
