from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import User
import json
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import authenticate, login

@csrf_exempt
def registration(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        user_name = data.get('user_name')
        password = data.get('password')
        email = data.get('email')
        
        # Create a new user
        user = User(first_name=first_name, last_name=last_name, user_name=user_name, password=password, email=email)
        user.save()
        
        # For demonstration purposes, we'll just return a success message
        response = {'status': 'success', 'message': 'User registered successfully'}
        return JsonResponse(response)
    else:
        # Return an error if request method is not POST
        response = {'status': 'error', 'message': 'Method not allowed'}
        return JsonResponse(response, status=405)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('user_name')
        password = request.data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
