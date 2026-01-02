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
var _metaType = require("../element/metaType");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRmlsZUNvbnRleHQgYXMgRnVydGxlRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlXCI7XG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgZnJhbWVNZXRhVHlwZSwgcmVmZXJlbmNlTWV0YVR5cGUsIHN0YXRlbWVudE1ldGFUeXBlIH0gZnJvbSBcIi4uL2VsZW1lbnQvbWV0YVR5cGVcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcblxuY29uc3QgeyBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzLFxuICAgICAgeyB0YWlsLCBwdXNoLCBmaXJzdCwgY2xlYXIsIGZpbHRlciwgcmVzb2x2ZSwgY29tcHJlc3MgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgsIGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGggfSA9IGZpbGVQYXRoVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGxvZywgbmFtZSwganNvbiwgZW50cmllcywgbGV4ZXIsIHBhcnNlciwgdmVyaWZpZWQsIGluaXRpYWxpc2VkLCBmaWxlQ29udGV4dHMsIGN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuanNvbiA9IGpzb247XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyO1xuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIGxvZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuanNvbjtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGdldE1ldGFUeXBlcygpIHtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSBbXG4gICAgICBmcmFtZU1ldGFUeXBlLFxuICAgICAgcmVmZXJlbmNlTWV0YVR5cGUsXG4gICAgICBzdGF0ZW1lbnRNZXRhVHlwZVxuICAgIF07XG5cbiAgICByZXR1cm4gbWV0YVR5cGVzO1xuICB9XG5cbiAgaXNWZXJpZmllZCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJpZmllZDtcbiAgfVxuXG4gIGlzSW5pdGlhbGlzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGlzZWQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9ICh0aGlzLmpzb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VkO1xuICB9XG5cbiAgZmluZEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5maW5kRmlsZShmaWxlUGF0aCk7IH1cblxuICBmaW5kRmlsZUNvbnRleHQoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXMuZmlsZUNvbnRleHRzLmZpbmQoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dEZpbGVQYXRoID0gZmlsZUNvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgICAgaWYgKGZpbGVDb250ZXh0RmlsZVBhdGggPT09IGZpbGVQYXRoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyk7XG5cbiAgICAgIHR5cGVQcmVmaXggPSBmaXJzdFR5cGVQcmVmaXg7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGFiZWxzID0gZmlsZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGZpbGVDb250ZXh0TGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dExhYmVscyA9IHJlbGVhc2VDb250ZXh0LmdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsZW1tYXMsIGZpbGVDb250ZXh0TGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIGZpbGVDb250ZXh0VGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UHJvY2VkdXJlcyA9IGZpbGVDb250ZXh0LmdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIGZpbGVDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRQcm9jZWR1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocHJvY2VkdXJlcywgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhTGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgZmlsZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbmplY3R1cmVzID0gZmlsZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCBmaWxlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVQcmVmaXhlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVQcmVmaXhlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godHlwZVByZWZpeGVzLCBmaWxlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlUHJlZml4ZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlUHJlZml4ZXMsIHJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4ZXM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSBmaWxlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5maWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH1cblxuICBnZXRSZWxlYXNlTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICB0cmFjZShtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHsgdGhpcy5sb2cudHJhY2UobWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHsgdGhpcy5sb2cuZGVidWcobWVzc2FnZSwgZmlsZVBhdGgsIGxpbmVJbmRleCk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkgeyB0aGlzLmxvZy5pbmZvKG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwsIGxpbmVJbmRleCA9IG51bGwpIHsgdGhpcy5sb2cud2FybmluZyhtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCwgbGluZUluZGV4ID0gbnVsbCkgeyB0aGlzLmxvZy5lcnJvcihtZXNzYWdlLCBmaWxlUGF0aCwgbGluZUluZGV4KTsgfVxuXG4gIGluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzKSB7XG4gICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dHMpLFxuICAgICAgICAgIG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbExleGVyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsUGFyc2VyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJlbGVhc2VkID0gdGhpcy5pc1JlbGVhc2VkKCk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0YWlsKHJlbGVhc2VDb250ZXh0cyk7IC8vL1xuXG4gICAgdGhpcy5sZXhlciA9IG5vbWluYWxMZXhlcjsgLy8vXG5cbiAgICB0aGlzLnBhcnNlciA9IG5vbWluYWxQYXJzZXI7IC8vL1xuXG4gICAgY2xlYXIodGhpcy5maWxlQ29udGV4dHMpO1xuXG4gICAgcmVsZWFzZWQgP1xuICAgICAgZmlsZUNvbnRleHRzRnJvbUpTT04odGhpcy5qc29uLCB0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpIDpcbiAgICAgICAgZmlsZUNvbnRleHRzRnJvbUVudHJpZXModGhpcy5lbnRyaWVzLCB0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcygpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeGVzVmVyaWZ5ID0gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhlc1ZlcmlmeSkge1xuICAgICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0c1ZlcmlmeSA9IHZlcmlmeUZpbGVDb250ZXh0cyh0aGlzLmZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgaWYgKGZpbGVDb250ZXh0c1ZlcmlmeSkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0cyA9IHZlcmlmaWVkRmlsZUNvbnRleHRzOyAvLy9cblxuICAgICAgICB0aGlzLnZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmZpbGVDb250ZXh0cy5tYXAoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyhsb2csIG5hbWUsIGpzb24sIGVudHJpZXMpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGwsXG4gICAgICAgICAgcGFyc2VyID0gbnVsbCxcbiAgICAgICAgICB2ZXJpZmllcyA9IGZhbHNlLFxuICAgICAgICAgIGluaXRpYWxpc2VkID0gZmFsc2UsXG4gICAgICAgICAgZmlsZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyksXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IG51bGwsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSBuZXcgUmVsZWFzZUNvbnRleHQobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBsZXhlciwgcGFyc2VyLCB2ZXJpZmllcywgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY3VzdG9tR3JhbW1hciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmVyaWZ5VHlwZVByZWZpeGVzKHR5cGVQcmVmaXhlcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgbGV0IHR5cGVQcmVmaXhlc1ZlcmlmeSA9IHRydWU7XG5cbiAgY29uc3QgdHlwZVByZWZpeGVzTGVuZ3RoID0gdHlwZVByZWZpeGVzLmxlbmd0aCxcbiAgICAgICAgY29tcHJlc3NlZFR5cGVQcmVmaXhlcyA9IFsgIC8vL1xuICAgICAgICAgIC4uLnR5cGVQcmVmaXhlcyxcbiAgICAgICAgXTtcblxuICBjb21wcmVzcyhjb21wcmVzc2VkVHlwZVByZWZpeGVzLCAodHlwZVByZWZpeEEsIHR5cGVQcmVmaXhCKSA9PiB7XG4gICAgY29uc3QgdHlwZVByZWZpeEFOYW1lID0gdHlwZVByZWZpeEEuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhCTmFtZSA9IHR5cGVQcmVmaXhCLmdldE5hbWUoKTtcblxuICAgIGlmICh0eXBlUHJlZml4QU5hbWUgIT09IHR5cGVQcmVmaXhCTmFtZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCA9IGNvbXByZXNzZWRUeXBlUHJlZml4ZXMubGVuZ3RoO1xuXG4gIGlmICh0eXBlUHJlZml4ZXNMZW5ndGggPiBjb21wcmVzc1R5cGVQcmVmaXhlc0xlbmd0aCkge1xuICAgIGZpbHRlcihjb21wcmVzc2VkVHlwZVByZWZpeGVzLCAodHlwZVByZWZpeCkgPT4ge1xuICAgICAgY29uc3QgdHlwZVByZWZpeGVzSW5jbHVkZXNUeXBlUHJlZml4ID0gdHlwZVByZWZpeGVzLmluY2x1ZGVzKHR5cGVQcmVmaXgpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVmaXhlc0luY2x1ZGVzVHlwZVByZWZpeCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHR5cGVQcmVmaXhlcyksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IGZpcnN0VHlwZVByZWZpeCwgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHR5cGVQcmVmaXguZ2V0U3RyaW5nKCk7XG5cbiAgICByZWxlYXNlQ29udGV4dC5pbmZvKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4IGlzIGR1cGxpY2F0ZWQgYXQgbGVhc3Qgb25jZSwgcG9zc2libHkgYW1vbmcgb3RoZXJzLmApXG5cbiAgICB0eXBlUHJlZml4ZXNWZXJpZnkgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlUHJlZml4ZXNWZXJpZnk7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUZpbGVDb250ZXh0cyhmaWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzKSB7XG4gIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZShmaWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzLCAoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dFZlcmlmaWVzID0gZmlsZUNvbnRleHQudmVyaWZ5KCk7XG5cbiAgICAgICAgICBpZiAoZmlsZUNvbnRleHRWZXJpZmllcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsZUNvbnRleHRzVmVyaWZ5ID0gcmVzb2x2ZWQ7ICAvLy9cblxuICByZXR1cm4gZmlsZUNvbnRleHRzVmVyaWZ5O1xufVxuXG5mdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tSlNPTihqc29uLGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpIHtcbiAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IGpzb247ICAvLy9cblxuICBmaWxlQ29udGV4dHNKU09OLmZvckVhY2goKGZpbGVDb250ZXh0SlNPTikgPT4ge1xuICAgIGNvbnN0IHsgZmlsZVBhdGggfSA9IGZpbGVDb250ZXh0SlNPTixcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRKU09OLCAvLy9cbiAgICAgICAgICBmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoID0gaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoKGZpbGVQYXRoKSxcbiAgICAgICAgICBmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCA9IGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKGZpbGVQYXRoRnVydGxlRmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IGZ1cnRsZUZpbGVDb250ZXh0ID0gRnVydGxlRmlsZUNvbnRleHQuZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgICBmaWxlQ29udGV4dCA9IGZ1cnRsZUZpbGVDb250ZXh0OyAgLy8vXG5cbiAgICAgIGZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcbiAgICB9XG5cbiAgICBpZiAoZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tRW50cmllcyhlbnRyaWVzLCBmaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGVudHJpZXMuZm9yRWFjaEZpbGUoKGZpbGUpID0+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoRnVydGxlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoID0gaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAoZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZnVydGxlRmlsZUNvbnRleHQgPSBGdXJ0bGVGaWxlQ29udGV4dC5mcm9tRmlsZShmaWxlLCByZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgICBmaWxlQ29udGV4dCA9IGZ1cnRsZUZpbGVDb250ZXh0OyAgLy8vXG5cbiAgICAgIGZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJSZWxlYXNlQ29udGV4dCIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJ0YWlsIiwiYXJyYXlVdGlsaXRpZXMiLCJwdXNoIiwiZmlyc3QiLCJjbGVhciIsImZpbHRlciIsInJlc29sdmUiLCJjb21wcmVzcyIsImlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCIsImZpbGVQYXRoVXRpbGl0aWVzIiwiaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aCIsImxvZyIsIm5hbWUiLCJqc29uIiwiZW50cmllcyIsImxleGVyIiwicGFyc2VyIiwidmVyaWZpZWQiLCJpbml0aWFsaXNlZCIsImZpbGVDb250ZXh0cyIsImN1c3RvbUdyYW1tYXIiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZ2V0TG9nIiwiZ2V0TmFtZSIsImdldEpTT04iLCJnZXRFbnRyaWVzIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRNZXRhVHlwZXMiLCJtZXRhVHlwZXMiLCJmcmFtZU1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJzdGF0ZW1lbnRNZXRhVHlwZSIsImlzVmVyaWZpZWQiLCJpc0luaXRpYWxpc2VkIiwiZ2V0RmlsZUNvbnRleHRzIiwiZ2V0Q3VzdG9tR3JhbW1hciIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJpc1JlbGVhc2VkIiwicmVsZWFzZWQiLCJmaW5kRmlsZSIsImZpbGVQYXRoIiwiZmluZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJmaW5kIiwiZmlsZUNvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiZ2V0VHlwZVByZWZpeCIsInR5cGVQcmVmaXgiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZVByZWZpeGVzIiwiZ2V0VHlwZVByZWZpeGVzIiwidHlwZVByZWZpeGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUeXBlUHJlZml4IiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwiZm9yRWFjaCIsImluY2x1ZGVSZWxlYXNlIiwiZmlsZUNvbnRleHRMYWJlbHMiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImZpbGVDb250ZXh0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImZpbGVDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJ0aGVvcmVtcyIsImZpbGVDb250ZXh0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJmaWxlQ29udGV4dFByb2NlZHVyZXMiLCJyZWxlYXNlQ29udGV4dFByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImZpbGVDb250ZXh0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJmaWxlQ29udGV4dENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImZpbGVDb250ZXh0VHlwZVByZWZpeGVzIiwicmVsZWFzZUNvbnRleHRUeXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwibWV0YXRoZW9yZW1zIiwiZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyIsImFkZEZpbGVDb250ZXh0IiwiZ2V0UmVsZWFzZU5hbWUiLCJyZWxlYXNlTmFtZSIsImdldEZpbGUiLCJnZXRWZXJzaW9uIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGVwZW5kZW5jaWVzIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsInRyYWNlIiwibWVzc2FnZSIsImxpbmVJbmRleCIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dHMiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIiwibm9taW5hbExleGVyIiwiTm9taW5hbExleGVyIiwibm9taW5hbFBhcnNlciIsIk5vbWluYWxQYXJzZXIiLCJmaWxlQ29udGV4dHNGcm9tSlNPTiIsImZpbGVDb250ZXh0c0Zyb21FbnRyaWVzIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0eXBlUHJlZml4ZXNWZXJpZnkiLCJ2ZXJpZnlUeXBlUHJlZml4ZXMiLCJ2ZXJpZmllZEZpbGVDb250ZXh0cyIsImZpbGVDb250ZXh0c1ZlcmlmeSIsInZlcmlmeUZpbGVDb250ZXh0cyIsInRvSlNPTiIsImZpbGVDb250ZXh0c0pTT04iLCJtYXAiLCJmaWxlQ29udGV4dEpTT04iLCJmcm9tTG9nTmFtZUpTT05BbmRFbnRyaWVzIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsImNvbXByZXNzZWRUeXBlUHJlZml4ZXMiLCJ0eXBlUHJlZml4QSIsInR5cGVQcmVmaXhCIiwidHlwZVByZWZpeEFOYW1lIiwidHlwZVByZWZpeEJOYW1lIiwiY29tcHJlc3NUeXBlUHJlZml4ZXNMZW5ndGgiLCJ0eXBlUHJlZml4ZXNJbmNsdWRlc1R5cGVQcmVmaXgiLCJpbmNsdWRlcyIsInR5cGVQcmVmaXhTdHJpbmciLCJnZXRTdHJpbmciLCJyZXNvbHZlZCIsImZpbGVDb250ZXh0VmVyaWZpZXMiLCJmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoIiwiZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJmdXJ0bGVGaWxlQ29udGV4dCIsIkZ1cnRsZUZpbGVDb250ZXh0IiwiZnJvbUZpbGVQYXRoIiwiRmlsZUNvbnRleHQiLCJmb3JFYWNoRmlsZSIsImZpbGUiLCJnZXRQYXRoIiwiZnJvbUZpbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0JxQkE7Ozt5QkFsQlU7MkJBQ2tCOzZCQUVmO21DQUNnQjsyREFFMUI7NERBQ0M7NkRBQ0M7d0JBRTBDOzZCQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUYsSUFBTSxBQUFFQyx3Q0FBMENDLG9DQUFlLENBQXpERCx1Q0FDRixBQUFFRSx5Q0FBMkNDLHFDQUFnQixDQUEzREQsd0NBQ0FFLE9BQXdEQyx5QkFBYyxDQUF0RUQsTUFBTUUsT0FBa0RELHlCQUFjLENBQWhFQyxNQUFNQyxRQUE0Q0YseUJBQWMsQ0FBMURFLE9BQU9DLFFBQXFDSCx5QkFBYyxDQUFuREcsT0FBT0MsU0FBOEJKLHlCQUFjLENBQTVDSSxRQUFRQyxVQUFzQkwseUJBQWMsQ0FBcENLLFNBQVNDLFdBQWFOLHlCQUFjLENBQTNCTSxVQUMzQ0MsMkJBQXdEQyxnQ0FBaUIsQ0FBekVELDBCQUEwQkUsNEJBQThCRCxnQ0FBaUIsQ0FBL0NDO0FBRW5CLElBQUEsQUFBTWYsK0JBQU47YUFBTUEsZUFDUGdCLElBQUcsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMseUJBQXlCO2dDQUQvRzFCO1FBRWpCLElBQUksQ0FBQ2dCLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUND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