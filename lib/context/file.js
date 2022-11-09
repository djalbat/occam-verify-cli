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
            key: "toJSON",
            value: function toJSON() {
                var json = [];
                this.rules.forEach(function(rule) {
                    var ruleJSON = rule.toJSON();
                    json.push(ruleJSON);
                });
                this.types.forEach(function(type) {
                    var typeJSON = type.toJSON();
                    json.push(typeJSON);
                });
                this.axioms.forEach(function(axiom) {
                    var axiomJSON = axiom.toJSON();
                    json.push(axiomJSON);
                });
                this.combinators.forEach(function(combinator) {
                    var combinatorJSON = combinator.toJSON();
                    json.push(combinatorJSON);
                });
                this.constructors.forEach(function(constructor) {
                    var constructorJSON = constructor.toJSON();
                    json.push(constructorJSON);
                });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHJ1bGVzLCB0eXBlcywgYXhpb21zLCB2YXJpYWJsZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpIHtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRMYWJlbHMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCk7XG5cbiAgICBydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFJ1bGVzKGJ1YmJsZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtcbiAgICAgIC4uLnRoaXMucnVsZXNcbiAgICBdO1xuXG4gICAgaWYgKGJ1YmJsZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0VHlwZXMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW1xuICAgICAgLi4udGhpcy50eXBlc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtcbiAgICAgIC4uLnRoaXMuYXhpb21zXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW1xuICAgICAgLi4udGhpcy5jb21iaW5hdG9yc1xuICAgIF07XG5cbiAgICBpZiAoYnViYmxlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoYnViYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3JzXG4gICAgXTtcblxuICAgIGlmIChidWJibGUpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBhc3NlcnRpb25zID0gW107ICAvLy9cblxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YUFzc2VydGlvbnMoKSB7XG4gICAgY29uc3QgbWV0YUFzc2VydGlvbnMgPSBbXTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFBc3NlcnRpb25zO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTGFiZWxCeUxhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAgLy8vXG4gICAgICAgICAgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxhYmVsLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVNYXRjaGVzTGFiZWxOYW1lID0gcnVsZS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21NYXRjaGVzTGFiZWxOYW1lID0gYXhpb20ubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeUxhYmVsTmFtZShsYWJlbE5hbWUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UpOyB9XG5cbiAgZmF0YWwobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmZhdGFsKG1lc3NhZ2UpOyB9XG5cbiAgaGFsdChub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5oYWx0KHRoaXMuZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7XG4gIH1cblxuICBiZWdpbihub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5iZWdpbih0aGlzLmZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpO1xuICB9XG5cbiAgY29tcGxldGUobm9kZSkge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucyksXG4gICAgICAgICAgZ3JlYXRlc3RMaW5lSW5kZXggPSBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMucmVsZWFzZUNvbnRleHQuY29tcGxldGUodGhpcy5maWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04oKTtcblxuICAgICAganNvbi5wdXNoKHJ1bGVKU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgICBqc29uLnB1c2godHlwZUpTT04pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgICBqc29uLnB1c2goYXhpb21KU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tYmluYXRvcnMuZm9yRWFjaCgoY29tYmluYXRvcikgPT4ge1xuICAgICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgICBqc29uLnB1c2goY29tYmluYXRvckpTT04pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMuZm9yRWFjaCgoY29uc3RydWN0b3IpID0+IHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTigpO1xuXG4gICAgICBqc29uLnB1c2goY29uc3RydWN0b3JKU09OKVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlbGVhc2VDb250ZXh0QW5kRmlsZVBhdGgocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoKSB7XG4gICAgY29uc3QgZmlsZSA9IHJlbGVhc2VDb250ZXh0LmdldEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSByZWxlYXNlQ29udGV4dC50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcmVsZWFzZUNvbnRleHQucGFyc2UodG9rZW5zKTtcblxuICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcblxuICAgIGNvbnN0IHJ1bGVzID0gW10sXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBydWxlcywgdHlwZXMsIGF4aW9tcywgdmFyaWFibGVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwicnVsZXMiLCJ0eXBlcyIsImF4aW9tcyIsInZhcmlhYmxlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRWYXJpYWJsZXMiLCJnZXRMYWJlbHMiLCJidWJibGUiLCJsYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsInB1c2giLCJnZXRSdWxlcyIsImdldEF4aW9tcyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiZ2V0TWV0YUFzc2VydGlvbnMiLCJtZXRhQXNzZXJ0aW9ucyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZSIsImZpbmQiLCJtYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImZpbmRMYWJlbEJ5TGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibmFtZSIsImxhYmVsIiwibWF0Y2hOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwicnVsZU1hdGNoZXNMYWJlbE5hbWUiLCJtYXRjaExhYmVsTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGUiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImxhYmVsUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJhZGRUeXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkVmFyaWFibGUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImhhbHQiLCJsZWFzdExpbmVJbmRleCIsImxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJncmVhdGVzdExpbmVJbmRleCIsImdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJiZWdpbiIsImNvbXBsZXRlIiwidG9KU09OIiwianNvbiIsInJ1bGVKU09OIiwidHlwZUpTT04iLCJheGlvbUpTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImZyb21SZWxlYXNlQ29udGV4dEFuZEZpbGVQYXRoIiwiZmlsZSIsImdldEZpbGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJyZXdyaXRl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