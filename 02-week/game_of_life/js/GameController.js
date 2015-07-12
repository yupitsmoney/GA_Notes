angular
	.module('gameOfLife')
	.controller("GameController", ['$interval', GameController]);

function GameController($interval) {

	this.gameBoard = [
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: true}, 
		{alive: true}, {alive: false}, {alive: false}, {alive: false}, {alive: true}, 
		{alive: true}, {alive: true}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: true}, 
		{alive: true}, {alive: false}, {alive: false}, {alive: false}, {alive: true}, 
		{alive: true}, {alive: true}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: true}, 
		{alive: true}, {alive: false}, {alive: false}, {alive: false}, {alive: true}, 
		{alive: true}, {alive: true}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: true}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: true}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: true}, {alive: true}, 
		{alive: true}, {alive: false}, {alive: false}, {alive: false}, {alive: true}, 
		{alive: true}, {alive: true}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		],
		[
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}, 
		{alive: false}, {alive: false}, {alive: false}, {alive: false}, {alive: false}
		]
	];

	this.killOrRevive = function(row, cell) {
		if (this.gameBoard[row][cell].alive) {
			this.gameBoard[row][cell].alive = false
		} else {
			this.gameBoard[row][cell].alive = true
		}
	};


	this.toggleLife = function() {
		if (this.promise) {
			$interval.cancel(this.promise);
			this.promise = null;
		}
		else {
			this.promise = $interval(lifeCycle.bind(this), 400);
		}
	};

	function lifeCycle() {

		var cell;

		// loop through all cells to resolve flags that were set the previous lifecycle
		for (var i = 0; i < this.gameBoard.length; i++) {
			for (var j = 0; j < this.gameBoard[i].length; j++) {
				cell = this.gameBoard[i][j];

				// if toggle flag was set on this cell, toggle its state and 
				// and then reset the flag.
				if (cell.toggle) {
					cell.alive = !cell.alive;
					cell.toggle = false;
				}
			}
		}

		// loop through all cells again to apply rules that will affect next round
		for (var i = 0; i < this.gameBoard.length; i++) {
			for (var j = 0; j < this.gameBoard[i].length; j++) {
				cell = this.gameBoard[i][j];

				// count cell neighbors
				var neighbors = 0;
				for (var k = i+1; k >= i-1; k--) {
					var currentRow = k;
						// check to make sure that any overflow cells return to other side of array
						if (k < 0) {
							currentRow = this.gameBoard.length -1;
						} else if (k == this.gameBoard.length) {
							currentRow = 0;
						}
					for (var l = j+1; l >= j-1; l--) {
						var currentCell = l;
							if (l < 0) {
								currentCell = this.gameBoard.length -1;
							} else if (l == this.gameBoard.length) {
								currentCell = 0;
							}
						if (
							this.gameBoard[currentRow][currentCell] !== cell && // dont' count self as a neighbor
							this.gameBoard[currentRow][currentCell].alive) {	// check if cell is alive
							neighbors++;
						}
					}
				}

				// set toggle flag based on current state and number of neighbors
				// alive cells should die if number of neighbors is 0,1,4,5,6,7,8
				var flagForDeath = (cell.alive && (neighbors <= 1 || neighbors >= 4));
				// empty cells should give birth if number of neighbors is 3				
				var flagForBirth = (!cell.alive && neighbors === 3);
				
				if(flagForDeath || flagForBirth) {
					cell.toggle = true;
				}
			}
		}
	}; // end lifeCycle()
}