from django.db import models
from django.contrib.auth.models import  AbstractUser,AbstractBaseUser
from django.db.models.signals import post_save ,pre_save
from django.contrib.auth.models import User
from django.dispatch import receiver
# Create your models here.


class User(AbstractBaseUser):
    name = models.CharField(max_length=20)
    email = models.EmailField( unique=True)
    password = models.CharField(max_length=20)
    username = None 
    is_active=models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    # def __init__(self, *args, **kwargs):
    #     super(User, self).__init__(*args, **kwargs)
    #     if self.is_superuser:
    #         self.is_active=True
    #     else:
    #         self.is_active=False

    # USERNAME_FIELD = 'email'
    # REQUIRED_FIELDS=[]

    # @receiver(pre_save, sender=User)
    # def set_new_user_inactive(sender, instance, **kwargs):
    #     if instance._state.adding is True:
    #         print("Creating Inactive User")
    #         instance.is_active = False
    #     else:
    #         print("Updating User Record")


