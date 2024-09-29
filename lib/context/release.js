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
            value: function initialise(releaseContexts, verbose) {
                var initialised;
                var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts), nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar), nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar);
                this.lexer = nominalLexer; ///
                this.parser = nominalParser; ///
                this.dependencyReleaseContexts = (0, _array.tail)(releaseContexts);
                if (this.released) {
                    var verified = this.verify(verbose);
                    initialised = verified; ///
                } else {
                    initialised = true;
                }
                this.initialised = initialised;
                return initialised;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verbose = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var verified;
                var releaseContext = this;
                if (!verbose) {
                    releaseContext.disableLogging();
                }
                this.fileContexts = fileContextsFromEntries(this.entries, releaseContext);
                var fileContextsVerified = verifyFileContexts(this.fileContexts, releaseContext);
                verified = fileContextsVerified; ///
                if (!verbose) {
                    releaseContext.enableLogging();
                }
                this.verified = verified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBGaWxlQ29udGV4dCBmcm9tIFwiLi9maWxlXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgdGFpbCwgcHVzaCwgbGVmdERpZmZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5cbmNvbnN0IHsgaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgbmFtZSwgZW50cmllcywgcmVsZWFzZWQsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBsb2dnaW5nRGlzYWJsZWQsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5yZWxlYXNlZCA9IHJlbGVhc2VkO1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnZlcmlmaWVkID0gdmVyaWZpZWQ7XG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGluaXRpYWxpc2VkO1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy5sb2dnaW5nRGlzYWJsZWQgPSBsb2dnaW5nRGlzYWJsZWQ7XG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gbG9nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlZDtcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGlzVmVyaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZWQ7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIGlzTG9nZ2luZ0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ2dpbmdEaXNhYmxlZDtcbiAgfVxuXG4gIGdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIHNldExvZyhsb2cpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRFbnRyaWVzKGVudHJpZXMpIHtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgc2V0UmVsZWFzZWQocmVsZWFzZWQpIHtcbiAgICB0aGlzLnJlbGVhc2VkID0gcmVsZWFzZWQ7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHNldFZlcmlmaWVkKHZlcmlmaWVkKSB7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICB9XG5cbiAgc2V0SW5pdGlhbGlzZWQoaW5pdGlhbGlzZWQpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXNlZCA9IGluaXRpYWxpc2VkO1xuICB9XG5cbiAgc2V0RmlsZUNvbnRleHRzKGZpbGVDb250ZXh0cykge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgc2V0Q3VzdG9tR3JhbW1hcihjdXN0b21HcmFtbWFyKSB7XG4gICAgdGhpcy5jdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHNldExvZ2dpbmdEaXNhYmxlZChsb2dnaW5nRGlzYWJsZWQpIHtcbiAgICB0aGlzLmxvZ2dpbmdEaXNhYmxlZCA9IGxvZ2dpbmdEaXNhYmxlZDtcbiAgfVxuXG4gIHNldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgZmlsZUNvbnRleHRMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUaGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgZmlsZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhTGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgZmlsZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbmplY3R1cmVzID0gZmlsZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCBmaWxlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIHR5cGVzLnB1c2gob2JqZWN0VHlwZSk7XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRSZWxlYXNlTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICBkaXNhYmxlTG9nZ2luZygpIHtcbiAgICBjb25zdCBsb2dnaW5nRGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXRMb2dnaW5nRGlzYWJsZWQobG9nZ2luZ0Rpc2FibGVkKTtcbiAgfVxuXG4gIGVuYWJsZUxvZ2dpbmcoKSB7XG4gICAgY29uc3QgbG9nZ2luZ0Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNldExvZ2dpbmdEaXNhYmxlZChsb2dnaW5nRGlzYWJsZWQpO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmxvZ2dpbmdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nLnRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmxvZ2dpbmdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nLmRlYnVnKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gICAgaWYgKHRoaXMubG9nZ2luZ0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2cuaW5mbyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmxvZ2dpbmdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nLndhcm5pbmcobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gICAgaWYgKHRoaXMubG9nZ2luZ0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2cuZXJyb3IobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gICAgaWYgKHRoaXMubG9nZ2luZ0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2cuZmF0YWwobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBpbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cywgdmVyYm9zZSkge1xuICAgIGxldCBpbml0aWFsaXNlZDtcblxuICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHRzKSxcbiAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcik7XG5cbiAgICB0aGlzLmxleGVyID0gbm9taW5hbExleGVyOyAvLy9cblxuICAgIHRoaXMucGFyc2VyID0gbm9taW5hbFBhcnNlcjsgLy8vXG5cbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0YWlsKHJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICBpZiAodGhpcy5yZWxlYXNlZCkge1xuICAgICAgY29uc3QgdmVyaWZpZWQgPSB0aGlzLnZlcmlmeSh2ZXJib3NlKTtcblxuICAgICAgaW5pdGlhbGlzZWQgPSB2ZXJpZmllZDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGluaXRpYWxpc2VkO1xuXG4gICAgcmV0dXJuIGluaXRpYWxpc2VkO1xuICB9XG5cbiAgdmVyaWZ5KHZlcmJvc2UgPSB0cnVlKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzO1xuXG4gICAgaWYgKCF2ZXJib3NlKSB7XG4gICAgICByZWxlYXNlQ29udGV4dC5kaXNhYmxlTG9nZ2luZygpO1xuICAgIH1cblxuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzRnJvbUVudHJpZXModGhpcy5lbnRyaWVzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dHNWZXJpZmllZCA9IHZlcmlmeUZpbGVDb250ZXh0cyh0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWQgPSBmaWxlQ29udGV4dHNWZXJpZmllZDsgIC8vL1xuXG4gICAgaWYgKCF2ZXJib3NlKSB7XG4gICAgICByZWxlYXNlQ29udGV4dC5lbmFibGVMb2dnaW5nKCk7XG4gICAgfVxuXG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmZpbGVDb250ZXh0cy5tYXAoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVFbnRyaWVzQW5kUmVsZWFzZWQobG9nLCBuYW1lLCBlbnRyaWVzLCByZWxlYXNlZCkge1xuICAgIGNvbnN0IGxleGVyID0gbnVsbCxcbiAgICAgICAgICBwYXJzZXIgPSBudWxsLFxuICAgICAgICAgIHZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBsb2dnaW5nRGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIG5hbWUsIGVudHJpZXMsIHJlbGVhc2VkLCBsZXhlciwgcGFyc2VyLCB2ZXJpZmllZCwgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY3VzdG9tR3JhbW1hciwgbG9nZ2luZ0Rpc2FibGVkLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJpZnlGaWxlQ29udGV4dHMoZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBsZXQgZmlsZUNvbnRleHRzVmVyaWZpZWQ7XG5cbiAgZmlsZUNvbnRleHRzID0gWyAgLy8vXG4gICAgLi4uZmlsZUNvbnRleHRzXG4gIF07XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0xlbmd0aCA9IGZpbGVDb250ZXh0cy5sZW5ndGg7XG5cbiAgICBpZiAoZmlsZUNvbnRleHRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdO1xuXG4gICAgZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IGZpbGVDb250ZXh0LnZlcmlmeShyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7ICAvLy9cblxuICAgICAgICB2ZXJpZmllZEZpbGVDb250ZXh0cy5wdXNoKHZlcmlmaWVkRmlsZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dHNMZW5ndGggPSB2ZXJpZmllZEZpbGVDb250ZXh0cy5sZW5ndGgsXG4gICAgICAgICAgZmlsZVZlcmlmaWVkID0gKHZlcmlmaWVkRmlsZUNvbnRleHRzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoIWZpbGVWZXJpZmllZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGVmdERpZmZlcmVuY2UoZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cyk7XG4gIH1cblxuICBjb25zdCBmaWxlQ29udGV4dHNMZW5ndGggPSBmaWxlQ29udGV4dHMubGVuZ3RoO1xuXG4gIGZpbGVDb250ZXh0c1ZlcmlmaWVkID0gKGZpbGVDb250ZXh0c0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGZpbGVDb250ZXh0c1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tRW50cmllcyhlbnRyaWVzLCByZWxlYXNlQ29udGV4dCkge1xuICBjb25zdCBmaWxlQ29udGV4dHMgPSBbXTtcblxuICBlbnRyaWVzLmZvckVhY2hGaWxlKChmaWxlKSA9PiB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAoZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlQW5kUmVsZWFzZUNvbnRleHQoZmlsZSwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZmlsZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0IiwiaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgiLCJmaWxlUGF0aFV0aWxpdGllcyIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJsb2ciLCJuYW1lIiwiZW50cmllcyIsInJlbGVhc2VkIiwibGV4ZXIiLCJwYXJzZXIiLCJ2ZXJpZmllZCIsImluaXRpYWxpc2VkIiwiZmlsZUNvbnRleHRzIiwiY3VzdG9tR3JhbW1hciIsImxvZ2dpbmdEaXNhYmxlZCIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRMb2ciLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsImlzUmVsZWFzZWQiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImlzVmVyaWZpZWQiLCJpc0luaXRpYWxpc2VkIiwiZ2V0RmlsZUNvbnRleHRzIiwiZ2V0Q3VzdG9tR3JhbW1hciIsImlzTG9nZ2luZ0Rpc2FibGVkIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInNldExvZyIsInNldE5hbWUiLCJzZXRFbnRyaWVzIiwic2V0UmVsZWFzZWQiLCJzZXRMZXhlciIsInNldFBhcnNlciIsInNldFZlcmlmaWVkIiwic2V0SW5pdGlhbGlzZWQiLCJzZXRGaWxlQ29udGV4dHMiLCJzZXRDdXN0b21HcmFtbWFyIiwic2V0TG9nZ2luZ0Rpc2FibGVkIiwic2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExhYmVscyIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJsYWJlbHMiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0TGFiZWxzIiwicHVzaCIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImZpbGVDb250ZXh0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJmaWxlQ29udGV4dENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiYWRkRmlsZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm9iamVjdFR5cGUiLCJ0eXBlIiwiZmluZCIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJnZXRSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lIiwiZ2V0RmlsZSIsImZpbGVQYXRoIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJkaXNhYmxlTG9nZ2luZyIsImVuYWJsZUxvZ2dpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJub2RlIiwidG9rZW5zIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwidmVyYm9zZSIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMiLCJub21pbmFsUGFyc2VyIiwibm9taW5hbExleGVyIiwidGFpbCIsInZlcmlmeSIsImZpbGVDb250ZXh0c0Zyb21FbnRyaWVzIiwiZmlsZUNvbnRleHRzVmVyaWZpZWQiLCJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJ0b0pTT04iLCJmaWxlQ29udGV4dHNKU09OIiwibWFwIiwiZmlsZUNvbnRleHRKU09OIiwianNvbiIsImZyb21Mb2dOYW1lRW50cmllc0FuZFJlbGVhc2VkIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsImZpbGVDb250ZXh0c0xlbmd0aCIsImxlbmd0aCIsInZlcmlmaWVkRmlsZUNvbnRleHRzIiwidmVyaWZpZWRGaWxlQ29udGV4dCIsInZlcmlmaWVkRmlsZUNvbnRleHRzTGVuZ3RoIiwiZmlsZVZlcmlmaWVkIiwibGVmdERpZmZlcmVuY2UiLCJmb3JFYWNoRmlsZSIsImZpbGUiLCJnZXRQYXRoIiwiZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoIiwiRmlsZUNvbnRleHQiLCJmcm9tRmlsZUFuZFJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7Ozs2QkFiYTttQ0FDZ0I7MkRBRTFCO29CQUVHO3FCQUNnQjs2QkFDK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFGLElBQU0sQUFBRUMsNkJBQStCQyxnQ0FBaUIsQ0FBaERELDRCQUNGLEFBQUVFLHdDQUEwQ0Msb0NBQWUsQ0FBekRELHVDQUNGLEFBQUVFLHlDQUEyQ0MscUNBQWdCLENBQTNERDtBQUVPLElBQUEsQUFBTUwsK0JBQU47YUFBTUEsZUFDUE8sSUFBRyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxlQUFlLEVBQUVDLHlCQUF5QjtnQ0FEcElsQjtRQUVqQixJQUFJLENBQUNPLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLHlCQUF5QixHQUFHQTs7a0JBYmhCbEI7O1lBZ0JuQm1CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPWjtZQUNUOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFB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