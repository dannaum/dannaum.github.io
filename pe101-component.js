var htmlCards = $(".home-pe-101_wrappers").eq(0);
var htmlCards1 = $(".home-pe-101_wrappers").eq(1);
var htmlCards2 = $(".home-pe-101_wrappers").eq(2);

var resizeDone;
var cachedWidth = $(window).width();
$(window).resize(function () {
	var newWidth = $(window).width();
	if (newWidth !== cachedWidth) {
		clearTimeout(resizeDone);
		resizeDone = setTimeout(doneResizing, 500);
		cachedWidth = newWidth;
	}
});

function doneResizing() {
	pe101Cards();
}

function pe101Cards() {
	if (cachedWidth > 991) {
		if ($("#mainpewrap").children(".home-pe-101_wrappers").length == 0) {
			console.log('1');
			$("#mainpewrap").append(htmlCards);
			$("#mainpewrap").append(htmlCards1);
			$("#mainpewrap").append(htmlCards2);
		}
		else {
			console.log('2');
			$(".home-pe-101_wrappers").eq(1).css("display", "none");
			$(".home-pe-101_wrappers").eq(2).css("display", "none");
		}
	} else {
		if ($(".home-pe-101_selectors").children(".home-pe-101_wrappers").length == 0) {
			console.log('4');
			$('#homepe1').after(htmlCards);
			$("#homepe2").after(htmlCards1);
			$("#homepe3").after(htmlCards2);
		}
	}

}
pe101Cards();

$(".home-pe-101_selector").mouseover(function () {
	$(".home-pe-101_selector").removeClass("active");
	$(this).addClass("active");
	$(".home-pe-101_selector").find(".paragraph-small-copy").css("opacity", "0");
	$(this).find(".paragraph-small-copy").css("opacity", "1");
	var index = $(this).index(".home-pe-101_selector");
	$(".home-pe-101_wrappers").css("display", "none");
	$(".home-pe-101_wrappers").each(function () {
		var index1 = $(this).index(".home-pe-101_wrappers");
		if (index1 == index) {
			$(this).css("display", "block");
		} else {
			$(this).css("display", "none");
		}
	});
});