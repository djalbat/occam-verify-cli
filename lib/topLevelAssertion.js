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
            key: "matchStatement",
            value: function matchStatement(statementNode, localContext) {
                var statementNatches = false;
                var proofSteps = localContext.getProofSteps(), substitutions = [], suppositionsMatch = matchSuppositions(this.suppositions, proofSteps, substitutions, this.fileContext, localContext);
                if (suppositionsMatch) {
                    var consequentMatches = matchConsequent(this.consequent, statementNode, substitutions, this.fileContext, localContext);
                    statementNatches = consequentMatches; ///
                }
                return statementNatches;
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
function matchSuppositions(suppositions, proofSteps, substitutions, fileContext, localContext) {
    suppositions = (0, _array.reverse)(suppositions); ///
    proofSteps = (0, _array.reverse)(proofSteps); ///
    var suppositionsMatch = (0, _array.correlate)(suppositions, proofSteps, function(supposition, proofStep) {
        var suppositionMatches = matchSupposition(supposition, proofStep, substitutions, fileContext, localContext);
        if (suppositionMatches) {
            return true;
        }
    });
    return suppositionsMatch;
}
function matchSupposition(supposition, proofStep, substitutions, fileContext, localContext) {
    var suppositionMatches = false;
    var statementNode = proofStep.getStatementNode();
    if (statementNode !== null) {
        var suppositionMatchesStatementNode = supposition.matchStatementNode(statementNode, substitutions, fileContext, localContext);
        suppositionMatches = suppositionMatchesStatementNode; ///
    }
    return suppositionMatches;
}
function matchConsequent(consequent, statementNode, substitutions, fileContext, localContext) {
    var consequentMatchesStatementNode = consequent.matchStatementNode(statementNode, substitutions, fileContext, localContext), consequentMatches = consequentMatchesStatementNode; ///
    return consequentMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgQ29uc2VxdWVudCBmcm9tIFwiLi9jb25zZXF1ZW50XCI7XG5pbXBvcnQgU3VwcG9zaXRpb24gZnJvbSBcIi4vc3VwcG9zaXRpb25cIjtcbmltcG9ydCBTdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4vc3Vic3RpdHV0aW9uL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gbG9jYWxDb250ZXh0LmdldFByb29mU3RlcHMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgc3VwcG9zaXRpb25zTWF0Y2ggPSBtYXRjaFN1cHBvc2l0aW9ucyh0aGlzLnN1cHBvc2l0aW9ucywgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNNYXRjaCkge1xuICAgICAgY29uc3QgY29uc2VxdWVudE1hdGNoZXMgPSBtYXRjaENvbnNlcXVlbnQodGhpcy5jb25zZXF1ZW50LCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gY29uc2VxdWVudE1hdGNoZXM7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbkpTT04gPSBzdXBwb3NpdGlvbi50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50SlNPTiA9IHRoaXMuY29uc2VxdWVudC50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHRoaXMuc3Vic3RpdHV0aW9ucy5tYXAoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uSlNPTiA9IHN1YnN0aXR1dGlvbi50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbkpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgc3Vic3RpdHV0aW9ucyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04ubWFwKChzdXBwb3NpdGlvbkpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBzdXBwb3NpdGlvbkpTT04sIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50OyAgLy8vXG5cbiAgICBqc29uID0gY29uc2VxdWVudEpTT047ICAvLy9cblxuICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zOyAgLy8vXG5cbiAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04ubWFwKChzdWJzdGl0dXRpb25KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gc3Vic3RpdHV0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gU3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IENsYXNzKGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudFN1YnN0aXR1dGlvbnNBbmRGaWxlQ29udGV4dChDbGFzcywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KSB7IHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KTsgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgc3VwcG9zaXRpb25zID0gcmV2ZXJzZShzdXBwb3NpdGlvbnMpOyAvLy9cblxuICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgY29uc3Qgc3VwcG9zaXRpb25zTWF0Y2ggPSBjb3JyZWxhdGUoc3VwcG9zaXRpb25zLCBwcm9vZlN0ZXBzLCAoc3VwcG9zaXRpb24sIHByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTWF0Y2hlcyA9IG1hdGNoU3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25NYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdXBwb3NpdGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBzdXBwb3NpdGlvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBzdXBwb3NpdGlvbk1hdGNoZXMgPSBzdXBwb3NpdGlvbk1hdGNoZXNTdGF0ZW1lbnROb2RlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gc3VwcG9zaXRpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbnNlcXVlbnQoY29uc2VxdWVudCwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCBjb25zZXF1ZW50TWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBjb25zZXF1ZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgY29uc2VxdWVudE1hdGNoZXMgPSBjb25zZXF1ZW50TWF0Y2hlc1N0YXRlbWVudE5vZGU7IC8vL1xuXG4gIHJldHVybiBjb25zZXF1ZW50TWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbEFzc2VydGlvbiIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW50IiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldEZpbGVDb250ZXh0IiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50TmF0Y2hlcyIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic3VwcG9zaXRpb25zTWF0Y2giLCJtYXRjaFN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnRNYXRjaGVzIiwibWF0Y2hDb25zZXF1ZW50IiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbkpTT04iLCJjb25zZXF1ZW50SlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiQ2xhc3MiLCJMYWJlbCIsIlN1cHBvc2l0aW9uIiwiQ29uc2VxdWVudCIsInN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21MYWJlbHNTdXBwb3NpdGlvbnNDb25zZXF1ZW50U3Vic3RpdHV0aW9uc0FuZEZpbGVDb250ZXh0IiwicmV2ZXJzZSIsImNvcnJlbGF0ZSIsInByb29mU3RlcCIsInN1cHBvc2l0aW9uTWF0Y2hlcyIsIm1hdGNoU3VwcG9zaXRpb24iLCJnZXRTdGF0ZW1lbnROb2RlIiwic3VwcG9zaXRpb25NYXRjaGVzU3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImNvbnNlcXVlbnRNYXRjaGVzU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NERBUEg7aUVBQ0s7a0VBQ0M7K0VBQ3lCO3FCQUVkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEsa0NBQUQsQUFBTDthQUFNQSxrQkFDUEMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO2dDQURyREw7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFORkw7O1lBU25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFlBQVk7WUFDMUI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7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