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
var _axiomLemmaTheoremConjecture = /*#__PURE__*/ _interop_require_default(require("./axiomLemmaTheoremConjecture"));
var _elements = require("../elements");
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
var _default = (0, _elements.define)((_Axiom = /*#__PURE__*/ function(AxiomLemmaTheoremConjecture) {
    _inherits(Axiom, AxiomLemmaTheoremConjecture);
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
                var axiom = this, node = this.getNode(), context = this.getContext(), axiomString = axiom.getString();
                context.trace("Verifying the '".concat(axiomString, "' axiom..."), node);
                var signatureVerifies = this.verifySignature();
                if (signatureVerifies) {
                    verifies = _get(_get_prototype_of(Axiom.prototype), "verify", this).call(this);
                }
                if (verifies) {
                    var axiom1 = this; ///
                    context.addAxiom(axiom1);
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
            key: "unifyAxiomLemmaTheoremOrConjecture",
            value: function unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, substitutions, context) {
                var axiomLemmaTheoremOrConjectureUnifies = false;
                var node = this.getNode(), axiomString = this.getString(), axiomLemmaTheoremOrConjectureString = axiomLemmaTheoremOrConjecture.getString();
                context.trace("Unifying the '".concat(axiomLemmaTheoremOrConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(axiomString, "' axiom..."), node);
                var hypothesesCorrelate = axiomLemmaTheoremOrConjecture.correlateHypotheses(context);
                if (hypothesesCorrelate) {
                    var deduction = axiomLemmaTheoremOrConjecture.getDeduction(), specificContext = context; ///
                    context = this.getContext();
                    var generalContext = context, deductionUnifies = this.unifyDeduction(deduction, substitutions, generalContext, specificContext);
                    if (deductionUnifies) {
                        var suppositions = axiomLemmaTheoremOrConjecture.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);
                        axiomLemmaTheoremOrConjectureUnifies = suppositionsUnify; ///
                    }
                }
                if (axiomLemmaTheoremOrConjectureUnifies) {
                    context.debug("...unified the '".concat(axiomLemmaTheoremOrConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(axiomString, "' axiom."), node);
                }
                return axiomLemmaTheoremOrConjectureUnifies;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                return _axiomLemmaTheoremConjecture.default.fromJSON(Axiom, json, context);
            }
        }
    ]);
    return Axiom;
}(_axiomLemmaTheoremConjecture.default), _define_property(_Axiom, "name", "Axiom"), _Axiom));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlICBmcm9tIFwiLi9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSB7XG4gIGlzU2F0aXNmaWFibGUoKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKSxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IChzaWduYXR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGF4aW9tID0gdGhpcywgLy8vXG4gICAgICAgICAgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IGF4aW9tLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gc3VwZXIudmVyaWZ5KCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEF4aW9tKGF4aW9tKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U2lnbmF0dXJlKCkge1xuICAgIGxldCBzaWduYXR1cmVWZXJpZmllcztcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2lnbmF0dXJlVmVyaWZpZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZlcmlmaWVzO1xuICB9XG5cbiAgY29tcGFyZVNpZ25hdHVyZShzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1NpZ25hdHVyZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlQSA9IHNpZ25hdHVyZTsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKClcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlQiA9IHNpZ25hdHVyZSwgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9TaWduYXR1cmUgPSBzaWduYXR1cmVBLmNvbXBhcmUoc2lnbmF0dXJlQiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TaWduYXR1cmU7XG4gIH1cblxuICB1bmlmeVN0ZXAoc3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29udGV4dCA9IHN0ZXAuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICghdW5jb25kaXRpb25hbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVW5hYmxlIHRvIHVuaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tIGJlY2F1c2UgdGhlIGF4aW9tIGlzIG5vdCB1bmNvbmRpdGlvbmFsLmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgc3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAodW5jb25kaXRpb25hbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVW5hYmxlIHRvIHVuaWZ5IHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgdW5jb25kaXRpb25hbC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdFByb29mQXNzZXJ0aW9uID0gc3VicHJvb2YuZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeUxhc3RQcm9vZkFzc2VydGlvbihsYXN0UHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdWJwcm9vZi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uID0gdGhpcy5nZXREZWR1Y3Rpb24oKTtcblxuICAgIGNvbnN0IGdlbmVyYWxEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247IC8vL1xuXG4gICAgZGVkdWN0aW9uID0gc3BlY2lmaWNEZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvblVuaWZpZXMgPSBnZW5lcmFsRGVkdWN0aW9uLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSB0aGlzLmdldFN1cHBvc2l0aW9uKGluZGV4KTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gc3BlY2lmaWNTdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zLCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID0gZ2VuZXJhbFN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGggPSBzcGVjaWZpY1N1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGgpIHtcbiAgICAgIHN1cHBvc2l0aW9ucyA9IHNwZWNpZmljU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICB1bmlmeUxhc3RQcm9vZkFzc2VydGlvbihsYXN0UHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBsYXN0UHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFzdFByb29mQXNzZXJ0aW9uU3RyaW5nfScgbGFzdCBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpXG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBsYXN0UHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICBsYXN0UHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFzdFByb29mQXNzZXJ0aW9uU3RyaW5nfScgbGFzdCBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0UHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IGh5cG90aGVzZXNDb3JyZWxhdGUgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5jb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNDb3JyZWxhdGUpIHtcbiAgICAgIGNvbnN0IGRlZHVjdGlvbiA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLmdldERlZHVjdGlvbigpLCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXMgPSBzdXBwb3NpdGlvbnNVbmlmeTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkgeyByZXR1cm4gQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmZyb21KU09OKEF4aW9tLCBqc29uLCBjb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXhpb20iLCJpc1NhdGlzZmlhYmxlIiwic2lnbmF0dXJlIiwiZ2V0U2lnbmF0dXJlIiwic2F0aXNmaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImF4aW9tIiwibm9kZSIsImdldE5vZGUiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImF4aW9tU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzaWduYXR1cmVWZXJpZmllcyIsInZlcmlmeVNpZ25hdHVyZSIsImFkZEF4aW9tIiwiZGVidWciLCJjb21wYXJlU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9ucyIsImNvbXBhcmVzVG9TaWduYXR1cmUiLCJzaWduYXR1cmVBIiwic2lnbmF0dXJlQiIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29tcGFyZSIsInVuaWZ5U3RlcCIsInN0ZXAiLCJzdGVwVW5pZmllcyIsInN0ZXBTdHJpbmciLCJ1bmNvbmRpdGlvbmFsIiwiaXNVbmNvbmRpdGlvbmFsIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24iLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsImxhc3RQcm9vZkFzc2VydGlvbiIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeUxhc3RQcm9vZkFzc2VydGlvbiIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdldERlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb24iLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZXRTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCIsImV2ZXJ5IiwibGFzdFByb29mQXNzZXJ0aW9uU3RyaW5nIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVzIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmciLCJoeXBvdGhlc2VzQ29ycmVsYXRlIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsImZyb21KU09OIiwianNvbiIsIkF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsIm5hbWUi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