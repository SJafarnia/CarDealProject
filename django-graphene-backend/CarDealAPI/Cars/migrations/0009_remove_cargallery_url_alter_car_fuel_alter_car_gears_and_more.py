# Generated by Django 4.1.7 on 2023-07-07 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Cars', '0008_alter_cargallery_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cargallery',
            name='url',
        ),
        migrations.AlterField(
            model_name='car',
            name='fuel',
            field=models.CharField(choices=[('بنزین', 'بنزین'), ('گاز', 'گاز'), ('هیبرید', 'هیبرید')], default='بنزین', max_length=6, null=True),
        ),
        migrations.AlterField(
            model_name='car',
            name='gears',
            field=models.CharField(choices=[('دستی', 'دستی'), ('اتومات', 'اتومات')], default='دستی', max_length=6, null=True),
        ),
        migrations.AlterField(
            model_name='car',
            name='is_new',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AlterField(
            model_name='car',
            name='price',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='car',
            name='usage',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='car',
            name='year',
            field=models.CharField(max_length=4),
        ),
        migrations.AlterField(
            model_name='cargallery',
            name='img',
            field=models.ImageField(blank=True, upload_to='medias/upload'),
        ),
    ]
