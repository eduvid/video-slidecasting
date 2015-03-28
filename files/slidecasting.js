var AllSlides = "" ;
//SlideTiming Syntax - [slidenum, starttime, endtime]

//var SlideTiming = [[],[]];;
var SlideTiming = new Array();
function LoadSlide(slidenum){
	AllSlides.eq(slidenum).show();
}

function HideSlide(slidenum){
	AllSlides.eq(slidenum).hide();

}

//document.addEventListener('DOMContentLoaded', function () {
$(function(){

	AllSlides = $(".presentation .slide");
	AllSlides.hide();

	var popcorn = Popcorn( "#sc_audio" );
	$.get("files/time.xml",function(data, res){
		$("sc_slides click",data).each(function(i, val){
	
			SlideTiming[i]= new Array() ;
			
			SlideTiming[i][1] = $(val).attr("time");
			SlideTiming[i][2] = "100000";
			
			if(i != 0){
				SlideTiming[parseInt(i)-1][2] = $(val).attr("time");
			}
			
			SlideTiming[i][0] = $(val).attr("page");
		});
		
		for (var i = 0; i < SlideTiming.length; i++){ 
			popcorn.slide({
				start: SlideTiming[i][1], // seconds
				end: SlideTiming[i][2], // seconds
				slidenum: SlideTiming[i][0]
			})	
		
		}
	
	});
	
  //popcorn.play(); //optional

});
//},false);

