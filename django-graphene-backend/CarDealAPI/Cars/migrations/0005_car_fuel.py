# Generated by Django 4.1.7 on 2023-06-26 12:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cars', '0004_car_sold_to_alter_cargallery_car'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='fuel',
            field=models.CharField(choices=[('بنزین', 'بنزین'), ('گاز', 'گاز'), ('هیبرید', 'هیبرید')], default='بنزین', max_length=6),
        ),
    ]
