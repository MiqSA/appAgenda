from django.contrib import admin
from api_agenda.models import Contact, Phone


class Contacts(admin.ModelAdmin):
    list_display = ('id', 'name')
    list_display_links = ('id', 'name')
    search_fields = ('name',)


class Phones(admin.ModelAdmin):
    list_display = ('id', 'number')
    list_display_links = ('id', 'number')
    search_fields = ('number',)


admin.site.register(Contact, Contacts)
admin.site.register(Phone, Phones)
