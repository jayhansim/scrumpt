// @codekit-prepend "modal.js";
// @codekit-prepend "transition.js";

$(document).ready(function(){

	// Enable modal upon clicking the Upgrade button
	$('#upgrade').on('click', function(e){
		$('#modal-pricing').modal({
			backdrop: false
		});
		e.preventDefault();
	});

	// Hide payment
	$('#payment').hide();

	// Show payment
	$('.package__buy').on('click', 'button', function(e){
		$(this).closest('#pricing-table').hide().next().show();
		console.log('button clicked');
		e.preventDefault();
	});
});