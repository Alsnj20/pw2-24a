# users/models/student.py
from django.db import models
from .User import User
from courses.models import Course

class Student(User):
    courses = models.ManyToManyField(Course, related_name='students')
