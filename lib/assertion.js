"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Assertion;
    }
});
var _query = require("./utilities/query");
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
var statementNodeQuery = (0, _query.nodeQuery)("/*/statement!");
var Assertion = /*#__PURE__*/ function() {
    function Assertion(subproofNode, statementNode) {
        _classCallCheck(this, Assertion);
        this.subproofNode = subproofNode;
        this.statementNode = statementNode;
    }
    _createClass(Assertion, [
        {
            key: "getNonTerminalNode",
            value: function getNonTerminalNode() {
                var nonTerminalNode = this.statementNode !== null ? this.statementNode : null;
                return nonTerminalNode;
            }
        },
        {
            key: "getSubproofNode",
            value: function getSubproofNode() {
                return this.subproofNode;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "match",
            value: function match(assertion) {
                var matches = false;
                var statementNode = assertion.getstatementNode();
                if (statementNode !== null && this.statementNode !== null) {
                    var nonTerminalNode = this.statementNode, assertionNonTerminalNode = statementNode, assertionNonTerminalNodeMatches = matchAssertionNonTerminalNode(assertionNonTerminalNode, nonTerminalNode);
                    matches = assertionNonTerminalNodeMatches; ///
                }
                return matches;
            }
        }
    ], [
        {
            key: "fromSubproofNode",
            value: function fromSubproofNode(subproofNode) {
                var statementNode = null, assertion = new Assertion(subproofNode, statementNode);
                return assertion;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var subproofNode = null, assertion = new Assertion(subproofNode, statementNode);
                return assertion;
            }
        },
        {
            key: "fromQualifiedStatementNode",
            value: function fromQualifiedStatementNode(qualifiedStatementNode) {
                var subproofNode = null, statementNode = statementNodeQuery(qualifiedStatementNode), assertion = new Assertion(subproofNode, statementNode);
                return assertion;
            }
        },
        {
            key: "fromUnqualifiedStatementNode",
            value: function fromUnqualifiedStatementNode(unqualifiedStatementNode) {
                var subproofNode = null, statementNode = statementNodeQuery(unqualifiedStatementNode), assertion = new Assertion(subproofNode, statementNode);
                return assertion;
            }
        }
    ]);
    return Assertion;
}();
function matchAssertionNode(assertionNode, node) {
    var assertionNodeMatches = false;
    var nodeTerminalNode = node.isTerminalNode(), ruleNodeTerminalNode = assertionNode.isTerminalNode();
    if (nodeTerminalNode === ruleNodeTerminalNode) {
        if (nodeTerminalNode) {
            var terminalNode = node, assertionTerminalNode = assertionNode, assertionTerminalNodeMatches = matchAssertionTerminalNode(assertionTerminalNode, terminalNode);
            assertionNodeMatches = assertionTerminalNodeMatches; ///
        } else {
            var nonTerminalNode = node, assertionNonTerminalNode = assertionNode, assertionNonTerminalNodeMatches = matchAssertionNonTerminalNode(assertionNonTerminalNode, nonTerminalNode);
            assertionNodeMatches = assertionNonTerminalNodeMatches; ///
        }
    }
    return assertionNodeMatches;
}
function matchAssertionChildNodes(assertionChildNodes, childNodes) {
    var assertionChildNodesMatches = false;
    var childNodesLength = childNodes.length, assertionChildNodesLength = assertionChildNodes.length;
    if (childNodesLength === assertionChildNodesLength) {
        assertionChildNodesMatches = childNodes.every(function(childNode, index) {
            var assertionChildNode = assertionChildNodes[index], assertionNode = assertionChildNode, node = childNode, assertionNodeMatches = matchAssertionNode(assertionNode, node);
            if (assertionNodeMatches) {
                return true;
            }
        });
    }
    return assertionChildNodesMatches;
}
function matchAssertionTerminalNode(assertionTerminalNode, terminalNode) {
    var assertionTerminalNodeMatches = false;
    var matches = assertionTerminalNode.match(terminalNode);
    if (matches) {
        assertionTerminalNodeMatches = true;
    }
    return assertionTerminalNodeMatches;
}
function matchAssertionNonTerminalNode(assertionNonTerminalNode, nonTerminalNode) {
    var assertionNonTerminalNodeMatches = false;
    var ruleName = nonTerminalNode.getRuleName(), assertionRuleName = assertionNonTerminalNode.getRuleName(); ///
    if (ruleName === assertionRuleName) {
        var childNodes = nonTerminalNode.getChildNodes(), assertionChildNodes = assertionNonTerminalNode.getChildNodes(), assertionChildNodesMatches = matchAssertionChildNodes(assertionChildNodes, childNodes);
        assertionNonTerminalNodeMatches = assertionChildNodesMatches; ///
    }
    return assertionNonTerminalNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9ICh0aGlzLnN0YXRlbWVudE5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlbWVudE5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2goYXNzZXJ0aW9uKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3NlcnRpb24uZ2V0c3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSAmJiAodGhpcy5zdGF0ZW1lbnROb2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIGFzc2VydGlvbk5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoQXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlKGFzc2VydGlvbk5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlKTtcblxuICAgICAgbWF0Y2hlcyA9IGFzc2VydGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGFzc2VydGlvbiA9IG5ldyBBc3NlcnRpb24oc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgYXNzZXJ0aW9uID0gbmV3IEFzc2VydGlvbihzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHF1YWxpZmllZFN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGFzc2VydGlvbiA9IG5ldyBBc3NlcnRpb24oc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSh1bnF1YWxpZmllZFN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBhc3NlcnRpb24gPSBuZXcgQXNzZXJ0aW9uKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlLCBub2RlKSB7XG4gIGxldCBhc3NlcnRpb25Ob2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIHJ1bGVOb2RlVGVybWluYWxOb2RlID0gYXNzZXJ0aW9uTm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlID09PSBydWxlTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICBhc3NlcnRpb25UZXJtaW5hbE5vZGUgPSBhc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBhc3NlcnRpb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hBc3NlcnRpb25UZXJtaW5hbE5vZGUoYXNzZXJ0aW9uVGVybWluYWxOb2RlLCB0ZXJtaW5hbE5vZGUpO1xuXG4gICAgICBhc3NlcnRpb25Ob2RlTWF0Y2hlcyA9IGFzc2VydGlvblRlcm1pbmFsTm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBhc3NlcnRpb25Ob25UZXJtaW5hbE5vZGUgPSBhc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBhc3NlcnRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hBc3NlcnRpb25Ob25UZXJtaW5hbE5vZGUoYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICBhc3NlcnRpb25Ob2RlTWF0Y2hlcyA9IGFzc2VydGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhc3NlcnRpb25Ob2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hBc3NlcnRpb25DaGlsZE5vZGVzKGFzc2VydGlvbkNoaWxkTm9kZXMsIGNoaWxkTm9kZXMpIHtcbiAgbGV0IGFzc2VydGlvbkNoaWxkTm9kZXNNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICBhc3NlcnRpb25DaGlsZE5vZGVzTGVuZ3RoID0gYXNzZXJ0aW9uQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IGFzc2VydGlvbkNoaWxkTm9kZXNMZW5ndGgpIHtcbiAgICBhc3NlcnRpb25DaGlsZE5vZGVzTWF0Y2hlcyA9IGNoaWxkTm9kZXMuZXZlcnkoKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbkNoaWxkTm9kZSA9IGFzc2VydGlvbkNoaWxkTm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IGFzc2VydGlvbkNoaWxkTm9kZSwgLy8vXG4gICAgICAgICAgICBub2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIGFzc2VydGlvbk5vZGVNYXRjaGVzID0gbWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUsIG5vZGUpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRpb25DaGlsZE5vZGVzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hBc3NlcnRpb25UZXJtaW5hbE5vZGUoYXNzZXJ0aW9uVGVybWluYWxOb2RlLCB0ZXJtaW5hbE5vZGUpIHtcbiAgbGV0IGFzc2VydGlvblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBtYXRjaGVzID0gYXNzZXJ0aW9uVGVybWluYWxOb2RlLm1hdGNoKHRlcm1pbmFsTm9kZSk7XG5cbiAgaWYgKG1hdGNoZXMpIHtcbiAgICBhc3NlcnRpb25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRpb25UZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaEFzc2VydGlvbk5vblRlcm1pbmFsTm9kZShhc3NlcnRpb25Ob25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSkge1xuICBsZXQgYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIGFzc2VydGlvblJ1bGVOYW1lID0gYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7IC8vL1xuXG4gIGlmIChydWxlTmFtZSA9PT0gYXNzZXJ0aW9uUnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBhc3NlcnRpb25DaGlsZE5vZGVzID0gYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBhc3NlcnRpb25DaGlsZE5vZGVzTWF0Y2hlcyA9IG1hdGNoQXNzZXJ0aW9uQ2hpbGROb2Rlcyhhc3NlcnRpb25DaGlsZE5vZGVzLCBjaGlsZE5vZGVzKTtcblxuICAgIGFzc2VydGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBhc3NlcnRpb25DaGlsZE5vZGVzTWF0Y2hlczsgLy8vXG4gIH1cblxuICByZXR1cm4gYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJBc3NlcnRpb24iLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm1hdGNoIiwiYXNzZXJ0aW9uIiwibWF0Y2hlcyIsImdldHN0YXRlbWVudE5vZGUiLCJhc3NlcnRpb25Ob25UZXJtaW5hbE5vZGUiLCJhc3NlcnRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hBc3NlcnRpb25Ob25UZXJtaW5hbE5vZGUiLCJmcm9tU3VicHJvb2ZOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJmcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsIm5vZGUiLCJhc3NlcnRpb25Ob2RlTWF0Y2hlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInJ1bGVOb2RlVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiYXNzZXJ0aW9uVGVybWluYWxOb2RlIiwiYXNzZXJ0aW9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoQXNzZXJ0aW9uVGVybWluYWxOb2RlIiwibWF0Y2hBc3NlcnRpb25DaGlsZE5vZGVzIiwiYXNzZXJ0aW9uQ2hpbGROb2RlcyIsImNoaWxkTm9kZXMiLCJhc3NlcnRpb25DaGlsZE5vZGVzTWF0Y2hlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJhc3NlcnRpb25DaGlsZE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJpbmRleCIsImFzc2VydGlvbkNoaWxkTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJhc3NlcnRpb25SdWxlTmFtZSIsImdldENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRiwwQkFxRWxCLEFBckVZO2FBQU1BLFVBQ1BHLFlBQVksRUFBRUMsYUFBYTs4QkFEcEJKO1FBRWpCLElBQUksQ0FBQ0csWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUI7Z0JBQ25CLElBQU1DLGtCQUFrQixBQUFDLElBQUksQ0FBQ0YsYUFBYSxLQUFLLElBQUksR0FDekIsSUFBSSxDQUFDQSxhQUFhLEdBQ2hCLElBQUk7Z0JBRWpDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDSixhQUFhO1lBQzNCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFNBQVMsRUFBRTtnQkFDZixJQUFJQyxVQUFVLEtBQUs7Z0JBRW5CLElBQU1QLGdCQUFnQk0sVUFBVUUsZ0JBQWdCO2dCQUVoRCxJQUFJLEFBQUNSLGtCQUFrQixJQUFJLElBQU0sSUFBSSxDQUFDQSxhQUFhLEtBQUssSUFBSSxFQUFHO29CQUM3RCxJQUFNRSxrQkFBa0IsSUFBSSxDQUFDRixhQUFhLEVBQ3BDUywyQkFBMkJULGVBQzNCVSxrQ0FBa0NDLDhCQUE4QkYsMEJBQTBCUDtvQkFFaEdLLFVBQVVHLGlDQUFrQyxHQUFHO2dCQUNqRCxDQUFDO2dCQUVELE9BQU9IO1lBQ1Q7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCYixZQUFZLEVBQUU7Z0JBQ3BDLElBQU1DLGdCQUFnQixJQUFJLEVBQ3BCTSxZQUFZLElBeENEVixVQXdDZUcsY0FBY0M7Z0JBRTlDLE9BQU9NO1lBQ1Q7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JiLGFBQWEsRUFBRTtnQkFDdEMsSUFBTUQsZUFBZSxJQUFJLEVBQ25CTyxZQUFZLElBL0NEVixVQStDZUcsY0FBY0M7Z0JBRTlDLE9BQU9NO1lBQ1Q7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLHNCQUFzQixFQUFFO2dCQUN4RCxJQUFNaEIsZUFBZSxJQUFJLEVBQ25CQyxnQkFBZ0JILG1CQUFtQmtCLHlCQUNuQ1QsWUFBWSxJQXZERFYsVUF1RGVHLGNBQWNDO2dCQUU5QyxPQUFPTTtZQUNUOzs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyx3QkFBd0IsRUFBRTtnQkFDNUQsSUFBTWxCLGVBQWUsSUFBSSxFQUNuQkMsZ0JBQWdCSCxtQkFBbUJvQiwyQkFDbkNYLFlBQVksSUEvRERWLFVBK0RlRyxjQUFjQztnQkFFOUMsT0FBT007WUFDVDs7O1dBbEVtQlY7O0FBcUVyQixTQUFTc0IsbUJBQW1CQyxhQUFhLEVBQUVDLElBQUksRUFBRTtJQUMvQyxJQUFJQyx1QkFBdUIsS0FBSztJQUVoQyxJQUFNQyxtQkFBbUJGLEtBQUtHLGNBQWMsSUFDdENDLHVCQUF1QkwsY0FBY0ksY0FBYztJQUV6RCxJQUFJRCxxQkFBcUJFLHNCQUFzQjtRQUM3QyxJQUFJRixrQkFBa0I7WUFDcEIsSUFBTUcsZUFBZUwsTUFDZk0sd0JBQXdCUCxlQUN4QlEsK0JBQStCQywyQkFBMkJGLHVCQUF1QkQ7WUFFdkZKLHVCQUF1Qk0sOEJBQStCLEdBQUc7UUFDM0QsT0FBTztZQUNMLElBQU16QixrQkFBa0JrQixNQUNsQlgsMkJBQTJCVSxlQUMzQlQsa0NBQWtDQyw4QkFBOEJGLDBCQUEwQlA7WUFFaEdtQix1QkFBdUJYLGlDQUFpQyxHQUFHO1FBQzdELENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT1c7QUFDVDtBQUVBLFNBQVNRLHlCQUF5QkMsbUJBQW1CLEVBQUVDLFVBQVUsRUFBRTtJQUNqRSxJQUFJQyw2QkFBNkIsS0FBSztJQUV0QyxJQUFNQyxtQkFBbUJGLFdBQVdHLE1BQU0sRUFDcENDLDRCQUE0Qkwsb0JBQW9CSSxNQUFNO0lBRTVELElBQUlELHFCQUFxQkUsMkJBQTJCO1FBQ2xESCw2QkFBNkJELFdBQVdLLEtBQUssQ0FBQyxTQUFDQyxXQUFXQyxPQUFVO1lBQ2xFLElBQU1DLHFCQUFxQlQsbUJBQW1CLENBQUNRLE1BQU0sRUFDL0NuQixnQkFBZ0JvQixvQkFDaEJuQixPQUFPaUIsV0FDUGhCLHVCQUF1QkgsbUJBQW1CQyxlQUFlQztZQUUvRCxJQUFJQyxzQkFBc0I7Z0JBQ3hCLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSDtJQUNGLENBQUM7SUFFRCxPQUFPVztBQUNUO0FBRUEsU0FBU0osMkJBQTJCRixxQkFBcUIsRUFBRUQsWUFBWSxFQUFFO0lBQ3ZFLElBQUlFLCtCQUErQixLQUFLO0lBRXhDLElBQU1wQixVQUFVbUIsc0JBQXNCckIsS0FBSyxDQUFDb0I7SUFFNUMsSUFBSWxCLFNBQVM7UUFDWG9CLCtCQUErQixJQUFJO0lBQ3JDLENBQUM7SUFFRCxPQUFPQTtBQUNUO0FBRUEsU0FBU2hCLDhCQUE4QkYsd0JBQXdCLEVBQUVQLGVBQWUsRUFBRTtJQUNoRixJQUFJUSxrQ0FBa0MsS0FBSztJQUUzQyxJQUFNOEIsV0FBV3RDLGdCQUFnQnVDLFdBQVcsSUFDdENDLG9CQUFvQmpDLHlCQUF5QmdDLFdBQVcsSUFBSSxHQUFHO0lBRXJFLElBQUlELGFBQWFFLG1CQUFtQjtRQUNsQyxJQUFNWCxhQUFhN0IsZ0JBQWdCeUMsYUFBYSxJQUMxQ2Isc0JBQXNCckIseUJBQXlCa0MsYUFBYSxJQUM1RFgsNkJBQTZCSCx5QkFBeUJDLHFCQUFxQkM7UUFFakZyQixrQ0FBa0NzQiw0QkFBNEIsR0FBRztJQUNuRSxDQUFDO0lBRUQsT0FBT3RCO0FBQ1QifQ==