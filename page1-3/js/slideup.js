$(document).ready(function(){
  $('#nav-icon1').click(function(){
    $(".panel").slideToggle("slow");
     $(this).toggleClass('open');
  });
