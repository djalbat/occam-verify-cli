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
var _transient = /*#__PURE__*/ _interop_require_default(require("../../context/transient"));
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
                var transientContext = _transient.default.fromNothing(context);
                context = transientContext; ///
                var node = this.getNode(), stepString = this.getString(); ///
                context.trace("Verifying the '".concat(stepString, "' step..."), node);
                var statement = this.getStatement();
                if (statement === null) {
                    context.debug("Unable to verify the '".concat(stepString, "' step because it is nonsense."), node);
                } else {
                    var referenceValidates = this.validateReference(context);
                    if (referenceValidates) {
                        var satisfiesAssertioVeriries = this.verifySatisfiesAssertion(context);
                        if (satisfiesAssertioVeriries) {
                            var stated = this.isStated(), statementValidates = statement.validate(assignments, stated, context);
                            if (statementValidates) {
                                var statementUnifies = _unification.unifyStatements.some(function(unifyStatement) {
                                    var statementUnifies = unifyStatement(statement, _this.reference, _this.satisfiesAssertion, substitutions, context);
                                    if (statementUnifies) {
                                        return true;
                                    }
                                });
                                if (statementUnifies) {
                                    verifies = true;
                                }
                            }
                        }
                    }
                }
                if (verifies) {
                    this.setContext(context);
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
                    var node = this.getNode(), stepString = this.getString();
                    context.trace("Validating the '".concat(stepString, "' step's reference... "), node);
                    referenceValidates = this.reference.validate(context);
                    if (referenceValidates) {
                        context.debug("...validating the '".concat(stepString, "' step's reference. "), node);
                    }
                }
                return referenceValidates;
            }
        },
        {
            key: "verifySatisfiesAssertion",
            value: function verifySatisfiesAssertion(context) {
                var satisfiesAssertionVerifies = true; ///
                if (this.satisfiesAssertion !== null) {
                    var node = this.getNode(), stepString = this.getString(); ///
                    context.trace("Verifying the '".concat(stepString, "' step's satisfies assertion... "), node);
                    var stated = true, assignments = null;
                    satisfiesAssertionVerifies = this.satisfiesAssertion.validate(assignments, stated, context);
                    if (satisfiesAssertionVerifies) {
                        context.debug("...verified the '".concat(stepString, "' step's satisfies assertion. "), node);
                    }
                }
                return satisfiesAssertionVerifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcbmltcG9ydCBUcmFuc2llbnRDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3RyYW5zaWVudFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGVwIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHJhbnNpZW50Q29udGV4dCA9IFRyYW5zaWVudENvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gdHJhbnNpZW50Q29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9WZXJpcmllcyA9IHRoaXMudmVyaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb1ZlcmlyaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gdGhpcy5pc1N0YXRlZCgpLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudHMuc29tZSgodW5pZnlTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgdGhpcy5yZWZlcmVuY2UsIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgICBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyByZWZlcmVuY2UuLi4gYCwgbm9kZSk7XG5cbiAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgcmVmZXJlbmNlLiBgLCBub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmVyaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uIGAsIG5vZGUpO1xuXG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb25WZXJpZmllcyA9IHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3Mgc2F0aXNmaWVzIGFzc2VydGlvbi4gYCwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIHN0ZXAgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIHN0ZXBVbmlmaWVzID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0ZXAiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsImdldFJlZmVyZW5jZSIsImdldFNhdGlzZmllc0Fzc2VydGlvbiIsImlzU2F0aXNmaWVkIiwic2F0aXNmaWVkIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1N0YXRlZCIsInN0YXRlZCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0U3RhdGVtZW50IiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiYXNzaWdubWVudHMiLCJ2ZXJpZmllcyIsInRyYW5zaWVudENvbnRleHQiLCJUcmFuc2llbnRDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJnZXROb2RlIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZGVidWciLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvVmVyaXJpZXMiLCJ2ZXJpZnlTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudHMiLCJzb21lIiwidW5pZnlTdGF0ZW1lbnQiLCJzZXRDb250ZXh0Iiwic2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMiLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJTdWJzdGl0dXRpb25zIiwiZWxlbWVudHMiLCJzdGVwIiwic3RlcFVuaWZpZXMiLCJ1bmlmeVN0ZXAiLCJzdWJzdGl0dXRpb25zQ29tcGFyZSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwiUHJvb2ZBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnRUFScUI7cUVBQ007Z0VBQ0U7MkJBR0c7eUJBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DLFdBQWVBLElBQUFBLGdCQUFNLHlCQUFDOzthQUFNQyxLQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCO2dDQURqRE47O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQztZQUFNQzs7UUFFN0IsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxrQkFBa0IsR0FBR0E7Ozs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGtCQUFrQjtZQUNoQzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFhLElBQUksQ0FBQ0osa0JBQWtCLEtBQUs7Z0JBRS9DLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBYSxJQUFJLENBQUNQLFNBQVMsS0FBSztnQkFFdEMsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxZQUFZLElBQUksQ0FBQ0QsV0FBVyxJQUM1QkcsU0FBU0YsV0FBVyxHQUFHO2dCQUU3QixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLCtCQUErQkMsSUFBSSxFQUFFQyxnQkFBZ0IsRUFBRWhCLE9BQU87Z0JBQzVELElBQUlpQixvQ0FBb0M7Z0JBRXhDLElBQU1kLFlBQVksSUFBSSxDQUFDZSxZQUFZLElBQzdCQyxvQkFBb0JDLElBQUFBLHlDQUE4QixFQUFDakIsV0FBV0g7Z0JBRXBFLElBQUltQixzQkFBc0IsTUFBTTtvQkFDOUJGLG9DQUFvQ0Usa0JBQWtCTCw4QkFBOEIsQ0FBQ0MsTUFBTUMsa0JBQWtCaEI7Z0JBQy9HO2dCQUVBLE9BQU9pQjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGFBQWEsRUFBRUMsV0FBVyxFQUFFdkIsT0FBTzs7Z0JBQ3hDLElBQUl3QixXQUFXO2dCQUVmLElBQU1DLG1CQUFtQkMsa0JBQWdCLENBQUNDLFdBQVcsQ0FBQzNCO2dCQUV0REEsVUFBVXlCLGtCQUFrQixHQUFHO2dCQUUvQixJQUFNdkIsT0FBTyxJQUFJLENBQUMwQixPQUFPLElBQ25CQyxhQUFhLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7Z0JBRXhDOUIsUUFBUStCLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLGNBQVkzQjtnQkFFdkQsSUFBTUMsWUFBWSxJQUFJLENBQUNlLFlBQVk7Z0JBRW5DLElBQUlmLGNBQWMsTUFBTTtvQkFDdEJILFFBQVFnQyxLQUFLLENBQUMsQUFBQyx5QkFBbUMsT0FBWEgsWUFBVyxtQ0FBaUMzQjtnQkFDckYsT0FBTztvQkFDTCxJQUFNK0IscUJBQXFCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNsQztvQkFFbEQsSUFBSWlDLG9CQUFvQjt3QkFDdEIsSUFBTUUsNEJBQTRCLElBQUksQ0FBQ0Msd0JBQXdCLENBQUNwQzt3QkFFaEUsSUFBSW1DLDJCQUEyQjs0QkFDN0IsSUFBTXRCLFNBQVMsSUFBSSxDQUFDRCxRQUFRLElBQ3RCeUIscUJBQXFCbEMsVUFBVW1DLFFBQVEsQ0FBQ2YsYUFBYVYsUUFBUWI7NEJBRW5FLElBQUlxQyxvQkFBb0I7Z0NBQ3RCLElBQU1FLG1CQUFtQkMsNEJBQWUsQ0FBQ0MsSUFBSSxDQUFDLFNBQUNDO29DQUM3QyxJQUFNSCxtQkFBbUJHLGVBQWV2QyxXQUFXLE1BQUtDLFNBQVMsRUFBRSxNQUFLQyxrQkFBa0IsRUFBRWlCLGVBQWV0QjtvQ0FFM0csSUFBSXVDLGtCQUFrQjt3Q0FDcEIsT0FBTztvQ0FDVDtnQ0FDRjtnQ0FFQSxJQUFJQSxrQkFBa0I7b0NBQ3BCZixXQUFXO2dDQUNiOzRCQUNGO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDbUIsVUFBVSxDQUFDM0M7b0JBRWhCQSxRQUFRZ0MsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhILFlBQVcsWUFBVTNCO2dCQUN6RDtnQkFFQSxPQUFPc0I7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JsQyxPQUFPO2dCQUN2QixJQUFJaUMscUJBQXFCO2dCQUV6QixJQUFJLElBQUksQ0FBQzdCLFNBQVMsS0FBSyxNQUFNO29CQUMzQixJQUFNRixPQUFPLElBQUksQ0FBQzBCLE9BQU8sSUFDbkJDLGFBQWEsSUFBSSxDQUFDQyxTQUFTO29CQUVqQzlCLFFBQVErQixLQUFLLENBQUMsQUFBQyxtQkFBNkIsT0FBWEYsWUFBVywyQkFBeUIzQjtvQkFFckUrQixxQkFBcUIsSUFBSSxDQUFDN0IsU0FBUyxDQUFDa0MsUUFBUSxDQUFDdEM7b0JBRTdDLElBQUlpQyxvQkFBb0I7d0JBQ3RCakMsUUFBUWdDLEtBQUssQ0FBQyxBQUFDLHNCQUFnQyxPQUFYSCxZQUFXLHlCQUF1QjNCO29CQUN4RTtnQkFDRjtnQkFFQSxPQUFPK0I7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSx5QkFBeUJwQyxPQUFPO2dCQUM5QixJQUFJNEMsNkJBQTZCLE1BQU8sR0FBRztnQkFFM0MsSUFBSSxJQUFJLENBQUN2QyxrQkFBa0IsS0FBSyxNQUFNO29CQUNwQyxJQUFNSCxPQUFPLElBQUksQ0FBQzBCLE9BQU8sSUFDbkJDLGFBQWEsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztvQkFFekM5QixRQUFRK0IsS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcscUNBQW1DM0I7b0JBRTlFLElBQU1XLFNBQVMsTUFDVFUsY0FBYztvQkFFcEJxQiw2QkFBNkIsSUFBSSxDQUFDdkMsa0JBQWtCLENBQUNpQyxRQUFRLENBQUNmLGFBQWFWLFFBQVFiO29CQUVuRixJQUFJNEMsNEJBQTRCO3dCQUM5QjVDLFFBQVFnQyxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWEgsWUFBVyxtQ0FBaUMzQjtvQkFDaEY7Z0JBQ0Y7Z0JBRUEsT0FBTzBDO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCeEMsa0JBQWtCLEVBQUVMLE9BQU87Z0JBQ3JELElBQUk4QyxnQ0FBZ0M7Z0JBRXBDLElBQU1qQixhQUFhLElBQUksQ0FBQ0MsU0FBUyxJQUMzQmlCLDJCQUEyQjFDLG1CQUFtQnlCLFNBQVM7Z0JBRTdEOUIsUUFBUStCLEtBQUssQ0FBQyxBQUFDLGlCQUE4Q2dCLE9BQTlCbEIsWUFBVyxxQkFBNEMsT0FBekJrQiwwQkFBeUIsNkJBQTJCLElBQUksQ0FBQzdDLElBQUk7Z0JBRTFILElBQU1FLFlBQVlDLG1CQUFtQkMsWUFBWSxJQUMzQzBDLFFBQVFoRCxRQUFRaUQsb0JBQW9CLENBQUM3QztnQkFFM0MsSUFBSTRDLFVBQVUsTUFBTTtvQkFDbEIsSUFBTSxBQUFFRSxnQkFBa0JDLGlCQUFRLENBQTFCRCxlQUNGRSxPQUFPLElBQUksRUFDWDlCLGdCQUFnQjRCLGNBQWN2QixXQUFXLENBQUMzQixVQUMxQ3FELGNBQWNMLE1BQU1NLFNBQVMsQ0FBQ0YsTUFBTTlCLGVBQWV0QjtvQkFFekQsSUFBSXFELGFBQWE7d0JBQ2YsSUFBTUUsdUJBQXVCbEQsbUJBQW1CbUQsb0JBQW9CLENBQUNsQyxlQUFldEI7d0JBRXBGLElBQUl1RCxzQkFBc0I7NEJBQ3hCVCxnQ0FBZ0M7d0JBQ2xDO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLCtCQUErQjtvQkFDakM5QyxRQUFRZ0MsS0FBSyxDQUFDLEFBQUMsbUJBQWdEZSxPQUE5QmxCLFlBQVcscUJBQTRDLE9BQXpCa0IsMEJBQXlCLDJCQUF5QixJQUFJLENBQUM3QyxJQUFJO2dCQUM1SDtnQkFFQSxPQUFPNEM7WUFDVDs7OztFQTVLdUNXLHVCQUFjLEdBOEtyRCx3QkFBT0MsUUFBTyJ9