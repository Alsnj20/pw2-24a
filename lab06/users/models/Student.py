# users/models/student.py
from django.db import models
from .User import User
from courses.models import Course

class Student(User):
    courses = models.ForeignKey(Course, related_name='students', on_delete=models.CASCADE)
