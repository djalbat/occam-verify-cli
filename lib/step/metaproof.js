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
    function MetaproofStep(metaSubproofNode, metastatementNode) {
        _classCallCheck(this, MetaproofStep);
        this.metaSubproofNode = metaSubproofNode;
        this.metastatementNode = metastatementNode;
    }
    _createClass(MetaproofStep, [
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
            key: "fromMetaSubproofNode",
            value: function fromMetaSubproofNode(metaSubproofNode) {
                var metastatementNode = null, metaProofStep = new MetaproofStep(metaSubproofNode, metastatementNode);
                return metaProofStep;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var metaSubproofNode = null, metaProofStep = new MetaproofStep(metaSubproofNode, metastatementNode);
                return metaProofStep;
            }
        }
    ]);
    return MetaproofStep;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdGVwL21ldGFwcm9vZi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG1hdGNoQnJhY2tldGVkTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5cbmNvbnN0IG1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9tZXRhU3VicHJvb2ZBc3NlcnRpb24vbWV0YXN0YXRlbWVudFwiKSxcbiAgICAgIG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhc3RhdGVtZW50L21ldGFTdWJwcm9vZkFzc2VydGlvblwiKSxcbiAgICAgIHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL21ldGFTdWJwcm9vZi9xdWFsaWZpZWRNZXRhc3RhdGVtZW50fHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudC9tZXRhc3RhdGVtZW50IVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXByb29mU3RlcCB7XG4gIGNvbnN0cnVjdG9yKG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhU3VicHJvb2ZOb2RlID0gbWV0YVN1YnByb29mTm9kZTtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhU3VicHJvb2ZOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFTdWJwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TWF0Y2hlcztcblxuICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YVN1YnByb29mQXNzZXJ0aW9uKG1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IG1ldGFTdWJwcm9vZkFzc2VydGlvbk1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudHNNYXRjaCA9IHRoaXMubWF0Y2hNZXRhc3RhdGVtZW50cyhtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnRNYXRjaGVzID0gbWV0YXN0YXRlbWVudHNNYXRjaDsgLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnRzKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnRzTWF0Y2ggPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGJyYWNrZXRlZE5vZGVNYXRjaGVzID0gbWF0Y2hCcmFja2V0ZWROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiksXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBicmFja2V0ZWROb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50c01hdGNoO1xuICB9XG5cbiAgbWF0Y2hNZXRhU3VicHJvb2ZBc3NlcnRpb24obWV0YVN1YnByb29mQXNzZXJ0aW9uTm9kZSkge1xuICAgIGxldCBtZXRhU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhU3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMgPSBtZXRhc3RhdGVtZW50Tm9kZXNRdWVyeShtZXRhU3VicHJvb2ZBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGZpcnN0TWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUgPSBmaXJzdChtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMpLFxuICAgICAgICAgICAgcXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZXMgPSBxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5KHRoaXMubWV0YVN1YnByb29mTm9kZSksXG4gICAgICAgICAgICBmaXJzdFF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGUgPSBmaXJzdChxdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2Rlcyk7XG5cbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBmaXJzdE1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gZmlyc3RRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIGJyYWNrZXRlZE5vZGVNYXRjaGVzID0gbWF0Y2hCcmFja2V0ZWROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQik7XG5cbiAgICAgIGlmIChicmFja2V0ZWROb2RlTWF0Y2hlcykge1xuICAgICAgICBjb25zdCBzZWNvbmRNZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZSA9IHNlY29uZChtZXRhU3VicHJvb2ZBc3NlcnRpb25NZXRhc3RhdGVtZW50Tm9kZXMpLFxuICAgICAgICAgICAgICBzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlID0gc2Vjb25kKHF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzKTtcblxuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc2Vjb25kTWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc2Vjb25kUXVhbGlmaWVkT3JVbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnRNZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICAgIGJyYWNrZXRlZE5vZGVNYXRjaGVzID0gbWF0Y2hCcmFja2V0ZWROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQik7XG5cbiAgICAgICAgbWV0YVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcyA9IGJyYWNrZXRlZE5vZGVNYXRjaGVzOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YVN1YnByb29mQXNzZXJ0aW9uTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIG1ldGFQcm9vZlN0ZXAgPSBuZXcgTWV0YXByb29mU3RlcChtZXRhU3VicHJvb2ZOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YVByb29mU3RlcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBtZXRhU3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBtZXRhUHJvb2ZTdGVwID0gbmV3IE1ldGFwcm9vZlN0ZXAobWV0YVN1YnByb29mTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFQcm9vZlN0ZXA7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YXByb29mU3RlcCIsIm1ldGFzdGF0ZW1lbnROb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzUXVlcnkiLCJtZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJtZXRhU3VicHJvb2ZBc3NlcnRpb25NYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZBc3NlcnRpb24iLCJtZXRhc3RhdGVtZW50c01hdGNoIiwibWF0Y2hNZXRhc3RhdGVtZW50cyIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiYnJhY2tldGVkTm9kZU1hdGNoZXMiLCJtYXRjaEJyYWNrZXRlZE5vblRlcm1pbmFsTm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1ldGFTdWJwcm9vZkFzc2VydGlvbk1ldGFzdGF0ZW1lbnROb2RlcyIsImZpcnN0TWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJmaXJzdCIsInF1YWxpZmllZE9yVW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50TWV0YXN0YXRlbWVudE5vZGVzIiwiZmlyc3RRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlIiwic2Vjb25kTWV0YVN1YnByb29mQXNzZXJ0aW9uTWV0YXN0YXRlbWVudE5vZGUiLCJzZWNvbmQiLCJzZWNvbmRRdWFsaWZpZWRPclVucXVhbGlmaWVkTWV0YXN0YXRlbWVudE1ldGFzdGF0ZW1lbnROb2RlIiwiZnJvbU1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhUHJvb2ZTdGVwIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OztxQkFSUztxQkFDUTtvQkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBTUMsMEJBQTBCQyxJQUFBQSxpQkFBVSxFQUFDLHlDQUNyQ0MsaUNBQWlDQyxJQUFBQSxnQkFBUyxFQUFDLHlDQUMzQ0MsNkRBQTZESCxJQUFBQSxpQkFBVSxFQUFDO0FBRS9ELElBQUEsQUFBTUYsOEJBQU47YUFBTUEsY0FDUE0sZ0JBQWdCLEVBQUVDLGlCQUFpQjs4QkFENUJQO1FBRWpCLElBQUksQ0FBQ00sZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsaUJBQWlCLEdB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