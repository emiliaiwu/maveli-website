jQuery(document).ready(function($){
	"use strict";

  if($('.popover-button').length){
    $('.popover-button').each(function(){
	    	var p_btn = $(this),popover = $(this).closest('.popover-button-wrapper'), p_content = popover.find('.popover-box');

			if(!p_content.length){
				p_content= $(document.createElement('div')).addClass('popover-box');

				var p_title = p_btn.data('pop'), p_text = p_btn.data('pop-text'), p_align = p_btn.data('pop-align');
				var close_btn = $(document.createElement('span')).addClass('close-pop');

				p_content.prepend(close_btn);

				if(!p_align || p_align==''){ p_align = 'bottom'; }

				p_content.addClass('pop-' + p_align);

				if(p_title && p_title!=''){
					p_content.prepend('<h4>'+ p_title +'</h4>');
				}

				if(p_text && p_text!=''){
					p_content.append('<div>'+ p_text +'</div>');
				}
				p_btn.after(p_content);

				close_btn.on('click',function(e){
					e.preventDefault();
					$(this).closest('.popover-button-wrapper').removeClass('pop-it');

				});
			}

	        $(this).on("click", function(e){
	          e.preventDefault();
	          $(this).closest('.popover-button-wrapper').toggleClass('pop-it');
	        });

	    });
	}

	function prepare_gummenu(menus){

		$('.arrow', menus).each(function(f, index){

			$(index).on('click', function(e){
				e.preventDefault();
				var curmenu = $(this).closest('li');
				curmenu.siblings().removeClass('menu-open');
				curmenu.toggleClass('menu-open');
			});
		});

	}


	if($('.gum-menu').length){
		$('.gum-menu').each(function(){

			var themenu = $(this), menuwrapper = themenu.closest('.nav-wrapper'), btn = menuwrapper.find('.toggle-gum-menu');

			prepare_gummenu(themenu);

			btn.unbind('click').on('click', function(e){
			e.preventDefault();
			themenu.toggleClass('toggle-collapse');

			});

		});
	}

    if($("#totop_btn").length){
     $(window).on('scroll', function () {

        var winHeight = $(window).height();

        if($('#wpadminbar').length){
          winHeight -= $('#wpadminbar').outerHeight();
        }
        if ($(this).scrollTop() > winHeight) {
          $("#totop_btn").fadeIn();
        } else {
          $("#totop_btn").fadeOut();
        }
      });

     $("#totop_btn").on('click', function () {
        $("body,html").animate({
          scrollTop: 0
        },
        600);
     });
    }


});