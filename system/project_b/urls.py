from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('cinema/', include('cinema.urls')),
    path('admin/', admin.site.urls),
]
