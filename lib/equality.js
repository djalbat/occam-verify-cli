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
    var equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode), equalityA = equality, equalityMatches = equalities.some(function(equality) {
        var equalitiesB = equalities; ///
        var equalityB = equality; ///
        equalitiesB = filterEqualities(equalitiesB, equalityB); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5jb25zdCBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMF0vdGVybSFcIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIHRoaXMubGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlO1xuICAgIHRoaXMucmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMZWZ0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2goZXF1YWxpdHksIGVxdWFsaXRpZXMpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hMZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMpO1xuXG4gICAgICBtYXRjaGVzID0gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCByZXZlcnNlZCA9IHRydWUsXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0aGlzLm1hdGNoTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzKTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hMZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMpIHtcbiAgICBsZXQgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdHJ1ZTtcblxuICAgIGlmIChsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VGVybU5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSBsZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMpO1xuXG4gICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAobGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gcmV2ZXJzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0VGVybU5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcyk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7XG4gIH1cblxuICBlcXVhdGUoZXF1YWxpdGllcykge1xuICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSB0aGlzLmxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5yaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcyksXG4gICAgICAgICAgZXF1YXRlcyA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWF0ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoKGxlZnRUZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHJpZ2h0VGVybU5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlKG5vZGVBLCBub2RlQiwgZXF1YWxpdGllcykge1xuICBsZXQgbm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZUFUZXJtaW5hbE5vZGUgPT09IG5vZGVCVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVBVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCBlcXVhbGl0aWVzKTtcblxuICAgICAgbm9kZUVxdWF0ZXMgPSB0ZXJtaW5hbE5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgZXF1YWxpdGllcyk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMpIHtcbiAgbGV0IG5vZGVzRXF1YXRlID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdE5vZGVzTGVuZ3RoID0gbGVmdE5vZGVzLmxlbmd0aCxcbiAgICAgICAgcmlnaHROb2Rlc0xlbmd0aCA9IHJpZ2h0Tm9kZXMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0Tm9kZXNMZW5ndGggPT09IHJpZ2h0Tm9kZXNMZW5ndGgpIHtcbiAgICBub2Rlc0VxdWF0ZSA9IGxlZnROb2Rlcy5ldmVyeSgoTGVmdE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByaWdodE5vZGUgPSByaWdodE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGVFcXVhdGVzID0gZXF1YXRlTm9kZShMZWZ0Tm9kZSwgcmlnaHROb2RlLCBlcXVhbGl0aWVzKTtcblxuICAgICAgaWYgKG5vZGVFcXVhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzRXF1YXRlO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgZXF1YWxpdGllcykge1xuICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IG1hdGNoZXM7ICAvLy9cblxuICByZXR1cm4gdGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzKSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lVGVybVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBURVJNX1JVTEVfTkFNRSk7XG5cbiAgICBpZiAocnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWF0ZVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcyk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSB0ZXJtTm9kZUVxdWF0ZXM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW5vblRlcm1pbmFsTm9kZUVxdWF0ZXMpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBsZWZ0Tm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICByaWdodE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzRXF1YXRlID0gZXF1YXRlTm9kZXMobGVmdE5vZGVzLCByaWdodE5vZGVzLCBlcXVhbGl0aWVzKTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IG5vZGVzRXF1YXRlOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzKSB7XG4gIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICBlcXVhbGl0eU1hdGNoZXMgPSBlcXVhbGl0aWVzLnNvbWUoKGVxdWFsaXR5KSA9PiB7IC8vL1xuICAgICAgICAgIGxldCBlcXVhbGl0aWVzQiA9IGVxdWFsaXRpZXM7IC8vL1xuXG4gICAgICAgICAgY29uc3QgZXF1YWxpdHlCID0gZXF1YWxpdHk7IC8vL1xuXG4gICAgICAgICAgZXF1YWxpdGllc0IgPSBmaWx0ZXJFcXVhbGl0aWVzKGVxdWFsaXRpZXNCLCBlcXVhbGl0eUIpOyAgLy8vXG5cbiAgICAgICAgICBjb25zdCBlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCID0gZXF1YWxpdHlBLm1hdGNoKGVxdWFsaXR5QiwgZXF1YWxpdGllc0IpO1xuXG4gICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWFsaXR5TWF0Y2hlczsgIC8vL1xuXG4gIHJldHVybiB0ZXJtTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckVxdWFsaXRpZXMoZXF1YWxpdGllcywgZXF1YWxpdHkpIHtcbiAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHk7IC8vL1xuXG4gIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzLmZpbHRlcigoZXF1YWxpdHkpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eTsgLy8vXG5cbiAgICBpZiAoZXF1YWxpdHlBICE9PSBlcXVhbGl0eUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJlcXVhbGl0eSIsImVxdWFsaXRpZXMiLCJtYXRjaGVzIiwicmV2ZXJzZWQiLCJsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2giLCJtYXRjaExlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlTm9uVGVybWluYWxOb2RlIiwiZXF1YXRlIiwiZXF1YXRlcyIsImZyb21Qcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUiLCJlcXVhdGVOb2RlIiwibm9kZUEiLCJub2RlQiIsIm5vZGVFcXVhdGVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJlcXVhdGVOb2RlcyIsImxlZnROb2RlcyIsInJpZ2h0Tm9kZXMiLCJub2Rlc0VxdWF0ZSIsImxlZnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJpZ2h0Tm9kZXNMZW5ndGgiLCJldmVyeSIsIkxlZnROb2RlIiwiaW5kZXgiLCJyaWdodE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZUVxdWF0ZXMiLCJlcXVhdGVUZXJtTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImVxdWFsaXR5QSIsImVxdWFsaXR5TWF0Y2hlcyIsInNvbWUiLCJlcXVhbGl0aWVzQiIsImVxdWFsaXR5QiIsImZpbHRlckVxdWFsaXRpZXMiLCJlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztxQkFOSzt5QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGlDQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYseUJBd0dsQixBQXhHWTthQUFNQSxTQUNQSSxZQUFZLEVBQUVDLGFBQWE7OEJBRHBCTDtRQUVqQixJQUFJLENBQUNJLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztpQkFISkw7O1lBTW5CTSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMx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