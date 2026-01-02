"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
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
var last = _necessary.arrayUtilities.last;
var LocalContext = /*#__PURE__*/ function() {
    function LocalContext(context, variables, judgements, equivalences, stepsOrSubproofs) {
        _class_call_check(this, LocalContext);
        this.context = context;
        this.variables = variables;
        this.judgements = judgements;
        this.equivalences = equivalences;
        this.stepsOrSubproofs = stepsOrSubproofs;
    }
    _create_class(LocalContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var variables;
                if (nested) {
                    variables = this.context.getVariables();
                    variables = _to_consumable_array(this.variables).concat(_to_consumable_array(variables));
                } else {
                    variables = this.variables;
                }
                return variables;
            }
        },
        {
            key: "getJudgements",
            value: function getJudgements() {
                var judgements = this.context.getJudgements();
                judgements = _to_consumable_array(this.judgements).concat(_to_consumable_array(judgements));
                return judgements;
            }
        },
        {
            key: "getEquivalences",
            value: function getEquivalences() {
                var equivalences = this.context.getEquivalences();
                equivalences = this.equivalences.mergedWith(equivalences); ///
                return equivalences;
            }
        },
        {
            key: "getSteps",
            value: function getSteps() {
                var stepsOrSubproofs = this.getStepsOrSubproofs(), steps = stepsOrSubproofs.filter(function(stepOrSubproof) {
                    var stepOrSubproofStep = stepOrSubproof.isStep();
                    if (stepOrSubproofStep) {
                        return true;
                    }
                });
                return steps;
            }
        },
        {
            key: "getLastStep",
            value: function getLastStep() {
                var lastStep = null;
                var steps = this.getSteps(), stepsLength = steps.length;
                if (stepsLength > 0) {
                    lastStep = last(steps);
                }
                return lastStep;
            }
        },
        {
            key: "getStepsOrSubproofs",
            value: function getStepsOrSubproofs() {
                var stepsOrSubproofs = this.context.getStepsOrSubproofs();
                stepsOrSubproofs = _to_consumable_array(stepsOrSubproofs).concat(_to_consumable_array(this.stepsOrSubproofs));
                return stepsOrSubproofs;
            }
        },
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.context.getFilePath();
            }
        },
        {
            key: "getLexer",
            value: function getLexer() {
                return this.context.getLexer();
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                return this.context.getParser();
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                return this.context.getAxioms();
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                return this.context.getLemmas();
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                return this.context.getTheorems();
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                return this.context.getConjectures();
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                return this.context.getCombinators();
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                return this.context.getConstructors();
            }
        },
        {
            key: "getTypePrefix",
            value: function getTypePrefix() {
                return this.context.getTypePrefix();
            }
        },
        {
            key: "addAxiom",
            value: function addAxiom(axiom) {
                this.context.addAxiom(axiom);
            }
        },
        {
            key: "addLemma",
            value: function addLemma(lemma) {
                this.context.addLemma(lemma);
            }
        },
        {
            key: "addTheorem",
            value: function addTheorem(theorem) {
                this.context.addTheorem(theorem);
            }
        },
        {
            key: "addEquality",
            value: function addEquality(equality) {
                var equalityAdded;
                var equalityReflexive = equality.isReflexive();
                if (!equalityReflexive) {
                    var Equivalence = _elements.default.Equivalence, equivalence = Equivalence.fromEquality(equality), context = this; ///
                    this.equivalences = this.equivalences.mergedWithEquivalence(equivalence, context);
                }
                equalityAdded = true;
                if (equalityAdded) {
                    var context1 = this, equalityString = equality.getString();
                    context1.trace("Added the '".concat(equalityString, "' equality."));
                }
                return equalityAdded;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variableAdded = false;
                var variableIdentifier = variable.getIdentifier(), variablePresent = this.isVariablePresentByVariableIdentifier(variableIdentifier, nested);
                if (!variablePresent) {
                    this.variables.push(variable);
                    variableAdded = true;
                }
                if (variableAdded) {
                    var context = this, variableString = variable.getString();
                    context.trace("Added the '".concat(variableString, "' variable."));
                }
                return variableAdded;
            }
        },
        {
            key: "addJudgement",
            value: function addJudgement(judgement) {
                var judgementAdded = false;
                var metavariable = judgement.getMetavariable(), judgementPresent = this.isJudgementPresentByMetavariable(metavariable);
                if (!judgementPresent) {
                    this.judgements.push(judgement);
                    judgementAdded = true;
                }
                if (judgementAdded) {
                    var context = this, judgementString = judgement.getString();
                    context.trace("Added the '".concat(judgementString, "' judgement."));
                }
                return judgementAdded;
            }
        },
        {
            key: "addStepOrSubproof",
            value: function addStepOrSubproof(stepOrSubproof) {
                this.stepsOrSubproofs.push(stepOrSubproof);
            }
        },
        {
            key: "findProcedureByName",
            value: function findProcedureByName(name) {
                return this.context.findProcedureByName(name);
            }
        },
        {
            key: "findLabelByReference",
            value: function findLabelByReference(reference, context) {
                return this.context.findLabelByReference(reference, context);
            }
        },
        {
            key: "findRuleByReference",
            value: function findRuleByReference(reference) {
                return this.context.findRuleByReference(reference);
            }
        },
        {
            key: "findAxiomByReference",
            value: function findAxiomByReference(reference) {
                return this.context.findAxiomByReference(reference);
            }
        },
        {
            key: "findLemmaByReference",
            value: function findLemmaByReference(reference) {
                return this.context.findLemmaByReference(reference);
            }
        },
        {
            key: "findTheoremByReference",
            value: function findTheoremByReference(reference) {
                return this.context.findTheoremByReference(reference);
            }
        },
        {
            key: "findConjectureByReference",
            value: function findConjectureByReference(reference) {
                return this.context.findConjectureByReference(reference);
            }
        },
        {
            key: "findMetaLemmasByReference",
            value: function findMetaLemmasByReference(reference) {
                return this.context.findMetaLemmasByReference(reference);
            }
        },
        {
            key: "findMetatheoremsByReference",
            value: function findMetatheoremsByReference(reference) {
                return this.context.findMetatheoremsByReference(reference);
            }
        },
        {
            key: "findMetaLemmaMetatheoremByReference",
            value: function findMetaLemmaMetatheoremByReference(reference) {
                return this.context.findMetaLemmaMetatheoremByReference(reference);
            }
        },
        {
            key: "findMetaLemmaMetatheoremsByReference",
            value: function findMetaLemmaMetatheoremsByReference(reference) {
                return this.context.findMetaLemmaMetatheoremsByReference(reference);
            }
        },
        {
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variables = this.getVariables(nested), variable = variables.find(function(variable) {
                    var variableIdentifierMatches = variable.matchVariableIdentifier(variableIdentifier);
                    if (variableIdentifierMatches) {
                        return true;
                    }
                }) || null;
                return variable;
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
            key: "findEquivalenceByTerm",
            value: function findEquivalenceByTerm(term) {
                return this.equivalences.findEquivalenceByTerm(term);
            }
        },
        {
            key: "findMetavariable",
            value: function findMetavariable(metavariable) {
                return this.context.findMetavariable(metavariable);
            }
        },
        {
            key: "findLabelByMetavariable",
            value: function findLabelByMetavariable(metavariable) {
                return this.context.findLabelByMetavariable(metavariable);
            }
        },
        {
            key: "findTypeByNominalTypeName",
            value: function findTypeByNominalTypeName(nominalTypeName) {
                return this.context.findTypeByNominalTypeName(nominalTypeName);
            }
        },
        {
            key: "findMetaTypeByMetaTypeName",
            value: function findMetaTypeByMetaTypeName(metaTypeName) {
                return this.context.findMetaTypeByMetaTypeName(metaTypeName);
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                return this.context.findMetavariableByMetavariableName(metavariableName);
            }
        },
        {
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                return this.context.isProcedurePresentByName(name);
            }
        },
        {
            key: "isLabelPresentByReference",
            value: function isLabelPresentByReference(reference) {
                return this.context.isLabelPresentByReference(reference);
            }
        },
        {
            key: "isMetavariablePresentByReference",
            value: function isMetavariablePresentByReference(reference) {
                return this.context.isMetavariablePresentByReference(reference);
            }
        },
        {
            key: "isMetaLemmaMetatheoremPresentByReference",
            value: function isMetaLemmaMetatheoremPresentByReference(reference) {
                return this.context.isMetaLemmaMetatheoremPresentByReference(reference);
            }
        },
        {
            key: "findAxiomLemmaTheoremOrConjectureByReference",
            value: function findAxiomLemmaTheoremOrConjectureByReference(reference) {
                return this.context.findAxiomLemmaTheoremOrConjectureByReference(reference);
            }
        },
        {
            key: "isMetavariablePresent",
            value: function isMetavariablePresent(metavariable) {
                return this.context.isMetavariablePresent(metavariable);
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                var includeRelease = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, includeDependencies = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                return this.context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
            }
        },
        {
            key: "isTypePresentByNominalTypeName",
            value: function isTypePresentByNominalTypeName(nominalTypeName) {
                return this.context.isTypePresentByNominalTypeName(nominalTypeName);
            }
        },
        {
            key: "isTypePresentByPrefixedTypeName",
            value: function isTypePresentByPrefixedTypeName(prefixedTypeName) {
                return this.context.isTypePresentByPrefixedTypeName(prefixedTypeName);
            }
        },
        {
            key: "isTypePrefixPresentByTypePrefixName",
            value: function isTypePrefixPresentByTypePrefixName(typePrefixName) {
                return this.context.isTypePrefixPresentByTypePrefixName(typePrefixName);
            }
        },
        {
            key: "isVariablePresentByVariableIdentifier",
            value: function isVariablePresentByVariableIdentifier(variableIdentifier) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variable = this.findVariableByVariableIdentifier(variableIdentifier, nested), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "isLabelPresentByMetavariableName",
            value: function isLabelPresentByMetavariableName(metavariableName) {
                return this.context.isLabelPresentByMetavariableName(metavariableName);
            }
        },
        {
            key: "isLabelPresentByMetavariable",
            value: function isLabelPresentByMetavariable(metavariable) {
                return this.context.isLabelPresentByMetavariable(metavariable);
            }
        },
        {
            key: "isMetavariablePresentByMetavariableName",
            value: function isMetavariablePresentByMetavariableName(metavariableNode) {
                return this.context.isMetavariablePresentByMetavariableName(metavariableNode);
            }
        },
        {
            key: "isJudgementPresentByMetavariable",
            value: function isJudgementPresentByMetavariable(metavariable) {
                var judgement = this.findJudgementByMetavariable(metavariable), judgementPresent = judgement !== null;
                return judgementPresent;
            }
        },
        {
            key: "isTermGrounded",
            value: function isTermGrounded(term) {
                var context = this, equivalences = this.getEquivalences(), groundedTerms = [], definedVariables = [];
                equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);
                var termMatchesGroundedTerm = groundedTerms.some(function(groundedTerm) {
                    var groundedTermNode = groundedTerm.getNode(), groundedTermNodeMatches = term.matchTermNode(groundedTermNode);
                    if (groundedTermNodeMatches) {
                        return true;
                    }
                }), termGrounded = termMatchesGroundedTerm; ///
                return termGrounded;
            }
        },
        {
            key: "isVariableDefined",
            value: function isVariableDefined(variable) {
                var context = this, equivalences = this.getEquivalences(), groundedTerms = [], definedVariables = [];
                equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);
                var variableMatchesDefinedVariable = definedVariables.some(function(definedVariable) {
                    var definedVariableEqualToVariable = definedVariable.isEqualTo(variable);
                    if (definedVariableEqualToVariable === variable) {
                        return true;
                    }
                }), variableDefined = variableMatchesDefinedVariable; ///
                return variableDefined;
            }
        },
        {
            key: "isMetavariableDefined",
            value: function isMetavariableDefined(metavariable) {
                var judgementPresent = this.isJudgementPresentByMetavariable(metavariable), metavariableDefined = judgementPresent; ///
                return metavariableDefined;
            }
        },
        {
            key: "matchTermAndPropertyRelation",
            value: function matchTermAndPropertyRelation(term, propertyRelation) {
                var context = this, steps = this.getSteps(), termAndPropertyRelationMatches = steps.some(function(step) {
                    var termAndPropertyRelationMatches = step.matchTermAndPropertyRelation(term, propertyRelation, context);
                    if (termAndPropertyRelationMatches) {
                        return true;
                    }
                });
                return termAndPropertyRelationMatches;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                return this.context.nodeAsString(node);
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                return this.context.nodesAsString(node);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.context.trace(message, node);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.context.debug(message, node);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.context.info(message, node);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.context.warning(message, node);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.context.error(message, node);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var Equivalences = _elements.default.Equivalences, variables = [], judgements = [], equivalences = Equivalences.fromNothing(), stepsOrSubproofs = [], localContext = new LocalContext(context, variables, judgements, equivalences, stepsOrSubproofs);
                return localContext;
            }
        }
    ]);
    return LocalContext;
}();
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBMb2NhbENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB2YXJpYWJsZXMsIGp1ZGdlbWVudHMsIGVxdWl2YWxlbmNlcywgc3RlcHNPclN1YnByb29mcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgICB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMgPSBzdGVwc09yU3VicHJvb2ZzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgdmFyaWFibGVzO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgICB2YXJpYWJsZXMgPSBbXG4gICAgICAgIC4uLnRoaXMudmFyaWFibGVzLFxuICAgICAgICAuLi52YXJpYWJsZXNcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGxldCBqdWRnZW1lbnRzID0gdGhpcy5jb250ZXh0LmdldEp1ZGdlbWVudHMoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF1cblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXMgPSB0aGlzLmNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoKGVxdWl2YWxlbmNlcyk7ICAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRTdGVwcygpIHtcbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzID0gdGhpcy5nZXRTdGVwc09yU3VicHJvb2ZzKCksXG4gICAgICAgICAgc3RlcHMgPSBzdGVwc09yU3VicHJvb2ZzLmZpbHRlcigoc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mU3RlcCA9IHN0ZXBPclN1YnByb29mLmlzU3RlcCgpO1xuXG4gICAgICAgICAgICBpZiAoc3RlcE9yU3VicHJvb2ZTdGVwKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ZXBzO1xuICB9XG5cbiAgZ2V0TGFzdFN0ZXAoKSB7XG4gICAgbGV0IGxhc3RTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHN0ZXBzID0gdGhpcy5nZXRTdGVwcygpLFxuICAgICAgICAgIHN0ZXBzTGVuZ3RoID0gc3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKHN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdFN0ZXAgPSBsYXN0KHN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFN0ZXA7XG4gIH1cblxuICBnZXRTdGVwc09yU3VicHJvb2ZzKCkge1xuICAgIGxldCBzdGVwc09yU3VicHJvb2ZzID0gdGhpcy5jb250ZXh0LmdldFN0ZXBzT3JTdWJwcm9vZnMoKTtcblxuICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBbICAvLy9cbiAgICAgIC4uLnN0ZXBzT3JTdWJwcm9vZnMsXG4gICAgICAuLi50aGlzLnN0ZXBzT3JTdWJwcm9vZnNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRGaWxlUGF0aCgpOyB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldExlbW1hcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKTsgfVxuXG4gIGdldFRoZW9yZW1zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFRoZW9yZW1zKCk7IH1cblxuICBnZXRDb25qZWN0dXJlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25qZWN0dXJlcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeCgpOyB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHsgdGhpcy5jb250ZXh0LmFkZEF4aW9tKGF4aW9tKTsgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7IHRoaXMuY29udGV4dC5hZGRMZW1tYShsZW1tYSk7IH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHsgdGhpcy5jb250ZXh0LmFkZFRoZW9yZW0odGhlb3JlbSk7IH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGxldCBlcXVhbGl0eUFkZGVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlSZWZsZXhpdmUgPSBlcXVhbGl0eS5pc1JlZmxleGl2ZSgpO1xuXG4gICAgaWYgKCFlcXVhbGl0eVJlZmxleGl2ZSkge1xuICAgICAgY29uc3QgeyBFcXVpdmFsZW5jZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLmZyb21FcXVhbGl0eShlcXVhbGl0eSksXG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICAgIHRoaXMuZXF1aXZhbGVuY2VzID0gdGhpcy5lcXVpdmFsZW5jZXMubWVyZ2VkV2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcblxuICAgIGlmIChlcXVhbGl0eUFkZGVkKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBlcXVhbGl0eVN0cmluZyA9IGVxdWFsaXR5LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eUFkZGVkO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZUFkZGVkKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgbGV0IGp1ZGdlbWVudEFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBqdWRnZW1lbnQuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IHRoaXMuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGlmICghanVkZ2VtZW50UHJlc2VudCkge1xuICAgICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcblxuICAgICAganVkZ2VtZW50QWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChqdWRnZW1lbnRBZGRlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAganVkZ2VtZW50U3RyaW5nID0ganVkZ2VtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50LmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudEFkZGVkO1xuICB9XG5cbiAgYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpIHtcbiAgICB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMucHVzaChzdGVwT3JTdWJwcm9vZik7XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpOyB9XG5cbiAgZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTsgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZUlkZW50aWZpZXJNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRTaW5ndWxhciA9IGp1ZGdlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRTaW5ndWxhcikge1xuICAgICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGUgPSBqdWRnZW1lbnQuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICAgICAgICAgIGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBqdWRnZW1lbnRNZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHsgcmV0dXJuIHRoaXMuZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpOyB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7IH1cblxuICBpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTsgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtTm9kZSA9IGdyb3VuZGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgIGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVybUdyb3VuZGVkID0gdGVybU1hdGNoZXNHcm91bmRlZFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Hcm91bmRlZDtcbiAgfVxuXG4gIGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5zb21lKChkZWZpbmVkVmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZS5pc0VxdWFsVG8odmFyaWFibGUpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID09PSB2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVmaW5lZDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRQcmVzZW50ID0gdGhpcy5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBqdWRnZW1lbnRQcmVzZW50OyAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWZpbmVkXG4gIH1cblxuICBtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RlcHMgPSB0aGlzLmdldFN0ZXBzKCksXG4gICAgICAgICAgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaGVzID0gc3RlcHMuc29tZSgoc3RlcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaGVzID0gc3RlcC5tYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpOyB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZXNBc1N0cmluZyhub2RlKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5kZWJ1ZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSwgbm9kZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSA9IG51bGwpIHsgdGhpcy5jb250ZXh0LmVycm9yKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEVxdWl2YWxlbmNlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxDb250ZXh0OyJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJMb2NhbENvbnRleHQiLCJjb250ZXh0IiwidmFyaWFibGVzIiwianVkZ2VtZW50cyIsImVxdWl2YWxlbmNlcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwibmVzdGVkIiwiZ2V0SnVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsIm1lcmdlZFdpdGgiLCJnZXRTdGVwcyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwcyIsImZpbHRlciIsInN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZTdGVwIiwiaXNTdGVwIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3RlcCIsInN0ZXBzTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0RmlsZVBhdGgiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImdldFR5cGVQcmVmaXgiLCJhZGRBeGlvbSIsImF4aW9tIiwiYWRkTGVtbWEiLCJsZW1tYSIsImFkZFRoZW9yZW0iLCJ0aGVvcmVtIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QWRkZWQiLCJlcXVhbGl0eVJlZmxleGl2ZSIsImlzUmVmbGV4aXZlIiwiRXF1aXZhbGVuY2UiLCJlbGVtZW50cyIsImVxdWl2YWxlbmNlIiwiZnJvbUVxdWFsaXR5IiwibWVyZ2VkV2l0aEVxdWl2YWxlbmNlIiwiZXF1YWxpdHlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJwdXNoIiwidmFyaWFibGVTdHJpbmciLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBZGRlZCIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudFN0cmluZyIsImFkZFN0ZXBPclN1YnByb29mIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJmaW5kTGFiZWxCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsImZpbmQiLCJ2YXJpYWJsZUlkZW50aWZpZXJNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNFcXVhbFRvIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwidGVybSIsImZpbmRNZXRhdmFyaWFibGUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJnZXROb2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidGVybUdyb3VuZGVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJtZXRhdmFyaWFibGVEZWZpbmVkIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMiLCJzdGVwIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsIm5vZGVzQXNTdHJpbmciLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZnJvbU5vdGhpbmciLCJFcXVpdmFsZW5jZXMiLCJsb2NhbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtZQTs7O2VBQUE7Ozt5QkFoWStCOytEQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFNLEFBQUVBLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVSLElBQUEsQUFBTUUsNkJBQU47YUFBTUEsYUFDUUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxnQkFBZ0I7Z0NBRHRFTDtRQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOztrQkFOdEJMOztZQVNKTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE9BQU87WUFDckI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWFDLFNBQUFBLGlFQUFTO2dCQUNwQixJQUFJTjtnQkFFSixJQUFJTSxRQUFRO29CQUNWTixZQUFZLElBQUksQ0FBQ0QsT0FBTyxDQUFDTSxZQUFZO29CQUVyQ0wsWUFBWSxBQUNWLHFCQUFHLElBQUksQ0FBQ0EsU0FBUyxTQUNqQixxQkFBR0E7Z0JBRVAsT0FBTztvQkFDTEEsWUFBWSxJQUFJLENBQUNBLFNBQVM7Z0JBQzVCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZ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