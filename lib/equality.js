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
var leftTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[0]/term!"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/argument[1]/term!");
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
            value: function match(equality, equalities) {
                var matches = false;
                var leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode();
                equalities = filterEqualities(equalities, equality); ///
                if (!matches) {
                    var reversed = false, leftTermNodeAndRightTermNodeMatch = this.matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed, equalities);
                    matches = leftTermNodeAndRightTermNodeMatch; ///
                }
                if (!matches) {
                    var reversed1 = true, leftTermNodeAndRightTermNodeMatch1 = this.matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed1, equalities);
                    matches = leftTermNodeAndRightTermNodeMatch1; ///
                }
                return matches;
            }
        },
        {
            key: "matchLeftTermNodeAndRightTermNode",
            value: function matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed, equalities) {
                var leftTermNodeAndRightTermNodeMatch = true;
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode = reversed ? this.rightTermNode : this.leftTermNode, rightNonTerminalNode = leftTermNode, nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates; ///
                }
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode1 = reversed ? this.leftTermNode : this.rightTermNode, rightNonTerminalNode1 = rightTermNode, nonTerminalNodeEquates1 = equateNonTerminalNode(leftNonTerminalNode1, rightNonTerminalNode1, equalities);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates1; ///
                }
                return leftTermNodeAndRightTermNodeMatch;
            }
        },
        {
            key: "equate",
            value: function equate(equalities) {
                var leftNonTerminalNode = this.leftTermNode, rightNonTerminalNode = this.rightTermNode, nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities), equates = nonTerminalNodeEquates; ///
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
                    var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode);
                    if (leftTermNode !== null && rightTermNode !== null) {
                        equality = new Equality(leftTermNode, rightTermNode);
                    }
                }
                return equality;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode), equality = new Equality(leftTermNode, rightTermNode);
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
function equateNode(nodeA, nodeB, equalities) {
    var nodeEquates = false;
    var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
    if (nodeATerminalNode === nodeBTerminalNode) {
        if (nodeATerminalNode) {
            var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeEquates = equateTerminalNode(terminalNodeA, terminalNodeB, equalities);
            nodeEquates = terminalNodeEquates; ///
        } else {
            var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeEquates = equateNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equalities);
            nodeEquates = nonTerminalNodeEquates; ///
        }
    }
    return nodeEquates;
}
function equateNodes(leftNodes, rightNodes, equalities) {
    var nodesEquate = false;
    var leftNodesLength = leftNodes.length, rightNodesLength = rightNodes.length;
    if (leftNodesLength === rightNodesLength) {
        nodesEquate = leftNodes.every(function(LeftNode, index) {
            var rightNode = rightNodes[index], nodeEquates = equateNode(LeftNode, rightNode, equalities);
            if (nodeEquates) {
                return true;
            }
        });
    }
    return nodesEquate;
}
function equateTerminalNode(terminalNodeA, terminalNodeB, equalities) {
    var matches = terminalNodeA.match(terminalNodeB), terminalNodeEquates = matches; ///
    return terminalNodeEquates;
}
function equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities) {
    var nonTerminalNodeEquates = false;
    var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();
    if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
        var ruleName = leftNonTerminalNodeRuleName, ruleNameTermRuleName = ruleName === _ruleNames.TERM_RULE_NAME;
        if (ruleNameTermRuleName) {
            var leftTermNode = leftNonTerminalNode, rightTermNode = rightNonTerminalNode, termNodeEquates = equateTermNode(leftTermNode, rightTermNode, equalities);
            nonTerminalNodeEquates = termNodeEquates; ///
        }
        if (!nonTerminalNodeEquates) {
            var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftNodes = leftNonTerminalNodeChildNodes, rightNodes = rightNonTerminalNodeChildNodes, nodesEquate = equateNodes(leftNodes, rightNodes, equalities);
            nonTerminalNodeEquates = nodesEquate; ///
        }
    }
    return nonTerminalNodeEquates;
}
function equateTermNode(leftTermNode, rightTermNode, equalities) {
    var equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode), equalityA = equality, equalitiesB = equalities, equalityMatches = equalitiesB.some(function(equalityB) {
        var equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB);
        if (equalityAMatchesEqualityB) {
            return true;
        }
    }), termNodeEquates = equalityMatches; ///
    return termNodeEquates;
}
function filterEqualities(equalities, equality) {
    var equalityA = equality; ///
    equalities = equalities.filter(function(equality) {
        var equalityB = equality; ///
        if (equalityA !== equalityB) {
            return true;
        }
    });
    return equalities;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMF0vdGVybSFcIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIHRoaXMubGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlO1xuICAgIHRoaXMucmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMZWZ0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2goZXF1YWxpdHksIGVxdWFsaXRpZXMpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKTtcblxuICAgIGVxdWFsaXRpZXMgPSBmaWx0ZXJFcXVhbGl0aWVzKGVxdWFsaXRpZXMsIGVxdWFsaXR5KTsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCByZXZlcnNlZCA9IGZhbHNlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaExlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcyk7XG5cbiAgICAgIG1hdGNoZXMgPSBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHJldmVyc2VkID0gdHJ1ZSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hMZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMpO1xuXG4gICAgICBtYXRjaGVzID0gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaExlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcykge1xuICAgIGxldCBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0cnVlO1xuXG4gICAgaWYgKGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCkge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHJldmVyc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcyk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cblxuICAgIGlmIChsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzKTtcblxuICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDtcbiAgfVxuXG4gIGVxdWF0ZShlcXVhbGl0aWVzKSB7XG4gICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzKSxcbiAgICAgICAgICBlcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG5cbiAgICByZXR1cm4gZXF1YXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmICgobGVmdFRlcm1Ob2RlICE9PSBudWxsKSAmJiAocmlnaHRUZXJtTm9kZSAhPT0gbnVsbCkpIHtcbiAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vZGUobm9kZUEsIG5vZGVCLCBlcXVhbGl0aWVzKSB7XG4gIGxldCBub2RlRXF1YXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlQVRlcm1pbmFsTm9kZSA9PT0gbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMpO1xuXG4gICAgICBub2RlRXF1YXRlcyA9IHRlcm1pbmFsTm9kZUVxdWF0ZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBlcXVhbGl0aWVzKTtcblxuICAgICAgbm9kZUVxdWF0ZXMgPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vZGVzKGxlZnROb2RlcywgcmlnaHROb2RlcywgZXF1YWxpdGllcykge1xuICBsZXQgbm9kZXNFcXVhdGUgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9kZXNMZW5ndGggPSBsZWZ0Tm9kZXMubGVuZ3RoLFxuICAgICAgICByaWdodE5vZGVzTGVuZ3RoID0gcmlnaHROb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKGxlZnROb2Rlc0xlbmd0aCA9PT0gcmlnaHROb2Rlc0xlbmd0aCkge1xuICAgIG5vZGVzRXF1YXRlID0gbGVmdE5vZGVzLmV2ZXJ5KChMZWZ0Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJpZ2h0Tm9kZSA9IHJpZ2h0Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZUVxdWF0ZXMgPSBlcXVhdGVOb2RlKExlZnROb2RlLCByaWdodE5vZGUsIGVxdWFsaXRpZXMpO1xuXG4gICAgICBpZiAobm9kZUVxdWF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbm9kZXNFcXVhdGU7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCBlcXVhbGl0aWVzKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVBLm1hdGNoKHRlcm1pbmFsTm9kZUIpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVFcXVhdGVzID0gbWF0Y2hlczsgIC8vL1xuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIGlmIChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKTtcblxuICAgIGlmIChydWxlTmFtZVRlcm1SdWxlTmFtZSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybU5vZGVFcXVhdGVzID0gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IHRlcm1Ob2RlRXF1YXRlczsgIC8vL1xuICAgIH1cblxuICAgIGlmICghbm9uVGVybWluYWxOb2RlRXF1YXRlcykge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgIGxlZnROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgbm9kZXNFcXVhdGUgPSBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gbm9kZXNFcXVhdGU7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGVxdWFsaXRpZXMpIHtcbiAgY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICBlcXVhbGl0eUEgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgIGVxdWFsaXRpZXNCID0gZXF1YWxpdGllcywgLy8vXG4gICAgICAgIGVxdWFsaXR5TWF0Y2hlcyA9IGVxdWFsaXRpZXNCLnNvbWUoKGVxdWFsaXR5QikgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCID0gZXF1YWxpdHlBLm1hdGNoKGVxdWFsaXR5QiwgZXF1YWxpdGllc0IpO1xuXG4gICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWFsaXR5TWF0Y2hlczsgIC8vL1xuXG4gIHJldHVybiB0ZXJtTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckVxdWFsaXRpZXMoZXF1YWxpdGllcywgZXF1YWxpdHkpIHtcbiAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHk7IC8vL1xuXG4gIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzLmZpbHRlcigoZXF1YWxpdHkpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eTsgLy8vXG5cbiAgICBpZiAoZXF1YWxpdHlBICE9PSBlcXVhbGl0eUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJlcXVhbGl0eSIsImVxdWFsaXRpZXMiLCJtYXRjaGVzIiwiZmlsdGVyRXF1YWxpdGllcyIsInJldmVyc2VkIiwibGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoIiwibWF0Y2hMZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlRXF1YXRlcyIsImVxdWF0ZU5vblRlcm1pbmFsTm9kZSIsImVxdWF0ZSIsImVxdWF0ZXMiLCJmcm9tUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwiZXF1YXRlTm9kZSIsIm5vZGVBIiwibm9kZUIiLCJub2RlRXF1YXRlcyIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlRXF1YXRlcyIsImVxdWF0ZVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZXF1YXRlTm9kZXMiLCJsZWZ0Tm9kZXMiLCJyaWdodE5vZGVzIiwibm9kZXNFcXVhdGUiLCJsZWZ0Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyaWdodE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJMZWZ0Tm9kZSIsImluZGV4IiwicmlnaHROb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZVRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybU5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJlcXVhbGl0eUEiLCJlcXVhbGl0aWVzQiIsImVxdWFsaXR5TWF0Y2hlcyIsInNvbWUiLCJlcXVhbGl0eUIiLCJlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztxQkFOSzt5QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGlDQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYseUJBMEdsQixBQTFHWTthQUFNQSxTQUNQSSxZQUFZLEVBQUVDLGFBQWE7OEJBRHBCTDtRQUVqQixJQUFJLENBQUNJLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztpQkFISkw7O1lBTW5CTSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDRixh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