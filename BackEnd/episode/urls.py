from . import views
from django.urls import path


app_name = 'episode'
urlpatterns = [
    # path('episodes', views.EpisodeView.as_view()),
    path('like/episode', views.Likeview.as_view()),
    path('getlike/episode', views.Getlike.as_view()),
    # path('dislike/episode', views.Dislikeview.as_view()),
    # path('getdislike/episode', views.GetDislike.as_view()),


]
