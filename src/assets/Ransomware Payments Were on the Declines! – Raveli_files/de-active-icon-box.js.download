( function( $, elementor ) {

	'use strict';

	var DeSticky = {

		init: function() {
			elementor.hooks.addAction( 'frontend/element_ready/column', DeSticky.elementorColumn );

			// elementorFrontend.hooks.addAction( 'frontend/element_ready/section', DeSticky.setStickySection );

			// $( document ).on( 'ready', DeSticky.stickySection );
		},

		elementorColumn: function( $scope ) {
			var $target  = $scope,
				cek = {},
				$window  = $( window ),
				columnId = $target.data( 'id' ),
				editMode = Boolean( elementor.isEditMode() ),
				settings = {},
				stickyInstance = null,
				stickyInstanceOptions = {
					topSpacing: 50,
					bottomSpacing: 50,
					containerSelector: '.elementor-container',
					innerWrapperSelector: '.elementor-column-wrap'
				};

                if ( editMode ) {
                    settings = DeSticky.columnEditorSettings( columnId );
                    if ( 'yes' === settings['de_icon_box'] ) {
                        // $target.addClass( 'de-carousel-tab-active-icon-box' );
                        $target.addClass( 'de-carousel-active' );
                    }else {
                        // $target.removeClass( 'de-carousel-tab-active-icon-box' );
                        $target.removeClass( 'de-carousel-active' );
                    }
                }
            },

            columnEditorSettings: function( columnId ) {
                var editorElements = null,
                    columnData     = {};
    
                if ( ! window.elementor.hasOwnProperty( 'elements' ) ) {
                    return false;
                }
    
                editorElements = window.elementor.elements;
    
                if ( ! editorElements.models ) {
                    return false;
                }
    
                $.each( editorElements.models, function( index, obj ) {
    
                    $.each( obj.attributes.elements.models, function( index, obj ) {
                        if ( columnId == obj.id ) {
                            columnData = obj.attributes.settings.attributes;
                        }
                    } );
    
                } );
    
                return {
                    'de_icon_box': columnData['dethemekit_carousel_tab_active_icon_box'] 
                }
            }
        }

        $( window ).on( 'elementor/frontend/init', DeSticky.init );

        

    }( jQuery, window.elementorFrontend ) );