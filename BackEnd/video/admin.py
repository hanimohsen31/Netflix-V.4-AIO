from django.contrib import admin

# Register your models here.
from .models import Video, Like, Dislike
admin.site.register(Video)
admin.site.register(Like)
admin.site.register(Dislike)
