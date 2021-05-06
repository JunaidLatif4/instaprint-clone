"""     MODEL SERIALIZERS       """
from django.contrib.auth import get_user_model

from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta :
        model = Product
        fields = "__all__"
        depth = 1

class CategorySerializer(serializers.ModelSerializer):
    class Meta :
        model = Category
        fields = "__all__"


User = get_user_model()
class UserSerializer(serializers.ModelSerializer) :
    class Meta :
        model = User
        fields = ("id" , 'username' , 'password' , 'first_name' , 'last_name' , 'email')

    def create(self , validated_date) :
        new_user = User.objects.create_user(**validated_date)
        Token.objects.create(user = new_user)
        Profile.objects.create(profile_user = new_user)
        return User


class ProfileSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Profile
        fields = "__all__"
        read_only_fields = ['profile_user']

    def validate(self , attrs):
        attrs['profile_user'] = self.context['request'].user
        return attrs

    def to_representation(self , instance) :
        response = super().to_representation(instance)
        response['profile_user'] = UserSerializer(instance.profile_user).data
        return response
