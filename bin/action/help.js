"use strict";

function helpAction() {
  console.log(`Usage: 
  
  verify [<options>] [<argument>]                 Verify the specified project

  verify [<command>]  [<options>] [<argument>]    

Commands:

  help                                            Show this help

  version                                         Show the version

Options:

  --help|-h                                       Show this help

  --version|-v                                    Show the version

  --tail|-t                                       Sets the size of the tail of the log messages. The default is ten. 

  --follow|-f                                     Show the log messages immediately instead of tailing them. The default is false.

Further information:

Please see the readme file on GitHub:

  https://github.com/djalbat/occam-verify-cli
`);

  process.exit();
}

module.exports = helpAction;
