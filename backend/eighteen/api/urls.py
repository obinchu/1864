from django.urls import path
from . import views

urlpatterns = [
    path('users/',views.users,name='all-users'),
    path('add-user/',views.addUser,name='add-user'),
    path('user/<str:pk>/',views.user,name='specific-user'),
    path('update-user/<str:pk>/',views.updateUser,name='update-user'),
    path('delete-user/<str:pk>/',views.deleteUser,name='delete-user'),
]
