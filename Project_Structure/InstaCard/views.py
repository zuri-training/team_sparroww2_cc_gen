from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


# Create your views here.
@login_required
def home (request):
    user = request.user.username
    return render(request, 'templates/dashboard.html', {'username':user})

def signup(request):
    if request.user.is_authenticated:
        return redirect('login')

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password1")
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('login') # shouldnt be login?
        else:
            form = UserCreationForm()
            return render(request, 'templates/signup.html', {'form':form})
    else:
        form = UserCreationForm()
        return render(request, 'templates/signup.html', {'form':form})

def login(request):
     if request.user.is_authenticated:
        return redirect('home')

     if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password1")
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('home')
        else:
            form = UserCreationForm()
            return render(request, 'templates/login.html', {'form':form})
     else:
        form = UserCreationForm()
        return render(request, 'templates/login.html', {'form':form})


def signout(request):
    logout(request)
    return redirect('login')

def dashboard(request):
    login(request)
    return redirect('dashboard')


    