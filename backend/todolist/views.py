from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status, generics

from .models import Member
from .serializers import MemberSerializer
from rest_framework.decorators import api_view

#조회(GET) 생성(POST) 수정(PUT) 삭제(DELETE)

@api_view(['POST'])
def member_create(request):
    if request.method == 'POST':
        member_data = JSONParser().parse(request)
        member_serializer = MemberSerializer(data=member_data)
        #비밀번호는 암호화하여 저장하기

        if member_serializer.is_valid():
            member_serializer.save()
            return JsonResponse(member_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(member_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def member_signin(request):
    if request.method == "POST":
        data = JSONParser().parse(request)

        if Member.objects.filter(id=data['id']).exists():
            member = Member.objects.get(id=data['id'])
            #입력받은 비밀번호를 암호화하여 해당 Member의 비밀번호와 비교하기
            member_password = member.password

            if member_password == data['password']:
                #JWT 토큰 발행 작업하기
                return JsonResponse({'message':"로그인 성공"}, status=200)
            return JsonResponse({'message':'로그인 실패'})

