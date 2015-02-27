'use strict';

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$('#submitBtn').click(validatePage);

}

function validatePage(e) {
		var empty = "";
		var email = $('#inputEmail').val();
		var firstName = $('#inputFirstName').val();
		var lastName = $('#inputLastName').val();
		var affiliation = $('#affiliation').val();
		var involvement = $('#involvement').val();
		var otherAff = $('#inputOtherAff').val();
		var otherInv = $('#inputOtherInvolvement').val();

		console.log(affiliation);
		console.log(involvement);
		console.log(otherAff);
		console.log(email);

		if (empty == email || empty == firstName || empty == lastName  || '--Select One--'== affiliation || 
			'--Select One--' == involvement) {
			alert("Please fill out the form completely.");
		}
		else if (affiliation == "Other" && otherAff == empty) {
			console.log("entered");
			alert("Please fill out your affiliation with UCSD.");
		}
		else if (otherInv == empty && involvement == 'Other') {
			alert("Please fill out what type of involvement you would like to participate in.");
		}
		else {
			alert("Thank you for your interest in the Interational Cafe");
			window.location.reload();
		}
}