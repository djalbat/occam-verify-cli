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
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
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
                var Substitutions = _elements.default.Substitutions, topLevelAssertionNode = node, proofNode = topLevelAssertionNode.getProofNode(), labelNode = topLevelAssertionNode.getLabelNode(), deductionNode = topLevelAssertionNode.getDeductionNode(), suppositionNodes = topLevelAssertionNode.getSuppositionNodes(), proof = (0, _topLevelAssertion.proofFromProofNode)(proofNode, context), label = labelFromLabelNode(labelNode, context), deduction = (0, _topLevelAssertion.deductionFromDeductionNode)(deductionNode, context), suppositions = (0, _topLevelAssertion.suppositionsFromSuppositionNodes)(suppositionNodes, context), substitutions = Substitutions.fromNothing(), string = stringFromLabelASuppositionsAndDeduction(label, suppositions, deduction), topLevelMetaAssertion = new Class(context, node, string, label, suppositions, deduction, proof, substitutions);
                return topLevelMetaAssertion;
            }
        }
    ]);
    return TopLevelMetaAssertion;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBwcm9vZkZyb21Qcm9vZk5vZGUsIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlLCBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyB9IGZyb20gXCIuL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5pbXBvcnQgeyBsYWJlbEZyb21KU09OLFxuICAgICAgICAgbGFiZWxUb0xhYmVsSlNPTixcbiAgICAgICAgIGRlZHVjdGlvbkZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbE1ldGFBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldERlZHVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWR1Y3Rpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpOyB9XG5cbiAgbWF0Y2hSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldExhYmVsKCksXG4gICAgICAgICAgcmVmZXJlbmNlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUxhYmVsKCk7XG5cbiAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Ob3RoaW5nKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVsKCkge1xuICAgIGNvbnN0IG5hbWVPbmx5ID0gZmFsc2UsXG4gICAgICAgICAgbGFiZWxWZXJpZmllcyA9IHRoaXMubGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgIHJldHVybiBsYWJlbFZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkodGhpcy5zdWJzdGl0dXRpb25zLCB0aGlzLmRlZHVjdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWxUb0xhYmVsSlNPTih0aGlzLmxhYmVsKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHRoaXMuc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbEpTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsQVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcHJvb2ZOb2RlID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldFByb29mTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRMYWJlbE5vZGUoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25Ob2RlID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldERlZHVjdGlvbk5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxBU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIG5vZGUsIHN0cmluZywgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhYmVsRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGxhYmVsID0gbnVsbDtcblxuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cztcblxuICBpZiAobGFiZWxOb2RlICE9PSBudWxsKSB7XG4gICAgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGxhYmVsU3RyaW5nRnJvbUxhYmVsKGxhYmVsKSB7XG4gIGNvbnN0IGxhYmVsc1N0cmluZyA9IChsYWJlbCAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5nZXRTdHJpbmcoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gbGFiZWxzU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBzdXBwb3NpdGlvbnNTdHJpbmdGcm9tU3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNTdHJpbmcgPSBzdXBwb3NpdGlvbnMucmVkdWNlKChzdXBwb3NpdGlvbnNTdHJpbmcsIHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHN1cHBvc2l0aW9uc1N0cmluZyA9IChzdXBwb3NpdGlvbnNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3VwcG9zaXRpb25zU3RyaW5nfSwgJHtzdXBwb3NpdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc1N0cmluZztcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbUxhYmVsQVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zU3RyaW5nID0gc3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMpLFxuICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWxTdHJpbmdGcm9tTGFiZWwobGFiZWwpLFxuICAgICAgICBzdHJpbmcgPSAobGFiZWxTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgZGVkdWN0aW9uU3RyaW5nIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbFN0cmluZ30gOjogWyR7c3VwcG9zaXRpb25zU3RyaW5nfV0gLi4uICR7ZGVkdWN0aW9uU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsImxhYmVsIiwic3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uIiwicHJvb2YiLCJzdWJzdGl0dXRpb25zIiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRMYWJlbCIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFN0YXRlbWVudCIsIm1hdGNoUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlTWF0Y2hlcyIsInZlcmlmeSIsInZlcmlmaWVzIiwibGFiZWxWZXJpZmllcyIsInZlcmlmeUxhYmVsIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInZlcmlmeURlZHVjdGlvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsIm5hbWVPbmx5IiwiZXZlcnkiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInRvSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwic3RyaW5nRnJvbUxhYmVsQVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImZyb21Ob2RlIiwiU3Vic3RpdHV0aW9ucyIsImVsZW1lbnRzIiwidG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwicHJvb2ZOb2RlIiwiZ2V0UHJvb2ZOb2RlIiwibGFiZWxOb2RlIiwiZ2V0TGFiZWxOb2RlIiwiZGVkdWN0aW9uTm9kZSIsImdldERlZHVjdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsInByb29mRnJvbVByb29mTm9kZSIsImxhYmVsRnJvbUxhYmVsTm9kZSIsImRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJMYWJlbCIsImZyb21MYWJlbE5vZGUiLCJsYWJlbFN0cmluZ0Zyb21MYWJlbCIsImxhYmVsc1N0cmluZyIsInN1cHBvc2l0aW9uc1N0cmluZ0Zyb21TdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNTdHJpbmciLCJyZWR1Y2UiLCJzdXBwb3NpdGlvblN0cmluZyIsImRlZHVjdGlvblN0cmluZyIsImxhYmVsU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWVxQkE7OzsrREFiQTs0REFDSTtpQ0FFd0U7b0JBUWhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsc0NBQU47YUFBTUEsc0JBQ1BDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsYUFBYTtnQ0FEcEVSO1FBRWpCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFUSlI7O1lBWW5CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLE9BQU87WUFDckI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLElBQUk7WUFDbEI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLE1BQU07WUFDcEI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLEtBQUs7WUFDbkI7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNSLFlBQVk7WUFD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