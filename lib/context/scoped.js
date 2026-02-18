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
var _context = /*#__PURE__*/ _interop_require_default(require("../context"));
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
var last = _necessary.arrayUtilities.last;
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
        return _this;
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
                var equalityAdded = false;
                var context = this, equalityString = equality.getString();
                context.trace("Adding the '".concat(equalityString, "' equality to the scoped context..."));
                var equalityRelfexive = equality.isReflexive();
                if (equalityRelfexive) {
                    context.trace("The '".concat(equalityString, "' equality is reflexive and will not added to the scoped context."));
                } else {
                    var Equivalence = _elements.default.Equivalence, equivalence = Equivalence.fromEquality(equality), context1 = this; ///
                    this.equivalences = this.equivalences.mergedWithEquivalence(equivalence, context1);
                    equalityAdded = true;
                    context1.debug("...added the '".concat(equalityString, "' equality to the scoped context."));
                }
                return equalityAdded;
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var context = this, variableA = variable, variableString = variable.getString();
                context.trace("Adding the '".concat(variableString, "' variable to the scoped context..."));
                var variableB = this.variables.find(function(variable) {
                    var variableB = variable, variableAComparesToVariableB = variableA.compare(variableB);
                    if (variableAComparesToVariableB) {
                        return true;
                    }
                }) || null;
                if (variableB !== null) {
                    context.trace("The '".concat(variableString, "' variable has already been added to the scoped context."));
                } else {
                    this.variables.push(variable);
                    context.debug("...added the '".concat(variableString, "' variable to the scoped context."));
                }
            }
        },
        {
            key: "addJudgement",
            value: function addJudgement(judgement) {
                var judgementAdded = false;
                var context = this, judgementString = judgement.getString();
                context.trace("Adding the '".concat(judgementString, "' judgement to the scoped context..."));
                var metavariable = judgement.getMetavariable(), metavariableName = metavariable.getMetavariableName(), judgementPresent = this.isJudgementPresentByMetavariableName(metavariableName);
                if (judgementPresent) {
                    var metavariableString = metavariable.getString();
                    context.trace("A '".concat(judgementString, "' judgement for the '").concat(metavariableString, "' metavariable is already present."));
                } else {
                    this.judgements.push(judgement);
                    context.debug("...added the '".concat(judgementString, "' judgement to the scoped context."));
                }
                return judgementAdded;
            }
        },
        {
            key: "addSubproofOrProofAssertion",
            value: function addSubproofOrProofAssertion(subproofOrProofAssertion) {
                var context = this, subproofOrProofAssertionString = subproofOrProofAssertion.getString();
                context.trace("Adding the '".concat(subproofOrProofAssertionString, "' subproof or proof assertion to the scoped context..."));
                this.subproofOrProofAssertions.push(subproofOrProofAssertion);
                context.debug("...added the '".concat(subproofOrProofAssertionString, "' subproof or proof assertion to the scoped context."));
            }
        },
        {
            key: "findEquivalenceByTerm",
            value: function findEquivalenceByTerm(term) {
                return this.equivalences.findEquivalenceByTerm(term);
            }
        },
        {
            key: "findJudgementByMetavariableName",
            value: function findJudgementByMetavariableName(metavariableName) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementMetavariableComparesToMetavariable = judgement.matchMetavariableName(metavariableName);
                    if (judgementMetavariableComparesToMetavariable) {
                        return true;
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
            key: "isJudgementPresentByMetavariableName",
            value: function isJudgementPresentByMetavariableName(metavariableName) {
                var judgement = this.findJudgementByMetavariableName(metavariableName), judgementPresent = judgement !== null;
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
}(_context.default);
var _default = ScopedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Njb3BlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFNjb3BlZENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuanVkZ2VtZW50cyA9IGp1ZGdlbWVudHM7XG4gICAgdGhpcy5lcXVpdmFsZW5jZXMgPSBlcXVpdmFsZW5jZXM7XG4gICAgdGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHZhcmlhYmxlcztcblxuICAgIGlmIChuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgdmFyaWFibGVzID0gY29udGV4dC5nZXRWYXJpYWJsZXMoKTtcblxuICAgICAgdmFyaWFibGVzID0gW1xuICAgICAgICAuLi50aGlzLnZhcmlhYmxlcyxcbiAgICAgICAgLi4udmFyaWFibGVzXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBsZXQganVkZ2VtZW50cztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBjb250ZXh0LmdldEp1ZGdlbWVudHMoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF1cblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXM7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoKGVxdWl2YWxlbmNlcywgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHRoaXMuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9ucyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMuZmlsdGVyKChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmlzUHJvb2ZBc3NlcnRpb24oKTtcblxuICAgICAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnByb29mQXNzZXJ0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldExhc3RQcm9vZkFzc2VydGlvbigpIHtcbiAgICBsZXQgbGFzdFByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9ucyA9IHRoaXMuZ2V0UHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zTGVuZ3RoID0gcHJvb2ZBc3NlcnRpb25zLmxlbmd0aDtcblxuICAgIGlmIChwcm9vZkFzc2VydGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0UHJvb2ZBc3NlcnRpb24gPSBsYXN0KHByb29mQXNzZXJ0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gWyAgLy8vXG4gICAgICAuLi5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLFxuICAgICAgLi4udGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zXG4gICAgXTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBsZXQgZXF1YWxpdHlBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5U3RyaW5nID0gZXF1YWxpdHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlbGZleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWxmZXhpdmUpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGlzIHJlZmxleGl2ZSBhbmQgd2lsbCBub3QgYWRkZWQgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IEVxdWl2YWxlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UuZnJvbUVxdWFsaXR5KGVxdWFsaXR5KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgICAgdGhpcy5lcXVpdmFsZW5jZXMgPSB0aGlzLmVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpO1xuXG4gICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eUFkZGVkO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBID0gdmFyaWFibGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZUIgPSB0aGlzLnZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVCID0gdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVBQ29tcGFyZXNUb1ZhcmlhYmxlQiA9IHZhcmlhYmxlQS5jb21wYXJlKHZhcmlhYmxlQik7XG5cbiAgICAgIGlmICh2YXJpYWJsZUFDb21wYXJlc1RvVmFyaWFibGVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgbGV0IGp1ZGdlbWVudEFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0ganVkZ2VtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBqdWRnZW1lbnQuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IHRoaXMuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKGp1ZGdlbWVudFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgQSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgZm9yIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmp1ZGdlbWVudHMucHVzaChqdWRnZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganVkZ2VtZW50QWRkZWQ7XG4gIH1cblxuICBhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHRvIHRoZSBzY29wZWQgY29udGV4dC4uLmApO1xuXG4gICAgdGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLnB1c2goc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICB9XG5cbiAgZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pIHsgcmV0dXJuIHRoaXMuZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKTsgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMobmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1Rlcm1Hcm91bmRlZCh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoTm9kZShncm91bmRlZFRlcm1Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRlcm1Hcm91bmRlZCA9IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtOyAvLy9cblxuICAgIHJldHVybiB0ZXJtR3JvdW5kZWQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMuZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gKGp1ZGdlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQgPSB0cnVlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciwgbmVzdGVkKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9ucyA9IHRoaXMuZ2V0UHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvb2ZBc3NlcnRpb25zLnNvbWUoKHByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9vZkFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEVxdWl2YWxlbmNlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgc2NvcGVkQ29udGV4dCA9IG5ldyBTY29wZWRDb250ZXh0KGNvbnRleHQsIHZhcmlhYmxlcywganVkZ2VtZW50cywgZXF1aXZhbGVuY2VzLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBzY29wZWRDb250ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3BlZENvbnRleHQ7Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIlNjb3BlZENvbnRleHQiLCJjb250ZXh0IiwidmFyaWFibGVzIiwianVkZ2VtZW50cyIsImVxdWl2YWxlbmNlcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRWYXJpYWJsZXMiLCJuZXN0ZWQiLCJnZXRDb250ZXh0IiwiZ2V0SnVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsIm1lcmdlZFdpdGgiLCJnZXRQcm9vZkFzc2VydGlvbnMiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwicHJvb2ZBc3NlcnRpb25zIiwiZmlsdGVyIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24iLCJpc1Byb29mQXNzZXJ0aW9uIiwiZ2V0TGFzdFByb29mQXNzZXJ0aW9uIiwibGFzdFByb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QWRkZWQiLCJlcXVhbGl0eVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZXF1YWxpdHlSZWxmZXhpdmUiLCJpc1JlZmxleGl2ZSIsIkVxdWl2YWxlbmNlIiwiZWxlbWVudHMiLCJlcXVpdmFsZW5jZSIsImZyb21FcXVhbGl0eSIsIm1lcmdlZFdpdGhFcXVpdmFsZW5jZSIsImRlYnVnIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlQSIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVCIiwiZmluZCIsInZhcmlhYmxlQUNvbXBhcmVzVG9WYXJpYWJsZUIiLCJjb21wYXJlIiwicHVzaCIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEFkZGVkIiwianVkZ2VtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwidGVybSIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwiaXNUZXJtR3JvdW5kZWQiLCJncm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsInNvbWUiLCJncm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwidGVybUdyb3VuZGVkIiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJwcm9vZkFzc2VydGlvbiIsImZyb21Ob3RoaW5nIiwiRXF1aXZhbGVuY2VzIiwic2NvcGVkQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStSQTs7O2VBQUE7Ozt5QkE3UitCOzhEQUVYOytEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFNLEFBQUVBLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVSLElBQUEsQUFBTUUsOEJBQU47Y0FBTUE7YUFBQUEsY0FDUUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFFQyx5QkFBeUI7Z0NBRC9FTDs7Z0JBRUYsa0JBRkVBO1lBRUlDOztRQUVOLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIs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