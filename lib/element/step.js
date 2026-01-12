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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _proofAssertion = /*#__PURE__*/ _interop_require_default(require("./proofAssertion"));
var _temporary = /*#__PURE__*/ _interop_require_default(require("../context/temporary"));
var _unification = require("../utilities/unification");
var _statement = require("../utilities/statement");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi9wcm9vZkFzc2VydGlvblwiO1xuaW1wb3J0IFRlbXBvcmFyeUNvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvdGVtcG9yYXJ5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdGF0ZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0ZXAgZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFNhdGlzZmllc0Fzc2VydGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBpc1NhdGlzZmllZCgpIHtcbiAgICBjb25zdCBzYXRpc2ZpZWQgPSAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmllZDtcbiAgfVxuXG4gIGlzUXVhbGlmaWVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9ICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWVkO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gdGhpcy5pc1F1YWxpZmllZCgpLFxuICAgICAgICAgIHN0YXRlZCA9IHF1YWxpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uLmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmVyaWZ5KHN1YnN0aXR1dGlvbnMsIGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZW1wb3JhcnlDb250ZXh0ID0gVGVtcG9yYXJ5Q29udGV4dC5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSB0ZW1wb3JhcnlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvVmVyaXJpZXMgPSB0aGlzLnZlcmlmeVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9WZXJpcmllcykge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IHRoaXMuaXNTdGF0ZWQoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBzdGF0ZW1lbnQudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnRzLnNvbWUoKHVuaWZ5U3RhdGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHRoaXMucmVmZXJlbmNlLCB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmVyaXJpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyByZWZlcmVuY2UuLi4gYCwgbm9kZSk7XG5cbiAgICBpZiAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZVZlcmlyaWVzID0gdGhpcy5yZWZlcmVuY2UudmVyaWZ5KGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWZlcmVuY2VWZXJpcmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZlcmlyaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyByZWZlcmVuY2UuIGAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWZXJpcmllcztcbiAgfVxuXG4gIHZlcmlmeVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3Mgc2F0aXNmaWVzIGFzc2VydGlvbi4uLiBgLCBub2RlKTtcblxuICAgIGlmICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMgPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3Mgc2F0aXNmaWVzIGFzc2VydGlvbi4gYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICBzdGVwID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHN0ZXBVbmlmaWVzID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0ZXAiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsImdldFJlZmVyZW5jZSIsImdldFNhdGlzZmllc0Fzc2VydGlvbiIsImlzU2F0aXNmaWVkIiwic2F0aXNmaWVkIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1N0YXRlZCIsInN0YXRlZCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0U3RhdGVtZW50IiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJzdWJzdGl0dXRpb25zIiwiYXNzaWdubWVudHMiLCJ2ZXJpZmllcyIsInRlbXBvcmFyeUNvbnRleHQiLCJUZW1wb3JhcnlDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJnZXROb2RlIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZGVidWciLCJyZWZlcmVuY2VWZXJpZmllcyIsInZlcmlmeVJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvVmVyaXJpZXMiLCJ2ZXJpZnlTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudHMiLCJzb21lIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzZXRDb250ZXh0IiwicmVmZXJlbmNlVmVyaXJpZXMiLCJzYXRpc2ZpZXNBc3NlcnRpb25WZXJpZmllcyIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsIlN1YnN0aXR1dGlvbnMiLCJlbGVtZW50cyIsInN0ZXAiLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dFQVJxQjtxRUFDTTtnRUFDRTsyQkFHRzt5QkFDZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0MsV0FBZUEsSUFBQUEsZ0JBQU0seUJBQUM7O2FBQU1DLEtBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0I7Z0NBRGpETjs7Z0JBRXhCLGtCQUZ3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