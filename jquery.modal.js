(function( $ ){
  var overlay = $("<div id='overlay'></div>");
  var modal = $("<div id='modal'></div>");
  
      
  var methods = {
    init : function(options) {
  	var defaults = {
			ajax : undefined,
			width : 500,
			top : 100
		};
		var options = $.extend(defaults, options);
		$(this).click(function(e) {
			e.preventDefault();
			return methods.open({ajax: $(this).attr('href'), width: options.width, top : options.top});
		}); 
	},
    open : function(options) {
		var defaults = {
			ajax : undefined,
			width : 500,
			top : 100
		};
		var options = $.extend(defaults, options);
		$('body').append(overlay, modal);
		$("#overlay").fadeTo(500,overlay);
		$(modal).load(options.ajax);
		
		$(modal).css({"width":options.width+"px","padding":"10px","border":"3px solid #333"});
		 //get the height and width of the page
		var window_width = $(window).width();
		var window_height = $(window).height();
		
		var modal_height = $(modal).outerHeight();
		var modal_width = $(modal).outerWidth();
		
		var left = (window_width-modal_width)/2;
		
		$(overlay).css({"width":"100%","height":"100%","position":"absolute","top":"0","left":"0","background":"#999",opacity:0.5});
		$(modal).css({"position":"absolute","top":options.top+"px","left":left+"px","background":"#fff","color":"#000"});
		$("#modal").fadeTo(500,1);
    },
    close : function( ) { 
		$(this).click(function(e) {
			e.preventDefault();
			$(overlay).fadeOut(500);
			$(modal).fadeOut(500);
		});
    },
    autoClose : function() { 
		$(overlay).fadeOut(500);
		$(modal).fadeOut(500);
    }
  };

  $.fn.modal = function( method ) {
    
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }    
  
  };
  
})( jQuery );
