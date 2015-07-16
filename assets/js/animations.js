  $(function(){
	    $('#slides').superslides({
	    animation: 'fade',
	    hashchange: false,
	    play: 8000
	    });
	    $('a.smooth[href*=#]:not([href=#])').click(function() {
	    	$('body').removeClass("showMenu");
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: (target.offset().top-25)
                }, 1000);
                return false;
              }
            }
        });
	   $('.MobileMenu').click(function(event){
	  	event.preventDefault();
	  	$('body').addClass("showMenu");
	  });
	  $('.MenuCanvas-close').click(function(event){
	  	event.preventDefault();
	  	$('body').removeClass("showMenu");
	  });

	  	var topContactar = $('.Contactar').offset().top;
		//evento de Menu estatico
	    $(window).scroll(function(){
	        //obtener posicion del scroll de la ventana
	        var posicionScrollVentana = $(window).scrollTop();
			var instituteStart = $('#YouInstitute').offset().top;
			var ingenieroStart = $('#Ingeniero').offset().top;
	        
			if(posicionScrollVentana > (instituteStart-300)){
				$('.imgInstitute').addClass('animated rotateIn');
	        }
			if(posicionScrollVentana > (ingenieroStart-300)){
				$('.imgConference').addClass('animated rollIn');
	        }
			if(posicionScrollVentana > (ingenieroStart-20)){
				$('.imgCongreso').addClass('animated flipInX');
	        }
	        //esconder el logo 20px antes
			if(posicionScrollVentana > (topContactar-50)){
				$('.Logo').fadeOut("fast");
	        } else {
				$('.Logo').fadeIn("fast");
	        }
			//posicion del boton
	        if(posicionScrollVentana > (topContactar)){
	            $('.Contactar').addClass("Contactar-top animated bounceInDown");
	        } else {
	            $('.Contactar').removeClass("Contactar-top animated bounceInDown");
	        }



	    });//Menu Estatico

$(".CARRERA-toggleClick").click(function(){
	$(this).siblings(".CARRERA-toggleItem").slideToggle("fast");
	

	if($(this).children(".arrow").hasClass("arrowRot") === true)
	{
		$(this).children(".arrow").removeClass("arrowRot");
	}
	else
		{
			$(this).children(".arrow").addClass("arrowRot");
		}
	
});




  });

