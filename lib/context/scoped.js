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
var _occamfurtle = require("occam-furtle");
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
var last = _necessary.arrayUtilities.last, chainContext = _occamfurtle.contextUtilities.chainContext;
var ScopedContext = /*#__PURE__*/ function() {
    function ScopedContext(context, variables, judgements, equivalences, subproofOrProofAssertions) {
        _class_call_check(this, ScopedContext);
        this.context = context;
        this.variables = variables;
        this.judgements = judgements;
        this.equivalences = equivalences;
        this.subproofOrProofAssertions = subproofOrProofAssertions;
        return chainContext(this);
    }
    _create_class(ScopedContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
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
                var context = this; ///
                equivalences = this.equivalences.mergedWith(equivalences, context); ///
                return equivalences;
            }
        },
        {
            key: "getProofAssertions",
            value: function getProofAssertions() {
                var subproofOrProofAssertions = this.getSubproofOrProofAssertions(), proofAssertions = subproofOrProofAssertions.filter(function(subproofOrProofAssertion) {
                    var subproofOrProofAssertionproofAssertion = subproofOrProofAssertion.isProofAssertion();
                    if (subproofOrProofAssertionproofAssertion) {
                        return true;
                    }
                });
                return proofAssertions;
            }
        },
        {
            key: "getLastProofAssertion",
            value: function getLastProofAssertion() {
                var lastProofAssertion = null;
                var proofAssertions = this.getProofAssertions(), proofAssertionsLength = proofAssertions.length;
                if (proofAssertionsLength > 0) {
                    lastProofAssertion = last(proofAssertions);
                }
                return lastProofAssertion;
            }
        },
        {
            key: "getSubproofOrProofAssertions",
            value: function getSubproofOrProofAssertions() {
                var subproofOrProofAssertions = this.context.getSubproofOrProofAssertions();
                subproofOrProofAssertions = _to_consumable_array(subproofOrProofAssertions).concat(_to_consumable_array(this.subproofOrProofAssertions));
                return subproofOrProofAssertions;
            }
        },
        {
            key: "addEquality",
            value: function addEquality(equality) {
                var equalityAdded;
                var equalityReflexive = equality.isReflexive();
                if (!equalityReflexive) {
                    var Equivalence = _occamfurtle.elements.Equivalence, equivalence = Equivalence.fromEquality(equality), context = this; ///
                    this.equivalences = this.equivalences.mergedWithEquivalence(equivalence, context);
                }
                equalityAdded = true;
                if (equalityAdded) {
                    var context1 = this, equalityString = equality.getString();
                    context1.trace("Added the '".concat(equalityString, "' equality."));
                }
                return equalityAdded;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variableAdded = false;
                var variableIdentifier = variable.getIdentifier(), variablePresent = this.isVariablePresentByVariableIdentifier(variableIdentifier, nested);
                if (!variablePresent) {
                    this.variables.push(variable);
                    variableAdded = true;
                }
                if (variableAdded) {
                    var context = this, variableString = variable.getString();
                    context.trace("Added the '".concat(variableString, "' variable."));
                }
                return variableAdded;
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
                if (judgementAdded) {
                    var context = this, judgementString = judgement.getString();
                    context.trace("Added the '".concat(judgementString, "' judgement."));
                }
                return judgementAdded;
            }
        },
        {
            key: "addSubproofOrProofAssertion",
            value: function addSubproofOrProofAssertion(subproofOrProofAssertion) {
                this.subproofOrProofAssertions.push(subproofOrProofAssertion);
            }
        },
        {
            key: "findEquivalenceByTerm",
            value: function findEquivalenceByTerm(term) {
                return this.equivalences.findEquivalenceByTerm(term);
            }
        },
        {
            key: "findJudgementByMetavariable",
            value: function findJudgementByMetavariable(metavariable) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementSingular = judgement.isSingular();
                    if (judgementSingular) {
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
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variables = this.getVariables(nested), variable = variables.find(function(variable) {
                    var variableComparesToVariableIdentifier = variable.compareVariableIdentifier(variableIdentifier);
                    if (variableComparesToVariableIdentifier) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "isTermGrounded",
            value: function isTermGrounded(term) {
                var context = this, equivalences = this.getEquivalences(), groundedTerms = [], definedVariables = [];
                equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);
                var termMatchesGroundedTerm = groundedTerms.some(function(groundedTerm) {
                    var groundedTermNode = groundedTerm.getNode(), groundedTermNodeMatches = term.matchNode(groundedTermNode);
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
            key: "isJudgementPresentByMetavariable",
            value: function isJudgementPresentByMetavariable(metavariable) {
                var judgement = this.findJudgementByMetavariable(metavariable), judgementPresent = judgement !== null;
                return judgementPresent;
            }
        },
        {
            key: "isVariablePresentByVariableIdentifier",
            value: function isVariablePresentByVariableIdentifier(variableIdentifier) {
                var nested = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var variable = this.findVariableByVariableIdentifier(variableIdentifier, nested), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "compareTermAndPropertyRelation",
            value: function compareTermAndPropertyRelation(term, propertyRelation) {
                var context = this, proofAssertions = this.getProofAssertions(), comparesToTermAndPropertyRelation = proofAssertions.some(function(proofAssertion) {
                    var comparesToTermAndPropertyRelation = proofAssertion.compareTermAndPropertyRelation(term, propertyRelation, context);
                    if (comparesToTermAndPropertyRelation) {
                        return true;
                    }
                });
                return comparesToTermAndPropertyRelation;
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.context.getFileContext();
            }
        },
        {
            key: "getDepth",
            value: function getDepth() {
                var depth = this.context.getDepth();
                depth++;
                return depth;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var Equivalences = _occamfurtle.elements.Equivalences, variables = [], judgements = [], equivalences = Equivalences.fromNothing(context), subproofOrProofAssertions = [], scopedContext = new ScopedContext(context, variables, judgements, equivalences, subproofOrProofAssertions);
                return scopedContext;
            }
        }
    ]);
    return ScopedContext;
}();
var _default = ScopedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Njb3BlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBlbGVtZW50cywgY29udGV4dFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBsYXN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2hhaW5Db250ZXh0IH0gPSBjb250ZXh0VXRpbGl0aWVzO1xuXG5jbGFzcyBTY29wZWRDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuanVkZ2VtZW50cyA9IGp1ZGdlbWVudHM7XG4gICAgdGhpcy5lcXVpdmFsZW5jZXMgPSBlcXVpdmFsZW5jZXM7XG4gICAgdGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcblxuICAgIHJldHVybiBjaGFpbkNvbnRleHQodGhpcyk7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMobmVzdGVkID0gdHJ1ZSkge1xuICAgIGxldCB2YXJpYWJsZXM7XG5cbiAgICBpZiAobmVzdGVkKSB7XG4gICAgICB2YXJpYWJsZXMgPSB0aGlzLmNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICAgIHZhcmlhYmxlcyA9IFtcbiAgICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAgIC4uLnZhcmlhYmxlc1xuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHMgPSB0aGlzLmNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcyA9IHRoaXMuY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucy5maWx0ZXIoKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpO1xuXG4gICAgICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCkge1xuICAgIGxldCBsYXN0UHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvbnNMZW5ndGggPSBwcm9vZkFzc2VydGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZkFzc2VydGlvbiA9IGxhc3QocHJvb2ZBc3NlcnRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHRoaXMuY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gWyAgLy8vXG4gICAgICAuLi5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLFxuICAgICAgLi4udGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zXG4gICAgXTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBsZXQgZXF1YWxpdHlBZGRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVmbGV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmICghZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgICAgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG5cbiAgICBpZiAoZXF1YWxpdHlBZGRlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSBlcXVhbGl0eS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYClcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHlBZGRlZDtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGVBZGRlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKVxuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGxldCBqdWRnZW1lbnRBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoIWp1ZGdlbWVudFByZXNlbnQpIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICAgIGp1ZGdlbWVudEFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoanVkZ2VtZW50QWRkZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGp1ZGdlbWVudFN0cmluZyA9IGp1ZGdlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnRBZGRlZDtcbiAgfVxuXG4gIGFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pIHtcbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMucHVzaChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHsgcmV0dXJuIHRoaXMuZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTsgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudFNpbmd1bGFyID0ganVkZ2VtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudFNpbmd1bGFyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgICAgICAganVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudE1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5jb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hOb2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVybUdyb3VuZGVkID0gdGVybU1hdGNoZXNHcm91bmRlZFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Hcm91bmRlZDtcbiAgfVxuXG4gIGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5zb21lKChkZWZpbmVkVmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZS5pc0VxdWFsVG8odmFyaWFibGUpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID09PSB2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVmaW5lZDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRQcmVzZW50ID0gdGhpcy5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBqdWRnZW1lbnRQcmVzZW50OyAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWZpbmVkXG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9vZkFzc2VydGlvbnMuc29tZSgocHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb29mQXNzZXJ0aW9uLmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHsgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRGaWxlQ29udGV4dCgpOyB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgbGV0IGRlcHRoID0gdGhpcy5jb250ZXh0LmdldERlcHRoKCk7XG5cbiAgICBkZXB0aCsrO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEVxdWl2YWxlbmNlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgc2NvcGVkQ29udGV4dCA9IG5ldyBTY29wZWRDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBzY29wZWRDb250ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3BlZENvbnRleHQ7Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsImNoYWluQ29udGV4dCIsImNvbnRleHRVdGlsaXRpZXMiLCJTY29wZWRDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsImp1ZGdlbWVudHMiLCJlcXVpdmFsZW5jZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0Q29udGV4dCIsImdldFZhcmlhYmxlcyIsIm5lc3RlZCIsImdldEp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJtZXJnZWRXaXRoIiwiZ2V0UHJvb2ZBc3NlcnRpb25zIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInByb29mQXNzZXJ0aW9ucyIsImZpbHRlciIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnByb29mQXNzZXJ0aW9uIiwiaXNQcm9vZkFzc2VydGlvbiIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImxhc3RQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uc0xlbmd0aCIsImxlbmd0aCIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUFkZGVkIiwiZXF1YWxpdHlSZWZsZXhpdmUiLCJpc1JlZmxleGl2ZSIsIkVxdWl2YWxlbmNlIiwiZWxlbWVudHMiLCJlcXVpdmFsZW5jZSIsImZyb21FcXVhbGl0eSIsIm1lcmdlZFdpdGhFcXVpdmFsZW5jZSIsImVxdWFsaXR5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVBZGRlZCIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwicHVzaCIsInZhcmlhYmxlU3RyaW5nIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QWRkZWQiLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRTdHJpbmciLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJ0ZXJtIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwiZmluZCIsImp1ZGdlbWVudFNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJpc0VxdWFsVG8iLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJnZXROb2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJ0ZXJtR3JvdW5kZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSIsInZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCIsIm1ldGF2YXJpYWJsZURlZmluZWQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJnZXRGaWxlQ29udGV4dCIsImdldERlcHRoIiwiZGVwdGgiLCJmcm9tTm90aGluZyIsIkVxdWl2YWxlbmNlcyIsInNjb3BlZENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThTQTs7O2VBQUE7Ozt5QkE1UytCOzJCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQsTUFDRixBQUFFRSxlQUFpQkMsNkJBQWdCLENBQWpDRDtBQUVSLElBQUEsQUFBTUUsOEJBQU47YUFBTUEsY0FDUUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyx5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