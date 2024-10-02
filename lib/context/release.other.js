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
    function ReleaseContext(log1, name, lexer, parser, entries, released, initialised, fileContexts, customGrammar, loggingDisabled, dependencyReleaseContexts) {
        _class_call_check(this, ReleaseContext);
        this.log = log1;
        this.name = name;
        this.lexer = lexer;
        this.parser = parser;
        this.entries = entries;
        this.released = released;
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
            key: "initialise",
            value: function initialise(releaseContexts) {
                var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts), nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar), nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar);
                this.lexer = nominalLexer; ///
                this.parser = nominalParser; ///
                this.dependencyReleaseContexts = (0, _array.tail)(releaseContexts);
                if (this.released) {
                    var releaseContext = this; ///
                    this.fileContexts = fileContextsFromEntries(this.entries, releaseContext);
                    initialiseFileContexts(this.fileContexts, releaseContext);
                }
                this.initialised = true;
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
                var lexer = null, parser = null, initialised = false, fileContexts = [], customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), loggingDisabled = false, dependencyReleaseContexts = null, releaseContext = new ReleaseContext(log1, name, lexer, parser, entries, released, initialised, fileContexts, customGrammar, loggingDisabled, dependencyReleaseContexts);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2Uub3RoZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBGaWxlQ29udGV4dCBmcm9tIFwiLi9maWxlXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgdGFpbCwgcHVzaCwgbGVmdERpZmZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5cbmNvbnN0IHsgaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgbmFtZSwgbGV4ZXIsIHBhcnNlciwgZW50cmllcywgcmVsZWFzZWQsIGluaXRpYWxpc2VkLCBmaWxlQ29udGV4dHMsIGN1c3RvbUdyYW1tYXIsIGxvZ2dpbmdEaXNhYmxlZCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMubG9nID0gbG9nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5yZWxlYXNlZCA9IHJlbGVhc2VkO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyO1xuICAgIHRoaXMubG9nZ2luZ0Rpc2FibGVkID0gbG9nZ2luZ0Rpc2FibGVkO1xuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIGxvZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGlzUmVsZWFzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZWQ7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIGlzTG9nZ2luZ0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ2dpbmdEaXNhYmxlZDtcbiAgfVxuXG4gIGdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIHNldExvZyhsb2cpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRFbnRyaWVzKGVudHJpZXMpIHtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgc2V0UmVsZWFzZWQocmVsZWFzZWQpIHtcbiAgICB0aGlzLnJlbGVhc2VkID0gcmVsZWFzZWQ7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHNldEluaXRpYWxpc2VkKGluaXRpYWxpc2VkKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgfVxuXG4gIHNldEZpbGVDb250ZXh0cyhmaWxlQ29udGV4dHMpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgfVxuXG4gIHNldEN1c3RvbUdyYW1tYXIoY3VzdG9tR3JhbW1hcikge1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzZXRMb2dnaW5nRGlzYWJsZWQobG9nZ2luZ0Rpc2FibGVkKSB7XG4gICAgdGhpcy5sb2dnaW5nRGlzYWJsZWQgPSBsb2dnaW5nRGlzYWJsZWQ7XG4gIH1cblxuICBzZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGFiZWxzID0gZmlsZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGZpbGVDb250ZXh0TGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dExhYmVscyA9IHJlbGVhc2VDb250ZXh0LmdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsZW1tYXMsIGZpbGVDb250ZXh0TGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIGZpbGVDb250ZXh0VGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YUxlbW1hcyA9IGZpbGVDb250ZXh0LmdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIGZpbGVDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25qZWN0dXJlcyA9IGZpbGVDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgZmlsZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSBmaWxlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5maWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0UmVsZWFzZU5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZTsgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZU5hbWU7XG4gIH1cblxuICBnZXRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZShmaWxlUGF0aCk7IH1cblxuICBnZXRWZXJzaW9uKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldFZlcnNpb24oKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXREZXBlbmRlbmNpZXMoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLmVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pOyB9XG5cbiAgZGlzYWJsZUxvZ2dpbmcoKSB7XG4gICAgY29uc3QgbG9nZ2luZ0Rpc2FibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0TG9nZ2luZ0Rpc2FibGVkKGxvZ2dpbmdEaXNhYmxlZCk7XG4gIH1cblxuICBlbmFibGVMb2dnaW5nKCkge1xuICAgIGNvbnN0IGxvZ2dpbmdEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRMb2dnaW5nRGlzYWJsZWQobG9nZ2luZ0Rpc2FibGVkKTtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZy50cmFjZShtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZy5kZWJ1ZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmxvZ2dpbmdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nLmluZm8obWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZy53YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmxvZ2dpbmdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nLmVycm9yKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMpIHtcbiAgICBjb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyksXG4gICAgICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgbm9taW5hbExleGVyID0gbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgdGhpcy5sZXhlciA9IG5vbWluYWxMZXhlcjsgLy8vXG5cbiAgICB0aGlzLnBhcnNlciA9IG5vbWluYWxQYXJzZXI7IC8vL1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGFpbChyZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgaWYgKHRoaXMucmVsZWFzZWQpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKHRoaXMuZW50cmllcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpbml0aWFsaXNlRmlsZUNvbnRleHRzKHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IHRoaXMuZmlsZUNvbnRleHRzLm1hcCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0SlNPTiA9IGZpbGVDb250ZXh0LnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsZUNvbnRleHRKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dHNKU09OOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUVudHJpZXNBbmRSZWxlYXNlZChsb2csIG5hbWUsIGVudHJpZXMsIHJlbGVhc2VkKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsLFxuICAgICAgICAgIHBhcnNlciA9IG51bGwsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBsb2dnaW5nRGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIG5hbWUsIGxleGVyLCBwYXJzZXIsIGVudHJpZXMsIHJlbGVhc2VkLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBsb2dnaW5nRGlzYWJsZWQsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpc2VGaWxlQ29udGV4dHMoZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBmaWxlQ29udGV4dHMgPSBbICAvLy9cbiAgICAuLi5maWxlQ29udGV4dHNcbiAgXTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzTGVuZ3RoID0gZmlsZUNvbnRleHRzLmxlbmd0aDtcblxuICAgIGlmIChmaWxlQ29udGV4dHNMZW5ndGggPT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IGluaXRpYWxpc2VkRmlsZUNvbnRleHRzID0gW107XG5cbiAgICBmaWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluaXRpYWxpc2VkID0gZmlsZUNvbnRleHQuaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmIChpbml0aWFsaXNlZCkge1xuICAgICAgICBjb25zdCBpbml0aWFsaXNlZEZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7ICAvLy9cblxuICAgICAgICBpbml0aWFsaXNlZEZpbGVDb250ZXh0cy5wdXNoKGluaXRpYWxpc2VkRmlsZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5pdGlhbGlzZWRGaWxlQ29udGV4dHNMZW5ndGggPSBpbml0aWFsaXNlZEZpbGVDb250ZXh0cy5sZW5ndGgsXG4gICAgICAgICAgZmlsZUluaXRpYWxpc2VkID0gKGluaXRpYWxpc2VkRmlsZUNvbnRleHRzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoIWZpbGVJbml0aWFsaXNlZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGVmdERpZmZlcmVuY2UoZmlsZUNvbnRleHRzLCBpbml0aWFsaXNlZEZpbGVDb250ZXh0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsZUNvbnRleHRzRnJvbUVudHJpZXMoZW50cmllcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgY29uc3QgZmlsZUNvbnRleHRzID0gW107XG5cbiAgZW50cmllcy5mb3JFYWNoRmlsZSgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZsb3JlbmNlRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKGZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZUFuZFJlbGVhc2VDb250ZXh0KGZpbGUsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbGVDb250ZXh0cztcbn1cbiJdLCJuYW1lcyI6WyJSZWxlYXNlQ29udGV4dCIsImlzRmlsZVBhdGhGbG9yZW5jZUZpbGVQYXRoIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwibG9nIiwibmFtZSIsImxleGVyIiwicGFyc2VyIiwiZW50cmllcyIsInJlbGVhc2VkIiwiaW5pdGlhbGlzZWQiLCJmaWxlQ29udGV4dHMiLCJjdXN0b21HcmFtbWFyIiwibG9nZ2luZ0Rpc2FibGVkIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEVudHJpZXMiLCJpc1JlbGVhc2VkIiwiaXNJbml0aWFsaXNlZCIsImdldEZpbGVDb250ZXh0cyIsImdldEN1c3RvbUdyYW1tYXIiLCJpc0xvZ2dpbmdEaXNhYmxlZCIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJzZXRMb2ciLCJzZXROYW1lIiwic2V0RW50cmllcyIsInNldFJlbGVhc2VkIiwic2V0TGV4ZXIiLCJzZXRQYXJzZXIiLCJzZXRJbml0aWFsaXNlZCIsInNldEZpbGVDb250ZXh0cyIsInNldEN1c3RvbUdyYW1tYXIiLCJzZXRMb2dnaW5nRGlzYWJsZWQiLCJzZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImxhYmVscyIsImZvckVhY2giLCJmaWxlQ29udGV4dCIsImluY2x1ZGVSZWxlYXNlIiwiZmlsZUNvbnRleHRMYWJlbHMiLCJwdXNoIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwidHlwZXMiLCJmaWxlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImZpbGVDb250ZXh0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJmaWxlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJmaWxlQ29udGV4dFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldE1ldGFMZW1tYXMiLCJtZXRhTGVtbWFzIiwiZmlsZUNvbnRleHRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImZpbGVDb250ZXh0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImZpbGVDb250ZXh0TWV0YXRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJhZGRGaWxlQ29udGV4dCIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwib2JqZWN0VHlwZSIsInR5cGUiLCJmaW5kIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJnZXRGaWxlIiwiZmlsZVBhdGgiLCJnZXRWZXJzaW9uIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGVwZW5kZW5jaWVzIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsImRpc2FibGVMb2dnaW5nIiwiZW5hYmxlTG9nZ2luZyIsInRyYWNlIiwibWVzc2FnZSIsIm5vZGUiLCJ0b2tlbnMiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsIm5vbWluYWxQYXJzZXIiLCJub21pbmFsTGV4ZXIiLCJ0YWlsIiwiZmlsZUNvbnRleHRzRnJvbUVudHJpZXMiLCJpbml0aWFsaXNlRmlsZUNvbnRleHRzIiwidG9KU09OIiwiZmlsZUNvbnRleHRzSlNPTiIsIm1hcCIsImZpbGVDb250ZXh0SlNPTiIsImpzb24iLCJmcm9tTG9nTmFtZUVudHJpZXNBbmRSZWxlYXNlZCIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJmaWxlQ29udGV4dHNMZW5ndGgiLCJsZW5ndGgiLCJpbml0aWFsaXNlZEZpbGVDb250ZXh0cyIsImluaXRpYWxpc2VkRmlsZUNvbnRleHQiLCJpbml0aWFsaXNlZEZpbGVDb250ZXh0c0xlbmd0aCIsImZpbGVJbml0aWFsaXNlZCIsImxlZnREaWZmZXJlbmNlIiwiZm9yRWFjaEZpbGUiLCJmaWxlIiwiZ2V0UGF0aCIsImZpbGVQYXRoRmxvcmVuY2VGaWxlUGF0aCIsIkZpbGVDb250ZXh0IiwiZnJvbUZpbGVBbmRSZWxlYXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7NkJBYmE7bUNBQ2dCOzJEQUUxQjtvQkFFRztxQkFDZ0I7NkJBQytDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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