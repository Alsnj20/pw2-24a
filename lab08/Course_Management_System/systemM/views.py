from django.shortcuts import render, redirect
from .models import Course, Student
from .forms import CourseForm, StudentForm, MessageForm
from django.core.mail import send_mail

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
    else:
      context = {'form': CourseForm()}
      return render(request, 'register_course.html', context)
    

def list_students(request):
    students = Student.objects.all()
    context = {'students': students}
    return render(request, 'list_students.html', context)

def list_courses(request):
    courses = Course.objects.all()
    context = {'courses': courses}
    return render(request, 'list_courses.html', context)


def send_message(request):
    if request.method == 'POST':
      form = MessageForm(request.POST)
      if form.is_valid():
         student = form.cleaned_data['student']
         course = form.cleaned_data['course']
         message = form.cleaned_data['message']
         subject = f"Mensaje para el curso {course.name}"
         email = student.email
         emailRoot = 'mjarama@unsa.edu.pe'
         send_mail(subject, message, emailRoot, [email], fail_silently=False)
         return redirect('index')
    else:
      context = {'form': MessageForm()}
      return render(request, 'send_message.html', context)
   