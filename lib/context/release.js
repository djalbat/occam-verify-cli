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
var _metaType = require("../structure/metaType");
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
var nominalLexerFromCombinedCustomGrammar = _occamcustomgrammars.lexersUtilities.nominalLexerFromCombinedCustomGrammar, nominalParserFromCombinedCustomGrammar = _occamcustomgrammars.parsersUtilities.nominalParserFromCombinedCustomGrammar, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, clear = _necessary.arrayUtilities.clear, filter = _necessary.arrayUtilities.filter, resolve = _necessary.arrayUtilities.resolve, compress = _necessary.arrayUtilities.compress, isFilePathFurtleFilePath = _occamentities.filePathUtilities.isFilePathFurtleFilePath, isFilePathNominalFilePath = _occamentities.filePathUtilities.isFilePathNominalFilePath;
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
                var metaTypes = [
                    _metaType.frameMetaType,
                    _metaType.referenceMetaType,
                    _metaType.statementMetaType
                ];
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
                this.log.trace(message, filePath, lineIndex);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                this.log.debug(message, filePath, lineIndex);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                this.log.info(message, filePath, lineIndex);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                this.log.warning(message, filePath, lineIndex);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, lineIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                this.log.error(message, filePath, lineIndex);
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
            var fileContext1 = _file.default.fromFilePath(filePath, releaseContext);
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
            var fileContext1 = _file.default.fromFile(file, releaseContext);
            fileContexts.push(fileContext1);
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRmlsZUNvbnRleHQgYXMgRnVydGxlRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlXCI7XG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgZnJhbWVNZXRhVHlwZSwgcmVmZXJlbmNlTWV0YVR5cGUsIHN0YXRlbWVudE1ldGFUeXBlIH0gZnJvbSBcIi4uL3N0cnVjdHVyZS9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IHRhaWwsIHB1c2gsIGZpcnN0LCBjbGVhciwgZmlsdGVyLCByZXNvbHZlLCBjb21wcmVzcyB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCwgaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBsZXhlciwgcGFyc2VyLCB2ZXJpZmllZCwgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY3VzdG9tR3JhbW1hciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMubG9nID0gbG9nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5qc29uID0ganNvbjtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnZlcmlmaWVkID0gdmVyaWZpZWQ7XG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGluaXRpYWxpc2VkO1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gbG9nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVzKCkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IFtcbiAgICAgIGZyYW1lTWV0YVR5cGUsXG4gICAgICByZWZlcmVuY2VNZXRhVHlwZSxcbiAgICAgIHN0YXRlbWVudE1ldGFUeXBlXG4gICAgXTtcblxuICAgIHJldHVybiBtZXRhVHlwZXM7XG4gIH1cblxuICBpc1ZlcmlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLnZlcmlmaWVkO1xuICB9XG5cbiAgaXNJbml0aWFsaXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXNlZDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBpc1JlbGVhc2VkKCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gKHRoaXMuanNvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVsZWFzZWQ7XG4gIH1cblxuICBmaW5kRmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmZpbmRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGZpbmRGaWxlQ29udGV4dChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5maWxlQ29udGV4dHMuZmluZCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0RmlsZVBhdGggPSBmaWxlQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgICBpZiAoZmlsZUNvbnRleHRGaWxlUGF0aCA9PT0gZmlsZVBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIGxldCB0eXBlUHJlZml4ID0gbnVsbDtcblxuICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNMZW5ndGggPSB0eXBlUHJlZml4ZXMubGVuZ3RoO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RUeXBlUHJlZml4ID0gZmlyc3QodHlwZVByZWZpeGVzKTtcblxuICAgICAgdHlwZVByZWZpeCA9IGZpcnN0VHlwZVByZWZpeDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgZmlsZUNvbnRleHRMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUaGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgZmlsZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRQcm9jZWR1cmVzID0gZmlsZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocHJvY2VkdXJlcywgZmlsZUNvbnRleHRQcm9jZWR1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChwcm9jZWR1cmVzLCByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGFMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhTGVtbWFzLCBmaWxlQ29udGV4dE1ldGFMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uamVjdHVyZXMgPSBmaWxlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uamVjdHVyZXMsIGZpbGVDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb21iaW5hdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgZmlsZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZVByZWZpeGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlUHJlZml4ZXMsIGZpbGVDb250ZXh0VHlwZVByZWZpeGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVQcmVmaXhlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIGdldFJlbGVhc2VOYW1lKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHJlbGVhc2VOYW1lO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZ2V0VmVyc2lvbigpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRWZXJzaW9uKCk7IH1cblxuICBnZXRGaWxlUGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZVBhdGhzKCk7IH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikgeyByZXR1cm4gdGhpcy5lbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkgeyB0aGlzLmxvZy50cmFjZShtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkgeyB0aGlzLmxvZy5kZWJ1ZyhtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTsgfVxuXG4gIGluZm8obWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7IHRoaXMubG9nLmluZm8obWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkgeyB0aGlzLmxvZy53YXJuaW5nKG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7IHRoaXMubG9nLmVycm9yKG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpOyB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMpIHtcbiAgICBjb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyksXG4gICAgICAgICAgbm9taW5hbExleGVyID0gbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsTGV4ZXIsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxQYXJzZXIsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZWQgPSB0aGlzLmlzUmVsZWFzZWQoKTtcblxuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRhaWwocmVsZWFzZUNvbnRleHRzKTsgLy8vXG5cbiAgICB0aGlzLmxleGVyID0gbm9taW5hbExleGVyOyAvLy9cblxuICAgIHRoaXMucGFyc2VyID0gbm9taW5hbFBhcnNlcjsgLy8vXG5cbiAgICBjbGVhcih0aGlzLmZpbGVDb250ZXh0cyk7XG5cbiAgICByZWxlYXNlZCA/XG4gICAgICBmaWxlQ29udGV4dHNGcm9tSlNPTih0aGlzLmpzb24sIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkgOlxuICAgICAgICBmaWxlQ29udGV4dHNGcm9tRW50cmllcyh0aGlzLmVudHJpZXMsIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXNWZXJpZnkgPSB2ZXJpZnlUeXBlUHJlZml4ZXModHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZVByZWZpeGVzVmVyaWZ5KSB7XG4gICAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRzVmVyaWZ5ID0gdmVyaWZ5RmlsZUNvbnRleHRzKHRoaXMuZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBpZiAoZmlsZUNvbnRleHRzVmVyaWZ5KSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHRzID0gdmVyaWZpZWRGaWxlQ29udGV4dHM7IC8vL1xuXG4gICAgICAgIHRoaXMudmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IHRoaXMuZmlsZUNvbnRleHRzLm1hcCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0SlNPTiA9IGZpbGVDb250ZXh0LnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsZUNvbnRleHRKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dHNKU09OOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUpTT05BbmRFbnRyaWVzKGxvZywgbmFtZSwganNvbiwgZW50cmllcykge1xuICAgIGNvbnN0IGxleGVyID0gbnVsbCxcbiAgICAgICAgICBwYXJzZXIgPSBudWxsLFxuICAgICAgICAgIHZlcmlmaWVzID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVzLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJpZnlUeXBlUHJlZml4ZXModHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dCkge1xuICBsZXQgdHlwZVByZWZpeGVzVmVyaWZ5ID0gdHJ1ZTtcblxuICBjb25zdCB0eXBlUHJlZml4ZXNMZW5ndGggPSB0eXBlUHJlZml4ZXMubGVuZ3RoLFxuICAgICAgICBjb21wcmVzc2VkVHlwZVByZWZpeGVzID0gWyAgLy8vXG4gICAgICAgICAgLi4udHlwZVByZWZpeGVzLFxuICAgICAgICBdO1xuXG4gIGNvbXByZXNzKGNvbXByZXNzZWRUeXBlUHJlZml4ZXMsICh0eXBlUHJlZml4QSwgdHlwZVByZWZpeEIpID0+IHtcbiAgICBjb25zdCB0eXBlUHJlZml4QU5hbWUgPSB0eXBlUHJlZml4QS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZVByZWZpeEJOYW1lID0gdHlwZVByZWZpeEIuZ2V0TmFtZSgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhBTmFtZSAhPT0gdHlwZVByZWZpeEJOYW1lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbXByZXNzVHlwZVByZWZpeGVzTGVuZ3RoID0gY29tcHJlc3NlZFR5cGVQcmVmaXhlcy5sZW5ndGg7XG5cbiAgaWYgKHR5cGVQcmVmaXhlc0xlbmd0aCA+IGNvbXByZXNzVHlwZVByZWZpeGVzTGVuZ3RoKSB7XG4gICAgZmlsdGVyKGNvbXByZXNzZWRUeXBlUHJlZml4ZXMsICh0eXBlUHJlZml4KSA9PiB7XG4gICAgICBjb25zdCB0eXBlUHJlZml4ZXNJbmNsdWRlc1R5cGVQcmVmaXggPSB0eXBlUHJlZml4ZXMuaW5jbHVkZXModHlwZVByZWZpeCk7XG5cbiAgICAgIGlmICghdHlwZVByZWZpeGVzSW5jbHVkZXNUeXBlUHJlZml4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZmlyc3RUeXBlUHJlZml4ID0gZmlyc3QodHlwZVByZWZpeGVzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gZmlyc3RUeXBlUHJlZml4LCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4U3RyaW5nID0gdHlwZVByZWZpeC5nZXRTdHJpbmcoKTtcblxuICAgIHJlbGVhc2VDb250ZXh0LmluZm8oYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXggaXMgZHVwbGljYXRlZCBhdCBsZWFzdCBvbmNlLCBwb3NzaWJseSBhbW9uZyBvdGhlcnMuYClcblxuICAgIHR5cGVQcmVmaXhlc1ZlcmlmeSA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVQcmVmaXhlc1ZlcmlmeTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RmlsZUNvbnRleHRzKGZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlKGZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMsIChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0VmVyaWZpZXMgPSBmaWxlQ29udGV4dC52ZXJpZnkoKTtcblxuICAgICAgICAgIGlmIChmaWxlQ29udGV4dFZlcmlmaWVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBmaWxlQ29udGV4dHNWZXJpZnkgPSByZXNvbHZlZDsgIC8vL1xuXG4gIHJldHVybiBmaWxlQ29udGV4dHNWZXJpZnk7XG59XG5cbmZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21KU09OKGpzb24sZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0ganNvbjsgIC8vL1xuXG4gIGZpbGVDb250ZXh0c0pTT04uZm9yRWFjaCgoZmlsZUNvbnRleHRKU09OKSA9PiB7XG4gICAgY29uc3QgeyBmaWxlUGF0aCB9ID0gZmlsZUNvbnRleHRKU09OLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dEpTT04sIC8vL1xuICAgICAgICAgIGZpbGVQYXRoRnVydGxlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoID0gaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAoZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZnVydGxlRmlsZUNvbnRleHQgPSBGdXJ0bGVGaWxlQ29udGV4dC5mcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gZnVydGxlRmlsZUNvbnRleHQ7ICAvLy9cblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuICAgIH1cblxuICAgIGlmIChmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKGVudHJpZXMsIGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpIHtcbiAgZW50cmllcy5mb3JFYWNoRmlsZSgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCA9IGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGhOb21pbmFsRmlsZVBhdGggPSBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmIChmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBmdXJ0bGVGaWxlQ29udGV4dCA9IEZ1cnRsZUZpbGVDb250ZXh0LmZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gZnVydGxlRmlsZUNvbnRleHQ7ICAvLy9cblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZShmaWxlLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0Iiwibm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsIm5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsInRhaWwiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJmaXJzdCIsImNsZWFyIiwiZmlsdGVyIiwicmVzb2x2ZSIsImNvbXByZXNzIiwiaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwibG9nIiwibmFtZSIsImpzb24iLCJlbnRyaWVzIiwibGV4ZXIiLCJwYXJzZXIiLCJ2ZXJpZmllZCIsImluaXRpYWxpc2VkIiwiZmlsZUNvbnRleHRzIiwiY3VzdG9tR3JhbW1hciIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRMb2ciLCJnZXROYW1lIiwiZ2V0SlNPTiIsImdldEVudHJpZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldE1ldGFUeXBlcyIsIm1ldGFUeXBlcyIsImZyYW1lTWV0YVR5cGUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsInN0YXRlbWVudE1ldGFUeXBlIiwiaXNWZXJpZmllZCIsImlzSW5pdGlhbGlzZWQiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImlzUmVsZWFzZWQiLCJyZWxlYXNlZCIsImZpbmRGaWxlIiwiZmlsZVBhdGgiLCJmaW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZpbmQiLCJmaWxlQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeCIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlUHJlZml4ZXMiLCJnZXRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4ZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFR5cGVQcmVmaXgiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJmb3JFYWNoIiwiaW5jbHVkZVJlbGVhc2UiLCJmaWxlQ29udGV4dExhYmVscyIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsImZpbGVDb250ZXh0UHJvY2VkdXJlcyIsInJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyIsImdldE1ldGFMZW1tYXMiLCJtZXRhTGVtbWFzIiwiZmlsZUNvbnRleHRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJjb25qZWN0dXJlcyIsImZpbGVDb250ZXh0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImZpbGVDb250ZXh0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiYWRkRmlsZUNvbnRleHQiLCJnZXRSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lIiwiZ2V0RmlsZSIsImdldFZlcnNpb24iLCJnZXRGaWxlUGF0aHMiLCJnZXREZXBlbmRlbmNpZXMiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwidHJhY2UiLCJtZXNzYWdlIiwibGluZUluZGV4IiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiaW5pdGlhbGlzZSIsInJlbGVhc2VDb250ZXh0cyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMiLCJub21pbmFsTGV4ZXIiLCJOb21pbmFsTGV4ZXIiLCJub21pbmFsUGFyc2VyIiwiTm9taW5hbFBhcnNlciIsImZpbGVDb250ZXh0c0Zyb21KU09OIiwiZmlsZUNvbnRleHRzRnJvbUVudHJpZXMiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInR5cGVQcmVmaXhlc1ZlcmlmeSIsInZlcmlmeVR5cGVQcmVmaXhlcyIsInZlcmlmaWVkRmlsZUNvbnRleHRzIiwiZmlsZUNvbnRleHRzVmVyaWZ5IiwidmVyaWZ5RmlsZUNvbnRleHRzIiwidG9KU09OIiwiZmlsZUNvbnRleHRzSlNPTiIsIm1hcCIsImZpbGVDb250ZXh0SlNPTiIsImZyb21Mb2dOYW1lSlNPTkFuZEVudHJpZXMiLCJjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzIiwiY29tcHJlc3NlZFR5cGVQcmVmaXhlcyIsInR5cGVQcmVmaXhBIiwidHlwZVByZWZpeEIiLCJ0eXBlUHJlZml4QU5hbWUiLCJ0eXBlUHJlZml4Qk5hbWUiLCJjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCIsInR5cGVQcmVmaXhlc0luY2x1ZGVzVHlwZVByZWZpeCIsImluY2x1ZGVzIiwidHlwZVByZWZpeFN0cmluZyIsImdldFN0cmluZyIsInJlc29sdmVkIiwiZmlsZUNvbnRleHRWZXJpZmllcyIsImZpbGVQYXRoRnVydGxlRmlsZVBhdGgiLCJmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCIsImZ1cnRsZUZpbGVDb250ZXh0IiwiRnVydGxlRmlsZUNvbnRleHQiLCJmcm9tRmlsZVBhdGgiLCJGaWxlQ29udGV4dCIsImZvckVhY2hGaWxlIiwiZmlsZSIsImdldFBhdGgiLCJmcm9tRmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7O3lCQWxCVTsyQkFDa0I7NkJBRWY7bUNBQ2dCOzJEQUUxQjs0REFDQzs2REFDQzt3QkFFMEM7NkJBQ3NCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxRixJQUFNLEFBQUVDLHdDQUEwQ0Msb0NBQWUsQ0FBekRELHVDQUNGLEFBQUVFLHlDQUEyQ0MscUNBQWdCLENBQTNERCx3Q0FDQUUsT0FBd0RDLHlCQUFjLENBQXRFRCxNQUFNRSxPQUFrREQseUJBQWMsQ0FBaEVDLE1BQU1DLFFBQTRDRix5QkFBYyxDQUExREUsT0FBT0MsUUFBcUNILHlCQUFjLENBQW5ERyxPQUFPQyxTQUE4QkoseUJBQWMsQ0FBNUNJLFFBQVFDLFVBQXNCTCx5QkFBYyxDQUFwQ0ssU0FBU0MsV0FBYU4seUJBQWMsQ0FBM0JNLFVBQzNDQywyQkFBd0RDLGdDQUFpQixDQUF6RUQsMEJBQTBCRSw0QkFBOEJELGdDQUFpQixDQUEvQ0M7QUFFbkIsSUFBQSxBQUFNZiwrQkFBTjthQUFNQSxlQUNQZ0IsSUFBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyx5QkFBeUI7Z0NBRC9HMUI7UUFFakIsSUFBSSxDQUFDZ0IsR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FB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