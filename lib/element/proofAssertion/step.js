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
var _occamfurtle = require("occam-furtle");
var _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../proofAssertion"));
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
var define = _occamfurtle.elements.define;
var _default = define((_Step = /*#__PURE__*/ function(ProofAssertion) {
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
                var node = this.getNode(), stepString = this.getString(); ///
                context.trace("Verifying the '".concat(stepString, "' step..."), node);
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
                    context.debug("Unable to verify the '".concat(stepString, "' step because it is nonsense."), node);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(stepString, "' step."), node);
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
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion..."), this.node);
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var Substitutions = _occamfurtle.elements.Substitutions, step = this, substitutions = Substitutions.fromNothing(context), stepUnifies = axiom.unifyStep(step, substitutions, context);
                    if (stepUnifies) {
                        var substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);
                        if (substitutionsCompare) {
                            unifiesWithSatisfiesAssertion = true;
                        }
                    }
                }
                if (unifiesWithSatisfiesAssertion) {
                    context.debug("...unified the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion."), this.node);
                }
                return unifiesWithSatisfiesAssertion;
            }
        }
    ]);
    return Step;
}(_proofAssertion.default), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzIH0gZnJvbSBcIm9jY2FtLWZ1cnRsZVwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGF0dGVtcHQsIGxpbWluYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdGF0ZW1lbnRcIjtcblxuY29uc3QgeyBkZWZpbmUgfSA9IGVsZW1lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGlzU2F0aXNmaWVkKCkge1xuICAgIGNvbnN0IHNhdGlzZmllZCA9ICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHRoaXMuZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBsaW1pbmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnRzLnNvbWUoKHVuaWZ5U3RhdGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICAgICAgICAgICAgICAgICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJpZmllcztcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLiBgKTtcblxuICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4gYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2F0aXNmaWVzQXNzZXJ0aW9ufScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLiBgKTtcblxuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24udmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzYXRpc2ZpZXNBc3NlcnRpb259JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLiBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIHN0ZXAgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIHN0ZXBVbmlmaWVzID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsImVsZW1lbnRzIiwiU3RlcCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uIiwiaXNTYXRpc2ZpZWQiLCJzYXRpc2ZpZWQiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzU3RhdGVkIiwic3RhdGVkIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJnZXRTdGF0ZW1lbnQiLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwidmVyaWZpZXMiLCJnZXROb2RlIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsImxpbWluYWxseSIsInVuaWZ5U3RhdGVtZW50cyIsInNvbWUiLCJ1bmlmeVN0YXRlbWVudCIsInNldENvbnRleHQiLCJkZWJ1ZyIsInJlZmVyZW5jZVN0cmluZyIsInZhbGlkYXRlIiwic2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiU3Vic3RpdHV0aW9ucyIsInN0ZXAiLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJCQVZ5QjtxRUFFRTsyQkFFSzt1QkFDRzt5QkFDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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