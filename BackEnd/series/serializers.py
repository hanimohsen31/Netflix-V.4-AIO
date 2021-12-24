from rest_framework import serializers
from .models import Category, Rate, Series


class SeriesSer(serializers.ModelSerializer):
    class Meta:
        model = Series
        field = '__all__'
        exclude = []


class CategorySer(serializers.ModelSerializer):
    class Meta:
        model = Category
        field = '__all__'
        exclude = []


class RateSer(serializers.ModelSerializer):
    class Meta:
        model = Rate
        field = '__all__'
        exclude = []
