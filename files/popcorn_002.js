// PLUGIN: SLIDE

(function (Popcorn) {
  
  /**
   * SLIDE popcorn plug-in 
   * Adds HTML DIV SLIDE to an element on the page.
   * Options parameter will need a start, end, target and ID OF SOURCE DIV.
   * Start is the time that you want this plug-in to execute
   * End is the time that you want this plug-in to stop executing 
   * ID is the ID if the source DIV element which will be embeded in target.
   * Target is the id of the document element that the text needs to be 
   * attached to, this target element must exist on the DOM
   * 
   * @param {Object} options
   * 
   * Example:
     var p = Popcorn('#video')
        .slide({
          start: 5, // seconds
          end: 15, // seconds
          slide: 'div1',
          target: 'slidediv'
        } )
   *
   */
  Popcorn.plugin( "slide" , {
    
    manifest: {
      about:{
        name: "Popcorn SLIDE Plugin",
        version: "0.1",
        author: "@nsisodiya",
        website: "narendra@narendrasisodiya.com"
      },
      options:{
        start    : {elem:'input', type:'text', label:'In'},
        end      : {elem:'input', type:'text', label:'Out'},
        slidenum : {elem:'input', type:'text', label:'Slide'}
      }
    },
    _setup: function(options) {
      
    },
    start: function(event, options){
	LoadSlide(options.slidenum);
    },
    end: function(event, options){
	HideSlide(options.slidenum);
    }
   
  });

})( Popcorn );
