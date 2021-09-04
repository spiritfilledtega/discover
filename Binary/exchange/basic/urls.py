from django.urls import path, include
from .views import Index, Test, About, Affiliate, Contact, Terms, Faq, Register, Login, User, Verify, Fund, Request, Dashboard


app_name = 'basic'


urlpatterns = [
	path('', Index.as_view(), name='index'),
	path('about/', About.as_view(), name='about'),
	path('affiliate/', Affiliate.as_view(), name='affiliate'),
	path('contact/', Contact.as_view(), name='contact'),
	path('terms/', Terms.as_view(), name='terms'),
	path('faq/', Faq.as_view(), name='faq'),
	path('register/', Register.as_view(), name='register'),
	path('login/', Login.as_view(), name='login'),
	path('user/', User.as_view(), name='user'),
	path('verify/', Verify.as_view(), name='verify'),
	path('fund/', Fund.as_view(), name='fund'),
	path('request/', Request.as_view(), name='request'),
	path('dashboard/', Dashboard.as_view(), name='dashboard'),
	path('test/', Test.as_view(), name='test')
]
