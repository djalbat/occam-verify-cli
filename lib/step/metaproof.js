"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaproofStep;
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
var metastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproofAssertion/metastatement"), ruleSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/ruleSubproofAssertion"), qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");
var MetaproofStep = /*#__PURE__*/ function() {
    function MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode) {
        _class_call_check(this, MetaproofStep);
        this.ruleSubproofNode = ruleSubproofNode;
        this.metaSubproofNode = metaSubproofNode;
        this.metastatementNode = metastatementNode;
    }
    _create_class(MetaproofStep, [
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
                var metaSubproofNode = null, metastatementNode = null, metaProofStep = new MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);
                return metaProofStep;
            }
        },
        {
            key: "fromMetaSubproofNode",
            value: function fromMetaSubproofNode(metaSubproofNode) {
                var ruleSubproofNode = null, metastatementNode = null, metaProofStep = new MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);
                return metaProofStep;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var ruleSubproofNode = null, metaSubproofNode = null, metaProofStep = new MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode);
                return metaProofStep;
            }
        }
    ]);
    return MetaproofStep;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG1hdGNoTWV0YXN0YXRlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWV0YXByb29mXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3J1bGVTdWJwcm9vZkFzc2VydGlvblwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVTdWJwcm9vZi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5ydWxlU3VicHJvb2ZOb2RlID0gcnVsZVN1YnByb29mTm9kZTtcbiAgICB0aGlzLm1ldGFTdWJwcm9vZk5vZGUgPSBtZXRhU3VicHJvb2ZOb2RlO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldE1ldGFTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyA9IHRoaXMubWF0Y2hSdWxlU3VicHJvb2ZBc3NlcnRpb24ocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgICAgbWF0Y2hlcyA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBtYXRjaGVzID0gbWV0YXN0YXRlbWVudE1hdGNoZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVBID0gbWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVCID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hSdWxlU3VicHJvb2ZBc3NlcnRpb24ocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSkge1xuICAgIGxldCBydWxlU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5ydWxlU3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGZpcnN0UnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUgPSBmaXJzdChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMpLFxuICAgICAgICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMgPSBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHRoaXMucnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBmaXJzdFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUgPSBmaXJzdChxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlcyk7XG5cbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IGZpcnN0UnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQiA9IGZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQik7XG5cbiAgICAgIGlmIChtZXRhc3RhdGVtZW50TWF0Y2hlcykge1xuICAgICAgICBjb25zdCBzZWNvbmRSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSA9IHNlY29uZChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMpLFxuICAgICAgICAgICAgICBzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlID0gc2Vjb25kKHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzKTtcblxuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZUEgPSBzZWNvbmRSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQiA9IHNlY29uZFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQik7XG5cbiAgICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyA9IG1ldGFzdGF0ZW1lbnRNYXRjaGVzOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChydWxlU3VicHJvb2ZOb2RlLCBtZXRhU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3QgcnVsZVN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChydWxlU3VicHJvb2ZOb2RlLCBtZXRhU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcblxuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChydWxlU3VicHJvb2ZOb2RlLCBtZXRhU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1ldGFwcm9vZlN0ZXAiLCJtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5IiwicnVsZVN1YnByb29mTm9kZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldFJ1bGVTdWJwcm9vZk5vZGUiLCJnZXRNZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaCIsIm1hdGNoZXMiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyIsIm1hdGNoUnVsZVN1YnByb29mQXNzZXJ0aW9uIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZUEiLCJtZXRhc3RhdGVtZW50Tm9kZUIiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJmaXJzdFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwiZmlyc3QiLCJxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlcyIsImZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSIsInNlY29uZFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwic2Vjb25kIiwic2Vjb25kUXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSIsImZyb21SdWxlU3VicHJvb2ZOb2RlIiwibWV0YVByb29mU3RlcCIsImZyb21NZXRhU3VicHJvb2ZOb2RlIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztxQkFSUzt5QkFDSztxQkFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsMEJBQTBCQyxJQUFBQSxpQkFBVSxFQUFDLHlDQUNyQ0MsaUNBQWlDQyxJQUFBQSxnQkFBUyxFQUFDLHlDQUMzQ0MsNkRBQTZESCxJQUFBQSxpQkFBVSxFQUFDO0FBRS9ELElBQUEsQUFBTUYsOEJBQUQsQUFBTDthQUFNQSxjQUNQTSxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGlCQUFpQjtnQ0FEOUNSO1FBRWpCLElBQUksQ0FBQ00sZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztrQkFKUlI7O1lBT25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGdCQUFnQjtZQUM5Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsZ0JBQWdCO1lBQzlCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxpQkFBaUI7WUFDL0I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUosaUJBQWlCO2dCQUNyQixJQUFJSyxVQUFVO2dCQUVkLElBQUksQ0FBQ0EsU0FBUztvQkFDWixJQUFNQyw0QkFBNEJYLCtCQUErQks7b0JBRWpFLElBQUlNLDhCQUE4QixNQUFNO3dCQUN0QyxJQUFNQywrQkFBK0IsSUFBSSxDQUFDQywwQkFBMEIsQ0FBQ0Y7d0JBRXJFRCxVQUFVRSw4QkFBK0IsR0FBRztvQkFDOUM7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDRixTQUFTO29CQUNaLElBQU1JLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDVjtvQkFFckRLLFVBQVVJLHNCQUFzQixHQUFHO2dCQUNyQztnQkFFQSxPQUFPSjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQlYsaUJBQWlCO2dCQUNsQyxJQUFJUyx1QkFBdUI7Z0JBRTNCLElBQUksSUFBSSxDQUFDVCxpQkFBaUIsS0FBSyxNQUFNO29CQUNuQyxJQUFNVyxxQkFBcUJYLG1CQUNyQlkscUJBQXFCLElBQUksQ0FBQ1osaUJBQWlCLEVBQUcsR0FBRztvQkFFdkRTLHVCQUF1QkMsSUFBQUEsNkJBQWtCLEVBQUNDLG9CQUFvQkM7Z0JBQ2hFO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCRix5QkFBeUI7Z0JBQ2xELElBQUlDLCtCQUErQjtnQkFFbkMsSUFBSSxJQUFJLENBQUNULGdCQUFnQixLQUFLLE1BQU07b0JBQ2xDLElBQU1lLDBDQUEwQ3BCLHdCQUF3QmEsNEJBQ2xFUSw4Q0FBOENDLElBQUFBLFlBQUssRUFBQ0YsMENBQ3BERyx3REFBd0RuQiwyREFBMkQsSUFBSSxDQUFDQyxnQkFBZ0IsR0FDeEltQiw0REFBNERGLElBQUFBLFlBQUssRUFBQ0M7b0JBRXhFLElBQU1MLHFCQUFxQkcsNkNBQ3JCRixxQkFBcUJLLDJEQUNyQlIsdUJBQXVCQyxJQUFBQSw2QkFBa0IsRUFBQ0Msb0JBQW9CQztvQkFFcEUsSUFBSUgsc0JBQXNCO3dCQUN4QixJQUFNUywrQ0FBK0NDLElBQUFBLGFBQU0sRUFBQ04sMENBQ3RETyw2REFBNkRELElBQUFBLGFBQU0sRUFBQ0g7d0JBRTFFLElBQU1MLHNCQUFxQk8sOENBQ3JCTixzQkFBcUJRLDREQUNyQlgsd0JBQXVCQyxJQUFBQSw2QkFBa0IsRUFBQ0MscUJBQW9CQzt3QkFFcEVMLCtCQUErQkUsdUJBQXNCLEdBQUc7b0JBQzFEO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7Ozs7WUFFT2MsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCdkIsZ0JBQWdCO2dCQUMxQyxJQUFNQyxtQkFBbUIsTUFDbkJDLG9CQUFvQixNQUNwQnNCLGdCQUFnQixJQXJGTDlCLGNBcUZ1Qk0sa0JBQWtCQyxrQkFBa0JDO2dCQUU1RSxPQUFPc0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQnhCLGdCQUFnQjtnQkFDMUMsSUFBTUQsbUJBQW1CLE1BQ25CRSxvQkFBb0IsTUFDcEJzQixnQkFBZ0IsSUE3Rkw5QixjQTZGdUJNLGtCQUFrQkMsa0JBQWtCQztnQkFFNUUsT0FBT3NCO1lBRVQ7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0J4QixpQkFBaUI7Z0JBQzVDLElBQU1GLG1CQUFtQixNQUNuQkMsbUJBQW1CLE1BQ25CdUIsZ0JBQWdCLElBdEdMOUIsY0FzR3VCTSxrQkFBa0JDLGtCQUFrQkM7Z0JBRTVFLE9BQU9zQjtZQUNUOzs7V0F6R21COUIifQ==