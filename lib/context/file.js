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
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _verify = require("../process/verify");
var _context = require("../utilities/context");
var _types = require("../types");
var _node = require("../utilities/node");
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
    function FileContext(context1, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables) {
        _class_call_check(this, FileContext);
        this.context = context1;
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
        return (0, _context.chainContext)(this);
    }
    _create_class(FileContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
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
            key: "getJudgements",
            value: function getJudgements() {
                var judgements = [];
                return judgements;
            }
        },
        {
            key: "getEquivalences",
            value: function getEquivalences() {
                var Equivalences = _elements.default.Equivalences, equivalences = Equivalences.fromNothing(context);
                return equivalences;
            }
        },
        {
            key: "getSubproofOrProofAssertions",
            value: function getSubproofOrProofAssertions() {
                var subproofOrProofAssertions = [];
                return subproofOrProofAssertions;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                if (includeRelease) {
                    var releaseContextLabels = this.context.getLabels();
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
                var types = includeRelease ? this.context.getTypes(includeDependencies) : this.types;
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = includeRelease ? this.context.getRules() : this.rules;
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = includeRelease ? this.context.getAxioms() : this.axioms;
                return axioms;
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = includeRelease ? this.context.getLemmas() : this.lemmas;
                return lemmas;
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems = includeRelease ? this.context.getTheorems() : this.theorems;
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
                var procedures = includeRelease ? this.context.getProcedures() : null; ///
                return procedures;
            }
        },
        {
            key: "getMetaLemmas",
            value: function getMetaLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metaLemmas = includeRelease ? this.context.getMetaLemmas() : this.metaLemmas;
                return metaLemmas;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures = includeRelease ? this.context.getConjectures() : this.conjectures;
                return conjectures;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = includeRelease ? this.context.getCombinators() : this.combinators;
                return combinators;
            }
        },
        {
            key: "getTypePrefixes",
            value: function getTypePrefixes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var typePrefixes = includeRelease ? this.context.getTypePrefixes() : this.typePrefixes;
                return typePrefixes;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = includeRelease ? this.context.getConstructors() : this.constructors;
                return constructors;
            }
        },
        {
            key: "getMetatheorems",
            value: function getMetatheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metatheorems = includeRelease ? this.context.getMetatheorems() : this.metatheorems;
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
            value: function findLabelByReference(reference, context1) {
                var labels = this.getLabels(), label = labels.find(function(label) {
                    var metavariableUnifies = label.unifyReference(reference, context1);
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
                    var metaLemmaComparesToReference = metaLemma.compareReference(reference);
                    if (metaLemmaComparesToReference) {
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
                    var metatheoremComparesToReference = metatheorem.compareReference(reference);
                    if (metatheoremComparesToReference) {
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
                    var ruleComparesToMetavariableName = rule.compareMetavariableName(metavariableName);
                    if (ruleComparesToMetavariableName) {
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
                    var axiomComparesToMetavariableName = axiom.compareMetavariableName(metavariableName);
                    if (axiomComparesToMetavariableName) {
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
                    var lemmaComparesToMetavariableName = lemma.compareMetavariableName(metavariableName);
                    if (lemmaComparesToMetavariableName) {
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
                    var theoremComparesToMetavariableName = theorem.compareMetavariableName(metavariableName);
                    if (theoremComparesToMetavariableName) {
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
                    var conjectureComparesToMetavariableName = conjecture.compareMetavariableName(metavariableName);
                    if (conjectureComparesToMetavariableName) {
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
                    var context1 = _this, topLevelMetaAssertion = metaLemma, topLevelMetaAssertionUnifies = reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context1);
                    if (topLevelMetaAssertionUnifies) {
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
                    var context1 = _this, topLevelMetaAssertion = metatheorem, topLevelMetaAssertionUnifies = reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context1);
                    if (topLevelMetaAssertionUnifies) {
                        return true;
                    }
                });
                return metatheorems;
            }
        },
        {
            key: "findTopLevelMetaAssertionByReference",
            value: function findTopLevelMetaAssertionByReference(reference) {
                var metaLemma = this.findMetaLemmaByReference(reference), metatheorem = this.findMetatheoremByReference(reference), topLevelMetaAssertion = metaLemma || metatheorem; ///
                return topLevelMetaAssertion;
            }
        },
        {
            key: "findTopLevelMetaAssertionsByReference",
            value: function findTopLevelMetaAssertionsByReference(reference) {
                var metaLemmas = this.findMetaLemmasByReference(reference), metatheorems = this.findMetatheoremsByReference(reference), topLevelMetaAssertions = _to_consumable_array(metaLemmas).concat(_to_consumable_array(metatheorems));
                return topLevelMetaAssertions;
            }
        },
        {
            key: "findTopLevelAssertionByReference",
            value: function findTopLevelAssertionByReference(reference) {
                var axiom = this.findAxiomByReference(reference), lemma = this.findLemmaByReference(reference), theorem = this.findTheoremByReference(reference), conjecture = this.findConjectureByReference(reference), topLevelAssertion = axiom || lemma || theorem || conjecture;
                return topLevelAssertion;
            }
        },
        {
            key: "findMetavariable",
            value: function findMetavariable(metavariable) {
                var _this = this;
                var metavariables = this.getMetavariables(), specificMetavariable = metavariable; ///
                metavariable = metavariables.find(function(metavariable) {
                    var context1 = _this, generalMetavariable = metavariable, metavariableUnifies = generalMetavariable.unifyMetavariable(specificMetavariable, context1);
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
                var baseType = (0, _types.baseTypeFromNothing)();
                types = _to_consumable_array(types).concat([
                    baseType
                ]);
                var type = types.find(function(type) {
                    var typeComparesToTypeName = type.compareTypeName(typeName);
                    if (typeComparesToTypeName) {
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
                var baseType = (0, _types.baseTypeFromNothing)();
                types = _to_consumable_array(types).concat([
                    baseType
                ]);
                var type = types.find(function(type) {
                    var typeComparesToNominalTypeName = type.compareNominalTypeName(nominalTypeName);
                    if (typeComparesToNominalTypeName) {
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
                var baseType = (0, _types.baseTypeFromNothing)();
                types = _to_consumable_array(types).concat([
                    baseType
                ]);
                var type = types.find(function(type) {
                    var typeComparesToPrefixedTypeName = type.comparePrefixedTypeName(prefixedTypeName);
                    if (typeComparesToPrefixedTypeName) {
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
                    var metaTypeComparesToMetaTypeName = metaType.compareMetaTypeName(metaTypeName);
                    if (metaTypeComparesToMetaTypeName) {
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
                    var typePrefixComparesToTypePrefixName = typePrefix.compareTypePrefixName(typePrefixName);
                    if (typePrefixComparesToTypePrefixName) {
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
                    var variableComparesToVariableIdentifier = variable.compareVariableIdentifier(variableIdentifier);
                    if (variableComparesToVariableIdentifier) {
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
                    var labelComparesToMetavariableName = label.compareMetavariableName(metavariableName);
                    if (labelComparesToMetavariableName) {
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
                    var metavariableEqualToLabelMetavariable = label.isMetavariableEqualToMetavariable(metavariable);
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
                    var judgementSingular = judgement.isSingular();
                    if (judgementSingular) {
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
                    var metavariableComparesToMetavariableName = metavariable.compareMetavariableName(metavariableName);
                    if (metavariableComparesToMetavariableName) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "isMetavariablePresent",
            value: function isMetavariablePresent(metavariable) {
                metavariable = this.findMetavariable(metavariable);
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
                    var Substitutions = _elements.default.Substitutions, context1 = _this, substitutions = Substitutions.fromNothing(context1), labelUnifies = reference.unifyLabel(label, substitutions, context1);
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
                    var context1 = _this, metavariableUnifies = reference.unifyMetavariable(metavariable, context1);
                    if (metavariableUnifies) {
                        return true;
                    }
                });
                return metavariablePresent;
            }
        },
        {
            key: "isTopLevelMetaAssertionPresentByReference",
            value: function isTopLevelMetaAssertionPresentByReference(reference) {
                var topLevelMetaAssertion = this.findTopLevelMetaAssertionByReference(reference), topLevelMetaAssertionPresent = topLevelMetaAssertion !== null;
                return topLevelMetaAssertionPresent;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var string = (0, _node.nodeAsString)(node, this.tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                var string = (0, _node.nodesAsString)(node, this.tokens);
                return string;
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.context.trace(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.context.debug(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.context.info(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.context.warning(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.context.error(message, this.filePath, this.lineIndex);
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
                    var context1 = this, fileNode = this.node; ///
                    verifies = (0, _verify.verifyFile)(fileNode, context1);
                    if (!verifies) {
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
            value: function fromFile(file, context1) {
                var filePath = file.getPath(), lineIndex = null, tokens = null, node = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], typePrefixes = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(context1, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);
                return fileContext;
            }
        },
        {
            key: "fromFilePath",
            value: function fromFilePath(filePath, context1) {
                var lineIndex = null, tokens = null, node = null, types = null, rules = null, axioms = null, lemmas = null, theorems = null, variables = null, metaLemmas = null, conjectures = null, combinators = null, typePrefixes = null, constructors = null, metatheorems = null, metavariables = null, fileContext = new FileContext(context1, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IHZlcmlmeUZpbGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy92ZXJpZnlcIjtcbmltcG9ydCB7IGNoYWluQ29udGV4dCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYmFzZVR5cGVGcm9tTm90aGluZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyB0eXBlc0Zyb21KU09OLFxuICAgICAgICAgcnVsZXNGcm9tSlNPTixcbiAgICAgICAgIGF4aW9tc0Zyb21KU09OLFxuICAgICAgICAgdHlwZXNUb1R5cGVzSlNPTixcbiAgICAgICAgIHJ1bGVzVG9SdWxlc0pTT04sXG4gICAgICAgICB0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBsZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIGF4aW9tc1RvQXhpb21zSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzRnJvbUpTT04sXG4gICAgICAgICBjb21iaW5hdG9yc0Zyb21KU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzRnJvbUpTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNGcm9tSlNPTixcbiAgICAgICAgIG1ldGF0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc0Zyb21KU09OLFxuICAgICAgICAgbWV0YUxlbW1hc0Zyb21Ob3RoaW5nLFxuICAgICAgICAgdGhlb3JlbXNUb1RoZW9yZW1zSlNPTixcbiAgICAgICAgIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04sXG4gICAgICAgICBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcblxuICAgIHJldHVybiBjaGFpbkNvbnRleHQodGhpcyk7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldExpbmVJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lSW5kZXg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gW107XG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCB7IEVxdWl2YWxlbmNlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IFtdO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5jb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxlbW1hcy5mb3JFYWNoKChsZW1tYSkgPT4ge1xuICAgICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCB0aGVvcmVtTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZUxhYmVscyA9IGNvbmplY3R1cmUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubWV0YXRoZW9yZW1zLmZvckVhY2goKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtTGFiZWwgPSBtZXRhdGhlb3JlbS5nZXRMYWJlbCgpO1xuXG4gICAgICAgIGxhYmVscy5wdXNoKG1ldGF0aGVvcmVtTGFiZWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVzO1xuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRSdWxlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bGVzO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpb21zO1xuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0TGVtbWFzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlbW1hcztcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFRoZW9yZW1zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlb3JlbXM7XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRQcm9jZWR1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldE1ldGFMZW1tYXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFMZW1tYXM7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25qZWN0dXJlcztcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21iaW5hdG9ycztcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVQcmVmaXhlcztcblxuICAgIHJldHVybiB0eXBlUHJlZml4ZXM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcnM7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRNZXRhdGhlb3JlbXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YXRoZW9yZW1zO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRNZXRhTGVtbWEobWV0YUxlbW1hKSB7XG4gICAgdGhpcy5tZXRhTGVtbWFzLnB1c2gobWV0YUxlbW1hKTtcbiAgfVxuXG4gIGFkZENvbmplY3R1cmUoY29uamVjdHVyZSkge1xuICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgfVxuXG4gIGFkZFR5cGVQcmVmaXgodHlwZVByZWZpeCkge1xuICAgIHRoaXMudHlwZVByZWZpeGVzLnB1c2godHlwZVByZWZpeCk7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGxhYmVsLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYXMuZmluZCgobWV0YUxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFDb21wYXJlc1RvUmVmZXJlbmNlID0gbWV0YUxlbW1hLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGFMZW1tYUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cblxuICBmaW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSB0aGlzLmdldE1ldGF0aGVvcmVtcygpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1zLmZpbmQoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUNvbXBhcmVzVG9SZWZlcmVuY2UgPSBtZXRhdGhlb3JlbS5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdGhlb3JlbUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHJ1bGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGF4aW9tLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxlbW1hLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGVtbWFDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gdGhlb3JlbS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHRoZW9yZW1Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gdGhpcy5nZXRQcm9jZWR1cmVzKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlcy5maW5kKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gcHJvY2VkdXJlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gY29uamVjdHVyZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGNvbmplY3R1cmVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKTtcblxuICAgIGZpbHRlcihtZXRhTGVtbWFzLCAobWV0YUxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBtZXRhTGVtbWEsIC8vL1xuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCk7XG5cbiAgICBmaWx0ZXIobWV0YXRoZW9yZW1zLCAobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG1ldGF0aGVvcmVtLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYSA9IHRoaXMuZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSB0aGlzLmZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSB0aGlzLmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBbXG4gICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25zO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb20gPSB0aGlzLmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbGVtbWEgPSB0aGlzLmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoaXMuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSB0aGlzLmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IChheGlvbSB8fCBsZW1tYSB8fCB0aGVvcmVtIHx8IGNvbmplY3R1cmUpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLnVuaWZ5TWV0YXZhcmlhYmxlKHNwZWNpZmljTWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSB0eXBlLmNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmNvbXBhcmVNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeGVzLmZpbmQoKHR5cGVQcmVmaXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXhDb21wYXJlc1RvVHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmNvbXBhcmVUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbGFiZWwuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVFcXVhbFRvTGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZUVxdWFsVG9MYWJlbE1ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50U2luZ3VsYXIgPSBqdWRnZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50U2luZ3VsYXIpIHtcbiAgICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICAgICAgICBqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50TWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpIHtcbiAgICBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeCA9IHRoaXMuZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9ICh0eXBlUHJlZml4ICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4UHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZSA9IHRoaXMuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gKHByb2NlZHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gbWV0YXZhcmlhYmxlcy5zb21lKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRoaXMuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCA9ICh0b3BMZXZlbE1ldGFBc3NlcnRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UobWVzc2FnZSwgdGhpcy5maWxlUGF0aCwgdGhpcy5saW5lSW5kZXgpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCwgdGhpcy5saW5lSW5kZXgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlID0gbnVsbCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMsIHRoaXMubGluZUluZGV4KTtcblxuICAgIHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmNvbnRleHQud2FybmluZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoLCB0aGlzLmxpbmVJbmRleCk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlID0gbnVsbCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMsIHRoaXMubGluZUluZGV4KTtcblxuICAgIHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlLCB0aGlzLmZpbGVQYXRoLCB0aGlzLmxpbmVJbmRleCk7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXBhcmUoKTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybmluZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgYmVjYXVzZSBpdCBjYW5ub3QgYmUgcGFyc2VkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGZpbGVOb2RlID0gdGhpcy5ub2RlOyAvLy9cblxuICAgICAgdmVyaWZpZXMgPSB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCF2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnR5cGVzID0gW107XG4gICAgdGhpcy5ydWxlcyA9IFtdO1xuICAgIHRoaXMuYXhpb21zID0gW107XG4gICAgdGhpcy5sZW1tYXMgPSBbXTtcbiAgICB0aGlzLnRoZW9yZW1zID0gW107XG4gICAgdGhpcy52YXJpYWJsZXMgPSBbXTtcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBbXTtcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gW107XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IFtdO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gW107XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IFtdO1xuICB9XG5cbiAgcHJlcGFyZSgpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy50b2tlbnMgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlID0gdGhpcy5maW5kRmlsZSh0aGlzLmZpbGVQYXRoKSxcbiAgICAgICAgICBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudHlwZXMgPSBbXTtcblxuICAgIHR5cGVzRnJvbUpTT04oanNvbiwgdGhpcy50eXBlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hc0Zyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXNGcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlc0pTT04gPSB0eXBlc1RvVHlwZXNKU09OKHRoaXMudHlwZXMpLFxuICAgICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzVG9SdWxlc0pTT04odGhpcy5ydWxlcyksXG4gICAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tc1RvQXhpb21zSlNPTih0aGlzLmF4aW9tcyksXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGlzLnRoZW9yZW1zKSxcbiAgICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHRoaXMudmFyaWFibGVzKSxcbiAgICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKHRoaXMuY29uamVjdHVyZXMpLFxuICAgICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04odGhpcy5jb21iaW5hdG9ycyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTih0aGlzLnR5cGVQcmVmaXhlcyksXG4gICAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTih0aGlzLmNvbnN0cnVjdG9ycyksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTih0aGlzLm1ldGF0aGVvcmVtcyksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTih0aGlzLm1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICB0eXBlcyA9IHR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNKU09OLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gYXhpb21zSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICB0eXBlcyxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgdGhlb3JlbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb25qZWN0dXJlcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgdHlwZVByZWZpeGVzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgbWV0YXRoZW9yZW1zLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQoY29udGV4dCwgZmlsZVBhdGgsIGxpbmVJbmRleCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aChmaWxlUGF0aCwgY29udGV4dCkge1xuICAgIGNvbnN0IGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgbGVtbWFzID0gbnVsbCxcbiAgICAgICAgICB0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gbnVsbCxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IG51bGwsXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBudWxsLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IG51bGwsXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gbnVsbCxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBudWxsLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KGNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMsIGxpbmVJbmRleCkge1xuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGxpbmVJbmRleCA9IDA7XG5cbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICAgIHRva2Vucy5zb21lKCh0b2tlbiwgdG9rZW5JbmRleCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW5FbmRPZkxpbmVUb2tlbiA9IHRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgaWYgKHRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgbGluZUluZGV4ICs9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbkluZGV4ID09PSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsaW5lSW5kZXg7XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJjb250ZXh0IiwiZmlsZVBhdGgiLCJsaW5lSW5kZXgiLCJ0b2tlbnMiLCJub2RlIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwidmFyaWFibGVzIiwibWV0YUxlbW1hcyIsImNvbmplY3R1cmVzIiwiY29tYmluYXRvcnMiLCJ0eXBlUHJlZml4ZXMiLCJjb25zdHJ1Y3RvcnMiLCJtZXRhdGhlb3JlbXMiLCJtZXRhdmFyaWFibGVzIiwiY2hhaW5Db250ZXh0IiwiZ2V0Q29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0TGluZUluZGV4IiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiRXF1aXZhbGVuY2VzIiwiZWxlbWVudHMiLCJlcXVpdmFsZW5jZXMiLCJmcm9tTm90aGluZyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJsZW1tYSIsImxlbW1hTGFiZWxzIiwidGhlb3JlbSIsInRoZW9yZW1MYWJlbHMiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUxhYmVscyIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1MYWJlbCIsImdldExhYmVsIiwiZ2V0VHlwZXMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwiZ2V0UnVsZXMiLCJnZXRBeGlvbXMiLCJnZXRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZ2V0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRUeXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0RmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImFkZFR5cGUiLCJ0eXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkTGVtbWEiLCJhZGRUaGVvcmVtIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsImFkZE1ldGFMZW1tYSIsIm1ldGFMZW1tYSIsImFkZENvbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImFkZE1ldGF0aGVvcmVtIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJsYWJlbCIsImZpbmQiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFDb21wYXJlc1RvUmVmZXJlbmNlIiwiY29tcGFyZVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwibWV0YXRoZW9yZW1Db21wYXJlc1RvUmVmZXJlbmNlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwicnVsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImxlbW1hQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwidGhlb3JlbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJwcm9jZWR1cmUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTmFtZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJjb25qZWN0dXJlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJ0eXBlQ29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSIsImNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZXMiLCJnZXRNZXRhVHlwZXMiLCJtZXRhVHlwZSIsIm1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSIsImNvbXBhcmVNZXRhVHlwZU5hbWUiLCJmaW5kVHlwZVByZWZpeEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhDb21wYXJlc1RvVHlwZVByZWZpeE5hbWUiLCJjb21wYXJlVHlwZVByZWZpeE5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUiLCJsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVFcXVhbFRvTGFiZWxNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNFcXVhbFRvIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwic29tZSIsIlN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwibGFiZWxVbmlmaWVzIiwidW5pZnlMYWJlbCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsImlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2VucyIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsInZlcmlmeSIsInZlcmlmaWVzIiwicHJlcGFyZSIsImZpbGVOb2RlIiwidmVyaWZ5RmlsZSIsImNsZWFyIiwiZmlsZSIsImZpbmRGaWxlIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImluaXRpYWxpc2UiLCJqc29uIiwidHlwZXNGcm9tSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJheGlvbXNGcm9tSlNPTiIsImxlbW1hc0Zyb21Ob3RoaW5nIiwidGhlb3JlbXNGcm9tSlNPTiIsInZhcmlhYmxlc0Zyb21KU09OIiwibWV0YUxlbW1hc0Zyb21Ob3RoaW5nIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJ0b0pTT04iLCJ0eXBlc0pTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwicnVsZXNKU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsImF4aW9tc0pTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwidHlwZVByZWZpeGVzSlNPTiIsInR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTiIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlc0pTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsImZyb21GaWxlIiwiZ2V0UGF0aCIsImZyb21GaWxlUGF0aCIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbiIsInRva2VuSW5kZXgiLCJ0b2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFxQ3FCQTs7O3lCQW5DVTsrREFFVjtzQkFFTTt1QkFDRTtxQkFDTztvQkFDUTtvQkF3Qks7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQVFDLE9BQWlCQyx5QkFBYyxDQUEvQkQsTUFBTUUsU0FBV0QseUJBQWMsQ0FBekJDO0FBRUMsSUFBQSxBQUFNSCw0QkFBTjthQUFNQSxZ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