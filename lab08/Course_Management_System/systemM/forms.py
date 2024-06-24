from django import forms
from .models import Student, Course

class StudentForm(forms.ModelForm):
  class Meta:
    model = Student
    fields = ['name', 'email']
    labels = {
      'name': 'Nombre del Estudiante',
      'email': 'Correo Electrónico'
    }

class CourseForm(forms.ModelForm):
  class Meta:
    model = Course
    fields = ['name', 'teacher', 'students']
    widgets = {
      'students': forms.CheckboxSelectMultiple
    }
    labels = {
      'name': 'Nombre del Curso',
      'teacher': 'Profesor',
      'students': 'Estudiantes'
    }

  