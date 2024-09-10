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
            key: "getMetaproofSteps",
            value: function getMetaproofSteps() {
                var metaproofSteps = []; ///
                return metaproofSteps;
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
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types = this.getTypes();
                types.push(_type.objectType);
                var type = types.find(function(type) {
                    var matches = type.matchTypeName(typeName);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "findTypeByTypeNode",
            value: function findTypeByTypeNode(typeNode) {
                var types = this.getTypes();
                types.push(_type.objectType);
                var type = types.find(function(type) {
                    var matches = type.matchTypeNode(typeNode);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "findMetavariableByName",
            value: function findMetavariableByName(name) {
                var metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var matches = metavariable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "findVariableByVariableNode",
            value: function findVariableByVariableNode(variableNode) {
                var node = variableNode, variables = this.getVariables(), variable = variables.find(function(variable) {
                    var variableMatchesNode = variable.matchNode(node);
                    if (variableMatchesNode) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "findMetaTypeByMetaTypeNode",
            value: function findMetaTypeByMetaTypeNode(metaTypeNode) {
                var metaTypes = this.getMetaTypes(), metaType = metaTypes.find(function(metaType) {
                    var matches = metaType.matchMetaTypeNode(metaTypeNode);
                    if (matches) {
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
                    var matches = label.matchMetavariableNode(metavariableNode);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return label;
            }
        },
        {
            key: "findRuleByMetavariableNode",
            value: function findRuleByMetavariableNode(metavariableNode) {
                var rules = this.getRules(), rule = rules.find(function(rule) {
                    var ruleMatchesMetavariableNode = rule.matchMetavariableNode(metavariableNode);
                    if (ruleMatchesMetavariableNode) {
                        return true;
                    }
                }) || null;
                return rule;
            }
        },
        {
            key: "findAxiomByMetavariableNode",
            value: function findAxiomByMetavariableNode(metavariableNode) {
                var axioms = this.getAxioms(), axiom = axioms.find(function(axiom) {
                    var axiomMatchesMetavariableNode = axiom.matchMetavariableNode(metavariableNode);
                    if (axiomMatchesMetavariableNode) {
                        return true;
                    }
                }) || null;
                return axiom;
            }
        },
        {
            key: "findLemmaByMetavariableNode",
            value: function findLemmaByMetavariableNode(metavariableNode) {
                var lemmas = this.getLemmas(), lemma = lemmas.find(function(lemma) {
                    var lemmaMatchesMetavariableNode = lemma.matchMetavariableNode(metavariableNode);
                    if (lemmaMatchesMetavariableNode) {
                        return true;
                    }
                }) || null;
                return lemma;
            }
        },
        {
            key: "findTheoremByMetavariableNode",
            value: function findTheoremByMetavariableNode(metavariableNode) {
                var theorems = this.getTheorems(), theorem = theorems.find(function(theorem) {
                    var theoremMatchesMetavariableNode = theorem.matchMetavariableNode(metavariableNode);
                    if (theoremMatchesMetavariableNode) {
                        return true;
                    }
                }) || null;
                return theorem;
            }
        },
        {
            key: "findMetaLemmaByMetavariableNode",
            value: function findMetaLemmaByMetavariableNode(metavariableNode) {
                var metaLemmas = this.getMetaLemmas(), metaLemma = metaLemmas.find(function(metaLemma) {
                    var metaLemmaMatchesMetavariableNode = metaLemma.matchMetavariableNode(metavariableNode);
                    if (metaLemmaMatchesMetavariableNode) {
                        return true;
                    }
                }) || null;
                return metaLemma;
            }
        },
        {
            key: "findConjectureByMetavariableNode",
            value: function findConjectureByMetavariableNode(metavariableNode) {
                var conjectures = this.getConjectures(), conjecture = conjectures.find(function(conjecture) {
                    var conjectureMatchesMetavariableNode = conjecture.matchMetavariableNode(metavariableNode);
                    if (conjectureMatchesMetavariableNode) {
                        return true;
                    }
                }) || null;
                return conjecture;
            }
        },
        {
            key: "findMetatheoremByMetavariableNode",
            value: function findMetatheoremByMetavariableNode(metavariableNode) {
                var metatheorems = this.getMetatheorems(), metatheorem = metatheorems.find(function(metatheorem) {
                    var metatheoremMatchesMetavariableNode = metatheorem.matchMetavariableNode(metavariableNode);
                    if (metatheoremMatchesMetavariableNode) {
                        return true;
                    }
                }) || null;
                return metatheorem;
            }
        },
        {
            key: "findMetavariableByMetavariableNode",
            value: function findMetavariableByMetavariableNode(metavariableNode) {
                var node = metavariableNode, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var matches = metavariable.matchNode(node);
                    if (matches) {
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
            key: "isTypePresentByTypeNode",
            value: function isTypePresentByTypeNode(typeNode) {
                var type = this.findTypeByTypeNode(typeNode), typePresent = type !== null;
                return typePresent;
            }
        },
        {
            key: "isMetavariablePresentByName",
            value: function isMetavariablePresentByName(name) {
                var metavariable = this.findMetavariableByName(name), metavariablePresent = metavariable !== null;
                return metavariablePresent;
            }
        },
        {
            key: "isVariablePresentByVariableNode",
            value: function isVariablePresentByVariableNode(variableNode) {
                var variable = this.findVariableByVariableNode(variableNode), variablePresent = variable !== null;
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
            key: "isMetavariablePresentByMetavariableNode",
            value: function isMetavariablePresentByMetavariableNode(metavariableNode) {
                var metavariable = this.findMetavariableByMetavariableNode(metavariableNode), metavariablePresent = metavariable !== null;
                return metavariablePresent;
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
                var name = metavariable.getName(), metavariablePresent = this.metavariables.some(function(metavariable) {
                    var metavariableMatchesNode = metavariable.matchName(name);
                    if (metavariableMatchesNode) {
                        return true;
                    }
                });
                if (!metavariablePresent) {
                    this.metavariables.push(metavariable);
                    metavariableAdded = true;
                }
                return metavariableAdded;
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
                var filePath = this.filePath, types = this.types.map(function(type) {
                    var typeJSON = type.toJSON(_this.tokens);
                    type = typeJSON; ///
                    return type;
                }), rules = this.rules.map(function(rule) {
                    var ruleJSON = rule.toJSON(_this.tokens);
                    rule = ruleJSON; ///
                    return rule;
                }), axioms = this.axioms.map(function(axiom) {
                    var axiomJSON = axiom.toJSON(_this.tokens);
                    axiom = axiomJSON; ///
                    return axiom;
                }), lemmas = this.lemmas.map(function(lemma) {
                    var lemmaJSON = lemma.toJSON(_this.tokens);
                    lemma = lemmaJSON; ///
                    return lemma;
                }), theorems = this.theorems.map(function(theorem) {
                    var theoremJSON = theorem.toJSON(_this.tokens);
                    theorem = theoremJSON; ///
                    return theorem;
                }), variables = this.variables.map(function(variable) {
                    var variableJSON = variable.toJSON(_this.tokens);
                    variable = variableJSON; ///
                    return variable;
                }), metaLemmas = this.metaLemmas.map(function(metaLemma) {
                    var metaLemmaJSON = metaLemma.toJSON(_this.tokens);
                    metaLemma = metaLemmaJSON; ///
                    return metaLemma;
                }), conjectures = this.conjectures.map(function(conjecture) {
                    var conjectureJSON = conjecture.toJSON(_this.tokens);
                    conjecture = conjectureJSON; ///
                    return conjecture;
                }), combinators = this.combinators.map(function(combinator) {
                    var combinatorJSON = combinator.toJSON(_this.tokens);
                    combinator = combinatorJSON; ///
                    return combinator;
                }), constructors = this.constructors.map(function(constructor) {
                    var constructorJSON = constructor.toJSON(_this.tokens);
                    constructor = constructorJSON; ///
                    return constructor;
                }), metatheorems = this.metatheorems.map(function(metatheorem) {
                    var metatheoremJSON = metatheorem.toJSON(_this.tokens);
                    metatheorem = metatheoremJSON; ///
                    return metatheorem;
                }), metavariables = this.metavariables.map(function(metavariable) {
                    var metavariableJSON = metavariable.toJSON(_this.tokens);
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
            value: function initialise(json) {
                var _this = this;
                var types = json.types, rules = json.rules, axioms = json.axioms, lemmas = json.lemmas, theorems = json.theorems, metaLemmas = json.metaLemmas, variables = json.variables, conjectures = json.conjectures, combinators = json.combinators, constructors = json.constructors, metatheorems = json.metatheorems, metavariables = json.metavariables, fileContext = this, typesJSON = types, rulesJSON = rules, axiomsJSON = axioms, lemmasJSON = lemmas, theoremsJSON = theorems, variablesJSON = variables, metaLemmasJSON = metaLemmas, conjecturesJSON = conjectures, combinatorsJSON = combinators, constructorsJSON = constructors, metatheoremsJSON = metatheorems, metavariablesJSON = metavariables; ///
                typesJSON.forEach(function(typeJSON) {
                    var _$json = typeJSON, type = (0, _type.typeFromJSONAndFileContext)(_$json, fileContext);
                    _this.types.push(type);
                });
                rulesJSON.forEach(function(ruleJSON) {
                    var _$json = ruleJSON, rule = _rule.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.rules.push(rule);
                });
                axiomsJSON.forEach(function(axiomJSON) {
                    var _$json = axiomJSON, axiom = _axiom.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.axioms.push(axiom);
                });
                lemmasJSON.forEach(function(lemmaJSON) {
                    var _$json = lemmaJSON, lemma = _lemma.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.lemmas.push(lemma);
                });
                theoremsJSON.forEach(function(theoremJSON) {
                    var _$json = theoremJSON, theorem = _theorem.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.theorems.push(theorem);
                });
                variablesJSON.forEach(function(variableJSON) {
                    var _$json = variableJSON, variable = _variable.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.variables.push(variable);
                });
                metaLemmasJSON.forEach(function(metaLemmaJSON) {
                    var _$json = metaLemmaJSON, metaLemma = _metaLemma.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.metaLemmas.push(metaLemma);
                });
                conjecturesJSON.forEach(function(conjectureJSON) {
                    var _$json = conjectureJSON, conjecture = _conjecture.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.conjectures.push(conjecture);
                });
                combinatorsJSON.forEach(function(combinatorJSON) {
                    var _$json = combinatorJSON, combinator = _combinator.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.combinators.push(combinator);
                });
                constructorsJSON.forEach(function(constructorJSON) {
                    var _$json = constructorJSON, constructor = _constructor.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.constructors.push(constructor);
                });
                metatheoremsJSON.forEach(function(metatheoremJSON) {
                    var _$json = metatheoremJSON, metatheorem = _metatheorem.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.metatheorems.push(metatheorem);
                });
                metavariablesJSON.forEach(function(metavariableJSON) {
                    var _$json = metavariableJSON, metavariable = _metavariable.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.metavariables.push(metavariable);
                });
            }
        }
    ], [
        {
            key: "fromJSONAndReleaseContext",
            value: function fromJSONAndReleaseContext(json, releaseContext) {
                var filePath = json.filePath, tokens = null, node = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, metaLemmas, variables, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                fileContext.initialise(json);
                return fileContext;
            }
        },
        {
            key: "fromFilePathAndReleaseContext",
            value: function fromFilePathAndReleaseContext(filePath, releaseContext) {
                var file = releaseContext.getFile(filePath), content = file.getContent(), tokens = releaseContext.tokenise(content), node = releaseContext.parse(tokens), types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uL2F4aW9tXCI7XG5pbXBvcnQgTGVtbWEgZnJvbSBcIi4uL2xlbW1hXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi4vdGhlb3JlbVwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IG1ldGFUeXBlcyBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgTWV0YUxlbW1hIGZyb20gXCIuLi9tZXRhTGVtbWFcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuLi9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IE1ldGF0aGVvcmVtIGZyb20gXCIuLi9tZXRhdGhlb3JlbVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi4vbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExleGVyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldFRlcm1UeXBlKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IFtdOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSBbXTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbW1hcy5mb3JFYWNoKChsZW1tYSkgPT4ge1xuICAgICAgY29uc3QgbGVtbWFMYWJlbHMgPSBsZW1tYS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGxlbW1hTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgdGhlb3JlbUxhYmVscyA9IHRoZW9yZW0uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCB0aGVvcmVtTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29uamVjdHVyZXMuZm9yRWFjaCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgY29uc3QgY29uamVjdHVyZUxhYmVscyA9IGNvbmplY3R1cmUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBjb25qZWN0dXJlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubWV0YXRoZW9yZW1zLmZvckVhY2goKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdGhlb3JlbUxhYmVscyA9IG1ldGF0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbWV0YXRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICBwdXNoKHR5cGVzLCB0aGlzLnR5cGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoKTtcblxuICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcHVzaChydWxlcywgdGhpcy5ydWxlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKCk7XG5cbiAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHB1c2goYXhpb21zLCB0aGlzLmF4aW9tcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgcHVzaChsZW1tYXMsIHRoaXMubGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMZW1tYXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExlbW1hcygpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgcmVsZWFzZUNvbnRleHRMZW1tYXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaCh0aGVvcmVtcywgdGhpcy50aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKCk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobWV0YUxlbW1hcywgdGhpcy5tZXRhTGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhTGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldE1ldGFUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gbWV0YVR5cGVzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcygpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaChtZXRhdGhlb3JlbXMsIHRoaXMubWV0YXRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcygpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNOb2RlID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVNYXRjaGVzTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5vZGUobWV0YVR5cGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gdGhpcy5nZXRNZXRhVHlwZXMoKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlcy5maW5kKChtZXRhVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGFUeXBlLm1hdGNoTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kUnVsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHJ1bGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGF4aW9tLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxlbW1hLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGxlbW1hTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIGZpbmRUaGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gdGhlb3JlbS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGVvcmVtTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG5cbiAgZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYXMuZmluZCgobWV0YUxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IG1ldGFMZW1tYS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYTtcbiAgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gY29uamVjdHVyZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25qZWN0dXJlTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSB0aGlzLmdldE1ldGF0aGVvcmVtcygpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1zLmZpbmQoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdGhlb3JlbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gbWV0YXRoZW9yZW0ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXRoZW9yZW1NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOb2RlKHR5cGVOb2RlKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlOYW1lKG5hbWUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7XG4gICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gIH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHtcbiAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGxldCB2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMudmFyaWFibGVzLnNvbWUoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNOb2RlID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVNYXRjaGVzTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgdmFyaWFibGVBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICBhZGRNZXRhTGVtbWEobWV0YUxlbW1hKSB7XG4gICAgdGhpcy5tZXRhTGVtbWFzLnB1c2gobWV0YUxlbW1hKTtcbiAgfVxuXG4gIGFkZENvbmplY3R1cmUoY29uamVjdHVyZSkge1xuICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgfVxuXG4gIGFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gIH1cblxuICBhZGRNZXRhdGhlb3JlbShtZXRhdGhlb3JlbSkge1xuICAgIHRoaXMubWV0YXRoZW9yZW1zLnB1c2gobWV0YXRoZW9yZW0pO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBtZXRhdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IHRoaXMubWV0YXZhcmlhYmxlcy5zb21lKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1hdGNoZXNOb2RlID0gbWV0YXZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU1hdGNoZXNOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuXG4gICAgICBtZXRhdmFyaWFibGVBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGZhdGFsKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5mYXRhbChtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSAgdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICB0eXBlcyA9IHRoaXMudHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgdHlwZSA9IHR5cGVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZXMgPSB0aGlzLnJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGF4aW9tID0gYXhpb21KU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGF4aW9tO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxlbW1hcyA9IHRoaXMubGVtbWFzLm1hcCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbW1hSlNPTiA9IGxlbW1hLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGxlbW1hID0gbGVtbWFKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGxlbW1hO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRoZW9yZW1zID0gdGhpcy50aGVvcmVtcy5tYXAoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdGhlb3JlbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IHRoaXMubWV0YUxlbW1hcy5tYXAoKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hSlNPTiA9IG1ldGFMZW1tYS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBtZXRhTGVtbWEgPSBtZXRhTGVtbWFKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIG1ldGFMZW1tYTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IHRoaXMuY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSB0aGlzLmNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ySlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjb21iaW5hdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHRoaXMuY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSB0aGlzLm1ldGF0aGVvcmVtcy5tYXAoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUpTT04gPSBtZXRhdGhlb3JlbS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5tZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICB0eXBlcyxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgbGVtbWFzLFxuICAgICAgICAgICAgdGhlb3JlbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBtZXRhTGVtbWFzLFxuICAgICAgICAgICAgY29uamVjdHVyZXMsXG4gICAgICAgICAgICBjb21iaW5hdG9ycyxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtcyxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCB7IHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBtZXRhTGVtbWFzLCB2YXJpYWJsZXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMgfSA9IGpzb24sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0eXBlc0pTT04gPSB0eXBlcywgIC8vL1xuICAgICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzLCAgLy8vXG4gICAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tcywgIC8vL1xuICAgICAgICAgIGxlbW1hc0pTT04gPSBsZW1tYXMsICAvLy9cbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtcywgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXMsICAvLy9cbiAgICAgICAgICBtZXRhTGVtbWFzSlNPTiA9IG1ldGFMZW1tYXMsICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcywgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9ycywgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXMsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7ICAvLy9cblxuICAgIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gICAgfSk7XG5cbiAgICBydWxlc0pTT04uZm9yRWFjaCgocnVsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgICB9KTtcblxuICAgIGF4aW9tc0pTT04uZm9yRWFjaCgoYXhpb21KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgICB9KTtcblxuICAgIGxlbW1hc0pTT04uZm9yRWFjaCgobGVtbWFKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGVtbWFKU09OLCAgLy8vXG4gICAgICAgICAgICBsZW1tYSA9IExlbW1hLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgICB9KTtcblxuICAgIHRoZW9yZW1zSlNPTi5mb3JFYWNoKCh0aGVvcmVtSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuICAgIH0pO1xuXG4gICAgdmFyaWFibGVzSlNPTi5mb3JFYWNoKCh2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgIH0pO1xuXG4gICAgbWV0YUxlbW1hc0pTT04uZm9yRWFjaCgobWV0YUxlbW1hSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGFMZW1tYUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGFMZW1tYSA9IE1ldGFMZW1tYS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5tZXRhTGVtbWFzLnB1c2gobWV0YUxlbW1hKTtcbiAgICB9KTtcblxuICAgIGNvbmplY3R1cmVzSlNPTi5mb3JFYWNoKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICAgIH0pO1xuXG4gICAgY29tYmluYXRvcnNKU09OLmZvckVhY2goKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gICAgfSk7XG5cbiAgICBjb25zdHJ1Y3RvcnNKU09OLmZvckVhY2goKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gICAgfSk7XG5cbiAgICBtZXRhdGhlb3JlbXNKU09OLmZvckVhY2goKG1ldGF0aGVvcmVtSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGF0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgbWV0YXRoZW9yZW0gPSBNZXRhdGhlb3JlbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5tZXRhdGhlb3JlbXMucHVzaChtZXRhdGhlb3JlbSk7XG4gICAgfSk7XG5cbiAgICBtZXRhdmFyaWFibGVzSlNPTi5mb3JFYWNoKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kUmVsZWFzZUNvbnRleHQoanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IGZpbGVQYXRoIH0gPSBqc29uLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIG1ldGFMZW1tYXMsIHZhcmlhYmxlcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgZmlsZUNvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dChmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlID0gcmVsZWFzZUNvbnRleHQuZ2V0RmlsZShmaWxlUGF0aCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IHJlbGVhc2VDb250ZXh0LnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSByZWxlYXNlQ29udGV4dC5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufSJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwidmFyaWFibGVzIiwibWV0YUxlbW1hcyIsImNvbmplY3R1cmVzIiwiY29tYmluYXRvcnMiLCJjb25zdHJ1Y3RvcnMiLCJtZXRhdGhlb3JlbXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldFRlcm1UeXBlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsImdldFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJtZXRhcHJvb2ZTdGVwcyIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJwdXNoIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldE1ldGFMZW1tYXMiLCJyZWxlYXNlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRNZXRhVHlwZXMiLCJtZXRhVHlwZXMiLCJnZXRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwib2JqZWN0VHlwZSIsInR5cGUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJ0eXBlTm9kZSIsIm1hdGNoVHlwZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlOYW1lIiwibmFtZSIsIm1ldGF2YXJpYWJsZSIsIm1hdGNoTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJ2YXJpYWJsZU1hdGNoZXNOb2RlIiwibWF0Y2hOb2RlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZSIsIm1hdGNoTWV0YVR5cGVOb2RlIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZFJ1bGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJydWxlTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJmaW5kQXhpb21CeU1ldGF2YXJpYWJsZU5vZGUiLCJheGlvbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwiZmluZExlbW1hQnlNZXRhdmFyaWFibGVOb2RlIiwibGVtbWFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRUaGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlIiwidGhlb3JlbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFMZW1tYSIsIm1ldGFMZW1tYU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwiZmluZENvbmplY3R1cmVCeU1ldGF2YXJpYWJsZU5vZGUiLCJjb25qZWN0dXJlTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdGhlb3JlbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTm9kZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJsYWJlbFByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwiYWRkVGhlb3JlbSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGVBZGRlZCIsInNvbWUiLCJhZGRNZXRhTGVtbWEiLCJhZGRDb25qZWN0dXJlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiYWRkTWV0YXRoZW9yZW0iLCJhZGRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVBZGRlZCIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVNYXRjaGVzTm9kZSIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwidG9KU09OIiwibWFwIiwidHlwZUpTT04iLCJydWxlSlNPTiIsImF4aW9tSlNPTiIsImxlbW1hSlNPTiIsInRoZW9yZW1KU09OIiwidmFyaWFibGVKU09OIiwibWV0YUxlbW1hSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29tYmluYXRvckpTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdmFyaWFibGVKU09OIiwianNvbiIsImluaXRpYWxpc2UiLCJmaWxlQ29udGV4dCIsInR5cGVzSlNPTiIsInJ1bGVzSlNPTiIsImF4aW9tc0pTT04iLCJsZW1tYXNKU09OIiwidGhlb3JlbXNKU09OIiwidmFyaWFibGVzSlNPTiIsIm1ldGFMZW1tYXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29tYmluYXRvcnNKU09OIiwiY29uc3RydWN0b3JzSlNPTiIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsInR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiUnVsZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJBeGlvbSIsIkxlbW1hIiwiVGhlb3JlbSIsIlZhcmlhYmxlIiwiTWV0YUxlbW1hIiwiQ29uamVjdHVyZSIsIkNvbWJpbmF0b3IiLCJDb25zdHJ1Y3RvciIsIk1ldGF0aGVvcmVtIiwiTWV0YXZhcmlhYmxlIiwiZnJvbUpTT05BbmRSZWxlYXNlQ29udGV4dCIsImZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0IiwiZmlsZSIsImdldEZpbGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0JxQkE7OzsyREFsQko7NERBQ0M7NERBQ0E7OERBQ0U7K0RBQ0M7Z0VBQ0M7Z0VBQ0E7aUVBQ0M7aUVBQ0E7a0VBQ0M7a0VBQ0E7bUVBQ0M7cUJBRUo7b0JBQ007c0JBRWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsNEJBQUQsQUFB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