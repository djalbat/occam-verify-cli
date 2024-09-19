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
                var judgements = this.getJudgements(), metavariableNode = metavariable.getNode(), metavariableDefined = judgements.some(function(judgement) {
                    var metavariableNodeMatchesJudgement = judgement.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatchesJudgement) {
                        return true;
                    }
                });
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
                    var nodeMatches = variable.matchNode(node);
                    if (nodeMatches) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXF1aXZhbGVuY2UgZnJvbSBcIi4uL2VxdWl2YWxlbmNlXCI7XG5cbmltcG9ydCB7IGxhc3QsIHJldmVyc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBtZXJnZUVxdWl2YWxlbmNlcywgZmluZEVxdWl2YWxlbmNlQnlUZXJtLCBncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lcXVpdmFsZW5jZXNcIjtcblxuY2xhc3MgTG9jYWxDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMucHJvb2ZTdGVwcyA9IHByb29mU3RlcHM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGxldCB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICB2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAuLi52YXJpYWJsZXNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgbGV0IHByb29mU3RlcHMgPSB0aGlzLmNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgcHJvb2ZTdGVwcyA9IFsgIC8vL1xuICAgICAgLi4ucHJvb2ZTdGVwcyxcbiAgICAgIC4uLnRoaXMucHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlc0EgPSB0aGlzLmVxdWl2YWxlbmNlcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzQiA9IGVxdWl2YWxlbmNlcyxcbiAgICAgICAgICBMb2NhbENvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMgPSBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBMb2NhbENvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIGxldCBtZXRhdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mU3RlcCgpIHtcbiAgICBsZXQgbGFzdFByb29mU3RlcCA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5wcm9vZlN0ZXBzLmxlbmd0aDtcblxuICAgIGlmIChwcm9vZlN0ZXBzTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdFByb29mU3RlcCA9IGxhc3QodGhpcy5wcm9vZlN0ZXBzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mU3RlcDtcbiAgfVxuXG4gIGdldFRva2VucygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRUb2tlbnMoKTsgfVxuXG4gIGdldEF4aW9tcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKTsgfVxuXG4gIGdldExlbW1hcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKTsgfVxuXG4gIGdldFRoZW9yZW1zKCkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmdldFRoZW9yZW1zKCk7IH1cblxuICBnZXRDb25qZWN0dXJlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25qZWN0dXJlcygpOyB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTsgfVxuXG4gIGdldENvbnN0cnVjdG9ycygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTsgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgbGV0IGVxdWFsaXR5QWRkZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlZmxleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm0gPSBlcXVhbGl0eS5nZXRMZWZ0VGVybSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgICAgICBsZWZ0RXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGhpcy5lcXVpdmFsZW5jZXMsIGxlZnRUZXJtKSxcbiAgICAgICAgICAgIHJpZ2h0RXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGhpcy5lcXVpdmFsZW5jZXMsIHJpZ2h0VGVybSk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAvLy9cbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSA9PT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgPT09IG51bGwpKSB7XG4gICAgICAgIGNvbnN0IGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UuZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtKGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICAgIHRoaXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlICE9PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgbGVmdEVxdWl2YWxlbmNlLmFkZFRlcm0ocmlnaHRUZXJtKTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSA9PT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgIT09IG51bGwpKSB7XG4gICAgICAgIHJpZ2h0RXF1aXZhbGVuY2UuYWRkVGVybShsZWZ0VGVybSk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgIT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlICE9PSBudWxsKSkge1xuICAgICAgICBsZXQgZXF1aXZhbGVuY2U7XG5cbiAgICAgICAgaWYgKGxlZnRFcXVpdmFsZW5jZSA9PT0gcmlnaHRFcXVpdmFsZW5jZSkge1xuICAgICAgICAgIGVxdWl2YWxlbmNlID0gbGVmdEVxdWl2YWxlbmNlOyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5tZXJnZShsZWZ0RXF1aXZhbGVuY2UsIHJpZ2h0RXF1aXZhbGVuY2UpO1xuXG4gICAgICAgICAgdGhpcy5yZW1vdmVFcXVpdmFsZW5jZShsZWZ0RXF1aXZhbGVuY2UpO1xuXG4gICAgICAgICAgdGhpcy5yZW1vdmVFcXVpdmFsZW5jZShyaWdodEVxdWl2YWxlbmNlKTtcblxuICAgICAgICAgIHRoaXMuYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXF1aXZhbGVuY2UuYWRkVGVybShsZWZ0VGVybSk7XG5cbiAgICAgICAgZXF1aXZhbGVuY2UuYWRkVGVybShyaWdodFRlcm0pO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eUFkZGVkO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLnZhcmlhYmxlcy5zb21lKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVNYXRjaGVzTm9kZSA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTWF0Y2hlc05vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIHRoaXMucHJvb2ZTdGVwcy5wdXNoKHByb29mU3RlcCk7XG4gIH1cblxuICBhZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIHRoaXMuZXF1aXZhbGVuY2VzLnB1c2goZXF1aXZhbGVuY2UpO1xuICB9XG5cbiAgcmVtb3ZlRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZXF1aXZhbGVuY2VzLmluZGV4T2YoZXF1aXZhbGVuY2UpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmVxdWl2YWxlbmNlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBsZXQganVkZ2VtZW50QWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBqdWRnZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIGlmICghanVkZ2VtZW50UHJlc2VudCkge1xuICAgICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcblxuICAgICAganVkZ2VtZW50QWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnRBZGRlZDtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gdGhpcy5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dEEgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gcHJvb2ZTdGVwcy5zb21lKChwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSBwcm9vZlN0ZXAudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUIsIGVxdWl2YWxlbmNlcywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgbGV0IHRlcm1UeXBlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IGZpbmRFcXVpdmFsZW5jZUJ5VGVybShlcXVpdmFsZW5jZXMsIHRlcm0pO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBMb2NhbENvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBlcXVpdmFsZW5jZVR5cGUgPSBlcXVpdmFsZW5jZS5nZXRUeXBlKExvY2FsQ29udGV4dCk7XG5cbiAgICAgIHRlcm1UeXBlID0gZXF1aXZhbGVuY2VUeXBlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLnNvbWUoKGRlZmluZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlID0gdmFyaWFibGUubWF0Y2goZGVmaW5lZFZhcmlhYmxlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVmaW5lZDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGp1ZGdlbWVudHMuc29tZSgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlc0p1ZGdlbWVudCA9IGp1ZGdlbWVudC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlc0p1ZGdlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWZpbmVkXG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOb2RlKHR5cGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5vZGUodHlwZU5vZGUpOyB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0ganVkZ2VtZW50Lm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7IH1cblxuICBmaW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpOyB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpOyB9XG5cbiAgZmluZFJ1bGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRSdWxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgZmluZEF4aW9tQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kQXhpb21CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBmaW5kTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRMZW1tYUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGZpbmRUaGVvcmVtQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5maW5kVGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGZpbmRNZXRhTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBmaW5kQ29uamVjdHVyZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLmNvbnRleHQuZmluZENvbmplY3R1cmVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBmaW5kTWV0YXRoZW9yZW1CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTsgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkgeyByZXR1cm4gdGhpcy5jb250ZXh0Lm5vZGVzQXNTdHJpbmcobm9kZSk7IH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5jb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSwgbm9kZSkgeyB0aGlzLmNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSk7IH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlKSB7IHRoaXMuY29udGV4dC5mYXRhbChub2RlLCBtZXNzYWdlKTsgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvY2FsQ29udGV4dChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzLCBtZXRhdmFyaWFibGVzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhbENvbnRleHQ7Il0sIm5hbWVzIjpbIkxvY2FsQ29udGV4dCIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJwcm9vZlN0ZXBzIiwianVkZ2VtZW50cyIsImVxdWl2YWxlbmNlcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvb2ZTdGVwcyIsImdldEp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXNBIiwiZXF1aXZhbGVuY2VzQiIsIm1lcmdlRXF1aXZhbGVuY2VzIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImdldExhc3RQcm9vZlN0ZXAiLCJsYXN0UHJvb2ZTdGVwIiwicHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJnZXRUb2tlbnMiLCJnZXRBeGlvbXMiLCJnZXRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsImdldENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlBZGRlZCIsImVxdWFsaXR5UmVmbGV4aXZlIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybSIsImdldExlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwibGVmdEVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwicmlnaHRFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwiRXF1aXZhbGVuY2UiLCJmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0iLCJhZGRFcXVpdmFsZW5jZSIsImFkZFRlcm0iLCJtZXJnZSIsInJlbW92ZUVxdWl2YWxlbmNlIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlQWRkZWQiLCJub2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlUHJlc2VudCIsInNvbWUiLCJ2YXJpYWJsZU1hdGNoZXNOb2RlIiwibWF0Y2hOb2RlIiwicHVzaCIsImFkZFByb29mU3RlcCIsInByb29mU3RlcCIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBZGRlZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0IiwicmV2ZXJzZSIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRVbmlmaWVkIiwiZ2V0VGVybVR5cGUiLCJ0ZXJtIiwidGVybVR5cGUiLCJlcXVpdmFsZW5jZVR5cGUiLCJnZXRUeXBlIiwiaXNUZXJtR3JvdW5kZWQiLCJncm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsImdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtR3JvdW5kZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZSIsIm1hdGNoIiwidmFyaWFibGVEZWZpbmVkIiwiaXNNZXRhdmFyaWFibGVEZWZpbmVkIiwibWV0YXZhcmlhYmxlRGVmaW5lZCIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzSnVkZ2VtZW50IiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlUeXBlTm9kZSIsInR5cGVOb2RlIiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kIiwibm9kZU1hdGNoZXMiLCJqdWRnZW1lbnRNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTm9kZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOb2RlIiwiZmluZFJ1bGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kQXhpb21CeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kVGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhTGVtbWFCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kQ29uamVjdHVyZUJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdGhlb3JlbUJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJub2RlQXNTdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJmcm9tRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImZyb21Mb2NhbENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWljQTs7O2VBQUE7OztrRUEvYndCO3FCQUVNOzRCQUNpRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0csSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNRQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRUMsYUFBYTtnQ0FEL0VOO1FBRUYsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBUG5CTjs7WUFVSk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixPQUFPO1lBQ3JCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlOLFlBQVksSUFBSSxDQUFDRCxPQUFPLENBQUNPLFlBQVk7Z0JBRXpDTixZQUFZLEFBQ1YscUJBQUcsSUFBSSxDQUFDQSxTQUFTLFNBQ2pCLHFCQUFHQTtnQkFHTCxPQUFPQTtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlOLGFBQWEsSUFB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