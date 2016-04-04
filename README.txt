# Instagram-Unfollower

Using your web browser (Google Chrome for this example),
go to: https://www.instagram.com/
Log in and your url should be something like: https://www.instagram.com/{{your_username_here}}/

Right click on this page and select "Inspect Element" from the context menu.

In this menu there will be various tabs such as "Elements, Console, Sources, Network" etc.

Click on the console menu.

In the console menu, click on the blank line inside of the menu (allowing for text input)

Instagram supposedly allows users to unfollow 50 users an hour. so for every hour (600000ms) we unfollow 50 users.
This can be done by Copying and Pasting the following JS into the Console:

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
setInterval(unfollow, 3600000);
setInterval(scroller, 2000);


