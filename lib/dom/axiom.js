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
            value: function unifyStep(step, substitutions, context) {
                var stepUnified = false;
                var stepString = step.getString(), axiomString = this.string; ///
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom..."));
                var statement = step.getStatement(), statementUnified = this.unifyStatement(statement, substitutions, context);
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
                var statement = lastStep.getStatement(), statementUnified = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
                if (statementUnified) {
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
            value: function unifySubproof(subproof, substitutions, context) {
                var subproofUnified = false;
                var axiomString = this.string, subproofString = subproof.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom..."));
                var lastStep = subproof.getLastStep(), fileContext = this.getFileContext(), localContext = _local.default.fromFileContext(fileContext), generalContext = localContext, specificContext = context, lastStepUnified = this.unifyLastStep(lastStep, substitutions, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiAgZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEF4aW9tIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllZCA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gc3VwZXIudmVyaWZ5KCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTaWduYXR1cmUoKSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVkID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZWQ7XG4gIH1cblxuICBtYXRjaFNpZ25hdHVyZShzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlQSA9IHNpZ25hdHVyZTsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKClcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlQiA9IHNpZ25hdHVyZTsgLy8vXG5cbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBzaWduYXR1cmVNYXRjaGVzID0gc2lnbmF0dXJlQS5tYXRjaChzaWduYXR1cmVCLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIHN0ZXBVbmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYXN0U3RlcFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuc3RyaW5nLCAgLy8vXG4gICAgICAgICAgbGFzdFN0ZXBTdHJpbmcgPSBsYXN0U3RlcC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYClcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGxhc3RTdGVwVW5pZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RTdGVwVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKVxuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLnN0cmluZywgIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBsYXN0U3RlcCA9IHN1YnByb29mLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbGFzdFN0ZXBVbmlmaWVkID0gdGhpcy51bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYXN0U3RlcFVuaWZpZWQpIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1YnByb29mLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZmllZCA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZpZWQpIHtcbiAgICAgICAgc3VicHJvb2ZVbmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVkO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvbiA9IHRoaXMuZ2V0RGVkdWN0aW9uKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAvLy9cblxuICAgIGRlZHVjdGlvbiA9IHNwZWNpZmljRGVkdWN0aW9uOyAgLy8vXG5cbiAgICBkZWR1Y3Rpb25VbmlmaWVkID0gZ2VuZXJhbERlZHVjdGlvbi51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZWQ7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gdGhpcy5nZXRTdXBwb3NpdGlvbihpbmRleCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgLy8vXG5cbiAgICBzdXBwb3NpdGlvbiA9IHNwZWNpZmljU3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uVW5pZmllZCA9IGdlbmVyYWxTdXBwb3NpdGlvbi51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zLCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID0gZ2VuZXJhbFN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGggPSBzcGVjaWZpY1N1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGgpIHtcbiAgICAgIHN1cHBvc2l0aW9ucyA9IHNwZWNpZmljU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoID0gc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc01hdGNoKSB7XG4gICAgICAgIHN1cHBvc2l0aW9uc1VuaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldERlZHVjdGlvbigpLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllZCkge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZmllZCA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHN1cHBvc2l0aW9uc1VuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkF4aW9tXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihBeGlvbSwganNvbiwgZmlsZUNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBheGlvbU5vZGUsIC8vL1xuICAgICAgICAgIGF4aW9tID0gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoQXhpb20sIG5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJBeGlvbSIsImlzU2F0aXNmaWFibGUiLCJzaWduYXR1cmUiLCJnZXRTaWduYXR1cmUiLCJzYXRpc2ZpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVkIiwiYXhpb20iLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsImZpbGVDb250ZXh0IiwiZ2V0RmlsZUNvbnRleHQiLCJ0cmFjZSIsInNpZ25hdHVyZVZlcmlmaWVkIiwidmVyaWZ5U2lnbmF0dXJlIiwiYWRkQXhpb20iLCJkZWJ1ZyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImNvbnRleHQiLCJtYXRjaFNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnMiLCJzaWduYXR1cmVNYXRjaGVzIiwic2lnbmF0dXJlQSIsInNpZ25hdHVyZUIiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsIm1hdGNoIiwidW5pZnlTdGVwIiwic3RlcCIsInN0ZXBVbmlmaWVkIiwic3RlcFN0cmluZyIsInN0cmluZyIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5TGFzdFN0ZXAiLCJsYXN0U3RlcCIsImxhc3RTdGVwVW5pZmllZCIsImxhc3RTdGVwU3RyaW5nIiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3VicHJvb2ZVbmlmaWVkIiwic3VicHJvb2ZTdHJpbmciLCJnZXRMYXN0U3RlcCIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZpZWQiLCJ1bmlmeVN1cHBvc2l0aW9ucyIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllZCIsInNwZWNpZmljRGVkdWN0aW9uIiwiZ2V0RGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvbiIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb25VbmlmaWVkIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdldFN1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uIiwic3BlY2lmaWNTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoIiwic3VwcG9zaXRpb25zTWF0Y2giLCJldmVyeSIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsImZyb21KU09OIiwianNvbiIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbUF4aW9tTm9kZSIsImF4aW9tTm9kZSIsIm5vZGUiLCJmcm9tTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzREQUx5Qjt3RUFDTTttQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsV0FBZUEsSUFBQUEsZ0JBQVcsMEJBQUM7O2FBQU1DO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOzs7O1lBQy9CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBWSxJQUFJLENBQUNDLFlBQVksSUFDN0JDLGNBQWVGLGNBQWM7Z0JBRW5DLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsUUFBUSxJQUFJLEVBQ1pDLGNBQWNELE1BQU1FLFNBQVMsSUFDN0JDLGNBQWMsSUFBSSxDQUFDQyxjQUFjO2dCQUV2Q0QsWUFBWUUsS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpKLGFBQVk7Z0JBRWhELElBQU1LLG9CQUFvQixJQUFJLENBQUNDLGVBQWU7Z0JBRTlDLElBQUlELG1CQUFtQjtvQkFDckJQLFdBQVcsdUJBcEJnQk4sa0JBb0JWSyxVQUFOLElBQUs7Z0JBQ2xCO2dCQUVBLElBQUlDLFVBQVU7b0JBQ1osSUFBTUMsU0FBUSxJQUFJLEVBQUUsR0FBRztvQkFFdkJHLFlBQVlLLFFBQVEsQ0FBQ1I7b0JBRXJCRyxZQUFZTSxLQUFLLENBQUMsQUFBQyxvQkFBK0IsT0FBWlIsYUFBWTtnQkFDcEQ7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCxvQkFBb0I7Z0JBRXhCLElBQU1ULGNBQWMsSUFBSSxDQUFDSCxhQUFhO2dCQUV0QyxJQUFJRyxhQUFhO29CQUNmLElBQU1GLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCTyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ00sZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNULGNBQzVDVSxVQUFVSCxjQUFjLEdBQUc7b0JBRWpDSixvQkFBb0JYLFVBQVVHLE1BQU0sQ0FBQ2U7Z0JBQ3ZDO2dCQUVBLE9BQU9QO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZW5CLFNBQVMsRUFBRW9CLGFBQWEsRUFBRUYsT0FBTztnQkFDOUMsSUFBSUcsbUJBQW1CO2dCQUV2QixJQUFNbkIsY0FBYyxJQUFJLENBQUNILGFBQWE7Z0JBRXRDLElBQUlHLGFBQWE7b0JBQ2YsSUFBTW9CLGFBQWF0QixXQUFXLEdBQUc7b0JBRWpDQSxZQUFZLElBQUksQ0FBQ0MsWUFBWTtvQkFFN0IsSUFBTXNCLGFBQWF2QixXQUFXLEdBQUc7b0JBRWpDLElBQU1RLGNBQWMsSUFBSSxDQUFDQyxjQUFjLElBQ2pDTSxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1QsY0FDNUNnQixpQkFBaUJULGNBQ2pCVSxrQkFBa0JQLFNBQVUsR0FBRztvQkFFckNHLG1CQUFtQkMsV0FBV0ksS0FBSyxDQUFDSCxZQUFZSCxlQUFlSSxnQkFBZ0JDO2dCQUNqRjtnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUksRUFBRVIsYUFBYSxFQUFFRixPQUFPO2dCQUNwQyxJQUFJVyxjQUFjO2dCQUVsQixJQUFNQyxhQUFhRixLQUFLckIsU0FBUyxJQUMzQkQsY0FBYyxJQUFJLENBQUN5QixNQUFNLEVBQUcsR0FBRztnQkFFckNiLFFBQVFSLEtBQUssQ0FBQyxBQUFDLGlCQUE4Q0osT0FBOUJ3QixZQUFXLHFCQUErQixPQUFaeEIsYUFBWTtnQkFFekUsSUFBTTBCLFlBQVlKLEtBQUtLLFlBQVksSUFDN0JDLG1CQUFtQixJQUFJLENBQUNDLGNBQWMsQ0FBQ0gsV0FBV1osZUFBZUY7Z0JBRXZFLElBQUlnQixrQkFBa0I7b0JBQ3BCTCxjQUFjO2dCQUNoQjtnQkFFQSxJQUFJQSxhQUFhO29CQUNmWCxRQUFRSixLQUFLLENBQUMsQUFBQyxtQkFBZ0RSLE9BQTlCd0IsWUFBVyxxQkFBK0IsT0FBWnhCLGFBQVk7Z0JBQzdFO2dCQUVBLE9BQU91QjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVEsRUFBRWpCLGFBQWEsRUFBRUksY0FBYyxFQUFFQyxlQUFlO2dCQUNwRSxJQUFJYSxrQkFBa0I7Z0JBRXRCLElBQU1wQixVQUFVTyxpQkFDVm5CLGNBQWMsSUFBSSxDQUFDeUIsTUFBTSxFQUN6QlEsaUJBQWlCRixTQUFTOUIsU0FBUztnQkFFekNXLFFBQVFSLEtBQUssQ0FBQyxBQUFDLGlCQUF1REosT0FBdkNpQyxnQkFBZSwwQkFBb0MsT0FBWmpDLGFBQVk7Z0JBRWxGLElBQU0wQixZQUFZSyxTQUFTSixZQUFZLElBQ2pDQyxtQkFBbUIsSUFBSSxDQUFDTSwyQkFBMkIsQ0FBQ1IsV0FBV1osZUFBZUksZ0JBQWdCQztnQkFFcEcsSUFBSVMsa0JBQWtCO29CQUNwQkksa0JBQWtCO2dCQUNwQjtnQkFFQSxJQUFJQSxpQkFBaUI7b0JBQ25CcEIsUUFBUUosS0FBSyxDQUFDLEFBQUMsbUJBQXlEUixPQUF2Q2lDLGdCQUFlLDBCQUFvQyxPQUFaakMsYUFBWTtnQkFDdEY7Z0JBRUEsT0FBT2dDO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUSxFQUFFdEIsYUFBYSxFQUFFRixPQUFPO2dCQUM1QyxJQUFJeUIsa0JBQWtCO2dCQUV0QixJQUFNckMsY0FBYyxJQUFJLENBQUN5QixNQUFNLEVBQ3pCYSxpQkFBaUJGLFNBQVNuQyxTQUFTO2dCQUV6Q1csUUFBUVIsS0FBSyxDQUFDLEFBQUMsaUJBQXNESixPQUF0Q3NDLGdCQUFlLHlCQUFtQyxPQUFadEMsYUFBWTtnQkFFakYsSUFBTStCLFdBQVdLLFNBQVNHLFdBQVcsSUFDL0JyQyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ00sZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNULGNBQzVDZ0IsaUJBQWlCVCxjQUNqQlUsa0JBQWtCUCxTQUNsQm9CLGtCQUFrQixJQUFJLENBQUNGLGFBQWEsQ0FBQ0MsVUFBVWpCLGVBQWVJLGdCQUFnQkM7Z0JBRXBGLElBQUlhLGlCQUFpQjtvQkFDbkIsSUFBTVEsZUFBZUosU0FBU0ssZUFBZSxJQUN2Q0Msc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNILGNBQWMxQixlQUFlSSxnQkFBZ0JDO29CQUVoRyxJQUFJdUIscUJBQXFCO3dCQUN2Qkwsa0JBQWtCO29CQUNwQjtnQkFDRjtnQkFFQSxJQUFJQSxpQkFBaUI7b0JBQ25CekIsUUFBUUosS0FBSyxDQUFDLEFBQUMsbUJBQXdEUixPQUF0Q3NDLGdCQUFlLHlCQUFtQyxPQUFadEMsYUFBWTtnQkFDckY7Z0JBRUEsT0FBT3FDO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFL0IsYUFBYSxFQUFFSSxjQUFjLEVBQUVDLGVBQWU7Z0JBQ3RFLElBQUkyQjtnQkFFSixJQUFNQyxvQkFBb0JGLFdBQVksR0FBRztnQkFFekNBLFlBQVksSUFBSSxDQUFDRyxZQUFZO2dCQUU3QixJQUFNQyxtQkFBbUJKLFdBQVcsR0FBRztnQkFFdkNBLFlBQVlFLG1CQUFvQixHQUFHO2dCQUVuQ0QsbUJBQW1CRyxpQkFBaUJMLGNBQWMsQ0FBQ0MsV0FBVy9CLGVBQWVJLGdCQUFnQkM7Z0JBRTdGLE9BQU8yQjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsV0FBVyxFQUFFQyxLQUFLLEVBQUV0QyxhQUFhLEVBQUVJLGNBQWMsRUFBRUMsZUFBZTtnQkFDakYsSUFBSWtDO2dCQUVKLElBQU1DLHNCQUFzQkgsYUFBYyxHQUFHO2dCQUU3Q0EsY0FBYyxJQUFJLENBQUNJLGNBQWMsQ0FBQ0g7Z0JBRWxDLElBQU1JLHFCQUFxQkwsYUFBYSxHQUFHO2dCQUUzQ0EsY0FBY0cscUJBQXNCLEdBQUc7Z0JBRXZDRCxxQkFBcUJHLG1CQUFtQk4sZ0JBQWdCLENBQUNDLGFBQWFyQyxlQUFlSSxnQkFBZ0JDO2dCQUVyRyxPQUFPa0M7WUFDVDs7O1lBRUFWLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JILFlBQVksRUFBRTFCLGFBQWEsRUFBRUksY0FBYyxFQUFFQyxlQUFlOztnQkFDNUUsSUFBSXVCLHNCQUFzQjtnQkFFMUIsSUFBTWUsdUJBQXVCakIsY0FBZSxHQUFHO2dCQUUvQ0EsZUFBZSxJQUFJLENBQUNDLGVBQWU7Z0JBRW5DLElBQU1pQixzQkFBc0JsQixjQUN0Qm1CLDRCQUE0QkQsb0JBQW9CRSxNQUFNLEVBQ3REQyw2QkFBNkJKLHFCQUFxQkcsTUFBTTtnQkFFOUQsSUFBSUQsOEJBQThCRSw0QkFBNEI7b0JBQzVEckIsZUFBZWlCLHNCQUF1QixHQUFHO29CQUV6QyxJQUFNSyxvQkFBb0J0QixhQUFhdUIsS0FBSyxDQUFDLFNBQUNaLGFBQWFDO3dCQUN6RCxJQUFNQyxxQkFBcUIsTUFBS0gsZ0JBQWdCLENBQUNDLGFBQWFDLE9BQU90QyxlQUFlSSxnQkFBZ0JDO3dCQUVwRyxJQUFJa0Msb0JBQW9COzRCQUN0QixPQUFPO3dCQUNUO29CQUNGO29CQUVBLElBQUlTLG1CQUFtQjt3QkFDckJwQixzQkFBc0I7b0JBQ3hCO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBc0IsS0FBQUE7bUJBQUFBLFNBQUFBLGlDQUFpQ0MsMkJBQTJCLEVBQUVuRCxhQUFhLEVBQUVGLE9BQU87Z0JBQ2xGLElBQUlzRCxxQ0FBcUM7Z0JBRXpDLElBQU1sRSxjQUFjLElBQUksQ0FBQ0MsU0FBUyxJQUM1QmtFLG9DQUFvQ0YsNEJBQTRCaEUsU0FBUztnQkFFL0VXLFFBQVFSLEtBQUssQ0FBQyxBQUFDLGlCQUFvR0osT0FBcEZtRSxtQ0FBa0Msb0RBQThELE9BQVpuRSxhQUFZO2dCQUUvSCxJQUFNNkMsWUFBWW9CLDRCQUE0QmpCLFlBQVksSUFDcEQ5QyxjQUFjLElBQUksQ0FBQ0MsY0FBYyxJQUNqQ2UsaUJBQWlCaEIsYUFDakJpQixrQkFBa0JQLFNBQ2xCa0MsbUJBQW1CLElBQUksQ0FBQ0YsY0FBYyxDQUFDQyxXQUFXL0IsZUFBZUksZ0JBQWdCQztnQkFFdkYsSUFBSTJCLGtCQUFrQjtvQkFDcEIsSUFBTU4sZUFBZXlCLDRCQUE0QnhCLGVBQWUsSUFDMURDLHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSCxjQUFjMUIsZUFBZUksZ0JBQWdCQztvQkFFaEcrQyxxQ0FBcUN4QixxQkFBcUIsR0FBRztnQkFDL0Q7Z0JBRUEsSUFBSXdCLG9DQUFvQztvQkFDdEN0RCxRQUFRSixLQUFLLENBQUMsQUFBQyxtQkFBc0dSLE9BQXBGbUUsbUNBQWtDLG9EQUE4RCxPQUFabkUsYUFBWTtnQkFDbkk7Z0JBRUEsT0FBT2tFO1lBQ1Q7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFbkUsV0FBVztnQkFBSSxPQUFPb0UsMEJBQWlCLENBQUNGLFFBQVEsQ0FBQzVFLE9BQU82RSxNQUFNbkU7WUFBYzs7O1lBRTNGcUUsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFdEUsV0FBVztnQkFDekMsSUFBTXVFLE9BQU9ELFdBQ1B6RSxRQUFRdUUsMEJBQWlCLENBQUNJLFFBQVEsQ0FBQ2xGLE9BQU9pRixNQUFNdkU7Z0JBRXRELE9BQU9IO1lBQ1Q7Ozs7RUF6UDZDdUUsMEJBQWlCLEdBZ1A5RCx5QkFBT0ssUUFBTyJ9