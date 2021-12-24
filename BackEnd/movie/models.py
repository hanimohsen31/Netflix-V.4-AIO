from accounts.models import User
from django.db import models
from series.models import Category, Rate


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

    def __str__(self):
        return self.title


class Like(models.Model):
    user = models.ForeignKey(
        User, null=True, on_delete=models.CASCADE, related_name="like_user")
    video = models.ForeignKey(Movie, null=True, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.video.title


class Dislike(models.Model):
    user = models.ForeignKey(
        User, null=True, on_delete=models.CASCADE, related_name="dislike_user")
    video = models.ForeignKey(Movie, null=True, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.video.title
