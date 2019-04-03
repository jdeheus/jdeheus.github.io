//Checks initial window size & applies relevant classes if necessary
$(document).ready(function () {
  var WinWidth = $(window).width();
  if (WinWidth < 640) {
    $("#prev").removeClass( "uk-margin-medium-top" );
    $("#next").addClass("uk-margin-small-bottom");
    $("#prev").addClass("uk-margin-small-top");
  }
});

//Adds or subtracts classes as window is resized
$(window).resize(function(event){
  var WinWidth = $(window).width();
  if (WinWidth < 640) {
    $("#prev").removeClass( "uk-margin-medium-top" );
    $("#next").addClass("uk-margin-small-bottom");
    $("#prev").addClass("uk-margin-small-top");
  } else {
    $("#prev").addClass("uk-margin-medium-top");
    $("#next").removeClass("uk-margin-small-bottom");
  }
});

//Activates overlay and button no matter what you're hovering over in the card.
$(document).ready(function () {
  $('.uk-overflow-hidden').hover(function () {
        $(this).parent().find('.portfolio-buttons').css('border-color','#b2b2b2');
     },

     function () {
        $(this).parent().find('.portfolio-buttons').css('border-color','#e5e5e5');
     }
   );
  $('.portfolio-buttons').hover(function () {
        $(this).parent().find('div').addClass('uk-hover');
        $(this).css('border-color','#b2b2b2');
     },

     function () {
        $(this).parent().find('div').removeClass('uk-hover');
        $(this).css('border-color','#e5e5e5');
     }
   );
  });
