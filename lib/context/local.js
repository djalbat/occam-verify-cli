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
var _equivalence = /*#__PURE__*/ _interop_require_default(require("../equivalence"));
var _array = require("../utilities/array");
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
var LocalContext = /*#__PURE__*/ function() {
    function LocalContext(context, variables, proofSteps, judgements, equivalences, metavariables) {
        _class_call_check(this, LocalContext);
        this.context = context;
        this.variables = variables;
        this.proofSteps = proofSteps;
        this.judgements = judgements;
        this.equivalences = equivalences;
        this.metavariables = metavariables;
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
                var variables = this.context.getVariables();
                variables = _to_consumable_array(this.variables).concat(_to_consumable_array(variables));
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
                var equivalencesA = this.equivalences, equivalencesB = equivalences, _$LocalContext = this; ///
                equivalences = (0, _equivalences.mergeEquivalences)(equivalencesA, equivalencesB, _$LocalContext); ///
                return equivalences;
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables() {
                var metavariables = this.context.getMetavariables();
                metavariables = _to_consumable_array(this.metavariables).concat(_to_consumable_array(metavariables));
                return metavariables;
            }
        },
        {
            key: "getLastProofStep",
            value: function getLastProofStep() {
                var lastProofStep = null;
                var proofStepsLength = this.proofSteps.length;
                if (proofStepsLength > 0) {
                    lastProofStep = (0, _array.last)(this.proofSteps);
                }
                return lastProofStep;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.context.getTokens();
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
            value: function addEquality(equality) {
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
                        this.addEquivalence(equivalence);
                        equalityAdded = true;
                    } else if (leftEquivalence !== null && rightEquivalence === null) {
                        leftEquivalence.addTerm(rightTerm);
                        equalityAdded = true;
                    } else if (leftEquivalence === null && rightEquivalence !== null) {
                        rightEquivalence.addTerm(leftTerm);
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
                        equivalence1.addTerm(leftTerm);
                        equivalence1.addTerm(rightTerm);
                        equalityAdded = true;
                    }
                }
                return equalityAdded;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var variableAdded = false;
                var node = variable.getNode(), variablePresent = this.variables.some(function(variable) {
                    var variableMatchesNode = variable.matchNode(node);
                    if (variableMatchesNode) {
                        return true;
                    }
                });
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
            value: function addEquivalence(equivalence) {
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
                var metavariableNode = judgement.getMetavariableNode(), judgementPresent = this.isJudgementPresentByMetavariableNode(metavariableNode);
                if (!judgementPresent) {
                    this.judgements.push(judgement);
                    judgementAdded = true;
                }
                return judgementAdded;
            }
        },
        {
            key: "addMetavariable",
            value: function addMetavariable(metavariable) {
                var metavariableAdded = false;
                var metavariableName = metavariable.getName(), metavariablePresent = this.isMetavariablePresentByMetavariableName(metavariableName);
                if (!metavariablePresent) {
                    this.metavariables.push(metavariable);
                    metavariableAdded = true;
                }
                return metavariableAdded;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNode, localContext) {
                var proofSteps = this.getProofSteps();
                proofSteps = (0, _array.reverse)(proofSteps); ///
                var equivalences = this.getEquivalences(), localContextA = this, localContextB = localContext, statementNodeB = statementNode, statementUnified = proofSteps.some(function(proofStep) {
                    var statementUnified = proofStep.unifyStatement(statementNodeB, equivalences, localContextA, localContextB);
                    if (statementUnified) {
                        return true;
                    }
                });
                return statementUnified;
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
            key: "isVariableDefined",
            value: function isVariableDefined(variable) {
                var context = this, equivalences = this.getEquivalences(), groundedTerms = [], definedVariables = [];
                (0, _equivalences.groundedTermsAndDefinedVariablesFromFromEquivalences)(equivalences, groundedTerms, definedVariables, context);
                var variableMatchesDefinedVariable = definedVariables.some(function(definedVariable) {
                    var variableMatchesDefinedVariable = variable.match(definedVariable);
                    if (variableMatchesDefinedVariable) {
                        return true;
                    }
                }), variableDefined = variableMatchesDefinedVariable; ///
                return variableDefined;
            }
        },
        {
            key: "isMetavariableDefined",
            value: function isMetavariableDefined(metavariable) {
                var metavariableDefined;
                debugger;
                return metavariableDefined;
            }
        },
        {
            key: "isVariablePresentByVariableNode",
            value: function isVariablePresentByVariableNode(variableNode) {
                var variable = this.findVariableByVariableNode(variableNode), variablePresent = variable !== null;
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
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                return this.context.isTypePresentByTypeName(typeName);
            }
        },
        {
            key: "isTypePresentByTypeNode",
            value: function isTypePresentByTypeNode(typeNode) {
                return this.context.isTypePresentByTypeNode(typeNode);
            }
        },
        {
            key: "isLabelPresentByMetavariableNode",
            value: function isLabelPresentByMetavariableNode(metavariableNode) {
                return this.context.isLabelPresentByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "isMetavariablePresentByMetavariableName",
            value: function isMetavariablePresentByMetavariableName(metavariableName) {
                return this.context.isMetavariablePresentByMetavariableName(metavariableName);
            }
        },
        {
            key: "isMetavariablePresentByMetavariableNode",
            value: function isMetavariablePresentByMetavariableNode(metavariableNode) {
                return this.context.isMetavariablePresentByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "findVariableByVariableNode",
            value: function findVariableByVariableNode(variableNode) {
                var node = variableNode, variables = this.getVariables(), variable = variables.find(function(variable) {
                    var matches = variable.matchNode(node);
                    if (matches) {
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
            key: "findMetavariableByMetavariableNode",
            value: function findMetavariableByMetavariableNode(metavariableNode) {
                var localContext = this, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode, localContext);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                return this.context.findTypeByTypeName(typeName);
            }
        },
        {
            key: "findTypeByTypeNode",
            value: function findTypeByTypeNode(typeNode) {
                return this.context.findTypeByTypeNode(typeNode);
            }
        },
        {
            key: "findLabelByMetavariableNode",
            value: function findLabelByMetavariableNode(metavariableNode) {
                return this.context.findLabelByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "findMetaTypeByMetaTypeNode",
            value: function findMetaTypeByMetaTypeNode(metaTypeNode) {
                return this.context.findMetaTypeByMetaTypeNode(metaTypeNode);
            }
        },
        {
            key: "findRuleByMetavariableNode",
            value: function findRuleByMetavariableNode(metavariableNode) {
                return this.context.findRuleByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "findAxiomByMetavariableNode",
            value: function findAxiomByMetavariableNode(metavariableNode) {
                return this.context.findAxiomByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "findLemmaByMetavariableNode",
            value: function findLemmaByMetavariableNode(metavariableNode) {
                return this.context.findLemmaByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "findTheoremByMetavariableNode",
            value: function findTheoremByMetavariableNode(metavariableNode) {
                return this.context.findTheoremByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "findMetaLemmaByMetavariableNode",
            value: function findMetaLemmaByMetavariableNode(metavariableNode) {
                return this.context.findMetaLemmaByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "findConjectureByMetavariableNode",
            value: function findConjectureByMetavariableNode(metavariableNode) {
                return this.context.findConjectureByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "findMetatheoremByMetavariableNode",
            value: function findMetatheoremByMetavariableNode(metavariableNode) {
                return this.context.findMetatheoremByMetavariableNode(metavariableNode);
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                return this.context.findMetavariableByMetavariableName(metavariableName);
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
        },
        {
            key: "fatal",
            value: function fatal(message, node) {
                this.context.fatal(node, message);
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, variables = [], proofSteps = [], equivalences = [], judgements = [], metavariables = [], localContext = new LocalContext(context, variables, proofSteps, judgements, equivalences, metavariables);
                return localContext;
            }
        },
        {
            key: "fromLocalContext",
            value: function fromLocalContext(localContext) {
                var context = localContext, variables = [], proofSteps = [], equivalences = [], judgements = [], metavariables = [];
                localContext = new LocalContext(context, variables, proofSteps, judgements, equivalences, metavariables); ///
                return localContext;
            }
        }
    ]);
    return LocalContext;
}();
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1aXZhbGVuY2UgZnJvbSBcIi4uL2VxdWl2YWxlbmNlXCI7XG5cbmltcG9ydCB7IGxhc3QsIHJldmVyc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBtZXJnZUVxdWl2YWxlbmNlcywgZmluZEVxdWl2YWxlbmNlQnlUZXJtLCBncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lcXVpdmFsZW5jZXNcIjtcblxuY2xhc3MgTG9jYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMucHJvb2ZTdGVwcyA9IHByb29mU3RlcHM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGxldCB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICB2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAuLi52YXJpYWJsZXNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgbGV0IHByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4ucHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlc0EgPSB0aGlzLmVxdWl2YWxlbmNlcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzQiA9IGVxdWl2YWxlbmNlcyxcbiAgICAgICAgICBMb2NhbENvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMgPSBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBMb2NhbENvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdFByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5wcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mU3RlcDtcbiAgfVxuXG4gIGdldFRva2VucygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUb2tlbnMoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldExlbW1hcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKTsgfVxuXG4gIGdldFRoZW9yZW1zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFRoZW9yZW1zKCk7IH1cblxuICBnZXRDb25qZWN0dXJlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25qZWN0dXJlcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgbGV0IGVxdWFsaXR5QWRkZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm0gPSBlcXVhbGl0eS5nZXRMZWZ0VGVybSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgICBsZWZ0RXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGhpcy5lcXVpdmFsZW5jZXMsIGxlZnRUZXJtKSxcbiAgICAgICAgICAgIHJpZ2h0RXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGhpcy5lcXVpdmFsZW5jZXMsIHJpZ2h0VGVybSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSA9PT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgPT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UuZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtKGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICAgIHRoaXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlICE9PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgbGVmdEVxdWl2YWxlbmNlLmFkZFRlcm0ocmlnaHRUZXJtKTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSA9PT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgIT09IG51bGwpKSB7XG4gICAgICAgIHJpZ2h0RXF1aXZhbGVuY2UuYWRkVGVybShsZWZ0VGVybSk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgIT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlICE9PSBudWxsKSkge1xuICAgICAgICBsZXQgZXF1aXZhbGVuY2U7XG5cbiAgICAgICAgaWYgKGxlZnRFcXVpdmFsZW5jZSA9PT0gcmlnaHRFcXVpdmFsZW5jZSkge1xuICAgICAgICAgIGVxdWl2YWxlbmNlID0gbGVmdEVxdWl2YWxlbmNlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5tZXJnZShsZWZ0RXF1aXZhbGVuY2UsIHJpZ2h0RXF1aXZhbGVuY2UpO1xuXG4gICAgICAgICAgdGhpcy5yZW1vdmVFcXVpdmFsZW5jZShsZWZ0RXF1aXZhbGVuY2UpO1xuXG4gICAgICAgICAgdGhpcy5yZW1vdmVFcXVpdmFsZW5jZShyaWdodEVxdWl2YWxlbmNlKTtcblxuICAgICAgICAgIHRoaXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXF1aXZhbGVuY2UuYWRkVGVybShsZWZ0VGVybSk7XG5cbiAgICAgICAgZXF1aXZhbGVuY2UuYWRkVGVybShyaWdodFRlcm0pO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eUFkZGVkO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLnZhcmlhYmxlcy5zb21lKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVNYXRjaGVzTm9kZSA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTWF0Y2hlc05vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIHRoaXMucHJvb2ZTdGVwcy5wdXNoKHByb29mU3RlcCk7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIHRoaXMuZXF1aXZhbGVuY2VzLnB1c2goZXF1aXZhbGVuY2UpO1xuICB9XG5cbiAgcmVtb3ZlRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZXF1aXZhbGVuY2VzLmluZGV4T2YoZXF1aXZhbGVuY2UpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmVxdWl2YWxlbmNlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBsZXQganVkZ2VtZW50QWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBqdWRnZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmICghanVkZ2VtZW50UHJlc2VudCkge1xuICAgICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcblxuICAgICAganVkZ2VtZW50QWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnRBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gdGhpcy5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gcHJvb2ZTdGVwcy5zb21lKChwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSBwcm9vZlN0ZXAudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUIsIGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgbGV0IHRlcm1UeXBlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IGZpbmRFcXVpdmFsZW5jZUJ5VGVybShlcXVpdmFsZW5jZXMsIHRlcm0pO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBMb2NhbENvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBlcXVpdmFsZW5jZVR5cGUgPSBlcXVpdmFsZW5jZS5nZXRUeXBlKExvY2FsQ29udGV4dCk7XG5cbiAgICAgIHRlcm1UeXBlID0gZXF1aXZhbGVuY2VUeXBlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLnNvbWUoKGRlZmluZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlID0gdmFyaWFibGUubWF0Y2goZGVmaW5lZFZhcmlhYmxlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVmaW5lZDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlRGVmaW5lZDtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVmaW5lZFxuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTm9kZSh0eXBlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOb2RlKHR5cGVOb2RlKTsgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBqdWRnZW1lbnQubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7IH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSk7IH1cblxuICBmaW5kUnVsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZFJ1bGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBmaW5kQXhpb21CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRBeGlvbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGZpbmRMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZExlbW1hQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgZmluZFRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUaGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQ29uamVjdHVyZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF0aGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpOyB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQubm9kZXNBc1N0cmluZyhub2RlKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LnRyYWNlKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBpbmZvKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LmluZm8obWVzc2FnZSwgbm9kZSk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0Lndhcm5pbmcobWVzc2FnZSwgbm9kZSk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGZhdGFsKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LmZhdGFsKG5vZGUsIG1lc3NhZ2UpOyB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTG9jYWxDb250ZXh0KGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXTtcblxuICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIG1ldGF2YXJpYWJsZXMpOyAgLy8vXG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsQ29udGV4dDsiXSwibmFtZXMiOlsiTG9jYWxDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsInByb29mU3RlcHMiLCJqdWRnZW1lbnRzIiwiZXF1aXZhbGVuY2VzIiwibWV0YXZhcmlhYmxlcyIsImdldENvbnRleHQiLCJnZXRWYXJpYWJsZXMiLCJnZXRQcm9vZlN0ZXBzIiwiZ2V0SnVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlc0EiLCJlcXVpdmFsZW5jZXNCIiwibWVyZ2VFcXVpdmFsZW5jZXMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0TGFzdFByb29mU3RlcCIsImxhc3RQcm9vZlN0ZXAiLCJwcm9vZlN0ZXBzTGVuZ3RoIiwibGVuZ3RoIiwibGFzdCIsImdldFRva2VucyIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUFkZGVkIiwiZXF1YWxpdHlSZWZsZXhpdmUiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRSaWdodFRlcm0iLCJsZWZ0RXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJyaWdodEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJFcXVpdmFsZW5jZSIsImZyb21MZWZ0VGVybUFuZFJpZ2h0VGVybSIsImFkZEVxdWl2YWxlbmNlIiwiYWRkVGVybSIsIm1lcmdlIiwicmVtb3ZlRXF1aXZhbGVuY2UiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVBZGRlZCIsIm5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVQcmVzZW50Iiwic29tZSIsInZhcmlhYmxlTWF0Y2hlc05vZGUiLCJtYXRjaE5vZGUiLCJwdXNoIiwiYWRkUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwiaW5kZXgiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFkZGVkIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQWRkZWQiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJyZXZlcnNlIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudFVuaWZpZWQiLCJnZXRUZXJtVHlwZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImVxdWl2YWxlbmNlVHlwZSIsImdldFR5cGUiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwiZ3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXNGcm9tRnJvbUVxdWl2YWxlbmNlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Hcm91bmRlZCIsImlzVmFyaWFibGVEZWZpbmVkIiwidmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlIiwibWF0Y2giLCJ2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJtZXRhdmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlUeXBlTm9kZSIsInR5cGVOb2RlIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kIiwibWF0Y2hlcyIsImp1ZGdlbWVudE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOb2RlIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJmaW5kUnVsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRBeGlvbUJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRUaGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGFMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRDb25qZWN0dXJlQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGF0aGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm5vZGVBc1N0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsImZyb21GaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiZnJvbUxvY2FsQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMmJBOzs7ZUFBQTs7O2tFQXpid0I7cUJBRU07NEJBQ2lGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRyxJQUFB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