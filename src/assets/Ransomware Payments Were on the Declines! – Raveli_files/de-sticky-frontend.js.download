( function( $, elementor ) {

	'use strict';

	var DeSticky = {

		init: function() {
			elementor.hooks.addAction( 'frontend/element_ready/column', DeSticky.elementorColumn );

			elementorFrontend.hooks.addAction( 'frontend/element_ready/section', DeSticky.setStickySection );

			// $( document ).on( 'ready', DeSticky.stickySection );
			$( DeSticky.stickySection );
		},

		elementorColumn: function( $scope ) {
			var $target  = $scope,
				$window  = $( window ),
				columnId = $target.data( 'id' ),
				editMode = Boolean( elementor.isEditMode() ),
				settings = {},
				stickyInstance = null,
				stickyInstanceOptions = {
					topSpacing: 50,
					bottomSpacing: 50,
					containerSelector: '.elementor-section',
					innerWrapperSelector: '.elementor-widget-wrap'
				};

			if ( ! editMode ) {
				settings = $target.data( 'de-sticky-column-settings' );

				if ( $target.hasClass( 'de-sticky-column-sticky' ) ) {

					if ( -1 !== settings['stickyOn'].indexOf( elementorFrontend.getCurrentDeviceMode() ) ) {

						stickyInstanceOptions.topSpacing = settings['topSpacing'];
						stickyInstanceOptions.bottomSpacing = settings['bottomSpacing'];

						$target.data( 'stickyColumnInit', true );
						stickyInstance = new StickySidebar( $target[0], stickyInstanceOptions );

						$window.on( 'resize.DeStickyColumnSticky orientationchange.DeStickyColumnSticky', DeStickyTools.debounce( 50, resizeDebounce ) );
					}
				}
			} else {
				settings = DeSticky.columnEditorSettings( columnId );

				if ( 'true' === settings['sticky'] ) {
					$target.addClass( 'de-sticky-column-sticky' );

					if ( -1 !== settings['stickyOn'].indexOf( elementorFrontend.getCurrentDeviceMode() ) ) {
						stickyInstanceOptions.topSpacing = settings['topSpacing'];
						stickyInstanceOptions.bottomSpacing = settings['bottomSpacing'];

						$target.data( 'stickyColumnInit', true );
						stickyInstance = new StickySidebar( $target[0], stickyInstanceOptions );

						$window.on( 'resize.DeStickyColumnSticky orientationchange.DeStickyColumnSticky', DeStickyTools.debounce( 50, resizeDebounce ) );
					}
				}
			}
			

			function resizeDebounce() {
				var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
					availableDevices  = settings['stickyOn'] || [],
					isInit            = $target.data( 'stickyColumnInit' );

				if ( -1 !== availableDevices.indexOf( currentDeviceMode ) ) {

					if ( ! isInit ) {
						$target.data( 'stickyColumnInit', true );
						stickyInstance = new StickySidebar( $target[0], stickyInstanceOptions );
						stickyInstance.updateSticky();
					}
				} else {
					$target.data( 'stickyColumnInit', false );
					stickyInstance.destroy();
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
				// 'active': columnData['dethemekit_carousel_active_column'] || false,
				'sticky': columnData['de_sticky_column_sticky_enable'] || false,
				'topSpacing': columnData['de_sticky_column_sticky_top_spacing'] || 50,
				'bottomSpacing': columnData['de_sticky_column_sticky_bottom_spacing'] || 50,
				'stickyOn': columnData['de_sticky_column_sticky_enable_on'] || [ 'desktop', 'tablet', 'mobile']
			}
		},

		getStickySectionsDesktop: [],
		getStickySectionsTablet:  [],
		getStickySectionsMobile:  [],

		setStickySection: function( $scope ) {
			var setStickySection = {

				target: $scope,
				
				isEditMode: Boolean( elementorFrontend.isEditMode() ),

				init: function() {
					if ( this.isEditMode ) {
						return;
					}

					if (  'yes' === this.getSectionSetting( 'de_sticky_section_sticky' ) ) {
						var availableDevices = this.getSectionSetting( 'de_sticky_section_sticky_visibility' ) || [];

						if ( ! availableDevices[0] ) {
							return;
						}

						if ( -1 !== availableDevices.indexOf( 'desktop' ) ) {
							DeSticky.getStickySectionsDesktop.push( $scope );
						}

						if ( -1 !== availableDevices.indexOf( 'tablet' ) ) {
							DeSticky.getStickySectionsTablet.push( $scope );
						}

						if ( -1 !== availableDevices.indexOf( 'mobile' ) ) {
							DeSticky.getStickySectionsMobile.push( $scope );
						}
					}
				},

				getSectionSetting: function( setting ){
					var settings = {},
						editMode = Boolean( elementorFrontend.isEditMode() );

					if ( editMode ) {
						if ( ! elementorFrontend.hasOwnProperty( 'config' ) ) {
							return;
						}

						if ( ! elementorFrontend.config.hasOwnProperty( 'elements' ) ) {
							return;
						}

						if ( ! elementorFrontend.config.elements.hasOwnProperty( 'data' ) ) {
							return;
						}

						var modelCID = this.target.data( 'model-cid' ),
							editorSectionData = elementorFrontend.config.elements.data[ modelCID ];

						if ( ! editorSectionData ) {
							return;
						}

						if ( ! editorSectionData.hasOwnProperty( 'attributes' ) ) {
							return;
						}

						settings = editorSectionData.attributes || {};
					} else {
						settings = this.target.data( 'settings' ) || {};
					}

					if ( ! settings[ setting ] ) {
						return;
					}

					return settings[ setting ];
				},

				
			};

			setStickySection.init();
		},

		stickySection: function() {
			var stickySection = {

				isEditMode: Boolean( elementorFrontend.isEditMode() ),

				correctionSelector: $( '#wpadminbar' ),

				initDesktop: false,
				initTablet:  false,
				initMobile:  false,

				init: function() {
					if ( this.isEditMode ) {
						return;
					}

					this.run();
					$( window ).on( 'resize.DeStickySectionSticky orientationchange.DeStickySectionSticky', this.run.bind( this ) );
				},

				getOffset: function(){
					var offset = 0;

					if ( this.correctionSelector[0] && 'fixed' === this.correctionSelector.css( 'position' ) ) {
						offset = this.correctionSelector.outerHeight( true );
					}

					return offset;
				},

				run: function() {
					var currentDeviceMode = elementorFrontend.getCurrentDeviceMode(),
						transitionIn  = 'de-sticky-transition-in',
						transitionOut = 'de-sticky-transition-out',
						options = {
							stickyClass: 'de-sticky-section-sticky--stuck',
							topSpacing: this.getOffset()
						};

					function initSticky ( section, options ) {
						section.deStickySection( options )
							.on( 'deStickySection:stick', function( event ) {
								$( event.target ).addClass( transitionIn );
								setTimeout( function() {
									$( event.target ).removeClass( transitionIn );
								}, 3000 );
							} )
							.on( 'deStickySection:unstick', function( event ) {
								$( event.target ).addClass( transitionOut );
								setTimeout( function() {
									$( event.target ).removeClass( transitionOut );
								}, 3000 );
							} );
						section.trigger( 'deStickySection:activated' );
					}

					if ( 'desktop' === currentDeviceMode && ! this.initDesktop ) {
						if ( this.initTablet ) {
							DeSticky.getStickySectionsTablet.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initTablet = false;
						}

						if ( this.initMobile ) {
							DeSticky.getStickySectionsMobile.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initMobile = false;
						}

						if ( DeSticky.getStickySectionsDesktop[0] ) {
							DeSticky.getStickySectionsDesktop.forEach( function( section, i ) {

								if ( DeSticky.getStickySectionsDesktop[i+1] ) {
									options.stopper = DeSticky.getStickySectionsDesktop[i+1];
								} else {
									options.stopper = '';
								}

								initSticky( section, options );
							});

							this.initDesktop = true;
						}
					}

					if ( 'tablet' === currentDeviceMode && ! this.initTablet ) {
						if ( this.initDesktop ) {
							DeSticky.getStickySectionsDesktop.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initDesktop = false;
						}

						if ( this.initMobile ) {
							DeSticky.getStickySectionsMobile.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initMobile = false;
						}

						if ( DeSticky.getStickySectionsTablet[0] ) {
							DeSticky.getStickySectionsTablet.forEach( function( section, i ) {
								if ( DeSticky.getStickySectionsTablet[i+1] ) {
									options.stopper = DeSticky.getStickySectionsTablet[i+1];
								} else {
									options.stopper = '';
								}

								initSticky( section, options );
							});

							this.initTablet = true;
						}
					}

					if ( 'mobile' === currentDeviceMode && ! this.initMobile ) {
						if ( this.initDesktop ) {
							DeSticky.getStickySectionsDesktop.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initDesktop = false;
						}

						if ( this.initTablet ) {
							DeSticky.getStickySectionsTablet.forEach( function( section, i ) {
								section.trigger( 'deStickySection:detach' );
							});

							this.initTablet = false;
						}

						if ( DeSticky.getStickySectionsMobile[0] ) {
							DeSticky.getStickySectionsMobile.forEach( function( section, i ) {

								if ( DeSticky.getStickySectionsMobile[i+1] ) {
									options.stopper = DeSticky.getStickySectionsMobile[i+1];
								} else {
									options.stopper = '';
								}

								initSticky( section, options );
							});

							this.initMobile = true;
						}
					}
				}
			};

			stickySection.init();
		}
	};

	$( window ).on( 'elementor/frontend/init', DeSticky.init );

	var DeStickyTools = {
		debounce: function( threshold, callback ) {
			var timeout;

			return function debounced( $event ) {
				function delayed() {
					callback.call( this, $event );
					timeout = null;
				}

				if ( timeout ) {
					clearTimeout( timeout );
				}

				timeout = setTimeout( delayed, threshold );
			};
		}
	}

}( jQuery, window.elementorFrontend ) );
