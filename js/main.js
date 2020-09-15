jQuery(document).ready(function(){
    jQuery(".self-toggle-btn").click(function(){
        jQuery(".self-nav").slideDown();
    });
    jQuery(".button-close").click(function(){
        jQuery(".self-nav").slideUp();
    });
});
jQuery(document).ready(function(){
	$.fn.moveIt = function(){
	  var $window = jQuery(window);
	  var instances = [];
	  
	  jQuery(this).each(function(){
	    instances.push(new moveItItem(jQuery(this)));
	  });
	  
	  window.addEventListener('scroll', function(){
	    var scrollTop = $window.scrollTop();
	    instances.forEach(function(inst){
	      inst.update(scrollTop);
	    });
	  }, {passive: true});
	}

	var moveItItem = function(el){
	  this.el = jQuery(el);
	  this.speed = parseInt(this.el.attr('data-scroll-speed'));
	};

	moveItItem.prototype.update = function(scrollTop){
	  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
	};

	// Initialization
	jQuery(function(){
	  jQuery('[data-scroll-speed]').moveIt();
	});
});