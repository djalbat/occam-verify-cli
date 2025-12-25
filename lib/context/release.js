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
var _metaType = require("../ontology/metaType");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRmlsZUNvbnRleHQgYXMgRnVydGxlRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlXCI7XG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgZnJhbWVNZXRhVHlwZSwgcmVmZXJlbmNlTWV0YVR5cGUsIHN0YXRlbWVudE1ldGFUeXBlIH0gZnJvbSBcIi4uL29udG9sb2d5L21ldGFUeXBlXCI7XG5pbXBvcnQgeyBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5cbmNvbnN0IHsgbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcyxcbiAgICAgIHsgdGFpbCwgcHVzaCwgZmlyc3QsIGNsZWFyLCBmaWx0ZXIsIHJlc29sdmUsIGNvbXByZXNzIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIH0gPSBmaWxlUGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gaW5pdGlhbGlzZWQ7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gICAgdGhpcy5jdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiBsb2c7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRNZXRhVHlwZXMoKSB7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gW1xuICAgICAgZnJhbWVNZXRhVHlwZSxcbiAgICAgIHJlZmVyZW5jZU1ldGFUeXBlLFxuICAgICAgc3RhdGVtZW50TWV0YVR5cGVcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlcztcbiAgfVxuXG4gIGlzVmVyaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZWQ7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIGdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGlzUmVsZWFzZWQoKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSAodGhpcy5qc29uICE9PSBudWxsKTtcblxuICAgIHJldHVybiByZWxlYXNlZDtcbiAgfVxuXG4gIGZpbmRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZmluZEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZmluZEZpbGVDb250ZXh0KGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLmZpbGVDb250ZXh0cy5maW5kKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHRGaWxlUGF0aCA9IGZpbGVDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICAgIGlmIChmaWxlQ29udGV4dEZpbGVQYXRoID09PSBmaWxlUGF0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7XG4gICAgbGV0IHR5cGVQcmVmaXggPSBudWxsO1xuXG4gICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpLFxuICAgICAgICAgIHR5cGVQcmVmaXhlc0xlbmd0aCA9IHR5cGVQcmVmaXhlcy5sZW5ndGg7XG5cbiAgICBpZiAodHlwZVByZWZpeGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdFR5cGVQcmVmaXggPSBmaXJzdCh0eXBlUHJlZml4ZXMpO1xuXG4gICAgICB0eXBlUHJlZml4ID0gZmlyc3RUeXBlUHJlZml4OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExhYmVscyA9IGZpbGVDb250ZXh0LmdldExhYmVscyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBmaWxlQ29udGV4dExhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSByZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godHlwZXMsIGZpbGVDb250ZXh0VHlwZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRSdWxlcyA9IGZpbGVDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChydWxlcywgZmlsZUNvbnRleHRSdWxlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0QXhpb21zID0gZmlsZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChheGlvbXMsIGZpbGVDb250ZXh0QXhpb21zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExlbW1hcyA9IGZpbGVDb250ZXh0LmdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCBmaWxlQ29udGV4dExlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCBmaWxlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFByb2NlZHVyZXMgPSBmaWxlQ29udGV4dC5nZXRQcm9jZWR1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChwcm9jZWR1cmVzLCBmaWxlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YUxlbW1hcyA9IGZpbGVDb250ZXh0LmdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIGZpbGVDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25qZWN0dXJlcyA9IGZpbGVDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgZmlsZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVQcmVmaXhlcywgZmlsZUNvbnRleHRUeXBlUHJlZml4ZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBhZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgZ2V0UmVsZWFzZU5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZTsgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZU5hbWU7XG4gIH1cblxuICBnZXRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZShmaWxlUGF0aCk7IH1cblxuICBnZXRWZXJzaW9uKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldFZlcnNpb24oKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXREZXBlbmRlbmNpZXMoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLmVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pOyB9XG5cbiAgdHJhY2UobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7IHRoaXMubG9nLnRyYWNlKG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7IHRoaXMubG9nLmRlYnVnKG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHsgdGhpcy5sb2cuaW5mbyhtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsLCBsaW5lSW5kZXggPSBudWxsKSB7IHRoaXMubG9nLndhcm5pbmcobWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHsgdGhpcy5sb2cuZXJyb3IobWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7IH1cblxuICBpbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cykge1xuICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHRzKSxcbiAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxMZXhlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbFBhcnNlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMsICAvLy9cbiAgICAgICAgICByZWxlYXNlZCA9IHRoaXMuaXNSZWxlYXNlZCgpO1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGFpbChyZWxlYXNlQ29udGV4dHMpOyAvLy9cblxuICAgIHRoaXMubGV4ZXIgPSBub21pbmFsTGV4ZXI7IC8vL1xuXG4gICAgdGhpcy5wYXJzZXIgPSBub21pbmFsUGFyc2VyOyAvLy9cblxuICAgIGNsZWFyKHRoaXMuZmlsZUNvbnRleHRzKTtcblxuICAgIHJlbGVhc2VkID9cbiAgICAgIGZpbGVDb250ZXh0c0Zyb21KU09OKHRoaXMuanNvbiwgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KSA6XG4gICAgICAgIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKHRoaXMuZW50cmllcywgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhlc1ZlcmlmeSA9IHZlcmlmeVR5cGVQcmVmaXhlcyh0eXBlUHJlZml4ZXMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGlmICh0eXBlUHJlZml4ZXNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkRmlsZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgICBmaWxlQ29udGV4dHNWZXJpZnkgPSB2ZXJpZnlGaWxlQ29udGV4dHModGhpcy5maWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmIChmaWxlQ29udGV4dHNWZXJpZnkpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dHMgPSB2ZXJpZmllZEZpbGVDb250ZXh0czsgLy8vXG5cbiAgICAgICAgdGhpcy52ZXJpZmllZCA9IHRydWU7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0gdGhpcy5maWxlQ29udGV4dHMubWFwKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZUNvbnRleHRKU09OID0gZmlsZUNvbnRleHQudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWxlQ29udGV4dEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVDb250ZXh0c0pTT047ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dOYW1lSlNPTkFuZEVudHJpZXMobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsLFxuICAgICAgICAgIHBhcnNlciA9IG51bGwsXG4gICAgICAgICAgdmVyaWZpZXMgPSBmYWxzZSxcbiAgICAgICAgICBpbml0aWFsaXNlZCA9IGZhbHNlLFxuICAgICAgICAgIGZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IFJlbGVhc2VDb250ZXh0KGxvZywgbmFtZSwganNvbiwgZW50cmllcywgbGV4ZXIsIHBhcnNlciwgdmVyaWZpZXMsIGluaXRpYWxpc2VkLCBmaWxlQ29udGV4dHMsIGN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVR5cGVQcmVmaXhlcyh0eXBlUHJlZml4ZXMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGxldCB0eXBlUHJlZml4ZXNWZXJpZnkgPSB0cnVlO1xuXG4gIGNvbnN0IHR5cGVQcmVmaXhlc0xlbmd0aCA9IHR5cGVQcmVmaXhlcy5sZW5ndGgsXG4gICAgICAgIGNvbXByZXNzZWRUeXBlUHJlZml4ZXMgPSBbICAvLy9cbiAgICAgICAgICAuLi50eXBlUHJlZml4ZXMsXG4gICAgICAgIF07XG5cbiAgY29tcHJlc3MoY29tcHJlc3NlZFR5cGVQcmVmaXhlcywgKHR5cGVQcmVmaXhBLCB0eXBlUHJlZml4QikgPT4ge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhBTmFtZSA9IHR5cGVQcmVmaXhBLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4Qk5hbWUgPSB0eXBlUHJlZml4Qi5nZXROYW1lKCk7XG5cbiAgICBpZiAodHlwZVByZWZpeEFOYW1lICE9PSB0eXBlUHJlZml4Qk5hbWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29tcHJlc3NUeXBlUHJlZml4ZXNMZW5ndGggPSBjb21wcmVzc2VkVHlwZVByZWZpeGVzLmxlbmd0aDtcblxuICBpZiAodHlwZVByZWZpeGVzTGVuZ3RoID4gY29tcHJlc3NUeXBlUHJlZml4ZXNMZW5ndGgpIHtcbiAgICBmaWx0ZXIoY29tcHJlc3NlZFR5cGVQcmVmaXhlcywgKHR5cGVQcmVmaXgpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhlc0luY2x1ZGVzVHlwZVByZWZpeCA9IHR5cGVQcmVmaXhlcy5pbmNsdWRlcyh0eXBlUHJlZml4KTtcblxuICAgICAgaWYgKCF0eXBlUHJlZml4ZXNJbmNsdWRlc1R5cGVQcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaXJzdFR5cGVQcmVmaXggPSBmaXJzdCh0eXBlUHJlZml4ZXMpLFxuICAgICAgICAgIHR5cGVQcmVmaXggPSBmaXJzdFR5cGVQcmVmaXgsIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhTdHJpbmcgPSB0eXBlUHJlZml4LmdldFN0cmluZygpO1xuXG4gICAgcmVsZWFzZUNvbnRleHQuaW5mbyhgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeCBpcyBkdXBsaWNhdGVkIGF0IGxlYXN0IG9uY2UsIHBvc3NpYmx5IGFtb25nIG90aGVycy5gKVxuXG4gICAgdHlwZVByZWZpeGVzVmVyaWZ5ID0gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHlwZVByZWZpeGVzVmVyaWZ5O1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlGaWxlQ29udGV4dHMoZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cykge1xuICBjb25zdCByZXNvbHZlZCA9IHJlc29sdmUoZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cywgKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgZmlsZUNvbnRleHRWZXJpZmllcyA9IGZpbGVDb250ZXh0LnZlcmlmeSgpO1xuXG4gICAgICAgICAgaWYgKGZpbGVDb250ZXh0VmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGZpbGVDb250ZXh0c1ZlcmlmeSA9IHJlc29sdmVkOyAgLy8vXG5cbiAgcmV0dXJuIGZpbGVDb250ZXh0c1ZlcmlmeTtcbn1cblxuZnVuY3Rpb24gZmlsZUNvbnRleHRzRnJvbUpTT04oanNvbixmaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSBqc29uOyAgLy8vXG5cbiAgZmlsZUNvbnRleHRzSlNPTi5mb3JFYWNoKChmaWxlQ29udGV4dEpTT04pID0+IHtcbiAgICBjb25zdCB7IGZpbGVQYXRoIH0gPSBmaWxlQ29udGV4dEpTT04sXG4gICAgICAgICAganNvbiA9IGZpbGVDb250ZXh0SlNPTiwgLy8vXG4gICAgICAgICAgZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCA9IGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGhOb21pbmFsRmlsZVBhdGggPSBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmIChmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBmdXJ0bGVGaWxlQ29udGV4dCA9IEZ1cnRsZUZpbGVDb250ZXh0LmZyb21GaWxlUGF0aChmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpLFxuICAgICAgICAgICAgZmlsZUNvbnRleHQgPSBmdXJ0bGVGaWxlQ29udGV4dDsgIC8vL1xuXG4gICAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG4gICAgfVxuXG4gICAgaWYgKGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlUGF0aChmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsZUNvbnRleHRzRnJvbUVudHJpZXMoZW50cmllcywgZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBlbnRyaWVzLmZvckVhY2hGaWxlKChmaWxlKSA9PiB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICBmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCA9IGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKGZpbGVQYXRoRnVydGxlRmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IGZ1cnRsZUZpbGVDb250ZXh0ID0gRnVydGxlRmlsZUNvbnRleHQuZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpLFxuICAgICAgICAgICAgZmlsZUNvbnRleHQgPSBmdXJ0bGVGaWxlQ29udGV4dDsgIC8vL1xuXG4gICAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwidGFpbCIsImFycmF5VXRpbGl0aWVzIiwicHVzaCIsImZpcnN0IiwiY2xlYXIiLCJmaWx0ZXIiLCJyZXNvbHZlIiwiY29tcHJlc3MiLCJpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgiLCJmaWxlUGF0aFV0aWxpdGllcyIsImlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJsb2ciLCJuYW1lIiwianNvbiIsImVudHJpZXMiLCJsZXhlciIsInBhcnNlciIsInZlcmlmaWVkIiwiaW5pdGlhbGlzZWQiLCJmaWxlQ29udGV4dHMiLCJjdXN0b21HcmFtbWFyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRKU09OIiwiZ2V0RW50cmllcyIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0TWV0YVR5cGVzIiwibWV0YVR5cGVzIiwiZnJhbWVNZXRhVHlwZSIsInJlZmVyZW5jZU1ldGFUeXBlIiwic3RhdGVtZW50TWV0YVR5cGUiLCJpc1ZlcmlmaWVkIiwiaXNJbml0aWFsaXNlZCIsImdldEZpbGVDb250ZXh0cyIsImdldEN1c3RvbUdyYW1tYXIiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiaXNSZWxlYXNlZCIsInJlbGVhc2VkIiwiZmluZEZpbGUiLCJmaWxlUGF0aCIsImZpbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZmluZCIsImZpbGVDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVQcmVmaXhlcyIsImdldFR5cGVQcmVmaXhlcyIsInR5cGVQcmVmaXhlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0VHlwZVByZWZpeCIsImdldExhYmVscyIsImxhYmVscyIsImZvckVhY2giLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0TGFiZWxzIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwidHlwZXMiLCJmaWxlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImZpbGVDb250ZXh0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJmaWxlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJmaWxlQ29udGV4dFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZmlsZUNvbnRleHRQcm9jZWR1cmVzIiwicmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJmaWxlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZmlsZUNvbnRleHRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJmaWxlQ29udGV4dFR5cGVQcmVmaXhlcyIsInJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsIm1ldGF0aGVvcmVtcyIsImZpbGVDb250ZXh0TWV0YXRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJhZGRGaWxlQ29udGV4dCIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJnZXRGaWxlIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsaW5lSW5kZXgiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsIm5vbWluYWxMZXhlciIsIk5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJOb21pbmFsUGFyc2VyIiwiZmlsZUNvbnRleHRzRnJvbUpTT04iLCJmaWxlQ29udGV4dHNGcm9tRW50cmllcyIsInZlcmlmeSIsInZlcmlmaWVzIiwidHlwZVByZWZpeGVzVmVyaWZ5IiwidmVyaWZ5VHlwZVByZWZpeGVzIiwidmVyaWZpZWRGaWxlQ29udGV4dHMiLCJmaWxlQ29udGV4dHNWZXJpZnkiLCJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJ0b0pTT04iLCJmaWxlQ29udGV4dHNKU09OIiwibWFwIiwiZmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJjb21wcmVzc2VkVHlwZVByZWZpeGVzIiwidHlwZVByZWZpeEEiLCJ0eXBlUHJlZml4QiIsInR5cGVQcmVmaXhBTmFtZSIsInR5cGVQcmVmaXhCTmFtZSIsImNvbXByZXNzVHlwZVByZWZpeGVzTGVuZ3RoIiwidHlwZVByZWZpeGVzSW5jbHVkZXNUeXBlUHJlZml4IiwiaW5jbHVkZXMiLCJ0eXBlUHJlZml4U3RyaW5nIiwiZ2V0U3RyaW5nIiwicmVzb2x2ZWQiLCJmaWxlQ29udGV4dFZlcmlmaWVzIiwiZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCIsImZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwiZnVydGxlRmlsZUNvbnRleHQiLCJGdXJ0bGVGaWxlQ29udGV4dCIsImZyb21GaWxlUGF0aCIsIkZpbGVDb250ZXh0IiwiZm9yRWFjaEZpbGUiLCJmaWxlIiwiZ2V0UGF0aCIsImZyb21GaWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW9CcUJBOzs7eUJBbEJVOzJCQUNrQjs2QkFFZjttQ0FDZ0I7MkRBRTFCOzREQUNDOzZEQUNDO3dCQUUwQzs2QkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFGLElBQU0sQUFBRUMsd0NBQTBDQyxvQ0FBZSxDQUF6REQsdUNBQ0YsQUFBRUUseUNBQTJDQyxxQ0FBZ0IsQ0FBM0RELHdDQUNBRSxPQUF3REMseUJBQWMsQ0FBdEVELE1BQU1FLE9BQWtERCx5QkFBYyxDQUFoRUMsTUFBTUMsUUFBNENGLHlCQUFjLENBQTFERSxPQUFPQyxRQUFxQ0gseUJBQWMsQ0FBbkRHLE9BQU9DLFNBQThCSix5QkFBYyxDQUE1Q0ksUUFBUUMsVUFBc0JMLHlCQUFjLENBQXBDSyxTQUFTQyxXQUFhTix5QkFBYyxDQUEzQk0sVUFDM0NDLDJCQUF3REMsZ0NBQWlCLENBQXpFRCwwQkFBMEJFLDRCQUE4QkQsZ0NBQWlCLENBQS9DQztBQUVuQixJQUFBLEFBQU1mLCtCQUFOO2FBQU1BLGVBQ1BnQixJQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLHlCQUF5QjtnQ0FEL0cxQjtRQUVqQixJQUFJLENBQUNnQixHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFD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