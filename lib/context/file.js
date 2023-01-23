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
var _string = require("../utilities/string");
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
    function FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, conjectures, variables, combinators, constructors) {
        _classCallCheck(this, FileContext);
        this.releaseContext = releaseContext;
        this.filePath = filePath;
        this.tokens = tokens;
        this.node = node;
        this.types = types;
        this.rules = rules;
        this.axioms = axioms;
        this.lemmas = lemmas;
        this.theorems = theorems;
        this.conjectures = conjectures;
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
            key: "getProofSteps",
            value: function getProofSteps() {
                var proofSteps = []; ///
                return proofSteps;
            }
        },
        {
            key: "getMetaproofSteps",
            value: function getMetaproofSteps() {
                var metaproofSteps = []; ///
                return metaproofSteps;
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
                this.theorems.forEach(function(theorem) {
                    var theoremLabels = theorem.getLabels();
                    (0, _array.push)(labels, theoremLabels);
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
            key: "getTheorems",
            value: function getTheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems = [];
                (0, _array.push)(theorems, this.theorems);
                if (includeRelease) {
                    var releaseContextTheorems = this.releaseContext.getTheorems();
                    (0, _array.push)(theorems, releaseContextTheorems);
                }
                return theorems;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures = [];
                (0, _array.push)(conjectures, this.conjectures);
                if (includeRelease) {
                    var releaseContextConjectures = this.releaseContext.getConjectures();
                    (0, _array.push)(conjectures, releaseContextConjectures);
                }
                return conjectures;
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
            key: "findTheoremByReferenceName",
            value: function findTheoremByReferenceName(referenceName) {
                var labelName = referenceName, theorems = this.getTheorems(), theorem = theorems.find(function(theorem) {
                    var theoremMatchesLabelName = theorem.matchLabelName(labelName);
                    if (theoremMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return theorem;
            }
        },
        {
            key: "findConjectureByReferenceName",
            value: function findConjectureByReferenceName(referenceName) {
                var labelName = referenceName, conjectures = this.getConjectures(), conjecture = conjectures.find(function(conjecture) {
                    var conjectureMatchesLabelName = conjecture.matchLabelName(labelName);
                    if (conjectureMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return conjecture;
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
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                var type = this.findTypeByTypeName(typeName), typePresent = type !== null;
                return typePresent;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var string = (0, _string.nodeAsString)(node, this.tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                var string = (0, _string.nodesAsString)(node, this.tokens);
                return string;
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
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                var variable = this.findVariableByVariableName(variableName), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode) {
                var statementMatches = false;
                return statementMatches;
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
            key: "addTheorem",
            value: function addTheorem(theorem) {
                this.theorems.push(theorem);
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
                var _this = this;
                var json = [];
                this.types.forEach(function(type) {
                    var typeJSON = type.toJSON(_this.tokens);
                    json.push(typeJSON);
                });
                this.rules.forEach(function(rule) {
                    var ruleJSON = rule.toJSON(_this.tokens);
                    json.push(ruleJSON);
                });
                this.axioms.forEach(function(axiom) {
                    var axiomJSON = axiom.toJSON(_this.tokens);
                    json.push(axiomJSON);
                });
                this.lemmas.forEach(function(lemma) {
                    var lemmaJSON = lemma.toJSON(_this.tokens);
                    json.push(lemmaJSON);
                });
                this.theorems.forEach(function(theorem) {
                    var theoremJSON = theorem.toJSON(_this.tokens);
                    json.push(theoremJSON);
                });
                this.combinators.forEach(function(combinator) {
                    var combinatorJSON = combinator.toJSON(_this.tokens);
                    json.push(combinatorJSON);
                });
                this.constructors.forEach(function(constructor) {
                    var constructorJSON = constructor.toJSON(_this.tokens);
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
                if (node !== null) {
                    (0, _occamGrammarUtilities.rewriteNodes)(node);
                }
                var types = [], rules = [], axioms = [], lemmas = [], theorems = [], conjectures = [], variables = [], combinators = [], constructors = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, conjectures, variables, combinators, constructors);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGxlYXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMsIGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rva2Vuc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgY29uamVjdHVyZXMsIHZhcmlhYmxlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0TWV0YXByb29mU3RlcHMoKSB7XG4gICAgY29uc3QgbWV0YXByb29mU3RlcHMgPSBbXTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbW1hcy5mb3JFYWNoKChsZW1tYSkgPT4ge1xuICAgICAgY29uc3QgbGVtbWFMYWJlbHMgPSBsZW1tYS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGxlbW1hTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgdGhlb3JlbUxhYmVscyA9IHRoZW9yZW0uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCB0aGVvcmVtTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFR5cGVzKCk7XG5cbiAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG5cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICBwdXNoKHJ1bGVzLCB0aGlzLnJ1bGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldEF4aW9tcygpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICBwdXNoKGxlbW1hcywgdGhpcy5sZW1tYXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCByZWxlYXNlQ29udGV4dExlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKHRoZW9yZW1zLCB0aGlzLnRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcygpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCksXG4gICAgICAgICAgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTGFiZWxCeUxhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAgLy8vXG4gICAgICAgICAgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxhYmVsLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVNYXRjaGVzTGFiZWxOYW1lID0gcnVsZS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21NYXRjaGVzTGFiZWxOYW1lID0gYXhpb20ubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFNYXRjaGVzTGFiZWxOYW1lID0gbGVtbWEubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGxlbW1hTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbU1hdGNoZXNMYWJlbE5hbWUgPSB0aGVvcmVtLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGVvcmVtTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzID0gdGhpcy5nZXRDb25qZWN0dXJlcygpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlcy5maW5kKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTmFtZSA9IGNvbmplY3R1cmUubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGNvbmplY3R1cmVNYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7XG4gICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gIH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHtcbiAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UpOyB9XG5cbiAgZmF0YWwobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmZhdGFsKG1lc3NhZ2UpOyB9XG5cbiAgaGFsdChub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5oYWx0KHRoaXMuZmlsZVBhdGgsIGxlYXN0TGluZUluZGV4LCBncmVhdGVzdExpbmVJbmRleCk7XG4gIH1cblxuICBiZWdpbihub2RlKSB7XG4gICAgY29uc3QgbGVhc3RMaW5lSW5kZXggPSBsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKSxcbiAgICAgICAgICBncmVhdGVzdExpbmVJbmRleCA9IGdyZWF0ZXN0TGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5iZWdpbih0aGlzLmZpbGVQYXRoLCBsZWFzdExpbmVJbmRleCwgZ3JlYXRlc3RMaW5lSW5kZXgpO1xuICB9XG5cbiAgY29tcGxldGUobm9kZSkge1xuICAgIGNvbnN0IGxlYXN0TGluZUluZGV4ID0gbGVhc3RMaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucyksXG4gICAgICAgICAgZ3JlYXRlc3RMaW5lSW5kZXggPSBncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHRoaXMucmVsZWFzZUNvbnRleHQuY29tcGxldGUodGhpcy5maWxlUGF0aCwgbGVhc3RMaW5lSW5kZXgsIGdyZWF0ZXN0TGluZUluZGV4KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBqc29uID0gW107XG5cbiAgICB0aGlzLnR5cGVzLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2godHlwZUpTT04pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAganNvbi5wdXNoKHJ1bGVKU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2goYXhpb21KU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBsZW1tYUpTT04gPSBsZW1tYS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2gobGVtbWFKU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgIGpzb24ucHVzaCh0aGVvcmVtSlNPTik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbWJpbmF0b3JzLmZvckVhY2goKGNvbWJpbmF0b3IpID0+IHtcbiAgICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2goY29tYmluYXRvckpTT04pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMuZm9yRWFjaCgoY29uc3RydWN0b3IpID0+IHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgIGpzb24ucHVzaChjb25zdHJ1Y3RvckpTT04pXG4gICAgfSk7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUmVsZWFzZUNvbnRleHRBbmRGaWxlUGF0aChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgpIHtcbiAgICBjb25zdCBmaWxlID0gcmVsZWFzZUNvbnRleHQuZ2V0RmlsZShmaWxlUGF0aCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IHJlbGVhc2VDb250ZXh0LnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSByZWxlYXNlQ29udGV4dC5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgdmFyaWFibGVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwiY29uamVjdHVyZXMiLCJ2YXJpYWJsZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvb2ZTdGVwcyIsInByb29mU3RlcHMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJwdXNoIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwiZmluZExhYmVsQnlMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJuYW1lIiwibGFiZWwiLCJtYXRjaE5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWUiLCJydWxlTWF0Y2hlc0xhYmVsTmFtZSIsIm1hdGNoTGFiZWxOYW1lIiwiZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lIiwiYXhpb21NYXRjaGVzTGFiZWxOYW1lIiwiZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lIiwibGVtbWFNYXRjaGVzTGFiZWxOYW1lIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUiLCJ0aGVvcmVtTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2VOYW1lIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVNYXRjaGVzTGFiZWxOYW1lIiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImxhYmVsUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZSIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwiYWRkVGhlb3JlbSIsImFkZFZhcmlhYmxlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJoYWx0IiwibGVhc3RMaW5lSW5kZXgiLCJsZWFzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZ3JlYXRlc3RMaW5lSW5kZXgiLCJncmVhdGVzdExpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiYmVnaW4iLCJjb21wbGV0ZSIsInRvSlNPTiIsImpzb24iLCJ0eXBlSlNPTiIsInJ1bGVKU09OIiwiYXhpb21KU09OIiwibGVtbWFKU09OIiwidGhlb3JlbUpTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsImZyb21SZWxlYXNlQ29udGV4dEFuZEZpbGVQYXRoIiwiZmlsZSIsImdldEZpbGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJyZXdyaXRlTm9kZXMiLCJmaWxlQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7cUNBTlE7cUJBRVI7c0JBQ3VCO3NCQUN3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxjQUFjLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxZQUFZOzhCQUQxSGI7UUFFakIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJ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