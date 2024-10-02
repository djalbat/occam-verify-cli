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
                this.fileContexts = released ? fileContextsFromJSONEntriesAndReleaseContext(this.json, this.entries, releaseContext) : fileContextsFromEntriesAndReleaseContext(this.entries, releaseContext);
                this.initialised = true;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var fileContextsVerified = verifyFileContexts(this.fileContexts);
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
                var lexer = null, parser = null, verified = false, initialised = false, fileContexts = null, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), dependencyReleaseContexts = null, releaseContext = new ReleaseContext(log1, name, json, entries, lexer, parser, verified, initialised, fileContexts, customGrammar, dependencyReleaseContexts);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();
function fileContextsFromJSONEntriesAndReleaseContext(json, entries, releaseContext) {
    var fileContexts = [];
    entries.forEachFile(function(file) {
        var filePath = file.getPath(), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
        if (filePathNominalFilePath) {
            var fileContext = _file.default.fromFileAndReleaseContext(file, releaseContext), filePath1 = fileContext.getFilePath();
            fileContexts.push(fileContext);
            var fileContextJSON = findFileContextJSON(json, filePath1), json = fileContextJSON; ///
            fileContext.initialise(json);
        }
    });
    return fileContexts;
}
function fileContextsFromEntriesAndReleaseContext(entries, releaseContext) {
    var fileContexts = [];
    entries.forEachFile(function(file) {
        var filePath = file.getPath(), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
        if (filePathNominalFilePath) {
            var fileContext = _file.default.fromFileAndReleaseContext(file, releaseContext);
            fileContexts.push(fileContext);
        }
    });
    return fileContexts;
}
function findFileContextJSON(json, filePath) {
    var fileContextsJSON = json, fileContextJSON = fileContextsJSON.find(function(fileContextJSON) {
        var fileContextFilePath = fileContextJSON.filePath;
        if (fileContextFilePath === filePath) {
            return true;
        }
    });
    return fileContextJSON;
}
function verifyFileContexts(fileContexts) {
    var _loop = function() {
        var fileContextsLength = fileContexts.length;
        if (fileContextsLength === 0) {
            return "break";
        }
        var verifiedFileContexts = [];
        fileContexts.forEach(function(fileContext) {
            var fileContextVerified = verifyFileContext(fileContext);
            if (fileContextVerified) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBGaWxlQ29udGV4dCBmcm9tIFwiLi9maWxlXCI7XG5pbXBvcnQgdG9wTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvdG9wTGV2ZWxcIjtcblxuaW1wb3J0IHsgZmlsZVBhdGhVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tZW50aXRpZXNcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0YWlsLCBwdXNoLCBsZWZ0RGlmZmVyZW5jZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcblxuY29uc3QgeyBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIH0gPSBmaWxlUGF0aFV0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gaW5pdGlhbGlzZWQ7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gICAgdGhpcy5jdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiBsb2c7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBpc1ZlcmlmaWVkKCkge1xuICAgIHJldHVybiB0aGlzLnZlcmlmaWVkO1xuICB9XG5cbiAgaXNJbml0aWFsaXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbml0aWFsaXNlZDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBzZXRMb2cobG9nKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gIH1cblxuICBzZXROYW1lKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc2V0RW50cmllcyhlbnRyaWVzKSB7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgc2V0VmVyaWZpZWQodmVyaWZpZWQpIHtcbiAgICB0aGlzLnZlcmlmaWVkID0gdmVyaWZpZWQ7XG4gIH1cblxuICBzZXRJbml0aWFsaXNlZChpbml0aWFsaXNlZCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkID0gaW5pdGlhbGlzZWQ7XG4gIH1cblxuICBzZXRGaWxlQ29udGV4dHMoZmlsZUNvbnRleHRzKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gIH1cblxuICBzZXRDdXN0b21HcmFtbWFyKGN1c3RvbUdyYW1tYXIpIHtcbiAgICB0aGlzLmN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyO1xuICB9XG5cbiAgc2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyhkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGZpbmRGaWxlQ29udGV4dChmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5maWxlQ29udGV4dHMuZmluZCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0RmlsZVBhdGggPSBmaWxlQ29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgICBpZiAoZmlsZUNvbnRleHRGaWxlUGF0aCA9PT0gZmlsZVBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBpc1JlbGVhc2VkKCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gKHRoaXMuanNvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVsZWFzZWQ7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgZmlsZUNvbnRleHRMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUaGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgZmlsZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhTGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgZmlsZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbmplY3R1cmVzID0gZmlsZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCBmaWxlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIHR5cGVzLnB1c2gob2JqZWN0VHlwZSk7XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRSZWxlYXNlTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICB0cmFjZShtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cudHJhY2UobWVzc2FnZSwgZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmRlYnVnKG1lc3NhZ2UsIGZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmluZm8obWVzc2FnZSwgZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cud2FybmluZyhtZXNzYWdlLCBmaWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cuZXJyb3IobWVzc2FnZSwgZmlsZVBhdGgpOyB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMpIHtcbiAgICBjb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyksXG4gICAgICAgICAgbm9taW5hbExleGVyID0gbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJlbGVhc2VkID0gdGhpcy5pc1JlbGVhc2VkKCk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0YWlsKHJlbGVhc2VDb250ZXh0cyk7IC8vL1xuXG4gICAgdGhpcy5sZXhlciA9IG5vbWluYWxMZXhlcjsgLy8vXG5cbiAgICB0aGlzLnBhcnNlciA9IG5vbWluYWxQYXJzZXI7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSByZWxlYXNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250ZXh0c0Zyb21KU09ORW50cmllc0FuZFJlbGVhc2VDb250ZXh0KHRoaXMuanNvbiwgdGhpcy5lbnRyaWVzLCByZWxlYXNlQ29udGV4dCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzQW5kUmVsZWFzZUNvbnRleHQodGhpcy5lbnRyaWVzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0c1ZlcmlmaWVkID0gdmVyaWZ5RmlsZUNvbnRleHRzKHRoaXMuZmlsZUNvbnRleHRzKTtcblxuICAgIGlmIChmaWxlQ29udGV4dHNWZXJpZmllZCkge1xuICAgICAgdGhpcy52ZXJpZmllZCA9IHRydWU7XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IHRoaXMuZmlsZUNvbnRleHRzLm1hcCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVDb250ZXh0SlNPTiA9IGZpbGVDb250ZXh0LnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlsZUNvbnRleHRKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSBmaWxlQ29udGV4dHNKU09OOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9nTmFtZUpTT05BbmRFbnRyaWVzKGxvZywgbmFtZSwganNvbiwgZW50cmllcykge1xuICAgIGNvbnN0IGxleGVyID0gbnVsbCxcbiAgICAgICAgICBwYXJzZXIgPSBudWxsLFxuICAgICAgICAgIHZlcmlmaWVkID0gZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbGlzZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IFJlbGVhc2VDb250ZXh0KGxvZywgbmFtZSwganNvbiwgZW50cmllcywgbGV4ZXIsIHBhcnNlciwgdmVyaWZpZWQsIGluaXRpYWxpc2VkLCBmaWxlQ29udGV4dHMsIGN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21KU09ORW50cmllc0FuZFJlbGVhc2VDb250ZXh0KGpzb24sIGVudHJpZXMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGZpbGVDb250ZXh0cyA9IFtdO1xuXG4gIGVudHJpZXMuZm9yRWFjaEZpbGUoKGZpbGUpID0+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoID0gaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAoZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGVBbmRSZWxlYXNlQ29udGV4dChmaWxlLCByZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgICBmaWxlUGF0aCA9IGZpbGVDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICAgIGZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcblxuICAgICAgY29uc3QgZmlsZUNvbnRleHRKU09OID0gZmluZEZpbGVDb250ZXh0SlNPTihqc29uLCBmaWxlUGF0aCksXG4gICAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRKU09OOyAvLy9cblxuICAgICAgZmlsZUNvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmaWxlQ29udGV4dHM7XG59XG5cbmZ1bmN0aW9uIGZpbGVDb250ZXh0c0Zyb21FbnRyaWVzQW5kUmVsZWFzZUNvbnRleHQoZW50cmllcywgcmVsZWFzZUNvbnRleHQpIHtcbiAgY29uc3QgZmlsZUNvbnRleHRzID0gW107XG5cbiAgZW50cmllcy5mb3JFYWNoRmlsZSgoZmlsZSkgPT4ge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZVBhdGhOb21pbmFsRmlsZVBhdGggPSBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmIChmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZUFuZFJlbGVhc2VDb250ZXh0KGZpbGUsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbGVDb250ZXh0cztcbn1cblxuZnVuY3Rpb24gZmluZEZpbGVDb250ZXh0SlNPTihqc29uLCBmaWxlUGF0aCkge1xuICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0ganNvbiwgIC8vL1xuICAgICAgICBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dHNKU09OLmZpbmQoKGZpbGVDb250ZXh0SlNPTikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZmlsZVBhdGg6IGZpbGVDb250ZXh0RmlsZVBhdGggfSA9IGZpbGVDb250ZXh0SlNPTjtcblxuICAgICAgICAgIGlmIChmaWxlQ29udGV4dEZpbGVQYXRoID09PSBmaWxlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gZmlsZUNvbnRleHRKU09OO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlGaWxlQ29udGV4dHMoZmlsZUNvbnRleHRzKSB7XG4gIGxldCBmaWxlQ29udGV4dHNWZXJpZmllZDtcblxuICBmaWxlQ29udGV4dHMgPSBbICAvLy9cbiAgICAuLi5maWxlQ29udGV4dHNcbiAgXTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzTGVuZ3RoID0gZmlsZUNvbnRleHRzLmxlbmd0aDtcblxuICAgIGlmIChmaWxlQ29udGV4dHNMZW5ndGggPT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmaWVkRmlsZUNvbnRleHRzID0gW107XG5cbiAgICBmaWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0VmVyaWZpZWQgPSB2ZXJpZnlGaWxlQ29udGV4dChmaWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChmaWxlQ29udGV4dFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkRmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIHZlcmlmaWVkRmlsZUNvbnRleHRzLnB1c2godmVyaWZpZWRGaWxlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0c0xlbmd0aCA9IHZlcmlmaWVkRmlsZUNvbnRleHRzLmxlbmd0aCxcbiAgICAgIGZpbGVWZXJpZmllZCA9ICh2ZXJpZmllZEZpbGVDb250ZXh0c0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKCFmaWxlVmVyaWZpZWQpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxlZnREaWZmZXJlbmNlKGZpbGVDb250ZXh0cywgdmVyaWZpZWRGaWxlQ29udGV4dHMpO1xuICB9XG5cbiAgY29uc3QgZmlsZUNvbnRleHRzTGVuZ3RoID0gZmlsZUNvbnRleHRzLmxlbmd0aDtcblxuICBmaWxlQ29udGV4dHNWZXJpZmllZCA9IChmaWxlQ29udGV4dHNMZW5ndGggPT09IDApO1xuXG4gIHJldHVybiBmaWxlQ29udGV4dHNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgbGV0IGZpbGVDb250ZXh0VmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0b2tlbnMgPSBmaWxlQ29udGV4dC5nZXRUb2tlbnMoKTtcblxuICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlQ29udGV4dC5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGZpbGUgPSBmaWxlQ29udGV4dC5nZXRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGZpbGVDb250ZXh0LnNldFRva2Vucyh0b2tlbnMpO1xuXG4gICAgZmlsZUNvbnRleHQuc2V0Tm9kZShub2RlKTtcbiAgfVxuXG4gIGNvbnN0IG5vZGUgPSBmaWxlQ29udGV4dC5nZXROb2RlKCk7XG5cbiAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICBmaWxlQ29udGV4dC5yZXNldCgpO1xuXG4gICAgZmlsZUNvbnRleHRWZXJpZmllZCA9IHRvcExldmVsVmVyaWZpZXIudmVyaWZ5KG5vZGUsIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBmaWxlQ29udGV4dFZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0IiwiaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aCIsImZpbGVQYXRoVXRpbGl0aWVzIiwibm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsIm5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsImxvZyIsIm5hbWUiLCJqc29uIiwiZW50cmllcyIsImxleGVyIiwicGFyc2VyIiwidmVyaWZpZWQiLCJpbml0aWFsaXNlZCIsImZpbGVDb250ZXh0cyIsImN1c3RvbUdyYW1tYXIiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZ2V0TG9nIiwiZ2V0TmFtZSIsImdldEpTT04iLCJnZXRFbnRyaWVzIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJpc1ZlcmlmaWVkIiwiaXNJbml0aWFsaXNlZCIsImdldEZpbGVDb250ZXh0cyIsImdldEN1c3RvbUdyYW1tYXIiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwic2V0TG9nIiwic2V0TmFtZSIsInNldEVudHJpZXMiLCJzZXRMZXhlciIsInNldFBhcnNlciIsInNldFZlcmlmaWVkIiwic2V0SW5pdGlhbGlzZWQiLCJzZXRGaWxlQ29udGV4dHMiLCJzZXRDdXN0b21HcmFtbWFyIiwic2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImZpbmRGaWxlQ29udGV4dCIsImZpbGVQYXRoIiwiZmlsZUNvbnRleHQiLCJmaW5kIiwiZmlsZUNvbnRleHRGaWxlUGF0aCIsImdldEZpbGVQYXRoIiwiaXNSZWxlYXNlZCIsInJlbGVhc2VkIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImxhYmVscyIsImZvckVhY2giLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0TGFiZWxzIiwicHVzaCIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImZpbGVDb250ZXh0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJmaWxlQ29udGV4dENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiYWRkRmlsZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm9iamVjdFR5cGUiLCJ0eXBlIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJnZXRGaWxlIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsIm5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJ0YWlsIiwiZmlsZUNvbnRleHRzRnJvbUpTT05FbnRyaWVzQW5kUmVsZWFzZUNvbnRleHQiLCJmaWxlQ29udGV4dHNGcm9tRW50cmllc0FuZFJlbGVhc2VDb250ZXh0IiwidmVyaWZ5IiwiZmlsZUNvbnRleHRzVmVyaWZpZWQiLCJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJ0b0pTT04iLCJmaWxlQ29udGV4dHNKU09OIiwibWFwIiwiZmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJmb3JFYWNoRmlsZSIsImZpbGUiLCJnZXRQYXRoIiwiZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJGaWxlQ29udGV4dCIsImZyb21GaWxlQW5kUmVsZWFzZUNvbnRleHQiLCJmaW5kRmlsZUNvbnRleHRKU09OIiwiZmlsZUNvbnRleHRzTGVuZ3RoIiwibGVuZ3RoIiwidmVyaWZpZWRGaWxlQ29udGV4dHMiLCJmaWxlQ29udGV4dFZlcmlmaWVkIiwidmVyaWZ5RmlsZUNvbnRleHQiLCJ2ZXJpZmllZEZpbGVDb250ZXh0IiwidmVyaWZpZWRGaWxlQ29udGV4dHNMZW5ndGgiLCJmaWxlVmVyaWZpZWQiLCJsZWZ0RGlmZmVyZW5jZSIsInRva2VucyIsImdldFRva2VucyIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJzZXRUb2tlbnMiLCJzZXROb2RlIiwiZ2V0Tm9kZSIsInJlc2V0IiwidG9wTGV2ZWxWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7OzJEQWRHOytEQUNLOzZCQUVLO21DQUNnQjtvQkFFdkI7cUJBQ2dCOzZCQUMrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUYsSUFBTSxBQUFFQyw0QkFBOEJDLGdDQUFpQixDQUEvQ0QsMkJBQ0YsQUFBRUUsd0NBQTBDQyxvQ0FBZSxDQUF6REQsdUNBQ0YsQUFBRUUseUNBQTJDQyxxQ0FBZ0IsQ0FBM0REO0FBRU8sSUFBQSxBQUFNTCwrQkFBTjthQUFNQSxlQUNQTyxJQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLHlCQUF5QjtnQ0FEL0dqQjtRQUVqQixJQUFJLENBQUNPLEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyx5QkFBeUIsR0FBR0E7O2tCQVpoQmpCOztZQWVuQmtCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPWDtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNB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