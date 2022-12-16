from django.db import models

# Create your models here.

class User(models.Model):
    # id = models.CharField(max_length=20)
    email = models.CharField(max_length=40)
    password = models.CharField(max_length=8)
    first_name = models.CharField(max_length=25)
    last_name = models.CharField(max_length=25)
    def __str__(self):
        return self.id

class Comments(models.Model):
    # id = models.CharField(max_length=20)
    comments = models.CharField(max_length=50)
    created_at = models.IntegerField(default=0)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    design_id = models.CharField(max_length=20)
    def __str__(self):
        return self.comments

class Save(models.Model):
    # id = models.CharField(max_length=20)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    design_id = models.CharField(max_length=20)
    created_at = models.IntegerField(default=0)
    def __str__(self):
        return self.user

class Design(models.Model):
    # id = models.CharField(max_length=20)
    def __str__(self):
        return self.id