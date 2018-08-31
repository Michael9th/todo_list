from note.models import Note
from rest_framework import serializers


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('id', 'title', 'description', 'ready')

    # @classmethod
    # def get_extra_actions(cls):
    #     return []
