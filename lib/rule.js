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
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _premise = /*#__PURE__*/ _interop_require_default(require("./premise"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./conclusion"));
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
var Rule = /*#__PURE__*/ function() {
    function Rule(labels, premises, conclusion, fileContext) {
        _class_call_check(this, Rule);
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
        this.fileContext = fileContext;
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
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNode, localContext) {
                var statementUnified = false;
                var proofSteps = localContext.getProofSteps(), substitutions = [], premisesUnified = unifyPremises(this.premises, proofSteps, substitutions, this.fileContext, localContext);
                if (premisesUnified) {
                    var conclusionUnified = unifyConclusion(this.conclusion, statementNode, substitutions, this.fileContext, localContext);
                    statementUnified = conclusionUnified; ///
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
                }), premisesJSON = this.premises.map(function(premise) {
                    var premiseJSON = premise.toJSON(tokens);
                    return premiseJSON;
                }), conclusionJSON = this.conclusion.toJSON(tokens), labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
                    labels: labels,
                    premises: premises,
                    conclusion: conclusion
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var rule;
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSONAndFileContext(_$json, fileContext);
                    return label;
                });
                var premises = json.premises;
                var premisesJSON = premises; ///
                premises = premisesJSON.map(function(premiseJSON) {
                    var _$json = premiseJSON, premise = _premise.default.fromJSONAndFileContext(_$json, fileContext);
                    return premise;
                });
                var conclusion = json.conclusion;
                var conclusionJSON = conclusion; ///
                json = conclusionJSON; ///
                conclusion = _conclusion.default.fromJSONAndFileContext(json, fileContext);
                rule = new Rule(labels, premises, conclusion, fileContext);
                return rule;
            }
        },
        {
            key: "fromLabelsPremisesConclusionAndFileContext",
            value: function fromLabelsPremisesConclusionAndFileContext(labels, premises, conclusion, fileContext) {
                var rule = new Rule(labels, premises, conclusion, fileContext);
                return rule;
            }
        }
    ]);
    return Rule;
}();
function matchPremise(premise, proofStep, substitutions, fileContext, localContext) {
    var premiseUnified = false;
    var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
    if (subproofNode !== null) {
        var subproofUnified = premise.unifySubproof(subproofNode, substitutions, fileContext, localContext);
        premiseUnified = subproofUnified; ///
    }
    if (statementNode !== null) {
        var statementUnified = premise.unifyStatement(statementNode, substitutions, fileContext, localContext);
        premiseUnified = statementUnified; ///
    }
    return premiseUnified;
}
function unifyPremises(premises, proofSteps, substitutions, fileContext, localContext) {
    premises = (0, _array.reverse)(premises); ///
    proofSteps = (0, _array.reverse)(proofSteps); ///
    var premisesUnified = (0, _array.correlate)(premises, proofSteps, function(premise, proofStep) {
        var premiseUnified = matchPremise(premise, proofStep, substitutions, fileContext, localContext);
        if (premiseUnified) {
            return true;
        }
    });
    return premisesUnified;
}
function unifyConclusion(conclusion, statementNode, substitutions, fileContext, localContext) {
    var statementUnified = conclusion.unifyStatement(statementNode, substitutions, fileContext, localContext), conclusionUnified = statementUnified; ///
    return conclusionUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcmV2ZXJzZSwgY29ycmVsYXRlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlc1VuaWZpZWQgPSB1bmlmeVByZW1pc2VzKHRoaXMucHJlbWlzZXMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZXNVbmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25jbHVzaW9uVW5pZmllZCA9IHVuaWZ5Q29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBjb25jbHVzaW9uVW5pZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gdGhpcy5wcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gdGhpcy5jb25jbHVzaW9uLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gICAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgcHJlbWlzZVVuaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBzdWJwcm9vZk5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2ZOb2RlKCksXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzdWJwcm9vZlVuaWZpZWQgPSBwcmVtaXNlLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHByZW1pc2VVbmlmaWVkID0gc3VicHJvb2ZVbmlmaWVkOyAvLy9cbiAgfVxuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHByZW1pc2UudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBwcmVtaXNlVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlVW5pZmllZDtcbn1cblxuZnVuY3Rpb24gdW5pZnlQcmVtaXNlcyhwcmVtaXNlcywgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBwcmVtaXNlcyA9IHJldmVyc2UocHJlbWlzZXMpOyAvLy9cblxuICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgY29uc3QgcHJlbWlzZXNVbmlmaWVkID0gY29ycmVsYXRlKHByZW1pc2VzLCBwcm9vZlN0ZXBzLCAocHJlbWlzZSwgcHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZVVuaWZpZWQgPSBtYXRjaFByZW1pc2UocHJlbWlzZSwgcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChwcmVtaXNlVW5pZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNVbmlmaWVkO1xufVxuXG5mdW5jdGlvbiB1bmlmeUNvbmNsdXNpb24oY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gY29uY2x1c2lvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvblVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvblVuaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsiUnVsZSIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImZpbGVDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwiZ2V0RmlsZUNvbnRleHQiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzdWJzdGl0dXRpb25zIiwicHJlbWlzZXNVbmlmaWVkIiwidW5pZnlQcmVtaXNlcyIsImNvbmNsdXNpb25VbmlmaWVkIiwidW5pZnlDb25jbHVzaW9uIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwicnVsZSIsIkxhYmVsIiwiUHJlbWlzZSIsIkNvbmNsdXNpb24iLCJmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQiLCJtYXRjaFByZW1pc2UiLCJwcm9vZlN0ZXAiLCJwcmVtaXNlVW5pZmllZCIsInN1YnByb29mTm9kZSIsImdldFN1YnByb29mTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZlVuaWZpZWQiLCJ1bmlmeVN1YnByb29mIiwicmV2ZXJzZSIsImNvcnJlbGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7NERBTkg7OERBQ0U7aUVBQ0c7cUJBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxxQkFBRCxBQUFMO2FBQU1BLEtBQ1BDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRGxDSjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBTEZKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixRQUFRO1lBQ3RCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixVQUFVO1lBQ3hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixXQUFXO1lBQ3pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLGFBQWEsRUFBRUMsWUFBWTtnQkFDeEMsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNQyxhQUFhRixhQUFhRyxhQUFhLElBQ3ZDQyxnQkFBZ0IsRUFBRSxFQUNsQkMsa0JBQWtCQyxjQUFjLElBQUksQ0FBQ2YsUUFBUSxFQUFFVyxZQUFZRSxlQUFlLElBQUksQ0FBQ1gsV0FBVyxFQUFFTztnQkFFbEcsSUFBSUssaUJBQWlCO29CQUNuQixJQUFNRSxvQkFBb0JDLGdCQUFnQixJQUFJLENBQUNoQixVQUFVLEVBQUVPLGVB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