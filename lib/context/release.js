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
var _file = /*#__PURE__*/ _interop_require_default(require("./file"));
var _topLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/topLevel"));
var _occamentities = require("occam-entities");
var _occamcustomgrammars = require("occam-custom-grammars");
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
var isFilePathNominalFilePath = _occamentities.filePathUtilities.isFilePathNominalFilePath, nominalLexerFromCombinedCustomGrammar = _occamcustomgrammars.lexersUtilities.nominalLexerFromCombinedCustomGrammar, nominalParserFromCombinedCustomGrammar = _occamcustomgrammars.parsersUtilities.nominalParserFromCombinedCustomGrammar;
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(log1, name, json, entries, lexer, parser, verified, initialised, fileContexts, customGrammar, verifiedFileContexts, dependencyReleaseContexts) {
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
        this.verifiedFileContexts = verifiedFileContexts;
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
            key: "getVerifiedFileContexts",
            value: function getVerifiedFileContexts() {
                return this.verifiedFileContexts;
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
            key: "setDependencyReleaseContexts",
            value: function setDependencyReleaseContexts(dependencyReleaseContexts) {
                this.dependencyReleaseContexts = dependencyReleaseContexts;
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
            key: "isReleased",
            value: function isReleased() {
                var released = this.json !== null;
                return released;
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
            key: "trace",
            value: function trace(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.log.trace(message, filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.log.debug(message, filePath);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.log.info(message, filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.log.warning(message, filePath);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var filePath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.log.error(message, filePath);
            }
        },
        {
            key: "initialise",
            value: function initialise(releaseContexts) {
                var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts), nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar), releaseContext = this, released = this.isReleased();
                this.dependencyReleaseContexts = (0, _array.tail)(releaseContexts); ///
                this.lexer = nominalLexer; ///
                this.parser = nominalParser; ///
                released ? fileContextsFromJSONAndReleaseContext(this.json, this.fileContexts, releaseContext) : fileContextsFromEntriesAndReleaseContext(this.entries, this.fileContexts, releaseContext);
                this.initialised = true;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                (0, _array.clear)(this.verifiedFileContexts);
                var fileContextsVerified = verifyFileContexts(this.fileContexts, this.verifiedFileContexts);
                if (fileContextsVerified) {
                    this.verified = true;
                    verified = true;
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var verifiedFileContextsJSON = this.verifiedFileContexts.map(function(verifiedFileContext) {
                    var verifiedFileContextJSON = verifiedFileContext.toJSON();
                    return verifiedFileContextJSON;
                }), json = verifiedFileContextsJSON; ///
                return json;
            }
        }
    ], [
        {
            key: "fromLogNameJSONAndEntries",
            value: function fromLogNameJSONAndEntries(log1, name, json, entries) {
                var lexer = null, parser = null, verified = false, initialised = false, fileContexts = [], customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), verifiedFileContexts = [], dependencyReleaseContexts = null, releaseContext = new ReleaseContext(log1, name, json, entries, lexer, parser, verified, initialised, fileContexts, customGrammar, verifiedFileContexts, dependencyReleaseContexts);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();
function fileContextsFromJSONAndReleaseContext(json, fileContexts, releaseContext) {
    var fileContextsJSON = json; ///
    fileContextsJSON.forEach(function(fileContextJSON) {
        var _$json = fileContextJSON, fileContext = _file.default.fromJSONAndReleaseContext(_$json, releaseContext);
        fileContext.initialise(fileContextJSON);
        fileContexts.push(fileContext);
    });
}
function fileContextsFromEntriesAndReleaseContext(entries, fileContexts, releaseContext) {
    entries.forEachFile(function(file) {
        var filePath = file.getPath(), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
        if (filePathNominalFilePath) {
            var fileContext = _file.default.fromFileAndReleaseContext(file, releaseContext);
            fileContexts.push(fileContext);
        }
    });
    return fileContexts;
}
function verifyFileContexts(fileContexts, verifiedFileContexts) {
    var fileContextsVerified;
    fileContexts = _to_consumable_array(fileContexts);
    for(;;){
        var fileContextsLength = fileContexts.length;
        if (fileContextsLength === 0) {
            break;
        }
        var fileContextVerified = fileContexts.some(function(fileContext) {
            var fileContextVerified = verifyFileContext(fileContext);
            if (fileContextVerified) {
                var verifiedFileContext = fileContext; ///
                verifiedFileContexts.push(verifiedFileContext);
                return true;
            }
        });
        if (!fileContextVerified) {
            break;
        }
        (0, _array.leftDifference)(fileContexts, verifiedFileContexts);
    }
    var fileContextsLength1 = fileContexts.length;
    fileContextsVerified = fileContextsLength1 === 0;
    return fileContextsVerified;
}
function verifyFileContext(fileContext) {
    var fileContextVerified = false;
    var tokens = fileContext.getTokens();
    if (tokens === null) {
        var filePath = fileContext.getFilePath(), file = fileContext.getFile(filePath), lexer = fileContext.getLexer(), parser = fileContext.getParser(), content = file.getContent(), tokens1 = lexer.tokenise(content), node = parser.parse(tokens1);
        fileContext.setTokens(tokens1);
        fileContext.setNode(node);
    }
    var node1 = fileContext.getNode();
    if (node1 !== null) {
        fileContext.reset();
        fileContextVerified = _topLevel.default.verify(node1, fileContext);
    }
    return fileContextVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlQ29udGV4dCBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgdG9wTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvdG9wTGV2ZWxcIjtcblxuaW1wb3J0IHsgZmlsZVBhdGhVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZW50aXRpZXNcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0YWlsLCBwdXNoLCBjbGVhciwgbGVmdERpZmZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5cbmNvbnN0IHsgaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBsZXhlciwgcGFyc2VyLCB2ZXJpZmllZCwgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY3VzdG9tR3JhbW1hciwgdmVyaWZpZWRGaWxlQ29udGV4dHMsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuanNvbiA9IGpzb247XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgICB0aGlzLmN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyO1xuICAgIHRoaXMudmVyaWZpZWRGaWxlQ29udGV4dHMgPSB2ZXJpZmllZEZpbGVDb250ZXh0cztcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiBsb2c7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBpc1ZlcmlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLnZlcmlmaWVkO1xuICB9XG5cbiAgaXNJbml0aWFsaXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXNlZDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXRWZXJpZmllZEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJpZmllZEZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIHNldExvZyhsb2cpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgfVxuXG4gIHNldE5hbWUobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzZXRFbnRyaWVzKGVudHJpZXMpIHtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgc2V0TGV4ZXIobGV4ZXIpIHtcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gIH1cblxuICBzZXRQYXJzZXIocGFyc2VyKSB7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICBzZXRWZXJpZmllZCh2ZXJpZmllZCkge1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgfVxuXG4gIHNldEluaXRpYWxpc2VkKGluaXRpYWxpc2VkKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGlzZWQgPSBpbml0aWFsaXNlZDtcbiAgfVxuXG4gIHNldEZpbGVDb250ZXh0cyhmaWxlQ29udGV4dHMpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0cztcbiAgfVxuXG4gIHNldEN1c3RvbUdyYW1tYXIoY3VzdG9tR3JhbW1hcikge1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBzZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZmluZEZpbGVDb250ZXh0KGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLmZpbGVDb250ZXh0cy5maW5kKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHRGaWxlUGF0aCA9IGZpbGVDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICAgIGlmIChmaWxlQ29udGV4dEZpbGVQYXRoID09PSBmaWxlUGF0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGlzUmVsZWFzZWQoKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSAodGhpcy5qc29uICE9PSBudWxsKTtcblxuICAgIHJldHVybiByZWxlYXNlZDtcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExhYmVscyA9IGZpbGVDb250ZXh0LmdldExhYmVscyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBmaWxlQ29udGV4dExhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSByZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godHlwZXMsIGZpbGVDb250ZXh0VHlwZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRSdWxlcyA9IGZpbGVDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChydWxlcywgZmlsZUNvbnRleHRSdWxlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0QXhpb21zID0gZmlsZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChheGlvbXMsIGZpbGVDb250ZXh0QXhpb21zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExlbW1hcyA9IGZpbGVDb250ZXh0LmdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCBmaWxlQ29udGV4dExlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCBmaWxlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGFMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhTGVtbWFzLCBmaWxlQ29udGV4dE1ldGFMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uamVjdHVyZXMgPSBmaWxlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uamVjdHVyZXMsIGZpbGVDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb21iaW5hdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgZmlsZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCBmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBhZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgdHlwZXMucHVzaChvYmplY3RUeXBlKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldFJlbGVhc2VOYW1lKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHJlbGVhc2VOYW1lO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZ2V0VmVyc2lvbigpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRWZXJzaW9uKCk7IH1cblxuICBnZXRGaWxlUGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZVBhdGhzKCk7IH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikgeyByZXR1cm4gdGhpcy5lbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCkgeyB0aGlzLmxvZy50cmFjZShtZXNzYWdlLCBmaWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cuZGVidWcobWVzc2FnZSwgZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cuaW5mbyhtZXNzYWdlLCBmaWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCkgeyB0aGlzLmxvZy53YXJuaW5nKG1lc3NhZ2UsIGZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCkgeyB0aGlzLmxvZy5lcnJvcihtZXNzYWdlLCBmaWxlUGF0aCk7IH1cblxuICBpbml0aWFsaXNlKHJlbGVhc2VDb250ZXh0cykge1xuICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHRzKSxcbiAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZWQgPSB0aGlzLmlzUmVsZWFzZWQoKTtcblxuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRhaWwocmVsZWFzZUNvbnRleHRzKTsgLy8vXG5cbiAgICB0aGlzLmxleGVyID0gbm9taW5hbExleGVyOyAvLy9cblxuICAgIHRoaXMucGFyc2VyID0gbm9taW5hbFBhcnNlcjsgLy8vXG5cbiAgICByZWxlYXNlZCA/XG4gICAgICAgZmlsZUNvbnRleHRzRnJvbUpTT05BbmRSZWxlYXNlQ29udGV4dCh0aGlzLmpzb24sIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkgOlxuICAgICAgICAgZmlsZUNvbnRleHRzRnJvbUVudHJpZXNBbmRSZWxlYXNlQ29udGV4dCh0aGlzLmVudHJpZXMsIHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNsZWFyKHRoaXMudmVyaWZpZWRGaWxlQ29udGV4dHMpO1xuXG4gICAgY29uc3QgZmlsZUNvbnRleHRzVmVyaWZpZWQgPSB2ZXJpZnlGaWxlQ29udGV4dHModGhpcy5maWxlQ29udGV4dHMsIHRoaXMudmVyaWZpZWRGaWxlQ29udGV4dHMpO1xuXG4gICAgaWYgKGZpbGVDb250ZXh0c1ZlcmlmaWVkKSB7XG4gICAgICB0aGlzLnZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0c0pTT04gPSB0aGlzLnZlcmlmaWVkRmlsZUNvbnRleHRzLm1hcCgodmVyaWZpZWRGaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dEpTT04gPSB2ZXJpZmllZEZpbGVDb250ZXh0LnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRGaWxlQ29udGV4dEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHZlcmlmaWVkRmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyhsb2csIG5hbWUsIGpzb24sIGVudHJpZXMpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGwsXG4gICAgICAgICAgcGFyc2VyID0gbnVsbCxcbiAgICAgICAgICB2ZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICAgIGluaXRpYWxpc2VkID0gZmFsc2UsXG4gICAgICAgICAgZmlsZUNvbnRleHRzID0gW10sXG4gICAgICAgICAgY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMobmFtZSwgZW50cmllcyksXG4gICAgICAgICAgdmVyaWZpZWRGaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCB2ZXJpZmllZEZpbGVDb250ZXh0cywgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsZUNvbnRleHRzRnJvbUpTT05BbmRSZWxlYXNlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSBqc29uOyAgLy8vXG5cbiAgZmlsZUNvbnRleHRzSlNPTi5mb3JFYWNoKChmaWxlQ29udGV4dEpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZmlsZUNvbnRleHRKU09OLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUpTT05BbmRSZWxlYXNlQ29udGV4dChqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGZpbGVDb250ZXh0SlNPTik7XG5cbiAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tRW50cmllc0FuZFJlbGVhc2VDb250ZXh0KGVudHJpZXMsIGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpIHtcbiAgZW50cmllcy5mb3JFYWNoRmlsZSgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGhOb21pbmFsRmlsZVBhdGggPSBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmIChmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZUFuZFJlbGVhc2VDb250ZXh0KGZpbGUsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbGVDb250ZXh0cztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RmlsZUNvbnRleHRzKGZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpIHtcbiAgbGV0IGZpbGVDb250ZXh0c1ZlcmlmaWVkO1xuXG4gIGZpbGVDb250ZXh0cyA9IFsgIC8vL1xuICAgIC4uLmZpbGVDb250ZXh0c1xuICBdO1xuXG4gIGZvciAoOzspIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dHNMZW5ndGggPSBmaWxlQ29udGV4dHMubGVuZ3RoO1xuXG4gICAgaWYgKGZpbGVDb250ZXh0c0xlbmd0aCA9PT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZUNvbnRleHRWZXJpZmllZCA9IGZpbGVDb250ZXh0cy5zb21lKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHRWZXJpZmllZCA9IHZlcmlmeUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKGZpbGVDb250ZXh0VmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dCA9IGZpbGVDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgdmVyaWZpZWRGaWxlQ29udGV4dHMucHVzaCh2ZXJpZmllZEZpbGVDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghZmlsZUNvbnRleHRWZXJpZmllZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGVmdERpZmZlcmVuY2UoZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cyk7XG4gIH1cblxuICBjb25zdCBmaWxlQ29udGV4dHNMZW5ndGggPSBmaWxlQ29udGV4dHMubGVuZ3RoO1xuXG4gIGZpbGVDb250ZXh0c1ZlcmlmaWVkID0gKGZpbGVDb250ZXh0c0xlbmd0aCA9PT0gMCk7XG5cbiAgcmV0dXJuIGZpbGVDb250ZXh0c1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlGaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICBsZXQgZmlsZUNvbnRleHRWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHRva2VucyA9IGZpbGVDb250ZXh0LmdldFRva2VucygpO1xuXG4gIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGVDb250ZXh0LmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgZmlsZSA9IGZpbGVDb250ZXh0LmdldEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgZmlsZUNvbnRleHQuc2V0VG9rZW5zKHRva2Vucyk7XG5cbiAgICBmaWxlQ29udGV4dC5zZXROb2RlKG5vZGUpO1xuICB9XG5cbiAgY29uc3Qgbm9kZSA9IGZpbGVDb250ZXh0LmdldE5vZGUoKTtcblxuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGZpbGVDb250ZXh0LnJlc2V0KCk7XG5cbiAgICBmaWxlQ29udGV4dFZlcmlmaWVkID0gdG9wTGV2ZWxWZXJpZmllci52ZXJpZnkobm9kZSwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGZpbGVDb250ZXh0VmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwibG9nIiwibmFtZSIsImpzb24iLCJlbnRyaWVzIiwibGV4ZXIiLCJwYXJzZXIiLCJ2ZXJpZmllZCIsImluaXRpYWxpc2VkIiwiZmlsZUNvbnRleHRzIiwiY3VzdG9tR3JhbW1hciIsInZlcmlmaWVkRmlsZUNvbnRleHRzIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRKU09OIiwiZ2V0RW50cmllcyIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiaXNWZXJpZmllZCIsImlzSW5pdGlhbGlzZWQiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0VmVyaWZpZWRGaWxlQ29udGV4dHMiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwic2V0TG9nIiwic2V0TmFtZSIsInNldEVudHJpZXMiLCJzZXRMZXhlciIsInNldFBhcnNlciIsInNldFZlcmlmaWVkIiwic2V0SW5pdGlhbGlzZWQiLCJzZXRGaWxlQ29udGV4dHMiLCJzZXRDdXN0b21HcmFtbWFyIiwic2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImZpbmRGaWxlQ29udGV4dCIsImZpbGVQYXRoIiwiZmlsZUNvbnRleHQiLCJmaW5kIiwiZmlsZUNvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiaXNSZWxlYXNlZCIsInJlbGVhc2VkIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImxhYmVscyIsImZvckVhY2giLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0TGFiZWxzIiwicHVzaCIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImZpbGVDb250ZXh0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJmaWxlQ29udGV4dENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiYWRkRmlsZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm9iamVjdFR5cGUiLCJ0eXBlIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJnZXRGaWxlIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsIm5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJ0YWlsIiwiZmlsZUNvbnRleHRzRnJvbUpTT05BbmRSZWxlYXNlQ29udGV4dCIsImZpbGVDb250ZXh0c0Zyb21FbnRyaWVzQW5kUmVsZWFzZUNvbnRleHQiLCJ2ZXJpZnkiLCJjbGVhciIsImZpbGVDb250ZXh0c1ZlcmlmaWVkIiwidmVyaWZ5RmlsZUNvbnRleHRzIiwidG9KU09OIiwidmVyaWZpZWRGaWxlQ29udGV4dHNKU09OIiwibWFwIiwidmVyaWZpZWRGaWxlQ29udGV4dCIsInZlcmlmaWVkRmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJmaWxlQ29udGV4dHNKU09OIiwiZmlsZUNvbnRleHRKU09OIiwiRmlsZUNvbnRleHQiLCJmcm9tSlNPTkFuZFJlbGVhc2VDb250ZXh0IiwiZm9yRWFjaEZpbGUiLCJmaWxlIiwiZ2V0UGF0aCIsImZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwiZnJvbUZpbGVBbmRSZWxlYXNlQ29udGV4dCIsImZpbGVDb250ZXh0c0xlbmd0aCIsImxlbmd0aCIsImZpbGVDb250ZXh0VmVyaWZpZWQiLCJzb21lIiwidmVyaWZ5RmlsZUNvbnRleHQiLCJsZWZ0RGlmZmVyZW5jZSIsInRva2VucyIsImdldFRva2VucyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJzZXRUb2tlbnMiLCJzZXROb2RlIiwiZ2V0Tm9kZSIsInJlc2V0IiwidG9wTGV2ZWxWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7OzJEQWRHOytEQUNLOzZCQUVLO21DQUNnQjtvQkFFdkI7cUJBQ3VCOzZCQUN3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUYsSUFBTSxBQUFFQyw0QkFBOEJDLGdDQUFpQixDQUEvQ0QsMkJBQ0YsQUFBRUUsd0NBQTBDQyxvQ0FBZSxDQUF6REQsdUNBQ0YsQUFBRUUseUNBQTJDQyxxQ0FBZ0IsQ0FBM0REO0FBRU8sSUFBQSxBQUFNTCwrQkFBTjthQUFNQSxlQUNQTyxJQUFHLEVBQUVD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