from django.contrib.auth.models import User
from django.db import models
from django.db.models.deletion import CASCADE

from series.models import Rate, Series, Category

# Create your models here.
class Episode(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField(default='')
    image = models.TextField()
    video_file = models.TextField()
    eps_num = models.IntegerField()


    categories = models.ManyToManyField(Category)
    rates = models.ManyToManyField(Rate)
    users = models.ManyToManyField(User)
    # categories = models.ManyToManyField(Category,related_name='categories', null=True, blank=True)
    # rates = models.ManyToManyField(Rate,related_name='rates', null=True, blank=True)
    # users = models.ManyToManyField(User,related_name='users', null=True, blank=True)
    series=models.ForeignKey(Series,on_delete=models.CASCADE)



    def __str__(self):
        return self.title
