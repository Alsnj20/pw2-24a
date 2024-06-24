from django.shortcuts import render, redirect
from .models import Course, Student
from .forms import CourseForm, StudentForm, MessageForm, CertifiedForm
from django.core.mail import send_mail, EmailMessage

#Render PDF
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa
import os


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


emailRoot = 'mjarama@unsa.edu.pe' 

def send_message(request):
    if request.method == 'POST':
      form = MessageForm(request.POST)
      if form.is_valid():
         student = form.cleaned_data['student']
         course = form.cleaned_data['course']
         message = form.cleaned_data['message']
         subject = f"Mensaje para el curso {course.name}"
         email = student.email
         send_mail(subject, message, emailRoot, [email], fail_silently=False)
         return redirect('index')
    else:
      context = {'form': MessageForm()}
      return render(request, 'send_message.html', context)
   

def generate_certified(request):
    if request.method == 'POST':
        form = CertifiedForm(request.POST)
        if form.is_valid():
            student = form.cleaned_data['student']
            course = form.cleaned_data['course']
            message = form.cleaned_data['message']
            
            # Render the PDF
            template = get_template('certified.html')
            context = {
                'student': student,
                'course': course,
                'message': message,
                'teacher': course.teacher,
            }
            html = template.render(context)
            
            # Save PDF to a file
            pdf_path = f"{student.name}_diploma.pdf"
            with open(pdf_path, "w+b") as result_file:
                pisa_status = pisa.CreatePDF(html, dest=result_file)
            
            if pisa_status.err:
                return HttpResponse("Error al generar el PDF")

            # Send email with PDF attachment
            subject = f"Certificado del curso {course.name}"
            body = message
            email = EmailMessage(
                subject=subject,
                body=body,
                from_email=emailRoot,
                to=[student.email],
            )
            email.attach_file(pdf_path)
            email.send()
            os.remove(pdf_path)
            return redirect('index')
    else:
        form = CertifiedForm()
    return render(request, 'generate_certified.html', {'form': form})