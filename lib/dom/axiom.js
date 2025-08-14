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
                var verified;
                var axiom = this, axiomString = axiom.getString(), fileContext = this.getFileContext();
                fileContext.trace("Verifying the '".concat(axiomString, "' axiom..."));
                var signatureVerified = this.verifySignature();
                if (signatureVerified) {
                    verified = _get(_get_prototype_of(Axiom.prototype), "verify", this).call(this);
                }
                if (verified) {
                    var axiom1 = this; ///
                    fileContext.addAxiom(axiom1);
                    fileContext.debug("...verified the '".concat(axiomString, "' axiom."));
                }
                return verified;
            }
        },
        {
            key: "verifySignature",
            value: function verifySignature() {
                var signatureVerified = true;
                var satisfiable = this.isSatisfiable();
                if (satisfiable) {
                    var signature = this.getSignature(), fileContext = this.getFileContext(), localContext = _local.default.fromFileContext(fileContext), context = localContext; ///
                    signatureVerified = signature.verify(context);
                }
                return signatureVerified;
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
            value: function unifyStep(step, substitutions, generalContext, specificContext) {
                var stepUnified = false;
                var context = specificContext, stepString = step.getString(), axiomString = this.string; ///
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom..."));
                var statement = step.getStatement(), statementUnified = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
                    stepUnified = true;
                }
                if (stepUnified) {
                    context.debug("...unified the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom."));
                }
                return stepUnified;
            }
        },
        {
            key: "unifyLastStep",
            value: function unifyLastStep(lastStep, substitutions, generalContext, specificContext) {
                var lastStepUnified = false;
                var context = specificContext, axiomString = this.string, lastStepString = lastStep.getString();
                context.trace("Unifying the '".concat(lastStepString, "' last step with the '").concat(axiomString, "' axiom..."));
                var step = lastStep, stepUnified = this.unifyStep(step, substitutions, generalContext, specificContext);
                if (stepUnified) {
                    lastStepUnified = true;
                }
                if (lastStepUnified) {
                    context.debug("...unified the '".concat(lastStepString, "' last step with the '").concat(axiomString, "' axiom."));
                }
                return lastStepUnified;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, generalContext, specificContext) {
                var subproofUnified = false;
                var context = specificContext, axiomString = this.string, subproofString = subproof.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom..."));
                var lastStep = subproof.getLastStep(), lastStepUnified = this.unifyLastStep(lastStep, substitutions, generalContext, specificContext);
                if (lastStepUnified) {
                    var suppositions = subproof.getSuppositions(), suppositionsUnified = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);
                    if (suppositionsUnified) {
                        subproofUnified = true;
                    }
                }
                if (subproofUnified) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom."));
                }
                return subproofUnified;
            }
        },
        {
            key: "unifyDeduction",
            value: function unifyDeduction(deduction, substitutions, generalContext, specificContext) {
                var deductionUnified;
                var specificDeduction = deduction; ///
                deduction = this.getDeduction();
                var generalDeduction = deduction; ///
                deduction = specificDeduction; ///
                deductionUnified = generalDeduction.unifyDeduction(deduction, substitutions, generalContext, specificContext);
                return deductionUnified;
            }
        },
        {
            key: "unifySupposition",
            value: function unifySupposition(supposition, index, substitutions, generalContext, specificContext) {
                var suppositionUnified;
                var specificSupposition = supposition; ///
                supposition = this.getSupposition(index);
                var generalSupposition = supposition; ///
                supposition = specificSupposition; ///
                suppositionUnified = generalSupposition.unifySupposition(supposition, substitutions, generalContext, specificContext);
                return suppositionUnified;
            }
        },
        {
            key: "unifySuppositions",
            value: function unifySuppositions(suppositions, substitutions, generalContext, specificContext) {
                var _this = this;
                var suppositionsUnified = false;
                var specificSuppositions = suppositions; ///
                suppositions = this.getSuppositions();
                var generalSuppositions = suppositions, generalSuppositionsLength = generalSuppositions.length, specificSuppositionsLength = specificSuppositions.length;
                if (generalSuppositionsLength === specificSuppositionsLength) {
                    suppositions = specificSuppositions; ///
                    var suppositionsMatch = suppositions.every(function(supposition, index) {
                        var suppositionUnified = _this.unifySupposition(supposition, index, substitutions, generalContext, specificContext);
                        if (suppositionUnified) {
                            return true;
                        }
                    });
                    if (suppositionsMatch) {
                        suppositionsUnified = true;
                    }
                }
                return suppositionsUnified;
            }
        },
        {
            key: "unifyAxiomLemmaTheoremConjecture",
            value: function unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions, context) {
                var axiomLemmaTheoremConjectureUnified = false;
                var axiomString = this.getString(), axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();
                context.trace("Unifying the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(axiomString, "' axiom..."));
                var deduction = axiomLemmaTheoremConjecture.getDeduction(), fileContext = this.getFileContext(), generalContext = fileContext, specificContext = context, deductionUnified = this.unifyDeduction(deduction, substitutions, generalContext, specificContext);
                if (deductionUnified) {
                    var suppositions = axiomLemmaTheoremConjecture.getSuppositions(), suppositionsUnified = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);
                    axiomLemmaTheoremConjectureUnified = suppositionsUnified; ///
                }
                if (axiomLemmaTheoremConjectureUnified) {
                    context.debug("...unified the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(axiomString, "' axiom."));
                }
                return axiomLemmaTheoremConjectureUnified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiAgZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEF4aW9tIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllZCA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gc3VwZXIudmVyaWZ5KCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTaWduYXR1cmUoKSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVkID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZWQ7XG4gIH1cblxuICBtYXRjaFNpZ25hdHVyZShzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlQSA9IHNpZ25hdHVyZTsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKClcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlQiA9IHNpZ25hdHVyZTsgLy8vXG5cbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBzaWduYXR1cmVNYXRjaGVzID0gc2lnbmF0dXJlQS5tYXRjaChzaWduYXR1cmVCLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBzdGVwVW5pZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbGFzdFN0ZXBVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIGxhc3RTdGVwU3RyaW5nID0gbGFzdFN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApXG5cbiAgICBjb25zdCBzdGVwID0gbGFzdFN0ZXAsICAvLy9cbiAgICAgICAgICBzdGVwVW5pZmllZCA9IHRoaXMudW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0ZXBVbmlmaWVkKSB7XG4gICAgICBsYXN0U3RlcFVuaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsYXN0U3RlcFVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYClcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IGxhc3RTdGVwID0gc3VicHJvb2YuZ2V0TGFzdFN0ZXAoKSxcbiAgICAgICAgICBsYXN0U3RlcFVuaWZpZWQgPSB0aGlzLnVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGxhc3RTdGVwVW5pZmllZCkge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VicHJvb2YuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmaWVkID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZmllZCkge1xuICAgICAgICBzdWJwcm9vZlVuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZWQ7XG5cbiAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uID0gdGhpcy5nZXREZWR1Y3Rpb24oKTtcblxuICAgIGNvbnN0IGdlbmVyYWxEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247IC8vL1xuXG4gICAgZGVkdWN0aW9uID0gc3BlY2lmaWNEZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvblVuaWZpZWQgPSBnZW5lcmFsRGVkdWN0aW9uLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSB0aGlzLmdldFN1cHBvc2l0aW9uKGluZGV4KTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gc3BlY2lmaWNTdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVkID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnMsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGggPSBnZW5lcmFsU3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCA9IHNwZWNpZmljU3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID09PSBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCkge1xuICAgICAgc3VwcG9zaXRpb25zID0gc3BlY2lmaWNTdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBzdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zTWF0Y2gpIHtcbiAgICAgICAgc3VwcG9zaXRpb25zVW5pZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb24gPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0RGVkdWN0aW9uKCksICAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVkKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmaWVkID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gc3VwcG9zaXRpb25zVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBmaWxlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgICAgYXhpb20gPSBUb3BMZXZlbEFzc2VydGlvbi5mcm9tTm9kZShBeGlvbSwgbm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkF4aW9tIiwiaXNTYXRpc2ZpYWJsZSIsInNpZ25hdHVyZSIsImdldFNpZ25hdHVyZSIsInNhdGlzZmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJheGlvbSIsImF4aW9tU3RyaW5nIiwiZ2V0U3RyaW5nIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsInRyYWNlIiwic2lnbmF0dXJlVmVyaWZpZWQiLCJ2ZXJpZnlTaWduYXR1cmUiLCJhZGRBeGlvbSIsImRlYnVnIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiY29udGV4dCIsIm1hdGNoU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9ucyIsInNpZ25hdHVyZU1hdGNoZXMiLCJzaWduYXR1cmVBIiwic2lnbmF0dXJlQiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwibWF0Y2giLCJ1bmlmeVN0ZXAiLCJzdGVwIiwic3RlcFVuaWZpZWQiLCJzdGVwU3RyaW5nIiwic3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlMYXN0U3RlcCIsImxhc3RTdGVwIiwibGFzdFN0ZXBVbmlmaWVkIiwibGFzdFN0ZXBTdHJpbmciLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJwcm9vZlVuaWZpZWQiLCJzdWJwcm9vZlN0cmluZyIsImdldExhc3RTdGVwIiwic3VwcG9zaXRpb25zIiwiZ2V0U3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zVW5pZmllZCIsInVuaWZ5U3VwcG9zaXRpb25zIiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVkIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJnZXREZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uIiwidW5pZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uIiwiaW5kZXgiLCJzdXBwb3NpdGlvblVuaWZpZWQiLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwiZ2V0U3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb24iLCJzcGVjaWZpY1N1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGgiLCJzdXBwb3NpdGlvbnNNYXRjaCIsImV2ZXJ5IiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwiZnJvbUpTT04iLCJqc29uIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tQXhpb21Ob2RlIiwiYXhpb21Ob2RlIiwibm9kZSIsImZyb21Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7NERBTHlCO3dFQUNNO21CQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixXQUFlQSxJQUFBQSxnQkFBVywwQkFBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDL0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFZLElBQUksQ0FBQ0MsWUFBWSxJQUM3QkMsY0FBZUYsY0FBYztnQkFFbkMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxRQUFRLElBQUksRUFDWkMsY0FBY0QsTUFBTUUsU0FBUyxJQUM3QkMsY0FBYyxJQUFJLENBQUNDLGNBQWM7Z0JBRXZDRCxZQUFZRSxLQUFLLENBQUMsQUFBQyxrQkFBNkIsT0FBWkosYUFBWTtnQkFFaEQsSUFBTUssb0JBQW9CLElBQUksQ0FBQ0MsZUFBZTtnQkFFOUMs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