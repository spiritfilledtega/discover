from django.db import models
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField
from django.conf import settings


class CustomUser(AbstractUser):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)
    first_name = models.CharField(max_length=128, null=True)
    last_name = models.CharField(max_length=128, null=True)
    phone = models.CharField(max_length=12)
    country = CountryField(multiple=False, null=True)
    Bitcoin_Address = models.CharField(max_length=128, null=True)

    def __str__(self):
            return self.email
