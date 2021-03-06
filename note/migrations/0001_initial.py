# Generated by Django 2.1 on 2018-08-28 16:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, db_index=True, default=None, max_length=200, null=True, verbose_name='название')),
                ('ready', models.BooleanField(default=True, verbose_name='доступность')),
                ('description', models.TextField(blank=True, default=None, null=True, verbose_name='Описание')),
            ],
        ),
    ]
