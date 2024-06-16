# users/models/teacher.py
from django.db import models
from .User import User

class Teacher(User):
    # si usamos Markdown, podemos usar el campo TextField aca o guardarlos en el modelo de Course
    pass
