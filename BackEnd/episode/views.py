import jwt
from accounts.models import User
from .serializers import DislikeSer, LikeSer, EpisodeSer
from .models import Dislike, Like, Episode
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed


class EpisodeView(APIView):

    def get(self, request):
        token = request.query_params['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')
        user = User.objects.get(id=payload['id'])
        episode = Episode.objects.all()
        ser = EpisodeSer(episode, many=True)
        data = ser.data
        for i in data:
            if user.id in i['users']:
                i['added'] = True
        return Response(ser.data)

    def post(self, request):
        pass


class Likeview(APIView):
    def post(self, request):
        print(request.data)
        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        video = Episode.objects.filter(id=request.data['id']).first()

        like = Like.objects.filter(video=video.id, user=user.id).first()

        if like:
            Like.objects.filter(video=video.id).delete()
            response = Response()
            response.data = {'status': False}
            return response

        else:
            dislike = Dislike.objects.filter(
                video=video.id, user=user.id).first()
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
        video = Episode.objects.filter(id=request.data['id']).first()
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


class Dislikeview(APIView):
    def post(self, request):
        token = request.data['token']
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        video = Episode.objects.filter(id=request.data['id']).first()
        dislike = Dislike.objects.filter(video=video.id, user=user.id).first()

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
        video = Episode.objects.filter(id=request.data['id']).first()
        dislike = Dislike.objects.filter(video=video.id, user=user.id).first()

        if dislike:
            response = Response()
            response.data = {'status': True}
            return response

        else:
            response = Response()
            response.data = {'status': False}
            return response
