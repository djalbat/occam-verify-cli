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
                    judgementAdded = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Njb3BlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFNjb3BlZENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuanVkZ2VtZW50cyA9IGp1ZGdlbWVudHM7XG4gICAgdGhpcy5lcXVpdmFsZW5jZXMgPSBlcXVpdmFsZW5jZXM7XG4gICAgdGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhuZXN0ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHZhcmlhYmxlcztcblxuICAgIGlmIChuZXN0ZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgdmFyaWFibGVzID0gY29udGV4dC5nZXRWYXJpYWJsZXMoKTtcblxuICAgICAgdmFyaWFibGVzID0gW1xuICAgICAgICAuLi50aGlzLnZhcmlhYmxlcyxcbiAgICAgICAgLi4udmFyaWFibGVzXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcztcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBsZXQganVkZ2VtZW50cztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBjb250ZXh0LmdldEp1ZGdlbWVudHMoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF1cblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXM7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoKGVxdWl2YWxlbmNlcywgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHRoaXMuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9ucyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMuZmlsdGVyKChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmlzUHJvb2ZBc3NlcnRpb24oKTtcblxuICAgICAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnByb29mQXNzZXJ0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldExhc3RQcm9vZkFzc2VydGlvbigpIHtcbiAgICBsZXQgbGFzdFByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9ucyA9IHRoaXMuZ2V0UHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zTGVuZ3RoID0gcHJvb2ZBc3NlcnRpb25zLmxlbmd0aDtcblxuICAgIGlmIChwcm9vZkFzc2VydGlvbnNMZW5ndGggPiAwKSB7XG4gICAgICBsYXN0UHJvb2ZBc3NlcnRpb24gPSBsYXN0KHByb29mQXNzZXJ0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZkFzc2VydGlvbjtcbiAgfVxuXG4gIGdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gWyAgLy8vXG4gICAgICAuLi5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLFxuICAgICAgLi4udGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zXG4gICAgXTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBsZXQgZXF1YWxpdHlBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5U3RyaW5nID0gZXF1YWxpdHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBlcXVhbGl0eVJlbGZleGl2ZSA9IGVxdWFsaXR5LmlzUmVmbGV4aXZlKCk7XG5cbiAgICBpZiAoZXF1YWxpdHlSZWxmZXhpdmUpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGlzIHJlZmxleGl2ZSBhbmQgd2lsbCBub3QgYWRkZWQgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IEVxdWl2YWxlbmNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gRXF1aXZhbGVuY2UuZnJvbUVxdWFsaXR5KGVxdWFsaXR5KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgICAgdGhpcy5lcXVpdmFsZW5jZXMgPSB0aGlzLmVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIGNvbnRleHQpO1xuXG4gICAgICBlcXVhbGl0eUFkZGVkID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eUFkZGVkO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBID0gdmFyaWFibGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZUIgPSB0aGlzLnZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVCID0gdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVBQ29tcGFyZXNUb1ZhcmlhYmxlQiA9IHZhcmlhYmxlQS5jb21wYXJlKHZhcmlhYmxlQik7XG5cbiAgICAgIGlmICh2YXJpYWJsZUFDb21wYXJlc1RvVmFyaWFibGVCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgbGV0IGp1ZGdlbWVudEFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0ganVkZ2VtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBqdWRnZW1lbnQuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IHRoaXMuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKGp1ZGdlbWVudFByZXNlbnQpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgQSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgZm9yIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmp1ZGdlbWVudHMucHVzaChqdWRnZW1lbnQpO1xuXG4gICAgICBqdWRnZW1lbnRBZGRlZCA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICAgIH1cblxuICAgIHJldHVybiBqdWRnZW1lbnRBZGRlZDtcbiAgfVxuXG4gIGFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMucHVzaChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkgeyByZXR1cm4gdGhpcy5lcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pOyB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50Lm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcyhuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5jb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gdGhpcy5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gICAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBjb25zdCB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSA9IGdyb3VuZGVkVGVybXMuc29tZSgoZ3JvdW5kZWRUZXJtKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VuZGVkVGVybU5vZGUgPSBncm91bmRlZFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICBncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hOb2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVybUdyb3VuZGVkID0gdGVybU1hdGNoZXNHcm91bmRlZFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Hcm91bmRlZDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIsIG5lc3RlZCA9IHRydWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyLCBuZXN0ZWQpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9vZkFzc2VydGlvbnMuc29tZSgocHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb29mQXNzZXJ0aW9uLmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHsgRXF1aXZhbGVuY2VzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpLFxuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBzY29wZWRDb250ZXh0ID0gbmV3IFNjb3BlZENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpO1xuXG4gICAgcmV0dXJuIHNjb3BlZENvbnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcGVkQ29udGV4dDsiXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiU2NvcGVkQ29udGV4dCIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJqdWRnZW1lbnRzIiwiZXF1aXZhbGVuY2VzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldFZhcmlhYmxlcyIsIm5lc3RlZCIsImdldENvbnRleHQiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwibWVyZ2VkV2l0aCIsImdldFByb29mQXNzZXJ0aW9ucyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJwcm9vZkFzc2VydGlvbnMiLCJmaWx0ZXIiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25wcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJnZXRMYXN0UHJvb2ZBc3NlcnRpb24iLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlBZGRlZCIsImVxdWFsaXR5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJlcXVhbGl0eVJlbGZleGl2ZSIsImlzUmVmbGV4aXZlIiwiRXF1aXZhbGVuY2UiLCJlbGVtZW50cyIsImVxdWl2YWxlbmNlIiwiZnJvbUVxdWFsaXR5IiwibWVyZ2VkV2l0aEVxdWl2YWxlbmNlIiwiZGVidWciLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVBIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZUIiLCJmaW5kIiwidmFyaWFibGVBQ29tcGFyZXNUb1ZhcmlhYmxlQiIsImNvbXBhcmUiLCJwdXNoIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QWRkZWQiLCJqdWRnZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJ0ZXJtIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJnZXROb2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJ0ZXJtR3JvdW5kZWQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVQcmVzZW50IiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb29mQXNzZXJ0aW9uIiwiZnJvbU5vdGhpbmciLCJFcXVpdmFsZW5jZXMiLCJzY29wZWRDb250ZXh0IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaVNBOzs7ZUFBQTs7O3lCQS9SK0I7OERBRVg7K0RBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBQSxBQUFNRSw4QkFBTjtjQUFNQTthQUFBQSxjQUNRQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLHlCQUF5QjtnQ0FEL0VMOztnQkFFRixrQkFGRUE7WUFF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