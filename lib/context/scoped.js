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
                var Equivalences = _elements.default.Equivalences, variables = [], judgements = [], equivalences = Equivalences.fromNothing(context), subproofOrProofAssertions = [], scopedContext = new ScopedContext(context, variables, judgements, equivalences, subproofOrProofAssertions);
                return scopedContext;
            }
        }
    ]);
    return ScopedContext;
}(_context.default);
var _default = ScopedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Njb3BlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFNjb3BlZENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuanVkZ2VtZW50cyA9IGp1ZGdlbWVudHM7XG4gICAgdGhpcy5lcXVpdmFsZW5jZXMgPSBlcXVpdmFsZW5jZXM7XG4gICAgdGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcygpIHtcbiAgICBsZXQgdmFyaWFibGVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgdmFyaWFibGVzID0gY29udGV4dC5nZXRWYXJpYWJsZXMoKTtcblxuICAgIHZhcmlhYmxlcyA9IFtcbiAgICAgIC4uLnRoaXMudmFyaWFibGVzLFxuICAgICAgLi4udmFyaWFibGVzXG4gICAgXTtcblxuICAgIHJldHVybiB2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGxldCBqdWRnZW1lbnRzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAganVkZ2VtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmp1ZGdlbWVudHMsXG4gICAgICAuLi5qdWRnZW1lbnRzXG4gICAgXVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcztcblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucy5maWx0ZXIoKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpO1xuXG4gICAgICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCkge1xuICAgIGxldCBsYXN0UHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvbnNMZW5ndGggPSBwcm9vZkFzc2VydGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZkFzc2VydGlvbiA9IGxhc3QocHJvb2ZBc3NlcnRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKTtcblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbICAvLy9cbiAgICAgIC4uLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsXG4gICAgICAuLi50aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGxldCBlcXVhbGl0eUFkZGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSBlcXVhbGl0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVsZmV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmIChlcXVhbGl0eVJlbGZleGl2ZSkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaXMgcmVmbGV4aXZlIGFuZCB3aWxsIG5vdCBhZGRlZCB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgICAgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7XG5cbiAgICAgIGVxdWFsaXR5QWRkZWQgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5QWRkZWQ7XG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZUEgPSB2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlQiA9IHRoaXMudmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZUIgPSB2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZUFDb21wYXJlc1RvVmFyaWFibGVCID0gdmFyaWFibGVBLmNvbXBhcmUodmFyaWFibGVCKTtcblxuICAgICAgaWYgKHZhcmlhYmxlQUNvbXBhcmVzVG9WYXJpYWJsZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBsZXQganVkZ2VtZW50QWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSBqdWRnZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gdGhpcy5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoanVkZ2VtZW50UHJlc2VudCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBBICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCBmb3IgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICAgIGp1ZGdlbWVudEFkZGVkID0gdHJ1ZTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGp1ZGdlbWVudEFkZGVkO1xuICB9XG5cbiAgYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucy5wdXNoKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgfVxuXG4gIGZpbmRFcXVpdmFsZW5jZUJ5VGVybSh0ZXJtKSB7IHJldHVybiB0aGlzLmVxdWl2YWxlbmNlcy5maW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSk7IH1cblxuICBmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBqdWRnZW1lbnQubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtTm9kZSA9IGdyb3VuZGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgIGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaE5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9vZkFzc2VydGlvbnMuc29tZSgocHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb29mQXNzZXJ0aW9uLmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHsgRXF1aXZhbGVuY2VzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpLFxuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBzY29wZWRDb250ZXh0ID0gbmV3IFNjb3BlZENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBlcXVpdmFsZW5jZXMsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpO1xuXG4gICAgcmV0dXJuIHNjb3BlZENvbnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcGVkQ29udGV4dDsiXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiU2NvcGVkQ29udGV4dCIsImNvbnRleHQiLCJ2YXJpYWJsZXMiLCJqdWRnZW1lbnRzIiwiZXF1aXZhbGVuY2VzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldFZhcmlhYmxlcyIsImdldENvbnRleHQiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwibWVyZ2VkV2l0aCIsImdldFByb29mQXNzZXJ0aW9ucyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJwcm9vZkFzc2VydGlvbnMiLCJmaWx0ZXIiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25wcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJnZXRMYXN0UHJvb2ZBc3NlcnRpb24iLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlBZGRlZCIsImVxdWFsaXR5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJlcXVhbGl0eVJlbGZleGl2ZSIsImlzUmVmbGV4aXZlIiwiRXF1aXZhbGVuY2UiLCJlbGVtZW50cyIsImVxdWl2YWxlbmNlIiwiZnJvbUVxdWFsaXR5IiwibWVyZ2VkV2l0aEVxdWl2YWxlbmNlIiwiZGVidWciLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVBIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZUIiLCJmaW5kIiwidmFyaWFibGVBQ29tcGFyZXNUb1ZhcmlhYmxlQiIsImNvbXBhcmUiLCJwdXNoIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QWRkZWQiLCJqdWRnZW1lbnRTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJ0ZXJtIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJnZXROb2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJ0ZXJtR3JvdW5kZWQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVQcmVzZW50IiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInByb29mQXNzZXJ0aW9uIiwiZnJvbU5vdGhpbmciLCJFcXVpdmFsZW5jZXMiLCJzY29wZWRDb250ZXh0IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNlJBOzs7ZUFBQTs7O3lCQTNSK0I7OERBRVg7K0RBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQU0sQUFBRUEsT0FBU0MseUJBQWMsQ0FBdkJEO0FBRVIsSUFBQSxBQUFNRSw4QkFBTjtjQUFNQTthQUFBQSxjQUNRQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBQUVDLHlCQUF5QjtnQ0FEL0VMOztnQkFFRixrQkFGRUE7WUFFSUM7O1FBRU4sTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MseUJBQXlCLEdBQUdBOzs7a0JBUC9CTDs7WUFVSk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlKO2dCQUVKLElB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