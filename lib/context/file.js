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
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var labels = [];
                var rules = this.getRules(), axioms = this.getAxioms();
                rules.forEach(function(rule) {
                    var ruleLabels = rule.getLabels();
                    (0, _array.push)(labels, ruleLabels);
                });
                axioms.forEach(function(axiom) {
                    var axiomLabels = axiom.getLabels();
                    (0, _array.push)(labels, axiomLabels);
                });
                return labels;
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
            key: "getAssertions",
            value: function getAssertions() {
                var assertions = []; ///
                return assertions;
            }
        },
        {
            key: "getMetaAssertions",
            value: function getMetaAssertions() {
                var metaAssertions = []; ///
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
            key: "findLabelByLabelName",
            value: function findLabelByLabelName(labelName) {
                var name = labelName, labels = this.getLabels(), label = labels.find(function(label) {
                    var matches = label.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return label;
            }
        },
        {
            key: "findRuleByReferenceName",
            value: function findRuleByReferenceName(referenceName) {
                var labelName = referenceName, rules = this.getRules(), rule = rules.find(function(rule) {
                    var ruleMatchesLabelName = rule.matchLabelName(labelName);
                    if (ruleMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return rule;
            }
        },
        {
            key: "findAxiomByReferenceName",
            value: function findAxiomByReferenceName(referenceName) {
                var labelName = referenceName, axioms = this.getAxioms(), axiom = axioms.find(function(axiom) {
                    var axiomMatchesLabelName = axiom.matchLabelName(labelName);
                    if (axiomMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return axiom;
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var name = variableName, variables = this.getVariables(), variable = variables.find(function(variable) {
                    var matches = variable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return variable;
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
            key: "isLabelPresentByLabelName",
            value: function isLabelPresentByLabelName(labelName) {
                var label = this.findLabelByLabelName(labelName), labelPresent = label !== null;
                return labelPresent;
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
        },
        {
            key: "asJSON",
            value: function asJSON() {
                var _this = this;
                var filePath = this.getFilePath(), rulesJSON = this.rules.map(function(rule) {
                    return rule.asJSON(_this.tokens);
                }), typesJSON = this.types.map(function(type) {
                    return type.asJSON(_this.tokens);
                }), axiomsJSON = this.axioms.map(function(axiom) {
                    return axiom.asJSON(_this.tokens);
                }), variablesJSON = this.variables.map(function(variable) {
                    return variable.asJSON(_this.tokens);
                }), combinatorsJSON = this.combinators.map(function(combinator) {
                    return combinator.asJSON(_this.tokens);
                }), constructorsJSON = this.constructors.map(function(constructor) {
                    return constructor.asJSON(_this.tokens);
                }), path = filePath, rules = rulesJSON, types = typesJSON, axioms = axiomsJSON, variables = variablesJSON, combinators = combinatorsJSON, constructors = constructorsJSON, json = {
                    path: path,
                    rules: rules,
                    types: types,
                    axioms: axioms,
                    variables: variables,
                    combinators: combinators,
                    constructors: constructors
                };
                return json;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMsIGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuXG5jbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVQYXRoLCBjb250ZXh0LCB0b2tlbnMsIG5vZGUsIHJ1bGVzLCB0eXBlcywgYXhpb21zLCB2YXJpYWJsZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpIHtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCk7XG5cbiAgICBydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFJ1bGVzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtcbiAgICAgIC4uLnRoaXMucnVsZXNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMuY29udGV4dC5nZXRSdWxlcygpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRUeXBlcyhidWJibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXG4gICAgICAuLi50aGlzLnR5cGVzXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSB0aGlzLmNvbnRleHQuZ2V0VHlwZXMoKTtcblxuICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXG4gICAgICAuLi50aGlzLmF4aW9tc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW1xuICAgICAgLi4udGhpcy5jb21iaW5hdG9yc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhidWJibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3RvcnNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSB0aGlzLmNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9ucyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gYXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldE1ldGFBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IG1ldGFBc3NlcnRpb25zID0gW107ICAvLy9cblxuICAgIHJldHVybiBtZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZExhYmVsQnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgIC8vL1xuICAgICAgICAgIGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTWF0Y2hlc0xhYmVsTmFtZSA9IHJ1bGUubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVNYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tTWF0Y2hlc0xhYmVsTmFtZSA9IGF4aW9tLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChheGlvbU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgaGFsdChub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jb250ZXh0LmhhbHQodGhpcy5maWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTtcbiAgfVxuXG4gIGJlZ2luKG5vZGUpIHtcbiAgICBjb25zdCBsZWFzdExpbmVJbmRleCA9IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpLFxuICAgICAgICAgIGdyZWF0ZXN0TGluZUluZGV4ID0gZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLmNvbnRleHQuYmVnaW4odGhpcy5maWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTtcbiAgfVxuXG4gIGNvbXBsZXRlKG5vZGUpIHtcbiAgICBjb25zdCBsZWFzdExpbmVJbmRleCA9IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpLFxuICAgICAgICAgIGdyZWF0ZXN0TGluZUluZGV4ID0gZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLmNvbnRleHQuY29tcGxldGUodGhpcy5maWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTtcbiAgfVxuXG4gIGFzSlNPTigpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBydWxlc0pTT04gPSB0aGlzLnJ1bGVzLm1hcCgocnVsZSkgPT4gcnVsZS5hc0pTT04odGhpcy50b2tlbnMpKSxcbiAgICAgICAgICB0eXBlc0pTT04gPSB0aGlzLnR5cGVzLm1hcCgodHlwZSkgPT4gdHlwZS5hc0pTT04odGhpcy50b2tlbnMpKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gdGhpcy5heGlvbXMubWFwKChheGlvbSkgPT4gYXhpb20uYXNKU09OKHRoaXMudG9rZW5zKSksXG4gICAgICAgICAgdmFyaWFibGVzSlNPTiA9IHRoaXMudmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHZhcmlhYmxlLmFzSlNPTih0aGlzLnRva2VucykpLFxuICAgICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IHRoaXMuY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiBjb21iaW5hdG9yLmFzSlNPTih0aGlzLnRva2VucykpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSB0aGlzLmNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiBjb25zdHJ1Y3Rvci5hc0pTT04odGhpcy50b2tlbnMpKSxcbiAgICAgICAgICBwYXRoID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVzID0gdHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gYXhpb21zSlNPTiwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0pTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb21iaW5hdG9ycyxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlID0gcmVsZWFzZUNvbnRleHQuZ2V0RmlsZShmaWxlUGF0aCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IHJlbGVhc2VDb250ZXh0LnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSByZWxlYXNlQ29udGV4dC5wYXJzZSh0b2tlbnMpO1xuXG4gICAgcmV3cml0ZU5vZGVzKG5vZGUpO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHJlbGVhc2VDb250ZXh0LCAvLy9cbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChmaWxlUGF0aCwgY29udGV4dCwgdG9rZW5zLCBub2RlLCBydWxlcywgdHlwZXMsIGF4aW9tcywgdmFyaWFibGVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEZpbGVDb250ZXh0LnByb3RvdHlwZSwgbG9nZ2luZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVDb250ZXh0O1xuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwiZmlsZVBhdGgiLCJjb250ZXh0IiwidG9rZW5zIiwibm9kZSIsInJ1bGVzIiwidHlwZXMiLCJheGlvbXMiLCJ2YXJpYWJsZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldEZpbGVQYXRoIiwiZ2V0Q29udGV4dCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRWYXJpYWJsZXMiLCJnZXRMYWJlbHMiLCJsYWJlbHMiLCJnZXRSdWxlcyIsImdldEF4aW9tcyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsInB1c2giLCJheGlvbSIsImF4aW9tTGFiZWxzIiwiYnViYmxlIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRBc3NlcnRpb25zIiwiYXNzZXJ0aW9ucyIsImdldE1ldGFBc3NlcnRpb25zIiwibWV0YUFzc2VydGlvbnMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kTGFiZWxCeUxhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm5hbWUiLCJsYWJlbCIsIm1hdGNoTmFtZSIsImZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lIiwicmVmZXJlbmNlTmFtZSIsInJ1bGVNYXRjaGVzTGFiZWxOYW1lIiwibWF0Y2hMYWJlbE5hbWUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUiLCJheGlvbU1hdGNoZXNMYWJlbE5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUiLCJsYWJlbFByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZFZhcmlhYmxlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiaGFsdCIsImxlYXN0TGluZUluZGV4IiwibGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsImdyZWF0ZXN0TGluZUluZGV4IiwiZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsImJlZ2luIiwiY29tcGxldGUiLCJhc0pTT04iLCJydWxlc0pTT04iLCJtYXAiLCJ0eXBlc0pTT04iLCJheGlvbXNKU09OIiwidmFyaWFibGVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbnN0cnVjdG9yc0pTT04iLCJwYXRoIiwianNvbiIsImZyb21SZWxlYXNlQ29udGV4dEFuZEZpbGVQYXRoIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlIiwiZ2V0RmlsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInJld3JpdGVOb2RlcyIsImZpbGVDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwibG9nZ2luZ01peGlucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNFVBOzs7ZUFBQTs7O3FDQTFVNkI7NERBRUg7cUJBRUw7c0JBQytEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVw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