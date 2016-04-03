var scroller = function scrolldown(){
	var numActive = $('._988x3').length;
	if(numActive<43)
	{
		scrollHeight = $('._4gt3b')[0].scrollHeight;
		console.log('numActive: '+numActive);
		$('._4gt3b').scrollTop($('._4gt3b')[0].scrollHeight);
	}
};

var unfollow = function unfollower(){
	$('._988x3').click(); // <-- unfollows all in grid
};

$('._bgvpv').click(); // <-- opens grid of followers
setInterval(unfollow, 600000);
setInterval(scroller, 2000);
