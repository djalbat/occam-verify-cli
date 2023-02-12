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
var _type = /*#__PURE__*/ _interopRequireDefault(require("../type"));
var _rule = /*#__PURE__*/ _interopRequireDefault(require("../rule"));
var _axiom = /*#__PURE__*/ _interopRequireDefault(require("../axiom"));
var _lemma = /*#__PURE__*/ _interopRequireDefault(require("../lemma"));
var _theorem = /*#__PURE__*/ _interopRequireDefault(require("../theorem"));
var _variable = /*#__PURE__*/ _interopRequireDefault(require("../variable"));
var _conjecture = /*#__PURE__*/ _interopRequireDefault(require("../conjecture"));
var _combinator = /*#__PURE__*/ _interopRequireDefault(require("../combinator"));
var _constructor = /*#__PURE__*/ _interopRequireDefault(require("../constructor"));
var _metavariable = /*#__PURE__*/ _interopRequireDefault(require("../metavariable"));
var _array = require("../utilities/array");
var _metaType = require("../metaType");
var _string = require("../utilities/string");
var _kinds = require("../kinds");
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
var metaTypes = [
    _metaType.statementMetaType
];
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, filePath, tokens, node, types1, rules1, axioms1, lemmas1, theorems1, variables1, conjectures1, combinators1, constructors1, metavariables1) {
        _classCallCheck(this, FileContext);
        this.releaseContext = releaseContext;
        this.filePath = filePath;
        this.tokens = tokens;
        this.node = node;
        this.types = types1;
        this.rules = rules1;
        this.axioms = axioms1;
        this.lemmas = lemmas1;
        this.theorems = theorems1;
        this.variables = variables1;
        this.conjectures = conjectures1;
        this.combinators = combinators1;
        this.constructors = constructors1;
        this.metavariables = metavariables1;
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
                this.conjectures.forEach(function(conjecture) {
                    var conjectureLabels = conjecture.getLabels();
                    (0, _array.push)(labels, conjectureLabels);
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
                var types1 = [];
                (0, _array.push)(types1, this.types);
                if (includeRelease) {
                    var releaseContextTypes = this.releaseContext.getTypes();
                    (0, _array.push)(types1, releaseContextTypes);
                }
                return types1;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules1 = [];
                (0, _array.push)(rules1, this.rules);
                if (includeRelease) {
                    var releaseContextRules = this.releaseContext.getRules();
                    (0, _array.push)(rules1, releaseContextRules);
                }
                return rules1;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms1 = [];
                (0, _array.push)(axioms1, this.axioms);
                if (includeRelease) {
                    var releaseContextAxioms = this.releaseContext.getAxioms();
                    (0, _array.push)(axioms1, releaseContextAxioms);
                }
                return axioms1;
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas1 = [];
                (0, _array.push)(lemmas1, this.lemmas);
                if (includeRelease) {
                    var releaseContextLemmas = this.releaseContext.getLemmas();
                    (0, _array.push)(lemmas1, releaseContextLemmas);
                }
                return lemmas1;
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems1 = [];
                (0, _array.push)(theorems1, this.theorems);
                if (includeRelease) {
                    var releaseContextTheorems = this.releaseContext.getTheorems();
                    (0, _array.push)(theorems1, releaseContextTheorems);
                }
                return theorems1;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return this.variables;
            }
        },
        {
            key: "getMetaTypes",
            value: function getMetaTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return metaTypes;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures1 = [];
                (0, _array.push)(conjectures1, this.conjectures);
                if (includeRelease) {
                    var releaseContextConjectures = this.releaseContext.getConjectures();
                    (0, _array.push)(conjectures1, releaseContextConjectures);
                }
                return conjectures1;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators1 = [];
                (0, _array.push)(combinators1, this.combinators);
                if (includeRelease) {
                    var releaseContextCombinators = this.releaseContext.getCombinators();
                    (0, _array.push)(combinators1, releaseContextCombinators);
                }
                return combinators1;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors1 = [];
                (0, _array.push)(constructors1, this.constructors);
                if (includeRelease) {
                    var releaseContextConstructors = this.releaseContext.getConstructors();
                    (0, _array.push)(constructors1, releaseContextConstructors);
                }
                return constructors1;
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return this.metavariables;
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
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types1 = this.getTypes(), type = types1.find(function(type) {
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
                var labelName = referenceName, rules1 = this.getRules(), rule = rules1.find(function(rule) {
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
                var labelName = referenceName, axioms1 = this.getAxioms(), axiom = axioms1.find(function(axiom) {
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
                var labelName = referenceName, lemmas1 = this.getLemmas(), lemma = lemmas1.find(function(lemma) {
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
                var labelName = referenceName, theorems1 = this.getTheorems(), theorem = theorems1.find(function(theorem) {
                    var theoremMatchesLabelName = theorem.matchLabelName(labelName);
                    if (theoremMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return theorem;
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var name = variableName, variables1 = this.getVariables(), variable = variables1.find(function(variable) {
                    var matches = variable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "findMetaTypeByMetaTypeName",
            value: function findMetaTypeByMetaTypeName(metaTypeName) {
                var metaTypes = this.getMetaTypes(), metaType = metaTypes.find(function(metaType) {
                    var matches = metaType.matchMetaTypeName(metaTypeName);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metaType;
            }
        },
        {
            key: "findConjectureByReferenceName",
            value: function findConjectureByReferenceName(referenceName) {
                var labelName = referenceName, conjectures1 = this.getConjectures(), conjecture = conjectures1.find(function(conjecture) {
                    var conjectureMatchesLabelName = conjecture.matchLabelName(labelName);
                    if (conjectureMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return conjecture;
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var name = metavariableName, metavariables1 = this.getMetavariables(), metavariable = metavariables1.find(function(metavariable) {
                    var matches = metavariable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metavariable;
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
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                var variable = this.findVariableByVariableName(variableName), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "isMetavariablePresentByMetavariableName",
            value: function isMetavariablePresentByMetavariableName(metavariableName) {
                var metavariable = this.findMetavariableByMetavariableName(metavariableName), metavariablePresent = metavariable !== null;
                return metavariablePresent;
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
                var variableName = variable.getName();
                (0, _array.filter)(this.variables, function(variable) {
                    var name = variable.getName(), nameVariableName = name === variableName;
                    if (!nameVariableName) {
                        return true;
                    }
                });
                this.variables.push(variable);
            }
        },
        {
            key: "addConjecture",
            value: function addConjecture(conjecture) {
                this.conjectures.push(conjecture);
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
            key: "addMetavariable",
            value: function addMetavariable(metavariable) {
                var metavariableName = metavariable.getName();
                (0, _array.filter)(this.metavariables, function(metavariable) {
                    var name = metavariable.getName(), nameMetavariableName = name === metavariableName;
                    if (!nameMetavariableName) {
                        return true;
                    }
                });
                this.metavariables.push(metavariable);
            }
        },
        {
            key: "trace",
            value: function trace(message, node) {
                this.releaseContext.trace(message, node, this.tokens, this.filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message, node) {
                this.releaseContext.debug(message, node, this.tokens, this.filePath);
            }
        },
        {
            key: "info",
            value: function info(message, node) {
                this.releaseContext.info(message, node, this.tokens, this.filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message, node) {
                this.releaseContext.warning(message, node, this.tokens, this.filePath);
            }
        },
        {
            key: "error",
            value: function error(message, node) {
                this.releaseContext.error(message, node, this.tokens, this.filePath);
            }
        },
        {
            key: "fatal",
            value: function fatal(message, node) {
                this.releaseContext.fatal(message, node, this.tokens, this.filePath);
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
                this.variables.forEach(function(variable) {
                    var variableJSON = variable.toJSON(_this.tokens);
                    json.push(variableJSON);
                });
                this.conjectures.forEach(function(conjecture) {
                    var conjectureJSON = conjecture.toJSON(_this.tokens);
                    json.push(conjectureJSON);
                });
                this.combinators.forEach(function(combinator) {
                    var combinatorJSON = combinator.toJSON(_this.tokens);
                    json.push(combinatorJSON);
                });
                this.constructors.forEach(function(constructor) {
                    var constructorJSON = constructor.toJSON(_this.tokens);
                    json.push(constructorJSON);
                });
                this.metavariables.forEach(function(metavariable) {
                    var metavariableJSON = metavariable.toJSON(_this.tokens);
                    json.push(metavariableJSON);
                });
                return json;
            }
        },
        {
            key: "initialise",
            value: function initialise(json) {
                var jsonArray = json; ///
                jsonArray.forEach(function(json) {
                    var kind = json.kind;
                    switch(kind){
                        case _kinds.TYPE_KIND:
                            {
                                var type = _type.default.fromJSONAndFileContext(json, fileContext);
                                types.push(type);
                                break;
                            }
                        case _kinds.RULE_KIND:
                            {
                                var rule = _rule.default.fromJSONAndFileContext(json, fileContext);
                                rules.push(rule);
                                break;
                            }
                        case _kinds.AXIOM_KIND:
                            {
                                var axiom = _axiom.default.fromJSONAndFileContext(json, fileContext);
                                axioms.push(axiom);
                                break;
                            }
                        case _kinds.LEMMA_KIND:
                            {
                                var lemma = _lemma.default.fromJSONAndFileContext(json, fileContext);
                                lemmas.push(lemma);
                                break;
                            }
                        case _kinds.THEOREM_KIND:
                            {
                                var theorem = _theorem.default.fromJSONAndFileContext(json, fileContext);
                                theorems.push(theorem);
                                break;
                            }
                        case _kinds.VARIABLE_KIND:
                            {
                                var variable = _variable.default.fromJSONAndFileContext(json, fileContext);
                                variables.push(variable);
                                break;
                            }
                        case _kinds.CONJECTURE_KIND:
                            {
                                var conjecture = _conjecture.default.fromJSONAndFileContext(json, fileContext);
                                conjectures.push(conjecture);
                                break;
                            }
                        case _kinds.COMBINATOR_KIND:
                            {
                                var combinator = _combinator.default.fromJSONAndFileContext(json, fileContext);
                                combinators.push(combinator);
                                break;
                            }
                        case _kinds.CONSTRUCTOR_KIND:
                            {
                                var constructor = _constructor.default.fromJSONAndFileContext(json, fileContext);
                                constructors.push(constructor);
                                break;
                            }
                        case _kinds.METAVARIABLE_KIND:
                            {
                                var metavariable = _metavariable.default.fromJSONAndFileContext(json, fileContext);
                                metavariables.push(metavariable);
                                break;
                            }
                    }
                });
            }
        }
    ], [
        {
            key: "fromFilePathAndReleaseContext",
            value: function fromFilePathAndReleaseContext(filePath, releaseContext) {
                var file = releaseContext.getFile(filePath), content = file.getContent(), tokens = releaseContext.tokenise(content), node = releaseContext.parse(tokens);
                if (node !== null) {
                    var nonTerminalNode = node; ///
                    (0, _occamGrammarUtilities.rewriteNodes)(nonTerminalNode);
                }
                var types1 = [], rules1 = [], axioms1 = [], lemmas1 = [], theorems1 = [], variables1 = [], conjectures1 = [], combinators1 = [], constructors1 = [], metavariables1 = [], fileContext1 = new FileContext(releaseContext, filePath, tokens, node, types1, rules1, axioms1, lemmas1, variables1, theorems1, conjectures1, combinators1, constructors1, metavariables1);
                return fileContext1;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgVHlwZSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCBUaGVvcmVtIGZyb20gXCIuLi90aGVvcmVtXCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQ29uamVjdHVyZSBmcm9tIFwiLi4vY29uamVjdHVyZVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4uL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBmaWx0ZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRNZXRhVHlwZSB9IGZyb20gXCIuLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IFRZUEVfS0lORCxcbiAgICAgICAgIFJVTEVfS0lORCxcbiAgICAgICAgIEFYSU9NX0tJTkQsXG4gICAgICAgICBMRU1NQV9LSU5ELFxuICAgICAgICAgVEhFT1JFTV9LSU5ELFxuICAgICAgICAgVkFSSUFCTEVfS0lORCxcbiAgICAgICAgIENPTkpFQ1RVUkVfS0lORCxcbiAgICAgICAgIENPTUJJTkFUT1JfS0lORCxcbiAgICAgICAgIENPTlNUUlVDVE9SX0tJTkQsXG4gICAgICAgICBNRVRBVkFSSUFCTEVfS0lORCB9IGZyb20gXCIuLi9raW5kc1wiO1xuXG5jb25zdCBtZXRhVHlwZXMgPSBbXG4gIHN0YXRlbWVudE1ldGFUeXBlXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXZhcmlhYmxlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgY29uc3QgcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldE1ldGFwcm9vZlN0ZXBzKCkge1xuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGxlbW1hTGFiZWxzID0gbGVtbWEuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgY29uamVjdHVyZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHB1c2godHlwZXMsIHRoaXMudHlwZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICBwdXNoKHJ1bGVzLCB0aGlzLnJ1bGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldEF4aW9tcygpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICBwdXNoKGxlbW1hcywgdGhpcy5sZW1tYXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCByZWxlYXNlQ29udGV4dExlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKHRoZW9yZW1zLCB0aGlzLnRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGFUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gbWV0YVR5cGVzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcygpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZmluZExhYmVsQnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgIC8vL1xuICAgICAgICAgIGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVNYXRjaGVzTGFiZWxOYW1lID0gcnVsZS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21NYXRjaGVzTGFiZWxOYW1lID0gYXhpb20ubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFNYXRjaGVzTGFiZWxOYW1lID0gbGVtbWEubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGxlbW1hTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbU1hdGNoZXNMYWJlbE5hbWUgPSB0aGVvcmVtLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGVvcmVtTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZU1hdGNoZXNMYWJlbE5hbWUgPSBjb25qZWN0dXJlLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlMYWJlbE5hbWUobGFiZWxOYW1lKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgZmlsdGVyKHRoaXMudmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBuYW1lVmFyaWFibGVOYW1lID0gKG5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmICghbmFtZVZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGZpbHRlcih0aGlzLm1ldGF2YXJpYWJsZXMsIChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAobmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmICghbmFtZU1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGZhdGFsKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5mYXRhbChtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QganNvbiA9IFtdO1xuXG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAganNvbi5wdXNoKHR5cGVKU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgIGpzb24ucHVzaChydWxlSlNPTik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAganNvbi5wdXNoKGF4aW9tSlNPTik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbW1hcy5mb3JFYWNoKChsZW1tYSkgPT4ge1xuICAgICAgY29uc3QgbGVtbWFKU09OID0gbGVtbWEudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAganNvbi5wdXNoKGxlbW1hSlNPTik7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2godGhlb3JlbUpTT04pO1xuICAgIH0pO1xuXG4gICAgdGhpcy52YXJpYWJsZXMuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgIGpzb24ucHVzaCh2YXJpYWJsZUpTT04pXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2goY29uamVjdHVyZUpTT04pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21iaW5hdG9ycy5mb3JFYWNoKChjb21iaW5hdG9yKSA9PiB7XG4gICAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAganNvbi5wdXNoKGNvbWJpbmF0b3JKU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29uc3RydWN0b3JzLmZvckVhY2goKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2goY29uc3RydWN0b3JKU09OKVxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzLmZvckVhY2goKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2gobWV0YXZhcmlhYmxlSlNPTilcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QganNvbkFycmF5ID0ganNvbjsgLy8vXG5cbiAgICBqc29uQXJyYXkuZm9yRWFjaCgoanNvbikgPT4ge1xuICAgICAgY29uc3QgeyBraW5kIH0gPSBqc29uO1xuXG4gICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgY2FzZSBUWVBFX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gVHlwZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgUlVMRV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgcnVsZSA9IFJ1bGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICBydWxlcy5wdXNoKHJ1bGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIEFYSU9NX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBheGlvbSA9IEF4aW9tLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgYXhpb21zLnB1c2goYXhpb20pO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIExFTU1BX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBsZW1tYSA9IExlbW1hLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgbGVtbWFzLnB1c2gobGVtbWEpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFRIRU9SRU1fS0lORDoge1xuICAgICAgICAgIGNvbnN0IHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBWQVJJQUJMRV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBDT05KRUNUVVJFX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIGNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgQ09NQklOQVRPUl9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICBjb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTlNUUlVDVE9SX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIE1FVEFWQVJJQUJMRV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0KGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGUgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gcmVsZWFzZUNvbnRleHQudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0LnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICAgIHJld3JpdGVOb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHZhcmlhYmxlcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsIm1ldGFUeXBlcyIsInN0YXRlbWVudE1ldGFUeXBlIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwibWV0YXZhcmlhYmxlcyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0UHJvb2ZTdGVwcyIsInByb29mU3RlcHMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJwdXNoIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsInJlbGVhc2VDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0TWV0YVR5cGVzIiwiZ2V0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZmluZExhYmVsQnlMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJuYW1lIiwibGFiZWwiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZSIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWUiLCJydWxlTWF0Y2hlc0xhYmVsTmFtZSIsIm1hdGNoTGFiZWxOYW1lIiwiZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lIiwiYXhpb21NYXRjaGVzTGFiZWxOYW1lIiwiZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lIiwibGVtbWFNYXRjaGVzTGFiZWxOYW1lIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUiLCJ0aGVvcmVtTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWF0Y2hNZXRhVHlwZU5hbWUiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZSIsImNvbmplY3R1cmVNYXRjaGVzTGFiZWxOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGUiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lIiwibGFiZWxQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJhZGRUeXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkTGVtbWEiLCJhZGRUaGVvcmVtIiwiYWRkVmFyaWFibGUiLCJnZXROYW1lIiwiZmlsdGVyIiwibmFtZVZhcmlhYmxlTmFtZSIsImFkZENvbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJhZGRNZXRhdmFyaWFibGUiLCJuYW1lTWV0YXZhcmlhYmxlTmFtZSIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwidG9KU09OIiwianNvbiIsInR5cGVKU09OIiwicnVsZUpTT04iLCJheGlvbUpTT04iLCJsZW1tYUpTT04iLCJ0aGVvcmVtSlNPTiIsInZhcmlhYmxlSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29tYmluYXRvckpTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJtZXRhdmFyaWFibGVKU09OIiwiaW5pdGlhbGlzZSIsImpzb25BcnJheSIsImtpbmQiLCJUWVBFX0tJTkQiLCJUeXBlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiUlVMRV9LSU5EIiwiUnVsZSIsIkFYSU9NX0tJTkQiLCJBeGlvbSIsIkxFTU1BX0tJTkQiLCJMZW1tYSIsIlRIRU9SRU1fS0lORCIsIlRoZW9yZW0iLCJWQVJJQUJMRV9LSU5EIiwiVmFyaWFibGUiLCJDT05KRUNUVVJFX0tJTkQiLCJDb25qZWN0dXJlIiwiQ09NQklOQVRPUl9LSU5EIiwiQ29tYmluYXRvciIsIkNPTlNUUlVDVE9SX0tJTkQiLCJDb25zdHJ1Y3RvciIsIk1FVEFWQVJJQUJMRV9LSU5EIiwiTWV0YXZhcmlhYmxlIiwiZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQiLCJmaWxlIiwiZ2V0RmlsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsIm5vblRlcm1pbmFsTm9kZSIsInJld3JpdGVOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFpQ3FCQTs7O3FDQS9CUTt5REFFWjt5REFDQTswREFDQzswREFDQTs0REFDRTs2REFDQzsrREFDRTsrREFDQTtnRUFDQztpRUFDQztxQkFFSTt3QkFDSztzQkFDVTtxQkFVVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFNQyxZQUFZO0lBQ2hCQywyQkFBaUI7Q0FDbEI7QUFFYyxJQUFBLEFBQU1GLDRCQUFOO2FBQU1BLFlBQ1BHLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQUVDLFVBQVMsRUFBRUMsWUFBVyxFQUFFQyxZQUFXLEVBQUVDLGFBQVksRUFBRUMsY0FBYTs4QkFEekloQjtRQUVqQixJQUFJLENBQUNHLGNBQWMs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