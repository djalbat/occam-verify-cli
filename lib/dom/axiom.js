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
var _dom = require("../dom");
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
var _default = (0, _dom.domAssigned)((_Axiom = /*#__PURE__*/ function(TopLevelAssertion) {
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
                var axiom = this, context = this.getContext(), axiomString = axiom.getString();
                context.trace("Verifying the '".concat(axiomString, "' axiom..."));
                var signatureVerifies = this.verifySignature();
                if (signatureVerifies) {
                    verifies = _get(_get_prototype_of(Axiom.prototype), "verify", this).call(this);
                }
                if (verifies) {
                    var axiom1 = this; ///
                    context.addAxiom(axiom1);
                    context.debug("...verified the '".concat(axiomString, "' axiom."));
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
                var stepString = step.getString(), axiomString = this.string; ///
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom..."));
                var unconditional = this.isUnconditional();
                if (!unconditional) {
                    context.trace("Cannot unify the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom because the axiom is not unconditional."));
                } else {
                    var statement = step.getStatement(), specificContext = context; ///
                    context = this.getContext();
                    var generalContext = context, statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
                    if (statementUnifiesWithDeduction) {
                        stepUnifies = true;
                    }
                }
                if (stepUnifies) {
                    context.debug("...unified the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom."));
                }
                return stepUnifies;
            }
        },
        {
            key: "unifyLastStep",
            value: function unifyLastStep(lastStep, substitutions, generalContext, specificContext) {
                var lastStepUnifies = false;
                var context = specificContext, axiomString = this.string, lastStepString = lastStep.getString();
                context.trace("Unifying the '".concat(lastStepString, "' last step with the '").concat(axiomString, "' axiom..."));
                var statement = lastStep.getStatement(), statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
                if (statementUnifiesWithDeduction) {
                    lastStepUnifies = true;
                }
                if (lastStepUnifies) {
                    context.debug("...unified the '".concat(lastStepString, "' last step with the '").concat(axiomString, "' axiom."));
                }
                return lastStepUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, context) {
                var subproofUnifies = false;
                var axiomString = this.string, subproofString = subproof.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom..."));
                var unconditional = this.isUnconditional();
                if (unconditional) {
                    context.trace("Cannot unify the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom because the axiom is unconditional."));
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
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom."));
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
                var axiomString = this.getString(), axiomLemmaTheoremOrConjectureString = axiomLemmaTheoremOrConjecture.getString();
                context.trace("Unifying the '".concat(axiomLemmaTheoremOrConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(axiomString, "' axiom..."));
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
                    context.debug("...unified the '".concat(axiomLemmaTheoremOrConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(axiomString, "' axiom."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiAgZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEF4aW9tIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IGF4aW9tLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gc3VwZXIudmVyaWZ5KCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEF4aW9tKGF4aW9tKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U2lnbmF0dXJlKCkge1xuICAgIGxldCBzaWduYXR1cmVWZXJpZmllcztcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2lnbmF0dXJlVmVyaWZpZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZlcmlmaWVzO1xuICB9XG5cbiAgbWF0Y2hTaWduYXR1cmUoc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZUEgPSBzaWduYXR1cmU7IC8vL1xuXG4gICAgICBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpXG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZUIgPSBzaWduYXR1cmUsIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBzaWduYXR1cmVNYXRjaGVzID0gc2lnbmF0dXJlQS5tYXRjaChzaWduYXR1cmVCLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAoIXVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYENhbm5vdCB1bmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSBiZWNhdXNlIHRoZSBheGlvbSBpcyBub3QgdW5jb25kaXRpb25hbC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICAgIHN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYXN0U3RlcFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbGFzdFN0ZXBTdHJpbmcgPSBsYXN0U3RlcC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYClcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RTdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHVuY29uZGl0aW9uYWwgPSB0aGlzLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKHVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYENhbm5vdCB1bmlmeSB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tIGJlY2F1c2UgdGhlIGF4aW9tIGlzIHVuY29uZGl0aW9uYWwuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RTdGVwID0gc3VicHJvb2YuZ2V0TGFzdFN0ZXAoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRoaXMudW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VicHJvb2YuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvbiA9IHRoaXMuZ2V0RGVkdWN0aW9uKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAvLy9cblxuICAgIGRlZHVjdGlvbiA9IHNwZWNpZmljRGVkdWN0aW9uOyAgLy8vXG5cbiAgICBkZWR1Y3Rpb25VbmlmaWVzID0gZ2VuZXJhbERlZHVjdGlvbi51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gdGhpcy5nZXRTdXBwb3NpdGlvbihpbmRleCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgLy8vXG5cbiAgICBzdXBwb3NpdGlvbiA9IHNwZWNpZmljU3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IGdlbmVyYWxTdXBwb3NpdGlvbi51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucywgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCA9IGdlbmVyYWxTdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoID0gc3BlY2lmaWNTdXBwb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGggPT09IHNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoKSB7XG4gICAgICBzdXBwb3NpdGlvbnMgPSBzcGVjaWZpY1N1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnNNYXRjaCA9IHN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNNYXRjaCkge1xuICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgaHlwb3RoZXNlc0NvcnJlbGF0ZSA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc0NvcnJlbGF0ZSkge1xuICAgICAgY29uc3QgZGVkdWN0aW9uID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuZ2V0RGVkdWN0aW9uKCksICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcyA9IHN1cHBvc2l0aW9uc1VuaWZ5OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBeGlvbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihBeGlvbSwganNvbiwgY29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgICBheGlvbSA9IFRvcExldmVsQXNzZXJ0aW9uLmZyb21Ob2RlKEF4aW9tLCBub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJBeGlvbSIsImlzU2F0aXNmaWFibGUiLCJzaWduYXR1cmUiLCJnZXRTaWduYXR1cmUiLCJzYXRpc2ZpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYXhpb20iLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImF4aW9tU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzaWduYXR1cmVWZXJpZmllcyIsInZlcmlmeVNpZ25hdHVyZSIsImFkZEF4aW9tIiwiZGVidWciLCJtYXRjaFNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnMiLCJzaWduYXR1cmVNYXRjaGVzIiwic2lnbmF0dXJlQSIsInNpZ25hdHVyZUIiLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsIm1hdGNoIiwidW5pZnlTdGVwIiwic3RlcCIsInN0ZXBVbmlmaWVzIiwic3RlcFN0cmluZyIsInN0cmluZyIsInVuY29uZGl0aW9uYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiIsInVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbiIsInVuaWZ5TGFzdFN0ZXAiLCJsYXN0U3RlcCIsImxhc3RTdGVwVW5pZmllcyIsImxhc3RTdGVwU3RyaW5nIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJnZXRMYXN0U3RlcCIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdldERlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb24iLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZXRTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCIsInN1cHBvc2l0aW9uc01hdGNoIiwiZXZlcnkiLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVVuaWZpZXMiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyIsImh5cG90aGVzZXNDb3JyZWxhdGUiLCJjb3JyZWxhdGVIeXBvdGhlc2VzIiwiZnJvbUpTT04iLCJqc29uIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tQXhpb21Ob2RlIiwiYXhpb21Ob2RlIiwibm9kZSIsImZyb21Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7d0VBSitCO21CQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixXQUFlQSxJQUFBQSxnQkFBVywwQkFBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDL0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLElBQUksQ0FBQ0MsWUFBWSxJQUM3QkMsY0FBZUYsY0FBYztnQkFFbkMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxRQUFRLElBQUksRUFDWkMsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJDLGNBQWNILE1BQU1JLFNBQVM7Z0JBRW5DSCxRQUFRSSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkYsYUFBWTtnQkFFNUMsSUFBTUcsb0JBQW9CLElBQUksQ0FBQ0MsZUFBZTtnQkFFOUMsSUFBSUQsbUJBQW1CO29CQUNyQlAsV0FBVyx1QkFwQmdCTixrQkFvQlZLLFVBQU4sSUFBSztnQkFDbEI7Z0JBRUEsSUFBSUMsVUFBVTtvQkFDWixJQUFNQyxTQUFRLElBQUksRUFBRSxHQUFHO29CQUV2QkMsUUFBUU8sUUFBUSxDQUFDUjtvQkFFakJDLFFBQVFRLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaTixhQUFZO2dCQUNoRDtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFB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