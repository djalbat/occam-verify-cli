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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9zdGF0ZW1lbnQhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLnN1YnByb29mTm9kZSA9IHN1YnByb29mTm9kZTtcbiAgICB0aGlzLnN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0Tm9uVGVybWluYWxOb2RlKCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9ICh0aGlzLnN0YXRlbWVudE5vZGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlbWVudE5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGU7XG4gIH1cblxuICBnZXRTdWJwcm9vZk5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VicHJvb2ZOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2goYXNzZXJ0aW9uKSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3NlcnRpb24uZ2V0c3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSAmJiAodGhpcy5zdGF0ZW1lbnROb2RlICE9PSBudWxsKSkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGhpcy5zdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgIGFzc2VydGlvbk5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoQXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlKGFzc2VydGlvbk5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlKTtcblxuICAgICAgbWF0Y2hlcyA9IGFzc2VydGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBudWxsLFxuICAgICAgICAgIGFzc2VydGlvbiA9IG5ldyBBc3NlcnRpb24oc3VicHJvb2ZOb2RlLCBzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVF1YWxpZmllZFN0YXRlbWVudE5vZGUocXVhbGlmaWVkU3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVRdWVyeShxdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBhc3NlcnRpb24gPSBuZXcgQXNzZXJ0aW9uKHN1YnByb29mTm9kZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21VbnF1YWxpZmllZFN0YXRlbWVudE5vZGUodW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KHVucXVhbGlmaWVkU3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgYXNzZXJ0aW9uID0gbmV3IEFzc2VydGlvbihzdWJwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaEFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSwgbm9kZSkge1xuICBsZXQgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBydWxlTm9kZVRlcm1pbmFsTm9kZSA9IGFzc2VydGlvbk5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSA9PT0gcnVsZU5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uVGVybWluYWxOb2RlID0gYXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoQXNzZXJ0aW9uVGVybWluYWxOb2RlKGFzc2VydGlvblRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlKTtcblxuICAgICAgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBhc3NlcnRpb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlID0gYXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoQXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlKGFzc2VydGlvbk5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlKTtcblxuICAgICAgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBhc3NlcnRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0aW9uTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQXNzZXJ0aW9uQ2hpbGROb2Rlcyhhc3NlcnRpb25DaGlsZE5vZGVzLCBjaGlsZE5vZGVzKSB7XG4gIGxldCBhc3NlcnRpb25DaGlsZE5vZGVzTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGNoaWxkTm9kZXNMZW5ndGggPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgIGFzc2VydGlvbkNoaWxkTm9kZXNMZW5ndGggPSBhc3NlcnRpb25DaGlsZE5vZGVzLmxlbmd0aDtcblxuICBpZiAoY2hpbGROb2Rlc0xlbmd0aCA9PT0gYXNzZXJ0aW9uQ2hpbGROb2Rlc0xlbmd0aCkge1xuICAgIGFzc2VydGlvbkNoaWxkTm9kZXNNYXRjaGVzID0gY2hpbGROb2Rlcy5ldmVyeSgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uQ2hpbGROb2RlID0gYXNzZXJ0aW9uQ2hpbGROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gYXNzZXJ0aW9uQ2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgIG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBtYXRjaEFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSwgbm9kZSk7XG5cbiAgICAgIGlmIChhc3NlcnRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGFzc2VydGlvbkNoaWxkTm9kZXNNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaEFzc2VydGlvblRlcm1pbmFsTm9kZShhc3NlcnRpb25UZXJtaW5hbE5vZGUsIHRlcm1pbmFsTm9kZSkge1xuICBsZXQgYXNzZXJ0aW9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBhc3NlcnRpb25UZXJtaW5hbE5vZGUubWF0Y2godGVybWluYWxOb2RlKTtcblxuICBpZiAobWF0Y2hlcykge1xuICAgIGFzc2VydGlvblRlcm1pbmFsTm9kZU1hdGNoZXMgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydGlvblRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlKGFzc2VydGlvbk5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBhc3NlcnRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgYXNzZXJ0aW9uUnVsZU5hbWUgPSBhc3NlcnRpb25Ob25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgaWYgKHJ1bGVOYW1lID09PSBhc3NlcnRpb25SdWxlTmFtZSkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGFzc2VydGlvbkNoaWxkTm9kZXMgPSBhc3NlcnRpb25Ob25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGFzc2VydGlvbkNoaWxkTm9kZXNNYXRjaGVzID0gbWF0Y2hBc3NlcnRpb25DaGlsZE5vZGVzKGFzc2VydGlvbkNoaWxkTm9kZXMsIGNoaWxkTm9kZXMpO1xuXG4gICAgYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGFzc2VydGlvbkNoaWxkTm9kZXNNYXRjaGVzOyAvLy9cbiAgfVxuXG4gIHJldHVybiBhc3NlcnRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIkFzc2VydGlvbiIsInN0YXRlbWVudE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1YnByb29mTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2giLCJhc3NlcnRpb24iLCJtYXRjaGVzIiwiZ2V0c3RhdGVtZW50Tm9kZSIsImFzc2VydGlvbk5vblRlcm1pbmFsTm9kZSIsImFzc2VydGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMiLCJtYXRjaEFzc2VydGlvbk5vblRlcm1pbmFsTm9kZSIsImZyb21TdWJwcm9vZk5vZGUiLCJmcm9tUXVhbGlmaWVkU3RhdGVtZW50Tm9kZSIsInF1YWxpZmllZFN0YXRlbWVudE5vZGUiLCJmcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnROb2RlIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsIm5vZGUiLCJhc3NlcnRpb25Ob2RlTWF0Y2hlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInJ1bGVOb2RlVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiYXNzZXJ0aW9uVGVybWluYWxOb2RlIiwiYXNzZXJ0aW9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoQXNzZXJ0aW9uVGVybWluYWxOb2RlIiwibWF0Y2hBc3NlcnRpb25DaGlsZE5vZGVzIiwiYXNzZXJ0aW9uQ2hpbGROb2RlcyIsImNoaWxkTm9kZXMiLCJhc3NlcnRpb25DaGlsZE5vZGVzTWF0Y2hlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJhc3NlcnRpb25DaGlsZE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJjaGlsZE5vZGUiLCJpbmRleCIsImFzc2VydGlvbkNoaWxkTm9kZSIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJhc3NlcnRpb25SdWxlTmFtZSIsImdldENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRiwwQkE4RGxCLEFBOURZO2FBQU1BLFVBQ1BHLFlBQVksRUFBRUMsYUFBYTs4QkFEcEJKO1FBRWpCLElBQUksQ0FBQ0csWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKSjs7WUFNbkJLLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUI7Z0JBQ25CLElBQU1DLGtCQUFrQixBQUFDLElBQUksQ0FBQ0YsYUFBYSxLQUFLLElBQUksR0FDekIsSUFBSSxDQUFDQSxhQUFhLEdBQ2hCLElBQUk7Z0JBRWpDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDSixhQUFhO1lBQzNCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFNBQVMsRUFBRTtnQkFDZixJQUFJQyxVQUFVLEtBQUs7Z0JBRW5CLElBQU1QLGdCQUFnQk0sVUFBVUUsZ0JBQWdCO2dCQUVoRCxJQUFJLEFBQUNSLGtCQUFrQixJQUFJLElBQU0sSUFBSSxDQUFDQSxhQUFhLEtBQUssSUFBSSxFQUFHO29CQUM3RCxJQUFNRSxrQkFBa0IsSUFBSSxDQUFDRixhQUFhLEVBQ3BDUywyQkFBMkJULGVBQzNCVSxrQ0FBa0NDLDhCQUE4QkYsMEJBQTBCUDtvQkFFaEdLLFVBQVVHLGlDQUFrQyxHQUFHO2dCQUNqRCxDQUFDO2dCQUVELE9BQU9IO1lBQ1Q7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCYixZQUFZLEVBQUU7Z0JBQ3BDLElBQU1DLGdCQUFnQixJQUFJLEVBQ3BCTSxZQUFZLElBeENEVixVQXdDZUcsY0FBY0M7Z0JBRTlDLE9BQU9NO1lBQ1Q7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSwyQkFBMkJDLHNCQUFzQixFQUFFO2dCQUN4RCxJQUFNZixlQUFlLElBQUksRUFDbkJDLGdCQUFnQkgsbUJBQW1CaUIseUJBQ25DUixZQUFZLElBaEREVixVQWdEZUcsY0FBY0M7Z0JBRTlDLE9BQU9NO1lBQ1Q7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFO2dCQUM1RCxJQUFNakIsZUFBZSxJQUFJLEVBQ25CQyxnQkFBZ0JILG1CQUFtQm1CLDJCQUNuQ1YsWUFBWSxJQXhERFYsVUF3RGVHLGNBQWNDO2dCQUU5QyxPQUFPTTtZQUNUOzs7V0EzRG1CVjs7QUE4RHJCLFNBQVNxQixtQkFBbUJDLGFBQWEsRUFBRUMsSUFBSSxFQUFFO0lBQy9DLElBQUlDLHVCQUF1QixLQUFLO0lBRWhDLElBQU1DLG1CQUFtQkYsS0FBS0csY0FBYyxJQUN0Q0MsdUJBQXVCTCxjQUFjSSxjQUFjO0lBRXpELElBQUlELHFCQUFxQkUsc0JBQXNCO1FBQzdDLElBQUlGLGtCQUFrQjtZQUNwQixJQUFNRyxlQUFlTCxNQUNmTSx3QkFBd0JQLGVBQ3hCUSwrQkFBK0JDLDJCQUEyQkYsdUJBQXVCRDtZQUV2RkosdUJBQXVCTSw4QkFBK0IsR0FBRztRQUMzRCxPQUFPO1lBQ0wsSUFBTXhCLGtCQUFrQmlCLE1BQ2xCViwyQkFBMkJTLGVBQzNCUixrQ0FBa0NDLDhCQUE4QkYsMEJBQTBCUDtZQUVoR2tCLHVCQUF1QlYsaUNBQWlDLEdBQUc7UUFDN0QsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPVTtBQUNUO0FBRUEsU0FBU1EseUJBQXlCQyxtQkFBbUIsRUFBRUMsVUFBVSxFQUFFO0lBQ2pFLElBQUlDLDZCQUE2QixLQUFLO0lBRXRDLElBQU1DLG1CQUFtQkYsV0FBV0csTUFBTSxFQUN0Q0MsNEJBQTRCTCxvQkFBb0JJLE1BQU07SUFFMUQsSUFBSUQscUJBQXFCRSwyQkFBMkI7UUFDbERILDZCQUE2QkQsV0FBV0ssS0FBSyxDQUFDLFNBQUNDLFdBQVdDLE9BQVU7WUFDbEUsSUFBTUMscUJBQXFCVCxtQkFBbUIsQ0FBQ1EsTUFBTSxFQUMvQ25CLGdCQUFnQm9CLG9CQUNoQm5CLE9BQU9pQixXQUNQaEIsdUJBQXVCSCxtQkFBbUJDLGVBQWVDO1lBRS9ELElBQUlDLHNCQUFzQjtnQkFDeEIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNIO0lBQ0YsQ0FBQztJQUVELE9BQU9XO0FBQ1Q7QUFFQSxTQUFTSiwyQkFBMkJGLHFCQUFxQixFQUFFRCxZQUFZLEVBQUU7SUFDdkUsSUFBSUUsK0JBQStCLEtBQUs7SUFFeEMsSUFBTW5CLFVBQVVrQixzQkFBc0JwQixLQUFLLENBQUNtQjtJQUU1QyxJQUFJakIsU0FBUztRQUNYbUIsK0JBQStCLElBQUk7SUFDckMsQ0FBQztJQUVELE9BQU9BO0FBQ1Q7QUFFQSxTQUFTZiw4QkFBOEJGLHdCQUF3QixFQUFFUCxlQUFlLEVBQUU7SUFDaEYsSUFBSVEsa0NBQWtDLEtBQUs7SUFFM0MsSUFBTTZCLFdBQVdyQyxnQkFBZ0JzQyxXQUFXLElBQ3RDQyxvQkFBb0JoQyx5QkFBeUIrQixXQUFXLElBQUksR0FBRztJQUVyRSxJQUFJRCxhQUFhRSxtQkFBbUI7UUFDbEMsSUFBTVgsYUFBYTVCLGdCQUFnQndDLGFBQWEsSUFDMUNiLHNCQUFzQnBCLHlCQUF5QmlDLGFBQWEsSUFDNURYLDZCQUE2QkgseUJBQXlCQyxxQkFBcUJDO1FBRWpGcEIsa0NBQWtDcUIsNEJBQTRCLEdBQUc7SUFDbkUsQ0FBQztJQUVELE9BQU9yQjtBQUNUIn0=