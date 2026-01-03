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
                context = step.getContext();
                var node = this.getNode(), stepString = step.getString(), axiomString = this.getString();
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom..."), node);
                var unconditional = this.isUnconditional();
                if (!unconditional) {
                    context.trace("Cannot unify the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom because the axiom is not unconditional."), node);
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
            key: "unifyLastStep",
            value: function unifyLastStep(lastStep, substitutions, context) {
                var lastStepUnifies = false;
                var node = this.getNode(), axiomString = this.getString(), lastStepString = lastStep.getString();
                context.trace("Unifying the '".concat(lastStepString, "' last step with the '").concat(axiomString, "' axiom..."), node);
                var statement = lastStep.getStatement(), statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);
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
                    var lastStep = subproof.getLastStep(), lastStepUnifies = this.unifyLastStep(lastStep, substitutions, context);
                    if (lastStepUnifies) {
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
                return _axiomLemmaTheoremConjecture.default.fromJSON(Axiom, json, context);
            }
        }
    ]);
    return Axiom;
}(_axiomLemmaTheoremConjecture.default), _define_property(_Axiom, "name", "Axiom"), _Axiom));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlICBmcm9tIFwiLi9heGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIEF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSB7XG4gIGlzU2F0aXNmaWFibGUoKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKSxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IChzaWduYXR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGF4aW9tID0gdGhpcywgLy8vXG4gICAgICAgICAgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IGF4aW9tLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gc3VwZXIudmVyaWZ5KCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEF4aW9tKGF4aW9tKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U2lnbmF0dXJlKCkge1xuICAgIGxldCBzaWduYXR1cmVWZXJpZmllcztcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2lnbmF0dXJlVmVyaWZpZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZlcmlmaWVzO1xuICB9XG5cbiAgbWF0Y2hTaWduYXR1cmUoc2lnbmF0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZUEgPSBzaWduYXR1cmU7IC8vL1xuXG4gICAgICBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpXG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZUIgPSBzaWduYXR1cmUsIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBzaWduYXR1cmVNYXRjaGVzID0gc2lnbmF0dXJlQS5tYXRjaChzaWduYXR1cmVCLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb250ZXh0ID0gc3RlcC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHVuY29uZGl0aW9uYWwgPSB0aGlzLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKCF1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBDYW5ub3QgdW5pZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgbm90IHVuY29uZGl0aW9uYWwuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgICBzdGVwVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFzdFN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxhc3RTdGVwU3RyaW5nID0gbGFzdFN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpXG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBsYXN0U3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RTdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAodW5jb25kaXRpb25hbCkge1xuICAgICAgY29udGV4dC50cmFjZShgQ2Fubm90IHVuaWZ5IHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgdW5jb25kaXRpb25hbC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdFN0ZXAgPSBzdWJwcm9vZi5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdGhpcy51bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGxhc3RTdGVwVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdWJwcm9vZi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uID0gdGhpcy5nZXREZWR1Y3Rpb24oKTtcblxuICAgIGNvbnN0IGdlbmVyYWxEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247IC8vL1xuXG4gICAgZGVkdWN0aW9uID0gc3BlY2lmaWNEZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvblVuaWZpZXMgPSBnZW5lcmFsRGVkdWN0aW9uLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSB0aGlzLmdldFN1cHBvc2l0aW9uKGluZGV4KTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gc3BlY2lmaWNTdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zLCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID0gZ2VuZXJhbFN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGggPSBzcGVjaWZpY1N1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGgpIHtcbiAgICAgIHN1cHBvc2l0aW9ucyA9IHNwZWNpZmljU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoID0gc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoKSB7XG4gICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICB1bmlmeUF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgaHlwb3RoZXNlc0NvcnJlbGF0ZSA9IGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc0NvcnJlbGF0ZSkge1xuICAgICAgY29uc3QgZGVkdWN0aW9uID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuZ2V0RGVkdWN0aW9uKCksICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcyA9IHN1cHBvc2l0aW9uc1VuaWZ5OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBeGlvbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZnJvbUpTT04oQXhpb20sIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBeGlvbSIsImlzU2F0aXNmaWFibGUiLCJzaWduYXR1cmUiLCJnZXRTaWduYXR1cmUiLCJzYXRpc2ZpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYXhpb20iLCJub2RlIiwiZ2V0Tm9kZSIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiYXhpb21TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInNpZ25hdHVyZVZlcmlmaWVzIiwidmVyaWZ5U2lnbmF0dXJlIiwiYWRkQXhpb20iLCJkZWJ1ZyIsIm1hdGNoU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9ucyIsInNpZ25hdHVyZU1hdGNoZXMiLCJzaWduYXR1cmVBIiwic2lnbmF0dXJlQiIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwibWF0Y2giLCJ1bmlmeVN0ZXAiLCJzdGVwIiwic3RlcFVuaWZpZXMiLCJzdGVwU3RyaW5nIiwidW5jb25kaXRpb25hbCIsImlzVW5jb25kaXRpb25hbCIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwidW5pZnlMYXN0U3RlcCIsImxhc3RTdGVwIiwibGFzdFN0ZXBVbmlmaWVzIiwibGFzdFN0ZXBTdHJpbmciLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsImdldExhc3RTdGVwIiwic3VwcG9zaXRpb25zIiwiZ2V0U3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zVW5pZnkiLCJ1bmlmeVN1cHBvc2l0aW9ucyIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsInNwZWNpZmljRGVkdWN0aW9uIiwiZ2V0RGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvbiIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdldFN1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uIiwic3BlY2lmaWNTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoIiwic3VwcG9zaXRpb25zTWF0Y2giLCJldmVyeSIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlVW5pZmllcyIsImF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlU3RyaW5nIiwiaHlwb3RoZXNlc0NvcnJlbGF0ZSIsImNvcnJlbGF0ZUh5cG90aGVzZXMiLCJmcm9tSlNPTiIsImpzb24iLCJBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztrRkFKeUM7d0JBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSwwQkFBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDMUJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLElBQUksQ0FBQ0MsWUFBWSxJQUM3QkMsY0FBZUYsY0FBYztnQkFFbkMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxRQUFRLElBQUksRUFDWkMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxjQUFjTCxNQUFNTSxTQUFTO2dCQUVuQ0gsUUFBUUksS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpGLGFBQVksZUFBYUo7Z0JBRXpELElBQU1PLG9CQUFvQixJQUFJLENBQUNDLGVBQWU7Z0JBRTlDLElBQUlELG1CQUFtQjtvQkFDckJULFdBQVcsdUJBckJXTixrQkFxQkxLLFVBQU4sSUFBSztnQkFDbEI7Z0JBRUEsSUFBSUMsVUFBVTtvQkFDWixJQUFNQyxTQUFRLElBQUksRUFBRSxHQUFHO29CQUV2QkcsUUFBUU8sUUFBUSxDQUFDVjtvQkFFakJHLFFBQVFRLEtBQUssQ0FBQyxBQUFDLG9CQUErQixPQUFaTixhQUFZLGFBQVdKO2dCQUMzRDtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlEO2dCQUVKLElBQU1YLGNBQWMsSUFBSSxDQUFDSCxhQUFhO2dCQUV0QyxJQUFJRyxhQUFhO29CQUNmLElBQU1NLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCVCxZQUFZLElBQUksQ0FBQ0MsWUFBWTtvQkFFbkNZLG9CQUFvQmIsVUFBVUcsTUFBTSxDQUFDSztnQkFDdkMsT0FBTztvQkFDTEssb0JBQW9CO2dCQUN0QjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVqQixTQUFTLEVBQUVrQixhQUFhLEVBQUVWLE9BQU87Z0JBQzlDLElBQUlXLG1CQUFtQjtnQkFFdkIsSUFBTWpCLGNBQWMsSUFBSSxDQUFDSCxhQUFhO2dCQUV0QyxJQUFJRyxhQUFhO29CQUNmLElBQU1rQixhQUFhcEIsV0FBVyxHQUFHO29CQUVqQ0EsWUFBWSxJQUFJLENBQUNDLFlBQVk7b0JBRTdCLElBQU1vQixhQUFhckIsV0FDYnNCLGtCQUFrQmQsU0FBVSxHQUFHO29CQUVyQ0EsVUFBVSxJQUFJLENBQUNDLFVBQVU7b0JBRXpCLElBQU1jLGlCQUFpQmYsU0FBVSxHQUFHO29CQUVwQ1csbUJBQW1CQyxXQUFXSSxLQUFLLENBQUNILFlBQVlILGVBQWVLLGdCQUFnQkQ7Z0JBQ2pGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSSxFQUFFUixhQUFhLEVBQUVWLE9BQU87Z0JBQ3BDLElBQUltQixjQUFjO2dCQUVsQm5CLFVBQVVrQixLQUFLakIsVUFBVTtnQkFFekIsSUFBTUgsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJxQixhQUFhRixLQUFLZixTQUFTLElBQzNCRCxjQUFjLElBQUksQ0FBQ0MsU0FBUztnQkFFbENILFFBQVFJLEtBQUssQ0FBQyxBQUFDLGlCQUE4Q0YsT0FBOUJrQixZQUFXLHFCQUErQixPQUFabEIsYUFBWSxlQUFhSjtnQkFFdEYsSUFBTXVCLGdCQUFnQixJQUFJLENBQUNDLGVBQWU7Z0JBRTFDLElBQUksQ0FBQ0QsZUFBZTtvQkFDbEJyQixRQUFRSSxLQUFLLENBQUMsQUFBQyxxQkFBa0RGLE9BQTlCa0IsWUFBVyxxQkFBK0IsT0FBWmxCLGFBQVksb0RBQWtESjtnQkFDakksT0FBTztvQkFDTCxJQUFNeUIsWUFBWUwsS0FBS00sWUFBWSxJQUM3QkMsZ0NBQWdDLElBQUksQ0FBQ0MsMkJBQTJCLENBQUNILFdBQVdiLGVBQWVWO29CQUVqRyxJQUFJeUIsK0JBQStCO3dCQUNqQ04sY0FBYztvQkFDaEI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsYUFBYTtvQkFDZm5CLFFBQVFRLEtBQUssQ0FBQyxBQUFDLG1CQUFnRE4sT0FBOUJrQixZQUFXLHFCQUErQixPQUFabEIsYUFBWSxhQUFXSjtnQkFDeEY7Z0JBRUEsT0FBT3FCO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUSxFQUFFbEIsYUFBYSxFQUFFVixPQUFPO2dCQUM1QyxJQUFJNkIsa0JBQWtCO2dCQUV0QixJQUFNL0IsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJHLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQzVCMkIsaUJBQWlCRixTQUFTekIsU0FBUztnQkFFekNILFFBQVFJLEtBQUssQ0FBQyxBQUFDLGlCQUF1REYsT0FBdkM0QixnQkFBZSwwQkFBb0MsT0FBWjVCLGFBQVksZUFBYUo7Z0JBRS9GLElBQU15QixZQUFZSyxTQUFTSixZQUFZLElBQ2pDQyxnQ0FBZ0MsSUFBSSxDQUFDQywyQkFBMkIsQ0FBQ0gsV0FBV2IsZUFBZVY7Z0JBRWpHLElBQUl5QiwrQkFBK0I7b0JBQ2pDSSxrQkFBa0I7Z0JBQ3BCO2dCQUVBLElBQUlBLGlCQUFpQjtvQkFDbkI3QixRQUFRUSxLQUFLLENBQUMsQUFBQyxtQkFBeUROLE9BQXZDNEIsZ0JBQWUsMEJBQW9DLE9BQVo1QixhQUFZLGFBQVdKO2dCQUNqRztnQkFFQSxPQUFPK0I7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxRQUFRLEVBQUV0QixhQUFhLEVBQUVWLE9BQU87Z0JBQzVDLElBQUlpQyxrQkFBa0I7Z0JBRXRCLElBQU1uQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkcsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFDNUIrQixpQkFBaUJGLFNBQVM3QixTQUFTO2dCQUV6Q0gsUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQXNERixPQUF0Q2dDLGdCQUFlLHlCQUFtQyxPQUFaaEMsYUFBWSxlQUFhSjtnQkFFOUYsSUFBTXVCLGdCQUFnQixJQUFJLENBQUNDLGVBQWU7Z0JBRTFDLElBQUlELGVBQWU7b0JBQ2pCckIsUUFBUUksS0FBSyxDQUFDLEFBQUMscUJBQTBERixPQUF0Q2dDLGdCQUFlLHlCQUFtQyxPQUFaaEMsYUFBWSxnREFBOENKO2dCQUNySSxPQUFPO29CQUNMLElBQU04QixXQUFXSSxTQUFTRyxXQUFXLElBQy9CTixrQkFBa0IsSUFBSSxDQUFDRixhQUFhLENBQUNDLFVBQVVsQixlQUFlVjtvQkFFcEUsSUFBSTZCLGlCQUFpQjt3QkFDbkIsSUFBTU8sZUFBZUosU0FBU0ssZUFBZSxJQUN2Q0Msb0JBQW9CLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNILGNBQWMxQixlQUFlVjt3QkFFOUUsSUFBSXNDLG1CQUFtQjs0QkFDckJMLGtCQUFrQjt3QkFDcEI7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEsaUJBQWlCO29CQUNuQmpDLFFBQVFRLEtBQUssQ0FBQyxBQUFDLG1CQUF3RE4sT0FBdENnQyxnQkFBZSx5QkFBbUMsT0FBWmhDLGFBQVksYUFBV0o7Z0JBQ2hHO2dCQUVBLE9BQU9tQztZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRS9CLGFBQWEsRUFBRUssY0FBYyxFQUFFRCxlQUFlO2dCQUN0RSxJQUFJNEI7Z0JBRUosSUFBTUMsb0JBQW9CRixXQUFZLEdBQUc7Z0JBRXpDQSxZQUFZLElBQUksQ0FBQ0csWUFBWTtnQkFFN0IsSUFBTUMsbUJBQW1CSixXQUFXLEdBQUc7Z0JBRXZDQSxZQUFZRSxtQkFBb0IsR0FBRztnQkFFbkNELG1CQUFtQkcsaUJBQWlCTCxjQUFjLENBQUNDLFdBQVcvQixlQUFlSyxnQkFBZ0JEO2dCQUU3RixPQUFPNEI7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFdBQVcsRUFBRUMsS0FBSyxFQUFFdEMsYUFBYSxFQUFFSyxjQUFjLEVBQUVELGVBQWU7Z0JBQ2pGLElBQUltQztnQkFFSixJQUFNQyxzQkFBc0JILGFBQWMsR0FBRztnQkFFN0NBLGNBQWMsSUFBSSxDQUFDSSxjQUFjLENBQUNIO2dCQUVsQyxJQUFNSSxxQkFBcUJMLGFBQWEsR0FBRztnQkFFM0NBLGNBQWNHLHFCQUFzQixHQUFHO2dCQUV2Q0QscUJBQXFCRyxtQkFBbUJOLGdCQUFnQixDQUFDQyxhQUFhckMsZUFBZUssZ0JBQWdCRDtnQkFFckcsT0FBT21DO1lBQ1Q7OztZQUVBVixLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCSCxZQUFZLEVBQUUxQixhQUFhLEVBQUVLLGNBQWMsRUFBRUQsZUFBZTs7Z0JBQzVFLElBQUl3QixvQkFBb0I7Z0JBRXhCLElBQU1lLHVCQUF1QmpCLGNBQWUsR0FBRztnQkFFL0NBLGVBQWUsSUFBSSxDQUFDQyxlQUFlO2dCQUVuQyxJQUFNaUIsc0JBQXNCbEIsY0FDdEJtQiw0QkFBNEJELG9CQUFvQkUsTUFBTSxFQUN0REMsNkJBQTZCSixxQkFBcUJHLE1BQU07Z0JBRTlELElBQUlELDhCQUE4QkUsNEJBQTRCO29CQUM1RHJCLGVBQWVpQixzQkFBdUIsR0FBRztvQkFFekMsSUFBTUssb0JBQW9CdEIsYUFBYXVCLEtBQUssQ0FBQyxTQUFDWixhQUFhQzt3QkFDekQsSUFBTUMscUJBQXFCLE1BQUtILGdCQUFnQixDQUFDQyxhQUFhQyxPQUFPdEMsZUFBZUssZ0JBQWdCRDt3QkFFcEcsSUFBSW1DLG9CQUFvQjs0QkFDdEIsT0FBTzt3QkFDVDtvQkFDRjtvQkFFQSxJQUFJUyxtQkFBbUI7d0JBQ3JCcEIsb0JBQW9CO29CQUN0QjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQXNCLEtBQUFBO21CQUFBQSxTQUFBQSxtQ0FBbUNDLDZCQUE2QixFQUFFbkQsYUFBYSxFQUFFVixPQUFPO2dCQUN0RixJQUFJOEQsdUNBQXVDO2dCQUUzQyxJQUFNaEUsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJHLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQzVCNEQsc0NBQXNDRiw4QkFBOEIxRCxTQUFTO2dCQUVuRkgsUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQXNHRixPQUF0RjZELHFDQUFvQyxvREFBOEQsT0FBWjdELGFBQVksZUFBYUo7Z0JBRTlJLElBQU1rRSxzQkFBc0JILDhCQUE4QkksbUJBQW1CLENBQUNqRTtnQkFFOUUsSUFBSWdFLHFCQUFxQjtvQkFDdkIsSUFBTXZCLFlBQVlvQiw4QkFBOEJqQixZQUFZLElBQ3REOUIsa0JBQWtCZCxTQUFVLEdBQUc7b0JBRXJDQSxVQUFVLElBQUksQ0FBQ0MsVUFBVTtvQkFFekIsSUFBTWMsaUJBQWlCZixTQUNqQjBDLG1CQUFtQixJQUFJLENBQUNGLGNBQWMsQ0FBQ0MsV0FBVy9CLGVBQWVLLGdCQUFnQkQ7b0JBRXZGLElBQUk0QixrQkFBa0I7d0JBQ3BCLElBQU1OLGVBQWV5Qiw4QkFBOEJ4QixlQUFlLElBQzVEQyxvQkFBb0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0gsY0FBYzFCLGVBQWVLLGdCQUFnQkQ7d0JBRTlGZ0QsdUNBQXVDeEIsbUJBQW1CLEdBQUc7b0JBQy9EO2dCQUNGO2dCQUVBLElBQUl3QixzQ0FBc0M7b0JBQ3hDOUQsUUFBUVEsS0FBSyxDQUFDLEFBQUMsbUJBQXdHTixPQUF0RjZELHFDQUFvQyxvREFBOEQsT0FBWjdELGFBQVksYUFBV0o7Z0JBQ2hKO2dCQUVBLE9BQU9nRTtZQUNUOzs7O1lBSU9JLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRW5FLE9BQU87Z0JBQUksT0FBT29FLG9DQUEyQixDQUFDRixRQUFRLENBQUM1RSxPQUFPNkUsTUFBTW5FO1lBQVU7Ozs7RUF0UTVEb0Usb0NBQTJCLEdBb1FuRSx5QkFBT0MsUUFBTyJ9