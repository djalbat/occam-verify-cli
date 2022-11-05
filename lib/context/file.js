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
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, filePath, tokens, node, rules, types, axioms, variables, combinators, constructors) {
        _classCallCheck(this, FileContext);
        this.releaseContext = releaseContext;
        this.filePath = filePath;
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
            key: "getReleaseContext",
            value: function getReleaseContext() {
                return this.releaseContext;
            }
        },
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
            key: "getVariables",
            value: function getVariables() {
                return this.variables;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var bubble = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                if (bubble) {
                    var releaseContextLabels = this.releaseContext.getLabels();
                    (0, _array.push)(labels, releaseContextLabels);
                }
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
            key: "trace",
            value: function trace(message) {
                this.releaseContext.trace(message);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.releaseContext.debug(message);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.releaseContext.info(message);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.releaseContext.warning(message);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.releaseContext.error(message);
            }
        },
        {
            key: "fatal",
            value: function fatal(message) {
                this.releaseContext.fatal(message);
            }
        },
        {
            key: "halt",
            value: function halt(node) {
                var leastLineIndex = (0, _tokens.leastLineIndexFromNodeAndTokens)(node, this.tokens), greatestLineIndex = (0, _tokens.greatestLineIndexFromNodeAndTokens)(node, this.tokens);
                this.releaseContext.halt(this.filePath, leastLineIndex, greatestLineIndex);
            }
        },
        {
            key: "begin",
            value: function begin(node) {
                var leastLineIndex = (0, _tokens.leastLineIndexFromNodeAndTokens)(node, this.tokens), greatestLineIndex = (0, _tokens.greatestLineIndexFromNodeAndTokens)(node, this.tokens);
                this.releaseContext.begin(this.filePath, leastLineIndex, greatestLineIndex);
            }
        },
        {
            key: "complete",
            value: function complete(node) {
                var leastLineIndex = (0, _tokens.leastLineIndexFromNodeAndTokens)(node, this.tokens), greatestLineIndex = (0, _tokens.greatestLineIndexFromNodeAndTokens)(node, this.tokens);
                this.releaseContext.complete(this.filePath, leastLineIndex, greatestLineIndex);
            }
        },
        {
            key: "asJSON",
            value: function asJSON() {
                var _this = this;
                var rulesJSON = this.rules.map(function(rule) {
                    var ruleJSON = rule.asJSON(_this.tokens);
                    return ruleJSON;
                }), typesJSON = this.types.map(function(type) {
                    var typeJSON = type.asJSON(_this.tokens);
                    return typeJSON;
                }), axiomsJSON = this.axioms.map(function(axiom) {
                    var axiomJSON = axiom.asJSON(_this.tokens);
                    return axiomJSON;
                }), combinatorsJSON = this.combinators.map(function(combinator) {
                    var combinatorJSON = combinator.asJSON(_this.tokens);
                    return combinatorJSON;
                }), constructorsJSON = this.constructors.map(function(constructor) {
                    var constructorJSON = constructor.asJSON(_this.tokens);
                    return constructorJSON;
                }), rules = rulesJSON, types = typesJSON, axioms = axiomsJSON, combinators = combinatorsJSON, constructors = constructorsJSON, json = {
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
                var rules = [], types = [], axioms = [], variables = [], combinators = [], constructors = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, rules, types, axioms, variables, combinators, constructors);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHJ1bGVzLCB0eXBlcywgYXhpb21zLCB2YXJpYWJsZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpIHtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRMYWJlbHMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCk7XG5cbiAgICBydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFJ1bGVzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtcbiAgICAgIC4uLnRoaXMucnVsZXNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0VHlwZXMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW1xuICAgICAgLi4udGhpcy50eXBlc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtcbiAgICAgIC4uLnRoaXMuYXhpb21zXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW1xuICAgICAgLi4udGhpcy5jb21iaW5hdG9yc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3JzXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBhc3NlcnRpb25zID0gW107ICAvLy9cblxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YUFzc2VydGlvbnMoKSB7XG4gICAgY29uc3QgbWV0YUFzc2VydGlvbnMgPSBbXTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFBc3NlcnRpb25zO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTGFiZWxCeUxhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAgLy8vXG4gICAgICAgICAgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxhYmVsLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVNYXRjaGVzTGFiZWxOYW1lID0gcnVsZS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21NYXRjaGVzTGFiZWxOYW1lID0gYXhpb20ubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeUxhYmVsTmFtZShsYWJlbE5hbWUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UpOyB9XG5cbiAgZmF0YWwobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmZhdGFsKG1lc3NhZ2UpOyB9XG5cbiAgaGFsdChub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5oYWx0KHRoaXMuZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7XG4gIH1cblxuICBiZWdpbihub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5iZWdpbih0aGlzLmZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpO1xuICB9XG5cbiAgY29tcGxldGUobm9kZSkge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucyksXG4gICAgICAgICAgZ3JlYXRlc3RMaW5lSW5kZXggPSBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMucmVsZWFzZUNvbnRleHQuY29tcGxldGUodGhpcy5maWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTtcbiAgfVxuXG4gIGFzSlNPTigpIHtcbiAgICBjb25zdCBydWxlc0pTT04gPSB0aGlzLnJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZUpTT04gPSBydWxlLmFzSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0eXBlc0pTT04gPSB0aGlzLnR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLmFzSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0eXBlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBheGlvbXNKU09OID0gdGhpcy5heGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21KU09OID0gYXhpb20uYXNKU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGF4aW9tSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb21iaW5hdG9yc0pTT04gPSB0aGlzLmNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLmFzSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb21iaW5hdG9ySlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gdGhpcy5jb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IuYXNKU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9ySlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IHJ1bGVzSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVzID0gdHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gYXhpb21zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlbGVhc2VDb250ZXh0QW5kRmlsZVBhdGgocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZSA9IHJlbGVhc2VDb250ZXh0LmdldEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSByZWxlYXNlQ29udGV4dC50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcmVsZWFzZUNvbnRleHQucGFyc2UodG9rZW5zKTtcblxuICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcblxuICAgIGNvbnN0IHJ1bGVzID0gW10sXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBydWxlcywgdHlwZXMsIGF4aW9tcywgdmFyaWFibGVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwicnVsZXMiLCJ0eXBlcyIsImF4aW9tcyIsInZhcmlhYmxlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRWYXJpYWJsZXMiLCJnZXRMYWJlbHMiLCJidWJibGUiLCJsYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsInB1c2giLCJnZXRSdWxlcyIsImdldEF4aW9tcyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiZ2V0TWV0YUFzc2VydGlvbnMiLCJtZXRhQXNzZXJ0aW9ucyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZSIsImZpbmQiLCJtYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImZpbmRMYWJlbEJ5TGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibmFtZSIsImxhYmVsIiwibWF0Y2hOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwicnVsZU1hdGNoZXNMYWJlbE5hbWUiLCJtYXRjaExhYmVsTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGUiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImxhYmVsUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJhZGRUeXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkVmFyaWFibGUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImhhbHQiLCJsZWFzdExpbmVJbmRleCIsImxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJncmVhdGVzdExpbmVJbmRleCIsImdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJiZWdpbiIsImNvbXBsZXRlIiwiYXNKU09OIiwicnVsZXNKU09OIiwibWFwIiwicnVsZUpTT04iLCJ0eXBlc0pTT04iLCJ0eXBlSlNPTiIsImF4aW9tc0pTT04iLCJheGlvbUpTT04iLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJqc29uIiwiZnJvbVJlbGVhc2VDb250ZXh0QW5kRmlsZVBhdGgiLCJmaWxlIiwiZ2V0RmlsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsInJld3JpdGVOb2RlcyIsImZpbGVDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztxQ0FMUTtxQkFFUjtzQkFDK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRSxJQUFBLEFBQU1BLDRCQUFOO2FBQU1BLFlBQ1BDLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7OEJBRDNGVjtRQUVqQixJQUFJLENBQUNDLGNBQWMsR0FBR0E7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