"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReleaseContext;
    }
});
var _occamentities = require("occam-entities");
var _occamcustomgrammars = require("occam-custom-grammars");
var _file = /*#__PURE__*/ _interop_require_default(require("./file"));
var _type = require("../type");
var _array = require("../utilities/array");
var _customGrammar = require("../utilities/customGrammar");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var isFilePathFlorenceFilePath = _occamentities.filePathUtilities.isFilePathFlorenceFilePath, nominalLexerFromCombinedCustomGrammar = _occamcustomgrammars.lexersUtilities.nominalLexerFromCombinedCustomGrammar, nominalParserFromCombinedCustomGrammar = _occamcustomgrammars.parsersUtilities.nominalParserFromCombinedCustomGrammar;
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(log1, name, entries, released, lexer, parser, verified, initialised, fileContexts, customGrammar, loggingDisabled, dependencyReleaseContexts) {
        _class_call_check(this, ReleaseContext);
        this.log = log1;
        this.name = name;
        this.entries = entries;
        this.released = released;
        this.lexer = lexer;
        this.parser = parser;
        this.verified = verified;
        this.initialised = initialised;
        this.fileContexts = fileContexts;
        this.customGrammar = customGrammar;
        this.loggingDisabled = loggingDisabled;
        this.dependencyReleaseContexts = dependencyReleaseContexts;
    }
    _create_class(ReleaseContext, [
        {
            key: "getLog",
            value: function getLog() {
                return log;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                return this.entries;
            }
        },
        {
            key: "isReleased",
            value: function isReleased() {
                return this.released;
            }
        },
        {
            key: "getLexer",
            value: function getLexer() {
                return this.lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                return this.parser;
            }
        },
        {
            key: "isVerified",
            value: function isVerified() {
                return this.verified;
            }
        },
        {
            key: "isInitialised",
            value: function isInitialised() {
                return this.initialised;
            }
        },
        {
            key: "getFileContexts",
            value: function getFileContexts() {
                return this.fileContexts;
            }
        },
        {
            key: "getCustomGrammar",
            value: function getCustomGrammar() {
                return this.customGrammar;
            }
        },
        {
            key: "isLoggingDisabled",
            value: function isLoggingDisabled() {
                return this.loggingDisabled;
            }
        },
        {
            key: "getDependencyReleaseContexts",
            value: function getDependencyReleaseContexts() {
                return this.dependencyReleaseContexts;
            }
        },
        {
            key: "setLog",
            value: function setLog(log1) {
                this.log = log1;
            }
        },
        {
            key: "setName",
            value: function setName(name) {
                this.name = name;
            }
        },
        {
            key: "setEntries",
            value: function setEntries(entries) {
                this.entries = entries;
            }
        },
        {
            key: "setReleased",
            value: function setReleased(released) {
                this.released = released;
            }
        },
        {
            key: "setLexer",
            value: function setLexer(lexer) {
                this.lexer = lexer;
            }
        },
        {
            key: "setParser",
            value: function setParser(parser) {
                this.parser = parser;
            }
        },
        {
            key: "setVerified",
            value: function setVerified(verified) {
                this.verified = verified;
            }
        },
        {
            key: "setInitialised",
            value: function setInitialised(initialised) {
                return this.initialised = initialised;
            }
        },
        {
            key: "setFileContexts",
            value: function setFileContexts(fileContexts) {
                this.fileContexts = fileContexts;
            }
        },
        {
            key: "setCustomGrammar",
            value: function setCustomGrammar(customGrammar) {
                this.customGrammar = customGrammar;
            }
        },
        {
            key: "setLoggingDisabled",
            value: function setLoggingDisabled(loggingDisabled) {
                this.loggingDisabled = loggingDisabled;
            }
        },
        {
            key: "setDependencyReleaseContexts",
            value: function setDependencyReleaseContexts(dependencyReleaseContexts) {
                this.dependencyReleaseContexts = dependencyReleaseContexts;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextLabels = fileContext.getLabels(includeRelease);
                    (0, _array.push)(labels, fileContextLabels);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextLabels = releaseContext.getLabels(includeDependencies);
                        (0, _array.push)(labels, releaseContextLabels);
                    });
                }
                return labels;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var types = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextTypes = fileContext.getTypes(includeRelease);
                    (0, _array.push)(types, fileContextTypes);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextTypes = releaseContext.getTypes(includeDependencies);
                        (0, _array.push)(types, releaseContextTypes);
                    });
                }
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextRules = fileContext.getRules(includeRelease);
                    (0, _array.push)(rules, fileContextRules);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextRules = releaseContext.getRules(includeDependencies);
                        (0, _array.push)(rules, releaseContextRules);
                    });
                }
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextAxioms = fileContext.getAxioms(includeRelease);
                    (0, _array.push)(axioms, fileContextAxioms);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextAxioms = releaseContext.getAxioms(includeDependencies);
                        (0, _array.push)(axioms, releaseContextAxioms);
                    });
                }
                return axioms;
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextLemmas = fileContext.getLemmas(includeRelease);
                    (0, _array.push)(lemmas, fileContextLemmas);
                });
                return lemmas;
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextTheorems = fileContext.getTheorems(includeRelease);
                    (0, _array.push)(theorems, fileContextTheorems);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextTheorems = releaseContext.getTheorems(includeDependencies);
                        (0, _array.push)(theorems, releaseContextTheorems);
                    });
                }
                return theorems;
            }
        },
        {
            key: "getMetaLemmas",
            value: function getMetaLemmas() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metaLemmas = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextMetaLemmas = fileContext.getMetaLemmas(includeRelease);
                    (0, _array.push)(metaLemmas, fileContextMetaLemmas);
                });
                return metaLemmas;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextConjectures = fileContext.getConjectures(includeRelease);
                    (0, _array.push)(conjectures, fileContextConjectures);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextConjectures = releaseContext.getConjectures(includeDependencies);
                        (0, _array.push)(conjectures, releaseContextConjectures);
                    });
                }
                return conjectures;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextCombinators = fileContext.getCombinators(includeRelease);
                    (0, _array.push)(combinators, fileContextCombinators);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextCombinators = releaseContext.getCombinators(includeDependencies);
                        (0, _array.push)(combinators, releaseContextCombinators);
                    });
                }
                return combinators;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextConstructors = fileContext.getConstructors(includeRelease);
                    (0, _array.push)(constructors, fileContextConstructors);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextConstructors = releaseContext.getConstructors(includeDependencies);
                        (0, _array.push)(constructors, releaseContextConstructors);
                    });
                }
                return constructors;
            }
        },
        {
            key: "getMetatheorems",
            value: function getMetatheorems() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metatheorems = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextMetatheorems = fileContext.getMetatheorems(includeRelease);
                    (0, _array.push)(metatheorems, fileContextMetatheorems);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextMetatheorems = releaseContext.getMetatheorems(includeDependencies);
                        (0, _array.push)(metatheorems, releaseContextMetatheorems);
                    });
                }
                return metatheorems;
            }
        },
        {
            key: "addFileContext",
            value: function addFileContext(fileContext) {
                this.fileContexts.push(fileContext);
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types = this.getTypes();
                types.push(_type.objectType);
                var type = types.find(function(type) {
                    var typeNameMatches = type.matchTypeName(typeName);
                    if (typeNameMatches) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "getReleaseName",
            value: function getReleaseName() {
                var name = this.getName(), releaseName = name; ///
                return releaseName;
            }
        },
        {
            key: "getFile",
            value: function getFile(filePath) {
                return this.entries.getFile(filePath);
            }
        },
        {
            key: "getVersion",
            value: function getVersion() {
                return this.entries.getVersion();
            }
        },
        {
            key: "getFilePaths",
            value: function getFilePaths() {
                return this.entries.getFilePaths();
            }
        },
        {
            key: "getDependencies",
            value: function getDependencies() {
                return this.entries.getDependencies();
            }
        },
        {
            key: "matchShortenedVersion",
            value: function matchShortenedVersion(shortenedVersion) {
                return this.entries.matchShortenedVersion(shortenedVersion);
            }
        },
        {
            key: "disableLogging",
            value: function disableLogging() {
                var loggingDisabled = true;
                this.setLoggingDisabled(loggingDisabled);
            }
        },
        {
            key: "enableLogging",
            value: function enableLogging() {
                var loggingDisabled = false;
                this.setLoggingDisabled(loggingDisabled);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                if (this.loggingDisabled) {
                    return;
                }
                this.log.trace(message, node, tokens, filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                if (this.loggingDisabled) {
                    return;
                }
                this.log.debug(message, node, tokens, filePath);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                if (this.loggingDisabled) {
                    return;
                }
                this.log.info(message, node, tokens, filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                if (this.loggingDisabled) {
                    return;
                }
                this.log.warning(message, node, tokens, filePath);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                if (this.loggingDisabled) {
                    return;
                }
                this.log.error(message, node, tokens, filePath);
            }
        },
        {
            key: "fatal",
            value: function fatal(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                if (this.loggingDisabled) {
                    return;
                }
                this.log.fatal(message, node, tokens, filePath);
            }
        },
        {
            key: "initialise",
            value: function initialise(releaseContexts) {
                var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts), nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar), nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar);
                this.lexer = nominalLexer; ///
                this.parser = nominalParser; ///
                this.dependencyReleaseContexts = (0, _array.tail)(releaseContexts);
                if (this.released) {
                    var releaseContext = this, fileContexts = fileContextsFromEntries(this.entries, releaseContext);
                    initialiseFileContexts(fileContexts, releaseContext);
                    this.fileContexts = fileContexts;
                }
                this.initialised = true;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var releaseContext = this, fileContexts = fileContextsFromEntries(this.entries, releaseContext), fileContextsVerified = verifyFileContexts(fileContexts, releaseContext);
                if (fileContextsVerified) {
                    this.fileContexts = fileContexts;
                    this.verified = true;
                    verified = true;
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var fileContextsJSON = this.fileContexts.map(function(fileContext) {
                    var fileContextJSON = fileContext.toJSON();
                    return fileContextJSON;
                }), json = fileContextsJSON; ///
                return json;
            }
        }
    ], [
        {
            key: "fromLogNameEntriesAndReleased",
            value: function fromLogNameEntriesAndReleased(log1, name, entries, released) {
                var lexer = null, parser = null, verified = false, initialised = false, fileContexts = [], customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), loggingDisabled = false, dependencyReleaseContexts = null, releaseContext = new ReleaseContext(log1, name, entries, released, lexer, parser, verified, initialised, fileContexts, customGrammar, loggingDisabled, dependencyReleaseContexts);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();
function verifyFileContexts(fileContexts, releaseContext) {
    var _loop = function() {
        var fileContextsLength = fileContexts.length;
        if (fileContextsLength === 0) {
            return "break";
        }
        var verifiedFileContexts = [];
        fileContexts.forEach(function(fileContext) {
            var verified = fileContext.verify(releaseContext);
            if (verified) {
                var verifiedFileContext = fileContext; ///
                verifiedFileContexts.push(verifiedFileContext);
            }
        });
        var verifiedFileContextsLength = verifiedFileContexts.length, fileVerified = verifiedFileContextsLength > 0;
        if (!fileVerified) {
            return "break";
        }
        (0, _array.leftDifference)(fileContexts, verifiedFileContexts);
    };
    var fileContextsVerified;
    fileContexts = _to_consumable_array(fileContexts);
    for(;;){
        var _ret = _loop();
        if (_ret === "break") break;
    }
    var fileContextsLength = fileContexts.length;
    fileContextsVerified = fileContextsLength === 0;
    return fileContextsVerified;
}
function initialiseFileContexts(fileContexts, releaseContext) {
    var _loop = function() {
        var fileContextsLength = fileContexts.length;
        if (fileContextsLength === 0) {
            return "break";
        }
        var initialisedFileContexts = [];
        fileContexts.forEach(function(fileContext) {
            var initialised = fileContext.initialise(releaseContext);
            if (initialised) {
                var initialisedFileContext = fileContext; ///
                initialisedFileContexts.push(initialisedFileContext);
            }
        });
        var initialisedFileContextsLength = initialisedFileContexts.length, fileInitialised = initialisedFileContextsLength > 0;
        if (!fileInitialised) {
            return "break";
        }
        (0, _array.leftDifference)(fileContexts, initialisedFileContexts);
    };
    fileContexts = _to_consumable_array(fileContexts);
    for(;;){
        var _ret = _loop();
        if (_ret === "break") break;
    }
}
function fileContextsFromEntries(entries, releaseContext) {
    var fileContexts = [];
    entries.forEachFile(function(file) {
        var filePath = file.getPath(), filePathFlorenceFilePath = isFilePathFlorenceFilePath(filePath);
        if (filePathFlorenceFilePath) {
            var fileContext = _file.default.fromFileAndReleaseContext(file, releaseContext);
            fileContexts.push(fileContext);
        }
    });
    return fileContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBGaWxlQ29udGV4dCBmcm9tIFwiLi9maWxlXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgdGFpbCwgcHVzaCwgbGVmdERpZmZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5cbmNvbnN0IHsgaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgbmFtZSwgZW50cmllcywgcmVsZWFzZWQsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBsb2dnaW5nRGlzYWJsZWQsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5yZWxlYXNlZCA9IHJlbGVhc2VkO1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnZlcmlmaWVkID0gdmVyaWZpZWQ7XG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGluaXRpYWxpc2VkO1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy5sb2dnaW5nRGlzYWJsZWQgPSBsb2dnaW5nRGlzYWJsZWQ7XG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gbG9nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlZDtcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGlzVmVyaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZWQ7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIGlzTG9nZ2luZ0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ2dpbmdEaXNhYmxlZDtcbiAgfVxuXG4gIGdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIHNldExvZyhsb2cpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRFbnRyaWVzKGVudHJpZXMpIHtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgc2V0UmVsZWFzZWQocmVsZWFzZWQpIHtcbiAgICB0aGlzLnJlbGVhc2VkID0gcmVsZWFzZWQ7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHNldFZlcmlmaWVkKHZlcmlmaWVkKSB7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICB9XG5cbiAgc2V0SW5pdGlhbGlzZWQoaW5pdGlhbGlzZWQpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXNlZCA9IGluaXRpYWxpc2VkO1xuICB9XG5cbiAgc2V0RmlsZUNvbnRleHRzKGZpbGVDb250ZXh0cykge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgc2V0Q3VzdG9tR3JhbW1hcihjdXN0b21HcmFtbWFyKSB7XG4gICAgdGhpcy5jdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHNldExvZ2dpbmdEaXNhYmxlZChsb2dnaW5nRGlzYWJsZWQpIHtcbiAgICB0aGlzLmxvZ2dpbmdEaXNhYmxlZCA9IGxvZ2dpbmdEaXNhYmxlZDtcbiAgfVxuXG4gIHNldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgZmlsZUNvbnRleHRMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUaGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgZmlsZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhTGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgZmlsZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbmplY3R1cmVzID0gZmlsZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCBmaWxlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIHR5cGVzLnB1c2gob2JqZWN0VHlwZSk7XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRSZWxlYXNlTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICBkaXNhYmxlTG9nZ2luZygpIHtcbiAgICBjb25zdCBsb2dnaW5nRGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRMb2dnaW5nRGlzYWJsZWQobG9nZ2luZ0Rpc2FibGVkKTtcbiAgfVxuXG4gIGVuYWJsZUxvZ2dpbmcoKSB7XG4gICAgY29uc3QgbG9nZ2luZ0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldExvZ2dpbmdEaXNhYmxlZChsb2dnaW5nRGlzYWJsZWQpO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmxvZ2dpbmdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nLnRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmxvZ2dpbmdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nLmRlYnVnKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gICAgaWYgKHRoaXMubG9nZ2luZ0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2cuaW5mbyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmxvZ2dpbmdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nLndhcm5pbmcobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gICAgaWYgKHRoaXMubG9nZ2luZ0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2cuZXJyb3IobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gICAgaWYgKHRoaXMubG9nZ2luZ0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2cuZmF0YWwobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBpbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cykge1xuICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHRzKSxcbiAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcik7XG5cbiAgICB0aGlzLmxleGVyID0gbm9taW5hbExleGVyOyAvLy9cblxuICAgIHRoaXMucGFyc2VyID0gbm9taW5hbFBhcnNlcjsgLy8vXG5cbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0YWlsKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICBpZiAodGhpcy5yZWxlYXNlZCkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBmaWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHNGcm9tRW50cmllcyh0aGlzLmVudHJpZXMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgaW5pdGlhbGlzZUZpbGVDb250ZXh0cyhmaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHNGcm9tRW50cmllcyh0aGlzLmVudHJpZXMsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICBmaWxlQ29udGV4dHNWZXJpZmllZCA9IHZlcmlmeUZpbGVDb250ZXh0cyhmaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmIChmaWxlQ29udGV4dHNWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG5cbiAgICAgIHRoaXMudmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmZpbGVDb250ZXh0cy5tYXAoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVFbnRyaWVzQW5kUmVsZWFzZWQobG9nLCBuYW1lLCBlbnRyaWVzLCByZWxlYXNlZCkge1xuICAgIGNvbnN0IGxleGVyID0gbnVsbCxcbiAgICAgICAgICBwYXJzZXIgPSBudWxsLFxuICAgICAgICAgIHZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBsb2dnaW5nRGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIG5hbWUsIGVudHJpZXMsIHJlbGVhc2VkLCBsZXhlciwgcGFyc2VyLCB2ZXJpZmllZCwgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY3VzdG9tR3JhbW1hciwgbG9nZ2luZ0Rpc2FibGVkLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJpZnlGaWxlQ29udGV4dHMoZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBsZXQgZmlsZUNvbnRleHRzVmVyaWZpZWQ7XG5cbiAgZmlsZUNvbnRleHRzID0gWyAgLy8vXG4gICAgLi4uZmlsZUNvbnRleHRzXG4gIF07XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0xlbmd0aCA9IGZpbGVDb250ZXh0cy5sZW5ndGg7XG5cbiAgICBpZiAoZmlsZUNvbnRleHRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdO1xuXG4gICAgZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IGZpbGVDb250ZXh0LnZlcmlmeShyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7ICAvLy9cblxuICAgICAgICB2ZXJpZmllZEZpbGVDb250ZXh0cy5wdXNoKHZlcmlmaWVkRmlsZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dHNMZW5ndGggPSB2ZXJpZmllZEZpbGVDb250ZXh0cy5sZW5ndGgsXG4gICAgICAgICAgZmlsZVZlcmlmaWVkID0gKHZlcmlmaWVkRmlsZUNvbnRleHRzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoIWZpbGVWZXJpZmllZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGVmdERpZmZlcmVuY2UoZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cyk7XG4gIH1cblxuICBjb25zdCBmaWxlQ29udGV4dHNMZW5ndGggPSBmaWxlQ29udGV4dHMubGVuZ3RoO1xuXG4gIGZpbGVDb250ZXh0c1ZlcmlmaWVkID0gKGZpbGVDb250ZXh0c0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGZpbGVDb250ZXh0c1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXNlRmlsZUNvbnRleHRzKGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpIHtcbiAgZmlsZUNvbnRleHRzID0gWyAgLy8vXG4gICAgLi4uZmlsZUNvbnRleHRzXG4gIF07XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0xlbmd0aCA9IGZpbGVDb250ZXh0cy5sZW5ndGg7XG5cbiAgICBpZiAoZmlsZUNvbnRleHRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBpbml0aWFsaXNlZEZpbGVDb250ZXh0cyA9IFtdO1xuXG4gICAgZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbml0aWFsaXNlZCA9IGZpbGVDb250ZXh0LmluaXRpYWxpc2UocmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoaW5pdGlhbGlzZWQpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbGlzZWRGaWxlQ29udGV4dCA9IGZpbGVDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgaW5pdGlhbGlzZWRGaWxlQ29udGV4dHMucHVzaChpbml0aWFsaXNlZEZpbGVDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGluaXRpYWxpc2VkRmlsZUNvbnRleHRzTGVuZ3RoID0gaW5pdGlhbGlzZWRGaWxlQ29udGV4dHMubGVuZ3RoLFxuICAgICAgICAgIGZpbGVJbml0aWFsaXNlZCA9IChpbml0aWFsaXNlZEZpbGVDb250ZXh0c0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKCFmaWxlSW5pdGlhbGlzZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxlZnREaWZmZXJlbmNlKGZpbGVDb250ZXh0cywgaW5pdGlhbGlzZWRGaWxlQ29udGV4dHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKGVudHJpZXMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGZpbGVDb250ZXh0cyA9IFtdO1xuXG4gIGVudHJpZXMuZm9yRWFjaEZpbGUoKGZpbGUpID0+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCA9IGlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmIChmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGVBbmRSZWxlYXNlQ29udGV4dChmaWxlLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmaWxlQ29udGV4dHM7XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsImZpbGVQYXRoVXRpbGl0aWVzIiwibm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsIm5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsImxvZyIsIm5hbWUiLCJlbnRyaWVzIiwicmVsZWFzZWQiLCJsZXhlciIsInBhcnNlciIsInZlcmlmaWVkIiwiaW5pdGlhbGlzZWQiLCJmaWxlQ29udGV4dHMiLCJjdXN0b21HcmFtbWFyIiwibG9nZ2luZ0Rpc2FibGVkIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiaXNSZWxlYXNlZCIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiaXNWZXJpZmllZCIsImlzSW5pdGlhbGlzZWQiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRDdXN0b21HcmFtbWFyIiwiaXNMb2dnaW5nRGlzYWJsZWQiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwic2V0TG9nIiwic2V0TmFtZSIsInNldEVudHJpZXMiLCJzZXRSZWxlYXNlZCIsInNldExleGVyIiwic2V0UGFyc2VyIiwic2V0VmVyaWZpZWQiLCJzZXRJbml0aWFsaXNlZCIsInNldEZpbGVDb250ZXh0cyIsInNldEN1c3RvbUdyYW1tYXIiLCJzZXRMb2dnaW5nRGlzYWJsZWQiLCJzZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImxhYmVscyIsImZvckVhY2giLCJmaWxlQ29udGV4dCIsImluY2x1ZGVSZWxlYXNlIiwiZmlsZUNvbnRleHRMYWJlbHMiLCJwdXNoIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwidHlwZXMiLCJmaWxlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImZpbGVDb250ZXh0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJmaWxlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJmaWxlQ29udGV4dFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldE1ldGFMZW1tYXMiLCJtZXRhTGVtbWFzIiwiZmlsZUNvbnRleHRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImZpbGVDb250ZXh0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImZpbGVDb250ZXh0TWV0YXRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJhZGRGaWxlQ29udGV4dCIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwib2JqZWN0VHlwZSIsInR5cGUiLCJmaW5kIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJnZXRGaWxlIiwiZmlsZVBhdGgiLCJnZXRWZXJzaW9uIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGVwZW5kZW5jaWVzIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsImRpc2FibGVMb2dnaW5nIiwiZW5hYmxlTG9nZ2luZyIsInRyYWNlIiwibWVzc2FnZSIsIm5vZGUiLCJ0b2tlbnMiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dHMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIiwibm9taW5hbFBhcnNlciIsIm5vbWluYWxMZXhlciIsInRhaWwiLCJmaWxlQ29udGV4dHNGcm9tRW50cmllcyIsImluaXRpYWxpc2VGaWxlQ29udGV4dHMiLCJ2ZXJpZnkiLCJmaWxlQ29udGV4dHNWZXJpZmllZCIsInZlcmlmeUZpbGVDb250ZXh0cyIsInRvSlNPTiIsImZpbGVDb250ZXh0c0pTT04iLCJtYXAiLCJmaWxlQ29udGV4dEpTT04iLCJqc29uIiwiZnJvbUxvZ05hbWVFbnRyaWVzQW5kUmVsZWFzZWQiLCJjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzIiwiZmlsZUNvbnRleHRzTGVuZ3RoIiwibGVuZ3RoIiwidmVyaWZpZWRGaWxlQ29udGV4dHMiLCJ2ZXJpZmllZEZpbGVDb250ZXh0IiwidmVyaWZpZWRGaWxlQ29udGV4dHNMZW5ndGgiLCJmaWxlVmVyaWZpZWQiLCJsZWZ0RGlmZmVyZW5jZSIsImluaXRpYWxpc2VkRmlsZUNvbnRleHRzIiwiaW5pdGlhbGlzZWRGaWxlQ29udGV4dCIsImluaXRpYWxpc2VkRmlsZUNvbnRleHRzTGVuZ3RoIiwiZmlsZUluaXRpYWxpc2VkIiwiZm9yRWFjaEZpbGUiLCJmaWxlIiwiZ2V0UGF0aCIsImZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsIkZpbGVDb250ZXh0IiwiZnJvbUZpbGVBbmRSZWxlYXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7NkJBYmE7bUNBQ2dCOzJEQUUxQjtvQkFFRztxQkFDZ0I7NkJBQytDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRixJQUFNLEFBQUVDLDZCQUErQkMsZ0NBQWlCLENBQWhERCw0QkFDRixBQUFFRSx3Q0FBMENDLG9DQUFlLENBQXpERCx1Q0FDRixBQUFFRSx5Q0FBMkNDLHFDQUFnQixDQUEzREQ7QUFFTyxJQUFBLEFBQU1MLCtCQUFOO2FBQU1BLGVBQ1BPLElBQUcsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsZUFBZSxFQUFFQyx5QkFBeUI7Z0NBRHBJbEI7UUFFakIsSUFBSSxDQUFDTyxHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0E7O2tCQWJoQmxCOztZQWdCbkJtQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBT1o7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxP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