from django.db import models
from users.models import User
from slugify import slugify
import os
from django.core.validators import MaxValueValidator, MinValueValidator

# def img_directory_path(instance, filename):
#     """
#     Create a directory path to upload the Company's logo.
#     :param object instance:
#         The instance where the current file is being attached.
#     :param str filename:
#         The filename that was originally given to the file.
#         This may not be taken into account when determining
#         the final destination path.
#     :result str: Directory path.file_extension.
#     """
#     company_name = slugify(instance.name)
#     _, extension = os.path.splitext(filename)
#     return f"medias/{company_name}{extension}"


class Car(models.Model):
    # class fuelTypes(models.TextChoices):
    #     GASOLINE = "بنزین", "بنزین"
    #     GAS = "گاز", "گاز"
    #     HYBRID = "هیبرید", "هیبرید"

    # class gearsTypes(models.TextChoices):
    #     MANUAL = "دستی", "دستی"
    #     AUTOMATIC = "اتومات", "اتومات"

    brand = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.PositiveIntegerField(
        validators=[MaxValueValidator(2030), MinValueValidator(1300)]
    )
    usage = models.IntegerField()
    price = models.IntegerField()
    fuel = models.CharField(max_length=10, null=True, blank=True)
    transmission = models.CharField(max_length=10, null=True, blank=True)
    front_chassie = models.CharField(max_length=10, null=True, blank=True)
    rear_chassie = models.CharField(max_length=10, null=True, blank=True)
    color = models.CharField(max_length=10, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, blank=True)
    description = models.TextField(null=True, blank=True)
    # fuel = models.CharField(
    #     max_length=6, choices=fuelTypes.choices, default=fuelTypes.GASOLINE, null=True
    # )
    # gears = models.CharField(
    #     max_length=6, choices=gearsTypes.choices, default=gearsTypes.MANUAL, null=True
    # )

    seller = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True,
        related_name="car_seller",
        related_query_name="car_seller_fields",
    )
    is_new = models.BooleanField(default=False, null=True)
    sold_to = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        null=True,
        related_name="car_buyer",
        related_query_name="car_buyer_fields",
        default=None,
    )

    # def save(self, *args, **kwargs):
    #     # images = self.car_image.all()
    #     # if self.car_image.all():
    #         # for pic in self.car_image.all():
    #             # indx = images.index(pic)
    #             # if images[indx] == 0:
    #                 # pic.is_main = True
    #             # else:
    #                 # pic.is_main = False
    #             # pic.save()
    #     return super(Car, self).save(*args, **kwargs)


class CarGallery(models.Model):
    img = models.ImageField(upload_to="medias/upload", blank=True)
    is_main = models.BooleanField(default=False)
    car = models.ForeignKey(
        Car, on_delete=models.CASCADE, null=True, related_name="car_image"
    )
    # url = models.CharField(max_length=1000, null=True, blank=True)

    # def get_abs_url(self):
    # return f"http://127.0.0.1:8000{self.img.url}"

    def save(self, *args, **kwargs):
        # if self.img:
        # self.url = self.get_abs_url()
        return super(CarGallery, self).save(*args, **kwargs)


class CarView(models.Model):
    car = models.ForeignKey(
        Car, on_delete=models.CASCADE, null=True, related_name="car_view"
    )
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, related_name="view_user"
    )
    ip = models.CharField(max_length=15, verbose_name="آی پی کاربر", null=True)
