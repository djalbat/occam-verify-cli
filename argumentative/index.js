'use strict';

function parseArgv(argv, options) {
	const interpreterPath = argv.shift(),  ///
				filePath = argv.shift(), ///
				args = argv.slice();  ///

	let { flags, commands } = options;

	const permittedFlags = flags, ///
				permittedCommands = commands; ///

	flags = []; ///
	commands = [];  ///

	argv.forEach((argument) => {  ///
		const unabbreviatedFFlag = /^--[^-]+$/.test(argument),
					abbreviatedFlags = /^-[^-]+$/.test(argument)

	});

	return ({
		args,
		flags,
		commands,
		filePath,
		interpreterPath
	});
}

module.exports = {
  parseArgv
};
