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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5jb25zdCB7IG1hdGNoLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQXhpb20gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICB2ZXJpZmllZCA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihnZW5lcmFsRGVkdWN0aW9uLCBzcGVjaWZpY0RlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVkO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb25TdHJpbmcgPSBnZW5lcmFsRGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uU3RyaW5nID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGdlbmVyYWxEZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGRlZHVjdGlvblVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAgLy8vXG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oZ2VuZXJhbFN1cHBvc2l0aW9uLCBzcGVjaWZpY1N1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmcgPSBnZW5lcmFsU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBnZW5lcmFsU3VwcG9zaXRpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN1cHBvc2l0aW9uVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7ICAvLy9cblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbnMoZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZmllZDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2goZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIChnZW5lcmFsU3VwcG9zaXRpb24sIHNwZWNpZmljU3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihnZW5lcmFsU3VwcG9zaXRpb24sIHNwZWNpZmljU3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3VwcG9zaXRpb25zVW5pZmllZCA9IHN1cHBvc2l0aW9uc01hdGNoOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGxldCBkZWR1Y3Rpb247XG5cbiAgICBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpO1xuXG4gICAgY29uc3QgZ2VuZXJhbERlZHVjdGlvbiA9IGRlZHVjdGlvbjsgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0RGVkdWN0aW9uKCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5RGVkdWN0aW9uKGdlbmVyYWxEZWR1Y3Rpb24sIHNwZWNpZmljRGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVkKSB7XG4gICAgICBsZXQgc3VwcG9zaXRpb25zO1xuXG4gICAgICBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zOyAvLy9cblxuICAgICAgc3VwcG9zaXRpb25zID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZmllZCA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gc3VwcG9zaXRpb25zVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkO1xuXG4gICAgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQgPSBzdXBlci51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllZCkge1xuICAgICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNNYXRjaCA9IGJhY2t3YXJkc1NvbWUoc3RlcHNPclN1YnByb29mcywgKHN0ZXBPclN1YnByb29mKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcFN1YnN0ZXAgPSBzdGVwT3JTdWJwcm9vZi5pc1N0ZXAoKTtcblxuICAgICAgICAgIGlmIChzdGVwU3Vic3RlcCkge1xuICAgICAgICAgICAgY29uc3Qgc3RlcCA9IHN0ZXBPclN1YnByb29mLCAgLy8vXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNNYXRjaCA9IHNhdGlzZmllc0Fzc2VydGlvbi5tYXRjaFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllZCA9IHN1YnN0aXR1dGlvbnNNYXRjaDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkF4aW9tXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihBeGlvbSwganNvbiwgZmlsZUNvbnRleHQpOyB9XG5cbiAgc3RhdGljIGZyb21BeGlvbU5vZGUoYXhpb21Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBheGlvbU5vZGUsIC8vL1xuICAgICAgICAgIGF4aW9tID0gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbU5vZGUoQXhpb20sIG5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImJhY2t3YXJkc1NvbWUiLCJkb21Bc3NpZ25lZCIsIkF4aW9tIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJheGlvbSIsImF4aW9tU3RyaW5nIiwiZ2V0U3RyaW5nIiwiZmlsZUNvbnRleHQiLCJnZXRGaWxlQ29udGV4dCIsInRyYWNlIiwiYWRkQXhpb20iLCJkZWJ1ZyIsInVuaWZ5RGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvbiIsInNwZWNpZmljRGVkdWN0aW9uIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZGVkdWN0aW9uVW5pZmllZCIsImNvbnRleHQiLCJnZW5lcmFsRGVkdWN0aW9uU3RyaW5nIiwic3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllZCIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJ1bmlmeVN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnMiLCJzcGVjaWZpY1N1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZpZWQiLCJzdXBwb3NpdGlvbnNNYXRjaCIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsImRlZHVjdGlvbiIsImdldERlZHVjdGlvbiIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllZCIsInNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInN1YnN0aXR1dGlvbnNNYXRjaCIsInN0ZXBPclN1YnByb29mIiwic3RlcFN1YnN0ZXAiLCJpc1N0ZXAiLCJzdGVwIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsImZyb21KU09OIiwianNvbiIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbUF4aW9tTm9kZSIsImF4aW9tTm9kZSIsIm5vZGUiLCJmcm9tTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O3lCQVQrQjt3RUFFQTttQkFFSDt1QkFDb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELElBQVFBLFFBQXlCQyx5QkFBYyxDQUF2Q0QsT0FBT0UsZ0JBQWtCRCx5QkFBYyxDQUFoQ0M7SUFFZixXQUFlQyxJQUFBQSxnQkFBVywwQkFBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDL0JDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyxRQUFRLElBQUksRUFDWkMsY0FB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