# Creating IntsPrint Views :
from rest_framework import generics , mixins , viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from django.contrib.auth.models import User
from .serializers import *
from .models import *


class ProductView(generics.GenericAPIView, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Product.objects.all().order_by("-id")
    serializer_class = ProductSerializer
    lookup_field = "id"

    def get(self, request, id=None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)



# class ProductView(APIView) :
#     def get(self , request , pid = None) :
#         if pid:
#             products = Product.objects.filter(id = pid)
#             res = ProductSerializer(products , many = True)
#             return Response(res.data)

#         else:
#             products = Product.objects.all()
#             res = ProductSerializer(products , many = True)
#             return Response(res.data)


class CategoryView(viewsets.ViewSet):
    def list(self , request) :
        query = Category.objects.all()
        serialized = CategorySerializer(query , many = True)
        return Response(serialized.data)

    def retrieve(self , request , pk):
        data = Category.objects.get(id = pk)
        serialized = CategorySerializer(data)
        serialized_data = serialized.data
        all_category_products = []
        category_products = Product.objects.filter(category = serialized_data['id'])
        serialized_category_products = ProductSerializer(category_products , many = True)
        serialized_data["category_products"] = serialized_category_products.data
        all_category_products.append(serialized_data)
        return Response(all_category_products)


class ProfileView(APIView):
    authentication_classes = [TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]

    def get(self , request) :
        try :
            query = Profile.objects.get(profile_user = request.user)
            serializer = ProfileSerializer(query)
            res_msg = {"Error" : False , "data" : serializer.data}
        except :
            res_msg = {"Error" : True , "msg" : "SOMETHING WENT WRONG"} 
        return Response(res_msg)

class RegisterView(APIView) :
    def post(self , request) :
        serializers = UserSerializer(data = request.data)
        if serializers.is_valid():
            serializers.save()
            return Response({"Error" : False , "Message" : "The User is Created ." , "data" : register_user_data.data})
        return Response({"Error" : True , "Message" : "The User AlreadyExist"})


class Updateprofile(APIView):
    permission_classes = [IsAuthenticated, ]
    authentication_classes = [TokenAuthentication, ]
    def post(self,request):
        try:
            user = request.user
            query = Profile.objects.get(profile_user = user)
            data = request.data
            serializers = ProfileSerializer(query , data=data , context={"request":request})
            serializers.is_valid(raise_exception = True)
            serializers.save()
            res_msg={"Message":"Profile is Updated"}
        except:
            res_msg={"Message":"Somthing is Wrong Try Agane !"}
        return Response(res_msg)



# class AddressView(APIView):
#     authentication_classes = [TokenAuthentication, ]
#     permission_classes = [IsAuthenticated, ]

#     def post(self , request) :
#         user = request.user
#         data = request.data
#         serializer = AddressSerializer(data = data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({"Error" : False , "Message" : "ADDRESS SAVED"})
#         print(user)
#         print("The Data = " , data)
#         return Response({"Error" : True , "Message" : "Error"})