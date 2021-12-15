from rest_framework import serializers
from video.models import Video


class VideoSer(serializers.ModelSerializer):
    class Meta:
        model = Video
        field = '__all__'
        exclude = []

