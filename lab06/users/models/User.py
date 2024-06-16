# school/models/user.py
from django.db import models
import uuid

class User(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255, null=False, blank=False)
    email = models.EmailField(unique=True, null=False, blank=False)

    class Meta:
        abstract = True  # This makes User an abstract base class

    def __str__(self):
        return self.name
