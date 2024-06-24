from django.shortcuts import render
from .models import Course, Student
from .forms import CourseForm, StudentForm

def index(request):
    return render(request, 'index.html')

def register_student(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
      context = {'form': StudentForm()}
      return render(request, 'register_student.html', context)


def register_course(request):
    if request.method == 'POST':
        form = CourseForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
    else:
      context = {'form': CourseForm()}
      return render(request, 'register_course.html', context)