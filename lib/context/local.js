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
            key: "isMetavariablePresent",
            value: function isMetavariablePresent(metavariable, generalContext, specificContext) {
                return this.context.isMetavariablePresent(metavariable, generalContext, specificContext);
            }
        },
        {
            key: "isVariableDefined",
            value: function isVariableDefined(variable) {
                var context = this, equivalences = this.getEquivalences(), groundedTerms = [], definedVariables = [];
                (0, _equivalences.groundedTermsAndDefinedVariablesFromFromEquivalences)(equivalences, groundedTerms, definedVariables, context);
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
            key: "findMetavariable",
            value: function findMetavariable(metavariable, generalContext, specificContext) {
                return this.context.findMetavariable(metavariable, generalContext, specificContext);
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
            key: "areMetaLemmaPresentByReference",
            value: function areMetaLemmaPresentByReference(reference) {
                return this.context.areMetaLemmaPresentByReference(reference);
            }
        },
        {
            key: "areMetatheoremPresentByReference",
            value: function areMetatheoremPresentByReference(reference) {
                return this.context.areMetatheoremPresentByReference(reference);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVxdWl2YWxlbmNlIGZyb20gXCIuLi9lcXVpdmFsZW5jZVwiO1xuXG5pbXBvcnQgeyBtZXJnZUVxdWl2YWxlbmNlcywgZmluZEVxdWl2YWxlbmNlQnlUZXJtLCBncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lcXVpdmFsZW5jZXNcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTG9jYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdG9rZW5zLCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGp1ZGdlbWVudHMsIGVxdWl2YWxlbmNlcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5wcm9vZlN0ZXBzID0gcHJvb2ZTdGVwcztcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzO1xuICAgIHRoaXMuZXF1aXZhbGVuY2VzID0gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHZhcmlhYmxlcztcblxuICAgIGlmIChuZXN0ZWQpIHtcbiAgICAgIHZhcmlhYmxlcyA9IHRoaXMuY29udGV4dC5nZXRWYXJpYWJsZXMoKTtcblxuICAgICAgdmFyaWFibGVzID0gW1xuICAgICAgICAuLi50aGlzLnZhcmlhYmxlcyxcbiAgICAgICAgLi4udmFyaWFibGVzXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBsZXQgcHJvb2ZTdGVwcyA9IHRoaXMuY29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gWyAgLy8vXG4gICAgICAuLi5wcm9vZlN0ZXBzLFxuICAgICAgLi4udGhpcy5wcm9vZlN0ZXBzXG4gICAgXTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBsZXQganVkZ2VtZW50cyA9IHRoaXMuY29udGV4dC5nZXRKdWRnZW1lbnRzKCk7XG5cbiAgICBqdWRnZW1lbnRzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuanVkZ2VtZW50cyxcbiAgICAgIC4uLmp1ZGdlbWVudHNcbiAgICBdXG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBsZXQgZXF1aXZhbGVuY2VzID0gdGhpcy5jb250ZXh0LmdldEVxdWl2YWxlbmNlcygpO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VzQSA9IHRoaXMuZXF1aXZhbGVuY2VzLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXNCID0gZXF1aXZhbGVuY2VzO1xuXG4gICAgZXF1aXZhbGVuY2VzID0gbWVyZ2VFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzQSwgZXF1aXZhbGVuY2VzQik7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldExhc3RQcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RQcm9vZlN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwc0xlbmd0aCA9IHRoaXMucHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAocHJvb2ZTdGVwc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZlN0ZXAgPSBsYXN0KHRoaXMucHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZlN0ZXA7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRGaWxlUGF0aCgpOyB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldExlbW1hcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKTsgfVxuXG4gIGdldFRoZW9yZW1zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFRoZW9yZW1zKCk7IH1cblxuICBnZXRDb25qZWN0dXJlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25qZWN0dXJlcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5QWRkZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm0gPSBlcXVhbGl0eS5nZXRMZWZ0VGVybSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgICBsZWZ0RXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGhpcy5lcXVpdmFsZW5jZXMsIGxlZnRUZXJtKSxcbiAgICAgICAgICAgIHJpZ2h0RXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGhpcy5lcXVpdmFsZW5jZXMsIHJpZ2h0VGVybSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSA9PT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgPT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UuZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtKGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICAgIHRoaXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlICE9PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgbGVmdEVxdWl2YWxlbmNlLmFkZFRlcm0ocmlnaHRUZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSA9PT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgIT09IG51bGwpKSB7XG4gICAgICAgIHJpZ2h0RXF1aXZhbGVuY2UuYWRkVGVybShsZWZ0VGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgIT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlICE9PSBudWxsKSkge1xuICAgICAgICBsZXQgZXF1aXZhbGVuY2U7XG5cbiAgICAgICAgaWYgKGxlZnRFcXVpdmFsZW5jZSA9PT0gcmlnaHRFcXVpdmFsZW5jZSkge1xuICAgICAgICAgIGVxdWl2YWxlbmNlID0gbGVmdEVxdWl2YWxlbmNlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5tZXJnZShsZWZ0RXF1aXZhbGVuY2UsIHJpZ2h0RXF1aXZhbGVuY2UpO1xuXG4gICAgICAgICAgdGhpcy5yZW1vdmVFcXVpdmFsZW5jZShsZWZ0RXF1aXZhbGVuY2UpO1xuXG4gICAgICAgICAgdGhpcy5yZW1vdmVFcXVpdmFsZW5jZShyaWdodEVxdWl2YWxlbmNlKTtcblxuICAgICAgICAgIHRoaXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXF1aXZhbGVuY2UuYWRkVGVybShsZWZ0VGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgZXF1aXZhbGVuY2UuYWRkVGVybShyaWdodFRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eUFkZGVkO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIHRoaXMucHJvb2ZTdGVwcy5wdXNoKHByb29mU3RlcCk7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlU3RyaW5nID0gZXF1aXZhbGVuY2UuYXNTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGVkIHRoZSAnJHtlcXVpdmFsZW5jZVN0cmluZ30nIGVxdWl2YWxlbmNlLmApO1xuXG4gICAgdGhpcy5lcXVpdmFsZW5jZXMucHVzaChlcXVpdmFsZW5jZSk7XG4gIH1cblxuICByZW1vdmVFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5lcXVpdmFsZW5jZXMuaW5kZXhPZihlcXVpdmFsZW5jZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZXF1aXZhbGVuY2VzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGxldCBqdWRnZW1lbnRBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoIWp1ZGdlbWVudFByZXNlbnQpIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICAgIGp1ZGdlbWVudEFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QWRkZWQ7XG4gIH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgbGV0IHRlcm1UeXBlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IGZpbmRFcXVpdmFsZW5jZUJ5VGVybShlcXVpdmFsZW5jZXMsIHRlcm0pO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBMb2NhbENvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBlcXVpdmFsZW5jZVR5cGUgPSBlcXVpdmFsZW5jZS5nZXRUeXBlKExvY2FsQ29udGV4dCk7XG5cbiAgICAgIHRlcm1UeXBlID0gZXF1aXZhbGVuY2VUeXBlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLnNvbWUoKGRlZmluZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPT09IHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZTsgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWZpbmVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICBtZXRhdmFyaWFibGVEZWZpbmVkID0ganVkZ2VtZW50UHJlc2VudDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVmaW5lZFxuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTsgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7IH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoVmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBqdWRnZW1lbnRNZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc0F4aW9tUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzQXhpb21QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTGVtbWFQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMZW1tYVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNUaGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNDb25qZWN0dXJlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgYXJlTWV0YUxlbW1hUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmFyZU1ldGFMZW1tYVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgYXJlTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuYXJlTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuY29udGV4dC5ub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZUFzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSB0aGlzLmNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7IC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIG5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IHRoaXMuY29udGV4dC5ub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICB0b2tlbnNBc1N0cmluZyh0b2tlbnMpIHsgcmV0dXJuIHRoaXMuY29udGV4dC50b2tlbnNBc1N0cmluZyh0b2tlbnMpOyB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQudHJhY2UobWVzc2FnZSwgbm9kZSk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5kZWJ1ZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQuaW5mbyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQud2FybmluZyhtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LmVycm9yKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB0b2tlbnMsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdG9rZW5zLCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGp1ZGdlbWVudHMsIGVxdWl2YWxlbmNlcyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRva2Vucykge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB0b2tlbnMsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxDb250ZXh0OyJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJMb2NhbENvbnRleHQiLCJjb250ZXh0IiwidG9rZW5zIiwidmFyaWFibGVzIiwicHJvb2ZTdGVwcyIsImp1ZGdlbWVudHMiLCJlcXVpdmFsZW5jZXMiLCJnZXRDb250ZXh0IiwiZ2V0VG9rZW5zIiwiZ2V0VmFyaWFibGVzIiwibmVzdGVkIiwiZ2V0UHJvb2ZTdGVwcyIsImdldEp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXNBIiwiZXF1aXZhbGVuY2VzQiIsIm1lcmdlRXF1aXZhbGVuY2VzIiwiZ2V0TGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXAiLCJwcm9vZlN0ZXBzTGVuZ3RoIiwibGVuZ3RoIiwiZ2V0RmlsZVBhdGgiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUFkZGVkIiwiZXF1YWxpdHlSZWZsZXhpdmUiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRSaWdodFRlcm0iLCJsZWZ0RXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJyaWdodEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJFcXVpdmFsZW5jZSIsImZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybSIsImFkZEVxdWl2YWxlbmNlIiwiYWRkVGVybSIsIm1lcmdlIiwicmVtb3ZlRXF1aXZhbGVuY2UiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVBZGRlZCIsInZhcmlhYmxlTmFtZSIsImdldE5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwicHVzaCIsImFkZFByb29mU3RlcCIsInByb29mU3RlcCIsImVxdWl2YWxlbmNlU3RyaW5nIiwiYXNTdHJpbmciLCJ0cmFjZSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBZGRlZCIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImdldFRlcm1UeXBlIiwidGVybSIsInRlcm1UeXBlIiwiZXF1aXZhbGVuY2VUeXBlIiwiZ2V0VHlwZSIsImlzVGVybUdyb3VuZGVkIiwiZ3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzIiwidGVybU1hdGNoZXNHcm91bmRlZFRlcm0iLCJzb21lIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Hcm91bmRlZCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiaXNWYXJpYWJsZURlZmluZWQiLCJ2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUiLCJpc0VxdWFsVG8iLCJ2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJtZXRhdmFyaWFibGVEZWZpbmVkIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlIiwiZmluZCIsIm5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UiLCJmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJpc0F4aW9tUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNMZW1tYVByZXNlbnRCeVJlZmVyZW5jZSIsImlzVGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsImlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsImFyZU1ldGFMZW1tYVByZXNlbnRCeVJlZmVyZW5jZSIsImFyZU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJub2Rlc0FzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZnJvbUNvbnRleHQiLCJsb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpY0E7OztlQUFBOzs7eUJBL2IrQjtrRUFFUDs0QkFFdUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9HLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBQSxBQUFNRSw2QkFBTjthQUFNQSxhQUNRQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsWUFBWTtnQ0FEeEVOO1FBRUYsSUFBSSxD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