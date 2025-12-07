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
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("./topLevelAssertion"));
var _ontology = require("../ontology");
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
var _default = (0, _ontology.define)((_Axiom = /*#__PURE__*/ function(TopLevelAssertion) {
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
            key: "matchSignature",
            value: function matchSignature(signature, substitutions, context) {
                var signatureMatches = false;
                var satisfiable = this.isSatisfiable();
                if (satisfiable) {
                    var signatureA = signature; ///
                    signature = this.getSignature();
                    var signatureB = signature, specificContext = context; ///
                    context = this.getContext();
                    var generalContext = context; ///
                    signatureMatches = signatureA.match(signatureB, substitutions, generalContext, specificContext);
                }
                return signatureMatches;
            }
        },
        {
            key: "unifyStep",
            value: function unifyStep(step, substitutions, context) {
                var stepUnifies = false;
                var node = this.getNode(), stepString = step.getString(), axiomString = this.getString();
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom..."), node);
                var unconditional = this.isUnconditional();
                if (!unconditional) {
                    context.trace("Cannot unify the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom because the axiom is not unconditional."), node);
                } else {
                    var statement = step.getStatement(), specificContext = context; ///
                    context = this.getContext();
                    var generalContext = context, statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
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
            key: "unifyLastStep",
            value: function unifyLastStep(lastStep, substitutions, generalContext, specificContext) {
                var lastStepUnifies = false;
                var node = this.getNode(), context = specificContext, axiomString = this.getString(), lastStepString = lastStep.getString();
                context.trace("Unifying the '".concat(lastStepString, "' last step with the '").concat(axiomString, "' axiom..."), node);
                var statement = lastStep.getStatement(), statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
                if (statementUnifiesWithDeduction) {
                    lastStepUnifies = true;
                }
                if (lastStepUnifies) {
                    context.debug("...unified the '".concat(lastStepString, "' last step with the '").concat(axiomString, "' axiom."), node);
                }
                return lastStepUnifies;
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
                    context.trace("Cannot unify the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom because the axiom is unconditional."), node);
                } else {
                    var lastStep = subproof.getLastStep(), specificContext = context; ///
                    context = this.getContext();
                    var generalContext = context, lastStepUnifies = this.unifyLastStep(lastStep, substitutions, generalContext, specificContext);
                    if (lastStepUnifies) {
                        var suppositions = subproof.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);
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
                    var suppositionsMatch = suppositions.every(function(supposition, index) {
                        var suppositionUnifies = _this.unifySupposition(supposition, index, substitutions, generalContext, specificContext);
                        if (suppositionUnifies) {
                            return true;
                        }
                    });
                    if (suppositionsMatch) {
                        suppositionsUnify = true;
                    }
                }
                return suppositionsUnify;
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
                return _topLevelAssertion.default.fromJSON(Axiom, json, context);
            }
        },
        {
            key: "fromAxiomNode",
            value: function fromAxiomNode(axiomNode, context) {
                var node = axiomNode, axiom = _topLevelAssertion.default.fromNode(Axiom, node, context);
                return axiom;
            }
        }
    ]);
    return Axiom;
}(_topLevelAssertion.default), _define_property(_Axiom, "name", "Axiom"), _Axiom));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9heGlvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uICBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEF4aW9tIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSBheGlvbS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVNpZ25hdHVyZSgpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllcyA9IHN1cGVyLnZlcmlmeSgpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgYXhpb20gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVNpZ25hdHVyZSgpIHtcbiAgICBsZXQgc2lnbmF0dXJlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBzYXRpc2ZpYWJsZSA9IHRoaXMuaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgICBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpO1xuXG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHNpZ25hdHVyZS52ZXJpZnkoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVWZXJpZmllcztcbiAgfVxuXG4gIG1hdGNoU2lnbmF0dXJlKHNpZ25hdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzYXRpc2ZpYWJsZSA9IHRoaXMuaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICBjb25zdCBzaWduYXR1cmVBID0gc2lnbmF0dXJlOyAvLy9cblxuICAgICAgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKVxuXG4gICAgICBjb25zdCBzaWduYXR1cmVCID0gc2lnbmF0dXJlLCAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgc2lnbmF0dXJlTWF0Y2hlcyA9IHNpZ25hdHVyZUEubWF0Y2goc2lnbmF0dXJlQiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN0ZXAoc3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICghdW5jb25kaXRpb25hbCkge1xuICAgICAgY29udGV4dC50cmFjZShgQ2Fubm90IHVuaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tIGJlY2F1c2UgdGhlIGF4aW9tIGlzIG5vdCB1bmNvbmRpdGlvbmFsLmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgc3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhc3RTdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFN0ZXBTdHJpbmcgPSBsYXN0U3RlcC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCwgbm9kZSlcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmAsIG5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RTdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICh1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBDYW5ub3QgdW5pZnkgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSBiZWNhdXNlIHRoZSBheGlvbSBpcyB1bmNvbmRpdGlvbmFsLmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0U3RlcCA9IHN1YnByb29mLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1YnByb29mLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpO1xuXG4gICAgY29uc3QgZ2VuZXJhbERlZHVjdGlvbiA9IGRlZHVjdGlvbjsgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSBzcGVjaWZpY0RlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uVW5pZmllcyA9IGdlbmVyYWxEZWR1Y3Rpb24udW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbiA9IHRoaXMuZ2V0U3VwcG9zaXRpb24oaW5kZXgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247IC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSBzcGVjaWZpY1N1cHBvc2l0aW9uOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBnZW5lcmFsU3VwcG9zaXRpb24udW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnMsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGggPSBnZW5lcmFsU3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCA9IHNwZWNpZmljU3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID09PSBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCkge1xuICAgICAgc3VwcG9zaXRpb25zID0gc3BlY2lmaWNTdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBzdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2VzQ29ycmVsYXRlID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuY29ycmVsYXRlSHlwb3RoZXNlcyhjb250ZXh0KTtcblxuICAgIGlmIChoeXBvdGhlc2VzQ29ycmVsYXRlKSB7XG4gICAgICBjb25zdCBkZWR1Y3Rpb24gPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXREZWR1Y3Rpb24oKSwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZS5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVzID0gc3VwcG9zaXRpb25zVW5pZnk7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkF4aW9tXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBjb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBheGlvbU5vZGUsIC8vL1xuICAgICAgICAgIGF4aW9tID0gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoQXhpb20sIG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBeGlvbSIsImlzU2F0aXNmaWFibGUiLCJzaWduYXR1cmUiLCJnZXRTaWduYXR1cmUiLCJzYXRpc2ZpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYXhpb20iLCJub2RlIiwiZ2V0Tm9kZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYXhpb21TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInNpZ25hdHVyZVZlcmlmaWVzIiwidmVyaWZ5U2lnbmF0dXJlIiwiYWRkQXhpb20iLCJkZWJ1ZyIsIm1hdGNoU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9ucyIsInNpZ25hdHVyZU1hdGNoZXMiLCJzaWduYXR1cmVBIiwic2lnbmF0dXJlQiIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwibWF0Y2giLCJ1bmlmeVN0ZXAiLCJzdGVwIiwic3RlcFVuaWZpZXMiLCJzdGVwU3RyaW5nIiwidW5jb25kaXRpb25hbCIsImlzVW5jb25kaXRpb25hbCIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwidW5pZnlMYXN0U3RlcCIsImxhc3RTdGVwIiwibGFzdFN0ZXBVbmlmaWVzIiwibGFzdFN0ZXBTdHJpbmciLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsImdldExhc3RTdGVwIiwic3VwcG9zaXRpb25zIiwiZ2V0U3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zVW5pZnkiLCJ1bmlmeVN1cHBvc2l0aW9ucyIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsInNwZWNpZmljRGVkdWN0aW9uIiwiZ2V0RGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvbiIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdldFN1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uIiwic3BlY2lmaWNTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoIiwic3VwcG9zaXRpb25zTWF0Y2giLCJldmVyeSIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcyIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nIiwiaHlwb3RoZXNlc0NvcnJlbGF0ZSIsImNvcnJlbGF0ZUh5cG90aGVzZXMiLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21BeGlvbU5vZGUiLCJheGlvbU5vZGUiLCJmcm9tTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O3dFQUorQjt3QkFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sMEJBQUM7O2FBQU1DO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOzs7O1lBQzFCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNDLFlBQVksSUFDN0JDLGNBQWVGLGNBQWM7Z0JBRW5DLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsUUFBUSxJQUFJLEVBQ1pDLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsY0FBY0wsTUFBTU0sU0FBUztnQkFFbkNILFFBQVFJLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaRixhQUFZLGVB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