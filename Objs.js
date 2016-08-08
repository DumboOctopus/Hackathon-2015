var Wall = function(){
	this.act= function ()
	{
		player.x = player.px;
		player.y = player.py;
		player.b_control = true;
	};
};
var Slide = function(){
this.timer =  0;
	this.act = function ()
	{
		player.b_control = false;
		if(this.timer > 0.2)
		{
			player.x += (player.x - player.px);
			player.y += (player.y - player.px);
			this.timer = 0;
		}
		this.timer += 0.02;
	};
};
var Key = function(){
	this.hasKey = true;
	this.act = function ()
	{
		if(this.hasKey)
		{
			player.keys ++;
			this.hasKey = false;

		}
	};
};