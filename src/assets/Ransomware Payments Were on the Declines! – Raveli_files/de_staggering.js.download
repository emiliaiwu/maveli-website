class DeStaggeringHandlerClass extends elementorModules.frontend.handlers.Base {
    getDefaultSettings() {
        return {
            selectors: {
                wrapper: '.de_staggering_hover_yes',
                widget_container: '.de_staggering_animation_yes',
            },
        };
    }

    getDefaultElements() {
        const selectors = this.getSettings( 'selectors' );
        return {
            $wrapper: this.$element.find( selectors.wrapper ),
            $widget_container: this.$element.find( selectors.widget_container ),
        };
    }

    do_frontend_animation() {
      if (!this.$element.hasClass('de_staggering_hover_yes')) {
        return
      }

      var ele = this.$element.get()
      
      var element = ele[0]
      var column_classes = element.classList

      var delay_increment = 500, parent_animation_mousehover = 'fadeIn', parent_animation_mouseout = 'fadeOut', run_animation = false 
      jQuery.each(column_classes, (index, value) => {
        if ( value.search('de_staggering_parent_animation_mousehover_') === 0 ) {
          parent_animation_mousehover = value.replace('de_staggering_parent_animation_mousehover_','')
        }

        if ( value.search('de_staggering_parent_animation_mouseout_') === 0 ) {
          parent_animation_mouseout = value.replace('de_staggering_parent_animation_mouseout_','')
        }
        
        if ( value.search('de_staggering_child_delay_') === 0 ) {
          delay_increment = parseInt(value.replace('de_staggering_child_delay_',''))
        }

        if ( value.search('de_staggering_run_animation') === 0 ) {
          run_animation = true
        }
      })

      // On Mouse Hover on Column
      element.addEventListener("mouseenter", function(e) {
        e.preventDefault;

        var run_animation = element.classList.contains('de_staggering_run_animation')


        // find all animated element wrappers with data-anim attribute
        var childs = element.querySelectorAll(".de_staggering_animation_yes")
        var delay = 0

        Array.prototype.forEach.call(childs, function (el, index) { 

          delay = delay + delay_increment

          var arr_classes = el.classList

          var animation_mousehover = 'inherited'
          var animation_mouseout = 'inherited'

          jQuery.each(arr_classes, (index, value) => {
            if ( value.search('de_staggering_animation_mousehover_') === 0 ) {
              animation_mousehover = value.replace('de_staggering_animation_mousehover_','')
            }

            if ( value.search('de_staggering_animation_mouseout_') === 0 ) {
              animation_mouseout = value.replace('de_staggering_animation_mouseout_','')
            }

          })

          if ( animation_mousehover === 'inherited' ) {
            animation_mousehover = parent_animation_mousehover
          }

          if ( animation_mouseout === 'inherited' ) {
            animation_mouseout = parent_animation_mouseout
          }

          if (run_animation) {
            var animation_delay = 'animation-delay:' + delay + 'ms'
            el.setAttribute('style',animation_delay)
  
            // -> removing the class
            el.classList.remove("animate__animated");
            el.classList.remove("animate__" + animation_mousehover);
            el.classList.remove("animate__" + animation_mouseout);
            
            // -> triggering reflow /* The actual magic */
            // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
            // Oops! This won't work in strict mode. Thanks Felis Phasma!
            // element.offsetWidth = element.offsetWidth;
            // Do this instead:
            void el.offsetWidth;
            
            // -> and re-adding the class
            el.classList.add("animate__animated");
            el.classList.add("animate__" + animation_mousehover);
          } else { //if (run_animation)
            // -> removing the class
            el.classList.remove("animate__animated");
            el.classList.remove("animate__" + animation_mousehover);
            el.classList.remove("animate__" + animation_mouseout);

            // -> triggering reflow /* The actual magic */
            // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
            // Oops! This won't work in strict mode. Thanks Felis Phasma!
            // element.offsetWidth = element.offsetWidth;
            // Do this instead:
            void el.offsetWidth;
          } //if (run_animation)

        })
        
      }, false);

      // On Mouse Leave from Column
      element.addEventListener("mouseleave", function(e) {
        e.preventDefault;

        var run_animation = element.classList.contains('de_staggering_run_animation')
        
          // find all animated element wrappers with data-anim attribute
          var childs = element.querySelectorAll(".de_staggering_animation_yes");
          var delay = 0
  
          Array.prototype.forEach.call(childs, function (el, index) { 
  
            delay = delay + delay_increment
  
            var arr_classes = el.classList
  
            var animation_mousehover = 'inherited'
            var animation_mouseout = 'inherited'
            
            jQuery.each(arr_classes, (index, value) => {
              if ( value.search('de_staggering_animation_mousehover_') === 0 ) {
                animation_mousehover = value.replace('de_staggering_animation_mousehover_','')
              }
  
              if ( value.search('de_staggering_animation_mouseout_') === 0 ) {
                animation_mouseout = value.replace('de_staggering_animation_mouseout_','')
              }
            })
  
            if ( animation_mousehover === 'inherited' ) {
              animation_mousehover = parent_animation_mousehover
            }
  
            if ( animation_mouseout === 'inherited' ) {
              animation_mouseout = parent_animation_mouseout
            }

            if (run_animation) {
              var animation_delay = 'animation-delay:' + delay + 'ms'
              el.setAttribute('style',animation_delay)
    
              // -> removing the class
              el.classList.remove("animate__animated");
              el.classList.remove("animate__" + animation_mousehover);
              el.classList.remove("animate__" + animation_mouseout);
              
              // -> triggering reflow /* The actual magic */
              // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
              // Oops! This won't work in strict mode. Thanks Felis Phasma!
              // element.offsetWidth = element.offsetWidth;
              // Do this instead:
              void el.offsetWidth;
              
              // -> and re-adding the class
              el.classList.add("animate__animated");
              el.classList.add("animate__" + animation_mouseout);
            } else {
              // -> removing the class
              el.classList.remove("animate__animated");
              el.classList.remove("animate__" + animation_mousehover);
              el.classList.remove("animate__" + animation_mouseout);
              
              // -> triggering reflow /* The actual magic */
              // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
              // Oops! This won't work in strict mode. Thanks Felis Phasma!
              // element.offsetWidth = element.offsetWidth;
              // Do this instead:
              void el.offsetWidth;
            }

          })

        
      }, false);      
    }

    onInit() {
      // var editMode = document.querySelector('.elementor-editor-active')

      // Is in elementor editor
      // if (editMode) {
        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if (mutation.attributeName === "class") {

              var classes = $(mutation.target).prop(mutation.attributeName);
              var arr_classes = classes.split(' ')
              var do_animation = false, delay_increment = 500, parent_animation_mousehover = 'fadeIn', parent_animation_mouseout = 'fadeOut'
              var de_staggering_hover_yes = false, de_staggering_preview_on_hover_yes = false, run_animation = false

              jQuery.each(arr_classes, (index, value) => {
                if ( value.search('de_staggering_hover_yes') === 0 ) {
                  de_staggering_hover_yes = true
                }

                if ( value.search('de_staggering_preview_on_hover_yes') === 0 )  {
                  de_staggering_preview_on_hover_yes = true;
                }

                if ( value.search('de_staggering_parent_animation_mousehover_') === 0 ) {
                  parent_animation_mousehover = value.replace('de_staggering_parent_animation_mousehover_','')
                }

                if ( value.search('de_staggering_parent_animation_mouseout_') === 0 ) {
                  parent_animation_mouseout = value.replace('de_staggering_parent_animation_mouseout_','')
                }

                if ( value.search('de_staggering_child_delay_') === 0 ) {
                  delay_increment = parseInt(value.replace('de_staggering_child_delay_',''))
                }      

                if ( value.search('de_staggering_run_animation') === 0 ) {
                  run_animation = true
                }        
              })

              if ( de_staggering_hover_yes && de_staggering_preview_on_hover_yes && run_animation ) {
                do_animation = true
              }
  
              var elementId = mutation.target.attributes['data-id'].nodeValue;
              var elementSelector = document.querySelector("[data-id='" + elementId + "']");

              if ( do_animation ) {
    
                mutation.target.onmouseenter = function(e) {
                  // find all animated element wrappers with data-anim attribute
                  var childs = elementSelector.querySelectorAll(".de_staggering_animation_yes");
                  var delay = 0

                  Array.prototype.forEach.call(childs, function (el, index) { 

                    delay = delay + delay_increment

                    var arr_classes = el.classList
                    var remove_classes = []

                    var animation_mousehover = 'inherited'
                    var animation_mouseout = 'inherited'

                    jQuery.each(arr_classes, (index, value) => {
                      if ( value.search('de_staggering_animation_mousehover_') === 0 ) {
                        animation_mousehover = value.replace('de_staggering_animation_mousehover_','')
                        // remove_classes.push(value)
                      }

                      if ( value.search('de_staggering_animation_mouseout_') === 0 ) {
                        animation_mouseout = value.replace('de_staggering_animation_mouseout_','')
                        // remove_classes.push(value)
                      }

                      if ( value.search('animate__') === 0 ) {
                        // -> removing the class
                        remove_classes.push(value)
                      }                     
                    })

                    jQuery.each(remove_classes, (index, value) => {
                      el.classList.remove(value)
                    })

                    var animation_delay = 'animation-delay:' + delay + 'ms'
                    el.setAttribute('style',animation_delay)

                    // -> removing the class
                    // el.classList.remove("animate__animated");
                    // el.classList.remove("animate__" + animation_type);
                    
                    // -> triggering reflow /* The actual magic */
                    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
                    // Oops! This won't work in strict mode. Thanks Felis Phasma!
                    // element.offsetWidth = element.offsetWidth;
                    // Do this instead:
                    void el.offsetWidth;
                    
                    // -> and re-adding the class

                    // el.classList.add("de_staggering_animation_type_" + animation_mousehover);
                    el.classList.add("animate__animated");
                    if ( animation_mousehover === 'inherited' ) {
                      el.classList.add("animate__" + parent_animation_mousehover);
                    } else {
                      el.classList.add("animate__" + animation_mousehover);
                    }

                  })
                }

                mutation.target.onmouseleave = function(e) {
                  // find all animated element wrappers with data-anim attribute
                  var childs = elementSelector.querySelectorAll(".de_staggering_animation_yes");
                  var delay = 0

                  Array.prototype.forEach.call(childs, function (el, index) { 

                    delay = delay + delay_increment

                    var arr_classes = el.classList
                    var remove_classes = []

                    var animation_mousehover = 'inherited'
                    var animation_mouseout = 'inherited'

                    jQuery.each(arr_classes, (index, value) => {
                      if ( value.search('de_staggering_animation_mousehover_') === 0 ) {
                        animation_mousehover = value.replace('de_staggering_animation_mousehover_','')
                        // remove_classes.push(value)
                      }

                      if ( value.search('de_staggering_animation_mouseout_') === 0 ) {
                        animation_mouseout = value.replace('de_staggering_animation_mouseout_','')
                        // remove_classes.push(value)
                      }

                      if ( value.search('animate__') === 0 ) {
                        // -> removing the class
                        remove_classes.push(value)
                      }                     
                    })

                    jQuery.each(remove_classes, (index, value) => {
                      el.classList.remove(value)
                    })

                    var animation_delay = 'animation-delay:' + delay + 'ms'
                    el.setAttribute('style',animation_delay)

                    // -> removing the class
                    // el.classList.remove("animate__animated");
                    // el.classList.remove("animate__" + animation_type);
                    
                    // -> triggering reflow /* The actual magic */
                    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
                    // Oops! This won't work in strict mode. Thanks Felis Phasma!
                    // element.offsetWidth = element.offsetWidth;
                    // Do this instead:
                    void el.offsetWidth;
                    
                    // -> and re-adding the class

                    // el.classList.add("de_staggering_animation_type_" + animation_mouseout);
                    el.classList.add("animate__animated");
                    if ( animation_mouseout === 'inherited' ) {
                      el.classList.add("animate__" + parent_animation_mouseout);
                    } else {
                      el.classList.add("animate__" + animation_mouseout);
                    }

                  })
                }
              } else {
                if ( elementSelector ) {
                  // find all animated element wrappers with data-anim attribute
                  var childs = elementSelector.querySelectorAll(".de_staggering_animation_yes");
  
                  Array.prototype.forEach.call(childs, function (el, index) { 
  
                    var arr_classes = el.classList
                    var remove_classes = []
  
                    var animation_type = 'inherited'
                    jQuery.each(arr_classes, (index, value) => {
                      if (value) {
                        if ( value.search('de_staggering_animation_mousehover_') === 0 ) {
                          animation_type = value.replace('de_staggering_animation_mousehover_','')
                        }
    
                        if ( value.search('animate__') === 0 ) {
                          // -> removing the class
                          remove_classes.push(value)
                        }                     
                      }
                    })
  
                    jQuery.each(remove_classes, (index, value) => {
                      el.classList.remove(value)
                    })
  
                    // if ( animation_type === 'inherited' ) {
                    //   animation_type = parent_animation_type
                    // }
  
                    // -> removing the class
                    // el.classList.remove("animate__animated");
                    // el.classList.remove("animate__" + animation_type);                    
                  })
                  mutation.target.onmouseenter = null
                  mutation.target.onmouseleave = null
                }
              }
            }
          });
        });

        if (this.$element) {
          var element_type = this.$element.context.attributes['data-element_type'].value;

          if ( element_type === 'column' ) {
            var elementId = this.$element.context.attributes['data-id'].nodeValue;
            var elementSelector = document.querySelector("[data-id='" + elementId + "']");
            if (elementSelector) {
              observer.observe(elementSelector, {
                  attributes: true
              });
            }
          }
        }


      // } else { //if (editMode)
        // this.do_frontend_animation()
      // } //if (editMode)
    } //onInit()
}

jQuery( window ).on( 'elementor/frontend/init', () => {
  const addHandler = ( $element ) => {
    elementorFrontend.elementsHandler.addHandler( DeStaggeringHandlerClass, {
      $element,
    } );
  };

  elementorFrontend.hooks.addAction( 'frontend/element_ready/global', addHandler );
} );

jQuery( document ).ready( () => {
  de_staggering_init_responsive()
})

jQuery( window ).on( 'resize', () => {
  de_staggering_init_responsive()
})

function de_staggering_init_responsive() {
  var onDesktop = false
  var onTablet = false
  var onMobile = false
  var docWidth = document.body.clientWidth
  var tabletBreakpoint = elementorFrontend.config.responsive.breakpoints.tablet.value
  var mobileBreakpoint = elementorFrontend.config.responsive.breakpoints.mobile.value

  if ( docWidth > tabletBreakpoint ) {
    onDesktop = true 
  } else if ( docWidth <= mobileBreakpoint ) {
    onMobile = true
  } else {
    onTablet = true
  }

  var columns = document.querySelectorAll(".de_staggering_hover_yes")

  Array.prototype.forEach.call(columns, function (col, index) { 
    
    col.classList.remove('de_staggering_run_animation')
    
    if ( onDesktop && col.classList.contains('de_staggering_on_desktop_yes') ) {
      if (!col.classList.contains('de_staggering_run_animation')) {
        col.classList.add('de_staggering_run_animation')
      }
    }

    if ( onTablet && col.classList.contains('de_staggering_on_tablet_yes') ) {
      if (!col.classList.contains('de_staggering_run_animation')) {
        col.classList.add('de_staggering_run_animation')
      }
    }

    if ( onMobile && col.classList.contains('de_staggering_on_mobile_yes') ) {
      if (!col.classList.contains('de_staggering_run_animation')) {
        col.classList.add('de_staggering_run_animation')
      }
    }

  })
}
