"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelAssertion;
    }
});
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _consequent = /*#__PURE__*/ _interop_require_default(require("./consequent"));
var _supposition = /*#__PURE__*/ _interop_require_default(require("./supposition"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _consequentAgainstStatement = /*#__PURE__*/ _interop_require_default(require("./unify/consequentAgainstStatement"));
var _suppositionsAgainstProofSteps = /*#__PURE__*/ _interop_require_default(require("./unify/suppositionsAgainstProofSteps"));
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
    function TopLevelAssertion(labels, suppositions, consequent, substitutions, fileContext) {
        _class_call_check(this, TopLevelAssertion);
        this.labels = labels;
        this.suppositions = suppositions;
        this.consequent = consequent;
        this.substitutions = substitutions;
        this.fileContext = fileContext;
    }
    _create_class(TopLevelAssertion, [
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
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNode, localContext) {
                var statementUnified = false;
                var substitutions = _substitutions.default.fromNothing(), proofSteps = localContext.getProofSteps(), proofStepsB = proofSteps, fileContextA = this.fileContext, suppositionsA = this.suppositions, localContextB = localContext, suppositionsUnified = (0, _suppositionsAgainstProofSteps.default)(suppositionsA, proofStepsB, substitutions, fileContextA, localContextB);
                if (suppositionsUnified) {
                    var consequentA = this.consequent, consequentUnified = (0, _consequentAgainstStatement.default)(consequentA, statementNode, substitutions, fileContextA, localContext);
                    statementUnified = consequentUnified; ///
                }
                return statementUnified;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matchesMetavariableNode = this.labels.some(function(label) {
                    var labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);
                    if (labelMatchesMetavariableNode) {
                        return true;
                    }
                });
                return matchesMetavariableNode;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON(tokens);
                    return labelJSON;
                }), suppositionsJSON = this.suppositions.map(function(supposition) {
                    var suppositionJSON = supposition.toJSON(tokens);
                    return suppositionJSON;
                }), consequentJSON = this.consequent.toJSON(tokens), substitutionsJSON = this.substitutions.toJSON(tokens), labels = labelsJSON, suppositions = suppositionsJSON, consequent = consequentJSON, substitutions = substitutionsJSON, json = {
                    labels: labels,
                    suppositions: suppositions,
                    consequent: consequent,
                    substitutions: substitutions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(Class, json, fileContext) {
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSONAndFileContext(_$json, fileContext);
                    return label;
                });
                var suppositions = json.suppositions, consequent = json.consequent, substitutions = json.substitutions;
                var suppositionsJSON = suppositions; ///
                suppositions = suppositionsJSON.map(function(suppositionJSON) {
                    var _$json = suppositionJSON, supposition = _supposition.default.fromJSONAndFileContext(_$json, fileContext);
                    return supposition;
                });
                var consequentJSON = consequent; ///
                json = consequentJSON; ///
                consequent = _consequent.default.fromJSONAndFileContext(json, fileContext);
                var substitutionsJSON = substitutions; ///
                json = substitutionsJSON; ///
                substitutions = _substitutions.default.fromJSONAndFileContext(json, fileContext);
                return new Class(labels, suppositions, consequent, substitutions, fileContext); ///
            }
        },
        {
            key: "fromLabelsSuppositionsConsequentSubstitutionsAndFileContext",
            value: function fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Class, labels, suppositions, consequent, substitutions, fileContext) {
                return new Class(labels, suppositions, consequent, substitutions, fileContext);
            }
        }
    ]);
    return TopLevelAssertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCB1bmlmeUNvbnNlcXVlbnRBZ2FpbnN0U3RhdGVtZW50IGZyb20gXCIuL3VuaWZ5L2NvbnNlcXVlbnRBZ2FpbnN0U3RhdGVtZW50XCI7XG5pbXBvcnQgdW5pZnlTdXBwb3NpdGlvbnNBZ2FpbnN0UHJvb2ZTdGVwcyBmcm9tIFwiLi91bmlmeS9zdXBwb3NpdGlvbnNBZ2FpbnN0UHJvb2ZTdGVwc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldENvbnNlcXVlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCksXG4gICAgICAgICAgcHJvb2ZTdGVwc0IgPSBwcm9vZlN0ZXBzLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dEEgPSB0aGlzLmZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zQSA9IHRoaXMuc3VwcG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zVW5pZmllZCA9IHVuaWZ5U3VwcG9zaXRpb25zQWdhaW5zdFByb29mU3RlcHMoc3VwcG9zaXRpb25zQSwgcHJvb2ZTdGVwc0IsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVW5pZmllZCkge1xuICAgICAgY29uc3QgY29uc2VxdWVudEEgPSB0aGlzLmNvbnNlcXVlbnQsICAvLy9cbiAgICAgICAgICAgIGNvbnNlcXVlbnRVbmlmaWVkID0gdW5pZnlDb25zZXF1ZW50QWdhaW5zdFN0YXRlbWVudChjb25zZXF1ZW50QSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gY29uc2VxdWVudFVuaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50SlNPTiA9IHRoaXMuY29uc2VxdWVudC50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHRoaXMuc3Vic3RpdHV0aW9ucy50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zIH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTi5tYXAoKHN1cHBvc2l0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHN1cHBvc2l0aW9uSlNPTiwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnQ7ICAvLy9cblxuICAgIGpzb24gPSBjb25zZXF1ZW50SlNPTjsgIC8vL1xuXG4gICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnM7ICAvLy9cblxuICAgIGpzb24gPSBzdWJzdGl0dXRpb25zSlNPTjsgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0KENsYXNzLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHsgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpOyB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50Iiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0Q29uc2VxdWVudCIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXRGaWxlQ29udGV4dCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInByb29mU3RlcHNCIiwiZmlsZUNvbnRleHRBIiwic3VwcG9zaXRpb25zQSIsImxvY2FsQ29udGV4dEIiLCJzdXBwb3NpdGlvbnNVbmlmaWVkIiwidW5pZnlTdXBwb3NpdGlvbnNBZ2FpbnN0UHJvb2ZTdGVwcyIsImNvbnNlcXVlbnRBIiwiY29uc2VxdWVudFVuaWZpZWQiLCJ1bmlmeUNvbnNlcXVlbnRBZ2FpbnN0U3RhdGVtZW50IiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbkpTT04iLCJjb25zZXF1ZW50SlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJDbGFzcyIsIkxhYmVsIiwiU3VwcG9zaXRpb24iLCJDb25zZXF1ZW50IiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzREQVBIO2lFQUNLO2tFQUNDO29FQUNFO2lGQUNrQjtvRkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1BLGtDQUFOO2FBQU1BLGtCQUNQQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVB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