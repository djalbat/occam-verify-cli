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
var _name = require("../utilities/name");
var _equivalences = require("../utilities/equivalences");
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
                var equivalencesA = this.equivalences, equivalencesB = equivalences;
                equivalences = (0, _equivalences.mergeEquivalences)(equivalencesA, equivalencesB); ///
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
                    var leftTerm = equality.getLeftTerm(), rightTerm = equality.getRightTerm(), leftEquivalence = (0, _equivalences.findEquivalenceByTerm)(this.equivalences, leftTerm), rightEquivalence = (0, _equivalences.findEquivalenceByTerm)(this.equivalences, rightTerm);
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
                            this.removeEquivalence(leftEquivalence);
                            this.removeEquivalence(rightEquivalence);
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
                var equivalenceString = equivalence.asString();
                context.trace("Added the '".concat(equivalenceString, "' equivalence."));
                this.equivalences.push(equivalence);
            }
        },
        {
            key: "removeEquivalence",
            value: function removeEquivalence(equivalence) {
                var index = this.equivalences.indexOf(equivalence), start = index, deleteCount = 1;
                this.equivalences.splice(start, deleteCount);
            }
        },
        {
            key: "addJudgement",
            value: function addJudgement(judgement) {
                var judgementAdded = false;
                var metavariableNode = judgement.getMetavariableNode(), judgementPresent = this.isJudgementPresentByMetavariableNode(metavariableNode); ///
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
                var equivalences = this.getEquivalences(), equivalence = (0, _equivalences.findEquivalenceByTerm)(equivalences, term);
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
                (0, _equivalences.groundedTermsAndDefinedVariablesFromFromEquivalences)(equivalences, groundedTerms, definedVariables, context);
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
            key: "isVariableDefinedByVariableName",
            value: function isVariableDefinedByVariableName(variableName) {
                var context = this, equivalences = this.getEquivalences(), groundedTerms = [], definedVariables = [];
                (0, _equivalences.groundedTermsAndDefinedVariablesFromFromEquivalences)(equivalences, groundedTerms, definedVariables, context);
                var variableMatchesDefinedVariable = definedVariables.some(function(definedVariable) {
                    var definedVariableName = definedVariable.getName();
                    if (definedVariableName === variableName) {
                        return true;
                    }
                }), variableDefined = variableMatchesDefinedVariable; ///
                return variableDefined;
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                return this.context.isTypePresentByTypeName(typeName);
            }
        },
        {
            key: "isLabelPresentByMetavariableNode",
            value: function isLabelPresentByMetavariableNode(metavariableNode) {
                return this.context.isLabelPresentByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "isMetavariablePresentByMetavariableNode",
            value: function isMetavariablePresentByMetavariableNode(metavariableNode, specificContext) {
                return this.context.isMetavariablePresentByMetavariableNode(metavariableNode, specificContext);
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
            key: "isJudgementPresentByMetavariableNode",
            value: function isJudgementPresentByMetavariableNode(metavariableNode) {
                var judgement = this.findJudgementByMetavariableNode(metavariableNode), judgementPresent = judgement !== null;
                return judgementPresent;
            }
        },
        {
            key: "isMetavariableDefinedByMetavariableNode",
            value: function isMetavariableDefinedByMetavariableNode(metavariableNode) {
                var judgementPresent = this.isJudgementPresentByMetavariableNode(metavariableNode), metavariableDefined = judgementPresent; ///
                return metavariableDefined;
            }
        },
        {
            key: "findMetaTypeByMetaTypeName",
            value: function findMetaTypeByMetaTypeName(metaTypeName) {
                return this.context.findMetaTypeByMetaTypeName(metaTypeName);
            }
        },
        {
            key: "findLabelByMetavariableNode",
            value: function findLabelByMetavariableNode(metavariableNode) {
                return this.context.findLabelByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "findMetavariableByMetavariableNode",
            value: function findMetavariableByMetavariableNode(metavariableNode, specificContext) {
                return this.context.findMetavariableByMetavariableNode(metavariableNode, specificContext);
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variables = this.getVariables(nested), variable = variables.find(function(variable) {
                    var nameMatches = variable.matchVariableName(variableName);
                    if (nameMatches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "findJudgementByMetavariableNode",
            value: function findJudgementByMetavariableNode(metavariableNode) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementMatchesMetavariableNode = judgement.matchMetavariableNode(metavariableNode);
                    if (judgementMatchesMetavariableNode) {
                        return true;
                    }
                }) || null;
                return judgement;
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                return this.context.findTypeByTypeName(typeName);
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
            key: "findMetaLemmaByReference",
            value: function findMetaLemmaByReference(reference, specificContext) {
                return this.context.findMetaLemmaByReference(reference, specificContext);
            }
        },
        {
            key: "findMetatheoremByReference",
            value: function findMetatheoremByReference(reference, specificContext) {
                return this.context.findMetatheoremByReference(reference, specificContext);
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
            key: "isMetaLemmaPresentByReference",
            value: function isMetaLemmaPresentByReference(reference, specificContext) {
                return this.context.isMetaLemmaPresentByReference(reference, specificContext);
            }
        },
        {
            key: "isMetatheoremPresentByReference",
            value: function isMetatheoremPresentByReference(reference, specificContext) {
                return this.context.isMetatheoremPresentByReference(reference, specificContext);
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
                var tokens = null, variables = [], proofSteps = [], judgements = [], equivalences = [], localContext = new LocalContext(context, tokens, variables, proofSteps, judgements, equivalences);
                return localContext;
            }
        },
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, tokens = null, variables = [], proofSteps = [], judgements = [], equivalences = [], localContext = new LocalContext(context, tokens, variables, proofSteps, judgements, equivalences);
                return localContext;
            }
        },
        {
            key: "fromContextAndTokens",
            value: function fromContextAndTokens(context, tokens) {
                var variables = [], proofSteps = [], judgements = [], equivalences = [], localContext = new LocalContext(context, tokens, variables, proofSteps, judgements, equivalences);
                return localContext;
            }
        }
    ]);
    return LocalContext;
}();
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVxdWl2YWxlbmNlIGZyb20gXCIuLi9lcXVpdmFsZW5jZVwiO1xuXG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IG1lcmdlRXF1aXZhbGVuY2VzLCBmaW5kRXF1aXZhbGVuY2VCeVRlcm0sIGdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VxdWl2YWxlbmNlc1wiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBMb2NhbENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0b2tlbnMsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLnByb29mU3RlcHMgPSBwcm9vZlN0ZXBzO1xuICAgIHRoaXMuanVkZ2VtZW50cyA9IGp1ZGdlbWVudHM7XG4gICAgdGhpcy5lcXVpdmFsZW5jZXMgPSBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgdmFyaWFibGVzO1xuXG4gICAgaWYgKG5lc3RlZCkge1xuICAgICAgdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgICB2YXJpYWJsZXMgPSBbXG4gICAgICAgIC4uLnRoaXMudmFyaWFibGVzLFxuICAgICAgICAuLi52YXJpYWJsZXNcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBzKCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIHByb29mU3RlcHMgPSBbICAvLy9cbiAgICAgIC4uLnByb29mU3RlcHMsXG4gICAgICAuLi50aGlzLnByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGxldCBqdWRnZW1lbnRzID0gdGhpcy5jb250ZXh0LmdldEp1ZGdlbWVudHMoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF1cblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXMgPSB0aGlzLmNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICBjb25zdCBlcXVpdmFsZW5jZXNBID0gdGhpcy5lcXVpdmFsZW5jZXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlc0IgPSBlcXVpdmFsZW5jZXM7XG5cbiAgICBlcXVpdmFsZW5jZXMgPSBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCKTsgLy8vXG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdFByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5wcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mU3RlcDtcbiAgfVxuXG4gIGdldExleGVyKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExleGVyKCk7IH1cblxuICBnZXRQYXJzZXIoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0UGFyc2VyKCk7IH1cblxuICBnZXRBeGlvbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCk7IH1cblxuICBnZXRMZW1tYXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGVtbWFzKCk7IH1cblxuICBnZXRUaGVvcmVtcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUaGVvcmVtcygpOyB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTsgfVxuXG4gIGdldENvbWJpbmF0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCk7IH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7IH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eUFkZGVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlSZWZsZXhpdmUgPSBlcXVhbGl0eS5pc1JlZmxleGl2ZSgpO1xuXG4gICAgaWYgKGVxdWFsaXR5UmVmbGV4aXZlKSB7XG4gICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm0oKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybSgpLFxuICAgICAgICAgICAgbGVmdEVxdWl2YWxlbmNlID0gZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRoaXMuZXF1aXZhbGVuY2VzLCBsZWZ0VGVybSksXG4gICAgICAgICAgICByaWdodEVxdWl2YWxlbmNlID0gZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRoaXMuZXF1aXZhbGVuY2VzLCByaWdodFRlcm0pO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcbiAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgPT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlID09PSBudWxsKSkge1xuICAgICAgICBjb25zdCBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLmZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybShsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICAgICAgICB0aGlzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSAhPT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgPT09IG51bGwpKSB7XG4gICAgICAgIGxlZnRFcXVpdmFsZW5jZS5hZGRUZXJtKHJpZ2h0VGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgPT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlICE9PSBudWxsKSkge1xuICAgICAgICByaWdodEVxdWl2YWxlbmNlLmFkZFRlcm0obGVmdFRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlICE9PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgbGV0IGVxdWl2YWxlbmNlO1xuXG4gICAgICAgIGlmIChsZWZ0RXF1aXZhbGVuY2UgPT09IHJpZ2h0RXF1aXZhbGVuY2UpIHtcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IGxlZnRFcXVpdmFsZW5jZTsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UubWVyZ2UobGVmdEVxdWl2YWxlbmNlLCByaWdodEVxdWl2YWxlbmNlKTtcblxuICAgICAgICAgIHRoaXMucmVtb3ZlRXF1aXZhbGVuY2UobGVmdEVxdWl2YWxlbmNlKTtcblxuICAgICAgICAgIHRoaXMucmVtb3ZlRXF1aXZhbGVuY2UocmlnaHRFcXVpdmFsZW5jZSk7XG5cbiAgICAgICAgICB0aGlzLmFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVxdWl2YWxlbmNlLmFkZFRlcm0obGVmdFRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGVxdWl2YWxlbmNlLmFkZFRlcm0ocmlnaHRUZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHlBZGRlZDtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZFByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICB0aGlzLnByb29mU3RlcHMucHVzaChwcm9vZlN0ZXApO1xuICB9XG5cbiAgYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZVN0cmluZyA9IGVxdWl2YWxlbmNlLmFzU3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7ZXF1aXZhbGVuY2VTdHJpbmd9JyBlcXVpdmFsZW5jZS5gKTtcblxuICAgIHRoaXMuZXF1aXZhbGVuY2VzLnB1c2goZXF1aXZhbGVuY2UpO1xuICB9XG5cbiAgcmVtb3ZlRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZXF1aXZhbGVuY2VzLmluZGV4T2YoZXF1aXZhbGVuY2UpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmVxdWl2YWxlbmNlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBsZXQganVkZ2VtZW50QWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBqdWRnZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgLy8vXG5cbiAgICBpZiAoIWp1ZGdlbWVudFByZXNlbnQpIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICAgIGp1ZGdlbWVudEFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QWRkZWQ7XG4gIH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgbGV0IHRlcm1UeXBlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IGZpbmRFcXVpdmFsZW5jZUJ5VGVybShlcXVpdmFsZW5jZXMsIHRlcm0pO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBMb2NhbENvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBlcXVpdmFsZW5jZVR5cGUgPSBlcXVpdmFsZW5jZS5nZXRUeXBlKExvY2FsQ29udGV4dCk7XG5cbiAgICAgIHRlcm1UeXBlID0gZXF1aXZhbGVuY2VUeXBlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLnNvbWUoKGRlZmluZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlTmFtZSA9IGRlZmluZWRWYXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbmVkVmFyaWFibGVOYW1lID09PSB2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFyaWFibGVEZWZpbmVkID0gdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlOyAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZURlZmluZWQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNDb250ZXh0KTsgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVEZWZpbmVkQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRQcmVzZW50ID0gdGhpcy5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGp1ZGdlbWVudFByZXNlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlZmluZWRcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7IH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNDb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0NvbnRleHQpOyB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZU1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBqdWRnZW1lbnQubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzcGVjaWZpY0NvbnRleHQpOyB9XG5cbiAgZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UsIHNwZWNpZmljQ29udGV4dCk7IH1cblxuICBpc0F4aW9tUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzQXhpb21QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTGVtbWFQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMZW1tYVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNUaGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNDb25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhTGVtbWFQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGFMZW1tYVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UsIHNwZWNpZmljQ29udGV4dCk7IH1cblxuICBpc01ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgc3BlY2lmaWNDb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UsIHNwZWNpZmljQ29udGV4dCk7IH1cblxuICBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmNvbnRleHQubm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gdGhpcy5jb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSB0aGlzLmNvbnRleHQubm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgdG9rZW5zQXNTdHJpbmcodG9rZW5zKSB7IHJldHVybiB0aGlzLmNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSwgbm9kZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdG9rZW5zLCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGp1ZGdlbWVudHMsIGVxdWl2YWxlbmNlcyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdG9rZW5zLCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGp1ZGdlbWVudHMsIGVxdWl2YWxlbmNlcyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsQ29udGV4dDsiXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiTG9jYWxDb250ZXh0IiwiY29udGV4dCIsInRva2VucyIsInZhcmlhYmxlcyIsInByb29mU3RlcHMiLCJqdWRnZW1lbnRzIiwiZXF1aXZhbGVuY2VzIiwiZ2V0Q29udGV4dCIsImdldFRva2VucyIsImdldFZhcmlhYmxlcyIsIm5lc3RlZCIsImdldFByb29mU3RlcHMiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzQSIsImVxdWl2YWxlbmNlc0IiLCJtZXJnZUVxdWl2YWxlbmNlcyIsImdldExhc3RQcm9vZlN0ZXAiLCJsYXN0UHJvb2ZTdGVwIiwicHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0QXhpb21zIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJnZXRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QWRkZWQiLCJlcXVhbGl0eVJlZmxleGl2ZSIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm0iLCJnZXRMZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFJpZ2h0VGVybSIsImxlZnRFcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInJpZ2h0RXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsIkVxdWl2YWxlbmNlIiwiZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwiYWRkRXF1aXZhbGVuY2UiLCJhZGRUZXJtIiwibWVyZ2UiLCJyZW1vdmVFcXVpdmFsZW5jZSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwidmFyaWFibGVOYW1lIiwiZ2V0Tm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJwdXNoIiwiYWRkUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwiZXF1aXZhbGVuY2VTdHJpbmciLCJhc1N0cmluZyIsInRyYWNlIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFkZGVkIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZ2V0VGVybVR5cGUiLCJ0ZXJtIiwidGVybVR5cGUiLCJlcXVpdmFsZW5jZVR5cGUiLCJnZXRUeXBlIiwiaXNUZXJtR3JvdW5kZWQiLCJncm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsInNvbWUiLCJncm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm1Ob2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidGVybUdyb3VuZGVkIiwiaXNWYXJpYWJsZURlZmluZWRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZU5hbWUiLCJnZXROYW1lIiwidmFyaWFibGVEZWZpbmVkIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNDb250ZXh0IiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiaXNNZXRhdmFyaWFibGVEZWZpbmVkQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlRGVmaW5lZCIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmQiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOYW1lIiwianVkZ2VtZW50TWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJpc0F4aW9tUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNMZW1tYVByZXNlbnRCeVJlZmVyZW5jZSIsImlzVGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YUxlbW1hUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsIm5vZGVBc1N0cmluZyIsIm5vZGUiLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwibm9kZXNBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZyb21Db250ZXh0IiwibG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJmcm9tQ29udGV4dEFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNGJBOzs7ZUFBQTs7O3lCQTFiK0I7a0VBRVA7b0JBRTZCOzRCQUMwRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0csSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFUixJQUFBLEFBQU1FLDZC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