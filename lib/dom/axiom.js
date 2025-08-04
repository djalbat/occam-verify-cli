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
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("./topLevelAssertion"));
var _dom = require("../dom");
var _context = require("../utilities/context");
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
var match = _necessary.arrayUtilities.match, backwardsSome = _necessary.arrayUtilities.backwardsSome;
var _default = (0, _dom.domAssigned)((_Axiom = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Axiom, TopLevelAssertion);
    function Axiom() {
        _class_call_check(this, Axiom);
        return _call_super(this, Axiom, arguments);
    }
    _create_class(Axiom, [
        {
            key: "verify",
            value: function verify() {
                var verified;
                var axiom = this, axiomString = axiom.getString(), fileContext = this.getFileContext();
                fileContext.trace("Verifying the '".concat(axiomString, "' axiom..."));
                verified = _get(_get_prototype_of(Axiom.prototype), "verify", this).call(this);
                if (verified) {
                    var axiom1 = this; ///
                    fileContext.addAxiom(axiom1);
                    fileContext.debug("...verified the '".concat(axiomString, "' axiom."));
                }
                return verified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var deduction = this.getDeduction(), generalContext = context, specificContext = context, statementUnified = deduction.unifyStatement(statement, substitutions, generalContext, specificContext);
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
                var statementAndStepsOrSubproofsUnified;
                statementAndStepsOrSubproofsUnified = _get(_get_prototype_of(Axiom.prototype), "unifyStatementAndStepsOrSubproofs", this).call(this, statement, stepsOrSubproofs, substitutions, context);
                if (statementAndStepsOrSubproofsUnified) {
                    var satisfiable = this.isSatisfiable();
                    if (satisfiable) {
                        var substitutionsMatch = backwardsSome(stepsOrSubproofs, function(stepOrSubproof) {
                            var stepSubstep = stepOrSubproof.isStep();
                            if (stepSubstep) {
                                var step = stepOrSubproof, _$statement = step.getStatement(), satisfiesAssertion = (0, _context.satisfiesAssertionFromStatement)(_$statement, context);
                                if (satisfiesAssertion !== null) {
                                    var substitutionsMatch = satisfiesAssertion.matchSubstitutions(substitutions, context);
                                    if (substitutionsMatch) {
                                        return true;
                                    }
                                }
                            }
                        });
                        statementAndStepsOrSubproofsUnified = substitutionsMatch; ///
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IG1hdGNoLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQXhpb20gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICB2ZXJpZmllZCA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBkZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZ2VuZXJhbERlZHVjdGlvbiwgc3BlY2lmaWNEZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uU3RyaW5nID0gZ2VuZXJhbERlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvblN0cmluZyA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBnZW5lcmFsRGVkdWN0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBkZWR1Y3Rpb25VbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgIC8vL1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKGdlbmVyYWxTdXBwb3NpdGlvbiwgc3BlY2lmaWNTdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZWQ7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gZ2VuZXJhbFN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAgLy8vXG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKGdlbmVyYWxTdXBwb3NpdGlvbnMsIHNwZWNpZmljU3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZpZWQ7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNNYXRjaCA9IG1hdGNoKGdlbmVyYWxTdXBwb3NpdGlvbnMsIHNwZWNpZmljU3VwcG9zaXRpb25zLCAoZ2VuZXJhbFN1cHBvc2l0aW9uLCBzcGVjaWZpY1N1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oZ2VuZXJhbFN1cHBvc2l0aW9uLCBzcGVjaWZpY1N1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHN1cHBvc2l0aW9uc1VuaWZpZWQgPSBzdXBwb3NpdGlvbnNNYXRjaDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZpZWQ7XG4gIH1cblxuICB1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZShheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBsZXQgZGVkdWN0aW9uO1xuXG4gICAgZGVkdWN0aW9uID0gdGhpcy5nZXREZWR1Y3Rpb24oKTtcblxuICAgIGNvbnN0IGdlbmVyYWxEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247IC8vL1xuXG4gICAgZGVkdWN0aW9uID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldERlZHVjdGlvbigpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVkID0gdGhpcy51bmlmeURlZHVjdGlvbihnZW5lcmFsRGVkdWN0aW9uLCBzcGVjaWZpY0RlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllZCkge1xuICAgICAgbGV0IHN1cHBvc2l0aW9ucztcblxuICAgICAgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgLy8vXG5cbiAgICAgIHN1cHBvc2l0aW9ucyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZpZWQgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKGdlbmVyYWxTdXBwb3NpdGlvbnMsIHNwZWNpZmljU3VwcG9zaXRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCA9IHN1cHBvc2l0aW9uc1VuaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllZDtcblxuICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkID0gc3VwZXIudW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQpIHtcbiAgICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zTWF0Y2ggPSBiYWNrd2FyZHNTb21lKHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBTdWJzdGVwID0gc3RlcE9yU3VicHJvb2YuaXNTdGVwKCk7XG5cbiAgICAgICAgICBpZiAoc3RlcFN1YnN0ZXApIHtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXAgPSBzdGVwT3JTdWJwcm9vZiwgIC8vL1xuICAgICAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zTWF0Y2ggPSBzYXRpc2ZpZXNBc3NlcnRpb24ubWF0Y2hTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zTWF0Y2g7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBeGlvbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oQXhpb20sIGpzb24sIGZpbGVDb250ZXh0KTsgfVxuXG4gIHN0YXRpYyBmcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgICBheGlvbSA9IFRvcExldmVsQXNzZXJ0aW9uLmZyb21Ob2RlKEF4aW9tLCBub2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwiZG9tQXNzaWduZWQiLCJBeGlvbSIsInZlcmlmeSIsInZlcmlmaWVkIiwiYXhpb20iLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsImZpbGVDb250ZXh0IiwiZ2V0RmlsZUNvbnRleHQiLCJ0cmFjZSIsImFkZEF4aW9tIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJjb250ZXh0IiwiZGVkdWN0aW9uIiwiZ2V0RGVkdWN0aW9uIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlEZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVkIiwiZ2VuZXJhbERlZHVjdGlvblN0cmluZyIsInNwZWNpZmljRGVkdWN0aW9uU3RyaW5nIiwiZ2V0U3RhdGVtZW50IiwidW5pZnlTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZWQiLCJnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmciLCJzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nIiwidW5pZnlTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zIiwic3BlY2lmaWNTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNVbmlmaWVkIiwic3VwcG9zaXRpb25zTWF0Y2giLCJ1bmlmeUF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmciLCJzdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQiLCJzYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJzdWJzdGl0dXRpb25zTWF0Y2giLCJzdGVwT3JTdWJwcm9vZiIsInN0ZXBTdWJzdGVwIiwiaXNTdGVwIiwic3RlcCIsInNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJtYXRjaFN1YnN0aXR1dGlvbnMiLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsImZyb21BeGlvbU5vZGUiLCJheGlvbU5vZGUiLCJub2RlIiwiZnJvbU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VB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