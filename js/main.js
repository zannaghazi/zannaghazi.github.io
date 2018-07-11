(function(window) {
	'use sctrict';
	var decoder = $('#qr-canvas'),
		scannerLaser = $('.scanner-laser'),
		btnPlay = $('#play'),
		zoomValue = $('#zoom-value'),
		zoom = $('#zoom');
		
		$('[data-toggle="tooltip"]').tooltip();
	scannerLaser.css('opacity', .5);
	
	btnPlay.click(function(){
		alert("abc");
	});
}