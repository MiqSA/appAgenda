from rest_framework import viewsets
from api_agenda.models import Contact, Phone
from api_agenda.serializer import ContactSerializer, PhoneSerializer


class ContactsViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class PhonesViewSet(viewsets.ModelViewSet):
    queryset = Phone.objects.all()
    serializer_class = PhoneSerializer
