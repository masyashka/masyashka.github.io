make_equal_heights();

function make_equal_heights() {
	remake_rectangle();

	if ((document.getElementById('fil_1').offsetHeight) != (document.getElementById('im_1').offsetHeight) ) { 
		document.getElementById('fil_1').style.height = (document.getElementById('im_1').offsetHeight) + "px";
	} 
	if ((document.getElementById('fil_2').offsetHeight) != (document.getElementById('im_1').offsetHeight) ) { 
		document.getElementById('fil_2').style.height = (document.getElementById('im_1').offsetHeight) + "px";
	} 
	if ((document.getElementById('fil_3').offsetHeight) != (document.getElementById('im_1').offsetHeight) ) { 
		document.getElementById('fil_3').style.height = (document.getElementById('im_1').offsetHeight) + "px";
	} 
	if ((document.getElementById('fil_4').offsetHeight) != (document.getElementById('im_1').offsetHeight) ) { 
		document.getElementById('fil_4').style.height = (document.getElementById('im_1').offsetHeight) + "px";
	} 
	if ((document.getElementById('fil_5').offsetHeight) != (document.getElementById('im_1').offsetHeight) ) { 
		document.getElementById('fil_5').style.height = (document.getElementById('im_1').offsetHeight) + "px";
	}
}