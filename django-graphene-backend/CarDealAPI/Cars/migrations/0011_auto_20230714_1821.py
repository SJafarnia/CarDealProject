# Generated by Django 3.2.20 on 2023-07-14 14:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cars', '0010_auto_20230714_1819'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='fuel',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='car',
            name='gears',
            field=models.CharField(max_length=10, null=True),
        ),
    ]