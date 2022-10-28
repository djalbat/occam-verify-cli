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
                var file = releaseContext.getFile(filePath), content = file.getContent(), tokens = releaseContext.tokenise(content), node = releaseContext.parse(tokens);
                (0, _occamGrammarUtilities.rewriteNodes)(node);
                var rules = [], types = [], axioms = [], variables = [], combinators = [], constructors = [], fileContext = new FileContext(filePath, tokens, node, rules, types, axioms, variables, combinators, constructors, releaseContext);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGxldmVscyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmNvbnN0IHsgVFJBQ0VfTEVWRUwsIERFQlVHX0xFVkVMLCBJTkZPX0xFVkVMLCBXQVJOSU5HX0xFVkVMLCBFUlJPUl9MRVZFTCwgRkFUQUxfTEVWRUwgfSA9IGxldmVscztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBydWxlcywgdHlwZXMsIGF4aW9tcywgdmFyaWFibGVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dCkge1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtcbiAgICAgIC4uLnRoaXMucnVsZXNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0VHlwZXMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW1xuICAgICAgLi4udGhpcy50eXBlc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtcbiAgICAgIC4uLnRoaXMuYXhpb21zXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgbGFiZWxzID0gYXhpb21zLnJlZHVjZSgobGFiZWxzLCBheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVscztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtcbiAgICAgIC4uLnRoaXMuY29tYmluYXRvcnNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXG4gICAgICAuLi50aGlzLmNvbnN0cnVjdG9yc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0TWV0YUFzc2VydGlvbnMoKSB7XG4gICAgY29uc3QgbWV0YUFzc2VydGlvbnMgPSBbXTtcblxuICAgIHJldHVybiBtZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKSxcbiAgICAgICAgICAgICAgICAgIHJ1bGVMYWJlbHNJbmNsdWRlc0xhYmVsID0gcnVsZUxhYmVscy5pbmNsdWRlcyhsYWJlbCk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTGFiZWxzSW5jbHVkZXNMYWJlbCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCksXG4gICAgICAgICAgICAgICAgICBheGlvbUxhYmVsc0luY2x1ZGVzTGFiZWwgPSBheGlvbUxhYmVscy5pbmNsdWRlcyhsYWJlbCk7XG5cbiAgICAgICAgICAgIGlmIChheGlvbUxhYmVsc0luY2x1ZGVzTGFiZWwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IHRoaXMudmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNEZXJpdmVkKCkge1xuICAgIGNvbnN0IGRlcml2ZWQgPSBmYWxzZTtcblxuICAgIHJldHVybiBkZXJpdmVkO1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnQobGFiZWwpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsc0luY2x1ZGVzTGFiZWwgPSBsYWJlbHMuaW5jbHVkZXMobGFiZWwpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGxhYmVsc0luY2x1ZGVzTGFiZWw7IC8vL1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIG1hdGNoTWV0YUFzc2VydGlvbihtZXRhQXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgbWV0YUFzc2VydGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBtZXRhQXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgfVxuXG4gIGFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlKSB7IHRoaXMubG9nKG5vZGUsIFRSQUNFX0xFVkVMLCBtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5sb2cobm9kZSwgREVCVUdfTEVWRUwsIG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMubG9nKG5vZGUsIElORk9fTEVWRUwsIG1lc3NhZ2UpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMubG9nKG5vZGUsIFdBUk5JTkdfTEVWRUwsIG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmxvZyhub2RlLCBFUlJPUl9MRVZFTCwgbWVzc2FnZSk7IH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlKSB7IHRoaXMubG9nKG5vZGUsIEZBVEFMX0xFVkVMLCBtZXNzYWdlKTsgfVxuXG4gIGxvZyhub2RlLCBsZXZlbCwgbWVzc2FnZSkge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucyksXG4gICAgICAgICAgZ3JlYXRlc3RMaW5lSW5kZXggPSBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMucmVsZWFzZUNvbnRleHQubG9nKGxldmVsLCBtZXNzYWdlLCB0aGlzLmZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWxlYXNlQ29udGV4dEFuZEZpbGVQYXRoKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGUgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gcmVsZWFzZUNvbnRleHQudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0LnBhcnNlKHRva2Vucyk7XG5cbiAgICByZXdyaXRlTm9kZXMobm9kZSk7XG5cbiAgICBjb25zdCBydWxlcyA9IFtdLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBydWxlcywgdHlwZXMsIGF4aW9tcywgdmFyaWFibGVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJUUkFDRV9MRVZFTCIsImxldmVscyIsIkRFQlVHX0xFVkVMIiwiSU5GT19MRVZFTCIsIldBUk5JTkdfTEVWRUwiLCJFUlJPUl9MRVZFTCIsIkZBVEFMX0xFVkVMIiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwicnVsZXMiLCJ0eXBlcyIsImF4aW9tcyIsInZhcmlhYmxlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHQiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRSdWxlcyIsImJ1YmJsZSIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJwdXNoIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJyZWR1Y2UiLCJheGlvbSIsImF4aW9tTGFiZWxzIiwiZ2V0VmFyaWFibGVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldE1ldGFBc3NlcnRpb25zIiwibWV0YUFzc2VydGlvbnMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWUiLCJsYWJlbCIsInJ1bGUiLCJydWxlTGFiZWxzIiwicnVsZUxhYmVsc0luY2x1ZGVzTGFiZWwiLCJpbmNsdWRlcyIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTGFiZWxzSW5jbHVkZXNMYWJlbCIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwibmFtZSIsInZhcmlhYmxlIiwibWF0Y2hOYW1lIiwiaXNEZXJpdmVkIiwiZGVyaXZlZCIsImlzTGFiZWxQcmVzZW50IiwibGFiZWxzSW5jbHVkZXNMYWJlbCIsImxhYmVsUHJlc2VudCIsIm1hdGNoTWV0YUFzc2VydGlvbiIsIm1ldGFBc3NlcnRpb24iLCJtZXRhQXNzZXJ0aW9uTWF0Y2hlcyIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZFZhcmlhYmxlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwidHJhY2UiLCJtZXNzYWdlIiwibG9nIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJsZXZlbCIsImxlYXN0TGluZUluZGV4IiwibGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsImdyZWF0ZXN0TGluZUluZGV4IiwiZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsImZyb21SZWxlYXNlQ29udGV4dEFuZEZpbGVQYXRoIiwiZmlsZSIsImdldEZpbGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJyZXdyaXRlTm9kZXMiLCJmaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7eUJBUkU7cUNBQ007cUJBRVI7c0JBQytEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBUUMsY0FBa0ZDLGlCQUFNLENBQXhGRCxhQUFhRSxjQUFxRUQsaUJBQU0sQ0FBM0VDLGFBQWFDLGFBQXdERixpQkFBTSxDQUE5REUsWUFBWUMsZ0JBQTRDSCxpQkFBTSxDQUFsREcsZUFBZUMsY0FBNkJKLGlCQUFNLENBQW5DSSxhQUFhQyxjQUFnQkwsaUJBQU0sQ0FBdEJLO0FBRTNELElBQUEsQUFBTVAsNEJBQU47YUFBTUEsWUFDUFEsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsY0FBYzs4QkFEM0ZqQjtRQUVqQixJQUFJLENBQUNRLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FB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