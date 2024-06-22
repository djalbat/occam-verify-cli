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
var _type = require("../type");
var _customGrammar = require("../utilities/customGrammar");
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
            value: function initialise(releaseContexts) {
                var _this = this;
                releaseContexts = releaseContexts.slice(); ///
                var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts), releaseContext = releaseContexts.shift(), dependencyReleaseContexts = releaseContexts; ///
                var florenceLexer = florenceLexerFromCombinedCustomGrammar(combinedCustomGrammar), florenceParser = florenceParserFromCombinedCustomGrammar(combinedCustomGrammar);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuL2ZpbGVcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIGpzb24sIG5hbWUsIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmaWxlQ29udGV4dHMsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gbG9nO1xuICB9XG5cbiAgZ2V0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgaXNWZXJpZmllZCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJpZmllZDtcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSByZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godHlwZXMsIGZpbGVDb250ZXh0VHlwZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRSdWxlcyA9IGZpbGVDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChydWxlcywgZmlsZUNvbnRleHRSdWxlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0QXhpb21zID0gZmlsZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChheGlvbXMsIGZpbGVDb250ZXh0QXhpb21zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExlbW1hcyA9IGZpbGVDb250ZXh0LmdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCBmaWxlQ29udGV4dExlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCBmaWxlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uamVjdHVyZXMgPSBmaWxlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uamVjdHVyZXMsIGZpbGVDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb21iaW5hdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgZmlsZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIGZpbGVDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5maWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBpc1JlbGVhc2VkKCkge1xuICAgIGNvbnN0IHJlbGVhc2VkID0gKHRoaXMuanNvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVsZWFzZWQ7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIGNvbnN0IGluaXRpYWxpc2VkID0gKHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyAhPT0gbnVsbCk7ICAvLy9cblxuICAgIHJldHVybiBpbml0aWFsaXNlZDtcbiAgfVxuXG4gIGdldFJlbGVhc2VOYW1lKCkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICByZWxlYXNlTmFtZSA9IG5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHJlbGVhc2VOYW1lO1xuICB9XG5cbiAgZ2V0RmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZ2V0VmVyc2lvbigpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRWZXJzaW9uKCk7IH1cblxuICBnZXRGaWxlUGF0aHMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RmlsZVBhdGhzKCk7IH1cblxuICBnZXREZXBlbmRlbmNpZXMoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0RGVwZW5kZW5jaWVzKCk7IH1cblxuICBtYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbikgeyByZXR1cm4gdGhpcy5lbnRyaWVzLm1hdGNoU2hvcnRlbmVkVmVyc2lvbihzaG9ydGVuZWRWZXJzaW9uKTsgfVxuXG4gIHNldFZlcmlmaWVkKHZlcmlmaWVkKSB7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICB9XG5cbiAgdG9rZW5pc2UoY29udGVudCkgeyByZXR1cm4gdGhpcy5sZXhlci50b2tlbmlzZShjb250ZW50KTsgfVxuXG4gIHBhcnNlKHRva2VucykgeyByZXR1cm4gdGhpcy5wYXJzZXIucGFyc2UodG9rZW5zKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cudHJhY2UobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmRlYnVnKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmluZm8obWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cud2FybmluZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUgPSBudWxsLCB0b2tlbnMgPSBudWxsLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cuZXJyb3IobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7IH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmZhdGFsKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpOyB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMpIHtcbiAgICByZWxlYXNlQ29udGV4dHMgPSByZWxlYXNlQ29udGV4dHMuc2xpY2UoKTsgIC8vL1xuXG4gICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyhyZWxlYXNlQ29udGV4dHMpLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHRzLnNoaWZ0KCksXG4gICAgICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHJlbGVhc2VDb250ZXh0czsgIC8vL1xuXG4gICAgY29uc3QgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICAgIHRoaXMubGV4ZXIgPSBmbG9yZW5jZUxleGVyOyAvLy9cblxuICAgIHRoaXMucGFyc2VyID0gZmxvcmVuY2VQYXJzZXI7IC8vL1xuXG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcblxuICAgIGlmICh0aGlzLmpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmpzb247IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dHNKU09OLmZvckVhY2goKGZpbGVDb250ZXh0SlNPTikgPT4ge1xuICAgICAgICBjb25zdCBqc29uID0gZmlsZUNvbnRleHRKU09OLCAvLy9cbiAgICAgICAgICAgICAgeyBmaWxlUGF0aCB9ID0ganNvbixcbiAgICAgICAgICAgICAgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dChmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy52ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSB0aGlzLmZpbGVDb250ZXh0cy5tYXAoKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dEpTT04gPSBmaWxlQ29udGV4dC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbGVDb250ZXh0SlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0gZmlsZUNvbnRleHRzSlNPTjsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvZ0pTT05OYW1lQW5kRW50cmllcyhsb2csIGpzb24sIG5hbWUsIGVudHJpZXMpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGwsXG4gICAgICAgICAgcGFyc2VyID0gbnVsbCxcbiAgICAgICAgICB2ZXJpZmllZCA9IGZhbHNlLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpLFxuICAgICAgICAgIGZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IFJlbGVhc2VDb250ZXh0KGxvZywganNvbiwgbmFtZSwgZW50cmllcywgbGV4ZXIsIHBhcnNlciwgdmVyaWZpZWQsIGN1c3RvbUdyYW1tYXIsIGZpbGVDb250ZXh0cywgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyk7XG5cbiAgICByZXR1cm4gcmVsZWFzZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWxlYXNlQ29udGV4dCIsImZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwiZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsImxvZyIsImpzb24iLCJuYW1lIiwiZW50cmllcyIsImxleGVyIiwicGFyc2VyIiwidmVyaWZpZWQiLCJjdXN0b21HcmFtbWFyIiwiZmlsZUNvbnRleHRzIiwiZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExvZyIsImdldEpTT04iLCJnZXROYW1lIiwiZ2V0RW50cmllcyIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiaXNWZXJpZmllZCIsImdldEN1c3RvbUdyYW1tYXIiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImxhYmVscyIsImZvckVhY2giLCJmaWxlQ29udGV4dCIsImluY2x1ZGVSZWxlYXNlIiwiZmlsZUNvbnRleHRMYWJlbHMiLCJwdXNoIiwicmVsZWFzZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwidHlwZXMiLCJmaWxlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicnVsZXMiLCJmaWxlQ29udGV4dFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsImF4aW9tcyIsImZpbGVDb250ZXh0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJsZW1tYXMiLCJmaWxlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwidGhlb3JlbXMiLCJmaWxlQ29udGV4dFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJmaWxlQ29udGV4dENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJhZGRGaWxlQ29udGV4dCIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwib2JqZWN0VHlwZSIsInR5cGUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJpc1JlbGVhc2VkIiwicmVsZWFzZWQiLCJpc0luaXRpYWxpc2VkIiwiaW5pdGlhbGlzZWQiLCJnZXRSZWxlYXNlTmFtZSIsInJlbGVhc2VOYW1lIiwiZ2V0RmlsZSIsImZpbGVQYXRoIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJzZXRWZXJpZmllZCIsInRva2VuaXNlIiwiY29udGVudCIsInBhcnNlIiwidG9rZW5zIiwidHJhY2UiLCJtZXNzYWdlIiwibm9kZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwiaW5pdGlhbGlzZSIsInJlbGVhc2VDb250ZXh0cyIsInNsaWNlIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsInNoaWZ0IiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlUGFyc2VyIiwiZmlsZUNvbnRleHRzSlNPTiIsImZpbGVDb250ZXh0SlNPTiIsIkZpbGVDb250ZXh0IiwiZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQiLCJ0b0pTT04iLCJtYXAiLCJmcm9tTG9nSlNPTk5hbWVBbmRFbnRyaWVzIiwiY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7bUNBWDZCOzJEQUUxQjtxQkFFSDtvQkFDTTs2QkFDK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUYsSUFBTSxBQUFFQyx5Q0FBMkNDLG9DQUFlLENBQTFERCx3Q0FDRixBQUFFRSwwQ0FBNENDLHFDQUFnQixDQUE1REQ7QUFFTyxJQUFBLEFBQU1ILCtCQUFELEFBQUw7YUFBTUEsZUFDUEssSUFBRyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFBRUMseUJBQXlCO2dDQURsR2Q7UUFFakIsSUFBSSxDQUFDSyxHQUFH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