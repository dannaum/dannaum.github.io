$('.inv-mg-paste').keyup(function() {
  
  if ($(this).val().length == 0) {
    $('.ism-static-results').show();
    $('.ism-dynamic-results').hide();
  } else {
    $('.ism-dynamic-results').show();
    $('.ism-static-results').hide();
  }
}).keyup();


$('.ism-button').find('.ism-popup').on('click', function() {
      $('.ism_popup-main').toggleClass('active');
      $('body').css('overflow', 'hidden');
});

$('.ism-popup_close-button').click(function(e) {
  e.preventDefault(); 
$('.inv-mg-paste').val('');
$('.inv-mg-paste').trigger('input');
var el = document.querySelector('.inv-mg-paste');
  if ($('.inv-mg-paste').val().length == 0) {
    $('.ism-static-results').show();
    $('.ism-dynamic-results').hide();
    }
  else {
    $('.ism-static-results').hide();
    $('.ism-dynamic-results').show();
          }

  el.dispatchEvent(new Event('input', { bubbles: true }));
  $('.ism_popup-main').toggleClass('active');
  $('body').css('overflow', 'auto');
});

$(".ism_popup-main").click(function(e) {
  if (event.target == this) {
      e.preventDefault(); 
      $('.inv-mg-paste').val('');
      $('.inv-mg-paste').trigger('input');
      var ela = document.querySelector('.inv-mg-paste');
          if ($('.inv-mg-paste').val().length == 0) {
              $('.ism-static-results').show();
              $('.ism-dynamic-results').hide();
              }
          else {
              $('.ism-static-results').hide();
              $('.ism-dynamic-results').show();
              }
  
      ela.dispatchEvent(new Event('input', { bubbles: true }));
      $('.ism_popup-main').toggleClass('active');
      $('body').css('overflow', 'auto');
  }
});

$('#ism-form').on('keyup keypress', function(e) {
var keyCode = e.keyCode || e.which;
if (keyCode === 13) { 
  e.preventDefault();
  return false;
}
});

$('.who-we-are_members-single').on('click', function() {
  $(this).children('.who-we-are_members-single_bio').toggleClass('active');
    $('body').css('overflow', 'hidden');
});


$(".read_bio_modal").click(function(e) {
if (event.target == this) {
    $(this).toggleClass('active');
$('.bodyv2').css('overflow', 'auto');
}
});


$('.close-read_bio_modal').on('click', function() {
    $(this).closest('.read_bio_modal').toggleClass('active');
     $('.bodyv2').css('overflow', 'auto');
});
/*
$('.who-we-are_members-single').on('click', function() {
  $('body').css('overflow', 'hidden');
  $(this).find('.who-we-are_members-single_bio').addClass('active');

});

$('.popup_close-button-bio').on('click', function() {
  $(this).closest('.who-we-are_members-single_bio').removeClass('active');
  $('body').css('overflow', 'visible');
}
);


$('.who-we-are_members-single_bio').on('click', function() {
  if (event.target == this) {
    e.preventDefault(); 
    $(this).removeClass('active');
    $('body').css('overflow', 'visible');
  }
});
*/