from rest_framework import serializers
from .models import EpisodeLike, Episode
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
        model = EpisodeLike
        field = '__all__'
        exclude = []


# class DislikeSer(serializers.ModelSerializer):
#     class Meta:
#         model = EpisodeDislike
#         field = '__all__'
#         exclude = []
