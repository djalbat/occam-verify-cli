# Occam Verify-CLI

[Occam](https://github.com/djalbat/occam)'s verifier.

*This readme file is mostly for developers. For instructions tailored to end users, see the following:*

https://openmathematics.org/how-to-contribute

### Contents

- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Contact](#contact)

## Installation

If you would like to contribute or would simply like to have a look at the code, you can clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-verify-cli.git

...and then install the dependencies with [npm](https://www.npmjs.com/) from within the project's root directory:

    npm install

## Usage

These are the commands and options:

```
  verify [<options>] [<argument>]                 Verify the specified project

  verify [<command>]  [<options>] [<argument>]    

Commands:

  help                                            Show this help

  version                                         Show the version

Options:

  --help|-h                                       Show this help

  --version|-v                                    Show the version
```

## Building

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
