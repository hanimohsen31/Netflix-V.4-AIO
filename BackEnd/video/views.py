import requests
from django.shortcuts import render

from accounts.models import User
from video.models import Video
from rest_framework.views import APIView
from video.models import Video
from .serializers import VideoSer, LikeSer
from rest_framework.response import Response
from django.db.models import Q
from .models import Like


# Create your views here.
def all_videos(request):
    all_objs = Video.objects.all()
    context = {'all_objs': all_objs}
    return render(request, 'video/all.html', context)


def movie(request):
    all_objs = Video.objects.filter(type="Movie")
    context = {'all_objs': all_objs}
    return render(request, 'video/all.html', context)


def series(request):
    all_objs = Video.objects.filter(type="Series")
    context = {'all_objs': all_objs}
    return render(request, 'video/all.html', context)


# ################################################################################################33
# ######################################## APIs Here #############################################33


class VideoView(APIView):

    def get(self, request):
        video = Video.objects.all()
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass


class VideoDetails(APIView):

    def get(self, request,title):
        video = Video.objects.filter(title=title)
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass


class VideoDetailsId(APIView):

    def get(self, request,id):
        video = Video.objects.filter(id=id)
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass


class MovieView(APIView):

    def get(self, request):
        video = Video.objects.filter(type="Movie")
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass


class SeriesView(APIView):

    def get(self, request):
        video = Video.objects.filter(type='Series')
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass


# ######################################## Cats Here #############################################33
class Action(APIView):

    def get(self, request):
        video = Video.objects.filter(Q(cat1='Action') | Q(cat2='Action') | Q(cat3='Action'))
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass


class Fantasy(APIView):

    def get(self, request):
        video = Video.objects.filter(Q(cat1='Fantasy') | Q(cat2='Fantasy') | Q(cat3='Fantasy'))
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass


class SciFi(APIView):

    def get(self, request):
        video = Video.objects.filter(Q(cat1='Sci-Fi') | Q(cat2='Sci-Fi') | Q(cat3='Sci-Fi'))
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass


class Anime(APIView):
    def get(self, request):
        video = Video.objects.filter(Q(cat1='Anime') | Q(cat2='Anime') | Q(cat3='Anime'))
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass


class Drama(APIView):
    def get(self, request):
        video = Video.objects.filter(Q(cat1='Drama') | Q(cat2='Drama') | Q(cat3='Drama'))
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass


class Comedy(APIView):
    def get(self, request):
        video = Video.objects.filter(Q(cat1='Comedy') | Q(cat2='Comedy') | Q(cat3='Comedy'))
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass

# ################################################################################################33
# ######################################## Like here #############################################33


class Like(APIView):
    def post(self, request):
        print('ffffff')
        print(request.session)

        user = User.objects.filter(id=request.session['user'])
        print(user)
        video = Video.objects.filter(id=request.data['id'])
        like = Like.objects.filter(video=video)
        if not like.exists():
            Like.objects.create(video=video, user=user, status=True)
            data = {'video': video, 'user': user, 'status': True}
            ser = LikeSer(data=data)
            ser.is_valid(raise_exception=True)
            ser.save()
            Response({'status': True})
        else:
            Like.objects.filter(video=Like.video).delete()
            Response({'status': False})

