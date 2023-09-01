# Generated by Django 3.2.20 on 2023-07-14 15:59

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cars', '0012_alter_car_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='price',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='car',
            name='usage',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='car',
            name='year',
            field=models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(2030), django.core.validators.MinValueValidator(1300)]),
        ),
    ]
