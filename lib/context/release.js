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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1jdXN0b20tZ3JhbW1hcnNcIjtcblxuaW1wb3J0IEZpbGVDb250ZXh0IGZyb20gXCIuL2ZpbGVcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IGZsb3JlbmNlTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IGZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIGpzb24sIG5hbWUsIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmaWxlQ29udGV4dHMsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpIHtcbiAgICB0aGlzLmxvZyA9IGxvZztcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgdGhpcy52ZXJpZmllZCA9IHZlcmlmaWVkO1xuICAgIHRoaXMuY3VzdG9tR3JhbW1hciA9IGN1c3RvbUdyYW1tYXI7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gICAgdGhpcy5kZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGdldExvZygpIHtcbiAgICByZXR1cm4gbG9nO1xuICB9XG5cbiAgZ2V0SlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0RW50cmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRyaWVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgaXNWZXJpZmllZCgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJpZmllZDtcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dHM7XG4gIH1cblxuICBnZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMYWJlbHMgPSBmaWxlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxhYmVscywgZmlsZUNvbnRleHRMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0TGFiZWxzID0gcmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFR5cGVzID0gZmlsZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHR5cGVzLCBmaWxlQ29udGV4dFR5cGVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFR5cGVzID0gcmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0UnVsZXMgPSBmaWxlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gocnVsZXMsIGZpbGVDb250ZXh0UnVsZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0UnVsZXMgPSByZWxlYXNlQ29udGV4dC5nZXRSdWxlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dEF4aW9tcyA9IGZpbGVDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goYXhpb21zLCBmaWxlQ29udGV4dEF4aW9tcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSByZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRMZW1tYXMgPSBmaWxlQ29udGV4dC5nZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgZmlsZUNvbnRleHRMZW1tYXMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRUaGVvcmVtcyA9IGZpbGVDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgZmlsZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbmplY3R1cmVzID0gZmlsZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCBmaWxlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0Q29tYmluYXRvcnMgPSBmaWxlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIGZpbGVDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyA9IGZpbGVDb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCBmaWxlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSByZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBhZGRGaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgdHlwZXMucHVzaChvYmplY3RUeXBlKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgaXNSZWxlYXNlZCgpIHtcbiAgICBjb25zdCByZWxlYXNlZCA9ICh0aGlzLmpzb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VkO1xuICB9XG5cbiAgaXNJbml0aWFsaXNlZCgpIHtcbiAgICBjb25zdCBpbml0aWFsaXNlZCA9ICh0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgIT09IG51bGwpOyAgLy8vXG5cbiAgICByZXR1cm4gaW5pdGlhbGlzZWQ7XG4gIH1cblxuICBnZXRSZWxlYXNlTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICBzZXRWZXJpZmllZCh2ZXJpZmllZCkge1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgfVxuXG4gIHRva2VuaXNlKGNvbnRlbnQpIHsgcmV0dXJuIHRoaXMubGV4ZXIudG9rZW5pc2UoY29udGVudCk7IH1cblxuICBwYXJzZSh0b2tlbnMpIHsgcmV0dXJuIHRoaXMucGFyc2VyLnBhcnNlKHRva2Vucyk7IH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLnRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkgeyB0aGlzLmxvZy5kZWJ1ZyhtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkgeyB0aGlzLmxvZy5pbmZvKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLndhcm5pbmcobWVzc2FnZSwgbm9kZSwgdG9rZW5zLCBmaWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlID0gbnVsbCwgdG9rZW5zID0gbnVsbCwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmVycm9yKG1lc3NhZ2UsIG5vZGUsIHRva2VucywgZmlsZVBhdGgpOyB9XG5cbiAgZmF0YWwobWVzc2FnZSwgbm9kZSA9IG51bGwsIHRva2VucyA9IG51bGwsIGZpbGVQYXRoID0gbnVsbCkgeyB0aGlzLmxvZy5mYXRhbChtZXNzYWdlLCBub2RlLCB0b2tlbnMsIGZpbGVQYXRoKTsgfVxuXG4gIGluaXRpYWxpc2UocmVsZWFzZUNvbnRleHRzKSB7XG4gICAgcmVsZWFzZUNvbnRleHRzID0gcmVsZWFzZUNvbnRleHRzLnNsaWNlKCk7ICAvLy9cblxuICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IGNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMocmVsZWFzZUNvbnRleHRzKSxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0cy5zaGlmdCgpLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSByZWxlYXNlQ29udGV4dHM7ICAvLy9cblxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gZmxvcmVuY2VQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKGNvbWJpbmVkQ3VzdG9tR3JhbW1hcik7XG5cbiAgICB0aGlzLmxleGVyID0gZmxvcmVuY2VMZXhlcjsgLy8vXG5cbiAgICB0aGlzLnBhcnNlciA9IGZsb3JlbmNlUGFyc2VyOyAvLy9cblxuICAgIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHM7XG5cbiAgICBpZiAodGhpcy5qc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0gdGhpcy5qc29uOyAvLy9cblxuICAgICAgZmlsZUNvbnRleHRzSlNPTi5mb3JFYWNoKChmaWxlQ29udGV4dEpTT04pID0+IHtcbiAgICAgICAgY29uc3QganNvbiA9IGZpbGVDb250ZXh0SlNPTiwgLy8vXG4gICAgICAgICAgICAgIHsgZmlsZVBhdGggfSA9IGpzb24sXG4gICAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuXG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0gdGhpcy5maWxlQ29udGV4dHMubWFwKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZUNvbnRleHRKU09OID0gZmlsZUNvbnRleHQudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWxlQ29udGV4dEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVDb250ZXh0c0pTT047ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dKU09OTmFtZUFuZEVudHJpZXMobG9nLCBqc29uLCBuYW1lLCBlbnRyaWVzKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsLFxuICAgICAgICAgIHBhcnNlciA9IG51bGwsXG4gICAgICAgICAgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBjdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcyhuYW1lLCBlbnRyaWVzKSxcbiAgICAgICAgICBmaWxlQ29udGV4dHMgPSBbXSxcbiAgICAgICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gbnVsbCxcbiAgICAgICAgICByZWxlYXNlQ29udGV4dCA9IG5ldyBSZWxlYXNlQ29udGV4dChsb2csIGpzb24sIG5hbWUsIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBjdXN0b21HcmFtbWFyLCBmaWxlQ29udGV4dHMsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZUNvbnRleHQiLCJmbG9yZW5jZUxleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsImZsb3JlbmNlUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJsb2ciLCJqc29uIiwibmFtZSIsImVudHJpZXMiLCJsZXhlciIsInBhcnNlciIsInZlcmlmaWVkIiwiY3VzdG9tR3JhbW1hciIsImZpbGVDb250ZXh0cyIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRMb2ciLCJnZXRKU09OIiwiZ2V0TmFtZSIsImdldEVudHJpZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImlzVmVyaWZpZWQiLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0RmlsZUNvbnRleHRzIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImdldExhYmVscyIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJsYWJlbHMiLCJmb3JFYWNoIiwiZmlsZUNvbnRleHQiLCJpbmNsdWRlUmVsZWFzZSIsImZpbGVDb250ZXh0TGFiZWxzIiwicHVzaCIsInJlbGVhc2VDb250ZXh0IiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInR5cGVzIiwiZmlsZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJ1bGVzIiwiZmlsZUNvbnRleHRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJheGlvbXMiLCJmaWxlQ29udGV4dEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwibGVtbWFzIiwiZmlsZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInRoZW9yZW1zIiwiZmlsZUNvbnRleHRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRDb25qZWN0dXJlcyIsImNvbmplY3R1cmVzIiwiZmlsZUNvbnRleHRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImNvbWJpbmF0b3JzIiwiZmlsZUNvbnRleHRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJmaWxlQ29udGV4dENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiYWRkRmlsZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm9iamVjdFR5cGUiLCJ0eXBlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwiaXNSZWxlYXNlZCIsInJlbGVhc2VkIiwiaXNJbml0aWFsaXNlZCIsImluaXRpYWxpc2VkIiwiZ2V0UmVsZWFzZU5hbWUiLCJyZWxlYXNlTmFtZSIsImdldEZpbGUiLCJmaWxlUGF0aCIsImdldFZlcnNpb24iLCJnZXRGaWxlUGF0aHMiLCJnZXREZXBlbmRlbmNpZXMiLCJtYXRjaFNob3J0ZW5lZFZlcnNpb24iLCJzaG9ydGVuZWRWZXJzaW9uIiwic2V0VmVyaWZpZWQiLCJ0b2tlbmlzZSIsImNvbnRlbnQiLCJwYXJzZSIsInRva2VucyIsInRyYWNlIiwibWVzc2FnZSIsIm5vZGUiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImluaXRpYWxpc2UiLCJyZWxlYXNlQ29udGV4dHMiLCJzbGljZSIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hckZyb21SZWxlYXNlQ29udGV4dHMiLCJzaGlmdCIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsImZpbGVDb250ZXh0c0pTT04iLCJmaWxlQ29udGV4dEpTT04iLCJGaWxlQ29udGV4dCIsImZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0IiwidG9KU09OIiwibWFwIiwiZnJvbUxvZ0pTT05OYW1lQW5kRW50cmllcyIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7O21DQVg2QjsyREFFMUI7cUJBRUg7b0JBQ007NkJBQytEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFGLElBQU0sQUFBRUMseUNBQTJDQyxvQ0FBZSxDQUExREQsd0NBQ0YsQUFBRUUsMENBQTRDQyxxQ0FBZ0IsQ0FBNUREO0FBRU8sSUFBQSxBQUFNSCwrQkFBRCxBQUFMO2FBQU1BLGVBQ1BLLElBQUcsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsYUFBYSxFQUFFQyxZQUFZLEVBQUVDLHlCQUF5QjtnQ0FEbEdkO1FBRWpCLElBQUksQ0FBQ0ss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