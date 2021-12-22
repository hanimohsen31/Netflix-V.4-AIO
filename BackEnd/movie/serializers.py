from rest_framework import serializers
from .models import Movie


class MovieSer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        field = '__all__'
        exclude = []

