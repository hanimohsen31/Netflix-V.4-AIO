from accounts.models import User
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
    series = models.ForeignKey(Series, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Like(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    video = models.ForeignKey(Episode, null=True, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.video.title


class Dislike(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    video = models.ForeignKey(Episode, null=True, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.video.title
