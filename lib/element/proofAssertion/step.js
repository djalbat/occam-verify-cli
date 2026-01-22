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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
var _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../proofAssertion"));
var _context = require("../../utilities/context");
var _unification = require("../../utilities/unification");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
            value: function verify(substitutions, assignments, context) {
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
                                var stated = _this.isStated(), statementValidates = statement.validate(assignments, stated, context);
                                if (statementValidates) {
                                    var reference = _this.getReference(), satisfiesAssertion = _this.getSatisfiesAssertion(), statementUnifies = _unification.unifyStatements.some(function(unifyStatement) {
                                        var statementUnifies = unifyStatement(statement, reference, satisfiesAssertion, substitutions, context);
                                        if (statementUnifies) {
                                            return true;
                                        }
                                    });
                                    if (statementUnifies) {
                                        _this.setContext(context);
                                        verifies = true;
                                    }
                                }
                            }
                        }
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
                    var Substitutions = _elements.default.Substitutions, step = this, substitutions = Substitutions.fromNothing(context), stepUnifies = axiom.unifyStep(step, substitutions, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0YXRlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGlzU2F0aXNmaWVkKCkge1xuICAgIGNvbnN0IHNhdGlzZmllZCA9ICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IHRoaXMuaXNTdGF0ZWQoKSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB0aGlzLmdldFNhdGlzZmllc0Fzc2VydGlvbigpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnRzLnNvbWUoKHVuaWZ5U3RhdGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi4gYCk7XG5cbiAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuIGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NhdGlzZmllc0Fzc2VydGlvbn0nIHNhdGlzZmllcyBhc3NlcnRpb24uLi4gYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyA9IHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2F0aXNmaWVzQXNzZXJ0aW9ufScgc2F0aXNmaWVzIGFzc2VydGlvbi4gYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICBzdGVwID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoY29udGV4dCksXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGVwIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJpc1NhdGlzZmllZCIsInNhdGlzZmllZCIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImdldFN0YXRlbWVudCIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImFzc2lnbm1lbnRzIiwidmVyaWZpZXMiLCJnZXROb2RlIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50cyIsInNvbWUiLCJ1bmlmeVN0YXRlbWVudCIsInNldENvbnRleHQiLCJkZWJ1ZyIsInJlZmVyZW5jZVN0cmluZyIsInNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsIlN1YnN0aXR1dGlvbnMiLCJlbGVtZW50cyIsInN0ZXAiLCJmcm9tTm90aGluZyIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsIlByb29mQXNzZXJ0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0VBUnFCO3FFQUNNO3VCQUdIOzJCQUNRO3lCQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQyxXQUFlQSxJQUFBQSxnQkFBTSx5QkFBQzs7YUFBTUMsS0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVB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