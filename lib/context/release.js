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
    function ReleaseContext(log1, json, name, entries, lexer, parser, verified, customGrammar, fileContexts, dependencyReleaseContexts) {
        _class_call_check(this, ReleaseContext);
        this.log = log1;
        this.json = json;
        this.name = name;
        this.entries = entries;
        this.lexer = lexer;
        this.parser = parser;
        this.verified = verified;
        this.customGrammar = customGrammar;
        this.fileContexts = fileContexts;
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
            key: "getCustomGrammar",
            value: function getCustomGrammar() {
                return this.customGrammar;
            }
        },
        {
            key: "getFileContexts",
            value: function getFileContexts() {
                return this.fileContexts;
            }
        },
        {
            key: "getDependencyReleaseContexts",
            value: function getDependencyReleaseContexts() {
                return this.dependencyReleaseContexts;
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
            key: "addFileContext",
            value: function addFileContext(fileContext) {
                this.fileContexts.push(fileContext);
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types = this.getTypes(), type = types.find(function(type) {
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
            key: "setVerified",
            value: function setVerified(verified) {
                this.verified = verified;
            }
        },
        {
            key: "tokenise",
            value: function tokenise(content) {
                return this.lexer.tokenise(content);
            }
        },
        {
            key: "parse",
            value: function parse(tokens) {
                return this.parser.parse(tokens);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                this.log.trace(message, node, tokens, filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                this.log.debug(message, node, tokens, filePath);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                this.log.info(message, node, tokens, filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                this.log.warning(message, node, tokens, filePath);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                this.log.error(message, node, tokens, filePath);
            }
        },
        {
            key: "fatal",
            value: function fatal(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, tokens = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, filePath = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
                this.log.fatal(message, node, tokens, filePath);
            }
        },
        {
            key: "initialise",
            value: function initialise(dependencyReleaseContexts) {
                var _this = this;
                var releaseContext = this, releaseContexts = [
                    releaseContext
                ].concat(_to_consumable_array(dependencyReleaseContexts)), combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts), florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar), florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);
                this.lexer = florenceLexer; ///
                this.parser = florenceParser; ///
                this.dependencyReleaseContexts = dependencyReleaseContexts;
                if (this.json !== null) {
                    var fileContextsJSON = this.json; ///
                    fileContextsJSON.forEach(function(fileContextJSON) {
                        var json = fileContextJSON, filePath = json.filePath, fileContext = _file.default.fromFilePathAndReleaseContext(filePath, releaseContext);
                        fileContext.initialise(json);
                        _this.fileContexts.push(fileContext);
                    });
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
                var lexer = null, parser = null, verified = false, customGrammar = (0, _customGrammar.customGrammarFromNameAndEntries)(name, entries), fileContexts = [], dependencyReleaseContexts = null, releaseContext = new ReleaseContext(log1, json, name, entries, lexer, parser, verified, customGrammar, fileContexts, dependencyReleaseContexts);
                return releaseContext;
            }
        }
    ]);
    return ReleaseContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuL2ZpbGVcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2N1c3RvbUdyYW1tYXJcIjtcblxuY29uc3QgeyBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGVhc2VDb250ZXh0IHtcbiAgY29uc3RydWN0b3IobG9nLCBqc29uLCBuYW1lLCBlbnRyaWVzLCBsZXhlciwgcGFyc2VyLCB2ZXJpZmllZCwgY3VzdG9tR3JhbW1hciwgZmlsZUNvbnRleHRzLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5qc29uID0ganNvbjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgICB0aGlzLmN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyO1xuICAgIHRoaXMuZmlsZUNvbnRleHRzID0gZmlsZUNvbnRleHRzO1xuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMb2coKSB7XG4gICAgcmV0dXJuIGxvZztcbiAgfVxuXG4gIGdldEpTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMuanNvbjtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50cmllcztcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGlzVmVyaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZWQ7XG4gIH1cblxuICBnZXRDdXN0b21HcmFtbWFyKCkge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUdyYW1tYXI7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TGFiZWxzID0gZmlsZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGZpbGVDb250ZXh0TGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgZmlsZUNvbnRleHRMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUaGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgZmlsZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbmplY3R1cmVzID0gZmlsZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCBmaWxlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBhZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBpc1JlbGVhc2VkKCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gKHRoaXMuanNvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVsZWFzZWQ7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIGNvbnN0IGluaXRpYWxpc2VkID0gKHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyAhPT0gbnVsbCk7ICAvLy9cblxuICAgIHJldHVybiBpbml0aWFsaXNlZDtcbiAgfVxuXG4gIGdldFJlbGVhc2VOYW1lKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHJlbGVhc2VOYW1lO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZ2V0VmVyc2lvbigpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRWZXJzaW9uKCk7IH1cblxuICBnZXRGaWxlUGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZVBhdGhzKCk7IH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikgeyByZXR1cm4gdGhpcy5lbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTsgfVxuXG4gIHNldFZlcmlmaWVkKHZlcmlmaWVkKSB7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICB9XG5cbiAgdG9rZW5pc2UoY29udGVudCkgeyByZXR1cm4gdGhpcy5sZXhlci50b2tlbmlzZShjb250ZW50KTsgfVxuXG4gIHBhcnNlKHRva2VucykgeyByZXR1cm4gdGhpcy5wYXJzZXIucGFyc2UodG9rZW5zKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cudHJhY2UobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmRlYnVnKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmluZm8obWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cud2FybmluZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cuZXJyb3IobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7IH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmZhdGFsKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpOyB9XG5cbiAgaW5pdGlhbGlzZShkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRzID0gW1xuICAgICAgICAgICAgcmVsZWFzZUNvbnRleHQsXG4gICAgICAgICAgICAuLi5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyksXG4gICAgICAgICAgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICAgIHRoaXMubGV4ZXIgPSBmbG9yZW5jZUxleGVyOyAvLy9cblxuICAgIHRoaXMucGFyc2VyID0gZmxvcmVuY2VQYXJzZXI7IC8vL1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcblxuICAgIGlmICh0aGlzLmpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmpzb247IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dHNKU09OLmZvckVhY2goKGZpbGVDb250ZXh0SlNPTikgPT4ge1xuICAgICAgICBjb25zdCBqc29uID0gZmlsZUNvbnRleHRKU09OLCAvLy9cbiAgICAgICAgICAgICAgeyBmaWxlUGF0aCB9ID0ganNvbixcbiAgICAgICAgICAgICAgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dChmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy52ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmZpbGVDb250ZXh0cy5tYXAoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ0pTT05OYW1lQW5kRW50cmllcyhsb2csIGpzb24sIG5hbWUsIGVudHJpZXMpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGwsXG4gICAgICAgICAgcGFyc2VyID0gbnVsbCxcbiAgICAgICAgICB2ZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpLFxuICAgICAgICAgIGZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IFJlbGVhc2VDb250ZXh0KGxvZywganNvbiwgbmFtZSwgZW50cmllcywgbGV4ZXIsIHBhcnNlciwgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZpbGVDb250ZXh0cywgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJsb2ciLCJqc29uIiwibmFtZSIsImVudHJpZXMiLCJsZXhlciIsInBhcnNlciIsInZlcmlmaWVkIiwiY3VzdG9tR3JhbW1hciIsImZpbGVDb250ZXh0cyIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRMb2ciLCJnZXRKU09OIiwiZ2V0TmFtZSIsImdldEVudHJpZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImlzVmVyaWZpZWQiLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0RmlsZUNvbnRleHRzIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExhYmVscyIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJsYWJlbHMiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0TGFiZWxzIiwicHVzaCIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZmlsZUNvbnRleHRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiYWRkRmlsZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJpc1JlbGVhc2VkIiwicmVsZWFzZWQiLCJpc0luaXRpYWxpc2VkIiwiaW5pdGlhbGlzZWQiLCJnZXRSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lIiwiZ2V0RmlsZSIsImZpbGVQYXRoIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJzZXRWZXJpZmllZCIsInRva2VuaXNlIiwiY29udGVudCIsInBhcnNlIiwidG9rZW5zIiwidHJhY2UiLCJtZXNzYWdlIiwibm9kZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwiaW5pdGlhbGlzZSIsInJlbGVhc2VDb250ZXh0cyIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMiLCJmbG9yZW5jZUxleGVyIiwiZmxvcmVuY2VQYXJzZXIiLCJmaWxlQ29udGV4dHNKU09OIiwiZmlsZUNvbnRleHRKU09OIiwiRmlsZUNvbnRleHQiLCJmcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dCIsInRvSlNPTiIsIm1hcCIsImZyb21Mb2dKU09OTmFtZUFuZEVudHJpZXMiLCJjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7OzttQ0FWNkI7MkRBRTFCO3FCQUVIOzZCQUNxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUYsSUFBTSxBQUFFQyx5Q0FBMkNDLHFDQUEzQ0Qsd0NBQ0YsQUFBRUUsMENBQTRDQyxzQ0FBNUNEO0FBRU8sSUFBQSxBQUFNSCwrQkFBTjthQUFNQSxlQUNQSyxJQUFHLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyx5QkFBeUI7Z0NBRGxHZDtRQUVqQixJQUFJLENBQUNLLE1BQU1BO1FBQ1gsSUFBSSxDQUFDQyxPQUFPQTtR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