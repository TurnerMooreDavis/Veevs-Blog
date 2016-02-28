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

function toggleArticle(articleId) {
  $("#"+articleId+"-contents").slideToggle();
  $("#"+articleId+"-collapse .arrowUp").toggle();
  $("#"+articleId+"-collapse .arrowDown").toggle();
}

$(function clickIcon(){
  $('.icon').on('click',function(){
    var name = $(this).attr('data-name');
    var link = $('#'+name+'-link').find('a');
    console.log(link);
    console.log(link.attr('href'));
  });
});

$(function initialize(){
  console.log("loaded");
  $('#page1').fadeTo(2500, 0.6);
  $('.title').fadeTo(2500, 1, function(){
    $('#creativity').fadeTo(1300,1,function(){
      $('#craftsmanship').fadeTo(1150,1, function(){
        $('#consistancy').fadeTo(1000,1, function(){
          console.log('animation complete');
        });
      });
    });
  });
  $(document).one('scroll', function(){
    $('#header').fadeIn(400);
    console.log('scrolling');
  });
});

$(function fadeInCards(){
  $(window).scroll( function(){

       /* Check the location of each desired element */
       $('.row').each( function(i){

           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
           var bottom_of_window = $(window).scrollTop() + $(window).height();

           /* If the object is completely visible in the window, fade it it */
           if( bottom_of_window > bottom_of_object-100 ){
            var row = $(this);

            row.find("#1").animate({'opacity':'1'},1500);
            setTimeout(function(){
              row.find("#2").animate({'opacity':'1'},1500);
                setTimeout(function(){
                  row.find("#3").animate({'opacity':'1'},1500);
                },200);
              },200);
           }

       });

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
