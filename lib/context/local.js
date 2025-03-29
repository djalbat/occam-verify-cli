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
    function LocalContext(context, tokens, variables, judgements, equivalences, stepsOrSubproofs) {
        _class_call_check(this, LocalContext);
        this.context = context;
        this.tokens = tokens;
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
            key: "addStepOrSubproof",
            value: function addStepOrSubproof(stepOrSubproof) {
                this.stepsOrSubproofs.push(stepOrSubproof);
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
            key: "isMetaLemmaMetatheoremPresentByReference",
            value: function isMetaLemmaMetatheoremPresentByReference(reference) {
                return this.context.isMetaLemmaMetatheoremPresentByReference(reference);
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
                var tokens = null, variables = [], judgements = [], equivalences = _equivalences.default.fromNothing(), stepsOrSubproofs = [], localContext = new LocalContext(context, tokens, variables, judgements, equivalences, stepsOrSubproofs);
                return localContext;
            }
        },
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, tokens = null, variables = [], judgements = [], equivalences = _equivalences.default.fromNothing(), stepsOrSubproofs = [], localContext = new LocalContext(context, tokens, variables, judgements, equivalences, stepsOrSubproofs);
                return localContext;
            }
        },
        {
            key: "fromContextAndTokens",
            value: function fromContextAndTokens(context, tokens) {
                var variables = [], judgements = [], equivalences = _equivalences.default.fromNothing(), stepsOrSubproofs = [], localContext = new LocalContext(context, tokens, variables, judgements, equivalences, stepsOrSubproofs);
                return localContext;
            }
        }
    ]);
    return LocalContext;
}();
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVxdWl2YWxlbmNlIGZyb20gXCIuLi9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IEVxdWl2YWxlbmNlcyBmcm9tIFwiLi4vZXF1aXZhbGVuY2VzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIExvY2FsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN0ZXBzT3JTdWJwcm9vZnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuanVkZ2VtZW50cyA9IGp1ZGdlbWVudHM7XG4gICAgdGhpcy5lcXVpdmFsZW5jZXMgPSBlcXVpdmFsZW5jZXM7XG4gICAgdGhpcy5zdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCB2YXJpYWJsZXM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHZhcmlhYmxlcyA9IFtcbiAgICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAgIC4uLnZhcmlhYmxlc1xuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSB0aGlzLmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICBzdGVwcyA9IHN0ZXBzT3JTdWJwcm9vZnMuZmlsdGVyKChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2ZTdGVwID0gc3RlcE9yU3VicHJvb2YuaXNTdGVwKCk7XG5cbiAgICAgICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlN0ZXApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcHM7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHtcbiAgICBsZXQgbGFzdFN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RlcHMgPSB0aGlzLmdldFN0ZXBzKCksXG4gICAgICAgICAgc3RlcHNMZW5ndGggPSBzdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAoc3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0U3RlcCA9IGxhc3Qoc3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcDtcbiAgfVxuXG4gIGdldFN0ZXBzT3JTdWJwcm9vZnMoKSB7XG4gICAgbGV0IHN0ZXBzT3JTdWJwcm9vZnMgPSB0aGlzLmNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpO1xuXG4gICAgc3RlcHNPclN1YnByb29mcyA9IFsgIC8vL1xuICAgICAgLi4uc3RlcHNPclN1YnByb29mcyxcbiAgICAgIC4uLnRoaXMuc3RlcHNPclN1YnByb29mc1xuICAgIF07XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVQYXRoKCk7IH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0QXhpb21zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF4aW9tcygpOyB9XG5cbiAgZ2V0TGVtbWFzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExlbW1hcygpOyB9XG5cbiAgZ2V0VGhlb3JlbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKTsgfVxuXG4gIGdldENvbmplY3R1cmVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RmlsZUNvbnRleHQoKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5QWRkZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm0gPSBlcXVhbGl0eS5nZXRMZWZ0VGVybSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgICBsZWZ0RXF1aXZhbGVuY2UgPSB0aGlzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybShsZWZ0VGVybSksXG4gICAgICAgICAgICByaWdodEVxdWl2YWxlbmNlID0gdGhpcy5maW5kRXF1aXZhbGVuY2VCeVRlcm0ocmlnaHRUZXJtKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlID09PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5mcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0obGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgICAgICAgdGhpcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgIT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlID09PSBudWxsKSkge1xuICAgICAgICBsZWZ0RXF1aXZhbGVuY2UuYWRkVGVybShyaWdodFRlcm0sIGNvbnRleHQpO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlID09PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgcmlnaHRFcXVpdmFsZW5jZS5hZGRUZXJtKGxlZnRUZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSAhPT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgIT09IG51bGwpKSB7XG4gICAgICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgICAgICBpZiAobGVmdEVxdWl2YWxlbmNlID09PSByaWdodEVxdWl2YWxlbmNlKSB7XG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBsZWZ0RXF1aXZhbGVuY2U7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLm1lcmdlKGxlZnRFcXVpdmFsZW5jZSwgcmlnaHRFcXVpdmFsZW5jZSk7XG5cbiAgICAgICAgICB0aGlzLnJlbW92ZUVxdWl2YWxlbmNlKGxlZnRFcXVpdmFsZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgICB0aGlzLnJlbW92ZUVxdWl2YWxlbmNlKHJpZ2h0RXF1aXZhbGVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgICAgdGhpcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBlcXVpdmFsZW5jZS5hZGRUZXJtKGxlZnRUZXJtLCBjb250ZXh0KTtcblxuICAgICAgICBlcXVpdmFsZW5jZS5hZGRUZXJtKHJpZ2h0VGVybSwgY29udGV4dCk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5QWRkZWQ7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCB2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgdmFyaWFibGVBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCkgeyByZXR1cm4gdGhpcy5lcXVpdmFsZW5jZXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpOyB9XG5cbiAgcmVtb3ZlRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuZXF1aXZhbGVuY2VzLnJlbW92ZUVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KTsgfVxuXG4gIGFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKSB7XG4gICAgdGhpcy5zdGVwc09yU3VicHJvb2ZzLnB1c2goc3RlcE9yU3VicHJvb2YpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGxldCBqdWRnZW1lbnRBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoIWp1ZGdlbWVudFByZXNlbnQpIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICAgIGp1ZGdlbWVudEFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QWRkZWQ7XG4gIH1cblxuICBmaW5kTGFiZWxCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpOyB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU5hbWVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudFNpbXBsZSA9IGp1ZGdlbWVudC5pc1NpbXBsZSgpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50U2ltcGxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgICAgIGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUgPSBqdWRnZW1lbnRNZXRhdmFyaWFibGUuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHsgcmV0dXJuIHRoaXMuZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1Rlcm1Hcm91bmRlZCh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLnNvbWUoKGRlZmluZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlLmlzRXF1YWxUbyh2YXJpYWJsZSk7XG5cbiAgICAgICAgICAgIGlmIChkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPT09IHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZTsgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWZpbmVkO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGp1ZGdlbWVudFByZXNlbnQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlZmluZWRcbiAgfVxuXG4gIG1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGVwcyA9IHRoaXMuZ2V0U3RlcHMoKSxcbiAgICAgICAgICB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMgPSBzdGVwcy5zb21lKChzdGVwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMgPSBzdGVwLm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaGVzO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIHRva2VucyA9IHRoaXMuY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgbm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gdGhpcy5jb250ZXh0Lm5vZGVzQXNUb2tlbnMobm9kZSwgdG9rZW5zKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKHRva2VucykgeyByZXR1cm4gdGhpcy5jb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2Vucyk7IH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSk7IH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHRva2VucyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGVwc09yU3VicHJvb2ZzID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB0b2tlbnMsIHZhcmlhYmxlcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzLCBzdGVwc09yU3VicHJvb2ZzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbENvbnRleHQ7Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIkxvY2FsQ29udGV4dCIsImNvbnRleHQiLCJ0b2tlbnMiLCJ2YXJpYWJsZXMiLCJqdWRnZW1lbnRzIiwiZXF1aXZhbGVuY2VzIiwic3RlcHNPclN1YnByb29mcyIsImdldENvbnRleHQiLCJnZXRUb2tlbnMiLCJnZXRWYXJpYWJsZXMiLCJuZXN0ZWQiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwibWVyZ2VkV2l0aCIsImdldFN0ZXBzIiwiZ2V0U3RlcHNPclN1YnByb29mcyIsInN0ZXBzIiwiZmlsdGVyIiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlN0ZXAiLCJpc1N0ZXAiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwIiwic3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJnZXRGaWxlUGF0aCIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0QXhpb21zIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJnZXRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiZ2V0RmlsZUNvbnRleHQiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlBZGRlZCIsImVxdWFsaXR5UmVmbGV4aXZlIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybSIsImdldExlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwibGVmdEVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwicmlnaHRFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwiRXF1aXZhbGVuY2UiLCJmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0iLCJhZGRFcXVpdmFsZW5jZSIsImFkZFRlcm0iLCJtZXJnZSIsInJlbW92ZUVxdWl2YWxlbmNlIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlQWRkZWQiLCJ2YXJpYWJsZU5hbWUiLCJnZXROb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInB1c2giLCJhZGRTdGVwT3JTdWJwcm9vZiIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFkZGVkIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJmaW5kIiwidmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOYW1lIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50U2ltcGxlIiwiaXNTaW1wbGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNFcXVhbFRvIiwidGVybSIsImZpbmRNZXRhdmFyaWFibGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJpc01ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlIiwiZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOb2RlIiwiaXNUZXJtR3JvdW5kZWQiLCJncm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsInNvbWUiLCJncm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm1Ob2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidGVybUdyb3VuZGVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJtZXRhdmFyaWFibGVEZWZpbmVkIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXMiLCJzdGVwIiwibm9kZUFzU3RyaW5nIiwibm9kZSIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJub2Rlc0FzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmcm9tQ29udGV4dCIsIkVxdWl2YWxlbmNlcyIsImZyb21Ob3RoaW5nIiwibG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJmcm9tQ29udGV4dEFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNGNBOzs7ZUFBQTs7O3lCQTFjK0I7a0VBRVA7bUVBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBQSxBQUFNRSw2QkFBTjthQUFNQSxhQUNRQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsZ0JBQWdCO2dDQUQ5RU47UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTs7a0JBUHRCTjs7WUFVSk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixPQUFPO1lBQ3JCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFhQyxTQUFBQSxpRUFBUztnQkFDcEIsSUFBSVA7Z0JBRUosSUFBSU8sUUFBUTtvQkFDVlAs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