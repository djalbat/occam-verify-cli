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
var _type = require("../dom/type");
var _parser = require("../utilities/parser");
var _metaType = require("../dom/metaType");
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
var tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, clear = _necessary.arrayUtilities.clear, resolve = _necessary.arrayUtilities.resolve, nominalLexerFromCombinedCustomGrammar = _occamcustomgrammars.lexersUtilities.nominalLexerFromCombinedCustomGrammar, nominalParserFromCombinedCustomGrammar = _occamcustomgrammars.parsersUtilities.nominalParserFromCombinedCustomGrammar, isFilePathFurtleFilePath = _occamentities.filePathUtilities.isFilePathFurtleFilePath, isFilePathNominalFilePath = _occamentities.filePathUtilities.isFilePathNominalFilePath;
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
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types = this.getTypes();
                types = _to_consumable_array(types).concat([
                    _type.objectType
                ]);
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
                var combinedCustomGrammar = (0, _customGrammar.combinedCustomGrammarFromReleaseContexts)(releaseContexts), nominalLexer = nominalLexerFromCombinedCustomGrammar(combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(combinedCustomGrammar);
                (0, _parser.setNonTerminalNodes)(nominalParser);
                var releaseContext = this, released = this.isReleased();
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
function verifyFileContexts(fileContexts, verifiedFileContexts) {
    var resolved = resolve(fileContexts, verifiedFileContexts, function(fileContext) {
        var fileContextVerified = fileContext.verify();
        if (fileContextVerified) {
            return true;
        }
    }), fileContextsVerified = resolved; ///
    return fileContextsVerified;
}
function fileContextsFromJSON(json, fileContexts, releaseContext) {
    var fileContextsJSON = json; ///
    fileContextsJSON.forEach(function(fileContextJSON) {
        var filePath = fileContextJSON.filePath, _$json = fileContextJSON, filePathFurtleFilePath = isFilePathFurtleFilePath(filePath), filePathNominalFilePath = isFilePathNominalFilePath(filePath);
        if (filePathFurtleFilePath) {
            var furtleFileContext = _occamfurtle.FileContext.fromFilePathAndJSON(filePath, _$json, releaseContext), fileContext = furtleFileContext; ///
            fileContexts.push(fileContext);
        }
        if (filePathNominalFilePath) {
            var fileContext1 = _file.default.fromFilePathAndJSON(filePath, _$json, releaseContext);
            fileContexts.push(fileContext1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3JlbGVhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRmlsZUNvbnRleHQgYXMgRnVydGxlRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IGZpbGVQYXRoVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWVudGl0aWVzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCBGaWxlQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9maWxlXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcbmltcG9ydCB7IHNldE5vblRlcm1pbmFsTm9kZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnNlclwiO1xuaW1wb3J0IHsgZnJhbWVNZXRhVHlwZSwgcmVmZXJlbmNlTWV0YVR5cGUsIHN0YXRlbWVudE1ldGFUeXBlIH0gZnJvbSBcIi4uL2RvbS9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgY3VzdG9tR3JhbW1hckZyb21OYW1lQW5kRW50cmllcywgY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY3VzdG9tR3JhbW1hclwiO1xuXG5jb25zdCB7IHRhaWwsIHB1c2gsIGNsZWFyLCByZXNvbHZlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciB9ID0gcGFyc2Vyc1V0aWxpdGllcyxcbiAgICAgIHsgaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoLCBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIH0gPSBmaWxlUGF0aFV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihsb2csIG5hbWUsIGpzb24sIGVudHJpZXMsIGxleGVyLCBwYXJzZXIsIHZlcmlmaWVkLCBpbml0aWFsaXNlZCwgZmlsZUNvbnRleHRzLCBjdXN0b21HcmFtbWFyLCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKSB7XG4gICAgdGhpcy5sb2cgPSBsb2c7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMudmVyaWZpZWQgPSB2ZXJpZmllZDtcbiAgICB0aGlzLmluaXRpYWxpc2VkID0gaW5pdGlhbGlzZWQ7XG4gICAgdGhpcy5maWxlQ29udGV4dHMgPSBmaWxlQ29udGV4dHM7XG4gICAgdGhpcy5jdXN0b21HcmFtbWFyID0gY3VzdG9tR3JhbW1hcjtcbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzO1xuICB9XG5cbiAgZ2V0TG9nKCkge1xuICAgIHJldHVybiBsb2c7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRKU09OKCkge1xuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVudHJpZXM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRNZXRhVHlwZXMoKSB7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gW1xuICAgICAgZnJhbWVNZXRhVHlwZSxcbiAgICAgIHJlZmVyZW5jZU1ldGFUeXBlLFxuICAgICAgc3RhdGVtZW50TWV0YVR5cGVcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlcztcbiAgfVxuXG4gIGlzVmVyaWZpZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyaWZpZWQ7XG4gIH1cblxuICBpc0luaXRpYWxpc2VkKCkge1xuICAgIHJldHVybiB0aGlzLmluaXRpYWxpc2VkO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHRzKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0cztcbiAgfVxuXG4gIGdldEN1c3RvbUdyYW1tYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VzdG9tR3JhbW1hcjtcbiAgfVxuXG4gIGdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cztcbiAgfVxuXG4gIGlzUmVsZWFzZWQoKSB7XG4gICAgY29uc3QgcmVsZWFzZWQgPSAodGhpcy5qc29uICE9PSBudWxsKTtcblxuICAgIHJldHVybiByZWxlYXNlZDtcbiAgfVxuXG4gIGZpbmRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZmluZEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZmluZEZpbGVDb250ZXh0KGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLmZpbGVDb250ZXh0cy5maW5kKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHRGaWxlUGF0aCA9IGZpbGVDb250ZXh0LmdldEZpbGVQYXRoKCk7XG5cbiAgICAgIGlmIChmaWxlQ29udGV4dEZpbGVQYXRoID09PSBmaWxlUGF0aCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExhYmVscyA9IGZpbGVDb250ZXh0LmdldExhYmVscyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBmaWxlQ29udGV4dExhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSByZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0VHlwZXMgPSBmaWxlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2godHlwZXMsIGZpbGVDb250ZXh0VHlwZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0VHlwZXMgPSByZWxlYXNlQ29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRSdWxlcyA9IGZpbGVDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChydWxlcywgZmlsZUNvbnRleHRSdWxlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0QXhpb21zID0gZmlsZUNvbnRleHQuZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChheGlvbXMsIGZpbGVDb250ZXh0QXhpb21zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHJlbGVhc2VDb250ZXh0LmdldEF4aW9tcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dExlbW1hcyA9IGZpbGVDb250ZXh0LmdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCBmaWxlQ29udGV4dExlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCBmaWxlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gcmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dFByb2NlZHVyZXMgPSBmaWxlQ29udGV4dC5nZXRQcm9jZWR1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChwcm9jZWR1cmVzLCBmaWxlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgcmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzID0gcmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YUxlbW1hcyA9IGZpbGVDb250ZXh0LmdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIGZpbGVDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25qZWN0dXJlcyA9IGZpbGVDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgZmlsZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZURlcGVuZGVuY2llcykge1xuICAgICAgY29uc3QgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyA9IHRoaXMuZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cygpO1xuXG4gICAgICBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzLmZvckVhY2goKHJlbGVhc2VDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dHMuZm9yRWFjaCgoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gZmFsc2UsXG4gICAgICAgICAgICBmaWxlQ29udGV4dENvbWJpbmF0b3JzID0gZmlsZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCBmaWxlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHRzLmZvckVhY2goKGZpbGVDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IGZhbHNlLFxuICAgICAgICAgICAgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSBmaWxlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgZmlsZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVEZXBlbmRlbmNpZXMpIHtcbiAgICAgIGNvbnN0IGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0aGlzLmdldERlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMoKTtcblxuICAgICAgZGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cy5mb3JFYWNoKChyZWxlYXNlQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgICAgIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0cy5mb3JFYWNoKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSBmYWxzZSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zID0gZmlsZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIGZpbGVDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlRGVwZW5kZW5jaWVzKSB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzID0gdGhpcy5nZXREZXBlbmRlbmN5UmVsZWFzZUNvbnRleHRzKCk7XG5cbiAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMuZm9yRWFjaCgocmVsZWFzZUNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgICAgICByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyA9IHJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcyhpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGFkZEZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5maWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcyA9IFtcbiAgICAgIC4uLnR5cGVzLFxuICAgICAgb2JqZWN0VHlwZVxuICAgIF07XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRSZWxlYXNlTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgcmVsZWFzZU5hbWUgPSBuYW1lOyAvLy9cblxuICAgIHJldHVybiByZWxlYXNlTmFtZTtcbiAgfVxuXG4gIGdldEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMuZW50cmllcy5nZXRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldFZlcnNpb24oKSB7IHJldHVybiB0aGlzLmVudHJpZXMuZ2V0VmVyc2lvbigpOyB9XG5cbiAgZ2V0RmlsZVBhdGhzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldEZpbGVQYXRocygpOyB9XG5cbiAgZ2V0RGVwZW5kZW5jaWVzKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzLmdldERlcGVuZGVuY2llcygpOyB9XG5cbiAgbWF0Y2hTaG9ydGVuZWRWZXJzaW9uKHNob3J0ZW5lZFZlcnNpb24pIHsgcmV0dXJuIHRoaXMuZW50cmllcy5tYXRjaFNob3J0ZW5lZFZlcnNpb24oc2hvcnRlbmVkVmVyc2lvbik7IH1cblxuICB0cmFjZShtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cudHJhY2UobWVzc2FnZSwgZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmRlYnVnKG1lc3NhZ2UsIGZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgZmlsZVBhdGggPSBudWxsKSB7IHRoaXMubG9nLmluZm8obWVzc2FnZSwgZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cud2FybmluZyhtZXNzYWdlLCBmaWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBmaWxlUGF0aCA9IG51bGwpIHsgdGhpcy5sb2cuZXJyb3IobWVzc2FnZSwgZmlsZVBhdGgpOyB9XG5cbiAgaW5pdGlhbGlzZShyZWxlYXNlQ29udGV4dHMpIHtcbiAgICBjb25zdCBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSBjb21iaW5lZEN1c3RvbUdyYW1tYXJGcm9tUmVsZWFzZUNvbnRleHRzKHJlbGVhc2VDb250ZXh0cyksXG4gICAgICAgICAgbm9taW5hbExleGVyID0gbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgc2V0Tm9uVGVybWluYWxOb2Rlcyhub21pbmFsUGFyc2VyKTtcblxuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHJlbGVhc2VkID0gdGhpcy5pc1JlbGVhc2VkKCk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSB0YWlsKHJlbGVhc2VDb250ZXh0cyk7IC8vL1xuXG4gICAgdGhpcy5sZXhlciA9IG5vbWluYWxMZXhlcjsgLy8vXG5cbiAgICB0aGlzLnBhcnNlciA9IG5vbWluYWxQYXJzZXI7IC8vL1xuXG4gICAgY2xlYXIodGhpcy5maWxlQ29udGV4dHMpO1xuXG4gICAgcmVsZWFzZWQgP1xuICAgICAgZmlsZUNvbnRleHRzRnJvbUpTT04odGhpcy5qc29uLCB0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpIDpcbiAgICAgICAgZmlsZUNvbnRleHRzRnJvbUVudHJpZXModGhpcy5lbnRyaWVzLCB0aGlzLmZpbGVDb250ZXh0cywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2ZXJpZmllZEZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0c1ZlcmlmaWVkID0gdmVyaWZ5RmlsZUNvbnRleHRzKHRoaXMuZmlsZUNvbnRleHRzLCB2ZXJpZmllZEZpbGVDb250ZXh0cyk7XG5cbiAgICBpZiAoZmlsZUNvbnRleHRzVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHRzID0gdmVyaWZpZWRGaWxlQ29udGV4dHM7IC8vL1xuXG4gICAgICB0aGlzLnZlcmlmaWVkID0gdHJ1ZTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dHNKU09OID0gdGhpcy5maWxlQ29udGV4dHMubWFwKChmaWxlQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmlsZUNvbnRleHRKU09OID0gZmlsZUNvbnRleHQudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBmaWxlQ29udGV4dEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IGZpbGVDb250ZXh0c0pTT047ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Mb2dOYW1lSlNPTkFuZEVudHJpZXMobG9nLCBuYW1lLCBqc29uLCBlbnRyaWVzKSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsLFxuICAgICAgICAgIHBhcnNlciA9IG51bGwsXG4gICAgICAgICAgdmVyaWZpZWQgPSBmYWxzZSxcbiAgICAgICAgICBpbml0aWFsaXNlZCA9IGZhbHNlLFxuICAgICAgICAgIGZpbGVDb250ZXh0cyA9IFtdLFxuICAgICAgICAgIGN1c3RvbUdyYW1tYXIgPSBjdXN0b21HcmFtbWFyRnJvbU5hbWVBbmRFbnRyaWVzKG5hbWUsIGVudHJpZXMpLFxuICAgICAgICAgIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMgPSBudWxsLFxuICAgICAgICAgIHJlbGVhc2VDb250ZXh0ID0gbmV3IFJlbGVhc2VDb250ZXh0KGxvZywgbmFtZSwganNvbiwgZW50cmllcywgbGV4ZXIsIHBhcnNlciwgdmVyaWZpZWQsIGluaXRpYWxpc2VkLCBmaWxlQ29udGV4dHMsIGN1c3RvbUdyYW1tYXIsIGRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMpO1xuXG4gICAgcmV0dXJuIHJlbGVhc2VDb250ZXh0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHZlcmlmeUZpbGVDb250ZXh0cyhmaWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzKSB7XG4gIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZShmaWxlQ29udGV4dHMsIHZlcmlmaWVkRmlsZUNvbnRleHRzLCAoZmlsZUNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWxlQ29udGV4dFZlcmlmaWVkID0gZmlsZUNvbnRleHQudmVyaWZ5KCk7XG5cbiAgICAgICAgICBpZiAoZmlsZUNvbnRleHRWZXJpZmllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsZUNvbnRleHRzVmVyaWZpZWQgPSByZXNvbHZlZDsgIC8vL1xuXG4gIHJldHVybiBmaWxlQ29udGV4dHNWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gZmlsZUNvbnRleHRzRnJvbUpTT04oanNvbixmaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGNvbnN0IGZpbGVDb250ZXh0c0pTT04gPSBqc29uOyAgLy8vXG5cbiAgZmlsZUNvbnRleHRzSlNPTi5mb3JFYWNoKChmaWxlQ29udGV4dEpTT04pID0+IHtcbiAgICBjb25zdCB7IGZpbGVQYXRoIH0gPSBmaWxlQ29udGV4dEpTT04sXG4gICAgICAgICAganNvbiA9IGZpbGVDb250ZXh0SlNPTiwgLy8vXG4gICAgICAgICAgZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCA9IGlzRmlsZVBhdGhGdXJ0bGVGaWxlUGF0aChmaWxlUGF0aCksXG4gICAgICAgICAgZmlsZVBhdGhOb21pbmFsRmlsZVBhdGggPSBpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmIChmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoKSB7XG4gICAgICBjb25zdCBmdXJ0bGVGaWxlQ29udGV4dCA9IEZ1cnRsZUZpbGVDb250ZXh0LmZyb21GaWxlUGF0aEFuZEpTT04oZmlsZVBhdGgsIGpzb24sIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gZnVydGxlRmlsZUNvbnRleHQ7ICAvLy9cblxuICAgICAgZmlsZUNvbnRleHRzLnB1c2goZmlsZUNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmIChmaWxlUGF0aE5vbWluYWxGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZVBhdGhBbmRKU09OKGZpbGVQYXRoLCBqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaWxlQ29udGV4dHNGcm9tRW50cmllcyhlbnRyaWVzLCBmaWxlQ29udGV4dHMsIHJlbGVhc2VDb250ZXh0KSB7XG4gIGVudHJpZXMuZm9yRWFjaEZpbGUoKGZpbGUpID0+IHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGZpbGVQYXRoRnVydGxlRmlsZVBhdGggPSBpc0ZpbGVQYXRoRnVydGxlRmlsZVBhdGgoZmlsZVBhdGgpLFxuICAgICAgICAgIGZpbGVQYXRoTm9taW5hbEZpbGVQYXRoID0gaXNGaWxlUGF0aE5vbWluYWxGaWxlUGF0aChmaWxlUGF0aCk7XG5cbiAgICBpZiAoZmlsZVBhdGhGdXJ0bGVGaWxlUGF0aCkge1xuICAgICAgY29uc3QgZnVydGxlRmlsZUNvbnRleHQgPSBGdXJ0bGVGaWxlQ29udGV4dC5mcm9tRmlsZShmaWxlLCByZWxlYXNlQ29udGV4dCksXG4gICAgICAgICAgICBmaWxlQ29udGV4dCA9IGZ1cnRsZUZpbGVDb250ZXh0OyAgLy8vXG5cbiAgICAgIGZpbGVDb250ZXh0cy5wdXNoKGZpbGVDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgpIHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBmaWxlQ29udGV4dHMucHVzaChmaWxlQ29udGV4dCk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJSZWxlYXNlQ29udGV4dCIsInRhaWwiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJjbGVhciIsInJlc29sdmUiLCJub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiaXNGaWxlUGF0aEZ1cnRsZUZpbGVQYXRoIiwiZmlsZVBhdGhVdGlsaXRpZXMiLCJpc0ZpbGVQYXRoTm9taW5hbEZpbGVQYXRoIiwibG9nIiwibmFtZSIsImpzb24iLCJlbnRyaWVzIiwibGV4ZXIiLCJwYXJzZXIiLCJ2ZXJpZmllZCIsImluaXRpYWxpc2VkIiwiZmlsZUNvbnRleHRzIiwiY3VzdG9tR3JhbW1hciIsImRlcGVuZGVuY3lSZWxlYXNlQ29udGV4dHMiLCJnZXRMb2ciLCJnZXROYW1lIiwiZ2V0SlNPTiIsImdldEVudHJpZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldE1ldGFUeXBlcyIsIm1ldGFUeXBlcyIsImZyYW1lTWV0YVR5cGUiLCJyZWZlcmVuY2VNZXRhVHlwZSIsInN0YXRlbWVudE1ldGFUeXBlIiwiaXNWZXJpZmllZCIsImlzSW5pdGlhbGlzZWQiLCJnZXRGaWxlQ29udGV4dHMiLCJnZXRDdXN0b21HcmFtbWFyIiwiZ2V0RGVwZW5kZW5jeVJlbGVhc2VDb250ZXh0cyIsImlzUmVsZWFzZWQiLCJyZWxlYXNlZCIsImZpbmRGaWxlIiwiZmlsZVBhdGgiLCJmaW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZpbmQiLCJmaWxlQ29udGV4dEZpbGVQYXRoIiwiZ2V0RmlsZVBhdGgiLCJnZXRMYWJlbHMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwibGFiZWxzIiwiZm9yRWFjaCIsImluY2x1ZGVSZWxlYXNlIiwiZmlsZUNvbnRleHRMYWJlbHMiLCJyZWxlYXNlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJ0eXBlcyIsImZpbGVDb250ZXh0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJydWxlcyIsImZpbGVDb250ZXh0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwiYXhpb21zIiwiZmlsZUNvbnRleHRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsImxlbW1hcyIsImZpbGVDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJ0aGVvcmVtcyIsImZpbGVDb250ZXh0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJmaWxlQ29udGV4dFByb2NlZHVyZXMiLCJyZWxlYXNlQ29udGV4dFByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwibWV0YUxlbW1hcyIsImZpbGVDb250ZXh0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiY29uamVjdHVyZXMiLCJmaWxlQ29udGV4dENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJmaWxlQ29udGV4dENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImZpbGVDb250ZXh0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJtZXRhdGhlb3JlbXMiLCJmaWxlQ29udGV4dE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiYWRkRmlsZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm9iamVjdFR5cGUiLCJ0eXBlIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImdldFJlbGVhc2VOYW1lIiwicmVsZWFzZU5hbWUiLCJnZXRGaWxlIiwiZ2V0VmVyc2lvbiIsImdldEZpbGVQYXRocyIsImdldERlcGVuZGVuY2llcyIsIm1hdGNoU2hvcnRlbmVkVmVyc2lvbiIsInNob3J0ZW5lZFZlcnNpb24iLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJpbml0aWFsaXNlIiwicmVsZWFzZUNvbnRleHRzIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyRnJvbVJlbGVhc2VDb250ZXh0cyIsIm5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJzZXROb25UZXJtaW5hbE5vZGVzIiwiZmlsZUNvbnRleHRzRnJvbUpTT04iLCJmaWxlQ29udGV4dHNGcm9tRW50cmllcyIsInZlcmlmeSIsInZlcmlmaWVkRmlsZUNvbnRleHRzIiwiZmlsZUNvbnRleHRzVmVyaWZpZWQiLCJ2ZXJpZnlGaWxlQ29udGV4dHMiLCJ0b0pTT04iLCJmaWxlQ29udGV4dHNKU09OIiwibWFwIiwiZmlsZUNvbnRleHRKU09OIiwiZnJvbUxvZ05hbWVKU09OQW5kRW50cmllcyIsImN1c3RvbUdyYW1tYXJGcm9tTmFtZUFuZEVudHJpZXMiLCJyZXNvbHZlZCIsImZpbGVDb250ZXh0VmVyaWZpZWQiLCJmaWxlUGF0aEZ1cnRsZUZpbGVQYXRoIiwiZmlsZVBhdGhOb21pbmFsRmlsZVBhdGgiLCJmdXJ0bGVGaWxlQ29udGV4dCIsIkZ1cnRsZUZpbGVDb250ZXh0IiwiZnJvbUZpbGVQYXRoQW5kSlNPTiIsIkZpbGVDb250ZXh0IiwiZm9yRWFjaEZpbGUiLCJmaWxlIiwiZ2V0UGF0aCIsImZyb21GaWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW9CcUJBOzs7eUJBbEJVOzJCQUNrQjs2QkFFZjttQ0FDZ0I7MkRBRTFCO29CQUVHO3NCQUNTO3dCQUNnQzs2QkFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFGLElBQVFDLE9BQStCQyx5QkFBYyxDQUE3Q0QsTUFBTUUsT0FBeUJELHlCQUFjLENBQXZDQyxNQUFNQyxRQUFtQkYseUJBQWMsQ0FBakNFLE9BQU9DLFVBQVlILHlCQUFjLENBQTFCRyxTQUNyQixBQUFFQyx3Q0FBMENDLG9DQUFlLENBQXpERCx1Q0FDRixBQUFFRSx5Q0FBMkNDLHFDQUFnQixDQUEzREQsd0NBQ0FFLDJCQUF3REMsZ0NBQWlCLENBQXpFRCwwQkFBMEJFLDRCQUE4QkQsZ0NBQWlCLENBQS9DQztBQUVuQixJQUFBLEFBQU1aLCtCQUFOO2FBQU1BLGVBQ1BhLElBQUcsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMseUJBQXlCO2dDQUQvR3ZCO1FBRWpCLElBQUksQ0FBQ2EsR0FBRyxHQUFHQTtRQUNYLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENB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