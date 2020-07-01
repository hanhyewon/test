from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status, generics

from .models import Member
from .serializers import MemberSerializer
from rest_framework.decorators import api_view

import bcrypt
import jwt

#조회(GET) 생성(POST) 수정(PUT) 삭제(DELETE)

@api_view(['POST'])
def member_create(request):
    if request.method == 'POST':
        signup_data = JSONParser().parse(request)

        #비밀번호는 암호화하여 저장하기
        hashed_password = bcrypt.hashpw(signup_data['password'].encode('utf-8'), bcrypt.gensalt())
        decode_password = hashed_password.decode('utf-8')   
        
        #decode_password를 signup_data에 넣는 법 찾기

        member_serializer = MemberSerializer(data=signup_data)

        if member_serializer.is_valid():
            member_serializer.save()
            return JsonResponse({'decode_password': decode_password}, status=status.HTTP_201_CREATED)
        return JsonResponse(member_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def member_signin(request):
    if request.method == "POST":
        signin_data = JSONParser().parse(request)

        try :
            if Member.objects.filter(id = signin_data['id']).exists():
                member = Member.objects.get(id = signin_data['id'])
                #member_create에서 비밀번호 암호화 저장 작업 후,입력받은 비밀번호를 암호화하여 해당 Member의 비밀번호와 비교하기
                member_password = member.password

                if member_password == signin_data['password']:
                    #JWT 토큰 발행, 토큰 값에는 해당 member의 고유 값(id)을 넣어서 진행
                    token = jwt.encode({'id': member.id}, 'secret', algorithm="HS256")
                    return JsonResponse({'token': token.decode('utf-8'), 'message':"로그인 성공"}, status=200)
                
                return JsonResponse({'message': '비밀번호가 틀렸습니다'}, status = 401)
            return JsonResponse({'message': 'ID가 존재하지 않습니다'}, status = 400)
        
        except KeyError as e:
            return JsonResponse({'message' : "INVALID_KEYS_".e},status =400) 


