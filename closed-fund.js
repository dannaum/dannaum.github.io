$( ".fund-survey_content" ).find( ".button-primary" ).css( "pointer-events", "none" );

$( ".fund-survey_single-link" ).on( "click", function() {
	$( this ).toggleClass( "active" );

	if ( $( ".fund-survey_single-link" ).hasClass( "active" ) ) {
		$( ".fund-survey_content" ).find( ".button-primary" ).removeClass( "disabled" );
		$( ".fund-survey_content" ).find( ".button-primary" ).css( "pointer-events", "auto" );
	} else {
		$( ".fund-survey_content" ).find( ".button-primary" ).addClass( "disabled" );
		$( ".fund-survey_content" ).find( ".button-primary" ).css( "pointer-events", "none" );
	}
} );

$( ".fund-survey_content" ).find( ".button-primary" ).on( "click", function() {
	$( ".fund-survey_popup" ).addClass( "active" );
} );
