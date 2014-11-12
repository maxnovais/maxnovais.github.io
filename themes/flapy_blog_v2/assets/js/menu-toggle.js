$(window).bind('scroll', function() {
	if ($(window).width() >= 1024){	
		if ($(window).scrollTop() > 160) {
			$('#top-bg').css('visibility','hidden');
			$('#top-bg-small').css('visibility','visible');
			$('#top-bg-line').css('visibility','hidden');

		}
		else {
			$('#top-bg').css('visibility','visible');
			$('#top-bg-small').css('visibility','hidden');
			$('#top-bg-line').css('visibility','visible');
		};
	}
	else{
		$('#top-bg').css('visibility','hidden');
		$('#top-bg-small').css('visibility','visible');
		$('#content').css('top','70px');
	};
});


$(window).resize(function(){
	if ($(window).width() >= 1024){	
		$('#top-bg').css('visibility','visible');
		$('#top-bg-small').css('visibility','hidden');
		$('#top-bg-line').css('visibility','visible');
		$('#content').css('top','170px');
	}
	else{
		$('#top-bg').css('visibility','hidden');
		$('#top-bg-small').css('visibility','visible');
		$('#top-bg-line').css('visibility','hidden');
		$('#content').css('top','70px');
	}
});


$(document).ready(function() {
	if ($(window).width() >= 1024){	
		$('#top-bg').css('visibility','visible');
		$('#top-bg-small').css('visibility','hidden');
		$('#top-bg-line').css('visibility','visible');
		$('#content').css('top','170px');
	}
	else{
		$('#top-bg').css('visibility','hidden');
		$('#top-bg-small').css('visibility','visible');
		$('#top-bg-line').css('visibility','hidden');
		$('#content').css('top','70px');
	}
});