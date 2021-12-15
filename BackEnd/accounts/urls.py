from django.contrib import admin
from django.urls import path
from django.urls import include, path
from .views import register,Login, Activate,LogoutView

urlpatterns = [
    path('register',register.as_view()),
    path('login',Login.as_view()),
    path('logout',LogoutView.as_view()),
    path('activate/<str:uid>/<str:token>', Activate.as_view(), name='activate'),

]