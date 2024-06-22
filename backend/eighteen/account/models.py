from django.db import models

class User(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('NB', 'Non-Binary'),
        ('OT', 'Other')]
      
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=8)
    confirm_password = models.CharField(max_length=8)
    age = models.IntegerField()
    phone = models.IntegerField()
    # gender = models.CharField(max_length=2, choices=GENDER_CHOICES)
    
    def __str__(self):
        return self.first_name + " " + self.last_name + " " + self.email