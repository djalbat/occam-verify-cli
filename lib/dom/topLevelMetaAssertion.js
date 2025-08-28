"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelMetaAssertion;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _topLevelAssertion = require("./topLevelAssertion");
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
var TopLevelMetaAssertion = /*#__PURE__*/ function() {
    function TopLevelMetaAssertion(context, string, label, suppositions, deduction, proof, substitutions) {
        _class_call_check(this, TopLevelMetaAssertion);
        this.context = context;
        this.string = string;
        this.label = label;
        this.suppositions = suppositions;
        this.deduction = deduction;
        this.proof = proof;
        this.substitutions = substitutions;
    }
    _create_class(TopLevelMetaAssertion, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
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
                    var localContext = _local.default.fromContext(this.context), context = localContext, suppositionsVerify = this.verifySuppositions(context);
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
                var label = (0, _json.labelFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), substitutions = (0, _json.substitutionsFromJSON)(json, context), proof = null, string = stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction), topLevelMetaAssertion = new Class(context, string, label, suppositions, deduction, proof, substitutions);
                return topLevelMetaAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, context) {
                var topLevelAssertionNode = node, proofNode = topLevelAssertionNode.getProofNode(), labelNode = topLevelAssertionNode.getLabelNode(), deductionNode = topLevelAssertionNode.getDeductionNode(), suppositionNodes = topLevelAssertionNode.getSuppositionNodes(), proof = (0, _topLevelAssertion.proofFromProofNode)(proofNode, context), label = labelFromLabelNode(labelNode, context), deduction = (0, _topLevelAssertion.deductionFromDeductionNode)(deductionNode, context), suppositions = (0, _topLevelAssertion.suppositionsFromSuppositionNodes)(suppositionNodes, context), substitutions = _substitutions.default.fromNothing(), string = stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction), topLevelMetaAssertion = new Class(context, string, label, suppositions, deduction, proof, substitutions);
                return topLevelMetaAssertion;
            }
        }
    ]);
    return TopLevelMetaAssertion;
}();
function labelFromLabelNode(labelNode, context) {
    var label = null;
    var Label = _dom.default.Label;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IHByb29mRnJvbVByb29mTm9kZSwgZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUsIHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzIH0gZnJvbSBcIi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcbmltcG9ydCB7IGxhYmVsRnJvbUpTT04sXG4gICAgICAgICBsYWJlbFRvTGFiZWxKU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsTWV0YUFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldERlZHVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWR1Y3Rpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpOyB9XG5cbiAgbWF0Y2hSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldExhYmVsKCksXG4gICAgICAgICAgcmVmZXJlbmNlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUxhYmVsKCk7XG5cbiAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0KHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVsKCkge1xuICAgIGNvbnN0IG5hbWVPbmx5ID0gZmFsc2UsXG4gICAgICAgICAgbGFiZWxWZXJpZmllcyA9IHRoaXMubGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgIHJldHVybiBsYWJlbFZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkodGhpcy5zdWJzdGl0dXRpb25zLCB0aGlzLmRlZHVjdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWxUb0xhYmVsSlNPTih0aGlzLmxhYmVsKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHRoaXMuc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbEpTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsQVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIHByb29mTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRQcm9vZk5vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsQVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBsYWJlbCA9IG51bGw7XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gZG9tO1xuXG4gIGlmIChsYWJlbE5vZGUgIT09IG51bGwpIHtcbiAgICBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gbGFiZWxTdHJpbmdGcm9tTGFiZWwobGFiZWwpIHtcbiAgY29uc3QgbGFiZWxzU3RyaW5nID0gKGxhYmVsICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBsYWJlbHNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN1cHBvc2l0aW9uc1N0cmluZ0Zyb21TdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc1N0cmluZyA9IHN1cHBvc2l0aW9ucy5yZWR1Y2UoKHN1cHBvc2l0aW9uc1N0cmluZywgc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3VwcG9zaXRpb25zU3RyaW5nID0gKHN1cHBvc2l0aW9uc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdXBwb3NpdGlvbnNTdHJpbmd9LCAke3N1cHBvc2l0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTGFiZWxBU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbikge1xuICBjb25zdCBzdXBwb3NpdGlvbnNTdHJpbmcgPSBzdXBwb3NpdGlvbnNTdHJpbmdGcm9tU3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucyksXG4gICAgICAgIGRlZHVjdGlvblN0cmluZyA9IGRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbFN0cmluZ0Zyb21MYWJlbChsYWJlbCksXG4gICAgICAgIHN0cmluZyA9IChsYWJlbFN0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgIGAke2xhYmVsU3RyaW5nfSA6OiBbJHtzdXBwb3NpdGlvbnNTdHJpbmd9XSAuLi4gJHtkZWR1Y3Rpb25TdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlRvcExldmVsTWV0YUFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJsYWJlbCIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic3Vic3RpdHV0aW9ucyIsImdldENvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRMYWJlbCIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFN0YXRlbWVudCIsIm1hdGNoUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTWF0Y2hlcyIsInZlcmlmeSIsInZlcmlmaWVzIiwibGFiZWxWZXJpZmllcyIsInZlcmlmeUxhYmVsIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInZlcmlmeURlZHVjdGlvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsIm5hbWVPbmx5IiwiZXZlcnkiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInRvSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3RyaW5nRnJvbUxhYmVsQVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImZyb21Ob2RlIiwibm9kZSIsInRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInByb29mTm9kZSIsImdldFByb29mTm9kZSIsImxhYmVsTm9kZSIsImdldExhYmVsTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJwcm9vZkZyb21Qcm9vZk5vZGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiLCJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiTGFiZWwiLCJkb20iLCJmcm9tTGFiZWxOb2RlIiwibGFiZWxTdHJpbmdGcm9tTGFiZWwiLCJsYWJlbHNTdHJpbmciLCJzdXBwb3NpdGlvbnNTdHJpbmdGcm9tU3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zU3RyaW5nIiwicmVkdWNlIiwic3VwcG9z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