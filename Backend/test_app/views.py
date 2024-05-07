from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request
from .models import Register1

from .models import Test,User
from .serializers import TestSerializer, UserSerializer, ResultSerializer

class TestView(APIView):
    def get(self, request: Request, pk=None,q_type=None,q_subject=None) -> Response:
        if pk is None and q_subject is None and q_type is None:
            tests = Test.objects.all()
            serializer = TestSerializer(tests, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif q_subject==None and q_type==None:
            try:
                test = Test.objects.get(pk=pk)
                serializer = TestSerializer(test)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Test.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        elif pk==None and q_subject==None:
            try:
                test = Test.objects.filter(question_type1=q_type)
                serializer = TestSerializer(test,many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Test.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
        elif pk==None:
            try:
                task = Test.objects.filter(question_type1=q_type,question_subject=q_subject)
                serializer = TestSerializer(task,many=True)
                return Response(serializer.data, status=status.HTTP_200_OK)
            except Test.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)
from django.http import JsonResponse
from .models import Register1
from .serializers import RegisterSerializer

def register(request):
    if request.method == 'GET':
        registers = Register1.objects.all()
        serializer = RegisterSerializer(registers, many=True)
        return JsonResponse(serializer.data, safe=False)