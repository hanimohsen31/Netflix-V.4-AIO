from django.urls import path
from . import views


app_name = 'video'
urlpatterns = [
    # path('movies', views.MovieView.as_view()),
    path('like/movie', views.Likeview.as_view()),
    path('getlike/movie', views.Getlike.as_view()),
    # path('dislike/movie', views.Dislikeview.as_view()),
    # path('getdislike/movie', views.GetDislike.as_view()),

]
