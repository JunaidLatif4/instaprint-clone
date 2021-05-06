# Creating InstaPrint Models :

from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model) :
    profile_user = models.OneToOneField(User , on_delete = models.CASCADE)
    profile_img = models.ImageField(upload_to = 'profile/' , blank = True)

    def __str__(self):
        return self.profile_user.username

class Category(models.Model):
    cat_title = models.CharField(max_length=300)
    cat_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.cat_title

class Product(models.Model):
    title = models.CharField(max_length=300)
    category = models.ForeignKey(Category , on_delete = models.SET_NULL , blank = True , null = True)
    price = models.IntegerField()
    detail = models.TextField()
    img = models.ImageField(upload_to = "products/")
    date = models.DateField(auto_now_add = True)

    def __str__(self):
        return self.title
    
    
    

