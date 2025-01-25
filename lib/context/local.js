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
    function LocalContext(context, tokens, variables, judgements, equivalences, proofStepSubproofs) {
        _class_call_check(this, LocalContext);
        this.context = context;
        this.tokens = tokens;
        this.variables = variables;
        this.judgements = judgements;
        this.equivalences = equivalences;
        this.proofStepSubproofs = proofStepSubproofs;
    }
    _create_class(LocalContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
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
            key: "getProofSteps",
            value: function getProofSteps() {
                var proofStepSubproofs = this.getProofStepSubproofs(), proofSteps = proofStepSubproofs.filter(function(proofStepSubproof) {
                    var proofStepSubproofProofStep = proofStepSubproof.isProofStep();
                    if (proofStepSubproofProofStep) {
                        return true;
                    }
                });
                return proofSteps;
            }
        },
        {
            key: "getLastProofStep",
            value: function getLastProofStep() {
                var lastProofStep = null;
                var proofSteps = this.getProofSteps(), proofStepsLength = proofSteps.length;
                if (proofStepsLength > 0) {
                    lastProofStep = last(proofSteps);
                }
                return lastProofStep;
            }
        },
        {
            key: "getProofStepSubproofs",
            value: function getProofStepSubproofs() {
                var proofStepSubproofs = this.context.getProofStepSubproofs();
                proofStepSubproofs = _to_consumable_array(proofStepSubproofs).concat(_to_consumable_array(this.proofStepSubproofs));
                return proofStepSubproofs;
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
            key: "getFileContext",
            value: function getFileContext() {
                return this.context.getFileContext();
            }
        },
        {
            key: "addEquality",
            value: function addEquality(equality, context) {
                var equalityAdded;
                var equalityReflexive = equality.isReflexive();
                if (equalityReflexive) {
                    equalityAdded = true; ///
                } else {
                    var leftTerm = equality.getLeftTerm(), rightTerm = equality.getRightTerm(), leftEquivalence = this.findEquivalenceByTerm(leftTerm), rightEquivalence = this.findEquivalenceByTerm(rightTerm);
                    if (false) {
                    ///
                    } else if (leftEquivalence === null && rightEquivalence === null) {
                        var equivalence = _equivalence.default.fromLeftTermAndRightTerm(leftTerm, rightTerm);
                        this.addEquivalence(equivalence, context);
                        equalityAdded = true;
                    } else if (leftEquivalence !== null && rightEquivalence === null) {
                        leftEquivalence.addTerm(rightTerm, context);
                        equalityAdded = true;
                    } else if (leftEquivalence === null && rightEquivalence !== null) {
                        rightEquivalence.addTerm(leftTerm, context);
                        equalityAdded = true;
                    } else if (leftEquivalence !== null && rightEquivalence !== null) {
                        var equivalence1;
                        if (leftEquivalence === rightEquivalence) {
                            equivalence1 = leftEquivalence; ///
                        } else {
                            equivalence1 = _equivalence.default.merge(leftEquivalence, rightEquivalence);
                            this.removeEquivalence(leftEquivalence, context);
                            this.removeEquivalence(rightEquivalence, context);
                            this.addEquivalence(equivalence1, context);
                        }
                        equivalence1.addTerm(leftTerm, context);
                        equivalence1.addTerm(rightTerm, context);
                        equalityAdded = true;
                    }
                }
                return equalityAdded;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variableAdded = false;
                var variableName = variable.getNode(), variablePresent = this.isVariablePresentByVariableName(variableName, nested);
                if (!variablePresent) {
                    this.variables.push(variable);
                    variableAdded = true;
                }
                return variableAdded;
            }
        },
        {
            key: "addEquivalence",
            value: function addEquivalence(equivalence, context) {
                return this.equivalences.addEquivalence(equivalence, context);
            }
        },
        {
            key: "removeEquivalence",
            value: function removeEquivalence(equivalence, context) {
                return this.equivalences.removeEquivalence(equivalence, context);
            }
        },
        {
            key: "addProofStepSubproof",
            value: function addProofStepSubproof(proofStepSubproof) {
                this.proofStepSubproofs.push(proofStepSubproof);
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
            key: "findProcedureByReference",
            value: function findProcedureByReference(reference) {
                return this.context.findProcedureByReference(reference);
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
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variables = this.getVariables(nested), variable = variables.find(function(variable) {
                    var variableNameMatches = variable.matchVariableName(variableName);
                    if (variableNameMatches) {
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
                    var judgementMetavariable = judgement.getMetavariable();
                    if (judgementMetavariable !== null) {
                        var judgementMetavariableEqualToMetavariable = judgementMetavariable.isEqualTo(metavariable);
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
            value: function findMetavariable(metavariable, generalContext, specificContext) {
                return this.context.findMetavariable(metavariable, generalContext, specificContext);
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                return this.context.findTypeByTypeName(typeName);
            }
        },
        {
            key: "findLabelByMetavariable",
            value: function findLabelByMetavariable(metavariable) {
                return this.context.findLabelByMetavariable(metavariable);
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
            key: "isLabelPresentByReference",
            value: function isLabelPresentByReference(reference) {
                return this.context.isLabelPresentByReference(reference);
            }
        },
        {
            key: "isProcedurePresentByReference",
            value: function isProcedurePresentByReference(reference) {
                return this.context.isProcedurePresentByReference(reference);
            }
        },
        {
            key: "isMetavariablePresentByReference",
            value: function isMetavariablePresentByReference(reference) {
                return this.context.isMetavariablePresentByReference(reference);
            }
        },
        {
            key: "findAxiomLemmaTheoremConjectureByReference",
            value: function findAxiomLemmaTheoremConjectureByReference(reference) {
                return this.context.findAxiomLemmaTheoremConjectureByReference(reference);
            }
        },
        {
            key: "isMetavariablePresent",
            value: function isMetavariablePresent(metavariable, generalContext, specificContext) {
                return this.context.isMetavariablePresent(metavariable, generalContext, specificContext);
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                return this.context.isTypePresentByTypeName(typeName);
            }
        },
        {
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variable = this.findVariableByVariableName(variableName, nested), variablePresent = variable !== null;
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
                var context = this, proofSteps = this.getProofSteps(), termAndPropertyRelationMatches = proofSteps.some(function(proofStep) {
                    var termAndPropertyRelationMatches = proofStep.matchTermAndPropertyRelation(term, propertyRelation, context);
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
                var tokens = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens === null) {
                    tokens = this.tokens;
                }
                var string = this.context.nodeAsString(node, tokens);
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
                var string = this.context.nodesAsString(node, tokens);
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
                tokens = this.context.nodeAsTokens(node, tokens); ///
                return tokens;
            }
        },
        {
            key: "nodesAsTokens",
            value: function nodesAsTokens(node) {
                var tokens = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens === null) {
                    tokens = this.tokens;
                }
                tokens = this.context.nodesAsTokens(node, tokens); ///
                return tokens;
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
            value: function trace(message, node) {
                this.context.trace(message, node);
            }
        },
        {
            key: "debug",
            value: function debug(message, node) {
                this.context.debug(message, node);
            }
        },
        {
            key: "info",
            value: function info(message, node) {
                this.context.info(message, node);
            }
        },
        {
            key: "warning",
            value: function warning(message, node) {
                this.context.warning(message, node);
            }
        },
        {
            key: "error",
            value: function error(message, node) {
                this.context.error(message, node);
            }
        }
    ], [
        {
            key: "fromContext",
            value: function fromContext(context) {
                var tokens = null, variables = [], judgements = [], equivalences = _equivalences.default.fromNothing(), proofStepSubproofs = [], localContext = new LocalContext(context, tokens, variables, judgements, equivalences, proofStepSubproofs);
                return localContext;
            }
        },
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, tokens = null, variables = [], judgements = [], equivalences = _equivalences.default.fromNothing(), proofStepSubproofs = [], localContext = new LocalContext(context, tokens, variables, judgements, equivalences, proofStepSubproofs);
                return localContext;
            }
        },
        {
            key: "fromContextAndTokens",
            value: function fromContextAndTokens(context, tokens) {
                var variables = [], judgements = [], equivalences = _equivalences.default.fromNothing(), proofStepSubproofs = [], localContext = new LocalContext(context, tokens, variables, judgements, equivalences, proofStepSubproofs);
                return localContext;
            }
        }
    ]);
    return LocalContext;
}();
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVxdWl2YWxlbmNlIGZyb20gXCIuLi9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IEVxdWl2YWxlbmNlcyBmcm9tIFwiLi4vZXF1aXZhbGVuY2VzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIExvY2FsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHByb29mU3RlcFN1YnByb29mcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgICB0aGlzLnByb29mU3RlcFN1YnByb29mcyA9IHByb29mU3RlcFN1YnByb29mcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCB2YXJpYWJsZXM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHZhcmlhYmxlcyA9IFtcbiAgICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAgIC4uLnZhcmlhYmxlc1xuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgY29uc3QgcHJvb2ZTdGVwU3VicHJvb2ZzID0gdGhpcy5nZXRQcm9vZlN0ZXBTdWJwcm9vZnMoKSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gcHJvb2ZTdGVwU3VicHJvb2ZzLmZpbHRlcigocHJvb2ZTdGVwU3VicHJvb2YpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mUHJvb2ZTdGVwID0gcHJvb2ZTdGVwU3VicHJvb2YuaXNQcm9vZlN0ZXAoKTtcblxuICAgICAgICAgICAgaWYgKHByb29mU3RlcFN1YnByb29mUHJvb2ZTdGVwKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0UHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSB0aGlzLmdldFByb29mU3RlcHMoKSxcbiAgICAgICAgICBwcm9vZlN0ZXBzTGVuZ3RoID0gcHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAocHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZlN0ZXAgPSBsYXN0KHByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzKCkge1xuICAgIGxldCBwcm9vZlN0ZXBTdWJwcm9vZnMgPSB0aGlzLmNvbnRleHQuZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzKCk7XG5cbiAgICBwcm9vZlN0ZXBTdWJwcm9vZnMgPSBbICAvLy9cbiAgICAgIC4uLnByb29mU3RlcFN1YnByb29mcyxcbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwU3VicHJvb2ZzXG4gICAgXTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRGaWxlUGF0aCgpOyB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldExlbW1hcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKTsgfVxuXG4gIGdldFRoZW9yZW1zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFRoZW9yZW1zKCk7IH1cblxuICBnZXRDb25qZWN0dXJlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25qZWN0dXJlcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVDb250ZXh0KCk7IH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eUFkZGVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlSZWZsZXhpdmUgPSBlcXVhbGl0eS5pc1JlZmxleGl2ZSgpO1xuXG4gICAgaWYgKGVxdWFsaXR5UmVmbGV4aXZlKSB7XG4gICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm0oKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybSgpLFxuICAgICAgICAgICAgbGVmdEVxdWl2YWxlbmNlID0gdGhpcy5maW5kRXF1aXZhbGVuY2VCeVRlcm0obGVmdFRlcm0pLFxuICAgICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZSA9IHRoaXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHJpZ2h0VGVybSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSA9PT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgPT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UuZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtKGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICAgIHRoaXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlICE9PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgbGVmdEVxdWl2YWxlbmNlLmFkZFRlcm0ocmlnaHRUZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSA9PT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgIT09IG51bGwpKSB7XG4gICAgICAgIHJpZ2h0RXF1aXZhbGVuY2UuYWRkVGVybShsZWZ0VGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgIT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlICE9PSBudWxsKSkge1xuICAgICAgICBsZXQgZXF1aXZhbGVuY2U7XG5cbiAgICAgICAgaWYgKGxlZnRFcXVpdmFsZW5jZSA9PT0gcmlnaHRFcXVpdmFsZW5jZSkge1xuICAgICAgICAgIGVxdWl2YWxlbmNlID0gbGVmdEVxdWl2YWxlbmNlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5tZXJnZShsZWZ0RXF1aXZhbGVuY2UsIHJpZ2h0RXF1aXZhbGVuY2UpO1xuXG4gICAgICAgICAgdGhpcy5yZW1vdmVFcXVpdmFsZW5jZShsZWZ0RXF1aXZhbGVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5yZW1vdmVFcXVpdmFsZW5jZShyaWdodEVxdWl2YWxlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXF1aXZhbGVuY2UuYWRkVGVybShsZWZ0VGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgZXF1aXZhbGVuY2UuYWRkVGVybShyaWdodFRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eUFkZGVkO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuZXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KTsgfVxuXG4gIHJlbW92ZUVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLmVxdWl2YWxlbmNlcy5yZW1vdmVFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7IH1cblxuICBhZGRQcm9vZlN0ZXBTdWJwcm9vZihwcm9vZlN0ZXBTdWJwcm9vZikge1xuICAgIHRoaXMucHJvb2ZTdGVwU3VicHJvb2ZzLnB1c2gocHJvb2ZTdGVwU3VicHJvb2YpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGxldCBqdWRnZW1lbnRBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoIWp1ZGdlbWVudFByZXNlbnQpIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICAgIGp1ZGdlbWVudEFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QWRkZWQ7XG4gIH1cblxuICBmaW5kTGFiZWxCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50TWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7IHJldHVybiB0aGlzLmVxdWl2YWxlbmNlcy5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gKGp1ZGdlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShncm91bmRlZFRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRlcm1Hcm91bmRlZCA9IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtOyAvLy9cblxuICAgIHJldHVybiB0ZXJtR3JvdW5kZWQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuc29tZSgoZGVmaW5lZFZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGUuaXNFcXVhbFRvKHZhcmlhYmxlKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9PT0gdmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFyaWFibGVEZWZpbmVkID0gdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlOyAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZURlZmluZWQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QganVkZ2VtZW50UHJlc2VudCA9IHRoaXMuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWZpbmVkID0ganVkZ2VtZW50UHJlc2VudDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVmaW5lZFxuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHByb29mU3RlcHMgPSB0aGlzLmdldFByb29mU3RlcHMoKSxcbiAgICAgICAgICB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMgPSBwcm9vZlN0ZXBzLnNvbWUoKHByb29mU3RlcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaGVzID0gcHJvb2ZTdGVwLm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaGVzO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IHRoaXMuY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgbm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKHRva2VucykgeyByZXR1cm4gdGhpcy5jb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2Vucyk7IH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb29mU3RlcFN1YnByb29mcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdG9rZW5zLCB2YXJpYWJsZXMsIGp1ZGdlbWVudHMsIGVxdWl2YWxlbmNlcywgcHJvb2ZTdGVwU3VicHJvb2ZzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvb2ZTdGVwU3VicHJvb2ZzID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB0b2tlbnMsIHZhcmlhYmxlcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzLCBwcm9vZlN0ZXBTdWJwcm9vZnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvb2ZTdGVwU3VicHJvb2ZzID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB0b2tlbnMsIHZhcmlhYmxlcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzLCBwcm9vZlN0ZXBTdWJwcm9vZnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbENvbnRleHQ7Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIkxvY2FsQ29udGV4dCIsImNvbnRleHQiLCJ0b2tlbnMiLCJ2YXJpYWJsZXMiLCJqdWRnZW1lbnRzIiwiZXF1aXZhbGVuY2VzIiwicHJvb2ZTdGVwU3VicHJvb2ZzIiwiZ2V0Q29udGV4dCIsImdldFRva2VucyIsImdldFZhcmlhYmxlcyIsIm5lc3RlZCIsImdldEp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJtZXJnZWRXaXRoIiwiZ2V0UHJvb2ZTdGVwcyIsImdldFByb29mU3RlcFN1YnByb29mcyIsInByb29mU3RlcHMiLCJmaWx0ZXIiLCJwcm9vZlN0ZXBTdWJwcm9vZiIsInByb29mU3RlcFN1YnByb29mUHJvb2ZTdGVwIiwiaXNQcm9vZlN0ZXAiLCJnZXRMYXN0UHJvb2ZTdGVwIiwibGFzdFByb29mU3RlcCIsInByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJnZXRGaWxlUGF0aCIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0QXhpb21zIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJnZXRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiZ2V0RmlsZUNvbnRleHQiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlBZGRlZCIsImVxdWFsaXR5UmVmbGV4aXZlIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybSIsImdldExlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwibGVmdEVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwicmlnaHRFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwiRXF1aXZhbGVuY2UiLCJmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0iLCJhZGRFcXVpdmFsZW5jZSIsImFkZFRlcm0iLCJtZXJnZSIsInJlbW92ZUVxdWl2YWxlbmNlIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlQWRkZWQiLCJ2YXJpYWJsZU5hbWUiLCJnZXROb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInB1c2giLCJhZGRQcm9vZlN0ZXBTdWJwcm9vZiIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFkZGVkIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJmaW5kIiwidmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOYW1lIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzRXF1YWxUbyIsInRlcm0iLCJmaW5kTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOb2RlIiwiaXNUZXJtR3JvdW5kZWQiLCJncm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsInNvbWUiLCJncm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm1Ob2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidGVybUdyb3VuZGVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJtZXRhdmFyaWFibGVEZWZpbmVkIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMiLCJwcm9vZlN0ZXAiLCJub2RlQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZyb21Db250ZXh0IiwiRXF1aXZhbGVuY2VzIiwiZnJvbU5vdGhpbmciLCJsb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5Y0E7OztlQUFBOzs7eUJBdmMrQjtrRUFFUDttRUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFUixJQUFBLEFBQU1FLDZCQUFOO2FBQU1BLGFBQ1FDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxrQkFBa0I7Z0NBRGhGTjtRQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOztrQkFQeEJOOztZQVVKTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE9BQU87WUFDckI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQWFDLFNBQUFBLGlFQUFTO2dCQUNwQixJQUFJUDtnQkFFSixJQUFJTyxRQUFRO29CQUNWUCxZQUFZLElBQUksQ0FBQ0YsT0FBTyxDQUFDUSxZQUFZ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