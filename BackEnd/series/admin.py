from django.contrib import admin

# Register your models here.
from .models import Series, Category,Rate
admin.site.register(Series)
admin.site.register(Category)
admin.site.register(Rate)