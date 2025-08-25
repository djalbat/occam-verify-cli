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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
                var axiom = this, axiomString = axiom.getString(), fileContext = this.getFileContext();
                fileContext.trace("Verifying the '".concat(axiomString, "' axiom..."));
                var signatureVerifies = this.verifySignature();
                if (signatureVerifies) {
                    verifies = _get(_get_prototype_of(Axiom.prototype), "verify", this).call(this);
                }
                if (verifies) {
                    var axiom1 = this; ///
                    fileContext.addAxiom(axiom1);
                    fileContext.debug("...verified the '".concat(axiomString, "' axiom."));
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
                    var signature = this.getSignature(), fileContext = this.getFileContext(), localContext = _local.default.fromFileContext(fileContext), context = localContext; ///
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
                    var signatureB = signature; ///
                    var fileContext = this.getFileContext(), localContext = _local.default.fromFileContext(fileContext), generalContext = localContext, specificContext = context; ///
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
                    var statement = step.getStatement(), fileContext = this.getFileContext(), localContext = _local.default.fromFileContext(fileContext), generalContext = localContext, specificContext = context, statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
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
                    var lastStep = subproof.getLastStep(), fileContext = this.getFileContext(), localContext = _local.default.fromFileContext(fileContext), generalContext = localContext, specificContext = context, lastStepUnifies = this.unifyLastStep(lastStep, substitutions, generalContext, specificContext);
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
            key: "unifyAxiomLemmaTheoremConjecture",
            value: function unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions, context) {
                var axiomLemmaTheoremConjectureUnifies = false;
                var axiomString = this.getString(), axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();
                context.trace("Unifying the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(axiomString, "' axiom..."));
                var deduction = axiomLemmaTheoremConjecture.getDeduction(), fileContext = this.getFileContext(), generalContext = fileContext, specificContext = context, deductionUnifies = this.unifyDeduction(deduction, substitutions, generalContext, specificContext);
                if (deductionUnifies) {
                    var suppositions = axiomLemmaTheoremConjecture.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);
                    axiomLemmaTheoremConjectureUnifies = suppositionsUnify; ///
                }
                if (axiomLemmaTheoremConjectureUnifies) {
                    context.debug("...unified the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(axiomString, "' axiom."));
                }
                return axiomLemmaTheoremConjectureUnifies;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                return _topLevelAssertion.default.fromJSON(Axiom, json, fileContext);
            }
        },
        {
            key: "fromAxiomNode",
            value: function fromAxiomNode(axiomNode, fileContext) {
                var node = axiomNode, axiom = _topLevelAssertion.default.fromNode(Axiom, node, fileContext);
                return axiom;
            }
        }
    ]);
    return Axiom;
}(_topLevelAssertion.default), _define_property(_Axiom, "name", "Axiom"), _Axiom));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiAgZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEF4aW9tIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gc3VwZXIudmVyaWZ5KCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTaWduYXR1cmUoKSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgICAgc2lnbmF0dXJlVmVyaWZpZXMgPSBzaWduYXR1cmUudmVyaWZ5KGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZXM7XG4gIH1cblxuICBtYXRjaFNpZ25hdHVyZShzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlQSA9IHNpZ25hdHVyZTsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKClcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlQiA9IHNpZ25hdHVyZTsgLy8vXG5cbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBzaWduYXR1cmVNYXRjaGVzID0gc2lnbmF0dXJlQS5tYXRjaChzaWduYXR1cmVCLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAoIXVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYENhbm5vdCB1bmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSBiZWNhdXNlIHRoZSBheGlvbSBpcyBub3QgdW5jb25kaXRpb25hbC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgc3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhc3RTdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBsYXN0U3RlcFN0cmluZyA9IGxhc3RTdGVwLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKVxuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYClcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFN0ZXBVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5zdHJpbmcsICAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAodW5jb25kaXRpb25hbCkge1xuICAgICAgY29udGV4dC50cmFjZShgQ2Fubm90IHVuaWZ5IHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgdW5jb25kaXRpb25hbC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdFN0ZXAgPSBzdWJwcm9vZi5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1YnByb29mLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpO1xuXG4gICAgY29uc3QgZ2VuZXJhbERlZHVjdGlvbiA9IGRlZHVjdGlvbjsgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSBzcGVjaWZpY0RlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uVW5pZmllcyA9IGdlbmVyYWxEZWR1Y3Rpb24udW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbiA9IHRoaXMuZ2V0U3VwcG9zaXRpb24oaW5kZXgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247IC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSBzcGVjaWZpY1N1cHBvc2l0aW9uOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBnZW5lcmFsU3VwcG9zaXRpb24udW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnMsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGggPSBnZW5lcmFsU3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCA9IHNwZWNpZmljU3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID09PSBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCkge1xuICAgICAgc3VwcG9zaXRpb25zID0gc3BlY2lmaWNTdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBzdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IGRlZHVjdGlvbiA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXREZWR1Y3Rpb24oKSwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVzID0gc3VwcG9zaXRpb25zVW5pZnk7IC8vL1xuICAgIH1cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkF4aW9tXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihBeGlvbSwganNvbiwgZmlsZUNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBheGlvbU5vZGUsIC8vL1xuICAgICAgICAgIGF4aW9tID0gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoQXhpb20sIG5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJBeGlvbSIsImlzU2F0aXNmaWFibGUiLCJzaWduYXR1cmUiLCJnZXRTaWduYXR1cmUiLCJzYXRpc2ZpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYXhpb20iLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsImZpbGVDb250ZXh0IiwiZ2V0RmlsZUNvbnRleHQiLCJ0cmFjZSIsInNpZ25hdHVyZVZlcmlmaWVzIiwidmVyaWZ5U2lnbmF0dXJlIiwiYWRkQXhpb20iLCJkZWJ1ZyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImNvbnRleHQiLCJtYXRjaFNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnMiLCJzaWduYXR1cmVNYXRjaGVzIiwic2lnbmF0dXJlQSIsInNpZ25hdHVyZUIiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsIm1hdGNoIiwidW5pZnlTdGVwIiwic3RlcCIsInN0ZXBVbmlmaWVzIiwic3RlcFN0cmluZyIsInN0cmluZyIsInVuY29uZGl0aW9uYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiIsInVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbiIsInVuaWZ5TGFzdFN0ZXAiLCJsYXN0U3RlcCIsImxhc3RTdGVwVW5pZmllcyIsImxhc3RTdGVwU3RyaW5nIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJnZXRMYXN0U3RlcCIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdldERlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb24iLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZXRTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCIsInN1cHBvc2l0aW9uc01hdGNoIiwiZXZlcnkiLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZXMiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmciLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21BeGlvbU5vZGUiLCJheGlvbU5vZGUiLCJub2RlIiwiZnJvbU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7Ozs0REFMeUI7d0VBQ007bUJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCLFdBQWVBLElBQUFBLGdCQUFXLDBCQUFDOzthQUFNQztnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7OztZQUMvQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxjQUFlRixjQUFjO2dCQUVuQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLFFBQVEsSUFBSSxFQUNaQyxjQUFjRCxNQUFNRSxTQUFTLElBQzdCQyxjQUFjLElBQUksQ0FBQ0MsY0FBYztnQkFFdkNELFlBQVlFLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaSixhQUFZO2dCQUVoRCxJQUFNSyxvQkFBb0IsSUFBSSxDQUFDQyxlQUFlO2dCQUU5QyxJQUFJRCxtQkFBbUI7b0JBQ3JCUCxXQUFXLHVCQXBCZ0JOLGtCQW9CVkssVUFBTixJQUFLO2dCQUNsQjtnQkFFQSxJQUFJQyxVQUFVO29CQUNaLElBQU1DLFNBQVEsSUFBSSxFQUFFLEdBQUc7b0JBRXZCRyxZQUFZSyxRQUFRLENBQUNSO29CQUVyQkcsWUFBWU0sS0FBSyxDQUFDLEFBQUMsb0JBQStCLE9BQVpSLGFBQVk7Z0JBQ3BEO2dCQUVBLE9BQU9GO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUQ7Z0JBRUosSUFBTVQsY0FBYyxJQUFJLENBQUNILGFBQWE7Z0JBRXRDLElBQUlHLGFBQWE7b0JBQ2YsSUFBTUYsWUFBWSxJQUFJLENBQUNDLFlBQVksSUFDN0JPLGNBQWMsSUFBSSxDQUFDQyxjQUFjLElBQ2pDTSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1QsY0FDNUNVLFVBQVVILGNBQWMsR0FBRztvQkFFakNKLG9CQUFvQlgsVUFBVUcsTUFBTSxDQUFDZTtnQkFDdkMsT0FBTztvQkFDTFAsb0JBQW9CO2dCQUN0QjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVuQixTQUFTLEVBQUVvQixhQUFhLEVBQUVGLE9BQU87Z0JBQzlDLElBQUlHLG1CQUFtQjtnQkFFdkIsSUFBTW5CLGNBQWMsSUFBSSxDQUFDSCxhQUFhO2dCQUV0QyxJQUFJRyxhQUFhO29CQUNmLElBQU1vQixhQUFhdEIsV0FBVyxHQUFHO29CQUVqQ0EsWUFBWSxJQUFJLENBQUNDLFlBQVk7b0JBRTdCLElBQU1zQixhQUFhdkIsV0FBVyxHQUFHO29CQUVqQyxJQUFNUSxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ00sZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNULGNBQzVDZ0IsaUJBQWlCVCxjQUNqQlUsa0JBQWtCUCxTQUFVLEdBQUc7b0JBRXJDRyxtQkFBbUJDLFdBQVdJLEtBQUssQ0FBQ0gsWUFBWUgsZUFBZUksZ0JBQWdCQztnQkFDakY7Z0JBRUEsT0FBT0o7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJLEVBQUVSLGFBQWEsRUFBRUYsT0FBTztnQkFDcEMsSUFBSVcsY0FBYztnQkFFbEIsSUFBTUMsYUFBYUYsS0FBS3JCLFNBQVMsSUFDM0JELGNBQWMsSUFBSSxDQUFDeUIsTUFBTSxFQUFHLEdBQUc7Z0JBRXJDYixRQUFRUixLQUFLLENBQUMsQUFBQyxpQkFBOENKLE9BQTlCd0IsWUFBVyxxQkFBK0IsT0FBWnhCLGFBQVk7Z0JBRXpFLElBQU0wQixnQkFBZ0IsSUFBSSxDQUFDQyxlQUFlO2dCQUUxQyxJQUFJLENBQUNELGVBQWU7b0JBQ2xCZCxRQUFRUixLQUFLLENBQUMsQUFBQyxxQkFBa0RKLE9BQTlCd0IsWUFBVyxxQkFBK0IsT0FBWnhCLGFBQVk7Z0JBQy9FLE9BQU87b0JBQ0wsSUFBTTRCLFlBQVlOLEtBQUtPLFlBQVksSUFDN0IzQixjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ00sZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNULGNBQzVDZ0IsaUJBQWlCVCxjQUNqQlUsa0JBQWtCUCxTQUNsQmtCLGdDQUFnQyxJQUFJLENBQUNDLDJCQUEyQixDQUFDSCxXQUFXZCxlQUFlSSxnQkFBZ0JDO29CQUVqSCxJQUFJVywrQkFBK0I7d0JBQ2pDUCxjQUFjO29CQUNoQjtnQkFDRjtnQkFFQSxJQUFJQSxhQUFhO29CQUNmWCxRQUFRSixLQUFLLENBQUMsQUFBQyxtQkFBZ0RSLE9BQTlCd0IsWUFBVyxxQkFBK0IsT0FBWnhCLGFBQVk7Z0JBQzdFO2dCQUVBLE9BQU91QjtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVEsRUFBRW5CLGFBQWEsRUFBRUksY0FBYyxFQUFFQyxlQUFlO2dCQUNwRSxJQUFJZSxrQkFBa0I7Z0JBRXRCLElBQU10QixVQUFVTyxpQkFDVm5CLGNBQWMsSUFBSSxDQUFDeUIsTUFBTSxFQUN6QlUsaUJBQWlCRixTQUFTaEMsU0FBUztnQkFFekNXLFFBQVFSLEtBQUssQ0FBQyxBQUFDLGlCQUF1REosT0FBdkNtQyxnQkFBZSwwQkFBb0MsT0FBWm5DLGFBQVk7Z0JBRWxGLElBQU00QixZQUFZSyxTQUFTSixZQUFZLElBQ2pDQyxnQ0FBZ0MsSUFBSSxDQUFDQywyQkFBMkIsQ0FBQ0gsV0FBV2QsZUFBZUksZ0JBQWdCQztnQkFFakgsSUFBSVcsK0JBQStCO29CQUNqQ0ksa0JBQWtCO2dCQUNwQjtnQkFFQSxJQUFJQSxpQkFBaUI7b0JBQ25CdEIsUUFBUUosS0FBSyxDQUFDLEFBQUMsbUJBQXlEUixPQUF2Q21DLGdCQUFlLDBCQUFvQyxPQUFabkMsYUFBWTtnQkFDdEY7Z0JBRUEsT0FBT2tDO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUSxFQUFFdkIsYUFBYSxFQUFFRixPQUFPO2dCQUM1QyxJQUFJMEIsa0JBQWtCO2dCQUV0QixJQUFNdEMsY0FBYyxJQUFJLENBQUN5QixNQUFNLEVBQ3pCYyxpQkFBaUJGLFNBQVNwQyxTQUFTO2dCQUV6Q1csUUFBUVIsS0FBSyxDQUFDLEFBQUMsaUJBQXNESixPQUF0Q3VDLGdCQUFlLHlCQUFtQyxPQUFadkMsYUFBWTtnQkFFakYsSUFBTTBCLGdCQUFnQixJQUFJLENBQUNDLGVBQWU7Z0JBRTFDLElBQUlELGVBQWU7b0JBQ2pCZCxRQUFRUixLQUFLLENBQUMsQUFBQyxxQkFBMERKLE9BQXRDdUMsZ0JBQWUseUJBQW1DLE9BQVp2QyxhQUFZO2dCQUN2RixPQUFPO29CQUNMLElBQU1pQyxXQUFXSSxTQUFTRyxXQUFXLElBQy9CdEMsY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNNLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDVCxjQUM1Q2dCLGlCQUFpQlQsY0FDakJVLGtCQUFrQlAsU0FDbEJzQixrQkFBa0IsSUFBSSxDQUFDRixhQUFhLENBQUNDLFVBQVVuQixlQUFlSSxnQkFBZ0JDO29CQUVwRixJQUFJZSxpQkFBaUI7d0JBQ25CLElBQU1PLGVBQWVKLFNBQVNLLGVBQWUsSUFDdkNDLG9CQUFvQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSCxjQUFjM0IsZUFBZUksZ0JBQWdCQzt3QkFFOUYsSUFBSXdCLG1CQUFtQjs0QkFDckJMLGtCQUFrQjt3QkFDcEI7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEsaUJBQWlCO29CQUNuQjFCLFFBQVFKLEtBQUssQ0FBQyxBQUFDLG1CQUF3RFIsT0FBdEN1QyxnQkFBZSx5QkFBbUMsT0FBWnZDLGFBQVk7Z0JBQ3JGO2dCQUVBLE9BQU9zQztZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRWhDLGFBQWEsRUFBRUksY0FBYyxFQUFFQyxlQUFlO2dCQUN0RSxJQUFJNEI7Z0JBRUosSUFBTUMsb0JBQW9CRixXQUFZLEdBQUc7Z0JBRXpDQSxZQUFZLElBQUksQ0FBQ0csWUFBWTtnQkFFN0IsSUFBTUMsbUJBQW1CSixXQUFXLEdBQUc7Z0JBRXZDQSxZQUFZRSxtQkFBb0IsR0FBRztnQkFFbkNELG1CQUFtQkcsaUJBQWlCTCxjQUFjLENBQUNDLFdBQVdoQyxlQUFlSSxnQkFBZ0JDO2dCQUU3RixPQUFPNEI7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFdBQVcsRUFBRUMsS0FBSyxFQUFFdkMsYUFBYSxFQUFFSSxjQUFjLEVBQUVDLGVBQWU7Z0JBQ2pGLElBQUltQztnQkFFSixJQUFNQyxzQkFBc0JILGFBQWMsR0FBRztnQkFFN0NBLGNBQWMsSUFBSSxDQUFDSSxjQUFjLENBQUNIO2dCQUVsQyxJQUFNSSxxQkFBcUJMLGFBQWEsR0FBRztnQkFFM0NBLGNBQWNHLHFCQUFzQixHQUFHO2dCQUV2Q0QscUJBQXFCRyxtQkFBbUJOLGdCQUFnQixDQUFDQyxhQUFhdEMsZUFBZUksZ0JBQWdCQztnQkFFckcsT0FBT21DO1lBQ1Q7OztZQUVBVixLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCSCxZQUFZLEVBQUUzQixhQUFhLEVBQUVJLGNBQWMsRUFBRUMsZUFBZTs7Z0JBQzVFLElBQUl3QixvQkFBb0I7Z0JBRXhCLElBQU1lLHVCQUF1QmpCLGNBQWUsR0FBRztnQkFFL0NBLGVBQWUsSUFBSSxDQUFDQyxlQUFlO2dCQUVuQyxJQUFNaUIsc0JBQXNCbEIsY0FDdEJtQiw0QkFBNEJELG9CQUFvQkUsTUFBTSxFQUN0REMsNkJBQTZCSixxQkFBcUJHLE1BQU07Z0JBRTlELElBQUlELDhCQUE4QkUsNEJBQTRCO29CQUM1RHJCLGVBQWVpQixzQkFBdUIsR0FBRztvQkFFekMsSUFBTUssb0JBQW9CdEIsYUFBYXVCLEtBQUssQ0FBQyxTQUFDWixhQUFhQzt3QkFDekQsSUFBTUMscUJBQXFCLE1BQUtILGdCQUFnQixDQUFDQyxhQUFhQyxPQUFPdkMsZUFBZUksZ0JBQWdCQzt3QkFFcEcsSUFBSW1DLG9CQUFvQjs0QkFDdEIsT0FBTzt3QkFDVDtvQkFDRjtvQkFFQSxJQUFJUyxtQkFBbUI7d0JBQ3JCcEIsb0JBQW9CO29CQUN0QjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQXNCLEtBQUFBO21CQUFBQSxTQUFBQSxpQ0FBaUNDLDJCQUEyQixFQUFFcEQsYUFBYSxFQUFFRixPQUFPO2dCQUNsRixJQUFJdUQscUNBQXFDO2dCQUV6QyxJQUFNbkUsY0FBYyxJQUFJLENBQUNDLFNBQVMsSUFDNUJtRSxvQ0FBb0NGLDRCQUE0QmpFLFNBQVM7Z0JBRS9FVyxRQUFRUixLQUFLLENBQUMsQUFBQyxpQkFBb0dKLE9BQXBGb0UsbUNBQWtDLG9EQUE4RCxPQUFacEUsYUFBWTtnQkFFL0gsSUFBTThDLFlBQVlvQiw0QkFBNEJqQixZQUFZLElBQ3BEL0MsY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNlLGlCQUFpQmhCLGFBQ2pCaUIsa0JBQWtCUCxTQUNsQm1DLG1CQUFtQixJQUFJLENBQUNGLGNBQWMsQ0FBQ0MsV0FBV2hDLGVBQWVJLGdCQUFnQkM7Z0JBRXZGLElBQUk0QixrQkFBa0I7b0JBQ3BCLElBQU1OLGVBQWV5Qiw0QkFBNEJ4QixlQUFlLElBQzFEQyxvQkFBb0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0gsY0FBYzNCLGVBQWVJLGdCQUFnQkM7b0JBRTlGZ0QscUNBQXFDeEIsbUJBQW1CLEdBQUc7Z0JBQzdEO2dCQUVBLElBQUl3QixvQ0FBb0M7b0JBQ3RDdkQsUUFBUUosS0FBSyxDQUFDLEFBQUMsbUJBQXNHUixPQUFwRm9FLG1DQUFrQyxvREFBOEQsT0FBWnBFLGFBQVk7Z0JBQ25JO2dCQUVBLE9BQU9tRTtZQUNUOzs7O1lBSU9FLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLElBQUksRUFBRXBFLFdBQVc7Z0JBQUksT0FBT3FFLDBCQUFpQixDQUFDRixRQUFRLENBQUM3RSxPQUFPOEUsTUFBTXBFO1lBQWM7OztZQUUzRnNFLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRXZFLFdBQVc7Z0JBQ3pDLElBQU13RSxPQUFPRCxXQUNQMUUsUUFBUXdFLDBCQUFpQixDQUFDSSxRQUFRLENBQUNuRixPQUFPa0YsTUFBTXhFO2dCQUV0RCxPQUFPSDtZQUNUOzs7O0VBM1E2Q3dFLDBCQUFpQixHQWtROUQseUJBQU9LLFFBQU8ifQ==