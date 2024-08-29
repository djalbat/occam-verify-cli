"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleProofStep;
    }
});
var _array = require("../utilities/array");
var _metaproof = require("../utilities/metaproof");
var _query = require("../utilities/query");
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
var metastatementNodesQuery = (0, _query.nodesQuery)("/subproofAssertion/metastatement"), ruleSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/subproofAssertion"), qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");
var RuleProofStep = /*#__PURE__*/ function() {
    function RuleProofStep(ruleSubproofNode, metaSubproofNode, metastatementNode) {
        _class_call_check(this, RuleProofStep);
        this.ruleSubproofNode = ruleSubproofNode;
        this.metaSubproofNode = metaSubproofNode;
        this.metastatementNode = metastatementNode;
    }
    _create_class(RuleProofStep, [
        {
            key: "getRuleSubproofNode",
            value: function getRuleSubproofNode() {
                return this.ruleSubproofNode;
            }
        },
        {
            key: "getMetaSubproofNode",
            value: function getMetaSubproofNode() {
                return this.metaSubproofNode;
            }
        },
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "match",
            value: function match(metastatementNode) {
                var matches = false;
                if (!matches) {
                    var ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(metastatementNode);
                    if (ruleSubproofAssertionNode !== null) {
                        var ruleSubproofAssertionMatches = this.matchRuleSubproofAssertion(ruleSubproofAssertionNode);
                        matches = ruleSubproofAssertionMatches; ///
                    }
                }
                if (!matches) {
                    var metastatementMatches = this.matchMetastatement(metastatementNode);
                    matches = metastatementMatches; ///
                }
                return matches;
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode) {
                var metastatementMatches = false;
                if (this.metastatementNode !== null) {
                    var metastatementNodeA = metastatementNode, metastatementNodeB = this.metastatementNode; ///
                    metastatementMatches = (0, _metaproof.matchMetastatement)(metastatementNodeA, metastatementNodeB);
                }
                return metastatementMatches;
            }
        },
        {
            key: "matchRuleSubproofAssertion",
            value: function matchRuleSubproofAssertion(ruleSubproofAssertionNode) {
                var ruleSubproofAssertionMatches = false;
                if (this.ruleSubproofNode !== null) {
                    var ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(ruleSubproofAssertionNode), firstRuleSubproofAssertionMetastatementNode = (0, _array.first)(ruleSubproofAssertionMetastatementNodes), qualifiedOrUnqualifiedMetastatementMetastatementNodes = qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery(this.ruleSubproofNode), firstQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.first)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                    var metastatementNodeA = firstRuleSubproofAssertionMetastatementNode, metastatementNodeB = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, metastatementMatches = (0, _metaproof.matchMetastatement)(metastatementNodeA, metastatementNodeB);
                    if (metastatementMatches) {
                        var secondRuleSubproofAssertionMetastatementNode = (0, _array.second)(ruleSubproofAssertionMetastatementNodes), secondQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.second)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                        var metastatementNodeA1 = secondRuleSubproofAssertionMetastatementNode, metastatementNodeB1 = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, metastatementMatches1 = (0, _metaproof.matchMetastatement)(metastatementNodeA1, metastatementNodeB1);
                        ruleSubproofAssertionMatches = metastatementMatches1; ///
                    }
                }
                return ruleSubproofAssertionMatches;
            }
        }
    ], [
        {
            key: "fromRuleSubproofNode",
            value: function fromRuleSubproofNode(ruleSubproofNode) {
                var metaSubproofNode = null, metastatementNode = null, ruleProofStep = new RuleProofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);
                return ruleProofStep;
            }
        },
        {
            key: "fromMetaSubproofNode",
            value: function fromMetaSubproofNode(metaSubproofNode) {
                var ruleSubproofNode = null, metastatementNode = null, ruleProofStep = new RuleProofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);
                return ruleProofStep;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var ruleSubproofNode = null, metaSubproofNode = null, ruleProofStep = new RuleProofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);
                return ruleProofStep;
            }
        }
    ]);
    return RuleProofStep;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL3J1bGVQcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG1hdGNoTWV0YXN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWV0YXByb29mXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9zdWJwcm9vZkFzc2VydGlvbi9tZXRhc3RhdGVtZW50XCIpLFxuICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvc3VicHJvb2ZBc3NlcnRpb25cIiksXG4gICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2YvcXVhbGlmaWVkTWV0YXN0YXRlbWVudHx1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQvbWV0YXN0YXRlbWVudCFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVQcm9vZlN0ZXAge1xuICBjb25zdHJ1Y3RvcihydWxlU3VicHJvb2ZOb2RlLCBtZXRhU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMucnVsZVN1YnByb29mTm9kZSA9IHJ1bGVTdWJwcm9vZk5vZGU7XG4gICAgdGhpcy5tZXRhU3VicHJvb2ZOb2RlID0gbWV0YVN1YnByb29mTm9kZTtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRSdWxlU3VicHJvb2ZOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTdWJwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRNZXRhU3VicHJvb2ZOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFTdWJwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMgPSB0aGlzLm1hdGNoUnVsZVN1YnByb29mQXNzZXJ0aW9uKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIG1hdGNoZXMgPSBydWxlU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWF0Y2hlcyA9IG1ldGFzdGF0ZW1lbnRNYXRjaGVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQiA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoUnVsZVN1YnByb29mQXNzZXJ0aW9uKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUpIHtcbiAgICBsZXQgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucnVsZVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gbWV0YXN0YXRlbWVudE5vZGVzUXVlcnkocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBmaXJzdFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlID0gZmlyc3QocnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzKSxcbiAgICAgICAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzID0gcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSh0aGlzLnJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgZmlyc3RRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlID0gZmlyc3QocXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMpO1xuXG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZUEgPSBmaXJzdFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZUIgPSBmaXJzdFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE1hdGNoZXMpIHtcbiAgICAgICAgY29uc3Qgc2Vjb25kUnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUgPSBzZWNvbmQocnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzKSxcbiAgICAgICAgICAgICAgc2Vjb25kUXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSA9IHNlY29uZChxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlcyk7XG5cbiAgICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVBID0gc2Vjb25kUnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZUIgPSBzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIpO1xuXG4gICAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMgPSBtZXRhc3RhdGVtZW50TWF0Y2hlczsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVTdWJwcm9vZk5vZGUocnVsZVN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IG1ldGFTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBydWxlUHJvb2ZTdGVwID0gbmV3IFJ1bGVQcm9vZlN0ZXAocnVsZVN1YnByb29mTm9kZSwgbWV0YVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGVQcm9vZlN0ZXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFTdWJwcm9vZk5vZGUobWV0YVN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbnVsbCxcbiAgICAgICAgICBydWxlUHJvb2ZTdGVwID0gbmV3IFJ1bGVQcm9vZlN0ZXAocnVsZVN1YnByb29mTm9kZSwgbWV0YVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGVQcm9vZlN0ZXA7XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBydWxlU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBydWxlUHJvb2ZTdGVwID0gbmV3IFJ1bGVQcm9vZlN0ZXAocnVsZVN1YnByb29mTm9kZSwgbWV0YVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHJ1bGVQcm9vZlN0ZXA7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlUHJvb2ZTdGVwIiwibWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRSdWxlU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2giLCJtYXRjaGVzIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMiLCJtYXRjaFJ1bGVTdWJwcm9vZkFzc2VydGlvbiIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGVBIiwibWV0YXN0YXRlbWVudE5vZGVCIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzIiwiZmlyc3RSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsImZpcnN0IiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMiLCJmaXJzdFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUiLCJzZWNvbmRSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsInNlY29uZCIsInNlY29uZFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUiLCJmcm9tUnVsZVN1YnByb29mTm9kZSIsInJ1bGVQcm9vZlN0ZXAiLCJmcm9tTWV0YVN1YnByb29mTm9kZSIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6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