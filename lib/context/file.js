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
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, variables, combinators, constructors) {
        _classCallCheck(this, FileContext);
        this.releaseContext = releaseContext;
        this.filePath = filePath;
        this.tokens = tokens;
        this.node = node;
        this.types = types;
        this.rules = rules;
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
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                this.rules.forEach(function(rule) {
                    var ruleLabels = rule.getLabels();
                    (0, _array.push)(labels, ruleLabels);
                });
                this.axioms.forEach(function(axiom) {
                    var axiomLabels = axiom.getLabels();
                    (0, _array.push)(labels, axiomLabels);
                });
                if (includeRelease) {
                    var releaseContextLabels = this.releaseContext.getLabels();
                    (0, _array.push)(labels, releaseContextLabels);
                }
                return labels;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var types = [];
                (0, _array.push)(types, this.types);
                if (includeRelease) {
                    var releaseContextTypes = this.releaseContext.getTypes();
                    (0, _array.push)(types, releaseContextTypes);
                }
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = [];
                (0, _array.push)(rules, this.rules);
                if (includeRelease) {
                    var releaseContextRules = this.releaseContext.getRules();
                    (0, _array.push)(rules, releaseContextRules);
                }
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = [];
                (0, _array.push)(axioms, this.axioms);
                if (includeRelease) {
                    var releaseContextAxioms = this.releaseContext.getAxioms();
                    (0, _array.push)(axioms, releaseContextAxioms);
                }
                return axioms;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = [];
                (0, _array.push)(combinators, this.combinators);
                if (includeRelease) {
                    var releaseContextCombinators = this.releaseContext.getCombinators();
                    (0, _array.push)(combinators, releaseContextCombinators);
                }
                return combinators;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = [];
                (0, _array.push)(constructors, this.constructors);
                if (includeRelease) {
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
                this.types.forEach(function(type) {
                    var typeJSON = type.toJSON();
                    json.push(typeJSON);
                });
                this.rules.forEach(function(rule) {
                    var ruleJSON = rule.toJSON();
                    json.push(ruleJSON);
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
                var types = [], rules = [], axioms = [], variables = [], combinators = [], constructors = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, variables, combinators, constructors);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCB2YXJpYWJsZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpIHtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFR5cGVzKCk7XG5cbiAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHB1c2gocnVsZXMsIHRoaXMucnVsZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRSdWxlcygpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICBwdXNoKGF4aW9tcywgdGhpcy5heGlvbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKCk7XG5cbiAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbWJpbmF0b3JzLCB0aGlzLmNvbWJpbmF0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb25zdHJ1Y3RvcnMsIHRoaXMuY29uc3RydWN0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGFzc2VydGlvbnMgPSBbXTsgIC8vL1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRNZXRhQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBtZXRhQXNzZXJ0aW9ucyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YUFzc2VydGlvbnM7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBsYWJlbE5hbWUsICAvLy9cbiAgICAgICAgICBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU1hdGNoZXNMYWJlbE5hbWUgPSBydWxlLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbU1hdGNoZXNMYWJlbE5hbWUgPSBheGlvbS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21NYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmRlYnVnKG1lc3NhZ2UpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZXJyb3IobWVzc2FnZSk7IH1cblxuICBmYXRhbChtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZmF0YWwobWVzc2FnZSk7IH1cblxuICBoYWx0KG5vZGUpIHtcbiAgICBjb25zdCBsZWFzdExpbmVJbmRleCA9IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpLFxuICAgICAgICAgIGdyZWF0ZXN0TGluZUluZGV4ID0gZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0LmhhbHQodGhpcy5maWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTtcbiAgfVxuXG4gIGJlZ2luKG5vZGUpIHtcbiAgICBjb25zdCBsZWFzdExpbmVJbmRleCA9IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpLFxuICAgICAgICAgIGdyZWF0ZXN0TGluZUluZGV4ID0gZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0LmJlZ2luKHRoaXMuZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7XG4gIH1cblxuICBjb21wbGV0ZShub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5jb21wbGV0ZSh0aGlzLmZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGpzb24gPSBbXTtcblxuICAgIHRoaXMudHlwZXMuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgICBqc29uLnB1c2godHlwZUpTT04pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICAgIGpzb24ucHVzaChydWxlSlNPTik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKCk7XG5cbiAgICAgIGpzb24ucHVzaChheGlvbUpTT04pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21iaW5hdG9ycy5mb3JFYWNoKChjb21iaW5hdG9yKSA9PiB7XG4gICAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKCk7XG5cbiAgICAgIGpzb24ucHVzaChjb21iaW5hdG9ySlNPTik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5mb3JFYWNoKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKCk7XG5cbiAgICAgIGpzb24ucHVzaChjb25zdHJ1Y3RvckpTT04pXG4gICAgfSk7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlID0gcmVsZWFzZUNvbnRleHQuZ2V0RmlsZShmaWxlUGF0aCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IHJlbGVhc2VDb250ZXh0LnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSByZWxlYXNlQ29udGV4dC5wYXJzZSh0b2tlbnMpO1xuXG4gICAgcmV3cml0ZU5vZGVzKG5vZGUpO1xuXG4gICAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCB2YXJpYWJsZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwidmFyaWFibGVzIiwiY29tYmluYXRvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldFZhcmlhYmxlcyIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwicHVzaCIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRBc3NlcnRpb25zIiwiYXNzZXJ0aW9ucyIsImdldE1ldGFBc3NlcnRpb25zIiwibWV0YUFzc2VydGlvbnMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kTGFiZWxCeUxhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm5hbWUiLCJsYWJlbCIsIm1hdGNoTmFtZSIsImZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lIiwicmVmZXJlbmNlTmFtZSIsInJ1bGVNYXRjaGVzTGFiZWxOYW1lIiwibWF0Y2hMYWJlbE5hbWUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUiLCJheGlvbU1hdGNoZXNMYWJlbE5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUiLCJsYWJlbFByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZFZhcmlhYmxlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJoYWx0IiwibGVhc3RMaW5lSW5kZXgiLCJsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZ3JlYXRlc3RMaW5lSW5kZXgiLCJncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiYmVnaW4iLCJjb21wbGV0ZSIsInRvSlNPTiIsImpzb24iLCJ0eXBlSlNPTiIsInJ1bGVKU09OIiwiYXhpb21KU09OIiwiY29tYmluYXRvckpTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJmcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aCIsImZpbGUiLCJnZXRGaWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwicmV3cml0ZU5vZGVzIiwiZmlsZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3FDQUxRO3FCQUVSO3NCQUMrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxjQUFjLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxZQUFZOzhCQUQzRlY7UUFFakIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7aUJBWEhWOztZQWNuQlcsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQjtnQkFDbEIsT0FBTyxJQUFJLENBQUNWLGNBQWM7WUFDNUI7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ1YsUUFBUTtZQUN0Qjs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZO2dCQUNWLE9BQU8sSUFBSSxDQUFDVixNQUFNO1lBQ3BCOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNWLElBQUk7WUFDbEI7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTtnQkFDYixP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