$("input[type=submit]").click(function () {
	var req = $(".required-form-field");
	$(".form-field").removeClass("invalid-form-field");
	$.each(req, function (e) {
		var curr_val = $(this).val();
		if (!curr_val) {
			$(this).addClass("invalid-form-field");
			$("html, body").animate(
				{
					scrollTop: $(this).offset().top - 100,
				}, -200);
			return false;
		}
	});
});

var prefixLength;
var phoneValue;
var countryPrefix;


$("#phone").on("keyup", function (e) {
	phoneValueLength = $(this).val().length;
	if (phoneValueLength < prefixLength) {
		$(this).val(countryPrefix);
		phoneValue = $(this).val();
	}
});


$("#phone").on("keydown", function (e) {
	if ((e.keyCode < 96 || e.keyCode > 105) && e.keyCode != 8 && e.keyCode != 32 && e.keyCode != 43 && (e.keyCode < 48 || e.keyCode > 57)) {
		return false;
	}
	if (e.keyCode == 8) {
		phoneValue = $(this).val();
		phoneValue = phoneValue.slice(0, -1);
	}
});



$("#phone").on("change", function () {
	if (countryPrefix == undefined) {
	}
	else {
	}
});


var a = {
	AF: "+93",
	AL: "+355",
	DZ: "+213",
	AS: "+1684",
	AD: "+376",
	AO: "+244",
	AI: "+1264",
	AG: "+1268",
	AR: "+54",
	AM: "+374",
	AW: "+297",
	AU: "+61",
	AT: "+43",
	AZ: "+994",
	BS: "+1242",
	BH: "+973",
	BD: "+880",
	BB: "+1246",
	BY: "+375",
	BE: "+32",
	BZ: "+501",
	BJ: "+229",
	BM: "+1441",
	BT: "+975",
	BO: "+591",
	BA: "+387",
	BW: "+267",
	BR: "+55",
	IO: "+246",
	VG: "+1284",
	BN: "+673",
	BG: "+359",
	BF: "+226",
	BI: "+257",
	KH: "+855",
	CM: "+237",
	CA: "+1",
	CV: "+238",
	BQ: "+599",
	KY: "+1345",
	CF: "+236",
	TD: "+235",
	CL: "+56",
	CN: "+86",
	CO: "+57",
	KM: "+269",
	CD: "+243",
	CG: "+242",
	CK: "+682",
	CR: "+506",
	CI: "+225",
	HR: "+385",
	CU: "+53",
	CW: "+599",
	CY: "+357",
	CZ: "+420",
	DK: "+45",
	DJ: "+253",
	DM: "+1767",
	DO: "+1",
	EC: "+593",
	EG: "+20",
	SV: "+503",
	GQ: "+240",
	ER: "+291",
	EE: "+372",
	ET: "+251",
	FK: "+500",
	FO: "+298",
	FJ: "+679",
	FI: "+358",
	FR: "+33",
	GF: "+594",
	PF: "+689",
	GA: "+241",
	GM: "+220",
	GE: "+995",
	DE: "+49",
	GH: "+233",
	GI: "+350",
	GR: "+30",
	GL: "+299",
	GD: "+1473",
	GP: "+590",
	GU: "+1671",
	GT: "+502",
	GN: "+224",
	GW: "+245",
	GY: "+592",
	HT: "+509",
	HN: "+504",
	HK: "+852",
	HU: "+36",
	IS: "+354",
	IN: "+91",
	ID: "+62",
	IR: "+98",
	IQ: "+964",
	IE: "+353",
	IL: "+972",
	IT: "+39",
	JM: "+1876",
	JP: "+81",
	JO: "+962",
	KZ: "+7",
	KE: "+254",
	KI: "+686",
	XK: "+383",
	KW: "+965",
	KG: "+996",
	LA: "+856",
	LV: "+371",
	LB: "+961",
	LS: "+266",
	LR: "+231",
	LY: "+218",
	LI: "+423",
	LT: "+370",
	LU: "+352",
	MO: "+853",
	MK: "+389",
	MG: "+261",
	MW: "+265",
	MY: "+60",
	MV: "+960",
	ML: "+223",
	MT: "+356",
	MH: "+692",
	MQ: "+596",
	MR: "+222",
	MU: "+230",
	MX: "+52",
	FM: "+691",
	MD: "+373",
	MC: "+377",
	MN: "+976",
	ME: "+382",
	MS: "+1664",
	MA: "+212",
	MZ: "+258",
	MM: "+95",
	NA: "+264",
	NR: "+674",
	NP: "+977",
	NL: "+31",
	NC: "+687",
	NZ: "+64",
	NI: "+505",
	NE: "+227",
	NG: "+234",
	NU: "+683",
	NF: "+672",
	KP: "+850",
	MP: "+1670",
	NO: "+47",
	OM: "+968",
	PK: "+92",
	PW: "+680",
	PS: "+970",
	PA: "+507",
	PG: "+675",
	PY: "+595",
	PE: "+51",
	PH: "+63",
	PL: "+48",
	PT: "+351",
	PR: "+1",
	QA: "+974",
	RE: "+262",
	RO: "+40",
	RU: "+7",
	RW: "+250",
	BL: "+590",
	SH: "+290",
	KN: "+1869",
	LC: "+1758",
	MF: "+590",
	PM: "+508",
	VC: "+1784",
	WS: "+685",
	SM: "+378",
	ST: "+239",
	SA: "+966",
	SN: "+221",
	RS: "+381",
	SC: "+248",
	SL: "+232",
	SG: "+65",
	SX: "+1721",
	SK: "+421",
	SI: "+386",
	SB: "+677",
	SO: "+252",
	ZA: "+27",
	KR: "+82",
	SS: "+211",
	ES: "+34",
	LK: "+94",
	SD: "+249",
	SR: "+597",
	SZ: "+268",
	SE: "+46",
	CH: "+41",
	SY: "+963",
	TW: "+886",
	TJ: "+992",
	TZ: "+255",
	TH: "+66",
	TL: "+670",
	TG: "+228",
	TK: "+690",
	TO: "+676",
	TT: "+1868",
	TN: "+216",
	TR: "+90",
	TM: "+993",
	TC: "+1649",
	TV: "+688",
	VI: "+1340",
	UG: "+256",
	UA: "+380",
	AE: "+971",
	GB: "+44",
	US: "+1",
	UY: "+598",
	UZ: "+998",
	VU: "+678",
	VA: "+39",
	VE: "+58",
	VN: "+84",
	WF: "+681",
	YE: "+967",
	ZM: "+260",
	ZW: "+263",
};

const selectorInput =
	'<select id="international-country-code-select-input" class="form-field bottom-margin-16" name="" aria-invalid="false" aria-labelledby="international-country-code-select-label" aria-describedby="international-country-code-select-description"><option label="Country Code" value="">Country Code</option><option label="Afghanistan (‫افغانستان‬‎)" value="AF">Afghanistan (‫افغانستان‬‎)</option><option label="Albania (Shqipëri)" value="AL">Albania (Shqipëri)</option><option label="Algeria (‫الجزائر‬‎)" value="DZ">Algeria (‫الجزائر‬‎)</option><option label="American Samoa" value="AS">American Samoa</option><option label="Andorra" value="AD">Andorra</option><option label="Angola" value="AO">Angola</option><option label="Anguilla" value="AI">Anguilla</option><option label="Antigua and Barbuda" value="AG">Antigua and Barbuda</option><option label="Argentina" value="AR">Argentina</option><option label="Armenia (Հայաստան)" value="AM">Armenia (Հայաստան)</option><option label="Aruba" value="AW">Aruba</option><option label="Australia" value="AU">Australia</option><option label="Austria (Österreich)" value="AT">Austria (Österreich)</option><option label="Azerbaijan (Azərbaycan)" value="AZ">Azerbaijan (Azərbaycan)</option><option label="Bahamas" value="BS">Bahamas</option><option label="Bahrain (‫البحرين‬‎)" value="BH">Bahrain (‫البحرين‬‎)</option><option label="Bangladesh (বাংলাদেশ)" value="BD">Bangladesh (বাংলাদেশ)</option><option label="Barbados" value="BB">Barbados</option><option label="Belarus (Беларусь)" value="BY">Belarus (Беларусь)</option><option label="Belgium (België)" value="BE">Belgium (België)</option><option label="Belize" value="BZ">Belize</option><option label="Benin (Bénin)" value="BJ">Benin (Bénin)</option><option label="Bermuda" value="BM">Bermuda</option><option label="Bhutan (འབྲུག)" value="BT">Bhutan (འབྲུག)</option><option label="Bolivia" value="BO">Bolivia</option><option label="Bosnia and Herzegovina (Босна и Херцеговина)" value="BA">Bosnia and Herzegovina (Босна и Херцеговина)</option><option label="Botswana" value="BW">Botswana</option><option label="Brazil (Brasil)" value="BR">Brazil (Brasil)</option><option label="British Indian Ocean Territory" value="IO">British Indian Ocean Territory</option><option label="British Virgin Islands" value="VG">British Virgin Islands</option><option label="Brunei" value="BN">Brunei</option><option label="Bulgaria (България)" value="BG">Bulgaria (България)</option><option label="Burkina Faso" value="BF">Burkina Faso</option><option label="Burundi (Uburundi)" value="BI">Burundi (Uburundi)</option><option label="Cambodia (កម្ពុជា)" value="KH">Cambodia (កម្ពុជា)</option><option label="Cameroon (Cameroun)" value="CM">Cameroon (Cameroun)</option><option label="Canada" value="CA">Canada</option><option label="Cape Verde (Kabu Verdi)" value="CV">Cape Verde (Kabu Verdi)</option><option label="Caribbean Netherlands" value="BQ">Caribbean Netherlands</option><option label="Cayman Islands" value="KY">Cayman Islands</option><option label="Central African Republic (République centrafricaine)" value="CF">Central African Republic (République centrafricaine)</option><option label="Chad (Tchad)" value="TD">Chad (Tchad)</option><option label="Chile" value="CL">Chile</option><option label="China (中国)" value="CN">China (中国)</option><option label="Colombia" value="CO">Colombia</option><option label="Comoros (‫جزر القمر‬‎)" value="KM">Comoros (‫جزر القمر‬‎)</option><option label="Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)" value="CD">Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)</option><option label="Congo (Republic) (Congo-Brazzaville)" value="CG">Congo (Republic) (Congo-Brazzaville)</option><option label="Cook Islands" value="CK">Cook Islands</option><option label="Costa Rica" value="CR">Costa Rica</option><option label="Côte d’Ivoire" value="CI">Côte d’Ivoire</option><option label="Croatia (Hrvatska)" value="HR">Croatia (Hrvatska)</option><option label="Cuba" value="CU">Cuba</option><option label="Curaçao" value="CW">Curaçao</option><option label="Cyprus (Κύπρος)" value="CY">Cyprus (Κύπρος)</option><option label="Czech Republic (Česká republika)" value="CZ">Czech Republic (Česká republika)</option><option label="Denmark (Danmark)" value="DK">Denmark (Danmark)</option><option label="Djibouti" value="DJ">Djibouti</option><option label="Dominica" value="DM">Dominica</option><option label="Dominican Republic (República Dominicana)" value="DO">Dominican Republic (República Dominicana)</option><option label="Ecuador" value="EC">Ecuador</option><option label="Egypt (‫مصر‬‎)" value="EG">Egypt (‫مصر‬‎)</option><option label="El Salvador" value="SV">El Salvador</option><option label="Equatorial Guinea (Guinea Ecuatorial)" value="GQ">Equatorial Guinea (Guinea Ecuatorial)</option><option label="Eritrea" value="ER">Eritrea</option><option label="Estonia (Eesti)" value="EE">Estonia (Eesti)</option><option label="Ethiopia" value="ET">Ethiopia</option><option label="Falkland Islands (Islas Malvinas)" value="FK">Falkland Islands (Islas Malvinas)</option><option label="Faroe Islands (Føroyar)" value="FO">Faroe Islands (Føroyar)</option><option label="Fiji" value="FJ">Fiji</option><option label="Finland (Suomi)" value="FI">Finland (Suomi)</option><option label="France" value="FR">France</option><option label="French Guiana (Guyane française)" value="GF">French Guiana (Guyane française)</option><option label="French Polynesia (Polynésie française)" value="PF">French Polynesia (Polynésie française)</option><option label="Gabon" value="GA">Gabon</option><option label="Gambia" value="GM">Gambia</option><option label="Georgia (საქართველო)" value="GE">Georgia (საქართველო)</option><option label="Germany (Deutschland)" value="DE">Germany (Deutschland)</option><option label="Ghana (Gaana)" value="GH">Ghana (Gaana)</option><option label="Gibraltar" value="GI">Gibraltar</option><option label="Greece (Ελλάδα)" value="GR">Greece (Ελλάδα)</option><option label="Greenland (Kalaallit Nunaat)" value="GL">Greenland (Kalaallit Nunaat)</option><option label="Grenada" value="GD">Grenada</option><option label="Guadeloupe" value="GP">Guadeloupe</option><option label="Guam" value="GU">Guam</option><option label="Guatemala" value="GT">Guatemala</option><option label="Guinea (Guinée)" value="GN">Guinea (Guinée)</option><option label="Guinea-Bissau (Guiné Bissau)" value="GW">Guinea-Bissau (Guiné Bissau)</option><option label="Guyana" value="GY">Guyana</option><option label="Haiti" value="HT">Haiti</option><option label="Honduras" value="HN">Honduras</option><option label="Hong Kong (香港)" value="HK">Hong Kong (香港)</option><option label="Hungary (Magyarország)" value="HU">Hungary (Magyarország)</option><option label="Iceland (Ísland)" value="IS">Iceland (Ísland)</option><option label="India (भारत)" value="IN">India (भारत)</option><option label="Indonesia" value="ID">Indonesia</option><option label="Iran (‫ایران‬‎)" value="IR">Iran (‫ایران‬‎)</option><option label="Iraq (‫العراق‬‎)" value="IQ">Iraq (‫العراق‬‎)</option><option label="Ireland" value="IE">Ireland</option><option label="Israel (‫ישראל‬‎)" value="IL">Israel (‫ישראל‬‎)</option><option label="Italy (Italia)" value="IT">Italy (Italia)</option><option label="Jamaica" value="JM">Jamaica</option><option label="Japan (日本)" value="JP">Japan (日本)</option><option label="Jordan (‫الأردن‬‎)" value="JO">Jordan (‫الأردن‬‎)</option><option label="Kazakhstan (Казахстан)" value="KZ">Kazakhstan (Казахстан)</option><option label="Kenya" value="KE">Kenya</option><option label="Kiribati" value="KI">Kiribati</option><option label="Kosovo" value="XK">Kosovo</option><option label="Kuwait (‫الكويت‬‎)" value="KW">Kuwait (‫الكويت‬‎)</option><option label="Kyrgyzstan (Кыргызстан)" value="KG">Kyrgyzstan (Кыргызстан)</option><option label="Laos (ລາວ)" value="LA">Laos (ລາວ)</option><option label="Latvia (Latvija)" value="LV">Latvia (Latvija)</option><option label="Lebanon (‫لبنان‬‎)" value="LB">Lebanon (‫لبنان‬‎)</option><option label="Lesotho" value="LS">Lesotho</option><option label="Liberia" value="LR">Liberia</option><option label="Libya (‫ليبيا‬‎)" value="LY">Libya (‫ليبيا‬‎)</option><option label="Liechtenstein" value="LI">Liechtenstein</option><option label="Lithuania (Lietuva)" value="LT">Lithuania (Lietuva)</option><option label="Luxembourg" value="LU">Luxembourg</option><option label="Macau (澳門)" value="MO">Macau (澳門)</option><option label="Macedonia (FYROM) (Македонија)" value="MK">Macedonia (FYROM) (Македонија)</option><option label="Madagascar (Madagasikara)" value="MG">Madagascar (Madagasikara)</option><option label="Malawi" value="MW">Malawi</option><option label="Malaysia" value="MY">Malaysia</option><option label="Maldives" value="MV">Maldives</option><option label="Mali" value="ML">Mali</option><option label="Malta" value="MT">Malta</option><option label="Marshall Islands" value="MH">Marshall Islands</option><option label="Martinique" value="MQ">Martinique</option><option label="Mauritania (‫موريتانيا‬‎)" value="MR">Mauritania (‫موريتانيا‬‎)</option><option label="Mauritius (Moris)" value="MU">Mauritius (Moris)</option><option label="Mexico (México)" value="MX">Mexico (México)</option><option label="Micronesia" value="FM">Micronesia</option><option label="Moldova (Republica Moldova)" value="MD">Moldova (Republica Moldova)</option><option label="Monaco" value="MC">Monaco</option><option label="Mongolia (Монгол)" value="MN">Mongolia (Монгол)</option><option label="Montenegro (Crna Gora)" value="ME">Montenegro (Crna Gora)</option><option label="Montserrat" value="MS">Montserrat</option><option label="Morocco (‫المغرب‬‎)" value="MA">Morocco (‫المغرب‬‎)</option><option label="Mozambique (Moçambique)" value="MZ">Mozambique (Moçambique)</option><option label="Myanmar (Burma) (မြန်မာ)" value="MM">Myanmar (Burma) (မြန်မာ)</option><option label="Namibia (Namibië)" value="NA">Namibia (Namibië)</option><option label="Nauru" value="NR">Nauru</option><option label="Nepal (नेपाल)" value="NP">Nepal (नेपाल)</option><option label="Netherlands (Nederland)" value="NL">Netherlands (Nederland)</option><option label="New Caledonia (Nouvelle-Calédonie)" value="NC">New Caledonia (Nouvelle-Calédonie)</option><option label="New Zealand" value="NZ">New Zealand</option><option label="Nicaragua" value="NI">Nicaragua</option><option label="Niger (Nijar)" value="NE">Niger (Nijar)</option><option label="Nigeria" value="NG">Nigeria</option><option label="Niue" value="NU">Niue</option><option label="Norfolk Island" value="NF">Norfolk Island</option><option label="North Korea (조선 민주주의 인민 공화국)" value="KP">North Korea (조선 민주주의 인민 공화국)</option><option label="Northern Mariana Islands" value="MP">Northern Mariana Islands</option><option label="Norway (Norge)" value="NO">Norway (Norge)</option><option label="Oman (‫عُمان‬‎)" value="OM">Oman (‫عُمان‬‎)</option><option label="Pakistan (‫پاکستان‬‎)" value="PK">Pakistan (‫پاکستان‬‎)</option><option label="Palau" value="PW">Palau</option><option label="Palestine (‫فلسطين‬‎)" value="PS">Palestine (‫فلسطين‬‎)</option><option label="Panama (Panamá)" value="PA">Panama (Panamá)</option><option label="Papua New Guinea" value="PG">Papua New Guinea</option><option label="Paraguay" value="PY">Paraguay</option><option label="Peru (Perú)" value="PE">Peru (Perú)</option><option label="Philippines" value="PH">Philippines</option><option label="Poland (Polska)" value="PL">Poland (Polska)</option><option label="Portugal" value="PT">Portugal</option><option label="Puerto Rico" value="PR">Puerto Rico</option><option label="Qatar (‫قطر‬‎)" value="QA">Qatar (‫قطر‬‎)</option><option label="Réunion (La Réunion)" value="RE">Réunion (La Réunion)</option><option label="Romania (România)" value="RO">Romania (România)</option><option label="Russia (Россия)" value="RU">Russia (Россия)</option><option label="Rwanda" value="RW">Rwanda</option><option label="Saint Barthélemy (Saint-Barthélemy)" value="BL">Saint Barthélemy (Saint-Barthélemy)</option><option label="Saint Helena" value="SH">Saint Helena</option><option label="Saint Kitts and Nevis" value="KN">Saint Kitts and Nevis</option><option label="Saint Lucia" value="LC">Saint Lucia</option><option label="Saint Martin (Saint-Martin (partie française))" value="MF">Saint Martin (Saint-Martin (partie française))</option><option label="Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)" value="PM">Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)</option><option label="Saint Vincent and the Grenadines" value="VC">Saint Vincent and the Grenadines</option><option label="Samoa" value="WS">Samoa</option><option label="San Marino" value="SM">San Marino</option><option label="São Tomé and Príncipe (São Tomé e Príncipe)" value="ST">São Tomé and Príncipe (São Tomé e Príncipe)</option><option label="Saudi Arabia (‫المملكة العربية السعودية‬‎)" value="SA">Saudi Arabia (‫المملكة العربية السعودية‬‎)</option><option label="Senegal (Sénégal)" value="SN">Senegal (Sénégal)</option><option label="Serbia (Србија)" value="RS">Serbia (Србија)</option><option label="Seychelles" value="SC">Seychelles</option><option label="Sierra Leone" value="SL">Sierra Leone</option><option label="Singapore" value="SG">Singapore</option><option label="Sint Maarten" value="SX">Sint Maarten</option><option label="Slovakia (Slovensko)" value="SK">Slovakia (Slovensko)</option><option label="Slovenia (Slovenija)" value="SI">Slovenia (Slovenija)</option><option label="Solomon Islands" value="SB">Solomon Islands</option><option label="Somalia (Soomaaliya)" value="SO">Somalia (Soomaaliya)</option><option label="South Africa" value="ZA">South Africa</option><option label="South Korea (대한민국)" value="KR">South Korea (대한민국)</option><option label="South Sudan (‫جنوب السودان‬‎)" value="SS">South Sudan (‫جنوب السودان‬‎)</option><option label="Spain (España)" value="ES">Spain (España)</option><option label="Sri Lanka (ශ්‍රී ලංකාව)" value="LK">Sri Lanka (ශ්‍රී ලංකාව)</option><option label="Sudan (‫السودان‬‎)" value="SD">Sudan (‫السودان‬‎)</option><option label="Suriname" value="SR">Suriname</option><option label="Swaziland" value="SZ">Swaziland</option><option label="Sweden (Sverige)" value="SE">Sweden (Sverige)</option><option label="Switzerland (Schweiz)" value="CH">Switzerland (Schweiz)</option><option label="Syria (‫سوريا‬‎)" value="SY">Syria (‫سوريا‬‎)</option><option label="Taiwan (台灣)" value="TW">Taiwan (台灣)</option><option label="Tajikistan" value="TJ">Tajikistan</option><option label="Tanzania" value="TZ">Tanzania</option><option label="Thailand (ไทย)" value="TH">Thailand (ไทย)</option><option label="Timor-Leste" value="TL">Timor-Leste</option><option label="Togo" value="TG">Togo</option><option label="Tokelau" value="TK">Tokelau</option><option label="Tonga" value="TO">Tonga</option><option label="Trinidad and Tobago" value="TT">Trinidad and Tobago</option><option label="Tunisia (‫تونس‬‎)" value="TN">Tunisia (‫تونس‬‎)</option><option label="Turkey (Türkiye)" value="TR">Turkey (Türkiye)</option><option label="Turkmenistan" value="TM">Turkmenistan</option><option label="Turks and Caicos Islands" value="TC">Turks and Caicos Islands</option><option label="Tuvalu" value="TV">Tuvalu</option><option label="U.S. Virgin Islands" value="VI">U.S. Virgin Islands</option><option label="Uganda" value="UG">Uganda</option><option label="Ukraine (Україна)" value="UA">Ukraine (Україна)</option><option label="United Arab Emirates (‫الإمارات العربية المتحدة‬‎)" value="AE">United Arab Emirates (‫الإمارات العربية المتحدة‬‎)</option><option label="United Kingdom" value="GB">United Kingdom</option><option label="United States" value="US">United States</option><option label="Uruguay" value="UY">Uruguay</option><option label="Uzbekistan (Oʻzbekiston)" value="UZ">Uzbekistan (Oʻzbekiston)</option><option label="Vanuatu" value="VU">Vanuatu</option><option label="Vatican City (Città del Vaticano)" value="VA">Vatican City (Città del Vaticano)</option><option label="Venezuela" value="VE">Venezuela</option><option label="Vietnam (Việt Nam)" value="VN">Vietnam (Việt Nam)</option><option label="Wallis and Futuna" value="WF">Wallis and Futuna</option><option label="Yemen (‫اليمن‬‎)" value="YE">Yemen (‫اليمن‬‎)</option><option label="Zambia" value="ZM">Zambia</option><option label="Zimbabwe" value="ZW">Zimbabwe</option></select>';

$("#phone").before(selectorInput);

$("#international-country-code-select-input").on("change", function () {
	var optionValue = $(this).val();
	if (optionValue in a && $("#phone").val() != "") {
		if ($("#phone").val().indexOf(a[optionValue]) < 0) {
			if ($("#phone").val().indexOf(countryPrefix) < 0) {
				$("#phone").val(a[optionValue] + $("#phone").val());
			}
			else { $("#phone").val($("#phone").val().replace(countryPrefix, a[optionValue])); }
		}
		else if ($("#phone").val().indexOf(a[optionValue]) > 0) {
			$("#phone").val($("#phone").val().replace(countryPrefix, a[optionValue]));
		}
		countryPrefix = a[optionValue];
		prefixLength = countryPrefix.length;
	}
	else if (optionValue in a && $("#phone").val() == "") {
		$("#phone").val(a[optionValue] + "");
		countryPrefix = a[optionValue];
		prefixLength = countryPrefix.length;
	}
	else {
		$("#phone").val("");
		countryPrefix = "";
		prefixLength = 0;
	}
});