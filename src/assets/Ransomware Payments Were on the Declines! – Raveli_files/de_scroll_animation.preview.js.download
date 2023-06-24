let animObjects = [];
let deScrollOptions = [];

class DeScrollOption {
  constructor(classes) {
    var arr_classes = classes.split(' ')

    this.active = false;
    this.animation_preview = false;
    this.editMode = false;
    this.elementWatcher = null;
    this.scrollTop = 0; 
    this.id = '';
    this.transform = 'translateX'; 
    this.distance = '50'; 
    this.duration = '1000', 
    this.direction = 'normal', 
    this.easing = 'linear',
    this.start_animate = 0,
    this.finish_animate = 0,

    this.translateX = false,
    this.translateX_distance = '',

    this.translateY = false,
    this.translateY_distance = '',

		this.rotate = false,
		this.rotate_distance = '',
						
    this.scale = false,
    this.scale_distance = '',
				
    this.skew = false,
    this.skew_distance = '',

    this.run_on_desktop = false,
    this.run_on_tablet = false,
    this.run_on_mobile = false,
    this.run_animation = true,

    jQuery.each(arr_classes, (index, value) => {
      if ( value.search('de_scroll_animation_yes') === 0 ) {
        this.active = true;
      }

      if ( value.search('de_scroll_animation_preview_yes') === 0 ) {
        this.animation_preview = true;
      }

      if ( value.search('elementor-element-edit-mode') === 0 ) {
        this.editMode = true;
      }

      if ( value.length === 25 && value.search('elementor-element-') === 0 ) {
        this.id = value.replace('elementor-element-','')
      }

      if ( value.search('de_scroll_transform_') === 0 ) {
        this.transform = value.replace('de_scroll_transform_','')
      }

      if ( value.search('de_scroll_distance_') === 0 ) {
        this.distance = value.replace('de_scroll_distance_','')
      }

      if ( value.search('de_scroll_start_animate_') === 0 ) {
        this.start_animate = parseInt(value.replace('de_scroll_start_animate_',''))
      }

      if ( value.search('de_scroll_finish_animate_') === 0 ) {
        this.finish_animate = parseInt(value.replace('de_scroll_finish_animate_',''))
      }

      if (this.finish_animate < this.start_animate) {
          this.finish_animate = parseInt(this.start_animate) + 100
      }

      if ( 'de_scroll_translateX_popover_checked' === value ) { this.translateX = true }
      if ( 'de_scroll_translateY_popover_checked' === value ) { this.translateY = true }
      if ( 'de_scroll_rotate_popover_checked' === value ) { this.rotate = true }
      if ( 'de_scroll_scale_popover_checked' === value ) { this.scale = true }
      if ( 'de_scroll_skew_popover_checked' === value ) { this.skew = true }

      if ( value.search('de_scroll_translateX_distance_') === 0 ) {
        this.translateX_distance = value.replace('de_scroll_translateX_distance_','')
      }
      if ( value.search('de_scroll_translateY_distance_') === 0 ) {
        this.translateY_distance = value.replace('de_scroll_translateY_distance_','')
      }
      if ( value.search('de_scroll_rotate_distance_') === 0 ) {
        this.rotate_distance = value.replace('de_scroll_rotate_distance_','')
      }
      if ( value.search('de_scroll_scale_distance_') === 0 ) {
        this.scale_distance = value.replace('de_scroll_scale_distance_','')
      }
      if ( value.search('de_scroll_skew_distance_') === 0 ) {
        this.skew_distance = value.replace('de_scroll_skew_distance_','')
      }
      if ( value.search('de_scroll_animation_on_desktop_yes') === 0 ) {
        this.run_on_desktop = true;
      }
      if ( value.search('de_scroll_animation_on_tablet_yes') === 0 ) {
        this.run_on_tablet = true;
      }
      if ( value.search('de_scroll_animation_on_mobile_yes') === 0 ) {
        this.run_on_mobile = true;
      }
    })

  }
}

class DeScrollAnimationHandlerClass extends elementorModules.frontend.handlers.Base {
    getDefaultSettings() {
        return {
            selectors: {
                wrapper: '.de_scroll_animation_yes',
                widget_container: '.elementor-widget-container',
            },
            last_known_scroll_position: this.last_known_scroll_position,
        };
    }

    getDefaultElements() {
        const selectors = this.getSettings( 'selectors' );
        return {
            $wrapper: this.$element.find( selectors.wrapper ),
            $widget_container: this.$element.find( selectors.widget_container ),
            $body: this.$element.find( 'body' ),
            $document: this.$element.find( 'document' ),
        };
    }

    onInit() {    
      // console.log(elementorFrontend.config.responsive.breakpoints)
      // console.log(elementorFrontend.config.responsive.activeBreakpoints)
      // console.log(elementorFrontend.config.responsive.breakpoints.mobile.value)
      // console.log('scrollWidth : ' + document.scrollingElement.scrollWidth)

      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.attributeName === "class") {
            var attributeValue = $(mutation.target).prop(mutation.attributeName);
            
            var $arr_classes = attributeValue.split(' ')

            var do_animation = false
            var do_animation_preview = false
      
            jQuery.each($arr_classes, (index, value) => {
              if ( value.search('de_scroll_animation_yes') === 0 ) {
                  do_animation = true;
              }

              if ( value.search('de_scroll_animation_preview_yes') === 0 ) {
                do_animation_preview = true;
              }
            })

            if (do_animation) {
                let deScrollOption = new DeScrollOption(attributeValue);
                let animindex = animObjects.length;
                let i;
                for (i = 0; i < deScrollOptions.length; i++) {
                  if ( deScrollOptions[i].id === deScrollOption.id ) {
                    animindex = i;
                    break;
                  }
                }

                let tZ_perspective = 0;

                deScrollOptions[animindex] = new DeScrollOption(attributeValue);

                // reset transform
                var el = document.querySelector(".elementor-element-" + deScrollOption.id + ".de_scroll_animation_yes .elementor-widget-container")

                if (el) {
                  el.setAttribute('style','')
                  // console.log(el)
                }

                // create anim
                animObjects[animindex] = anime({
                  targets: ".elementor-element-" + deScrollOption.id + ".de_scroll_animation_yes .elementor-widget-container",
                  perspective: [tZ_perspective, tZ_perspective],
                  scale: function() {
                    let result = 1;
                    if ( deScrollOption.scale ) {
                      result = deScrollOption.scale_distance;
                    }
                    return result;
                  },
                  translateX: function() {
                    let result = 0;
                    if ( deScrollOption.translateX ) {
                      result = deScrollOption.translateX_distance;
                    }
                    return result;
                  },
                  translateY: function() {
                    let result = 0;
                    if ( deScrollOption.translateY ) {
                      result = deScrollOption.translateY_distance;
                    }
                    return result;
                  },
                  rotate: function() {
                    let result = 0;
                    if ( deScrollOption.rotate ) {
                      result = deScrollOption.rotate_distance;
                    }
                    return result;
                  },
                  skew: function() {
                    let result = 0;
                    if ( deScrollOption.skew ) {
                      result = deScrollOption.skew_distance;
                    }
                    return result;
                  },
                  // delay: function(el, i) {
                  //   return i * 100;
                  // },
                  // elasticity: 200,
                  easing: deScrollOption.easing,
                  direction: "normal",
                  autoplay: false,
                  duration: deScrollOption.duration
                });
            }
          }
        });
      });

      if (this.$element) {
        var elementId = this.$element.context.attributes['data-id'].nodeValue;
        var elementSelector = document.querySelector("[data-id='" + elementId + "']");
        if (elementSelector) {
            observer.observe(elementSelector, {
                attributes: true
            });

            if ( this.$element.context.classList.contains('de_scroll_animation_yes') ) {
              let last_known_scroll_position = 0;
              let ticking = false;
              let animindex = animObjects.length;
              let optionindex = deScrollOptions.length;

              
              deScrollOptions[optionindex] = new DeScrollOption(this.$element.context.className);
              
              let tZ_perspective = 0;

              animObjects[animindex] = anime({
                targets: ".elementor-element-" + deScrollOptions[optionindex].id + ".de_scroll_animation_yes .elementor-widget-container",
                perspective: [tZ_perspective, tZ_perspective],
                scale: function() {
                  let result = 1;
                  if ( deScrollOptions[optionindex].scale ) {
                    result = deScrollOptions[optionindex].scale_distance;
                  }
                  return result;
                },
                translateX: function() {
                  let result = 0;
                  if ( deScrollOptions[optionindex].translateX ) {
                    result = deScrollOptions[optionindex].translateX_distance;
                  }
                  return result;
                },
                translateY: function() {
                  let result = 0;
                  if ( deScrollOptions[optionindex].translateY ) {
                    result = deScrollOptions[optionindex].translateY_distance;
                  }
                  return result;
                },
                rotate: function() {
                  let result = 0;
                  if ( deScrollOptions[optionindex].rotate ) {
                    result = deScrollOptions[optionindex].rotate_distance;
                  }
                  return result;
                },
                skew: function() {
                  let result = 0;
                  if ( deScrollOptions[optionindex].skew ) {
                    result = deScrollOptions[optionindex].skew_distance;
                  }
                  return result;
                },
                // delay: function(el, i) {
                //   return i * 100;
                // },
                // elasticity: 200,
                easing: deScrollOptions[optionindex].easing,
                autoplay: false,
                duration: deScrollOptions[optionindex].duration
              });

              var elRect = elementSelector.getBoundingClientRect()
              deScrollOptions[optionindex].scrollTop = elRect.y

              document.onscroll = () => { 
                if (!ticking) {
                  window.requestAnimationFrame(function() {
                    var i;
                    for (i = 0; i < animObjects.length; i++) {
                      // last_known_scroll_position = ( document.scrollingElement.scrollTop - deScrollOptions[i].scrollTop ) / window.innerHeight

                      last_known_scroll_position = 0

                      // console.log(document.querySelector(animObjects[i].targets))
                      var scrolledEl = document.querySelector(".elementor-element-" + deScrollOptions[i].id + ".de_scroll_animation_yes .elementor-widget-container")
                      var sTop = 0
                      if (scrolledEl) {
                        var scrollbarHeight = document.scrollingElement.scrollHeight
                        var scrollbarTop = document.scrollingElement.scrollTop
                        
                        var rect = scrolledEl.getBoundingClientRect()
                        sTop = rect.y
                        var sHeight = rect.height 
                        // var wHeight = window.innerHeight - sHeight - 50
                        var wHeight = window.innerHeight

                        // console.log('document.body.clientHeight : ' + document.body.clientHeight)
                        // console.log('window.clientHeight : ' + window.clientHeight)
                        // console.log('window.innerHeight :' + window.innerHeight)
                        // console.log(document.documentElement.offsetHeight)

                        // if ( scrollbarTop === 0 ) {
                        //   last_known_scroll_position = 0
                        // } else if ( sTop <= 50 ) {
                        //   last_known_scroll_position = 100
                        // } else if ( sTop <= wHeight ) {
                        //   if ( sHeight > (.5 * wHeight) ) {
                        //     last_known_scroll_position = ( wHeight - sTop) / sHeight * 100
                        //   } else {
                        //     last_known_scroll_position = ( wHeight - sTop) / wHeight * 100
                        //   }
                        // }

                        

                        if ( scrollbarTop === 0 ) {
                          last_known_scroll_position = 0
                        } else if ( sTop <= wHeight ) {
                          var animHeight = (deScrollOptions[i].finish_animate - deScrollOptions[i].start_animate) * sHeight / 100
                          var animTop = sTop + deScrollOptions[i].start_animate * sHeight / 100
                          last_known_scroll_position = ( wHeight - animTop) / animHeight * 100
                          // if (deScrollOptions[i].id === 'cd08401') {
                          //   console.log('last_known_scroll_position : ' + last_known_scroll_position)
                          //   console.log('wHeight : ' + wHeight)
                          //   console.log('animTop : ' + animTop)
                          //   console.log('start_animate : ' + deScrollOptions[i].start_animate)
                          //   console.log('finish_animate : ' + deScrollOptions[i].finish_animate)
                          //   console.log('sHeight : ' + sHeight)
                          // }
                        }

                      }

                      if (!deScrollOptions[i].run_animation) {
                        last_known_scroll_position = 0
                      }

                      if ( deScrollOptions[i].editMode ) {
                        if ( deScrollOptions[i].animation_preview ) {
                          animObjects[i].seek((last_known_scroll_position / 100) * animObjects[i].duration);
                        }
                      } else {
                        // if ( deScrollOptions[i].id === 'a2d5ac4' ) {
                        //   console.log(sHeight)
                        //   console.log('calc : ' + (last_known_scroll_position / 100) * animObjects[i].duration )
                        // }
                        animObjects[i].seek((last_known_scroll_position / 100) * animObjects[i].duration);
                      }

                      
                      
                    }
                    ticking = false;
                  });
              
                  ticking = true;
                }
              
              }    
            } //if (this.$element.context.classList.contains('de_scroll_animation_yes'))

        }
      }
    }

    bindEvents() {
    }
} //class DeScrollAnimationHandlerClass

jQuery( window ).on( 'elementor/frontend/init', () => {
  const addHandler = ( $element ) => {
    elementorFrontend.elementsHandler.addHandler( DeScrollAnimationHandlerClass, {
      $element,
    } );
  };

  elementorFrontend.hooks.addAction( 'frontend/element_ready/global', addHandler );
} );

jQuery( document ).ready( () => {
  de_scroll_init_responsive()
})

jQuery( window ).on( 'resize', () => {
  de_scroll_init_responsive()
})

function de_scroll_init_responsive() {
  var onDesktop = false
  var onTablet = false
  var onMobile = false
  var docWidth = document.scrollingElement.scrollWidth
  var tabletBreakpoint = elementorFrontend.config.responsive.breakpoints.tablet.value
  var mobileBreakpoint = elementorFrontend.config.responsive.breakpoints.mobile.value

  if ( docWidth > tabletBreakpoint ) {
    onDesktop = true 
  } else if ( docWidth <= mobileBreakpoint ) {
    onMobile = true
  } else {
    onTablet = true
  }

  for (i = 0; i < deScrollOptions.length; i++) {
    deScrollOptions[i].run_animation = false

    if ( onDesktop && deScrollOptions[i].run_on_desktop ) {
      deScrollOptions[i].run_animation = true
    }

    if ( onTablet && deScrollOptions[i].run_on_tablet ) {
      deScrollOptions[i].run_animation = true
    }

    if ( onMobile && deScrollOptions[i].run_on_mobile ) {
      deScrollOptions[i].run_animation = true
    }
  }
}