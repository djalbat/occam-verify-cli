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
            key: "getLastProofStep",
            value: function getLastProofStep() {
                var lastProofStep = null;
                var proofStepSubproofsLength = this.proofStepSubproofs.length;
                if (proofStepSubproofsLength > 0) {
                    var lastProofStepSubproof = last(this.proofStepSubproofs);
                    lastProofStep = lastProofStepSubproof; ///
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
                var variableName = variable.getNode(), variableDeclared = this.isVariableDeclaredByVariableName(variableName, nested);
                if (!variableDeclared) {
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
            key: "isMetavariableDeclared",
            value: function isMetavariableDeclared(metavariable, generalContext, specificContext) {
                return this.context.isMetavariableDeclared(metavariable, generalContext, specificContext);
            }
        },
        {
            key: "isTypeDeclaredByTypeName",
            value: function isTypeDeclaredByTypeName(typeName) {
                return this.context.isTypeDeclaredByTypeName(typeName);
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
            key: "isVariableDeclaredByVariableName",
            value: function isVariableDeclaredByVariableName(variableName) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variable = this.findVariableByVariableName(variableName, nested), variableDeclared = variable !== null;
                return variableDeclared;
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
            key: "isProcedurePresentByReference",
            value: function isProcedurePresentByReference(reference) {
                return this.context.isProcedurePresentByReference(reference);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVxdWl2YWxlbmNlIGZyb20gXCIuLi9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IEVxdWl2YWxlbmNlcyBmcm9tIFwiLi4vZXF1aXZhbGVuY2VzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIExvY2FsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHByb29mU3RlcFN1YnByb29mcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgICB0aGlzLnByb29mU3RlcFN1YnByb29mcyA9IHByb29mU3RlcFN1YnByb29mcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCB2YXJpYWJsZXM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHZhcmlhYmxlcyA9IFtcbiAgICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAgIC4uLnZhcmlhYmxlc1xuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RQcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwU3VicHJvb2ZzTGVuZ3RoID0gdGhpcy5wcm9vZlN0ZXBTdWJwcm9vZnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mU3RlcFN1YnByb29mc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxhc3RQcm9vZlN0ZXBTdWJwcm9vZiA9IGxhc3QodGhpcy5wcm9vZlN0ZXBTdWJwcm9vZnMpO1xuXG4gICAgICBsYXN0UHJvb2ZTdGVwID0gbGFzdFByb29mU3RlcFN1YnByb29mOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZlN0ZXA7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBTdWJwcm9vZnMoKSB7XG4gICAgbGV0IHByb29mU3RlcFN1YnByb29mcyA9IHRoaXMuY29udGV4dC5nZXRQcm9vZlN0ZXBTdWJwcm9vZnMoKTtcblxuICAgIHByb29mU3RlcFN1YnByb29mcyA9IFsgIC8vL1xuICAgICAgLi4ucHJvb2ZTdGVwU3VicHJvb2ZzLFxuICAgICAgLi4udGhpcy5wcm9vZlN0ZXBTdWJwcm9vZnNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFN1YnByb29mcztcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVQYXRoKCk7IH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0QXhpb21zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF4aW9tcygpOyB9XG5cbiAgZ2V0TGVtbWFzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExlbW1hcygpOyB9XG5cbiAgZ2V0VGhlb3JlbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKTsgfVxuXG4gIGdldENvbmplY3R1cmVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RmlsZUNvbnRleHQoKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5QWRkZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm0gPSBlcXVhbGl0eS5nZXRMZWZ0VGVybSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgICBsZWZ0RXF1aXZhbGVuY2UgPSB0aGlzLmVxdWl2YWxlbmNlcy5maW5kRXF1aXZhbGVuY2VCeVRlcm0obGVmdFRlcm0pLFxuICAgICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZSA9IHRoaXMuZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybShyaWdodFRlcm0pO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgPT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlID09PSBudWxsKSkge1xuICAgICAgICBjb25zdCBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLmZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybShsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICAgICAgICB0aGlzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSAhPT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgPT09IG51bGwpKSB7XG4gICAgICAgIGxlZnRFcXVpdmFsZW5jZS5hZGRUZXJtKHJpZ2h0VGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgPT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlICE9PSBudWxsKSkge1xuICAgICAgICByaWdodEVxdWl2YWxlbmNlLmFkZFRlcm0obGVmdFRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlICE9PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgbGV0IGVxdWl2YWxlbmNlO1xuXG4gICAgICAgIGlmIChsZWZ0RXF1aXZhbGVuY2UgPT09IHJpZ2h0RXF1aXZhbGVuY2UpIHtcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IGxlZnRFcXVpdmFsZW5jZTsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UubWVyZ2UobGVmdEVxdWl2YWxlbmNlLCByaWdodEVxdWl2YWxlbmNlKTtcblxuICAgICAgICAgIHRoaXMucmVtb3ZlRXF1aXZhbGVuY2UobGVmdEVxdWl2YWxlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHRoaXMucmVtb3ZlRXF1aXZhbGVuY2UocmlnaHRFcXVpdmFsZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVxdWl2YWxlbmNlLmFkZFRlcm0obGVmdFRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGVxdWl2YWxlbmNlLmFkZFRlcm0ocmlnaHRUZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHlBZGRlZDtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmVkID0gdGhpcy5pc1ZhcmlhYmxlRGVjbGFyZWRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlRGVjbGFyZWQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLmVxdWl2YWxlbmNlcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7IH1cblxuICByZW1vdmVFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCkgeyByZXR1cm4gdGhpcy5lcXVpdmFsZW5jZXMucmVtb3ZlRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpOyB9XG5cbiAgYWRkUHJvb2ZTdGVwU3VicHJvb2YocHJvb2ZTdGVwU3VicHJvb2YpIHtcbiAgICB0aGlzLnByb29mU3RlcFN1YnByb29mcy5wdXNoKHByb29mU3RlcFN1YnByb29mKTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBsZXQganVkZ2VtZW50QWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gdGhpcy5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKCFqdWRnZW1lbnRQcmVzZW50KSB7XG4gICAgICB0aGlzLmp1ZGdlbWVudHMucHVzaChqdWRnZW1lbnQpO1xuXG4gICAgICBqdWRnZW1lbnRBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudEFkZGVkO1xuICB9XG5cbiAgZ2V0VGVybVR5cGUodGVybSkge1xuICAgIGxldCB0ZXJtVHlwZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBMb2NhbENvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBlcXVpdmFsZW5jZVR5cGUgPSBlcXVpdmFsZW5jZS5nZXRUeXBlKExvY2FsQ29udGV4dCk7XG5cbiAgICAgIHRlcm1UeXBlID0gZXF1aXZhbGVuY2VUeXBlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLnNvbWUoKGRlZmluZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPT09IHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZTsgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWZpbmVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICBtZXRhdmFyaWFibGVEZWZpbmVkID0ganVkZ2VtZW50UHJlc2VudDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVmaW5lZFxuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVEZWNsYXJlZChtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZURlY2xhcmVkKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7IH1cblxuICBpc1R5cGVEZWNsYXJlZEJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVEZWNsYXJlZEJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgaXNWYXJpYWJsZURlY2xhcmVkQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmVkID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZURlY2xhcmVkO1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gKGp1ZGdlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBqdWRnZW1lbnRNZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7IH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzUnVsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1J1bGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzQXhpb21QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNBeGlvbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNMZW1tYVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xlbW1hUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc1RoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUaGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNDb25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgYXJlTWV0YUxlbW1hc1ByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5hcmVNZXRhTGVtbWFzUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBhcmVNZXRhdGhlb3JlbXNQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuYXJlTWV0YXRoZW9yZW1zUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBhcmVNZXRhTGVtbWFzTWV0YVRoZW9yZW1zUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmFyZU1ldGFMZW1tYXNNZXRhVGhlb3JlbXNQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZUFzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSB0aGlzLmNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7IC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIG5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IHRoaXMuY29udGV4dC5ub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHsgcmV0dXJuIHRoaXMuY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQudHJhY2UobWVzc2FnZSwgbm9kZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5kZWJ1ZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQuaW5mbyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQud2FybmluZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LmVycm9yKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9vZlN0ZXBTdWJwcm9vZnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHByb29mU3RlcFN1YnByb29mcyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb29mU3RlcFN1YnByb29mcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdG9rZW5zLCB2YXJpYWJsZXMsIGp1ZGdlbWVudHMsIGVxdWl2YWxlbmNlcywgcHJvb2ZTdGVwU3VicHJvb2ZzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb29mU3RlcFN1YnByb29mcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdG9rZW5zLCB2YXJpYWJsZXMsIGp1ZGdlbWVudHMsIGVxdWl2YWxlbmNlcywgcHJvb2ZTdGVwU3VicHJvb2ZzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxDb250ZXh0OyJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJMb2NhbENvbnRleHQiLCJjb250ZXh0IiwidG9rZW5zIiwidmFyaWFibGVzIiwianVkZ2VtZW50cyIsImVxdWl2YWxlbmNlcyIsInByb29mU3RlcFN1YnByb29mcyIsImdldENvbnRleHQiLCJnZXRUb2tlbnMiLCJnZXRWYXJpYWJsZXMiLCJuZXN0ZWQiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwibWVyZ2VkV2l0aCIsImdldExhc3RQcm9vZlN0ZXAiLCJsYXN0UHJvb2ZTdGVwIiwicHJvb2ZTdGVwU3VicHJvb2ZzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdFByb29mU3RlcFN1YnByb29mIiwiZ2V0UHJvb2ZTdGVwU3VicHJvb2ZzIiwiZ2V0RmlsZVBhdGgiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImdldEZpbGVDb250ZXh0IiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QWRkZWQiLCJlcXVhbGl0eVJlZmxleGl2ZSIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm0iLCJnZXRMZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFJpZ2h0VGVybSIsImxlZnRFcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInJpZ2h0RXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsIkVxdWl2YWxlbmNlIiwiZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwiYWRkRXF1aXZhbGVuY2UiLCJhZGRUZXJtIiwibWVyZ2UiLCJyZW1vdmVFcXVpdmFsZW5jZSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwidmFyaWFibGVOYW1lIiwiZ2V0Tm9kZSIsInZhcmlhYmxlRGVjbGFyZWQiLCJpc1ZhcmlhYmxlRGVjbGFyZWRCeVZhcmlhYmxlTmFtZSIsInB1c2giLCJhZGRQcm9vZlN0ZXBTdWJwcm9vZiIsInByb29mU3RlcFN1YnByb29mIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QWRkZWQiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJnZXRUZXJtVHlwZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImVxdWl2YWxlbmNlVHlwZSIsImdldFR5cGUiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtR3JvdW5kZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSIsImlzRXF1YWxUbyIsInZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCIsIm1ldGF2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlY2xhcmVkIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJpc1R5cGVEZWNsYXJlZEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwiZmluZCIsInZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTmFtZSIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZSIsImlzUnVsZVByZXNlbnRCeVJlZmVyZW5jZSIsImlzQXhpb21QcmVzZW50QnlSZWZlcmVuY2UiLCJpc0xlbW1hUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNUaGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJpc0NvbmplY3R1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJhcmVNZXRhTGVtbWFzUHJlc2VudEJ5UmVmZXJlbmNlIiwiYXJlTWV0YXRoZW9yZW1zUHJlc2VudEJ5UmVmZXJlbmNlIiwiYXJlTWV0YUxlbW1hc01ldGFUaGVvcmVtc1ByZXNlbnRCeVJlZmVyZW5jZSIsImlzQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJub2Rlc0FzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmcm9tQ29udGV4dCIsIkVxdWl2YWxlbmNlcyIsImZyb21Ob3RoaW5nIiwibG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJmcm9tQ29udGV4dEFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcWNBOzs7ZUFBQTs7O3lCQW5jK0I7a0VBRVA7bUVBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBQSxBQUFNRSw2QkFBTjthQUFNQSxhQUNRQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsa0JBQWtCO2dDQURoRk47UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTs7a0JBUHhCTjs7WUFVSk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixPQUFPO1lBQ3JCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFhQyxTQUFBQSxpRUFBUztnQkFDcEIsSUFBSVA7Z0JBRUosSUFBSU8sUUFBUTtvQkFDVlAsWUFBWSxJQUFJLENBQUNGLE9BQU8sQ0FBQ1EsWUFBWTtvQkFFckNOLFlBQVksQUFDVixxQkFBRyxJQUFJLENBQUNBLFNBQVMsU0FDakIscUJBQUdBO2dCQUVQLE9BQU87b0JBQ0xBLFlBQVksSUFBSSxD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