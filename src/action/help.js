"use strict";

export default function helpAction() {
  console.log(`Usage: 
  
  verify [<options>] [<command>] [<argument>]

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
}
