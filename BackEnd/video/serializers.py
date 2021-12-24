from rest_framework import serializers
from video.models import Video, Like, Dislike, MyList


class VideoSer(serializers.ModelSerializer):
    class Meta:
        model = Video
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


class MyListSer(serializers.ModelSerializer):
    class Meta:
        model = MyList
        field = '__all__'
        exclude = []
