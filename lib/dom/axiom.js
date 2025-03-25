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
var _query = require("../utilities/query");
var _constants = require("../constants");
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
var firstPrimaryKeywordTerminalNodeQuery = (0, _query.nodeQuery)("/axiom/@primary-keyword[0]");
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
                var node = axiomNode, labels = (0, _topLevelAssertion.labelsFromNode)(node, fileContext), suppositions = (0, _topLevelAssertion.suppositionsFromNode)(node, fileContext), deduction = (0, _topLevelAssertion.deductionFromNode)(node, fileContext), proof = (0, _topLevelAssertion.proofFromNode)(node, fileContext), satisfiable = satisfiableFromNode(node, fileContext), string = (0, _topLevelAssertion.stringFromLabelsAndDeduction)(labels, deduction), topLevelAssertion = new Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfiable);
                return topLevelAssertion;
            }
        }
    ]);
    return Axiom;
}(_topLevelAssertion.default), _define_property(_Axiom, "name", "Axiom"), _Axiom));
function satisfiableFromNode(node, fileContext) {
    var firstPrimaryKeywordTerminalNode = firstPrimaryKeywordTerminalNodeQuery(node), content = firstPrimaryKeywordTerminalNode.getContent(), contentSatisfiable = content === _constants.SATISFIABLE, satisfiable = contentSatisfiable; ///
    return satisfiable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFNBVElTRklBQkxFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTixcbiAgICAgICAgIGRlZHVjdGlvbkZyb21KU09OLFxuICAgICAgICAgc2F0aXNmaWFibGVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBwcm9vZkZyb21Ob2RlLCBsYWJlbHNGcm9tTm9kZSwgZGVkdWN0aW9uRnJvbU5vZGUsIHN1cHBvc2l0aW9uc0Zyb21Ob2RlLCBzdHJpbmdGcm9tTGFiZWxzQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuY29uc3QgeyBtYXRjaCwgYmFja3dhcmRzU29tZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IGZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9heGlvbS9AcHJpbWFyeS1rZXl3b3JkWzBdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNhdGlzZmlhYmxlKSB7XG4gICAgc3VwZXIoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YpO1xuXG4gICAgdGhpcy5zYXRpc2ZpYWJsZSA9IHNhdGlzZmlhYmxlO1xuICB9XG5cbiAgaXNTYXRpc2ZpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBheGlvbSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICB2ZXJpZmllZCA9IHN1cGVyLnZlcmlmeSgpO1xuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihnZW5lcmFsRGVkdWN0aW9uLCBzcGVjaWZpY0RlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVkO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb25TdHJpbmcgPSBnZW5lcmFsRGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uU3RyaW5nID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGdlbmVyYWxEZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGRlZHVjdGlvblVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAgLy8vXG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oZ2VuZXJhbFN1cHBvc2l0aW9uLCBzcGVjaWZpY1N1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllZDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmcgPSBnZW5lcmFsU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBnZW5lcmFsU3VwcG9zaXRpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN1cHBvc2l0aW9uVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7ICAvLy9cblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbnMoZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZmllZDtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc01hdGNoID0gbWF0Y2goZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIChnZW5lcmFsU3VwcG9zaXRpb24sIHNwZWNpZmljU3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihnZW5lcmFsU3VwcG9zaXRpb24sIHNwZWNpZmljU3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3VwcG9zaXRpb25zVW5pZmllZCA9IHN1cHBvc2l0aW9uc01hdGNoOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGxldCBkZWR1Y3Rpb247XG5cbiAgICBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpO1xuXG4gICAgY29uc3QgZ2VuZXJhbERlZHVjdGlvbiA9IGRlZHVjdGlvbjsgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0RGVkdWN0aW9uKCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvblVuaWZpZWQgPSB0aGlzLnVuaWZ5RGVkdWN0aW9uKGdlbmVyYWxEZWR1Y3Rpb24sIHNwZWNpZmljRGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVkKSB7XG4gICAgICBsZXQgc3VwcG9zaXRpb25zO1xuXG4gICAgICBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zOyAvLy9cblxuICAgICAgc3VwcG9zaXRpb25zID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZmllZCA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoZ2VuZXJhbFN1cHBvc2l0aW9ucywgc3BlY2lmaWNTdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkID0gc3VwcG9zaXRpb25zVW5pZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkO1xuXG4gICAgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQgPSBzdXBlci51bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllZCkge1xuICAgICAgaWYgKHRoaXMuc2F0aXNmaWFibGUpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc01hdGNoID0gYmFja3dhcmRzU29tZShzdGVwc09yU3VicHJvb2ZzLCAoc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGVwU3Vic3RlcCA9IHN0ZXBPclN1YnByb29mLmlzU3RlcCgpO1xuXG4gICAgICAgICAgaWYgKHN0ZXBTdWJzdGVwKSB7XG4gICAgICAgICAgICBjb25zdCBzdGVwID0gc3RlcE9yU3VicHJvb2YsICAvLy9cbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc01hdGNoID0gc2F0aXNmaWVzQXNzZXJ0aW9uLm1hdGNoU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkID0gc3Vic3RpdHV0aW9uc01hdGNoOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgIGRlZHVjdGlvbiA9IHRoaXMuZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKGxhYmVscyksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTihkZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04oc3VwcG9zaXRpb25zKTtcblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT047ICAvLy9cbiAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OOyAgLy8vXG4gICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLnNhdGlzZmlhYmxlLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzYXRpc2ZpYWJsZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBeGlvbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IHNhdGlzZmlhYmxlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24obGFiZWxzLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IEF4aW9tKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzYXRpc2ZpYWJsZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUF4aW9tTm9kZShheGlvbU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGF4aW9tTm9kZSwgLy8vXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IHNhdGlzZmlhYmxlRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24obGFiZWxzLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IEF4aW9tKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzYXRpc2ZpYWJsZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzYXRpc2ZpYWJsZUZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IGZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGUgPSBmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkobm9kZSksXG4gICAgICAgIGNvbnRlbnQgPSBmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgY29udGVudFNhdGlzZmlhYmxlID0gKGNvbnRlbnQgPT09IFNBVElTRklBQkxFKSxcbiAgICAgICAgc2F0aXNmaWFibGUgPSBjb250ZW50U2F0aXNmaWFibGU7IC8vL1xuXG4gIHJldHVybiBzYXRpc2ZpYWJsZTtcbn1cblxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwiZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJBeGlvbSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uIiwicHJvb2YiLCJzYXRpc2ZpYWJsZSIsImlzU2F0aXNmaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImF4aW9tIiwiYXhpb21TdHJpbmciLCJnZXRTdHJpbmciLCJnZXRGaWxlQ29udGV4dCIsInRyYWNlIiwiYWRkQXhpb20iLCJkZWJ1ZyIsInVuaWZ5RGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvbiIsInNwZWNpZmljRGVkdWN0aW9uIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZGVkdWN0aW9uVW5pZmllZCIsImNvbnRleHQiLCJnZW5lcmFsRGVkdWN0aW9uU3RyaW5nIiwic3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllZCIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJ1bmlmeVN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnMiLCJzcGVjaWZpY1N1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZpZWQiLCJzdXBwb3NpdGlvbnNNYXRjaCIsInVuaWZ5QXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsImdldERlZHVjdGlvbiIsImdldFN1cHBvc2l0aW9ucyIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllZCIsInN1YnN0aXR1dGlvbnNNYXRjaCIsInN0ZXBPclN1YnByb29mIiwic3RlcFN1YnN0ZXAiLCJpc1N0ZXAiLCJzdGVwIiwic2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsIm1hdGNoU3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsImdldExhYmVscyIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxhYmVsc0Zyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInNhdGlzZmlhYmxlRnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzQW5kRGVkdWN0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tQXhpb21Ob2RlIiwiYXhpb21Ob2RlIiwibm9kZSIsImxhYmVsc0Zyb21Ob2RlIiwic3VwcG9zaXRpb25zRnJvbU5vZGUiLCJkZWR1Y3Rpb25Gcm9tTm9kZSIsInByb29mRnJvbU5vZGUiLCJzYXRpc2ZpYWJsZUZyb21Ob2RlIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJuYW1lIiwiZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFNhdGlzZmlhYmxlIiwiU0FUSVNGSUFCTEUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVCQTs7O2VBQUE7Ozt5QkFyQitCO3lFQUVBO3FCQUVMO3lCQUNFO21CQUNBO29CQU9tQjt1QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHaEQsSUFBUUEsUUFBeUJDLHlCQUFjLENBQXZDRCxPQUFPRSxnQkFBa0JELHlCQUFjLENBQWhDQztBQUVmLElBQU1DLHVDQUF1Q0MsSUFBQUEsZ0JBQVMsRUFBQztJQUV2RCxXQUFlQyxJQUFBQSxnQkFBVywwQkFBQzs7YUFBTUMsTUFDbkJDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLFdBQVc7Z0NBRHJEUDs7Z0JBRTdCLGtCQUY2QkE7WUFFdkJDO1lBQWFDO1lBQVFDO1lBQVFDO1lBQWNDO1lBQVdDOztRQUU1RCxNQUFLQyxXQUFXLEdBQUdBOzs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxXQUFXO1lBQ3pCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLFFBQVEsSUFBSSxFQUNaQyxjQUFjRCxNQUFNRSxTQUFTLElBQzdCWixjQUFjLElBQUksQ0FBQ2EsY0FBYztnQkFFdkNiLFlBQVljLEtBQUssQ0FBQyxBQUFDLGtCQUE2QixPQUFaSCxhQUFZO2dCQUVoREYsV0FBVyx1QkFwQmtCVixr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