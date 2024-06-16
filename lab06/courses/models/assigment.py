from django.db import models
from courses.models import Course

class Assignment(models.Model):
    title = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    due_date = models.DateTimeField()
    course = models.ForeignKey(Course, related_name='assigments', on_delete=models.CASCADE)
    teacher = models.ForeignKey('users.Teacher', on_delete=models.CASCADE)
    done_by = models.ForeignKey('users.Student', null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.title
