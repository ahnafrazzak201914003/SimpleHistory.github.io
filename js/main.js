
var firebaseConfig = {
    apiKey: "AIzaSyA6F125jGXkCH__9xtN5b3KVc13yRl9kIA",
    authDomain: "simple-history-by-ahnaf.firebaseapp.com",
    databaseURL: "https://simple-history-by-ahnaf.firebaseio.com",
    projectId: "simple-history-by-ahnaf",
    storageBucket: "simple-history-by-ahnaf.appspot.com",
    messagingSenderId: "201857902847",
    appId: "1:201857902847:web:b27924f00a73e3fc9304ca",
    measurementId: "G-ZJLB88X8C4"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');

document.getElementById('main-contact-form').addEventListener('submit',submitForm);


function submitForm(e){
e.preventDefault();
var name = getInputVal('name');
var company = getInputVal('company');
var email = getInputVal('email'); 
var phone = getInputVal('phone');
var message = getInputVal('message');
var subject= getInputVal('subject');

saveMessage(name,company,email,phone,subject,message);



document.querySelector('.alert').style.display = 'block';


setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);


document.getElementById('main-contact-form').reset();

setTimeout(function(){
    document.location.href="./index.html";
  },3050);

}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name,company,email,phone,subject,message){

    var newMessageRef= messagesRef.push();

    newMessageRef.set({
    name:name,
    address:company,
    email:email,
    phone:phone,
    subject:subject,
    message:message
    

    });
}




jQuery(function($) {'use strict',

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	// Contact form
	// var form = $('#main-contact-form');
	// form.submit(function(event){
	// 	event.preventDefault();
	// 	var form_status = $('<div class="form_status"></div>');
	// 	$.ajax({
	// 		url: $(this).attr('action'),

	// 		beforeSend: function(){
	// 			form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
	// 		}
	// 	}).done(function(data){
	// 		form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
	// 	});
	// });

	
	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	
});