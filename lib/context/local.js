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
    function LocalContext(context, tokens, variables, proofSteps, judgements, equivalences) {
        _class_call_check(this, LocalContext);
        this.context = context;
        this.tokens = tokens;
        this.variables = variables;
        this.proofSteps = proofSteps;
        this.judgements = judgements;
        this.equivalences = equivalences;
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
            key: "getProofSteps",
            value: function getProofSteps() {
                var proofSteps = this.context.getProofSteps();
                proofSteps = _to_consumable_array(proofSteps).concat(_to_consumable_array(this.proofSteps));
                return proofSteps;
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
            key: "getLastProofStep",
            value: function getLastProofStep() {
                var lastProofStep = null;
                var proofStepsLength = this.proofSteps.length;
                if (proofStepsLength > 0) {
                    lastProofStep = last(this.proofSteps);
                }
                return lastProofStep;
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
            key: "addEquality",
            value: function addEquality(equality, context) {
                var equalityAdded;
                var equalityReflexive = equality.isReflexive();
                if (equalityReflexive) {
                    equalityAdded = true; ///
                } else {
                    var leftTerm = equality.getLeftTerm(), rightTerm = equality.getRightTerm(), leftEquivalence = this.equivalences.findEquivalenceByTerm(leftTerm), rightEquivalence = this.equivalences.findEquivalenceByTerm(rightTerm);
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
                            this.addEquivalence(equivalence1);
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
            key: "addProofStep",
            value: function addProofStep(proofStep) {
                this.proofSteps.push(proofStep);
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
            key: "getTermType",
            value: function getTermType(term) {
                var termType;
                var equivalences = this.getEquivalences(), equivalence = equivalences.findEquivalenceByTerm(term);
                if (equivalence !== null) {
                    var _$LocalContext = this, equivalenceType = equivalence.getType(_$LocalContext);
                    termType = equivalenceType; ///
                } else {
                    termType = term.getType();
                }
                return termType;
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
            key: "isLabelPresentByMetavariableName",
            value: function isLabelPresentByMetavariableName(metavariableName) {
                return this.context.isLabelPresentByMetavariableName(metavariableName);
            }
        },
        {
            key: "isLabelPresentByMetavariableNode",
            value: function isLabelPresentByMetavariableNode(metavariableNode) {
                return this.context.isLabelPresentByMetavariableNode(metavariableNode);
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
            key: "isJudgementPresentByMetavariable",
            value: function isJudgementPresentByMetavariable(metavariable) {
                var judgement = this.findJudgementByMetavariable(metavariable), judgementPresent = judgement !== null;
                return judgementPresent;
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
            key: "findLabelByMetavariable",
            value: function findLabelByMetavariable(metavariable) {
                return this.context.findLabelByMetavariable(metavariable);
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
            key: "findAxiomLemmaTheoremConjectureByReference",
            value: function findAxiomLemmaTheoremConjectureByReference(reference) {
                return this.context.findAxiomLemmaTheoremConjectureByReference(reference);
            }
        },
        {
            key: "isRulePresentByReference",
            value: function isRulePresentByReference(reference) {
                return this.context.isRulePresentByReference(reference);
            }
        },
        {
            key: "isAxiomPresentByReference",
            value: function isAxiomPresentByReference(reference) {
                return this.context.isAxiomPresentByReference(reference);
            }
        },
        {
            key: "isLemmaPresentByReference",
            value: function isLemmaPresentByReference(reference) {
                return this.context.isLemmaPresentByReference(reference);
            }
        },
        {
            key: "isTheoremPresentByReference",
            value: function isTheoremPresentByReference(reference) {
                return this.context.isTheoremPresentByReference(reference);
            }
        },
        {
            key: "isConjecturePresentByReference",
            value: function isConjecturePresentByReference(reference) {
                return this.context.isConjecturePresentByReference(reference);
            }
        },
        {
            key: "areMetaLemmasPresentByReference",
            value: function areMetaLemmasPresentByReference(reference) {
                return this.context.areMetaLemmasPresentByReference(reference);
            }
        },
        {
            key: "areMetatheoremsPresentByReference",
            value: function areMetatheoremsPresentByReference(reference) {
                return this.context.areMetatheoremsPresentByReference(reference);
            }
        },
        {
            key: "areMetaLemmasMetaTheoremsPresentByReference",
            value: function areMetaLemmasMetaTheoremsPresentByReference(reference) {
                return this.context.areMetaLemmasMetaTheoremsPresentByReference(reference);
            }
        },
        {
            key: "isAxiomLemmaTheoremConjecturePresentByReference",
            value: function isAxiomLemmaTheoremConjecturePresentByReference(reference) {
                return this.context.isAxiomLemmaTheoremConjecturePresentByReference(reference);
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
                var tokens = null, variables = [], proofSteps = [], judgements = [], equivalences = _equivalences.default.fromNothing(), localContext = new LocalContext(context, tokens, variables, proofSteps, judgements, equivalences);
                return localContext;
            }
        },
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, tokens = null, variables = [], proofSteps = [], judgements = [], equivalences = _equivalences.default.fromNothing(), localContext = new LocalContext(context, tokens, variables, proofSteps, judgements, equivalences);
                return localContext;
            }
        },
        {
            key: "fromContextAndTokens",
            value: function fromContextAndTokens(context, tokens) {
                var variables = [], proofSteps = [], judgements = [], equivalences = _equivalences.default.fromNothing(), localContext = new LocalContext(context, tokens, variables, proofSteps, judgements, equivalences);
                return localContext;
            }
        }
    ]);
    return LocalContext;
}();
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVxdWl2YWxlbmNlIGZyb20gXCIuLi9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IEVxdWl2YWxlbmNlcyBmcm9tIFwiLi4vZXF1aXZhbGVuY2VzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIExvY2FsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMucHJvb2ZTdGVwcyA9IHByb29mU3RlcHM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCB2YXJpYWJsZXM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHZhcmlhYmxlcyA9IFtcbiAgICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAgIC4uLnZhcmlhYmxlc1xuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgbGV0IHByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4ucHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RQcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMucHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAocHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZlN0ZXAgPSBsYXN0KHRoaXMucHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZlN0ZXA7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRGaWxlUGF0aCgpOyB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldExlbW1hcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKTsgfVxuXG4gIGdldFRoZW9yZW1zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFRoZW9yZW1zKCk7IH1cblxuICBnZXRDb25qZWN0dXJlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25qZWN0dXJlcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5QWRkZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm0gPSBlcXVhbGl0eS5nZXRMZWZ0VGVybSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgICBsZWZ0RXF1aXZhbGVuY2UgPSB0aGlzLmVxdWl2YWxlbmNlcy5maW5kRXF1aXZhbGVuY2VCeVRlcm0obGVmdFRlcm0pLFxuICAgICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZSA9IHRoaXMuZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybShyaWdodFRlcm0pO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgPT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlID09PSBudWxsKSkge1xuICAgICAgICBjb25zdCBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLmZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybShsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICAgICAgICB0aGlzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSAhPT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgPT09IG51bGwpKSB7XG4gICAgICAgIGxlZnRFcXVpdmFsZW5jZS5hZGRUZXJtKHJpZ2h0VGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgPT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlICE9PSBudWxsKSkge1xuICAgICAgICByaWdodEVxdWl2YWxlbmNlLmFkZFRlcm0obGVmdFRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlICE9PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgbGV0IGVxdWl2YWxlbmNlO1xuXG4gICAgICAgIGlmIChsZWZ0RXF1aXZhbGVuY2UgPT09IHJpZ2h0RXF1aXZhbGVuY2UpIHtcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IGxlZnRFcXVpdmFsZW5jZTsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UubWVyZ2UobGVmdEVxdWl2YWxlbmNlLCByaWdodEVxdWl2YWxlbmNlKTtcblxuICAgICAgICAgIHRoaXMucmVtb3ZlRXF1aXZhbGVuY2UobGVmdEVxdWl2YWxlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMucmVtb3ZlRXF1aXZhbGVuY2UocmlnaHRFcXVpdmFsZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVxdWl2YWxlbmNlLmFkZFRlcm0obGVmdFRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGVxdWl2YWxlbmNlLmFkZFRlcm0ocmlnaHRUZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHlBZGRlZDtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZFByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICB0aGlzLnByb29mU3RlcHMucHVzaChwcm9vZlN0ZXApO1xuICB9XG5cbiAgYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuZXF1aXZhbGVuY2VzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KTsgfVxuXG4gIHJlbW92ZUVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLmVxdWl2YWxlbmNlcy5yZW1vdmVFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7IH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgbGV0IGp1ZGdlbWVudEFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBqdWRnZW1lbnQuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IHRoaXMuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGlmICghanVkZ2VtZW50UHJlc2VudCkge1xuICAgICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcblxuICAgICAganVkZ2VtZW50QWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnRBZGRlZDtcbiAgfVxuXG4gIGdldFRlcm1UeXBlKHRlcm0pIHtcbiAgICBsZXQgdGVybVR5cGU7XG5cbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgTG9jYWxDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgZXF1aXZhbGVuY2VUeXBlID0gZXF1aXZhbGVuY2UuZ2V0VHlwZShMb2NhbENvbnRleHQpO1xuXG4gICAgICB0ZXJtVHlwZSA9IGVxdWl2YWxlbmNlVHlwZTsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVHlwZTtcbiAgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICAgIGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVybUdyb3VuZGVkID0gdGVybU1hdGNoZXNHcm91bmRlZFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Hcm91bmRlZDtcbiAgfVxuXG4gIGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5zb21lKChkZWZpbmVkVmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZS5pc0VxdWFsVG8odmFyaWFibGUpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID09PSB2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVmaW5lZDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRQcmVzZW50ID0gdGhpcy5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGp1ZGdlbWVudFByZXNlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlZmluZWRcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gKGp1ZGdlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBqdWRnZW1lbnRNZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7IH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzUnVsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1J1bGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzQXhpb21QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNBeGlvbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNMZW1tYVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xlbW1hUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc1RoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUaGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc0NvbmplY3R1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNDb25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBhcmVNZXRhTGVtbWFzUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmFyZU1ldGFMZW1tYXNQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGFyZU1ldGF0aGVvcmVtc1ByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hcmVNZXRhdGhlb3JlbXNQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGFyZU1ldGFMZW1tYXNNZXRhVGhlb3JlbXNQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuYXJlTWV0YUxlbW1hc01ldGFUaGVvcmVtc1ByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IHRoaXMuY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgbm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKHRva2VucykgeyByZXR1cm4gdGhpcy5jb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2Vucyk7IH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB0b2tlbnMsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbENvbnRleHQ7Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIkxvY2FsQ29udGV4dCIsImNvbnRleHQiLCJ0b2tlbnMiLCJ2YXJpYWJsZXMiLCJwcm9vZlN0ZXBzIiwianVkZ2VtZW50cyIsImVxdWl2YWxlbmNlcyIsImdldENvbnRleHQiLCJnZXRUb2tlbnMiLCJnZXRWYXJpYWJsZXMiLCJuZXN0ZWQiLCJnZXRQcm9vZlN0ZXBzIiwiZ2V0SnVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsIm1lcmdlZFdpdGgiLCJnZXRMYXN0UHJvb2ZTdGVwIiwibGFzdFByb29mU3RlcCIsInByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJnZXRGaWxlUGF0aCIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0QXhpb21zIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJnZXRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QWRkZWQiLCJlcXVhbGl0eVJlZmxleGl2ZSIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm0iLCJnZXRMZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFJpZ2h0VGVybSIsImxlZnRFcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInJpZ2h0RXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsIkVxdWl2YWxlbmNlIiwiZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwiYWRkRXF1aXZhbGVuY2UiLCJhZGRUZXJtIiwibWVyZ2UiLCJyZW1vdmVFcXVpdmFsZW5jZSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwidmFyaWFibGVOYW1lIiwiZ2V0Tm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJwdXNoIiwiYWRkUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QWRkZWQiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJnZXRUZXJtVHlwZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImVxdWl2YWxlbmNlVHlwZSIsImdldFR5cGUiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtR3JvdW5kZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSIsImlzRXF1YWxUbyIsInZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCIsIm1ldGF2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsImZpbmQiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UiLCJmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UiLCJpc1J1bGVQcmVzZW50QnlSZWZlcmVuY2UiLCJpc0F4aW9tUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNMZW1tYVByZXNlbnRCeVJlZmVyZW5jZSIsImlzVGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsImFyZU1ldGFMZW1tYXNQcmVzZW50QnlSZWZlcmVuY2UiLCJhcmVNZXRhdGhlb3JlbXNQcmVzZW50QnlSZWZlcmVuY2UiLCJhcmVNZXRhTGVtbWFzTWV0YVRoZW9yZW1zUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJub2RlQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZyb21Db250ZXh0IiwiRXF1aXZhbGVuY2VzIiwiZnJvbU5vdGhpbmciLCJsb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2YkE7OztlQUFBOzs7eUJBM2IrQjtrRUFFUDttRUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFUixJQUFBLEFBQU1FLDZCQUFOO2FBQU1BLGFBQ1FDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxZQUFZO2dDQUR4RU47UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQVBsQk47O1lBVUpPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sT0FBTztZQUNyQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sTUFB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