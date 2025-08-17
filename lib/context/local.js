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
                var variableName = variable.getNode(), variablePresent = this.isVariablePresentByVariableName(variableName, nested);
                if (!variablePresent) {
                    this.variables.push(variable);
                    variableAdded = true;
                }
                return variableAdded;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVxdWl2YWxlbmNlIGZyb20gXCIuLi9lcXVpdmFsZW5jZVwiO1xuaW1wb3J0IEVxdWl2YWxlbmNlcyBmcm9tIFwiLi4vZXF1aXZhbGVuY2VzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIExvY2FsQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN0ZXBzT3JTdWJwcm9vZnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuanVkZ2VtZW50cyA9IGp1ZGdlbWVudHM7XG4gICAgdGhpcy5lcXVpdmFsZW5jZXMgPSBlcXVpdmFsZW5jZXM7XG4gICAgdGhpcy5zdGVwc09yU3VicHJvb2ZzID0gc3RlcHNPclN1YnByb29mcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCB2YXJpYWJsZXM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHZhcmlhYmxlcyA9IFtcbiAgICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAgIC4uLnZhcmlhYmxlc1xuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN0ZXBzKCkge1xuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnMgPSB0aGlzLmdldFN0ZXBzT3JTdWJwcm9vZnMoKSxcbiAgICAgICAgICBzdGVwcyA9IHN0ZXBzT3JTdWJwcm9vZnMuZmlsdGVyKChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2ZTdGVwID0gc3RlcE9yU3VicHJvb2YuaXNTdGVwKCk7XG5cbiAgICAgICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlN0ZXApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcHM7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHtcbiAgICBsZXQgbGFzdFN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RlcHMgPSB0aGlzLmdldFN0ZXBzKCksXG4gICAgICAgICAgc3RlcHNMZW5ndGggPSBzdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAoc3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0U3RlcCA9IGxhc3Qoc3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcDtcbiAgfVxuXG4gIGdldFN0ZXBzT3JTdWJwcm9vZnMoKSB7XG4gICAgbGV0IHN0ZXBzT3JTdWJwcm9vZnMgPSB0aGlzLmNvbnRleHQuZ2V0U3RlcHNPclN1YnByb29mcygpO1xuXG4gICAgc3RlcHNPclN1YnByb29mcyA9IFsgIC8vL1xuICAgICAgLi4uc3RlcHNPclN1YnByb29mcyxcbiAgICAgIC4uLnRoaXMuc3RlcHNPclN1YnByb29mc1xuICAgIF07XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mcztcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEZpbGVQYXRoKCk7IH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0QXhpb21zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF4aW9tcygpOyB9XG5cbiAgZ2V0TGVtbWFzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldExlbW1hcygpOyB9XG5cbiAgZ2V0VGhlb3JlbXMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKTsgfVxuXG4gIGdldENvbmplY3R1cmVzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCk7IH1cblxuICBnZXRDb21iaW5hdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpOyB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpOyB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0RmlsZUNvbnRleHQoKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5QWRkZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoIWVxdWFsaXR5UmVmbGV4aXZlKSB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLmZyb21FcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICAgIHRoaXMuZXF1aXZhbGVuY2VzID0gdGhpcy5lcXVpdmFsZW5jZXMubWVyZ2VkV2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiBlcXVhbGl0eUFkZGVkO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkU3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YpIHtcbiAgICB0aGlzLnN0ZXBzT3JTdWJwcm9vZnMucHVzaChzdGVwT3JTdWJwcm9vZik7XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgbGV0IGp1ZGdlbWVudEFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBqdWRnZW1lbnQuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IHRoaXMuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGlmICghanVkZ2VtZW50UHJlc2VudCkge1xuICAgICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcblxuICAgICAganVkZ2VtZW50QWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnRBZGRlZDtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7IH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50U2ltcGxlID0ganVkZ2VtZW50LmlzU2ltcGxlKCk7XG5cbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRTaW1wbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICAgICAganVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudE1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkgeyByZXR1cm4gdGhpcy5lcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7IH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7IH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7IH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTsgfVxuXG4gIGlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgZmluZEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gKGp1ZGdlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZShncm91bmRlZFRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRlcm1Hcm91bmRlZCA9IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtOyAvLy9cblxuICAgIHJldHVybiB0ZXJtR3JvdW5kZWQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuc29tZSgoZGVmaW5lZFZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGUuaXNFcXVhbFRvKHZhcmlhYmxlKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9PT0gdmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFyaWFibGVEZWZpbmVkID0gdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlOyAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZURlZmluZWQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QganVkZ2VtZW50UHJlc2VudCA9IHRoaXMuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWZpbmVkID0ganVkZ2VtZW50UHJlc2VudDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVmaW5lZFxuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0ZXBzID0gdGhpcy5nZXRTdGVwcygpLFxuICAgICAgICAgIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2hlcyA9IHN0ZXBzLnNvbWUoKHN0ZXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2hlcyA9IHN0ZXAubWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiB0ZXJtQW5kUHJvcGVydHlSZWxhdGlvbk1hdGNoZXM7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zID0gbnVsbCkge1xuICAgIGlmICh0b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIHRva2VucyA9IHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmNvbnRleHQubm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gdGhpcy5jb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSB0aGlzLmNvbnRleHQubm9kZXNBc1Rva2Vucyhub2RlLCB0b2tlbnMpOyAgLy8vXG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgdG9rZW5zQXNTdHJpbmcodG9rZW5zKSB7IHJldHVybiB0aGlzLmNvbnRleHQudG9rZW5zQXNTdHJpbmcodG9rZW5zKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSwgbm9kZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlKTsgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdG9rZW5zLCB2YXJpYWJsZXMsIGp1ZGdlbWVudHMsIGVxdWl2YWxlbmNlcywgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHRva2VucywgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN0ZXBzT3JTdWJwcm9vZnMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3RlcHNPclN1YnByb29mcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdG9rZW5zLCB2YXJpYWJsZXMsIGp1ZGdlbWVudHMsIGVxdWl2YWxlbmNlcywgc3RlcHNPclN1YnByb29mcyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsQ29udGV4dDsiXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiTG9jYWxDb250ZXh0IiwiY29udGV4dCIsInRva2VucyIsInZhcmlhYmxlcyIsImp1ZGdlbWVudHMiLCJlcXVpdmFsZW5jZXMiLCJzdGVwc09yU3VicHJvb2ZzIiwiZ2V0Q29udGV4dCIsImdldFRva2VucyIsImdldFZhcmlhYmxlcyIsIm5lc3RlZCIsImdldEp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJtZXJnZWRXaXRoIiwiZ2V0U3RlcHMiLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwic3RlcHMiLCJmaWx0ZXIiLCJzdGVwT3JTdWJwcm9vZiIsInN0ZXBPclN1YnByb29mU3RlcCIsImlzU3RlcCIsImdldExhc3RTdGVwIiwibGFzdFN0ZXAiLCJzdGVwc0xlbmd0aCIsImxlbmd0aCIsImdldEZpbGVQYXRoIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRBeGlvbXMiLCJnZXRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsImdldENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJnZXRGaWxlQ29udGV4dCIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUFkZGVkIiwiZXF1YWxpdHlSZWZsZXhpdmUiLCJpc1JlZmxleGl2ZSIsImVxdWl2YWxlbmNlIiwiRXF1aXZhbGVuY2UiLCJmcm9tRXF1YWxpdHkiLCJtZXJnZWRXaXRoRXF1aXZhbGVuY2UiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVBZGRlZCIsInZhcmlhYmxlTmFtZSIsImdldE5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwicHVzaCIsImFkZFN0ZXBPclN1YnByb29mIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QWRkZWQiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJmaW5kTGFiZWxCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsImZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImZpbmQiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRTaW1wbGUiLCJpc1NpbXBsZSIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJpc0VxdWFsVG8iLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJ0ZXJtIiwiZmluZE1ldGF2YXJpYWJsZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlSZWZlcmVuY2UiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsImlzTWV0YUxlbW1hTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJmaW5kQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlQnlSZWZlcmVuY2UiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtR3JvdW5kZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSIsInZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCIsIm1ldGF2YXJpYWJsZURlZmluZWQiLCJtYXRjaFRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsInRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2hlcyIsInN0ZXAiLCJub2RlQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZyb21Db250ZXh0IiwiRXF1aXZhbGVuY2VzIiwiZnJvbU5vdGhpbmciLCJsb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpYUE7OztlQUFBOzs7eUJBL1orQjtrRUFFUDttRUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFUixJQUFBLEFBQU1FLDZCQUFOO2FBQU1BLGFBQ1FDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyxnQkFBZ0I7Z0NBRDlFTjtRQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBOztrQkFQdEJOOztZQVVKTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE9BQU87WUFDckI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZ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