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
var _substitution = require("../utilities/substitution");
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
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode) {
                var metastatementMatches;
                var ruleSubproofAssertionNode = ruleSubproofAssertionNodeQuery(metastatementNode);
                if (ruleSubproofAssertionNode !== null) {
                    var ruleSubproofAssertionMatches = this.matchRuleSubproofAssertion(ruleSubproofAssertionNode);
                    metastatementMatches = ruleSubproofAssertionMatches; ///
                } else {
                    var metastatementsMatch = this.matchMetastatements(metastatementNode);
                    metastatementMatches = metastatementsMatch; //
                }
                return metastatementMatches;
            }
        },
        {
            key: "matchMetastatements",
            value: function matchMetastatements(metastatementNode) {
                var metastatementsMatch = false;
                if (this.metastatementNode !== null) {
                    var nonTerminalNodeA = metastatementNode, nonTerminalNodeB = this.metastatementNode, bracketedNodeMatches = (0, _substitution.matchBracketedNonTerminalNode)(nonTerminalNodeA, nonTerminalNodeB), metastatementNodeMatches = bracketedNodeMatches; ///
                    return metastatementNodeMatches;
                }
                return metastatementsMatch;
            }
        },
        {
            key: "matchRuleSubproofAssertion",
            value: function matchRuleSubproofAssertion(ruleSubproofAssertionNode) {
                var ruleSubproofAssertionMatches = false;
                if (this.ruleSubproofNode !== null) {
                    var ruleSubproofAssertionMetastatementNodes = metastatementNodesQuery(ruleSubproofAssertionNode), firstRuleSubproofAssertionMetastatementNode = (0, _array.first)(ruleSubproofAssertionMetastatementNodes), qualifiedOrUnqualifiedMetastatementMetastatementNodes = qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery(this.ruleSubproofNode), firstQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.first)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                    var nonTerminalNodeA = firstRuleSubproofAssertionMetastatementNode, nonTerminalNodeB = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, bracketedNodeMatches = (0, _substitution.matchBracketedNonTerminalNode)(nonTerminalNodeA, nonTerminalNodeB);
                    if (bracketedNodeMatches) {
                        var secondRuleSubproofAssertionMetastatementNode = (0, _array.second)(ruleSubproofAssertionMetastatementNodes), secondQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.second)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                        var nonTerminalNodeA1 = secondRuleSubproofAssertionMetastatementNode, nonTerminalNodeB1 = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, bracketedNodeMatches1 = (0, _substitution.matchBracketedNonTerminalNode)(nonTerminalNodeA1, nonTerminalNodeB1);
                        ruleSubproofAssertionMatches = bracketedNodeMatches1; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL21ldGFwcm9vZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1hdGNoQnJhY2tldGVkTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25cIjtcblxuY29uc3QgbWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGVTdWJwcm9vZkFzc2VydGlvbi9tZXRhc3RhdGVtZW50XCIpLFxuICAgICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvcnVsZVN1YnByb29mQXNzZXJ0aW9uXCIpLFxuICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZVN1YnByb29mL3F1YWxpZmllZE1ldGFzdGF0ZW1lbnR8dW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50L21ldGFzdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhcHJvb2ZTdGVwIHtcbiAgY29uc3RydWN0b3IocnVsZVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnJ1bGVTdWJwcm9vZk5vZGUgPSBydWxlU3VicHJvb2ZOb2RlO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuXG4gICAgY29uc3QgcnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyA9IHRoaXMubWF0Y2hSdWxlU3VicHJvb2ZBc3NlcnRpb24ocnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gcnVsZVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50c01hdGNoID0gdGhpcy5tYXRjaE1ldGFzdGF0ZW1lbnRzKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhc3RhdGVtZW50c01hdGNoOyAvL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudHMobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudHNNYXRjaCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBtZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkTm9kZU1hdGNoZXMgPSBtYXRjaEJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGJyYWNrZXRlZE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRzTWF0Y2g7XG4gIH1cblxuICBtYXRjaFJ1bGVTdWJwcm9vZkFzc2VydGlvbihydWxlU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSB7XG4gICAgbGV0IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnJ1bGVTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHJ1bGVTdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgZmlyc3RSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSA9IGZpcnN0KHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlcyA9IHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkodGhpcy5ydWxlU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIGZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSA9IGZpcnN0KHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzKTtcblxuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IGZpcnN0UnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBmaXJzdFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkTm9kZU1hdGNoZXMgPSBtYXRjaEJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCKTtcblxuICAgICAgaWYgKGJyYWNrZXRlZE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHNlY29uZFJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlID0gc2Vjb25kKHJ1bGVTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyksXG4gICAgICAgICAgICAgIHNlY29uZFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUgPSBzZWNvbmQocXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMpO1xuXG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzZWNvbmRSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgYnJhY2tldGVkTm9kZU1hdGNoZXMgPSBtYXRjaEJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCKTtcblxuICAgICAgICBydWxlU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzID0gYnJhY2tldGVkTm9kZU1hdGNoZXM7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBydWxlU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVByb29mU3RlcCA9IG5ldyBNZXRhcHJvb2ZTdGVwKHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhUHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChydWxlU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJNZXRhcHJvb2ZTdGVwIiwibWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImdldFJ1bGVTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTm9kZSIsInJ1bGVTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMiLCJtYXRjaFJ1bGVTdWJwcm9vZkFzc2VydGlvbiIsIm1ldGFzdGF0ZW1lbnRzTWF0Y2giLCJtYXRjaE1ldGFzdGF0ZW1lbnRzIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJicmFja2V0ZWROb2RlTWF0Y2hlcyIsIm1hdGNoQnJhY2tldGVkTm9uVGVybWluYWxOb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwicnVsZVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGVzIiwiZmlyc3RSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsImZpcnN0IiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMiLCJmaXJzdFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUiLCJzZWNvbmRSdWxlU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSIsInNlY29uZCIsInNlY29uZFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUiLCJmcm9tUnVsZVN1YnByb29mTm9kZSIsIm1ldGFQcm9vZlN0ZXAiLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3FCQVJTO3FCQUNROzRCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFNQywwQkFBMEJDLElBQUFBLGlCQUFVLEVBQUMseUNBQ3JDQyxpQ0FBaUNDLElBQUFBLGdCQUFTLEVBQUMseUNBQzNDQyw2REFBNkRILElBQUFBLGlCQUFVLEVBQUM7QUFFL0QsSUFBQSxBQUFNRiw4QkFBTjthQUFNQSxjQUNQTSxnQkFBZ0IsRUFBRUMsaUJBQWlCOzhCQUQ1QlA7UUFFakIsSUFBSSxDQUFDTSxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7O2lCQUhSUDs7WUFNbkJRLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0I7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixPQUFPLElBQUksQ0FBQ0YsaUJBQWlCO1lBQy9COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkgsaUJBQWlCLEVBQUU7Z0JBQ3BDLElBQUlJO2dCQUVKLElBQU1DLDRCQUE0QlQsK0JBQStCSTtnQkFFakUsSUFBSUssOEJBQThCLElBQUksRUFBRTtvQkFDdEMsSUFBTUMsK0JBQStCLElBQUksQ0FBQ0MsMEJBQTBCLENBQUNGO29CQUVyRUQsdUJBQXVCRSw4QkFBK0IsR0FBRztnQkFDM0QsT0FBTztvQkFDTCxJQUFNRSxzQkFBc0IsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQ1Q7b0JBRXJESSx1QkFBdUJJLHFCQUFxQixFQUFFO2dCQUNoRCxDQUFDO2dCQUVELE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CVCxpQkFBaUIsRUFBRTtnQkFDckMsSUFBSVEsc0JBQXNCLEtBQUs7Z0JBRS9CLElBQUksSUFBSSxDQUFDUixpQkFBaUIsS0FBSyxJQUFJLEVBQUU7b0JBQ25DLElBQU1VLG1CQUFtQlYsbUJBQ25CVyxtQkFBbUIsSUFBSSxDQUFDWCxpQkFBaUIsRUFDekNZLHVCQUF1QkMsSUFBQUEsMkNBQTZCLEVBQUNILGtCQUFrQkMsbUJBQ3ZFRywyQkFBMkJGLHNCQUF1QixHQUFHO29CQUUzRCxPQUFPRTtnQkFDVCxDQUFDO2dCQUVELE9BQU9OO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCRix5QkFBeUIsRUFBRTtnQkFDcEQsSUFBSUMsK0JBQStCLEtBQUs7Z0JBRXhDLElBQUksSUFBSSxDQUFDUCxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7b0JBQ2xDLElBQU1nQiwwQ0FBMENyQix3QkFBd0JXLDRCQUNsRVcsOENBQThDQyxJQUFBQSxZQUFLLEVBQUNGLDBDQUNwREcsd0RBQXdEcEIsMkRBQTJELElBQUksQ0FBQ0MsZ0JBQWdCLEdBQ3hJb0IsNERBQTRERixJQUFBQSxZQUFLLEVBQUNDO29CQUV4RSxJQUFNUixtQkFBbUJNLDZDQUNuQkwsbUJBQW1CUSwyREFDbkJQLHVCQUF1QkMsSUFBQUEsMkNBQTZCLEVBQUNILGtCQUFrQkM7b0JBRTdFLElBQUlDLHNCQUFzQjt3QkFDeEIsSUFBTVEsK0NBQStDQyxJQUFBQSxhQUFNLEVBQUNOLDBDQUN0RE8sNkRBQTZERCxJQUFBQSxhQUFNLEVBQUNIO3dCQUUxRSxJQUFNUixvQkFBbUJVLDhDQUNuQlQsb0JBQW1CVyw0REFDbkJWLHdCQUF1QkMsSUFBQUEsMkNBQTZCLEVBQUNILG1CQUFrQkM7d0JBRTdFTCwrQkFBK0JNLHVCQUFzQixHQUFHO29CQUMxRCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT047WUFDVDs7OztZQUVPaUIsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCeEIsZ0JBQWdCLEVBQUU7Z0JBQzVDLElBQU1DLG9CQUFvQixJQUFJLEVBQ3hCd0IsZ0JBQWdCLElBN0VML0IsY0E2RXVCTSxrQkFBa0JDO2dCQUUxRCxPQUFPd0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQnpCLGlCQUFpQixFQUFFO2dCQUM5QyxJQUFNRCxtQkFBbUIsSUFBSSxFQUN2QnlCLGdCQUFnQixJQXBGTC9CLGNBb0Z1Qk0sa0JBQWtCQztnQkFFMUQsT0FBT3dCO1lBQ1Q7OztXQXZGbUIvQiJ9