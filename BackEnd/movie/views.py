import jwt
from accounts.models import User
from .serializers import  LikeSer, MovieSer
from .models import  MovieLike, Movie
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed


def setlikes(like,action):
    if (isinstance( like,dict)):
        if action== "like":
            like["like"]=True
            like["dislike"]=False
        if action== "nolike":
            like["like"]=False
        if action== "dislike":
            like["like"]=False
            like["dislike"]=True
        if action== "nodislike":
            like["dislike"]=False
        return like  
    else:  
        if action== "like":
            like.like=True
            like.dislike=False
        if action== "nolike":
            like.like=False

        if action== "dislike":
            like.like=False
            like.dislike=True
        if action== "nodislike":
            like.dislike=False
        return like

class Likeview(APIView):
    def post(self, request):
        print(request.data)
        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.get(id=payload['id'])
        video=Movie.objects.get(id=request.data['id'])
        action=request.data['action']
        like = MovieLike.objects.filter(video=video.id, user=user.id).first()

        print(f'my like{like}')

        if like:
            
            like=setlikes(like,action)

            like.save()
            response = Response()
            response.data = {'statuslike': like.like,'statusdislike':like.dislike}
            return response

        else:
            data =setlikes( {'video': video.id, 'user': user.id, 'dislike': request.data['dislike'],'like':request.data['like']},action)
            print()
            ser = LikeSer(data=data)
            ser.is_valid(raise_exception=True)
            ser.save()
            response = Response()
            response.data = {'statuslike': request.data['like'], 'statusdislike': request.data['dislike']}
            return response


class Getlike(APIView):
    def post(self, request):
        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        video = Movie.objects.filter(id=request.data['id']).first()
        print("1")
        like = MovieLike.objects.filter(video=video.id, user=user.id).first()

        print("2")

        if like:
            response = Response()
            response.data = {'statuslike': like.like,'statusdislike':like.dislike}
            return response

        else:
            response = Response()
            response.data = {'statuslike': False,'statusdislike':False}
            return response

