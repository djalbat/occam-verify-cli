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
                var file = this.entries.getFile(filePath);
                return file;
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
                (0, _array.clear)(this.fileContexts);
                released ? fileContextsFromJSONAndEntries(this.json, this.entries, this.fileContexts, releaseContext) : fileContextsFromEntries(this.entries, this.fileContexts, releaseContext);
                this.initialised = true;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var verifiedFileContexts = [], fileContextsVerified = verifyFileContexts(this.fileContexts, verifiedFileContexts);
                if (fileContextsVerified) {
                    this.fileContexts = verifiedFileContexts; ///
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
            key: "fromLogNameJSONAndEntries",
            value: function fromLogNameJSONAndEntries(log1, name, json, entries) {
                var lexer = null, parser = null, verified = false, initialised = false, fileContexts = [], customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), dependencyReleaseContexts = null, releaseContext = new ReleaseContext(log1, name, json, entries, lexer, parser, verified, initialised, fileContexts, customGrammar, dependencyReleaseContexts);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();
function fileContextsFromJSONAndEntries(json, entries, fileContexts, releaseContext) {
    var fileContextsJSON = json; ///
    fileContextsJSON.forEach(function(fileContextJSON) {
        var filePath = fileContextJSON.filePath, file = entries.getFile(filePath), fileContext = _file.default.fromFile(file, releaseContext);
        fileContext.initialise(fileContextJSON);
        fileContexts.push(fileContext);
    });
}
function fileContextsFromEntries(entries, fileContexts, releaseContext) {
    entries.forEachFile(function(file) {
        var filePath = file.getPath(), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
        if (filePathNominalFilePath) {
            var fileContext = _file.default.fromFile(file, releaseContext);
            fileContexts.push(fileContext);
        }
    });
}
function verifyFileContexts(fileContexts, verifiedFileContexts) {
    var _loop = function() {
        var fileContextsLength = fileContexts.length;
        if (fileContextsLength === 0) {
            return "break";
        }
        var fileContextsVerified = false;
        fileContexts.forEach(function(fileContext) {
            var fileContextVerified = verifyFileContext(fileContext);
            if (fileContextVerified) {
                var verifiedFileContext = fileContext; ///
                verifiedFileContexts.push(verifiedFileContext);
                fileContextsVerified = true;
            }
        });
        if (!fileContextsVerified) {
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
function verifyFileContext(fileContext) {
    var fileContextVerified = false;
    var tokens = fileContext.getTokens();
    if (tokens === null) {
        var filePath = fileContext.getFilePath(), file = fileContext.findFile(filePath), lexer = fileContext.getLexer(), parser = fileContext.getParser(), content = file.getContent(), tokens1 = lexer.tokenise(content), node = parser.parse(tokens1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlQ29udGV4dCBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgdG9wTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvdG9wTGV2ZWxcIjtcblxuaW1wb3J0IHsgZmlsZVBhdGhVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZW50aXRpZXNcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0YWlsLCBwdXNoLCBjbGVhciwgbGVmdERpZmZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzLCBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jdXN0b21HcmFtbWFyXCI7XG5cbmNvbnN0IHsgaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aCB9ID0gZmlsZVBhdGhVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzLCBsZXhlciwgcGFyc2VyLCB2ZXJpZmllZCwgaW5pdGlhbGlzZWQsIGZpbGVDb250ZXh0cywgY3VzdG9tR3JhbW1hciwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMubG9nID0gbG9nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5qc29uID0ganNvbjtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLnZlcmlmaWVkID0gdmVyaWZpZWQ7XG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IGluaXRpYWxpc2VkO1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gbG9nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgaXNWZXJpZmllZCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJpZmllZDtcbiAgfVxuXG4gIGlzSW5pdGlhbGlzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbGlzZWQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0Q3VzdG9tR3JhbW1hcigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9ICh0aGlzLmpzb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VkO1xuICB9XG5cbiAgZmluZEZpbGUoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5lbnRyaWVzLmdldEZpbGUoZmlsZVBhdGgpO1xuXG4gICAgcmV0dXJuIGZpbGU7XG4gIH1cblxuICBmaW5kRmlsZUNvbnRleHQoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXMuZmlsZUNvbnRleHRzLmZpbmQoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dEZpbGVQYXRoID0gZmlsZUNvbnRleHQuZ2V0RmlsZVBhdGgoKTtcblxuICAgICAgaWYgKGZpbGVDb250ZXh0RmlsZVBhdGggPT09IGZpbGVQYXRoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGFiZWxzID0gZmlsZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGZpbGVDb250ZXh0TGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dExhYmVscyA9IHJlbGVhc2VDb250ZXh0LmdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUeXBlcyA9IGZpbGVDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0eXBlcywgZmlsZUNvbnRleHRUeXBlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHJlbGVhc2VDb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFJ1bGVzID0gZmlsZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCBmaWxlQ29udGV4dFJ1bGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFJ1bGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRBeGlvbXMgPSBmaWxlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgZmlsZUNvbnRleHRBeGlvbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0QXhpb21zID0gcmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsZW1tYXMsIGZpbGVDb250ZXh0TGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIGZpbGVDb250ZXh0VGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSByZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YUxlbW1hcyA9IGZpbGVDb250ZXh0LmdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIGZpbGVDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25qZWN0dXJlcyA9IGZpbGVDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgZmlsZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSBmaWxlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5maWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0UmVsZWFzZU5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZTsgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZU5hbWU7XG4gIH1cblxuICBnZXRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZShmaWxlUGF0aCk7IH1cblxuICBnZXRWZXJzaW9uKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldFZlcnNpb24oKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXREZXBlbmRlbmNpZXMoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLmVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pOyB9XG5cbiAgdHJhY2UobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLnRyYWNlKG1lc3NhZ2UsIGZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCkgeyB0aGlzLmxvZy5kZWJ1ZyhtZXNzYWdlLCBmaWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIGZpbGVQYXRoID0gbnVsbCkgeyB0aGlzLmxvZy5pbmZvKG1lc3NhZ2UsIGZpbGVQYXRoKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLndhcm5pbmcobWVzc2FnZSwgZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmVycm9yKG1lc3NhZ2UsIGZpbGVQYXRoKTsgfVxuXG4gIGluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzKSB7XG4gICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dHMpLFxuICAgICAgICAgIG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHRoaXMsICAvLy9cbiAgICAgICAgICByZWxlYXNlZCA9IHRoaXMuaXNSZWxlYXNlZCgpO1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGFpbChyZWxlYXNlQ29udGV4dHMpOyAvLy9cblxuICAgIHRoaXMubGV4ZXIgPSBub21pbmFsTGV4ZXI7IC8vL1xuXG4gICAgdGhpcy5wYXJzZXIgPSBub21pbmFsUGFyc2VyOyAvLy9cblxuICAgIGNsZWFyKHRoaXMuZmlsZUNvbnRleHRzKTtcblxuICAgIHJlbGVhc2VkID9cbiAgICAgIGZpbGVDb250ZXh0c0Zyb21KU09OQW5kRW50cmllcyh0aGlzLmpzb24sIHRoaXMuZW50cmllcywgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KSA6XG4gICAgICAgIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzKHRoaXMuZW50cmllcywgdGhpcy5maWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dHNWZXJpZmllZCA9IHZlcmlmeUZpbGVDb250ZXh0cyh0aGlzLmZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpO1xuXG4gICAgaWYgKGZpbGVDb250ZXh0c1ZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0cyA9IHZlcmlmaWVkRmlsZUNvbnRleHRzOyAvLy9cblxuICAgICAgdGhpcy52ZXJpZmllZCA9IHRydWU7XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IHRoaXMuZmlsZUNvbnRleHRzLm1hcCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0SlNPTiA9IGZpbGVDb250ZXh0LnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsZUNvbnRleHRKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dHNKU09OOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUpTT05BbmRFbnRyaWVzKGxvZywgbmFtZSwganNvbiwgZW50cmllcykge1xuICAgIGNvbnN0IGxleGVyID0gbnVsbCxcbiAgICAgICAgICBwYXJzZXIgPSBudWxsLFxuICAgICAgICAgIHZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tSlNPTkFuZEVudHJpZXMoanNvbiwgZW50cmllcywgZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0ganNvbjsgIC8vL1xuXG4gIGZpbGVDb250ZXh0c0pTT04uZm9yRWFjaCgoZmlsZUNvbnRleHRKU09OKSA9PiB7XG4gICAgY29uc3QgeyBmaWxlUGF0aCB9ID0gZmlsZUNvbnRleHRKU09OLFxuICAgICAgICAgIGZpbGUgPSBlbnRyaWVzLmdldEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgZmlsZUNvbnRleHQuaW5pdGlhbGlzZShmaWxlQ29udGV4dEpTT04pO1xuXG4gICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsZUNvbnRleHRzRnJvbUVudHJpZXMoZW50cmllcywgZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBlbnRyaWVzLmZvckVhY2hGaWxlKChmaWxlKSA9PiB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCA9IGlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUZpbGVDb250ZXh0cyhmaWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzKSB7XG4gIGxldCBmaWxlQ29udGV4dHNWZXJpZmllZDtcblxuICBmaWxlQ29udGV4dHMgPSBbICAvLy9cbiAgICAuLi5maWxlQ29udGV4dHNcbiAgXTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzTGVuZ3RoID0gZmlsZUNvbnRleHRzLmxlbmd0aDtcblxuICAgIGlmIChmaWxlQ29udGV4dHNMZW5ndGggPT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCBmaWxlQ29udGV4dHNWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dFZlcmlmaWVkID0gdmVyaWZ5RmlsZUNvbnRleHQoZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAoZmlsZUNvbnRleHRWZXJpZmllZCkge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7ICAvLy9cblxuICAgICAgICB2ZXJpZmllZEZpbGVDb250ZXh0cy5wdXNoKHZlcmlmaWVkRmlsZUNvbnRleHQpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0c1ZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghZmlsZUNvbnRleHRzVmVyaWZpZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxlZnREaWZmZXJlbmNlKGZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpO1xuICB9XG5cbiAgY29uc3QgZmlsZUNvbnRleHRzTGVuZ3RoID0gZmlsZUNvbnRleHRzLmxlbmd0aDtcblxuICBmaWxlQ29udGV4dHNWZXJpZmllZCA9IChmaWxlQ29udGV4dHNMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiBmaWxlQ29udGV4dHNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgbGV0IGZpbGVDb250ZXh0VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0b2tlbnMgPSBmaWxlQ29udGV4dC5nZXRUb2tlbnMoKTtcblxuICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGZpbGUgPSBmaWxlQ29udGV4dC5maW5kRmlsZShmaWxlUGF0aCksXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBmaWxlQ29udGV4dC5zZXRUb2tlbnModG9rZW5zKTtcblxuICAgIGZpbGVDb250ZXh0LnNldE5vZGUobm9kZSk7XG4gIH1cblxuICBjb25zdCBub2RlID0gZmlsZUNvbnRleHQuZ2V0Tm9kZSgpO1xuXG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgZmlsZUNvbnRleHQucmVzZXQoKTtcblxuICAgIGZpbGVDb250ZXh0VmVyaWZpZWQgPSB0b3BMZXZlbFZlcmlmaWVyLnZlcmlmeShub2RlLCBmaWxlQ29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZmlsZUNvbnRleHRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJSZWxlYXNlQ29udGV4dCIsImlzRmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJmaWxlUGF0aFV0aWxpdGllcyIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJsb2ciLCJuYW1lIiwianNvbiIsImVudHJpZXMiLCJsZXhlciIsInBhcnNlciIsInZlcmlmaWVkIiwiaW5pdGlhbGlzZWQiLCJmaWxlQ29udGV4dHMiLCJjdXN0b21HcmFtbWFyIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldE5hbWUiLCJnZXRKU09OIiwiZ2V0RW50cmllcyIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiaXNWZXJpZmllZCIsImlzSW5pdGlhbGlzZWQiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImlzUmVsZWFzZWQiLCJyZWxlYXNlZCIsImZpbmRGaWxlIiwiZmlsZVBhdGgiLCJmaWxlIiwiZ2V0RmlsZSIsImZpbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZmluZCIsImZpbGVDb250ZXh0RmlsZVBhdGgiLCJnZXRGaWxlUGF0aCIsImdldExhYmVscyIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJsYWJlbHMiLCJmb3JFYWNoIiwiaW5jbHVkZVJlbGVhc2UiLCJmaWxlQ29udGV4dExhYmVscyIsInB1c2giLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImZpbGVDb250ZXh0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImZpbGVDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJ0aGVvcmVtcyIsImZpbGVDb250ZXh0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJmaWxlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZmlsZUNvbnRleHRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwibWV0YXRoZW9yZW1zIiwiZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyIsImFkZEZpbGVDb250ZXh0IiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJvYmplY3RUeXBlIiwidHlwZSIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJnZXRSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsIm5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJ0YWlsIiwiY2xlYXIiLCJmaWxlQ29udGV4dHNGcm9tSlNPTkFuZEVudHJpZXMiLCJmaWxlQ29udGV4dHNGcm9tRW50cmllcyIsInZlcmlmeSIsInZlcmlmaWVkRmlsZUNvbnRleHRzIiwiZmlsZUNvbnRleHRzVmVyaWZpZWQiLCJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJ0b0pTT04iLCJmaWxlQ29udGV4dHNKU09OIiwibWFwIiwiZmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJGaWxlQ29udGV4dCIsImZyb21GaWxlIiwiZm9yRWFjaEZpbGUiLCJnZXRQYXRoIiwiZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJmaWxlQ29udGV4dHNMZW5ndGgiLCJsZW5ndGgiLCJmaWxlQ29udGV4dFZlcmlmaWVkIiwidmVyaWZ5RmlsZUNvbnRleHQiLCJ2ZXJpZmllZEZpbGVDb250ZXh0IiwibGVmdERpZmZlcmVuY2UiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwic2V0VG9rZW5zIiwic2V0Tm9kZSIsImdldE5vZGUiLCJyZXNldCIsInRvcExldmVsVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OzsyREFkRzsrREFDSzs2QkFFSzttQ0FDZ0I7b0JBRXZCO3FCQUN1Qjs2QkFDd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFGLElBQU0sQUFBRUMsNEJBQThCQyxnQ0FBaUIsQ0FBL0NELDJCQUNGLEFBQUVFLHdDQUEwQ0Msb0NBQWUsQ0FBekRELHVDQUNGLEFBQUVFLHlDQUEyQ0MscUNBQWdCLENBQTNERDtBQUVPLElBQUEsQUFBTUwsK0JBQU47YUFBTUEsZUFDUE8sSUFBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyx5QkFBeUI7Z0NBRC9HakI7UUFFakIsSUFBSSxDQUFDTyxHQUFHLEdBQUdBO1FBQ1gsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FB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