from allauth.account.forms import SignupForm
from django import forms
from django_countries.fields import CountryField
from django_countries.widgets import CountrySelectWidget
from .models import CustomUser



class SimpleSignupForm(SignupForm):
    first_name = forms.CharField(widget=forms.TextInput(attrs={
        'placeholder':'first_name',
    }))
    def save(self, request):
        user = super(SimpleSignupForm, self).save(request)
        user.First_name = self.cleaned_data['first_name']
        user.save()
        return user

    last_name = forms.CharField(widget=forms.TextInput(attrs={
        'placeholder':'last_name',
    }))
    def save(self, request):
        user = super(SimpleSignupForm, self).save(request)
        user.Last_name = self.cleaned_data['last_name']
        user.save()
        return user

    phone = forms.CharField(widget=forms.TextInput(attrs={
        'placeholder':'phone_number',
    }))
    def save(self, request):
        user = super(SimpleSignupForm, self).save(request)
        user.phone = self.cleaned_data['phone']
        user.save()
        return user

    country = CountryField(blank_label='(select country)').formfield(required=False, widget=CountrySelectWidget(attrs={
        'class':'custom-select d-block w-100'
    }))
    def save(self, request):
        user = super(SimpleSignupForm, self).save(request)
        user.country = self.cleaned_data['country']
        user.save()
        return user

    
    Bitcoin_Address = forms.CharField(widget=forms.TextInput(attrs={
        'placeholder':'Your Bitcoin Address',
    }))
    def save(self, request):
        user = super(SimpleSignupForm, self).save(request)
        user.Last_name = self.cleaned_data['Bitcoin_Address']
        user.save()
        return user


