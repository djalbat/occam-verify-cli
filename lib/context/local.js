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
var _equivalence = /*#__PURE__*/ _interop_require_default(require("../equivalence"));
var _equivalences = /*#__PURE__*/ _interop_require_default(require("../equivalences"));
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
            value: function addEquality(equality, context) {
                var equalityAdded;
                var equalityReflexive = equality.isReflexive();
                if (!equalityReflexive) {
                    var equivalence = _equivalence.default.fromEquality(equality);
                    this.equivalences = this.equivalences.mergedWithEquivalence(equivalence, context);
                }
                equalityAdded = true;
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
            value: function nodeAsString(node, tokens) {
                return this.context.nodeAsString(node, tokens);
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node, tokens) {
                return this.context.nodesAsString(node, tokens);
            }
        },
        {
            key: "nodeAsTokens",
            value: function nodeAsTokens(node, tokens) {
                return this.context.nodeAsTokens(node, tokens);
            }
        },
        {
            key: "nodesAsTokens",
            value: function nodesAsTokens(node, tokens) {
                return this.context.nodesAsTokens(node, tokens);
            }
        },
        {
            key: "tokensAsString",
            value: function tokensAsString(tokens) {
                return this.context.tokensAsString(tokens);
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
                var variables = [], judgements = [], equivalences = _equivalences.default.fromNothing(), stepsOrSubproofs = [], localContext = new LocalContext(context, variables, judgements, equivalences, stepsOrSubproofs);
                return localContext;
            }
        }
    ]);
    return LocalContext;
}();
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVxdWl2YWxlbmNlIGZyb20gXCIuLi9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IEVxdWl2YWxlbmNlcyBmcm9tIFwiLi4vZXF1aXZhbGVuY2VzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIExvY2FsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHZhcmlhYmxlcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzLCBzdGVwc09yU3VicHJvb2ZzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzO1xuICAgIHRoaXMuZXF1aXZhbGVuY2VzID0gZXF1aXZhbGVuY2VzO1xuICAgIHRoaXMuc3RlcHNPclN1YnByb29mcyA9IHN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCB2YXJpYWJsZXM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHZhcmlhYmxlcyA9IFtcbiAgICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAgIC4uLnZhcmlhYmxlc1xuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSB0aGlzLmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICBzdGVwcyA9IHN0ZXBzT3JTdWJwcm9vZnMuZmlsdGVyKChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2ZTdGVwID0gc3RlcE9yU3VicHJvb2YuaXNTdGVwKCk7XG5cbiAgICAgICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlN0ZXApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcHM7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHtcbiAgICBsZXQgbGFzdFN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RlcHMgPSB0aGlzLmdldFN0ZXBzKCksXG4gICAgICAgICAgc3RlcHNMZW5ndGggPSBzdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAoc3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0U3RlcCA9IGxhc3Qoc3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcDtcbiAgfVxuXG4gIGdldFN0ZXBzT3JTdWJwcm9vZnMoKSB7XG4gICAgbGV0IHN0ZXBzT3JTdWJwcm9vZnMgPSB0aGlzLmNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpO1xuXG4gICAgc3RlcHNPclN1YnByb29mcyA9IFsgIC8vL1xuICAgICAgLi4uc3RlcHNPclN1YnByb29mcyxcbiAgICAgIC4uLnRoaXMuc3RlcHNPclN1YnByb29mc1xuICAgIF07XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVQYXRoKCk7IH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0QXhpb21zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF4aW9tcygpOyB9XG5cbiAgZ2V0TGVtbWFzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExlbW1hcygpOyB9XG5cbiAgZ2V0VGhlb3JlbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKTsgfVxuXG4gIGdldENvbmplY3R1cmVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUeXBlUHJlZml4KCk7IH1cblxuICBhZGRBeGlvbShheGlvbSkgeyB0aGlzLmNvbnRleHQuYWRkQXhpb20oYXhpb20pOyB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHsgdGhpcy5jb250ZXh0LmFkZExlbW1hKGxlbW1hKTsgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkgeyB0aGlzLmNvbnRleHQuYWRkVGhlb3JlbSh0aGVvcmVtKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5QWRkZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoIWVxdWFsaXR5UmVmbGV4aXZlKSB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLmZyb21FcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICAgIHRoaXMuZXF1aXZhbGVuY2VzID0gdGhpcy5lcXVpdmFsZW5jZXMubWVyZ2VkV2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiBlcXVhbGl0eUFkZGVkO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGxldCBqdWRnZW1lbnRBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoIWp1ZGdlbWVudFByZXNlbnQpIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICAgIGp1ZGdlbWVudEFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QWRkZWQ7XG4gIH1cblxuICBhZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZikge1xuICAgIHRoaXMuc3RlcHNPclN1YnByb29mcy5wdXNoKHN0ZXBPclN1YnByb29mKTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSk7IH1cblxuICBmaW5kTGFiZWxCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXJNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlSWRlbnRpZmllck1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudFNpbXBsZSA9IGp1ZGdlbWVudC5pc1NpbXBsZSgpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50U2ltcGxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgICAgICAganVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudE1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkgeyByZXR1cm4gdGhpcy5lcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7IH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZShuYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTsgfVxuXG4gIGlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpOyB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1Rlcm1Hcm91bmRlZCh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLnNvbWUoKGRlZmluZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPT09IHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZTsgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWZpbmVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGp1ZGdlbWVudFByZXNlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlZmluZWRcbiAgfVxuXG4gIG1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGVwcyA9IHRoaXMuZ2V0U3RlcHMoKSxcbiAgICAgICAgICB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMgPSBzdGVwcy5zb21lKChzdGVwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMgPSBzdGVwLm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaGVzO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucykgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpOyB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2Vucyk7IH1cblxuICBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7IH1cblxuICBub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2VucykgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKHRva2VucykgeyByZXR1cm4gdGhpcy5jb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2Vucyk7IH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQudHJhY2UobWVzc2FnZSwgbm9kZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlID0gbnVsbCkgeyB0aGlzLmNvbnRleHQud2FybmluZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxDb250ZXh0OyJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJMb2NhbENvbnRleHQiLCJjb250ZXh0IiwidmFyaWFibGVzIiwianVkZ2VtZW50cyIsImVxdWl2YWxlbmNlcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwibmVzdGVkIiwiZ2V0SnVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsIm1lcmdlZFdpdGgiLCJnZXRTdGVwcyIsImdldFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwcyIsImZpbHRlciIsInN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZTdGVwIiwiaXNTdGVwIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3RlcCIsInN0ZXBzTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0RmlsZVBhdGgiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImdldFR5cGVQcmVmaXgiLCJhZGRBeGlvbSIsImF4aW9tIiwiYWRkTGVtbWEiLCJsZW1tYSIsImFkZFRoZW9yZW0iLCJ0aGVvcmVtIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QWRkZWQiLCJlcXVhbGl0eVJlZmxleGl2ZSIsImlzUmVmbGV4aXZlIiwiZXF1aXZhbGVuY2UiLCJFcXVpdmFsZW5jZSIsImZyb21FcXVhbGl0eSIsIm1lcmdlZFdpdGhFcXVpdmFsZW5jZSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJwdXNoIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QWRkZWQiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJhZGRTdGVwT3JTdWJwcm9vZiIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJuYW1lIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kIiwidmFyaWFibGVJZGVudGlmaWVyTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVJZGVudGlmaWVyIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50U2ltcGxlIiwiaXNTaW1wbGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNFcXVhbFRvIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwidGVybSIsImZpbmRNZXRhdmFyaWFibGUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJnZXROb2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidGVybUdyb3VuZGVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJtZXRhdmFyaWFibGVEZWZpbmVkIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMiLCJzdGVwIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsInRva2VucyIsIm5vZGVzQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJub2Rlc0FzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmcm9tTm90aGluZyIsIkVxdWl2YWxlbmNlcyIsImxvY2FsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaVhBOzs7ZUFBQTs7O3lCQS9XK0I7a0VBRVA7bUVBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sQUFBRUEsT0FBU0MseUJB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