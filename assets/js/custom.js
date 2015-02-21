/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
(function(jQuery) {
    "use strict";
	var check = true;
	jQuery.fn.tfTheme = function(options) {
			var that = this;
			return this.each(function() {
					init(jQuery(this) );
			} );
			function flexslider() {
					jQuery('.home_slide').flexslider({
						controlNav: false,
						animation: "slides",
						animationLoop: true,
						itemWidth: 684,
						itemMargin: 0,
						minItems: 1,
						maxItems: 1,
						prevText: "",
						nextText: ""
					});
					jQuery('.feature_slider').flexslider({
						animation: "fade",
						direction: "vertical", 
						slideshow: true,
						minItems: 1,
						maxItems: 1,
						slideshowSpeed: 3500,
						animationDuration: 1000,
						directionNav: false,
						controlNav: false,
						touch: false,
						itemMargin: 0,
						prevText: "",
						nextText: ""
				  });	
					jQuery('.services_slide').flexslider({
						controlNav: false,
						animation: "slides",
						animationLoop: true,
						itemWidth: 684,
						itemMargin: 0,
						minItems: 1,
						maxItems: 1,
						prevText: "",
						nextText: ""
					});					
					jQuery('.twitter_slide').flexslider({
						controlNav: false,
						animation: "slides",
						animationLoop: true,
						itemWidth: 684,
						itemMargin: 0,
						minItems: 1,
						maxItems: 1,
						prevText: "",
						nextText: ""
					});					
					jQuery('.portfolio_slide').flexslider({
						slideshow: false,
						controlNav: false,
						animation: "slides",
						animationLoop: true,
						itemWidth: 684,
						itemMargin: 0,
						minItems: 1,
						maxItems: 1,
						prevText: "",
						nextText: ""
					});
			}  
			
			function progress(){
			$('.second').each(function(){
				$(this).circleProgress({
					value: parseFloat($(this).attr("data-percent"))/100
				}).on('circle-animation-progress', function(event, progress) {
					$(this).find('strong').html(parseInt($(this).attr("data-percent") * progress) + '<i>%</i>');
				});
			});
			}
			function animated() {
				jQuery('.section-info,.skill-title,.imac,.fade,.element-item,.black,#map').addClass("hidden").viewportChecker({
						classToAdd: 'visible animated fadeIn',
						offset: 100,
				});
				jQuery('.skill').addClass("hidden").viewportChecker({
						classToAdd: 'visible animated fadeIn',
						offset: 100,
						callbackFunction: function(elem){
							progress();
						}
				});	
				jQuery('#contact-form').addClass("hidden").viewportChecker({
						classToAdd: 'visible animated bounceInLeft', 
						offset: 100,
				});	
				jQuery('#contact-info').addClass("hidden").viewportChecker({
						classToAdd: 'visible animated bounceInRight', 
						offset: 100,
				});
			}
			function init($contex) {
			flexslider();
			animated();
			}
	} /* END Class */
})(jQuery);
jQuery(document).ready(function() {
	jQuery('body').tfTheme();
});
