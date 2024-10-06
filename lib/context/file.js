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
            key: "getFile",
            value: function getFile(filePath) {
                return this.releaseContext.getFile(filePath);
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
            key: "fromFileAndReleaseContext",
            value: function fromFileAndReleaseContext(file, releaseContext) {
                var lexer = releaseContext.getLexer(), parser = releaseContext.getParser(), filePath = file.getPath(), fileContent = file.getContent(), content = fileContent, tokens = lexer.tokenise(content), node = parser.parse(tokens), types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                return fileContext;
            }
        },
        {
            key: "fromFilePathAndReleaseContext",
            value: function fromFilePathAndReleaseContext(filePath, releaseContext) {
                var file = releaseContext.getFile(filePath), lexer = releaseContext.getLexer(), parser = releaseContext.getParser(), fileContent = file.getContent(), content = fileContent, tokens = lexer.tokenise(content), node = parser.parse(tokens), types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuLi9heGlvbVwiO1xuaW1wb3J0IExlbW1hIGZyb20gXCIuLi9sZW1tYVwiO1xuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCBtZXRhVHlwZXMgZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IE1ldGFMZW1tYSBmcm9tIFwiLi4vbWV0YUxlbW1hXCI7XG5pbXBvcnQgQ29uamVjdHVyZSBmcm9tIFwiLi4vY29uamVjdHVyZVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBNZXRhdGhlb3JlbSBmcm9tIFwiLi4vbWV0YXRoZW9yZW1cIjtcbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4uL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXM7XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycztcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtcztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExleGVyKCk7IH1cblxuICBnZXRQYXJzZXIoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0VGVybVR5cGUodGVybSkge1xuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gdGVybVR5cGU7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBzKCkge1xuICAgIGNvbnN0IHByb29mU3RlcHMgPSBbXTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gW107IC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IFtdO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlTGFiZWxzID0gY29uamVjdHVyZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tZXRhdGhlb3JlbXMuZm9yRWFjaCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF0aGVvcmVtTGFiZWxzID0gbWV0YXRoZW9yZW0uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBtZXRhdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHB1c2godHlwZXMsIHRoaXMudHlwZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICBwdXNoKHJ1bGVzLCB0aGlzLnJ1bGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldEF4aW9tcygpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICBwdXNoKGxlbW1hcywgdGhpcy5sZW1tYXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCByZWxlYXNlQ29udGV4dExlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKHRoZW9yZW1zLCB0aGlzLnRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgcHVzaChtZXRhTGVtbWFzLCB0aGlzLm1ldGFMZW1tYXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dE1ldGFMZW1tYXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldE1ldGFMZW1tYXMoKTtcblxuICAgICAgcHVzaChtZXRhTGVtbWFzLCByZWxlYXNlQ29udGV4dE1ldGFMZW1tYXMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiBtZXRhVHlwZXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgcHVzaChjb25qZWN0dXJlcywgdGhpcy5jb25qZWN0dXJlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKCk7XG5cbiAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbWJpbmF0b3JzLCB0aGlzLmNvbWJpbmF0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb25zdHJ1Y3RvcnMsIHRoaXMuY29uc3RydWN0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKG1ldGF0aGVvcmVtcywgdGhpcy5tZXRhdGhlb3JlbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKCk7XG5cbiAgICAgIHB1c2gobWV0YXRoZW9yZW1zLCByZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIHNldFJlbGVhc2VDb250ZXh0KHJlbGVhc2VDb250ZXh0KSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgc2V0RmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgc2V0VHlwZXModHlwZXMpIHtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gIH1cblxuICBzZXRSdWxlcyhydWxlcykge1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgfVxuXG4gIHNldEF4aW9tcyhheGlvbXMpIHtcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgfVxuXG4gIHNldExlbW1hcyhsZW1tYXMpIHtcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgfVxuXG4gIHNldFRoZW9yZW1zKHRoZW9yZW1zKSB7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICB9XG5cbiAgc2V0VmFyaWFibGVzKHZhcmlhYmxlcykge1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICB9XG5cbiAgc2V0TWV0YUxlbW1hcyhtZXRhTGVtbWFzKSB7XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hcztcbiAgfVxuXG4gIHNldENvbmplY3R1cmVzKGNvbmplY3R1cmVzKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzO1xuICB9XG5cbiAgc2V0Q29tYmluYXRvcnMoY29tYmluYXRvcnMpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gIH1cblxuICBzZXRDb25zdHJ1Y3RvcnMoY29uc3RydWN0b3JzKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBzZXRNZXRhdGhlb3JlbXMobWV0YXRoZW9yZW1zKSB7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBzZXRNZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgdHlwZXMucHVzaChvYmplY3RUeXBlKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZU1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YVR5cGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gcnVsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGF4aW9tLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsZW1tYXMgPSB0aGlzLmdldExlbW1hcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGxlbW1hID0gbGVtbWFzLmZpbmQoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGxlbW1hLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gdGhpcy5nZXRUaGVvcmVtcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtcy5maW5kKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoZW9yZW0ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG5cbiAgZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBtZXRhTGVtbWFzLmZpbmQoKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhTGVtbWEubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cblxuICBmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gdGhpcy5nZXRDb25qZWN0dXJlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlcy5maW5kKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGNvbmplY3R1cmUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtcy5maW5kKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhdGhlb3JlbS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgbGV0IHZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy52YXJpYWJsZXMuc29tZSgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTWF0Y2hlc05vZGUgPSB2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU1hdGNoZXNOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGFMZW1tYShtZXRhTGVtbWEpIHtcbiAgICB0aGlzLm1ldGFMZW1tYXMucHVzaChtZXRhTGVtbWEpO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGFkZE1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtKSB7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMucHVzaChtZXRhdGhlb3JlbSk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gdGhpcy5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQudHJhY2UobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZGVidWcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5pbmZvKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQud2FybmluZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5lcnJvcihtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMudHlwZXMgPSBbXTtcbiAgICB0aGlzLnJ1bGVzID0gW107XG4gICAgdGhpcy5heGlvbXMgPSBbXTtcbiAgICB0aGlzLmxlbW1hcyA9IFtdO1xuICAgIHRoaXMudGhlb3JlbXMgPSBbXTtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IFtdO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IFtdO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBbXTtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gW107XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IFtdO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gIHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgdHlwZXMgPSB0aGlzLnR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgICAgICAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IHRoaXMucnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBheGlvbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsZW1tYXMgPSB0aGlzLmxlbW1hcy5tYXAoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYUpTT04gPSBsZW1tYS50b0pTT04oKTtcblxuICAgICAgICAgICAgbGVtbWEgPSBsZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbGVtbWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGlzLnRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdGhlb3JlbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04oKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSB0aGlzLm1ldGFMZW1tYXMubWFwKChtZXRhTGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYUpTT04gPSBtZXRhTGVtbWEudG9KU09OKCk7XG5cbiAgICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YUxlbW1hO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gdGhpcy5jb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSB0aGlzLmNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB0aGlzLmNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IHRoaXMubWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5tZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIGxlbW1hcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgbWV0YUxlbW1hcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgaW5pdGlhbGlzZShmaWxlQ29udGV4dEpTT04pIHtcbiAgICBjb25zdCB7IHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBtZXRhTGVtbWFzLCB2YXJpYWJsZXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMgfSA9IGZpbGVDb250ZXh0SlNPTixcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHR5cGVzSlNPTiA9IHR5cGVzLCAgLy8vXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXMsICAvLy9cbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zLCAgLy8vXG4gICAgICAgICAgbGVtbWFzSlNPTiA9IGxlbW1hcywgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcywgIC8vL1xuICAgICAgICAgIG1ldGFMZW1tYXNKU09OID0gbWV0YUxlbW1hcywgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMsICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtcywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgIC8vL1xuXG4gICAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgICBjb25zdCB7IFR5cGUgfSA9IHNoaW0sXG4gICAgICAgICAgICBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICAgIH0pO1xuXG4gICAgcnVsZXNKU09OLmZvckVhY2goKHJ1bGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICAgIH0pO1xuXG4gICAgYXhpb21zSlNPTi5mb3JFYWNoKChheGlvbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgICB9KTtcblxuICAgIGxlbW1hc0pTT04uZm9yRWFjaCgobGVtbWFKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGVtbWFKU09OLCAgLy8vXG4gICAgICAgICAgICBsZW1tYSA9IExlbW1hLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gICAgfSk7XG5cbiAgICB0aGVvcmVtc0pTT04uZm9yRWFjaCgodGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG4gICAgfSk7XG5cbiAgICB2YXJpYWJsZXNKU09OLmZvckVhY2goKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgIH0pO1xuXG4gICAgbWV0YUxlbW1hc0pTT04uZm9yRWFjaCgobWV0YUxlbW1hSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGFMZW1tYUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGFMZW1tYSA9IE1ldGFMZW1tYS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gICAgfSk7XG5cbiAgICBjb25qZWN0dXJlc0pTT04uZm9yRWFjaCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gICAgfSk7XG5cbiAgICBjb21iaW5hdG9yc0pTT04uZm9yRWFjaCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gICAgfSk7XG5cbiAgICBjb25zdHJ1Y3RvcnNKU09OLmZvckVhY2goKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH0pO1xuXG4gICAgbWV0YXRoZW9yZW1zSlNPTi5mb3JFYWNoKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgICB9KTtcblxuICAgIG1ldGF2YXJpYWJsZXNKU09OLmZvckVhY2goKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQW5kUmVsZWFzZUNvbnRleHQoZmlsZSwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IHJlbGVhc2VDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gcmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlQ29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlQ29udGVudCwgIC8vLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0KGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGUgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBsZXhlciA9IHJlbGVhc2VDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gcmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgZmlsZUNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZUNvbnRlbnQsICAvLy8vXG4gICAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHBhcnNlci5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJtZXRhTGVtbWFzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsIm1ldGF0aGVvcmVtcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldEZpbGUiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldFRlcm1UeXBlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsImdldFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlUmVsZWFzZSIsImxhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsInB1c2giLCJheGlvbSIsImF4aW9tTGFiZWxzIiwibGVtbWEiLCJsZW1tYUxhYmVscyIsInRoZW9yZW0iLCJ0aGVvcmVtTGFiZWxzIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVMYWJlbHMiLCJtZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtTGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsInJlbGVhc2VDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0TWV0YUxlbW1hcyIsInJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyIsImdldE1ldGFUeXBlcyIsIm1ldGFUeXBlcyIsImdldENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwic2V0UmVsZWFzZUNvbnRleHQiLCJzZXRGaWxlUGF0aCIsInNldFRva2VucyIsInNldE5vZGUiLCJzZXRUeXBlcyIsInNldFJ1bGVzIiwic2V0QXhpb21zIiwic2V0TGVtbWFzIiwic2V0VGhlb3JlbXMiLCJzZXRWYXJpYWJsZXMiLCJzZXRNZXRhTGVtbWFzIiwic2V0Q29uamVjdHVyZXMiLCJzZXRDb21iaW5hdG9ycyIsInNldENvbnN0cnVjdG9ycyIsInNldE1ldGF0aGVvcmVtcyIsInNldE1ldGF2YXJpYWJsZXMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm9iamVjdFR5cGUiLCJ0eXBlIiwiZmluZCIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YVR5cGVOYW1lIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm5hbWUiLCJtZXRhdmFyaWFibGUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTmFtZSIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwibGFiZWxQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWEiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwiYWRkVGhlb3JlbSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGVBZGRlZCIsInNvbWUiLCJ2YXJpYWJsZU1hdGNoZXNOb2RlIiwibWF0Y2hOb2RlIiwiYWRkTWV0YUxlbW1hIiwiYWRkQ29uamVjdHVyZSIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImFkZE1ldGF0aGVvcmVtIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQWRkZWQiLCJnZXROYW1lIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwicmVzZXQiLCJ0b0pTT04iLCJtYXAiLCJ0eXBlSlNPTiIsInJ1bGVKU09OIiwiYXhpb21KU09OIiwibGVtbWFKU09OIiwidGhlb3JlbUpTT04iLCJ2YXJpYWJsZUpTT04iLCJtZXRhTGVtbWFKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJqc29uIiwiaW5pdGlhbGlzZSIsImZpbGVDb250ZXh0SlNPTiIsImZpbGVDb250ZXh0IiwidHlwZXNKU09OIiwicnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImxlbW1hc0pTT04iLCJ0aGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwibWV0YUxlbW1hc0pTT04iLCJjb25qZWN0dXJlc0pTT04iLCJjb21iaW5hdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwiVHlwZSIsInNoaW0iLCJmcm9tSlNPTiIsIlJ1bGUiLCJBeGlvbSIsIkxlbW1hIiwiVGhlb3JlbSIsIlZhcmlhYmxlIiwiTWV0YUxlbW1hIiwiQ29uamVjdHVyZSIsIkNvbWJpbmF0b3IiLCJDb25zdHJ1Y3RvciIsIk1ldGF0aGVvcmVtIiwiTWV0YXZhcmlhYmxlIiwiZnJvbUZpbGVBbmRSZWxlYXNlQ29udGV4dCIsImZpbGUiLCJsZXhlciIsInBhcnNlciIsImdldFBhdGgiLCJmaWxlQ29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW9CcUJBOzs7MkRBbEJKOzJEQUNBOzREQUNDOzREQUNBOzhEQUNFOytEQUNDO2dFQUNDO2dFQUNBO2lFQUNDO2lFQUNBO2tFQUNDO2tFQUNBO21FQUNDO3FCQUVKO29CQUNNO3NCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFBLEFBQU1BLDRCQUFOO2FBQU1BLFlBQ1BDLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRG5LaEI7UUFFakIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFqQkpoQjs7WUFvQm5CaUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDaEIsY0FBYztZQUM1Qjs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNoQixRQUFRO1lBQ3RCOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ2hCLE1BQU07WUFDcEI7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDaEIsSUFBSTtZQUNsQjs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUEsUUFBUW5CLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNELGNBQWMsQ0FBQ29CLE9BQU8sQ0FBQ25CO1lBQVc7OztZQUVsRW9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYSxPQUFPLElBQUksQ0FBQ3JCLGNBQWMsQ0FBQ3FCLFFBQVE7WUFBSTs7O1lBRXBEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUN0QixjQUFjLENBQUNzQixTQUFTO1lBQUk7OztZQUV0REMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLElBQUk7Z0JBQ2QsSUFBTUMsV0FBV0QsS0FBS0UsT0FBTztnQkFFN0IsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLEVBQUUsRUFBRyxHQUFHO2dCQUUzQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsRUFBRSxFQUFFLEdBQUc7Z0JBRTVCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxFQUFFO2dCQUVyQixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFVQyxpQkFBQUEsaUVBQWlCO2dCQUN6QixJQUFNQyxTQUFTLEVBQUU7Z0JBRWpCLElBQUksQ0FBQzlCLEtBQUssQ0FBQytCLE9BQU8sQ0FBQyxTQUFDQztvQkFDbEIsSUFBTUMsYUFBYUQsS0FBS0osU0FBUztvQkFFakNNLElBQUFBLFdBQUksRUFBQ0osUUFBUUc7Z0JBQ2Y7Z0JBRUEsSUFBSSxDQUFDaEMsTUFBTSxDQUFDOEIsT0FBTyxDQUFDLFNBQUNJO29CQUNuQixJQUFNQyxjQUFjRCxNQUFNUCxTQUFTO29CQUVuQ00sSUFBQUEsV0FBSSxFQUFDSixRQUFRTTtnQkFDZjtnQkFFQSxJQUFJLENBQUNsQyxNQUFNLENBQUM2QixPQUFPLENBQUMsU0FBQ007b0JBQ25CLElBQU1DLGNBQWNELE1BQU1ULFNBQVM7b0JBRW5DTSxJQUFBQSxXQUFJLEVBQUNKLFFBQVFRO2dCQUNmO2dCQUVBLElBQUksQ0FBQ25DLFFBQVEsQ0FBQzRCLE9BQU8sQ0FBQyxTQUFDUTtvQkFDckIsSUFBTUMsZ0JBQWdCRCxRQUFRWCxTQUFTO29CQUV2Q00sSUFBQUEsV0FBSSxFQUFDSixRQUFRVTtnQkFDZjtnQkFFQSxJQUFJLENBQUNsQyxXQUFXLENBQUN5QixPQUFPLENBQUMsU0FBQ1U7b0JBQ3hCLElBQU1DLG1CQUFtQkQsV0FBV2IsU0FBUztvQkFFN0NNLElBQUFBLFdBQUksRUFBQ0osUUFBUVk7Z0JBQ2Y7Z0JBRUEsSUFBSSxDQUFDakMsWUFBWSxDQUFDc0IsT0FBTyxDQUFDLFNBQUNZO29CQUN6QixJQUFNQyxvQkFBb0JELFlBQVlmLFNBQVM7b0JBRS9DTSxJQUFBQSxXQUFJLEVBQUNKLFFBQVFjO2dCQUNmO2dCQUVBLElBQUlmLGdCQUFnQjtvQkFDbEIsSUFBTWdCLHVCQUF1QixJQUFJLENBQUNsRCxjQUFjLENBQUNpQyxTQUFTO29CQUUxRE0sSUFBQUEsV0FBSSxFQUFDSixRQUFRZTtnQkFDZjtnQkFFQSxPQUFPZjtZQUNUOzs7WUFFQWdCLEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBU2pCLGlCQUFBQSxpRUFBaUI7Z0JBQ3hCLElBQU05QixRQUFRLEVBQUU7Z0JBRWhCbUMsSUFBQUEsV0FBSSxFQUFDbkMsT0FBTyxJQUFJLENBQUNBLEtBQUs7Z0JBRXRCLElBQUk4QixnQkFBZ0I7b0JBQ2xCLElBQU1rQixzQkFBc0IsSUFBSSxDQUFDcEQsY0FBYyxDQUFDbUQsUUFBUTtvQkFFeERaLElBQUFBLFdBQUksRUFBQ25DLE9BQU9nRDtnQkFDZDtnQkFFQSxPQUFPaEQ7WUFDVDs7O1lBRUFpRCxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVNuQixpQkFBQUEsaUVBQWlCO2dCQUN4QixJQUFNN0IsUUFBUSxFQUFFO2dCQUVoQmtDLElBQUFBLFdBQUksRUFBQ2xDLE9BQU8sSUFBSSxDQUFDQSxLQUFLO2dCQUV0QixJQUFJNkIsZ0JBQWdCO29CQUNsQixJQUFNb0Isc0JBQXNCLElBQUksQ0FBQ3RELGNBQWMsQ0FBQ3FELFFBQVE7b0JBRXhEZCxJQUFBQSxXQUFJLEVBQUNsQyxPQUFPaUQ7Z0JBQ2Q7Z0JBRUEsT0FBT2pEO1lBQ1Q7OztZQUVBa0QsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFVckIsaUJBQUFBLGlFQUFpQjtnQkFDekIsSUFBTTVCLFNBQVMsRUFBRTtnQkFFakJpQyxJQUFBQSxXQUFJLEVBQUNqQyxRQUFRLElBQUksQ0FBQ0EsTUFBTTtnQkFFeEIsSUFBSTRCLGdCQUFnQjtvQkFDbEIsSUFBTXNCLHVCQUF1QixJQUFJLENBQUN4RCxjQUFjLENBQUN1RCxTQUFTO29CQUUxRGhCLElBQUFBLFdBQUksRUFBQ2pDLFFBQVFrRDtnQkFDZjtnQkFFQSxPQUFPbEQ7WUFDVDs7O1lBRUFtRCxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVV2QixpQkFBQUEsaUVBQWlCO2dCQUN6QixJQUFNM0IsU0FBUyxFQUFFO2dCQUVqQmdDLElBQUFBLFdBQUksRUFBQ2hDLFFBQVEsSUFBSSxDQUFDQSxNQUFNO2dCQUV4QixJQUFJMkIsZ0JBQWdCO29CQUNsQixJQUFNd0IsdUJBQXVCLElBQUksQ0FBQzFELGNBQWMsQ0FBQ3lELFNBQVM7b0JBRTFEbEIsSUFBQUEsV0FBSSxFQUFDaEMsUUFBUW1EO2dCQUNmO2dCQUVBLE9BQU9uRDtZQUNUOzs7WUFFQW9ELEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBWXpCLGlCQUFBQSxpRUFBaUI7Z0JBQzNCLElBQU0xQixXQUFXLEVBQUU7Z0JBRW5CK0IsSUFBQUEsV0FBSSxFQUFDL0IsVUFBVSxJQUFJLENBQUNBLFFBQVE7Z0JBRTVCLElBQUkwQixnQkFBZ0I7b0JBQ2xCLElBQU0wQix5QkFBeUIsSUFBSSxDQUFDNUQsY0FBYyxDQUFDMkQsV0FBVztvQkFFOURwQixJQUFBQSxXQUFJLEVBQUMvQixVQUFVb0Q7Z0JBQ2pCO2dCQUVBLE9BQU9wRDtZQUNUOzs7WUFFQXFELEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBYTNCLGlCQUFBQSxpRUFBaUI7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDekIsU0FBUztZQUN2Qjs7O1lBRUFxRCxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWM1QixpQkFBQUEsaUVBQWlCO2dCQUM3QixJQUFNeEIsYUFBYSxFQUFFO2dCQUVyQjZCLElBQUFBLFdBQUksRUFBQzdCLFlBQVksSUFBSSxDQUFDQSxVQUFVO2dCQUVoQyxJQUFJd0IsZ0JBQWdCO29CQUNsQixJQUFNNkIsMkJBQTJCLElBQUksQ0FBQy9ELGNBQWMsQ0FBQzhELGFBQWE7b0JBRWxFdkIsSUFBQUEsV0FBSSxFQUFDN0IsWUFBWXFEO2dCQUNuQjtnQkFFQSxPQUFPckQ7WUFDVDs7O1lBRUFzRCxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWE5QixpQkFBQUEsaUVBQWlCO2dCQUM1QixPQUFPK0Isa0JBQVM7WUFDbEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWVoQyxpQkFBQUEsaUVBQWlCO2dCQUM5QixJQUFNdkIsY0FBYyxFQUFFO2dCQUV0QjRCLElBQUFBLFdBQUksRUFBQzVCLGFBQWEsSUFBSSxDQUFDQSxXQUFXO2dCQUVsQyxJQUFJdUIsZ0JBQWdCO29CQUNsQixJQUFNaUMsNEJBQTRCLElBQUksQ0FBQ25FLGNBQWMsQ0FBQ2tFLGNBQWM7b0JBRXBFM0IsSUFBQUEsV0FBSSxFQUFDNUIsYUFBYXdEO2dCQUNwQjtnQkFFQSxPQUFPeEQ7WUFDVDs7O1lBRUF5RCxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWVsQyxpQkFBQUEsaUVBQWlCO2dCQUM5QixJQUFNdEIsY0FBYyxFQUFFO2dCQUV0QjJCLElBQUFBLFdBQUksRUFBQzNCLGFBQWEsSUFBSSxDQUFDQSxXQUFXO2dCQUVsQyxJQUFJc0IsZ0JBQWdCO29CQUNsQixJQUFNbUMsNEJBQTRCLElBQUksQ0FBQ3JFLGNBQWMsQ0FBQ29FLGNBQWM7b0JBRXBFN0IsSUFBQUEsV0FBSSxFQUFDM0IsYUFBYXlEO2dCQUNwQjtnQkFFQSxPQUFPekQ7WUFDVDs7O1lBRUEwRCxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWdCcEMsaUJBQUFBLGlFQUFpQjtnQkFDL0IsSUFBTXJCLGVBQWUsRUFBRTtnQkFFdkIwQixJQUFBQSxXQUFJLEVBQUMxQixjQUFjLElBQUksQ0FBQ0EsWUFBWTtnQkFFcEMsSUFBSXFCLGdCQUFnQjtvQkFDbEIsSUFBTXFDLDZCQUE2QixJQUFJLENBQUN2RSxjQUFjLENBQUNzRSxlQUFlO29CQUV0RS9CLElBQUFBLFdBQUksRUFBQzFCLGNBQWMwRDtnQkFDckI7Z0JBRUEsT0FBTzFEO1lBQ1Q7OztZQUVBMkQsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFnQnRDLGlCQUFBQSxpRUFBaUI7Z0JBQy9CLElBQU1wQixlQUFlLEVBQUU7Z0JBRXZCeUIsSUFBQUEsV0FBSSxFQUFDekIsY0FBYyxJQUFJLENBQUNBLFlBQVk7Z0JBRXBDLElBQUlvQixnQkFBZ0I7b0JBQ2xCLElBQU11Qyw2QkFBNkIsSUFBSSxDQUFDekUsY0FBYyxDQUFDd0UsZUFBZTtvQkFFdEVqQyxJQUFBQSxXQUFJLEVBQUN6QixjQUFjMkQ7Z0JBQ3JCO2dCQUVBLE9BQU8zRDtZQUNUOzs7WUFFQTRELEtBQUFBO21CQUFBQSxTQUFBQTtvQkFBaUJ4QyxpQkFBQUEsaUVBQWlCO2dCQUNoQyxPQUFPLElBQUksQ0FBQ25CLGFBQWE7WUFDM0I7OztZQUVBNEQsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjNFLGNBQWM7Z0JBQzlCLElBQUksQ0FBQ0EsY0FBYyxHQUFHQTtZQUN4Qjs7O1lBRUE0RSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTNFLFFBQVE7Z0JBQ2xCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQTtZQUNsQjs7O1lBRUE0RSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTNFLE1BQU07Z0JBQ2QsSUFBSSxDQUFDQSxNQUFNLEdBQUdBO1lBQ2hCOzs7WUFFQTRFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRM0UsSUFBSTtnQkFDVixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFDZDs7O1lBRUE0RSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUzNFLEtBQUs7Z0JBQ1osSUFBSSxDQUFDQSxLQUFLLEdBQUdBO1lBQ2Y7OztZQUVBNEUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVMzRSxLQUFLO2dCQUNaLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtZQUNmOzs7WUFFQTRFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVM0UsTUFBTTtnQkFDZCxJQUFJLENBQUNBLE1BQU0sR0FBR0E7WUFDaEI7OztZQUVBNEUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVUzRSxNQUFNO2dCQUNkLElBQUksQ0FBQ0EsTUFBTSxHQUFHQTtZQUNoQjs7O1lBRUE0RSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTNFLFFBQVE7Z0JBQ2xCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQTtZQUNsQjs7O1lBRUE0RSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYTNFLFNBQVM7Z0JBQ3BCLElBQUksQ0FBQ0EsU0FBUyxHQUFHQTtZQUNuQjs7O1lBRUE0RSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYzNFLFVBQVU7Z0JBQ3RCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtZQUNwQjs7O1lBRUE0RSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTNFLFdBQVc7Z0JBQ3hCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQTtZQUNyQjs7O1lBRUE0RSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTNFLFdBQVc7Z0JBQ3hCLElBQUksQ0FBQ0EsV0FBVyxHQUFHQTtZQUNyQjs7O1lBRUE0RSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCM0UsWUFBWTtnQkFDMUIsSUFBSSxDQUFDQSxZQUFZLEdBQUdBO1lBQ3RCOzs7WUFFQTRFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0IzRSxZQUFZO2dCQUMxQixJQUFJLENBQUNBLFlBQVksR0FBR0E7WUFDdEI7OztZQUVBNEUsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQjNFLGFBQWE7Z0JBQzVCLElBQUksQ0FBQ0EsYUFBYSxHQUFHQTtZQUN2Qjs7O1lBRUE0RSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxRQUFRO2dCQUN6QixJQUFJeEYsUUFBUSxJQUFJLENBQUMrQyxRQUFRO2dCQUV6Qi9DLE1BQU1tQyxJQUFJLENBQUNzRCxnQkFBVTtnQkFFckIsSUFBTUMsT0FBTzFGLE1BQU0yRixJQUFJLENBQUMsU0FBQ0Q7b0JBQ3ZCLElBQU1FLGtCQUFrQkYsS0FBS0csYUFBYSxDQUFDTDtvQkFFM0MsSUFBSUksaUJBQWlCO3dCQUNuQixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRU4sT0FBT0Y7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJDLFlBQVk7Z0JBQ3JDLElBQU1sQyxZQUFZLElBQUksQ0FBQ0QsWUFBWSxJQUM3Qm9DLFdBQVduQyxVQUFVOEIsSUFBSSxDQUFDLFNBQUNLO29CQUN6QixJQUFNQyxzQkFBc0JELFNBQVNFLGlCQUFpQixDQUFDSDtvQkFFdkQsSUFBSUUscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRVosT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJDLGdCQUFnQjtnQkFDMUMsSUFBTXJFLFNBQVMsSUFBSSxDQUFDRixTQUFTLElBQ3ZCd0UsUUFBUXRFLE9BQU80RCxJQUFJLENBQUMsU0FBQ1U7b0JBQ25CLElBQU1DLDBCQUEwQkQsTUFBTUUscUJBQXFCLENBQUNIO29CQUU1RCxJQUFJRSx5QkFBeUI7d0JBQzNCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1DQUFtQ0MsZ0JBQWdCO2dCQUNqRCxJQUFNQyxPQUFPRCxrQkFDUDlGLGdCQUFnQixJQUFJLENBQUMyRCxnQkFBZ0IsSUFDckNxQyxlQUFlaEcsY0FBY2dGLElBQUksQ0FBQyxTQUFDZ0I7b0JBQ2pDLElBQU1DLGNBQWNELGFBQWFFLFNBQVMsQ0FBQ0g7b0JBRTNDLElBQUlFLGFBQWE7d0JBQ2YsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVaLE9BQU9EO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCdEIsUUFBUTtnQkFDOUIsSUFBTUUsT0FBTyxJQUFJLENBQUNILGtCQUFrQixDQUFDQyxXQUMvQnVCLGNBQWVyQixTQUFTO2dCQUU5QixPQUFPcUI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0NDLFlBQVk7Z0JBQzFDLElBQU1DLFdBQVcsSUFBSSxDQUFDQywwQkFBMEIsQ0FBQ0YsZUFDM0NHLGtCQUFtQkYsYUFBYTtnQkFFdEMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQ0FBaUNqQixnQkFBZ0I7Z0JBQy9DLElBQU1DLFFBQVEsSUFBSSxDQUFDRiwyQkFBMkIsQ0FBQ0MsbUJBQ3pDa0IsZUFBZ0JqQixVQUFVO2dCQUVoQyxPQUFPaUI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx3Q0FBd0NkLGdCQUFnQjtnQkFDdEQsSUFBTUUsZUFBZSxJQUFJLENBQUNILGtDQUFrQyxDQUFDQyxtQkFDdkRlLHNCQUF1QmIsaUJBQWlCO2dCQUU5QyxPQUFPYTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsU0FBUztnQkFDM0IsSUFBTXpILFFBQVEsSUFBSSxDQUFDZ0QsUUFBUSxJQUNyQm1ELG1CQUFtQnNCLFVBQVVDLG1CQUFtQixJQUNoRDFGLE9BQU9oQyxNQUFNMEYsSUFBSSxDQUFDLFNBQUMxRDtvQkFDakIsSUFBTXFFLDBCQUEwQnJFLEtBQUtzRSxxQkFBcUIsQ0FBQ0g7b0JBRTNELElBQUlFLHlCQUF5Qjt3QkFDM0IsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVaLE9BQU9yRTtZQUNUOzs7WUFFQTJGLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJGLFNBQVM7Z0JBQzVCLElBQU14SCxTQUFTLElBQUksQ0FBQ2lELFNBQVMsSUFDdkJpRCxtQkFBbUJzQixVQUFVQyxtQkFBbUIsSUFDaER2RixRQUFRbEMsT0FBT3lGLElBQUksQ0FBQyxTQUFDdkQ7b0JBQ25CLElBQU1rRSwwQkFBMEJsRSxNQUFNbUUscUJBQXFCLENBQUNIO29CQUU1RCxJQUFJRSx5QkFBeUI7d0JBQzNCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixPQUFPbEU7WUFDVDs7O1lBRUF5RixLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCSCxTQUFTO2dCQUM1QixJQUFNdkgsU0FBUyxJQUFJLENBQUNrRCxTQUFTLElBQ3ZCK0MsbUJBQW1Cc0IsVUFBVUMsbUJBQW1CLElBQ2hEckYsUUFBUW5DLE9BQU93RixJQUFJLENBQUMsU0FBQ3JEO29CQUNuQixJQUFNZ0UsMEJBQTBCaEUsTUFBTWlFLHFCQUFxQixDQUFDSDtvQkFFNUQsSUFBSUUseUJBQXlCO3dCQUMzQixPQUFPO29CQUNUO2dCQUNGLE1BQU07Z0JBRVosT0FBT2hFO1lBQ1Q7OztZQUVBd0YsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkosU0FBUztnQkFDOUIsSUFBTXRILFdBQVcsSUFBSSxDQUFDbUQsV0FBVyxJQUMzQjZDLG1CQUFtQnNCLFVBQVVDLG1CQUFtQixJQUNoRG5GLFVBQVVwQyxTQUFTdUYsSUFBSSxDQUFDLFNBQUNuRDtvQkFDdkIsSUFBTThELDBCQUEwQjlELFFBQVErRCxxQkFBcUIsQ0FBQ0g7b0JBRTlELElBQUlFLHlCQUF5Qjt3QkFDM0IsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVaLE9BQU85RDtZQUNUOzs7WUFFQXVGLEtBQUFBO21CQUFBQSxTQUFBQSx5QkFBeUJMLFNBQVM7Z0JBQ2hDLElBQU1wSCxhQUFhLElBQUksQ0FBQ29ELGFBQWEsSUFDL0IwQyxtQkFBbUJzQixVQUFVQyxtQkFBbUIsSUFDaERLLFlBQVkxSCxXQUFXcUYsSUFBSSxDQUFDLFNBQUNxQztvQkFDM0IsSUFBTTFCLDBCQUEwQjBCLFVBQVV6QixxQkFBcUIsQ0FBQ0g7b0JBRWhFLElBQUlFLHlCQUF5Qjt3QkFDM0IsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVaLE9BQU8wQjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLDBCQUEwQlAsU0FBUztnQkFDakMsSUFBTW5ILGNBQWMsSUFBSSxDQUFDdUQsY0FBYyxJQUNqQ3NDLG1CQUFtQnNCLFVBQVVDLG1CQUFtQixJQUNoRGpGLGFBQWFuQyxZQUFZb0YsSUFBSSxDQUFDLFNBQUNqRDtvQkFDN0IsSUFBTTRELDBCQUEwQjVELFdBQVc2RCxxQkFBcUIsQ0FBQ0g7b0JBRWpFLElBQUlFLHlCQUF5Qjt3QkFDM0IsT0FBTztvQkFDVDtnQkFDRixNQUFNO2dCQUVaLE9BQU81RDtZQUNUOzs7WUFFQXdGLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJSLFNBQVM7Z0JBQ2xDLElBQU1oSCxlQUFlLElBQUksQ0FBQzBELGVBQWUsSUFDbkNnQyxtQkFBbUJzQixVQUFVQyxtQkFBbUIsSUFDaEQvRSxjQUFjbEMsYUFBYWlGLElBQUksQ0FBQyxTQUFDL0M7b0JBQy9CLElBQU0wRCwwQkFBMEIxRCxZQUFZMkQscUJBQXFCLENBQUNIO29CQUVsRSxJQUFJRSx5QkFBeUI7d0JBQzNCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixPQUFPMUQ7WUFDVDs7O1lBRUF1RSxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCRixZQUFZO2dCQUNyQyxJQUFNUCxPQUFPTyxjQUNQNUcsWUFBWSxJQUFJLENBQUNvRCxZQUFZLElBQzdCeUQsV0FBVzdHLFVBQVVzRixJQUFJLENBQUMsU0FBQ3VCO29CQUN6QixJQUFNTixjQUFjTSxTQUFTTCxTQUFTLENBQUNIO29CQUV2QyxJQUFJRSxhQUFhO3dCQUNmLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixPQUFPTTtZQUNUOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhcEksSUFBSTtnQkFDZixJQUFNcUksU0FBU0QsSUFBQUEsb0JBQVksRUFBQ3BJLE1BQU0sSUFBSSxDQUFDRCxNQUFNO2dCQUU3QyxPQUFPc0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjdEksSUFBSTtnQkFDaEIsSUFBTXFJLFNBQVNDLElBQUFBLHFCQUFhLEVBQUN0SSxNQUFNLElBQUksQ0FBQ0QsTUFBTTtnQkFFOUMsT0FBT3NJO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUTVDLElBQUk7Z0JBQ1YsSUFBSSxDQUFDMUYsS0FBSyxDQUFDbUMsSUFBSSxDQUFDdUQ7WUFDbEI7OztZQUVBNkMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVF0RyxJQUFJO2dCQUNWLElBQUksQ0FBQ2hDLEtBQUssQ0FBQ2tDLElBQUksQ0FBQ0Y7WUFDbEI7OztZQUVBdUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNwRyxLQUFLO2dCQUNaLElBQUksQ0FBQ2xDLE1BQU0sQ0FBQ2lDLElBQUksQ0FBQ0M7WUFDbkI7OztZQUVBcUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNuRyxLQUFLO2dCQUNaLElBQUksQ0FBQ25DLE1BQU0sQ0FBQ2dDLElBQUksQ0FBQ0c7WUFDbkI7OztZQUVBb0csS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdsRyxPQUFPO2dCQUNoQixJQUFJLENBQUNwQyxRQUFRLENBQUMrQixJQUFJLENBQUNLO1lBQ3JCOzs7WUFFQW1HLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZekIsUUFBUTtnQkFDbEIsSUFBSTBCLGdCQUFnQjtnQkFFcEIsSUFBTTdJLE9BQU9tSCxTQUFTbkcsT0FBTyxJQUN2QnFHLGtCQUFrQixJQUFJLENBQUMvRyxTQUFTLENBQUN3SSxJQUFJLENBQUMsU0FBQzNCO29CQUNyQyxJQUFNNEIsc0JBQXNCNUIsU0FBUzZCLFNBQVMsQ0FBQ2hKO29CQUUvQyxJQUFJK0kscUJBQXFCO3dCQUN2QixPQUFPO29CQUNUO2dCQUNGO2dCQUVOLElBQUksQ0FBQzFCLGlCQUFpQjtvQkFDcEIsSUFBSSxDQUFDL0csU0FBUyxDQUFDOEIsSUFBSSxDQUFDK0U7b0JBRXBCMEIsZ0JBQWdCO2dCQUNsQjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFoQixTQUFTO2dCQUNwQixJQUFJLENBQUMxSCxVQUFVLENBQUM2QixJQUFJLENBQUM2RjtZQUN2Qjs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUEsY0FBY3ZHLFVBQVU7Z0JBQ3RCLElBQUksQ0FBQ25DLFdBQVcsQ0FBQzRCLElBQUksQ0FBQ087WUFDeEI7OztZQUVBd0csS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFVBQVU7Z0JBQ3RCLElBQUksQ0FBQzNJLFdBQVcsQ0FBQzJCLElBQUksQ0FBQ2dIO1lBQ3hCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFdBQVc7Z0JBQ3hCLElBQUksQ0FBQzVJLFlBQVksQ0FBQzBCLElBQUksQ0FBQ2tIO1lBQ3pCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWUxRyxXQUFXO2dCQUN4QixJQUFJLENBQUNsQyxZQUFZLENBQUN5QixJQUFJLENBQUNTO1lBQ3pCOzs7WUFFQTJHLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I1QyxZQUFZO2dCQUMxQixJQUFJNkMsb0JBQW9CO2dCQUV4QixJQUFNL0MsbUJBQW1CRSxhQUFhOEMsT0FBTyxJQUN2Q2pDLHNCQUFzQixJQUFJLENBQUNELHVDQUF1QyxDQUFDZDtnQkFFekUsSUFBSSxDQUFDZSxxQkFBcUI7b0JBQ3hCLElBQUksQ0FBQzdHLGFBQWEsQ0FBQ3dCLElBQUksQ0FBQ3dFO29CQUV4QjZDLG9CQUFvQjtnQkFDdEI7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxPQUFPO2dCQUFJLElBQUksQ0FBQy9KLGNBQWMsQ0FBQzhKLEtBQUssQ0FBQ0MsU0FBUyxJQUFJLENBQUM5SixRQUFRO1lBQUc7OztZQUVwRStKLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNRCxPQUFPO2dCQUFJLElBQUksQ0FBQy9KLGNBQWMsQ0FBQ2dLLEtBQUssQ0FBQ0QsU0FBUyxJQUFJLENBQUM5SixRQUFRO1lBQUc7OztZQUVwRWdLLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLRixPQUFPO2dCQUFJLElBQUksQ0FBQy9KLGNBQWMsQ0FBQ2lLLElBQUksQ0FBQ0YsU0FBUyxJQUFJLENBQUM5SixRQUFRO1lBQUc7OztZQUVsRWlLLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSCxPQUFPO2dCQUFJLElBQUksQ0FBQy9KLGNBQWMsQ0FBQ2tLLE9BQU8sQ0FBQ0gsU0FBUyxJQUFJLENBQUM5SixRQUFRO1lBQUc7OztZQUV4RWtLLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNSixPQUFPO2dCQUFJLElBQUksQ0FBQy9KLGNBQWMsQ0FBQ21LLEtBQUssQ0FBQ0osU0FBUyxJQUFJLENBQUM5SixRQUFRO1lBQUc7OztZQUVwRW1LLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNoSyxLQUFLLEdBQUcsRUFBRTtnQkFDZixJQUFJLENBQUNDLEtBQUssR0FBRyxFQUFFO2dCQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQ0MsU0FBUyxHQUFHLEVBQUU7Z0JBQ25CLElBQUksQ0FBQ0MsVUFBVSxHQUFHLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQ0MsYUFBYSxHQUFHLEVBQUU7WUFDekI7OztZQUVBc0osS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1wSyxXQUFZLElBQUksQ0FBQ0EsUUFBUSxFQUN6QkcsUUFBUSxJQUFJLENBQUNBLEtBQUssQ0FBQ2tLLEdBQUcsQ0FBQyxTQUFDeEU7b0JBQ3RCLElBQU15RSxXQUFXekUsS0FBS3VFLE1BQU07b0JBRTVCdkUsT0FBT3lFLFVBQVUsR0FBRztvQkFFcEIsT0FBT3pFO2dCQUNULElBQ0F6RixRQUFRLElBQUksQ0FBQ0EsS0FBSyxDQUFDaUssR0FBRyxDQUFDLFNBQUNqSTtvQkFDdEIsSUFBTW1JLFdBQVduSSxLQUFLZ0ksTUFBTTtvQkFFNUJoSSxPQUFPbUksVUFBVSxHQUFHO29CQUVwQixPQUFPbkk7Z0JBQ1QsSUFDQS9CLFNBQVMsSUFBSSxDQUFDQSxNQUFNLENBQUNnSyxHQUFHLENBQUMsU0FBQzlIO29CQUN4QixJQUFNaUksWUFBWWpJLE1BQU02SCxNQUFNO29CQUU5QjdILFFBQVFpSSxXQUFXLEdBQUc7b0JBRXRCLE9BQU9qSTtnQkFDVCxJQUNBakMsU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQytKLEdBQUcsQ0FBQyxTQUFDNUg7b0JBQ3hCLElBQU1nSSxZQUFZaEksTUFBTTJILE1BQU07b0JBRTlCM0gsUUFBUWdJLFdBQVcsR0FBRztvQkFFdEIsT0FBT2hJO2dCQUNULElBQ0FsQyxXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDOEosR0FBRyxDQUFDLFNBQUMxSDtvQkFDNUIsSUFBTStILGNBQWMvSCxRQUFReUgsTUFBTTtvQkFFbEN6SCxVQUFVK0gsYUFBYSxHQUFHO29CQUUxQixPQUFPL0g7Z0JBQ1QsSUFDQW5DLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUM2SixHQUFHLENBQUMsU0FBQ2hEO29CQUM5QixJQUFNc0QsZUFBZXRELFNBQVMrQyxNQUFNO29CQUVwQy9DLFdBQVdzRCxjQUFlLEdBQUc7b0JBRTdCLE9BQU90RDtnQkFDVCxJQUNBNUcsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQzRKLEdBQUcsQ0FBQyxTQUFDbEM7b0JBQ2hDLElBQU15QyxnQkFBZ0J6QyxVQUFVaUMsTUFBTTtvQkFFdENqQyxZQUFZeUMsZUFBZSxHQUFHO29CQUU5QixPQUFPekM7Z0JBQ1QsSUFDQXpILGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUMySixHQUFHLENBQUMsU0FBQ3hIO29CQUNsQyxJQUFNZ0ksaUJBQWlCaEksV0FBV3VILE1BQU07b0JBRXhDdkgsYUFBYWdJLGdCQUFnQixHQUFHO29CQUVoQyxPQUFPaEk7Z0JBQ1QsSUFDQWxDLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUMwSixHQUFHLENBQUMsU0FBQ2Y7b0JBQ2xDLElBQU13QixpQkFBaUJ4QixXQUFXYyxNQUFNO29CQUV4Q2QsYUFBYXdCLGdCQUFnQixHQUFHO29CQUVoQyxPQUFPeEI7Z0JBQ1QsSUFDQTFJLGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUN5SixHQUFHLENBQUMsU0FBQ2I7b0JBQ3BDLElBQU11QixrQkFBa0J2QixZQUFZWSxNQUFNO29CQUUxQ1osY0FBY3VCLGlCQUFrQixHQUFHO29CQUVuQyxPQUFPdkI7Z0JBQ1QsSUFDQTNJLGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUN3SixHQUFHLENBQUMsU0FBQ3RIO29CQUNwQyxJQUFNaUksa0JBQWtCakksWUFBWXFILE1BQU07b0JBRTFDckgsY0FBY2lJLGlCQUFpQixHQUFHO29CQUVsQyxPQUFPakk7Z0JBQ1QsSUFDQWpDLGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQ3VKLEdBQUcsQ0FBQyxTQUFDdkQ7b0JBQ3RDLElBQU1tRSxtQkFBbUJuRSxhQUFhc0QsTUFBTTtvQkFFNUN0RCxlQUFlbUUsa0JBQW1CLEdBQUc7b0JBRXJDLE9BQU9uRTtnQkFDVCxJQUNBb0UsT0FBTztvQkFDTGxMLFVBQUFBO29CQUNBRyxPQUFBQTtvQkFDQUMsT0FBQUE7b0JBQ0FDLFFBQUFBO29CQUNBQyxRQUFBQTtvQkFDQUMsVUFBQUE7b0JBQ0FDLFdBQUFBO29CQUNBQyxZQUFBQTtvQkFDQUMsYUFBQUE7b0JBQ0FDLGFBQUFBO29CQUNBQyxjQUFBQTtvQkFDQUMsY0FBQUE7b0JBQ0FDLGVBQUFBO2dCQUNGO2dCQUVOLE9BQU9vSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLGVBQWU7O2dCQUN4QixJQUFRakwsUUFBdUlpTCxnQkFBdklqTCxPQUFPQyxRQUFnSWdMLGdCQUFoSWhMLE9BQU9DLFNBQXlIK0ssZ0JBQXpIL0ssUUFBUUMsU0FBaUg4SyxnQkFBakg5SyxRQUFRQyxXQUF5RzZLLGdCQUF6RzdLLFVBQVVFLGFBQStGMkssZ0JBQS9GM0ssWUFBWUQsWUFBbUY0SyxnQkFBbkY1SyxXQUFXRSxjQUF3RTBLLGdCQUF4RTFLLGFBQWFDLGNBQTJEeUssZ0JBQTNEekssYUFBYUMsZUFBOEN3SyxnQkFBOUN4SyxjQUFjQyxlQUFnQ3VLLGdCQUFoQ3ZLLGNBQWNDLGdCQUFrQnNLLGdCQUFsQnRLLGVBQ3ZIdUssY0FBYyxJQUFJLEVBQ2xCQyxZQUFZbkwsT0FDWm9MLFlBQVluTCxPQUNab0wsYUFBYW5MLFFBQ2JvTCxhQUFhbkwsUUFDYm9MLGVBQWVuTCxVQUNmb0wsZ0JBQWdCbkwsV0FDaEJvTCxpQkFBaUJuTCxZQUNqQm9MLGtCQUFrQm5MLGFBQ2xCb0wsa0JBQWtCbkwsYUFDbEJvTCxtQkFBbUJuTCxjQUNuQm9MLG1CQUFtQm5MLGNBQ25Cb0wsb0JBQW9CbkwsZUFBZ0IsR0FBRztnQkFFN0N3SyxVQUFVbkosT0FBTyxDQUFDLFNBQUNtSTtvQkFDakIsSUFBTSxBQUFFNEIsT0FBU0MsYUFBSSxDQUFiRCxNQUNGaEIsT0FBT1osVUFDUHpFLE9BQU9xRyxLQUFLRSxRQUFRLENBQUNsQixNQUFNRztvQkFFakMsTUFBS2xMLEtBQUssQ0FBQ21DLElBQUksQ0FBQ3VEO2dCQUNsQjtnQkFFQTBGLFVBQVVwSixPQUFPLENBQUMsU0FBQ29JO29CQUNqQixJQUFNVyxPQUFPWCxVQUNQbkksT0FBT2lLLGFBQUksQ0FBQ0QsUUFBUSxDQUFDbEIsTUFBTUc7b0JBRWpDLE1BQUtqTCxLQUFLLENBQUNrQyxJQUFJLENBQUNGO2dCQUNsQjtnQkFFQW9KLFdBQVdySixPQUFPLENBQUMsU0FBQ3FJO29CQUNsQixJQUFNVSxPQUFPVixXQUNQakksUUFBUStKLGNBQUssQ0FBQ0YsUUFBUSxDQUFDbEIsTUFBTUc7b0JBRW5DLE1BQUtoTCxNQUFNLENBQUNpQyxJQUFJLENBQUNDO2dCQUNuQjtnQkFFQWtKLFdBQVd0SixPQUFPLENBQUMsU0FBQ3NJO29CQUNsQixJQUFNUyxPQUFPVCxXQUNQaEksUUFBUThKLGNBQUssQ0FBQ0gsUUFBUSxDQUFDbEIsTUFBTUc7b0JBRW5DLE1BQUsvSyxNQUFNLENBQUNnQyxJQUFJLENBQUNHO2dCQUNuQjtnQkFFQWlKLGFBQWF2SixPQUFPLENBQUMsU0FBQ3VJO29CQUNwQixJQUFNUSxPQUFPUixhQUNQL0gsVUFBVTZKLGdCQUFPLENBQUNKLFFBQVEsQ0FBQ2xCLE1BQU1HO29CQUV2QyxNQUFLOUssUUFBUSxDQUFDK0IsSUFBSSxDQUFDSztnQkFDckI7Z0JBRUFnSixjQUFjeEosT0FBTyxDQUFDLFNBQUN3STtvQkFDckIsSUFBTU8sT0FBT1AsY0FDUHRELFdBQVdvRixpQkFBUSxDQUFDTCxRQUFRLENBQUNsQixNQUFNRztvQkFFekMsTUFBSzdLLFNBQVMsQ0FBQzhCLElBQUksQ0FBQytFO2dCQUN0QjtnQkFFQXVFLGVBQWV6SixPQUFPLENBQUMsU0FBQ3lJO29CQUN0QixJQUFNTSxPQUFPTixlQUNQekMsWUFBWXVFLGtCQUFTLENBQUNOLFFBQVEsQ0FBQ2xCLE1BQU1HO29CQUUzQyxNQUFLNUssVUFBVSxDQUFDNkIsSUFBSSxDQUFDNkY7Z0JBQ3ZCO2dCQUVBMEQsZ0JBQWdCMUosT0FBTyxDQUFDLFNBQUMwSTtvQkFDdkIsSUFBTUssT0FBT0wsZ0JBQ1BoSSxhQUFhOEosbUJBQVUsQ0FBQ1AsUUFBUSxDQUFDbEIsTUFBTUc7b0JBRTdDLE1BQUszSyxXQUFXLENBQUM0QixJQUFJLENBQUNPO2dCQUN4QjtnQkFFQWlKLGdCQUFnQjNKLE9BQU8sQ0FBQyxTQUFDMkk7b0JBQ3ZCLElBQU1JLE9BQU9KLGdCQUNQeEIsYUFBYXNELG1CQUFVLENBQUNSLFFBQVEsQ0FBQ2xCLE1BQU1HO29CQUU3QyxNQUFLMUssV0FBVyxDQUFDMkIsSUFBSSxDQUFDZ0g7Z0JBQ3hCO2dCQUVBeUMsaUJBQWlCNUosT0FBTyxDQUFDLFNBQUM0STtvQkFDeEIsSUFBTUcsT0FBT0gsaUJBQ1B2QixjQUFjcUQsb0JBQVcsQ0FBQ1QsUUFBUSxDQUFDbEIsTUFBTUc7b0JBRS9DLE1BQUt6SyxZQUFZLENBQUMwQixJQUFJLENBQUNrSDtnQkFDekI7Z0JBRUF3QyxpQkFBaUI3SixPQUFPLENBQUMsU0FBQzZJO29CQUN4QixJQUFNRSxPQUFPRixpQkFDUGpJLGNBQWMrSixvQkFBVyxDQUFDVixRQUFRLENBQUNsQixNQUFNRztvQkFFL0MsTUFBS3hLLFlBQVksQ0FBQ3lCLElBQUksQ0FBQ1M7Z0JBQ3pCO2dCQUVBa0osa0JBQWtCOUosT0FBTyxDQUFDLFNBQUM4STtvQkFDekIsSUFBTUMsT0FBT0Qsa0JBQ1BuRSxlQUFlaUcscUJBQVksQ0FBQ1gsUUFBUSxDQUFDbEIsTUFBTUc7b0JBRWpELE1BQUt2SyxhQUFhLENBQUN3QixJQUFJLENBQUN3RTtnQkFDMUI7WUFDRjs7OztZQUVPa0csS0FBQUE7bUJBQVAsU0FBT0EsMEJBQTBCQyxJQUFJLEVBQUVsTixjQUFjO2dCQUNuRCxJQUFNbU4sUUFBUW5OLGVBQWVxQixRQUFRLElBQy9CK0wsU0FBU3BOLGVBQWVzQixTQUFTLElBQ2pDckIsV0FBV2lOLEtBQUtHLE9BQU8sSUFDdkJDLGNBQWNKLEtBQUtLLFVBQVUsSUFDN0JDLFVBQVVGLGFBQ1ZwTixTQUFTaU4sTUFBTU0sUUFBUSxDQUFDRCxVQUN4QnJOLE9BQU9pTixPQUFPTSxLQUFLLENBQUN4TixTQUNwQkUsUUFBUSxFQUFFLEVBQ1ZDLFFBQVEsRUFBRSxFQUNWQyxTQUFTLEVBQUUsRUFDWEMsU0FBUyxFQUFFLEVBQ1hDLFdBQVcsRUFBRSxFQUNiQyxZQUFZLEVBQUUsRUFDZEMsYUFBYSxFQUFFLEVBQ2ZDLGNBQWMsRUFBRSxFQUNoQkMsY0FBYyxFQUFFLEVBQ2hCQyxlQUFlLEVBQUUsRUFDakJDLGVBQWUsRUFBRSxFQUNqQkMsZ0JBQWdCLEVBQUUsRUFDbEJ1SyxjQUFjLElBbDJCSHZMLFlBazJCbUJDLGdCQUFnQkMsVUFBVUMsUUFBUUMsTUFBTUMsT0FBT0MsT0FBT0MsUUFBUUMsUUFBUUUsV0FBV0MsWUFBWUYsVUFBVUcsYUFBYUMsYUFBYUMsY0FBY0MsY0FBY0M7Z0JBRWpNLE9BQU91SztZQUNUOzs7WUFFT3FDLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QjFOLFFBQVEsRUFBRUQsY0FBYztnQkFDM0QsSUFBTWtOLE9BQU9sTixlQUFlb0IsT0FBTyxDQUFDbkIsV0FDOUJrTixRQUFRbk4sZUFBZXFCLFFBQVEsSUFDL0IrTCxTQUFTcE4sZUFBZXNCLFNBQVMsSUFDakNnTSxjQUFjSixLQUFLSyxVQUFVLElBQzdCQyxVQUFVRixhQUNWcE4sU0FBU2lOLE1BQU1NLFFBQVEsQ0FBQ0QsVUFDeEJyTixPQUFPaU4sT0FBT00sS0FBSyxDQUFDeE4sU0FDcEJFLFFBQVEsRUFBRSxFQUNWQyxRQUFRLEVBQUUsRUFDVkMsU0FBUyxFQUFFLEVBQ1hDLFNBQVMsRUFBRSxFQUNYQyxXQUFXLEVBQUUsRUFDYkMsWUFBWSxFQUFFLEVBQ2RDLGFBQWEsRUFBRSxFQUNmQyxjQUFjLEVBQUUsRUFDaEJDLGNBQWMsRUFBRSxFQUNoQkMsZUFBZSxFQUFFLEVBQ2pCQyxlQUFlLEVBQUUsRUFDakJDLGdCQUFnQixFQUFFLEVBQ2xCdUssY0FBYyxJQTMzQkh2TCxZQTIzQm1CQyxnQkFBZ0JDLFVBQVVDLFFBQVFDLE1BQU1DLE9BQU9DLE9BQU9DLFFBQVFDLFFBQVFFLFdBQVdDLFlBQVlGLFVBQVVHLGFBQWFDLGFBQWFDLGNBQWNDLGNBQWNDO2dCQUVqTSxPQUFPdUs7WUFDVDs7O1dBOTNCbUJ2TCJ9