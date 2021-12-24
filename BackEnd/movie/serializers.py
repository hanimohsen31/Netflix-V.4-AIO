from rest_framework import serializers
from .models import Dislike, Like, Movie
from series.serializers import CategorySer, RateSer


class MovieSer(serializers.ModelSerializer):
    categories = CategorySer(many=True)
    rates = RateSer(many=True)

    class Meta:
        model = Movie
        field = '__all__'
        exclude = []


class LikeSer(serializers.ModelSerializer):
    class Meta:
        model = Like
        field = '__all__'
        exclude = []


class DislikeSer(serializers.ModelSerializer):
    class Meta:
        model = Dislike
        field = '__all__'
        exclude = []
