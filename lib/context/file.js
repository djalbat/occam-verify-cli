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
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("../axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("../lemma"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("../theorem"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _metaTypes = /*#__PURE__*/ _interop_require_default(require("../metaTypes"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("../metaLemma"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../conjecture"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("../metatheorem"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../metavariable"));
var _array = require("../utilities/array");
var _type = require("../type");
var _string = require("../utilities/string");
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
            key: "findFile",
            value: function findFile(filePath) {
                return this.releaseContext.findFile(filePath);
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
            key: "getTermType",
            value: function getTermType(term) {
                var termType = term.getType();
                return termType;
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
            key: "getEquivalences",
            value: function getEquivalences() {
                var equivalences = []; ///
                return equivalences;
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
                this.metatheorems.forEach(function(metatheorem) {
                    var metatheoremLabels = metatheorem.getLabels();
                    (0, _array.push)(labels, metatheoremLabels);
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
            key: "getMetaLemmas",
            value: function getMetaLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metaLemmas = [];
                (0, _array.push)(metaLemmas, this.metaLemmas);
                if (includeRelease) {
                    var releaseContextMetaLemmas = this.releaseContext.getMetaLemmas();
                    (0, _array.push)(metaLemmas, releaseContextMetaLemmas);
                }
                return metaLemmas;
            }
        },
        {
            key: "getMetaTypes",
            value: function getMetaTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return _metaTypes.default;
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
            key: "getMetatheorems",
            value: function getMetatheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metatheorems = [];
                (0, _array.push)(metatheorems, this.metatheorems);
                if (includeRelease) {
                    var releaseContextMetatheorems = this.releaseContext.getMetatheorems();
                    (0, _array.push)(metatheorems, releaseContextMetatheorems);
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
            key: "setReleaseContext",
            value: function setReleaseContext(releaseContext) {
                this.releaseContext = releaseContext;
            }
        },
        {
            key: "setFilePath",
            value: function setFilePath(filePath) {
                this.filePath = filePath;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.tokens = tokens;
            }
        },
        {
            key: "setNode",
            value: function setNode(node) {
                this.node = node;
            }
        },
        {
            key: "setTypes",
            value: function setTypes(types) {
                this.types = types;
            }
        },
        {
            key: "setRules",
            value: function setRules(rules) {
                this.rules = rules;
            }
        },
        {
            key: "setAxioms",
            value: function setAxioms(axioms) {
                this.axioms = axioms;
            }
        },
        {
            key: "setLemmas",
            value: function setLemmas(lemmas) {
                this.lemmas = lemmas;
            }
        },
        {
            key: "setTheorems",
            value: function setTheorems(theorems) {
                this.theorems = theorems;
            }
        },
        {
            key: "setVariables",
            value: function setVariables(variables) {
                this.variables = variables;
            }
        },
        {
            key: "setMetaLemmas",
            value: function setMetaLemmas(metaLemmas) {
                this.metaLemmas = metaLemmas;
            }
        },
        {
            key: "setConjectures",
            value: function setConjectures(conjectures) {
                this.conjectures = conjectures;
            }
        },
        {
            key: "setCombinators",
            value: function setCombinators(combinators) {
                this.combinators = combinators;
            }
        },
        {
            key: "setConstructors",
            value: function setConstructors(constructors) {
                this.constructors = constructors;
            }
        },
        {
            key: "setMetatheorems",
            value: function setMetatheorems(metatheorems) {
                this.metatheorems = metatheorems;
            }
        },
        {
            key: "setMetavariables",
            value: function setMetavariables(metavariables) {
                this.metavariables = metavariables;
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
                    var metaTypeNodeMatches = metaType.matchMetaTypeName(metaTypeName);
                    if (metaTypeNodeMatches) {
                        return true;
                    }
                }) || null;
                return metaType;
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
            key: "isLabelPresentByMetavariableNode",
            value: function isLabelPresentByMetavariableNode(metavariableNode) {
                var label = this.findLabelByMetavariableNode(metavariableNode), labelPresent = label !== null;
                return labelPresent;
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
            key: "findRuleByReference",
            value: function findRuleByReference(reference) {
                var rules = this.getRules(), metavariableNode = reference.getMetavariableNode(), rule = rules.find(function(rule) {
                    var metavariableNodeMatches = rule.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return rule;
            }
        },
        {
            key: "findAxiomByReference",
            value: function findAxiomByReference(reference) {
                var axioms = this.getAxioms(), metavariableNode = reference.getMetavariableNode(), axiom = axioms.find(function(axiom) {
                    var metavariableNodeMatches = axiom.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return axiom;
            }
        },
        {
            key: "findLemmaByReference",
            value: function findLemmaByReference(reference) {
                var lemmas = this.getLemmas(), metavariableNode = reference.getMetavariableNode(), lemma = lemmas.find(function(lemma) {
                    var metavariableNodeMatches = lemma.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return lemma;
            }
        },
        {
            key: "findTheoremByReference",
            value: function findTheoremByReference(reference) {
                var theorems = this.getTheorems(), metavariableNode = reference.getMetavariableNode(), theorem = theorems.find(function(theorem) {
                    var metavariableNodeMatches = theorem.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return theorem;
            }
        },
        {
            key: "findMetaLemmaByReference",
            value: function findMetaLemmaByReference(reference) {
                var metaLemmas = this.getMetaLemmas(), metavariableNode = reference.getMetavariableNode(), metaLemma = metaLemmas.find(function(metaLemma) {
                    var metavariableNodeMatches = metaLemma.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return metaLemma;
            }
        },
        {
            key: "findConjectureByReference",
            value: function findConjectureByReference(reference) {
                var conjectures = this.getConjectures(), metavariableNode = reference.getMetavariableNode(), conjecture = conjectures.find(function(conjecture) {
                    var metavariableNodeMatches = conjecture.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return conjecture;
            }
        },
        {
            key: "findMetatheoremByReference",
            value: function findMetatheoremByReference(reference) {
                var metatheorems = this.getMetatheorems(), metavariableNode = reference.getMetavariableNode(), metatheorem = metatheorems.find(function(metatheorem) {
                    var metavariableNodeMatches = metatheorem.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return metatheorem;
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var name = variableName, variables = this.getVariables(), variable = variables.find(function(variable) {
                    var nameMatches = variable.matchName(name);
                    if (nameMatches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "findJudgementByMetavariableName",
            value: function findJudgementByMetavariableName(metavariableName) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementMatchesMetavariableName = judgement.matchMetavariableName(metavariableName);
                    if (judgementMatchesMetavariableName) {
                        return true;
                    }
                }) || null;
                return judgement;
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var name = metavariableName, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var nameMatches = metavariable.matchName(name);
                    if (nameMatches) {
                        return true;
                    }
                }) || null;
                return metavariable;
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
                var variableAdded = false;
                var node = variable.getNode(), variablePresent = this.variables.some(function(variable) {
                    var variableMatchesNode = variable.matchNode(node);
                    if (variableMatchesNode) {
                        return true;
                    }
                });
                if (!variablePresent) {
                    this.variables.push(variable);
                    variableAdded = true;
                }
                return variableAdded;
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
                var metavariableAdded = false;
                var metavariableName = metavariable.getName(), metavariablePresent = this.isMetavariablePresentByMetavariableName(metavariableName);
                if (!metavariablePresent) {
                    this.metavariables.push(metavariable);
                    metavariableAdded = true;
                }
                return metavariableAdded;
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
            key: "reset",
            value: function reset() {
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
            key: "toJSON",
            value: function toJSON() {
                var filePath = this.filePath, types = this.types.map(function(type) {
                    var typeJSON = type.toJSON();
                    type = typeJSON; ///
                    return type;
                }), rules = this.rules.map(function(rule) {
                    var ruleJSON = rule.toJSON();
                    rule = ruleJSON; ///
                    return rule;
                }), axioms = this.axioms.map(function(axiom) {
                    var axiomJSON = axiom.toJSON();
                    axiom = axiomJSON; ///
                    return axiom;
                }), lemmas = this.lemmas.map(function(lemma) {
                    var lemmaJSON = lemma.toJSON();
                    lemma = lemmaJSON; ///
                    return lemma;
                }), theorems = this.theorems.map(function(theorem) {
                    var theoremJSON = theorem.toJSON();
                    theorem = theoremJSON; ///
                    return theorem;
                }), variables = this.variables.map(function(variable) {
                    var variableJSON = variable.toJSON();
                    variable = variableJSON; ///
                    return variable;
                }), metaLemmas = this.metaLemmas.map(function(metaLemma) {
                    var metaLemmaJSON = metaLemma.toJSON();
                    metaLemma = metaLemmaJSON; ///
                    return metaLemma;
                }), conjectures = this.conjectures.map(function(conjecture) {
                    var conjectureJSON = conjecture.toJSON();
                    conjecture = conjectureJSON; ///
                    return conjecture;
                }), combinators = this.combinators.map(function(combinator) {
                    var combinatorJSON = combinator.toJSON();
                    combinator = combinatorJSON; ///
                    return combinator;
                }), constructors = this.constructors.map(function(constructor) {
                    var constructorJSON = constructor.toJSON();
                    constructor = constructorJSON; ///
                    return constructor;
                }), metatheorems = this.metatheorems.map(function(metatheorem) {
                    var metatheoremJSON = metatheorem.toJSON();
                    metatheorem = metatheoremJSON; ///
                    return metatheorem;
                }), metavariables = this.metavariables.map(function(metavariable) {
                    var metavariableJSON = metavariable.toJSON();
                    metavariable = metavariableJSON; ///
                    return metavariable;
                }), json = {
                    filePath: filePath,
                    types: types,
                    rules: rules,
                    axioms: axioms,
                    lemmas: lemmas,
                    theorems: theorems,
                    variables: variables,
                    metaLemmas: metaLemmas,
                    conjectures: conjectures,
                    combinators: combinators,
                    constructors: constructors,
                    metatheorems: metatheorems,
                    metavariables: metavariables
                };
                return json;
            }
        },
        {
            key: "initialise",
            value: function initialise(fileContextJSON) {
                var _this = this;
                var types = fileContextJSON.types, rules = fileContextJSON.rules, axioms = fileContextJSON.axioms, lemmas = fileContextJSON.lemmas, theorems = fileContextJSON.theorems, metaLemmas = fileContextJSON.metaLemmas, variables = fileContextJSON.variables, conjectures = fileContextJSON.conjectures, combinators = fileContextJSON.combinators, constructors = fileContextJSON.constructors, metatheorems = fileContextJSON.metatheorems, metavariables = fileContextJSON.metavariables, fileContext = this, typesJSON = types, rulesJSON = rules, axiomsJSON = axioms, lemmasJSON = lemmas, theoremsJSON = theorems, variablesJSON = variables, metaLemmasJSON = metaLemmas, conjecturesJSON = conjectures, combinatorsJSON = combinators, constructorsJSON = constructors, metatheoremsJSON = metatheorems, metavariablesJSON = metavariables; ///
                typesJSON.forEach(function(typeJSON) {
                    var Type = _shim.default.Type, json = typeJSON, type = Type.fromJSON(json, fileContext);
                    _this.types.push(type);
                });
                rulesJSON.forEach(function(ruleJSON) {
                    var json = ruleJSON, rule = _rule.default.fromJSON(json, fileContext);
                    _this.rules.push(rule);
                });
                axiomsJSON.forEach(function(axiomJSON) {
                    var json = axiomJSON, axiom = _axiom.default.fromJSON(json, fileContext);
                    _this.axioms.push(axiom);
                });
                lemmasJSON.forEach(function(lemmaJSON) {
                    var json = lemmaJSON, lemma = _lemma.default.fromJSON(json, fileContext);
                    _this.lemmas.push(lemma);
                });
                theoremsJSON.forEach(function(theoremJSON) {
                    var json = theoremJSON, theorem = _theorem.default.fromJSON(json, fileContext);
                    _this.theorems.push(theorem);
                });
                variablesJSON.forEach(function(variableJSON) {
                    var json = variableJSON, variable = _variable.default.fromJSON(json, fileContext);
                    _this.variables.push(variable);
                });
                metaLemmasJSON.forEach(function(metaLemmaJSON) {
                    var json = metaLemmaJSON, metaLemma = _metaLemma.default.fromJSON(json, fileContext);
                    _this.metaLemmas.push(metaLemma);
                });
                conjecturesJSON.forEach(function(conjectureJSON) {
                    var json = conjectureJSON, conjecture = _conjecture.default.fromJSON(json, fileContext);
                    _this.conjectures.push(conjecture);
                });
                combinatorsJSON.forEach(function(combinatorJSON) {
                    var json = combinatorJSON, combinator = _combinator.default.fromJSON(json, fileContext);
                    _this.combinators.push(combinator);
                });
                constructorsJSON.forEach(function(constructorJSON) {
                    var json = constructorJSON, constructor = _constructor.default.fromJSON(json, fileContext);
                    _this.constructors.push(constructor);
                });
                metatheoremsJSON.forEach(function(metatheoremJSON) {
                    var json = metatheoremJSON, metatheorem = _metatheorem.default.fromJSON(json, fileContext);
                    _this.metatheorems.push(metatheorem);
                });
                metavariablesJSON.forEach(function(metavariableJSON) {
                    var json = metavariableJSON, metavariable = _metavariable.default.fromJSON(json, fileContext);
                    _this.metavariables.push(metavariable);
                });
            }
        }
    ], [
        {
            key: "fromFile",
            value: function fromFile(file, releaseContext) {
                var lexer = releaseContext.getLexer(), parser = releaseContext.getParser(), filePath = file.getPath(), fileContent = file.getContent(), content = fileContent, tokens = lexer.tokenise(content), node = parser.parse(tokens), types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuLi9heGlvbVwiO1xuaW1wb3J0IExlbW1hIGZyb20gXCIuLi9sZW1tYVwiO1xuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCBtZXRhVHlwZXMgZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IE1ldGFMZW1tYSBmcm9tIFwiLi4vbWV0YUxlbW1hXCI7XG5pbXBvcnQgQ29uamVjdHVyZSBmcm9tIFwiLi4vY29uamVjdHVyZVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBNZXRhdGhlb3JlbSBmcm9tIFwiLi4vbWV0YXRoZW9yZW1cIjtcbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4uL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXM7XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycztcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtcztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBmaW5kRmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5maW5kRmlsZShmaWxlUGF0aCk7IH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCk7IH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIHJldHVybiB0ZXJtVHlwZTtcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgY29uc3QgcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBbXTsgLy8vXG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gW107XG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGxlbW1hTGFiZWxzID0gbGVtbWEuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgY29uamVjdHVyZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5mb3JFYWNoKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgbWV0YXRoZW9yZW1MYWJlbHMgPSBtZXRhdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIG1ldGF0aGVvcmVtTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFR5cGVzKCk7XG5cbiAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHB1c2gocnVsZXMsIHRoaXMucnVsZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRSdWxlcygpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICBwdXNoKGF4aW9tcywgdGhpcy5heGlvbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKCk7XG5cbiAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobGVtbWFzLCB0aGlzLmxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZW1tYXMoKTtcblxuICAgICAgcHVzaChsZW1tYXMsIHJlbGVhc2VDb250ZXh0TGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2godGhlb3JlbXMsIHRoaXMudGhlb3JlbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcygpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICBwdXNoKG1ldGFMZW1tYXMsIHRoaXMubWV0YUxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIHJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRNZXRhVHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIG1ldGFUeXBlcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICBwdXNoKGNvbmplY3R1cmVzLCB0aGlzLmNvbmplY3R1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbnN0cnVjdG9ycywgdGhpcy5jb25zdHJ1Y3RvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2gobWV0YXRoZW9yZW1zLCB0aGlzLm1ldGF0aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoKTtcblxuICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgc2V0UmVsZWFzZUNvbnRleHQocmVsZWFzZUNvbnRleHQpIHtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBzZXRGaWxlUGF0aChmaWxlUGF0aCkge1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBzZXRUeXBlcyh0eXBlcykge1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgfVxuXG4gIHNldFJ1bGVzKHJ1bGVzKSB7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICB9XG5cbiAgc2V0QXhpb21zKGF4aW9tcykge1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICB9XG5cbiAgc2V0TGVtbWFzKGxlbW1hcykge1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICB9XG5cbiAgc2V0VGhlb3JlbXModGhlb3JlbXMpIHtcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXM7XG4gIH1cblxuICBzZXRWYXJpYWJsZXModmFyaWFibGVzKSB7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gIH1cblxuICBzZXRNZXRhTGVtbWFzKG1ldGFMZW1tYXMpIHtcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICB9XG5cbiAgc2V0Q29uamVjdHVyZXMoY29uamVjdHVyZXMpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gIH1cblxuICBzZXRDb21iaW5hdG9ycyhjb21iaW5hdG9ycykge1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcbiAgfVxuXG4gIHNldENvbnN0cnVjdG9ycyhjb25zdHJ1Y3RvcnMpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIHNldE1ldGF0aGVvcmVtcyhtZXRhdGhlb3JlbXMpIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIHNldE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcykge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gdGhpcy5nZXRNZXRhVHlwZXMoKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlcy5maW5kKChtZXRhVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YVR5cGVOb2RlTWF0Y2hlcyA9IG1ldGFUeXBlLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhVHlwZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBydWxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gYXhpb20ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbGVtbWEubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhlb3JlbS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYXMuZmluZCgobWV0YUxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGFMZW1tYS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYTtcbiAgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSB0aGlzLmdldENvbmplY3R1cmVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVzLmZpbmQoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gY29uamVjdHVyZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSB0aGlzLmdldE1ldGF0aGVvcmVtcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1zLmZpbmQoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGF0aGVvcmVtLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZU1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSA9IGp1ZGdlbWVudC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNYXRjaGVzTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgbGV0IHZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy52YXJpYWJsZXMuc29tZSgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTWF0Y2hlc05vZGUgPSB2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU1hdGNoZXNOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGFMZW1tYShtZXRhTGVtbWEpIHtcbiAgICB0aGlzLm1ldGFMZW1tYXMucHVzaChtZXRhTGVtbWEpO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGFkZE1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtKSB7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMucHVzaChtZXRhdGhlb3JlbSk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gdGhpcy5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQudHJhY2UobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZGVidWcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5pbmZvKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQud2FybmluZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5lcnJvcihtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudHlwZXMgPSBbXTtcbiAgICB0aGlzLnJ1bGVzID0gW107XG4gICAgdGhpcy5heGlvbXMgPSBbXTtcbiAgICB0aGlzLmxlbW1hcyA9IFtdO1xuICAgIHRoaXMudGhlb3JlbXMgPSBbXTtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IFtdO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IFtdO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBbXTtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gW107XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IFtdO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gIHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgdHlwZXMgPSB0aGlzLnR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgICAgICAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IHRoaXMucnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBheGlvbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsZW1tYXMgPSB0aGlzLmxlbW1hcy5tYXAoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYUpTT04gPSBsZW1tYS50b0pTT04oKTtcblxuICAgICAgICAgICAgbGVtbWEgPSBsZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbGVtbWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGlzLnRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdGhlb3JlbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04oKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSB0aGlzLm1ldGFMZW1tYXMubWFwKChtZXRhTGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYUpTT04gPSBtZXRhTGVtbWEudG9KU09OKCk7XG5cbiAgICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YUxlbW1hO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gdGhpcy5jb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSB0aGlzLmNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB0aGlzLmNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IHRoaXMubWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5tZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIGxlbW1hcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgbWV0YUxlbW1hcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgaW5pdGlhbGlzZShmaWxlQ29udGV4dEpTT04pIHtcbiAgICBjb25zdCB7IHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBtZXRhTGVtbWFzLCB2YXJpYWJsZXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMgfSA9IGZpbGVDb250ZXh0SlNPTixcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHR5cGVzSlNPTiA9IHR5cGVzLCAgLy8vXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXMsICAvLy9cbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zLCAgLy8vXG4gICAgICAgICAgbGVtbWFzSlNPTiA9IGxlbW1hcywgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcywgIC8vL1xuICAgICAgICAgIG1ldGFMZW1tYXNKU09OID0gbWV0YUxlbW1hcywgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMsICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtcywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgIC8vL1xuXG4gICAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgICBjb25zdCB7IFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgICBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICAgIH0pO1xuXG4gICAgcnVsZXNKU09OLmZvckVhY2goKHJ1bGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICAgIH0pO1xuXG4gICAgYXhpb21zSlNPTi5mb3JFYWNoKChheGlvbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgICB9KTtcblxuICAgIGxlbW1hc0pTT04uZm9yRWFjaCgobGVtbWFKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGVtbWFKU09OLCAgLy8vXG4gICAgICAgICAgICBsZW1tYSA9IExlbW1hLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gICAgfSk7XG5cbiAgICB0aGVvcmVtc0pTT04uZm9yRWFjaCgodGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG4gICAgfSk7XG5cbiAgICB2YXJpYWJsZXNKU09OLmZvckVhY2goKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgIH0pO1xuXG4gICAgbWV0YUxlbW1hc0pTT04uZm9yRWFjaCgobWV0YUxlbW1hSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGFMZW1tYUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGFMZW1tYSA9IE1ldGFMZW1tYS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gICAgfSk7XG5cbiAgICBjb25qZWN0dXJlc0pTT04uZm9yRWFjaCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gICAgfSk7XG5cbiAgICBjb21iaW5hdG9yc0pTT04uZm9yRWFjaCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gICAgfSk7XG5cbiAgICBjb25zdHJ1Y3RvcnNKU09OLmZvckVhY2goKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH0pO1xuXG4gICAgbWV0YXRoZW9yZW1zSlNPTi5mb3JFYWNoKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgICB9KTtcblxuICAgIG1ldGF2YXJpYWJsZXNKU09OLmZvckVhY2goKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSByZWxlYXNlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHJlbGVhc2VDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgZmlsZUNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZUNvbnRlbnQsICAvLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJtZXRhTGVtbWFzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsIm1ldGF0aGVvcmVtcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImZpbmRGaWxlIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRUZXJtVHlwZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJnZXRQcm9vZlN0ZXBzIiwicHJvb2ZTdGVwcyIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJwdXNoIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldE1ldGFMZW1tYXMiLCJyZWxlYXNlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRNZXRhVHlwZXMiLCJtZXRhVHlwZXMiLCJnZXRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsInNldFJlbGVhc2VDb250ZXh0Iiwic2V0RmlsZVBhdGgiLCJzZXRUb2tlbnMiLCJzZXROb2RlIiwic2V0VHlwZXMiLCJzZXRSdWxlcyIsInNldEF4aW9tcyIsInNldExlbW1hcyIsInNldFRoZW9yZW1zIiwic2V0VmFyaWFibGVzIiwic2V0TWV0YUxlbW1hcyIsInNldENvbmplY3R1cmVzIiwic2V0Q29tYmluYXRvcnMiLCJzZXRDb25zdHJ1Y3RvcnMiLCJzZXRNZXRhdGhlb3JlbXMiLCJzZXRNZXRhdmFyaWFibGVzIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJvYmplY3RUeXBlIiwidHlwZSIsImZpbmQiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsIm1ldGFUeXBlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGFUeXBlTmFtZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJsYWJlbCIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJsYWJlbFByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlIiwibWV0YUxlbW1hIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwibmFtZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hOYW1lIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImp1ZGdlbWVudCIsImp1ZGdlbWVudE1hdGNoZXNNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsImFkZFR5cGUiLCJhZGRSdWxlIiwiYWRkQXhpb20iLCJhZGRMZW1tYSIsImFkZFRoZW9yZW0iLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlQWRkZWQiLCJzb21lIiwidmFyaWFibGVNYXRjaGVzTm9kZSIsIm1hdGNoTm9kZSIsImFkZE1ldGFMZW1tYSIsImFkZENvbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJhZGRNZXRhdGhlb3JlbSIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwiZ2V0TmFtZSIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsInJlc2V0IiwidG9KU09OIiwibWFwIiwidHlwZUpTT04iLCJydWxlSlNPTiIsImF4aW9tSlNPTiIsImxlbW1hSlNPTiIsInRoZW9yZW1KU09OIiwidmFyaWFibGVKU09OIiwibWV0YUxlbW1hSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29tYmluYXRvckpTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdmFyaWFibGVKU09OIiwianNvbiIsImluaXRpYWxpc2UiLCJmaWxlQ29udGV4dEpTT04iLCJmaWxlQ29udGV4dCIsInR5cGVzSlNPTiIsInJ1bGVzSlNPTiIsImF4aW9tc0pTT04iLCJsZW1tYXNKU09OIiwidGhlb3JlbXNKU09OIiwidmFyaWFibGVzSlNPTiIsIm1ldGFMZW1tYXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29tYmluYXRvcnNKU09OIiwiY29uc3RydWN0b3JzSlNPTiIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsIlR5cGUiLCJzaGltIiwiZnJvbUpTT04iLCJSdWxlIiwiQXhpb20iLCJMZW1tYSIsIlRoZW9yZW0iLCJWYXJpYWJsZSIsIk1ldGFMZW1tYSIsIkNvbmplY3R1cmUiLCJDb21iaW5hdG9yIiwiQ29uc3RydWN0b3IiLCJNZXRhdGhlb3JlbSIsIk1ldGF2YXJpYWJsZSIsImZyb21GaWxlIiwiZmlsZSIsImxleGVyIiwicGFyc2VyIiwiZ2V0UGF0aCIsImZpbGVDb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW9CcUJBOzs7MkRBbEJKOzJEQUNBOzREQUNDOzREQUNBOzhEQUNFOytEQUNDO2dFQUNDO2dFQUNBO2lFQUNDO2lFQUNBO2tFQUNDO2tFQUNBO21FQUNDO3FCQUVKO29CQUNNO3NCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDRCQUFOO2FBQU1BLFlBQ1BDLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRG5LaEI7UUFFakIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RC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