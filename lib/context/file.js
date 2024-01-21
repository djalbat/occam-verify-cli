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
            key: "getProofSteps",
            value: function getProofSteps() {
                var proofSteps = []; ///
                return proofSteps;
            }
        },
        {
            key: "getCollections",
            value: function getCollections(localContext) {
                var collections = []; ///
                return collections;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uL2F4aW9tXCI7XG5pbXBvcnQgTGVtbWEgZnJvbSBcIi4uL2xlbW1hXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi4vdGhlb3JlbVwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4uL2NvbmplY3R1cmVcIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuLi9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50TWV0YVR5cGUgfSBmcm9tIFwiLi4vbWV0YVR5cGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IG1ldGFUeXBlcyA9IFtcbiAgc3RhdGVtZW50TWV0YVR5cGVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExleGVyKCk7IH1cblxuICBnZXRQYXJzZXIoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0Q29sbGVjdGlvbnMobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgY29sbGVjdGlvbnMgPSBbXTsgLy8vXG5cbiAgICByZXR1cm4gY29sbGVjdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlTGFiZWxzID0gY29uamVjdHVyZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICBwdXNoKHR5cGVzLCB0aGlzLnR5cGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoKTtcblxuICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcHVzaChydWxlcywgdGhpcy5ydWxlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKCk7XG5cbiAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHB1c2goYXhpb21zLCB0aGlzLmF4aW9tcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgcHVzaChsZW1tYXMsIHRoaXMubGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMZW1tYXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExlbW1hcygpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgcmVsZWFzZUNvbnRleHRMZW1tYXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaCh0aGVvcmVtcywgdGhpcy50aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKCk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhVHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIG1ldGFUeXBlcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICBwdXNoKGNvbmplY3R1cmVzLCB0aGlzLmNvbmplY3R1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbnN0cnVjdG9ycywgdGhpcy5jb25zdHJ1Y3RvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBsYWJlbE5hbWUsICAvLy9cbiAgICAgICAgICBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgdHlwZXMucHVzaChvYmplY3RUeXBlKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU1hdGNoZXNMYWJlbE5hbWUgPSBydWxlLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbU1hdGNoZXNMYWJlbE5hbWUgPSBheGlvbS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21NYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBsZW1tYXMgPSB0aGlzLmdldExlbW1hcygpLFxuICAgICAgICAgIGxlbW1hID0gbGVtbWFzLmZpbmQoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYU1hdGNoZXNMYWJlbE5hbWUgPSBsZW1tYS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGVtbWFNYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zID0gdGhpcy5nZXRUaGVvcmVtcygpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtcy5maW5kKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aGVvcmVtTWF0Y2hlc0xhYmVsTmFtZSA9IHRoZW9yZW0ubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHRoZW9yZW1NYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSB0aGlzLmdldE1ldGFUeXBlcygpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVzLmZpbmQoKG1ldGFUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbWV0YVR5cGUubWF0Y2hNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXMgPSB0aGlzLmdldENvbmplY3R1cmVzKCksXG4gICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVzLmZpbmQoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVNYXRjaGVzTGFiZWxOYW1lID0gY29uamVjdHVyZS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoY29uamVjdHVyZU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudChzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7XG4gICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gIH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHtcbiAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGxldCB2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMudmFyaWFibGVzLnNvbWUoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZENvbmplY3R1cmUoY29uamVjdHVyZSkge1xuICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgfVxuXG4gIGFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gdGhpcy5tZXRhdmFyaWFibGVzLnNvbWUoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIW1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIG1ldGF2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQudHJhY2UobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQud2FybmluZyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZmF0YWwobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmZhdGFsKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9ICB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdGhpcy50eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IHRoaXMucnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgcnVsZSA9IHJ1bGVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5heGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgYXhpb20gPSBheGlvbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gYXhpb207XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGVtbWFzID0gdGhpcy5sZW1tYXMubWFwKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFKU09OID0gbGVtbWEudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbGVtbWEgPSBsZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbGVtbWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGlzLnRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB0aGVvcmVtO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IHRoaXMuY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSB0aGlzLmNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ySlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjb21iaW5hdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHRoaXMuY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5tZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICB0eXBlcyxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgbGVtbWFzLFxuICAgICAgICAgICAgdGhlb3JlbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb25qZWN0dXJlcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgeyB0eXBlcyxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgbGVtbWFzLFxuICAgICAgICAgICAgdGhlb3JlbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb25qZWN0dXJlcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlcyB9ID0ganNvbixcbiAgICAgICAgICB0eXBlc0pTT04gPSB0eXBlcyxcbiAgICAgICAgICBydWxlc0pTT04gPSBydWxlcyxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zLFxuICAgICAgICAgIGxlbW1hc0pTT04gPSBsZW1tYXMsXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMsXG4gICAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcyxcbiAgICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcyxcbiAgICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycyxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcztcblxuICAgIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gICAgfSk7XG5cbiAgICBydWxlc0pTT04uZm9yRWFjaCgocnVsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBydWxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgcnVsZSA9IFJ1bGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgICB9KTtcblxuICAgIGF4aW9tc0pTT04uZm9yRWFjaCgoYXhpb21KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gYXhpb21KU09OLCAgLy8vXG4gICAgICAgICAgICBheGlvbSA9IEF4aW9tLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgICB9KTtcblxuICAgIGxlbW1hc0pTT04uZm9yRWFjaCgobGVtbWFKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGVtbWFKU09OLCAgLy8vXG4gICAgICAgICAgICBsZW1tYSA9IExlbW1hLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgICB9KTtcblxuICAgIHRoZW9yZW1zSlNPTi5mb3JFYWNoKCh0aGVvcmVtSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHRoZW9yZW1KU09OLCAgLy8vXG4gICAgICAgICAgICB0aGVvcmVtID0gVGhlb3JlbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuICAgIH0pO1xuXG4gICAgdmFyaWFibGVzSlNPTi5mb3JFYWNoKCh2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgIH0pO1xuXG4gICAgY29uamVjdHVyZXNKU09OLmZvckVhY2goKGNvbmplY3R1cmVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gY29uamVjdHVyZUpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbmplY3R1cmUgPSBDb25qZWN0dXJlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gICAgfSk7XG5cbiAgICBjb21iaW5hdG9yc0pTT04uZm9yRWFjaCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgICB9KTtcblxuICAgIGNvbnN0cnVjdG9yc0pTT04uZm9yRWFjaCgoY29uc3RydWN0b3JKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gY29uc3RydWN0b3JKU09OLCAgLy8vXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgICB9KTtcblxuICAgIG1ldGF2YXJpYWJsZXNKU09OLmZvckVhY2goKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZSA9IHJlbGVhc2VDb250ZXh0LmdldEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSByZWxlYXNlQ29udGV4dC50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcmVsZWFzZUNvbnRleHQucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB2YXJpYWJsZXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsIm1ldGFUeXBlcyIsInN0YXRlbWVudE1ldGFUeXBlIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwibWV0YXZhcmlhYmxlcyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRQcm9vZlN0ZXBzIiwicHJvb2ZTdGVwcyIsImdldENvbGxlY3Rpb25zIiwibG9jYWxDb250ZXh0IiwiY29sbGVjdGlvbnMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJwdXNoIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsInJlbGVhc2VDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0TWV0YVR5cGVzIiwiZ2V0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZmluZExhYmVsQnlMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJuYW1lIiwibGFiZWwiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwib2JqZWN0VHlwZSIsInR5cGUiLCJtYXRjaFR5cGVOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwicnVsZU1hdGNoZXNMYWJlbE5hbWUiLCJtYXRjaExhYmVsTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZSIsImxlbW1hTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lIiwidGhlb3JlbU1hdGNoZXNMYWJlbE5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWF0Y2hNZXRhVHlwZU5hbWUiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZSIsImNvbmplY3R1cmVNYXRjaGVzTGFiZWxOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lIiwibGFiZWxQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJhZGRUeXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkTGVtbWEiLCJhZGRUaGVvcmVtIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwic29tZSIsImFkZENvbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJhZGRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVBZGRlZCIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwidG9KU09OIiwibWFwIiwidHlwZUpTT04iLCJydWxlSlNPTiIsImF4aW9tSlNPTiIsImxlbW1hSlNPTiIsInRoZW9yZW1KU09OIiwidmFyaWFibGVKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJqc29uIiwiaW5pdGlhbGlzZSIsImZpbGVDb250ZXh0IiwidHlwZXNKU09OIiwicnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImxlbW1hc0pTT04iLCJ0aGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29tYmluYXRvcnNKU09OIiwiY29uc3RydWN0b3JzSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwidHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJSdWxlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIkF4aW9tIiwiTGVtbWEiLCJUaGVvcmVtIiwiVmFyaWFibGUiLCJDb25qZWN0dXJlIiwiQ29tYmluYXRvciIsIkNvbnN0cnVjdG9yIiwiTWV0YXZhcmlhYmxlIiwiZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQiLCJmaWxlIiwiZ2V0RmlsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFzQnFCQTs7OzJEQXBCSjs0REFDQzs0REFDQTs4REFDRTsrREFDQztpRUFDRTtpRUFDQTtrRUFDQzttRUFDQztxQkFFSjtvQkFDTTt3QkFDTztzQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFNQyxZQUFZO0lBQ2hCQywyQkFBaUI7Q0FDbEI7QUFFYyxJQUFBLEFBQU1GLDRCQUFELEFBQUw7YUFBTUEsWUFDUEcsY0FBYyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxX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