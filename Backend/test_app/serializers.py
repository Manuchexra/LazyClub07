from rest_framework import serializers
# from django.contrib.auth.models import User
from .models import User,Test,Result,Register1

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = '__all__'
class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = '__all__'
class RegisterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Register1
        fields= '__all__'