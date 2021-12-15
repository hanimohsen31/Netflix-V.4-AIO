from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager
from django.template.defaultfilters import slugify

Type = (
    ('Movie', 'Movie'),
    ('Series', 'Series'),
)


class Video(models.Model):
    title = models.CharField(max_length=20)
    category = TaggableManager()
    description = models.TextField(default='')
    type = models.CharField(max_length=15, choices=Type)
    image = models.TextField()
    video_file = models.TextField()
    eps_num = models.IntegerField()
    season_num = models.IntegerField()
    show_start = models.DateField(auto_now=False, auto_now_add=False)
    rate = models.FloatField()

    def __str__(self):
        return self.title
