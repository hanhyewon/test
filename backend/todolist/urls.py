from django.conf.urls import url
from django.urls import path, include
from . import views
from rest_framework import routers

from .views import MemberViewSet

router = routers.DefaultRouter()
router.register(r'signup', MemberViewSet)

urlpatterns = [
   path('', views.ListMember.as_view(), name='ListMember'),
   path('', include(router.urls))
]