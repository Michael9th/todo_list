from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from note import views

app_name = 'note'

urlpatterns = [
    url(r'^api/notes/$', views.AllNote.as_view()),
    url(r'^api/ready_notes/$', views.ListReadyNotes.as_view()),
    url(r'^api/no_ready_notes/$', views.ListNotReadyList.as_view()),
    url(r'^api/notes/(?P<pk>[0-9]+)/$', views.NoteDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
