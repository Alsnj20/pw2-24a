from django.db import models
from courses.models import Course

class Content(models.Model):
  course = models.ForeignKey(Course, on_delete=models.CASCADE)
  title = models.CharField(blank=False, max_length=255, null=False)
  body = models.TextField(blank=True, null=False)

  class Meta:
    ordering = ['course', 'title', 'body']

  def __str__(self):
    return self.title