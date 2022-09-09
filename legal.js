$( document ).ready( function() {
	if ( $( window ).width() <= 991 ) {
		$( ".legal-dt" ).on( "click", function() {
			$( ".legal-tabs_menu" ).toggle();
		} );
		$( ".legal-tab-link" ).on( "click", function() {
			$( ".legal-tabs_menu" ).toggle();
		} );
	}

	//".legal-tab-link" index 0 get text
	var tab_link_0 = $( ".legal-tab-link" ).eq( 0 ).text();

	//".legal-dt" find ".hs6" set text to tab_link_0
	$( ".legal-dt" ).find( ".hs6" ).text( tab_link_0 );
	$( ".legal-tab-link" ).on( "click", function() {
		var tab_link_text = $( this ).text();
		$( ".legal-dt" ).find( ".hs6" ).text( tab_link_text );
	} );
} );
