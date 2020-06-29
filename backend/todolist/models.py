"""
models.py 는 데이터(모델)을 정의하는 레이어
하나 이상의 모델 클래스를 정의할 수 있으며, 하나의 모델 클래스는 하나의 테이블에 해당함

python 모델 클래스의 생성 및 수정을 데이터베이스에 적용하는 과정을 Migration

__str__() 메소드는 각 튜플의 대표값 설정
"""

from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=10)
    id = models.CharField(max_length=15, primary_key=True)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.id