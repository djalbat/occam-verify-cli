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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4uL3N1YnN0aXR1dGlvbnNcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIEF4aW9tIGV4dGVuZHMgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllZCA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkID0gc3VwZXIudmVyaWZ5KCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlTaWduYXR1cmUoKSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVkID0gdHJ1ZTtcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVkID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZWQ7XG4gIH1cblxuICBtYXRjaFNpZ25hdHVyZShzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlQSA9IHNpZ25hdHVyZTsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKClcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlQiA9IHNpZ25hdHVyZTsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZU1hdGNoZXMgPSBzaWduYXR1cmVBLm1hdGNoKHNpZ25hdHVyZUIsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgZGVkdWN0aW9uID0gdGhpcy5nZXREZWR1Y3Rpb24oKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZGVkdWN0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGdlbmVyYWxEZWR1Y3Rpb24sIHNwZWNpZmljRGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZWQ7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbERlZHVjdGlvblN0cmluZyA9IGdlbmVyYWxEZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmcgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZ2VuZXJhbERlZHVjdGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgZGVkdWN0aW9uVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7ICAvLy9cblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihnZW5lcmFsU3VwcG9zaXRpb24sIHNwZWNpZmljU3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVkO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyA9IGdlbmVyYWxTdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGdlbmVyYWxTdXBwb3NpdGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgIC8vL1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhnZW5lcmFsU3VwcG9zaXRpb25zLCBzcGVjaWZpY1N1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBtYXRjaChnZW5lcmFsU3VwcG9zaXRpb25zLCBzcGVjaWZpY1N1cHBvc2l0aW9ucywgKGdlbmVyYWxTdXBwb3NpdGlvbiwgc3BlY2lmaWNTdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKGdlbmVyYWxTdXBwb3NpdGlvbiwgc3BlY2lmaWNTdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdXBwb3NpdGlvbnNVbmlmaWVkID0gc3VwcG9zaXRpb25zTWF0Y2g7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgbGV0IGRlZHVjdGlvbjtcblxuICAgIGRlZHVjdGlvbiA9IHRoaXMuZ2V0RGVkdWN0aW9uKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAvLy9cblxuICAgIGRlZHVjdGlvbiA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXREZWR1Y3Rpb24oKTtcblxuICAgIGNvbnN0IHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZ2VuZXJhbERlZHVjdGlvbiwgc3BlY2lmaWNEZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZWQpIHtcbiAgICAgIGxldCBzdXBwb3NpdGlvbnM7XG5cbiAgICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7IC8vL1xuXG4gICAgICBzdXBwb3NpdGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmaWVkID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhnZW5lcmFsU3VwcG9zaXRpb25zLCBzcGVjaWZpY1N1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSBzdXBwb3NpdGlvbnNVbmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBheGlvbVN0cmluZyA9IHN0cmluZywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgY2Fubm90IGJlIHVuaWZpZWQgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSBiZWNhdXNlIHRoZSBsYXR0ZXIgaXMgc2F0aXNmaWFibGUuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkID0gc3VwZXIudW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkF4aW9tXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihBeGlvbSwganNvbiwgZmlsZUNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBheGlvbU5vZGUsIC8vL1xuICAgICAgICAgIGF4aW9tID0gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoQXhpb20sIG5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImRvbUFzc2lnbmVkIiwiQXhpb20iLCJpc1NhdGlzZmlhYmxlIiwic2lnbmF0dXJlIiwiZ2V0U2lnbmF0dXJlIiwic2F0aXNmaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImF4aW9tIiwiYXhpb21TdHJpbmciLCJnZXRTdHJpbmciLCJmaWxlQ29udGV4dCIsImdldEZpbGVDb250ZXh0IiwidHJhY2UiLCJzaWduYXR1cmVWZXJpZmllZCIsInZlcmlmeVNpZ25hdHVyZSIsImFkZEF4aW9tIiwiZGVidWciLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJjb250ZXh0IiwibWF0Y2hTaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzaWduYXR1cmVNYXRjaGVzIiwic2lnbmF0dXJlQSIsInNpZ25hdHVyZUIiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsImRlZHVjdGlvbiIsImdldERlZHVjdGlvbiIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeURlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb24iLCJzcGVjaWZpY0RlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZWQiLCJnZW5lcmFsRGVkdWN0aW9uU3RyaW5nIiwic3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ1bmlmeVN1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllZCIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJ1bmlmeVN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnMiLCJzcGVjaWZpY1N1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZpZWQiLCJzdXBwb3NpdGlvbnNNYXRjaCIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllZCIsInN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsImZyb21KU09OIiwianNvbiIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbUF4aW9tTm9kZSIsImF4aW9tTm9kZSIsIm5vZGUiLCJmcm9tTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3lCQVYrQjs0REFFTjt3RUFDTTttQkFFSDtvRUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBVywwQkFBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7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