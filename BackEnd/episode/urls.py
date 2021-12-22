from . import views
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

app_name = 'episode'
urlpatterns = [
    path('episodes', views.EpisodeView.as_view()),
    # path('video/<int:id>', views.VideoDetails.as_view()),
    # # path("all", views.all_videos),
    # path('movies',views.MovieView.as_view()),
    # # path("movie", views.movie),
    # path('serieses', views.SeriesView.as_view()),
    # # path("series", views.series),

    # path('action', views.Action.as_view()),
    # path('fantasy', views.Fantasy.as_view()),
    # path('scifi', views.SciFi.as_view()),
    # path('anime', views.Anime.as_view()),
    # path('comedy', views.Comedy.as_view()),
    # path('drama', views.Drama.as_view()),
]
