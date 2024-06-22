from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from account.models import User
from rest_framework import status


@api_view(['GET'])

def users(request):
    users = User.objects.all()
    serializedUsers = UserSerializer(users, many = True)
    return Response(serializedUsers.data)

@api_view(['GET'])
def user(request,pk):
    user = User.objects.get(id=pk)
    serializedUser = UserSerializer(user, many = False)
    return Response(serializedUser.data)
 
@api_view(['POST'])
def addUser(request):
    serializedUser = UserSerializer(data=request.data)
    if serializedUser.is_valid():
        serializedUser.save()
    
    return Response(serializedUser.data)

@api_view(['POST'])
def updateUser(request,pk):
    user = User.objects.get(id=pk)
    serializedUser = UserSerializer(user,data=request.data,many=False)
    if serializedUser.is_valid():
        serializedUser.save()
    
    return Response(serializedUser.data,status=status.HTTP_200_OK)
@api_view(['DELETE'])

def deleteUser(request,pk):
    user = User.objects.get(id=pk)
    user.delete()

    return("User deleted")
    