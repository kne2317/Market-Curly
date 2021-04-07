$(document).ready(function(){
	var menu_offset = $('nav').offset();

	$(window).scroll(function(){
		if($(document).scrollTop() > menu_offset.top){
			$('nav').addClass('fixed');
			$('#menuD').addClass('menufix');
		}else{
			$('nav').removeClass('fixed');
			$('#menuD').removeClass('menufix');
		}
	});
});

$(document).ready(function(){
	var promote = $('content').offset();

	$(window).scroll(function(){
		if($(document).scrollTop() > promote.top){
			$('aside').addClass('asidefix'),
			$('#goTop').addClass('topBtn');
		}else{
			$('aside').removeClass('asidefix'),
			$('#goTop').removeClass('topBtn');
		}
	});
});



$(document).ready(function(){
			$('#serviceCenter').hover(function(){
				$('.drawer').slideDown('fast')
			});
		});
$(document).ready(function(){
			$('.drawer').hover(function(){
				$('.drawer').slideDown('fast')
			});
		});
$(document).ready(function(){
			$('.drawer').mouseleave(function(){
				$('.drawer').slideUp('fast')
			});
		});



$(document).ready(function(){
			$('#category').hover(function(){
				$('#menuD').slideDown('fast')
			});
		});
$(document).ready(function(){
			$('#menuD').hover(function(){
				$('#menuD').slideDown('fast')
			});
		});
$(document).ready(function(){
			$('#menuD').mouseleave(function(){
				$('#menuD').slideUp('fast')
			});
		});


$(document).ready(function(){
	$('.mainMenu:nth-child(1)').hover(function(){
		$('.mainMenu:nth-child(1) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(2)').hover(function(){
		$('.mainMenu:nth-child(2) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(3)').hover(function(){
		$('.mainMenu:nth-child(3) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(4)').hover(function(){
		$('.mainMenu:nth-child(4) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(5)').hover(function(){
		$('.mainMenu:nth-child(5) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(6)').hover(function(){
		$('.mainMenu:nth-child(6) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(7)').hover(function(){
		$('.mainMenu:nth-child(7) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(8)').hover(function(){
		$('.mainMenu:nth-child(8) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});

$(document).ready(function(){
	$('.mainMenu:nth-child(9)').hover(function(){
		$('.mainMenu:nth-child(9) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(10)').hover(function(){
		$('.mainMenu:nth-child(10) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});

$(document).ready(function(){
	$('.mainMenu:nth-child(11)').hover(function(){
		$('.mainMenu:nth-child(11) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(12)').hover(function(){
		$('.mainMenu:nth-child(12) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(13)').hover(function(){
		$('.mainMenu:nth-child(13) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(14)').hover(function(){
		$('.mainMenu:nth-child(14) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(15)').hover(function(){
		$('.mainMenu:nth-child(15) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(16)').hover(function(){
		$('.mainMenu:nth-child(16) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(17)').hover(function(){
		$('.mainMenu:nth-child(17) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(18) .subMenu').slideUp('fast')
	});
});
$(document).ready(function(){
	$('.mainMenu:nth-child(18)').hover(function(){
		$('.mainMenu:nth-child(18) .subMenu').slideDown('fast'),
		$('.mainMenu:nth-child(1) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(2) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(3) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(4) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(5) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(6) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(7) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(8) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(9) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(10) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(11) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(12) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(13) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(14) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(15) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(16) .subMenu').slideUp('fast'),
		$('.mainMenu:nth-child(17) .subMenu').slideUp('fast')
	});
});
setTimeout(function() {
	//$('#headNav > span').text('서울·경기·인천'),
    //$('#headNav > b').text('샛별배송 〉');
    $('#headNav > span').html('서울·경기·인천');
    $('#headNav > b').html('샛별배송 〉');

}, 3000);