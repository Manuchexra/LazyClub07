from django.urls import path
from . import views
from .views import LoginView

urlpatterns = [
    path('registration/', views.registration, name='registration'),
    path('login/', LoginView.as_view(), name='login'),
]  