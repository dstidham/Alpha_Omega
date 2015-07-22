var readline = require("readline"),
	rl = readline.createInterface(process.stdin,process.stdout);

rl.setPrompt("--> ");
rl.prompt();

/* Array*/
var toDoList = [];

var commands = {
	ls:function() {
		console.log(toDoList);
	},
	add:function(item) {
		toDoList.push(item)
	}
};

rl.on('line',function(line) {
	var words = line.split(' '), //splits the line by spaces
		command = words.shift(), //captures the first word on line
		argStr = words.join(' '); //joins each word separating them by a space

	commands[command](argStr);	// send the command and items to object array


	//console.log(words);
	//toDoList.push(line);
	//console.log(toDoList);
	rl.prompt();
});
