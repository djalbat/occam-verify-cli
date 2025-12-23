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
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
    function TopLevelMetaAssertion(context, node, string, label, suppositions, deduction, proof, substitutions) {
        _class_call_check(this, TopLevelMetaAssertion);
        this.context = context;
        this.node = node;
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
                var label = (0, _json.labelFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), substitutions = (0, _json.substitutionsFromJSON)(json, context), node = null, proof = null, string = stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction), topLevelMetaAssertion = new Class(context, node, string, label, suppositions, deduction, proof, substitutions);
                return topLevelMetaAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, context) {
                var Substitutions = _ontology.default.Substitutions, topLevelAssertionNode = node, proofNode = topLevelAssertionNode.getProofNode(), labelNode = topLevelAssertionNode.getLabelNode(), deductionNode = topLevelAssertionNode.getDeductionNode(), suppositionNodes = topLevelAssertionNode.getSuppositionNodes(), proof = (0, _topLevelAssertion.proofFromProofNode)(proofNode, context), label = labelFromLabelNode(labelNode, context), deduction = (0, _topLevelAssertion.deductionFromDeductionNode)(deductionNode, context), suppositions = (0, _topLevelAssertion.suppositionsFromSuppositionNodes)(suppositionNodes, context), substitutions = Substitutions.fromNothing(), string = stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction), topLevelMetaAssertion = new Class(context, node, string, label, suppositions, deduction, proof, substitutions);
                return topLevelMetaAssertion;
            }
        }
    ]);
    return TopLevelMetaAssertion;
}();
function labelFromLabelNode(labelNode, context) {
    var label = null;
    var Label = _ontology.default.Label;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS90b3BMZXZlbE1ldGFBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgcHJvb2ZGcm9tUHJvb2ZOb2RlLCBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSwgc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMgfSBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuaW1wb3J0IHsgbGFiZWxGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsVG9MYWJlbEpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Gcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmRlZHVjdGlvbiA9IGRlZHVjdGlvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIG1hdGNoUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRMYWJlbCgpLFxuICAgICAgICAgIHJlZmVyZW5jZU1hdGNoZXMgPSBsYWJlbC5tYXRjaFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbFZlcmlmaWVzID0gdGhpcy52ZXJpZnlMYWJlbCgpO1xuXG4gICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTm90aGluZyh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbCgpIHtcbiAgICBjb25zdCBuYW1lT25seSA9IGZhbHNlLFxuICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSB0aGlzLmxhYmVsLnZlcmlmeShuYW1lT25seSk7XG5cbiAgICByZXR1cm4gbGFiZWxWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IHRoaXMuZGVkdWN0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRoaXMucHJvb2YudmVyaWZ5KHRoaXMuc3Vic3RpdHV0aW9ucywgdGhpcy5kZWR1Y3Rpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsVG9MYWJlbEpTT04odGhpcy5sYWJlbCksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTih0aGlzLnN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxKU09OLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbEFTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBuZXcgQ2xhc3MoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIHByb29mTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRQcm9vZk5vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0TGFiZWxOb2RlKCksXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsQVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYWJlbEZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBsYWJlbCA9IG51bGw7XG5cbiAgY29uc3QgeyBMYWJlbCB9ID0gb250b2xvZ3k7XG5cbiAgaWYgKGxhYmVsTm9kZSAhPT0gbnVsbCkge1xuICAgIGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5mdW5jdGlvbiBsYWJlbFN0cmluZ0Zyb21MYWJlbChsYWJlbCkge1xuICBjb25zdCBsYWJlbHNTdHJpbmcgPSAobGFiZWwgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuZ2V0U3RyaW5nKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIGxhYmVsc1N0cmluZztcbn1cblxuZnVuY3Rpb24gc3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zU3RyaW5nID0gc3VwcG9zaXRpb25zLnJlZHVjZSgoc3VwcG9zaXRpb25zU3RyaW5nLCBzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdXBwb3NpdGlvbnNTdHJpbmcgPSAoc3VwcG9zaXRpb25zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1cHBvc2l0aW9uc1N0cmluZ30sICR7c3VwcG9zaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbEFTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc1N0cmluZyA9IHN1cHBvc2l0aW9uc1N0cmluZ0Zyb21TdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zKSxcbiAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsU3RyaW5nRnJvbUxhYmVsKGxhYmVsKSxcbiAgICAgICAgc3RyaW5nID0gKGxhYmVsU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgYCR7bGFiZWxTdHJpbmd9IDo6IFske3N1cHBvc2l0aW9uc1N0cmluZ31dIC4uLiAke2RlZHVjdGlvblN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJsYWJlbCIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic3Vic3RpdHV0aW9ucyIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWwiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXREZWR1Y3Rpb24iLCJnZXRQcm9vZiIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXRTdGF0ZW1lbnQiLCJtYXRjaFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZU1hdGNoZXMiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImxhYmVsVmVyaWZpZXMiLCJ2ZXJpZnlMYWJlbCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJuYW1lT25seSIsImV2ZXJ5Iiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJ0b0pTT04iLCJsYWJlbEpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbEZyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbEFTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJmcm9tTm9kZSIsIlN1YnN0aXR1dGlvbnMiLCJvbnRvbG9neSIsInRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInByb29mTm9kZSIsImdldFByb29mTm9kZSIsImxhYmVsTm9kZSIsImdldExhYmVsTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJwcm9vZkZyb21Qcm9vZk5vZGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiLCJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzIiwiTGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwibGFiZWxTdHJpbmdGcm9tTGFiZWwiLCJsYWJlbHNTdHJpbmciLCJzdXBwb3NpdGlvbnNTdHJpbmdGcm9tU3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zU3RyaW5nIiwicmVkdWNlIiwic3VwcG9zaXRpb25TdHJpbmciLCJkZWR1Y3Rpb25TdHJpbmciLCJsYWJlbFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7K0RBYkE7NERBQ0k7aUNBRXdFO29CQVFoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLHNDQUFOO2FBQU1BLHNCQUNQQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLGFBQWE7Z0NBRHBFUjtRQUVqQixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBVEpSOztZQVluQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixPQUFPO1lBQ3JCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixJQUFJO1lBQ2xCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixNQUFNO1lBQ3BCOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixLQUFLO1lBQ25COzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUixZQUFZO1lB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