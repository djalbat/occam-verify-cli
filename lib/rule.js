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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _substitutions1 = /*#__PURE__*/ _interop_require_default(require("./resolve/substitutions"));
var _premisesWithProofSteps = /*#__PURE__*/ _interop_require_default(require("./unify/premisesWithProofSteps"));
var _conclusionWithStatement = /*#__PURE__*/ _interop_require_default(require("./unify/conclusionWithStatement"));
var _query = require("./utilities/query");
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
var labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), premiseNodesQuery = (0, _query.nodesQuery)("/rule/premise"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion");
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
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, fileContext);
                    return label;
                });
                var premises = json.premises;
                var premisesJSON = premises; ///
                premises = premisesJSON.map(function(premiseJSON) {
                    var _$json = premiseJSON, premise = _premise.default.fromJSON(_$json, fileContext);
                    return premise;
                });
                var conclusion = json.conclusion;
                var conclusionJSON = conclusion; ///
                json = conclusionJSON; ///
                conclusion = _conclusion.default.fromJSON(json, fileContext);
                rule = new Rule(labels, premises, conclusion);
                return rule;
            }
        },
        {
            key: "fromRuleNode",
            value: function fromRuleNode(ruleNode, fileContext) {
                var labelNodes = labelNodesQuery(ruleNode), premiseNodes = premiseNodesQuery(ruleNode), conclusionNode = conclusionNodeQuery(ruleNode), labels = labelNodes.map(function(labelNode) {
                    var label = _label.default.fromLabelNode(labelNode, fileContext);
                    return label;
                }), premises = premiseNodes.map(function(premiseNode) {
                    var premise = _premise.default.fromPremiseNode(premiseNode, fileContext);
                    return premise;
                }), conclusion = _conclusion.default.fromConclusionNode(conclusionNode, fileContext), rule = new Rule(labels, premises, conclusion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCByZXNvbHZlU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9yZXNvbHZlL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCB1bmlmeVByZW1pc2VzV2l0aFByb29mU3RlcHMgZnJvbSBcIi4vdW5pZnkvcHJlbWlzZXNXaXRoUHJvb2ZTdGVwc1wiO1xuaW1wb3J0IHVuaWZ5Q29uY2x1c2lvbldpdGhTdGF0ZW1lbnQgZnJvbSBcIi4vdW5pZnkvY29uY2x1c2lvbldpdGhTdGF0ZW1lbnRcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbFwiKSxcbiAgICAgIHByZW1pc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL3ByZW1pc2VcIiksXG4gICAgICBjb25jbHVzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvY29uY2x1c2lvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHByZW1pc2VzQSA9IHRoaXMucHJlbWlzZXMsXG4gICAgICAgICAgcHJvb2ZTdGVwc0IgPSBwcm9vZlN0ZXBzLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dEEgPSB0aGlzLmZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgcHJlbWlzZXNVbmlmaWVkID0gdW5pZnlQcmVtaXNlc1dpdGhQcm9vZlN0ZXBzKHByZW1pc2VzQSwgcHJvb2ZTdGVwc0IsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBpZiAocHJlbWlzZXNVbmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25jbHVzaW9uQSA9IHRoaXMuY29uY2x1c2lvbiwgIC8vL1xuICAgICAgICAgICAgY29uY2x1c2lvblVuaWZpZWQgPSB1bmlmeUNvbmNsdXNpb25XaXRoU3RhdGVtZW50KGNvbmNsdXNpb25BLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBpZiAoY29uY2x1c2lvblVuaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gcmVzb2x2ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1Jlc29sdmVkOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTihmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHRoaXMucHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gdGhpcy5jb25jbHVzaW9uLnRvSlNPTihmaWxlQ29udGV4dCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAgICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTm9kZShydWxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBjb25jbHVzaW9uTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VOb2Rlcy5tYXAoKHByZW1pc2VOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlID0gUHJlbWlzZS5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOb2RlTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKHJ1bGVOb2RlLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByZW1pc2VOb2Rlc1F1ZXJ5IiwiY29uY2x1c2lvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJwcmVtaXNlc0EiLCJwcm9vZlN0ZXBzQiIsImZpbGVDb250ZXh0QSIsImZpbGVDb250ZXh0IiwibG9jYWxDb250ZXh0QiIsInByZW1pc2VzVW5pZmllZCIsInVuaWZ5UHJlbWlzZXNXaXRoUHJvb2ZTdGVwcyIsImNvbmNsdXNpb25BIiwiY29uY2x1c2lvblVuaWZpZWQiLCJ1bmlmeUNvbmNsdXNpb25XaXRoU3RhdGVtZW50Iiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwicmVzb2x2ZVN1YnN0aXR1dGlvbnMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZSIsInByZW1pc2VKU09OIiwiY29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJydWxlIiwiTGFiZWwiLCJQcmVtaXNlIiwiQ29uY2x1c2lvbiIsImZyb21SdWxlTm9kZSIsInJ1bGVOb2RlIiwibGFiZWxOb2RlcyIsInByZW1pc2VOb2RlcyIsImNvbmNsdXNpb25Ob2RlIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsInByZW1pc2VOb2RlIiwiZnJvbVByZW1pc2VOb2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwiZnJvbVJ1bGVOb2RlTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWdCcUJBOzs7NERBZEg7OERBQ0U7aUVBQ0c7b0VBQ0c7cUVBQ087NkVBQ087OEVBQ0M7cUJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGdCQUM3QkMsb0JBQW9CRCxJQUFBQSxpQkFBVSxFQUFDLGtCQUMvQkUsc0JBQXNCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXZCLElBQUEsQUFBTUwscUJBQU47YUFBTUEsS0FDUE0sTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7Z0NBRHJCUjtRQUVqQixJQUFJLENBQUNNLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFKRFI7O1lBT25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsYUFBYSxFQUFFQyxZQUFZO2dCQUN4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