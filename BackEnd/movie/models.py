from django.contrib.auth.models import User
from django.db import models

from series.models import Category, Rate

# Create your models here.

class Movie(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField(default='')
    image = models.TextField()
    video_file = models.TextField()
    season_num = models.IntegerField()
    show_start = models.DateField(auto_now=False, auto_now_add=False)

    categories = models.ManyToManyField(Category)
    rates = models.ManyToManyField(Rate)
    users = models.ManyToManyField(User)

    # categories = models.ManyToManyField(Category,related_name='categories', null=True, blank=True)
    # rates = models.ManyToManyField(Rate,related_name='rates', null=True, blank=True)
    # users = models.ManyToManyField(User,related_name='users', null=True, blank=True)



    
    def __str__(self):
        return self.title
