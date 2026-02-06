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
var _occammodel = require("occam-model");
var _occamcustomgrammars = require("occam-custom-grammars");
var _occamfurtle = require("occam-furtle");
var _lexer = /*#__PURE__*/ _interop_require_default(require("../nominal/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../nominal/parser"));
var _nominal = /*#__PURE__*/ _interop_require_default(require("../context/file/nominal"));
var _metaTypes = require("../metaTypes");
var _customGrammar = require("../utilities/customGrammar");
var _constants = require("../constants");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var asyncResolve = _occamfurtle.asynchronousUtilities.asyncResolve, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter, compress = _necessary.arrayUtilities.compress, nominalLexerFromCombinedCustomGrammar = _occamcustomgrammars.lexersUtilities.nominalLexerFromCombinedCustomGrammar, nominalParserFromCombinedCustomGrammar = _occamcustomgrammars.parsersUtilities.nominalParserFromCombinedCustomGrammar, isFilePathFurtleFilePath = _occammodel.filePathUtilities.isFilePathFurtleFilePath, isFilePathNominalFilePath = _occammodel.filePathUtilities.isFilePathNominalFilePath;
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(log1, name, json, entries, callback, lexer, parser, verified, initialised, fileContexts, customGrammar, dependencyReleaseContexts) {
        _class_call_check(this, ReleaseContext);
        this.log = log1;
        this.name = name;
        this.json = json;
        this.entries = entries;
        this.callback = callback;
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
            key: "getCallback",
            value: function getCallback() {
                return this.callback;
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
            key: "getReleaaseContext",
            value: function getReleaaseContext() {
                var releaseContext = this; ///
                return releaseContext;
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
                var level = _constants.TRACE_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var level = _constants.DEBUG_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var level = _constants.INFO_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var level = _constants.WARNING_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var level = _constants.ERROR_LEVEL;
                this.writeToLog(level, message);
            }
        },
        {
            key: "writeToLog",
            value: function writeToLog(level, message) {
                var filePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, lineIndex = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                this.log.write(level, message, filePath, lineIndex);
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = 0;
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
                released ? fileContextsFromJSON(this.json, this.fileContexts, releaseContext) : fileContextsFromEntries(this.entries, this.fileContexts, releaseContext);
                this.initialised = true;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var verifies, typePrefixes, releaseContext, typePrefixesVerify, verifiedFileContexts, fileContextsVerify;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                verifies = false;
                                typePrefixes = this.getTypePrefixes(), releaseContext = this, typePrefixesVerify = verifyTypePrefixes(typePrefixes, releaseContext);
                                if (!typePrefixesVerify) return [
                                    3,
                                    2
                                ];
                                verifiedFileContexts = [];
                                return [
                                    4,
                                    verifyFileContexts(this.fileContexts, verifiedFileContexts)
                                ];
                            case 1:
                                fileContextsVerify = _state.sent();
                                if (fileContextsVerify) {
                                    this.fileContexts = verifiedFileContexts; ///
                                    this.verified = true;
                                    verifies = true;
                                }
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    verifies
                                ];
                        }
                    });
                }).call(this);
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
        },
        {
            key: "break",
            value: function _break(filePath, lineIndex) {
                return _async_to_generator(function() {
                    var level, message, context;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                level = _constants.TRACE_LEVEL, message = _constants.BREAK_MESSAGE;
                                this.writeToLog(level, message, filePath, lineIndex);
                                context = this; ///
                                return [
                                    4,
                                    this.callback(context, filePath, lineIndex)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ], [
        {
            key: "fromLogNameJSONEntriesAndCallback",
            value: function fromLogNameJSONEntriesAndCallback(log1, name, json, entries, callback) {
                var lexer = null, parser = null, verifies = false, initialised = false, fileContexts = [], customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), dependencyReleaseContexts = null, releaseContext = new ReleaseContext(log1, name, json, entries, callback, lexer, parser, verifies, initialised, fileContexts, customGrammar, dependencyReleaseContexts);
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
    return _async_to_generator(function() {
        var resolved, fileContextsVerify;
        return _ts_generator(this, function(_state) {
            resolved = asyncResolve(fileContexts, verifiedFileContexts, function(fileContext) {
                return _async_to_generator(function() {
                    var fileContextVerifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    fileContext.verify()
                                ];
                            case 1:
                                fileContextVerifies = _state.sent();
                                if (fileContextVerifies) {
                                    return [
                                        2,
                                        true
                                    ];
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }), fileContextsVerify = resolved; ///
            return [
                2,
                fileContextsVerify
            ];
        });
    })();
}
function fileContextsFromJSON(json, fileContexts, releaseContext) {
    var fileContextsJSON = json; ///
    fileContextsJSON.forEach(function(fileContextJSON) {
        var filePath = fileContextJSON.filePath, _$json = fileContextJSON, filePathFurtleFilePath = isFilePathFurtleFilePath(filePath), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
        if (filePathFurtleFilePath) {
            var furtleFileContext = _occamfurtle.FurtleFileContext.fromFilePath(filePath, releaseContext), fileContext = furtleFileContext; ///
            fileContexts.push(fileContext);
            fileContext.initialise(_$json);
        }
        if (filePathNominalFilePath) {
            var context = releaseContext, fileContext1 = _nominal.default.fromFilePath(filePath, context);
            fileContexts.push(fileContext1);
            fileContext1.initialise(_$json);
        }
    });
}
function fileContextsFromEntries(entries, fileContexts, releaseContext) {
    var context = releaseContext; ///
    entries.forEachFile(function(file) {
        var filePath = file.getPath(), filePathFurtleFilePath = isFilePathFurtleFilePath(filePath), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
        if (filePathFurtleFilePath) {
            var furtleFileContext = _occamfurtle.FurtleFileContext.fromFile(file, context), fileContext = furtleFileContext; ///
            fileContexts.push(fileContext);
        }
        if (filePathNominalFilePath) {
            var nominalFileContext = _nominal.default.fromFile(file, context), fileContext1 = nominalFileContext; ///
            fileContexts.push(fileContext1);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBmaWxlUGF0aFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1tb2RlbFwiO1xuaW1wb3J0IHsgbGV4ZXJzVXRpbGl0aWVzLCBwYXJzZXJzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWN1c3RvbS1ncmFtbWFyc1wiO1xuaW1wb3J0IHsgRnVydGxlRmlsZUNvbnRleHQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IE5vbWluYWxMZXhlciBmcm9tIFwiLi4vbm9taW5hbC9sZXhlclwiO1xuaW1wb3J0IE5vbWluYWxQYXJzZXIgZnJvbSBcIi4uL25vbWluYWwvcGFyc2VyXCI7XG5pbXBvcnQgTm9taW5hbEZpbGVDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2ZpbGUvbm9taW5hbFwiO1xuXG5pbXBvcnQgeyBnZXRNZXRhVHlwZXMgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgeyBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5pbXBvcnQgeyBUUkFDRV9MRVZFTCwgREVCVUdfTEVWRUwsIElORk9fTEVWRUwsIFdBUk5JTkdfTEVWRUwsIEVSUk9SX0xFVkVMLCBCUkVBS19NRVNTQUdFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IGFzeW5jUmVzb2x2ZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzLFxuICAgICAgeyB0YWlsLCBwdXNoLCBmaXJzdCwgZmlsdGVyLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCwgaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaywgbGV4ZXIsIHBhcnNlciwgdmVyaWZpZWQsIGluaXRpYWxpc2VkLCBmaWxlQ29udGV4dHMsIGN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuanNvbiA9IGpzb247XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gaW5pdGlhbGlzZWQ7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gICAgdGhpcy5jdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiBsb2c7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsYmFjaztcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGdldE1ldGFUeXBlcygpIHtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSBnZXRNZXRhVHlwZXMoKTtcblxuICAgIHJldHVybiBtZXRhVHlwZXM7XG4gIH1cblxuICBpc1ZlcmlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLnZlcmlmaWVkO1xuICB9XG5cbiAgaXNJbml0aWFsaXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXNlZDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRSZWxlYWFzZUNvbnRleHQoKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBpc1JlbGVhc2VkKCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gKHRoaXMuanNvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVsZWFzZWQ7XG4gIH1cblxuICBmaW5kRmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmZpbmRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGZpbmRGaWxlQ29udGV4dChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5maWxlQ29udGV4dHMuZmluZCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0RmlsZVBhdGggPSBmaWxlQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgICBpZiAoZmlsZUNvbnRleHRGaWxlUGF0aCA9PT0gZmlsZVBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIGxldCB0eXBlUHJlZml4ID0gbnVsbDtcblxuICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNMZW5ndGggPSB0eXBlUHJlZml4ZXMubGVuZ3RoO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RUeXBlUHJlZml4ID0gZmlyc3QodHlwZVByZWZpeGVzKTtcblxuICAgICAgdHlwZVByZWZpeCA9IGZpcnN0VHlwZVByZWZpeDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgZmlsZUNvbnRleHRMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUaGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgZmlsZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRQcm9jZWR1cmVzID0gZmlsZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocHJvY2VkdXJlcywgZmlsZUNvbnRleHRQcm9jZWR1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChwcm9jZWR1cmVzLCByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGFMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhTGVtbWFzLCBmaWxlQ29udGV4dE1ldGFMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uamVjdHVyZXMgPSBmaWxlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uamVjdHVyZXMsIGZpbGVDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb21iaW5hdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgZmlsZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZVByZWZpeGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlUHJlZml4ZXMsIGZpbGVDb250ZXh0VHlwZVByZWZpeGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVQcmVmaXhlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIGdldFJlbGVhc2VOYW1lKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHJlbGVhc2VOYW1lO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZ2V0VmVyc2lvbigpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRWZXJzaW9uKCk7IH1cblxuICBnZXRGaWxlUGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZVBhdGhzKCk7IH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikgeyByZXR1cm4gdGhpcy5lbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFRSQUNFX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IERFQlVHX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBsZXZlbCA9IFdBUk5JTkdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSkge1xuICAgIGNvbnN0IGxldmVsID0gRVJST1JfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9XG5cbiAgd3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7XG4gICAgdGhpcy5sb2cud3JpdGUobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgY29uc3QgZGVwdGggPSAwO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMpIHtcbiAgICBjb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyksXG4gICAgICAgICAgbm9taW5hbExleGVyID0gbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsTGV4ZXIsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxQYXJzZXIsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZWQgPSB0aGlzLmlzUmVsZWFzZWQoKTtcblxuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRhaWwocmVsZWFzZUNvbnRleHRzKTsgLy8vXG5cbiAgICB0aGlzLmxleGVyID0gbm9taW5hbExleGVyOyAvLy9cblxuICAgIHRoaXMucGFyc2VyID0gbm9taW5hbFBhcnNlcjsgLy8vXG5cbiAgICByZWxlYXNlZCA/XG4gICAgICBmaWxlQ29udGV4dHNGcm9tSlNPTih0aGlzLmpzb24sIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkgOlxuICAgICAgICBmaWxlQ29udGV4dHNGcm9tRW50cmllcyh0aGlzLmVudHJpZXMsIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXNWZXJpZnkgPSB2ZXJpZnlUeXBlUHJlZml4ZXModHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZVByZWZpeGVzVmVyaWZ5KSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRzVmVyaWZ5ID0gYXdhaXQgdmVyaWZ5RmlsZUNvbnRleHRzKHRoaXMuZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cyk7XG5cbiAgICAgIGlmIChmaWxlQ29udGV4dHNWZXJpZnkpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dHMgPSB2ZXJpZmllZEZpbGVDb250ZXh0czsgLy8vXG5cbiAgICAgICAgdGhpcy52ZXJpZmllZCA9IHRydWU7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0gdGhpcy5maWxlQ29udGV4dHMubWFwKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZUNvbnRleHRKU09OID0gZmlsZUNvbnRleHQudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWxlQ29udGV4dEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVDb250ZXh0c0pTT047ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoZmlsZVBhdGgsIGxpbmVJbmRleCkge1xuICAgIGNvbnN0IGxldmVsID0gVFJBQ0VfTEVWRUwsXG4gICAgICAgICAgbWVzc2FnZSA9IEJSRUFLX01FU1NBR0U7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgYXdhaXQgdGhpcy5jYWxsYmFjayhjb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUpTT05FbnRyaWVzQW5kQ2FsbGJhY2sobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGxleGVyID0gbnVsbCxcbiAgICAgICAgICBwYXJzZXIgPSBudWxsLFxuICAgICAgICAgIHZlcmlmaWVzID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGNhbGxiYWNrLCBsZXhlciwgcGFyc2VyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY3VzdG9tR3JhbW1hciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IHR5cGVQcmVmaXhlc1ZlcmlmeSA9IHRydWU7XG5cbiAgY29uc3QgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aCxcbiAgICAgICAgY29tcHJlc3NlZFR5cGVQcmVmaXhlcyA9IFsgIC8vL1xuICAgICAgICAgIC4uLnR5cGVQcmVmaXhlcyxcbiAgICAgICAgXTtcblxuICBjb21wcmVzcyhjb21wcmVzc2VkVHlwZVByZWZpeGVzLCAodHlwZVByZWZpeEEsIHR5cGVQcmVmaXhCKSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEFOYW1lID0gdHlwZVByZWZpeEEuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhCTmFtZSA9IHR5cGVQcmVmaXhCLmdldE5hbWUoKTtcblxuICAgIGlmICh0eXBlUHJlZml4QU5hbWUgIT09IHR5cGVQcmVmaXhCTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCA9IGNvbXByZXNzZWRUeXBlUHJlZml4ZXMubGVuZ3RoO1xuXG4gIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPiBjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCkge1xuICAgIGZpbHRlcihjb21wcmVzc2VkVHlwZVByZWZpeGVzLCAodHlwZVByZWZpeCkgPT4ge1xuICAgICAgY29uc3QgdHlwZVByZWZpeGVzSW5jbHVkZXNUeXBlUHJlZml4ID0gdHlwZVByZWZpeGVzLmluY2x1ZGVzKHR5cGVQcmVmaXgpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVmaXhlc0luY2x1ZGVzVHlwZVByZWZpeCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGZpcnN0VHlwZVByZWZpeCwgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHR5cGVQcmVmaXguZ2V0U3RyaW5nKCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4IGlzIGR1cGxpY2F0ZWQgYXQgbGVhc3Qgb25jZSwgcG9zc2libHkgYW1vbmcgb3RoZXJzLmApXG5cbiAgICB0eXBlUHJlZml4ZXNWZXJpZnkgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlUHJlZml4ZXNWZXJpZnk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeUZpbGVDb250ZXh0cyhmaWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzKSB7XG4gIGNvbnN0IHJlc29sdmVkID0gYXN5bmNSZXNvbHZlKGZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMsIGFzeW5jIChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0VmVyaWZpZXMgPSBhd2FpdCBmaWxlQ29udGV4dC52ZXJpZnkoKTtcblxuICAgICAgICAgIGlmIChmaWxlQ29udGV4dFZlcmlmaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWxlQ29udGV4dHNWZXJpZnkgPSByZXNvbHZlZDsgIC8vL1xuXG4gIHJldHVybiBmaWxlQ29udGV4dHNWZXJpZnk7XG59XG5cbmZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21KU09OKGpzb24sZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0ganNvbjsgIC8vL1xuXG4gIGZpbGVDb250ZXh0c0pTT04uZm9yRWFjaCgoZmlsZUNvbnRleHRKU09OKSA9PiB7XG4gICAgY29uc3QgeyBmaWxlUGF0aCB9ID0gZmlsZUNvbnRleHRKU09OLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dEpTT04sIC8vL1xuICAgICAgICAgIGZpbGVQYXRoRnVydGxlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoID0gaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAoZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZnVydGxlRmlsZUNvbnRleHQgPSBGdXJ0bGVGaWxlQ29udGV4dC5mcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gZnVydGxlRmlsZUNvbnRleHQ7ICAvLy9cblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuICAgIH1cblxuICAgIGlmIChmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gTm9taW5hbEZpbGVDb250ZXh0LmZyb21GaWxlUGF0aChmaWxlUGF0aCwgY29udGV4dCk7XG5cbiAgICAgIGZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tRW50cmllcyhlbnRyaWVzLCBmaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGNvbnRleHQgPSByZWxlYXNlQ29udGV4dDsgLy8vXG5cbiAgZW50cmllcy5mb3JFYWNoRmlsZSgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCA9IGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGhOb21pbmFsRmlsZVBhdGggPSBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmIChmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBmdXJ0bGVGaWxlQ29udGV4dCA9IEZ1cnRsZUZpbGVDb250ZXh0LmZyb21GaWxlKGZpbGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZmlsZUNvbnRleHQgPSBmdXJ0bGVGaWxlQ29udGV4dDsgIC8vL1xuXG4gICAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBub21pbmFsRmlsZUNvbnRleHQgPSBOb21pbmFsRmlsZUNvbnRleHQuZnJvbUZpbGUoZmlsZSwgY29udGV4dCksXG4gICAgICAgICAgICBmaWxlQ29udGV4dCA9IG5vbWluYWxGaWxlQ29udGV4dDsgLy8vXG5cbiAgICAgIGZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0IiwiYXN5bmNSZXNvbHZlIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwidGFpbCIsImFycmF5VXRpbGl0aWVzIiwicHVzaCIsImZpcnN0IiwiZmlsdGVyIiwiY29tcHJlc3MiLCJub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwibG9nIiwibmFtZSIsImpzb24iLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJsZXhlciIsInBhcnNlciIsInZlcmlmaWVkIiwiaW5pdGlhbGlzZWQiLCJmaWxlQ29udGV4dHMiLCJjdXN0b21HcmFtbWFyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRKU09OIiwiZ2V0RW50cmllcyIsImdldENhbGxiYWNrIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRNZXRhVHlwZXMiLCJtZXRhVHlwZXMiLCJpc1ZlcmlmaWVkIiwiaXNJbml0aWFsaXNlZCIsImdldEZpbGVDb250ZXh0cyIsImdldEN1c3RvbUdyYW1tYXIiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZ2V0UmVsZWFhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJpc1JlbGVhc2VkIiwicmVsZWFzZWQiLCJmaW5kRmlsZSIsImZpbGVQYXRoIiwiZmluZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJmaW5kIiwiZmlsZUNvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiZ2V0VHlwZVByZWZpeCIsInR5cGVQcmVmaXgiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZWZpeGVzIiwiZ2V0VHlwZVByZWZpeGVzIiwidHlwZVByZWZpeGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUeXBlUHJlZml4IiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwiZm9yRWFjaCIsImluY2x1ZGVSZWxlYXNlIiwiZmlsZUNvbnRleHRMYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwidHlwZXMiLCJmaWxlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImZpbGVDb250ZXh0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJmaWxlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJmaWxlQ29udGV4dFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZmlsZUNvbnRleHRQcm9jZWR1cmVzIiwicmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJmaWxlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZmlsZUNvbnRleHRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJmaWxlQ29udGV4dFR5cGVQcmVmaXhlcyIsInJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImZpbGVDb250ZXh0TWV0YXRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJhZGRGaWxlQ29udGV4dCIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJnZXRGaWxlIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsZXZlbCIsIlRSQUNFX0xFVkVMIiwid3JpdGVUb0xvZyIsImRlYnVnIiwiREVCVUdfTEVWRUwiLCJpbmZvIiwiSU5GT19MRVZFTCIsIndhcm5pbmciLCJXQVJOSU5HX0xFVkVMIiwiZXJyb3IiLCJFUlJPUl9MRVZFTCIsImxpbmVJbmRleCIsIndyaXRlIiwiZ2V0RGVwdGgiLCJkZXB0aCIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dHMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIiwibm9taW5hbExleGVyIiwiTm9taW5hbExleGVyIiwibm9taW5hbFBhcnNlciIsIk5vbWluYWxQYXJzZXIiLCJmaWxlQ29udGV4dHNGcm9tSlNPTiIsImZpbGVDb250ZXh0c0Zyb21FbnRyaWVzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0eXBlUHJlZml4ZXNWZXJpZnkiLCJ2ZXJpZmllZEZpbGVDb250ZXh0cyIsImZpbGVDb250ZXh0c1ZlcmlmeSIsInZlcmlmeVR5cGVQcmVmaXhlcyIsInZlcmlmeUZpbGVDb250ZXh0cyIsInRvSlNPTiIsImZpbGVDb250ZXh0c0pTT04iLCJtYXAiLCJmaWxlQ29udGV4dEpTT04iLCJicmVhayIsImNvbnRleHQiLCJCUkVBS19NRVNTQUdFIiwiZnJvbUxvZ05hbWVKU09ORW50cmllc0FuZENhbGxiYWNrIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsImNvbXByZXNzZWRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4QSIsInR5cGVQcmVmaXhCIiwidHlwZVByZWZpeEFOYW1lIiwidHlwZVByZWZpeEJOYW1lIiwiY29tcHJlc3NUeXBlUHJlZml4ZXNMZW5ndGgiLCJ0eXBlUHJlZml4ZXNJbmNsdWRlc1R5cGVQcmVmaXgiLCJpbmNsdWRlcyIsInR5cGVQcmVmaXhTdHJpbmciLCJnZXRTdHJpbmciLCJyZXNvbHZlZCIsImZpbGVDb250ZXh0VmVyaWZpZXMiLCJmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoIiwiZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJmdXJ0bGVGaWxlQ29udGV4dCIsIkZ1cnRsZUZpbGVDb250ZXh0IiwiZnJvbUZpbGVQYXRoIiwiTm9taW5hbEZpbGVDb250ZXh0IiwiZm9yRWFjaEZpbGUiLCJmaWxlIiwiZ2V0UGF0aCIsImZyb21GaWxlIiwibm9taW5hbEZpbGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXNCcUJBOzs7eUJBcEJVOzBCQUVHO21DQUNnQjsyQkFDTzs0REFFaEM7NkRBQ0M7OERBQ0s7eUJBRUY7NkJBQzZEO3lCQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRyxJQUFNLEFBQUVDLGVBQWlCQyxrQ0FBcUIsQ0FBdENELGNBQ0FFLE9BQXdDQyx5QkFBYyxDQUF0REQsTUFBTUUsT0FBa0NELHlCQUFjLENBQWhEQyxNQUFNQyxRQUE0QkYseUJBQWMsQ0FBMUNFLE9BQU9DLFNBQXFCSCx5QkFBYyxDQUFuQ0csUUFBUUMsV0FBYUoseUJBQWMsQ0FBM0JJLFVBQzdCLEFBQUVDLHdDQUEwQ0Msb0NBQWUsQ0FBekRELHVDQUNGLEFBQUVFLHlDQUEyQ0MscUNBQWdCLENBQTNERCx3Q0FDQUUsMkJBQXdEQyw2QkFBaUIsQ0FBekVELDBCQUEwQkUsNEJBQThCRCw2QkFBaUIsQ0FBL0NDO0FBRW5CLElBQUEsQUFBTWYsK0JBQU47YUFBTUEsZUFDUGdCLElBQUcsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyx5QkFBeUI7Z0NBRHpIM0I7UUFFakIsSUFBSSxDQUFDZ0IsR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0E7O2tCQWJoQjNCOztZQWdCbkI0QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBT1o7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1osSUFBSTtZQUNsQjs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1osSUFBSTtZQUNsQjs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1osT0FBTztZQUNyQjs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1osUUFBUTtZQUN0Qjs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1osS0FBSztZQUNuQjs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1osTUFBTTtZQUNwQjs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZRCxJQUFBQSx1QkFBWTtnQkFFOUIsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2QsUUFBUTtZQUN0Qjs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2QsV0FBVztZQUN6Qjs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2QsWUFBWTtZQUMxQjs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2QsYUFBYTtZQUMzQjs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2QseUJBQXlCO1lBQ3ZDOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGlCQUFpQixJQUFJLEVBQUcsR0FBRztnQkFFakMsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFZLElBQUksQ0FBQzNCLElBQUksS0FBSztnQkFFaEMsT0FBTzJCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQzVCLE9BQU8sQ0FBQzJCLFFBQVEsQ0FBQ0M7WUFBVzs7O1lBRTdEQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCRCxRQUFRO2dCQUN0QixJQUFNRSxjQUFjLElBQUksQ0FBQ3hCLFlBQVksQ0FBQ3lCLElBQUksQ0FBQyxTQUFDRDtvQkFDMUMsSUFBTUUsc0JBQXNCRixZQUFZRyxXQUFXO29CQUVuRCxJQUFJRCx3QkFBd0JKLFVBQVU7d0JBQ3BDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0U7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxhQUFhO2dCQUVqQixJQUFNQyxzQkFBc0IsT0FDdEJDLGVBQWUsSUFBSSxDQUFDQyxlQUFlLENBQUNGLHNCQUNwQ0cscUJBQXFCRixhQUFhRyxNQUFNO2dCQUU5QyxJQUFJRCx1QkFBdUIsR0FBRztvQkFDNUIsSUFBTUUsa0JBQWtCdEQsTUFBTWtEO29CQUU5QkYsYUFBYU0saUJBQWlCLEdBQUc7Z0JBQ25DO2dCQUVBLE9BQU9OO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVVOLHNCQUFBQSxpRUFBc0I7Z0JBQzlCLElBQU1PLFNBQVMsRUFBRTtnQkFFakIsSUFBSSxDQUFDckMsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLFNBQUNkO29CQUN6QixJQUFNZSxpQkFBaUIsT0FDakJDLG9CQUFvQmhCLFlBQVlZLFNBQVMsQ0FBQ0c7b0JBRWhEM0QsS0FBS3lELFFBQVFHO2dCQUNmO2dCQUVBLElBQUlWLHFCQUFxQjtvQkFDdkIsSUFBTTVCLDRCQUE0QixJQUFJLENBQUNjLDRCQUE0QjtvQkFFbkVkLDBCQUEwQm9DLE9BQU8sQ0FBQyxTQUFDcEI7d0JBQ2pDLElBQU1ZLHNCQUFzQixPQUN0QlcsdUJBQXVCdkIsZUFBZWtCLFNBQVMsQ0FBQ047d0JBRXREbEQsS0FBS3lELFFBQVFJO29CQUNmO2dCQUNGO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVNaLHNCQUFBQSxpRUFBc0I7Z0JBQzdCLElBQU1hLFFBQVEsRUFBRTtnQkFFaEIsSUFBSSxDQUFDM0MsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLFNBQUNkO29CQUN6QixJQUFNZSxpQkFBaUIsT0FDakJLLG1CQUFtQnBCLFlBQVlrQixRQUFRLENBQUNIO29CQUU5QzNELEtBQUsrRCxPQUFPQztnQkFDZDtnQkFFQSxJQUFJZCxxQkFBcUI7b0JBQ3ZCLElBQU01Qiw0QkFBNEIsSUFBSSxDQUFDYyw0QkFBNEI7b0JBRW5FZCwwQkFBMEJvQyxPQUFPLENBQUMsU0FBQ3BCO3dCQUNqQyxJQUFNWSxzQkFBc0IsT0FDdEJlLHNCQUFzQjNCLGVBQWV3QixRQUFRLENBQUNaO3dCQUVwRGxELEtBQUsrRCxPQUFPRTtvQkFDZDtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFTaEIsc0JBQUFBLGlFQUFzQjtnQkFDN0IsSUFBTWlCLFFBQVEsRUFBRTtnQkFFaEIsSUFBSSxDQUFDL0MsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLFNBQUNkO29CQUN6QixJQUFNZSxpQkFBaUIsT0FDakJTLG1CQUFtQnhCLFlBQVlzQixRQUFRLENBQUNQO29CQUU5QzNELEtBQUttRSxPQUFPQztnQkFDZDtnQkFFQSxJQUFJbEIscUJBQXFCO29CQUN2QixJQUFNNUIsNEJBQTRCLElBQUksQ0FBQ2MsNEJBQTRCO29CQUVuRWQsMEJBQTBCb0MsT0FBTyxDQUFDLFNBQUNwQjt3QkFDakMsSUFBTVksc0JBQXNCLE9BQ3RCbUIsc0JBQXNCL0IsZUFBZTRCLFFBQVEsQ0FBQ2hCO3dCQUVwRGxELEtBQUttRSxPQUFPRTtvQkFDZDtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFVcEIsc0JBQUFBLGlFQUFzQjtnQkFDOUIsSUFBTXFCLFNBQVMsRUFBRTtnQkFFakIsSUFBSSxDQUFDbkQsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLFNBQUNkO29CQUN6QixJQUFNZSxpQkFBaUIsT0FDakJhLG9CQUFvQjVCLFlBQVkwQixTQUFTLENBQUNYO29CQUVoRDNELEtBQUt1RSxRQUFRQztnQkFDZjtnQkFFQSxJQUFJdEIscUJBQXFCO29CQUN2QixJQUFNNUIsNEJBQTRCLElBQUksQ0FBQ2MsNEJBQTRCO29CQUVuRWQsMEJBQTBCb0MsT0FBTyxDQUFDLFNBQUNwQjt3QkFDakMsSUFBTVksc0JBQXNCLE9BQ3RCdUIsdUJBQXVCbkMsZUFBZWdDLFNBQVMsQ0FBQ3BCO3dCQUV0RGxELEtBQUt1RSxRQUFRRTtvQkFDZjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFVeEIsc0JBQUFBLGlFQUFzQjtnQkFDOUIsSUFBTXlCLFNBQVMsRUFBRTtnQkFFakIsSUFBSSxDQUFDdkQsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLFNBQUNkO29CQUN6QixJQUFNZSxpQkFBaUIsT0FDakJpQixvQkFBb0JoQyxZQUFZOEIsU0FBUyxDQUFDZjtvQkFFaEQzRCxLQUFLMkUsUUFBUUM7Z0JBQ2Y7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBWTNCLHNCQUFBQSxpRUFBc0I7Z0JBQ2hDLElBQU00QixXQUFXLEVBQUU7Z0JBRW5CLElBQUksQ0FBQzFELFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxTQUFDZDtvQkFDekIsSUFBTWUsaUJBQWlCLE9BQ2pCb0Isc0JBQXNCbkMsWUFBWWlDLFdBQVcsQ0FBQ2xCO29CQUVwRDNELEtBQUs4RSxVQUFVQztnQkFDakI7Z0JBRUEsSUFBSTdCLHFCQUFxQjtvQkFDdkIsSUFBTTVCLDRCQUE0QixJQUFJLENBQUNjLDRCQUE0QjtvQkFFbkVkLDBCQUEwQm9DLE9BQU8sQ0FBQyxTQUFDcEI7d0JBQ2pDLElBQU1ZLHNCQUFzQixPQUN0QjhCLHlCQUF5QjFDLGVBQWV1QyxXQUFXLENBQUMzQjt3QkFFMURsRCxLQUFLOEUsVUFBVUU7b0JBQ2pCO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWMvQixzQkFBQUEsaUVBQXNCO2dCQUNsQyxJQUFNZ0MsYUFBYSxFQUFFO2dCQUVyQixJQUFJLENBQUM5RCxZQUFZLENBQUNzQyxPQUFPLENBQUMsU0FBQ2Q7b0JBQ3pCLElBQU1lLGlCQUFpQixPQUNqQndCLHdCQUF3QnZDLFlBQVlxQyxhQUFhLENBQUN0QjtvQkFFeEQzRCxLQUFLa0YsWUFBWUM7Z0JBQ25CO2dCQUVBLElBQUlqQyxxQkFBcUI7b0JBQ3ZCLElBQU01Qiw0QkFBNEIsSUFBSSxDQUFDYyw0QkFBNEI7b0JBRW5FZCwwQkFBMEJvQyxPQUFPLENBQUMsU0FBQ3BCO3dCQUNqQyxJQUFNWSxzQkFBc0IsT0FDMUJrQywyQkFBMkI5QyxlQUFlMkMsYUFBYSxDQUFDL0I7d0JBRTFEbEQsS0FBS2tGLFlBQVlFO29CQUNuQjtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFjbkMsc0JBQUFBLGlFQUFzQjtnQkFDbEMsSUFBTW9DLGFBQWEsRUFBRTtnQkFFckIsSUFBSSxDQUFDbEUsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLFNBQUNkO29CQUN6QixJQUFNZSxpQkFBaUIsT0FDakI0Qix3QkFBd0IzQyxZQUFZeUMsYUFBYSxDQUFDMUI7b0JBRXhEM0QsS0FBS3NGLFlBQVlDO2dCQUNuQjtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFldEMsc0JBQUFBLGlFQUFzQjtnQkFDbkMsSUFBTXVDLGNBQWMsRUFBRTtnQkFFdEIsSUFBSSxDQUFDckUsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLFNBQUNkO29CQUN6QixJQUFNZSxpQkFBaUIsT0FDakIrQix5QkFBeUI5QyxZQUFZNEMsY0FBYyxDQUFDN0I7b0JBRTFEM0QsS0FBS3lGLGFBQWFDO2dCQUNwQjtnQkFFQSxJQUFJeEMscUJBQXFCO29CQUN2QixJQUFNNUIsNEJBQTRCLElBQUksQ0FBQ2MsNEJBQTRCO29CQUVuRWQsMEJBQTBCb0MsT0FBTyxDQUFDLFNBQUNwQjt3QkFDakMsSUFBTVksc0JBQXNCLE9BQ3RCeUMsNEJBQTRCckQsZUFBZWtELGNBQWMsQ0FBQ3RDO3dCQUVoRWxELEtBQUt5RixhQUFhRTtvQkFDcEI7Z0JBQ0Y7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBZTFDLHNCQUFBQSxpRUFBc0I7Z0JBQ25DLElBQU0yQyxjQUFjLEVBQUU7Z0JBRXRCLElBQUksQ0FBQ3pFLFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxTQUFDZDtvQkFDekIsSUFBTWUsaUJBQWlCLE9BQ2pCbUMseUJBQXlCbEQsWUFBWWdELGNBQWMsQ0FBQ2pDO29CQUUxRDNELEtBQUs2RixhQUFhQztnQkFDcEI7Z0JBRUEsSUFBSTVDLHFCQUFxQjtvQkFDdkIsSUFBTTVCLDRCQUE0QixJQUFJLENBQUNjLDRCQUE0QjtvQkFFbkVkLDBCQUEwQm9DLE9BQU8sQ0FBQyxTQUFDcEI7d0JBQ2pDLElBQU1ZLHNCQUFzQixPQUN0QjZDLDRCQUE0QnpELGVBQWVzRCxjQUFjLENBQUMxQzt3QkFFaEVsRCxLQUFLNkYsYUFBYUU7b0JBQ3BCO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBekMsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFnQkYsc0JBQUFBLGlFQUFzQjtnQkFDcEMsSUFBTUMsZUFBZSxFQUFFO2dCQUV2QixJQUFJLENBQUMvQixZQUFZLENBQUNzQyxPQUFPLENBQUMsU0FBQ2Q7b0JBQ3pCLElBQU1lLGlCQUFpQixPQUNqQnFDLDBCQUEwQnBELFlBQVlRLGVBQWUsQ0FBQ087b0JBRTVEM0QsS0FBS21ELGNBQWM2QztnQkFDckI7Z0JBRUEsSUFBSTlDLHFCQUFxQjtvQkFDdkIsSUFBTTVCLDRCQUE0QixJQUFJLENBQUNjLDRCQUE0QjtvQkFFbkVkLDBCQUEwQm9DLE9BQU8sQ0FBQyxTQUFDcEI7d0JBQ2pDLElBQU1ZLHNCQUFzQixPQUN0QitDLDZCQUE2QjNELGVBQWVjLGVBQWUsQ0FBQ0Y7d0JBRWxFbEQsS0FBS21ELGNBQWM4QztvQkFDckI7Z0JBQ0Y7Z0JBRUEsT0FBTzlDO1lBQ1Q7OztZQUVBK0MsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFnQmhELHNCQUFBQSxpRUFBc0I7Z0JBQ3BDLElBQU1pRCxlQUFlLEVBQUU7Z0JBRXZCLElBQUksQ0FBQy9FLFlBQVksQ0FBQ3NDLE9BQU8sQ0FBQyxTQUFDZDtvQkFDekIsSUFBTWUsaUJBQWlCLE9BQ2pCeUMsMEJBQTBCeEQsWUFBWXNELGVBQWUsQ0FBQ3ZDO29CQUU1RDNELEtBQUttRyxjQUFjQztnQkFDckI7Z0JBRUEsSUFBSWxELHFCQUFxQjtvQkFDdkIsSUFBTTVCLDRCQUE0QixJQUFJLENBQUNjLDRCQUE0QjtvQkFFbkVkLDBCQUEwQm9DLE9BQU8sQ0FBQyxTQUFDcEI7d0JBQ2pDLElBQU1ZLHNCQUFzQixPQUN0Qm1ELDZCQUE2Qi9ELGVBQWU0RCxlQUFlLENBQUNoRDt3QkFFbEVsRCxLQUFLbUcsY0FBY0U7b0JBQ3JCO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWdCcEQsc0JBQUFBLGlFQUFzQjtnQkFDcEMsSUFBTXFELGVBQWUsRUFBRTtnQkFFdkIsSUFBSSxDQUFDbkYsWUFBWSxDQUFDc0MsT0FBTyxDQUFDLFNBQUNkO29CQUN6QixJQUFNZSxpQkFBaUIsT0FDakI2QywwQkFBMEI1RCxZQUFZMEQsZUFBZSxDQUFDM0M7b0JBRTVEM0QsS0FBS3VHLGNBQWNDO2dCQUNyQjtnQkFFQSxJQUFJdEQscUJBQXFCO29CQUN2QixJQUFNNUIsNEJBQTRCLElBQUksQ0FBQ2MsNEJBQTRCO29CQUVuRWQsMEJBQTBCb0MsT0FBTyxDQUFDLFNBQUNwQjt3QkFDakMsSUFBTVksc0JBQXNCLE9BQ3RCdUQsNkJBQTZCbkUsZUFBZWdFLGVBQWUsQ0FBQ3BEO3dCQUVsRWxELEtBQUt1RyxjQUFjRTtvQkFDckI7Z0JBQ0Y7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlOUQsV0FBVztnQkFDeEIsSUFBSSxDQUFDeEIsWUFBWSxDQUFDcEIsSUFBSSxDQUFDNEM7WUFDekI7OztZQUVBK0QsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0vRixPQUFPLElBQUksQ0FBQ1ksT0FBTyxJQUNuQm9GLGNBQWNoRyxNQUFNLEdBQUc7Z0JBRTdCLE9BQU9nRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFuRSxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDNUIsT0FBTyxDQUFDK0YsT0FBTyxDQUFDbkU7WUFBVzs7O1lBRTNEb0UsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFlLE9BQU8sSUFBSSxDQUFDaEcsT0FBTyxDQUFDZ0csVUFBVTtZQUFJOzs7WUFFakRDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBaUIsT0FBTyxJQUFJLENBQUNqRyxPQUFPLENBQUNpRyxZQUFZO1lBQUk7OztZQUVyREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFvQixPQUFPLElBQUksQ0FBQ2xHLE9BQU8sQ0FBQ2tHLGVBQWU7WUFBSTs7O1lBRTNEQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQUksT0FBTyxJQUFJLENBQUNwRyxPQUFPLENBQUNtRyxxQkFBcUIsQ0FBQ0M7WUFBbUI7OztZQUV2R0MsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE9BQU87Z0JBQ1gsSUFBTUMsUUFBUUMsc0JBQVc7Z0JBRXpCLElBQUksQ0FBQ0MsVUFBVSxDQUFDRixPQUFPRDtZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSixPQUFPO2dCQUNYLElBQU1DLFFBQVFJLHNCQUFXO2dCQUV6QixJQUFJLENBQUNGLFVBQVUsQ0FBQ0YsT0FBT0Q7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsS0FBS04sT0FBTztnQkFDVixJQUFNQyxRQUFRTSxxQkFBVTtnQkFFeEIsSUFBSSxDQUFDSixVQUFVLENBQUNGLE9BQU9EO1lBQ3pCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFSLE9BQU87Z0JBQ2IsSUFBTUMsUUFBUVEsd0JBQWE7Z0JBRTNCLElBQUksQ0FBQ04sVUFBVSxDQUFDRixPQUFPRDtZQUN6Qjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNVixPQUFPO2dCQUNYLElBQU1DLFFBQVFVLHNCQUFXO2dCQUV6QixJQUFJLENBQUNSLFVBQVUsQ0FBQ0YsT0FBT0Q7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0YsS0FBSyxFQUFFRCxPQUFPO29CQUFFMUUsV0FBQUEsaUVBQVcsTUFBTXNGLFlBQUFBLGlFQUFZO2dCQUN0RCxJQUFJLENBQUNySCxHQUFHLENBQUNzSCxLQUFLLENBQUNaLE9BQU9ELFNBQVMxRSxVQUFVc0Y7WUFDM0M7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsUUFBUTtnQkFFZCxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLGVBQWU7Z0JBQ3hCLElBQU1DLHdCQUF3QkMsSUFBQUEsdURBQXdDLEVBQUNGLGtCQUNqRUcsZUFBZXBJLHNDQUFzQ3FJLGNBQVksRUFBRUgsd0JBQ25FSSxnQkFBZ0JwSSx1Q0FBdUNxSSxlQUFhLEVBQUVMLHdCQUN0RWhHLGlCQUFpQixJQUFJLEVBQ3JCRSxXQUFXLElBQUksQ0FBQ0QsVUFBVTtnQkFFaEMsSUFBSSxDQUFDakIseUJBQXlCLEdBQUd4QixLQUFLdUksa0JBQWtCLEdBQUc7Z0JBRTNELElBQUksQ0FBQ3JILEtBQUssR0FBR3dILGNBQWMsR0FBRztnQkFFOUIsSUFBSSxDQUFDdkgsTUFBTSxHQUFHeUgsZUFBZSxHQUFHO2dCQUVoQ2xHLFdBQ0VvRyxxQkFBcUIsSUFBSSxDQUFDL0gsSUFBSSxFQUFFLElBQUksQ0FBQ08sWUFBWSxFQUFFa0Isa0JBQ2pEdUcsd0JBQXdCLElBQUksQ0FBQy9ILE9BQU8sRUFBRSxJQUFJLENBQUNNLFlBQVksRUFBRWtCO2dCQUU3RCxJQUFJLENBQUNuQixXQUFXLEdBQUc7WUFDckI7OztZQUVNMkgsS0FBQUE7bUJBQU4sU0FBTUE7O3dCQUNBQyxVQUVFNUYsY0FDQWIsZ0JBQ0EwRyxvQkFHRUMsc0JBQ0FDOzs7O2dDQVJKSCxXQUFXO2dDQUVUNUYsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNkLGlCQUFpQixJQUFJLEVBQ3JCMEcscUJBQXFCRyxtQkFBbUJoRyxjQUFjYjtxQ0FFeEQwRyxvQkFBQUE7Ozs7Z0NBQ0lDO2dDQUNxQjs7b0NBQU1HLG1CQUFtQixJQUFJLENBQUNoSSxZQUFZLEVBQUU2SDs7O2dDQUFqRUMscUJBQXFCO2dDQUUzQixJQUFJQSxvQkFBb0I7b0NBQ3RCLElBQUksQ0FBQzlILFlBQVksR0FBRzZILHNCQUFzQixHQUFHO29DQUU3QyxJQUFJLENBQUMvSCxRQUFRLEdBQUc7b0NBRWhCNkgsV0FBVztnQ0FDYjs7O2dDQUdGOztvQ0FBT0E7Ozs7Z0JBQ1Q7Ozs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixJQUFJLENBQUNsSSxZQUFZLENBQUNtSSxHQUFHLENBQUMsU0FBQzNHO29CQUN4QyxJQUFNNEcsa0JBQWtCNUcsWUFBWXlHLE1BQU07b0JBRTFDLE9BQU9HO2dCQUNULElBQ0EzSSxPQUFPeUksa0JBQW1CLEdBQUc7Z0JBRW5DLE9BQU96STtZQUNUOzs7WUFFTTRJLEtBQUFBO21CQUFOLFNBQU1BLE9BQU0vRyxRQUFRLEVBQUVzRixTQUFTOzt3QkFDdkJYLE9BQ0FELFNBSUFzQzs7OztnQ0FMQXJDLFFBQVFDLHNCQUFXLEVBQ25CRixVQUFVdUMsd0JBQWE7Z0NBRTdCLElBQUksQ0FBQ3BDLFVBQVUsQ0FBQ0YsT0FBT0QsU0FBUzFFLFVBQVVzRjtnQ0FFcEMwQixVQUFVLElBQUksRUFBRSxHQUFHO2dDQUV6Qjs7b0NBQU0sSUFBSSxDQUFDM0ksUUFBUSxDQUFDMkksU0FBU2hILFVBQVVzRjs7O2dDQUF2Qzs7Ozs7O2dCQUNGOzs7OztZQUVPNEIsS0FBQUE7bUJBQVAsU0FBT0Esa0NBQWtDakosSUFBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRO2dCQUN6RSxJQUFNQyxRQUFRLE1BQ1JDLFNBQVMsTUFDVDhILFdBQVcsT0FDWDVILGNBQWMsT0FDZEMsZUFBZSxFQUFFLEVBQ2pCQyxnQkFBZ0J3SSxJQUFBQSw4Q0FBK0IsRUFBQ2pKLE1BQU1FLFVBQ3REUSw0QkFBNEIsTUFDNUJnQixpQkFBaUIsSUF4aEJOM0MsZUF3aEJ5QmdCLE1BQUtDLE1BQU1DLE1BQU1DLFNBQVNDLFVBQVVDLE9BQU9DLFFBQVE4SCxVQUFVNUgsYUFBYUMsY0FBY0MsZUFBZUM7Z0JBRWpKLE9BQU9nQjtZQUNUOzs7V0EzaEJtQjNDOztBQThoQnJCLFNBQVN3SixtQkFBbUJoRyxZQUFZLEVBQUViLGNBQWM7SUFDdEQsSUFBSTBHLHFCQUFxQjtJQUV6QixJQUFNM0YscUJBQXFCRixhQUFhRyxNQUFNLEVBQ3hDd0cseUJBQ0UscUJBQUczRztJQUdYaEQsU0FBUzJKLHdCQUF3QixTQUFDQyxhQUFhQztRQUM3QyxJQUFNQyxrQkFBa0JGLFlBQVl2SSxPQUFPLElBQ3JDMEksa0JBQWtCRixZQUFZeEksT0FBTztRQUUzQyxJQUFJeUksb0JBQW9CQyxpQkFBaUI7WUFDdkMsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFNQyw2QkFBNkJMLHVCQUF1QnhHLE1BQU07SUFFaEUsSUFBSUQscUJBQXFCOEcsNEJBQTRCO1FBQ25EakssT0FBTzRKLHdCQUF3QixTQUFDN0c7WUFDOUIsSUFBTW1ILGlDQUFpQ2pILGFBQWFrSCxRQUFRLENBQUNwSDtZQUU3RCxJQUFJLENBQUNtSCxnQ0FBZ0M7Z0JBQ25DLE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBTTdHLGtCQUFrQnRELE1BQU1rRCxlQUN4QkYsYUFBYU0saUJBQ2IrRyxtQkFBbUJySCxXQUFXc0gsU0FBUztRQUU3Q2pJLGVBQWVvRixJQUFJLENBQUMsQUFBQyxRQUF3QixPQUFqQjRDLGtCQUFpQjtRQUU3Q3RCLHFCQUFxQjtJQUN2QjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFlSSxtQkFBbUJoSSxZQUFZLEVBQUU2SCxvQkFBb0I7O1lBQzVEdUIsVUFPQXRCOztZQVBBc0IsV0FBVzVLLGFBQWF3QixjQUFjNkgsc0JBQXNCLFNBQU9yRzs7d0JBQzNENkg7Ozs7Z0NBQXNCOztvQ0FBTTdILFlBQVlrRyxNQUFNOzs7Z0NBQTlDMkIsc0JBQXNCO2dDQUU1QixJQUFJQSxxQkFBcUI7b0NBQ3ZCOzt3Q0FBTzs7Z0NBQ1Q7Ozs7OztnQkFDRjtnQkFDQXZCLHFCQUFxQnNCLFVBQVcsR0FBRztZQUV6Qzs7Z0JBQU90Qjs7O0lBQ1Q7O0FBRUEsU0FBU04scUJBQXFCL0gsSUFBSSxFQUFDTyxZQUFZLEVBQUVrQixjQUFjO0lBQzdELElBQU1nSCxtQkFBbUJ6SSxNQUFPLEdBQUc7SUFFbkN5SSxpQkFBaUI1RixPQUFPLENBQUMsU0FBQzhGO1FBQ3hCLElBQU0sQUFBRTlHLFdBQWE4RyxnQkFBYjlHLFVBQ0Y3QixTQUFPMkksaUJBQ1BrQix5QkFBeUJsSyx5QkFBeUJrQyxXQUNsRGlJLDBCQUEwQmpLLDBCQUEwQmdDO1FBRTFELElBQUlnSSx3QkFBd0I7WUFDMUIsSUFBTUUsb0JBQW9CQyw4QkFBaUIsQ0FBQ0MsWUFBWSxDQUFDcEksVUFBVUosaUJBQzdETSxjQUFjZ0ksbUJBQW9CLEdBQUc7WUFFM0N4SixhQUFhcEIsSUFBSSxDQUFDNEM7WUFFbEJBLFlBQVl3RixVQUFVLENBQUN2SDtRQUN6QjtRQUVBLElBQUk4Six5QkFBeUI7WUFDM0IsSUFBTWpCLFVBQVVwSCxnQkFDVk0sZUFBY21JLGdCQUFrQixDQUFDRCxZQUFZLENBQUNwSSxVQUFVZ0g7WUFFOUR0SSxhQUFhcEIsSUFBSSxDQUFDNEM7WUFFbEJBLGFBQVl3RixVQUFVLENBQUN2SDtRQUN6QjtJQUNGO0FBQ0Y7QUFFQSxTQUFTZ0ksd0JBQXdCL0gsT0FBTyxFQUFFTSxZQUFZLEVBQUVrQixjQUFjO0lBQ3BFLElBQU1vSCxVQUFVcEgsZ0JBQWdCLEdBQUc7SUFFbkN4QixRQUFRa0ssV0FBVyxDQUFDLFNBQUNDO1FBQ25CLElBQU12SSxXQUFXdUksS0FBS0MsT0FBTyxJQUN2QlIseUJBQXlCbEsseUJBQXlCa0MsV0FDbERpSSwwQkFBMEJqSywwQkFBMEJnQztRQUUxRCxJQUFJZ0ksd0JBQXdCO1lBQzFCLElBQU1FLG9CQUFvQkMsOEJBQWlCLENBQUNNLFFBQVEsQ0FBQ0YsTUFBTXZCLFVBQ3JEOUcsY0FBY2dJLG1CQUFvQixHQUFHO1lBRTNDeEosYUFBYXBCLElBQUksQ0FBQzRDO1FBQ3BCO1FBRUEsSUFBSStILHlCQUF5QjtZQUMzQixJQUFNUyxxQkFBcUJMLGdCQUFrQixDQUFDSSxRQUFRLENBQUNGLE1BQU12QixVQUN2RDlHLGVBQWN3SSxvQkFBb0IsR0FBRztZQUUzQ2hLLGFBQWFwQixJQUFJLENBQUM0QztRQUNwQjtJQUNGO0FBQ0YifQ==