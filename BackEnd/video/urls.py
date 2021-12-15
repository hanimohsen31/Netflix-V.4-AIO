from django.contrib import admin
from django.urls import path
from django.urls import include, path
from . import views
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

app_name = 'video'
urlpatterns = [
    path('videos', views.VideoView.as_view()),
    path('video/<int:id>', views.VideoDetails.as_view()),
    # path("all", views.all_videos),
    path('movies',views.MovieView.as_view()),
    # path("movie", views.movie),
    path('serieses', views.SeriesView.as_view()),
    # path("series", views.series),
]
