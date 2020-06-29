from django.shortcuts import render
from django.http import HttpResponseForbidden
from rest_framework import viewsets
from rest_framework import status, generics

from .models import Member
from .serializers import MemberSerializer

class ListMember(generics.ListAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all();
    serializer_class = MemberSerializer

def createMember(request):
    if request.method == 'POST':
        serializers = MemberSerializer(data=request.data)

        if serializers.is_valid():
            serializers.save()

def insertMember(request):
    name = request.data.get("name")
    id = request.data.get("id")
    password = request.data.get("password")

    Member.objects.insert(name=name, id=id, password=password)

