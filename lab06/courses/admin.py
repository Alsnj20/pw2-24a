from django.contrib import admin
from courses.models import Course
from courses.models import Content
from courses.models import Assignment
from users.models import Student
from users.models import Teacher
from groups.models import Group


# Register your models here.
admin.site.register(Course)
admin.site.register(Content)
admin.site.register(Assignment)
admin.site.register(Student)
admin.site.register(Teacher)
admin.site.register(Group)


