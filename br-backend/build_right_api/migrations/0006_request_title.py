# Generated by Django 5.0.1 on 2024-01-28 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('build_right_api', '0005_alter_request_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='request',
            name='title',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
