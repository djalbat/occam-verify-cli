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
var match = _necessary.arrayUtilities.match;
var firstPrimaryKeywordTerminalNodeQuery = (0, _query.nodeQuery)("/axiom/@primary-keyword[0]");
var _default = (0, _dom.domAssigned)((_Axiom = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Axiom, TopLevelAssertion);
    function Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfying) {
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
        _this.satisfying = satisfying;
        return _this;
    }
    _create_class(Axiom, [
        {
            key: "isSatisfying",
            value: function isSatisfying() {
                return this.satisfying;
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
            key: "unifyStatementAndProofStepSubproofs",
            value: function unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, substitutions, context) {
                var statementAndProofStepSubproofsUnified;
                statementAndProofStepSubproofsUnified = _get(_get_prototype_of(Axiom.prototype), "unifyStatementAndProofStepSubproofs", this).call(this, statement, proofStepSubproofs, substitutions, context);
                // if (statementAndProofStepSubproofsUnified) {
                //   if (this.satisfying) {
                //     debugger
                //   }
                // }
                return statementAndProofStepSubproofsUnified;
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
                var satisfying = this.satisfying, json = {
                    labels: labels,
                    deduction: deduction,
                    suppositions: suppositions,
                    satisfying: satisfying
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), deduction = (0, _json.deductionFromJSON)(json, fileContext), proof = null, satisfying = (0, _json.satisfyingFromJSON)(json, fileContext), string = (0, _topLevelAssertion.stringFromLabelsAndDeduction)(labels, deduction), topLevelAssertion = new Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfying);
                return topLevelAssertion;
            }
        },
        {
            key: "fromAxiomNode",
            value: function fromAxiomNode(axiomNode, fileContext) {
                var node = axiomNode, labels = (0, _topLevelAssertion.labelsFromNode)(node, fileContext), suppositions = (0, _topLevelAssertion.suppositionsFromNode)(node, fileContext), deduction = (0, _topLevelAssertion.deductionFromNode)(node, fileContext), proof = (0, _topLevelAssertion.proofFromNode)(node, fileContext), satisfying = satisfyingFromNode(node, fileContext), string = (0, _topLevelAssertion.stringFromLabelsAndDeduction)(labels, deduction), topLevelAssertion = new Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfying);
                return topLevelAssertion;
            }
        }
    ]);
    return Axiom;
}(_topLevelAssertion.default), _define_property(_Axiom, "name", "Axiom"), _Axiom));
function satisfyingFromNode(node, fileContext) {
    var firstPrimaryKeywordTerminalNode = firstPrimaryKeywordTerminalNodeQuery(node), content = firstPrimaryKeywordTerminalNode.getContent(), contentSatisfying = content === _constants.SATISFYING, satisfying = contentSatisfying; ///
    return satisfying;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vYXhpb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gIGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFNBVElTRllJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzYXRpc2Z5aW5nRnJvbUpTT04sXG4gICAgICAgICBsYWJlbHNUb0xhYmVsc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgcHJvb2ZGcm9tTm9kZSwgbGFiZWxzRnJvbU5vZGUsIGRlZHVjdGlvbkZyb21Ob2RlLCBzdXBwb3NpdGlvbnNGcm9tTm9kZSwgc3RyaW5nRnJvbUxhYmVsc0FuZERlZHVjdGlvbiB9IGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXhpb20vQHByaW1hcnkta2V5d29yZFswXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQXhpb20gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzYXRpc2Z5aW5nKSB7XG4gICAgc3VwZXIoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YpO1xuXG4gICAgdGhpcy5zYXRpc2Z5aW5nID0gc2F0aXNmeWluZztcbiAgfVxuXG4gIGlzU2F0aXNmeWluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zYXRpc2Z5aW5nO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGF4aW9tID0gdGhpcywgLy8vXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSBheGlvbS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKTtcblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIHZlcmlmaWVkID0gc3VwZXIudmVyaWZ5KCk7XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGF4aW9tID0gdGhpczsgLy8vXG5cbiAgICAgIGZpbGVDb250ZXh0LmFkZEF4aW9tKGF4aW9tKTtcblxuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGdlbmVyYWxEZWR1Y3Rpb24sIHNwZWNpZmljRGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZWQ7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbERlZHVjdGlvblN0cmluZyA9IGdlbmVyYWxEZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmcgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gZ2VuZXJhbERlZHVjdGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgZGVkdWN0aW9uVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7ICAvLy9cblxuICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihnZW5lcmFsU3VwcG9zaXRpb24sIHNwZWNpZmljU3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVkO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyA9IGdlbmVyYWxTdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGdlbmVyYWxTdXBwb3NpdGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgIC8vL1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhnZW5lcmFsU3VwcG9zaXRpb25zLCBzcGVjaWZpY1N1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBtYXRjaChnZW5lcmFsU3VwcG9zaXRpb25zLCBzcGVjaWZpY1N1cHBvc2l0aW9ucywgKGdlbmVyYWxTdXBwb3NpdGlvbiwgc3BlY2lmaWNTdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVkID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKGdlbmVyYWxTdXBwb3NpdGlvbiwgc3BlY2lmaWNTdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdXBwb3NpdGlvbnNVbmlmaWVkID0gc3VwcG9zaXRpb25zTWF0Y2g7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBmaWxlQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgbGV0IGRlZHVjdGlvbjtcblxuICAgIGRlZHVjdGlvbiA9IHRoaXMuZ2V0RGVkdWN0aW9uKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAvLy9cblxuICAgIGRlZHVjdGlvbiA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXREZWR1Y3Rpb24oKTtcblxuICAgIGNvbnN0IHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uVW5pZmllZCA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZ2VuZXJhbERlZHVjdGlvbiwgc3BlY2lmaWNEZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZWQpIHtcbiAgICAgIGxldCBzdXBwb3NpdGlvbnM7XG5cbiAgICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7IC8vL1xuXG4gICAgICBzdXBwb3NpdGlvbnMgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmaWVkID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhnZW5lcmFsU3VwcG9zaXRpb25zLCBzcGVjaWZpY1N1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVVuaWZpZWQgPSBzdXBwb3NpdGlvbnNVbmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAoYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzKHN0YXRlbWVudCwgcHJvb2ZTdGVwU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mc1VuaWZpZWQ7XG5cbiAgICBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkID0gc3VwZXIudW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnMoc3RhdGVtZW50LCBwcm9vZlN0ZXBTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgLy8gaWYgKHN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mc1VuaWZpZWQpIHtcbiAgICAvLyAgIGlmICh0aGlzLnNhdGlzZnlpbmcpIHtcbiAgICAvLyAgICAgZGVidWdnZXJcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBeGlvbVwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgZGVkdWN0aW9uID0gdGhpcy5nZXREZWR1Y3Rpb24oKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04obGFiZWxzKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKGRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTihzdXBwb3NpdGlvbnMpO1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTjsgIC8vL1xuICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT047ICAvLy9cbiAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OOyAgLy8vXG5cbiAgICBjb25zdCBzYXRpc2Z5aW5nID0gdGhpcy5zYXRpc2Z5aW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzYXRpc2Z5aW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHNhdGlzZnlpbmcgPSBzYXRpc2Z5aW5nRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24obGFiZWxzLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IEF4aW9tKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzYXRpc2Z5aW5nKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQXhpb21Ob2RlKGF4aW9tTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gYXhpb21Ob2RlLCAvLy9cbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IHByb29mRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHNhdGlzZnlpbmcgPSBzYXRpc2Z5aW5nRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24obGFiZWxzLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IEF4aW9tKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzYXRpc2Z5aW5nKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHNhdGlzZnlpbmdGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBmaXJzdFByaW1hcnlLZXl3b3JkVGVybWluYWxOb2RlID0gZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICBjb250ZW50ID0gZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGNvbnRlbnRTYXRpc2Z5aW5nID0gKGNvbnRlbnQgPT09IFNBVElTRllJTkcpLFxuICAgICAgICBzYXRpc2Z5aW5nID0gY29udGVudFNhdGlzZnlpbmc7IC8vL1xuXG4gIHJldHVybiBzYXRpc2Z5aW5nO1xufVxuXG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImZpcnN0UHJpbWFyeUtleXdvcmRUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQXhpb20iLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2F0aXNmeWluZyIsImlzU2F0aXNmeWluZyIsInZlcmlmeSIsInZlcmlmaWVkIiwiYXhpb20iLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsImdldEZpbGVDb250ZXh0IiwidHJhY2UiLCJhZGRBeGlvbSIsImRlYnVnIiwidW5pZnlEZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJkZWR1Y3Rpb25VbmlmaWVkIiwiY29udGV4dCIsImdlbmVyYWxEZWR1Y3Rpb25TdHJpbmciLCJzcGVjaWZpY0RlZHVjdGlvblN0cmluZyIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb24iLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVkIiwiZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nIiwic3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zVW5pZmllZCIsInN1cHBvc2l0aW9uc01hdGNoIiwidW5pZnlBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVVbmlmaWVkIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwiZ2V0RGVkdWN0aW9uIiwiZ2V0U3VwcG9zaXRpb25zIiwidW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnMiLCJwcm9vZlN0ZXBTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkIiwidG9KU09OIiwiZ2V0TGFiZWxzIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwibGFiZWxzRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwic2F0aXNmeWluZ0Zyb21KU09OIiwic3RyaW5nRnJvbUxhYmVsc0FuZERlZHVjdGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbUF4aW9tTm9kZSIsImF4aW9tTm9kZSIsIm5vZGUiLCJsYWJlbHNGcm9tTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21Ob2RlIiwiZGVkdWN0aW9uRnJvbU5vZGUiLCJwcm9vZkZyb21Ob2RlIiwic2F0aXNmeWluZ0Zyb21Ob2RlIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJuYW1lIiwiZmlyc3RQcmltYXJ5S2V5d29yZFRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFNhdGlzZnlpbmciLCJTQVRJU0ZZSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzQkE7OztlQUFBOzs7eUJBcEIrQjt5RUFFQTtxQkFFTDt5QkFDQzttQkFDQztvQkFPbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRy9DLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsdUNBQXVDQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXZELFdBQWVDLElBQUFBLGdCQUFXLDBCQUFDOzthQUFNQyxNQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsVUFBVTtnQ0FEcERQOztnQkFFN0Isa0JBRjZCQTtZQUV2QkM7WUFBYUM7WUFBUUM7WUFBUUM7WUFBY0M7WUFBV0M7O1FBRTVELE1BQUtDLFVBQVUsR0FBR0E7Ozs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsUUFBUSxJQUFJLEVBQ1pDLGNBQWNELE1BQU1FLFNBQVMsSUFDN0JaLGNBQWMsSUFBSSxDQUFDYSxjQUFjO2dCQUV2Q2IsWUFBWWMsS0FBSyxDQUFDLEFBQUMsa0JBQTZCLE9BQVpILGFBQVk7Z0JBRWhERixXQUFXLHVCQXBCa0JWLGtCQW9CWlMsVUFBTixJQUFLO2dCQUVoQixJQUFJQyxVQUFVO29CQUNaLElBQU1DLFNBQVEsSUFBSSxFQUFFLEdBQUc7b0JBRXZCVixZQUFZZSxR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