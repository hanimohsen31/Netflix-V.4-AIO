from django.shortcuts import render

from .serializers import EpisodeSer
from .models import Episode
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q


# Create your views here.

class EpisodeView(APIView):

    def get(self, request):
        episode = Episode.objects.all()
        ser = EpisodeSer(episode, many=True)
        return Response(ser.data)

    def post(self, request):
        pass

