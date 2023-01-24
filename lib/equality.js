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
var _term = /*#__PURE__*/ _interopRequireDefault(require("./verify/term"));
var _query = require("./utilities/query");
var _array = require("./utilities/array");
var _ruleNames = require("./ruleNames");
var _string = require("./utilities/string");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
            value: function match(equality, equalities, context) {
                var matches = false;
                var leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode();
                equalities = filterEqualities(equalities, equality); ///
                if (!matches) {
                    var reversed = false, leftTermNodeAndRightTermNodeMatch = this.matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed, equalities, context);
                    matches = leftTermNodeAndRightTermNodeMatch; ///
                }
                if (!matches) {
                    var reversed1 = true, leftTermNodeAndRightTermNodeMatch1 = this.matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed1, equalities, context);
                    matches = leftTermNodeAndRightTermNodeMatch1; ///
                }
                return matches;
            }
        },
        {
            key: "matchLeftTermNodeAndRightTermNode",
            value: function matchLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, reversed, equalities, context) {
                var leftTermNodeAndRightTermNodeMatch = true;
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode = reversed ? this.rightTermNode : this.leftTermNode, rightNonTerminalNode = leftTermNode, nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates; ///
                }
                if (leftTermNodeAndRightTermNodeMatch) {
                    var leftNonTerminalNode1 = reversed ? this.leftTermNode : this.rightTermNode, rightNonTerminalNode1 = rightTermNode, nonTerminalNodeEquates1 = equateNonTerminalNode(leftNonTerminalNode1, rightNonTerminalNode1, equalities, context);
                    leftTermNodeAndRightTermNodeMatch = nonTerminalNodeEquates1; ///
                }
                return leftTermNodeAndRightTermNodeMatch;
            }
        },
        {
            key: "equate",
            value: function equate(equalities, context) {
                var leftNonTerminalNode = this.leftTermNode, rightNonTerminalNode = this.rightTermNode, nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context), equates = nonTerminalNodeEquates; ///
                return equates;
            }
        }
    ], [
        {
            key: "fromProofStep",
            value: function fromProofStep(proofStep, context) {
                var equality = null;
                var statementNode = proofStep.getStatementNode();
                if (statementNode !== null) {
                    var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode);
                    if (leftTermNode !== null && rightTermNode !== null) {
                        equality = equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, context);
                    }
                }
                return equality;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode), equality = equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, context);
                return equality;
            }
        }
    ]);
    return Equality;
}();
function equateNode(nodeA, nodeB, equalities, context) {
    var nodeEquates = false;
    var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
    if (nodeATerminalNode === nodeBTerminalNode) {
        if (nodeATerminalNode) {
            var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeEquates = equateTerminalNode(terminalNodeA, terminalNodeB, equalities, context);
            nodeEquates = terminalNodeEquates; ///
        } else {
            var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeEquates = equateNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equalities, context);
            nodeEquates = nonTerminalNodeEquates; ///
        }
    }
    return nodeEquates;
}
function equateNodes(leftNodes, rightNodes, equalities, context) {
    var nodesEquate = false;
    var leftNodesLength = leftNodes.length, rightNodesLength = rightNodes.length;
    if (leftNodesLength === rightNodesLength) {
        nodesEquate = leftNodes.every(function(LeftNode, index) {
            var rightNode = rightNodes[index], nodeEquates = equateNode(LeftNode, rightNode, equalities, context);
            if (nodeEquates) {
                return true;
            }
        });
    }
    return nodesEquate;
}
function equateTerminalNode(terminalNodeA, terminalNodeB, equalities, context) {
    var matches = terminalNodeA.match(terminalNodeB), terminalNodeEquates = matches; ///
    return terminalNodeEquates;
}
function equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context) {
    var nonTerminalNodeEquates = false;
    var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();
    if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
        var ruleName = leftNonTerminalNodeRuleName, ruleNameTermRuleName = ruleName === _ruleNames.TERM_RULE_NAME;
        if (ruleNameTermRuleName) {
            var leftTermNode = leftNonTerminalNode, rightTermNode = rightNonTerminalNode, termNodeEquates = equateTermNode(leftTermNode, rightTermNode, equalities, context);
            nonTerminalNodeEquates = termNodeEquates; ///
        }
        if (!nonTerminalNodeEquates) {
            var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftNodes = leftNonTerminalNodeChildNodes, rightNodes = rightNonTerminalNodeChildNodes, nodesEquate = equateNodes(leftNodes, rightNodes, equalities, context);
            nonTerminalNodeEquates = nodesEquate; ///
        }
    }
    return nonTerminalNodeEquates;
}
function equateTermNode(leftTermNode, rightTermNode, equalities, context) {
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
function equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, context) {
    var equality = null;
    var types = [], leftTermVerified = (0, _term.default)(leftTermNode, types, context), rightTermVerified = (0, _term.default)(rightTermNode, types, context);
    if (leftTermVerified && rightTermVerified) {
        var firstType = (0, _array.first)(types), secondType = (0, _array.second)(types), leftTermType = firstType, rightTermType = secondType, leftTermTypeEqualToRightTermType = leftTermType.isEqualTo(rightTermType);
        if (leftTermTypeEqualToRightTermType) {
            equality = new Equality(leftTermNode, rightTermNode);
        } else {
            var leftTermString = context.nodeAsString(leftTermNode), rightTermString = context.nodeAsString(rightTermNode), leftTermTypeName = leftTermType.getName(), rightTermTypeName = rightTermType.getName();
            context.error("The left '".concat(leftTermString, "' term's '").concat(leftTermTypeName, "' type is not equal to the right '").concat(rightTermString, "' term's '").concat(rightTermTypeName, "' type.'"));
        }
    }
    return equality;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdmVyaWZ5L3Rlcm1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHtub2RlQXNTdHJpbmd9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2FyZ3VtZW50WzBdL3Rlcm0hXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9hcmd1bWVudFsxXS90ZXJtIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpIHtcbiAgICB0aGlzLmxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZTtcbiAgICB0aGlzLnJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoKGVxdWFsaXR5LCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRSaWdodFRlcm1Ob2RlKCk7XG5cbiAgICBlcXVhbGl0aWVzID0gZmlsdGVyRXF1YWxpdGllcyhlcXVhbGl0aWVzLCBlcXVhbGl0eSk7ICAvLy9cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hMZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBtYXRjaGVzID0gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCByZXZlcnNlZCA9IHRydWUsXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0aGlzLm1hdGNoTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hMZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdHJ1ZTtcblxuICAgIGlmIChsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VGVybU5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSBsZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAobGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gcmV2ZXJzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0VGVybU5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7XG4gIH1cblxuICBlcXVhdGUoZXF1YWxpdGllcywgY29udGV4dCkge1xuICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSB0aGlzLmxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5yaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCksXG4gICAgICAgICAgZXF1YXRlcyA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWF0ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcChwcm9vZlN0ZXAsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoKGxlZnRUZXJtTm9kZSAhPT0gbnVsbCkgJiYgKHJpZ2h0VGVybU5vZGUgIT09IG51bGwpKSB7XG4gICAgICAgIGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlKG5vZGVBLCBub2RlQiwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBsZXQgbm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZUFUZXJtaW5hbE5vZGUgPT09IG5vZGVCVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVBVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbm9kZUVxdWF0ZXMgPSB0ZXJtaW5hbE5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVzRXF1YXRlID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdE5vZGVzTGVuZ3RoID0gbGVmdE5vZGVzLmxlbmd0aCxcbiAgICAgICAgcmlnaHROb2Rlc0xlbmd0aCA9IHJpZ2h0Tm9kZXMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0Tm9kZXNMZW5ndGggPT09IHJpZ2h0Tm9kZXNMZW5ndGgpIHtcbiAgICBub2Rlc0VxdWF0ZSA9IGxlZnROb2Rlcy5ldmVyeSgoTGVmdE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByaWdodE5vZGUgPSByaWdodE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGVFcXVhdGVzID0gZXF1YXRlTm9kZShMZWZ0Tm9kZSwgcmlnaHROb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG5vZGVFcXVhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzRXF1YXRlO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IG1hdGNoZXM7ICAvLy9cblxuICByZXR1cm4gdGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lVGVybVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBURVJNX1JVTEVfTkFNRSk7XG5cbiAgICBpZiAocnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWF0ZVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSB0ZXJtTm9kZUVxdWF0ZXM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW5vblRlcm1pbmFsTm9kZUVxdWF0ZXMpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBsZWZ0Tm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICByaWdodE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzRXF1YXRlID0gZXF1YXRlTm9kZXMobGVmdE5vZGVzLCByaWdodE5vZGVzLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IG5vZGVzRXF1YXRlOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtTm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcXVhbGl0eUEgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgIGVxdWFsaXRpZXNCID0gZXF1YWxpdGllcywgLy8vXG4gICAgICAgIGVxdWFsaXR5TWF0Y2hlcyA9IGVxdWFsaXRpZXNCLnNvbWUoKGVxdWFsaXR5QikgPT4geyAvLy9cbiAgICAgICAgICBjb25zdCBlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCID0gZXF1YWxpdHlBLm1hdGNoKGVxdWFsaXR5QiwgZXF1YWxpdGllc0IsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhbGl0eU1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0ZXJtTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWFsaXR5RnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgbGVmdFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgaWYgKGxlZnRUZXJtVmVyaWZpZWQgJiYgcmlnaHRUZXJtVmVyaWZpZWQpIHtcbiAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgc2Vjb25kVHlwZSA9IHNlY29uZCh0eXBlcyksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gc2Vjb25kVHlwZSwgLy8vXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9SaWdodFRlcm1UeXBlKSB7XG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGxlZnRUZXJtTm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgIGxlZnRUZXJtVHlwZU5hbWUgPSBsZWZ0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtVHlwZU5hbWUgPSByaWdodFRlcm1UeXBlLmdldE5hbWUoKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlIGxlZnQgJyR7bGVmdFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7bGVmdFRlcm1UeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIHRoZSByaWdodCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlLidgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXF1YWxpdHk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckVxdWFsaXRpZXMoZXF1YWxpdGllcywgZXF1YWxpdHkpIHtcbiAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHk7IC8vL1xuXG4gIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzLmZpbHRlcigoZXF1YWxpdHkpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eTsgLy8vXG5cbiAgICBpZiAoZXF1YWxpdHlBICE9PSBlcXVhbGl0eUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJlcXVhbGl0eSIsImVxdWFsaXRpZXMiLCJjb250ZXh0IiwibWF0Y2hlcyIsImZpbHRlckVxdWFsaXRpZXMiLCJyZXZlcnNlZCIsImxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCIsIm1hdGNoTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUVxdWF0ZXMiLCJlcXVhdGVOb25UZXJtaW5hbE5vZGUiLCJlcXVhdGUiLCJlcXVhdGVzIiwiZnJvbVByb29mU3RlcCIsInByb29mU3RlcCIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZXF1YWxpdHlGcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiZXF1YXRlTm9kZSIsIm5vZGVBIiwibm9kZUIiLCJub2RlRXF1YXRlcyIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlRXF1YXRlcyIsImVxdWF0ZVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZXF1YXRlTm9kZXMiLCJsZWZ0Tm9kZXMiLCJyaWdodE5vZGVzIiwibm9kZXNFcXVhdGUiLCJsZWZ0Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyaWdodE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJMZWZ0Tm9kZSIsImluZGV4IiwicmlnaHROb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZVRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybU5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJlcXVhbGl0eUEiLCJlcXVhbGl0aWVzQiIsImVxdWFsaXR5TWF0Y2hlcyIsInNvbWUiLCJlcXVhbGl0eUIiLCJlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCIiwidHlwZXMiLCJsZWZ0VGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInJpZ2h0VGVybVZlcmlmaWVkIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJzZWNvbmRUeXBlIiwic2Vjb25kIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9SaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvIiwibGVmdFRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJyaWdodFRlcm1TdHJpbmciLCJsZWZ0VGVybVR5cGVOYW1lIiwiZ2V0TmFtZSIsInJpZ2h0VGVybVR5cGVOYW1lIiwiZXJyb3IiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBWXFCQTs7O3lEQVZFO3FCQUVHO3FCQUNJO3lCQUNDO3NCQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHlCQW9HbEIsQUFwR1k7YUFBTUEsU0FDUEksWUFBWSxFQUFFQyxhQUFhOzhCQURwQkw7UUFFakIsSUFBSSxDQUFDSSxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7aUJBSEpMOztZQU1uQk0sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixPQUFPLElBQUks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