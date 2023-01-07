"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Equality;
    }
});
var _query = require("./utilities/query");
var _ruleNames = require("./ruleNames");
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
var equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), leftTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
var Equality = /*#__PURE__*/ function() {
    function Equality(leftTermNode, rightTermNode) {
        _classCallCheck(this, Equality);
        this.leftTermNode = leftTermNode;
        this.rightTermNode = rightTermNode;
    }
    _createClass(Equality, [
        {
            key: "getLeftTermNode",
            value: function getLeftTermNode() {
                return this.leftTermNode;
            }
        },
        {
            key: "getRightTermNode",
            value: function getRightTermNode() {
                return this.rightTermNode;
            }
        },
        {
            key: "match",
            value: function match(equality, equalities, proofContext) {
                var matches = false;
                var leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode();
                if (!matches) {
                    var reversed = false, leftTermNodeAndRightTermNodeMatch = this.matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed, equalities, proofContext);
                    matches = leftTermNodeAndRightTermNodeMatch; ///
                }
                if (!matches) {
                    var reversed1 = true, leftTermNodeAndRightTermNodeMatch1 = this.matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed1, equalities, proofContext);
                    matches = leftTermNodeAndRightTermNodeMatch1; ///
                }
                return matches;
            }
        },
        {
            key: "matchLeftTermNodeAndRightTermNode",
            value: function matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed, equalities, proofContext) {
                var leftTermNodeAndRightTermNodeMatch = true;
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode = reversed ? this.rightTermNode : this.leftTermNode, rightNonTerminalNode = leftTermNode, nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, proofContext);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates; ///
                }
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode1 = reversed ? this.leftTermNode : this.rightTermNode, rightNonTerminalNode1 = rightTermNode, nonTerminalNodeEquates1 = equateNonTerminalNode(leftNonTerminalNode1, rightNonTerminalNode1, equalities, proofContext);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates1; ///
                }
                return leftTermNodeAndRightTermNodeMatch;
            }
        },
        {
            key: "equate",
            value: function equate(equalities, proofContext) {
                var leftNonTerminalNode = this.leftTermNode, rightNonTerminalNode = this.rightTermNode, nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, proofContext), equates = nonTerminalNodeEquates; ///
                return equates;
            }
        }
    ], [
        {
            key: "fromProofStep",
            value: function fromProofStep(proofStep) {
                var equality = null;
                var statementNode = proofStep.getStatementNode();
                if (statementNode !== null) {
                    var equalityNode = equalityNodeQuery(statementNode);
                    if (equalityNode !== null) {
                        var leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode);
                        equality = new Equality(leftTermNode, rightTermNode);
                    }
                }
                return equality;
            }
        },
        {
            key: "fromEqualityNode",
            value: function fromEqualityNode(equalityNode) {
                var leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode), equality = new Equality(leftTermNode, rightTermNode);
                return equality;
            }
        },
        {
            key: "fromLeftTermNodeAndRightTermNode",
            value: function fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode) {
                var equality = new Equality(leftTermNode, rightTermNode);
                return equality;
            }
        }
    ]);
    return Equality;
}();
function equateNode(nodeA, nodeB, equalities, proofContext) {
    var nodeEquates = false;
    var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
    if (nodeATerminalNode === nodeBTerminalNode) {
        if (nodeATerminalNode) {
            var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeEquates = equateTerminalNode(terminalNodeA, terminalNodeB, equalities, proofContext);
            nodeEquates = terminalNodeEquates; ///
        } else {
            var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeEquates = equateNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equalities, proofContext);
            nodeEquates = nonTerminalNodeEquates; ///
        }
    }
    return nodeEquates;
}
function equateNodes(leftNodes, rightNodes, equalities, proofContext) {
    var nodesEquate = false;
    var leftNodesLength = leftNodes.length, rightNodesLength = rightNodes.length;
    if (leftNodesLength === rightNodesLength) {
        nodesEquate = leftNodes.every(function(LeftNode, index) {
            var rightNode = rightNodes[index], nodeEquates = equateNode(LeftNode, rightNode, equalities, proofContext);
            if (nodeEquates) {
                return true;
            }
        });
    }
    return nodesEquate;
}
function equateTerminalNode(terminalNodeA, terminalNodeB, equalities, proofContext) {
    var matches = terminalNodeA.match(terminalNodeB), terminalNodeEquates = matches; ///
    return terminalNodeEquates;
}
function equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, proofContext) {
    var nonTerminalNodeEquates = false;
    var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();
    if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
        var ruleName = leftNonTerminalNodeRuleName, ruleNameTermRuleName = ruleName === _ruleNames.TERM_RULE_NAME;
        if (ruleNameTermRuleName) {
            var leftTermNode = leftNonTerminalNode, rightTermNode = rightNonTerminalNode, termNodeEquates = equateTermNode(leftTermNode, rightTermNode, equalities, proofContext);
            nonTerminalNodeEquates = termNodeEquates; ///
        }
        if (!nonTerminalNodeEquates) {
            var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftNodes = leftNonTerminalNodeChildNodes, rightNodes = rightNonTerminalNodeChildNodes, nodesEquate = equateNodes(leftNodes, rightNodes, equalities, proofContext);
            nonTerminalNodeEquates = nodesEquate; ///
        }
    }
    return nonTerminalNodeEquates;
}
function equateTermNode(leftTermNode, rightTermNode, equalities, proofContext) {
    var equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode), equalityA = equality, equalityMatches = equalities.some(function(equality) {
        var equalitiesB = equalities; ///
        var equalityB = equality; ///
        equalitiesB = pruneEqualities(equalitiesB, equalityB); ///
        var equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, proofContext);
        if (equalityAMatchesEqualityB) {
            return true;
        }
    }), termNodeEquates = equalityMatches; ///
    return termNodeEquates;
}
function pruneEqualities(equalities, equality) {
    var equalityA = equality; ///
    equalities = equalities.filter(function(equality) {
        var equalityB = equality; ///
        if (equalityA !== equalityB) {
            return true;
        }
    });
    return equalities;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBlcXVhbGl0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZXF1YWxpdHkhXCIpLFxuICAgICAgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVswXVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzFdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIHRoaXMubGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlO1xuICAgIHRoaXMucmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMZWZ0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2goZXF1YWxpdHksIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCByZXZlcnNlZCA9IGZhbHNlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaExlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSB0cnVlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaExlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hMZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICAgIGxldCBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0cnVlO1xuXG4gICAgaWYgKGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCkge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHJldmVyc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCkge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHJldmVyc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlcm1Ob2RlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7XG4gIH1cblxuICBlcXVhdGUoZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpLFxuICAgICAgICAgIGVxdWF0ZXMgPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cblxuICAgIHJldHVybiBlcXVhdGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZlN0ZXAocHJvb2ZTdGVwKSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlKG5vZGVBLCBub2RlQiwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBub2RlRXF1YXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlQVRlcm1pbmFsTm9kZSA9PT0gbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gdGVybWluYWxOb2RlRXF1YXRlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICBsZXQgbm9kZXNFcXVhdGUgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9kZXNMZW5ndGggPSBsZWZ0Tm9kZXMubGVuZ3RoLFxuICAgICAgICByaWdodE5vZGVzTGVuZ3RoID0gcmlnaHROb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKGxlZnROb2Rlc0xlbmd0aCA9PT0gcmlnaHROb2Rlc0xlbmd0aCkge1xuICAgIG5vZGVzRXF1YXRlID0gbGVmdE5vZGVzLmV2ZXJ5KChMZWZ0Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJpZ2h0Tm9kZSA9IHJpZ2h0Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZUVxdWF0ZXMgPSBlcXVhdGVOb2RlKExlZnROb2RlLCByaWdodE5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc0VxdWF0ZTtcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IG1hdGNoZXM7ICAvLy9cblxuICByZXR1cm4gdGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIGlmIChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKTtcblxuICAgIGlmIChydWxlTmFtZVRlcm1SdWxlTmFtZSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybU5vZGVFcXVhdGVzID0gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gdGVybU5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFub25UZXJtaW5hbE5vZGVFcXVhdGVzKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbGVmdE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBub2Rlc0VxdWF0ZSA9IGVxdWF0ZU5vZGVzKGxlZnROb2RlcywgcmlnaHROb2RlcywgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IG5vZGVzRXF1YXRlOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICBlcXVhbGl0eUEgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgIGVxdWFsaXR5TWF0Y2hlcyA9IGVxdWFsaXRpZXMuc29tZSgoZXF1YWxpdHkpID0+IHsgLy8vXG4gICAgICAgICAgbGV0IGVxdWFsaXRpZXNCID0gZXF1YWxpdGllczsgLy8vXG5cbiAgICAgICAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eTsgLy8vXG5cbiAgICAgICAgICBlcXVhbGl0aWVzQiA9IHBydW5lRXF1YWxpdGllcyhlcXVhbGl0aWVzQiwgZXF1YWxpdHlCKTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5QiA9IGVxdWFsaXR5QS5tYXRjaChlcXVhbGl0eUIsIGVxdWFsaXRpZXNCLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWFsaXR5TWF0Y2hlczsgIC8vL1xuXG4gIHJldHVybiB0ZXJtTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIHBydW5lRXF1YWxpdGllcyhlcXVhbGl0aWVzLCBlcXVhbGl0eSkge1xuICBjb25zdCBlcXVhbGl0eUEgPSBlcXVhbGl0eTsgLy8vXG5cbiAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXMuZmlsdGVyKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5QiA9IGVxdWFsaXR5OyAvLy9cblxuICAgIGlmIChlcXVhbGl0eUEgIT09IGVxdWFsaXR5Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXF1YWxpdGllcztcbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsImVxdWFsaXR5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsIm1hdGNoIiwiZXF1YWxpdHkiLCJlcXVhbGl0aWVzIiwicHJvb2ZDb250ZXh0IiwibWF0Y2hlcyIsInJldmVyc2VkIiwibGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoIiwibWF0Y2hMZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlRXF1YXRlcyIsImVxdWF0ZU5vblRlcm1pbmFsTm9kZSIsImVxdWF0ZSIsImVxdWF0ZXMiLCJmcm9tUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJlcXVhbGl0eU5vZGUiLCJmcm9tRXF1YWxpdHlOb2RlIiwiZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUiLCJlcXVhdGVOb2RlIiwibm9kZUEiLCJub2RlQiIsIm5vZGVFcXVhdGVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJlcXVhdGVOb2RlcyIsImxlZnROb2RlcyIsInJpZ2h0Tm9kZXMiLCJub2Rlc0VxdWF0ZSIsImxlZnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJpZ2h0Tm9kZXNMZW5ndGgiLCJldmVyeSIsIkxlZnROb2RlIiwiaW5kZXgiLCJyaWdodE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZUVxdWF0ZXMiLCJlcXVhdGVUZXJtTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImVxdWFsaXR5QSIsImVxdWFsaXR5TWF0Y2hlcyIsInNvbWUiLCJlcXVhbGl0aWVzQiIsImVxdWFsaXR5QiIsInBydW5lRXF1YWxpdGllcyIsImVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O3FCQVBLO3lCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMseUJBQzlCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsc0JBQzlCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRix5QkEwR2xCLEFBMUdZO2FBQU1BLFNBQ1BLLFlBQVksRUFBRUMsYUFBYTs4QkFEcEJOO1FBRWpCLElBQUksQ0FBQ0ssWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKTjs7WUFNbkJPLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRTtnQkFDeEMsSUFBSUMsVUFBVSxLQUFLO2dCQUVuQixJQUFNUixlQUFlSyxTQUFTSCxlQUFlLElBQ3ZDRCxnQkFBZ0JJLFNBQVNGLGdCQUFnQjtnQkFFL0MsSUFBSSxDQUFDSyxTQUFTO29CQUNaLElBQU1DLFdBQVcsS0FBSyxFQUNoQkMsb0NBQW9DLElBQUksQ0FBQ0MsaUNBQWlDLENBQUNYLGNBQWNDLGVBQWVRLFVBQVVILFlBQVlDO29CQUVwSUMsVUFBVUUsbUNBQW9DLEdBQUc7Z0JBQ25ELENBQUM7Z0JBRUQsSUFBSSxDQUFDRixTQUFTO29CQUNaLElBQU1DLFlBQVcsSUFBSSxFQUNmQyxxQ0FBb0MsSUFBSSxDQUFDQyxpQ0FBaUMsQ0FBQ1gsY0FBY0MsZUFBZVEsV0FBVUgsWUFBWUM7b0JBRXBJQyxVQUFVRSxvQ0FBb0MsR0FBRztnQkFDbkQsQ0FBQztnQkFFRCxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtDQUFrQ1gsWUFBWSxFQUFFQyxhQUFhLEVBQUVRLFFBQVEsRUFBRUgsVUFBVSxFQUFFQyxZQUFZLEVBQUU7Z0JBQ2pHLElBQUlHLG9DQUFvQyxJQUFJO2dCQUU1QyxJQUFJQSxtQ0FBbUM7b0JBQ3JDLElBQU1FLHNCQUFzQkgsV0FDRSxJQUFJLENBQUNSLGFBQWEsR0FDaEIsSUFBSSxDQUFDRCxZQUFZLEVBQzNDYSx1QkFBdUJiLGNBQ3ZCYyx5QkFBeUJDLHNCQUFzQkgscUJBQXFCQyxzQkFBc0JQLFlBQVlDO29CQUU1R0csb0NBQW9DSSx3QkFBd0IsR0FBRztnQkFDakUsQ0FBQztnQkFFRCxJQUFJSixtQ0FBbUM7b0JBQ3JDLElBQU1FLHVCQUFzQkgsV0FDRSxJQUFJLENBQUNULFlBQVksR0FDZixJQUFJLENBQUNDLGFBQWEsRUFDNUNZLHdCQUF1QlosZUFDdkJhLDBCQUF5QkMsc0JBQXNCSCxzQkFBcUJDLHVCQUFzQlAsWUFBWUM7b0JBRTVHRyxvQ0FBb0NJLHlCQUF3QixHQUFHO2dCQUNqRSxDQUFDO2dCQUVELE9BQU9KO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1YsVUFBVSxFQUFFQyxZQUFZLEVBQUU7Z0JBQy9CLElBQU1LLHNCQUFzQixJQUFJLENBQUNaLFlBQVksRUFDdkNhLHVCQUF1QixJQUFJLENBQUNaLGFBQWEsRUFDekNhLHlCQUF5QkMsc0JBQXNCSCxxQkFBcUJDLHNCQUFzQlAsWUFBWUMsZUFDdEdVLFVBQVVILHdCQUF3QixHQUFHO2dCQUUzQyxPQUFPRztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRTtnQkFDOUIsSUFBSWQsV0FBVyxJQUFJO2dCQUVuQixJQUFNZSxnQkFBZ0JELFVBQVVFLGdCQUFnQjtnQkFFaEQsSUFBSUQsa0JBQWtCLElBQUksRUFBRTtvQkFDMUIsSUFBTUUsZUFBZTFCLGtCQUFrQndCO29CQUV2QyxJQUFJRSxpQkFBaUIsSUFBSSxFQUFFO3dCQUN6QixJQUFNdEIsZUFBZUYsa0JBQWtCd0IsZUFDakNyQixnQkFBZ0JGLG1CQUFtQnVCO3dCQUV6Q2pCLFdBQVcsSUFwRkVWLFNBb0ZXSyxjQUFjQztvQkFDeEMsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9JO1lBQ1Q7OztZQUVPa0IsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCRCxZQUFZLEVBQUU7Z0JBQ3BDLElBQU10QixlQUFlRixrQkFBa0J3QixlQUNqQ3JCLGdCQUFnQkYsbUJBQW1CdUIsZUFDbkNqQixXQUFXLElBOUZBVixTQThGYUssY0FBY0M7Z0JBRTVDLE9BQU9JO1lBQ1Q7OztZQUVPbUIsS0FBQUE7bUJBQVAsU0FBT0EsaUNBQWlDeEIsWUFBWSxFQUFFQyxhQUFhLEVBQUU7Z0JBQ25FLElBQU1JLFdBQVcsSUFwR0FWLFNBb0dhSyxjQUFjQztnQkFFNUMsT0FBT0k7WUFDVDs7O1dBdkdtQlY7O0FBMEdyQixTQUFTOEIsV0FBV0MsS0FBSyxFQUFFQyxLQUFLLEVBQUVyQixVQUFVLEVBQUVDLFlBQVksRUFBRTtJQUMxRCxJQUFJcUIsY0FBYyxLQUFLO0lBRXZCLElBQU1DLG9CQUFvQkgsTUFBTUksY0FBYyxJQUN4Q0Msb0JBQW9CSixNQUFNRyxjQUFjO0lBRTlDLElBQUlELHNCQUFzQkUsbUJBQW1CO1FBQzNDLElBQUlGLG1CQUFtQjtZQUNyQixJQUFNRyxnQkFBZ0JOLE9BQ2hCTyxnQkFBZ0JOLE9BQ2hCTyxzQkFBc0JDLG1CQUFtQkgsZUFBZUMsZUFBZTNCLFlBQVlDO1lBRXpGcUIsY0FBY00scUJBQXNCLEdBQUc7UUFDekMsT0FBTztZQUNMLElBQU1FLG1CQUFtQlYsT0FDbkJXLG1CQUFtQlYsT0FDbkJiLHlCQUF5QkMsc0JBQXNCcUIsa0JBQWtCQyxrQkFBa0IvQixZQUFZQztZQUVyR3FCLGNBQWNkLHdCQUF3QixHQUFHO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT2M7QUFDVDtBQUVBLFNBQVNVLFlBQVlDLFNBQVMsRUFBRUMsVUFBVSxFQUFFbEMsVUFBVSxFQUFFQyxZQUFZLEVBQUU7SUFDcEUsSUFBSWtDLGNBQWMsS0FBSztJQUV2QixJQUFNQyxrQkFBa0JILFVBQVVJLE1BQU0sRUFDbENDLG1CQUFtQkosV0FBV0csTUFBTTtJQUUxQyxJQUFJRCxvQkFBb0JFLGtCQUFrQjtRQUN4Q0gsY0FBY0YsVUFBVU0sS0FBSyxDQUFDLFNBQUNDLFVBQVVDLE9BQVU7WUFDakQsSUFBTUMsWUFBWVIsVUFBVSxDQUFDTyxNQUFNLEVBQzdCbkIsY0FBY0gsV0FBV3FCLFVBQVVFLFdBQVcxQyxZQUFZQztZQUVoRSxJQUFJcUIsYUFBYTtnQkFDZixPQUFPLElBQUk7WUFDYixDQUFDO1FBQ0g7SUFDRixDQUFDO0lBRUQsT0FBT2E7QUFDVDtBQUVBLFNBQVNOLG1CQUFtQkgsYUFBYSxFQUFFQyxhQUFhLEVBQUUzQixVQUFVLEVBQUVDLFlBQVksRUFBRTtJQUNsRixJQUFNQyxVQUFVd0IsY0FBYzVCLEtBQUssQ0FBQzZCLGdCQUM5QkMsc0JBQXNCMUIsU0FBVSxHQUFHO0lBRXpDLE9BQU8wQjtBQUNUO0FBRUEsU0FBU25CLHNCQUFzQkgsbUJBQW1CLEVBQUVDLG9CQUFvQixFQUFFUCxVQUFVLEVBQUVDLFlBQVksRUFBRTtJQUNsRyxJQUFJTyx5QkFBeUIsS0FBSztJQUVsQyxJQUFNbUMsOEJBQThCckMsb0JBQW9Cc0MsV0FBVyxJQUM3REMsK0JBQStCdEMscUJBQXFCcUMsV0FBVztJQUVyRSxJQUFJRCxnQ0FBZ0NFLDhCQUE4QjtRQUNoRSxJQUFNQyxXQUFXSCw2QkFDWEksdUJBQXdCRCxhQUFhRSx5QkFBYztRQUV6RCxJQUFJRCxzQkFBc0I7WUFDeEIsSUFBTXJELGVBQWVZLHFCQUNmWCxnQkFBZ0JZLHNCQUNoQjBDLGtCQUFrQkMsZUFBZXhELGNBQWNDLGVBQWVLLFlBQVlDO1lBRWhGTyx5QkFBeUJ5QyxpQkFBa0IsR0FBRztRQUNoRCxDQUFDO1FBRUQsSUFBSSxDQUFDekMsd0JBQXdCO1lBQzNCLElBQU0yQyxnQ0FBZ0M3QyxvQkFBb0I4QyxhQUFhLElBQ2pFQyxpQ0FBaUM5QyxxQkFBcUI2QyxhQUFhLElBQ25FbkIsWUFBWWtCLCtCQUNaakIsYUFBYW1CLGdDQUNibEIsY0FBY0gsWUFBWUMsV0FBV0MsWUFBWWxDLFlBQVlDO1lBRW5FTyx5QkFBeUIyQixhQUFhLEdBQUc7UUFDM0MsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPM0I7QUFDVDtBQUVBLFNBQVMwQyxlQUFleEQsWUFBWSxFQUFFQyxhQUFhLEVBQUVLLFVBQVUsRUFBRUMsWUFBWSxFQUFFO0lBQzdFLElBQU1GLFdBQVdWLFNBQVM2QixnQ0FBZ0MsQ0FBQ3hCLGNBQWNDLGdCQUNuRTJELFlBQVl2RCxVQUNad0Qsa0JBQWtCdkQsV0FBV3dELElBQUksQ0FBQyxTQUFDekQsVUFBYTtRQUM5QyxJQUFJMEQsY0FBY3pELFlBQVksR0FBRztRQUVqQyxJQUFNMEQsWUFBWTNELFVBQVUsR0FBRztRQUUvQjBELGNBQWNFLGdCQUFnQkYsYUFBYUMsWUFBYSxHQUFHO1FBRTNELElBQU1FLDRCQUE0Qk4sVUFBVXhELEtBQUssQ0FBQzRELFdBQVdELGFBQWF4RDtRQUUxRSxJQUFJMkQsMkJBQTJCO1lBQzdCLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSCxJQUNBWCxrQkFBa0JNLGlCQUFrQixHQUFHO0lBRTdDLE9BQU9OO0FBQ1Q7QUFFQSxTQUFTVSxnQkFBZ0IzRCxVQUFVLEVBQUVELFFBQVEsRUFBRTtJQUM3QyxJQUFNdUQsWUFBWXZELFVBQVUsR0FBRztJQUUvQkMsYUFBYUEsV0FBVzZELE1BQU0sQ0FBQyxTQUFDOUQsVUFBYTtRQUMzQyxJQUFNMkQsWUFBWTNELFVBQVUsR0FBRztRQUUvQixJQUFJdUQsY0FBY0ksV0FBVztZQUMzQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7SUFFQSxPQUFPMUQ7QUFDVCJ9