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
var _necessary = require("necessary");
var _equivalences = /*#__PURE__*/ _interop_require_default(require("../equivalences"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _topLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/topLevel"));
var _type = require("../dom/type");
var _string = require("../utilities/string");
var _json = require("../utilities/json");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter;
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, constructors, metatheorems, metavariables) {
        _class_call_check(this, FileContext);
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
        this.metaLemmas = metaLemmas;
        this.conjectures = conjectures;
        this.combinators = combinators;
        this.constructors = constructors;
        this.metatheorems = metatheorems;
        this.metavariables = metavariables;
    }
    _create_class(FileContext, [
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
            key: "getLexer",
            value: function getLexer() {
                return this.releaseContext.getLexer();
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                return this.releaseContext.getParser();
            }
        },
        {
            key: "getMetaTypes",
            value: function getMetaTypes() {
                return this.releaseContext.getMetaTypes();
            }
        },
        {
            key: "getTermType",
            value: function getTermType(term) {
                var termType = term.getType();
                return termType;
            }
        },
        {
            key: "getJudgements",
            value: function getJudgements() {
                var judgements = [];
                return judgements;
            }
        },
        {
            key: "getEquivalences",
            value: function getEquivalences() {
                var equivalences = _equivalences.default.fromNothing();
                return equivalences;
            }
        },
        {
            key: "getProofStepSubproofs",
            value: function getProofStepSubproofs() {
                var proofStepSubproofs = [];
                return proofStepSubproofs;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                this.rules.forEach(function(rule) {
                    var ruleLabels = rule.getLabels();
                    push(labels, ruleLabels);
                });
                this.axioms.forEach(function(axiom) {
                    var axiomLabels = axiom.getLabels();
                    push(labels, axiomLabels);
                });
                this.lemmas.forEach(function(lemma) {
                    var lemmaLabels = lemma.getLabels();
                    push(labels, lemmaLabels);
                });
                this.theorems.forEach(function(theorem) {
                    var theoremLabels = theorem.getLabels();
                    push(labels, theoremLabels);
                });
                this.conjectures.forEach(function(conjecture) {
                    var conjectureLabels = conjecture.getLabels();
                    push(labels, conjectureLabels);
                });
                this.metatheorems.forEach(function(metatheorem) {
                    var metatheoremLabels = metatheorem.getLabels();
                    push(labels, metatheoremLabels);
                });
                if (includeRelease) {
                    var releaseContextLabels = this.releaseContext.getLabels();
                    push(labels, releaseContextLabels);
                }
                return labels;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var types = [];
                push(types, this.types);
                if (includeRelease) {
                    var releaseContextTypes = this.releaseContext.getTypes();
                    push(types, releaseContextTypes);
                }
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = [];
                push(rules, this.rules);
                if (includeRelease) {
                    var releaseContextRules = this.releaseContext.getRules();
                    push(rules, releaseContextRules);
                }
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = [];
                push(axioms, this.axioms);
                if (includeRelease) {
                    var releaseContextAxioms = this.releaseContext.getAxioms();
                    push(axioms, releaseContextAxioms);
                }
                return axioms;
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = [];
                push(lemmas, this.lemmas);
                if (includeRelease) {
                    var releaseContextLemmas = this.releaseContext.getLemmas();
                    push(lemmas, releaseContextLemmas);
                }
                return lemmas;
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems = [];
                push(theorems, this.theorems);
                if (includeRelease) {
                    var releaseContextTheorems = this.releaseContext.getTheorems();
                    push(theorems, releaseContextTheorems);
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
            key: "getProcedures",
            value: function getProcedures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var procedures = [];
                return procedures;
            }
        },
        {
            key: "getMetaLemmas",
            value: function getMetaLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metaLemmas = [];
                push(metaLemmas, this.metaLemmas);
                if (includeRelease) {
                    var releaseContextMetaLemmas = this.releaseContext.getMetaLemmas();
                    push(metaLemmas, releaseContextMetaLemmas);
                }
                return metaLemmas;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures = [];
                push(conjectures, this.conjectures);
                if (includeRelease) {
                    var releaseContextConjectures = this.releaseContext.getConjectures();
                    push(conjectures, releaseContextConjectures);
                }
                return conjectures;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = [];
                push(combinators, this.combinators);
                if (includeRelease) {
                    var releaseContextCombinators = this.releaseContext.getCombinators();
                    push(combinators, releaseContextCombinators);
                }
                return combinators;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = [];
                push(constructors, this.constructors);
                if (includeRelease) {
                    var releaseContextConstructors = this.releaseContext.getConstructors();
                    push(constructors, releaseContextConstructors);
                }
                return constructors;
            }
        },
        {
            key: "getMetatheorems",
            value: function getMetatheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metatheorems = [];
                push(metatheorems, this.metatheorems);
                if (includeRelease) {
                    var releaseContextMetatheorems = this.releaseContext.getMetatheorems();
                    push(metatheorems, releaseContextMetatheorems);
                }
                return metatheorems;
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
            key: "isMetavariableDeclared",
            value: function isMetavariableDeclared(metavariable, generalContext, specificContext) {
                metavariable = this.findMetavariable(metavariable, generalContext, specificContext); ///
                var metavariableDeclared = metavariable !== null;
                return metavariableDeclared;
            }
        },
        {
            key: "isTypeDeclaredByTypeName",
            value: function isTypeDeclaredByTypeName(typeName) {
                var type = this.findTypeByTypeName(typeName), typeDeclared = type !== null;
                return typeDeclared;
            }
        },
        {
            key: "isVariableDeclaredByVariableName",
            value: function isVariableDeclaredByVariableName(variableName) {
                var variable = this.findVariableByVariableName(variableName), variableDeclared = variable !== null;
                return variableDeclared;
            }
        },
        {
            key: "isMetavariableDeclaredByMetavariableName",
            value: function isMetavariableDeclaredByMetavariableName(metavariableName) {
                var metavariable = this.findMetavariableByMetavariableName(metavariableName), metavariableDeclared = metavariable !== null;
                return metavariableDeclared;
            }
        },
        {
            key: "isLabelPresentByMetavariableName",
            value: function isLabelPresentByMetavariableName(metavariableName) {
                var label = this.findLabelByMetavariableName(metavariableName), labelPresent = label !== null;
                return labelPresent;
            }
        },
        {
            key: "isLabelPresentByMetavariableNode",
            value: function isLabelPresentByMetavariableNode(metavariableNode) {
                var label = this.findLabelByMetavariableNode(metavariableNode), labelPresent = label !== null;
                return labelPresent;
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types = this.getTypes();
                types.push(_type.objectType);
                var type = types.find(function(type) {
                    var typeNameMatches = type.matchTypeName(typeName);
                    if (typeNameMatches) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "findMetaTypeByMetaTypeName",
            value: function findMetaTypeByMetaTypeName(metaTypeName) {
                var metaTypes = this.getMetaTypes(), metaType = metaTypes.find(function(metaType) {
                    var metaTypeNameMatches = metaType.matchMetaTypeName(metaTypeName);
                    if (metaTypeNameMatches) {
                        return true;
                    }
                }) || null;
                return metaType;
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var variables = this.getVariables(), variable = variables.find(function(variable) {
                    var variableNameMatches = variable.matchVariableName(variableName);
                    if (variableNameMatches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "findLabelByMetavariableName",
            value: function findLabelByMetavariableName(metavariableName) {
                var labels = this.getLabels(), label = labels.find(function(label) {
                    var metavariableNameMatches = label.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return label;
            }
        },
        {
            key: "findLabelByMetavariableNode",
            value: function findLabelByMetavariableNode(metavariableNode) {
                var labels = this.getLabels(), label = labels.find(function(label) {
                    var metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return label;
            }
        },
        {
            key: "findRuleByReference",
            value: function findRuleByReference(reference) {
                var rules = this.getRules(), metavariableName = reference.getMetavariableName(), rule = rules.find(function(rule) {
                    var metavariableNameMatches = rule.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return rule;
            }
        },
        {
            key: "findAxiomByReference",
            value: function findAxiomByReference(reference) {
                var axioms = this.getAxioms(), metavariableName = reference.getMetavariableName(), axiom = axioms.find(function(axiom) {
                    var metavariableNameMatches = axiom.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return axiom;
            }
        },
        {
            key: "findLemmaByReference",
            value: function findLemmaByReference(reference) {
                var lemmas = this.getLemmas(), metavariableName = reference.getMetavariableName(), lemma = lemmas.find(function(lemma) {
                    var metavariableNameMatches = lemma.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return lemma;
            }
        },
        {
            key: "findTheoremByReference",
            value: function findTheoremByReference(reference) {
                var theorems = this.getTheorems(), metavariableName = reference.getMetavariableName(), theorem = theorems.find(function(theorem) {
                    var metavariableNameMatches = theorem.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return theorem;
            }
        },
        {
            key: "findProcedureByReference",
            value: function findProcedureByReference(reference) {
                var procedures = this.getProcedures(), metavariableName = reference.getMetavariableName(), procedure = procedures.find(function(procedure) {
                    var metavariableNameMatches = procedure.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return procedure;
            }
        },
        {
            key: "findConjectureByReference",
            value: function findConjectureByReference(reference) {
                var conjectures = this.getConjectures(), metavariableName = reference.getMetavariableName(), conjecture = conjectures.find(function(conjecture) {
                    var metavariableNameMatches = conjecture.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return conjecture;
            }
        },
        {
            key: "findMetaLemmasByReference",
            value: function findMetaLemmasByReference(reference) {
                var _this = this;
                var metaLemmas = this.getMetaLemmas();
                filter(metaLemmas, function(metaLemma) {
                    var context = _this, substitutions = _substitutions.default.fromNothing(), referenceUnified = metaLemma.unifyReference(reference, substitutions, context);
                    if (referenceUnified) {
                        return true;
                    }
                });
                return metaLemmas;
            }
        },
        {
            key: "findMetatheoremsByReference",
            value: function findMetatheoremsByReference(reference) {
                var _this = this;
                var metatheorems = this.getMetatheorems();
                filter(metatheorems, function(metatheorem) {
                    var context = _this, substitutions = _substitutions.default.fromNothing(), referenceUnified = metatheorem.unifyReference(reference, substitutions, context);
                    if (referenceUnified) {
                        return true;
                    }
                });
                return metatheorems;
            }
        },
        {
            key: "findAxiomLemmaTheoremConjectureByReference",
            value: function findAxiomLemmaTheoremConjectureByReference(reference) {
                var axiom = this.findAxiomByReference(reference), lemma = this.findLemmaByReference(reference), theorem = this.findTheoremByReference(reference), conjecture = this.findConjectureByReference(reference), axiomLemmaTheoremConjecture = axiom || lemma || theorem || conjecture;
                return axiomLemmaTheoremConjecture;
            }
        },
        {
            key: "findVariable",
            value: function findVariable(variable) {
                var specificVariable = variable, variables = this.getVariables();
                variable = variables.find(function(variable) {
                    var generalVariable = variable, generalVariableEqualToSpecificVariable = generalVariable.isEqualTo(specificVariable);
                    if (generalVariableEqualToSpecificVariable) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "findJudgementByMetavariable",
            value: function findJudgementByMetavariable(metavariable) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementMetavariable = judgement.getMetavariable();
                    if (judgementMetavariable !== null) {
                        var judgementMetavariableEqualToMetavariable = judgementMetavariable.isEqualTo(metavariable);
                        if (judgementMetavariableEqualToMetavariable) {
                            return true;
                        }
                    }
                }) || null;
                return judgement;
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var metavariableNameMatches = metavariable.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "findMetavariable",
            value: function findMetavariable(metavariable, generalContext, specificContext) {
                var specificMetavariable = metavariable, metavariables = this.getMetavariables();
                metavariable = metavariables.find(function(metavariable) {
                    var generalMetavariable = metavariable; ///
                    metavariable = specificMetavariable; ///
                    var metavariableUnified = generalMetavariable.unifyMetavariable(metavariable, generalContext, specificContext);
                    if (metavariableUnified) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "isRulePresentByReference",
            value: function isRulePresentByReference(reference) {
                var rule = this.findRuleByReference(reference), rulePresent = rule !== null;
                return rulePresent;
            }
        },
        {
            key: "isAxiomPresentByReference",
            value: function isAxiomPresentByReference(reference) {
                var axiom = this.findAxiomByReference(reference), axiomPresent = axiom !== null;
                return axiomPresent;
            }
        },
        {
            key: "isLemmaPresentByReference",
            value: function isLemmaPresentByReference(reference) {
                var lemma = this.findLemmaByReference(reference), lemmaPresent = lemma !== null;
                return lemmaPresent;
            }
        },
        {
            key: "isTheoremPresentByReference",
            value: function isTheoremPresentByReference(reference) {
                var theorem = this.findTheoremByReference(reference), theoremPresent = theorem !== null;
                return theoremPresent;
            }
        },
        {
            key: "isConjecturePresentByReference",
            value: function isConjecturePresentByReference(reference) {
                var conjecture = this.findConjectureByReference(reference), conjecturePresent = conjecture !== null;
                return conjecturePresent;
            }
        },
        {
            key: "isAxiomLemmaTheoremConjecturePresentByReference",
            value: function isAxiomLemmaTheoremConjecturePresentByReference(reference) {
                var axiomLemmaTheoremConjecture = this.findAxiomLemmaTheoremConjectureByReference(reference), axiomLemmaTheoremConjecturePresent = axiomLemmaTheoremConjecture !== null;
                return axiomLemmaTheoremConjecturePresent;
            }
        },
        {
            key: "areMetaLemmasPresentByReference",
            value: function areMetaLemmasPresentByReference(reference) {
                var metaLemmas = this.findMetaLemmasByReference(reference), metaLemmasLength = metaLemmas.length, metaLemmasPresent = metaLemmasLength > 0;
                return metaLemmasPresent;
            }
        },
        {
            key: "areMetatheoremsPresentByReference",
            value: function areMetatheoremsPresentByReference(reference) {
                var metatheorems = this.findMetatheoremsByReference(reference), metatheoremsLength = metatheorems.length, metatheoremsPresent = metatheoremsLength > 0;
                return metatheoremsPresent;
            }
        },
        {
            key: "areMetaLemmasMetaTheoremsPresentByReference",
            value: function areMetaLemmasMetaTheoremsPresentByReference(reference) {
                var metaLemmasPresent = this.areMetaLemmasPresentByReference(reference), metatheoremsPresent = this.areMetatheoremsPresentByReference(reference), metaLemmasMetaTheoremsPresent = metaLemmasPresent || metatheoremsPresent;
                return metaLemmasMetaTheoremsPresent;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var tokens = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens === null) {
                    tokens = this.tokens;
                }
                var string = (0, _string.nodeAsString)(node, tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                var tokens = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens === null) {
                    tokens = this.tokens;
                }
                var string = (0, _string.nodesAsString)(node, tokens);
                return string;
            }
        },
        {
            key: "nodeAsTokens",
            value: function nodeAsTokens(node) {
                var tokens = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens === null) {
                    tokens = this.tokens;
                }
                tokens = (0, _string.nodeAsTokens)(node, tokens); ///
                return tokens;
            }
        },
        {
            key: "nodesAsTokens",
            value: function nodesAsTokens1(node) {
                var tokens = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens === null) {
                    tokens = this.tokens;
                }
                tokens = nodesAsTokens(node, tokens); ///
                return tokens;
            }
        },
        {
            key: "tokensAsString",
            value: function tokensAsString(tokens) {
                return (0, _string.tokensAsString)(tokens);
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
            key: "addMetaLemma",
            value: function addMetaLemma(metaLemma) {
                this.metaLemmas.push(metaLemma);
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
            key: "addMetatheorem",
            value: function addMetatheorem(metatheorem) {
                this.metatheorems.push(metatheorem);
            }
        },
        {
            key: "addMetavariable",
            value: function addMetavariable(metavariable) {
                this.metavariables.push(metavariable);
            }
        },
        {
            key: "findFile",
            value: function findFile(filePath) {
                return this.releaseContext.findFile(filePath);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                this.releaseContext.trace(message, this.filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.releaseContext.debug(message, this.filePath);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.releaseContext.info(message, this.filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.releaseContext.warning(message, this.filePath);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.releaseContext.error(message, this.filePath);
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                this.debug("Verifying the '".concat(this.filePath, "' file..."));
                this.prepare();
                if (this.node === null) {
                    this.warning("Unable to verify the '".concat(this.filePath, "' file because it cannot be parsed."));
                } else {
                    var fileContext = this, verifiedAtTopLevel = _topLevel.default.verify(this.node, fileContext);
                    if (verifiedAtTopLevel) {
                        verified = true;
                    } else {
                        this.clear();
                    }
                }
                if (verified) {
                    this.info("...verified the '".concat(this.filePath, "' file."));
                }
                return verified;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.types = [];
                this.rules = [];
                this.axioms = [];
                this.lemmas = [];
                this.theorems = [];
                this.variables = [];
                this.metaLemmas = [];
                this.conjectures = [];
                this.combinators = [];
                this.constructors = [];
                this.metatheorems = [];
                this.metavariables = [];
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                if (this.tokens !== null) {
                    return;
                }
                var file = this.findFile(this.filePath), lexer = this.getLexer(), parser = this.getParser(), content = file.getContent();
                this.tokens = lexer.tokenise(content);
                this.node = parser.parse(this.tokens);
            }
        },
        {
            key: "initialise",
            value: function initialise(json) {
                var fileContext = this; ///
                this.types = [];
                (0, _json.typesFromJSON)(json, this.types, fileContext);
                this.rules = (0, _json.rulesFromJSON)(json, fileContext);
                this.axioms = (0, _json.axiomsFromJSON)(json, fileContext);
                this.lemmas = (0, _json.lemmasFromNothing)();
                this.theorems = (0, _json.theoremsFromJSON)(json, fileContext);
                this.variables = (0, _json.variablesFromJSON)(json, fileContext);
                this.metaLemmas = (0, _json.metaLemmasFromNothing)();
                this.conjectures = (0, _json.conjecturesFromJSON)(json, fileContext);
                this.combinators = (0, _json.combinatorsFromJSON)(json, fileContext);
                this.constructors = (0, _json.constructorsFromJSON)(json, fileContext);
                this.metatheorems = (0, _json.metatheoremsFromJSON)(json, fileContext);
                this.metavariables = (0, _json.metavariablesFromJSON)(json, fileContext);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typesJSON = (0, _json.typesToTypesJSON)(this.types), rulesJSON = (0, _json.rulesToRulesJSON)(this.rules), axiomsJSON = (0, _json.axiomsToAxiomsJSON)(this.axioms), theoremsJSON = (0, _json.theoremsToTheoremsJSON)(this.theorems), variablesJSON = (0, _json.variablesToVariablesJSON)(this.variables), conjecturesJSON = (0, _json.conjecturesToConjecturesJSON)(this.conjectures), combinatorsJSON = (0, _json.combinatorsToCombinatorsJSON)(this.combinators), constructorsJSON = (0, _json.constructorsToConstructorsJSON)(this.constructors), metatheoremsJSON = (0, _json.metatheoremsToMetatheoremsJSON)(this.metatheorems), metavariablesJSON = (0, _json.metavariablesToMetavariablesJSON)(this.metavariables), filePath = this.filePath, types = typesJSON, rules = rulesJSON, axioms = axiomsJSON, theorems = theoremsJSON, variables = variablesJSON, conjectures = conjecturesJSON, combinators = combinatorsJSON, constructors = constructorsJSON, metatheorems = metatheoremsJSON, metavariables = metavariablesJSON, json = {
                    filePath: filePath,
                    types: types,
                    rules: rules,
                    axioms: axioms,
                    theorems: theorems,
                    variables: variables,
                    conjectures: conjectures,
                    combinators: combinators,
                    constructors: constructors,
                    metatheorems: metatheorems,
                    metavariables: metavariables
                };
                return json;
            }
        }
    ], [
        {
            key: "fromFile",
            value: function fromFile(file, releaseContext) {
                var filePath = file.getPath(), tokens = null, node = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                return fileContext;
            }
        },
        {
            key: "fromFilePathAndJSON",
            value: function fromFilePathAndJSON(filePath, json, releaseContext) {
                var tokens = null, node = null, types = null, rules = null, axioms = null, lemmas = null, theorems = null, variables = null, metaLemmas = null, conjectures = null, combinators = null, constructors = null, metatheorems = null, metavariables = null, fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                fileContext.initialise(json);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXF1aXZhbGVuY2VzIGZyb20gXCIuLi9lcXVpdmFsZW5jZXNcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgdG9wTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvdG9wTGV2ZWxcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi9kb20vdHlwZVwiO1xuaW1wb3J0IHsgbm9kZUFzVG9rZW5zLCBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcsIHRva2Vuc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBjb25qZWN0dXJlc0Zyb21KU09OLFxuICAgICAgICAgY29tYmluYXRvcnNGcm9tSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBsZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIG1ldGFMZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIHR5cGVzVG9UeXBlc0pTT04sXG4gICAgICAgICBydWxlc1RvUnVsZXNKU09OLFxuICAgICAgICAgYXhpb21zVG9BeGlvbXNKU09OLFxuICAgICAgICAgdGhlb3JlbXNUb1RoZW9yZW1zSlNPTixcbiAgICAgICAgIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04sXG4gICAgICAgICBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXM7XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycztcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtcztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCk7IH1cblxuICBnZXRNZXRhVHlwZXMoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldE1ldGFUeXBlcygpOyB9XG5cbiAgZ2V0VGVybVR5cGUodGVybSkge1xuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gdGVybVR5cGU7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSBbXTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFByb29mU3RlcFN1YnByb29mcygpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZnMgPSBbXTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlTGFiZWxzID0gY29uamVjdHVyZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tZXRhdGhlb3JlbXMuZm9yRWFjaCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF0aGVvcmVtTGFiZWxzID0gbWV0YXRoZW9yZW0uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBtZXRhdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHB1c2godHlwZXMsIHRoaXMudHlwZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICBwdXNoKHJ1bGVzLCB0aGlzLnJ1bGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldEF4aW9tcygpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICBwdXNoKGxlbW1hcywgdGhpcy5sZW1tYXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCByZWxlYXNlQ29udGV4dExlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKHRoZW9yZW1zLCB0aGlzLnRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobWV0YUxlbW1hcywgdGhpcy5tZXRhTGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhTGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICBwdXNoKGNvbmplY3R1cmVzLCB0aGlzLmNvbmplY3R1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbnN0cnVjdG9ycywgdGhpcy5jb25zdHJ1Y3RvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2gobWV0YXRoZW9yZW1zLCB0aGlzLm1ldGF0aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoKTtcblxuICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVEZWNsYXJlZChtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyZWQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJlZDtcbiAgfVxuXG4gIGlzVHlwZURlY2xhcmVkQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZURlY2xhcmVkID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVEZWNsYXJlZDtcbiAgfVxuXG4gIGlzVmFyaWFibGVEZWNsYXJlZEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyZWQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyZWQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZURlY2xhcmVkQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyZWQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJlZDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gdGhpcy5nZXRNZXRhVHlwZXMoKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlcy5maW5kKChtZXRhVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YVR5cGVOYW1lTWF0Y2hlcyA9IG1ldGFUeXBlLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhVHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHJ1bGUubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBheGlvbS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBsZW1tYS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGVvcmVtLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gdGhpcy5nZXRQcm9jZWR1cmVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlcy5maW5kKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gcHJvY2VkdXJlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBjb25qZWN0dXJlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgZmlsdGVyKG1ldGFMZW1tYXMsIChtZXRhTGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICByZWZlcmVuY2VVbmlmaWVkID0gbWV0YUxlbW1hLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKTtcblxuICAgIGZpbHRlcihtZXRhdGhlb3JlbXMsIChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZWQgPSBtZXRhdGhlb3JlbS51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBmaW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb20gPSB0aGlzLmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbGVtbWEgPSB0aGlzLmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoaXMuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSB0aGlzLmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBzcGVjaWZpY1ZhcmlhYmxlID0gdmFyaWFibGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpO1xuXG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxWYXJpYWJsZSA9IHZhcmlhYmxlLFxuICAgICAgICAgICAgZ2VuZXJhbFZhcmlhYmxlRXF1YWxUb1NwZWNpZmljVmFyaWFibGUgPSBnZW5lcmFsVmFyaWFibGUuaXNFcXVhbFRvKHNwZWNpZmljVmFyaWFibGUpO1xuXG4gICAgICBpZiAoZ2VuZXJhbFZhcmlhYmxlRXF1YWxUb1NwZWNpZmljVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50TWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZTsgIC8vL1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVkID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzUnVsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgcnVsZVByZXNlbnQgPSAocnVsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcnVsZVByZXNlbnQ7XG4gIH1cblxuICBpc0F4aW9tUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tID0gdGhpcy5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGF4aW9tUHJlc2VudCA9IChheGlvbSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gYXhpb21QcmVzZW50O1xuICB9XG5cbiAgaXNMZW1tYVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsZW1tYSA9IHRoaXMuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBsZW1tYVByZXNlbnQgPSAobGVtbWEgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxlbW1hUHJlc2VudDtcbiAgfVxuXG4gIGlzVGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0aGVvcmVtID0gdGhpcy5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdGhlb3JlbVByZXNlbnQgPSAodGhlb3JlbSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbVByZXNlbnQ7XG4gIH1cblxuICBpc0NvbmplY3R1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZSA9IHRoaXMuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbmplY3R1cmVQcmVzZW50ID0gKGNvbmplY3R1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVQcmVzZW50O1xuICB9XG5cbiAgaXNBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gdGhpcy5maW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVQcmVzZW50ID0gKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlUHJlc2VudDtcbiAgfVxuXG4gIGFyZU1ldGFMZW1tYXNQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGFMZW1tYXNMZW5ndGggPSBtZXRhTGVtbWFzLmxlbmd0aCxcbiAgICAgICAgICBtZXRhTGVtbWFzUHJlc2VudCA9IChtZXRhTGVtbWFzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hc1ByZXNlbnQ7XG4gIH1cblxuICBhcmVNZXRhdGhlb3JlbXNQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNMZW5ndGggPSBtZXRhdGhlb3JlbXMubGVuZ3RoLCAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbXNQcmVzZW50ID0gKG1ldGF0aGVvcmVtc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtc1ByZXNlbnQ7XG4gIH1cblxuICBhcmVNZXRhTGVtbWFzTWV0YVRoZW9yZW1zUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXNQcmVzZW50ID0gdGhpcy5hcmVNZXRhTGVtbWFzUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zUHJlc2VudCA9IHRoaXMuYXJlTWV0YXRoZW9yZW1zUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YUxlbW1hc01ldGFUaGVvcmVtc1ByZXNlbnQgPSAobWV0YUxlbW1hc1ByZXNlbnQgfHwgbWV0YXRoZW9yZW1zUHJlc2VudCk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hc01ldGFUaGVvcmVtc1ByZXNlbnQ7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgbm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gbm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHsgcmV0dXJuIHRva2Vuc0FzU3RyaW5nKHRva2Vucyk7IH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRNZXRhTGVtbWEobWV0YUxlbW1hKSB7XG4gICAgdGhpcy5tZXRhTGVtbWFzLnB1c2gobWV0YUxlbW1hKTtcbiAgfVxuXG4gIGFkZENvbmplY3R1cmUoY29uamVjdHVyZSkge1xuICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgfVxuXG4gIGFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gIH1cblxuICBhZGRNZXRhdGhlb3JlbShtZXRhdGhlb3JlbSkge1xuICAgIHRoaXMubWV0YXRoZW9yZW1zLnB1c2gobWV0YXRoZW9yZW0pO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG4gIH1cblxuICBmaW5kRmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5maW5kRmlsZShmaWxlUGF0aCk7IH1cblxuICB0cmFjZShtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQudHJhY2UobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZGVidWcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5pbmZvKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQud2FybmluZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5lcnJvcihtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuLi5gKTtcblxuICAgIHRoaXMucHJlcGFyZSgpO1xuXG4gICAgaWYgKHRoaXMubm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuaW5nKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZSBiZWNhdXNlIGl0IGNhbm5vdCBiZSBwYXJzZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0b3BMZXZlbFZlcmlmaWVyLnZlcmlmeSh0aGlzLm5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnR5cGVzID0gW107XG4gICAgdGhpcy5ydWxlcyA9IFtdO1xuICAgIHRoaXMuYXhpb21zID0gW107XG4gICAgdGhpcy5sZW1tYXMgPSBbXTtcbiAgICB0aGlzLnRoZW9yZW1zID0gW107XG4gICAgdGhpcy52YXJpYWJsZXMgPSBbXTtcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBbXTtcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gW107XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IFtdO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gW107XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBbXTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBbXTtcbiAgfVxuXG4gIHByZXBhcmUoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmluZEZpbGUodGhpcy5maWxlUGF0aCksXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICB0aGlzLnR5cGVzID0gW107XG5cbiAgICB0eXBlc0Zyb21KU09OKGpzb24sIHRoaXMudHlwZXMsIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMucnVsZXMgPSBydWxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMuYXhpb21zID0gYXhpb21zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXNGcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzRnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzVG9UeXBlc0pTT04odGhpcy50eXBlcyksXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXNUb1J1bGVzSlNPTih0aGlzLnJ1bGVzKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zVG9BeGlvbXNKU09OKHRoaXMuYXhpb21zKSxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoaXMudGhlb3JlbXMpLFxuICAgICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odGhpcy52YXJpYWJsZXMpLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04odGhpcy5jb25qZWN0dXJlcyksXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTih0aGlzLmNvbWJpbmF0b3JzKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKHRoaXMuY29uc3RydWN0b3JzKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKHRoaXMubWV0YXRoZW9yZW1zKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKHRoaXMubWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0pTT04sICAvLy9cbiAgICAgICAgICBheGlvbXMgPSBheGlvbXNKU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29uamVjdHVyZXMsXG4gICAgICAgICAgICBjb21iaW5hdG9ycyxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtcyxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aEFuZEpTT04oZmlsZVBhdGgsIGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgbGVtbWFzID0gbnVsbCxcbiAgICAgICAgICB0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gbnVsbCxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IG51bGwsXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBudWxsLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG51bGwsXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbnVsbCxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCB0aGVvcmVtcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJsZW1tYXMiLCJ0aGVvcmVtcyIsInZhcmlhYmxlcyIsIm1ldGFMZW1tYXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwibWV0YXRoZW9yZW1zIiwibWV0YXZhcmlhYmxlcyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRNZXRhVHlwZXMiLCJnZXRUZXJtVHlwZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJnZXRKdWRnZW1lbnRzIiwianVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsIkVxdWl2YWxlbmNlcyIsImZyb21Ob3RoaW5nIiwiZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzIiwicHJvb2ZTdGVwU3VicHJvb2ZzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJheGlvbSIsImF4aW9tTGFiZWxzIiwibGVtbWEiLCJsZW1tYUxhYmVscyIsInRoZW9yZW0iLCJ0aGVvcmVtTGFiZWxzIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVMYWJlbHMiLCJtZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtTGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsInJlbGVhc2VDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwicmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyIsImdldE1ldGF2YXJpYWJsZXMiLCJpc01ldGF2YXJpYWJsZURlY2xhcmVkIiwibWV0YXZhcmlhYmxlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmaW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlRGVjbGFyZWQiLCJpc1R5cGVEZWNsYXJlZEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlRGVjbGFyZWQiLCJpc1ZhcmlhYmxlRGVjbGFyZWRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZURlY2xhcmVkIiwiaXNNZXRhdmFyaWFibGVEZWNsYXJlZEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJsYWJlbCIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm9iamVjdFR5cGUiLCJmaW5kIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVzIiwibWV0YVR5cGUiLCJtZXRhVHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhVHlwZU5hbWUiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsImZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSIsInByb2NlZHVyZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwibWV0YUxlbW1hIiwiY29udGV4dCIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwicmVmZXJlbmNlVW5pZmllZCIsInVuaWZ5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiZmluZFZhcmlhYmxlIiwic3BlY2lmaWNWYXJpYWJsZSIsImdlbmVyYWxWYXJpYWJsZSIsImdlbmVyYWxWYXJpYWJsZUVxdWFsVG9TcGVjaWZpY1ZhcmlhYmxlIiwiaXNFcXVhbFRvIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50IiwianVkZ2VtZW50TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZWQiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsImlzUnVsZVByZXNlbnRCeVJlZmVyZW5jZSIsInJ1bGVQcmVzZW50IiwiaXNBeGlvbVByZXNlbnRCeVJlZmVyZW5jZSIsImF4aW9tUHJlc2VudCIsImlzTGVtbWFQcmVzZW50QnlSZWZlcmVuY2UiLCJsZW1tYVByZXNlbnQiLCJpc1RoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJ0aGVvcmVtUHJlc2VudCIsImlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsImNvbmplY3R1cmVQcmVzZW50IiwiaXNBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVQcmVzZW50IiwiYXJlTWV0YUxlbW1hc1ByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYXNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhTGVtbWFzUHJlc2VudCIsImFyZU1ldGF0aGVvcmVtc1ByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGF0aGVvcmVtc0xlbmd0aCIsIm1ldGF0aGVvcmVtc1ByZXNlbnQiLCJhcmVNZXRhTGVtbWFzTWV0YVRoZW9yZW1zUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YUxlbW1hc01ldGFUaGVvcmVtc1ByZXNlbnQiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwibm9kZXNBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwiYWRkVGhlb3JlbSIsImFkZFZhcmlhYmxlIiwiYWRkTWV0YUxlbW1hIiwiYWRkQ29uamVjdHVyZSIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImFkZE1ldGF0aGVvcmVtIiwiYWRkTWV0YXZhcmlhYmxlIiwiZmluZEZpbGUiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInByZXBhcmUiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsInRvcExldmVsVmVyaWZpZXIiLCJjbGVhciIsImZpbGUiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImluaXRpYWxpc2UiLCJqc29uIiwidHlwZXNGcm9tSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJheGlvbXNGcm9tSlNPTiIsImxlbW1hc0Zyb21Ob3RoaW5nIiwidGhlb3JlbXNGcm9tSlNPTiIsInZhcmlhYmxlc0Zyb21KU09OIiwibWV0YUxlbW1hc0Zyb21Ob3RoaW5nIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwidG9KU09OIiwidHlwZXNKU09OIiwidHlwZXNUb1R5cGVzSlNPTiIsInJ1bGVzSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJheGlvbXNKU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlc0pTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsImZyb21GaWxlIiwiZ2V0UGF0aCIsImZyb21GaWxlUGF0aEFuZEpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBbUNxQkE7Ozt5QkFqQ1U7bUVBRU47b0VBQ0M7K0RBQ0c7b0JBRUY7c0JBQytDO29CQXNCekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBUUMsT0FBaUJDLHlCQUFjLENBQS9CRCxNQUFNRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQyxJQUFBLEFBQU1ILDRCQUFOO2FBQU1BLFlBQ1BJLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRG5LbkI7UUFFakIsSUFBSSxDQUFDSSxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdB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