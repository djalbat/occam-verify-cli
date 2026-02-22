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
    function ScopedContext(context, variables, judgements, assignments, equivalences, subproofOrProofAssertions) {
        _class_call_check(this, ScopedContext);
        var _this;
        _this = _call_super(this, ScopedContext, [
            context
        ]);
        _this.variables = variables;
        _this.judgements = judgements;
        _this.assignments = assignments;
        _this.equivalences = equivalences;
        _this.subproofOrProofAssertions = subproofOrProofAssertions;
        return _this;
    }
    _create_class(ScopedContext, [
        {
            key: "getVariables",
            value: function getVariables() {
                var variables;
                var context = this.getContext();
                variables = context.getVariables();
                variables = _to_consumable_array(this.variables).concat(_to_consumable_array(variables));
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
            key: "getAssignments",
            value: function getAssignments() {
                return this.assignments;
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
            key: "addEquality",
            value: function addEquality(equality) {
                var context = this, equalityString = equality.getString();
                context.trace("Adding the '".concat(equalityString, "' equality to the scoped context..."));
                var equalityRelfexive = equality.isReflexive();
                if (!equalityRelfexive) {
                    var Equivalence = _elements.default.Equivalence, equivalence = Equivalence.fromEquality(equality, context);
                    this.equivalences = this.equivalences.mergedWithEquivalence(equivalence, context);
                    context.debug("...added the '".concat(equalityString, "' equality to the scoped context."));
                } else {
                    context.debug("The '".concat(equalityString, "' equality is reflexive and will not added to the scoped context."));
                }
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                var context = this, variableString = variable.getString();
                context.trace("Adding the '".concat(variableString, "' variable to the scoped context..."));
                this.variables.push(variable);
                context.debug("...added the '".concat(variableString, "' variable to the scoped context."));
            }
        },
        {
            key: "addJudgement",
            value: function addJudgement(judgement) {
                var context = this, judgementString = judgement.getString();
                context.trace("Adding the '".concat(judgementString, "' judgement to the scoped context..."));
                this.judgements.push(judgement);
                context.debug("...added the '".concat(judgementString, "' judgement to the scoped context."));
            }
        },
        {
            key: "addAssignment",
            value: function addAssignment(assignment) {
                this.assignments.push(assignment);
            }
        },
        {
            key: "assignAssignments",
            value: function assignAssignments() {
                var context = this; ///
                this.assignments.forEach(function(assignment) {
                    assignment(context);
                });
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
                    var judgementMetavariableComparesToMetavariable = judgement.compareMetavariableName(metavariableName);
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
                var variables = this.getVariables(), variable = variables.find(function(variable) {
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
                    var groundedTermNode = groundedTerm.getNode(), groundedTermNodeMatches = term.matchTermNode(groundedTermNode);
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
                var variable = this.findVariableByVariableIdentifier(variableIdentifier), variablePresent = variable !== null;
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
                var Equivalences = _elements.default.Equivalences, variables = [], judgements = [], assignments = [], equivalences = Equivalences.fromNothing(context), subproofOrProofAssertions = [], scopedContext = new ScopedContext(context, variables, judgements, assignments, equivalences, subproofOrProofAssertions);
                return scopedContext;
            }
        }
    ]);
    return ScopedContext;
}(_context.default);
var _default = ScopedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Njb3BlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFNjb3BlZENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBhc3NpZ25tZW50cywgZXF1aXZhbGVuY2VzLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzO1xuICAgIHRoaXMuYXNzaWdubWVudHMgPSBhc3NpZ25tZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGxldCB2YXJpYWJsZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICB2YXJpYWJsZXMgPSBjb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgdmFyaWFibGVzID0gW1xuICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAuLi52YXJpYWJsZXNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBqdWRnZW1lbnRzID0gY29udGV4dC5nZXRKdWRnZW1lbnRzKCk7XG5cbiAgICBqdWRnZW1lbnRzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuanVkZ2VtZW50cyxcbiAgICAgIC4uLmp1ZGdlbWVudHNcbiAgICBdXG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldEFzc2lnbm1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXM7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoKGVxdWl2YWxlbmNlcywgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IFsgIC8vL1xuICAgICAgLi4uc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyxcbiAgICAgIC4uLnRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1xuICAgIF07XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldFByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucy5maWx0ZXIoKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpO1xuXG4gICAgICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCkge1xuICAgIGxldCBsYXN0UHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvbnNMZW5ndGggPSBwcm9vZkFzc2VydGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZkFzc2VydGlvbiA9IGxhc3QocHJvb2ZBc3NlcnRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSBlcXVhbGl0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVsZmV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmICghZXF1YWxpdHlSZWxmZXhpdmUpIHtcbiAgICAgIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5mcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpO1xuXG4gICAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaXMgcmVmbGV4aXZlIGFuZCB3aWxsIG5vdCBhZGRlZCB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSBqdWRnZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIHRoaXMuYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIGFzc2lnbkFzc2lnbm1lbnRzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMuYXNzaWdubWVudHMuZm9yRWFjaCgoYXNzaWdubWVudCkgPT4ge1xuICAgICAgYXNzaWdubWVudChjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMucHVzaChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkgeyByZXR1cm4gdGhpcy5lcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pOyB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtTm9kZSA9IGdyb3VuZGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgIGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVybUdyb3VuZGVkID0gdGVybU1hdGNoZXNHcm91bmRlZFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Hcm91bmRlZDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9ucyA9IHRoaXMuZ2V0UHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvb2ZBc3NlcnRpb25zLnNvbWUoKHByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9vZkFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEVxdWl2YWxlbmNlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpLFxuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBzY29wZWRDb250ZXh0ID0gbmV3IFNjb3BlZENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBhc3NpZ25tZW50cywgZXF1aXZhbGVuY2VzLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBzY29wZWRDb250ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3BlZENvbnRleHQ7Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIlNjb3BlZENvbnRleHQiLCJjb250ZXh0IiwidmFyaWFibGVzIiwianVkZ2VtZW50cyIsImFzc2lnbm1lbnRzIiwiZXF1aXZhbGVuY2VzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldFZhcmlhYmxlcyIsImdldENvbnRleHQiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0QXNzaWdubWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJtZXJnZWRXaXRoIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldFByb29mQXNzZXJ0aW9ucyIsInByb29mQXNzZXJ0aW9ucyIsImZpbHRlciIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnByb29mQXNzZXJ0aW9uIiwiaXNQcm9vZkFzc2VydGlvbiIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImxhc3RQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uc0xlbmd0aCIsImxlbmd0aCIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZXF1YWxpdHlSZWxmZXhpdmUiLCJpc1JlZmxleGl2ZSIsIkVxdWl2YWxlbmNlIiwiZWxlbWVudHMiLCJlcXVpdmFsZW5jZSIsImZyb21FcXVhbGl0eSIsIm1lcmdlZFdpdGhFcXVpdmFsZW5jZSIsImRlYnVnIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlU3RyaW5nIiwicHVzaCIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudFN0cmluZyIsImFkZEFzc2lnbm1lbnQiLCJhc3NpZ25tZW50IiwiYXNzaWduQXNzaWdubWVudHMiLCJmb3JFYWNoIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtIiwidGVybSIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZmluZCIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImlzVGVybUdyb3VuZGVkIiwiZ3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzIiwidGVybU1hdGNoZXNHcm91bmRlZFRlcm0iLCJzb21lIiwiZ3JvdW5kZWRUZXJtIiwiZ3JvdW5kZWRUZXJtTm9kZSIsImdldE5vZGUiLCJncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtR3JvdW5kZWQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJwcm9vZkFzc2VydGlvbiIsImZyb21Ob3RoaW5nIiwiRXF1aXZhbGVuY2VzIiwic2NvcGVkQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBRQTs7O2VBQUE7Ozt5QkF4UStCOzhEQUVYOytEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFNLEFBQUVBLE9BQVNDLHlCQUFjLENBQXZCRDtBQUVSLElBQUEsQUFBTUUsOEJBQU47Y0FBTUE7YUFBQUEsY0FDUUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLHlCQUF5QjtnQ0FENUZOOztnQkFFRixrQkFGRUE7WUFFSUM7O1FBRU4sTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLFdBQVcs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