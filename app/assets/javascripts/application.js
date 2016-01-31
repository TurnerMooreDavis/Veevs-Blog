// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){
  $('.welcome').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>')
  $('.welcome').append('<script src="https://github.com/kswedberg/jquery-smooth-scroll/blob/master/jquery.smooth-scroll.min.js"></script>');
  $('.smooth').on('click', function() {
      $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
      });
      return false;
  });
  $('#facebook-link').find('a').html("<img src='/facebook-symbol.png' class='icon' ></img>");
  $('#twitter-link').find('a').html("<img src='/twitter-link.png' class='icon'></img>");
  $('#linkedin-link').find('a').html("<img src='/linkedin-logo.png' class='icon'></img>");
  $('#google-link').find('a').html("<img src='/google-reg-trademark.png' class='icon'></img>");
});

$(function hideSocialMediaButtons(){
  setTimeout(function(){
    // $('.hidden-buttons').hide();
  }, 10);
});

$(function dropDownArrows() {
  var dropDownArrows = '.drop-down-arrows, .drop-down-label';
  if ($(window).width() <= 768) {
    var dropDownArrows= '.drop-down-arrows, .drop-down-label, .drop-down-label-phone';
  }
  $(dropDownArrows).on('click', function() {
    var dropDown = $(this).parent().find('.drop-down-content'),
        arrowDown = $(this).parent().find('.arrow-down'),
        arrowUp = $(this).parent().find('.arrow-up');
    dropDown.slideToggle();
    arrowDown.toggle();
    arrowUp.toggle();
  });
});

function toggleArticle(articleName) {
  $("#"+articleName+"-contents").slideToggle();
  $("#"+articleName+"-collapse .arrowUp").toggle();
  $("#"+articleName+"-collapse .arrowDown").toggle();
}

$(function clickIcon(){
  $('.icon').on('click',function(){
    var name = $(this).attr('data-name');
    var link = $('#'+name+'-link').find('a');
    console.log(link);
    console.log(link.attr('href'));
  });
});
