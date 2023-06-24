var observersDefault = []
var observersCurtain = []
var observersLetter = []
var letterAnim
var originalLetters
var animObject

function getDefaultPreviewAnimObj($target = '', $animation_style = 'fu', $distance = '200', $rotation = '0', $scale = '1', $duration = '2000', $direction = 'normal', $loop = '1', $easing = 'linear', is_stagger = false, $delay = '0', stagger_delay = '500', elTarget = null) {
  switch ($animation_style) {
    case 'fu':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        translateY: [$distance,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
      break;
    case 'fd':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        translateY: [-$distance,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
    break;
    case 'fl':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        translateX: [$distance,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
      break;
    case 'fr':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        translateX: [-$distance,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
      break;
    case 'rotate':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        rotate: [-$rotation,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
      break;
    case 'scale':
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        scale: [1/$scale,1],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }
      break;  
    default:
      var animObj = {
        targets: $target,
        duration: $duration,
        delay: $delay,
        opacity: [0,1],
        translateY: [$distance,0],
        easing: $easing,
        loop: $loop,
        direction: $direction,
      }    
      break;
  }

  if (is_stagger) {
    animObj.delay = anime.stagger(stagger_delay)    
  }

  if (elTarget) {
    animObj.begin = function(anim) {
      if ( anim.began ) {
        // elTarget.setAttribute("style", "")
        elTarget.setAttribute("data-de-reveal-animated", true)
      }
    }
    
    animObj.complete = function(anim) {
      if ( anim.completed ) {
        elTarget.setAttribute("data-de-reveal-animated", false)
      }
    }
    
    animObj.change = function() {
      // elTarget.style.backgroundColor = '#00FF00'
      elTarget.style.opacity = 0
    }
  }

  return animObj
}

function observerCallbackDefault(entries, observer) {  
  entries.forEach(function (entry) {
    var element = entry.target;
    var animating = false
    if ( element.hasAttribute("data-de-reveal-animated") ) {
      if ( element.getAttribute("data-de-reveal-animated") === "true" ) {
        animating = true 
      }
    }

    var infinite = element.hasAttribute("data-anim-infinite") ? true : false;

    var animation_style = element.getAttribute("data-de-reveal-animation-style")
    var distance = element.getAttribute("data-de-reveal-distance")
    var rotation = element.getAttribute("data-de-reveal-default-rotation")
    var scale = element.getAttribute("data-de-reveal-default-scale")
    var duration = element.getAttribute("data-de-reveal-duration")
    var direction = element.getAttribute("data-de-reveal-direction")
    var easing = element.getAttribute("data-de-reveal-easing")
    // var loop = element.getAttribute("data-de-reveal-animation-loop")
    var loop = element.hasAttribute("data-de-reveal-animation-loop-infinite") ? true : element.getAttribute("data-de-reveal-animation-loop")

    var id = element.getAttribute("data-id")
    var is_section = element.hasAttribute("data-de-reveal-section") ? true : false;
    var is_stagger = element.hasAttribute("data-de-reveal-stagger") ? true : false;
    var run_animation = element.hasAttribute("data-de-reveal-run-animation") ? true : false;
    
    var delay = element.getAttribute("data-de-reveal-default-delay")
    var stagger_delay = element.getAttribute("de-reveal-stagger-child-delay")

    if (entry.isIntersecting) {
      var targets

      if (is_stagger) {
        targets = ".de_reveal_animation_yes.elementor-element-" + id + " > .elementor-container > .elementor-column"
      } else {
        if (is_section) {
          targets = ".de_reveal_animation_yes.elementor-section.elementor-element-" + id
        } else {
          targets = ".de_reveal_animation_yes.elementor-element-" + id
        }
      }

      var isChild = true
      var carouselTemplate = deFindUpParentElementByClass(element,'dethemekit-carousel-template')

      if ( carouselTemplate ) {
        if ( carouselTemplate.classList.contains('slick-active') ) {
          var carouselWrapperEl = deFindUpParentElementByClass(carouselTemplate,'dethemekit-carousel-wrapper')
          if (carouselWrapperEl) {
            var carouselId = carouselWrapperEl.getAttribute('id')
            targets = '#' + carouselId + ' ' + targets
          }
          isChild = document.querySelectorAll(targets).length > 0 ? true : false
        } else {
          isChild = false
        }        
      }

      if ( !animating && isChild ) {
        if (run_animation) {
          var animObj = getDefaultPreviewAnimObj(targets,animation_style,distance,rotation,scale,duration,direction,loop,easing,is_stagger,delay,stagger_delay, element)
          anime(animObj)
        } else {
          element.style.opacity = 1
        }
      }

      if (element.classList.contains('de_reveal_animate_in_viewport_runonce') && observer.root === null) {
        observer.unobserve(element)
      }

    } else {
      element.style.opacity = 0
      if (infinite) {

      }
    }
  })
}

function observerCallbackCurtain(entries, observer) {
  entries.forEach(function (entry) {
    var element = entry.target;

    // To be implemented later:
    var infinite = element.hasAttribute("data-anim-infinite") ? true : false;
    
    
    var duration = element.getAttribute("data-de-reveal-duration")
    var curtain_direction = element.getAttribute("data-de-reveal-curtain-direction")
    var easing = element.getAttribute("data-de-reveal-easing")
    var curtain_delay = element.getAttribute("data-de-reveal-curtain-delay")    
    var run_animation = element.hasAttribute("data-de-reveal-run-animation") ? true : false;

    if (entry.isIntersecting) {
      if (run_animation) {

        var revealer = new RevealFx(element);
  
        revealer.reveal({
          duration: duration,
          direction: curtain_direction,
          easing: easing,
          delay: curtain_delay,
          onStart: function(contentEl, revealerEl) { 
            if (contentEl) { contentEl.style.opacity = 0 }
          },
          onCover: function(contentEl, revealerEl) { 
            if (contentEl) { contentEl.style.opacity = 1 }
          },
          onComplete: function(contentEl, revealerEl) { 
            if (contentEl) { contentEl.style.opacity = 1 } 
          },
        });  
      } else {
        var wcontainer = element.querySelector(".elementor-widget-container")

        if (wcontainer) {
          wcontainer.style.opacity = 1
        }
      }

      if (element.classList.contains('de_reveal_animate_in_viewport_runonce') && observer.root === null) {
        observer.unobserve(element)
      }
    } else {
        if (infinite) {

        }
    }
  })
}

function observerCallbackLetter(entries, observer) {
  entries.forEach(function (entry) {
    var element = entry.target

    // To be implemented later:
    var infinite = element.hasAttribute("data-anim-infinite") ? true : false;
    var run_animation = element.hasAttribute("data-de-reveal-run-animation") ? true : false;

    if (entry.isIntersecting) {
      if (run_animation) {
        var animated = element.querySelectorAll(".elementor-widget-container > *:not(style)");
  
        Array.prototype.forEach.call(animated, function(el, i){
          doLetterEffect(element,el)
        })
      }

      if (element.classList.contains('de_reveal_animate_in_viewport_runonce') && observer.root === null) {
        observer.unobserve(element)
      }
    } else {
        if (infinite) {

        }
    }
  })
}

function doLetterEffect(element,text_element) {  
  var effect = element.getAttribute("data-dereveal-letter-effects")
  var initial_state = element.getAttribute("data-dereveal-letter-initial-state")
  
  var hasLetterEffect = text_element.classList.contains('letter-effect')
  var tempInnerText = text_element.innerHTML

  if ( !hasLetterEffect ) {        
    var letterAnim = new TextFx(text_element)

    if ( initial_state==='hidden' ) {
      letterAnim.hide()
    } else {
      letterAnim.show()  
    }

    letterAnim.show(effect, function(){
      if (!element.classList.contains('de_reveal_letter_animated')) {
        element.classList.add('de_reveal_letter_animated')
      }

      
      if (tempInnerText !== '') {
        text_element.innerHTML = tempInnerText
      }
      text_element.classList.remove('letter-effect')
    })
  }
}

function deFindUpTemplateElement(el) {
  while (el.parentElement) {
      el = el.parentElement;
      if ( el.hasAttribute('data-elementor-type') ) {
        if ( el.getAttribute('data-elementor-type') !== "wp-page" )
          return el;
      }
  }
  return null;
}

function deFindUpParentElementByClass(el,classname) {
  while (el.parentElement) {
      el = el.parentElement;
      if ( el.classList.contains(classname) ) {
        return el;
      }
  }
  return null;
}

function deClassToSelector(classes) {
  result = classes.replace(' ','.')
  result = '.' + result
  return result 
}

class DeRevealAnimationHandlerClass extends elementorModules.frontend.handlers.Base {
    getDefaultSettings() {
        return {
            selectors: {
                wrapper: '.de_reveal_animation_yes',
                widget_container: '.elementor-widget-container',
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

    do_frontend_reveal_default() {
      if (!this.$element.hasClass('de_reveal_animation_yes')) {
        return
      }

      if (!this.$element.hasClass('de_reveal_animation_type_default')) {
        return
      }

      var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1
      }

      var ele = this.$element.get()
      
      var element = ele[0]
      var classes = element.getAttribute("class")
      var arr_classes = classes.split(' ')
      var de_reveal_start = 0

      var de_reveal_distance = 0
      element.setAttribute("data-de-reveal-distance", de_reveal_distance)

      var de_reveal_rotation = 0
      element.setAttribute("data-de-reveal-default-rotation", de_reveal_rotation)

      var de_reveal_scale = 0
      element.setAttribute("data-de-reveal-default-scale", de_reveal_scale)

      var de_reveal_default_delay = 0
      element.setAttribute("data-de-reveal-default-delay", de_reveal_default_delay)

      var de_reveal_duration = 0
      element.setAttribute("data-de-reveal-duration", de_reveal_duration)

      Array.prototype.forEach.call(arr_classes, function(item, num){
        if ( item.search('de_reveal_start_') === 0 ) {
          de_reveal_start = item.replace('de_reveal_start_','')
        }

        if ( item.search('de_reveal_animation_style_') === 0 ) {
          var de_reveal_animation_style = item.replace('de_reveal_animation_style_','')

          element.setAttribute("data-de-reveal-animation-style", de_reveal_animation_style)
        }

        if ( item.search('de_reveal_distance_') === 0 ) {
          de_reveal_distance = item.replace('de_reveal_distance_','')
          element.setAttribute("data-de-reveal-distance", de_reveal_distance)
        }

        if ( item.search('de_reveal_default_rotation_') === 0 ) {
          de_reveal_rotation = item.replace('de_reveal_default_rotation_','')
          element.setAttribute("data-de-reveal-default-rotation", de_reveal_rotation)
        }

        if ( item.search('de_reveal_default_scale_') === 0 ) {
          de_reveal_scale = item.replace('de_reveal_default_scale_','')
          element.setAttribute("data-de-reveal-default-scale", de_reveal_scale)
        }

        if ( item.search('de_reveal_default_delay_') === 0 ) {
          de_reveal_default_delay = item.replace('de_reveal_default_delay_','')
          element.setAttribute("data-de-reveal-default-delay", de_reveal_default_delay)
        }

        if ( item.search('de_reveal_duration_') === 0 ) {
          de_reveal_duration = item.replace('de_reveal_duration_','')
          element.setAttribute("data-de-reveal-duration", de_reveal_duration)
        }

        if ( item.search('de_reveal_direction_') === 0 ) {
          var de_reveal_direction = item.replace('de_reveal_direction_','')
          element.setAttribute("data-de-reveal-direction", de_reveal_direction)
        }

        if ( item.search('de_reveal_easing_') === 0 ) {
          var de_reveal_easing = item.replace('de_reveal_easing_','')
          element.setAttribute("data-de-reveal-easing", de_reveal_easing)
        }

        var $loop_type = 'custom'
        var $loop 
        if ( item.search('de_reveal_loop_') === 0 ) {
          $loop_type = item.replace('de_reveal_loop_','')

          if ( $loop_type === 'infinite' ) {
            $loop = true
            element.setAttribute("data-de-reveal-animation-loop-infinite", true)
          }
        }

        if (( item.search('de_reveal_custom_loop_') === 0 ) && ($loop_type === 'custom')) {
          $loop = item.replace('de_reveal_custom_loop_','')
          element.setAttribute("data-de-reveal-animation-loop", $loop)
        }

        if ( item.search('de_reveal_stagger_yes') === 0 ) {
          element.setAttribute("data-de-reveal-stagger", "true")
        }

        if ( item.search('elementor-section') === 0 ) {
          element.setAttribute("data-de-reveal-section", "true")
        }

        if ( item.search('de_reveal_run_animation') === 0 ) {
          element.setAttribute("data-de-reveal-run-animation", "true")
        }

        if ( item.search('de_reveal_stagger_child_delay_') === 0 ) {
          var stagger_delay = item.replace('de_reveal_stagger_child_delay_','')

          element.setAttribute("de-reveal-stagger-child-delay", stagger_delay)
        }
      })

      var threshold = de_reveal_start;

      if(threshold) {           
          var num = parseFloat(threshold);
          observerOptions.threshold = num;
      } else {
          observerOptions.threshold = 0;
      }

      var doObserve = true
      // Ambil Template dimana widget ini diletakkan
      var templateEl = deFindUpTemplateElement(element)

      // Kalo memang diletakkan di template, set oberver root
      if ( templateEl ) {            
        if ( templateEl.parentElement.classList.contains('dethemekit-carousel-template') ) {
          var carouselWrapperEl = deFindUpParentElementByClass(templateEl,'dethemekit-carousel-wrapper')

          if (carouselWrapperEl) {
            var carouselId = carouselWrapperEl.getAttribute('id')

            observerOptions.root = document.querySelector('#' + carouselId + ' .slick-slide.slick-current.slick-active')
            observerOptions.threshold = 0
          }

          if (templateEl.parentElement.classList.contains('slick-cloned')) {
            doObserve = false
          }
        } else {
          observerOptions.root = templateEl.parentElement
        }
      }

      if (doObserve) {
        var id = element.getAttribute('data-id')
        // initialize intersection observer
        if (!observersDefault[id]) {
          observersDefault[id] = new IntersectionObserver(observerCallbackDefault, observerOptions)
          observersDefault[id].observe(element)
        }
      }
    }

    do_frontend_reveal_curtain() {
      if (!this.$element.hasClass('de_reveal_animation_yes')) {
        return
      }

      if (!this.$element.hasClass('de_reveal_animation_type_blockcurtain')) {
        return
      }

      var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1
      }

      var ele = this.$element.get()
      
      var element = ele[0]

      // Get threshold settings from class de_reveal_start_
      var classes = element.getAttribute("class")
      var arr_classes = classes.split(' ')
      var de_reveal_start = 0
      Array.prototype.forEach.call(arr_classes, function(item, num){
        if ( item.search('de_reveal_start_') === 0 ) {
          de_reveal_start = item.replace('de_reveal_start_','')
        }

        if ( item.search('de_reveal_curtain_direction_') === 0 ) {
          var de_reveal_curtain_direction = item.replace('de_reveal_curtain_direction_','')

          element.setAttribute("data-de-reveal-curtain-direction", de_reveal_curtain_direction)
        }

        if ( item.search('de_reveal_curtain_delay_') === 0 ) {
          var de_reveal_curtain_delay = item.replace('de_reveal_curtain_delay_','')

          element.setAttribute("data-de-reveal-curtain-delay", de_reveal_curtain_delay)
        }

        if ( item.search('de_reveal_easing_') === 0 ) {
          var de_reveal_easing = item.replace('de_reveal_easing_','')

          element.setAttribute("data-de-reveal-easing", de_reveal_easing)
        }

        if ( item.search('de_reveal_duration_') === 0 ) {
          var de_reveal_duration = item.replace('de_reveal_duration_','')

          element.setAttribute("data-de-reveal-duration", de_reveal_duration)
        }

      })
      var threshold = de_reveal_start;

      if(threshold) {           
          var num = parseFloat(threshold);
          observerOptions.threshold = num;
      } else {
          observerOptions.threshold = 0;
      }

      // Ambil Template dimana widget ini diletakkan
      var templateEl = deFindUpTemplateElement(element)

      // Kalo memang diletakkan di template, set oberver root
      if ( templateEl ) {            
        if ( templateEl.parentElement.classList.contains('slick-slide') ) {
          var carouselId = templateEl.parentElement.parentElement.parentElement.parentElement.getAttribute('id')
          observerOptions.root = document.querySelector('#' + carouselId + '.slick-slide.slick-current.slick-active')              
        } else {
          observerOptions.root = templateEl.parentElement
        }
      }

      var id = element.getAttribute('data-id')
      // initialize intersection observer
      if (!observersDefault[id]) {
        // initialize intersection observer
        observersCurtain[id] = new IntersectionObserver(observerCallbackCurtain, observerOptions);
  
        // observe wrapper element
        observersCurtain[id].observe(element);        
      }
    }

    do_frontend_reveal_letter() {
      if (!this.$element.hasClass('de_reveal_animation_yes')) {
        return
      }

      if (!this.$element.hasClass('de_reveal_animation_type_letter')) {
        return
      }

      var observerOptions = {
        root: null,
        rootMargin: '0px',
        thresholds: [0.5],
      }

      var ele = this.$element.get()
      
      var element = ele[0]
  
      // Get threshold settings from class de_reveal_start_
      var classes = element.getAttribute("class")
      var arr_classes = classes.split(' ')
      var de_reveal_start = 0

      Array.prototype.forEach.call(arr_classes, function(item, num){
        if ( item.search('de_reveal_start_') === 0 ) {
          de_reveal_start = item.replace('de_reveal_start_','')
        }

        if ( item.search('de_reveal_letter_effects_') === 0 ) {
          var de_reveal_letter_effects = item.replace('de_reveal_letter_effects_','')

          element.setAttribute("data-dereveal-letter-effects", de_reveal_letter_effects)
        }

        if ( item.search('de_reveal_letter_initial_state_') === 0 ) {
          var initial_state = item.replace('de_reveal_letter_initial_state_','')

          element.setAttribute("data-dereveal-letter-initial-state", initial_state)
        }
      })
      var threshold = de_reveal_start;

      if(threshold) {           
          var num = parseFloat(threshold);
          observerOptions.threshold = num;
      } else {
          observerOptions.threshold = 0;
      }

      // Ambil Template dimana widget ini diletakkan
      var templateEl = deFindUpTemplateElement(element)

      // Kalo memang diletakkan di template, set oberver root
      if ( templateEl ) {            
        if ( templateEl.parentElement.classList.contains('slick-slide') ) {
          var carouselId = templateEl.parentElement.parentElement.parentElement.parentElement.getAttribute('id')
          observerOptions.root = document.querySelector('#' + carouselId + '.slick-slide.slick-current.slick-active')
          
          // observerOptions.root = document.querySelector('.slick-slide.slick-current.slick-active')
          // observerOptions.root =  templateEl.parentElement.parentElement.parentElement.parentElement.querySelector('.slick-slide.slick-current.slick-active')
        } else {
          observerOptions.root = templateEl.parentElement
        }
      }

      var id = element.getAttribute('data-id')
      // initialize intersection observer
      if (!observersDefault[id]) {
        // initialize intersection observer
        observersLetter[id] = new IntersectionObserver(observerCallbackLetter, observerOptions);

        // observe wrapper element
        observersLetter[id].observe(element);
      }
    }

    do_frontend_reveal() {
      this.do_frontend_reveal_default()
      this.do_frontend_reveal_curtain()
      this.do_frontend_reveal_letter()
    }

    onInit() {
      var editMode = document.querySelector('.elementor-editor-active')

      // Is in elementor editor
      if (editMode) {
        var animObject
  
        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if (mutation.attributeName === "class") {
              var attributeValue = $(mutation.target).prop(mutation.attributeName);
              
              var $arr_classes = attributeValue.split(' ')

              var do_animation = false, de_reveal_animation_yes = false, run_animation = false, $animation_type = 'default', $id, $duration = '2000', $curtain_color = '#000000', $curtain_direction = 'lr', $direction = 'normal', $easing = 'linear', $animation_style = 'fu', $loop_type = 'custom', $loop = '1', is_stagger = false, is_section = false, $letter_effect = 'fx1', letterAnim, initial_state = 'hidden'
        
              jQuery.each($arr_classes, (index, value) => {
                if ( value.search('de_reveal_animation_yes') === 0 ) {
                  de_reveal_animation_yes = true;
                }

                if ( value.search('de_reveal_run_animation') === 0 ) {
                  run_animation = true;
                }

                if ( value.search('de_reveal_animation_type_') === 0 ) {
                  $animation_type = value.replace('de_reveal_animation_type_','')
                }          

                if ( value.search('elementor-section') === 0 ) {
                  is_section = true;
                }

                if ( value.length === 25 && value.search('elementor-element-') === 0 ) {
                  $id = value.replace('elementor-element-','')
                }
          
                if ( value.search('de_reveal_curtain_direction_') === 0 ) {
                  $curtain_direction = value.replace('de_reveal_curtain_direction_','')
                }

                if ( value.search('de_reveal_letter_effects_') === 0 ) {
                  $letter_effect = value.replace('de_reveal_letter_effects_','')
                }

                if ( value.search('de_reveal_letter_initial_state_') === 0 ) {
                  initial_state = value.replace('de_reveal_letter_initial_state_','')
                }

                if ( value.search('de_reveal_duration_') === 0 ) {
                  $duration = value.replace('de_reveal_duration_','')
                }
        
                if ( value.search('de_reveal_direction_') === 0 ) {
                  $direction = value.replace('de_reveal_direction_','')
                }
        
                if ( value.search('de_reveal_easing_') === 0 ) {
                  $easing = value.replace('de_reveal_easing_','')
                }

                if ( value.search('de_reveal_loop_') === 0 ) {
                  $loop_type = value.replace('de_reveal_loop_','')

                  if ( $loop_type === 'infinite' ) {
                    $loop = true
                  }
                }

                if (( value.search('de_reveal_custom_loop_') === 0 ) && ($loop_type === 'custom')) {
                  $loop = value.replace('de_reveal_custom_loop_','')
                }

                if ( value.search('de_reveal_animation_style_') === 0 ) {
                  $animation_style = value.replace('de_reveal_animation_style_','')
                }

                if ( value.search('de_reveal_stagger_yes') === 0 ) {
                  is_stagger = true;
                }

              })

              var elementSelector
              var $target = ''

              if (de_reveal_animation_yes && run_animation) {
                do_animation = true
              }

              if (do_animation) {
                if (is_stagger) {
                  $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-container > .elementor-row > .elementor-column"                        
                } else {
                  if (is_section) {
                    $target = ".de_reveal_animation_yes.elementor-section.elementor-element-" + $id
                  } else {
                    switch ($animation_type) {
                      case 'letter':
                        $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-widget-container > *" 
                        break;
                      case 'blockcurtain':
                        $target = ".de_reveal_animation_yes.elementor-element-" + $id 
                        break;                          
                      default:
                        $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-widget-container"
                        break;
                    }
                    
                    // if ( $animation_type === 'letter' ) {
                    //   $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-widget-container > *" 
                    // } else {
                    //   $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-widget-container"
                    // }
                  }
                }

                elementSelector = document.querySelector($target)
              } else {
                if (is_stagger) {
                  $target = ".de_reveal_animation_no.elementor-element-" + $id + " > .elementor-container > .elementor-row > .elementor-column"                        
                } else {
                  if (is_section) {
                    $target = ".de_reveal_animation_no.elementor-section.elementor-element-" + $id
                  } else {
                    if ( $animation_type === 'letter' ) {
                      $target = ".de_reveal_animation_no.elementor-element-" + $id + " > .elementor-widget-container > *"
                    } else {
                      $target = ".de_reveal_animation_no.elementor-element-" + $id + " > .elementor-widget-container"
                    }
                  }
                }

                elementSelector = document.querySelector($target)
              }


              if (do_animation && elementSelector) {
                if ( $animation_type === 'blockcurtain' ) {
                  
                  var revealer = new RevealFx(elementSelector);

                  revealer.reveal({
                    duration: $duration,
                    direction: $curtain_direction,
                    easing: $easing,
                    onStart: function(contentEl, revealerEl) { if (contentEl) contentEl.style.opacity = 0; },
                    onCover: function(contentEl, revealerEl) { if (contentEl) contentEl.style.opacity = 1; },
                    onComplete: function(contentEl, revealerEl) { if (contentEl) contentEl.style.opacity = 1; },
                  });

                } else if ( $animation_type === 'letter' ) { //if ( $animation_type === 'blockcurtain' )

                  var hasLetterEffect = elementSelector.classList.contains('letter-effect')
                  var tempInnerText = elementSelector.innerText

                  if ( !hasLetterEffect ) {
                    letterAnim = new TextFx(elementSelector)

                    if ( initial_state==='hidden' ) {
                      letterAnim.hide()
                    } else {
                      letterAnim.show()  
                    }

                    letterAnim.show($letter_effect, function(){
                      elementSelector.classList.remove('letter-effect')
                      elementSelector.innerText = tempInnerText
                    })
                  }

                } else { //if ( $animation_type === 'blockcurtain' )
                } //if ( $animation_type === 'blockcurtain' )

              } else { //if (do_animation)
                if (elementSelector) {
                  elementSelector.style.transform = "none"
                }
              } //if (do_animation)
            }
          });
        });
  
        if (this.$element) {
          var elementId = this.$element.context.attributes['data-id'].nodeValue;
          var elementSelector = document.querySelector("[data-id='" + elementId + "']");
          if (elementSelector) {
            this.do_frontend_reveal()
          }
        }
      } else { //if (editMode)
        this.do_frontend_reveal()
      } //if (editMode)
    } //onInit()

    bindEvents() {
    }
}

function do_preview_default_animation() {
  // find all edited element wrappers
  var animNodes = document.querySelectorAll(".de_reveal_animation_yes.de_reveal_animation_type_default.elementor-element-editable");

  // For each animated element, set initial state based on animation object in animations array
  Array.prototype.forEach.call(animNodes, function (element, index) { 

    // initial variables values
    var do_animation = false
    var $animation_type = 'default'
    var $id, $duration = 2000, $distance = '200', $rotation = '0', $scale = '1'
    var $direction = 'normal'
    var $easing = 'linear'
    var $animation_style = 'fu'
    var $loop_type = 'custom'
    var $loop = '1'
    var is_stagger = false
    var is_section = false
    var $delay = '0'
    var stagger_delay = '500'
    
    var classes = element.getAttribute("class")
    var arr_classes = classes.split(' ')
        
    Array.prototype.forEach.call(arr_classes, function(item, num){
      if ( item.search('de_reveal_animation_yes') === 0 ) {
        do_animation = true
      }
    
      if ( item.search('de_reveal_animation_type_') === 0 ) {
        $animation_type = item.replace('de_reveal_animation_type_','')
      }          
    
      if ( item.search('elementor-section') === 0 ) {
        is_section = true
      }
    
      if ( item.length === 25 && item.search('elementor-element-') === 0 ) {
        $id = item.replace('elementor-element-','')
      }

      if ( item.search('de_reveal_distance_') === 0 ) {
        $distance = item.replace('de_reveal_distance_','')
      }

      if ( item.search('de_reveal_default_rotation_') === 0 ) {
        $rotation = item.replace('de_reveal_default_rotation_','')
      }

      if ( item.search('de_reveal_default_scale_') === 0 ) {
        $scale = item.replace('de_reveal_default_scale_','')
      }

      if ( item.search('de_reveal_default_delay_') === 0 ) {
        $delay = item.replace('de_reveal_default_delay_','')
      }

      if ( item.search('de_reveal_duration_') === 0 ) {
        $duration = item.replace('de_reveal_duration_','')
      }
    
      if ( item.search('de_reveal_direction_') === 0 ) {
        $direction = item.replace('de_reveal_direction_','')
      }
    
      if ( item.search('de_reveal_easing_') === 0 ) {
        $easing = item.replace('de_reveal_easing_','')
      }
    
      if ( item.search('de_reveal_loop_') === 0 ) {
        $loop_type = item.replace('de_reveal_loop_','')
    
        if ( $loop_type === 'infinite' ) {
          $loop = true
        }
      }
    
      if (( item.search('de_reveal_custom_loop_') === 0 ) && ($loop_type === 'custom')) {
        $loop = item.replace('de_reveal_custom_loop_','')
      }
    
      if ( item.search('de_reveal_animation_style_') === 0 ) {
        $animation_style = item.replace('de_reveal_animation_style_','')
      }
    
      if ( item.search('de_reveal_stagger_yes') === 0 ) {
        is_stagger = true
      }    

      if ( item.search('de_reveal_stagger_child_delay_') === 0 ) {
        stagger_delay = item.replace('de_reveal_stagger_child_delay_','')
      }
    })

    var elementSelector
    var $target = ''

    if (do_animation) {
      if (is_stagger) {
        $target = ".de_reveal_animation_yes.elementor-element-" + $id + " > .elementor-container > .elementor-column"                        
      } else {
        if (is_section) {
          $target = ".de_reveal_animation_yes.elementor-section.elementor-element-" + $id 
        } else {
          $target = ".de_reveal_animation_yes.elementor-element-" + $id
        }
      }

      elementSelector = document.querySelector($target)
    } else {
      if (is_stagger) {
        $target = ".de_reveal_animation_no.elementor-element-" + $id + " > .elementor-container > .elementor-row > .elementor-column"                        
      } else {
        if (is_section) {
          $target = ".de_reveal_animation_no.elementor-section.elementor-element-" + $id
        } else {
          $target = ".de_reveal_animation_no.elementor-element-" + $id
        }
      }

      elementSelector = document.querySelector($target)
    }

    if (do_animation && elementSelector) {    

      if (animObject) {
        animObject.remove(elementSelector)
      }
        
      var animObj = getDefaultPreviewAnimObj($target,$animation_style,$distance,$rotation,$scale,$duration,$direction,$loop,$easing,is_stagger,$delay,stagger_delay)
      animObject = anime(animObj)

    } else { //if (do_animation)
      if (elementSelector) {
        elementSelector.style.transform = "none"
      }
    } //if (do_animation)    
  })
}

function do_preview_curtain_animation() {
  // find all animated element wrappers with data-anim attribute
  var animNodes = document.querySelectorAll(".de_reveal_animation_yes.de_reveal_animation_type_blockcurtain.elementor-element-editable");

  // For each animated element, set initial state based on animation object in animations array
  Array.prototype.forEach.call(animNodes, function (element, index) { 
      // Get threshold settings from class de_reveal_start_
      var classes = element.getAttribute("class")
      var arr_classes = classes.split(' ')
      var de_reveal_start = 0
      var de_reveal_curtain_direction = 'lr'
      var de_reveal_easing = 'linier'
      var de_reveal_duration = 2000
      var de_reveal_curtain_delay = 0
      Array.prototype.forEach.call(arr_classes, function(item, num){
        if ( item.search('de_reveal_start_') === 0 ) {
          de_reveal_start = item.replace('de_reveal_start_','')
        }

        if ( item.search('de_reveal_curtain_direction_') === 0 ) {
          de_reveal_curtain_direction = item.replace('de_reveal_curtain_direction_','')

          element.setAttribute("data-de-reveal-curtain-direction", de_reveal_curtain_direction)
        }

        if ( item.search('de_reveal_curtain_delay_') === 0 ) {
          de_reveal_curtain_delay = item.replace('de_reveal_curtain_delay_','')

          element.setAttribute("data-de-reveal-curtain-delay", de_reveal_curtain_delay)
        }

        if ( item.search('de_reveal_easing_') === 0 ) {
          de_reveal_easing = item.replace('de_reveal_easing_','')

          element.setAttribute("data-de-reveal-easing", de_reveal_easing)
        }

        if ( item.search('de_reveal_duration_') === 0 ) {
          de_reveal_duration = item.replace('de_reveal_duration_','')

          element.setAttribute("data-de-reveal-duration", de_reveal_duration)
        }  
      })
      
      var revealer = new RevealFx(element);

      revealer.reveal({
        duration: de_reveal_duration,
        direction: de_reveal_curtain_direction,
        easing: de_reveal_easing,
        delay: de_reveal_curtain_delay,
        onStart: function(contentEl, revealerEl) { 
          if (contentEl) { contentEl.style.opacity = 0 }
        },
        onCover: function(contentEl, revealerEl) { 
          if (contentEl) { contentEl.style.opacity = 1 }
        },
        onComplete: function(contentEl, revealerEl) { 
          if (contentEl) { contentEl.style.opacity = 1 }
        },
      });

      delete revealer
    
  })
}

function do_preview_letter_animation() {
  // find all animated element wrappers with data-anim attribute
  var animNodes = document.querySelectorAll(".de_reveal_animation_yes.de_reveal_animation_type_letter.elementor-element-editable");

  // For each animated element, set initial state based on animation object in animations array
  Array.prototype.forEach.call(animNodes, function (element, index) {
    // Get threshold settings from class de_reveal_start_
    var classes = element.getAttribute("class")
    var arr_classes = classes.split(' ')
    var de_reveal_start = 0
    var initial_state = 'hidden'

    Array.prototype.forEach.call(arr_classes, function(item, num){
      if ( item.search('de_reveal_start_') === 0 ) {
        de_reveal_start = item.replace('de_reveal_start_','')
      }

      if ( item.search('de_reveal_letter_initial_state_') === 0 ) {
        initial_state = item.replace('de_reveal_letter_initial_state_','')
      }

      if ( item.search('de_reveal_letter_effects_') === 0 ) {
        var de_reveal_letter_effects = item.replace('de_reveal_letter_effects_','')

        element.setAttribute("data-dereveal-letter-effects", de_reveal_letter_effects)
      }
    })
    var threshold = de_reveal_start;

    var animated = element.querySelectorAll(".elementor-widget-container > *:not(style)");

    Array.prototype.forEach.call(animated, function(el, i){
      var hasLetterEffect = el.classList.contains('letter-effect')

      // if ( !hasLetterEffect ) {
        var de_reveal_letter_effects = element.getAttribute("data-dereveal-letter-effects")
        originalLetters = el.innerText
        letterAnim = new TextFx(el)
        if ( initial_state==='hidden' ) {
          letterAnim.hide()
        } else {
          letterAnim.show()  
        }
        letterAnim.show(de_reveal_letter_effects, callback_after_letter_animation)
      // }      
    })
  })
}

function callback_after_letter_animation() {
  if (letterAnim) {
    letterAnim.el.innerText = originalLetters
    letterAnim.el.classList.remove('letter-effect')    
  }
}


jQuery( window ).on( 'elementor/frontend/init', () => {  
  const addHandler = ( $element ) => {
    elementorFrontend.elementsHandler.addHandler( DeRevealAnimationHandlerClass, {
      $element,
    } );
  };

  elementorFrontend.hooks.addAction( 'frontend/element_ready/global', addHandler );
  
  if ( undefined !== window.elementor ) {
    elementor.channels.editor.on( 'RunPreviewDefault', () => do_preview_default_animation() )
    elementor.channels.editor.on( 'RunPreviewCurtain', () => do_preview_curtain_animation() )
    elementor.channels.editor.on( 'RunPreviewLetter', () => do_preview_letter_animation() )
  }
});

jQuery( document ).ready( () => {
  de_reveal_init_responsive()
})

jQuery( window ).on( 'resize', () => {
  de_reveal_init_responsive()
})

function de_reveal_init_responsive() {
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

  const editMode = document.querySelector('.elementor-editor-active')

  if (!editMode) {
    const elements = document.querySelectorAll(".de_reveal_animation_yes")
  
    Array.prototype.forEach.call(elements, function (element, index) { 
      element.classList.remove('de_reveal_run_animation')
      element.removeAttribute("data-de-reveal-run-animation")
      
      if ( onDesktop && element.classList.contains('de_reveal_on_desktop_yes') ) {
        if (!element.classList.contains('de_reveal_run_animation')) {
          element.classList.add('de_reveal_run_animation')
          element.setAttribute("data-de-reveal-run-animation", "true")
        }
      }
  
      if ( onTablet && element.classList.contains('de_reveal_on_tablet_yes') ) {
        if (!element.classList.contains('de_reveal_run_animation')) {
          element.classList.add('de_reveal_run_animation')
          element.setAttribute("data-de-reveal-run-animation", "true")
        }
      }
  
      if ( onMobile && element.classList.contains('de_reveal_on_mobile_yes') ) {
        if (!element.classList.contains('de_reveal_run_animation')) {
          element.classList.add('de_reveal_run_animation')
          element.setAttribute("data-de-reveal-run-animation", "true")
        }
      }
  
    })
  }
}
