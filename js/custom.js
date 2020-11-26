
function myValidation(){ 
	var name =document.forms['contactForm']['name'].value;
	var email =document.forms['contactForm']['email'].value;
	var phone =document.forms['contactForm']['phone'].value;
	var message =document.forms['contactForm']['message'].value;
	var error=[];
	if(name =='' || name.length<3){
		error[0]="Name Must Be At Least 3 Letters";
		document.getElementById('name-error').innerHTML=error[0];
	}else{
		document.getElementById('name-error').innerHTML='';
	}
	if(email =='' || email.length<10){
		error[1]="Please insert a valid Email Id";
		document.getElementById('email-error').innerHTML=error[1];
	}else{
		document.getElementById('email-error').innerHTML='';
	}
	if(phone =='' || phone.length<11){
		error[2]="Please insert a valid Phone Number";
		document.getElementById('phone-error').innerHTML=error[2];
	}else{
		document.getElementById('phone-error').innerHTML='';
	}
	if(message =='' || message.length<20){
		error[3]="Message Must Be At Least 20 Letters";
		document.getElementById('message-error').innerHTML=error[3];
	}else{
		document.getElementById('message-error').innerHTML='';
	}

	if(error.length>0){
	return false;
	
	}
}
function myfocus(x){
	x.style.background='#ffffffa6';
}




	/* -- === jQuery Start === -- */

$(document).ready(function(){
	
	
	/* -- === Nav Bar/Menu Bar Active Start === -- */
		$('#main-menu').on('click','li',function(){
			$('#main-menu li.active').removeClass('active');
			$(this).addClass('active');
		});
	
	
	/* -- === Nav Bar/Menu Bar Start === -- */
	$('#mobile-icon').click(function(){
		$('#main-menu ul').slideToggle(1000);
	});
	$(window).resize(function(){
		if($(window).width ()>576){
			$('#main-menu ul').show();
		}else{
			$('#main-menu ul').hide();
		}
	}); 
	
	/* -- === Upper Button Scroll Start === -- */
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		
		if(x>1000){
			$('#upper').fadeIn (1000);
		}else{
			$('#upper').fadeOut (1000);
		}
		
	});
	
	$('#upper').click(function(){
		$('html').animate({scrollTop:0},2000);
	});
	
	
	
	
	
});