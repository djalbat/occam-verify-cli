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
            key: "matchStatement",
            value: function matchStatement(statementNode, localContext) {
                var matchesStatement = false;
                var proofSteps = localContext.getProofSteps(), substitutions = [], premisesMatch = matchPremises(this.premises, proofSteps, substitutions, this.fileContext, localContext);
                if (premisesMatch) {
                    var conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, this.fileContext, localContext);
                    matchesStatement = conclusionMatches; ///
                }
                return matchesStatement;
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
    var premiseMatches = false;
    var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
    if (subproofNode !== null) {
        var premiseMatchesSubproofNode = premise.matchSubproofNode(subproofNode, substitutions, fileContext, localContext);
        premiseMatches = premiseMatchesSubproofNode; ///
    }
    if (statementNode !== null) {
        var premiseMatchesStatementNode = premise.matchStatementNode(statementNode, substitutions, fileContext, localContext);
        premiseMatches = premiseMatchesStatementNode; ///
    }
    return premiseMatches;
}
function matchPremises(premises, proofSteps, substitutions, fileContext, localContext) {
    premises = (0, _array.reverse)(premises); ///
    proofSteps = (0, _array.reverse)(proofSteps); ///
    var premisesMatch = (0, _array.correlate)(premises, proofSteps, function(premise, proofStep) {
        var premiseMatches = matchPremise(premise, proofStep, substitutions, fileContext, localContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function matchConclusion(conclusion, statementNode, substitutions, fileContext, localContext) {
    var conclusionMatchesStatementNode = conclusion.matchStatementNode(statementNode, substitutions, fileContext, localContext), conclusionMatches = conclusionMatchesStatementNode; ///
    return conclusionMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcmV2ZXJzZSwgY29ycmVsYXRlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG1hdGNoZXNTdGF0ZW1lbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWF0Y2hQcmVtaXNlcyh0aGlzLnByZW1pc2VzLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgbWF0Y2hlc1N0YXRlbWVudCA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNTdGF0ZW1lbnQ7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSB0aGlzLnByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSB0aGlzLmNvbmNsdXNpb24udG9KU09OKHRva2VucyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHJ1bGU7XG5cbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAgICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dChsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2UocHJlbWlzZSwgcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBwcmVtaXNlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHN1YnByb29mTm9kZSA9IHByb29mU3RlcC5nZXRTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzU3VicHJvb2ZOb2RlID0gcHJlbWlzZS5tYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgcHJlbWlzZU1hdGNoZXMgPSBwcmVtaXNlTWF0Y2hlc1N1YnByb29mTm9kZTsgLy8vXG4gIH1cblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzU3RhdGVtZW50Tm9kZSA9IHByZW1pc2UubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgcHJlbWlzZU1hdGNoZXMgPSBwcmVtaXNlTWF0Y2hlc1N0YXRlbWVudE5vZGU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlcyhwcmVtaXNlcywgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBwcmVtaXNlcyA9IHJldmVyc2UocHJlbWlzZXMpOyAvLy9cblxuICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgY29uc3QgcHJlbWlzZXNNYXRjaCA9IGNvcnJlbGF0ZShwcmVtaXNlcywgcHJvb2ZTdGVwcywgKHByZW1pc2UsIHByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQ29uY2x1c2lvbihjb25jbHVzaW9uLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzU3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IGNvbmNsdXNpb25NYXRjaGVzU3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJmaWxlQ29udGV4dCIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsImdldEZpbGVDb250ZXh0IiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0IiwibWF0Y2hlc1N0YXRlbWVudCIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic3Vic3RpdHV0aW9ucyIsInByZW1pc2VzTWF0Y2giLCJtYXRjaFByZW1pc2VzIiwiY29uY2x1c2lvbk1hdGNoZXMiLCJtYXRjaENvbmNsdXNpb24iLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJzb21lIiwibGFiZWwiLCJsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2UiLCJwcmVtaXNlSlNPTiIsImNvbmNsdXNpb25KU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJydWxlIiwiTGFiZWwiLCJQcmVtaXNlIiwiQ29uY2x1c2lvbiIsImZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dCIsIm1hdGNoUHJlbWlzZSIsInByb29mU3RlcCIsInByZW1pc2VNYXRjaGVzIiwic3VicHJvb2ZOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInByZW1pc2VNYXRjaGVzU3VicHJvb2ZOb2RlIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJwcmVtaXNlTWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwiY29uY2x1c2lvbk1hdGNoZXNTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozs0REFOSDs4REFDRTtpRUFDRztxQkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFBLEFBQU1BLHFCQUFELEFBQUw7YUFBTUEsS0FDUEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEbENKO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFMRko7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFdBQVc7WUFDekI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsYUFBYSxFQUFFQyxZQUFZO2dCQUN4QyxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLGFBQWFGLGFBQWFH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