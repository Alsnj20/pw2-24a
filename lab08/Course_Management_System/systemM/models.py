from django.db import models

# Create your models here.
class Student(models.Model):
  name = models.CharField(max_length=100)
  email = models.EmailField(unique=True)

  def __str__(self):
    return self.name
  

class Course(models.Model):
  name = models.CharField(max_length=100)
  teacher = models.CharField(max_length=100)
  students = models.ManyToManyField(Student)
  def __str__(self):
    return self.name