# Generated by Django 3.2.20 on 2023-07-14 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cars', '0011_auto_20230714_1821'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='year',
            field=models.PositiveIntegerField(max_length=4),
        ),
    ]