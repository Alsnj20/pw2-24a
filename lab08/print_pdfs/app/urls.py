from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('pdf/', views.GeneratePDF.as_view(), name='pdf'),
]
