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
var _query = require("../utilities/query");
var _metaproof = require("../utilities/metaproof");
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
    function MetaproofStep(ruleSubproofNode, metastatementNode) {
        _class_call_check(this, MetaproofStep);
        this.ruleSubproofNode = ruleSubproofNode;
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
                    var metastatementNodeA = metastatementNode, metastatementNodeB = this.metastatementNode, metastatementMatchesModuloBrackets = (0, _metaproof.matchMetastatementModuloBrackets)(metastatementNodeA, metastatementNodeB);
                    metastatementMatches = metastatementMatchesModuloBrackets; ///
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
                    var metastatementNodeA = firstRuleSubproofAssertionMetastatementNode, metastatementNodeB = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, metastatementMatchesModuloBrackets = (0, _metaproof.matchMetastatementModuloBrackets)(metastatementNodeA, metastatementNodeB);
                    if (metastatementMatchesModuloBrackets) {
                        var secondRuleSubproofAssertionMetastatementNode = (0, _array.second)(ruleSubproofAssertionMetastatementNodes), secondQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.second)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                        var metastatementNodeA1 = secondRuleSubproofAssertionMetastatementNode, metastatementNodeB1 = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, metastatementMatchesModuloBrackets1 = (0, _metaproof.matchMetastatementModuloBrackets)(metastatementNodeA1, metastatementNodeB1);
                        ruleSubproofAssertionMatches = metastatementMatchesModuloBrackets1; ///
                    }
                }
                return ruleSubproofAssertionMatches;
            }
        }
    ], [
        {
            key: "fromRuleSubproofNode",
            value: function fromRuleSubproofNode(ruleSubproofNode) {
                var metastatementNode = null, metaProofStep = new MetaproofStep(ruleSubproofNode, metastatementNode);
                return metaProofStep;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var ruleSubproofNode = null, metaProofStep = new MetaproofStep(ruleSubproofNode, metastatementNode);
                return metaProofStep;
            }
        }
    ]);
    return MetaproofStep;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL21ldGFwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1hdGNoTWV0YXN0YXRlbWVudE1vZHVsb0JyYWNrZXRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tZXRhcHJvb2ZcIjtcblxuY29uc3QgbWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVTdWJwcm9vZkFzc2VydGlvbi9tZXRhc3RhdGVtZW50XCIpLFxuICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvcnVsZVN1YnByb29mQXNzZXJ0aW9uXCIpLFxuICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mL3F1YWxpZmllZE1ldGFzdGF0ZW1lbnR8dW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50L21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhcHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3IocnVsZVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnJ1bGVTdWJwcm9vZk5vZGUgPSBydWxlU3VicHJvb2ZOb2RlO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyA9IHRoaXMubWF0Y2hSdWxlU3VicHJvb2ZBc3NlcnRpb24ocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgICAgbWF0Y2hlcyA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBtYXRjaGVzID0gbWV0YXN0YXRlbWVudE1hdGNoZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVBID0gbWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVCID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXNNb2R1bG9CcmFja2V0cyA9IG1hdGNoTWV0YXN0YXRlbWVudE1vZHVsb0JyYWNrZXRzKG1ldGFzdGF0ZW1lbnROb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hSdWxlU3VicHJvb2ZBc3NlcnRpb24ocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSkge1xuICAgIGxldCBydWxlU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5ydWxlU3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGZpcnN0UnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUgPSBmaXJzdChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMpLFxuICAgICAgICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMgPSBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHRoaXMucnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBmaXJzdFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUgPSBmaXJzdChxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlcyk7XG5cbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IGZpcnN0UnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQiA9IGZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzID0gbWF0Y2hNZXRhc3RhdGVtZW50TW9kdWxvQnJhY2tldHMobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE1hdGNoZXNNb2R1bG9CcmFja2V0cykge1xuICAgICAgICBjb25zdCBzZWNvbmRSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSA9IHNlY29uZChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMpLFxuICAgICAgICAgICAgICBzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlID0gc2Vjb25kKHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzKTtcblxuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZUEgPSBzZWNvbmRSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQiA9IHNlY29uZFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzID0gbWF0Y2hNZXRhc3RhdGVtZW50TW9kdWxvQnJhY2tldHMobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIpO1xuXG4gICAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMgPSBtZXRhc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChydWxlU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBydWxlU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhUHJvb2ZTdGVwID0gbmV3IE1ldGFwcm9vZlN0ZXAocnVsZVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFQcm9vZlN0ZXA7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNZXRhcHJvb2ZTdGVwIiwibWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldFJ1bGVTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoIiwibWF0Y2hlcyIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzIiwibWF0Y2hSdWxlU3VicHJvb2ZBc3NlcnRpb24iLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlQSIsIm1ldGFzdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzTW9kdWxvQnJhY2tldHMiLCJtYXRjaE1ldGFzdGF0ZW1lbnRNb2R1bG9CcmFja2V0cyIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsImZpcnN0UnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJmaXJzdCIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzIiwiZmlyc3RRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlIiwic2Vjb25kUnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJzZWNvbmQiLCJzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlIiwiZnJvbVJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhUHJvb2ZTdGVwIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztxQkFSUztxQkFDUTt5QkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBTUMsMEJBQTBCQyxJQUFBQSxpQkFBVSxFQUFDLHlDQUNyQ0MsaUNBQWlDQyxJQUFBQSxnQkFBUyxFQUFDLHlDQUMzQ0MsNkRBQTZESCxJQUFBQSxpQkFBVSxFQUFDO0FBRS9ELElBQUEsQUFBTUYsOEJBQU47YUFBTUEsY0FDUE0sZ0JBQWdCLEVBQUVDLGlCQUFpQjtnQ0FENUJQO1FBRWpCLElBQUksQ0FBQ00sZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztr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