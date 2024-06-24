from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('register_student/', views.register_student, name='register_student'),
    path('register_course/', views.register_course, name='register_course'),
]
