# Generated by Django 5.0.6 on 2024-05-19 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_register'),
    ]

    operations = [
        migrations.AlterField(
            model_name='register',
            name='age',
            field=models.IntegerField(null=True),
        ),
    ]
