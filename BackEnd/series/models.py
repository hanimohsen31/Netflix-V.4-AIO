from django.db import models




class Series(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField(default='')
    season_num = models.IntegerField()
    show_start = models.DateField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.title


class Category(models.Model):
    title = models.CharField(max_length=20)

    def __str__(self):
        return self.title


class Rate(models.Model):
    rate = models.FloatField()
