"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaLemmaMetatheorem;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _axiomLemmaTheoremConjecture = require("./axiomLemmaTheoremConjecture");
var _json = require("../utilities/json");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var MetaLemmaMetatheorem = /*#__PURE__*/ function() {
    function MetaLemmaMetatheorem(context, string, node, label, suppositions, deduction, proof, substitutions) {
        _class_call_check(this, MetaLemmaMetatheorem);
        this.context = context;
        this.string = string;
        this.node = node;
        this.label = label;
        this.suppositions = suppositions;
        this.deduction = deduction;
        this.proof = proof;
        this.substitutions = substitutions;
    }
    _create_class(MetaLemmaMetatheorem, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getLabel",
            value: function getLabel() {
                return this.label;
            }
        },
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getDeduction",
            value: function getDeduction() {
                return this.deduction;
            }
        },
        {
            key: "getProof",
            value: function getProof() {
                return this.proof;
            }
        },
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.deduction.getStatement();
            }
        },
        {
            key: "matchReference",
            value: function matchReference(reference) {
                var label = this.getLabel(), referenceMatches = label.matchReference(reference);
                return referenceMatches;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var labelVerifies = this.verifyLabel();
                if (labelVerifies) {
                    var localContext = _local.default.fromNothing(this.context), context = localContext, suppositionsVerify = this.verifySuppositions(context);
                    if (suppositionsVerify) {
                        var deductionVerifies = this.verifyDeduction(context);
                        if (deductionVerifies) {
                            var proofVerifies = this.verifyProof(context);
                            if (proofVerifies) {
                                verifies = true;
                            }
                        }
                    }
                }
                return verifies;
            }
        },
        {
            key: "verifyLabel",
            value: function verifyLabel() {
                var nameOnly = false, labelVerifies = this.label.verify(nameOnly);
                return labelVerifies;
            }
        },
        {
            key: "verifySuppositions",
            value: function verifySuppositions(context) {
                var _this = this;
                var suppositionsVerify = this.suppositions.every(function(supposition) {
                    var suppositionVerifies = _this.verifySupposition(supposition, context);
                    if (suppositionVerifies) {
                        return true;
                    }
                });
                return suppositionsVerify;
            }
        },
        {
            key: "verifySupposition",
            value: function verifySupposition(supposition, context) {
                var suppositionVerifies = supposition.verify(context);
                return suppositionVerifies;
            }
        },
        {
            key: "verifyDeduction",
            value: function verifyDeduction(context) {
                var deductionVerifies = this.deduction.verify(context);
                return deductionVerifies;
            }
        },
        {
            key: "verifyProof",
            value: function verifyProof(context) {
                var proofVerifies;
                if (this.proof === null) {
                    proofVerifies = true;
                } else {
                    proofVerifies = this.proof.verify(this.substitutions, this.deduction, context);
                }
                return proofVerifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelJSON = (0, _json.labelToLabelJSON)(this.label), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(this.substitutions), label = labelJSON, deduction = deductionJSON, suppositions = suppositionsJSON, substitutions = substitutionsJSON, json = {
                    label: label,
                    deduction: deduction,
                    suppositions: suppositions,
                    substitutions: substitutions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, context) {
                var label = (0, _json.labelFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), substitutions = (0, _json.substitutionsFromJSON)(json, context), node = null, proof = null, string = stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction), metaLemmaMetatheorem = new Class(context, string, node, label, suppositions, deduction, proof, substitutions);
                return metaLemmaMetatheorem;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, context) {
                var Substitutions = _elements.default.Substitutions, topLevelAssertionNode = node, proofNode = topLevelAssertionNode.getProofNode(), labelNode = topLevelAssertionNode.getLabelNode(), deductionNode = topLevelAssertionNode.getDeductionNode(), suppositionNodes = topLevelAssertionNode.getSuppositionNodes(), proof = (0, _axiomLemmaTheoremConjecture.proofFromProofNode)(proofNode, context), label = labelFromLabelNode(labelNode, context), deduction = (0, _axiomLemmaTheoremConjecture.deductionFromDeductionNode)(deductionNode, context), suppositions = (0, _axiomLemmaTheoremConjecture.suppositionsFromSuppositionNodes)(suppositionNodes, context), substitutions = Substitutions.fromNothing(), string = stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction), metaLemmaMetatheorem = new Class(context, string, node, label, suppositions, deduction, proof, substitutions);
                return metaLemmaMetatheorem;
            }
        }
    ]);
    return MetaLemmaMetatheorem;
}();
function labelFromLabelNode(labelNode, context) {
    var label = null;
    var Label = _elements.default.Label;
    if (labelNode !== null) {
        label = Label.fromLabelNode(labelNode, context);
    }
    return label;
}
function labelStringFromLabel(label) {
    var labelsString = label !== null ? label.getString() : null;
    return labelsString;
}
function suppositionsStringFromSuppositions(suppositions) {
    var suppositionsString = suppositions.reduce(function(suppositionsString, supposition) {
        var suppositionString = supposition.getString();
        suppositionsString = suppositionsString !== null ? "".concat(suppositionsString, ", ").concat(suppositionString) : suppositionString; ///
        return suppositionsString;
    }, null);
    return suppositionsString;
}
function stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction) {
    var suppositionsString = suppositionsStringFromSuppositions(suppositions), deductionString = deduction.getString(), labelString = labelStringFromLabel(label), string = labelString === null ? deductionString : "".concat(labelString, " :: [").concat(suppositionsString, "] ... ").concat(deductionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21ldGFMZW1tYU1ldGF0aGVvcmVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IHByb29mRnJvbVByb29mTm9kZSwgZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUsIHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzIH0gZnJvbSBcIi4vYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlXCI7XG5pbXBvcnQgeyBsYWJlbEZyb21KU09OLFxuICAgICAgICAgbGFiZWxUb0xhYmVsSlNPTixcbiAgICAgICAgIGRlZHVjdGlvbkZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhTGVtbWFNZXRhdGhlb3JlbSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZHVjdGlvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7IH1cblxuICBtYXRjaFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKSxcbiAgICAgICAgICByZWZlcmVuY2VNYXRjaGVzID0gbGFiZWwubWF0Y2hSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxWZXJpZmllcyA9IHRoaXMudmVyaWZ5TGFiZWwoKTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbU5vdGhpbmcodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeURlZHVjdGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWwoKSB7XG4gICAgY29uc3QgbmFtZU9ubHkgPSBmYWxzZSxcbiAgICAgICAgICBsYWJlbFZlcmlmaWVzID0gdGhpcy5sYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgcmV0dXJuIGxhYmVsVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeURlZHVjdGlvbihjb250ZXh0KSB7XG4gICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeSh0aGlzLnN1YnN0aXR1dGlvbnMsIHRoaXMuZGVkdWN0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbFRvTGFiZWxKU09OKHRoaXMubGFiZWwpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVsSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxBU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW0gPSBuZXcgQ2xhc3MoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFNZXRhdGhlb3JlbTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcHJvb2ZOb2RlID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldFByb29mTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRMYWJlbE5vZGUoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25Ob2RlID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldERlZHVjdGlvbk5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxBU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgbWV0YUxlbW1hTWV0YXRoZW9yZW0gPSBuZXcgQ2xhc3MoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFNZXRhdGhlb3JlbTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBsYWJlbCA9IG51bGw7XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHM7XG5cbiAgaWYgKGxhYmVsTm9kZSAhPT0gbnVsbCkge1xuICAgIGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5mdW5jdGlvbiBsYWJlbFN0cmluZ0Zyb21MYWJlbChsYWJlbCkge1xuICBjb25zdCBsYWJlbHNTdHJpbmcgPSAobGFiZWwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuZ2V0U3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIGxhYmVsc1N0cmluZztcbn1cblxuZnVuY3Rpb24gc3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zU3RyaW5nID0gc3VwcG9zaXRpb25zLnJlZHVjZSgoc3VwcG9zaXRpb25zU3RyaW5nLCBzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdXBwb3NpdGlvbnNTdHJpbmcgPSAoc3VwcG9zaXRpb25zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1cHBvc2l0aW9uc1N0cmluZ30sICR7c3VwcG9zaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbEFTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc1N0cmluZyA9IHN1cHBvc2l0aW9uc1N0cmluZ0Zyb21TdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zKSxcbiAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsU3RyaW5nRnJvbUxhYmVsKGxhYmVsKSxcbiAgICAgICAgc3RyaW5nID0gKGxhYmVsU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgYCR7bGFiZWxTdHJpbmd9IDo6IFske3N1cHBvc2l0aW9uc1N0cmluZ31dIC4uLiAke2RlZHVjdGlvblN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiTWV0YUxlbW1hTWV0YXRoZW9yZW0iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxhYmVsIiwic3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uIiwicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRMYWJlbCIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFN0YXRlbWVudCIsIm1hdGNoUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTWF0Y2hlcyIsInZlcmlmeSIsInZlcmlmaWVzIiwibGFiZWxWZXJpZmllcyIsInZlcmlmeUxhYmVsIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInZlcmlmeURlZHVjdGlvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsIm5hbWVPbmx5IiwiZXZlcnkiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInRvSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3RyaW5nRnJvbUxhYmVsQVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZnJvbU5vZGUiLCJTdWJzdGl0dXRpb25zIiwiZWxlbWVudHMiLCJ0b3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZk5vZGUiLCJnZXRQcm9vZk5vZGUiLCJsYWJlbE5vZGUiLCJnZXRMYWJlbE5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwibGFiZWxGcm9tTGFiZWxOb2RlIiwiZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyIsIkxhYmVsIiwiZnJvbUxhYmVsTm9kZSIsImxhYmVsU3RyaW5nRnJvbUxhYmVsIiwibGFiZWxzU3RyaW5nIiwic3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1N0cmluZyIsInJlZHVjZSIsInN1cHBvc2l0aW9uU3RyaW5nIiwiZGVkdWN0aW9uU3RyaW5nIiwibGFiZWxTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7OytEQWJBOzREQUNJOzJDQUV3RTtvQkFRaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSxxQ0FBTjthQUFNQSxxQkFDUEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxhQUFhO2dDQURwRVI7UUFFakIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2tCQVRKUjs7WUFZbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1IsT0FBTztZQUNyQjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1AsSUFBSTtZQUNsQjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1QsTUFBTTtZQUNwQjs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1IsS0FBSztZQUNuQjs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1IsWUFBWTtZ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