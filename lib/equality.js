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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), leftTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
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
        }
    ]);
    return Equality;
}();
function variableFromTermNode(termNode, proofContext) {
    var variable = null;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var variableName = (0, _query.variableNameFromVariableNode)(variableNode);
        variable = proofContext.findVariableByVariableName(variableName);
    }
    return variable;
}
function equateNode(nodeA, nodeB) {
    var nodeEquates = false;
    var nodeATerminalNode = nodeA.isTerminalNode(), nodeBTerminalNode = nodeB.isTerminalNode();
    if (nodeATerminalNode === nodeBTerminalNode) {
        if (nodeATerminalNode) {
            var terminalNodeA = nodeA, terminalNodeB = nodeB, terminalNodeEquates = equateTerminalNode(terminalNodeA, terminalNodeB);
            nodeEquates = terminalNodeEquates; ///
        } else {
            var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeEquates = equateNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB);
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
function equateTermNode(leftTermNode, rightTermNode, equalities, proofContext) {
    var termNodeEquates = false;
    var leftVariable = variableFromTermNode(leftTermNode, proofContext), rightVariable = variableFromTermNode(rightTermNode, proofContext);
    if (false) {
    ///
    } else if (leftVariable !== null && rightVariable !== null) {
        var leftVariableEqualToRightVariable = leftVariable.isEqualTo(rightVariable);
        termNodeEquates = leftVariableEqualToRightVariable; ///
    } else if (leftVariable !== null) {
        var leftVariableValue = leftVariable.getValue();
        if (leftVariableValue !== undefined) {
            var _$leftTermNode = leftVariableValue; ///
            termNodeEquates = equateTermNode(_$leftTermNode, rightTermNode, equalities, proofContext);
        }
    } else if (rightVariable !== null) {
        var rightVariableValue = rightVariable.getValue();
        if (rightVariableValue !== undefined) {
            var _$rightTermNode = rightVariableValue; ///
            termNodeEquates = equateTermNode(leftTermNode, _$rightTermNode, equalities, proofContext);
        }
    }
    return termNodeEquates;
}
function equateTerminalNode(terminalNodeA, terminalNodeB) {
    var matches = terminalNodeA.match(terminalNodeB), terminalNodeEquates = matches; ///
    return terminalNodeEquates;
}
function equateNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, proofContext) {
    var nonTerminalNodeEquates = false;
    var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName(), leftRuleName = leftNonTerminalNodeRuleName, rightRuleName = rightNonTerminalNodeRuleName; ///
    if (leftRuleName === rightRuleName) {
        if (!nonTerminalNodeEquates) {
            var ruleName = leftRuleName, ruleNameTermRuleName = ruleName === TERM_RULE_NAME;
            if (ruleNameTermRuleName) {
                var leftTermNode = leftNonTerminalNode, rightTermNode = rightNonTerminalNode, termNodeEquates = equateTermNode(leftTermNode, rightTermNode, equalities, proofContext);
                nonTerminalNodeEquates = termNodeEquates; ///
            }
        }
        if (!nonTerminalNodeEquates) {
            var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftNodes = leftNonTerminalNodeChildNodes, rightNodes = rightNonTerminalNodeChildNodes, nodesEquate = equateNodes(leftNodes, rightNodes, equalities, proofContext);
            nonTerminalNodeEquates = nodesEquate; ///
        }
    }
    return nonTerminalNodeEquates;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBlcXVhbGl0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvZXF1YWxpdHkhXCIpLFxuICAgICAgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVswXVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzFdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIHRoaXMubGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlO1xuICAgIHRoaXMucmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMZWZ0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgYXJlVGVybXNFcXVhbChlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5sZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCksXG4gICAgICAgICAgdGVybXNFcXVhbCA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1zRXF1YWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpO1xuXG4gICAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICB2YXJpYWJsZSA9IHByb29mQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlKG5vZGVBLCBub2RlQikge1xuICBsZXQgbm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZUFUZXJtaW5hbE5vZGUgPT09IG5vZGVCVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVBVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCKTtcblxuICAgICAgbm9kZUVxdWF0ZXMgPSB0ZXJtaW5hbE5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQik7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICBsZXQgbm9kZXNFcXVhdGUgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0Tm9kZXNMZW5ndGggPSBsZWZ0Tm9kZXMubGVuZ3RoLFxuICAgICAgICByaWdodE5vZGVzTGVuZ3RoID0gcmlnaHROb2Rlcy5sZW5ndGg7XG5cbiAgaWYgKGxlZnROb2Rlc0xlbmd0aCA9PT0gcmlnaHROb2Rlc0xlbmd0aCkge1xuICAgIG5vZGVzRXF1YXRlID0gbGVmdE5vZGVzLmV2ZXJ5KChMZWZ0Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJpZ2h0Tm9kZSA9IHJpZ2h0Tm9kZXNbaW5kZXhdLFxuICAgICAgICAgICAgbm9kZUVxdWF0ZXMgPSBlcXVhdGVOb2RlKExlZnROb2RlLCByaWdodE5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc0VxdWF0ZTtcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IHRlcm1Ob2RlRXF1YXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnRWYXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcHJvb2ZDb250ZXh0KSxcbiAgICAgICAgcmlnaHRWYXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoKGxlZnRWYXJpYWJsZSAhPT0gbnVsbCkgJiYgKHJpZ2h0VmFyaWFibGUgIT09IG51bGwpKSB7XG4gICAgY29uc3QgbGVmdFZhcmlhYmxlRXF1YWxUb1JpZ2h0VmFyaWFibGUgPSBsZWZ0VmFyaWFibGUuaXNFcXVhbFRvKHJpZ2h0VmFyaWFibGUpO1xuXG4gICAgdGVybU5vZGVFcXVhdGVzID0gbGVmdFZhcmlhYmxlRXF1YWxUb1JpZ2h0VmFyaWFibGU7IC8vL1xuICB9IGVsc2UgaWYgKGxlZnRWYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGxlZnRWYXJpYWJsZVZhbHVlID0gbGVmdFZhcmlhYmxlLmdldFZhbHVlKCk7XG5cbiAgICBpZiAobGVmdFZhcmlhYmxlVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFZhcmlhYmxlVmFsdWU7IC8vL1xuXG4gICAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhdGVUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHJpZ2h0VmFyaWFibGUgIT09IG51bGwpIHtcbiAgICBjb25zdCByaWdodFZhcmlhYmxlVmFsdWUgPSByaWdodFZhcmlhYmxlLmdldFZhbHVlKCk7XG5cbiAgICBpZiAocmlnaHRWYXJpYWJsZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSByaWdodFZhcmlhYmxlVmFsdWU7IC8vL1xuXG4gICAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhdGVUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1Ob2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQiksXG4gICAgICAgIHRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBtYXRjaGVzOyAgLy8vXG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgbGVmdFJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgcmlnaHRSdWxlTmFtZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWU7IC8vL1xuXG4gIGlmIChsZWZ0UnVsZU5hbWUgPT09IHJpZ2h0UnVsZU5hbWUpIHtcbiAgICBpZiAoIW5vblRlcm1pbmFsTm9kZUVxdWF0ZXMpIHtcbiAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBydWxlTmFtZVRlcm1SdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAocnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWF0ZVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gdGVybU5vZGVFcXVhdGVzOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW5vblRlcm1pbmFsTm9kZUVxdWF0ZXMpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBsZWZ0Tm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgIC8vL1xuICAgICAgICAgICAgbm9kZXNFcXVhdGUgPSBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBub2Rlc0VxdWF0ZTsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImVxdWFsaXR5Tm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsImFyZVRlcm1zRXF1YWwiLCJlcXVhbGl0aWVzIiwicHJvb2ZDb250ZXh0IiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlRXF1YXRlcyIsImVxdWF0ZU5vblRlcm1pbmFsTm9kZSIsInRlcm1zRXF1YWwiLCJmcm9tUHJvb2ZTdGVwIiwicHJvb2ZTdGVwIiwiZXF1YWxpdHkiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImVxdWFsaXR5Tm9kZSIsImZyb21FcXVhbGl0eU5vZGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSIsInRlcm1Ob2RlIiwidmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJlcXVhdGVOb2RlIiwibm9kZUEiLCJub2RlQiIsIm5vZGVFcXVhdGVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJlcXVhdGVOb2RlcyIsImxlZnROb2RlcyIsInJpZ2h0Tm9kZXMiLCJub2Rlc0VxdWF0ZSIsImxlZnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJpZ2h0Tm9kZXNMZW5ndGgiLCJldmVyeSIsIkxlZnROb2RlIiwiaW5kZXgiLCJyaWdodE5vZGUiLCJlcXVhdGVUZXJtTm9kZSIsInRlcm1Ob2RlRXF1YXRlcyIsImxlZnRWYXJpYWJsZSIsInJpZ2h0VmFyaWFibGUiLCJsZWZ0VmFyaWFibGVFcXVhbFRvUmlnaHRWYXJpYWJsZSIsImlzRXF1YWxUbyIsImxlZnRWYXJpYWJsZVZhbHVlIiwiZ2V0VmFsdWUiLCJ1bmRlZmluZWQiLCJyaWdodFZhcmlhYmxlVmFsdWUiLCJtYXRjaGVzIiwibWF0Y2giLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJsZWZ0UnVsZU5hbWUiLCJyaWdodFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZVRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7Ozt5QkFSYztxQkFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDOUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDOUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDOUJHLHFCQUFxQkgsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHlCQW1EbEIsQUFuRFk7YUFBTUEsU0FDUE0sWUFBWSxFQUFFQyxhQUFhOzhCQURwQlA7UUFFakIsSUFBSSxDQUFDTSxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7aUJBSEpQOztZQU1uQlEsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFB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