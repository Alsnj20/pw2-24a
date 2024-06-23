from django.db import models

# One To Many
class Language(models.Model):
  name = models.CharField(max_length=10)
  
  def __str__(self):
    return self.name
  
class Framework(models.Model):
  name = models.CharField(max_length=10)
  language = models.ForeignKey(Language, on_delete=models.CASCADE)

  def __str__(self):
    return self.name
  
# Many to Many
class Movie(models.Model):
  name = models.CharField(max_length=10)
  
  def __str__(self):
    return self.name

class Character(models.Model):
  name = models.CharField(max_length=10)
  movies = models.ManyToManyField(Movie)

  def __str__(self):
    return self.name
  

# Example BD MySQL
class Persona(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    edad = models.IntegerField(blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Persona'