from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('movie/', views.movie_overview),
    path('movie/create/', views.movie_create)
]
