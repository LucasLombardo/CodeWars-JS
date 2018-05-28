{
	//filter out default global nodeJS vars in order to find wire var
	let nonwireObjs = [
		'global',
		'process',
		'Buffer',
		'clearImmediate',
		'clearInterval',
		'clearTimeout',
		'setImmediate',
		'setInterval',
		'setTimeout',
		'console',
		'__filename',
		'exports',
		'module',
		'__dirname',
		'require',
		'mode',
		'label',
		'bomb',
		'Bomb'
	];
	let wireCode = Object.keys(global).filter(s => nonwireObjs.indexOf(s) == -1)[0];
	//cross fingers and cut the wire
	Bomb.CutTheWire(global[wireCode]);
}
