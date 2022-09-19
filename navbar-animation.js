$(".nav_dd-v2").click(function () {
	var navDD = $(this);
	$(navDD).siblings(".nav_dd-v2").removeClass("active-nav");
	$(navDD).toggleClass("active-nav");
	var index = $(".nav_dd-v2").index(this);
	if ($(this).hasClass("active-nav")) {
		$('.opened-nav_dl').find(".new-nav_dl-wraps").each(function () {
			if ($(".new-nav_dl-wraps").index(this) == index) {
				var thisI = $(this);
				$(".new-nav_dl-wraps").not(thisI).animate({ opacity: 0 }, { duration: 350, queue: false });
				setTimeout(function () {
					$(thisI).animate({ height: $(thisI)[0].scrollHeight }, { duration: 350, queue: false, function() { $(thisI).height("auto") } });
					$(".new-nav_dl-wraps").not(thisI).animate({ height: 0 }, { duration: 350, queue: false });
				}, 350);
				setTimeout(function () {
					$(thisI).animate({ opacity: 1 }, { duration: 300, queue: false });
				}, 700);
			}
		});
	}
	else {
		$(".new-nav_dl-wraps").animate({ opacity: 0 }, 350);
		setTimeout(function () {
			$(".new-nav_dl-wraps").animate({ height: "0rem" }, 350);
		}, 350);
	}
});


$(".nav_dt").click(function () {
	if ($(this).hasClass("w--open")) {
		if ($(window).width() > 991) {
			$('.nav_dd-icon-2').animate({ rotate: '0deg' }, 350);
		}
		$('.nav_line').css({ 'width': 0 + 'px' });
	}
	else {
		if ($(window).width() > 991) {
			$('.nav_dd-icon-2').animate({ rotate: '0deg' }, 350);
			var navDDIcon = $(this).children(".nav_dd-icon-2");
			$(navDDIcon).animate({ rotate: '180deg' }, 350);
		}
		var myDistance = $(this).offset().left - $('.navbar_menu-links').offset().left;
		var myWidth;
		if ($(this).parent().hasClass("nav_dd-v2")) {
			myWidth = $(this).parent().width();
		}
		else {
			myWidth = $(this).width();
		}
		$('.nav_line').css({ 'width': myWidth + 'px', 'transform': 'translateX(' + myDistance + 'px)' });
	}
});