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
    function TopLevelMetaAssertion(fileContext, string, label, suppositions, deduction, proof, substitutions) {
        _class_call_check(this, TopLevelMetaAssertion);
        this.fileContext = fileContext;
        this.string = string;
        this.label = label;
        this.suppositions = suppositions;
        this.deduction = deduction;
        this.proof = proof;
        this.substitutions = substitutions;
    }
    _create_class(TopLevelMetaAssertion, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
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
            key: "matchReference",
            value: function matchReference(reference) {
                var label = this.getLabel(), referenceMatches = label.matchReference(reference);
                return referenceMatches;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var labelVerified = this.verifyLabels();
                if (labelVerified) {
                    var localContext = _local.default.fromFileContext(this.fileContext), context = localContext, suppositionsVerified = this.suppositions.every(function(supposition) {
                        var suppositionVerified = supposition.verify(context);
                        if (suppositionVerified) {
                            return true;
                        }
                    });
                    if (suppositionsVerified) {
                        var deductionVerified = this.deduction.verify(context);
                        if (deductionVerified) {
                            if (this.proof === null) {
                                verified = true;
                            } else {
                                var proofVerified = this.proof.verify(this.substitutions, this.deduction, context);
                                verified = proofVerified; ///
                            }
                        }
                    }
                }
                return verified;
            }
        },
        {
            key: "verifyLabels",
            value: function verifyLabels() {
                var nameOnly = false, labelVerified = this.label.verify(nameOnly);
                return labelVerified;
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
            value: function fromJSON(Class, json, fileContext) {
                var label = (0, _json.labelFromJSON)(json, fileContext), deduction = (0, _json.deductionFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), substitutions = (0, _json.substitutionsFromJSON)(json, fileContext), proof = null, string = stringFromLabelAndDeduction(label, deduction), topLevelMetaAssertion = new Class(fileContext, string, label, suppositions, deduction, proof, substitutions);
                return topLevelMetaAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, fileContext) {
                var topLevelAssertionNode = node, proofNode = topLevelAssertionNode.getProofNode(), labelNode = topLevelAssertionNode.getLabelNode(), deductionNode = topLevelAssertionNode.getDeductionNode(), suppositionNodes = topLevelAssertionNode.getSuppositionNodes(), proof = (0, _topLevelAssertion.proofFromProofNode)(proofNode, fileContext), label = labelFromLabelNode(labelNode, fileContext), deduction = (0, _topLevelAssertion.deductionFromDeductionNode)(deductionNode, fileContext), suppositions = (0, _topLevelAssertion.suppositionsFromSuppositionNodes)(suppositionNodes, fileContext), string = stringFromLabelAndDeduction(label, deduction), topLevelMetaAssertion = new Class(fileContext, string, label, suppositions, deduction, proof);
                return topLevelMetaAssertion;
            }
        }
    ]);
    return TopLevelMetaAssertion;
}();
function labelFromLabelNode(labelNode, fileContext) {
    var label = null;
    var Label = _dom.default.Label;
    if (labelNode !== null) {
        label = Label.fromLabelNode(labelNode, fileContext);
    }
    return label;
}
function labelStringFromLabel(label) {
    var labelsString = label !== null ? label.getString() : null;
    return labelsString;
}
function stringFromLabelAndDeduction(label, deduction) {
    var deductionString = deduction.getString(), labelString = labelStringFromLabel(label), string = labelString === null ? deductionString : "".concat(labelString, " :: ").concat(deductionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgcHJvb2ZGcm9tUHJvb2ZOb2RlLCBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSwgc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMgfSBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuaW1wb3J0IHsgbGFiZWxGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsVG9MYWJlbEpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Gcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucykge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBtYXRjaFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKSxcbiAgICAgICAgICByZWZlcmVuY2VNYXRjaGVzID0gbGFiZWwubWF0Y2hSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxWZXJpZmllZCA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICBpZiAobGFiZWxWZXJpZmllZCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVkID0gdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllZCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeSh0aGlzLnN1YnN0aXR1dGlvbnMsIHRoaXMuZGVkdWN0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdmVyaWZpZWQgPSBwcm9vZlZlcmlmaWVkOyAvLy9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgY29uc3QgbmFtZU9ubHkgPSBmYWxzZSxcbiAgICAgICAgICBsYWJlbFZlcmlmaWVkID0gdGhpcy5sYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgcmV0dXJuIGxhYmVsVmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWxUb0xhYmVsSlNPTih0aGlzLmxhYmVsKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHRoaXMuc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbEpTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxBbmREZWR1Y3Rpb24obGFiZWwsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvbk5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBwcm9vZk5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0UHJvb2ZOb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldExhYmVsTm9kZSgpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsQW5kRGVkdWN0aW9uKGxhYmVsLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG5ldyBDbGFzcyhmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IGxhYmVsID0gbnVsbDtcblxuICBjb25zdCB7IExhYmVsIH0gPSBkb207XG5cbiAgaWYgKGxhYmVsTm9kZSAhPT0gbnVsbCkge1xuICAgIGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gbGFiZWxTdHJpbmdGcm9tTGFiZWwobGFiZWwpIHtcbiAgY29uc3QgbGFiZWxzU3RyaW5nID0gKGxhYmVsICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmdldFN0cmluZygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiBsYWJlbHNTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbEFuZERlZHVjdGlvbihsYWJlbCwgZGVkdWN0aW9uKSB7XG4gIGNvbnN0IGRlZHVjdGlvblN0cmluZyA9IGRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbFN0cmluZ0Zyb21MYWJlbChsYWJlbCksXG4gICAgICAgIHN0cmluZyA9IChsYWJlbFN0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgIGAke2xhYmVsU3RyaW5nfSA6OiAke2RlZHVjdGlvblN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbCIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic3Vic3RpdHV0aW9ucyIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWwiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXREZWR1Y3Rpb24iLCJnZXRQcm9vZiIsIm1hdGNoUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTWF0Y2hlcyIsInZlcmlmeSIsInZlcmlmaWVkIiwibGFiZWxWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsImV2ZXJ5Iiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwiZGVkdWN0aW9uVmVyaWZpZWQiLCJwcm9vZlZlcmlmaWVkIiwibmFtZU9ubHkiLCJ0b0pTT04iLCJsYWJlbEpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbEZyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbEFuZERlZHVjdGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImZyb21Ob2RlIiwibm9kZSIsInRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInByb29mTm9kZSIsImdldFByb29mTm9kZSIsImxhYmVsTm9kZSIsImdldExhYmVsTm9kZSIsImRlZHVjdGlvbk5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJwcm9vZkZyb21Qcm9vZk5vZGUiLCJsYWJlbEZyb21MYWJlbE5vZGUiLCJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsInN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzIiwiTGFiZWwiLCJkb20iLCJmcm9tTGFiZWxOb2RlIiwibGFiZWxTdHJpbmdGcm9tTGFiZWwiLCJsYWJlbHNTdHJpbmciLCJkZWR1Y3Rpb25TdHJpbmciLCJsYWJlbFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7MERBYkw7NERBQ1M7aUNBRXdFO29CQVFoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLHNDQUFOO2FBQU1BLHNCQUNQQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxhQUFhO2dDQURsRVA7UUFFakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFSSlA7O1lBV25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLFdBQVc7WUFDekI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLE1BQU07WUFDcEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLEtBQUs7WUFDbkI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLFlBQVk7WUFD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