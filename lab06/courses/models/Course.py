from django.db import models
from users.models import Teacher

class Course(models.Model):
  title = models.CharField(max_length=255, blank=False, null=False)
  description = models.TextField(blank=True, null=False)
  #teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
