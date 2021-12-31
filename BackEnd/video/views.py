import jwt
from accounts.models import User
from series.models import Category
from rest_framework.views import APIView
from movie.models import Movie,MovieLike
from episode.models import  Episode, EpisodeLike
from episode.serializers import EpisodeSer
from movie.serializers import MovieSer
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed


class VideoView(APIView):

    def get(self, request):
        print(request.query_params['token'])
        token = request.query_params['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        user = User.objects.get(id=payload['id'])
        print(user.id)

        data = []
        movie = Movie.objects.all()
        movieser = MovieSer(movie, many=True)
        episode = Episode.objects.all()
        episodeser = EpisodeSer(episode, many=True)
        [data.append(movie)for movie in movieser.data]
        [data.append(episode)for episode in episodeser.data]
        for i in data:
           
            if user.id in i['users']:
                i['added'] = True
            # if "series" in i.keys():
            #     if EpisodeLike.objects.filter(video=i["id"], user=user.id).first():
            #         i["liked"]=True
            #     if EpisodeDislike.objects.filter(video=i["id"], user=user.id).first():
            #         i["disliked"]=True  
            # else    :      
            #     if MovieLike.objects.filter(video=i["id"], user=user.id).first():
            #         i["liked"]=True
            #     if MovieDislike.objects.filter(video=i["id"], user=user.id).first():
            #         i["disliked"]=True  
       
        return Response(data)


# class VideoDetails(APIView):

#     def get(self, request, vid, vtype):

#         if vtype == "movie":
#             video = Movie.objects.filter(id=vid)
#             ser = MovieSer(video, many=True)
#             return Response(ser.data)

#         else:
#             data = []
#             video = Episode.objects.get(id=vid)
#             videos = Episode.objects.filter(
#                 series=video.series).exclude(id=video.id)
#             ser = EpisodeSer(video)
#             sers = EpisodeSer(videos, many=True)
#             data.append(ser.data)
#             [data.append(episode)for episode in sers.data]

#             return Response(data)


class AddToMyList(APIView):
    def post(self, request, vid, vtype):

        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!', code=401)
        user = User.objects.get(id=payload['id'])

        if vtype == "movie":
            video = Movie.objects.get(id=vid)
            video.users.add(user.id)
            video.save()
            ser = MovieSer(video)
        else:
            video = Episode.objects.get(id=vid)

            video.users.add(user.id)
            video.save()
            ser = EpisodeSer(video)
        newdic = ser.data
        newdic["added"] = True

        return Response(newdic)


class DeleteFromMyList(APIView):
    def post(self, request, vid, vtype):

        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!', code=401)
        user = User.objects.get(id=payload['id'])

        if vtype == "movie":
            video = Movie.objects.get(id=vid)
            video.users.remove(user.id)
            video.save()
            ser = MovieSer(video)
        else:
            video = Episode.objects.get(id=vid)

            video.users.remove(user.id)
            video.save()
            ser = EpisodeSer(video)
        newdic = ser.data
        newdic["deleted"] = True
        return Response(newdic)


# class CategoryView(APIView):

#     def get(self, request, cat):
#         category = Category.objects.get(title=cat)
#         token = request.query_params['token']
#         try:
#             payload = jwt.decode(token, 'secret', algorithm=['HS256'])
#         except jwt.ExpiredSignatureError:
#             raise AuthenticationFailed('Unauthenticated!')
#         user = User.objects.get(id=payload['id'])
#         data = []
#         movie = Movie.objects.filter(categories__id=category.id)
#         movieser = MovieSer(movie, many=True)
#         episode = Episode.objects.filter(categories__id=category.id)
#         episodeser = EpisodeSer(episode, many=True)
#         [data.append(movie)for movie in movieser.data]
#         [data.append(episode)for episode in episodeser.data]
#         for i in data:
#             if user.id in i['users']:
#                 i['added'] = True

#         return Response(data)


class MyListView(APIView):

    def get(self, request):
        token = request.query_params['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        user = User.objects.get(id=payload['id'])
        data = []
        movie = Movie.objects.filter(users__id=user.id)
        movieser = MovieSer(movie, many=True)
        episode = Episode.objects.filter(users__id=user.id)
        episodeser = EpisodeSer(episode, many=True)
        [data.append(movie)for movie in movieser.data]
        [data.append(episode)for episode in episodeser.data]
        return Response(data)

    def post(self, request):
        pass
