from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('movie/', views.movie_overview),
    path('movie/<int:pk>/', views.movie_detail),
    path('movie/<int:pk>/update/', views.movie_update),
    path('movie/create/', views.movie_create),
    path('movie/<int:pk>/delete/', views.movie_delete),
    path('files/<int:pk>/', views.get_file),
    path('rooms/create/', views.room_create),
    path('rooms/', views.room_overview),
    path('shows/create/', views.show_create),
    path('shows/', views.show_overview),
    path('shows/<int:pk>/', views.show_detail),
    path('shows/<int:pk>/reserve/', views.reserve_seat)
]
