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
    function FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, conjectures, combinators, constructors, metavariables) {
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
        this.variables = variables;
        this.conjectures = conjectures;
        this.combinators = combinators;
        this.constructors = constructors;
        this.metavariables = metavariables;
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
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var name = metavariableName, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
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
                var _this = this;
                var jsonArray = json, fileContext = this; ///
                jsonArray.forEach(function(json) {
                    var kind = json.kind;
                    switch(kind){
                        case _kinds.TYPE_KIND:
                            {
                                var type = _type.default.fromJSONAndFileContext(json, fileContext);
                                _this.types.push(type);
                                break;
                            }
                        case _kinds.RULE_KIND:
                            {
                                var rule = _rule.default.fromJSONAndFileContext(json, fileContext);
                                _this.rules.push(rule);
                                break;
                            }
                        case _kinds.AXIOM_KIND:
                            {
                                var axiom = _axiom.default.fromJSONAndFileContext(json, fileContext);
                                _this.axioms.push(axiom);
                                break;
                            }
                        case _kinds.LEMMA_KIND:
                            {
                                var lemma = _lemma.default.fromJSONAndFileContext(json, fileContext);
                                _this.lemmas.push(lemma);
                                break;
                            }
                        case _kinds.THEOREM_KIND:
                            {
                                var theorem = _theorem.default.fromJSONAndFileContext(json, fileContext);
                                _this.theorems.push(theorem);
                                break;
                            }
                        case _kinds.VARIABLE_KIND:
                            {
                                var variable = _variable.default.fromJSONAndFileContext(json, fileContext);
                                _this.variables.push(variable);
                                break;
                            }
                        case _kinds.CONJECTURE_KIND:
                            {
                                var conjecture = _conjecture.default.fromJSONAndFileContext(json, fileContext);
                                _this.conjectures.push(conjecture);
                                break;
                            }
                        case _kinds.COMBINATOR_KIND:
                            {
                                var combinator = _combinator.default.fromJSONAndFileContext(json, fileContext);
                                _this.combinators.push(combinator);
                                break;
                            }
                        case _kinds.CONSTRUCTOR_KIND:
                            {
                                var constructor = _constructor.default.fromJSONAndFileContext(json, fileContext);
                                _this.constructors.push(constructor);
                                break;
                            }
                        case _kinds.METAVARIABLE_KIND:
                            {
                                var metavariable = _metavariable.default.fromJSONAndFileContext(json, fileContext);
                                _this.metavariables.push(metavariable);
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
                var types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], conjectures = [], combinators = [], constructors = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, theorems, conjectures, combinators, constructors, metavariables);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgVHlwZSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCBUaGVvcmVtIGZyb20gXCIuLi90aGVvcmVtXCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQ29uamVjdHVyZSBmcm9tIFwiLi4vY29uamVjdHVyZVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4uL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBmaWx0ZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRNZXRhVHlwZSB9IGZyb20gXCIuLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IFRZUEVfS0lORCxcbiAgICAgICAgIFJVTEVfS0lORCxcbiAgICAgICAgIEFYSU9NX0tJTkQsXG4gICAgICAgICBMRU1NQV9LSU5ELFxuICAgICAgICAgVEhFT1JFTV9LSU5ELFxuICAgICAgICAgVkFSSUFCTEVfS0lORCxcbiAgICAgICAgIENPTkpFQ1RVUkVfS0lORCxcbiAgICAgICAgIENPTUJJTkFUT1JfS0lORCxcbiAgICAgICAgIENPTlNUUlVDVE9SX0tJTkQsXG4gICAgICAgICBNRVRBVkFSSUFCTEVfS0lORCB9IGZyb20gXCIuLi9raW5kc1wiO1xuXG5jb25zdCBtZXRhVHlwZXMgPSBbXG4gIHN0YXRlbWVudE1ldGFUeXBlXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXZhcmlhYmxlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgY29uc3QgcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldE1ldGFwcm9vZlN0ZXBzKCkge1xuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGxlbW1hTGFiZWxzID0gbGVtbWEuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgY29uamVjdHVyZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHB1c2godHlwZXMsIHRoaXMudHlwZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICBwdXNoKHJ1bGVzLCB0aGlzLnJ1bGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldEF4aW9tcygpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICBwdXNoKGxlbW1hcywgdGhpcy5sZW1tYXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCByZWxlYXNlQ29udGV4dExlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKHRoZW9yZW1zLCB0aGlzLnRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGFUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gbWV0YVR5cGVzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcygpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZmluZExhYmVsQnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgIC8vL1xuICAgICAgICAgIGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKSxcbiAgICAgICAgICB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVNYXRjaGVzTGFiZWxOYW1lID0gcnVsZS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21NYXRjaGVzTGFiZWxOYW1lID0gYXhpb20ubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFNYXRjaGVzTGFiZWxOYW1lID0gbGVtbWEubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGxlbW1hTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbU1hdGNoZXNMYWJlbE5hbWUgPSB0aGVvcmVtLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGVvcmVtTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZU1hdGNoZXNMYWJlbE5hbWUgPSBjb25qZWN0dXJlLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlMYWJlbE5hbWUobGFiZWxOYW1lKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgZmlsdGVyKHRoaXMudmFyaWFibGVzLCAodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBuYW1lVmFyaWFibGVOYW1lID0gKG5hbWUgPT09IHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmICghbmFtZVZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKTtcblxuICAgIGZpbHRlcih0aGlzLm1ldGF2YXJpYWJsZXMsIChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbmFtZU1ldGF2YXJpYWJsZU5hbWUgPSAobmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmICghbmFtZU1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGZhdGFsKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5mYXRhbChtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QganNvbiA9IFtdO1xuXG4gICAgdGhpcy50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAganNvbi5wdXNoKHR5cGVKU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgIGpzb24ucHVzaChydWxlSlNPTik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAganNvbi5wdXNoKGF4aW9tSlNPTik7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbW1hcy5mb3JFYWNoKChsZW1tYSkgPT4ge1xuICAgICAgY29uc3QgbGVtbWFKU09OID0gbGVtbWEudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAganNvbi5wdXNoKGxlbW1hSlNPTik7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2godGhlb3JlbUpTT04pO1xuICAgIH0pO1xuXG4gICAgdGhpcy52YXJpYWJsZXMuZm9yRWFjaCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgIGpzb24ucHVzaCh2YXJpYWJsZUpTT04pXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2goY29uamVjdHVyZUpTT04pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21iaW5hdG9ycy5mb3JFYWNoKChjb21iaW5hdG9yKSA9PiB7XG4gICAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAganNvbi5wdXNoKGNvbWJpbmF0b3JKU09OKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29uc3RydWN0b3JzLmZvckVhY2goKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2goY29uc3RydWN0b3JKU09OKVxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzLmZvckVhY2goKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICBqc29uLnB1c2gobWV0YXZhcmlhYmxlSlNPTilcbiAgICB9KTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QganNvbkFycmF5ID0ganNvbiwgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGpzb25BcnJheS5mb3JFYWNoKChqc29uKSA9PiB7XG4gICAgICBjb25zdCB7IGtpbmQgfSA9IGpzb247XG5cbiAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIFRZUEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSBUeXBlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIFJVTEVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIEFYSU9NX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBheGlvbSA9IEF4aW9tLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTEVNTUFfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGxlbW1hID0gTGVtbWEuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBUSEVPUkVNX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBWQVJJQUJMRV9LSU5EOiB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTkpFQ1RVUkVfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTUJJTkFUT1JfS0lORDoge1xuICAgICAgICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIENPTlNUUlVDVE9SX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgTUVUQVZBUklBQkxFX0tJTkQ6IHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dChmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlID0gcmVsZWFzZUNvbnRleHQuZ2V0RmlsZShmaWxlUGF0aCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IHJlbGVhc2VDb250ZXh0LnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSByZWxlYXNlQ29udGV4dC5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgICByZXdyaXRlTm9kZXMobm9uVGVybWluYWxOb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB2YXJpYWJsZXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJtZXRhVHlwZXMiLCJzdGF0ZW1lbnRNZXRhVHlwZSIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwidmFyaWFibGVzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJtZXRhcHJvb2ZTdGVwcyIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwicHVzaCIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJsZW1tYSIsImxlbW1hTGFiZWxzIiwidGhlb3JlbSIsInRoZW9yZW1MYWJlbHMiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldE1ldGFUeXBlcyIsImdldENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImZpbmRMYWJlbEJ5TGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibmFtZSIsImxhYmVsIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGUiLCJtYXRjaFR5cGVOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwicnVsZU1hdGNoZXNMYWJlbE5hbWUiLCJtYXRjaExhYmVsTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZSIsImxlbW1hTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lIiwidGhlb3JlbU1hdGNoZXNMYWJlbE5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsIm1hdGNoTWV0YVR5cGVOYW1lIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUiLCJjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlIiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImxhYmVsUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwiYWRkVGhlb3JlbSIsImFkZFZhcmlhYmxlIiwiZ2V0TmFtZSIsImZpbHRlciIsIm5hbWVWYXJpYWJsZU5hbWUiLCJhZGRDb25qZWN0dXJlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiYWRkTWV0YXZhcmlhYmxlIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsInRvSlNPTiIsImpzb24iLCJ0eXBlSlNPTiIsInJ1bGVKU09OIiwiYXhpb21KU09OIiwibGVtbWFKU09OIiwidGhlb3JlbUpTT04iLCJ2YXJpYWJsZUpTT04iLCJjb25qZWN0dXJlSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29uc3RydWN0b3JKU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsImluaXRpYWxpc2UiLCJqc29uQXJyYXkiLCJmaWxlQ29udGV4dCIsImtpbmQiLCJUWVBFX0tJTkQiLCJUeXBlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIlJVTEVfS0lORCIsIlJ1bGUiLCJBWElPTV9LSU5EIiwiQXhpb20iLCJMRU1NQV9LSU5EIiwiTGVtbWEiLCJUSEVPUkVNX0tJTkQiLCJUaGVvcmVtIiwiVkFSSUFCTEVfS0lORCIsIlZhcmlhYmxlIiwiQ09OSkVDVFVSRV9LSU5EIiwiQ29uamVjdHVyZSIsIkNPTUJJTkFUT1JfS0lORCIsIkNvbWJpbmF0b3IiLCJDT05TVFJVQ1RPUl9LSU5EIiwiQ29uc3RydWN0b3IiLCJNRVRBVkFSSUFCTEVfS0lORCIsIk1ldGF2YXJpYWJsZSIsImZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0IiwiZmlsZSIsImdldEZpbGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJub25UZXJtaW5hbE5vZGUiLCJyZXdyaXRlTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBaUNxQkE7OztxQ0EvQlE7eURBRVo7eURBQ0E7MERBQ0M7MERBQ0E7NERBQ0U7NkRBQ0M7K0RBQ0U7K0RBQ0E7Z0VBQ0M7aUVBQ0M7cUJBRUk7d0JBQ0s7c0JBQ1U7cUJBVVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBTUMsWUFBWTtJQUNoQkMsMkJBQWlCO0NBQ2xCO0FBRWMsSUFBQSxBQUFNRiw0QkFBTjthQUFNQSxZQUNQRyxjQUFjLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxF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