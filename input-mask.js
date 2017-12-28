$(function(){
	$.each($("[type='tel']"), function(i,v){
		$(this).inputmask({"mask": $(this).attr("mask")})
	});
});