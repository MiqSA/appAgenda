from django.contrib import admin
from django.urls import path, include
from api_agenda.views import ContactsViewSet,PhonesViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'contacts', ContactsViewSet)
router.register(r'phones', PhonesViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]