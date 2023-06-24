( function( $, elementor ) {

	'use strict';

	var DeSticky = {

		init: function() {
			elementor.hooks.addAction( 'frontend/element_ready/column', DeSticky.elementorColumn );

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
                    if ( 'yes' === settings['de_column1'] ) {
                        $target.addClass( 'dethemekit_child_de_carousel_1 de-carousel-active' );
                    }else {
                        if ( $target.hasClass('dethemekit_child_de_carousel_1') ){
                            $target.removeClass( 'dethemekit_child_de_carousel_1 de-carousel-active' );
                        }
                    }
                    if ( 'yes' === settings['de_column2'] ) {
                        $target.addClass( 'dethemekit_child_de_carousel_2 de-carousel-active' );
                    }else {
                        if ( $target.hasClass('dethemekit_child_de_carousel_2') ){
                            $target.removeClass( 'dethemekit_child_de_carousel_2 de-carousel-active' );
                        }
                    }
                    if ( 'yes' === settings['de_column3'] ) {
                        $target.addClass( 'dethemekit_child_de_carousel_3 de-carousel-active' );
                    }else {
                        if ( $target.hasClass('dethemekit_child_de_carousel_3') ){
                            $target.removeClass( 'dethemekit_child_de_carousel_3 de-carousel-active' );
                        }
                    }
                    if ( 'yes' === settings['de_column4'] ) {
                        $target.addClass( 'dethemekit_child_de_carousel_4 de-carousel-active' );
                    }else {
                        if ( $target.hasClass('dethemekit_child_de_carousel_4') ){
                            $target.removeClass( 'dethemekit_child_de_carousel_4 de-carousel-active' );
                        }
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
                    'de_column1': columnData['dethemekit_carousel_tab_active1'] || false,
                    'de_column2': columnData['dethemekit_carousel_tab_active2'] || false,
                    'de_column3': columnData['dethemekit_carousel_tab_active3'] || false,
                    'de_column4': columnData['dethemekit_carousel_tab_active4'] || false
                }
            }
        }

        $( window ).on( 'elementor/frontend/init', DeSticky.init );

        

    }( jQuery, window.elementorFrontend ) );