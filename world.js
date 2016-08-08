/**
	This program is the first stage of a Locked room

	this program deals with all of the world and the player. everything bound by the textarea of board
*/

var theForm;

//DECLARATION

var BOUNDS = {
	x: 32,
	y: 32
};

var world = [[]]; //a whole bunch of objs (keys, slides etc) 
var pastWorldChar = "";
var player = {
	x: 16,
	y: 16,
	px: 16,
	py: 16,
	b_control: true,
	keys: 0
};
 
public function getForm (in_form)
{
	theForm = in_form;
};


//OBJS
var Wall = function(){
	this.act= function (){
		player.x = player.px;
		player.y = player.py;
		player.b_control = true;
	};
	this.c = function (){
		return "W";
	};
};
var Slide = function(){
	this.timer =  0;
	this.act = function (){
		player.b_control = false;
		if(this.timer > 0.2)
		{
			player.x += (player.x - player.px);
			player.y += (player.y - player.px);
			this.timer = 0;
		}
		this.timer += 0.02;
	};
	this.c = function (){
		return "_";
	};
};
var Key = function(){
	this.hasKey = true;
	this.act = function (){
		if(this.hasKey)
		{
			player.keys ++;
			this.hasKey = false;

		}
	};
	this.c = function (){
		return "~";
	};
};

//FUNCTIONS
//----player movement
var movePlayer = function (form){
	if(player.b_control)
	{
		switch(keyCode)
		{
			case 37:
				player.px = player.x;
				player.py = player.y;
				player.x -= 1;
				break;
			case 38:
				player.px = player.x;
				player.py = player.y;
				player.y += 1;
				break;
			case 39:
				player.px = player.x;
				player.py = player.y;
				player.x += 1;
				break;
			case 40:
				player.px = player.x;
				player.py = player.y;
				player.y -= 1
				break;
		}
	}	
	if(player.x > BOUNDS.x || player.y > BOUNDS.y || player.y < 0 || player.x < 0)
	{
		player.x = player.px;
		player.y = player.py;
	}

};

var worldToText = function ()
{
	var string = "";
	for(var i = 0; i < world.length; i ++)
	{

		for(var j = 0; j < world[i].length; i++)
		{
			if(i === player.x || j === player.y)
			{
				string += "@ ";
			} else
			{
				string += world[i][j].c() + " ";
			}
			

		}
		string += "\n";
	}

};

setInterval(update, 17)

var update = function ()
{
	movePlayer(theForm);

	try
	{
		world[player.x][player.y]();
	}catch(e)
	{

	}
	theForm.debugO.value = 4;
	theForm.o_map.value = worldToText();
};

