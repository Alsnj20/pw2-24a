from django.contrib import admin

from lab07.users.models import Student, User


admin.site.register(Student)
admin.site.register(User)
