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
var push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter;
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
            key: "getTypePrefix",
            value: function getTypePrefix() {
                return this.releaseContext.getTypePrefix();
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
                if (includeRelease) {
                    var releaseContextLabels = this.releaseContext.getLabels();
                    push(labels, releaseContextLabels);
                } else {
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
                }
                return labels;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, includeDependencies = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var types = includeRelease ? this.releaseContext.getTypes(includeDependencies) : this.types;
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = includeRelease ? this.releaseContext.getRules() : this.rules;
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = includeRelease ? this.releaseContext.getAxioms() : this.axioms;
                return axioms;
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = includeRelease ? this.releaseContext.getLemmas() : this.lemmas;
                return lemmas;
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems = includeRelease ? this.releaseContext.getTheorems() : this.theorems;
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
                var procedures = includeRelease ? this.releaseContext.getProcedures() : null; ///
                return procedures;
            }
        },
        {
            key: "getMetaLemmas",
            value: function getMetaLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metaLemmas = includeRelease ? this.releaseContext.getMetaLemmas() : this.metaLemmas;
                return metaLemmas;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures = includeRelease ? this.releaseContext.getConjectures() : this.conjectures;
                return conjectures;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = includeRelease ? this.releaseContext.getCombinators() : this.combinators;
                return combinators;
            }
        },
        {
            key: "getTypePrefixes",
            value: function getTypePrefixes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var typePrefixes = includeRelease ? this.releaseContext.getTypePrefixes() : this.typePrefixes;
                return typePrefixes;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = includeRelease ? this.releaseContext.getConstructors() : this.constructors;
                return constructors;
            }
        },
        {
            key: "getMetatheorems",
            value: function getMetatheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metatheorems = includeRelease ? this.releaseContext.getMetatheorems() : this.metatheorems;
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
            key: "addTypePrefix",
            value: function addTypePrefix(typePrefix) {
                this.typePrefixes.push(typePrefix);
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
            key: "findProcedureByName",
            value: function findProcedureByName(name) {
                var procedures = this.getProcedures(), procedure = procedures.find(function(procedure) {
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
                var includeRelease = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, includeDependencies = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                var types = this.getTypes(includeRelease, includeDependencies);
                types = _to_consumable_array(types).concat([
                    _type.baseType
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
            key: "findTypeByNominalTypeName",
            value: function findTypeByNominalTypeName(nominalTypeName) {
                var types = this.getTypes();
                types = _to_consumable_array(types).concat([
                    _type.baseType
                ]);
                var type = types.find(function(type) {
                    var typeNameMatches = type.matchNominalTypeName(nominalTypeName);
                    if (typeNameMatches) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "findTypeByPrefixedTypeName",
            value: function findTypeByPrefixedTypeName(prefixedTypeName) {
                var types = this.getTypes();
                types = _to_consumable_array(types).concat([
                    _type.baseType
                ]);
                var type = types.find(function(type) {
                    var typeNameMatches = type.matchPrefixedTypeName(prefixedTypeName);
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
                var includeRelease = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, includeDependencies = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                var type = this.findTypeByTypeName(typeName, includeRelease, includeDependencies), typePresent = type !== null;
                return typePresent;
            }
        },
        {
            key: "isTypePresentByNominalTypeName",
            value: function isTypePresentByNominalTypeName(nominalTypeName) {
                var type = this.findTypeByNominalTypeName(nominalTypeName), typePresent = type !== null;
                return typePresent;
            }
        },
        {
            key: "isTypePresentByPrefixedTypeName",
            value: function isTypePresentByPrefixedTypeName(prefixedTypeName) {
                var type = this.findTypeByPrefixedTypeName(prefixedTypeName), typePresent = type !== null;
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
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                var procedure = this.findProcedureByName(name), procedurePresent = procedure !== null;
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
            key: "fromFilePath",
            value: function fromFilePath(filePath, releaseContext) {
                var lineIndex = null, tokens = null, node = null, types = null, rules = null, axioms = null, lemmas = null, theorems = null, variables = null, metaLemmas = null, conjectures = null, combinators = null, typePrefixes = null, constructors = null, metatheorems = null, metavariables = null, fileContext = new FileContext(releaseContext, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXF1aXZhbGVuY2VzIGZyb20gXCIuLi9lcXVpdmFsZW5jZXNcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgdG9wTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvdG9wTGV2ZWxcIjtcblxuaW1wb3J0IHsgYmFzZVR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVBc1Rva2Vucywgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nLCB0b2tlbnNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB0eXBlc0Zyb21KU09OLFxuICAgICAgICAgcnVsZXNGcm9tSlNPTixcbiAgICAgICAgIGF4aW9tc0Zyb21KU09OLFxuICAgICAgICAgdHlwZXNUb1R5cGVzSlNPTixcbiAgICAgICAgIHJ1bGVzVG9SdWxlc0pTT04sXG4gICAgICAgICB0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBsZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIGF4aW9tc1RvQXhpb21zSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzRnJvbUpTT04sXG4gICAgICAgICBjb21iaW5hdG9yc0Zyb21KU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzRnJvbUpTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNGcm9tSlNPTixcbiAgICAgICAgIG1ldGF0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc0Zyb21KU09OLFxuICAgICAgICAgbWV0YUxlbW1hc0Zyb21Ob3RoaW5nLFxuICAgICAgICAgdGhlb3JlbXNUb1RoZW9yZW1zSlNPTixcbiAgICAgICAgIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTixcbiAgICAgICAgIHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04sXG4gICAgICAgICBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4LCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRMaW5lSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZUluZGV4O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExleGVyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldE1ldGFUeXBlcygpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YVR5cGVzKCk7IH1cblxuICBnZXRUeXBlUHJlZml4KCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlUHJlZml4KCk7IH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSBbXTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN0ZXBzT3JTdWJwcm9vZnMoKSB7XG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IFtdO1xuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgICAgY29uc3QgbGVtbWFMYWJlbHMgPSBsZW1tYS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBjb25qZWN0dXJlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1ldGF0aGVvcmVtcy5mb3JFYWNoKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUxhYmVsID0gbWV0YXRoZW9yZW0uZ2V0TGFiZWwoKTtcblxuICAgICAgICBsYWJlbHMucHVzaChtZXRhdGhlb3JlbUxhYmVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcykgOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXM7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRSdWxlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bGVzO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9tcztcblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZW1tYXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVtbWFzO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlb3JlbXM7XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YUxlbW1hcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YUxlbW1hcztcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25qZWN0dXJlcztcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tYmluYXRvcnM7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlUHJlZml4ZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZVByZWZpeGVzO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcnM7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGF0aGVvcmVtcztcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7XG4gICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gIH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHtcbiAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICB9XG5cbiAgYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSkge1xuICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRUeXBlUHJlZml4KHR5cGVQcmVmaXgpIHtcbiAgICB0aGlzLnR5cGVQcmVmaXhlcy5wdXNoKHR5cGVQcmVmaXgpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGFkZE1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtKSB7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMucHVzaChtZXRhdGhlb3JlbSk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBsYWJlbC51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBtZXRhTGVtbWFzLmZpbmQoKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlcyA9IG1ldGFMZW1tYS5tYXRjaFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYTtcbiAgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbXMuZmluZCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZU1hdGNoZXMgPSBtZXRhdGhlb3JlbS5tYXRjaFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBydWxlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gYXhpb20ubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGVtbWEubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhlb3JlbS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gdGhpcy5nZXRQcm9jZWR1cmVzKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlcy5maW5kKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gcHJvY2VkdXJlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBjb25qZWN0dXJlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgZmlsdGVyKG1ldGFMZW1tYXMsIChtZXRhTGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGFUaGVvcmVtID0gbWV0YUxlbW1hLCAvLy9cbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGFUaGVvcmVtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCk7XG5cbiAgICBmaWx0ZXIobWV0YXRoZW9yZW1zLCAobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGFUaGVvcmVtID0gbWV0YXRoZW9yZW0sIC8vL1xuICAgICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzID0gcmVmZXJlbmNlLnVuaWZ5TWV0YUxlbW1hTWV0YXRoZW9yZW0obWV0YUxlbW1hTWV0YVRoZW9yZW0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YUxlbW1hTWV0YXRoZW9yZW1VbmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYSA9IHRoaXMuZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSB0aGlzLmZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW0gPSAobWV0YUxlbW1hIHx8IG1ldGF0aGVvcmVtKTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtO1xuICB9XG5cbiAgZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSB0aGlzLmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtcyA9IFtcbiAgICAgICAgICAgIC4uLm1ldGFMZW1tYXMsXG4gICAgICAgICAgICAuLi5tZXRhdGhlb3JlbXNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tID0gdGhpcy5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGxlbW1hID0gdGhpcy5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGlzLmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gdGhpcy5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUgPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3Qgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTsgLy8vXG5cbiAgICAgIG1ldGF2YXJpYWJsZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICB0eXBlcyA9IFtcbiAgICAgIC4uLnR5cGVzLFxuICAgICAgYmFzZVR5cGVcbiAgICBdO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcyA9IFtcbiAgICAgIC4uLnR5cGVzLFxuICAgICAgYmFzZVR5cGVcbiAgICBdO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9IHR5cGUubWF0Y2hOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSB0eXBlLm1hdGNoUHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSB0aGlzLmdldE1ldGFUeXBlcygpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVzLmZpbmQoKG1ldGFUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhVHlwZU5hbWVNYXRjaGVzID0gbWV0YVR5cGUubWF0Y2hNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGFUeXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhlcy5maW5kKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4TmFtZU1hdGNoZXMgPSB0eXBlUHJlZml4Lm1hdGNoVHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZVByZWZpeE5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllck1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaFZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVJZGVudGlmaWVyTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVFcXVhbFRvTGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5pc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZUVxdWFsVG9MYWJlbE1ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50U2ltcGxlID0ganVkZ2VtZW50LmlzU2ltcGxlKCk7XG5cbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRTaW1wbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICAgICAgICBqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50TWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7ICAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeCA9IHRoaXMuZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9ICh0eXBlUHJlZml4ICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4UHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICAgICAgICBsYWJlbFVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmUgPSB0aGlzLmZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IChwcm9jZWR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IG1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gcmVmZXJlbmNlLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gdGhpcy5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCA9IChtZXRhTGVtbWFNZXRhdGhlb3JlbSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50O1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZUFzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIG5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IG5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgdG9rZW5zQXNTdHJpbmcodG9rZW5zKSB7IHJldHVybiB0b2tlbnNBc1N0cmluZyh0b2tlbnMpOyB9XG5cbiAgZmluZEZpbGUoZmlsZVBhdGgpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZmluZEZpbGUoZmlsZVBhdGgpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0LnRyYWNlKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucywgdGhpcy5saW5lSW5kZXgpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoLCB0aGlzLmxpbmVJbmRleCk7XG4gIH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucywgdGhpcy5saW5lSW5kZXgpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5pbmZvKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCwgdGhpcy5saW5lSW5kZXgpO1xuICB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIHRoaXMucHJlcGFyZSgpO1xuXG4gICAgaWYgKHRoaXMubm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy53YXJuaW5nKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZSBiZWNhdXNlIGl0IGNhbm5vdCBiZSBwYXJzZWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUuLi5gKTtcblxuICAgICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHZlcmlmaWVzQXRUb3BMZXZlbCA9IHRvcExldmVsVmVyaWZpZXIudmVyaWZ5KHRoaXMubm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAodmVyaWZpZXNBdFRvcExldmVsKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudHlwZXMgPSBbXTtcbiAgICB0aGlzLnJ1bGVzID0gW107XG4gICAgdGhpcy5heGlvbXMgPSBbXTtcbiAgICB0aGlzLmxlbW1hcyA9IFtdO1xuICAgIHRoaXMudGhlb3JlbXMgPSBbXTtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IFtdO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IFtdO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBbXTtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gW107XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSBbXTtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IFtdO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gW107XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gW107XG4gIH1cblxuICBwcmVwYXJlKCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbnVsbDtcblxuICAgIGlmICh0aGlzLnRva2VucyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbmRGaWxlKHRoaXMuZmlsZVBhdGgpLFxuICAgICAgICAgIGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IHRoaXMuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgIHRoaXMubm9kZSA9IHBhcnNlci5wYXJzZSh0aGlzLnRva2Vucyk7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy50eXBlcyA9IFtdO1xuXG4gICAgdHlwZXNGcm9tSlNPTihqc29uLCB0aGlzLnR5cGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnJ1bGVzID0gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzRnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzVG9UeXBlc0pTT04odGhpcy50eXBlcyksXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXNUb1J1bGVzSlNPTih0aGlzLnJ1bGVzKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zVG9BeGlvbXNKU09OKHRoaXMuYXhpb21zKSxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoaXMudGhlb3JlbXMpLFxuICAgICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odGhpcy52YXJpYWJsZXMpLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04odGhpcy5jb25qZWN0dXJlcyksXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTih0aGlzLmNvbWJpbmF0b3JzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHRoaXMudHlwZVByZWZpeGVzKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKHRoaXMuY29uc3RydWN0b3JzKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKHRoaXMubWV0YXRoZW9yZW1zKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKHRoaXMubWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0pTT04sICAvLy9cbiAgICAgICAgICBheGlvbXMgPSBheGlvbXNKU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICB0eXBlUHJlZml4ZXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGUsIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGgoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gbnVsbCxcbiAgICAgICAgICBydWxlcyA9IG51bGwsXG4gICAgICAgICAgYXhpb21zID0gbnVsbCxcbiAgICAgICAgICBsZW1tYXMgPSBudWxsLFxuICAgICAgICAgIHRoZW9yZW1zID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBudWxsLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBudWxsLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gbnVsbCxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IG51bGwsXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gbnVsbCxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBudWxsLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMsIGxpbmVJbmRleCkge1xuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGxpbmVJbmRleCA9IDA7XG5cbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICAgIHRva2Vucy5zb21lKCh0b2tlbiwgdG9rZW5JbmRleCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW5FbmRPZkxpbmVUb2tlbiA9IHRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgaWYgKHRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgbGluZUluZGV4ICs9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbkluZGV4ID09PSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsaW5lSW5kZXg7XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoIiwibGluZUluZGV4IiwidG9rZW5zIiwibm9kZSIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJsZW1tYXMiLCJ0aGVvcmVtcyIsInZhcmlhYmxlcyIsIm1ldGFMZW1tYXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwidHlwZVByZWZpeGVzIiwiY29uc3RydWN0b3JzIiwibWV0YXRoZW9yZW1zIiwibWV0YXZhcmlhYmxlcyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXRMaW5lSW5kZXgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRNZXRhVHlwZXMiLCJnZXRUeXBlUHJlZml4IiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJFcXVpdmFsZW5jZXMiLCJmcm9tTm90aGluZyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwc09yU3VicHJvb2ZzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJsZW1tYSIsImxlbW1hTGFiZWxzIiwidGhlb3JlbSIsInRoZW9yZW1MYWJlbHMiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUxhYmVscyIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1MYWJlbCIsImdldExhYmVsIiwiZ2V0VHlwZXMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwiZ2V0UnVsZXMiLCJnZXRBeGlvbXMiLCJnZXRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZ2V0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRUeXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0RmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImFkZFR5cGUiLCJ0eXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkTGVtbWEiLCJhZGRUaGVvcmVtIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsImFkZE1ldGFMZW1tYSIsIm1ldGFMZW1tYSIsImFkZENvbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImFkZE1ldGF0aGVvcmVtIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwibGFiZWwiLCJmaW5kIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlTWF0Y2hlcyIsIm1hdGNoUmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJwcm9jZWR1cmUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTmFtZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YVRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMiLCJ1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtcyIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJmaW5kTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiYmFzZVR5cGUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsIm1hdGNoTm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwibWF0Y2hQcmVmaXhlZFR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZXMiLCJtZXRhVHlwZSIsIm1ldGFUeXBlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGFUeXBlTmFtZSIsImZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlUHJlZml4TmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVJZGVudGlmaWVyIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVFcXVhbFRvTGFiZWxNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG8iLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRTaW1wbGUiLCJpc1NpbXBsZSIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJpc0VxdWFsVG8iLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwic29tZSIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwibGFiZWxVbmlmaWVzIiwidW5pZnlMYWJlbCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwibm9kZXNBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwiZmluZEZpbGUiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsInZlcmlmeSIsInZlcmlmaWVzIiwicHJlcGFyZSIsInZlcmlmaWVzQXRUb3BMZXZlbCIsInRvcExldmVsVmVyaWZpZXIiLCJjbGVhciIsImZpbGUiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImluaXRpYWxpc2UiLCJqc29uIiwidHlwZXNGcm9tSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJheGlvbXNGcm9tSlNPTiIsImxlbW1hc0Zyb21Ob3RoaW5nIiwidGhlb3JlbXNGcm9tSlNPTiIsInZhcmlhYmxlc0Zyb21KU09OIiwibWV0YUxlbW1hc0Zyb21Ob3RoaW5nIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJ0b0pTT04iLCJ0eXBlc0pTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwicnVsZXNKU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsImF4aW9tc0pTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwidHlwZVByZWZpeGVzSlNPTiIsInR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTiIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlc0pTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsImZyb21GaWxlIiwiZ2V0UGF0aCIsImZyb21GaWxlUGF0aCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbiIsInRva2VuSW5kZXgiLCJ0b2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFxQ3FCQTs7O3lCQW5DVTttRUFFTjtvRUFDQzsrREFDRztvQkFFSjtzQkFDaUQ7b0JBd0J6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBUUMsT0FBaUJDLHlCQUFjLENBQS9CRCxNQUFNRSxTQUFXRCx5QkFBYyxDQUF6QkM7QUFFQyxJQUFBLEFBQU1ILDRCQUFOO2FBQU1BLFlBQ1BJLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxhQUFhO2dDQUQ1THJCO1FBRWpCLElBQUksQ0FBQ0ksY0FBYyxHQUFHQTtRQUN0QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FB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