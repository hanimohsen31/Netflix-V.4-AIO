import jwt, datetime

import requests
from django.shortcuts import render

from accounts.models import User
from video.models import Video, MyList
from rest_framework.views import APIView
from video.models import Video
from .serializers import DislikeSer, VideoSer, LikeSer, MyListSer
from rest_framework.response import Response
from django.db.models import Q
from .models import Like , Dislike


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


class LikeFuck(APIView):
    def post(self, request):
        print(request.data)
        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        video = Video.objects.filter(id=request.data['id']).first()
        like = Like.objects.filter(video=video.id,user=user.id).first()

        if like:
            Like.objects.filter(video=video.id).delete()
            response = Response()
            response.data = {'status': False}
            return response

        else:
            dislike = Dislike.objects.filter(video=video.id, user=user.id).first()
            if dislike:
                Dislike.objects.filter(video=video.id).delete()

            data = {'video': video.id, 'user': user.id, 'status': True}
            ser = LikeSer(data=data)
            ser.is_valid(raise_exception=True)
            ser.save()
            response = Response()
            response.data = {'statuslike': True, 'statusdislike': False}
            return response


class Getlike(APIView):
    def post(self, request):
        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
    
        user = User.objects.filter(id=payload['id']).first()
        video = Video.objects.filter(id=request.data['id']).first()
        like = Like.objects.filter(video=video.id, user=user.id).first()
    
        if like:
            print('1')
            response = Response()
            response.data = {'status': True}
            return response
    
        else:
            response = Response()
            response.data = {'status': False}
            return response


# ################################################################################################33
# ######################################## Dislike here #############################################33

class DislikeFuck(APIView):
    def post(self, request):
        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        video = Video.objects.filter(id=request.data['id']).first()
        dislike = Dislike.objects.filter(video=video.id,user=user.id).first()

        if dislike:
            Dislike.objects.filter(video=video.id).delete()
            response = Response()
            response.data = {'status': False}
            return response

        else:
            like = Like.objects.filter(video=video.id, user=user.id).first()
            if like:
                Like.objects.filter(video=video.id).delete()

            data = {'video': video.id, 'user': user.id, 'status': True}
            ser = DislikeSer(data=data)
            ser.is_valid(raise_exception=True)
            ser.save()
            response = Response()
            response.data = {'statusdislike': True, 'statuslike': False}
            return response


class GetDislike(APIView):
    def post(self, request):
        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
    
        user = User.objects.filter(id=payload['id']).first()
        video = Video.objects.filter(id=request.data['id']).first()
        dislike = Dislike.objects.filter(video=video.id, user=user.id).first()
    
        if dislike:
            response = Response()
            response.data = {'status': True}
            return response
    
        else:
            response = Response()
            response.data = {'status': False}
            return response

# ################################################################################################33
# ######################################## myList here #############################################33


class myList(APIView):
    def post(self, request):
        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        video = Video.objects.filter(id=request.data['id']).first()
        mylist = MyList.objects.filter(video=video.id, user=user.id).first()

        if mylist:
            MyList.objects.filter(video=video.id).delete()
            response = Response()
            response.data = {'statusmylist': False}
            return response

        else:
            data = {'video': video.id, 'user': user.id, 'status': True}
            ser = MyListSer(data=data)
            ser.is_valid(raise_exception=True)
            ser.save()
            response = Response()
            response.data = {'statusmylist': True}
            return response


class GetMyList(APIView):
    def post(self, request):
        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        video = Video.objects.filter(id=request.data['id']).first()
        mylist = MyList.objects.filter(video=video.id, user=user.id).first()

        if mylist:
            response = Response()
            response.data = {'status': True}
            return response

        else:
            response = Response()
            response.data = {'status': False}
            return response


class GetMyList705(APIView):
    def post(self, request):
        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        mylist705 = MyList.objects.filter(user=user.id)

        if mylist705:
            ser = MyListSer(mylist705, many=True)
            x = []
            for k in ser.data:
                x.append(k['video'])
            # print(x)
            filterfin = Video.objects.filter(id__in=x)
            print(filterfin)
            ser = VideoSer(filterfin, many=True)
            # x = []
            # print(x)
            return Response(ser.data)

        else:
            return Response('None')


class VidSearch(APIView):

    def post(self, request):
        video = Video.objects.filter(title=request.data['title'])
        ser = VideoSer(video, many=True)
        return Response(ser.data)
        print(request.data['title'])
