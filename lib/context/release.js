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
var _necessary = require("necessary");
var _occamfurtle = require("occam-furtle");
var _occamentities = require("occam-entities");
var _occamcustomgrammars = require("occam-custom-grammars");
var _file = /*#__PURE__*/ _interop_require_default(require("../context/file"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("../nominal/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../nominal/parser"));
var _constants = require("../constants");
var _metaTypes = require("../metaTypes");
var _customGrammar = require("../utilities/customGrammar");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
var nominalLexerFromCombinedCustomGrammar = _occamcustomgrammars.lexersUtilities.nominalLexerFromCombinedCustomGrammar, nominalParserFromCombinedCustomGrammar = _occamcustomgrammars.parsersUtilities.nominalParserFromCombinedCustomGrammar, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, clear = _necessary.arrayUtilities.clear, filter = _necessary.arrayUtilities.filter, resolve = _necessary.arrayUtilities.resolve, compress = _necessary.arrayUtilities.compress, isFilePathFurtleFilePath = _occamentities.filePathUtilities.isFilePathFurtleFilePath, isFilePathNominalFilePath = _occamentities.filePathUtilities.isFilePathNominalFilePath, _LEVELS = _sliced_to_array(_constants.LEVELS, 5), TRACE_LEVEL = _LEVELS[0], DEBUG_LEVEL = _LEVELS[1], INFO_LEVEL = _LEVELS[2], WARNING_LEVEL = _LEVELS[3], ERROR_LEVEL = _LEVELS[4];
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(log1, name, json, entries, lexer, parser, verified, initialised, fileContexts, customGrammar, dependencyReleaseContexts) {
        _class_call_check(this, ReleaseContext);
        this.log = log1;
        this.name = name;
        this.json = json;
        this.entries = entries;
        this.lexer = lexer;
        this.parser = parser;
        this.verified = verified;
        this.initialised = initialised;
        this.fileContexts = fileContexts;
        this.customGrammar = customGrammar;
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
            key: "getJSON",
            value: function getJSON() {
                return this.json;
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                return this.entries;
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
            key: "getMetaTypes",
            value: function getMetaTypes() {
                var metaTypes = (0, _metaTypes.getMetaTypes)();
                return metaTypes;
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
            key: "getDependencyReleaseContexts",
            value: function getDependencyReleaseContexts() {
                return this.dependencyReleaseContexts;
            }
        },
        {
            key: "isReleased",
            value: function isReleased() {
                var released = this.json !== null;
                return released;
            }
        },
        {
            key: "findFile",
            value: function findFile(filePath) {
                return this.entries.findFile(filePath);
            }
        },
        {
            key: "findFileContext",
            value: function findFileContext(filePath) {
                var fileContext = this.fileContexts.find(function(fileContext) {
                    var fileContextFilePath = fileContext.getFilePath();
                    if (fileContextFilePath === filePath) {
                        return true;
                    }
                });
                return fileContext;
            }
        },
        {
            key: "getTypePrefix",
            value: function getTypePrefix() {
                var typePrefix = null;
                var includeDependencies = false, typePrefixes = this.getTypePrefixes(includeDependencies), typePrefixesLength = typePrefixes.length;
                if (typePrefixesLength === 1) {
                    var firstTypePrefix = first(typePrefixes);
                    typePrefix = firstTypePrefix; ///
                }
                return typePrefix;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextLabels = fileContext.getLabels(includeRelease);
                    push(labels, fileContextLabels);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextLabels = releaseContext.getLabels(includeDependencies);
                        push(labels, releaseContextLabels);
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
                    push(types, fileContextTypes);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextTypes = releaseContext.getTypes(includeDependencies);
                        push(types, releaseContextTypes);
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
                    push(rules, fileContextRules);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextRules = releaseContext.getRules(includeDependencies);
                        push(rules, releaseContextRules);
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
                    push(axioms, fileContextAxioms);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextAxioms = releaseContext.getAxioms(includeDependencies);
                        push(axioms, releaseContextAxioms);
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
                    push(lemmas, fileContextLemmas);
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
                    push(theorems, fileContextTheorems);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextTheorems = releaseContext.getTheorems(includeDependencies);
                        push(theorems, releaseContextTheorems);
                    });
                }
                return theorems;
            }
        },
        {
            key: "getProcedures",
            value: function getProcedures() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var procedures = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextProcedures = fileContext.getProcedures(includeRelease);
                    push(procedures, fileContextProcedures);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextProcedures = releaseContext.getProcedures(includeDependencies);
                        push(procedures, releaseContextProcedures);
                    });
                }
                return procedures;
            }
        },
        {
            key: "getMetaLemmas",
            value: function getMetaLemmas() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metaLemmas = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextMetaLemmas = fileContext.getMetaLemmas(includeRelease);
                    push(metaLemmas, fileContextMetaLemmas);
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
                    push(conjectures, fileContextConjectures);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextConjectures = releaseContext.getConjectures(includeDependencies);
                        push(conjectures, releaseContextConjectures);
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
                    push(combinators, fileContextCombinators);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextCombinators = releaseContext.getCombinators(includeDependencies);
                        push(combinators, releaseContextCombinators);
                    });
                }
                return combinators;
            }
        },
        {
            key: "getTypePrefixes",
            value: function getTypePrefixes() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var typePrefixes = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextTypePrefixes = fileContext.getTypePrefixes(includeRelease);
                    push(typePrefixes, fileContextTypePrefixes);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextTypePrefixes = releaseContext.getTypePrefixes(includeDependencies);
                        push(typePrefixes, releaseContextTypePrefixes);
                    });
                }
                return typePrefixes;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeDependencies = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = [];
                this.fileContexts.forEach(function(fileContext) {
                    var includeRelease = false, fileContextConstructors = fileContext.getConstructors(includeRelease);
                    push(constructors, fileContextConstructors);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextConstructors = releaseContext.getConstructors(includeDependencies);
                        push(constructors, releaseContextConstructors);
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
                    push(metatheorems, fileContextMetatheorems);
                });
                if (includeDependencies) {
                    var dependencyReleaseContexts = this.getDependencyReleaseContexts();
                    dependencyReleaseContexts.forEach(function(releaseContext) {
                        var includeDependencies = false, releaseContextMetatheorems = releaseContext.getMetatheorems(includeDependencies);
                        push(metatheorems, releaseContextMetatheorems);
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
            key: "trace",
            value: function trace(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = TRACE_LEVEL;
                this.writeToLog(level, message, filePath, lineIndex);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = DEBUG_LEVEL;
                this.writeToLog(level, message, filePath, lineIndex);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = INFO_LEVEL;
                this.writeToLog(level, message, filePath, lineIndex);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = WARNING_LEVEL;
                this.writeToLog(level, message, filePath, lineIndex);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                var level = ERROR_LEVEL;
                this.writeToLog(level, message, filePath, lineIndex);
            }
        },
        {
            key: "writeToLog",
            value: function writeToLog(level, message, filePath, lineIndex) {
                this.log.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                var fileContext = null;
                return fileContext;
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = -1;
                return depth;
            }
        },
        {
            key: "initialise",
            value: function initialise(releaseContexts) {
                var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts), nominalLexer = nominalLexerFromCombinedCustomGrammar(_lexer.default, combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(_parser.default, combinedCustomGrammar), releaseContext = this, released = this.isReleased();
                this.dependencyReleaseContexts = tail(releaseContexts); ///
                this.lexer = nominalLexer; ///
                this.parser = nominalParser; ///
                clear(this.fileContexts);
                released ? fileContextsFromJSON(this.json, this.fileContexts, releaseContext) : fileContextsFromEntries(this.entries, this.fileContexts, releaseContext);
                this.initialised = true;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var typePrefixes = this.getTypePrefixes(), releaseContext = this, typePrefixesVerify = verifyTypePrefixes(typePrefixes, releaseContext);
                if (typePrefixesVerify) {
                    var verifiedFileContexts = [], fileContextsVerify = verifyFileContexts(this.fileContexts, verifiedFileContexts, releaseContext);
                    if (fileContextsVerify) {
                        this.fileContexts = verifiedFileContexts; ///
                        this.verified = true;
                        verifies = true;
                    }
                }
                return verifies;
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
            key: "fromLogNameJSONAndEntries",
            value: function fromLogNameJSONAndEntries(log1, name, json, entries) {
                var lexer = null, parser = null, verifies = false, initialised = false, fileContexts = [], customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), dependencyReleaseContexts = null, releaseContext = new ReleaseContext(log1, name, json, entries, lexer, parser, verifies, initialised, fileContexts, customGrammar, dependencyReleaseContexts);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();
function verifyTypePrefixes(typePrefixes, releaseContext) {
    var typePrefixesVerify = true;
    var typePrefixesLength = typePrefixes.length, compressedTypePrefixes = _to_consumable_array(typePrefixes);
    compress(compressedTypePrefixes, function(typePrefixA, typePrefixB) {
        var typePrefixAName = typePrefixA.getName(), typePrefixBName = typePrefixB.getName();
        if (typePrefixAName !== typePrefixBName) {
            return true;
        }
    });
    var compressTypePrefixesLength = compressedTypePrefixes.length;
    if (typePrefixesLength > compressTypePrefixesLength) {
        filter(compressedTypePrefixes, function(typePrefix) {
            var typePrefixesIncludesTypePrefix = typePrefixes.includes(typePrefix);
            if (!typePrefixesIncludesTypePrefix) {
                return true;
            }
        });
        var firstTypePrefix = first(typePrefixes), typePrefix = firstTypePrefix, typePrefixString = typePrefix.getString();
        releaseContext.info("The '".concat(typePrefixString, "' type prefix is duplicated at least once, possibly among others."));
        typePrefixesVerify = false;
    }
    return typePrefixesVerify;
}
function verifyFileContexts(fileContexts, verifiedFileContexts) {
    var resolved = resolve(fileContexts, verifiedFileContexts, function(fileContext) {
        var fileContextVerifies = fileContext.verify();
        if (fileContextVerifies) {
            return true;
        }
    }), fileContextsVerify = resolved; ///
    return fileContextsVerify;
}
function fileContextsFromJSON(json, fileContexts, releaseContext) {
    var fileContextsJSON = json; ///
    fileContextsJSON.forEach(function(fileContextJSON) {
        var filePath = fileContextJSON.filePath, _$json = fileContextJSON, filePathFurtleFilePath = isFilePathFurtleFilePath(filePath), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
        if (filePathFurtleFilePath) {
            var furtleFileContext = _occamfurtle.FileContext.fromFilePath(filePath, releaseContext), fileContext = furtleFileContext; ///
            fileContexts.push(fileContext);
            fileContext.initialise(_$json);
        }
        if (filePathNominalFilePath) {
            var context = releaseContext, fileContext1 = _file.default.fromFilePath(filePath, context);
            fileContexts.push(fileContext1);
            fileContext1.initialise(_$json);
        }
    });
}
function fileContextsFromEntries(entries, fileContexts, releaseContext) {
    entries.forEachFile(function(file) {
        var filePath = file.getPath(), filePathFurtleFilePath = isFilePathFurtleFilePath(filePath), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
        if (filePathFurtleFilePath) {
            var furtleFileContext = _occamfurtle.FileContext.fromFile(file, releaseContext), fileContext = furtleFileContext; ///
            fileContexts.push(fileContext);
        }
        if (filePathNominalFilePath) {
            var context = releaseContext, fileContext1 = _file.default.fromFile(file, context);
            fileContexts.push(fileContext1);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRmlsZUNvbnRleHQgYXMgRnVydGxlRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlXCI7XG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgTEVWRUxTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2V0TWV0YVR5cGVzIH0gZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IHRhaWwsIHB1c2gsIGZpcnN0LCBjbGVhciwgZmlsdGVyLCByZXNvbHZlLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCwgaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXMsXG4gICAgICBbIFRSQUNFX0xFVkVMLCBERUJVR19MRVZFTCwgSU5GT19MRVZFTCwgV0FSTklOR19MRVZFTCwgRVJST1JfTEVWRUwgXSA9IExFVkVMUztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gaW5pdGlhbGlzZWQ7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gICAgdGhpcy5jdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiBsb2c7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRNZXRhVHlwZXMoKSB7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gZ2V0TWV0YVR5cGVzKCk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGVzO1xuICB9XG5cbiAgaXNWZXJpZmllZCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJpZmllZDtcbiAgfVxuXG4gIGlzSW5pdGlhbGlzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGlzZWQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9ICh0aGlzLmpzb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VkO1xuICB9XG5cbiAgZmluZEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5maW5kRmlsZShmaWxlUGF0aCk7IH1cblxuICBmaW5kRmlsZUNvbnRleHQoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXMuZmlsZUNvbnRleHRzLmZpbmQoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dEZpbGVQYXRoID0gZmlsZUNvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgICAgaWYgKGZpbGVDb250ZXh0RmlsZVBhdGggPT09IGZpbGVQYXRoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyk7XG5cbiAgICAgIHR5cGVQcmVmaXggPSBmaXJzdFR5cGVQcmVmaXg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGFiZWxzID0gZmlsZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGZpbGVDb250ZXh0TGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dExhYmVscyA9IHJlbGVhc2VDb250ZXh0LmdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsZW1tYXMsIGZpbGVDb250ZXh0TGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIGZpbGVDb250ZXh0VGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UHJvY2VkdXJlcyA9IGZpbGVDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIGZpbGVDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRQcm9jZWR1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocHJvY2VkdXJlcywgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhTGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgZmlsZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbmplY3R1cmVzID0gZmlsZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCBmaWxlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVQcmVmaXhlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVQcmVmaXhlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godHlwZVByZWZpeGVzLCBmaWxlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlUHJlZml4ZXMsIHJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4ZXM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSBmaWxlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5maWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH1cblxuICBnZXRSZWxlYXNlTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICB0cmFjZShtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gREVCVUdfTEVWRUxcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gV0FSTklOR19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHtcbiAgICBjb25zdCBsZXZlbCA9IEVSUk9SX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIHdyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpIHtcbiAgICB0aGlzLmxvZy53cml0ZShsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IG51bGw7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXREZXB0aCgpIHtcbiAgICBjb25zdCBkZXB0aCA9IC0xO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMpIHtcbiAgICBjb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyksXG4gICAgICAgICAgbm9taW5hbExleGVyID0gbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsTGV4ZXIsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxQYXJzZXIsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZWQgPSB0aGlzLmlzUmVsZWFzZWQoKTtcblxuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRhaWwocmVsZWFzZUNvbnRleHRzKTsgLy8vXG5cbiAgICB0aGlzLmxleGVyID0gbm9taW5hbExleGVyOyAvLy9cblxuICAgIHRoaXMucGFyc2VyID0gbm9taW5hbFBhcnNlcjsgLy8vXG5cbiAgICBjbGVhcih0aGlzLmZpbGVDb250ZXh0cyk7XG5cbiAgICByZWxlYXNlZCA/XG4gICAgICBmaWxlQ29udGV4dHNGcm9tSlNPTih0aGlzLmpzb24sIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkgOlxuICAgICAgICBmaWxlQ29udGV4dHNGcm9tRW50cmllcyh0aGlzLmVudHJpZXMsIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXNWZXJpZnkgPSB2ZXJpZnlUeXBlUHJlZml4ZXModHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZVByZWZpeGVzVmVyaWZ5KSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRzVmVyaWZ5ID0gdmVyaWZ5RmlsZUNvbnRleHRzKHRoaXMuZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoZmlsZUNvbnRleHRzVmVyaWZ5KSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHRzID0gdmVyaWZpZWRGaWxlQ29udGV4dHM7IC8vL1xuXG4gICAgICAgIHRoaXMudmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IHRoaXMuZmlsZUNvbnRleHRzLm1hcCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0SlNPTiA9IGZpbGVDb250ZXh0LnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsZUNvbnRleHRKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dHNKU09OOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUpTT05BbmRFbnRyaWVzKGxvZywgbmFtZSwganNvbiwgZW50cmllcykge1xuICAgIGNvbnN0IGxleGVyID0gbnVsbCxcbiAgICAgICAgICBwYXJzZXIgPSBudWxsLFxuICAgICAgICAgIHZlcmlmaWVzID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVzLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJpZnlUeXBlUHJlZml4ZXModHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dCkge1xuICBsZXQgdHlwZVByZWZpeGVzVmVyaWZ5ID0gdHJ1ZTtcblxuICBjb25zdCB0eXBlUHJlZml4ZXNMZW5ndGggPSB0eXBlUHJlZml4ZXMubGVuZ3RoLFxuICAgICAgICBjb21wcmVzc2VkVHlwZVByZWZpeGVzID0gWyAgLy8vXG4gICAgICAgICAgLi4udHlwZVByZWZpeGVzLFxuICAgICAgICBdO1xuXG4gIGNvbXByZXNzKGNvbXByZXNzZWRUeXBlUHJlZml4ZXMsICh0eXBlUHJlZml4QSwgdHlwZVByZWZpeEIpID0+IHtcbiAgICBjb25zdCB0eXBlUHJlZml4QU5hbWUgPSB0eXBlUHJlZml4QS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZVByZWZpeEJOYW1lID0gdHlwZVByZWZpeEIuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhBTmFtZSAhPT0gdHlwZVByZWZpeEJOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbXByZXNzVHlwZVByZWZpeGVzTGVuZ3RoID0gY29tcHJlc3NlZFR5cGVQcmVmaXhlcy5sZW5ndGg7XG5cbiAgaWYgKHR5cGVQcmVmaXhlc0xlbmd0aCA+IGNvbXByZXNzVHlwZVByZWZpeGVzTGVuZ3RoKSB7XG4gICAgZmlsdGVyKGNvbXByZXNzZWRUeXBlUHJlZml4ZXMsICh0eXBlUHJlZml4KSA9PiB7XG4gICAgICBjb25zdCB0eXBlUHJlZml4ZXNJbmNsdWRlc1R5cGVQcmVmaXggPSB0eXBlUHJlZml4ZXMuaW5jbHVkZXModHlwZVByZWZpeCk7XG5cbiAgICAgIGlmICghdHlwZVByZWZpeGVzSW5jbHVkZXNUeXBlUHJlZml4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlyc3RUeXBlUHJlZml4ID0gZmlyc3QodHlwZVByZWZpeGVzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gZmlyc3RUeXBlUHJlZml4LCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4U3RyaW5nID0gdHlwZVByZWZpeC5nZXRTdHJpbmcoKTtcblxuICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXggaXMgZHVwbGljYXRlZCBhdCBsZWFzdCBvbmNlLCBwb3NzaWJseSBhbW9uZyBvdGhlcnMuYClcblxuICAgIHR5cGVQcmVmaXhlc1ZlcmlmeSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlc1ZlcmlmeTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RmlsZUNvbnRleHRzKGZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlKGZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMsIChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0VmVyaWZpZXMgPSBmaWxlQ29udGV4dC52ZXJpZnkoKTtcblxuICAgICAgICAgIGlmIChmaWxlQ29udGV4dFZlcmlmaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWxlQ29udGV4dHNWZXJpZnkgPSByZXNvbHZlZDsgIC8vL1xuXG4gIHJldHVybiBmaWxlQ29udGV4dHNWZXJpZnk7XG59XG5cbmZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21KU09OKGpzb24sZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0ganNvbjsgIC8vL1xuXG4gIGZpbGVDb250ZXh0c0pTT04uZm9yRWFjaCgoZmlsZUNvbnRleHRKU09OKSA9PiB7XG4gICAgY29uc3QgeyBmaWxlUGF0aCB9ID0gZmlsZUNvbnRleHRKU09OLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dEpTT04sIC8vL1xuICAgICAgICAgIGZpbGVQYXRoRnVydGxlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoID0gaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAoZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZnVydGxlRmlsZUNvbnRleHQgPSBGdXJ0bGVGaWxlQ29udGV4dC5mcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gZnVydGxlRmlsZUNvbnRleHQ7ICAvLy9cblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuICAgIH1cblxuICAgIGlmIChmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCBjb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKGVudHJpZXMsIGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpIHtcbiAgZW50cmllcy5mb3JFYWNoRmlsZSgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCA9IGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGhOb21pbmFsRmlsZVBhdGggPSBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmIChmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBmdXJ0bGVGaWxlQ29udGV4dCA9IEZ1cnRsZUZpbGVDb250ZXh0LmZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gZnVydGxlRmlsZUNvbnRleHQ7ICAvLy9cblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoZmlsZSwgY29udGV4dCk7XG5cbiAgICAgIGZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0Iiwibm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsIm5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsInRhaWwiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJmaXJzdCIsImNsZWFyIiwiZmlsdGVyIiwicmVzb2x2ZSIsImNvbXByZXNzIiwiaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwiTEVWRUxTIiwiVFJBQ0VfTEVWRUwiLCJERUJVR19MRVZFTCIsIklORk9fTEVWRUwiLCJXQVJOSU5HX0xFVkVMIiwiRVJST1JfTEVWRUwiLCJsb2ciLCJuYW1lIiwianNvbiIsImVudHJpZXMiLCJsZXhlciIsInBhcnNlciIsInZlcmlmaWVkIiwiaW5pdGlhbGlzZWQiLCJmaWxlQ29udGV4dHMiLCJjdXN0b21HcmFtbWFyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRKU09OIiwiZ2V0RW50cmllcyIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0TWV0YVR5cGVzIiwibWV0YVR5cGVzIiwiaXNWZXJpZmllZCIsImlzSW5pdGlhbGlzZWQiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImlzUmVsZWFzZWQiLCJyZWxlYXNlZCIsImZpbmRGaWxlIiwiZmlsZVBhdGgiLCJmaW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZpbmQiLCJmaWxlQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeCIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlUHJlZml4ZXMiLCJnZXRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4ZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFR5cGVQcmVmaXgiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJmb3JFYWNoIiwiaW5jbHVkZVJlbGVhc2UiLCJmaWxlQ29udGV4dExhYmVscyIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsImZpbGVDb250ZXh0UHJvY2VkdXJlcyIsInJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyIsImdldE1ldGFMZW1tYXMiLCJtZXRhTGVtbWFzIiwiZmlsZUNvbnRleHRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImZpbGVDb250ZXh0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiYWRkRmlsZUNvbnRleHQiLCJnZXRSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lIiwiZ2V0RmlsZSIsImdldFZlcnNpb24iLCJnZXRGaWxlUGF0aHMiLCJnZXREZXBlbmRlbmNpZXMiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwidHJhY2UiLCJtZXNzYWdlIiwibGluZUluZGV4IiwibGV2ZWwiLCJ3cml0ZVRvTG9nIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwid3JpdGUiLCJnZXRGaWxlQ29udGV4dCIsImdldERlcHRoIiwiZGVwdGgiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsIm5vbWluYWxMZXhlciIsIk5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJOb21pbmFsUGFyc2VyIiwiZmlsZUNvbnRleHRzRnJvbUpTT04iLCJmaWxlQ29udGV4dHNGcm9tRW50cmllcyIsInZlcmlmeSIsInZlcmlmaWVzIiwidHlwZVByZWZpeGVzVmVyaWZ5IiwidmVyaWZ5VHlwZVByZWZpeGVzIiwidmVyaWZpZWRGaWxlQ29udGV4dHMiLCJmaWxlQ29udGV4dHNWZXJpZnkiLCJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJ0b0pTT04iLCJmaWxlQ29udGV4dHNKU09OIiwibWFwIiwiZmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJjb21wcmVzc2VkVHlwZVByZWZpeGVzIiwidHlwZVByZWZpeEEiLCJ0eXBlUHJlZml4QiIsInR5cGVQcmVmaXhBTmFtZSIsInR5cGVQcmVmaXhCTmFtZSIsImNvbXByZXNzVHlwZVByZWZpeGVzTGVuZ3RoIiwidHlwZVByZWZpeGVzSW5jbHVkZXNUeXBlUHJlZml4IiwiaW5jbHVkZXMiLCJ0eXBlUHJlZml4U3RyaW5nIiwiZ2V0U3RyaW5nIiwicmVzb2x2ZWQiLCJmaWxlQ29udGV4dFZlcmlmaWVzIiwiZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCIsImZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwiZnVydGxlRmlsZUNvbnRleHQiLCJGdXJ0bGVGaWxlQ29udGV4dCIsImZyb21GaWxlUGF0aCIsImNvbnRleHQiLCJGaWxlQ29udGV4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