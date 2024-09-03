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
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _equivalence = /*#__PURE__*/ _interop_require_default(require("../equivalence"));
var _context = /*#__PURE__*/ _interop_require_default(require("../mixins/context"));
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
    function LocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps) {
        _class_call_check(this, LocalContext);
        this.context = context;
        this.variables = variables;
        this.proofSteps = proofSteps;
        this.equivalences = equivalences;
        this.judgements = judgements;
        this.metavariables = metavariables;
        this.metaproofSteps = metaproofSteps;
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
            key: "getEquivalences",
            value: function getEquivalences() {
                var equivalences = this.context.getEquivalences();
                var equivalencesA = this.equivalences, equivalencesB = equivalences, _$LocalContext = this; ///
                equivalences = (0, _equivalences.mergeEquivalences)(equivalencesA, equivalencesB, _$LocalContext); ///
                return equivalences;
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
            key: "getMetavariables",
            value: function getMetavariables() {
                var metavariables = this.context.getMetavariables();
                metavariables = _to_consumable_array(this.metavariables).concat(_to_consumable_array(metavariables));
                return metavariables;
            }
        },
        {
            key: "getMetaproofSteps",
            value: function getMetaproofSteps() {
                var metaproofSteps = this.context.getMetaproofSteps();
                metaproofSteps = _to_consumable_array(metaproofSteps).concat(_to_consumable_array(this.metaproofSteps));
                return metaproofSteps;
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
            key: "getLastMetaproofStep",
            value: function getLastMetaproofStep() {
                var lastMetaproofStep = null;
                var metaproofStepsLength = this.metaproofSteps.length;
                if (metaproofStepsLength > 0) {
                    lastMetaproofStep = (0, _array.last)(this.metaproofSteps);
                }
                return lastMetaproofStep;
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
                var node = metavariable.getName(), metavariablePresent = this.metavariables.some(function(metavariable) {
                    var metavariableMatchesNode = metavariable.matchNode(node);
                    if (metavariableMatchesNode) {
                        return true;
                    }
                });
                if (!metavariablePresent) {
                    this.metavariables.push(metavariable);
                    metavariableAdded = true;
                }
                return metavariableAdded;
            }
        },
        {
            key: "addMetaproofStep",
            value: function addMetaproofStep(metaproofStep) {
                this.metaproofSteps.push(metaproofStep);
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                var proofSteps = this.getProofSteps();
                proofSteps = (0, _array.reverse)(proofSteps); ///
                var matchesStatementNode = proofSteps.some(function(proofStep) {
                    var proofStepMatchesStatementNode = proofStep.matchStatementNode(statementNode);
                    if (proofStepMatchesStatementNode) {
                        return true;
                    }
                });
                return matchesStatementNode;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode) {
                var metaproofSteps = this.getMetaproofSteps();
                metaproofSteps = (0, _array.reverse)(metaproofSteps); ///
                var matchesMetastatementNode = metaproofSteps.some(function(metaproofStep) {
                    var metaproofStepMatchesMetastatementNode = metaproofStep.matchMetastatementNode(metastatementNode);
                    if (metaproofStepMatchesMetastatementNode) {
                        return true;
                    }
                });
                return matchesMetastatementNode;
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
                    var termMatchesGroundedTerm = term.match(groundedTerm);
                    if (termMatchesGroundedTerm) {
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
            key: "isMetavariablePresentByMetavariableNode",
            value: function isMetavariablePresentByMetavariableNode(metavariableNode, localContext) {
                var metavariable = this.findMetavariableByMetavariableNode(metavariableNode, localContext), metavariablePresent = metavariable !== null;
                return metavariablePresent;
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
            value: function findMetavariableByMetavariableNode(metavariableNode, localContext) {
                var node = metavariableNode, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var matches = metavariable.matchNode(node, localContext);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, variables = [], proofSteps = [], equivalences = [], judgements = [], metavariables = [], metaproofSteps = [], localContext = new LocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps);
                return localContext;
            }
        },
        {
            key: "fromLocalContext",
            value: function fromLocalContext(localContext) {
                var context = localContext, variables = [], proofSteps = [], equivalences = [], judgements = [], metavariables = [], metaproofSteps = [];
                localContext = new LocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps); ///
                return localContext;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var variables = json.variables;
                var variablesJSON = variables;
                variables = variablesJSON.map(function(variableJSON) {
                    var _$json = variableJSON, variable = _variable.default.fromJSONAndFileContext(_$json, fileContext);
                    return variable;
                });
                var context = fileContext, proofSteps = [], equivalences = [], judgements = [], metavariables = [], metaproofSteps = [], localContext = new LocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps); ///
                return localContext;
            }
        }
    ]);
    return LocalContext;
}();
Object.assign(LocalContext.prototype, _context.default);
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgRXF1aXZhbGVuY2UgZnJvbSBcIi4uL2VxdWl2YWxlbmNlXCI7XG5pbXBvcnQgY29udGV4dE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgbGFzdCwgcmV2ZXJzZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG1lcmdlRXF1aXZhbGVuY2VzLCBmaW5kRXF1aXZhbGVuY2VCeVRlcm0sIGdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VxdWl2YWxlbmNlc1wiO1xuXG5jbGFzcyBMb2NhbENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGVxdWl2YWxlbmNlcywganVkZ2VtZW50cywgbWV0YXZhcmlhYmxlcywgbWV0YXByb29mU3RlcHMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMucHJvb2ZTdGVwcyA9IHByb29mU3RlcHM7XG4gICAgdGhpcy5lcXVpdmFsZW5jZXMgPSBlcXVpdmFsZW5jZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YXByb29mU3RlcHMgPSBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICBsZXQgdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgdmFyaWFibGVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMudmFyaWFibGVzLFxuICAgICAgLi4udmFyaWFibGVzXG4gICAgXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBzKCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIHByb29mU3RlcHMgPSBbICAvLy9cbiAgICAgIC4uLnByb29mU3RlcHMsXG4gICAgICAuLi50aGlzLnByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlc0EgPSB0aGlzLmVxdWl2YWxlbmNlcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzQiA9IGVxdWl2YWxlbmNlcyxcbiAgICAgICAgICBMb2NhbENvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMgPSBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBMb2NhbENvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGxldCBqdWRnZW1lbnRzID0gdGhpcy5jb250ZXh0LmdldEp1ZGdlbWVudHMoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF1cblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlcyA9IHRoaXMuY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKCk7XG5cbiAgICBtZXRhdmFyaWFibGVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMubWV0YXZhcmlhYmxlcyxcbiAgICAgIC4uLm1ldGF2YXJpYWJsZXNcbiAgICBdXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGFwcm9vZlN0ZXBzKCkge1xuICAgIGxldCBtZXRhcHJvb2ZTdGVwcyA9IHRoaXMuY29udGV4dC5nZXRNZXRhcHJvb2ZTdGVwcygpO1xuXG4gICAgbWV0YXByb29mU3RlcHMgPSBbICAvLy9cbiAgICAgIC4uLm1ldGFwcm9vZlN0ZXBzLFxuICAgICAgLi4udGhpcy5tZXRhcHJvb2ZTdGVwc1xuICAgIF07XG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0UHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcHNMZW5ndGggPSB0aGlzLnByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0UHJvb2ZTdGVwID0gbGFzdCh0aGlzLnByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgZ2V0TGFzdE1ldGFwcm9vZlN0ZXAoKSB7XG4gICAgbGV0IGxhc3RNZXRhcHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzTGVuZ3RoID0gdGhpcy5tZXRhcHJvb2ZTdGVwcy5sZW5ndGg7XG5cbiAgICBpZiAobWV0YXByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0TWV0YXByb29mU3RlcCA9IGxhc3QodGhpcy5tZXRhcHJvb2ZTdGVwcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RNZXRhcHJvb2ZTdGVwO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBsZXQgZXF1YWxpdHlBZGRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVmbGV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmIChlcXVhbGl0eVJlZmxleGl2ZSkge1xuICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybSA9IGVxdWFsaXR5LmdldExlZnRUZXJtKCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSBlcXVhbGl0eS5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICAgIGxlZnRFcXVpdmFsZW5jZSA9IGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0aGlzLmVxdWl2YWxlbmNlcywgbGVmdFRlcm0pLFxuICAgICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZSA9IGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0aGlzLmVxdWl2YWxlbmNlcywgcmlnaHRUZXJtKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlID09PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5mcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0obGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgICAgICAgdGhpcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgIT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlID09PSBudWxsKSkge1xuICAgICAgICBsZWZ0RXF1aXZhbGVuY2UuYWRkVGVybShyaWdodFRlcm0pO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlID09PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgcmlnaHRFcXVpdmFsZW5jZS5hZGRUZXJtKGxlZnRUZXJtKTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSAhPT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgIT09IG51bGwpKSB7XG4gICAgICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgICAgICBpZiAobGVmdEVxdWl2YWxlbmNlID09PSByaWdodEVxdWl2YWxlbmNlKSB7XG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBsZWZ0RXF1aXZhbGVuY2U7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLm1lcmdlKGxlZnRFcXVpdmFsZW5jZSwgcmlnaHRFcXVpdmFsZW5jZSk7XG5cbiAgICAgICAgICB0aGlzLnJlbW92ZUVxdWl2YWxlbmNlKGxlZnRFcXVpdmFsZW5jZSk7XG5cbiAgICAgICAgICB0aGlzLnJlbW92ZUVxdWl2YWxlbmNlKHJpZ2h0RXF1aXZhbGVuY2UpO1xuXG4gICAgICAgICAgdGhpcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlcXVpdmFsZW5jZS5hZGRUZXJtKGxlZnRUZXJtKTtcblxuICAgICAgICBlcXVpdmFsZW5jZS5hZGRUZXJtKHJpZ2h0VGVybSk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5QWRkZWQ7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGxldCB2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMudmFyaWFibGVzLnNvbWUoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNOb2RlID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVNYXRjaGVzTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgdmFyaWFibGVBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlQWRkZWQ7XG4gIH1cblxuICBhZGRQcm9vZlN0ZXAocHJvb2ZTdGVwKSB7XG4gICAgdGhpcy5wcm9vZlN0ZXBzLnB1c2gocHJvb2ZTdGVwKTtcbiAgfVxuXG4gIGFkZEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlKSB7XG4gICAgdGhpcy5lcXVpdmFsZW5jZXMucHVzaChlcXVpdmFsZW5jZSk7XG4gIH1cblxuICByZW1vdmVFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5lcXVpdmFsZW5jZXMuaW5kZXhPZihlcXVpdmFsZW5jZSksXG4gICAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICAgIHRoaXMuZXF1aXZhbGVuY2VzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGxldCBqdWRnZW1lbnRBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGp1ZGdlbWVudC5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IHRoaXMuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKCFqdWRnZW1lbnRQcmVzZW50KSB7XG4gICAgICB0aGlzLmp1ZGdlbWVudHMucHVzaChqdWRnZW1lbnQpO1xuXG4gICAgICBqdWRnZW1lbnRBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudEFkZGVkO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBtZXRhdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IHRoaXMubWV0YXZhcmlhYmxlcy5zb21lKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1hdGNoZXNOb2RlID0gbWV0YXZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU1hdGNoZXNOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCFtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuXG4gICAgICBtZXRhdmFyaWFibGVBZGRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkTWV0YXByb29mU3RlcChtZXRhcHJvb2ZTdGVwKSB7XG4gICAgdGhpcy5tZXRhcHJvb2ZTdGVwcy5wdXNoKG1ldGFwcm9vZlN0ZXApO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgcHJvb2ZTdGVwcyA9IHRoaXMuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gICAgY29uc3QgbWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXBzLnNvbWUoKHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1N0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFwcm9vZlN0ZXBzID0gdGhpcy5nZXRNZXRhcHJvb2ZTdGVwcygpO1xuXG4gICAgbWV0YXByb29mU3RlcHMgPSByZXZlcnNlKG1ldGFwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBjb25zdCBtYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhcHJvb2ZTdGVwcy5zb21lKChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgICBjb25zdCBtZXRhcHJvb2ZTdGVwTWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXByb29mU3RlcC5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKG1ldGFwcm9vZlN0ZXBNYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0VGVybVR5cGUodGVybSkge1xuICAgIGxldCB0ZXJtVHlwZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm0oZXF1aXZhbGVuY2VzLCB0ZXJtKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgTG9jYWxDb250ZXh0ID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgZXF1aXZhbGVuY2VUeXBlID0gZXF1aXZhbGVuY2UuZ2V0VHlwZShMb2NhbENvbnRleHQpO1xuXG4gICAgICB0ZXJtVHlwZSA9IGVxdWl2YWxlbmNlVHlwZTsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVHlwZTtcbiAgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcyxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzKGVxdWl2YWxlbmNlcywgZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IHRlcm0ubWF0Y2goZ3JvdW5kZWRUZXJtKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRlcm1Hcm91bmRlZCA9IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtOyAvLy9cblxuICAgIHJldHVybiB0ZXJtR3JvdW5kZWQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzRnJvbUZyb21FcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuc29tZSgoZGVmaW5lZFZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUgPSB2YXJpYWJsZS5tYXRjaChkZWZpbmVkVmFyaWFibGUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZTsgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWZpbmVkO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBqdWRnZW1lbnQubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTm9kZShub2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMsIGp1ZGdlbWVudHMsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvY2FsQ29udGV4dChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YXByb29mU3RlcHMgPSBbXTtcblxuICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMsIGp1ZGdlbWVudHMsIG1ldGF2YXJpYWJsZXMsIG1ldGFwcm9vZlN0ZXBzKTsgIC8vL1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgdmFyaWFibGVzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcztcblxuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0pTT04ubWFwKCh2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFwcm9vZlN0ZXBzID0gW10sXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGVxdWl2YWxlbmNlcywganVkZ2VtZW50cywgbWV0YXZhcmlhYmxlcywgbWV0YXByb29mU3RlcHMpOyAgLy8vXG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTG9jYWxDb250ZXh0LnByb3RvdHlwZSwgY29udGV4dE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsQ29udGV4dDsiXSwibmFtZXMiOlsiTG9jYWxDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsInByb29mU3RlcHMiLCJlcXVpdmFsZW5jZXMiLCJqdWRnZW1lbnRzIiwibWV0YXZhcmlhYmxlcyIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0Q29udGV4dCIsImdldFZhcmlhYmxlcyIsImdldFByb29mU3RlcHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXNBIiwiZXF1aXZhbGVuY2VzQiIsIm1lcmdlRXF1aXZhbGVuY2VzIiwiZ2V0SnVkZ2VtZW50cyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsImdldExhc3RQcm9vZlN0ZXAiLCJsYXN0UHJvb2ZTdGVwIiwicHJvb2ZTdGVwc0xlbmd0aCIsImxlbmd0aCIsImxhc3QiLCJnZXRMYXN0TWV0YXByb29mU3RlcCIsImxhc3RNZXRhcHJvb2ZTdGVwIiwibWV0YXByb29mU3RlcHNMZW5ndGgiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlBZGRlZCIsImVxdWFsaXR5UmVmbGV4aXZlIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybSIsImdldExlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwibGVmdEVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwicmlnaHRFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwiRXF1aXZhbGVuY2UiLCJmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0iLCJhZGRFcXVpdmFsZW5jZSIsImFkZFRlcm0iLCJtZXJnZSIsInJlbW92ZUVxdWl2YWxlbmNlIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlQWRkZWQiLCJub2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlUHJlc2VudCIsInNvbWUiLCJ2YXJpYWJsZU1hdGNoZXNOb2RlIiwibWF0Y2hOb2RlIiwicHVzaCIsImFkZFByb29mU3RlcCIsInByb29mU3RlcCIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBZGRlZCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVNYXRjaGVzTm9kZSIsImFkZE1ldGFwcm9vZlN0ZXAiLCJtZXRhcHJvb2ZTdGVwIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInJldmVyc2UiLCJtYXRjaGVzU3RhdGVtZW50Tm9kZSIsInByb29mU3RlcE1hdGNoZXNTdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXByb29mU3RlcE1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSIsImdldFRlcm1UeXBlIiwidGVybSIsInRlcm1UeXBlIiwiZXF1aXZhbGVuY2VUeXBlIiwiZ2V0VHlwZSIsImlzVGVybUdyb3VuZGVkIiwiZ3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJncm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlc0Zyb21Gcm9tRXF1aXZhbGVuY2VzIiwidGVybU1hdGNoZXNHcm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm0iLCJtYXRjaCIsInRlcm1Hcm91bmRlZCIsImlzVmFyaWFibGVEZWZpbmVkIiwidmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImxvY2FsQ29udGV4dCIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kIiwibWF0Y2hlcyIsImp1ZGdlbWVudE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJmcm9tTG9jYWxDb250ZXh0IiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImpzb24iLCJ2YXJpYWJsZXNKU09OIiwibWFwIiwidmFyaWFibGVKU09OIiwiVmFyaWFibGUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJjb250ZXh0TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvY0E7OztlQUFBOzs7K0RBbGNxQjtrRUFDRzs4REFDRTtxQkFFSTs0QkFDaUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9HLElBQUEsQUFBTUEsNkJBQUQsQUFBTDthQUFNQSxhQUNRQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxjQUFjO2dDQUQvRlA7UUFFRixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsY0FBYyxHQUFHQTs7a0JBUnBCUDs7WUFXSlEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxPQUFPO1lBQ3JCOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlQLFlBQVksSUFBSSxDQUFDRCxPQUFPLENBQUNRLFlBQVk7Z0JBRXpDUCxZQUFZLEFBQ1YscUJBQUcsSUFBSSxDQUFDQSxTQUFTLFNBQ2pCLHFCQUFHQTtnQkFHTCxPQUFPQTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlQLGFBQWEsSUFBSSxDQUFDRixPQUFPLENBQUNTLGFBQWE7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