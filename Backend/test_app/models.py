from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class User(models.Model):
    first_name=models.CharField(max_length=30)
    last_name=models.CharField(max_length=30)
    login=models.CharField(max_length=15)
    password=models.CharField(max_length=15)
    class_lebal=models.IntegerField()
    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name}"
class Test(models.Model):
    
    MY_CHOICES = [
        ('Katta sinflar', 'Katta sinflar'),
        ('Kichik sinflar', 'Kichik sinflar'),
    ]
    subjects=[
        ('Dasturlash', 'Dasturlash'),
        ('Matematika', 'Matematika'),
        ('Fizika','Fizika')
    ]
    question_str=models.TextField(blank=True) 
    question_img=models.ImageField(blank=True)
    question_type1=models.CharField(max_length=100,choices=MY_CHOICES)
    question_subject=models.CharField(max_length=15,choices=subjects)
    option1=models.TextField()
    option2=models.TextField()
    option3=models.TextField()
    option4=models.TextField()
    def __str__(self) -> str:
        return f"{self.question_str} {self.question_img}"
class Result(models.Model):
    check_student=models.IntegerField()
    user_id=models.OneToOneField(User,on_delete=models.CASCADE)
    start_time=models.DateTimeField()
    end_time=models.DateTimeField(auto_now=True)
    def __str__(self) -> str:
        return f"{self.check_student}" 
class Register1(models.Model):
    fname=models.CharField(max_length=100)
    lname=models.CharField(max_length=100)
    age=models.IntegerField()
    email=models.EmailField()
    password=models.CharField(max_length=15)
    def __str__(self) ->str:
        return self.fname
    