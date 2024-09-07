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
var _statementForMetavariable = /*#__PURE__*/ _interop_require_default(require("./substitution/statementForMetavariable"));
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
                var proofSteps = localContext.getProofSteps(), substitutions = [], suppositionsUnified = unifySuppositions(this.suppositions, proofSteps, substitutions, this.fileContext, localContext);
                if (suppositionsUnified) {
                    var consequentUnified = unifyConsequent(this.consequent, statementNode, substitutions, this.fileContext, localContext);
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
                }), consequentJSON = this.consequent.toJSON(tokens), substitutionsJSON = this.substitutions.map(function(substitution) {
                    var substitutionJSON = substitution.toJSON();
                    return substitutionJSON;
                }), labels = labelsJSON, suppositions = suppositionsJSON, consequent = consequentJSON, substitutions = substitutionsJSON, json = {
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
                substitutions = substitutionsJSON.map(function(substitutionJSON) {
                    var _$json = substitutionJSON, statementForMetavariableSubstitution = _statementForMetavariable.default.fromJSONAndFileContext(_$json, fileContext), substitution = statementForMetavariableSubstitution; ///
                    return substitution;
                });
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
function unifySuppositions(suppositions, proofSteps, substitutions, fileContext, localContext) {
    suppositions = (0, _array.reverse)(suppositions); ///
    proofSteps = (0, _array.reverse)(proofSteps); ///
    var suppositionsUnified = (0, _array.correlate)(suppositions, proofSteps, function(supposition, proofStep) {
        var suppositionUnified = unifySupposition(supposition, proofStep, substitutions, fileContext, localContext);
        if (suppositionUnified) {
            return true;
        }
    });
    return suppositionsUnified;
}
function unifySupposition(supposition, proofStep, substitutions, fileContext, localContext) {
    var suppositionUnified = false;
    var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
    if (subproofNode !== null) {
        var subproofUnified = supposition.unifySubproof(subproofNode, substitutions, fileContext, localContext);
        suppositionUnified = subproofUnified; ///
    }
    if (statementNode !== null) {
        var statementUnified = supposition.unifyStatement(statementNode, substitutions, fileContext, localContext);
        suppositionUnified = statementUnified; ///
    }
    return suppositionUnified;
}
function unifyConsequent(consequent, statementNode, substitutions, fileContext, localContext) {
    var statementUnified = consequent.unifyStatement(statementNode, substitutions, fileContext, localContext), consequentUnified = statementUnified; ///
    return consequentUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gbG9jYWxDb250ZXh0LmdldFByb29mU3RlcHMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgc3VwcG9zaXRpb25zVW5pZmllZCA9IHVuaWZ5U3VwcG9zaXRpb25zKHRoaXMuc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnNlcXVlbnRVbmlmaWVkID0gdW5pZnlDb25zZXF1ZW50KHRoaXMuY29uc2VxdWVudCwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGNvbnNlcXVlbnRVbmlmaWVkOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25KU09OID0gc3VwcG9zaXRpb24udG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbkpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudEpTT04gPSB0aGlzLmNvbnNlcXVlbnQudG9KU09OKHRva2VucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSB0aGlzLnN1YnN0aXR1dGlvbnMubWFwKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkpTT04gPSBzdWJzdGl0dXRpb24udG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdWJzdGl0dXRpb25KU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIGNvbnNlcXVlbnQsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLm1hcCgoc3VwcG9zaXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gc3VwcG9zaXRpb25KU09OLCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudDsgIC8vL1xuXG4gICAganNvbiA9IGNvbnNlcXVlbnRKU09OOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uczsgIC8vL1xuXG4gICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLm1hcCgoc3Vic3RpdHV0aW9uSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHN1YnN0aXR1dGlvbkpTT04sICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiA9IFN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBDbGFzcyhsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQoQ2xhc3MsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCkgeyByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7IH1cbn1cblxuZnVuY3Rpb24gdW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIHN1cHBvc2l0aW9ucyA9IHJldmVyc2Uoc3VwcG9zaXRpb25zKTsgLy8vXG5cbiAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uc1VuaWZpZWQgPSBjb3JyZWxhdGUoc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCAoc3VwcG9zaXRpb24sIHByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllZCA9IHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmaWVkO1xufVxuXG5mdW5jdGlvbiB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN1cHBvc2l0aW9uVW5pZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1YnByb29mTm9kZSA9IHByb29mU3RlcC5nZXRTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN1YnByb29mVW5pZmllZCA9IHN1cHBvc2l0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHN1cHBvc2l0aW9uVW5pZmllZCA9IHN1YnByb29mVW5pZmllZDsgLy8vXG4gIH1cblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSBzdXBwb3NpdGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHN1cHBvc2l0aW9uVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5Q29uc2VxdWVudChjb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSBjb25zZXF1ZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpLFxuICAgICAgICBjb25zZXF1ZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuXG4gIHJldHVybiBjb25zZXF1ZW50VW5pZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbEFzc2VydGlvbiIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW50IiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldEZpbGVDb250ZXh0IiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic3VwcG9zaXRpb25zVW5pZmllZCIsInVuaWZ5U3VwcG9zaXRpb25zIiwiY29uc2VxdWVudFVuaWZpZWQiLCJ1bmlmeUNvbnNlcXVlbnQiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJzb21lIiwibGFiZWwiLCJsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uSlNPTiIsImNvbnNlcXVlbnRKU09OIiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25KU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJDbGFzcyIsIkxhYmVsIiwiU3VwcG9zaXRpb24iLCJDb25zZXF1ZW50Iiwic3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbUxhYmVsc1N1cHBvc2l0aW9uc0NvbnNlcXVlbnRTdWJzdGl0dXRpb25zQW5kRmlsZUNvbnRleHQiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwicHJvb2ZTdGVwIiwic3VwcG9zaXRpb25VbmlmaWVkIiwidW5pZnlTdXBwb3NpdGlvbiIsInN1YnByb29mTm9kZSIsImdldFN1YnByb29mTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZlVuaWZpZWQiLCJ1bmlmeVN1YnByb29mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0REFQSDtpRUFDSztrRUFDQzsrRUFDeUI7cUJBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxrQ0FBRCxBQUFMO2FBQU1BLGtCQUNQQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0NBRHJETDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQU5GTDs7WUFT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