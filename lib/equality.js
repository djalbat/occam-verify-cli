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
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality!"), leftTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
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
    var argumentNodeEquates = false;
    var leftTermNode = termNodeQuery(leftArgumentNode), rightTermNode = termNodeQuery(rightArgumentNode), leftVariable = variableFromTermNode(leftTermNode, proofContext), rightVariable = variableFromTermNode(rightTermNode, proofContext);
    if (false) {
    ///
    } else if (leftVariable !== null && rightVariable !== null) {
        var leftVariableEqualToRightVariable = leftVariable.isEqualTo(rightVariable);
        argumentNodeEquates = leftVariableEqualToRightVariable; ///
    } else if (leftVariable !== null) {
        var leftVariableValue = leftVariable.getValue();
        if (leftVariableValue !== undefined) {
            var leftNode = leftVariableValue, rightNode = rightTermNode, termNodeEquates = equateNode(leftNode, rightNode, equalities, proofContext);
            ;
            argumentNodeEquates = termNodeEquates; ///
        }
    } else if (rightVariable !== null) {
        var rightVariableValue = rightVariable.getValue();
        if (rightVariableValue !== undefined) {
            var leftNode1 = leftTermNode, rightNode1 = rightVariableValue, termNodeEquates1 = equateNode(leftNode1, rightNode1, equalities, proofContext);
            ;
            argumentNodeEquates = termNodeEquates1; ///
        }
    }
    return argumentNodeEquates;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQVJHVU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZXF1YWxpdHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2VxdWFsaXR5IVwiKSxcbiAgICAgIGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L3Rlcm1bMF1cIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpIHtcbiAgICB0aGlzLmxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZTtcbiAgICB0aGlzLnJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGFyZVRlcm1zRXF1YWwoZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpLFxuICAgICAgICAgIHRlcm1zRXF1YWwgPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cblxuICAgIHJldHVybiB0ZXJtc0VxdWFsO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZlN0ZXAocHJvb2ZTdGVwKSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9kZShub2RlQSwgbm9kZUIsIGVxdWFsaXRpZXMsIHByb29mQ29udGV4dCkge1xuICBsZXQgbm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZUFUZXJtaW5hbE5vZGUgPT09IG5vZGVCVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVBVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBub2RlRXF1YXRlcyA9IHRlcm1pbmFsTm9kZUVxdWF0ZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBub2RlRXF1YXRlcyA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9kZXMobGVmdE5vZGVzLCByaWdodE5vZGVzLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IG5vZGVzRXF1YXRlID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdE5vZGVzTGVuZ3RoID0gbGVmdE5vZGVzLmxlbmd0aCxcbiAgICAgICAgcmlnaHROb2Rlc0xlbmd0aCA9IHJpZ2h0Tm9kZXMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0Tm9kZXNMZW5ndGggPT09IHJpZ2h0Tm9kZXNMZW5ndGgpIHtcbiAgICBub2Rlc0VxdWF0ZSA9IGxlZnROb2Rlcy5ldmVyeSgoTGVmdE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByaWdodE5vZGUgPSByaWdodE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGVFcXVhdGVzID0gZXF1YXRlTm9kZShMZWZ0Tm9kZSwgcmlnaHROb2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAobm9kZUVxdWF0ZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbm9kZXNFcXVhdGU7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQiksXG4gICAgICAgIHRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBtYXRjaGVzOyAgLy8vXG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgaWYgKGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lOyAvLy9cblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgQVJHVU1FTlRfUlVMRV9OQU1FOiB7XG4gICAgICAgIGNvbnN0IGxlZnRBcmd1bWVudE5vZGUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgcmlnaHRBcmd1bWVudE5vZGUgPSByaWdodE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIGFyZ3VtZW50Tm9kZVZlcmlmaWVkID0gZXF1YXRlQXJndW1lbnROb2RlKGxlZnRBcmd1bWVudE5vZGUsIHJpZ2h0QXJndW1lbnROb2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gYXJndW1lbnROb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgbGVmdE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICByaWdodE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgbm9kZXNWZXJpZmllZCA9IGVxdWF0ZU5vZGVzKGxlZnROb2RlcywgcmlnaHROb2RlcywgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gZXF1YXRlQXJndW1lbnROb2RlKGxlZnRBcmd1bWVudE5vZGUsIHJpZ2h0QXJndW1lbnROb2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpIHtcbiAgbGV0IGFyZ3VtZW50Tm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGxlZnRBcmd1bWVudE5vZGUpLFxuICAgICAgICByaWdodFRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShyaWdodEFyZ3VtZW50Tm9kZSksXG4gICAgICAgIGxlZnRWYXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcHJvb2ZDb250ZXh0KSxcbiAgICAgICAgcmlnaHRWYXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIHByb29mQ29udGV4dCk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAoKGxlZnRWYXJpYWJsZSAhPT0gbnVsbCkgJiYgKHJpZ2h0VmFyaWFibGUgIT09IG51bGwpKSB7XG4gICAgY29uc3QgbGVmdFZhcmlhYmxlRXF1YWxUb1JpZ2h0VmFyaWFibGUgPSBsZWZ0VmFyaWFibGUuaXNFcXVhbFRvKHJpZ2h0VmFyaWFibGUpO1xuXG4gICAgYXJndW1lbnROb2RlRXF1YXRlcyA9IGxlZnRWYXJpYWJsZUVxdWFsVG9SaWdodFZhcmlhYmxlOyAvLy9cbiAgfSBlbHNlIGlmIChsZWZ0VmFyaWFibGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBsZWZ0VmFyaWFibGVWYWx1ZSA9IGxlZnRWYXJpYWJsZS5nZXRWYWx1ZSgpO1xuXG4gICAgaWYgKGxlZnRWYXJpYWJsZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGxlZnROb2RlID0gbGVmdFZhcmlhYmxlVmFsdWUsIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlID0gcmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgdGVybU5vZGVFcXVhdGVzID0gZXF1YXRlTm9kZShsZWZ0Tm9kZSwgcmlnaHROb2RlLCBlcXVhbGl0aWVzLCBwcm9vZkNvbnRleHQpOztcblxuICAgICAgYXJndW1lbnROb2RlRXF1YXRlcyA9IHRlcm1Ob2RlRXF1YXRlczsgIC8vL1xuICAgIH1cbiAgfSBlbHNlIGlmIChyaWdodFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmlnaHRWYXJpYWJsZVZhbHVlID0gcmlnaHRWYXJpYWJsZS5nZXRWYWx1ZSgpO1xuXG4gICAgaWYgKHJpZ2h0VmFyaWFibGVWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9kZSA9IGxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlID0gcmlnaHRWYXJpYWJsZVZhbHVlLCAvLy9cbiAgICAgICAgICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWF0ZU5vZGUobGVmdE5vZGUsIHJpZ2h0Tm9kZSwgZXF1YWxpdGllcywgcHJvb2ZDb250ZXh0KTs7XG5cbiAgICAgIGFyZ3VtZW50Tm9kZUVxdWF0ZXMgPSB0ZXJtTm9kZUVxdWF0ZXM7ICAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXJndW1lbnROb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIHByb29mQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgdmFyaWFibGUgPSBwcm9vZkNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5IiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwiZXF1YWxpdHlOb2RlUXVlcnkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwiYXJlVGVybXNFcXVhbCIsImVxdWFsaXRpZXMiLCJwcm9vZkNvbnRleHQiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlTm9uVGVybWluYWxOb2RlIiwidGVybXNFcXVhbCIsImZyb21Qcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJlcXVhbGl0eSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZXF1YWxpdHlOb2RlIiwiZnJvbUVxdWFsaXR5Tm9kZSIsImVxdWF0ZU5vZGUiLCJub2RlQSIsIm5vZGVCIiwibm9kZUVxdWF0ZXMiLCJub2RlQVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZUJUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBIiwidGVybWluYWxOb2RlQiIsInRlcm1pbmFsTm9kZUVxdWF0ZXMiLCJlcXVhdGVUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImVxdWF0ZU5vZGVzIiwibGVmdE5vZGVzIiwicmlnaHROb2RlcyIsIm5vZGVzRXF1YXRlIiwibGVmdE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmlnaHROb2Rlc0xlbmd0aCIsImV2ZXJ5IiwiTGVmdE5vZGUiLCJpbmRleCIsInJpZ2h0Tm9kZSIsIm1hdGNoZXMiLCJtYXRjaCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJBUkdVTUVOVF9SVUxFX05BTUUiLCJsZWZ0QXJndW1lbnROb2RlIiwicmlnaHRBcmd1bWVudE5vZGUiLCJhcmd1bWVudE5vZGVWZXJpZmllZCIsImVxdWF0ZUFyZ3VtZW50Tm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsIm5vZGVzVmVyaWZpZWQiLCJhcmd1bWVudE5vZGVFcXVhdGVzIiwibGVmdFZhcmlhYmxlIiwidmFyaWFibGVGcm9tVGVybU5vZGUiLCJyaWdodFZhcmlhYmxlIiwibGVmdFZhcmlhYmxlRXF1YWxUb1JpZ2h0VmFyaWFibGUiLCJpc0VxdWFsVG8iLCJsZWZ0VmFyaWFibGVWYWx1ZSIsImdldFZhbHVlIiwidW5kZWZpbmVkIiwibGVmdE5vZGUiLCJ0ZXJtTm9kZUVxdWF0ZXMiLCJyaWdodFZhcmlhYmxlVmFsdWUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt5QkFUYztxQkFDcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhELElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDOUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQyx5QkFDOUJHLG9CQUFvQkgsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDOUJJLHFCQUFxQkosSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHlCQW1EbEIsQUFuRFk7YUFBTUEsU0FDUE8sWUFBWSxFQUFFQyxhQUFhOzhCQURwQlI7UUFFakIsSUFBSSxDQUFDTyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7aUJBSEpSOztZQU1uQlMsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxVQUFVLEVBQUVDLFlBQVksRUFBRTtnQkFDdEMsSUFBTUMsc0JBQXNCLElBQUksQ0FBQ1AsWUFBWSxFQUN2Q1EsdUJBQXVCLElBQUksQ0FBQ1AsYUFBYSxFQUN6Q1EseUJBQXlCQyxzQkFBc0JILHFCQUFxQkMsc0JBQXNCSCxZQUFZQyxlQUN0R0ssYUFBYUYsd0JBQXdCLEdBQUc7Z0JBRTlDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFO2dCQUM5QixJQUFJQyxXQUFXLElBQUk7Z0JBRW5CLElBQU1DLGdCQUFnQkYsVUFBVUcsZ0JBQWdCO2dCQUVoRCxJ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