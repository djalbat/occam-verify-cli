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
                var matches;
                equalities = pruneEqualities(equalities, equality); ///
                var leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode();
                var leftNonTerminalNode, rightNonTerminalNode, nonTerminalNodeEquates;
                leftNonTerminalNode = this.leftTermNode; ///
                rightNonTerminalNode = leftTermNode; ///
                nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, proofContext);
                if (nonTerminalNodeEquates) {
                    leftNonTerminalNode = this.rightTermNode; ///
                    rightNonTerminalNode = rightTermNode; ///
                    nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, proofContext);
                }
                matches = nonTerminalNodeEquates; ///
                return matches;
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
    var equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode), equalityA = equality, equalitiesB = equalities, equalityMatches = equalitiesB.some(function(equalityB) {
        var equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, proofContext);
        if (equalityAMatchesEqualityB) {
            return true;
        }
    }), termNodeEquates = equalityMatches; ///
    return termNodeEquates;
}
function pruneEqualities(equalities, equality) {
    var equalityA = equality, equalitiesB = equalities; ///
    equalities = equalitiesB.filter(function(equalityB) {
        if (equalityA !== equalityB) {
            return true;
        }
    });
    return equalities;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBlcXVhbGl0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZXF1YWxpdHkhXCIpLFxuICAgICAgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVswXVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzFdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIHRoaXMubGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlO1xuICAgIHRoaXMucmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMZWZ0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2goZXF1YWxpdHksIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzO1xuXG4gICAgZXF1YWxpdGllcyA9IHBydW5lRXF1YWxpdGllcyhlcXVhbGl0aWVzLCBlcXVhbGl0eSk7IC8vL1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKTtcblxuICAgIGxldCBsZWZ0Tm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzO1xuXG4gICAgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHRoaXMubGVmdFRlcm1Ob2RlOyAgLy8vXG4gICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSBsZWZ0VGVybU5vZGU7ICAvLy9cblxuICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlRXF1YXRlcykge1xuICAgICAgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHRoaXMucmlnaHRUZXJtTm9kZTsgIC8vL1xuICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlOyAgLy8vXG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG4gICAgfVxuXG4gICAgbWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBlcXVhdGUoZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpLFxuICAgICAgICAgIGVxdWF0ZXMgPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cblxuICAgIHJldHVybiBlcXVhdGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZlN0ZXAocHJvb2ZTdGVwKSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlKG5vZGVBLCBub2RlQiwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBub2RlRXF1YXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlQVRlcm1pbmFsTm9kZSA9PT0gbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gdGVybWluYWxOb2RlRXF1YXRlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICBsZXQgbm9kZXNFcXVhdGUgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9kZXNMZW5ndGggPSBsZWZ0Tm9kZXMubGVuZ3RoLFxuICAgICAgICByaWdodE5vZGVzTGVuZ3RoID0gcmlnaHROb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKGxlZnROb2Rlc0xlbmd0aCA9PT0gcmlnaHROb2Rlc0xlbmd0aCkge1xuICAgIG5vZGVzRXF1YXRlID0gbGVmdE5vZGVzLmV2ZXJ5KChMZWZ0Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJpZ2h0Tm9kZSA9IHJpZ2h0Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZUVxdWF0ZXMgPSBlcXVhdGVOb2RlKExlZnROb2RlLCByaWdodE5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc0VxdWF0ZTtcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IG1hdGNoZXM7ICAvLy9cblxuICByZXR1cm4gdGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIGlmIChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKTtcblxuICAgIGlmIChydWxlTmFtZVRlcm1SdWxlTmFtZSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybU5vZGVFcXVhdGVzID0gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gdGVybU5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFub25UZXJtaW5hbE5vZGVFcXVhdGVzKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbGVmdE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBub2Rlc0VxdWF0ZSA9IGVxdWF0ZU5vZGVzKGxlZnROb2RlcywgcmlnaHROb2RlcywgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IG5vZGVzRXF1YXRlOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICBlcXVhbGl0eUEgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgIGVxdWFsaXRpZXNCID0gZXF1YWxpdGllcywgLy8vXG4gICAgICAgIGVxdWFsaXR5TWF0Y2hlcyA9IGVxdWFsaXRpZXNCLnNvbWUoKGVxdWFsaXR5QikgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCID0gZXF1YWxpdHlBLm1hdGNoKGVxdWFsaXR5QiwgZXF1YWxpdGllc0IsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5Qikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdGVybU5vZGVFcXVhdGVzID0gZXF1YWxpdHlNYXRjaGVzOyAgLy8vXG5cbiAgcmV0dXJuIHRlcm1Ob2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gcHJ1bmVFcXVhbGl0aWVzKGVxdWFsaXRpZXMsIGVxdWFsaXR5KSB7XG4gIGNvbnN0IGVxdWFsaXR5QSA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgZXF1YWxpdGllc0IgPSBlcXVhbGl0aWVzOyAvLy9cblxuICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0IuZmlsdGVyKChlcXVhbGl0eUIpID0+IHtcbiAgICBpZiAoZXF1YWxpdHlBICE9PSBlcXVhbGl0eUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHkiLCJlcXVhbGl0eU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJtYXRjaCIsImVxdWFsaXR5IiwiZXF1YWxpdGllcyIsInByb29mQ29udGV4dCIsIm1hdGNoZXMiLCJwcnVuZUVxdWFsaXRpZXMiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlTm9uVGVybWluYWxOb2RlIiwiZXF1YXRlIiwiZXF1YXRlcyIsImZyb21Qcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImVxdWFsaXR5Tm9kZSIsImZyb21FcXVhbGl0eU5vZGUiLCJmcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZSIsImVxdWF0ZU5vZGUiLCJub2RlQSIsIm5vZGVCIiwibm9kZUVxdWF0ZXMiLCJub2RlQVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZUJUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBIiwidGVybWluYWxOb2RlQiIsInRlcm1pbmFsTm9kZUVxdWF0ZXMiLCJlcXVhdGVUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImVxdWF0ZU5vZGVzIiwibGVmdE5vZGVzIiwicmlnaHROb2RlcyIsIm5vZGVzRXF1YXRlIiwibGVmdE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmlnaHROb2Rlc0xlbmd0aCIsImV2ZXJ5IiwiTGVmdE5vZGUiLCJpbmRleCIsInJpZ2h0Tm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVUZXJtUnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlRXF1YXRlcyIsImVxdWF0ZVRlcm1Ob2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZXF1YWxpdHlBIiwiZXF1YWxpdGllc0IiLCJlcXVhbGl0eU1hdGNoZXMiLCJzb21lIiwiZXF1YWxpdHlCIiwiZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5QiIsImZpbHRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7cUJBUEs7eUJBQ0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDOUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDOUJFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHlCQXNGbEIsQUF0Rlk7YUFBTUEsU0FDUEssWUFBWSxFQUFFQyxhQUFhOzhCQURwQk47UUFFakIsSUFBSSxDQUFDSyxZQUFZLEdBQUdBO1FBQ3BCLElB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