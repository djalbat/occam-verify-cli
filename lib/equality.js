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
            key: "matchTermNodes",
            value: function matchTermNodes(leftTermNode, rightTermNode, reversed, context) {
                var leftTermNodeAndRightTermNodeMatch = true;
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode = reversed ? this.rightTermNode : this.leftTermNode, rightNonTerminalNode = leftTermNode, nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates; ///
                }
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode1 = reversed ? this.leftTermNode : this.rightTermNode, rightNonTerminalNode1 = rightTermNode, nonTerminalNodeEquates1 = equateNonTerminalNode(leftNonTerminalNode1, rightNonTerminalNode1, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates1; ///
                }
                return leftTermNodeAndRightTermNodeMatch;
            }
        },
        {
            key: "match",
            value: function match(equality, context) {
                var matches = false;
                var leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode();
                if (!matches) {
                    var reversed = false, leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, context);
                    matches = leftTermNodeAndRightTermNodeMatch; ///
                }
                if (!matches) {
                    var reversed1 = true, leftTermNodeAndRightTermNodeMatch1 = this.matchTermNodes(leftTermNode, rightTermNode, reversed1, context);
                    matches = leftTermNodeAndRightTermNodeMatch1; ///
                }
                return matches;
            }
        },
        {
            key: "equate",
            value: function equate(context) {
                var leftNonTerminalNode = this.leftTermNode, rightNonTerminalNode = this.rightTermNode, nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, context), equates = nonTerminalNodeEquates; ///
                return equates;
            }
        }
    ], [
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
function equateNode(nodeA, nodeB, context) {
    var nodeEquates = false;
    var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
    if (nodeATerminalNode === nodeBTerminalNode) {
        if (nodeATerminalNode) {
            var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeEquates = equateTerminalNode(terminalNodeA, terminalNodeB, context);
            nodeEquates = terminalNodeEquates; ///
        } else {
            var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeEquates = equateNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context);
            nodeEquates = nonTerminalNodeEquates; ///
        }
    }
    return nodeEquates;
}
function equateNodes(leftNodes, rightNodes, context) {
    var nodesEquate = false;
    var leftNodesLength = leftNodes.length, rightNodesLength = rightNodes.length;
    if (leftNodesLength === rightNodesLength) {
        nodesEquate = leftNodes.every(function(LeftNode, index) {
            var rightNode = rightNodes[index], nodeEquates = equateNode(LeftNode, rightNode, context);
            if (nodeEquates) {
                return true;
            }
        });
    }
    return nodesEquate;
}
function equateTerminalNode(terminalNodeA, terminalNodeB, context) {
    var matches = terminalNodeA.match(terminalNodeB), terminalNodeEquates = matches; ///
    return terminalNodeEquates;
}
function equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, context) {
    var nonTerminalNodeEquates = false;
    var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();
    if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
        var ruleName = leftNonTerminalNodeRuleName, ruleNameTermRuleName = ruleName === _ruleNames.TERM_RULE_NAME;
        if (ruleNameTermRuleName) {
            var leftTermNode = leftNonTerminalNode, rightTermNode = rightNonTerminalNode, termNodeEquates = equateTermNode(leftTermNode, rightTermNode, context);
            nonTerminalNodeEquates = termNodeEquates; ///
        }
        if (!nonTerminalNodeEquates) {
            var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftNodes = leftNonTerminalNodeChildNodes, rightNodes = rightNonTerminalNodeChildNodes, nodesEquate = equateNodes(leftNodes, rightNodes, context);
            nonTerminalNodeEquates = nodesEquate; ///
        }
    }
    return nonTerminalNodeEquates;
}
function equateTermNode(leftTermNode, rightTermNode, context) {
    var termNodeEquates = false;
    var equality = equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, context);
    if (equality !== null) {
        var equalityA = equality, equalitiesB = equalities, equalityMatches = equalitiesB.some(function(equalityB) {
            var equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, context);
            if (equalityAMatchesEqualityB) {
                return true;
            }
        });
        termNodeEquates = equalityMatches; ///
    }
    return termNodeEquates;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpIHtcbiAgICB0aGlzLmxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZTtcbiAgICB0aGlzLnJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGVzKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdHJ1ZTtcblxuICAgIGlmIChsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VGVybU5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSBsZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAobGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gcmV2ZXJzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0VGVybU5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7XG4gIH1cblxuICBtYXRjaChlcXVhbGl0eSwgY29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCByZXZlcnNlZCA9IGZhbHNlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBjb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSB0cnVlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBjb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgZXF1YXRlKGNvbnRleHQpIHtcbiAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5sZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGVxdWF0ZXMgPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cblxuICAgIHJldHVybiBlcXVhdGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9kZShub2RlQSwgbm9kZUIsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZUFUZXJtaW5hbE5vZGUgPSBub2RlQS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBub2RlQlRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVBVGVybWluYWxOb2RlID09PSBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChub2RlQVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgY29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gdGVybWluYWxOb2RlRXF1YXRlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQpO1xuXG4gICAgICBub2RlRXF1YXRlcyA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9kZXMobGVmdE5vZGVzLCByaWdodE5vZGVzLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc0VxdWF0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnROb2Rlc0xlbmd0aCA9IGxlZnROb2Rlcy5sZW5ndGgsXG4gICAgICAgIHJpZ2h0Tm9kZXNMZW5ndGggPSByaWdodE5vZGVzLmxlbmd0aDtcblxuICBpZiAobGVmdE5vZGVzTGVuZ3RoID09PSByaWdodE5vZGVzTGVuZ3RoKSB7XG4gICAgbm9kZXNFcXVhdGUgPSBsZWZ0Tm9kZXMuZXZlcnkoKExlZnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmlnaHROb2RlID0gcmlnaHROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBub2RlRXF1YXRlcyA9IGVxdWF0ZU5vZGUoTGVmdE5vZGUsIHJpZ2h0Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc0VxdWF0ZTtcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGNvbnRleHQpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQiksXG4gICAgICAgIHRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBtYXRjaGVzOyAgLy8vXG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgY29udGV4dCkge1xuICBsZXQgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgaWYgKGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZVRlcm1SdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lVGVybVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhdGVUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gdGVybU5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFub25UZXJtaW5hbE5vZGVFcXVhdGVzKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbGVmdE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBub2Rlc0VxdWF0ZSA9IGVxdWF0ZU5vZGVzKGxlZnROb2RlcywgcmlnaHROb2RlcywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBub2Rlc0VxdWF0ZTsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdGVybU5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgIGVxdWFsaXRpZXNCID0gZXF1YWxpdGllcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlNYXRjaGVzID0gZXF1YWxpdGllc0Iuc29tZSgoZXF1YWxpdHlCKSA9PiB7IC8vL1xuICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5QiA9IGVxdWFsaXR5QS5tYXRjaChlcXVhbGl0eUIsIGVxdWFsaXRpZXNCLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhbGl0eU1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0ZXJtTm9kZUVxdWF0ZXM7XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHkiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsIm1hdGNoVGVybU5vZGVzIiwicmV2ZXJzZWQiLCJjb250ZXh0IiwibGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlRXF1YXRlcyIsImVxdWF0ZU5vblRlcm1pbmFsTm9kZSIsIm1hdGNoIiwiZXF1YWxpdHkiLCJtYXRjaGVzIiwiZXF1YXRlIiwiZXF1YXRlcyIsImZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwiZXF1YXRlTm9kZSIsIm5vZGVBIiwibm9kZUIiLCJub2RlRXF1YXRlcyIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlRXF1YXRlcyIsImVxdWF0ZVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZXF1YXRlTm9kZXMiLCJsZWZ0Tm9kZXMiLCJyaWdodE5vZGVzIiwibm9kZXNFcXVhdGUiLCJsZWZ0Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyaWdodE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJMZWZ0Tm9kZSIsImluZGV4IiwicmlnaHROb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZVRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybU5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJlcXVhbGl0eUZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwiZXF1YWxpdHlBIiwiZXF1YWxpdGllc0IiLCJlcXVhbGl0aWVzIiwiZXF1YWxpdHlNYXRjaGVzIiwic29tZSIsImVxdWFsaXR5QiIsImVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0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