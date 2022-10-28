"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileContext;
    }
});
var _necessary = require("necessary");
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _array = require("../utilities/array");
var _tokens = require("../utilities/tokens");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var TRACE_LEVEL = _necessary.levels.TRACE_LEVEL, DEBUG_LEVEL = _necessary.levels.DEBUG_LEVEL, INFO_LEVEL = _necessary.levels.INFO_LEVEL, WARNING_LEVEL = _necessary.levels.WARNING_LEVEL, ERROR_LEVEL = _necessary.levels.ERROR_LEVEL, FATAL_LEVEL = _necessary.levels.FATAL_LEVEL;
var FileContext = /*#__PURE__*/ function() {
    function FileContext(filePath, tokens, node, rules, types, axioms, variables, combinators, constructors, releaseContext) {
        _classCallCheck(this, FileContext);
        this.filePath = filePath;
        this.tokens = tokens;
        this.node = node;
        this.rules = rules;
        this.types = types;
        this.axioms = axioms;
        this.variables = variables;
        this.combinators = combinators;
        this.constructors = constructors;
        this.releaseContext = releaseContext;
    }
    _createClass(FileContext, [
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.filePath;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var bubble = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = _toConsumableArray(this.rules);
                if (bubble) {
                    var releaseContextRules = this.releaseContext.getRules();
                    (0, _array.push)(rules, releaseContextRules);
                }
                return rules;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var bubble = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var types = _toConsumableArray(this.types);
                if (bubble) {
                    var releaseContextTypes = this.releaseContext.getTypes();
                    (0, _array.push)(types, releaseContextTypes);
                }
                return types;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var bubble = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = _toConsumableArray(this.axioms);
                if (bubble) {
                    var releaseContextAxioms = this.releaseContext.getAxioms();
                    (0, _array.push)(axioms, releaseContextAxioms);
                }
                return axioms;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var axioms = this.getAxioms(), labels = axioms.reduce(function(labels, axiom) {
                    var axiomLabels = axiom.getLabels();
                    (0, _array.push)(labels, axiomLabels);
                    return labels;
                }, []);
                return labels;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var bubble = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = _toConsumableArray(this.combinators);
                if (bubble) {
                    var releaseContextCombinators = this.releaseContext.getCombinators();
                    (0, _array.push)(combinators, releaseContextCombinators);
                }
                return combinators;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var bubble = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = _toConsumableArray(this.constructors);
                if (bubble) {
                    var releaseContextConstructors = this.releaseContext.getConstructors();
                    (0, _array.push)(constructors, releaseContextConstructors);
                }
                return constructors;
            }
        },
        {
            key: "getReleaseContext",
            value: function getReleaseContext() {
                return this.releaseContext;
            }
        },
        {
            key: "getMetaAssertions",
            value: function getMetaAssertions() {
                var metaAssertions = [];
                return metaAssertions;
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
            key: "findRuleByReferenceName",
            value: function findRuleByReferenceName(referenceName) {
                var label = referenceName, rules = this.getRules(), rule = rules.find(function(rule) {
                    var ruleLabels = rule.getLabels(), ruleLabelsIncludesLabel = ruleLabels.includes(label);
                    if (ruleLabelsIncludesLabel) {
                        return true;
                    }
                }) || null;
                return rule;
            }
        },
        {
            key: "findAxiomByReferenceName",
            value: function findAxiomByReferenceName(referenceName) {
                var label = referenceName, axioms = this.getAxioms(), axiom = axioms.find(function(axiom) {
                    var axiomLabels = axiom.getLabels(), axiomLabelsIncludesLabel = axiomLabels.includes(label);
                    if (axiomLabelsIncludesLabel) {
                        return true;
                    }
                }) || null;
                return axiom;
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var name = variableName, variable = this.variables.find(function(variable) {
                    var matches = variable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "isDerived",
            value: function isDerived() {
                var derived = false;
                return derived;
            }
        },
        {
            key: "isLabelPresent",
            value: function isLabelPresent(label) {
                var labels = this.getLabels(), labelsIncludesLabel = labels.includes(label), labelPresent = labelsIncludesLabel; ///
                return labelPresent;
            }
        },
        {
            key: "matchMetaAssertion",
            value: function matchMetaAssertion(metaAssertion) {
                var metaAssertionMatches = false;
                return metaAssertionMatches;
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                var type = this.findTypeByTypeName(typeName), typePresent = type !== null;
                return typePresent;
            }
        },
        {
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                var variable = this.findVariableByVariableName(variableName), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "addType",
            value: function addType(type) {
                this.types.push(type);
            }
        },
        {
            key: "addRule",
            value: function addRule(rule) {
                this.rules.push(rule);
            }
        },
        {
            key: "addAxiom",
            value: function addAxiom(axiom) {
                this.axioms.push(axiom);
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                this.variables.push(variable);
            }
        },
        {
            key: "addCombinator",
            value: function addCombinator(combinator) {
                this.combinators.push(combinator);
            }
        },
        {
            key: "addConstructor",
            value: function addConstructor(constructor) {
                this.constructors.push(constructor);
            }
        },
        {
            key: "trace",
            value: function trace(message, node) {
                this.log(node, TRACE_LEVEL, message);
            }
        },
        {
            key: "debug",
            value: function debug(message, node) {
                this.log(node, DEBUG_LEVEL, message);
            }
        },
        {
            key: "info",
            value: function info(message, node) {
                this.log(node, INFO_LEVEL, message);
            }
        },
        {
            key: "warning",
            value: function warning(message, node) {
                this.log(node, WARNING_LEVEL, message);
            }
        },
        {
            key: "error",
            value: function error(message, node) {
                this.log(node, ERROR_LEVEL, message);
            }
        },
        {
            key: "fatal",
            value: function fatal(message, node) {
                this.log(node, FATAL_LEVEL, message);
            }
        },
        {
            key: "log",
            value: function log(node, level, message) {
                var leastLineIndex = (0, _tokens.leastLineIndexFromNodeAndTokens)(node, this.tokens), greatestLineIndex = (0, _tokens.greatestLineIndexFromNodeAndTokens)(node, this.tokens);
                this.releaseContext.log(level, message, this.filePath, leastLineIndex, greatestLineIndex);
            }
        }
    ], [
        {
            key: "fromReleaseContextAndFilePath",
            value: function fromReleaseContextAndFilePath(releaseContext, filePath) {
                var fileContent = releaseContext.getFileContent(filePath), content = fileContent, tokens = releaseContext.tokenise(content), node = releaseContext.parse(tokens);
                (0, _occamGrammarUtilities.rewriteNodes)(node);
                var rules = [], types = [], axioms = [], variables = [], combinators = [], constructors = [], fileContext = new FileContext(filePath, tokens, node, rules, types, axioms, variables, combinators, constructors, releaseContext);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmNvbnN0IHsgVFJBQ0VfTEVWRUwsIERFQlVHX0xFVkVMLCBJTkZPX0xFVkVMLCBXQVJOSU5HX0xFVkVMLCBFUlJPUl9MRVZFTCwgRkFUQUxfTEVWRUwgfSA9IGxldmVscztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBydWxlcywgdHlwZXMsIGF4aW9tcywgdmFyaWFibGVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtcbiAgICAgIC4uLnRoaXMucnVsZXNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0VHlwZXMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW1xuICAgICAgLi4udGhpcy50eXBlc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtcbiAgICAgIC4uLnRoaXMuYXhpb21zXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgbGFiZWxzID0gYXhpb21zLnJlZHVjZSgobGFiZWxzLCBheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVscztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtcbiAgICAgIC4uLnRoaXMuY29tYmluYXRvcnNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0TWV0YUFzc2VydGlvbnMoKSB7XG4gICAgY29uc3QgbWV0YUFzc2VydGlvbnMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVMYWJlbHNJbmNsdWRlc0xhYmVsID0gcnVsZUxhYmVscy5pbmNsdWRlcyhsYWJlbCk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTGFiZWxzSW5jbHVkZXNMYWJlbCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCksXG4gICAgICAgICAgICAgICAgICBheGlvbUxhYmVsc0luY2x1ZGVzTGFiZWwgPSBheGlvbUxhYmVscy5pbmNsdWRlcyhsYWJlbCk7XG5cbiAgICAgICAgICAgIGlmIChheGlvbUxhYmVsc0luY2x1ZGVzTGFiZWwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHRoaXMudmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNEZXJpdmVkKCkge1xuICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBkZXJpdmVkO1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnQobGFiZWwpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsc0luY2x1ZGVzTGFiZWwgPSBsYWJlbHMuaW5jbHVkZXMobGFiZWwpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGxhYmVsc0luY2x1ZGVzTGFiZWw7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIG1hdGNoTWV0YUFzc2VydGlvbihtZXRhQXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgbWV0YUFzc2VydGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBtZXRhQXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgfVxuXG4gIGFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlKSB7IHRoaXMubG9nKG5vZGUsIFRSQUNFX0xFVkVMLCBtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5sb2cobm9kZSwgREVCVUdfTEVWRUwsIG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMubG9nKG5vZGUsIElORk9fTEVWRUwsIG1lc3NhZ2UpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMubG9nKG5vZGUsIFdBUk5JTkdfTEVWRUwsIG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmxvZyhub2RlLCBFUlJPUl9MRVZFTCwgbWVzc2FnZSk7IH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlKSB7IHRoaXMubG9nKG5vZGUsIEZBVEFMX0xFVkVMLCBtZXNzYWdlKTsgfVxuXG4gIGxvZyhub2RlLCBsZXZlbCwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucyksXG4gICAgICAgICAgZ3JlYXRlc3RMaW5lSW5kZXggPSBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMucmVsZWFzZUNvbnRleHQubG9nKGxldmVsLCBtZXNzYWdlLCB0aGlzLmZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWxlYXNlQ29udGV4dEFuZEZpbGVQYXRoKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gcmVsZWFzZUNvbnRleHQuZ2V0RmlsZUNvbnRlbnQoZmlsZVBhdGgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlQ29udGVudCwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IHJlbGVhc2VDb250ZXh0LnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSByZWxlYXNlQ29udGV4dC5wYXJzZSh0b2tlbnMpO1xuXG4gICAgcmV3cml0ZU5vZGVzKG5vZGUpO1xuXG4gICAgY29uc3QgcnVsZXMgPSBbXSxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQoZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgcnVsZXMsIHR5cGVzLCBheGlvbXMsIHZhcmlhYmxlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwiVFJBQ0VfTEVWRUwiLCJsZXZlbHMiLCJERUJVR19MRVZFTCIsIklORk9fTEVWRUwiLCJXQVJOSU5HX0xFVkVMIiwiRVJST1JfTEVWRUwiLCJGQVRBTF9MRVZFTCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsInJ1bGVzIiwidHlwZXMiLCJheGlvbXMiLCJ2YXJpYWJsZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0UnVsZXMiLCJidWJibGUiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwicHVzaCIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwicmVkdWNlIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImdldFZhcmlhYmxlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRNZXRhQXNzZXJ0aW9ucyIsIm1ldGFBc3NlcnRpb25zIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwibGFiZWwiLCJydWxlIiwicnVsZUxhYmVscyIsInJ1bGVMYWJlbHNJbmNsdWRlc0xhYmVsIiwiaW5jbHVkZXMiLCJmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUiLCJheGlvbUxhYmVsc0luY2x1ZGVzTGFiZWwiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWUiLCJ2YXJpYWJsZSIsIm1hdGNoTmFtZSIsImlzRGVyaXZlZCIsImRlcml2ZWQiLCJpc0xhYmVsUHJlc2VudCIsImxhYmVsc0luY2x1ZGVzTGFiZWwiLCJsYWJlbFByZXNlbnQiLCJtYXRjaE1ldGFBc3NlcnRpb24iLCJtZXRhQXNzZXJ0aW9uIiwibWV0YUFzc2VydGlvbk1hdGNoZXMiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImFkZFR5cGUiLCJhZGRSdWxlIiwiYWRkQXhpb20iLCJhZGRWYXJpYWJsZSIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsInRyYWNlIiwibWVzc2FnZSIsImxvZyIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwibGV2ZWwiLCJsZWFzdExpbmVJbmRleCIsImxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJncmVhdGVzdExpbmVJbmRleCIsImdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJmcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aCIsImZpbGVDb250ZW50IiwiZ2V0RmlsZUNvbnRlbnQiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInJld3JpdGVOb2RlcyIsImZpbGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSRTtxQ0FDTTtxQkFFUjtzQkFDK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRixJQUFRQyxjQUFrRkMsaUJBQU0sQ0FBeEZELGFBQWFFLGNBQXFFRCxpQkFBTSxDQUEzRUMsYUFBYUMsYUFBd0RGLGlCQUFNLENBQTlERSxZQUFZQyxnQkFBNENILGlCQUFNLENBQWxERyxlQUFlQyxjQUE2QkosaUJBQU0sQ0FBbkNJLGFBQWFDLGNBQWdCTCxpQkFBTSxDQUF0Qks7QUFFM0QsSUFBQSxBQUFNUCw0QkFBTjthQUFNQSxZQUNQUSxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxjQUFjOzhCQUQzRmpCO1FBRWpCLElBQUksQ0FBQ1EsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUND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