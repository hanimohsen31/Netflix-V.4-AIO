from django.shortcuts import render
from video.models import Video
from rest_framework.views import APIView
from video.models import Video
from .serializers import VideoSer
from rest_framework.response import Response

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
################################################################################################33
######################################## APIs Here #############################################33
class VideoView(APIView):

    def get(self, request):
        video = Video.objects.all()
        ser = VideoSer(video, many=True)
        return Response(ser.data)

    def post(self, request):
        pass
class VideoDetails(APIView):

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
