from django.shortcuts import render
from .serializers import MovieSer
from .models import Movie
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q

# Create your views here.
class MovieView(APIView):

    def get(self, request):
        movie = Movie.objects.all()
        ser = MovieSer(movie, many=True)
        return Response(ser.data)

    def post(self, request):
        pass
