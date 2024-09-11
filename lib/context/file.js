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
    function FileContext(releaseContext, fileContent, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, constructors, metatheorems, metavariables) {
        _class_call_check(this, FileContext);
        this.releaseContext = releaseContext;
        this.fileContent = fileContent;
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
            key: "getFileContent",
            value: function getFileContent() {
                return this.fileContent;
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
                var fileContent = this.fileContent, filePath = this.filePath, types = this.types.map(function(type) {
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
                    fileContent: fileContent,
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
                var lexer = this.getLexer(), parser = this.getParser(), content = this.fileContent; ///
                this.tokens = lexer.tokenise(content);
                this.node = parser.parse(this.tokens);
            }
        }
    ], [
        {
            key: "fromJSONAndReleaseContext",
            value: function fromJSONAndReleaseContext(json, releaseContext) {
                var fileContent = json.fileContent, filePath = json.filePath, tokens = null, node = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, fileContent, filePath, tokens, node, types, rules, axioms, lemmas, metaLemmas, variables, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                return fileContext;
            }
        },
        {
            key: "fromFilePathAndReleaseContext",
            value: function fromFilePathAndReleaseContext(filePath, releaseContext) {
                var file = releaseContext.getFile(filePath), lexer = releaseContext.getLexer(), parser = releaseContext.getParser(), fileContent = file.getContent(), content = fileContent, tokens = lexer.tokenise(content), node = parser.parse(tokens), types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, fileContent, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uL2F4aW9tXCI7XG5pbXBvcnQgTGVtbWEgZnJvbSBcIi4uL2xlbW1hXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi4vdGhlb3JlbVwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IG1ldGFUeXBlcyBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgTWV0YUxlbW1hIGZyb20gXCIuLi9tZXRhTGVtbWFcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuLi9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IE1ldGF0aGVvcmVtIGZyb20gXCIuLi9tZXRhdGhlb3JlbVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi4vbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRlbnQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCk7IH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIHJldHVybiB0ZXJtVHlwZTtcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgY29uc3QgcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBbXTsgLy8vXG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0TWV0YXByb29mU3RlcHMoKSB7XG4gICAgY29uc3QgbWV0YXByb29mU3RlcHMgPSBbXTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gW107XG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGxlbW1hTGFiZWxzID0gbGVtbWEuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgY29uamVjdHVyZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5mb3JFYWNoKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgbWV0YXRoZW9yZW1MYWJlbHMgPSBtZXRhdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIG1ldGF0aGVvcmVtTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFR5cGVzKCk7XG5cbiAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHB1c2gocnVsZXMsIHRoaXMucnVsZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRSdWxlcygpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICBwdXNoKGF4aW9tcywgdGhpcy5heGlvbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKCk7XG5cbiAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobGVtbWFzLCB0aGlzLmxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZW1tYXMoKTtcblxuICAgICAgcHVzaChsZW1tYXMsIHJlbGVhc2VDb250ZXh0TGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2godGhlb3JlbXMsIHRoaXMudGhlb3JlbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcygpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICBwdXNoKG1ldGFMZW1tYXMsIHRoaXMubWV0YUxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIHJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRNZXRhVHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIG1ldGFUeXBlcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICBwdXNoKGNvbmplY3R1cmVzLCB0aGlzLmNvbmplY3R1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbnN0cnVjdG9ycywgdGhpcy5jb25zdHJ1Y3RvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2gobWV0YXRoZW9yZW1zLCB0aGlzLm1ldGF0aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoKTtcblxuICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgdHlwZXMucHVzaChvYmplY3RUeXBlKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOb2RlKHR5cGVOb2RlKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgdHlwZXMucHVzaChvYmplY3RUeXBlKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVNYXRjaGVzTm9kZSA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTWF0Y2hlc05vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZFJ1bGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBydWxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBheGlvbS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChheGlvbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbW1hTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBsZW1tYS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChsZW1tYU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBmaW5kVGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW9yZW1NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHRoZW9yZW0ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodGhlb3JlbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBtZXRhTGVtbWFzLmZpbmQoKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBtZXRhTGVtbWEubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YUxlbW1hTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cblxuICBmaW5kQ29uamVjdHVyZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSB0aGlzLmdldENvbmplY3R1cmVzKCksXG4gICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVzLmZpbmQoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGNvbmplY3R1cmUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoY29uamVjdHVyZU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtcy5maW5kKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1NYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF0aGVvcmVtLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF0aGVvcmVtTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTm9kZSh0eXBlTm9kZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLnZhcmlhYmxlcy5zb21lKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVNYXRjaGVzTm9kZSA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTWF0Y2hlc05vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSkge1xuICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVNYXRjaGVzTm9kZSA9IG1ldGF2YXJpYWJsZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVNYXRjaGVzTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZmF0YWwobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gdGhpcy5maWxlQ29udGVudCxcbiAgICAgICAgICBmaWxlUGF0aCA9ICB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdGhpcy50eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IHRoaXMucnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgcnVsZSA9IHJ1bGVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5heGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgYXhpb20gPSBheGlvbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gYXhpb207XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGVtbWFzID0gdGhpcy5sZW1tYXMubWFwKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFKU09OID0gbGVtbWEudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbGVtbWEgPSBsZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbGVtbWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGlzLnRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB0aGVvcmVtO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gdGhpcy5tZXRhTGVtbWFzLm1hcCgobWV0YUxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFKU09OID0gbWV0YUxlbW1hLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YUxlbW1hO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gdGhpcy5jb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IHRoaXMuY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gdGhpcy5jb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IHRoaXMubWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1KU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLm1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlQ29udGVudCxcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIGxlbW1hcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgbWV0YUxlbW1hcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgeyB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgbWV0YUxlbW1hcywgdmFyaWFibGVzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzIH0gPSBqc29uLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdHlwZXNKU09OID0gdHlwZXMsICAvLy9cbiAgICAgICAgICBydWxlc0pTT04gPSBydWxlcywgIC8vL1xuICAgICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXMsICAvLy9cbiAgICAgICAgICBsZW1tYXNKU09OID0gbGVtbWFzLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hc0pTT04gPSBtZXRhTGVtbWFzLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMsICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycywgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMsICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAgLy8vXG5cbiAgICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICAgIH0pO1xuXG4gICAgcnVsZXNKU09OLmZvckVhY2goKHJ1bGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gICAgfSk7XG5cbiAgICBheGlvbXNKU09OLmZvckVhY2goKGF4aW9tSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gICAgfSk7XG5cbiAgICBsZW1tYXNKU09OLmZvckVhY2goKGxlbW1hSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxlbW1hSlNPTiwgIC8vL1xuICAgICAgICAgICAgbGVtbWEgPSBMZW1tYS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gICAgfSk7XG5cbiAgICB0aGVvcmVtc0pTT04uZm9yRWFjaCgodGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgICB9KTtcblxuICAgIHZhcmlhYmxlc0pTT04uZm9yRWFjaCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICB9KTtcblxuICAgIG1ldGFMZW1tYXNKU09OLmZvckVhY2goKG1ldGFMZW1tYUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhTGVtbWFKU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhTGVtbWEgPSBNZXRhTGVtbWEuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gICAgfSk7XG5cbiAgICBjb25qZWN0dXJlc0pTT04uZm9yRWFjaCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcbiAgICB9KTtcblxuICAgIGNvbWJpbmF0b3JzSlNPTi5mb3JFYWNoKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICAgIH0pO1xuXG4gICAgY29uc3RydWN0b3JzSlNPTi5mb3JFYWNoKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH0pO1xuXG4gICAgbWV0YXRoZW9yZW1zSlNPTi5mb3JFYWNoKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubWV0YXRoZW9yZW1zLnB1c2gobWV0YXRoZW9yZW0pO1xuICAgIH0pO1xuXG4gICAgbWV0YXZhcmlhYmxlc0pTT04uZm9yRWFjaCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZmlsZUNvbnRlbnQ7ICAvLy9cblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kUmVsZWFzZUNvbnRleHQoanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IGZpbGVDb250ZW50LCBmaWxlUGF0aCB9ID0ganNvbixcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgbWV0YUxlbW1hcywgdmFyaWFibGVzLCB0aGVvcmVtcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZSA9IHJlbGVhc2VDb250ZXh0LmdldEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGxleGVyID0gcmVsZWFzZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSByZWxlYXNlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBmaWxlQ29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlQ29udGVudCwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59Il0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwicmVsZWFzZUNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJsZW1tYXMiLCJ0aGVvcmVtcyIsInZhcmlhYmxlcyIsIm1ldGFMZW1tYXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwibWV0YXRoZW9yZW1zIiwibWV0YXZhcmlhYmxlcyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZUNvbnRlbnQiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldFRlcm1UeXBlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsImdldFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJtZXRhcHJvb2ZTdGVwcyIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJwdXNoIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldE1ldGFMZW1tYXMiLCJyZWxlYXNlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRNZXRhVHlwZXMiLCJtZXRhVHlwZXMiLCJnZXRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwib2JqZWN0VHlwZSIsInR5cGUiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJ0eXBlTm9kZSIsIm1hdGNoVHlwZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlOYW1lIiwibmFtZSIsIm1ldGF2YXJpYWJsZSIsIm1hdGNoTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJ2YXJpYWJsZU1hdGNoZXNOb2RlIiwibWF0Y2hOb2RlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZSIsIm1hdGNoTWV0YVR5cGVOb2RlIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZFJ1bGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJydWxlTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJmaW5kQXhpb21CeU1ldGF2YXJpYWJsZU5vZGUiLCJheGlvbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwiZmluZExlbW1hQnlNZXRhdmFyaWFibGVOb2RlIiwibGVtbWFNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRUaGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlIiwidGhlb3JlbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFMZW1tYSIsIm1ldGFMZW1tYU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwiZmluZENvbmplY3R1cmVCeU1ldGF2YXJpYWJsZU5vZGUiLCJjb25qZWN0dXJlTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdGhlb3JlbU1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTm9kZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJsYWJlbFByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwiYWRkVGhlb3JlbSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGVBZGRlZCIsInNvbWUiLCJhZGRNZXRhTGVtbWEiLCJhZGRDb25qZWN0dXJlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiYWRkTWV0YXRoZW9yZW0iLCJhZGRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVBZGRlZCIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVNYXRjaGVzTm9kZSIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwidG9KU09OIiwibWFwIiwidHlwZUpTT04iLCJydWxlSlNPTiIsImF4aW9tSlNPTiIsImxlbW1hSlNPTiIsInRoZW9yZW1KU09OIiwidmFyaWFibGVKU09OIiwibWV0YUxlbW1hSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29tYmluYXRvckpTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdmFyaWFibGVKU09OIiwianNvbiIsImluaXRpYWxpc2UiLCJmaWxlQ29udGV4dCIsInR5cGVzSlNPTiIsInJ1bGVzSlNPTiIsImF4aW9tc0pTT04iLCJsZW1tYXNKU09OIiwidGhlb3JlbXNKU09OIiwidmFyaWFibGVzSlNPTiIsIm1ldGFMZW1tYXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29tYmluYXRvcnNKU09OIiwiY29uc3RydWN0b3JzSlNPTiIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsInR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiUnVsZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJBeGlvbSIsIkxlbW1hIiwiVGhlb3JlbSIsIlZhcmlhYmxlIiwiTWV0YUxlbW1hIiwiQ29uamVjdHVyZSIsIkNvbWJpbmF0b3IiLCJDb25zdHJ1Y3RvciIsIk1ldGF0aGVvcmVtIiwiTWV0YXZhcmlhYmxlIiwibGV4ZXIiLCJwYXJzZXIiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImZyb21KU09OQW5kUmVsZWFzZUNvbnRleHQiLCJmcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dCIsImZpbGUiLCJnZXRGaWxlIiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7OzJEQWxCSjs0REFDQzs0REFDQTs4REFDRTsrREFDQztnRUFDQztnRUFDQTtpRUFDQztpRUFDQTtrRUFDQztrRUFDQTttRUFDQztxQkFFSjtvQkFDTTtzQkFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxjQUFjLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRGhMakI7UUFFakIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FB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