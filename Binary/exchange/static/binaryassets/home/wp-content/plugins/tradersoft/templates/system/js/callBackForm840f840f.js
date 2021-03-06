function callBackForm(){var callBackBlock=jQuery('#callBack'),callBackMessage=jQuery('#callBackMessage'),callBackButton=jQuery('#callBackButton'),callBackSuccessMessageBlock=jQuery('#callBackSuccessMessage'),callBackSuccessMessageButton=jQuery('#callBackSuccessMessageButton'),reCaptchaEnabled=false;this.getCallBackBlock=function(){return callBackBlock;};this.getCallBackMessage=function(){return callBackMessage;};this.getCallBackButton=function(){return callBackButton;};this.getCallBackSuccessMessageBlock=function(){return callBackSuccessMessageBlock;};this.getCallBackSuccessMessageButton=function(){return callBackSuccessMessageButton;};this.init=function(){if(!this.checkReCaptchaEnabled()){this.callBackButtonOn();}};this.checkReCaptchaEnabled=function(){if(jQuery('#reCaptcha').length){reCaptchaEnabled=true;}
return reCaptchaEnabled;};this.validate=function(){var errors={},dataValues={email:this.getCallBackBlock().find('input[name=email]').val(),phone_code:this.getCallBackBlock().find('input[name=phone_code]').val(),phone:this.getCallBackBlock().find('input[name=phone]').val()};if(!dataValues.email||(dataValues.email.indexOf("@")<1)){errors.email=true;}
if(!dataValues.phone_code.length||!dataValues.phone.length){errors.phone=true;}
return errors;};this.send=function(){var t=this,errors=t.validate();t.hideCallBackMessage();t.cleanFormErrors();if(jQuery.isEmptyObject(errors)){t.callBackButtonOff();jQuery.post('',this.getDataForSendRequest(),function(response){if(response.ok){t.showSuccessBlock(response.messages.main);}else{t.showErrors(response.messages);}
t.callBackButtonOn();t.reCaptchaReset();},'json');}else{t.showErrors(errors);}
return false;};this.getDataForSendRequest=function(){var callBackBlock=this.getCallBackBlock();return{ajax:1,tradersoft_submit:'call_back',name:callBackBlock.find('input[name=fullname]').val(),email:callBackBlock.find('input[name=email]').val(),phone_code:callBackBlock.find('input[name=phone_code]').val(),phone:callBackBlock.find('input[name=phone]').val(),country:callBackBlock.find('select[name=country]').val(),g_recaptcha_response:callBackBlock.find('textarea[name=g-recaptcha-response]').val()}};this.showErrors=function(errors){var callBackBlock=this.getCallBackBlock();if('main'in errors){this.showCallbackMessage(errors.main);}
if('g_recaptcha_response'in errors){jQuery('#reCaptcha').parents('div.form-row').addClass('form-error');}
jQuery.each(errors,function(key,value){callBackBlock.find("input[name='"+key+"']").parents('div.form-row').addClass('form-error');});};this.showCallbackMessage=function(message){this.getCallBackMessage().append('<span>'+message+'</span>');this.getCallBackMessage().show();};this.hideCallBackMessage=function(){this.getCallBackMessage().hide();this.getCallBackMessage().empty();};this.cleanFormErrors=function(){callBackBlock.find('div.form-error').removeClass('form-error');};this.showSuccessBlock=function(successMessage){this.setCallBackSuccessMessage(successMessage);this.getCallBackBlock().hide();this.getCallBackSuccessMessageBlock().show();};this.resetForm=function(){this.resetFieldsValue();this.getCallBackSuccessMessageBlock().hide();this.getCallBackBlock().show();this.setCallBackSuccessMessage('');return false;};this.setCallBackSuccessMessage=function(message){this.getCallBackSuccessMessageBlock().find('h3').text(message);};this.resetFieldsValue=function(){var callBackBlock=this.getCallBackBlock(),fullname=callBackBlock.find('input[name=fullname]'),email=callBackBlock.find('input[name=email]'),phone_code=callBackBlock.find('input[name=phone_code]'),phone=callBackBlock.find('input[name=phone]'),country=callBackBlock.find('select[name=country]');fullname.val(fullname.data('default'));email.val(email.data('default'));phone_code.val(phone_code.data('default'));phone.val(phone.data('default'));country.val(country.data('default'));};this.reCaptchaCallBack=function(){var v=grecaptcha.getResponse();if(v.length==0){this.callBackButtonOff();return false;}else{this.callBackButtonOn();return true;}};this.reCaptchaExpiredCallBack=function(){this.callBackButtonOff();return true;};this.reCaptchaReset=function(){if(!reCaptchaEnabled){return false;}
grecaptcha.reset();this.callBackButtonOff();return true;};this.callBackButtonOn=function(){this.getCallBackButton().removeAttr('disabled');return true;};this.callBackButtonOff=function(){this.getCallBackButton().attr('disabled','disabled');return true;};}