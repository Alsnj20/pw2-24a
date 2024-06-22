from django.db import models

class Course(models.Model):
  code = models.CharField(max_length=10, unique=True, primary_key=True, defaul='')
  name = models.CharField(max_length=255, blank=False, null=False)
  description = models.TextField(blank=True, null=False)

  #teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
  def __str__(self):
    return f"({self.code}) {self.name}"
