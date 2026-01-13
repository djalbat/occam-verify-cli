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
var _temporary = /*#__PURE__*/ _interop_require_default(require("../../context/temporary"));
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
                var temporaryContext = _temporary.default.fromNothing(context);
                context = temporaryContext; ///
                var node = this.getNode(), stepString = this.getString(); ///
                context.trace("Verifying the '".concat(stepString, "' step..."), node);
                var statement = this.getStatement();
                if (statement === null) {
                    context.debug("Unable to verify the '".concat(stepString, "' step because it is nonsense."), node);
                } else {
                    var referenceVerifies = this.verifyReference(context);
                    if (referenceVerifies) {
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
                                    var subproofOrProofAssertion = this; ///
                                    context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                                    this.setContext(context);
                                    verifies = true;
                                }
                            }
                        }
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(stepString, "' step."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(context) {
                var referenceVeriries;
                var node = this.getNode(), stepString = this.getString(); ///
                context.trace("Verifying the '".concat(stepString, "' step's reference... "), node);
                if (this.reference !== null) {
                    referenceVeriries = this.reference.verify(context);
                } else {
                    referenceVeriries = true;
                }
                if (referenceVeriries) {
                    context.debug("...verified the '".concat(stepString, "' step's reference. "), node);
                }
                return referenceVeriries;
            }
        },
        {
            key: "verifySatisfiesAssertion",
            value: function verifySatisfiesAssertion(context) {
                var satisfiesAssertionVerifies;
                var node = this.getNode(), stepString = this.getString(); ///
                context.trace("Verifying the '".concat(stepString, "' step's satisfies assertion... "), node);
                if (this.satisfiesAssertion !== null) {
                    var stated = true, assignments = null;
                    satisfiesAssertionVerifies = this.satisfiesAssertion.validate(assignments, stated, context);
                } else {
                    satisfiesAssertionVerifies = true;
                }
                if (satisfiesAssertionVerifies) {
                    context.debug("...verified the '".concat(stepString, "' step's satisfies assertion. "), node);
                }
                return satisfiesAssertionVerifies;
            }
        },
        {
            key: "unifyWithSatisfiesAssertion",
            value: function unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
                var unifiesWithSatisfiesAssertion = false;
                var stepString = this.string, satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion..."), this.node);
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var Substitutions = _elements.default.Substitutions, step = this, substitutions = Substitutions.fromNothing(), stepUnifies = axiom.unifyStep(step, substitutions, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcbmltcG9ydCBUZW1wb3JhcnlDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L3RlbXBvcmFyeVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGVwIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZlcmlmeShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVtcG9yYXJ5Q29udGV4dCA9IFRlbXBvcmFyeUNvbnRleHQuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gdGVtcG9yYXJ5Q29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzYXRpc2ZpZXNBc3NlcnRpb1ZlcmlyaWVzID0gdGhpcy52ZXJpZnlTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvVmVyaXJpZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSB0aGlzLmlzU3RhdGVkKCksXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50cy5zb21lKCh1bmlmeVN0YXRlbWVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZlcmlyaWVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgcmVmZXJlbmNlLi4uIGAsIG5vZGUpO1xuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICByZWZlcmVuY2VWZXJpcmllcyA9IHRoaXMucmVmZXJlbmNlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVmZXJlbmNlVmVyaXJpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWZXJpcmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgcmVmZXJlbmNlLiBgLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmVyaXJpZXM7XG4gIH1cblxuICB2ZXJpZnlTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb25WZXJpZmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzIHNhdGlzZmllcyBhc3NlcnRpb24uLi4gYCwgbm9kZSk7XG5cbiAgICBpZiAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24udmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzIHNhdGlzZmllcyBhc3NlcnRpb24uIGAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb25WZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGVwIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJpc1NhdGlzZmllZCIsInNhdGlzZmllZCIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImdldFN0YXRlbWVudCIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImFzc2lnbm1lbnRzIiwidmVyaWZpZXMiLCJ0ZW1wb3JhcnlDb250ZXh0IiwiVGVtcG9yYXJ5Q29udGV4dCIsImZyb21Ob3RoaW5nIiwiZ2V0Tm9kZSIsInN0ZXBTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJ2ZXJpZnlSZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb1ZlcmlyaWVzIiwidmVyaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnRzIiwic29tZSIsInVuaWZ5U3RhdGVtZW50Iiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic2V0Q29udGV4dCIsInJlZmVyZW5jZVZlcmlyaWVzIiwic2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMiLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJTdWJzdGl0dXRpb25zIiwiZWxlbWVudHMiLCJzdGVwIiwic3RlcFVuaWZpZXMiLCJ1bmlmeVN0ZXAiLCJzdWJzdGl0dXRpb25zQ29tcGFyZSIsImNvbXBhcmVTdWJzdGl0dXRpb25zIiwiUHJvb2ZBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnRUFScUI7cUVBQ007Z0VBQ0U7MkJBR0c7eUJBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9DLFdBQWVBLElBQUFBLGdCQUFNLHlCQUFDOzthQUFNQyxLQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMs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