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
            key: "toJSON",
            value: function toJSON() {
                var _this = this;
                var filePath = this.getFilePath(), rulesJSON = this.rules.map(function(rule) {
                    var ruleJSON = rule.toJSON(_this.tokens);
                    return ruleJSON;
                }), typesJSON = this.types.map(function(type) {
                    var typeJSON = type.toJSON(_this.tokens);
                    return typeJSON;
                }), axiomsJSON = this.axioms.map(function(axiom) {
                    var axiomJSON = axiom.toJSON(_this.tokens);
                    return axiomJSON;
                }), combinatorsJSON = this.combinators.map(function(combinator) {
                    var combinatorJSON = combinator.toJSON(_this.tokens);
                    return combinatorJSON;
                }), constructorsJSON = this.constructors.map(function(constructor) {
                    var constructorJSON = constructor.toJSON(_this.tokens);
                    return constructorJSON;
                }), path = filePath, rules = rulesJSON, types = typesJSON, axioms = axiomsJSON, combinators = combinatorsJSON, constructors = constructorsJSON, json = {
                    path: path,
                    rules: rules,
                    types: types,
                    axioms: axioms,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgbG9nZ2luZ01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2xvZ2dpbmdcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMsIGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuXG5jbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGZpbGVQYXRoLCBjb250ZXh0LCB0b2tlbnMsIG5vZGUsIHJ1bGVzLCB0eXBlcywgYXhpb21zLCB2YXJpYWJsZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpIHtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCk7XG5cbiAgICBydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFJ1bGVzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtcbiAgICAgIC4uLnRoaXMucnVsZXNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMuY29udGV4dC5nZXRSdWxlcygpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRUeXBlcyhidWJibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXG4gICAgICAuLi50aGlzLnR5cGVzXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSB0aGlzLmNvbnRleHQuZ2V0VHlwZXMoKTtcblxuICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXG4gICAgICAuLi50aGlzLmF4aW9tc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW1xuICAgICAgLi4udGhpcy5jb21iaW5hdG9yc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhidWJibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW1xuICAgICAgLi4udGhpcy5jb25zdHJ1Y3RvcnNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSB0aGlzLmNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9ucyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gYXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldE1ldGFBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IG1ldGFBc3NlcnRpb25zID0gW107ICAvLy9cblxuICAgIHJldHVybiBtZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZExhYmVsQnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgIC8vL1xuICAgICAgICAgIGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTWF0Y2hlc0xhYmVsTmFtZSA9IHJ1bGUubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVNYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tTWF0Y2hlc0xhYmVsTmFtZSA9IGF4aW9tLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChheGlvbU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgaGFsdChub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5jb250ZXh0LmhhbHQodGhpcy5maWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTtcbiAgfVxuXG4gIGJlZ2luKG5vZGUpIHtcbiAgICBjb25zdCBsZWFzdExpbmVJbmRleCA9IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpLFxuICAgICAgICAgIGdyZWF0ZXN0TGluZUluZGV4ID0gZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLmNvbnRleHQuYmVnaW4odGhpcy5maWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTtcbiAgfVxuXG4gIGNvbXBsZXRlKG5vZGUpIHtcbiAgICBjb25zdCBsZWFzdExpbmVJbmRleCA9IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpLFxuICAgICAgICAgIGdyZWF0ZXN0TGluZUluZGV4ID0gZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLmNvbnRleHQuY29tcGxldGUodGhpcy5maWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBydWxlc0pTT04gPSB0aGlzLnJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0eXBlc0pTT04gPSB0aGlzLnR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0eXBlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBheGlvbXNKU09OID0gdGhpcy5heGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGF4aW9tSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb21iaW5hdG9yc0pTT04gPSB0aGlzLmNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb21iaW5hdG9ySlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gdGhpcy5jb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9ySlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwYXRoID0gZmlsZVBhdGgsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVzID0gdHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gYXhpb21zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICB0eXBlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWxlYXNlQ29udGV4dEFuZEZpbGVQYXRoKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGUgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gcmVsZWFzZUNvbnRleHQudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0LnBhcnNlKHRva2Vucyk7XG5cbiAgICByZXdyaXRlTm9kZXMobm9kZSk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gcmVsZWFzZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KGZpbGVQYXRoLCBjb250ZXh0LCB0b2tlbnMsIG5vZGUsIHJ1bGVzLCB0eXBlcywgYXhpb21zLCB2YXJpYWJsZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRmlsZUNvbnRleHQucHJvdG90eXBlLCBsb2dnaW5nTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUNvbnRleHQ7XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJmaWxlUGF0aCIsImNvbnRleHQiLCJ0b2tlbnMiLCJub2RlIiwicnVsZXMiLCJ0eXBlcyIsImF4aW9tcyIsInZhcmlhYmxlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0RmlsZVBhdGgiLCJnZXRDb250ZXh0IiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldFZhcmlhYmxlcyIsImdldExhYmVscyIsImxhYmVscyIsImdldFJ1bGVzIiwiZ2V0QXhpb21zIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwicHVzaCIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJidWJibGUiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiZ2V0TWV0YUFzc2VydGlvbnMiLCJtZXRhQXNzZXJ0aW9ucyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZSIsImZpbmQiLCJtYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImZpbmRMYWJlbEJ5TGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibmFtZSIsImxhYmVsIiwibWF0Y2hOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwicnVsZU1hdGNoZXNMYWJlbE5hbWUiLCJtYXRjaExhYmVsTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGUiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImxhYmVsUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJhZGRUeXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkVmFyaWFibGUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJoYWx0IiwibGVhc3RMaW5lSW5kZXgiLCJsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZ3JlYXRlc3RMaW5lSW5kZXgiLCJncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiYmVnaW4iLCJjb21wbGV0ZSIsInRvSlNPTiIsInJ1bGVzSlNPTiIsIm1hcCIsInJ1bGVKU09OIiwidHlwZXNKU09OIiwidHlwZUpTT04iLCJheGlvbXNKU09OIiwiYXhpb21KU09OIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvckpTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JKU09OIiwicGF0aCIsImpzb24iLCJmcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aCIsInJlbGVhc2VDb250ZXh0IiwiZmlsZSIsImdldEZpbGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJyZXdyaXRlTm9kZXMiLCJmaWxlQ29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImxvZ2dpbmdNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZWQTs7O2VBQUE7OztxQ0EzVjZCOzREQUVIO3FCQUVMO3NCQUMrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEYsSUFBQSxBQUFNQSw0QkFrVkgsQUFsVkg7YUFBTUEsWUFDUUMsUUFBUSxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsWUFBWTs4QkFEbkdWO1FBRUYsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztpQkFYbEJWOztZQWNKVyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ1YsUUFBUTtZQUN0Qjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhO2dCQUNYLE9BQU8sSUFBSSxDQUFDVixPQUFPO1lBQ3JCOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFB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