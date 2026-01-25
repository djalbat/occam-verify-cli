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
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("../../node/topLevelAssertion"));
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
var define = _occamfurtle.elements.define;
var _default = define((_Axiom = /*#__PURE__*/ function(TopLevelAssertion) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50cyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uICBmcm9tIFwiLi4vLi4vbm9kZS90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5jb25zdCB7IGRlZmluZSB9ID0gZWxlbWVudHM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgaXNTYXRpc2ZpYWJsZSgpIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpLFxuICAgICAgICAgIHNhdGlzZmlhYmxlID0gKHNpZ25hdHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gc3VwZXIudmVyaWZ5KCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEF4aW9tKGF4aW9tKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U2lnbmF0dXJlKCkge1xuICAgIGxldCBzaWduYXR1cmVWZXJpZmllcztcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2lnbmF0dXJlVmVyaWZpZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZlcmlmaWVzO1xuICB9XG5cbiAgY29tcGFyZVNpZ25hdHVyZShzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1NpZ25hdHVyZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlQSA9IHNpZ25hdHVyZTsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKClcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlQiA9IHNpZ25hdHVyZSwgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9TaWduYXR1cmUgPSBzaWduYXR1cmVBLmNvbXBhcmUoc2lnbmF0dXJlQiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TaWduYXR1cmU7XG4gIH1cblxuICB1bmlmeVN0ZXAoc3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29udGV4dCA9IHN0ZXAuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICghdW5jb25kaXRpb25hbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVW5hYmxlIHRvIHVuaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tIGJlY2F1c2UgdGhlIGF4aW9tIGlzIG5vdCB1bmNvbmRpdGlvbmFsLmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgc3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAodW5jb25kaXRpb25hbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVW5hYmxlIHRvIHVuaWZ5IHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgdW5jb25kaXRpb25hbC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdFByb29mQXNzZXJ0aW9uID0gc3VicHJvb2YuZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeUxhc3RQcm9vZkFzc2VydGlvbihsYXN0UHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdWJwcm9vZi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uID0gdGhpcy5nZXREZWR1Y3Rpb24oKTtcblxuICAgIGNvbnN0IGdlbmVyYWxEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247IC8vL1xuXG4gICAgZGVkdWN0aW9uID0gc3BlY2lmaWNEZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvblVuaWZpZXMgPSBnZW5lcmFsRGVkdWN0aW9uLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSB0aGlzLmdldFN1cHBvc2l0aW9uKGluZGV4KTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gc3BlY2lmaWNTdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zLCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID0gZ2VuZXJhbFN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGggPSBzcGVjaWZpY1N1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGgpIHtcbiAgICAgIHN1cHBvc2l0aW9ucyA9IHNwZWNpZmljU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICB1bmlmeUxhc3RQcm9vZkFzc2VydGlvbihsYXN0UHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBsYXN0UHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFzdFByb29mQXNzZXJ0aW9uU3RyaW5nfScgbGFzdCBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpXG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBsYXN0UHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICBsYXN0UHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFzdFByb29mQXNzZXJ0aW9uU3RyaW5nfScgbGFzdCBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0UHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbEFzc2VydGlvbih0b3BMZXZlbEFzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgaHlwb3RoZXNlc0NvcnJlbGF0ZSA9IHRvcExldmVsQXNzZXJ0aW9uLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc0NvcnJlbGF0ZSkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgZGVkdWN0aW9uID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0b3BMZXZlbEFzc2VydGlvbi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gc3VwcG9zaXRpb25zVW5pZnk7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oQXhpb20sIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJlbGVtZW50cyIsIkF4aW9tIiwiaXNTYXRpc2ZpYWJsZSIsInNpZ25hdHVyZSIsImdldFNpZ25hdHVyZSIsInNhdGlzZmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJub2RlIiwiZ2V0Tm9kZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYXhpb21TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInNpZ25hdHVyZVZlcmlmaWVzIiwidmVyaWZ5U2lnbmF0dXJlIiwiYXhpb20iLCJhZGRBeGlvbSIsImRlYnVnIiwiY29tcGFyZVNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnMiLCJjb21wYXJlc1RvU2lnbmF0dXJlIiwic2lnbmF0dXJlQSIsInNpZ25hdHVyZUIiLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImNvbXBhcmUiLCJ1bmlmeVN0ZXAiLCJzdGVwIiwic3RlcFVuaWZpZXMiLCJzdGVwU3RyaW5nIiwidW5jb25kaXRpb25hbCIsImlzVW5jb25kaXRpb25hbCIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJnZXRMYXN0UHJvb2ZBc3NlcnRpb24iLCJsYXN0UHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlMYXN0UHJvb2ZBc3NlcnRpb24iLCJzdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNVbmlmeSIsInVuaWZ5U3VwcG9zaXRpb25zIiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJnZXREZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uIiwidW5pZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uIiwiaW5kZXgiLCJzdXBwb3NpdGlvblVuaWZpZXMiLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwiZ2V0U3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb24iLCJzcGVjaWZpY1N1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGgiLCJldmVyeSIsImxhc3RQcm9vZkFzc2VydGlvblN0cmluZyIsInVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nIiwiaHlwb3RoZXNlc0NvcnJlbGF0ZSIsImNvcnJlbGF0ZUh5cG90aGVzZXMiLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzJCQU55Qjt3RUFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTSxBQUFFQSxTQUFXQyxxQkFBUSxDQUFu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