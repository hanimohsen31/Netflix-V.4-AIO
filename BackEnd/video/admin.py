from django.contrib import admin

# Register your models here.
from .models import Video, Like, Dislike, MyList

admin.site.register(Video)
admin.site.register(Like)
admin.site.register(Dislike)
admin.site.register(MyList)