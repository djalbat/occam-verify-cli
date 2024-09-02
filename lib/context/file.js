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
            value: function isMetavariablePresentByMetavariableNode(metavariableNode, localContext) {
                var metavariable = this.findMetavariableByMetavariableNode(metavariableNode, localContext), metavariablePresent = metavariable !== null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uL2F4aW9tXCI7XG5pbXBvcnQgTGVtbWEgZnJvbSBcIi4uL2xlbW1hXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi4vdGhlb3JlbVwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IG1ldGFUeXBlcyBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgTWV0YUxlbW1hIGZyb20gXCIuLi9tZXRhTGVtbWFcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuLi9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IE1ldGF0aGVvcmVtIGZyb20gXCIuLi9tZXRhdGhlb3JlbVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi4vbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExleGVyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldFRlcm1UeXBlKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IFtdOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSBbXTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbW1hcy5mb3JFYWNoKChsZW1tYSkgPT4ge1xuICAgICAgY29uc3QgbGVtbWFMYWJlbHMgPSBsZW1tYS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGxlbW1hTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgdGhlb3JlbUxhYmVscyA9IHRoZW9yZW0uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCB0aGVvcmVtTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29uamVjdHVyZXMuZm9yRWFjaCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgY29uc3QgY29uamVjdHVyZUxhYmVscyA9IGNvbmplY3R1cmUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBjb25qZWN0dXJlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubWV0YXRoZW9yZW1zLmZvckVhY2goKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdGhlb3JlbUxhYmVscyA9IG1ldGF0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbWV0YXRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICBwdXNoKHR5cGVzLCB0aGlzLnR5cGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoKTtcblxuICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcHVzaChydWxlcywgdGhpcy5ydWxlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKCk7XG5cbiAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHB1c2goYXhpb21zLCB0aGlzLmF4aW9tcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgcHVzaChsZW1tYXMsIHRoaXMubGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMZW1tYXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExlbW1hcygpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgcmVsZWFzZUNvbnRleHRMZW1tYXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaCh0aGVvcmVtcywgdGhpcy50aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKCk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobWV0YUxlbW1hcywgdGhpcy5tZXRhTGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhTGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldE1ldGFUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gbWV0YVR5cGVzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcygpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaChtZXRhdGhlb3JlbXMsIHRoaXMubWV0YXRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcygpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVNYXRjaGVzTm9kZSA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTWF0Y2hlc05vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZFJ1bGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBydWxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBheGlvbS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChheGlvbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbW1hTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBsZW1tYS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChsZW1tYU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBmaW5kVGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW9yZW1NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHRoZW9yZW0ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodGhlb3JlbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBtZXRhTGVtbWFzLmZpbmQoKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBtZXRhTGVtbWEubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YUxlbW1hTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cblxuICBmaW5kQ29uamVjdHVyZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSB0aGlzLmdldENvbmplY3R1cmVzKCksXG4gICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVzLmZpbmQoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGNvbmplY3R1cmUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoY29uamVjdHVyZU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtcy5maW5kKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF0aGVvcmVtLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF0aGVvcmVtTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTm9kZSh0eXBlTm9kZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgbGV0IHZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy52YXJpYWJsZXMuc29tZSgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTWF0Y2hlc05vZGUgPSB2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU1hdGNoZXNOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGFMZW1tYShtZXRhTGVtbWEpIHtcbiAgICB0aGlzLm1ldGFMZW1tYXMucHVzaChtZXRhTGVtbWEpO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGFkZE1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtKSB7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMucHVzaChtZXRhdGhlb3JlbSk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gdGhpcy5tZXRhdmFyaWFibGVzLnNvbWUoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWF0Y2hlc05vZGUgPSBtZXRhdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTWF0Y2hlc05vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQudHJhY2UobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQud2FybmluZyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZmF0YWwobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmZhdGFsKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9ICB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdGhpcy50eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IHRoaXMucnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgcnVsZSA9IHJ1bGVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5heGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgYXhpb20gPSBheGlvbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gYXhpb207XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGVtbWFzID0gdGhpcy5sZW1tYXMubWFwKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFKU09OID0gbGVtbWEudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbGVtbWEgPSBsZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbGVtbWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGlzLnRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB0aGVvcmVtO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gdGhpcy5tZXRhTGVtbWFzLm1hcCgobWV0YUxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFKU09OID0gbWV0YUxlbW1hLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YUxlbW1hO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gdGhpcy5jb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IHRoaXMuY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gdGhpcy5jb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IHRoaXMubWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1KU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLm1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICBsZW1tYXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIG1ldGFMZW1tYXMsXG4gICAgICAgICAgICBjb25qZWN0dXJlcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgbWV0YXRoZW9yZW1zLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IHsgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIG1ldGFMZW1tYXMsIHZhcmlhYmxlcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcyB9ID0ganNvbixcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHR5cGVzSlNPTiA9IHR5cGVzLCAgLy8vXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXMsICAvLy9cbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zLCAgLy8vXG4gICAgICAgICAgbGVtbWFzSlNPTiA9IGxlbW1hcywgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcywgIC8vL1xuICAgICAgICAgIG1ldGFMZW1tYXNKU09OID0gbWV0YUxlbW1hcywgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMsICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtcywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgIC8vL1xuXG4gICAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgICB9KTtcblxuICAgIHJ1bGVzSlNPTi5mb3JFYWNoKChydWxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICAgIH0pO1xuXG4gICAgYXhpb21zSlNPTi5mb3JFYWNoKChheGlvbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICAgIH0pO1xuXG4gICAgbGVtbWFzSlNPTi5mb3JFYWNoKChsZW1tYUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsZW1tYUpTT04sICAvLy9cbiAgICAgICAgICAgIGxlbW1hID0gTGVtbWEuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuICAgIH0pO1xuXG4gICAgdGhlb3JlbXNKU09OLmZvckVhY2goKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG4gICAgfSk7XG5cbiAgICB2YXJpYWJsZXNKU09OLmZvckVhY2goKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgfSk7XG5cbiAgICBtZXRhTGVtbWFzSlNPTi5mb3JFYWNoKChtZXRhTGVtbWFKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbWV0YUxlbW1hSlNPTiwgIC8vL1xuICAgICAgICAgICAgbWV0YUxlbW1hID0gTWV0YUxlbW1hLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGFMZW1tYXMucHVzaChtZXRhTGVtbWEpO1xuICAgIH0pO1xuXG4gICAgY29uamVjdHVyZXNKU09OLmZvckVhY2goKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gICAgfSk7XG5cbiAgICBjb21iaW5hdG9yc0pTT04uZm9yRWFjaCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgICB9KTtcblxuICAgIGNvbnN0cnVjdG9yc0pTT04uZm9yRWFjaCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgICB9KTtcblxuICAgIG1ldGF0aGVvcmVtc0pTT04uZm9yRWFjaCgobWV0YXRoZW9yZW1KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbWV0YXRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhdGhlb3JlbSA9IE1ldGF0aGVvcmVtLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgICB9KTtcblxuICAgIG1ldGF2YXJpYWJsZXNKU09OLmZvckVhY2goKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRSZWxlYXNlQ29udGV4dChqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgZmlsZVBhdGggfSA9IGpzb24sXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgbWV0YUxlbW1hcywgdmFyaWFibGVzLCB0aGVvcmVtcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0KGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGUgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gcmVsZWFzZUNvbnRleHQudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0LnBhcnNlKHRva2VucyksXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59Il0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJtZXRhTGVtbWFzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsIm1ldGF0aGVvcmVtcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0VGVybVR5cGUiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiZ2V0UHJvb2ZTdGVwcyIsInByb29mU3RlcHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlUmVsZWFzZSIsImxhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsInB1c2giLCJheGlvbSIsImF4aW9tTGFiZWxzIiwibGVtbWEiLCJsZW1tYUxhYmVscyIsInRoZW9yZW0iLCJ0aGVvcmVtTGFiZWxzIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVMYWJlbHMiLCJtZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtTGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsInJlbGVhc2VDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0TWV0YUxlbW1hcyIsInJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyIsImdldE1ldGFUeXBlcyIsIm1ldGFUeXBlcyIsImdldENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJvYmplY3RUeXBlIiwidHlwZSIsImZpbmQiLCJtYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTm9kZSIsInR5cGVOb2RlIiwibWF0Y2hUeXBlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU5hbWUiLCJuYW1lIiwibWV0YXZhcmlhYmxlIiwibWF0Y2hOYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTWF0Y2hlc05vZGUiLCJtYXRjaE5vZGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlTm9kZSIsIm1ldGFUeXBlIiwibWF0Y2hNZXRhVHlwZU5vZGUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibGFiZWwiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kUnVsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInJ1bGVNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRBeGlvbUJ5TWV0YXZhcmlhYmxlTm9kZSIsImF4aW9tTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUiLCJsZW1tYU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwiZmluZFRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUiLCJ0aGVvcmVtTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YUxlbW1hQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YUxlbW1hIiwibWV0YUxlbW1hTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJmaW5kQ29uamVjdHVyZUJ5TWV0YXZhcmlhYmxlTm9kZSIsImNvbmplY3R1cmVNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF0aGVvcmVtTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOb2RlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImxvY2FsQ29udGV4dCIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJhZGRUeXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkTGVtbWEiLCJhZGRUaGVvcmVtIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwic29tZSIsImFkZE1ldGFMZW1tYSIsImFkZENvbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJhZGRNZXRhdGhlb3JlbSIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZU1hdGNoZXNOb2RlIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJ0b0pTT04iLCJtYXAiLCJ0eXBlSlNPTiIsInJ1bGVKU09OIiwiYXhpb21KU09OIiwibGVtbWFKU09OIiwidGhlb3JlbUpTT04iLCJ2YXJpYWJsZUpTT04iLCJtZXRhTGVtbWFKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJqc29uIiwiaW5pdGlhbGlzZSIsImZpbGVDb250ZXh0IiwidHlwZXNKU09OIiwicnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImxlbW1hc0pTT04iLCJ0aGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwibWV0YUxlbW1hc0pTT04iLCJjb25qZWN0dXJlc0pTT04iLCJjb21iaW5hdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwidHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJSdWxlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIkF4aW9tIiwiTGVtbWEiLCJUaGVvcmVtIiwiVmFyaWFibGUiLCJNZXRhTGVtbWEiLCJDb25qZWN0dXJlIiwiQ29tYmluYXRvciIsIkNvbnN0cnVjdG9yIiwiTWV0YXRoZW9yZW0iLCJNZXRhdmFyaWFibGUiLCJmcm9tSlNPTkFuZFJlbGVhc2VDb250ZXh0IiwiZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQiLCJmaWxlIiwiZ2V0RmlsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7OzJEQWxCSjs0REFDQzs0REFDQTs4REFDRTsrREFDQztnRUFDQztnRUFDQTtpRUFDQztpRUFDQTtrRUFDQztrRUFDQTttRUFDQztxQkFFSjtvQkFDTTtzQkFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFF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