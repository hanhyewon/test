from django.conf.urls import url
from . import views

urlpatterns = [
   url(r'^api/signup$', views.member_create),
   url(r'^api/signin$', views.member_signin)
   #path('', views.ListMember.as_view(), name='ListMember'),
]