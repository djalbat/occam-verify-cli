"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return TopLevelAssertion;
    },
    stringFromLabels: function() {
        return stringFromLabels;
    }
});
var _necessary = require("necessary");
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _constants = require("./constants");
var _json = require("./utilities/json");
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
var reverse = _necessary.arrayUtilities.reverse, correlate = _necessary.arrayUtilities.correlate;
var TopLevelAssertion = /*#__PURE__*/ function() {
    function TopLevelAssertion(fileContext, string, labels, suppositions, consequent, proof) {
        _class_call_check(this, TopLevelAssertion);
        this.fileContext = fileContext;
        this.string = string;
        this.labels = labels;
        this.suppositions = suppositions;
        this.consequent = consequent;
        this.proof = proof;
    }
    _create_class(TopLevelAssertion, [
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
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getConsequent",
            value: function getConsequent() {
                return this.consequent;
            }
        },
        {
            key: "getProof",
            value: function getProof() {
                return this.proof;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.labels.some(function(label) {
                    var metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                });
                return metavariableNodeMatches;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, localContext) {
                var statementUnified = false;
                var proofSteps = localContext.getProofSteps(), substitutions = _substitutions.default.fromNothing(), proofStepsUnified = this.unifyProofSteps(proofSteps, substitutions, localContext);
                if (proofStepsUnified) {
                    statementUnified = this.consequent.unifyStatement(statement, substitutions, localContext);
                }
                return statementUnified;
            }
        },
        {
            key: "unifyProofSteps",
            value: function unifyProofSteps(proofSteps, substitutions, localContext) {
                var proofStepsUnified;
                var suppositions = this.suppositions;
                suppositions = reverse(suppositions); ///
                proofSteps = reverse(proofSteps); ///
                proofStepsUnified = correlate(suppositions, proofSteps, function(supposition, proofStep) {
                    var proofStepUnified = supposition.unifyProofStep(proofStep, substitutions, localContext);
                    if (proofStepUnified) {
                        return true;
                    }
                });
                return proofStepsUnified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), consequentJSON = (0, _json.consequentToConsequentJSON)(this.consequent), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), labels = labelsJSON, consequent = consequentJSON, suppositions = suppositionsJSON, json = {
                    labels: labels,
                    consequent: consequent,
                    suppositions: suppositions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), consequent = (0, _json.consequentFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), string = stringFromLabels(labels), proof = null, topLevelAssertion = new Class(fileContext, string, labels, suppositions, consequent, proof);
                return topLevelAssertion;
            }
        }
    ]);
    return TopLevelAssertion;
}();
function stringFromLabels(labels) {
    var string = labels.reduce(function(string, label) {
        var labelString = label.getString();
        string = string === _constants.EMPTY_STRING ? labelString : "".concat(labelString, ", ").concat(labelString);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGNvbnNlcXVlbnRGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGNvcnJlbGF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvb2ZTdGVwc1VuaWZpZWQgPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwcyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByb29mU3RlcHNVbmlmaWVkKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwcyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwc1VuaWZpZWQ7XG5cbiAgICBsZXQgc3VwcG9zaXRpb25zID0gdGhpcy5zdXBwb3NpdGlvbnM7XG5cbiAgICBzdXBwb3NpdGlvbnMgPSByZXZlcnNlKHN1cHBvc2l0aW9ucyk7IC8vL1xuXG4gICAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gICAgcHJvb2ZTdGVwc1VuaWZpZWQgPSBjb3JyZWxhdGUoc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCAoc3VwcG9zaXRpb24sIHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZCA9IHN1cHBvc2l0aW9uLnVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcFVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwc1VuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTih0aGlzLmNvbnNlcXVlbnQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGNvbnNlcXVlbnQsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZik7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IHN0cmluZyA9IGxhYmVscy5yZWR1Y2UoKHN0cmluZywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICBsYWJlbFN0cmluZzogLy8vXG4gICAgICAgICAgICAgICAgIGAke2xhYmVsU3RyaW5nfSwgJHtsYWJlbFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJzdHJpbmdGcm9tTGFiZWxzIiwicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiY29ycmVsYXRlIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50IiwicHJvb2YiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbnQiLCJnZXRQcm9vZiIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50IiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInByb29mU3RlcHNVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXBzIiwic3VwcG9zaXRpb24iLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXAiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiY29uc2VxdWVudEpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwiY29uc2VxdWVudEZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJ0b3BMZXZlbEFzc2VydGlvbiIsInJlZHVjZSIsImxhYmVsU3RyaW5nIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBZ0JxQkE7O0lBNEdMQyxnQkFBZ0I7ZUFBaEJBOzs7eUJBMUhlO29FQUVMO3lCQUVHO29CQU1rQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFRQyxVQUF1QkMseUJBQWMsQ0FBckNELFNBQVNFLFlBQWNELHlCQUFjLENBQTVCQztBQUVGLElBQUEsQUFBTUosa0NBQU47YUFBTUEsa0JBQ1BLLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxLQUFLO2dDQURyRFY7UUFFakIsSUFBSSxDQUFDSyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztrQkFQSVY7O1lBVW5CVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFdBQVc7WUFDekI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFlBQVk7WUFDMUI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFVBQVU7WUFDeEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNO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