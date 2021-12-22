from django.http import response
from django.shortcuts import render
from django.views import View
from rest_framework.views import  APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed

from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from .tokens import account_activation_token
from django.core.mail import EmailMessage
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.sites.shortcuts import get_current_site
import jwt, datetime

from .models import User
from  .serializers import userserializer
# Create your views here.
class register(APIView):
    def post(self,request):
        print(request.data)
        user = User.objects.filter(email=request.data['email'])
        if not user.exists():
            serializer=userserializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            # print(user)
            user = User.objects.get(email=request.data['email'])
            # print(user)
            # print(user.name)
            mail_subject = 'Activate your account.'
            current_site = get_current_site(request)
            uid = urlsafe_base64_encode(force_bytes(user.id))
            token = account_activation_token.make_token(user)
            activation_link = "{0}{1}{2}{3}/{4}".format("http://",current_site,"/user/activate/", uid, token)
            message = "Hello {0},\n {1}".format(user.name + ""+'this', activation_link)
            to_email = request.data['email']
            email = EmailMessage(mail_subject, message, to=[to_email])
            email.send()
            return HttpResponse('Please confirm your email address to complete the registration and can use the email')
        else:
            return HttpResponse("this email is used please try again")


class Login(APIView):
    def post(self,request):
        email= request.data['email']
        print(email)
        password = request.data['password']
        user =User.objects.filter(email=email)
        if not user.exists():
            return  Response({'serialize':{"is_active":False}})
        user=user.first()
        print(user.email)
        if user is  None:
            raise AuthenticationFailed("user not found")
        if  not user.check_password(password):
            raise AuthenticationFailed("password incorrect")
        

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256').decode('utf-8')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        
        if not token:
            raise AuthenticationFailed('Unauthenticated!')
        try:
            payload = jwt.decode(token, 'secret', algorithm=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        serializer = userserializer(user)
        print(serializer.data)
        date= serializer.data["is_active"]
        print(date)
        response.data = {
            'jwt': token, 'is_active':date ,'i':user.id}

        return response


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response




class Activate(View):
    def get(self, request, uid, token):
        try:
            uid = force_text(urlsafe_base64_decode(uid))
            print(uid)
            user = User.objects.get(id=uid)
            print(user)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        if user is not None and account_activation_token.check_token(user, token):
            # activate user and login:
            user.is_active = True
            print(user.is_active)
            user.save()

            return HttpResponse('Activation link is valid')
        else:
            return HttpResponse('Activation link is invalid!')
