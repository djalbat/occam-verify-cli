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
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("../../node/topLevelAssertion"));
var _elements = require("../../elements");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var _Axiom;
var _default = (0, _elements.define)((_Axiom = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Axiom, TopLevelAssertion);
    function Axiom() {
        _class_call_check(this, Axiom);
        return _call_super(this, Axiom, arguments);
    }
    _create_class(Axiom, [
        {
            key: "isSatisfiable",
            value: function isSatisfiable() {
                var signature = this.getSignature(), satisfiable = signature !== null;
                return satisfiable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var node = this.getNode(), context = this.getContext(), axiomString = this.getString(); ///
                context.trace("Verifying the '".concat(axiomString, "' axiom..."), node);
                var signatureVerifies = this.verifySignature();
                if (signatureVerifies) {
                    verifies = _get(_get_prototype_of(Axiom.prototype), "verify", this).call(this);
                }
                if (verifies) {
                    var axiom = this; ///
                    context.addAxiom(axiom);
                    context.debug("...verified the '".concat(axiomString, "' axiom."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifySignature",
            value: function verifySignature() {
                var signatureVerifies;
                var satisfiable = this.isSatisfiable();
                if (satisfiable) {
                    var context = this.getContext(), signature = this.getSignature();
                    signatureVerifies = signature.verify(context);
                } else {
                    signatureVerifies = true;
                }
                return signatureVerifies;
            }
        },
        {
            key: "compareSignature",
            value: function compareSignature(signature, substitutions, context) {
                var comparesToSignature = false;
                var satisfiable = this.isSatisfiable();
                if (satisfiable) {
                    var signatureA = signature; ///
                    signature = this.getSignature();
                    var signatureB = signature, specificContext = context; ///
                    context = this.getContext();
                    var generalContext = context; ///
                    comparesToSignature = signatureA.compare(signatureB, substitutions, generalContext, specificContext);
                }
                return comparesToSignature;
            }
        },
        {
            key: "unifyStep",
            value: function unifyStep(step, substitutions, context) {
                var stepUnifies = false;
                context = step.getContext();
                var node = this.getNode(), stepString = step.getString(), axiomString = this.getString();
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom..."), node);
                var unconditional = this.isUnconditional();
                if (!unconditional) {
                    context.trace("Unable to unify the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom because the axiom is not unconditional."), node);
                } else {
                    var statement = step.getStatement(), statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);
                    if (statementUnifiesWithDeduction) {
                        stepUnifies = true;
                    }
                }
                if (stepUnifies) {
                    context.debug("...unified the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom."), node);
                }
                return stepUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, context) {
                var subproofUnifies = false;
                var node = this.getNode(), axiomString = this.getString(), subproofString = subproof.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom..."), node);
                var unconditional = this.isUnconditional();
                if (unconditional) {
                    context.trace("Unable to unify the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom because the axiom is unconditional."), node);
                } else {
                    var lastProofAssertion = subproof.getLastProofAssertion(), lastProofAssertionUnifies = this.unifyLastProofAssertion(lastProofAssertion, substitutions, context);
                    if (lastProofAssertionUnifies) {
                        var suppositions = subproof.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, substitutions, context);
                        if (suppositionsUnify) {
                            subproofUnifies = true;
                        }
                    }
                }
                if (subproofUnifies) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom."), node);
                }
                return subproofUnifies;
            }
        },
        {
            key: "unifyDeduction",
            value: function unifyDeduction(deduction, substitutions, generalContext, specificContext) {
                var deductionUnifies;
                var specificDeduction = deduction; ///
                deduction = this.getDeduction();
                var generalDeduction = deduction; ///
                deduction = specificDeduction; ///
                deductionUnifies = generalDeduction.unifyDeduction(deduction, substitutions, generalContext, specificContext);
                return deductionUnifies;
            }
        },
        {
            key: "unifySupposition",
            value: function unifySupposition(supposition, index, substitutions, generalContext, specificContext) {
                var suppositionUnifies;
                var specificSupposition = supposition; ///
                supposition = this.getSupposition(index);
                var generalSupposition = supposition; ///
                supposition = specificSupposition; ///
                suppositionUnifies = generalSupposition.unifySupposition(supposition, substitutions, generalContext, specificContext);
                return suppositionUnifies;
            }
        },
        {
            key: "unifySuppositions",
            value: function unifySuppositions(suppositions, substitutions, generalContext, specificContext) {
                var _this = this;
                var suppositionsUnify = false;
                var specificSuppositions = suppositions; ///
                suppositions = this.getSuppositions();
                var generalSuppositions = suppositions, generalSuppositionsLength = generalSuppositions.length, specificSuppositionsLength = specificSuppositions.length;
                if (generalSuppositionsLength === specificSuppositionsLength) {
                    suppositions = specificSuppositions; ///
                    suppositionsUnify = suppositions.every(function(supposition, index) {
                        var suppositionUnifies = _this.unifySupposition(supposition, index, substitutions, generalContext, specificContext);
                        if (suppositionUnifies) {
                            return true;
                        }
                    });
                }
                return suppositionsUnify;
            }
        },
        {
            key: "unifyLastProofAssertion",
            value: function unifyLastProofAssertion(lastProofAssertion, substitutions, context) {
                var lastProofAssertionUnifies = false;
                var node = this.getNode(), axiomString = this.getString(), lastProofAssertionString = lastProofAssertion.getString();
                context.trace("Unifying the '".concat(lastProofAssertionString, "' last proof assertion with the '").concat(axiomString, "' axiom..."), node);
                var statement = lastProofAssertion.getStatement(), statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);
                if (statementUnifiesWithDeduction) {
                    lastProofAssertionUnifies = true;
                }
                if (lastProofAssertionUnifies) {
                    context.debug("...unified the '".concat(lastProofAssertionString, "' last proof assertion with the '").concat(axiomString, "' axiom."), node);
                }
                return lastProofAssertionUnifies;
            }
        },
        {
            key: "unifyTopLevelAssertion",
            value: function unifyTopLevelAssertion(topLevelAssertion, substitutions, context) {
                var topLevelAssertionUnifies = false;
                var node = this.getNode(), axiomString = this.getString(), topLevelAssertionString = topLevelAssertion.getString();
                context.trace("Unifying the '".concat(topLevelAssertionString, "' top level assertion with the '").concat(axiomString, "' axiom..."), node);
                var hypothesesCorrelate = topLevelAssertion.correlateHypotheses(context);
                if (hypothesesCorrelate) {
                    var specificContext = context; ///
                    context = this.getContext();
                    var generalContext = context; ///
                    context = specificContext; ///
                    var deduction = topLevelAssertion.getDeduction(), deductionUnifies = this.unifyDeduction(deduction, substitutions, generalContext, specificContext);
                    if (deductionUnifies) {
                        var suppositions = topLevelAssertion.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);
                        topLevelAssertionUnifies = suppositionsUnify; ///
                    }
                }
                if (topLevelAssertionUnifies) {
                    context.debug("...unified the '".concat(topLevelAssertionString, "' top level assertion with the '").concat(axiomString, "' axiom."), node);
                }
                return topLevelAssertionUnifies;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                return _topLevelAssertion.default.fromJSON(Axiom, json, context);
            }
        }
    ]);
    return Axiom;
}(_topLevelAssertion.default), _define_property(_Axiom, "name", "Axiom"), _Axiom));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gIGZyb20gXCIuLi8uLi9ub2RlL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXhpb20gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGlzU2F0aXNmaWFibGUoKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKSxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IChzaWduYXR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVNpZ25hdHVyZSgpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllcyA9IHN1cGVyLnZlcmlmeSgpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgYXhpb20gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVNpZ25hdHVyZSgpIHtcbiAgICBsZXQgc2lnbmF0dXJlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBzYXRpc2ZpYWJsZSA9IHRoaXMuaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgICBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpO1xuXG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHNpZ25hdHVyZS52ZXJpZnkoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVWZXJpZmllcztcbiAgfVxuXG4gIGNvbXBhcmVTaWduYXR1cmUoc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TaWduYXR1cmUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZUEgPSBzaWduYXR1cmU7IC8vL1xuXG4gICAgICBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpXG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZUIgPSBzaWduYXR1cmUsIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb21wYXJlc1RvU2lnbmF0dXJlID0gc2lnbmF0dXJlQS5jb21wYXJlKHNpZ25hdHVyZUIsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU2lnbmF0dXJlO1xuICB9XG5cbiAgdW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnRleHQgPSBzdGVwLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAoIXVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFVuYWJsZSB0byB1bmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSBiZWNhdXNlIHRoZSBheGlvbSBpcyBub3QgdW5jb25kaXRpb25hbC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICAgIHN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHVuY29uZGl0aW9uYWwgPSB0aGlzLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKHVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFVuYWJsZSB0byB1bmlmeSB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tIGJlY2F1c2UgdGhlIGF4aW9tIGlzIHVuY29uZGl0aW9uYWwuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RQcm9vZkFzc2VydGlvbiA9IHN1YnByb29mLmdldExhc3RQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgICAgbGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlMYXN0UHJvb2ZBc3NlcnRpb24obGFzdFByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VicHJvb2YuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvbiA9IHRoaXMuZ2V0RGVkdWN0aW9uKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAvLy9cblxuICAgIGRlZHVjdGlvbiA9IHNwZWNpZmljRGVkdWN0aW9uOyAgLy8vXG5cbiAgICBkZWR1Y3Rpb25VbmlmaWVzID0gZ2VuZXJhbERlZHVjdGlvbi51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gdGhpcy5nZXRTdXBwb3NpdGlvbihpbmRleCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgLy8vXG5cbiAgICBzdXBwb3NpdGlvbiA9IHNwZWNpZmljU3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IGdlbmVyYWxTdXBwb3NpdGlvbi51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucywgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCA9IGdlbmVyYWxTdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoID0gc3BlY2lmaWNTdXBwb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGggPT09IHNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoKSB7XG4gICAgICBzdXBwb3NpdGlvbnMgPSBzcGVjaWZpY1N1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlMYXN0UHJvb2ZBc3NlcnRpb24obGFzdFByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFByb29mQXNzZXJ0aW9uU3RyaW5nID0gbGFzdFByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhc3RQcm9vZkFzc2VydGlvblN0cmluZ30nIGxhc3QgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gLCBub2RlKVxuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbGFzdFByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgbGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhc3RQcm9vZkFzc2VydGlvblN0cmluZ30nIGxhc3QgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCwgbm9kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24odG9wTGV2ZWxBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IGh5cG90aGVzZXNDb3JyZWxhdGUgPSB0b3BMZXZlbEFzc2VydGlvbi5jb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNDb3JyZWxhdGUpIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IHN1cHBvc2l0aW9uc1VuaWZ5OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkF4aW9tXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBjb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXhpb20iLCJpc1NhdGlzZmlhYmxlIiwic2lnbmF0dXJlIiwiZ2V0U2lnbmF0dXJlIiwic2F0aXNmaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIm5vZGUiLCJnZXROb2RlIiwiY29udGV4dCIsImdldENvbnRleHQiLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJheGlvbSIsImFkZEF4aW9tIiwiZGVidWciLCJjb21wYXJlU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9ucyIsImNvbXBhcmVzVG9TaWduYXR1cmUiLCJzaWduYXR1cmVBIiwic2lnbmF0dXJlQiIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29tcGFyZSIsInVuaWZ5U3RlcCIsInN0ZXAiLCJzdGVwVW5pZmllcyIsInN0ZXBTdHJpbmciLCJ1bmNvbmRpdGlvbmFsIiwiaXNVbmNvbmRpdGlvbmFsIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24iLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsImxhc3RQcm9vZkFzc2VydGlvbiIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeUxhc3RQcm9vZkFzc2VydGlvbiIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdldERlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb24iLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZXRTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCIsImV2ZXJ5IiwibGFzdFByb29mQXNzZXJ0aW9uU3RyaW5nIiwidW5pZnlUb3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJoeXBvdGhlc2VzQ29ycmVsYXRlIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsImZyb21KU09OIiwianNvbiIsIlRvcExldmVsQXNzZXJ0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7d0VBSitCO3dCQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSwwQkFBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDMUJDLEtBQUFB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