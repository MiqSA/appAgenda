from rest_framework import serializers
from api_agenda.models import Contact, Phone


class PhoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Phone
        fields = ['id', 'number']


class ContactSerializer(serializers.ModelSerializer):
    phones = PhoneSerializer(many=True)

    class Meta:
        model = Contact
        fields = ['id', 'name', 'phones']

    def create(self, validated_data):
        phones_data = validated_data.pop('phones')
        contact = Contact.objects.create(**validated_data)
        for phone_data in phones_data:
            Phone.objects.create(contact=contact, **phone_data)
        return contact

    def update(self, instance, validated_data):
        phones_data = validated_data.pop('phones')
        phones = instance.phones.all()
        phones = list(phones)
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        for phone_data in phones_data:
            phone = phones.pop(0)
            phone.number = phone_data.get('number', phone.number)
            phone.save()
        return instance