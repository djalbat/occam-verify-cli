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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter;
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables) {
        _class_call_check(this, FileContext);
        this.releaseContext = releaseContext;
        this.filePath = filePath;
        this.lineIndex = lineIndex;
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
        this.typePrefixes = typePrefixes;
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
            key: "getLineIndex",
            value: function getLineIndex() {
                return this.lineIndex;
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
            key: "getStepsOrSubproofs",
            value: function getStepsOrSubproofs() {
                var stepsOrSubproofs = [];
                return stepsOrSubproofs;
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
                    var metatheoremLabel = metatheorem.getLabel();
                    labels.push(metatheoremLabel);
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
            key: "getTypePrefixes",
            value: function getTypePrefixes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var typePrefixes = [];
                push(typePrefixes, this.typePrefixes);
                if (includeRelease) {
                    var releaseContextTypePrefixes = this.releaseContext.getTypePrefixes();
                    push(typePrefixes, releaseContextTypePrefixes);
                }
                return typePrefixes;
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
            key: "getFileContext",
            value: function getFileContext() {
                var fileContext = this; ///
                return fileContext;
            }
        },
        {
            key: "getTypePrefix",
            value: function getTypePrefix() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var typePrefix = null;
                if (typePrefix === null) {
                    var typePrefixesLength = this.typePrefixes.length;
                    if (typePrefixesLength === 1) {
                        var firstTypePrefix = first(this.typePrefixes);
                        typePrefix = firstTypePrefix; ///
                    }
                }
                if (typePrefix === null) {
                    if (includeRelease) {
                        typePrefix = this.releaseContext.getTypePrefix();
                    }
                }
                return typePrefix;
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
            key: "findLabelByReference",
            value: function findLabelByReference(reference, context) {
                var labels = this.getLabels(), label = labels.find(function(label) {
                    var metavariableUnifies = label.unifyReference(reference, context);
                    if (metavariableUnifies) {
                        return true;
                    }
                }) || null;
                return label;
            }
        },
        {
            key: "findMetaLemmaByReference",
            value: function findMetaLemmaByReference(reference) {
                var metaLemmas = this.getMetaLemmas(), metaLemma = metaLemmas.find(function(metaLemma) {
                    var referenceMatches = metaLemma.matchReference(reference);
                    if (referenceMatches) {
                        return true;
                    }
                }) || null;
                return metaLemma;
            }
        },
        {
            key: "findMetatheoremByReference",
            value: function findMetatheoremByReference(reference) {
                var metatheorems = this.getMetatheorems(), metatheorem = metatheorems.find(function(metatheorem) {
                    var referenceMatches = metatheorem.matchReference(reference);
                    if (referenceMatches) {
                        return true;
                    }
                }) || null;
                return metatheorem;
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
                var procedures = this.getProcedures(), name = reference.getName(), procedure = procedures.find(function(procedure) {
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
                    var context = _this, metaLemmaMetaTheorem = metaLemma, metaLemmaMetatheoremUnifies = reference.unifyMetaLemmaMetatheorem(metaLemmaMetaTheorem, context);
                    if (metaLemmaMetatheoremUnifies) {
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
                    var context = _this, metaLemmaMetaTheorem = metatheorem, metaLemmaMetatheoremUnifies = reference.unifyMetaLemmaMetatheorem(metaLemmaMetaTheorem, context);
                    if (metaLemmaMetatheoremUnifies) {
                        return true;
                    }
                });
                return metatheorems;
            }
        },
        {
            key: "findMetaLemmaMetatheoremByReference",
            value: function findMetaLemmaMetatheoremByReference(reference) {
                var metaLemma = this.findMetaLemmaByReference(reference), metatheorem = this.findMetatheoremByReference(reference), metaLemmaMetatheorem = metaLemma || metatheorem; ///
                return metaLemmaMetatheorem;
            }
        },
        {
            key: "findMetaLemmaMetatheoremsByReference",
            value: function findMetaLemmaMetatheoremsByReference(reference) {
                var metaLemmas = this.findMetaLemmasByReference(reference), metatheorems = this.findMetatheoremsByReference(reference), metaLemmaMetatheorems = _to_consumable_array(metaLemmas).concat(_to_consumable_array(metatheorems));
                return metaLemmaMetatheorems;
            }
        },
        {
            key: "findAxiomLemmaTheoremOrConjectureByReference",
            value: function findAxiomLemmaTheoremOrConjectureByReference(reference) {
                var axiom = this.findAxiomByReference(reference), lemma = this.findLemmaByReference(reference), theorem = this.findTheoremByReference(reference), conjecture = this.findConjectureByReference(reference), axiomLemmaTheoremOrConjecture = axiom || lemma || theorem || conjecture;
                return axiomLemmaTheoremOrConjecture;
            }
        },
        {
            key: "findMetavariable",
            value: function findMetavariable(metavariable, generalContext, specificContext) {
                var specificMetavariable = metavariable, metavariables = this.getMetavariables();
                metavariable = metavariables.find(function(metavariable) {
                    var generalMetavariable = metavariable; ///
                    metavariable = specificMetavariable; ///
                    var metavariableUnifies = generalMetavariable.unifyMetavariable(metavariable, generalContext, specificContext);
                    if (metavariableUnifies) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types = this.getTypes();
                types = _to_consumable_array(types).concat([
                    _type.objectType
                ]);
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
            key: "findTypePrefixByTypePrefixName",
            value: function findTypePrefixByTypePrefixName(typePrefixName) {
                var typePrefixes = this.getTypePrefixes(), typePrefix = typePrefixes.find(function(typePrefix) {
                    var typePrefixNameMatches = typePrefix.matchTypePrefixName(typePrefixName);
                    if (typePrefixNameMatches) {
                        return true;
                    }
                }) || null;
                return typePrefix;
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
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                var variables = this.getVariables(), variable = variables.find(function(variable) {
                    var variableIdentifierMatches = variable.matchVariableIdentifier(variableIdentifier);
                    if (variableIdentifierMatches) {
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
            key: "findLabelByMetavariable",
            value: function findLabelByMetavariable(metavariable) {
                var labels = this.getLabels(), label = labels.find(function(label) {
                    var metavariableEqualToLabelMetavariable = label.isMetavariableEqualTo(metavariable);
                    if (metavariableEqualToLabelMetavariable) {
                        return true;
                    }
                }) || null;
                return label;
            }
        },
        {
            key: "findJudgementByMetavariable",
            value: function findJudgementByMetavariable(metavariable) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementSimple = judgement.isSimple();
                    if (judgementSimple) {
                        var judgementMetavariable = judgement.getMetavariable(), judgementMetavariableEqualToMetavariable = judgementMetavariable.isEqualTo(metavariable);
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
            key: "isMetavariablePresent",
            value: function isMetavariablePresent(metavariable, generalContext, specificContext) {
                metavariable = this.findMetavariable(metavariable, generalContext, specificContext); ///
                var metavariablePresent = metavariable !== null;
                return metavariablePresent;
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
            key: "isTypePrefixPresentByTypePrefixName",
            value: function isTypePrefixPresentByTypePrefixName(typePrefixName) {
                var typePrefix = this.findTypePrefixByTypePrefixName(typePrefixName), typePrefixPresent = typePrefix !== null;
                return typePrefixPresent;
            }
        },
        {
            key: "isVariablePresentByVariableIdentifier",
            value: function isVariablePresentByVariableIdentifier(variableIdentifier) {
                var variable = this.findVariableByVariableIdentifier(variableIdentifier), variablePresent = variable !== null;
                return variablePresent;
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
            key: "isLabelPresentByMetavariable",
            value: function isLabelPresentByMetavariable(metavariable) {
                var label = this.findLabelByMetavariable(metavariable), labelPresent = label !== null;
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
            key: "isLabelPresentByReference",
            value: function isLabelPresentByReference(reference) {
                var _this = this;
                var labels = this.getLabels(), labelPresent = labels.some(function(label) {
                    var context = _this, substitutions = _substitutions.default.fromNothing(), labelUnifies = reference.unifyLabel(label, substitutions, context);
                    if (labelUnifies) {
                        return true;
                    }
                });
                return labelPresent;
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
            key: "isMetavariablePresentByReference",
            value: function isMetavariablePresentByReference(reference) {
                var _this = this;
                var metavariables = this.getMetavariables(), metavariablePresent = metavariables.some(function(metavariable) {
                    var context = _this, metavariableUnifies = reference.unifyMetavariable(metavariable, context);
                    if (metavariableUnifies) {
                        return true;
                    }
                });
                return metavariablePresent;
            }
        },
        {
            key: "isMetaLemmaMetatheoremPresentByReference",
            value: function isMetaLemmaMetatheoremPresentByReference(reference) {
                var metaLemmaMetatheorem = this.findMetaLemmaMetatheoremByReference(reference), metaLemmaMetatheoremPresent = metaLemmaMetatheorem !== null;
                return metaLemmaMetatheoremPresent;
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
            key: "findFile",
            value: function findFile(filePath) {
                return this.releaseContext.findFile(filePath);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.releaseContext.trace(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.releaseContext.debug(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.releaseContext.info(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.releaseContext.warning(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.releaseContext.error(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                this.prepare();
                if (this.node === null) {
                    this.warning("Unable to verify the '".concat(this.filePath, "' file because it cannot be parsed."));
                } else {
                    this.debug("Verifying the '".concat(this.filePath, "' file..."));
                    var fileContext = this, verifiesAtTopLevel = _topLevel.default.verify(this.node, fileContext);
                    if (verifiesAtTopLevel) {
                        verifies = true;
                    } else {
                        this.clear();
                    }
                    if (verifies) {
                        this.info("...verified the '".concat(this.filePath, "' file."));
                    }
                }
                return verifies;
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
                this.typePrefixes = [];
                this.constructors = [];
                this.metatheorems = [];
                this.metavariables = [];
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                this.lineIndex = null;
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
                this.typePrefixes = (0, _json.typePrefixesFromJSON)(json, fileContext);
                this.constructors = (0, _json.constructorsFromJSON)(json, fileContext);
                this.metatheorems = (0, _json.metatheoremsFromJSON)(json, fileContext);
                this.metavariables = (0, _json.metavariablesFromJSON)(json, fileContext);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typesJSON = (0, _json.typesToTypesJSON)(this.types), rulesJSON = (0, _json.rulesToRulesJSON)(this.rules), axiomsJSON = (0, _json.axiomsToAxiomsJSON)(this.axioms), theoremsJSON = (0, _json.theoremsToTheoremsJSON)(this.theorems), variablesJSON = (0, _json.variablesToVariablesJSON)(this.variables), conjecturesJSON = (0, _json.conjecturesToConjecturesJSON)(this.conjectures), combinatorsJSON = (0, _json.combinatorsToCombinatorsJSON)(this.combinators), typePrefixesJSON = (0, _json.typePrefixesToTypePrefixesJSON)(this.typePrefixes), constructorsJSON = (0, _json.constructorsToConstructorsJSON)(this.constructors), metatheoremsJSON = (0, _json.metatheoremsToMetatheoremsJSON)(this.metatheorems), metavariablesJSON = (0, _json.metavariablesToMetavariablesJSON)(this.metavariables), filePath = this.filePath, types = typesJSON, rules = rulesJSON, axioms = axiomsJSON, theorems = theoremsJSON, variables = variablesJSON, conjectures = conjecturesJSON, combinators = combinatorsJSON, typePrefixes = typePrefixesJSON, constructors = constructorsJSON, metatheorems = metatheoremsJSON, metavariables = metavariablesJSON, json = {
                    filePath: filePath,
                    types: types,
                    rules: rules,
                    axioms: axioms,
                    theorems: theorems,
                    variables: variables,
                    conjectures: conjectures,
                    combinators: combinators,
                    typePrefixes: typePrefixes,
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
                var filePath = file.getPath(), lineIndex = null, tokens = null, node = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], typePrefixes = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);
                return fileContext;
            }
        },
        {
            key: "fromFilePathAndJSON",
            value: function fromFilePathAndJSON(filePath, json, releaseContext) {
                var lineIndex = null, tokens = null, node = null, types = null, rules = null, axioms = null, lemmas = null, theorems = null, variables = null, metaLemmas = null, conjectures = null, combinators = null, typePrefixes = null, constructors = null, metatheorems = null, metavariables = null, fileContext = new FileContext(releaseContext, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);
                fileContext.initialise(json);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();
function lineIndexFromNodeAndTokens(node, tokens, lineIndex) {
    if (node !== null) {
        lineIndex = 0;
        var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);
        tokens.some(function(token, tokenIndex) {
            var tokenEndOfLineToken = token.isEndOfLineToken();
            if (tokenEndOfLineToken) {
                lineIndex += 1;
            }
            if (tokenIndex === firstSignificantTokenIndex) {
                return true;
            }
        });
    }
    return lineIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXF1aXZhbGVuY2VzIGZyb20gXCIuLi9lcXVpdmFsZW5jZXNcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgdG9wTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvdG9wTGV2ZWxcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi9kb20vdHlwZVwiO1xuaW1wb3J0IHsgbm9kZUFzVG9rZW5zLCBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcsIHRva2Vuc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0eXBlc1RvVHlwZXNKU09OLFxuICAgICAgICAgcnVsZXNUb1J1bGVzSlNPTixcbiAgICAgICAgIHRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICB2YXJpYWJsZXNGcm9tSlNPTixcbiAgICAgICAgIGxlbW1hc0Zyb21Ob3RoaW5nLFxuICAgICAgICAgYXhpb21zVG9BeGlvbXNKU09OLFxuICAgICAgICAgY29uamVjdHVyZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzRnJvbUpTT04sXG4gICAgICAgICB0eXBlUHJlZml4ZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBtZXRhTGVtbWFzRnJvbU5vdGhpbmcsXG4gICAgICAgICB0aGVvcmVtc1RvVGhlb3JlbXNKU09OLFxuICAgICAgICAgdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OLFxuICAgICAgICAgY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04sXG4gICAgICAgICBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4LCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRMaW5lSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZUluZGV4O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExleGVyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldE1ldGFUeXBlcygpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YVR5cGVzKCk7IH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSBbXTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN0ZXBzT3JTdWJwcm9vZnMoKSB7XG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IFtdO1xuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlTGFiZWxzID0gY29uamVjdHVyZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tZXRhdGhlb3JlbXMuZm9yRWFjaCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF0aGVvcmVtTGFiZWwgPSBtZXRhdGhlb3JlbS5nZXRMYWJlbCgpO1xuXG4gICAgICBsYWJlbHMucHVzaChtZXRhdGhlb3JlbUxhYmVsKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFR5cGVzKCk7XG5cbiAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHB1c2gocnVsZXMsIHRoaXMucnVsZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRSdWxlcygpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICBwdXNoKGF4aW9tcywgdGhpcy5heGlvbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKCk7XG5cbiAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobGVtbWFzLCB0aGlzLmxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZW1tYXMoKTtcblxuICAgICAgcHVzaChsZW1tYXMsIHJlbGVhc2VDb250ZXh0TGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2godGhlb3JlbXMsIHRoaXMudGhlb3JlbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcygpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcygpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobWV0YUxlbW1hcywgdGhpcy5tZXRhTGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhTGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICBwdXNoKGNvbmplY3R1cmVzLCB0aGlzLmNvbmplY3R1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICBwdXNoKHR5cGVQcmVmaXhlcywgdGhpcy50eXBlUHJlZml4ZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKCk7XG5cbiAgICAgIHB1c2godHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaChtZXRhdGhlb3JlbXMsIHRoaXMubWV0YXRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcygpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeChpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgICBpZiAodHlwZVByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZVByZWZpeGVzTGVuZ3RoID0gdGhpcy50eXBlUHJlZml4ZXMubGVuZ3RoO1xuXG4gICAgICBpZiAodHlwZVByZWZpeGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHRoaXMudHlwZVByZWZpeGVzKTtcblxuICAgICAgICB0eXBlUHJlZml4ID0gZmlyc3RUeXBlUHJlZml4OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICAgIHR5cGVQcmVmaXggPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZE1ldGFMZW1tYShtZXRhTGVtbWEpIHtcbiAgICB0aGlzLm1ldGFMZW1tYXMucHVzaChtZXRhTGVtbWEpO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGFkZE1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtKSB7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMucHVzaChtZXRhdGhlb3JlbSk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBsYWJlbC51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBtZXRhTGVtbWFzLmZpbmQoKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlcyA9IG1ldGFMZW1tYS5tYXRjaFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYTtcbiAgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbXMuZmluZCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZU1hdGNoZXMgPSBtZXRhdGhlb3JlbS5tYXRjaFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBydWxlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gYXhpb20ubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGVtbWEubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhlb3JlbS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IHRoaXMuZ2V0UHJvY2VkdXJlcygpLFxuICAgICAgICAgIG5hbWUgPSByZWZlcmVuY2UuZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZXMuZmluZCgocHJvY2VkdXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IHByb2NlZHVyZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSB0aGlzLmdldENvbmplY3R1cmVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVzLmZpbmQoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gY29uamVjdHVyZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKTtcblxuICAgIGZpbHRlcihtZXRhTGVtbWFzLCAobWV0YUxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhVGhlb3JlbSA9IG1ldGFMZW1tYSwgLy8vXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhVGhlb3JlbSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSB0aGlzLmdldE1ldGF0aGVvcmVtcygpO1xuXG4gICAgZmlsdGVyKG1ldGF0aGVvcmVtcywgKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhVGhlb3JlbSA9IG1ldGF0aGVvcmVtLCAvLy9cbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGFUaGVvcmVtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzLmZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gdGhpcy5maW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgIHJldHVybiBtZXRhTGVtbWFNZXRhdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gdGhpcy5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXMgPSBbXG4gICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFNZXRhdGhlb3JlbXM7XG4gIH1cblxuICBmaW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBheGlvbSA9IHRoaXMuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBsZW1tYSA9IHRoaXMuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhpcy5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgY29uamVjdHVyZSA9IHRoaXMuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSk7XG5cbiAgICByZXR1cm4gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZTsgIC8vL1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIHR5cGVzID0gW1xuICAgICAgLi4udHlwZXMsXG4gICAgICBvYmplY3RUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhlcy5maW5kKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4TmFtZU1hdGNoZXMgPSB0eXBlUHJlZml4Lm1hdGNoVHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZVByZWZpeE5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFUeXBlTmFtZU1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YVR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZUlkZW50aWZpZXJNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUVxdWFsVG9MYWJlbE1ldGF2YXJpYWJsZSA9IGxhYmVsLmlzTWV0YXZhcmlhYmxlRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlRXF1YWxUb0xhYmVsTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRTaW1wbGUgPSBqdWRnZW1lbnQuaXNTaW1wbGUoKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudFNpbXBsZSkge1xuICAgICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGUgPSBqdWRnZW1lbnQuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgICAgICAgIGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBqdWRnZW1lbnRNZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXggPSB0aGlzLmZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSksXG4gICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSAodHlwZVByZWZpeCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeFByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gbGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICAgICAgbGFiZWxVbmlmaWVzID0gcmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZSA9IHRoaXMuZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IChwcm9jZWR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IG1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gcmVmZXJlbmNlLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gdGhpcy5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCA9IChtZXRhTGVtbWFNZXRhdGhlb3JlbSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50O1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZUFzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIG5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IG5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgdG9rZW5zQXNTdHJpbmcodG9rZW5zKSB7IHJldHVybiB0b2tlbnNBc1N0cmluZyh0b2tlbnMpOyB9XG5cbiAgZmluZEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZmluZEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucywgdGhpcy5saW5lSW5kZXgpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoLCB0aGlzLmxpbmVJbmRleCk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucywgdGhpcy5saW5lSW5kZXgpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5pbmZvKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCwgdGhpcy5saW5lSW5kZXgpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIHRoaXMucHJlcGFyZSgpO1xuXG4gICAgaWYgKHRoaXMubm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuaW5nKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZSBiZWNhdXNlIGl0IGNhbm5vdCBiZSBwYXJzZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuLi5gKTtcblxuICAgICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVzQXRUb3BMZXZlbCA9IHRvcExldmVsVmVyaWZpZXIudmVyaWZ5KHRoaXMubm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAodmVyaWZpZXNBdFRvcExldmVsKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudHlwZXMgPSBbXTtcbiAgICB0aGlzLnJ1bGVzID0gW107XG4gICAgdGhpcy5heGlvbXMgPSBbXTtcbiAgICB0aGlzLmxlbW1hcyA9IFtdO1xuICAgIHRoaXMudGhlb3JlbXMgPSBbXTtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IFtdO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IFtdO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBbXTtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gW107XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSBbXTtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IFtdO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gW107XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gW107XG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnRva2VucyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbmRGaWxlKHRoaXMuZmlsZVBhdGgpLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy50eXBlcyA9IFtdO1xuXG4gICAgdHlwZXNGcm9tSlNPTihqc29uLCB0aGlzLnR5cGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnJ1bGVzID0gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzRnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzVG9UeXBlc0pTT04odGhpcy50eXBlcyksXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXNUb1J1bGVzSlNPTih0aGlzLnJ1bGVzKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zVG9BeGlvbXNKU09OKHRoaXMuYXhpb21zKSxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoaXMudGhlb3JlbXMpLFxuICAgICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odGhpcy52YXJpYWJsZXMpLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04odGhpcy5jb25qZWN0dXJlcyksXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTih0aGlzLmNvbWJpbmF0b3JzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHRoaXMudHlwZVByZWZpeGVzKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKHRoaXMuY29uc3RydWN0b3JzKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKHRoaXMubWV0YXRoZW9yZW1zKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKHRoaXMubWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0pTT04sICAvLy9cbiAgICAgICAgICBheGlvbXMgPSBheGlvbXNKU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICB0eXBlUHJlZml4ZXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGhBbmRKU09OKGZpbGVQYXRoLCBqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgbGVtbWFzID0gbnVsbCxcbiAgICAgICAgICB0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gbnVsbCxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IG51bGwsXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBudWxsLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IG51bGwsXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gbnVsbCxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBudWxsLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4LCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucywgbGluZUluZGV4KSB7XG4gIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgbGluZUluZGV4ID0gMDtcblxuICAgIGNvbnN0IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4ID0gbm9kZS5nZXRGaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCh0b2tlbnMpO1xuXG4gICAgdG9rZW5zLnNvbWUoKHRva2VuLCB0b2tlbkluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0b2tlbkVuZE9mTGluZVRva2VuID0gdG9rZW4uaXNFbmRPZkxpbmVUb2tlbigpO1xuXG4gICAgICBpZiAodG9rZW5FbmRPZkxpbmVUb2tlbikge1xuICAgICAgICBsaW5lSW5kZXggKz0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRva2VuSW5kZXggPT09IGZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxpbmVJbmRleDtcbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiZmlsdGVyIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsInRva2VucyIsIm5vZGUiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJtZXRhTGVtbWFzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsInR5cGVQcmVmaXhlcyIsImNvbnN0cnVjdG9ycyIsIm1ldGF0aGVvcmVtcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0TGluZUluZGV4IiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0TWV0YVR5cGVzIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJFcXVpdmFsZW5jZXMiLCJmcm9tTm90aGluZyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwc09yU3VicHJvb2ZzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJheGlvbSIsImF4aW9tTGFiZWxzIiwibGVtbWEiLCJsZW1tYUxhYmVscyIsInRoZW9yZW0iLCJ0aGVvcmVtTGFiZWxzIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVMYWJlbHMiLCJtZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtTGFiZWwiLCJnZXRMYWJlbCIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwicmVsZWFzZUNvbnRleHRQcm9jZWR1cmVzIiwiZ2V0TWV0YUxlbW1hcyIsInJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldFR5cGVQcmVmaXhlcyIsInJlbGVhc2VDb250ZXh0VHlwZVByZWZpeGVzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZ2V0VHlwZVByZWZpeCIsInR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4ZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFR5cGVQcmVmaXgiLCJhZGRUeXBlIiwidHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwiYWRkVGhlb3JlbSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJhZGRNZXRhTGVtbWEiLCJtZXRhTGVtbWEiLCJhZGRDb25qZWN0dXJlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiYWRkTWV0YXRoZW9yZW0iLCJhZGRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTGFiZWxCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJsYWJlbCIsImZpbmQiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2VNYXRjaGVzIiwibWF0Y2hSZWZlcmVuY2UiLCJmaW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJuYW1lIiwiZ2V0TmFtZSIsInByb2NlZHVyZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hOYW1lIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhVGhlb3JlbSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyIsInVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YXRoZW9yZW1zIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImZpbmRNZXRhdmFyaWFibGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJvYmplY3RUeXBlIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlUHJlZml4TmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVzIiwibWV0YVR5cGUiLCJtZXRhVHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhVHlwZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllck1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlRXF1YWxUb0xhYmVsTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50IiwianVkZ2VtZW50U2ltcGxlIiwiaXNTaW1wbGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNFcXVhbFRvIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwic29tZSIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwibGFiZWxVbmlmaWVzIiwidW5pZnlMYWJlbCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlIiwicHJvY2VkdXJlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJub2Rlc0FzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJmaW5kRmlsZSIsInRyYWNlIiwibWVzc2FnZSIsImxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJwcmVwYXJlIiwidmVyaWZpZXNBdFRvcExldmVsIiwidG9wTGV2ZWxWZXJpZmllciIsImNsZWFyIiwiZmlsZSIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiaW5pdGlhbGlzZSIsImpzb24iLCJ0eXBlc0Zyb21KU09OIiwicnVsZXNGcm9tSlNPTiIsImF4aW9tc0Zyb21KU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJ0aGVvcmVtc0Zyb21KU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsInR5cGVQcmVmaXhlc0Zyb21KU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsInRvSlNPTiIsInR5cGVzSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJydWxlc0pTT04iLCJydWxlc1RvUnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJ0eXBlUHJlZml4ZXNKU09OIiwidHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwiZnJvbUZpbGUiLCJnZXRQYXRoIiwiZnJvbUZpbGVQYXRoQW5kSlNPTiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbiIsInRva2VuSW5kZXgiLCJ0b2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFxQ3FCQTs7O3lCQW5DVTttRUFFTjtvRUFDQzsrREFDRztvQkFFRjtzQkFDK0M7b0JBd0J6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBUUMsT0FBd0JDLHlCQUFjLENBQXRDRCxNQUFNRSxRQUFrQkQseUJBQWMsQ0FBaENDLE9BQU9DLFNBQVdGLHlCQUFjLENBQXpCRTtBQUVOLElBQUEsQUFBTUosNEJBQU47YUFBTUEsWUFDUEssY0FBYyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRDVMdEI7UUFFakIsSUFBSSxDQUFDSyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJ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