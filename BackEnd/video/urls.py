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
    path('video/mylist', views.MyListView.as_view()),
    path('video/<int:vid>/<str:vtype>', views.VideoDetails.as_view()),
    path('video/<int:vid>/<str:vtype>/addtomylist', views.AddToMyList.as_view()),
    path('video/<int:vid>/<str:vtype>/deletefrommylist', views.DeleteFromMyList.as_view()),
    path('<str:cat>',views.CategoryView.as_view()),


 ]