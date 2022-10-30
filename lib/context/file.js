"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _occamGrammarUtilities = require("occam-grammar-utilities");
var _logging = /*#__PURE__*/ _interopRequireDefault(require("../mixins/logging"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var FileContext = /*#__PURE__*/ function() {
    function FileContext(filePath, context, tokens, node, rules, types, axioms, variables, combinators, constructors) {
        _classCallCheck(this, FileContext);
        this.filePath = filePath;
        this.context = context;
        this.tokens = tokens;
        this.node = node;
        this.rules = rules;
        this.types = types;
        this.axioms = axioms;
        this.variables = variables;
        this.combinators = combinators;
        this.constructors = constructors;
    }
    _createClass(FileContext, [
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.filePath;
            }
        },
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
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
                    var releaseContextRules = this.context.getRules();
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
                    var releaseContextTypes = this.context.getTypes();
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
                    var releaseContextAxioms = this.context.getAxioms();
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
                    var releaseContextCombinators = this.context.getCombinators();
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
                    var releaseContextConstructors = this.context.getConstructors();
                    (0, _array.push)(constructors, releaseContextConstructors);
                }
                return constructors;
            }
        },
        {
            key: "getReleaseContext",
            value: function getReleaseContext() {
                return this.context;
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
            key: "halt",
            value: function halt(node) {
                var leastLineIndex = (0, _tokens.leastLineIndexFromNodeAndTokens)(node, this.tokens), greatestLineIndex = (0, _tokens.greatestLineIndexFromNodeAndTokens)(node, this.tokens);
                this.context.halt(this.filePath, leastLineIndex, greatestLineIndex);
            }
        },
        {
            key: "begin",
            value: function begin(node) {
                var leastLineIndex = (0, _tokens.leastLineIndexFromNodeAndTokens)(node, this.tokens), greatestLineIndex = (0, _tokens.greatestLineIndexFromNodeAndTokens)(node, this.tokens);
                this.context.begin(this.filePath, leastLineIndex, greatestLineIndex);
            }
        },
        {
            key: "complete",
            value: function complete(node) {
                var leastLineIndex = (0, _tokens.leastLineIndexFromNodeAndTokens)(node, this.tokens), greatestLineIndex = (0, _tokens.greatestLineIndexFromNodeAndTokens)(node, this.tokens);
                this.context.complete(this.filePath, leastLineIndex, greatestLineIndex);
            }
        }
    ], [
        {
            key: "fromReleaseContextAndFilePath",
            value: function fromReleaseContextAndFilePath(releaseContext, filePath) {
                var file = releaseContext.getFile(filePath), content = file.getContent(), tokens = releaseContext.tokenise(content), node = releaseContext.parse(tokens);
                (0, _occamGrammarUtilities.rewriteNodes)(node);
                var context = releaseContext, rules = [], types = [], axioms = [], variables = [], combinators = [], constructors = [], fileContext = new FileContext(filePath, context, tokens, node, rules, types, axioms, variables, combinators, constructors);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();
Object.assign(FileContext.prototype, _logging.default);
var _default = FileContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMsIGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuXG5jbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVQYXRoLCBjb250ZXh0LCB0b2tlbnMsIG5vZGUsIHJ1bGVzLCB0eXBlcywgYXhpb21zLCB2YXJpYWJsZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpIHtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0UnVsZXMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW1xuICAgICAgLi4udGhpcy5ydWxlc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gdGhpcy5jb250ZXh0LmdldFJ1bGVzKCk7XG5cbiAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldFR5cGVzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtcbiAgICAgIC4uLnRoaXMudHlwZXNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHRoaXMuY29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtcbiAgICAgIC4uLnRoaXMuYXhpb21zXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5jb250ZXh0LmdldEF4aW9tcygpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgY29uc3QgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBsYWJlbHMgPSBheGlvbXMucmVkdWNlKChsYWJlbHMsIGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICAgICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW1xuICAgICAgLi4udGhpcy5jb21iaW5hdG9yc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhidWJibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3RvcnNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSB0aGlzLmNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRNZXRhQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBtZXRhQXNzZXJ0aW9ucyA9IFtdO1xuXG4gICAgcmV0dXJuIG1ldGFBc3NlcnRpb25zO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpLFxuICAgICAgICAgICAgICAgICAgcnVsZUxhYmVsc0luY2x1ZGVzTGFiZWwgPSBydWxlTGFiZWxzLmluY2x1ZGVzKGxhYmVsKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVMYWJlbHNJbmNsdWRlc0xhYmVsKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKSxcbiAgICAgICAgICAgICAgICAgIGF4aW9tTGFiZWxzSW5jbHVkZXNMYWJlbCA9IGF4aW9tTGFiZWxzLmluY2x1ZGVzKGxhYmVsKTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tTGFiZWxzSW5jbHVkZXNMYWJlbCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gdGhpcy52YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc0Rlcml2ZWQoKSB7XG4gICAgY29uc3QgZGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIGRlcml2ZWQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudChsYWJlbCkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWxzSW5jbHVkZXNMYWJlbCA9IGxhYmVscy5pbmNsdWRlcyhsYWJlbCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gbGFiZWxzSW5jbHVkZXNMYWJlbDsgLy8vXG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgbWF0Y2hNZXRhQXNzZXJ0aW9uKG1ldGFBc3NlcnRpb24pIHtcbiAgICBjb25zdCBtZXRhQXNzZXJ0aW9uTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1ldGFBc3NlcnRpb25NYXRjaGVzO1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGhhbHQobm9kZSkge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucyksXG4gICAgICAgICAgZ3JlYXRlc3RMaW5lSW5kZXggPSBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMuY29udGV4dC5oYWx0KHRoaXMuZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7XG4gIH1cblxuICBiZWdpbihub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jb250ZXh0LmJlZ2luKHRoaXMuZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7XG4gIH1cblxuICBjb21wbGV0ZShub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jb250ZXh0LmNvbXBsZXRlKHRoaXMuZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlbGVhc2VDb250ZXh0QW5kRmlsZVBhdGgocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZSA9IHJlbGVhc2VDb250ZXh0LmdldEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSByZWxlYXNlQ29udGV4dC50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcmVsZWFzZUNvbnRleHQucGFyc2UodG9rZW5zKTtcblxuICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSByZWxlYXNlQ29udGV4dCwgLy8vXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQoZmlsZVBhdGgsIGNvbnRleHQsIHRva2Vucywgbm9kZSwgcnVsZXMsIHR5cGVzLCBheGlvbXMsIHZhcmlhYmxlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihGaWxlQ29udGV4dC5wcm90b3R5cGUsIGxvZ2dpbmdNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsImZpbGVQYXRoIiwiY29udGV4dCIsInRva2VucyIsIm5vZGUiLCJydWxlcyIsInR5cGVzIiwiYXhpb21zIiwidmFyaWFibGVzIiwiY29tYmluYXRvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRGaWxlUGF0aCIsImdldENvbnRleHQiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0UnVsZXMiLCJidWJibGUiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwicHVzaCIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGFiZWxzIiwibGFiZWxzIiwicmVkdWNlIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImdldFZhcmlhYmxlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRNZXRhQXNzZXJ0aW9ucyIsIm1ldGFBc3NlcnRpb25zIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwibGFiZWwiLCJydWxlIiwicnVsZUxhYmVscyIsInJ1bGVMYWJlbHNJbmNsdWRlc0xhYmVsIiwiaW5jbHVkZXMiLCJmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUiLCJheGlvbUxhYmVsc0luY2x1ZGVzTGFiZWwiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsIm5hbWUiLCJ2YXJpYWJsZSIsIm1hdGNoTmFtZSIsImlzRGVyaXZlZCIsImRlcml2ZWQiLCJpc0xhYmVsUHJlc2VudCIsImxhYmVsc0luY2x1ZGVzTGFiZWwiLCJsYWJlbFByZXNlbnQiLCJtYXRjaE1ldGFBc3NlcnRpb24iLCJtZXRhQXNzZXJ0aW9uIiwibWV0YUFzc2VydGlvbk1hdGNoZXMiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImFkZFR5cGUiLCJhZGRSdWxlIiwiYWRkQXhpb20iLCJhZGRWYXJpYWJsZSIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImhhbHQiLCJsZWFzdExpbmVJbmRleCIsImxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJncmVhdGVzdExpbmVJbmRleCIsImdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJiZWdpbiIsImNvbXBsZXRlIiwiZnJvbVJlbGVhc2VDb250ZXh0QW5kRmlsZVBhdGgiLCJyZWxlYXNlQ29udGV4dCIsImZpbGUiLCJnZXRGaWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwicmV3cml0ZU5vZGVzIiwiZmlsZUNvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJsb2dnaW5nTWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzU0E7OztlQUFBOzs7cUNBcFM2Qjs0REFFSDtxQkFFTDtzQkFDK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBGLElBQUEsQUFBTUEsNEJBMlJILEFBM1JIO2FBQU1BLFlBQ1FDLFFBQVEsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7OEJBRG5HVjtRQUVGLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7aUJBWGxC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