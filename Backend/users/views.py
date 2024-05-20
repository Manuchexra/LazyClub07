from django.shortcuts import render
from rest_framework.views import APIView
from .models import Register
from .serializers import RegisterSerializer
from rest_framework.response import Response
# Create your views here.

class RegisterView(APIView):
    def get(self,request):
        output=[{
            "first_name":output.first_name,
            "last_name":output.last_name,
            "age":output.age,
            "email":output.email,
            "username":output.username,
            "password":output.password
        }for output in Register.objects.all()]
        return Response(output)
    def post(self,request):
        serializer=RegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
