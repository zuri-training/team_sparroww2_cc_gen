from django.urls import path
from . import views 

urlpatterns = [
    path('', views.landing, name="landing"),
]

# urlpatterns = [
#     path('home/', views.home, name='home'),
#     path('signup/', views.signup, name='signup'),
#     path('login/', views.login, name='login'),
#     path('dashboard/', views.dashboard, name='dashboard'),
#     path('signout/', views.signout, name='signout'),
# ]