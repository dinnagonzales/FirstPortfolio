$(document).ready(function(){
   var $a = $('a#fourthbox'), $targets = $('div.targets');
   $a.on('click', function(e) {
      e.preventDefault(); 
      var i = $a.index(this);
      var offset = $targets.eq(++i).offset().top;
      $('html, body').stop().animate({ scrollTop: offset }, 400);
   });
});