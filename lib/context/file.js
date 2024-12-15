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
                if (includeRelease) {
                    var releaseContextProcedures = this.releaseContext.getProcedures();
                    push(procedures, releaseContextProcedures);
                }
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
                var procedures = this.getProcedures(), metavariableName = reference.getMetavariableName(), name = metavariableName, procedure = procedures.find(function(procedure) {
                    var nameMatches = procedure.matchName(name);
                    if (nameMatches) {
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
            key: "isProcedurePresentByReference",
            value: function isProcedurePresentByReference(reference) {
                var procedure = this.findProcedureByReference(reference), procedurePresent = procedure !== null;
                return procedurePresent;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXF1aXZhbGVuY2VzIGZyb20gXCIuLi9lcXVpdmFsZW5jZXNcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgdG9wTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvdG9wTGV2ZWxcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi9kb20vdHlwZVwiO1xuaW1wb3J0IHsgbm9kZUFzVG9rZW5zLCBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcsIHRva2Vuc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBjb25qZWN0dXJlc0Zyb21KU09OLFxuICAgICAgICAgY29tYmluYXRvcnNGcm9tSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBsZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIG1ldGFMZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIHR5cGVzVG9UeXBlc0pTT04sXG4gICAgICAgICBydWxlc1RvUnVsZXNKU09OLFxuICAgICAgICAgYXhpb21zVG9BeGlvbXNKU09OLFxuICAgICAgICAgdGhlb3JlbXNUb1RoZW9yZW1zSlNPTixcbiAgICAgICAgIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04sXG4gICAgICAgICBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXM7XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycztcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtcztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCk7IH1cblxuICBnZXRNZXRhVHlwZXMoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldE1ldGFUeXBlcygpOyB9XG5cbiAgZ2V0VGVybVR5cGUodGVybSkge1xuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gdGVybVR5cGU7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSBbXTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFByb29mU3RlcFN1YnByb29mcygpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZnMgPSBbXTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlTGFiZWxzID0gY29uamVjdHVyZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tZXRhdGhlb3JlbXMuZm9yRWFjaCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF0aGVvcmVtTGFiZWxzID0gbWV0YXRoZW9yZW0uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBtZXRhdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHB1c2godHlwZXMsIHRoaXMudHlwZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICBwdXNoKHJ1bGVzLCB0aGlzLnJ1bGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldEF4aW9tcygpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICBwdXNoKGxlbW1hcywgdGhpcy5sZW1tYXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCByZWxlYXNlQ29udGV4dExlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKHRoZW9yZW1zLCB0aGlzLnRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IFtdO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFByb2NlZHVyZXMoKTtcblxuICAgICAgcHVzaChwcm9jZWR1cmVzLCByZWxlYXNlQ29udGV4dFByb2NlZHVyZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICBwdXNoKG1ldGFMZW1tYXMsIHRoaXMubWV0YUxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIHJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgcHVzaChjb25qZWN0dXJlcywgdGhpcy5jb25qZWN0dXJlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKCk7XG5cbiAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbWJpbmF0b3JzLCB0aGlzLmNvbWJpbmF0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb25zdHJ1Y3RvcnMsIHRoaXMuY29uc3RydWN0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKG1ldGF0aGVvcmVtcywgdGhpcy5tZXRhdGhlb3JlbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKCk7XG5cbiAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRGVjbGFyZWQobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7ICAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZURlY2xhcmVkID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyZWQ7XG4gIH1cblxuICBpc1R5cGVEZWNsYXJlZEJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVEZWNsYXJlZCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlRGVjbGFyZWQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlRGVjbGFyZWRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmVkID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZURlY2xhcmVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVEZWNsYXJlZEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmVkID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyZWQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgdHlwZXMucHVzaChvYmplY3RUeXBlKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFUeXBlTmFtZU1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YVR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBydWxlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gYXhpb20ubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGVtbWEubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhlb3JlbS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IHRoaXMuZ2V0UHJvY2VkdXJlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlcy5maW5kKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gcHJvY2VkdXJlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBjb25qZWN0dXJlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgZmlsdGVyKG1ldGFMZW1tYXMsIChtZXRhTGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICByZWZlcmVuY2VVbmlmaWVkID0gbWV0YUxlbW1hLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKTtcblxuICAgIGZpbHRlcihtZXRhdGhlb3JlbXMsIChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZWQgPSBtZXRhdGhlb3JlbS51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBmaW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb20gPSB0aGlzLmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbGVtbWEgPSB0aGlzLmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoaXMuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSB0aGlzLmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBzcGVjaWZpY1ZhcmlhYmxlID0gdmFyaWFibGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpO1xuXG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxWYXJpYWJsZSA9IHZhcmlhYmxlLFxuICAgICAgICAgICAgZ2VuZXJhbFZhcmlhYmxlRXF1YWxUb1NwZWNpZmljVmFyaWFibGUgPSBnZW5lcmFsVmFyaWFibGUuaXNFcXVhbFRvKHNwZWNpZmljVmFyaWFibGUpO1xuXG4gICAgICBpZiAoZ2VuZXJhbFZhcmlhYmxlRXF1YWxUb1NwZWNpZmljVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50TWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZTsgIC8vL1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVkID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzUnVsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBydWxlID0gdGhpcy5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgcnVsZVByZXNlbnQgPSAocnVsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcnVsZVByZXNlbnQ7XG4gIH1cblxuICBpc0F4aW9tUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tID0gdGhpcy5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGF4aW9tUHJlc2VudCA9IChheGlvbSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gYXhpb21QcmVzZW50O1xuICB9XG5cbiAgaXNMZW1tYVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsZW1tYSA9IHRoaXMuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBsZW1tYVByZXNlbnQgPSAobGVtbWEgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxlbW1hUHJlc2VudDtcbiAgfVxuXG4gIGlzVGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0aGVvcmVtID0gdGhpcy5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdGhlb3JlbVByZXNlbnQgPSAodGhlb3JlbSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdGhlb3JlbVByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBwcm9jZWR1cmUgPSB0aGlzLmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSAocHJvY2VkdXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgaXNDb25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmUgPSB0aGlzLmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb25qZWN0dXJlUHJlc2VudCA9IChjb25qZWN0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBjb25qZWN0dXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSA9IHRoaXMuZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlUHJlc2VudCA9IChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVByZXNlbnQ7XG4gIH1cblxuICBhcmVNZXRhTGVtbWFzUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhTGVtbWFzTGVuZ3RoID0gbWV0YUxlbW1hcy5sZW5ndGgsXG4gICAgICAgICAgbWV0YUxlbW1hc1ByZXNlbnQgPSAobWV0YUxlbW1hc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXNQcmVzZW50O1xuICB9XG5cbiAgYXJlTWV0YXRoZW9yZW1zUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zTGVuZ3RoID0gbWV0YXRoZW9yZW1zLmxlbmd0aCwgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zUHJlc2VudCA9IChtZXRhdGhlb3JlbXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXNQcmVzZW50O1xuICB9XG5cbiAgYXJlTWV0YUxlbW1hc01ldGFUaGVvcmVtc1ByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzUHJlc2VudCA9IHRoaXMuYXJlTWV0YUxlbW1hc1ByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtc1ByZXNlbnQgPSB0aGlzLmFyZU1ldGF0aGVvcmVtc1ByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGFMZW1tYXNNZXRhVGhlb3JlbXNQcmVzZW50ID0gKG1ldGFMZW1tYXNQcmVzZW50IHx8IG1ldGF0aGVvcmVtc1ByZXNlbnQpO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXNNZXRhVGhlb3JlbXNQcmVzZW50O1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZUFzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIG5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IG5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgdG9rZW5zQXNTdHJpbmcodG9rZW5zKSB7IHJldHVybiB0b2tlbnNBc1N0cmluZyh0b2tlbnMpOyB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7XG4gICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gIH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHtcbiAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSkge1xuICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgZmluZEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZmluZEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmRlYnVnKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZXJyb3IobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgICB0aGlzLnByZXBhcmUoKTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybmluZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgYmVjYXVzZSBpdCBjYW5ub3QgYmUgcGFyc2VkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdG9wTGV2ZWxWZXJpZmllci52ZXJpZnkodGhpcy5ub2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5pbmZvKGAuLi52ZXJpZmllZCB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50eXBlcyA9IFtdO1xuICAgIHRoaXMucnVsZXMgPSBbXTtcbiAgICB0aGlzLmF4aW9tcyA9IFtdO1xuICAgIHRoaXMubGVtbWFzID0gW107XG4gICAgdGhpcy50aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMudmFyaWFibGVzID0gW107XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gW107XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IFtdO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBbXTtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IFtdO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gW107XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gW107XG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIGlmICh0aGlzLnRva2VucyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbmRGaWxlKHRoaXMuZmlsZVBhdGgpLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy50eXBlcyA9IFtdO1xuXG4gICAgdHlwZXNGcm9tSlNPTihqc29uLCB0aGlzLnR5cGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnJ1bGVzID0gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzRnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlc0pTT04gPSB0eXBlc1RvVHlwZXNKU09OKHRoaXMudHlwZXMpLFxuICAgICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzVG9SdWxlc0pTT04odGhpcy5ydWxlcyksXG4gICAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tc1RvQXhpb21zSlNPTih0aGlzLmF4aW9tcyksXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGlzLnRoZW9yZW1zKSxcbiAgICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHRoaXMudmFyaWFibGVzKSxcbiAgICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKHRoaXMuY29uamVjdHVyZXMpLFxuICAgICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04odGhpcy5jb21iaW5hdG9ycyksXG4gICAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTih0aGlzLmNvbnN0cnVjdG9ycyksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTih0aGlzLm1ldGF0aGVvcmVtcyksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTih0aGlzLm1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICB0eXBlcyA9IHR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNKU09OLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gYXhpb21zSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGhBbmRKU09OKGZpbGVQYXRoLCBqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBudWxsLFxuICAgICAgICAgIHJ1bGVzID0gbnVsbCxcbiAgICAgICAgICBheGlvbXMgPSBudWxsLFxuICAgICAgICAgIGxlbW1hcyA9IG51bGwsXG4gICAgICAgICAgdGhlb3JlbXMgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IG51bGwsXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBudWxsLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gbnVsbCxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBudWxsLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgZmlsZUNvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwicHVzaCIsImFycmF5VXRpbGl0aWVzIiwiZmlsdGVyIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJtZXRhTGVtbWFzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsIm1ldGF0aGVvcmVtcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0TWV0YVR5cGVzIiwiZ2V0VGVybVR5cGUiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJFcXVpdmFsZW5jZXMiLCJmcm9tTm90aGluZyIsImdldFByb29mU3RlcFN1YnByb29mcyIsInByb29mU3RlcFN1YnByb29mcyIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwicmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzIiwiZ2V0TWV0YUxlbW1hcyIsInJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwiaXNNZXRhdmFyaWFibGVEZWNsYXJlZCIsIm1ldGF2YXJpYWJsZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZURlY2xhcmVkIiwiaXNUeXBlRGVjbGFyZWRCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZURlY2xhcmVkIiwiaXNWYXJpYWJsZURlY2xhcmVkQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVEZWNsYXJlZCIsImlzTWV0YXZhcmlhYmxlRGVjbGFyZWRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibGFiZWwiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUiLCJvYmplY3RUeXBlIiwiZmluZCIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlcyIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YVR5cGVOYW1lIiwidmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJuYW1lIiwicHJvY2VkdXJlIiwibmFtZU1hdGNoZXMiLCJtYXRjaE5hbWUiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYSIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsInJlZmVyZW5jZVVuaWZpZWQiLCJ1bmlmeVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImZpbmRWYXJpYWJsZSIsInNwZWNpZmljVmFyaWFibGUiLCJnZW5lcmFsVmFyaWFibGUiLCJnZW5lcmFsVmFyaWFibGVFcXVhbFRvU3BlY2lmaWNWYXJpYWJsZSIsImlzRXF1YWxUbyIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudCIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwidW5pZnlNZXRhdmFyaWFibGUiLCJpc1J1bGVQcmVzZW50QnlSZWZlcmVuY2UiLCJydWxlUHJlc2VudCIsImlzQXhpb21QcmVzZW50QnlSZWZlcmVuY2UiLCJheGlvbVByZXNlbnQiLCJpc0xlbW1hUHJlc2VudEJ5UmVmZXJlbmNlIiwibGVtbWFQcmVzZW50IiwiaXNUaGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwidGhlb3JlbVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc0NvbmplY3R1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJjb25qZWN0dXJlUHJlc2VudCIsImlzQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlUHJlc2VudCIsImFyZU1ldGFMZW1tYXNQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFzTGVuZ3RoIiwibGVuZ3RoIiwibWV0YUxlbW1hc1ByZXNlbnQiLCJhcmVNZXRhdGhlb3JlbXNQcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhdGhlb3JlbXNMZW5ndGgiLCJtZXRhdGhlb3JlbXNQcmVzZW50IiwiYXJlTWV0YUxlbW1hc01ldGFUaGVvcmVtc1ByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYXNNZXRhVGhlb3JlbXNQcmVzZW50Iiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsImFkZFR5cGUiLCJhZGRSdWxlIiwiYWRkQXhpb20iLCJhZGRMZW1tYSIsImFkZFRoZW9yZW0iLCJhZGRWYXJpYWJsZSIsImFkZE1ldGFMZW1tYSIsImFkZENvbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJhZGRNZXRhdGhlb3JlbSIsImFkZE1ldGF2YXJpYWJsZSIsImZpbmRGaWxlIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJwcmVwYXJlIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJ0b3BMZXZlbFZlcmlmaWVyIiwiY2xlYXIiLCJmaWxlIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJpbml0aWFsaXNlIiwianNvbiIsInR5cGVzRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwiYXhpb21zRnJvbUpTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsInRoZW9yZW1zRnJvbUpTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsInRvSlNPTiIsInR5cGVzSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJydWxlc0pTT04iLCJydWxlc1RvUnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJmcm9tRmlsZSIsImdldFBhdGgiLCJmcm9tRmlsZVBhdGhBbmRKU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1DcUJBOzs7eUJBakNVO21FQUVOO29FQUNDOytEQUNHO29CQUVGO3NCQUMrQztvQkFzQnpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQVFDLE9BQWlCQyx5QkFBYyxDQUEvQkQsTUFBTUUsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUMsSUFBQSxB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