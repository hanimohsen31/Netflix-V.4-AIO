from rest_framework import serializers
from .models import Series


class SeriesSer(serializers.ModelSerializer):
    class Meta:
        model = Series
        field = '__all__'
        exclude = []

