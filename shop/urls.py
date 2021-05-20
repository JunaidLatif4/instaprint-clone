"""     InstaPrint Shop URLS        """
from django.urls import path , include
from rest_framework import routers
from .views import *

route = routers.DefaultRouter()
route.register('cate' , CategoryView , basename = "CategoryView")

urlpatterns = [
    path('' , include(route.urls)),
    path('shop/' , ProductView.as_view() , name = "ProductView"),
    path('shop/<int:id>' , ProductView.as_view() , name = "ProductIDView"),
    path('profile/' , ProfileView.as_view() , name = "ProfileView" ),
    path('register/' , RegisterView.as_view() , name = "RegisterView"),
    path('updateprofile/' , Updateprofile.as_view() , name = "Address")
    # path('login/' , ProfileView.as_view() , name = "ProfileView" ),


]


