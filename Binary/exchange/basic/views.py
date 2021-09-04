from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class Index(TemplateView):
	template_name = 'index.html'

class About(TemplateView):
	template_name = 'about.html'

class Affiliate(TemplateView):
	template_name = 'affiliate.html'

class Contact(TemplateView):
	template_name = 'contact.html'

class Terms(TemplateView):
	template_name = 'terms.html'

class Faq(TemplateView):
	template_name = 'faq.html'

class Register(TemplateView):
	template_name = 'register.html'

class Login(TemplateView):
	template_name = 'login.html'

class User(TemplateView):
	template_name = 'user.html'

class Verify(TemplateView):
	template_name = 'verify.html'

class Fund(TemplateView):
	template_name = 'fund.html'

class Request(TemplateView):
	template_name = 'request.html'

class Dashboard(TemplateView):
	template_name = 'dashboard.html'

class Test(TemplateView):
	template_name = 'test.html'
	


