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
    function LocalContext(context, variables, proofSteps, equivalences) {
        _class_call_check(this, LocalContext);
        this.context = context;
        this.variables = variables;
        this.proofSteps = proofSteps;
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
                var equivalencesA = this.equivalences, equivalencesB = equivalences, localContext = this; ///
                equivalences = (0, _equivalences.mergeEquivalences)(equivalencesA, equivalencesB, localContext); ///
                return equivalences;
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
            key: "getMetavariables",
            value: function getMetavariables() {
                return this.context.getMetavariables();
            }
        },
        {
            key: "getTermType",
            value: function getTermType(term) {
                var termType;
                var equivalences = this.getEquivalences(), equivalence = (0, _equivalences.findEquivalenceByTerm)(equivalences, term);
                if (equivalence !== null) {
                    var localContext = this, equivalenceType = equivalence.getType(localContext);
                    termType = equivalenceType; ///
                } else {
                    termType = term.getType();
                }
                return termType;
            }
        },
        {
            key: "isVariableDefined",
            value: function isVariableDefined(variable) {
                var variableDefined = false;
                var equivalences = this.getEquivalences(), remainingEquivalences = [], initiallyGroundedEquivalences = [];
                (0, _equivalences.separateEquivalences)(equivalences, remainingEquivalences, initiallyGroundedEquivalences);
                var initiallyGroundedEquivalencesLength = initiallyGroundedEquivalences.length;
                if (initiallyGroundedEquivalencesLength > 0) {
                    var groundedEquivalences, implicitlyGroundedEquivalences, implicitlyGroundedEquivalencesLength;
                    var context = this, definedVariables = [];
                    groundedEquivalences = initiallyGroundedEquivalences; ///
                    (0, _equivalences.definedVariablesFromGroundedEquivalences)(groundedEquivalences, definedVariables, context);
                    implicitlyGroundedEquivalences = (0, _equivalences.implicitlyGroundedEquivalencesFromRemainingEquivalencesAndDefinedVariables)(remainingEquivalences, definedVariables);
                    implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.length;
                    while(implicitlyGroundedEquivalencesLength > 0){
                        groundedEquivalences = implicitlyGroundedEquivalences; ///
                        (0, _equivalences.definedVariablesFromGroundedEquivalences)(groundedEquivalences, definedVariables, context);
                        implicitlyGroundedEquivalences = (0, _equivalences.implicitlyGroundedEquivalencesFromRemainingEquivalencesAndDefinedVariables)(remainingEquivalences, definedVariables);
                        implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.length;
                    }
                    (0, _equivalences.compressDefinedVariables)(definedVariables);
                    var definedVariablesIncludesVariable = definedVariables.includes(variable);
                    variableDefined = definedVariablesIncludesVariable; ///
                }
                return variableDefined;
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
                    var nodeMatches = variable.matchNode(node);
                    if (nodeMatches) {
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
            key: "matchStatement",
            value: function matchStatement(statementNode) {
                var statementMatches = false;
                if (!statementMatches) {
                    var proofStepMatchesStatement = this.proofSteps.some(function(proofStep) {
                        var proofStepMatchesStatement = proofStep.match(statementNode);
                        if (proofStepMatchesStatement) {
                            return true;
                        }
                    });
                    statementMatches = proofStepMatchesStatement; ///
                }
                if (!statementMatches) {
                    statementMatches = this.context.matchStatement(statementNode);
                }
                return statementMatches;
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
            key: "isVariablePresentByVariableNode",
            value: function isVariablePresentByVariableNode(variableNode) {
                var variable = this.findVariableByVariableNode(variableNode), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var variables = this.variables.map(function(variable) {
                    var variableJSON = variable.toJSON(tokens);
                    variable = variableJSON;
                    return variable;
                }), json = {
                    variables: variables
                };
                return json;
            }
        }
    ], [
        {
            key: "fromFileContext",
            value: function fromFileContext(fileContext) {
                var context = fileContext, variables = [], proofSteps = [], equivalences = [], localContext = new LocalContext(context, variables, proofSteps, equivalences);
                return localContext;
            }
        },
        {
            key: "fromLocalContext",
            value: function fromLocalContext(localContext) {
                var context = localContext, variables = [], proofSteps = [], equivalences = [];
                localContext = new LocalContext(context, variables, proofSteps, equivalences);
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
                var context = fileContext, proofSteps = [], equivalences = [], localContext = new LocalContext(context, variables, proofSteps, equivalences);
                return localContext;
            }
        }
    ]);
    return LocalContext;
}();
Object.assign(LocalContext.prototype, _context.default);
var _default = LocalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xvY2FsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgRXF1aXZhbGVuY2UgZnJvbSBcIi4uL2VxdWl2YWxlbmNlXCI7XG5pbXBvcnQgY29udGV4dE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgbGFzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG1lcmdlRXF1aXZhbGVuY2VzLFxuICAgICAgICAgc2VwYXJhdGVFcXVpdmFsZW5jZXMsXG4gICAgICAgICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0sXG4gICAgICAgICBjb21wcmVzc0RlZmluZWRWYXJpYWJsZXMsXG4gICAgICAgICBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzRnJvbVJlbWFpbmluZ0VxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VxdWl2YWxlbmNlc1wiO1xuXG5jbGFzcyBMb2NhbENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGVxdWl2YWxlbmNlcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5wcm9vZlN0ZXBzID0gcHJvb2ZTdGVwcztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICBsZXQgdmFyaWFibGVzID0gdGhpcy5jb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgdmFyaWFibGVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMudmFyaWFibGVzLFxuICAgICAgLi4udmFyaWFibGVzXG4gICAgXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBzKCkge1xuICAgIGxldCBwcm9vZlN0ZXBzID0gdGhpcy5jb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgIHByb29mU3RlcHMgPSBbICAvLy9cbiAgICAgIC4uLnByb29mU3RlcHMsXG4gICAgICAuLi50aGlzLnByb29mU3RlcHNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlc0EgPSB0aGlzLmVxdWl2YWxlbmNlcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzQiA9IGVxdWl2YWxlbmNlcyxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMgPSBtZXJnZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXNBLCBlcXVpdmFsZW5jZXNCLCBsb2NhbENvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZTdGVwKCkge1xuICAgIGxldCBsYXN0UHJvb2ZTdGVwID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mU3RlcHNMZW5ndGggPSB0aGlzLnByb29mU3RlcHMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mU3RlcHNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0UHJvb2ZTdGVwID0gbGFzdCh0aGlzLnByb29mU3RlcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0UHJvb2ZTdGVwO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKCk7IH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgbGV0IHRlcm1UeXBlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IGZpbmRFcXVpdmFsZW5jZUJ5VGVybShlcXVpdmFsZW5jZXMsIHRlcm0pO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBlcXVpdmFsZW5jZVR5cGUgPSBlcXVpdmFsZW5jZS5nZXRUeXBlKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHRlcm1UeXBlID0gZXF1aXZhbGVuY2VUeXBlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHtcbiAgICBsZXQgdmFyaWFibGVEZWZpbmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIHJlbWFpbmluZ0VxdWl2YWxlbmNlcyA9IFtdLFxuICAgICAgICAgIGluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gW107XG5cbiAgICBzZXBhcmF0ZUVxdWl2YWxlbmNlcyhlcXVpdmFsZW5jZXMsIHJlbWFpbmluZ0VxdWl2YWxlbmNlcywgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMpO1xuXG4gICAgY29uc3QgaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPSBpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlcy5sZW5ndGg7XG5cbiAgICBpZiAoaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNMZW5ndGggPiAwKSB7XG4gICAgICBsZXQgZ3JvdW5kZWRFcXVpdmFsZW5jZXMsXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aDtcblxuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICAgIGdyb3VuZGVkRXF1aXZhbGVuY2VzID0gaW5pdGlhbGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7IC8vL1xuXG4gICAgICBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzID0gaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzRnJvbVJlbWFpbmluZ0VxdWl2YWxlbmNlc0FuZERlZmluZWRWYXJpYWJsZXMocmVtYWluaW5nRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzKTtcblxuICAgICAgaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoID0gaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA+IDApIHtcbiAgICAgICAgZ3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXM7ICAvLy9cblxuICAgICAgICBkZWZpbmVkVmFyaWFibGVzRnJvbUdyb3VuZGVkRXF1aXZhbGVuY2VzKGdyb3VuZGVkRXF1aXZhbGVuY2VzLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXMgPSBpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNGcm9tUmVtYWluaW5nRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyhyZW1haW5pbmdFcXVpdmFsZW5jZXMsIGRlZmluZWRWYXJpYWJsZXMpO1xuXG4gICAgICAgIGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCA9IGltcGxpY2l0bHlHcm91bmRlZEVxdWl2YWxlbmNlcy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIGNvbXByZXNzRGVmaW5lZFZhcmlhYmxlcyhkZWZpbmVkVmFyaWFibGVzKTtcblxuICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLmluY2x1ZGVzKHZhcmlhYmxlKTtcblxuICAgICAgdmFyaWFibGVEZWZpbmVkID0gZGVmaW5lZFZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGU7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWZpbmVkO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBsZXQgZXF1YWxpdHlBZGRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVmbGV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmIChlcXVhbGl0eVJlZmxleGl2ZSkge1xuICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybSA9IGVxdWFsaXR5LmdldExlZnRUZXJtKCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSBlcXVhbGl0eS5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICAgIGxlZnRFcXVpdmFsZW5jZSA9IGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0aGlzLmVxdWl2YWxlbmNlcywgbGVmdFRlcm0pLFxuICAgICAgICAgICAgcmlnaHRFcXVpdmFsZW5jZSA9IGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0aGlzLmVxdWl2YWxlbmNlcywgcmlnaHRUZXJtKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgIC8vL1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlID09PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSA9PT0gbnVsbCkpIHtcbiAgICAgICAgY29uc3QgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5mcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0obGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgICAgICAgdGhpcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKChsZWZ0RXF1aXZhbGVuY2UgIT09IG51bGwpICYmIChyaWdodEVxdWl2YWxlbmNlID09PSBudWxsKSkge1xuICAgICAgICBsZWZ0RXF1aXZhbGVuY2UuYWRkVGVybShyaWdodFRlcm0pO1xuXG4gICAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICgobGVmdEVxdWl2YWxlbmNlID09PSBudWxsKSAmJiAocmlnaHRFcXVpdmFsZW5jZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgcmlnaHRFcXVpdmFsZW5jZS5hZGRUZXJtKGxlZnRUZXJtKTtcblxuICAgICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoKGxlZnRFcXVpdmFsZW5jZSAhPT0gbnVsbCkgJiYgKHJpZ2h0RXF1aXZhbGVuY2UgIT09IG51bGwpKSB7XG4gICAgICAgIGxldCBlcXVpdmFsZW5jZTtcblxuICAgICAgICBpZiAobGVmdEVxdWl2YWxlbmNlID09PSByaWdodEVxdWl2YWxlbmNlKSB7XG4gICAgICAgICAgZXF1aXZhbGVuY2UgPSBsZWZ0RXF1aXZhbGVuY2U7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlcXVpdmFsZW5jZSA9IEVxdWl2YWxlbmNlLm1lcmdlKGxlZnRFcXVpdmFsZW5jZSwgcmlnaHRFcXVpdmFsZW5jZSk7XG5cbiAgICAgICAgICB0aGlzLnJlbW92ZUVxdWl2YWxlbmNlKGxlZnRFcXVpdmFsZW5jZSk7XG5cbiAgICAgICAgICB0aGlzLnJlbW92ZUVxdWl2YWxlbmNlKHJpZ2h0RXF1aXZhbGVuY2UpO1xuXG4gICAgICAgICAgdGhpcy5hZGRFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlcXVpdmFsZW5jZS5hZGRUZXJtKGxlZnRUZXJtKTtcblxuICAgICAgICBlcXVpdmFsZW5jZS5hZGRUZXJtKHJpZ2h0VGVybSk7XG5cbiAgICAgICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5QWRkZWQ7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGxldCB2YXJpYWJsZUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMudmFyaWFibGVzLnNvbWUoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKG5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIGFkZFByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICB0aGlzLnByb29mU3RlcHMucHVzaChwcm9vZlN0ZXApO1xuICB9XG5cbiAgYWRkRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpIHtcbiAgICB0aGlzLmVxdWl2YWxlbmNlcy5wdXNoKGVxdWl2YWxlbmNlKTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50ID0gdGhpcy5wcm9vZlN0ZXBzLnNvbWUoKHByb29mU3RlcCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50ID0gcHJvb2ZTdGVwLm1hdGNoKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGlmIChwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gcHJvb2ZTdGVwTWF0Y2hlc1N0YXRlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZW1lbnRNYXRjaGVzKSB7XG4gICAgICBzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5jb250ZXh0Lm1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgcmVtb3ZlRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZXF1aXZhbGVuY2VzLmluZGV4T2YoZXF1aXZhbGVuY2UpLFxuICAgICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgICB0aGlzLmVxdWl2YWxlbmNlcy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047XG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBbXSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBuZXcgTG9jYWxDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywgcHJvb2ZTdGVwcywgZXF1aXZhbGVuY2VzKTtcblxuICAgIHJldHVybiBsb2NhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxvY2FsQ29udGV4dChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IFtdO1xuXG4gICAgbG9jYWxDb250ZXh0ID0gbmV3IExvY2FsQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIHByb29mU3RlcHMsIGVxdWl2YWxlbmNlcyk7XG5cbiAgICByZXR1cm4gbG9jYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyB2YXJpYWJsZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzO1xuXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTi5tYXAoKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IFtdLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IG5ldyBMb2NhbENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBwcm9vZlN0ZXBzLCBlcXVpdmFsZW5jZXMpO1xuXG4gICAgcmV0dXJuIGxvY2FsQ29udGV4dDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKExvY2FsQ29udGV4dC5wcm90b3R5cGUsIGNvbnRleHRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhbENvbnRleHQ7XG4iXSwibmFtZXMiOlsiTG9jYWxDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsInByb29mU3RlcHMiLCJlcXVpdmFsZW5jZXMiLCJnZXRDb250ZXh0IiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvb2ZTdGVwcyIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlc0EiLCJlcXVpdmFsZW5jZXNCIiwibG9jYWxDb250ZXh0IiwibWVyZ2VFcXVpdmFsZW5jZXMiLCJnZXRMYXN0UHJvb2ZTdGVwIiwibGFzdFByb29mU3RlcCIsInByb29mU3RlcHNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0IiwiZ2V0TWV0YXZhcmlhYmxlcyIsImdldFRlcm1UeXBlIiwidGVybSIsInRlcm1UeXBlIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJlcXVpdmFsZW5jZVR5cGUiLCJnZXRUeXBlIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ2YXJpYWJsZSIsInZhcmlhYmxlRGVmaW5lZCIsInJlbWFpbmluZ0VxdWl2YWxlbmNlcyIsImluaXRpYWxseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwic2VwYXJhdGVFcXVpdmFsZW5jZXMiLCJpbml0aWFsbHlHcm91bmRlZEVxdWl2YWxlbmNlc0xlbmd0aCIsImdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzIiwiaW1wbGljaXRseUdyb3VuZGVkRXF1aXZhbGVuY2VzTGVuZ3RoIiwiZGVmaW5lZFZhcmlhYmxlcyIsImRlZmluZWRWYXJpYWJsZXNGcm9tR3JvdW5kZWRFcXVpdmFsZW5jZXMiLCJpbXBsaWNpdGx5R3JvdW5kZWRFcXVpdmFsZW5jZXNGcm9tUmVtYWluaW5nRXF1aXZhbGVuY2VzQW5kRGVmaW5lZFZhcmlhYmxlcyIsImNvbXByZXNzRGVmaW5lZFZhcmlhYmxlcyIsImRlZmluZWRWYXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlBZGRlZCIsImVxdWFsaXR5UmVmbGV4aXZlIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybSIsImdldExlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwibGVmdEVxdWl2YWxlbmNlIiwicmlnaHRFcXVpdmFsZW5jZSIsIkVxdWl2YWxlbmNlIiwiZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwiYWRkRXF1aXZhbGVuY2UiLCJhZGRUZXJtIiwibWVyZ2UiLCJyZW1vdmVFcXVpdmFsZW5jZSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGVBZGRlZCIsIm5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVQcmVzZW50Iiwic29tZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwicHVzaCIsImFkZFByb29mU3RlcCIsInByb29mU3RlcCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJwcm9vZlN0ZXBNYXRjaGVzU3RhdGVtZW50IiwibWF0Y2giLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJmaW5kIiwibWF0Y2hlcyIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJ0b0pTT04iLCJ0b2tlbnMiLCJtYXAiLCJ2YXJpYWJsZUpTT04iLCJqc29uIiwiZnJvbUZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJmcm9tTG9jYWxDb250ZXh0IiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsInZhcmlhYmxlc0pTT04iLCJWYXJpYWJsZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImNvbnRleHRNaXhpbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTZVQTs7O2VBQUE7OzsrREEzVXFCO2tFQUNHOzhEQUNFO3FCQUVMOzRCQU1zRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0YsSUFBQSxBQUFNQSw2QkFBRCxBQUFMO2FBQU1BLGFBQ1FDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFlBQVk7Z0NBRHBESjtRQUVGLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFMbEJKOztZQVFKSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUosWUFBWSxJQUFJLENBQUNELE9BQU8sQ0FBQ0ssWUFBWTtnQkFFekNKLFlBQVksQUFDVixxQkFBRyxJQUFJLENBQUNBLFNBQVMsU0FDakIscUJBQUdBO2dCQUdMLE9BQU9BO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUosYUFBYSxJQUFJLENBQUNGLE9BQU8sQ0FBQ00sYUFBYTtnQkFFM0NKLGFBQWEsQUFDWCxxQkFBR0EsbUJBQ0gscUJBQUcsSUFBSSxDQUFDQSxVQUFVO2dCQUdwQixPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlKLGVBQWUsSUFBSSxDQUFDSCxPQUFPLENBQUNPLGVBQWU7Z0JBRS9DLElBQU1D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