from rest_framework import serializers
from .models import  MovieLike, Movie
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
        model = MovieLike
        field = '__all__'
        exclude = []


# class DislikeSer(serializers.ModelSerializer):
#     class Meta:
#         model = MovieDislike
#         field = '__all__'
#         exclude = []
