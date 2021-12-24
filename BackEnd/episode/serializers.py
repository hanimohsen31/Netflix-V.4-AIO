from rest_framework import serializers
from .models import Dislike, Like, Episode
from series.serializers import CategorySer, RateSer, SeriesSer


class EpisodeSer(serializers.ModelSerializer):
    categories = CategorySer(many=True)
    rates = RateSer(many=True)
    series = SeriesSer()

    class Meta:
        model = Episode
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
