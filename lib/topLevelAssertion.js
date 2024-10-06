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
    labelsStringFromLabels: function() {
        return labelsStringFromLabels;
    }
});
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./consequent"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _array = require("./utilities/array");
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
var TopLevelAssertion = /*#__PURE__*/ function() {
    function TopLevelAssertion(fileContext, labels, suppositions, consequent, proof) {
        _class_call_check(this, TopLevelAssertion);
        this.fileContext = fileContext;
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
                suppositions = (0, _array.reverse)(suppositions); ///
                proofSteps = (0, _array.reverse)(proofSteps); ///
                proofStepsUnified = (0, _array.correlate)(suppositions, proofSteps, function(supposition, proofStep) {
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
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON();
                    return labelJSON;
                }), suppositionsJSON = this.suppositions.map(function(supposition) {
                    var suppositionJSON = supposition.toJSON();
                    return suppositionJSON;
                }), consequentJSON = this.consequent.toJSON(), labels = labelsJSON, suppositions = suppositionsJSON, consequent = consequentJSON, json = {
                    labels: labels,
                    suppositions: suppositions,
                    consequent: consequent
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, fileContext) {
                var rule;
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, fileContext);
                    return label;
                });
                var suppositions = json.suppositions;
                var suppositionsJSON = suppositions; ///
                suppositions = suppositionsJSON.map(function(suppositionJSON) {
                    var _$json = suppositionJSON, supposition = _supposition.default.fromJSON(_$json, fileContext);
                    return supposition;
                });
                var consequent = json.consequent;
                var consequentJSON = consequent; ///
                json = consequentJSON; ///
                consequent = _consequent.default.fromJSON(json, fileContext);
                var proof = null;
                rule = new Class(fileContext, labels, suppositions, consequent, proof);
                return rule;
            }
        }
    ]);
    return TopLevelAssertion;
}();
function labelsStringFromLabels(labels) {
    var labelsString = labels.reduce(function(labelsString, label) {
        var labelString = label.getString();
        labelsString = labelsString === null ? labelString : "".concat(labelString, ", ").concat(labelString);
        return labelsString;
    }, null);
    return labelsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcblxuaW1wb3J0IHsgcmV2ZXJzZSwgY29ycmVsYXRlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvb2ZTdGVwc1VuaWZpZWQgPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwcyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByb29mU3RlcHNVbmlmaWVkKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwcyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwc1VuaWZpZWQ7XG5cbiAgICBsZXQgc3VwcG9zaXRpb25zID0gdGhpcy5zdXBwb3NpdGlvbnM7XG5cbiAgICBzdXBwb3NpdGlvbnMgPSByZXZlcnNlKHN1cHBvc2l0aW9ucyk7IC8vL1xuXG4gICAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gICAgcHJvb2ZTdGVwc1VuaWZpZWQgPSBjb3JyZWxhdGUoc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCAoc3VwcG9zaXRpb24sIHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZCA9IHN1cHBvc2l0aW9uLnVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcFVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwc1VuaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50SlNPTiA9IHRoaXMuY29uc2VxdWVudC50b0pTT04oKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjb25zZXF1ZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgc3VwcG9zaXRpb25zIH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uc2VxdWVudCB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gICAganNvbiA9IGNvbnNlcXVlbnRKU09OOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBwcm9vZiA9IG51bGw7XG5cbiAgICBydWxlID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVscy5yZWR1Y2UoKGxhYmVsc1N0cmluZywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgbGFiZWxzU3RyaW5nID0gKGxhYmVsc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbFN0cmluZ30sICR7bGFiZWxTdHJpbmd9YDtcblxuICAgIHJldHVybiBsYWJlbHNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBsYWJlbHNTdHJpbmc7XG59Il0sIm5hbWVzIjpbIlRvcExldmVsQXNzZXJ0aW9uIiwibGFiZWxzU3RyaW5nRnJvbUxhYmVscyIsImZpbGVDb250ZXh0IiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVudCIsInByb29mIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW50IiwiZ2V0UHJvb2YiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJwcm9vZlN0ZXBzVW5pZmllZCIsInVuaWZ5UHJvb2ZTdGVwcyIsInJldmVyc2UiLCJjb3JyZWxhdGUiLCJzdXBwb3NpdGlvbiIsInByb29mU3RlcCIsInByb29mU3RlcFVuaWZpZWQiLCJ1bmlmeVByb29mU3RlcCIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25KU09OIiwiY29uc2VxdWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsInJ1bGUiLCJMYWJlbCIsIlN1cHBvc2l0aW9uIiwiQ29uc2VxdWVudCIsImxhYmVsc1N0cmluZyIsInJlZHVjZSIsImxhYmVsU3RyaW5nIiwiZ2V0U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBU3FCQTs7SUE0SUxDLHNCQUFzQjtlQUF0QkE7Ozs0REFuSkU7aUVBQ0s7a0VBQ0M7b0VBQ0U7cUJBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNRCxrQ0FBTjthQUFNQSxrQkFDUEUsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxLQUFLO2dDQUQ3Q047UUFFakIsSUFBSSxDQUFDRSxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztrQkFOSU47O1lBU25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFdBQVc7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JB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