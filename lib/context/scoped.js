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
                if (equalityRelfexive) {
                    context.trace("The '".concat(equalityString, "' equality is reflexive and will not added to the scoped context."));
                } else {
                    var Equivalence = _elements.default.Equivalence, equivalence = Equivalence.fromEquality(equality, context);
                    this.equivalences = this.equivalences.mergedWithEquivalence(equivalence, context);
                    context.debug("...added the '".concat(equalityString, "' equality to the scoped context."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Njb3BlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFNjb3BlZENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBhc3NpZ25tZW50cywgZXF1aXZhbGVuY2VzLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzO1xuICAgIHRoaXMuYXNzaWdubWVudHMgPSBhc3NpZ25tZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGxldCB2YXJpYWJsZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICB2YXJpYWJsZXMgPSBjb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgdmFyaWFibGVzID0gW1xuICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAuLi52YXJpYWJsZXNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBqdWRnZW1lbnRzID0gY29udGV4dC5nZXRKdWRnZW1lbnRzKCk7XG5cbiAgICBqdWRnZW1lbnRzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuanVkZ2VtZW50cyxcbiAgICAgIC4uLmp1ZGdlbWVudHNcbiAgICBdXG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldEFzc2lnbm1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXM7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoKGVxdWl2YWxlbmNlcywgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IFsgIC8vL1xuICAgICAgLi4uc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyxcbiAgICAgIC4uLnRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1xuICAgIF07XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldFByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucy5maWx0ZXIoKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpO1xuXG4gICAgICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCkge1xuICAgIGxldCBsYXN0UHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvbnNMZW5ndGggPSBwcm9vZkFzc2VydGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZkFzc2VydGlvbiA9IGxhc3QocHJvb2ZBc3NlcnRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSBlcXVhbGl0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVsZmV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmIChlcXVhbGl0eVJlbGZleGl2ZSkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaXMgcmVmbGV4aXZlIGFuZCB3aWxsIG5vdCBhZGRlZCB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5mcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpO1xuXG4gICAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHRvIHRoZSBzY29wZWQgY29udGV4dC4uLmApO1xuXG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudFN0cmluZyA9IGp1ZGdlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBzY29wZWQgY29udGV4dC4uLmApO1xuXG4gICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgdGhpcy5hc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICB9XG5cbiAgYXNzaWduQXNzaWdubWVudHMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy5hc3NpZ25tZW50cy5mb3JFYWNoKChhc3NpZ25tZW50KSA9PiB7XG4gICAgICBhc3NpZ25tZW50KGNvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucy5wdXNoKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7IHJldHVybiB0aGlzLmVxdWl2YWxlbmNlcy5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7IH1cblxuICBmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBqdWRnZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBpc1Rlcm1Hcm91bmRlZCh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9vZkFzc2VydGlvbnMuc29tZSgocHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb29mQXNzZXJ0aW9uLmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHsgRXF1aXZhbGVuY2VzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoY29udGV4dCksXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHNjb3BlZENvbnRleHQgPSBuZXcgU2NvcGVkQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIGp1ZGdlbWVudHMsIGFzc2lnbm1lbnRzLCBlcXVpdmFsZW5jZXMsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpO1xuXG4gICAgcmV0dXJuIHNjb3BlZENvbnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcGVkQ29udGV4dDsiXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiU2NvcGVkQ29udGV4dCIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJqdWRnZW1lbnRzIiwiYXNzaWdubWVudHMiLCJlcXVpdmFsZW5jZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0Q29udGV4dCIsImdldEp1ZGdlbWVudHMiLCJnZXRBc3NpZ25tZW50cyIsImdldEVxdWl2YWxlbmNlcyIsIm1lcmdlZFdpdGgiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0UHJvb2ZBc3NlcnRpb25zIiwicHJvb2ZBc3NlcnRpb25zIiwiZmlsdGVyIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24iLCJpc1Byb29mQXNzZXJ0aW9uIiwiZ2V0TGFzdFByb29mQXNzZXJ0aW9uIiwibGFzdFByb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJlcXVhbGl0eVJlbGZleGl2ZSIsImlzUmVmbGV4aXZlIiwiRXF1aXZhbGVuY2UiLCJlbGVtZW50cyIsImVxdWl2YWxlbmNlIiwiZnJvbUVxdWFsaXR5IiwibWVyZ2VkV2l0aEVxdWl2YWxlbmNlIiwiZGVidWciLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVTdHJpbmciLCJwdXNoIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50U3RyaW5nIiwiYWRkQXNzaWdubWVudCIsImFzc2lnbm1lbnQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImZvckVhY2giLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJ0ZXJtIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kIiwianVkZ2VtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwiaXNUZXJtR3JvdW5kZWQiLCJncm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJ0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybSIsInNvbWUiLCJncm91bmRlZFRlcm0iLCJncm91bmRlZFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsImdyb3VuZGVkVGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Hcm91bmRlZCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVQcmVzZW50IiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb29mQXNzZXJ0aW9uIiwiZnJvbU5vdGhpbmciLCJFcXVpdmFsZW5jZXMiLCJzY29wZWRDb250ZXh0IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMFFBOzs7ZUFBQTs7O3lCQXhRK0I7OERBRVg7K0RBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBQSxBQUFNRSw4QkFBTjtjQUFNQTthQUFBQSxjQUNRQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMseUJBQXlCO2dDQUQ1Rk47O2dCQUVGLGtCQUZFQTtZQUVJQzs7UUFFTixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFVBQVUsR0FBR0E7UUFDbEIsTUFBS0MsV0FBVyxH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