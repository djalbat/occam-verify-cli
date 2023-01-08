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
var _constants = require("./constants");
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
var specialNodeQuery = (0, _query.nodeQuery)("/statement/@special!"), leftTermNodeQuery = (0, _query.nodeQuery)("/statement/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/statement/term[1]");
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
                    var specialNode = specialNodeQuery(statementNode);
                    if (specialNode !== null) {
                        var terminalNode = specialNode, terminalNodeContent = terminalNode.getContent();
                        if (terminalNodeContent === _constants.EQUALS_CHARACTER) {
                            var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode);
                            equality = new Equality(leftTermNode, rightTermNode);
                        }
                    }
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgRVFVQUxTX0NIQVJBQ1RFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jb25zdCBzcGVjaWFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9Ac3BlY2lhbCFcIiksXG4gICAgICBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdGVybVswXVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdGVybVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpIHtcbiAgICB0aGlzLmxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZTtcbiAgICB0aGlzLnJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoKGVxdWFsaXR5LCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hMZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIG1hdGNoZXMgPSBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHJldmVyc2VkID0gdHJ1ZSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hMZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIG1hdGNoZXMgPSBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdHJ1ZTtcblxuICAgIGlmIChsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VGVybU5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSBsZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cblxuICAgIGlmIChsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoO1xuICB9XG5cbiAgZXF1YXRlKGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSB0aGlzLmxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5yaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSxcbiAgICAgICAgICBlcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG5cbiAgICByZXR1cm4gZXF1YXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzcGVjaWFsTm9kZSA9IHNwZWNpYWxOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzcGVjaWFsTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBzcGVjaWFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICAgIGlmICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSBFUVVBTFNfQ0hBUkFDVEVSKSB7XG4gICAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlKG5vZGVBLCBub2RlQiwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBub2RlRXF1YXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVBVGVybWluYWxOb2RlID0gbm9kZUEuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgbm9kZUJUZXJtaW5hbE5vZGUgPSBub2RlQi5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlQVRlcm1pbmFsTm9kZSA9PT0gbm9kZUJUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZUFUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlQiA9IG5vZGVCLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gdGVybWluYWxOb2RlRXF1YXRlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICBsZXQgbm9kZXNFcXVhdGUgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9kZXNMZW5ndGggPSBsZWZ0Tm9kZXMubGVuZ3RoLFxuICAgICAgICByaWdodE5vZGVzTGVuZ3RoID0gcmlnaHROb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKGxlZnROb2Rlc0xlbmd0aCA9PT0gcmlnaHROb2Rlc0xlbmd0aCkge1xuICAgIG5vZGVzRXF1YXRlID0gbGVmdE5vZGVzLmV2ZXJ5KChMZWZ0Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJpZ2h0Tm9kZSA9IHJpZ2h0Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZUVxdWF0ZXMgPSBlcXVhdGVOb2RlKExlZnROb2RlLCByaWdodE5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc0VxdWF0ZTtcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IG1hdGNoZXM7ICAvLy9cblxuICByZXR1cm4gdGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIGlmIChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgcnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKTtcblxuICAgIGlmIChydWxlTmFtZVRlcm1SdWxlTmFtZSkge1xuICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybU5vZGVFcXVhdGVzID0gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gdGVybU5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFub25UZXJtaW5hbE5vZGVFcXVhdGVzKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbGVmdE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBub2Rlc0VxdWF0ZSA9IGVxdWF0ZU5vZGVzKGxlZnROb2RlcywgcmlnaHROb2RlcywgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IG5vZGVzRXF1YXRlOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgY29uc3QgZXF1YWxpdHkgPSBFcXVhbGl0eS5mcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICBlcXVhbGl0eUEgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgIGVxdWFsaXR5TWF0Y2hlcyA9IGVxdWFsaXRpZXMuc29tZSgoZXF1YWxpdHkpID0+IHsgLy8vXG4gICAgICAgICAgbGV0IGVxdWFsaXRpZXNCID0gZXF1YWxpdGllczsgLy8vXG5cbiAgICAgICAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eTsgLy8vXG5cbiAgICAgICAgICBlcXVhbGl0aWVzQiA9IHBydW5lRXF1YWxpdGllcyhlcXVhbGl0aWVzQiwgZXF1YWxpdHlCKTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5QiA9IGVxdWFsaXR5QS5tYXRjaChlcXVhbGl0eUIsIGVxdWFsaXRpZXNCLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWFsaXR5TWF0Y2hlczsgIC8vL1xuXG4gIHJldHVybiB0ZXJtTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIHBydW5lRXF1YWxpdGllcyhlcXVhbGl0aWVzLCBlcXVhbGl0eSkge1xuICBjb25zdCBlcXVhbGl0eUEgPSBlcXVhbGl0eTsgLy8vXG5cbiAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXMuZmlsdGVyKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5QiA9IGVxdWFsaXR5OyAvLy9cblxuICAgIGlmIChlcXVhbGl0eUEgIT09IGVxdWFsaXR5Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXF1YWxpdGllcztcbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsInNwZWNpYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJlcXVhbGl0eSIsImVxdWFsaXRpZXMiLCJwcm9vZkNvbnRleHQiLCJtYXRjaGVzIiwicmV2ZXJzZWQiLCJsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2giLCJtYXRjaExlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlTm9uVGVybWluYWxOb2RlIiwiZXF1YXRlIiwiZXF1YXRlcyIsImZyb21Qcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInNwZWNpYWxOb2RlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJFUVVBTFNfQ0hBUkFDVEVSIiwiZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUiLCJlcXVhdGVOb2RlIiwibm9kZUEiLCJub2RlQiIsIm5vZGVFcXVhdGVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJlcXVhdGVOb2RlcyIsImxlZnROb2RlcyIsInJpZ2h0Tm9kZXMiLCJub2Rlc0VxdWF0ZSIsImxlZnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJpZ2h0Tm9kZXNMZW5ndGgiLCJldmVyeSIsIkxlZnROb2RlIiwiaW5kZXgiLCJyaWdodE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZUVxdWF0ZXMiLCJlcXVhdGVUZXJtTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImVxdWFsaXR5QSIsImVxdWFsaXR5TWF0Y2hlcyIsInNvbWUiLCJlcXVhbGl0aWVzQiIsImVxdWFsaXR5QiIsInBydW5lRXF1YWxpdGllcyIsImVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3FCQVJLO3lCQUNLO3lCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQyxJQUFNQyxtQkFBbUJDLElBQUFBLGdCQUFTLEVBQUMseUJBQzdCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsdUJBQzlCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRix5QkF1R2xCLEFBdkdZO2FBQU1BLFNBQ1BLLFlBQVksRUFBRUMsYUFBYTs4QkFEcEJOO1FBRWpCLElBQUksQ0FBQ0ssWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKTjs7WUFNbkJPLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFlBQVksRUFBRTtnQkFDeEMsSUFBSUMsVUFBVSxLQUFLO2dCQUVuQixJQUFNUixlQUFlSyxTQUFTSCxlQUFlLElBQ3ZDRCxnQkFBZ0JJLFNBQVNGLGdCQUFnQjtnQkFFL0MsSUFBSSxDQUFDSyxTQUFTO29CQUNaLElBQU1DLFdBQVcsS0FBSyxFQUNoQkMsb0NBQW9DLElBQUksQ0FBQ0MsaUNBQWlDLENBQUNYLGNBQWNDLGVBQWVRLFVBQVVILFlBQVlDO29CQUVwSUMsVUFBVUUsbUNBQW9DLEdBQUc7Z0JBQ25ELENBQUM7Z0JBRUQsSUFBSSxDQUFDRixTQUFTO29CQUNaLElBQU1DLFlBQVcsSUFBSSxFQUNmQyxxQ0FBb0MsSUFBSSxDQUFDQyxpQ0FBaUMsQ0FBQ1gsY0FBY0Ms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