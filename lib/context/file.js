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
    function FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, combinators, constructors) {
        _classCallCheck(this, FileContext);
        this.releaseContext = releaseContext;
        this.filePath = filePath;
        this.tokens = tokens;
        this.node = node;
        this.types = types;
        this.rules = rules;
        this.axioms = axioms;
        this.lemmas = lemmas;
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
                this.lemmas.forEach(function(lemma) {
                    var lemmaLabels = lemma.getLabels();
                    (0, _array.push)(labels, lemmaLabels);
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
            key: "getLemmas",
            value: function getLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = [];
                (0, _array.push)(lemmas, this.lemmas);
                if (includeRelease) {
                    var releaseContextLemmas = this.releaseContext.getLemmas();
                    (0, _array.push)(lemmas, releaseContextLemmas);
                }
                return lemmas;
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
            key: "findLemmaByReferenceName",
            value: function findLemmaByReferenceName(referenceName) {
                var labelName = referenceName, lemmas = this.getLemmas(), lemma = lemmas.find(function(lemma) {
                    var lemmaMatchesLabelName = lemma.matchLabelName(labelName);
                    if (lemmaMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return lemma;
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
            key: "addLemma",
            value: function addLemma(lemma) {
                this.lemmas.push(lemma);
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
                this.lemmas.forEach(function(lemma) {
                    var lemmaJSON = lemma.toJSON();
                    json.push(lemmaJSON);
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
                var types = [], rules = [], axioms = [], lemmas = [], variables = [], combinators = [], constructors = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, combinators, constructors);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucywgZ3JlYXRlc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdG9rZW5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHZhcmlhYmxlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGxlbW1hTGFiZWxzID0gbGVtbWEuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHB1c2godHlwZXMsIHRoaXMudHlwZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICBwdXNoKHJ1bGVzLCB0aGlzLnJ1bGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldEF4aW9tcygpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICBwdXNoKGxlbW1hcywgdGhpcy5sZW1tYXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCByZWxlYXNlQ29udGV4dExlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbWJpbmF0b3JzLCB0aGlzLmNvbWJpbmF0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb25zdHJ1Y3RvcnMsIHRoaXMuY29uc3RydWN0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGFzc2VydGlvbnMgPSBbXTsgIC8vL1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRNZXRhQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBtZXRhQXNzZXJ0aW9ucyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YUFzc2VydGlvbnM7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBsYWJlbE5hbWUsICAvLy9cbiAgICAgICAgICBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU1hdGNoZXNMYWJlbE5hbWUgPSBydWxlLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbU1hdGNoZXNMYWJlbE5hbWUgPSBheGlvbS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21NYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBsZW1tYXMgPSB0aGlzLmdldExlbW1hcygpLFxuICAgICAgICAgIGxlbW1hID0gbGVtbWFzLmZpbmQoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYU1hdGNoZXNMYWJlbE5hbWUgPSBsZW1tYS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGVtbWFNYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7XG4gICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UpOyB9XG5cbiAgZmF0YWwobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmZhdGFsKG1lc3NhZ2UpOyB9XG5cbiAgaGFsdChub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5oYWx0KHRoaXMuZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7XG4gIH1cblxuICBiZWdpbihub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5iZWdpbih0aGlzLmZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpO1xuICB9XG5cbiAgY29tcGxldGUobm9kZSkge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucyksXG4gICAgICAgICAgZ3JlYXRlc3RMaW5lSW5kZXggPSBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMucmVsZWFzZUNvbnRleHQuY29tcGxldGUodGhpcy5maWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gW107XG5cbiAgICB0aGlzLnR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04oKTtcblxuICAgICAganNvbi5wdXNoKHR5cGVKU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTigpO1xuXG4gICAgICBqc29uLnB1c2gocnVsZUpTT04pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgICBqc29uLnB1c2goYXhpb21KU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBsZW1tYUpTT04gPSBsZW1tYS50b0pTT04oKTtcblxuICAgICAganNvbi5wdXNoKGxlbW1hSlNPTik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbWJpbmF0b3JzLmZvckVhY2goKGNvbWJpbmF0b3IpID0+IHtcbiAgICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04oKTtcblxuICAgICAganNvbi5wdXNoKGNvbWJpbmF0b3JKU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29uc3RydWN0b3JzLmZvckVhY2goKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgICAganNvbi5wdXNoKGNvbnN0cnVjdG9ySlNPTilcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SZWxlYXNlQ29udGV4dEFuZEZpbGVQYXRoKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCkge1xuICAgIGNvbnN0IGZpbGUgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gcmVsZWFzZUNvbnRleHQudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0LnBhcnNlKHRva2Vucyk7XG5cbiAgICByZXdyaXRlTm9kZXMobm9kZSk7XG5cbiAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdmFyaWFibGVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInZhcmlhYmxlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRWYXJpYWJsZXMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlUmVsZWFzZSIsImxhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsInB1c2giLCJheGlvbSIsImF4aW9tTGFiZWxzIiwibGVtbWEiLCJsZW1tYUxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0QXNzZXJ0aW9ucyIsImFzc2VydGlvbnMiLCJnZXRNZXRhQXNzZXJ0aW9ucyIsIm1ldGFBc3NlcnRpb25zIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwiZmluZExhYmVsQnlMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJuYW1lIiwibGFiZWwiLCJtYXRjaE5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWUiLCJydWxlTWF0Y2hlc0xhYmVsTmFtZSIsIm1hdGNoTGFiZWxOYW1lIiwiZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lIiwiYXhpb21NYXRjaGVzTGFiZWxOYW1lIiwiZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lIiwibGVtbWFNYXRjaGVzTGFiZWxOYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZSIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lIiwibGFiZWxQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImFkZFR5cGUiLCJhZGRSdWxlIiwiYWRkQXhpb20iLCJhZGRMZW1tYSIsImFkZFZhcmlhYmxlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJoYWx0IiwibGVhc3RMaW5lSW5kZXgiLCJsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZ3JlYXRlc3RMaW5lSW5kZXgiLCJncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiYmVnaW4iLCJjb21wbGV0ZSIsInRvSlNPTiIsImpzb24iLCJ0eXBlSlNPTiIsInJ1bGVKU09OIiwiYXhpb21KU09OIiwibGVtbWFKU09OIiwiY29tYmluYXRvckpTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJmcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aCIsImZpbGUiLCJnZXRGaWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwicmV3cml0ZU5vZGVzIiwiZmlsZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3FDQUxRO3FCQUVSO3NCQUMrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxjQUFjLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLFlBQVk7OEJBRG5HWDtRQUVqQixJQUFJLENBQUNDLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxZQUFZLEdB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