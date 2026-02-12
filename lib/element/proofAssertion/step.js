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
var _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../proofAssertion"));
var _elements = require("../../elements");
var _unification = require("../../utilities/unification");
var _context = require("../../utilities/context");
var _statement = require("../../utilities/statement");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Step;
var _default = (0, _elements.define)((_Step = /*#__PURE__*/ function(ProofAssertion) {
    _inherits(Step, ProofAssertion);
    function Step(context, string, node, statement, reference, satisfiesAssertion) {
        _class_call_check(this, Step);
        var _this;
        _this = _call_super(this, Step, [
            context,
            string,
            node,
            statement
        ]);
        _this.reference = reference;
        _this.satisfiesAssertion = satisfiesAssertion;
        return _this;
    }
    _create_class(Step, [
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getSatisfiesAssertion",
            value: function getSatisfiesAssertion() {
                return this.satisfiesAssertion;
            }
        },
        {
            key: "isSatisfied",
            value: function isSatisfied() {
                var satisfied = this.satisfiesAssertion !== null;
                return satisfied;
            }
        },
        {
            key: "isQualified",
            value: function isQualified() {
                var qualified = this.reference !== null;
                return qualified;
            }
        },
        {
            key: "isStated",
            value: function isStated() {
                var qualified = this.isQualified(), stated = qualified; ///
                return stated;
            }
        },
        {
            key: "compareTermAndPropertyRelation",
            value: function compareTermAndPropertyRelation(term, propertyRelation, context) {
                var comparesToTermAndPropertyRelation = false;
                var statement = this.getStatement(), propertyAssertion = (0, _statement.propertyAssertionFromStatement)(statement, context);
                if (propertyAssertion !== null) {
                    comparesToTermAndPropertyRelation = propertyAssertion.compareTermAndPropertyRelation(term, propertyRelation, context);
                }
                return comparesToTermAndPropertyRelation;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, context) {
                var _this = this;
                var verifies = false;
                this.break(context);
                var stepString = this.getString(); ///
                context.trace("Verifying the '".concat(stepString, "' step..."));
                var statement = this.getStatement();
                if (statement !== null) {
                    (0, _context.attempt)(function(context) {
                        var referenceValidates = _this.validateReference(context);
                        if (referenceValidates) {
                            var satisfiesAssertioValidates = _this.validateSatisfiesAssertion(context);
                            if (satisfiesAssertioValidates) {
                                var statementValidates = _this.validateStatement(assignments, context);
                                if (statementValidates) {
                                    var reference = _this.getReference(), satisfiesAssertion = _this.getSatisfiesAssertion(), statementUnifies = (0, _context.liminally)(function(context) {
                                        var statementUnifies = _unification.unifyStatements.some(function(unifyStatement) {
                                            var statementUnifies = unifyStatement(statement, reference, satisfiesAssertion, context);
                                            if (statementUnifies) {
                                                _this.setContext(context);
                                                return true;
                                            }
                                        });
                                        return statementUnifies;
                                    }, context);
                                    if (statementUnifies) {
                                        verifies = true;
                                    }
                                }
                            }
                        }
                        return verifies;
                    }, context);
                } else {
                    context.debug("Unable to verify the '".concat(stepString, "' step because it is nonsense."));
                }
                if (verifies) {
                    context.debug("...verified the '".concat(stepString, "' step."));
                }
                return verifies;
            }
        },
        {
            key: "validateReference",
            value: function validateReference(context) {
                var referenceValidates = true;
                if (this.reference !== null) {
                    var stepString = this.getString(), referenceString = this.reference.getString();
                    context.trace("Validating the '".concat(stepString, "' step's '").concat(referenceString, "' reference... "));
                    referenceValidates = this.reference.validate(context);
                    if (referenceValidates) {
                        context.debug("...validated the '".concat(stepString, "' step's '").concat(referenceString, "' reference. "));
                    }
                }
                return referenceValidates;
            }
        },
        {
            key: "validateSatisfiesAssertion",
            value: function validateSatisfiesAssertion(context) {
                var satisfiesAssertionValidates = true; ///
                if (this.satisfiesAssertion !== null) {
                    var stepString = this.getString(), satisfiesAssertion = this.satisfiesAssertion.getString();
                    context.trace("Validating the '".concat(stepString, "' step's '").concat(satisfiesAssertion, "' satisfies assertion... "));
                    var stated = true, assignments = null;
                    satisfiesAssertionValidates = this.satisfiesAssertion.validate(assignments, stated, context);
                    if (satisfiesAssertionValidates) {
                        context.debug("...validating the '".concat(stepString, "' step's '").concat(satisfiesAssertion, "' satisfies assertion. "));
                    }
                }
                return satisfiesAssertionValidates;
            }
        },
        {
            key: "unifyWithSatisfiesAssertion",
            value: function unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
                var unifiesWithSatisfiesAssertion = false;
                var stepString = this.getString(), satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var step = this, substitutions = [], stepUnifies = axiom.unifyStep(step, substitutions, context);
                    if (stepUnifies) {
                        var substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);
                        if (substitutionsCompare) {
                            unifiesWithSatisfiesAssertion = true;
                        }
                    }
                }
                if (unifiesWithSatisfiesAssertion) {
                    context.debug("...unified the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return unifiesWithSatisfiesAssertion;
            }
        }
    ]);
    return Step;
}(_proofAssertion.default), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBsaW1pbmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGVwIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdGhpcy5nZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGxpbWluYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudHMuc29tZSgodW5pZnlTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gICAgICAgICAgICAgICAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVzO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uIGApO1xuXG4gICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLiBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzYXRpc2ZpZXNBc3NlcnRpb259JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uIGApO1xuXG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NhdGlzZmllc0Fzc2VydGlvbn0nIHNhdGlzZmllcyBhc3NlcnRpb24uIGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIHN0ZXBVbmlmaWVzID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGVwIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJpc1NhdGlzZmllZCIsInNhdGlzZmllZCIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImdldFN0YXRlbWVudCIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsImxpbWluYWxseSIsInVuaWZ5U3RhdGVtZW50cyIsInNvbWUiLCJ1bmlmeVN0YXRlbWVudCIsInNldENvbnRleHQiLCJkZWJ1ZyIsInJlZmVyZW5jZVN0cmluZyIsInZhbGlkYXRlIiwic2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwic3RlcCIsInN1YnN0aXR1dGlvbnMiLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O3FFQVAyQjt3QkFFSjsyQkFDUzt1QkFDRzt5QkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DLFdBQWVBLElBQUFBLGdCQUFNLHlCQUFDOzthQUFNQyxLQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCO2dDQURqRE47O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQztZQUFNQzs7UUFFN0IsTUFBS0Ms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