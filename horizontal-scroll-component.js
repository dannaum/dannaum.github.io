$('.scrollable-main').scroll(function() {
	var scrollLeft = $(this).scrollLeft();
	var percentage = scrollLeft / ($(this).prop('scrollWidth') - $(this).width());
	percentage = percentage * 100;
	$(this).siblings('.scrollable-sub').find('.horizontall-scroll-active').width(percentage + '%');
});