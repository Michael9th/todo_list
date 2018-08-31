from django.db import models


class Note(models.Model):
    title = models.CharField(max_length=200, blank=True, null=True, default=None, db_index=True, verbose_name='название')
    ready = models.BooleanField(default=True, verbose_name='сделано')
    description = models.TextField(blank=True, null=True, default=None, verbose_name='Описание')

    def __str__(self):
        return "{}".format(self.title)

