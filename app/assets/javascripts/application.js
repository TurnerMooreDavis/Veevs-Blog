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
  $('#facebook-link').find('a').html("<i class='fa fa-facebook-square fa-5x' style='color: #408000'>");
  $('#twitter-link').find('a').html('<i class="fa fa-twitter-square fa-5x" style="color: #408000"></i>');
  $('#linkedin-link').find('a').html('<i class="fa fa-linkedin-square fa-5x" style="color: #408000"></i>');
  $('#google-link').find('a').html('<i class="fa fa-google-plus-square fa-5x" style="color: #408000"></i>');
});

function toggleArticle(articleId) {
  $("#"+articleId+"-contents").slideToggle();
  $("#"+articleId+"-collapse .arrowUp").toggle();
  $("#"+articleId+"-collapse .arrowDown").toggle();
}

$(function clickIcon(){
  $('.icon').on('click',function(){
    var name = $(this).attr('data-name');
    var link = $('#'+name+'-link').find('a');
  });
});

$(function initialize(){
  $('#page1').fadeTo(2500, 0.6);
  $('.title').fadeTo(2500, 1, function(){
    $('#creativity').fadeTo(1300,1,function(){
      $('#craftsmanship').fadeTo(1150,1, function(){
        $('#consistancy').fadeTo(1000,1, function(){
        });
      });
    });
  });
  $(document).one('scroll', function(){
    $('#header').fadeIn(400);
  });
});

$(function fadeInShortCards(){
  var jRows = document.getElementsByClassName("tall card");
  $(jRows).each(function(i,el){
    el.style.webkitAnimationPlayState = "paused";
  })
  var row1 = $('.row.short.1');
  var row2 = $('.row.short.2');
  var row3 = $('.row.tall');
  var animation1complete = false;
  var animation2complete = false;
  var animation3complete = false;
  bottom_of_object1 = row1.offset().top + row1.outerHeight();
  bottom_of_object2 = row2.offset().top + row2.outerHeight();
  bottom_of_object3 = row3.offset().top + row3.outerHeight();
  $(window).scroll( function(){
       /* Check the location of each desired element */
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    /* If the object is completely visible in the window, fade it it */
    if( animation1complete != true && bottom_of_window > bottom_of_object1-100 ){
      row1.find("#1").animate({'opacity':'1'},1500);
        setTimeout(function(){
          row1.find("#2").animate({'opacity':'1'},1500);
          setTimeout(function(){
            row1.find("#3").animate({'opacity':'1'},1500);
            animation1complete = true;
          },200);
      },200);
    }
    if(animation2complete != true && bottom_of_window > bottom_of_object2-100 ){
      row2.find("#1").animate({'opacity':'1'},1500);
        setTimeout(function(){
          row2.find("#2").animate({'opacity':'1'},1500);
          setTimeout(function(){
            row2.find("#3").animate({'opacity':'1'},1500);
            animation2complete = true;
          },200);
      },200);
    }
    if(animation3complete != true && bottom_of_window > bottom_of_object3-300 ){
      $(jRows).each(function(i,el){
        el.style.webkitAnimationPlayState = "running";
      })
      animation3complete = true;
    }
   });
});

$(function displayQuality(){
  $('.right-column ul li').on('mouseover', function(){
    $(this).css("cursor", "pointer");
    $(this).css("background-color", "#2E2F2E");
    $(this).css("color", "white");
    var text = $(this).attr('data-quality-text');
    $('.left-column .quality').html(text).animate({'opacity': '1'},400);
    $('.left-column img').animate({'opacity': '.3'},400);
  });
  $('.right-column ul li').on('mouseout', function(){
    $(this).css("cursor", "mouse");
    $(this).css("background-color", "#DFDFDF");
    $(this).css("color", "black");

  });
  $('.right-column ul').on('mouseleave', function(){
    $('.left-column img').animate({'opacity': '1'},400);
    $('.left-column .quality').animate({'opacity': '0'},400);
  });
});
