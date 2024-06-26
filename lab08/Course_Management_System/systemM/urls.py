from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('register_student/', views.register_student, name='register_student'),
    path('register_course/', views.register_course, name='register_course'),
    path('list_students/', views.list_students, name='list_students'),
    path('list_courses/', views.list_courses, name='list_courses'),
    path('send_message/', views.send_message, name='send_message'),
    path('certified/', views.generate_certified, name='certified'),
]
