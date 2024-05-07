from django.urls import path
from .views import TestView, register


urlpatterns = [
    path('register/',register),
    path('test/', TestView.as_view()),
    path('test/<int:pk>/', TestView.as_view()),
    path('test/<str:q_type>/', TestView.as_view()),
    path('test/<str:q_type>/<str:q_subject>',TestView.as_view())
]