"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Rule;
    }
});
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _substitutions1 = /*#__PURE__*/ _interop_require_default(require("./resolve/substitutions"));
var _premisesWithProofSteps = /*#__PURE__*/ _interop_require_default(require("./unify/premisesWithProofSteps"));
var _conclusionWithStatement = /*#__PURE__*/ _interop_require_default(require("./unify/conclusionWithStatement"));
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
var Rule = /*#__PURE__*/ function() {
    function Rule(labels, premises, conclusion) {
        _class_call_check(this, Rule);
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
    }
    _create_class(Rule, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getPremises",
            value: function getPremises() {
                return this.premises;
            }
        },
        {
            key: "getConclusion",
            value: function getConclusion() {
                return this.conclusion;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNode, localContext) {
                var statementUnified = false;
                var substitutions = _substitutions.default.fromNothing(), proofSteps = localContext.getProofSteps(), premisesA = this.premises, proofStepsB = proofSteps, fileContextA = this.fileContext, localContextB = localContext, premisesUnified = (0, _premisesWithProofSteps.default)(premisesA, proofStepsB, substitutions, fileContextA, localContextB);
                if (premisesUnified) {
                    var conclusionA = this.conclusion, conclusionUnified = (0, _conclusionWithStatement.default)(conclusionA, statementNode, substitutions, fileContextA, localContextB);
                    if (conclusionUnified) {
                        var substitutionsResolved = (0, _substitutions1.default)(substitutions, fileContextA, localContextB);
                        statementUnified = substitutionsResolved; ///
                    }
                }
                return statementUnified;
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
            key: "toJSON",
            value: function toJSON(fileContext) {
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON(fileContext);
                    return labelJSON;
                }), premisesJSON = this.premises.map(function(premise) {
                    var premiseJSON = premise.toJSON(fileContext);
                    return premiseJSON;
                }), conclusionJSON = this.conclusion.toJSON(fileContext), labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
                    labels: labels,
                    premises: premises,
                    conclusion: conclusion
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var rule;
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = Label.fromJSON(_$json, fileContext);
                    return label;
                });
                var premises = json.premises;
                var premisesJSON = premises; ///
                premises = premisesJSON.map(function(premiseJSON) {
                    var _$json = premiseJSON, premise = Premise.fromJSON(_$json, fileContext);
                    return premise;
                });
                var conclusion = json.conclusion;
                var conclusionJSON = conclusion; ///
                json = conclusionJSON; ///
                conclusion = Conclusion.fromJSON(json, fileContext);
                rule = new Rule(labels, premises, conclusion);
                return rule;
            }
        },
        {
            key: "fromRuleNodeLabelsPremisesAndConclusion",
            value: function fromRuleNodeLabelsPremisesAndConclusion(ruleNode, labels, premises, conclusion) {
                var rule = new Rule(labels, premises, conclusion);
                return rule;
            }
        }
    ]);
    return Rule;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgcmVzb2x2ZVN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vcmVzb2x2ZS9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgdW5pZnlQcmVtaXNlc1dpdGhQcm9vZlN0ZXBzIGZyb20gXCIuL3VuaWZ5L3ByZW1pc2VzV2l0aFByb29mU3RlcHNcIjtcbmltcG9ydCB1bmlmeUNvbmNsdXNpb25XaXRoU3RhdGVtZW50IGZyb20gXCIuL3VuaWZ5L2NvbmNsdXNpb25XaXRoU3RhdGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5wcmVtaXNlcyA9IHByZW1pc2VzO1xuICAgIHRoaXMuY29uY2x1c2lvbiA9IGNvbmNsdXNpb247XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gbG9jYWxDb250ZXh0LmdldFByb29mU3RlcHMoKSxcbiAgICAgICAgICBwcmVtaXNlc0EgPSB0aGlzLnByZW1pc2VzLFxuICAgICAgICAgIHByb29mU3RlcHNCID0gcHJvb2ZTdGVwcywgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gdGhpcy5maWxlQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHByZW1pc2VzVW5pZmllZCA9IHVuaWZ5UHJlbWlzZXNXaXRoUHJvb2ZTdGVwcyhwcmVtaXNlc0EsIHByb29mU3RlcHNCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgaWYgKHByZW1pc2VzVW5pZmllZCkge1xuICAgICAgY29uc3QgY29uY2x1c2lvbkEgPSB0aGlzLmNvbmNsdXNpb24sICAvLy9cbiAgICAgICAgICAgIGNvbmNsdXNpb25VbmlmaWVkID0gdW5pZnlDb25jbHVzaW9uV2l0aFN0YXRlbWVudChjb25jbHVzaW9uQSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgaWYgKGNvbmNsdXNpb25VbmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHJlc29sdmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN1YnN0aXR1dGlvbnNSZXNvbHZlZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSB0aGlzLnByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTihmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IHRoaXMuY29uY2x1c2lvbi50b0pTT04oZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gICAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5vZGVMYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24ocnVsZU5vZGUsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICBjb25zdCBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldENvbmNsdXNpb24iLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwicHJlbWlzZXNBIiwicHJvb2ZTdGVwc0IiLCJmaWxlQ29udGV4dEEiLCJmaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dEIiLCJwcmVtaXNlc1VuaWZpZWQiLCJ1bmlmeVByZW1pc2VzV2l0aFByb29mU3RlcHMiLCJjb25jbHVzaW9uQSIsImNvbmNsdXNpb25VbmlmaWVkIiwidW5pZnlDb25jbHVzaW9uV2l0aFN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidG9KU09OIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2UiLCJwcmVtaXNlSlNPTiIsImNvbmNsdXNpb25KU09OIiwianNvbiIsImZyb21KU09OIiwicnVsZSIsIkxhYmVsIiwiUHJlbWlzZSIsIkNvbmNsdXNpb24iLCJmcm9tUnVsZU5vZGVMYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJydWxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7b0VBTEs7cUVBQ087NkVBQ087OEVBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBQSxBQUFNQSxxQkFBTjthQUFNQSxLQUNQ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