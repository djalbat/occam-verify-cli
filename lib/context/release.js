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
    function ReleaseContext(log1, json, name, lexer, parser, entries, verified, fileContexts, customGrammar, loggingDisabled, dependencyReleaseContexts) {
        _class_call_check(this, ReleaseContext);
        this.log = log1;
        this.json = json;
        this.name = name;
        this.lexer = lexer;
        this.parser = parser;
        this.entries = entries;
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
            key: "setEntries",
            value: function setEntries(entries) {
                this.entries = entries;
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
                var lexer = null, parser = null, verified = false, fileContexts = [], customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), loggingDisabled = false, dependencyReleaseContexts = null, releaseContext = new ReleaseContext(log1, json, name, lexer, parser, entries, verified, fileContexts, customGrammar, loggingDisabled, dependencyReleaseContexts);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuL2ZpbGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0YWlsLCBwdXNoLCBsZWZ0RGlmZmVyZW5jZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcblxuY29uc3QgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBqc29uLCBuYW1lLCBsZXhlciwgcGFyc2VyLCBlbnRyaWVzLCB2ZXJpZmllZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBsb2dnaW5nRGlzYWJsZWQsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy5sb2dnaW5nRGlzYWJsZWQgPSBsb2dnaW5nRGlzYWJsZWQ7XG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gbG9nO1xuICB9XG5cbiAgZ2V0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgaXNWZXJpZmllZCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJpZmllZDtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBpc0xvZ2dpbmdEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dnaW5nRGlzYWJsZWQ7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBzZXRMb2cobG9nKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gIH1cblxuICBzZXRKU09OKGpzb24pIHtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICB9XG5cbiAgc2V0TmFtZShuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHNldExleGVyKGxleGVyKSB7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICB9XG5cbiAgc2V0UGFyc2VyKHBhcnNlcikge1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgc2V0RW50cmllcyhlbnRyaWVzKSB7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIHNldFZlcmlmaWVkKHZlcmlmaWVkKSB7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICB9XG5cbiAgc2V0RmlsZUNvbnRleHRzKGZpbGVDb250ZXh0cykge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgc2V0Q3VzdG9tR3JhbW1hcihjdXN0b21HcmFtbWFyKSB7XG4gICAgdGhpcy5jdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIHNldExvZ2dpbmdEaXNhYmxlZChsb2dnaW5nRGlzYWJsZWQpIHtcbiAgICB0aGlzLmxvZ2dpbmdEaXNhYmxlZCA9IGxvZ2dpbmdEaXNhYmxlZDtcbiAgfVxuXG4gIHNldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cykge1xuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgZmlsZUNvbnRleHRMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUaGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgZmlsZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhTGVtbWFzID0gZmlsZUNvbnRleHQuZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgZmlsZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbmplY3R1cmVzID0gZmlsZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCBmaWxlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMgPSBmaWxlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgYWRkRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIHR5cGVzLnB1c2gob2JqZWN0VHlwZSk7XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzUmVsZWFzZWQoKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSAodGhpcy5qc29uICE9PSBudWxsKTtcblxuICAgIHJldHVybiByZWxlYXNlZDtcbiAgfVxuXG4gIGdldFJlbGVhc2VOYW1lKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHJlbGVhc2VOYW1lO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZ2V0VmVyc2lvbigpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRWZXJzaW9uKCk7IH1cblxuICBnZXRGaWxlUGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZVBhdGhzKCk7IH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikgeyByZXR1cm4gdGhpcy5lbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTsgfVxuXG4gIGRpc2FibGVMb2dnaW5nKCkge1xuICAgIGNvbnN0IGxvZ2dpbmdEaXNhYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLnNldExvZ2dpbmdEaXNhYmxlZChsb2dnaW5nRGlzYWJsZWQpO1xuICB9XG5cbiAgZW5hYmxlTG9nZ2luZygpIHtcbiAgICBjb25zdCBsb2dnaW5nRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0TG9nZ2luZ0Rpc2FibGVkKGxvZ2dpbmdEaXNhYmxlZCk7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gICAgaWYgKHRoaXMubG9nZ2luZ0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2cudHJhY2UobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gICAgaWYgKHRoaXMubG9nZ2luZ0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2cuZGVidWcobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZy5pbmZvKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpO1xuICB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7XG4gICAgaWYgKHRoaXMubG9nZ2luZ0Rpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sb2cud2FybmluZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZy5lcnJvcihtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIGZhdGFsKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHtcbiAgICBpZiAodGhpcy5sb2dnaW5nRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvZy5mYXRhbChtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTtcbiAgfVxuXG4gIHZlcmlmeShyZWxlYXNlQ29udGV4dHMpIHtcbiAgICBjb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBmbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICAgIHRoaXMubGV4ZXIgPSBmbG9yZW5jZUxleGVyOyAvLy9cblxuICAgIHRoaXMucGFyc2VyID0gZmxvcmVuY2VQYXJzZXI7IC8vL1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGFpbChyZWxlYXNlQ29udGV4dHMpXG5cbiAgICBpZiAodGhpcy5qc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IHRoaXM7XG5cbiAgICAgIHJlbGVhc2VDb250ZXh0LmRpc2FibGVMb2dnaW5nKCk7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzRnJvbUpTT04odGhpcy5qc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmeUZpbGVDb250ZXh0cyh0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICByZWxlYXNlQ29udGV4dC5lbmFibGVMb2dnaW5nKCk7XG5cbiAgICAgIHRoaXMudmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0gdGhpcy5maWxlQ29udGV4dHMubWFwKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZUNvbnRleHRKU09OID0gZmlsZUNvbnRleHQudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWxlQ29udGV4dEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVDb250ZXh0c0pTT047ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dKU09OTmFtZUFuZEVudHJpZXMobG9nLCBqc29uLCBuYW1lLCBlbnRyaWVzKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsLFxuICAgICAgICAgIHBhcnNlciA9IG51bGwsXG4gICAgICAgICAgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBsb2dnaW5nRGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIGpzb24sIG5hbWUsIGxleGVyLCBwYXJzZXIsIGVudHJpZXMsIHZlcmlmaWVkLCBmaWxlQ29udGV4dHMsIGN1c3RvbUdyYW1tYXIsIGxvZ2dpbmdEaXNhYmxlZCwgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmVyaWZ5RmlsZUNvbnRleHRzKGZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpIHtcbiAgZmlsZUNvbnRleHRzID0gWyAgLy8vXG4gICAgLi4uZmlsZUNvbnRleHRzXG4gIF07XG5cbiAgZm9yICg7Oykge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0xlbmd0aCA9IGZpbGVDb250ZXh0cy5sZW5ndGg7XG5cbiAgICBpZiAoZmlsZUNvbnRleHRzTGVuZ3RoID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdO1xuXG4gICAgZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZCA9IGZpbGVDb250ZXh0LnZlcmlmeShyZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7ICAvLy9cblxuICAgICAgICB2ZXJpZmllZEZpbGVDb250ZXh0cy5wdXNoKHZlcmlmaWVkRmlsZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdmVyaWZpZWRGaWxlQ29udGV4dHNMZW5ndGggPSB2ZXJpZmllZEZpbGVDb250ZXh0cy5sZW5ndGgsXG4gICAgICAgICAgZmlsZVZlcmlmaWVkID0gKHZlcmlmaWVkRmlsZUNvbnRleHRzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoIWZpbGVWZXJpZmllZCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgbGVmdERpZmZlcmVuY2UoZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmlsZUNvbnRleHRzRnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgY29uc3QgZmlsZUNvbnRleHRzSlNPTiA9IGpzb24sIC8vL1xuICAgICAgICBmaWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHNKU09OLm1hcCgoZmlsZUNvbnRleHRKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IGZpbGVDb250ZXh0SlNPTiwgLy8vXG4gICAgICAgICAgICAgICAgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tSlNPTkFuZFJlbGVhc2VDb250ZXh0KGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGZpbGVDb250ZXh0cztcbn1cbiJdLCJuYW1lcyI6WyJSZWxlYXNlQ29udGV4dCIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsImxvZyIsImpzb24iLCJuYW1lIiwibGV4ZXIiLCJwYXJzZXIiLCJlbnRyaWVzIiwidmVyaWZpZWQiLCJmaWxlQ29udGV4dHMiLCJjdXN0b21HcmFtbWFyIiwibG9nZ2luZ0Rpc2FibGVkIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldEpTT04iLCJnZXROYW1lIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRFbnRyaWVzIiwiaXNWZXJpZmllZCIsImdldEZpbGVDb250ZXh0cyIsImdldEN1c3RvbUdyYW1tYXIiLCJpc0xvZ2dpbmdEaXNhYmxlZCIsImdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJzZXRMb2ciLCJzZXRKU09OIiwic2V0TmFtZSIsInNldExleGVyIiwic2V0UGFyc2VyIiwic2V0RW50cmllcyIsInNldFZlcmlmaWVkIiwic2V0RmlsZUNvbnRleHRzIiwic2V0Q3VzdG9tR3JhbW1hciIsInNldExvZ2dpbmdEaXNhYmxlZCIsInNldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwibGFiZWxzIiwiZm9yRWFjaCIsImZpbGVDb250ZXh0IiwiaW5jbHVkZVJlbGVhc2UiLCJmaWxlQ29udGV4dExhYmVscyIsInB1c2giLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImZpbGVDb250ZXh0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImZpbGVDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJ0aGVvcmVtcyIsImZpbGVDb250ZXh0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0TWV0YUxlbW1hcyIsIm1ldGFMZW1tYXMiLCJmaWxlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZmlsZUNvbnRleHRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwibWV0YXRoZW9yZW1zIiwiZmlsZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyIsImFkZEZpbGVDb250ZXh0IiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJvYmplY3RUeXBlIiwidHlwZSIsImZpbmQiLCJtYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImlzUmVsZWFzZWQiLCJyZWxlYXNlZCIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJnZXRGaWxlIiwiZmlsZVBhdGgiLCJnZXRWZXJzaW9uIiwiZ2V0RmlsZVBhdGhzIiwiZ2V0RGVwZW5kZW5jaWVzIiwibWF0Y2hTaG9ydGVuZWRWZXJzaW9uIiwic2hvcnRlbmVkVmVyc2lvbiIsImRpc2FibGVMb2dnaW5nIiwiZW5hYmxlTG9nZ2luZyIsInRyYWNlIiwibWVzc2FnZSIsIm5vZGUiLCJ0b2tlbnMiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsInZlcmlmeSIsInJlbGVhc2VDb250ZXh0cyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMiLCJmbG9yZW5jZVBhcnNlciIsImZsb3JlbmNlTGV4ZXIiLCJ0YWlsIiwiZmlsZUNvbnRleHRzRnJvbUpTT04iLCJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJ0b0pTT04iLCJmaWxlQ29udGV4dHNKU09OIiwibWFwIiwiZmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ0pTT05OYW1lQW5kRW50cmllcyIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJmaWxlQ29udGV4dHNMZW5ndGgiLCJsZW5ndGgiLCJ2ZXJpZmllZEZpbGVDb250ZXh0cyIsInZlcmlmaWVkRmlsZUNvbnRleHQiLCJ2ZXJpZmllZEZpbGVDb250ZXh0c0xlbmd0aCIsImZpbGVWZXJpZmllZCIsImxlZnREaWZmZXJlbmNlIiwiRmlsZUNvbnRleHQiLCJmcm9tSlNPTkFuZFJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OzttQ0FYNkI7MkRBRTFCO29CQUVHO3FCQUNnQjs2QkFDK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFGLElBQU0sQUFBRUMseUNBQTJDQyxvQ0FBZSxDQUExREQsd0NBQ0YsQUFBRUUsMENBQTRDQyxxQ0FBZ0IsQ0FBNUREO0FBRU8sSUFBQSxBQUFNSCwrQkFBTjthQUFNQSxlQUNQSyxJQUFHLEVBQUVDLElB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