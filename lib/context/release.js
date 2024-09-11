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
var florenceLexerFromCombinedCustomGrammar = _occamcustomgrammars.lexersUtilities.florenceLexerFromCombinedCustomGrammar, florenceParserFromCombinedCustomGrammar = _occamcustomgrammars.parsersUtilities.florenceParserFromCombinedCustomGrammar;
var ReleaseContext = /*#__PURE__*/ function() {
    function ReleaseContext(log1, json, name, entries, lexer, parser, verified, fileContexts, customGrammar, loggingDisabled, dependencyReleaseContexts) {
        _class_call_check(this, ReleaseContext);
        this.log = log1;
        this.json = json;
        this.name = name;
        this.entries = entries;
        this.lexer = lexer;
        this.parser = parser;
        this.verified = verified;
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
            key: "getJSON",
            value: function getJSON() {
                return this.json;
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
            key: "setJSON",
            value: function setJSON(json) {
                this.json = json;
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
                    var matches = type.matchTypeName(typeName);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return type;
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
            key: "isInitialised",
            value: function isInitialised() {
                var initialised = this.dependencyReleaseContexts !== null; ///
                return initialised;
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
            key: "verify",
            value: function verify(releaseContexts) {
                var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts), florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar), florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar);
                this.lexer = florenceLexer; ///
                this.parser = florenceParser; ///
                this.dependencyReleaseContexts = (0, _array.tail)(releaseContexts);
                if (this.json !== null) {
                    var releaseContext = this;
                    releaseContext.disableLogging();
                    this.fileContexts = fileContextsFromJSON(this.json, releaseContext);
                    verifyFileContexts(this.fileContexts, releaseContext);
                    releaseContext.enableLogging();
                    this.verified = true;
                }
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
            key: "fromLogJSONNameAndEntries",
            value: function fromLogJSONNameAndEntries(log1, json, name, entries) {
                var lexer = null, parser = null, verified = false, fileContexts = [], customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), loggingDisabled = false, dependencyReleaseContexts = null, releaseContext = new ReleaseContext(log1, json, name, entries, lexer, parser, verified, fileContexts, customGrammar, loggingDisabled, dependencyReleaseContexts);
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
    fileContexts = _to_consumable_array(fileContexts);
    for(;;){
        var _ret = _loop();
        if (_ret === "break") break;
    }
}
function fileContextsFromJSON(json, releaseContext) {
    var fileContextsJSON = json, fileContexts = fileContextsJSON.map(function(fileContextJSON) {
        var _$json = fileContextJSON, fileContext = _file.default.fromJSONAndReleaseContext(_$json, releaseContext);
        return fileContext;
    });
    return fileContexts;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuL2ZpbGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0YWlsLCBwdXNoLCBsZWZ0RGlmZmVyZW5jZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcblxuY29uc3QgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBqc29uLCBuYW1lLCBlbnRyaWVzLCBsZXhlciwgcGFyc2VyLCB2ZXJpZmllZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBsb2dnaW5nRGlzYWJsZWQsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy5sb2dnaW5nRGlzYWJsZWQgPSBsb2dnaW5nRGlzYWJsZWQ7XG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gbG9nO1xuICB9XG5cbiAgZ2V0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgaXNWZXJpZmllZCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJpZmllZDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBpc0xvZ2dpbmdEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dnaW5nRGlzYWJsZWQ7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBzZXRMb2cobG9nKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gIH1cblxuICBzZXRKU09OKGpzb24pIHtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldEVudHJpZXMoZW50cmllcykge1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBzZXRMZXhlcihsZXhlcikge1xuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgfVxuXG4gIHNldFBhcnNlcihwYXJzZXIpIHtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIHNldFZlcmlmaWVkKHZlcmlmaWVkKSB7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICB9XG5cbiAgc2V0RmlsZUNvbnRleHRzKGZpbGVDb250ZXh0cykge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgc2V0Q3VzdG9tR3JhbW1hcihjdXN0b21HcmFtbWFyKSB7XG4gICAgdGhpcy5jdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHNldExvZ2dpbmdEaXNhYmxlZChsb2dnaW5nRGlzYWJsZWQpIHtcbiAgICB0aGlzLmxvZ2dpbmdEaXNhYmxlZCA9IGxvZ2dpbmdEaXNhYmxlZDtcbiAgfVxuXG4gIHNldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgZmlsZUNvbnRleHRMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUaGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgZmlsZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhTGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgZmlsZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbmplY3R1cmVzID0gZmlsZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCBmaWxlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIHR5cGVzLnB1c2gob2JqZWN0VHlwZSk7XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzUmVsZWFzZWQoKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSAodGhpcy5qc29uICE9PSBudWxsKTtcblxuICAgIHJldHVybiByZWxlYXNlZDtcbiAgfVxuXG4gIGlzSW5pdGlhbGlzZWQoKSB7XG4gICAgY29uc3QgaW5pdGlhbGlzZWQgPSAodGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzICE9PSBudWxsKTsgIC8vL1xuXG4gICAgcmV0dXJuIGluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0UmVsZWFzZU5hbWUoKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgIHJlbGVhc2VOYW1lID0gbmFtZTsgLy8vXG5cbiAgICByZXR1cm4gcmVsZWFzZU5hbWU7XG4gIH1cblxuICBnZXRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZShmaWxlUGF0aCk7IH1cblxuICBnZXRWZXJzaW9uKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldFZlcnNpb24oKTsgfVxuXG4gIGdldEZpbGVQYXRocygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlUGF0aHMoKTsgfVxuXG4gIGdldERlcGVuZGVuY2llcygpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXREZXBlbmRlbmNpZXMoKTsgfVxuXG4gIG1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKSB7IHJldHVybiB0aGlzLmVudHJpZXMubWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pOyB9XG5cbiAgZGlzYWJsZUxvZ2dpbmcoKSB7XG4gICAgY29uc3QgbG9nZ2luZ0Rpc2FibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuc2V0TG9nZ2luZ0Rpc2FibGVkKGxvZ2dpbmdEaXNhYmxlZCk7XG4gIH1cblxuICBlbmFibGVMb2dnaW5nKCkge1xuICAgIGNvbnN0IGxvZ2dpbmdEaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zZXRMb2dnaW5nRGlzYWJsZWQobG9nZ2luZ0Rpc2FibGVkKTtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZy50cmFjZShtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZy5kZWJ1ZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmxvZ2dpbmdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nLmluZm8obWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZy53YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmxvZ2dpbmdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nLmVycm9yKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgZmF0YWwobWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkge1xuICAgIGlmICh0aGlzLmxvZ2dpbmdEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9nLmZhdGFsKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgdmVyaWZ5KHJlbGVhc2VDb250ZXh0cykge1xuICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHRzKSxcbiAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgdGhpcy5sZXhlciA9IGZsb3JlbmNlTGV4ZXI7IC8vL1xuXG4gICAgdGhpcy5wYXJzZXIgPSBmbG9yZW5jZVBhcnNlcjsgLy8vXG5cbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0YWlsKHJlbGVhc2VDb250ZXh0cylcblxuICAgIGlmICh0aGlzLmpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpcztcblxuICAgICAgcmVsZWFzZUNvbnRleHQuZGlzYWJsZUxvZ2dpbmcoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHNGcm9tSlNPTih0aGlzLmpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgdmVyaWZ5RmlsZUNvbnRleHRzKHRoaXMuZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0LmVuYWJsZUxvZ2dpbmcoKTtcblxuICAgICAgdGhpcy52ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmZpbGVDb250ZXh0cy5tYXAoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ0pTT05OYW1lQW5kRW50cmllcyhsb2csIGpzb24sIG5hbWUsIGVudHJpZXMpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGwsXG4gICAgICAgICAgcGFyc2VyID0gbnVsbCxcbiAgICAgICAgICB2ZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICAgIGZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpLFxuICAgICAgICAgIGxvZ2dpbmdEaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IFJlbGVhc2VDb250ZXh0KGxvZywganNvbiwgbmFtZSwgZW50cmllcywgbGV4ZXIsIHBhcnNlciwgdmVyaWZpZWQsIGZpbGVDb250ZXh0cywgY3VzdG9tR3JhbW1hciwgbG9nZ2luZ0Rpc2FibGVkLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKTtcblxuICAgIHJldHVybiByZWxlYXNlQ29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2ZXJpZnlGaWxlQ29udGV4dHMoZmlsZUNvbnRleHRzLCByZWxlYXNlQ29udGV4dCkge1xuICBmaWxlQ29udGV4dHMgPSBbICAvLy9cbiAgICAuLi5maWxlQ29udGV4dHNcbiAgXTtcblxuICBmb3IgKDs7KSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHRzTGVuZ3RoID0gZmlsZUNvbnRleHRzLmxlbmd0aDtcblxuICAgIGlmIChmaWxlQ29udGV4dHNMZW5ndGggPT09IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmaWVkRmlsZUNvbnRleHRzID0gW107XG5cbiAgICBmaWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkID0gZmlsZUNvbnRleHQudmVyaWZ5KHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkRmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIHZlcmlmaWVkRmlsZUNvbnRleHRzLnB1c2godmVyaWZpZWRGaWxlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0c0xlbmd0aCA9IHZlcmlmaWVkRmlsZUNvbnRleHRzLmxlbmd0aCxcbiAgICAgICAgICBmaWxlVmVyaWZpZWQgPSAodmVyaWZpZWRGaWxlQ29udGV4dHNMZW5ndGggPiAwKTtcblxuICAgIGlmICghZmlsZVZlcmlmaWVkKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZWZ0RGlmZmVyZW5jZShmaWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0ganNvbiwgLy8vXG4gICAgICAgIGZpbGVDb250ZXh0cyA9IGZpbGVDb250ZXh0c0pTT04ubWFwKChmaWxlQ29udGV4dEpTT04pID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gZmlsZUNvbnRleHRKU09OLCAvLy9cbiAgICAgICAgICAgICAgICBmaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21KU09OQW5kUmVsZWFzZUNvbnRleHQoanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZmlsZUNvbnRleHRzO1xufVxuIl0sIm5hbWVzIjpbIlJlbGVhc2VDb250ZXh0IiwiZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwibG9nIiwianNvbiIsIm5hbWUiLCJlbnRyaWVzIiwibGV4ZXIiLCJwYXJzZXIiLCJ2ZXJpZmllZCIsImZpbGVDb250ZXh0cyIsImN1c3RvbUdyYW1tYXIiLCJsb2dnaW5nRGlzYWJsZWQiLCJkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZ2V0TG9nIiwiZ2V0SlNPTiIsImdldE5hbWUiLCJnZXRFbnRyaWVzIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJpc1ZlcmlmaWVkIiwiZ2V0RmlsZUNvbnRleHRzIiwiZ2V0Q3VzdG9tR3JhbW1hciIsImlzTG9nZ2luZ0Rpc2FibGVkIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsInNldExvZyIsInNldEpTT04iLCJzZXROYW1lIiwic2V0RW50cmllcyIsInNldExleGVyIiwic2V0UGFyc2VyIiwic2V0VmVyaWZpZWQiLCJzZXRGaWxlQ29udGV4dHMiLCJzZXRDdXN0b21HcmFtbWFyIiwic2V0TG9nZ2luZ0Rpc2FibGVkIiwic2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExhYmVscyIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJsYWJlbHMiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0TGFiZWxzIiwicHVzaCIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImZpbGVDb250ZXh0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJmaWxlQ29udGV4dENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiYWRkRmlsZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm9iamVjdFR5cGUiLCJ0eXBlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwiaXNSZWxlYXNlZCIsInJlbGVhc2VkIiwiaXNJbml0aWFsaXNlZCIsImluaXRpYWxpc2VkIiwiZ2V0UmVsZWFzZU5hbWUiLCJyZWxlYXNlTmFtZSIsImdldEZpbGUiLCJmaWxlUGF0aCIsImdldFZlcnNpb24iLCJnZXRGaWxlUGF0aHMiLCJnZXREZXBlbmRlbmNpZXMiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwiZGlzYWJsZUxvZ2dpbmciLCJlbmFibGVMb2dnaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwibm9kZSIsInRva2VucyIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwidmVyaWZ5IiwicmVsZWFzZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsImZsb3JlbmNlUGFyc2VyIiwiZmxvcmVuY2VMZXhlciIsInRhaWwiLCJmaWxlQ29udGV4dHNGcm9tSlNPTiIsInZlcmlmeUZpbGVDb250ZXh0cyIsInRvSlNPTiIsImZpbGVDb250ZXh0c0pTT04iLCJtYXAiLCJmaWxlQ29udGV4dEpTT04iLCJmcm9tTG9nSlNPTk5hbWVBbmRFbnRyaWVzIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyIsImZpbGVDb250ZXh0c0xlbmd0aCIsImxlbmd0aCIsInZlcmlmaWVkRmlsZUNvbnRleHRzIiwidmVyaWZpZWRGaWxlQ29udGV4dCIsInZlcmlmaWVkRmlsZUNvbnRleHRzTGVuZ3RoIiwiZmlsZVZlcmlmaWVkIiwibGVmdERpZmZlcmVuY2UiLCJGaWxlQ29udGV4dCIsImZyb21KU09OQW5kUmVsZWFzZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7O21DQVg2QjsyREFFMUI7b0JBRUc7cUJBQ2dCOzZCQUMrQzs7Ozs7Ozs7Ozs7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