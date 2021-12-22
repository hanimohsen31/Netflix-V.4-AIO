from django.contrib.auth import get_user
from django.shortcuts import render
from series.models import Category
from video.models import Video
from rest_framework.views import APIView
from video.models import Video
from movie.models import Movie
from episode.models import Episode
from episode.serializers import EpisodeSer
from movie.serializers import MovieSer
from rest_framework.response import Response
from django.db.models import Q
import json


# Create your views here.
# def all_videos(request):
#     all_objs = Video.objects.all()
#     context = {'all_objs': all_objs}
#     return render(request, 'video/all.html', context)


# def movie(request):
#     all_objs = Video.objects.filter(type="Movie")
#     context = {'all_objs': all_objs}
#     return render(request, 'video/all.html', context)


# def series(request):
#     all_objs = Video.objects.filter(type="Series")
#     context = {'all_objs': all_objs}
#     return render(request, 'video/all.html', context)


# ################################################################################################33
# ######################################## APIs Here #############################################33


class VideoView(APIView):

    def get(self, request):
        data = []
        movie = Movie.objects.all()
        movieser = MovieSer(movie, many=True)
        episode = Episode.objects.all()
        episodeser = EpisodeSer(episode, many=True)
        [data.append(movie)for movie in movieser.data]
        [data.append(episode)for episode in episodeser.data]
        
        return Response(data)
        
    def post(self, request):
        pass


class VideoDetails(APIView):

    def get(self, request, vid, vtype):

        if vtype == "movie":
            video = Movie.objects.filter(id=vid)
            ser = MovieSer(video, many=True)

        else:
            video = Episode.objects.filter(id=vid)
            ser = EpisodeSer(video, many=True)

        return Response(ser.data)

    def post(self, request):
        pass

class AddToMyList(APIView):
    def post(self, request,vid, vtype):
        userid=request.data['user_id']  
        if vtype == "movie":
            video = Movie.objects.get(id=vid)
            video.users.add(userid)
            video.save()
            ser = MovieSer(video)
        else:
            video = Episode.objects.get(id=vid)
            video.users.add(userid)
            video.save()
            ser = EpisodeSer(video)

        return Response(ser.data)

    # def post(self, request):
    #     pass

class CategoryView(APIView):

    def get(self, request,cat):
        category = Category.objects.get(title=cat)
        data=[]
        movie = Movie.objects.filter(categories__id= category.id  )
        movieser = MovieSer(movie, many=True)
        episode = Episode.objects.filter(categories__id= category.id )
        episodeser = EpisodeSer(episode, many=True)
        [data.append(movie)for movie in movieser.data]
        [data.append(episode)for episode in episodeser.data]
        return Response(data)
    def post(self, request):
        pass

class MyListView(APIView):

    def get(self, request):
        user_id = request.data['user_id']  
        data=[]
        movie = Movie.objects.filter(users__id= user_id  )
        movieser = MovieSer(movie, many=True)
        episode = Episode.objects.filter(users__id= user_id )
        episodeser = EpisodeSer(episode, many=True)
        [data.append(movie)for movie in movieser.data]
        [data.append(episode)for episode in episodeser.data]
        return Response(data)
        
    def post(self, request):
        pass

# class SeriesView(APIView):

#     def get(self, request):
#         video = Video.objects.filter(type='Series')
#         ser = VideoSer(video, many=True)
#         return Response(ser.data)

#     def post(self, request):
#         pass


# # ######################################## Cats Here #############################################33
# class Action(APIView):

#     def get(self, request):
#         video = Video.objects.filter(Q(cat1='Action') | Q(cat2='Action') | Q(cat3='Action'))
#         ser = VideoSer(video, many=True)
#         return Response(ser.data)

#     def post(self, request):
#         pass


# class Fantasy(APIView):

#     def get(self, request):
#         video = Video.objects.filter(Q(cat1='Fantasy') | Q(cat2='Fantasy') | Q(cat3='Fantasy'))
#         ser = VideoSer(video, many=True)
#         return Response(ser.data)

#     def post(self, request):
#         pass


# class SciFi(APIView):

#     def get(self, request):
#         video = Video.objects.filter(Q(cat1='Sci-Fi') | Q(cat2='Sci-Fi') | Q(cat3='Sci-Fi'))
#         ser = VideoSer(video, many=True)
#         return Response(ser.data)

#     def post(self, request):
#         pass


# class Anime(APIView):
#     def get(self, request):
#         video = Video.objects.filter(Q(cat1='Anime') | Q(cat2='Anime') | Q(cat3='Anime'))
#         ser = VideoSer(video, many=True)
#         return Response(ser.data)

#     def post(self, request):
#         pass


# class Drama(APIView):
#     def get(self, request):
#         video = Video.objects.filter(Q(cat1='Drama') | Q(cat2='Drama') | Q(cat3='Drama'))
#         ser = VideoSer(video, many=True)
#         return Response(ser.data)

#     def post(self, request):
#         pass


# class Comedy(APIView):
#     def get(self, request):
#         video = Video.objects.filter(Q(cat1='Comedy') | Q(cat2='Comedy') | Q(cat3='Comedy'))
#         ser = VideoSer(video, many=True)
#         return Response(ser.data)

#     def post(self, request):
#         pass

