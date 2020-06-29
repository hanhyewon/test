"""
쿼리셋, 모델 인스턴스 등의 복잡한 데이터를 json, xml 등의 데이터로 변환
"""

from rest_framework import serializers
from .models import Member

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = (
            "name",
            "id",
            "password"
        )