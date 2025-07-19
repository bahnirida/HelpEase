from django.contrib import admin
from django.urls import path, include
from support_bot import views  # your app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),  # 👈 define your homepage
]
