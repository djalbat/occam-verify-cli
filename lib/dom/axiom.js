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
var _necessary = require("necessary");
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
var match = _necessary.arrayUtilities.match;
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
            value: function matchSignature(signature, substitutions, generalContext, specificContext) {
                var signatureMatches = false;
                var satisfiable = this.isSatisfiable();
                if (satisfiable) {
                    var signatureA = signature; ///
                    signature = this.getSignature();
                    var signatureB = signature; ///
                    signatureMatches = signatureA.match(signatureB, substitutions, generalContext, specificContext);
                }
                return signatureMatches;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var deduction = this.getDeduction(), statementUnified = deduction.unifyStatement(statement, substitutions, generalContext, specificContext);
                return statementUnified;
            }
        },
        {
            key: "unifyDeduction",
            value: function unifyDeduction(generalDeduction, specificDeduction, substitutions, generalContext, specificContext) {
                var deductionUnified;
                var context = specificContext, generalDeductionString = generalDeduction.getString(), specificDeductionString = specificDeduction.getString();
                context.trace("Unifying the '".concat(specificDeductionString, "' deduction with the '").concat(generalDeductionString, "' deduction..."));
                var statement = specificDeduction.getStatement(), statementUnified = generalDeduction.unifyStatement(statement, substitutions, generalContext, specificContext);
                deductionUnified = statementUnified; ///
                if (deductionUnified) {
                    context.debug("...unified the '".concat(specificDeductionString, "' deduction with the '").concat(generalDeductionString, "' deduction."));
                }
                return deductionUnified;
            }
        },
        {
            key: "unifySupposition",
            value: function unifySupposition(generalSupposition, specificSupposition, substitutions, generalContext, specificContext) {
                var suppositionUnified;
                var context = specificContext, generalSuppositionString = generalSupposition.getString(), specificSuppositionString = specificSupposition.getString();
                context.trace("Unifying the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition..."));
                var statement = specificSupposition.getStatement(), statementUnified = generalSupposition.unifyStatement(statement, substitutions, generalContext, specificContext);
                suppositionUnified = statementUnified; ///
                if (suppositionUnified) {
                    context.debug("...unified the '".concat(specificSuppositionString, "' supposition with the '").concat(generalSuppositionString, "' supposition."));
                }
                return suppositionUnified;
            }
        },
        {
            key: "unifySuppositions",
            value: function unifySuppositions(generalSuppositions, specificSuppositions, substitutions, generalContext, specificContext) {
                var _this = this;
                var suppositionsUnified;
                var suppositionsMatch = match(generalSuppositions, specificSuppositions, function(generalSupposition, specificSupposition) {
                    var suppositionUnified = _this.unifySupposition(generalSupposition, specificSupposition, substitutions, generalContext, specificContext);
                    if (suppositionUnified) {
                        return true;
                    }
                });
                suppositionsUnified = suppositionsMatch; ///
                return suppositionsUnified;
            }
        },
        {
            key: "unifyAxiomLemmaTheoremConjecture",
            value: function unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions, context) {
                var axiomLemmaTheoremConjectureUnified = false;
                var axiomString = this.getString(), axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();
                context.trace("Unifying the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(axiomString, "' axiom..."));
                var fileContext = this.getFileContext(), generalContext = fileContext, specificContext = context; ///
                var deduction;
                deduction = this.getDeduction();
                var generalDeduction = deduction; ///
                deduction = axiomLemmaTheoremConjecture.getDeduction();
                var specificDeduction = deduction, deductionUnified = this.unifyDeduction(generalDeduction, specificDeduction, substitutions, generalContext, specificContext);
                if (deductionUnified) {
                    var suppositions;
                    suppositions = this.getSuppositions();
                    var generalSuppositions = suppositions; ///
                    suppositions = axiomLemmaTheoremConjecture.getSuppositions();
                    var specificSuppositions = suppositions, suppositionsUnified = this.unifySuppositions(generalSuppositions, specificSuppositions, substitutions, generalContext, specificContext);
                    axiomLemmaTheoremConjectureUnified = suppositionsUnified; ///
                }
                if (axiomLemmaTheoremConjectureUnified) {
                    context.debug("...unified the '".concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture with the '").concat(axiomString, "' axiom."));
                }
                return axiomLemmaTheoremConjectureUnified;
            }
        },
        {
            key: "unifyStatementAndStepsOrSubproofs",
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context) {
                var statementAndStepsOrSubproofsUnified = false;
                var satisfiable = this.isSatisfiable();
                if (satisfiable) {
                    var string = this.getString(), axiomString = string, statementString = statement.getString();
                    context.debug("The '".concat(statementString, "' statement cannot be unified with the '").concat(axiomString, "' axiom because the latter is satisfiable."));
                } else {
                    statementAndStepsOrSubproofsUnified = _get(_get_prototype_of(Axiom.prototype), "unifyStatementAndStepsOrSubproofs", this).call(this, statement, stepsOrSubproofs, substitutions, context);
                }
                return statementAndStepsOrSubproofsUnified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQXhpb20gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGlzU2F0aXNmaWFibGUoKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKSxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IChzaWduYXR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGF4aW9tID0gdGhpcywgLy8vXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSBheGlvbS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKTtcblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlTaWduYXR1cmUoKTtcblxuICAgIGlmIChzaWduYXR1cmVWZXJpZmllZCkge1xuICAgICAgdmVyaWZpZWQgPSBzdXBlci52ZXJpZnkoKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGF4aW9tID0gdGhpczsgLy8vXG5cbiAgICAgIGZpbGVDb250ZXh0LmFkZEF4aW9tKGF4aW9tKTtcblxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVNpZ25hdHVyZSgpIHtcbiAgICBsZXQgc2lnbmF0dXJlVmVyaWZpZWQgPSB0cnVlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKSxcbiAgICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgICAgc2lnbmF0dXJlVmVyaWZpZWQgPSBzaWduYXR1cmUudmVyaWZ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVWZXJpZmllZDtcbiAgfVxuXG4gIG1hdGNoU2lnbmF0dXJlKHNpZ25hdHVyZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzaWduYXR1cmVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzYXRpc2ZpYWJsZSA9IHRoaXMuaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICBjb25zdCBzaWduYXR1cmVBID0gc2lnbmF0dXJlOyAvLy9cblxuICAgICAgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKVxuXG4gICAgICBjb25zdCBzaWduYXR1cmVCID0gc2lnbmF0dXJlOyAvLy9cblxuICAgICAgc2lnbmF0dXJlTWF0Y2hlcyA9IHNpZ25hdHVyZUEubWF0Y2goc2lnbmF0dXJlQiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBkZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZ2VuZXJhbERlZHVjdGlvbiwgc3BlY2lmaWNEZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uU3RyaW5nID0gZ2VuZXJhbERlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvblN0cmluZyA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBnZW5lcmFsRGVkdWN0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBkZWR1Y3Rpb25VbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgIC8vL1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKGdlbmVyYWxTdXBwb3NpdGlvbiwgc3BlY2lmaWNTdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZWQ7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gZ2VuZXJhbFN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAgLy8vXG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKGdlbmVyYWxTdXBwb3NpdGlvbnMsIHNwZWNpZmljU3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZpZWQ7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoKGdlbmVyYWxTdXBwb3NpdGlvbnMsIHNwZWNpZmljU3VwcG9zaXRpb25zLCAoZ2VuZXJhbFN1cHBvc2l0aW9uLCBzcGVjaWZpY1N1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oZ2VuZXJhbFN1cHBvc2l0aW9uLCBzcGVjaWZpY1N1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN1cHBvc2l0aW9uc1VuaWZpZWQgPSBzdXBwb3NpdGlvbnNNYXRjaDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBsZXQgZGVkdWN0aW9uO1xuXG4gICAgZGVkdWN0aW9uID0gdGhpcy5nZXREZWR1Y3Rpb24oKTtcblxuICAgIGNvbnN0IGdlbmVyYWxEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247IC8vL1xuXG4gICAgZGVkdWN0aW9uID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldERlZHVjdGlvbigpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVkID0gdGhpcy51bmlmeURlZHVjdGlvbihnZW5lcmFsRGVkdWN0aW9uLCBzcGVjaWZpY0RlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllZCkge1xuICAgICAgbGV0IHN1cHBvc2l0aW9ucztcblxuICAgICAgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgLy8vXG5cbiAgICAgIHN1cHBvc2l0aW9ucyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZpZWQgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKGdlbmVyYWxTdXBwb3NpdGlvbnMsIHNwZWNpZmljU3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHN1cHBvc2l0aW9uc1VuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGF4aW9tU3RyaW5nID0gc3RyaW5nLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBjYW5ub3QgYmUgdW5pZmllZCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tIGJlY2F1c2UgdGhlIGxhdHRlciBpcyBzYXRpc2ZpYWJsZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQgPSBzdXBlci51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBmaWxlQ29udGV4dCk7IH1cblxuICBzdGF0aWMgZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgICAgYXhpb20gPSBUb3BMZXZlbEFzc2VydGlvbi5mcm9tTm9kZShBeGlvbSwgbm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiZG9tQXNzaWduZWQiLCJBeGlvbSIsImlzU2F0aXNmaWFibGUiLCJzaWduYXR1cmUiLCJnZXRTaWduYXR1cmUiLCJzYXRpc2ZpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVkIiwiYXhpb20iLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsImZpbGVDb250ZXh0IiwiZ2V0RmlsZUNvbnRleHQiLCJ0cmFjZSIsInNpZ25hdHVyZVZlcmlmaWVkIiwidmVyaWZ5U2lnbmF0dXJlIiwiYWRkQXhpb20iLCJkZWJ1ZyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImNvbnRleHQiLCJtYXRjaFNpZ25hdHVyZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInNpZ25hdHVyZU1hdGNoZXMiLCJzaWduYXR1cmVBIiwic2lnbmF0dXJlQiIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50IiwiZGVkdWN0aW9uIiwiZ2V0RGVkdWN0aW9uIiwic3RhdGVtZW50VW5pZmllZCIsInVuaWZ5RGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvbiIsInNwZWNpZmljRGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllZCIsImdlbmVyYWxEZWR1Y3Rpb25TdHJpbmciLCJzcGVjaWZpY0RlZHVjdGlvblN0cmluZyIsImdldFN0YXRlbWVudCIsInVuaWZ5U3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb24iLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVkIiwiZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nIiwic3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zVW5pZmllZCIsInN1cHBvc2l0aW9uc01hdGNoIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwic3VwcG9zaXRpb25zIiwiZ2V0U3VwcG9zaXRpb25zIiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwic3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkIiwic3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwiZnJvbUpTT04iLCJqc29uIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tQXhpb21Ob2RlIiwiYXhpb21Ob2RlIiwibm9kZSIsImZyb21Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7eUJBVCtCOzREQUVOO3dFQUNNO21CQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFXLDBCQUFDOzthQUFNQztnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7OztZQUMvQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFlBQVksSUFBSSxDQUFD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