from django.db import models

class User(models.Model):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    user_name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.user_name

    class Meta:
        pass
