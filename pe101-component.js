var htmlCards = $(".home-pe-101_wrappers").eq(0);
var htmlCards1 = $(".home-pe-101_wrappers").eq(1);
var htmlCards2 = $(".home-pe-101_wrappers").eq(2);

function pe101Cards() {
	if ($(window).width() > 991) {
		if ($("#mainpewrap").children(".home-pe-101_wrappers").length == 0) {
			$("#mainpewrap").append(htmlCards);
			$("#mainpewrap").append(htmlCards1);
			$("#mainpewrap").append(htmlCards2);
		}
		else {
			$(".home-pe-101_wrappers").eq(1).css("display", "none");
			$(".home-pe-101_wrappers").eq(2).css("display", "none");
		}
	} else {
		if ($(".home-pe-101_selectors").children(".home-pe-101_wrappers").length == 0) {
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