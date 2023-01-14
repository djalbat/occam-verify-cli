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
var _node = require("../utilities/node");
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
var metastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproofAssertion/metastatement"), metaSubproofAssertionNodeQuery = (0, _query.nodeQuery)("/metastatement/metaSubproofAssertion"), qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = (0, _query.nodesQuery)("/metaSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");
var MetaproofStep = /*#__PURE__*/ function() {
    function MetaproofStep(ruleSubproofNode, metaSubproofNode, metastatementNode) {
        _classCallCheck(this, MetaproofStep);
        this.ruleSubproofNode = ruleSubproofNode;
        this.metaSubproofNode = metaSubproofNode;
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
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode) {
                var metastatementMatches;
                var metaSubproofAssertionNode = metaSubproofAssertionNodeQuery(metastatementNode);
                if (metaSubproofAssertionNode !== null) {
                    var metaSubproofAssertionMatches = this.matchMetaSubproofAssertion(metaSubproofAssertionNode);
                    metastatementMatches = metaSubproofAssertionMatches; ///
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
                    var nonTerminalNodeA = metastatementNode, nonTerminalNodeB = this.metastatementNode, bracketedNodeMatches = (0, _node.matchBracketedNonTerminalNode)(nonTerminalNodeA, nonTerminalNodeB), metastatementNodeMatches = bracketedNodeMatches; ///
                    return metastatementNodeMatches;
                }
                return metastatementsMatch;
            }
        },
        {
            key: "matchMetaSubproofAssertion",
            value: function matchMetaSubproofAssertion(metaSubproofAssertionNode) {
                var metaSubproofAssertionMatches = false;
                if (this.metaSubproofNode !== null) {
                    var metaSubproofAssertionMetastatementNodes = metastatementNodesQuery(metaSubproofAssertionNode), firstMetaSubproofAssertionMetastatementNode = (0, _array.first)(metaSubproofAssertionMetastatementNodes), qualifiedOrUnqualifiedMetastatementMetastatementNodes = qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery(this.metaSubproofNode), firstQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.first)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                    var nonTerminalNodeA = firstMetaSubproofAssertionMetastatementNode, nonTerminalNodeB = firstQualifiedOrUnqualifiedMetastatementMetastatementNode, bracketedNodeMatches = (0, _node.matchBracketedNonTerminalNode)(nonTerminalNodeA, nonTerminalNodeB);
                    if (bracketedNodeMatches) {
                        var secondMetaSubproofAssertionMetastatementNode = (0, _array.second)(metaSubproofAssertionMetastatementNodes), secondQualifiedOrUnqualifiedMetastatementMetastatementNode = (0, _array.second)(qualifiedOrUnqualifiedMetastatementMetastatementNodes);
                        var nonTerminalNodeA1 = secondMetaSubproofAssertionMetastatementNode, nonTerminalNodeB1 = secondQualifiedOrUnqualifiedMetastatementMetastatementNode, bracketedNodeMatches1 = (0, _node.matchBracketedNonTerminalNode)(nonTerminalNodeA1, nonTerminalNodeB1);
                        metaSubproofAssertionMatches = bracketedNodeMatches1; ///
                    }
                }
                return metaSubproofAssertionMatches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL21ldGFwcm9vZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1hdGNoQnJhY2tldGVkTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhU3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L21ldGFTdWJwcm9vZkFzc2VydGlvblwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5ydWxlU3VicHJvb2ZOb2RlID0gcnVsZVN1YnByb29mTm9kZTtcbiAgICB0aGlzLm1ldGFTdWJwcm9vZk5vZGUgPSBtZXRhU3VicHJvb2ZOb2RlO1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFJ1bGVTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldE1ldGFTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YVN1YnByb29mTm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRNYXRjaGVzO1xuXG4gICAgY29uc3QgbWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeShtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAobWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhU3VicHJvb2ZBc3NlcnRpb24obWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50c01hdGNoID0gdGhpcy5tYXRjaE1ldGFzdGF0ZW1lbnRzKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBtZXRhc3RhdGVtZW50c01hdGNoOyAvL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudHMobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudHNNYXRjaCA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMubWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBtZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkTm9kZU1hdGNoZXMgPSBtYXRjaEJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGJyYWNrZXRlZE5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRzTWF0Y2g7XG4gIH1cblxuICBtYXRjaE1ldGFTdWJwcm9vZkFzc2VydGlvbihtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSB7XG4gICAgbGV0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyA9IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgZmlyc3RNZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSA9IGZpcnN0KG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyksXG4gICAgICAgICAgICBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlcyA9IHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkodGhpcy5tZXRhU3VicHJvb2ZOb2RlKSxcbiAgICAgICAgICAgIGZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSA9IGZpcnN0KHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzKTtcblxuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IGZpcnN0TWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBmaXJzdFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkTm9kZU1hdGNoZXMgPSBtYXRjaEJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCKTtcblxuICAgICAgaWYgKGJyYWNrZXRlZE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHNlY29uZE1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlID0gc2Vjb25kKG1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyksXG4gICAgICAgICAgICAgIHNlY29uZFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUgPSBzZWNvbmQocXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMpO1xuXG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzZWNvbmRNZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgYnJhY2tldGVkTm9kZU1hdGNoZXMgPSBtYXRjaEJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCKTtcblxuICAgICAgICBtZXRhU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzID0gYnJhY2tldGVkTm9kZU1hdGNoZXM7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBtZXRhU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVByb29mU3RlcCA9IG5ldyBNZXRhcHJvb2ZTdGVwKHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhUHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUpIHtcbiAgICBjb25zdCBydWxlU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YVByb29mU3RlcCA9IG5ldyBNZXRhcHJvb2ZTdGVwKHJ1bGVTdWJwcm9vZk5vZGUsIG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBtZXRhUHJvb2ZTdGVwO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFTdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChydWxlU3VicHJvb2ZOb2RlLCBtZXRhU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJNZXRhcHJvb2ZTdGVwIiwibWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwibWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXNRdWVyeSIsInJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRSdWxlU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwibWV0YVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyIsIm1hdGNoTWV0YVN1YnByb29mQXNzZXJ0aW9uIiwibWV0YXN0YXRlbWVudHNNYXRjaCIsIm1hdGNoTWV0YXN0YXRlbWVudHMiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImJyYWNrZXRlZE5vZGVNYXRjaGVzIiwibWF0Y2hCcmFja2V0ZWROb25UZXJtaW5hbE5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMiLCJmaXJzdE1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwiZmlyc3QiLCJxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlcyIsImZpcnN0UXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSIsInNlY29uZE1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlIiwic2Vjb25kIiwic2Vjb25kUXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSIsImZyb21SdWxlU3VicHJvb2ZOb2RlIiwibWV0YVByb29mU3RlcCIsImZyb21NZXRhU3VicHJvb2ZOb2RlIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztxQkFSUztxQkFDUTtvQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBTUMsMEJBQTBCQyxJQUFBQSxpQkFBVSxFQUFDLHlDQUNyQ0MsaUNBQWlDQyxJQUFBQSxnQkFBUyxFQUFDLHlDQUMzQ0MsNkRBQTZESCxJQUFBQSxpQkFBVSxFQUFDO0FBRS9ELElBQUEsQUFBTUYsOEJBQU47YUFBTUEsY0FDUE0sZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxpQkFBaUI7OEJBRDlDUjtRQUVqQixJQUFJLENBQUNNLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7aUJBSlJSOztZQU9uQlMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQjtnQkFDcEIsT0FBTyxJQUFJLENBQUNILGdCQUFnQjtZQUM5Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0I7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDSCxnQkFBZ0I7WUFDOUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCO2dCQUNyQixPQUFPLElBQUksQ0FBQ0gsaUJBQWlCO1lBQy9COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkosaUJBQWlCLEVBQUU7Z0JBQ3BDLElBQUlLO2dCQUVKLElB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