from django.contrib import admin
from .models import User, Comments, Save, Design

# Register your models here.
admin.site.register(User)
admin.site.register(Comments)
admin.site.register(Save)
admin.site.register(Design)