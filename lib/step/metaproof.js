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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL21ldGFwcm9vZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1hdGNoTWV0YXN0YXRlbWVudE1vZHVsb0JyYWNrZXRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tZXRhcHJvb2ZcIjtcblxuY29uc3QgbWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVTdWJwcm9vZkFzc2VydGlvbi9tZXRhc3RhdGVtZW50XCIpLFxuICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvcnVsZVN1YnByb29mQXNzZXJ0aW9uXCIpLFxuICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mL3F1YWxpZmllZE1ldGFzdGF0ZW1lbnR8dW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50L21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhcHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3IocnVsZVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnJ1bGVTdWJwcm9vZk5vZGUgPSBydWxlU3VicHJvb2ZOb2RlO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2gobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyA9IHRoaXMubWF0Y2hSdWxlU3VicHJvb2ZBc3NlcnRpb24ocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgICAgbWF0Y2hlcyA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBtYXRjaGVzID0gbWV0YXN0YXRlbWVudE1hdGNoZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVBID0gbWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVCID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXNNb2R1bG9CcmFja2V0cyA9IG1hdGNoTWV0YXN0YXRlbWVudE1vZHVsb0JyYWNrZXRzKG1ldGFzdGF0ZW1lbnROb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hSdWxlU3VicHJvb2ZBc3NlcnRpb24ocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSkge1xuICAgIGxldCBydWxlU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5ydWxlU3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGZpcnN0UnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUgPSBmaXJzdChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMpLFxuICAgICAgICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMgPSBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHRoaXMucnVsZVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBmaXJzdFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUgPSBmaXJzdChxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlcyk7XG5cbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IGZpcnN0UnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQiA9IGZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzID0gbWF0Y2hNZXRhc3RhdGVtZW50TW9kdWxvQnJhY2tldHMobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE1hdGNoZXNNb2R1bG9CcmFja2V0cykge1xuICAgICAgICBjb25zdCBzZWNvbmRSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSA9IHNlY29uZChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMpLFxuICAgICAgICAgICAgICBzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlID0gc2Vjb25kKHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzKTtcblxuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZUEgPSBzZWNvbmRSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQiA9IHNlY29uZFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzID0gbWF0Y2hNZXRhc3RhdGVtZW50TW9kdWxvQnJhY2tldHMobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIpO1xuXG4gICAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMgPSBtZXRhc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChydWxlU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBydWxlU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhUHJvb2ZTdGVwID0gbmV3IE1ldGFwcm9vZlN0ZXAocnVsZVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFQcm9vZlN0ZXA7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YXByb29mU3RlcCIsIm1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJydWxlU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRSdWxlU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaCIsIm1hdGNoZXMiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyIsIm1hdGNoUnVsZVN1YnByb29mQXNzZXJ0aW9uIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZUEiLCJtZXRhc3RhdGVtZW50Tm9kZUIiLCJtZXRhc3RhdGVtZW50TWF0Y2hlc01vZHVsb0JyYWNrZXRzIiwibWF0Y2hNZXRhc3RhdGVtZW50TW9kdWxvQnJhY2tldHMiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJmaXJzdFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwiZmlyc3QiLCJxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlcyIsImZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSIsInNlY29uZFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwic2Vjb25kIiwic2Vjb25kUXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSIsImZyb21SdWxlU3VicHJvb2ZOb2RlIiwibWV0YVByb29mU3RlcCIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7cUJBUlM7cUJBQ1E7eUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU1DLDBCQUEwQkMsSUFBQUEsbUJBQVcseUNBQ3JDQyxpQ0FBaUNDLElBQUFBLGtCQUFVLHlDQUMzQ0MsNkRBQTZESCxJQUFBQSxtQkFBVztBQUUvRCxJQUFBLEFBQU1GLDhCQUFOO2FBQU1BLGNBQ1BNLGdCQUFnQixFQUFFQyxpQkFBaUI7Z0NBRDVCUDtRQUVqQixJQUFJLENBQUNNLG1CQUFtQkE7UUFDeEIsSUFBSSxDQUFDQyxvQkFBb0JBOztrQkFIUlA7O1lBTW5CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGO1lBQ2Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUgsaUJBQWlCO2dCQUNyQixJQUFJSSxVQUFVO2dCQUVkLElBQUksQ0FBQ0EsU0FBUztvQkFDWixJQUFNQyw0QkFBNEJULCtCQUErQkk7b0JBRWpFLElBQUlLLDhCQUE4QixNQUFNO3dCQUN0QyxJQUFNQywrQkFBK0IsSUFBSSxDQUFDQywyQkFBMkJGO3dCQUVyRUQsVUFBVUUsOEJBQStCLEdBQUc7b0JBQzlDO2dCQUNGO2dCQUVBLElBQUksQ0FBQ0YsU0FBUztvQkFDWixJQUFNSSx1QkFBdUIsSUFBSSxDQUFDQyxtQkFBbUJUO29CQUVyREksVUFBVUksc0JBQXNCLEdBQUc7Z0JBQ3JDO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CVCxpQkFBaUI7Z0JBQ2xDLElBQUlRLHVCQUF1QjtnQkFFM0IsSUFBSSxJQUFJLENBQUNSLHNCQUFzQixNQUFNO29CQUNuQyxJQUFNVSxxQkFBcUJWLG1CQUNyQlcscUJBQXFCLElBQUksQ0FBQ1gsbUJBQzFCWSxxQ0FBcUNDLElBQUFBLDZDQUFpQ0gsb0JBQW9CQztvQkFFaEdILHVCQUF1Qkksb0NBQXFDLEdBQUc7Z0JBQ2pFO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCRix5QkFBeUI7Z0JBQ2xELElBQUlDLCtCQUErQjtnQkFFbkMsSUFBSSxJQUFJLENBQUNQLHFCQUFxQixNQUFNO29CQUNsQyxJQUFNZSwwQ0FBMENwQix3QkFBd0JXLDRCQUNsRVUsOENBQThDQyxJQUFBQSxjQUFNRiwwQ0FDcERHLHdEQUF3RG5CLDJEQUEyRCxJQUFJLENBQUNDLG1CQUN4SG1CLDREQUE0REYsSUFBQUEsY0FBTUM7b0JBRXhFLElBQU1QLHFCQUFxQkssNkNBQ3JCSixxQkFBcUJPLDJEQUNyQk4scUNBQXFDQyxJQUFBQSw2Q0FBaUNILG9CQUFvQkM7b0JBRWhHLElBQUlDLG9DQUFvQzt3QkFDdEMsSUFBTU8sK0NBQStDQyxJQUFBQSxlQUFPTiwwQ0FDdERPLDZEQUE2REQsSUFBQUEsZUFBT0g7d0JBRTFFLElBQU1QLHNCQUFxQlMsOENBQ3JCUixzQkFBcUJVLDREQUNyQlQsc0NBQXFDQyxJQUFBQSw2Q0FBaUNILHFCQUFvQkM7d0JBRWhHTCwrQkFBK0JNLHFDQUFvQyxHQUFHO29CQUN4RTtnQkFDRjtnQkFFQSxPQUFPTjtZQUNUOzs7O1lBRU9nQixLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJ2QixnQkFBZ0I7Z0JBQzFDLElBQU1DLG9CQUFvQixNQUNwQnVCLGdCQUFnQixJQWhGTDlCLGNBZ0Z1Qk0sa0JBQWtCQztnQkFFMUQsT0FBT3VCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxzQkFBc0J4QixpQkFBaUI7Z0JBQzVDLElBQU1ELG1CQUFtQixNQUNuQndCLGdCQUFnQixJQXZGTDlCLGNBdUZ1Qk0sa0JBQWtCQztnQkFFMUQsT0FBT3VCO1lBQ1Q7OztXQTFGbUI5QiJ9