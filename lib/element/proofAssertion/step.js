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
                                var stated = _this.isStated(), statementValidates = statement.validate(assignments, stated, context);
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
            key: "validateStatement",
            value: function validateStatement(context) {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudHMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBsaW1pbmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGVwIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVkID0gdGhpcy5pc1N0YXRlZCgpLFxuICAgICAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHRoaXMuZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBsaW1pbmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnRzLnNvbWUoKHVuaWZ5U3RhdGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICAgICAgICAgICAgICAgICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJpZmllcztcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHt9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uIGApO1xuXG4gICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLiBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzYXRpc2ZpZXNBc3NlcnRpb259JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uIGApO1xuXG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NhdGlzZmllc0Fzc2VydGlvbn0nIHNhdGlzZmllcyBhc3NlcnRpb24uIGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgc3RlcFVuaWZpZXMgPSBheGlvbS51bmlmeVN0ZXAoc3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29tcGFyZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RlcFwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3RlcCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uIiwiaXNTYXRpc2ZpZWQiLCJzYXRpc2ZpZWQiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzU3RhdGVkIiwic3RhdGVkIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJnZXRTdGF0ZW1lbnQiLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwidmVyaWZpZXMiLCJnZXROb2RlIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlIiwic3RhdGVtZW50VW5pZmllcyIsImxpbWluYWxseSIsInVuaWZ5U3RhdGVtZW50cyIsInNvbWUiLCJ1bmlmeVN0YXRlbWVudCIsInNldENvbnRleHQiLCJkZWJ1ZyIsInZhbGlkYXRlU3RhdGVtZW50IiwicmVmZXJlbmNlU3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiU3Vic3RpdHV0aW9ucyIsImVsZW1lbnRzIiwic3RlcCIsInN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsIlByb29mQXNzZXJ0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7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