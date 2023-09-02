# Generated by Django 3.2.20 on 2023-08-04 19:07

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Cars', '0014_auto_20230731_0036'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='car',
            name='date_modified',
            field=models.DateTimeField(auto_now=True),
        ),
    ]