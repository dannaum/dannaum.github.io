let navOpen;

$(".nav_dd").click(function () {
	if ($(window).width() > 991) {
		var navDD = $(this);
		$(navDD).siblings(".nav_dd").removeClass("active-nav");
		$(navDD).toggleClass("active-nav");
		var index = $(".nav_dd").index(this);
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
			navOpen = true;
		}
		else {
			navOpen = false;
			$(".new-nav_dl-wraps").animate({ opacity: 0 }, 350);
			setTimeout(function () {
				$(".new-nav_dl-wraps").animate({ height: "0rem" }, 350);
			}, 350);
		}
	}
});


$(".nav_dt").click(function () {
	if (!$(this).parent().hasClass("nav_dd")) {
		return;
	}
	else {
		if ($(this).hasClass("w--open")) {
			if ($(window).width() > 991) {
				$('.nav_dd-icon').animate({ rotate: '0deg' }, 350);
			}
			$('.nav_line').css({ 'width': 0 + 'px' });
		}
		else {
			if ($(window).width() > 991) {
				$('.nav_dd-icon').animate({ rotate: '0deg' }, 350);
				var navDDIcon = $(this).children(".nav_dd-icon");
				$(navDDIcon).animate({ rotate: '180deg' }, 350);
			}
			var myDistance = $(this).offset().left - $('.navbar_menu-links').offset().left;
			var myWidth;
			if ($(this).parent().hasClass("nav_dd")) {
				myWidth = $(this).parent().width();
			}
			else {
				myWidth = $(this).width();
			}
			$('.nav_line').css({ 'width': myWidth + 'px', 'transform': 'translateX(' + myDistance + 'px)' });
		}
	}
});

$(window).scroll(function (event) {
	if (navOpen) {
		$('.nav_line').css({ 'width': 0 + 'px' });
		$('.nav_dd-icon').animate({ rotate: '0deg' }, 350);
		$(".nav_dd").removeClass("active-nav");
		$(".nav_dt").removeClass("w--open");
		$(".new-nav_dl-wraps").animate({ opacity: 0 }, 350);
		setTimeout(function () {
			$(".new-nav_dl-wraps").animate({ height: "0rem" }, 350);
		}, 350);
		navOpen = false;
	}
	else {
		return;
	}
});