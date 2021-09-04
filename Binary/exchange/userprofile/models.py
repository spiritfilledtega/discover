from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings

class Profile(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    balance = models.IntegerField(default=0, null=True, blank=True)
    invested = models.IntegerField(default=0, null=True, blank=True)
    btc_bal = models.FloatField(default=0.00, null=True, blank=True)
    ref_bonus = models.IntegerField(default=0, null=True, blank=True)
    status = models.CharField(max_length=100, null=True, blank=True)
    status_message = models.CharField(max_length=200,null=True, blank=True)
    suspend_user = models.CharField(max_length=100, null=True, blank=True)

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

