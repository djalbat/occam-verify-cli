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
var _occamlanguages = require("occam-languages");
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var last = _necessary.arrayUtilities.last, chainContext = _occamlanguages.contextUtilities.chainContext;
var ScopedContext = /*#__PURE__*/ function(Context) {
    _inherits(ScopedContext, Context);
    function ScopedContext(context, variables, judgements, equivalences, subproofOrProofAssertions) {
        _class_call_check(this, ScopedContext);
        var _this;
        _this = _call_super(this, ScopedContext, [
            context
        ]);
        _this.variables = variables;
        _this.judgements = judgements;
        _this.equivalences = equivalences;
        _this.subproofOrProofAssertions = subproofOrProofAssertions;
        return _possible_constructor_return(_this, chainContext(_this));
    }
    _create_class(ScopedContext, [
        {
            key: "getVariables",
            value: function getVariables() {
                var nested = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var variables;
                if (nested) {
                    var context = this.getContext();
                    variables = context.getVariables();
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
                var judgements;
                var context = this.getContext();
                judgements = context.getJudgements();
                judgements = _to_consumable_array(this.judgements).concat(_to_consumable_array(judgements));
                return judgements;
            }
        },
        {
            key: "getEquivalences",
            value: function getEquivalences() {
                var equivalences;
                var context;
                context = this.getContext();
                equivalences = context.getEquivalences();
                context = this; ///
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
                var subproofOrProofAssertions;
                var context = this.getContext();
                subproofOrProofAssertions = context.getSubproofOrProofAssertions();
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
                    var Equivalence = _elements.default.Equivalence, equivalence = Equivalence.fromEquality(equality), context = this; ///
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
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var Equivalences = _elements.default.Equivalences, variables = [], judgements = [], equivalences = Equivalences.fromNothing(context), subproofOrProofAssertions = [], scopedContext = new ScopedContext(context, variables, judgements, equivalences, subproofOrProofAssertions);
                return scopedContext;
            }
        }
    ]);
    return ScopedContext;
}(_occamlanguages.Context);
var _default = ScopedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Njb3BlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBDb250ZXh0LCBjb250ZXh0VXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNoYWluQ29udGV4dCB9ID0gY29udGV4dFV0aWxpdGllcztcblxuY2xhc3MgU2NvcGVkQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB2YXJpYWJsZXMsIGp1ZGdlbWVudHMsIGVxdWl2YWxlbmNlcywgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuXG4gICAgcmV0dXJuIGNoYWluQ29udGV4dCh0aGlzKTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHZhcmlhYmxlcztcblxuICAgIGlmIChuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgdmFyaWFibGVzID0gY29udGV4dC5nZXRWYXJpYWJsZXMoKTtcblxuICAgICAgdmFyaWFibGVzID0gW1xuICAgICAgICAuLi50aGlzLnZhcmlhYmxlcyxcbiAgICAgICAgLi4udmFyaWFibGVzXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBsZXQganVkZ2VtZW50cztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBjb250ZXh0LmdldEp1ZGdlbWVudHMoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF1cblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXM7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoKGVxdWl2YWxlbmNlcywgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHRoaXMuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9ucyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMuZmlsdGVyKChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmlzUHJvb2ZBc3NlcnRpb24oKTtcblxuICAgICAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnByb29mQXNzZXJ0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldExhc3RQcm9vZkFzc2VydGlvbigpIHtcbiAgICBsZXQgbGFzdFByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9ucyA9IHRoaXMuZ2V0UHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zTGVuZ3RoID0gcHJvb2ZBc3NlcnRpb25zLmxlbmd0aDtcblxuICAgIGlmIChwcm9vZkFzc2VydGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0UHJvb2ZBc3NlcnRpb24gPSBsYXN0KHByb29mQXNzZXJ0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gWyAgLy8vXG4gICAgICAuLi5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLFxuICAgICAgLi4udGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zXG4gICAgXTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBsZXQgZXF1YWxpdHlBZGRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVmbGV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmICghZXF1YWxpdHlSZWZsZXhpdmUpIHtcbiAgICAgIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgICAgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgZXF1YWxpdHlBZGRlZCA9IHRydWU7XG5cbiAgICBpZiAoZXF1YWxpdHlBZGRlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSBlcXVhbGl0eS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYClcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHlBZGRlZDtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmdldElkZW50aWZpZXIoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpO1xuXG4gICAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2YXJpYWJsZUFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGVBZGRlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBZGRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKVxuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGxldCBqdWRnZW1lbnRBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSB0aGlzLmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAoIWp1ZGdlbWVudFByZXNlbnQpIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICAgIGp1ZGdlbWVudEFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoanVkZ2VtZW50QWRkZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGp1ZGdlbWVudFN0cmluZyA9IGp1ZGdlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgQWRkZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudC5gKVxuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnRBZGRlZDtcbiAgfVxuXG4gIGFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pIHtcbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMucHVzaChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHsgcmV0dXJuIHRoaXMuZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTsgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudFNpbmd1bGFyID0ganVkZ2VtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudFNpbmd1bGFyKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgICAgICAgICAganVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudE1ldGF2YXJpYWJsZS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5jb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hOb2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVybUdyb3VuZGVkID0gdGVybU1hdGNoZXNHcm91bmRlZFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Hcm91bmRlZDtcbiAgfVxuXG4gIGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5zb21lKChkZWZpbmVkVmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZS5pc0VxdWFsVG8odmFyaWFibGUpO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID09PSB2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGU7IC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVmaW5lZDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRQcmVzZW50ID0gdGhpcy5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBqdWRnZW1lbnRQcmVzZW50OyAvLy9cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWZpbmVkXG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9vZkFzc2VydGlvbnMuc29tZSgocHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb29mQXNzZXJ0aW9uLmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHsgRXF1aXZhbGVuY2VzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpLFxuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBzY29wZWRDb250ZXh0ID0gbmV3IFNjb3BlZENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpO1xuXG4gICAgcmV0dXJuIHNjb3BlZENvbnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcGVkQ29udGV4dDsiXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiY2hhaW5Db250ZXh0IiwiY29udGV4dFV0aWxpdGllcyIsIlNjb3BlZENvbnRleHQiLCJjb250ZXh0IiwidmFyaWFibGVzIiwianVkZ2VtZW50cyIsImVxdWl2YWxlbmNlcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRWYXJpYWJsZXMiLCJuZXN0ZWQiLCJnZXRDb250ZXh0IiwiZ2V0SnVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsIm1lcmdlZFdpdGgiLCJnZXRQcm9vZkFzc2VydGlvbnMiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwicHJvb2ZBc3NlcnRpb25zIiwiZmlsdGVyIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24iLCJpc1Byb29mQXNzZXJ0aW9uIiwiZ2V0TGFzdFByb29mQXNzZXJ0aW9uIiwibGFzdFByb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QWRkZWQiLCJlcXVhbGl0eVJlZmxleGl2ZSIsImlzUmVmbGV4aXZlIiwiRXF1aXZhbGVuY2UiLCJlbGVtZW50cyIsImVxdWl2YWxlbmNlIiwiZnJvbUVxdWFsaXR5IiwibWVyZ2VkV2l0aEVxdWl2YWxlbmNlIiwiZXF1YWxpdHlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJwdXNoIiwidmFyaWFibGVTdHJpbmciLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBZGRlZCIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudFN0cmluZyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInRlcm0iLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJmaW5kIiwianVkZ2VtZW50U2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwianVkZ2VtZW50TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzRXF1YWxUbyIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImlzVGVybUdyb3VuZGVkIiwiZ3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzIiwidGVybU1hdGNoZXNHcm91bmRlZFRlcm0iLCJzb21lIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdldE5vZGUiLCJncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsInRlcm1Hcm91bmRlZCIsImlzVmFyaWFibGVEZWZpbmVkIiwidmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNNZXRhdmFyaWFibGVEZWZpbmVkIiwibWV0YXZhcmlhYmxlRGVmaW5lZCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJwcm9vZkFzc2VydGlvbiIsImZyb21Ob3RoaW5nIiwiRXF1aXZhbGVuY2VzIiwic2NvcGVkQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1UQTs7O2VBQUE7Ozt5QkFqVCtCOzhCQUNXOytEQUVyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckIsSUFBTSxBQUFFQSxPQUFTQyx5QkFBYyxDQUF2QkQsTUFD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