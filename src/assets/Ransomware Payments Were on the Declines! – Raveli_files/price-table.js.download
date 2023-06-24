jQuery(document).ready(function($){
  'use strict';

  if($('.price-period-switch').length){
    $('.price-period-switch').each(function(){

      var tgl_btn = $(this).find('.period'),totes,target_box, ac_btn, prices;
      if($(this).data('target') !=''){
        target_box = $('#'+ $(this).data('target'));
      }
      else{
        target_box = $(this).closest('section.elementor-section');
      }

      if( typeof target_box !='undefined'){
        prices = $(target_box).find('.temegum-price-table.double-period');
      }

       tgl_btn.each(function(){
        $(this).on("click", function(e){
          e.preventDefault();
          var $this= $(this);

          tgl_btn.removeClass('active'),
          $this.addClass('active');

          if(typeof prices !='undefined' ){

            prices.each(function(){
              ac_btn = $(this).find('.price-btn .elementor-button');
              var reg_price = $(this).find('.regular-price'),anual_price = $(this).find('.anual-price'),regular_link;
              var reg_period = $(this).find('.regular-period'),anual_period = $(this).find('.anual-period'),anual_link;
              

              if(ac_btn.length){
                regular_link = ac_btn.data('regular');
                anual_link = ac_btn.data('anual');
              }

                if($this.hasClass('anual-period')){
                  if( ac_btn.length ) { try{  ac_btn.attr('href',anual_link);}catch(er){ alert(er);} }
                  reg_price.hide();
                  reg_period.hide();
                  anual_price.show();
                  anual_period.show();

                }else{
                  if( ac_btn.length ) { try{  ac_btn.attr('href',regular_link);}catch(er){ alert(er);} }
                  anual_price.hide();
                  anual_period.hide();
                  reg_price.show();                  
                  reg_period.show();
              }
            });
          }
        });
       });
    });
  }

});