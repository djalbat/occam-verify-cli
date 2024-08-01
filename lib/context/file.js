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
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../conjecture"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../metavariable"));
var _array = require("../utilities/array");
var _type = require("../type");
var _metaType = require("../metaType");
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
var metaTypes = [
    _metaType.statementMetaType
];
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, conjectures, combinators, constructors, metavariables) {
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
        this.conjectures = conjectures;
        this.combinators = combinators;
        this.constructors = constructors;
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
            value: function getEquivalences(localContext) {
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
            key: "findVariableByVariableNode",
            value: function findVariableByVariableNode(variableNode) {
                var node = variableNode, variables = this.getVariables(), variable = variables.find(function(variable) {
                    var nodeMatches = variable.matchNode(node);
                    if (nodeMatches) {
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
            key: "isTermGrounded",
            value: function isTermGrounded(term) {
                var termGrounded = false; ///
                return termGrounded;
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
            key: "isLabelPresentByLabelName",
            value: function isLabelPresentByLabelName(labelName) {
                var label = this.findLabelByLabelName(labelName), labelPresent = label !== null;
                return labelPresent;
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
            key: "isMetavariablePresentByMetavariableNode",
            value: function isMetavariablePresentByMetavariableNode(metavariableNode) {
                var metavariable = this.findMetavariableByMetavariableNode(metavariableNode), metavariablePresent = metavariable !== null;
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
                var variableAdded = false;
                var node = variable.getNode(), variablePresent = this.variables.some(function(variable) {
                    var nodeMatches = variable.matchNode(node);
                    if (nodeMatches) {
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
                var metavariableAdded = false;
                var node = metavariable.getNode(), metavariablePresent = this.metavariables.some(function(metavariable) {
                    var nodeMatches = metavariable.matchNode(node);
                    if (nodeMatches) {
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
                    conjectures: conjectures,
                    combinators: combinators,
                    constructors: constructors,
                    metavariables: metavariables
                };
                return json;
            }
        },
        {
            key: "initialise",
            value: function initialise(json) {
                var _this = this;
                var fileContext = this, types = json.types, rules = json.rules, axioms = json.axioms, lemmas = json.lemmas, theorems = json.theorems, variables = json.variables, conjectures = json.conjectures, combinators = json.combinators, constructors = json.constructors, metavariables = json.metavariables, typesJSON = types, rulesJSON = rules, axiomsJSON = axioms, lemmasJSON = lemmas, theoremsJSON = theorems, variablesJSON = variables, conjecturesJSON = conjectures, combinatorsJSON = combinators, constructorsJSON = constructors, metavariablesJSON = metavariables;
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
                metavariablesJSON.forEach(function(metavariableJSON) {
                    var _$json = metavariableJSON, metavariable = _metavariable.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.metavariables.push(metavariable);
                });
            }
        }
    ], [
        {
            key: "fromFilePathAndReleaseContext",
            value: function fromFilePathAndReleaseContext(filePath, releaseContext) {
                var file = releaseContext.getFile(filePath), content = file.getContent(), tokens = releaseContext.tokenise(content), node = releaseContext.parse(tokens), types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], conjectures = [], combinators = [], constructors = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, theorems, conjectures, combinators, constructors, metavariables);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uL2F4aW9tXCI7XG5pbXBvcnQgTGVtbWEgZnJvbSBcIi4uL2xlbW1hXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi4vdGhlb3JlbVwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4uL2NvbmplY3R1cmVcIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuLi9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50TWV0YVR5cGUgfSBmcm9tIFwiLi4vbWV0YVR5cGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IG1ldGFUeXBlcyA9IFtcbiAgc3RhdGVtZW50TWV0YVR5cGVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExleGVyKCk7IH1cblxuICBnZXRQYXJzZXIoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0VGVybVR5cGUodGVybSkge1xuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gdGVybVR5cGU7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBzKCkge1xuICAgIGNvbnN0IHByb29mU3RlcHMgPSBbXTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gW107IC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldE1ldGFwcm9vZlN0ZXBzKCkge1xuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGxlbW1hTGFiZWxzID0gbGVtbWEuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgY29uamVjdHVyZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHB1c2godHlwZXMsIHRoaXMudHlwZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICBwdXNoKHJ1bGVzLCB0aGlzLnJ1bGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldEF4aW9tcygpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICBwdXNoKGxlbW1hcywgdGhpcy5sZW1tYXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCByZWxlYXNlQ29udGV4dExlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKHRoZW9yZW1zLCB0aGlzLnRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGFUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gbWV0YVR5cGVzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcygpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZmluZExhYmVsQnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgIC8vL1xuICAgICAgICAgIGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTWF0Y2hlc0xhYmVsTmFtZSA9IHJ1bGUubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVNYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tTWF0Y2hlc0xhYmVsTmFtZSA9IGF4aW9tLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChheGlvbU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbW1hTWF0Y2hlc0xhYmVsTmFtZSA9IGxlbW1hLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChsZW1tYU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW9yZW1NYXRjaGVzTGFiZWxOYW1lID0gdGhlb3JlbS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodGhlb3JlbU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZU1hdGNoZXNMYWJlbE5hbWUgPSBjb25qZWN0dXJlLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkge1xuICAgIGNvbnN0IHRlcm1Hcm91bmRlZCA9IGZhbHNlOyAvLy9cblxuICAgIHJldHVybiB0ZXJtR3JvdW5kZWQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeUxhYmVsTmFtZShsYWJlbE5hbWUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLnZhcmlhYmxlcy5zb21lKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZU1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgdmFyaWFibGVBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBtZXRhdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IHRoaXMubWV0YXZhcmlhYmxlcy5zb21lKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuXG4gICAgICBtZXRhdmFyaWFibGVBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGZhdGFsKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5mYXRhbChtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSAgdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICB0eXBlcyA9IHRoaXMudHlwZXMubWFwKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgdHlwZSA9IHR5cGVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZXMgPSB0aGlzLnJ1bGVzLm1hcCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZUpTT04gPSBydWxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGF4aW9tID0gYXhpb21KU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGF4aW9tO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxlbW1hcyA9IHRoaXMubGVtbWFzLm1hcCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbW1hSlNPTiA9IGxlbW1hLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGxlbW1hID0gbGVtbWFKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGxlbW1hO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRoZW9yZW1zID0gdGhpcy50aGVvcmVtcy5tYXAoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW9yZW1KU09OID0gdGhlb3JlbS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdGhlb3JlbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uamVjdHVyZXMgPSB0aGlzLmNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjb25qZWN0dXJlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gdGhpcy5jb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB0aGlzLmNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9ySlNPTjsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMubWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIGxlbW1hcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29uamVjdHVyZXMsXG4gICAgICAgICAgICBjb21iaW5hdG9ycyxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHsgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIGxlbW1hcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29uamVjdHVyZXMsXG4gICAgICAgICAgICBjb21iaW5hdG9ycyxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgfSA9IGpzb24sXG4gICAgICAgICAgdHlwZXNKU09OID0gdHlwZXMsXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXMsXG4gICAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tcyxcbiAgICAgICAgICBsZW1tYXNKU09OID0gbGVtbWFzLFxuICAgICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLFxuICAgICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXMsXG4gICAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMsXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMsXG4gICAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9ycyxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXM7XG5cbiAgICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICAgIH0pO1xuXG4gICAgcnVsZXNKU09OLmZvckVhY2goKHJ1bGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gICAgfSk7XG5cbiAgICBheGlvbXNKU09OLmZvckVhY2goKGF4aW9tSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gICAgfSk7XG5cbiAgICBsZW1tYXNKU09OLmZvckVhY2goKGxlbW1hSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxlbW1hSlNPTiwgIC8vL1xuICAgICAgICAgICAgbGVtbWEgPSBMZW1tYS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gICAgfSk7XG5cbiAgICB0aGVvcmVtc0pTT04uZm9yRWFjaCgodGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgICB9KTtcblxuICAgIHZhcmlhYmxlc0pTT04uZm9yRWFjaCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICB9KTtcblxuICAgIGNvbmplY3R1cmVzSlNPTi5mb3JFYWNoKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICAgIH0pO1xuXG4gICAgY29tYmluYXRvcnNKU09OLmZvckVhY2goKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gICAgfSk7XG5cbiAgICBjb25zdHJ1Y3RvcnNKU09OLmZvckVhY2goKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gICAgfSk7XG5cbiAgICBtZXRhdmFyaWFibGVzSlNPTi5mb3JFYWNoKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0KGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGUgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gcmVsZWFzZUNvbnRleHQudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0LnBhcnNlKHRva2VucyksXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdmFyaWFibGVzLCB0aGVvcmVtcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJtZXRhVHlwZXMiLCJzdGF0ZW1lbnRNZXRhVHlwZSIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwidmFyaWFibGVzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0VGVybVR5cGUiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiZ2V0UHJvb2ZTdGVwcyIsInByb29mU3RlcHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJsb2NhbENvbnRleHQiLCJlcXVpdmFsZW5jZXMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJwdXNoIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsInJlbGVhc2VDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0TWV0YVR5cGVzIiwiZ2V0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZmluZExhYmVsQnlMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJuYW1lIiwibGFiZWwiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwib2JqZWN0VHlwZSIsInR5cGUiLCJtYXRjaFR5cGVOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwicnVsZU1hdGNoZXNMYWJlbE5hbWUiLCJtYXRjaExhYmVsTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZSIsImxlbW1hTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lIiwidGhlb3JlbU1hdGNoZXNMYWJlbE5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWF0Y2hNZXRhVHlwZU5hbWUiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZSIsImNvbmplY3R1cmVNYXRjaGVzTGFiZWxOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJpc1Rlcm1Hcm91bmRlZCIsInRlcm1Hcm91bmRlZCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lIiwibGFiZWxQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsImFkZFR5cGUiLCJhZGRSdWxlIiwiYWRkQXhpb20iLCJhZGRMZW1tYSIsImFkZFRoZW9yZW0iLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlQWRkZWQiLCJzb21lIiwiYWRkQ29uamVjdHVyZSIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJ0b0pTT04iLCJtYXAiLCJ0eXBlSlNPTiIsInJ1bGVKU09OIiwiYXhpb21KU09OIiwibGVtbWFKU09OIiwidGhlb3JlbUpTT04iLCJ2YXJpYWJsZUpTT04iLCJjb25qZWN0dXJlSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29uc3RydWN0b3JKU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsImpzb24iLCJpbml0aWFsaXNlIiwiZmlsZUNvbnRleHQiLCJ0eXBlc0pTT04iLCJydWxlc0pTT04iLCJheGlvbXNKU09OIiwibGVtbWFzSlNPTiIsInRoZW9yZW1zSlNPTiIsInZhcmlhYmxlc0pTT04iLCJjb25qZWN0dXJlc0pTT04iLCJjb21iaW5hdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwibWV0YXZhcmlhYmxlc0pTT04iLCJ0eXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIlJ1bGUiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiQXhpb20iLCJMZW1tYSIsIlRoZW9yZW0iLCJWYXJpYWJsZSIsIkNvbmplY3R1cmUiLCJDb21iaW5hdG9yIiwiQ29uc3RydWN0b3IiLCJNZXRhdmFyaWFibGUiLCJmcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dCIsImZpbGUiLCJnZXRGaWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXNCcUJBOzs7MkRBcEJKOzREQUNDOzREQUNBOzhE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