var messages = [];

//messaging stuff
var addMessage = function (m, form){
	messages.push(m);
	form.o_messages.value = "";
	if(messages.length !== 0 && form.o_messages !== undefined)
	{
		for(var i = messages.length-1; i >= 0; i++)
		{
			form.o_messages.value += messages[i];
		}
	} else
	{
		form.o_messages.value = m;
	}

	form.o_messages.value += "\n";
}