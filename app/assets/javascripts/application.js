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
  if ($('.portfolio-page, .contact-me, .about, .articles-page').length > 0) {
    $('#header').show();
  }
  $('#page1 img').fadeTo(2500, 0.2);
  $('.title').fadeTo(2500, 1, function(){
    $('#creativity').fadeTo(1300,1,function(){
      $('#craftsmanship').fadeTo(1150,1, function(){
        $('#consistancy').fadeTo(1000,1, function(){
          $('#page1 img').fadeTo(2500, 0.5);
          $('#header').fadeIn(2500);
        });
      });
    });
  });
  $(document).one('scroll', function(){
    $('#header').fadeIn(400);
  });
});

$(function fadeInShortCards(){
  var jCards = document.getElementsByClassName("tall card");
  $(jCards).each(function(i,el){
    el.style.webkitAnimationPlayState = "paused";
  });

  var animation1complete = false;
  var animation2complete = false;
  $(window).scroll( function(){
    var bottom_of_window = $(window).scrollTop() + $(window).height();
       /* Check the location of each desired element */
    /* If the object is completely visible in the window, fade it it */
    if (animation1complete != true) {
      $('.card.short').each(function(el){
        var card = $(this);
        var bottomOfCard = card.offset().top + card.outerHeight();
        if(bottom_of_window > bottomOfCard-100 ){
          card.animate({'opacity':'1'},1500);
          if (card.attr('id') == "6"){
            animation1complete = true;
          }
        }
      });
    }
  if (animation2complete != true) {
    $(jCards).each(function(i,el){
      var card = $(this);
      var bottomOfCard = card.offset().top + card.outerHeight();
      if(bottom_of_window > bottomOfCard-150){
        el.style.webkitAnimationPlayState = "running";
        if (card.attr('id') == "3"){
          animation2complete = true;
        }
      }
    })
  }
  });
});

$(function displayQuality(){
  $('.right-column ul li').on('click', function(){
    var text = $(this).attr('data-quality-text');
      $('.quality').animate({'opacity': '0'},1000);
      $('.left-column img').animate({'opacity': '.7'}, 1000 , function(){
        $('.quality').animate({'opacity': '1'},1000);
        $('.left-column img').animate({'opacity': '.3'},1000);
        $('.quality').text(text);
      });
  });
  $('.right-column ul li').on('mouseout', function(){
    // $(this).css("cursor", "mouse");
    // $(this).css("background-color", "#DFDFDF");
    // $(this).css("color", "black");
  });
  // $('.right-column ul').on('mouseleave', function(){
  //   $('.left-column img').animate({'opacity': '1'},400);
  //   $('.left-column .quality').animate({'opacity': '0'},400);
  // });
});


// function drawWords(text){
//   var canvas = document.querySelector("canvas");
//   var ctx = document.querySelector("canvas").getContext("2d"),
//       dashLen = 220, dashOffset = dashLen, speed = 300,
//       txt = text, x = 5, i = 0;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.font = "Oxygen, san-serif";
//   ctx.lineWidth = 1; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
//   ctx.strokeStyle = ctx.fillStyle = "#408000";
//
//   (function loop() {
//     ctx.clearRect(x, 0, 60, 150);
//     ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
//     dashOffset -= speed;                                         // reduce dash length
//     ctx.strokeText(txt[i], x, 90);                               // stroke letter
//
//     if (dashOffset > 0) requestAnimationFrame(loop);             // animate
//     else {
//       ctx.fillText(txt[i], x, 90);                               // fill final letter
//       dashOffset = dashLen;                                      // prep next char
//       x += ctx.measureText(txt[i++]).width + ctx.lineWidth;
//       if (i < txt.length) requestAnimationFrame(loop);
//     }
//   })()
//
// }
// $(function triggerDrawWords(){
//   $('#page3 .right-column li').on('click',function(){
//     var text = $(this).attr('data-quality-text')
//     $('.left-column img').animate({'opacity': '.3'},400,function(){
//       drawWords(text);
//     });
//   });
// });
