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
var _topLevelAssertion = /*#__PURE__*/ _interop_require_wildcard(require("./topLevelAssertion"));
var _dom = require("../dom");
var _json = require("../utilities/json");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
    function Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfiable) {
        _class_call_check(this, Axiom);
        var _this;
        _this = _call_super(this, Axiom, [
            fileContext,
            string,
            labels,
            suppositions,
            deduction,
            proof
        ]);
        _this.satisfiable = satisfiable;
        return _this;
    }
    _create_class(Axiom, [
        {
            key: "isSatisfiable",
            value: function isSatisfiable() {
                return this.satisfiable;
            }
        },
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
                    if (this.satisfiable) {
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
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labels = this.getLabels(), deduction = this.getDeduction(), suppositions = this.getSuppositions();
                var labelsJSON = (0, _json.labelsToLabelsJSON)(labels), deductionJSON = (0, _json.deductionToDeductionJSON)(deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(suppositions);
                labels = labelsJSON; ///
                deduction = deductionJSON; ///
                suppositions = suppositionsJSON; ///
                var satisfiable = this.satisfiable, json = {
                    labels: labels,
                    deduction: deduction,
                    suppositions: suppositions,
                    satisfiable: satisfiable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), deduction = (0, _json.deductionFromJSON)(json, fileContext), proof = null, satisfiable = (0, _json.satisfiableFromJSON)(json, fileContext), string = (0, _topLevelAssertion.stringFromLabelsAndDeduction)(labels, deduction), topLevelAssertion = new Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfiable);
                return topLevelAssertion;
            }
        },
        {
            key: "fromAxiomNode",
            value: function fromAxiomNode(axiomNode, fileContext) {
                var node = axiomNode, proof = (0, _topLevelAssertion.proofFromNode)(node, fileContext), labels = (0, _topLevelAssertion.labelsFromNode)(node, fileContext), deduction = (0, _topLevelAssertion.deductionFromNode)(node, fileContext), satisfiable = axiomNode.isSatisfiable(), suppositions = (0, _topLevelAssertion.suppositionsFromNode)(node, fileContext), string = (0, _topLevelAssertion.stringFromLabelsAndDeduction)(labels, deduction), topLevelAssertion = new Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfiable);
                return topLevelAssertion;
            }
        }
    ]);
    return Axiom;
}(_topLevelAssertion.default), _define_property(_Axiom, "name", "Axiom"), _Axiom));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbGFiZWxzRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Gcm9tSlNPTixcbiAgICAgICAgIHNhdGlzZmlhYmxlRnJvbUpTT04sXG4gICAgICAgICBsYWJlbHNUb0xhYmVsc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgc2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgcHJvb2ZGcm9tTm9kZSwgbGFiZWxzRnJvbU5vZGUsIGRlZHVjdGlvbkZyb21Ob2RlLCBzdXBwb3NpdGlvbnNGcm9tTm9kZSwgc3RyaW5nRnJvbUxhYmVsc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmNvbnN0IHsgbWF0Y2gsIGJhY2t3YXJkc1NvbWUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNhdGlzZmlhYmxlKSB7XG4gICAgc3VwZXIoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YpO1xuXG4gICAgdGhpcy5zYXRpc2ZpYWJsZSA9IHNhdGlzZmlhYmxlO1xuICB9XG5cbiAgaXNTYXRpc2ZpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICB2ZXJpZmllZCA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihnZW5lcmFsRGVkdWN0aW9uLCBzcGVjaWZpY0RlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVkO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb25TdHJpbmcgPSBnZW5lcmFsRGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uU3RyaW5nID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGdlbmVyYWxEZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGRlZHVjdGlvblVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAgLy8vXG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oZ2VuZXJhbFN1cHBvc2l0aW9uLCBzcGVjaWZpY1N1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmcgPSBnZW5lcmFsU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBnZW5lcmFsU3VwcG9zaXRpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN1cHBvc2l0aW9uVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7ICAvLy9cblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbnMoZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZmllZDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2goZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIChnZW5lcmFsU3VwcG9zaXRpb24sIHNwZWNpZmljU3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihnZW5lcmFsU3VwcG9zaXRpb24sIHNwZWNpZmljU3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3VwcG9zaXRpb25zVW5pZmllZCA9IHN1cHBvc2l0aW9uc01hdGNoOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGxldCBkZWR1Y3Rpb247XG5cbiAgICBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpO1xuXG4gICAgY29uc3QgZ2VuZXJhbERlZHVjdGlvbiA9IGRlZHVjdGlvbjsgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0RGVkdWN0aW9uKCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5RGVkdWN0aW9uKGdlbmVyYWxEZWR1Y3Rpb24sIHNwZWNpZmljRGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVkKSB7XG4gICAgICBsZXQgc3VwcG9zaXRpb25zO1xuXG4gICAgICBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zOyAvLy9cblxuICAgICAgc3VwcG9zaXRpb25zID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZmllZCA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gc3VwcG9zaXRpb25zVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkO1xuXG4gICAgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQgPSBzdXBlci51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllZCkge1xuICAgICAgaWYgKHRoaXMuc2F0aXNmaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc01hdGNoID0gYmFja3dhcmRzU29tZShzdGVwc09yU3VicHJvb2ZzLCAoc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwU3Vic3RlcCA9IHN0ZXBPclN1YnByb29mLmlzU3RlcCgpO1xuXG4gICAgICAgICAgaWYgKHN0ZXBTdWJzdGVwKSB7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcE9yU3VicHJvb2YsICAvLy9cbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc01hdGNoID0gc2F0aXNmaWVzQXNzZXJ0aW9uLm1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkID0gc3Vic3RpdHV0aW9uc01hdGNoOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgIGRlZHVjdGlvbiA9IHRoaXMuZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscyksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTihkZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKTtcblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT047ICAvLy9cbiAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OOyAgLy8vXG4gICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLnNhdGlzZmlhYmxlLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzYXRpc2ZpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBeGlvbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IHNhdGlzZmlhYmxlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24obGFiZWxzLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IEF4aW9tKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzYXRpc2ZpYWJsZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHNhdGlzZmlhYmxlID0gYXhpb21Ob2RlLmlzU2F0aXNmaWFibGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc0FuZERlZHVjdGlvbihsYWJlbHMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQXhpb20oZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNhdGlzZmlhYmxlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImJhY2t3YXJkc1NvbWUiLCJkb21Bc3NpZ25lZCIsIkF4aW9tIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsInNhdGlzZmlhYmxlIiwiaXNTYXRpc2ZpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVkIiwiYXhpb20iLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsImdldEZpbGVDb250ZXh0IiwidHJhY2UiLCJhZGRBeGlvbSIsImRlYnVnIiwidW5pZnlEZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJkZWR1Y3Rpb25VbmlmaWVkIiwiY29udGV4dCIsImdlbmVyYWxEZWR1Y3Rpb25TdHJpbmciLCJzcGVjaWZpY0RlZHVjdGlvblN0cmluZyIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb24iLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVkIiwiZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nIiwic3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zVW5pZmllZCIsInN1cHBvc2l0aW9uc01hdGNoIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwiZ2V0RGVkdWN0aW9uIiwiZ2V0U3VwcG9zaXRpb25zIiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwic3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkIiwic3Vic3RpdHV0aW9uc01hdGNoIiwic3RlcE9yU3VicHJvb2YiLCJzdGVwU3Vic3RlcCIsImlzU3RlcCIsInN0ZXAiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwibWF0Y2hTdWJzdGl0dXRpb25zIiwidG9KU09OIiwiZ2V0TGFiZWxzIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwibGFiZWxzRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwic2F0aXNmaWFibGVGcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24iLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZyb21BeGlvbU5vZGUiLCJheGlvbU5vZGUiLCJub2RlIiwicHJvb2ZGcm9tTm9kZSIsImxhYmVsc0Zyb21Ob2RlIiwiZGVkdWN0aW9uRnJvbU5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tTm9kZSIsIlRvcExldmVsQXNzZXJ0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUJBOzs7ZUFBQTs7O3lCQWpCK0I7eUVBRUE7bUJBRUg7b0JBT21CO3VCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdoRCxJQUFRQSxRQUF5QkMseUJBQWMsQ0FBdkNELE9BQU9FLGdCQUFrQkQseUJBQWMsQ0FBaENDO0lBRWYsV0FBZUMsSUFBQUEsZ0JBQVcsMEJBQUM7O2FBQU1DLE1BQ25CQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxXQUFXO2dDQURyRFA7O2dCQUU3QixrQkFGNkJBO1lBRXZCQztZQUFhQztZQUFRQztZQUFRQztZQUFjQztZQUFXQzs7UUFFNUQsTUFBS0MsV0FBVyxHQUFHQTs7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsV0FBVztZQUN6Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJ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