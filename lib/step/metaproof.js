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
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var metastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproofAssertion/metastatement"), ruleSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/ruleSubproofAssertion"), qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = (0, _query.nodesQuery)("/ruleSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");
var MetaproofStep = /*#__PURE__*/ function() {
    function MetaproofStep(ruleSubproofNode, metastatementNode) {
        _classCallCheck(this, MetaproofStep);
        this.ruleSubproofNode = ruleSubproofNode;
        this.metastatementNode = metastatementNode;
    }
    _createClass(MetaproofStep, [
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
                        var matchesRuleSubproofAssertion = this.matchRuleSubproofAssertion(ruleSubproofAssertionNode);
                        matches = matchesRuleSubproofAssertion; ///
                    }
                }
                if (!matches) {
                    var matchesStatement = this.matchMetastatement(metastatementNode);
                    matches = matchesStatement; //
                }
                return matches;
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode) {
                var matchesStatement = false;
                if (this.metastatementNode !== null) {
                    var nonTerminalNodeA = metastatementNode, nonTerminalNodeB = this.metastatementNode, nonTerminalNodeMatchesModuloBrackets = (0, _metaproof.matchMetastatementNodeModuloBrackets)(nonTerminalNodeA, nonTerminalNodeB), metastatementNodeMatches = nonTerminalNodeMatchesModuloBrackets; ///
                    return metastatementNodeMatches;
                }
                return matchesStatement;
            }
        },
        {
            key: "matchRuleSubproofAssertion",
            value: function matchRuleSubproofAssertion(ruleSubproofAssertionNode) {
                var matchesRuleSubproofAssertion = false;
                if (this.ruleSubproofNode !== null) {
                    var ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(ruleSubproofAssertionNode), firstRuleSubproofAssertionMetastatementNode = (0, _array.first)(ruleSubproofAssertionMetastatementNodes), qualifiedOrUnqualifiedMetastatementMetastatementNodes = qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery(this.ruleSubproofNode), firstQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.first)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                    var metastatementNodeA = firstRuleSubproofAssertionMetastatementNode, metastatementNodeB = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, nonTerminalNodeMatchesModuloBrackets = (0, _metaproof.matchMetastatementNodeModuloBrackets)(metastatementNodeA, metastatementNodeB);
                    if (nonTerminalNodeMatchesModuloBrackets) {
                        var secondRuleSubproofAssertionMetastatementNode = (0, _array.second)(ruleSubproofAssertionMetastatementNodes), secondQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.second)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                        var metastatementNodeA1 = secondRuleSubproofAssertionMetastatementNode, metastatementNodeB1 = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, nonTerminalNodeMatchesModuloBrackets1 = (0, _metaproof.matchMetastatementNodeModuloBrackets)(metastatementNodeA1, metastatementNodeB1);
                        matchesRuleSubproofAssertion = nonTerminalNodeMatchesModuloBrackets1; ///
                    }
                }
                return matchesRuleSubproofAssertion;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL21ldGFwcm9vZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1hdGNoTWV0YXN0YXRlbWVudE5vZGVNb2R1bG9CcmFja2V0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWV0YXByb29mXCI7XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlU3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L3J1bGVTdWJwcm9vZkFzc2VydGlvblwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVTdWJwcm9vZi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5ydWxlU3VicHJvb2ZOb2RlID0gcnVsZVN1YnByb29mTm9kZTtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRSdWxlU3VicHJvb2ZOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTdWJwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXNSdWxlU3VicHJvb2ZBc3NlcnRpb24gPSB0aGlzLm1hdGNoUnVsZVN1YnByb29mQXNzZXJ0aW9uKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIG1hdGNoZXMgPSBtYXRjaGVzUnVsZVN1YnByb29mQXNzZXJ0aW9uOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVzU3RhdGVtZW50ID0gdGhpcy5tYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBtYXRjaGVzID0gbWF0Y2hlc1N0YXRlbWVudDsgLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtYXRjaGVzU3RhdGVtZW50ID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzTW9kdWxvQnJhY2tldHMgPSBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlTW9kdWxvQnJhY2tldHMobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiksXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzTW9kdWxvQnJhY2tldHM7ICAvLy9cblxuICAgICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlc1N0YXRlbWVudDtcbiAgfVxuXG4gIG1hdGNoUnVsZVN1YnByb29mQXNzZXJ0aW9uKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUpIHtcbiAgICBsZXQgbWF0Y2hlc1J1bGVTdWJwcm9vZkFzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMucnVsZVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzID0gbWV0YXN0YXRlbWVudE5vZGVzUXVlcnkocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBmaXJzdFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlID0gZmlyc3QocnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzKSxcbiAgICAgICAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzID0gcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSh0aGlzLnJ1bGVTdWJwcm9vZk5vZGUpLFxuICAgICAgICAgICAgZmlyc3RRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlID0gZmlyc3QocXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMpO1xuXG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZUEgPSBmaXJzdFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZUIgPSBmaXJzdFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlc01vZHVsb0JyYWNrZXRzID0gbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZU1vZHVsb0JyYWNrZXRzKG1ldGFzdGF0ZW1lbnROb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCKTtcblxuICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZU1hdGNoZXNNb2R1bG9CcmFja2V0cykge1xuICAgICAgICBjb25zdCBzZWNvbmRSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSA9IHNlY29uZChydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMpLFxuICAgICAgICAgICAgICBzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlID0gc2Vjb25kKHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzKTtcblxuICAgICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZUEgPSBzZWNvbmRSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQiA9IHNlY29uZFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzTW9kdWxvQnJhY2tldHMgPSBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlTW9kdWxvQnJhY2tldHMobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIpO1xuXG4gICAgICAgIG1hdGNoZXNSdWxlU3VicHJvb2ZBc3NlcnRpb24gPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzTW9kdWxvQnJhY2tldHM7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzUnVsZVN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVByb29mU3RlcCA9IG5ldyBNZXRhcHJvb2ZTdGVwKHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhUHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChydWxlU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJNZXRhcHJvb2ZTdGVwIiwibWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldFJ1bGVTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoIiwibWF0Y2hlcyIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJtYXRjaGVzUnVsZVN1YnByb29mQXNzZXJ0aW9uIiwibWF0Y2hSdWxlU3VicHJvb2ZBc3NlcnRpb24iLCJtYXRjaGVzU3RhdGVtZW50IiwibWF0Y2hNZXRhc3RhdGVtZW50Iiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzTW9kdWxvQnJhY2tldHMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlTW9kdWxvQnJhY2tldHMiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJydWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJmaXJzdFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwiZmlyc3QiLCJxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlcyIsImZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlQSIsIm1ldGFzdGF0ZW1lbnROb2RlQiIsInNlY29uZFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwic2Vjb25kIiwic2Vjb25kUXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSIsImZyb21SdWxlU3VicHJvb2ZOb2RlIiwibWV0YVByb29mU3RlcCIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7cUJBUlM7cUJBQ1E7eUJBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJELElBQU1DLDBCQUEwQkMsSUFBQUEsaUJBQVUsRUFBQyx5Q0FDckNDLGlDQUFpQ0MsSUFBQUEs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