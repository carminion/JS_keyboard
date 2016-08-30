$(document).ready( function() {
	/*
	$('.c').click(function() {
		$('#cAudio').get(0).play();
	})

	$('.d').click(function() {
		$('#dAudio').get(0).play();
	})

	$('.e').click(function() {
		$('#eAudio').get(0).play();
	})

	$('.f').click(function() {
		$('#fAudio').get(0).play();
	})

	$('.g').click(function() {
		$('#gAudio').get(0).play();
	})

	$('.a').click(function() {
		$('#aAudio').get(0).play();
	})

	$('.b').click(function() {
		$('#bAudio').get(0).play();
	})
	*/

	$(document).keydown(function(e) {
    switch(e.which) {
        case 65: // key 'a' triggers c note
        $('#cAudio').get(0).play();
        break;

        case 83: // key 's' triggers d note
        $('#dAudio').get(0).play();
        break;

        case 68: // key 'd' triggers e note
        $('#eAudio').get(0).play();
        break;

        case 70: // key 'f' triggers f note
        $('#fAudio').get(0).play();
        break;

        case 71: // key 'g' triggers g note
        $('#gAudio').get(0).play();
        break;

        case 72: // key 'h' triggers a note
        $('#aAudio').get(0).play();
        break;

        case 74: // key 'j triggers b note
        $('#bAudio').get(0).play();
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

  

});
