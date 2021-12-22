from rest_framework import serializers
from .models import Episode


class EpisodeSer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        field = '__all__'
        exclude = []

