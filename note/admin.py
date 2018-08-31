from django.contrib import admin
from .models import *


@admin.register(Note)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'ready', 'description']
    fields = ['title', 'ready', 'description']

    class Meta:
        model = Note
