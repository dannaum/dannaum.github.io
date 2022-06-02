$('.inv-mg-paste').keyup(function() {
  
    // If value is not empty
    if ($(this).val().length == 0) {
      // Hide the element
      $('.ism-static-results').show();
      $('.ism-dynamic-results').hide();
    } else {
      // Otherwise show it
      $('.ism-dynamic-results').show();
      $('.ism-static-results').hide();
    }
  }).keyup();
  
  /*

(function() {
	// create a new Library instance and store it in a variable called "projectsGrid"
	var projectsGrid = new FsLibrary('.investment-managers-search-list')
  
	// define our filter group(s)
	var myFilters = [
	{
		filterWrapper: ".ism-form-field",
		filterType: "exclusive",
    filterByClass: ".inv-mg-name-search",
    emptyMessage: '.ism-empty-message',
    animation: {
        enable: false,
        }
	}
]
 // run filter on our instance
	projectsGrid.filter({
		filterArray: myFilters,
    emptyMessage: '.ism-empty-message',
  })
    })();
    */


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

