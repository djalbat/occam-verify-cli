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
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), variableNodeQuery = (0, _query.nodeQuery)("/argument/term!/variable!"), equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), leftTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
var Equality = /*#__PURE__*/ function() {
    function Equality(leftTermNode1, rightTermNode1) {
        _classCallCheck(this, Equality);
        this.leftTermNode = leftTermNode1;
        this.rightTermNode = rightTermNode1;
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
            key: "areTermsEqual",
            value: function areTermsEqual(equalities, proofContext) {
                var leftNonTerminalNode = this.leftTermNode, rightNonTerminalNode = this.rightTermNode, nonTerminalNodeEquates = equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, proofContext), termsEqual = nonTerminalNodeEquates; ///
                return termsEqual;
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
                        var leftTermNode1 = leftTermNodeQuery(equalityNode), rightTermNode1 = rightTermNodeQuery(equalityNode);
                        equality = new Equality(leftTermNode1, rightTermNode1);
                    }
                }
                return equality;
            }
        },
        {
            key: "fromEqualityNode",
            value: function fromEqualityNode(equalityNode) {
                var leftTermNode1 = leftTermNodeQuery(equalityNode), rightTermNode1 = rightTermNodeQuery(equalityNode), equality = new Equality(leftTermNode1, rightTermNode1);
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
    var nonTerminalNodeVerified = false;
    var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();
    if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
        var ruleName = leftNonTerminalNodeRuleName; ///
        switch(ruleName){
            case _ruleNames.ARGUMENT_RULE_NAME:
                {
                    var leftArgumentNode = leftNonTerminalNode, rightArgumentNode = rightNonTerminalNode, argumentNodeVerified = equateArgumentNode(leftArgumentNode, rightArgumentNode, equalities, proofContext);
                    nonTerminalNodeVerified = argumentNodeVerified; ///
                    break;
                }
            default:
                {
                    var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftNodes = leftNonTerminalNodeChildNodes, rightNodes = rightNonTerminalNodeChildNodes, nodesVerified = equateNodes(leftNodes, rightNodes, equalities, proofContext);
                    nonTerminalNodeVerified = nodesVerified; ///
                    break;
                }
        }
    }
    return nonTerminalNodeVerified;
}
function equateArgumentNode(leftArgumentNode, rightArgumentNode, equalities, proofContext) {
    var argumentNodeEquates1 = false;
    var leftTermNode1 = termNodeQuery(leftArgumentNode), rightTermNode1 = termNodeQuery(rightArgumentNode), leftVariable = variableFromTermNode(leftTermNode1, proofContext), rightVariable = variableFromTermNode(rightTermNode1, proofContext);
    if (false) {
    ///
    } else if (leftVariable !== null && rightVariable !== null) {
        var leftVariableEqualToRightVariable = leftVariable.isEqualTo(rightVariable);
        argumentNodeEquates1 = leftVariableEqualToRightVariable; ///
    } else if (leftVariable !== null) {
        var leftVariableValue = leftVariable.getValue();
        if (leftVariableValue !== undefined) {
            var leftNode = leftVariableValue, rightNode = rightTermNode1, termNodeEquates = equateNode(leftNode, rightNode, equalities, proofContext);
            ;
            argumentNodeEquates1 = termNodeEquates; ///
        }
    } else if (rightVariable !== null) {
        var rightVariableValue = rightVariable.getValue();
        if (rightVariableValue !== undefined) {
            var leftNode1 = leftTermNode1, rightNode1 = rightVariableValue, termNodeEquates1 = equateNode(leftNode1, rightNode1, equalities, proofContext);
            ;
            argumentNodeEquates1 = termNodeEquates1; ///
        }
    }
    return argumentNodeEquates1;
}
function equateVariableNode(leftVariableNode, rightVariableNode, equalities, proofContext) {
    var variableNodeEquates = false;
    var leftVariable = variableFromTermNode(leftTermNode, proofContext), rightVariable = variableFromTermNode(rightTermNode, proofContext);
    var leftVariableEqualToRightVariable = leftVariable.isEqualTo(rightVariable);
    argumentNodeEquates = leftVariableEqualToRightVariable; ///
    return variableNodeEquates;
}
function variableFromTermNode(termNode, proofContext) {
    var variable = null;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var variableName = (0, _query.variableNameFromVariableNode)(variableNode);
        variable = proofContext.findVariableByVariableName(variableName);
    }
    return variable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2FyZ3VtZW50L3Rlcm0hL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGVxdWFsaXR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9lcXVhbGl0eSFcIiksXG4gICAgICBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzBdXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L3Rlcm1bMV1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWFsaXR5IHtcbiAgY29uc3RydWN0b3IobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSB7XG4gICAgdGhpcy5sZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGU7XG4gICAgdGhpcy5yaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBhcmVUZXJtc0VxdWFsKGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSB0aGlzLmxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5yaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSxcbiAgICAgICAgICB0ZXJtc0VxdWFsID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG5cbiAgICByZXR1cm4gdGVybXNFcXVhbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlcXVhbGl0eU5vZGUgPSBlcXVhbGl0eU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vZGUobm9kZUEsIG5vZGVCLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IG5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZUFUZXJtaW5hbE5vZGUgPSBub2RlQS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBub2RlQlRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVBVGVybWluYWxOb2RlID09PSBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChub2RlQVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgbm9kZUVxdWF0ZXMgPSB0ZXJtaW5hbE5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgbm9kZUVxdWF0ZXMgPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vZGVzKGxlZnROb2RlcywgcmlnaHROb2RlcywgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBub2Rlc0VxdWF0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnROb2Rlc0xlbmd0aCA9IGxlZnROb2Rlcy5sZW5ndGgsXG4gICAgICAgIHJpZ2h0Tm9kZXNMZW5ndGggPSByaWdodE5vZGVzLmxlbmd0aDtcblxuICBpZiAobGVmdE5vZGVzTGVuZ3RoID09PSByaWdodE5vZGVzTGVuZ3RoKSB7XG4gICAgbm9kZXNFcXVhdGUgPSBsZWZ0Tm9kZXMuZXZlcnkoKExlZnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmlnaHROb2RlID0gcmlnaHROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBub2RlRXF1YXRlcyA9IGVxdWF0ZU5vZGUoTGVmdE5vZGUsIHJpZ2h0Tm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKG5vZGVFcXVhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzRXF1YXRlO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSB0ZXJtaW5hbE5vZGVBLm1hdGNoKHRlcm1pbmFsTm9kZUIpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVFcXVhdGVzID0gbWF0Y2hlczsgIC8vL1xuXG4gIHJldHVybiB0ZXJtaW5hbE5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpO1xuXG4gIGlmIChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZTsgLy8vXG5cbiAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICBjYXNlIEFSR1VNRU5UX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBsZWZ0QXJndW1lbnROb2RlID0gbGVmdE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0QXJndW1lbnROb2RlID0gcmlnaHROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgICBhcmd1bWVudE5vZGVWZXJpZmllZCA9IGVxdWF0ZUFyZ3VtZW50Tm9kZShsZWZ0QXJndW1lbnROb2RlLCByaWdodEFyZ3VtZW50Tm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGFyZ3VtZW50Tm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIGxlZnROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgcmlnaHROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIG5vZGVzVmVyaWZpZWQgPSBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZUFyZ3VtZW50Tm9kZShsZWZ0QXJndW1lbnROb2RlLCByaWdodEFyZ3VtZW50Tm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBhcmd1bWVudE5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShsZWZ0QXJndW1lbnROb2RlKSxcbiAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkocmlnaHRBcmd1bWVudE5vZGUpLFxuICAgICAgICBsZWZ0VmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIHByb29mQ29udGV4dCksXG4gICAgICAgIHJpZ2h0VmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBwcm9vZkNvbnRleHQpO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKChsZWZ0VmFyaWFibGUgIT09IG51bGwpICYmIChyaWdodFZhcmlhYmxlICE9PSBudWxsKSkge1xuICAgIGNvbnN0IGxlZnRWYXJpYWJsZUVxdWFsVG9SaWdodFZhcmlhYmxlID0gbGVmdFZhcmlhYmxlLmlzRXF1YWxUbyhyaWdodFZhcmlhYmxlKTtcblxuICAgIGFyZ3VtZW50Tm9kZUVxdWF0ZXMgPSBsZWZ0VmFyaWFibGVFcXVhbFRvUmlnaHRWYXJpYWJsZTsgLy8vXG4gIH0gZWxzZSBpZiAobGVmdFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbGVmdFZhcmlhYmxlVmFsdWUgPSBsZWZ0VmFyaWFibGUuZ2V0VmFsdWUoKTtcblxuICAgIGlmIChsZWZ0VmFyaWFibGVWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9kZSA9IGxlZnRWYXJpYWJsZVZhbHVlLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9kZSA9IHJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWF0ZU5vZGUobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTs7XG5cbiAgICAgIGFyZ3VtZW50Tm9kZUVxdWF0ZXMgPSB0ZXJtTm9kZUVxdWF0ZXM7ICAvLy9cbiAgICB9XG4gIH0gZWxzZSBpZiAocmlnaHRWYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJpZ2h0VmFyaWFibGVWYWx1ZSA9IHJpZ2h0VmFyaWFibGUuZ2V0VmFsdWUoKTtcblxuICAgIGlmIChyaWdodFZhcmlhYmxlVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbGVmdE5vZGUgPSBsZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9kZSA9IHJpZ2h0VmFyaWFibGVWYWx1ZSwgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb2RlKGxlZnROb2RlLCByaWdodE5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7O1xuXG4gICAgICBhcmd1bWVudE5vZGVFcXVhdGVzID0gdGVybU5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyZ3VtZW50Tm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVZhcmlhYmxlTm9kZShsZWZ0VmFyaWFibGVOb2RlLCByaWdodFZhcmlhYmxlTm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZU5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdFZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBwcm9vZkNvbnRleHQpLFxuICAgICAgICByaWdodFZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgcHJvb2ZDb250ZXh0KTtcblxuICBjb25zdCBsZWZ0VmFyaWFibGVFcXVhbFRvUmlnaHRWYXJpYWJsZSA9IGxlZnRWYXJpYWJsZS5pc0VxdWFsVG8ocmlnaHRWYXJpYWJsZSk7XG5cbiAgYXJndW1lbnROb2RlRXF1YXRlcyA9IGxlZnRWYXJpYWJsZUVxdWFsVG9SaWdodFZhcmlhYmxlOyAvLy9cblxuICByZXR1cm4gdmFyaWFibGVOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgdmFyaWFibGUgPSBwcm9vZkNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5IiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwiZXF1YWxpdHlOb2RlUXVlcnkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwiYXJlVGVybXNFcXVhbCIsImVxdWFsaXRpZXMiLCJwcm9vZkNvbnRleHQiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlTm9uVGVybWluYWxOb2RlIiwidGVybXNFcXVhbCIsImZyb21Qcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJlcXVhbGl0eSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZXF1YWxpdHlOb2RlIiwiZnJvbUVxdWFsaXR5Tm9kZSIsImVxdWF0ZU5vZGUiLCJub2RlQSIsIm5vZGVCIiwibm9kZUVxdWF0ZXMiLCJub2RlQVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZUJUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBIiwidGVybWluYWxOb2RlQiIsInRlcm1pbmFsTm9kZUVxdWF0ZXMiLCJlcXVhdGVUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImVxdWF0ZU5vZGVzIiwibGVmdE5vZGVzIiwicmlnaHROb2RlcyIsIm5vZGVzRXF1YXRlIiwibGVmdE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmlnaHROb2Rlc0xlbmd0aCIsImV2ZXJ5IiwiTGVmdE5vZGUiLCJpbmRleCIsInJpZ2h0Tm9kZSIsIm1hdGNoZXMiLCJtYXRjaCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJsZWZ0QXJndW1lbnROb2RlIiwicmlnaHRBcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsImVxdWF0ZUFyZ3VtZW50Tm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsIm5vZGVzVmVyaWZpZWQiLCJhcmd1bWVudE5vZGVFcXVhdGVzIiwibGVmdFZhcmlhYmxlIiwidmFyaWFibGVGcm9tVGVybU5vZGUiLCJyaWdodFZhcmlhYmxlIiwibGVmdFZhcmlhYmxlRXF1YWxUb1JpZ2h0VmFyaWFibGUiLCJpc0VxdWFsVG8iLCJsZWZ0VmFyaWFibGVWYWx1ZSIsImdldFZhbHVlIiwidW5kZWZpbmVkIiwibGVmdE5vZGUiLCJ0ZXJtTm9kZUVxdWF0ZXMiLCJyaWdodFZhcmlhYmxlVmFsdWUiLCJlcXVhdGVWYXJpYWJsZU5vZGUiLCJsZWZ0VmFyaWFibGVOb2RlIiwicmlnaHRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVFcXVhdGVzIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eUJBVGM7cUJBQ3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsOEJBQzlCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUMseUJBQzlCRyxvQkFBb0JILElBQUFBLGdCQUFTLEVBQUMsc0JBQzlCSSxxQkFBcUJKLElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRix5QkFt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