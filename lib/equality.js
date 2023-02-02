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
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("./matcher"));
var _variable = /*#__PURE__*/ _interopRequireDefault(require("./variable"));
var _term = /*#__PURE__*/ _interopRequireWildcard(require("./verify/term"));
var _equality = /*#__PURE__*/ _interopRequireDefault(require("./ocmbinator/equality"));
var _equality1 = /*#__PURE__*/ _interopRequireDefault(require("./node/statement/equality"));
var _query = require("./utilities/query");
var _array = require("./utilities/array");
var _constants = require("./constants");
var _ruleNames = require("./ruleNames");
var _statement = require("./verify/statement");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
            key: "matchTermNodes",
            value: function matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context) {
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
            key: "match",
            value: function match(equality, equalities, context) {
                var matches = false;
                var leftTermNode = equality.getLeftTermNode(), rightTermNode = equality.getRightTermNode();
                equalities = filterEqualities(equalities, equality); ///
                if (!matches) {
                    var reversed = false, leftTermNodeAndRightTermNodeMatch = this.matchTermNodes(leftTermNode, rightTermNode, reversed, equalities, context);
                    matches = leftTermNodeAndRightTermNodeMatch; ///
                }
                if (!matches) {
                    var reversed1 = true, leftTermNodeAndRightTermNodeMatch1 = this.matchTermNodes(leftTermNode, rightTermNode, reversed1, equalities, context);
                    matches = leftTermNodeAndRightTermNodeMatch1; ///
                }
                return matches;
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
            value: function fromProofStep(proofStep) {
                var equality = null;
                var statementNode = proofStep.getStatementNode();
                if (statementNode !== null) {
                    var nodeA = statementNode, nodeB = _equality1.default, depth = _constants.EQUALITY_DEPTH, nodeMatches = _matcher.default.matchNode(nodeA, nodeB, depth);
                    if (nodeMatches) {
                        var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode);
                        equality = new Equality(leftTermNode, rightTermNode);
                    }
                }
                return equality;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var equality = null;
                var combinator = _equality.default, statementVerifiedAgainstCombinator = (0, _statement.verifyStatementAgainstCombinator)(statementNode, combinator, context);
                if (statementVerifiedAgainstCombinator) {
                    var leftTermNode = leftTermNodeQuery(statementNode), rightTermNode = rightTermNodeQuery(statementNode);
                    equality = equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, context);
                }
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
function equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, context) {
    var equality = null;
    var types = [], leftTermVerified = (0, _term.default)(leftTermNode, types, context), rightTermVerified = (0, _term.default)(rightTermNode, types, context);
    if (leftTermVerified && rightTermVerified) {
        var firstType = (0, _array.first)(types), secondType = (0, _array.second)(types), leftTermType = firstType, rightTermType = secondType, leftTermTypeEqualToRightTermType = leftTermType.isEqualTo(rightTermType);
        if (leftTermTypeEqualToRightTermType) {
            equality = new Equality(leftTermNode, rightTermNode);
        } else {
            var leftTermTypeSubTypeOfRightTermType = leftTermType.isSubTypeOf(rightTermType), rightTermTypeSubTypeOfLeftTermType = rightTermType.isSubTypeOf(leftTermType);
            if (false) {
            ///
            } else if (leftTermTypeSubTypeOfRightTermType) {
                var variables = [], rightTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(rightTermNode, variables, context);
                if (rightTermVerifiedAsVariable) {
                    var rightVariable;
                    var firstVariable = (0, _array.first)(variables);
                    rightVariable = firstVariable; ///
                    var rightVariableName = rightVariable.getName(), rightName = rightVariableName, rightType = leftTermType; ///
                    rightVariable = _variable.default.fromTypeAndName(rightType, rightName);
                    context.addVariable(rightVariable);
                    equality = new Equality(leftTermNode, rightTermNode);
                }
            } else if (rightTermTypeSubTypeOfLeftTermType) {
                var variables1 = [], leftTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(leftTermNode, variables1, context);
                if (leftTermVerifiedAsVariable) {
                    var leftVariable;
                    var firstVariable1 = (0, _array.first)(variables1);
                    leftVariable = firstVariable1; ///
                    var leftVariableName = leftVariable.getName(), leftName = leftVariableName, leftType = rightTermType; ///
                    leftVariable = _variable.default.fromTypeAndName(leftType, leftName);
                    context.addVariable(leftVariable);
                    equality = new Equality(leftTermNode, rightTermNode);
                }
            }
        }
        if (equality === null) {
            var leftTermString = context.nodeAsString(leftTermNode), rightTermString = context.nodeAsString(rightTermNode), leftTermTypeName = leftTermType.getName(), rightTermTypeName = rightTermType.getName();
            context.error("The left '".concat(leftTermString, "' term's '").concat(leftTermTypeName, "' type is not equal to the right '").concat(rightTermString, "' term's '").concat(rightTermTypeName, "' type and neither can be inferred.'"), leftTermNode);
        }
    }
    return equality;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1hdGNoZXIgZnJvbSBcIi4vbWF0Y2hlclwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuL3ZhcmlhYmxlXCI7XG5pbXBvcnQgdmVyaWZ5VGVybSBmcm9tIFwiLi92ZXJpZnkvdGVybVwiO1xuaW1wb3J0IGVxdWFsaXR5Q29tYmluYXRvciBmcm9tIFwiLi9vY21iaW5hdG9yL2VxdWFsaXR5XCI7XG5pbXBvcnQgZXF1YWxpdHlTdGF0ZW1lbnROb2RlIGZyb20gXCIuL25vZGUvc3RhdGVtZW50L2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgRVFVQUxJVFlfREVQVEggfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyB2ZXJpZnlUZXJtQXNWYXJpYWJsZSB9IGZyb20gXCIuL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgeyB2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciB9IGZyb20gXCIuL3ZlcmlmeS9zdGF0ZW1lbnRcIjtcblxuY29uc3QgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2FyZ3VtZW50WzBdL3Rlcm0hXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9hcmd1bWVudFsxXS90ZXJtIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpIHtcbiAgICB0aGlzLmxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZTtcbiAgICB0aGlzLnJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGVzKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdHJ1ZTtcblxuICAgIGlmIChsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VGVybU5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSBsZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cbiAgICB9XG5cbiAgICBpZiAobGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gcmV2ZXJzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0VGVybU5vZGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7XG4gIH1cblxuICBtYXRjaChlcXVhbGl0eSwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtTm9kZSgpO1xuXG4gICAgZXF1YWxpdGllcyA9IGZpbHRlckVxdWFsaXRpZXMoZXF1YWxpdGllcywgZXF1YWxpdHkpOyAgLy8vXG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHJldmVyc2VkID0gZmFsc2UsXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0aGlzLm1hdGNoVGVybU5vZGVzKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBtYXRjaGVzID0gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCByZXZlcnNlZCA9IHRydWUsXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0aGlzLm1hdGNoVGVybU5vZGVzKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgcmV2ZXJzZWQsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBtYXRjaGVzID0gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBlcXVhdGUoZXF1YWxpdGllcywgY29udGV4dCkge1xuICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSB0aGlzLmxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5yaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCksXG4gICAgICAgICAgZXF1YXRlcyA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWF0ZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb29mU3RlcChwcm9vZlN0ZXApIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZUEgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlQiA9IGVxdWFsaXR5U3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgZGVwdGggPSBFUVVBTElUWV9ERVBUSCxcbiAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCLCBkZXB0aCk7XG5cbiAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBlcXVhbGl0eUNvbWJpbmF0b3IsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9kZShub2RlQSwgbm9kZUIsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZUFUZXJtaW5hbE5vZGUgPSBub2RlQS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBub2RlQlRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVBVGVybWluYWxOb2RlID09PSBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChub2RlQVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gdGVybWluYWxOb2RlRXF1YXRlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBub2RlRXF1YXRlcyA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9kZXMobGVmdE5vZGVzLCByaWdodE5vZGVzLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc0VxdWF0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnROb2Rlc0xlbmd0aCA9IGxlZnROb2Rlcy5sZW5ndGgsXG4gICAgICAgIHJpZ2h0Tm9kZXNMZW5ndGggPSByaWdodE5vZGVzLmxlbmd0aDtcblxuICBpZiAobGVmdE5vZGVzTGVuZ3RoID09PSByaWdodE5vZGVzTGVuZ3RoKSB7XG4gICAgbm9kZXNFcXVhdGUgPSBsZWZ0Tm9kZXMuZXZlcnkoKExlZnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmlnaHROb2RlID0gcmlnaHROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBub2RlRXF1YXRlcyA9IGVxdWF0ZU5vZGUoTGVmdE5vZGUsIHJpZ2h0Tm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc0VxdWF0ZTtcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQiksXG4gICAgICAgIHRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBtYXRjaGVzOyAgLy8vXG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBsZXQgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgaWYgKGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZVRlcm1SdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lVGVybVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhdGVUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gdGVybU5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFub25UZXJtaW5hbE5vZGVFcXVhdGVzKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbGVmdE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBub2Rlc0VxdWF0ZSA9IGVxdWF0ZU5vZGVzKGxlZnROb2RlcywgcmlnaHROb2RlcywgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBub2Rlc0VxdWF0ZTsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBsZXQgdGVybU5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgIGVxdWFsaXRpZXNCID0gZXF1YWxpdGllcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlNYXRjaGVzID0gZXF1YWxpdGllc0Iuc29tZSgoZXF1YWxpdHlCKSA9PiB7IC8vL1xuICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5QiA9IGVxdWFsaXR5QS5tYXRjaChlcXVhbGl0eUIsIGVxdWFsaXRpZXNCLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhbGl0eU1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0ZXJtTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckVxdWFsaXRpZXMoZXF1YWxpdGllcywgZXF1YWxpdHkpIHtcbiAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHk7IC8vL1xuXG4gIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzLmZpbHRlcigoZXF1YWxpdHkpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eTsgLy8vXG5cbiAgICBpZiAoZXF1YWxpdHlBICE9PSBlcXVhbGl0eUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWFsaXR5RnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgbGVmdFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgaWYgKGxlZnRUZXJtVmVyaWZpZWQgJiYgcmlnaHRUZXJtVmVyaWZpZWQpIHtcbiAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgc2Vjb25kVHlwZSA9IHNlY29uZCh0eXBlcyksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gc2Vjb25kVHlwZSwgLy8vXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9SaWdodFRlcm1UeXBlKSB7XG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybVR5cGVTdWJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzU3ViVHlwZU9mKHJpZ2h0VGVybVR5cGUpLFxuICAgICAgICAgICAgcmlnaHRUZXJtVHlwZVN1YlR5cGVPZkxlZnRUZXJtVHlwZSA9IHJpZ2h0VGVybVR5cGUuaXNTdWJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG4gICAgICAgICAgLy8vXG4gICAgICB9IGVsc2UgaWYgKGxlZnRUZXJtVHlwZVN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHJpZ2h0VGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICAgIGxldCByaWdodFZhcmlhYmxlO1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyk7XG5cbiAgICAgICAgICByaWdodFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZTsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgcmlnaHRWYXJpYWJsZU5hbWUgPSByaWdodFZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICByaWdodE5hbWUgPSByaWdodFZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIHJpZ2h0VHlwZSA9IGxlZnRUZXJtVHlwZTsgLy8vXG5cbiAgICAgICAgICByaWdodFZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVR5cGVBbmROYW1lKHJpZ2h0VHlwZSwgcmlnaHROYW1lKTtcblxuICAgICAgICAgIGNvbnRleHQuYWRkVmFyaWFibGUocmlnaHRWYXJpYWJsZSk7XG5cbiAgICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJpZ2h0VGVybVR5cGVTdWJUeXBlT2ZMZWZ0VGVybVR5cGUpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgICAgIGxlZnRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUobGVmdFRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgICAgIGxldCBsZWZ0VmFyaWFibGU7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKTtcblxuICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IGZpcnN0VmFyaWFibGU7ICAvLy9cblxuICAgICAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZU5hbWUgPSBsZWZ0VmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnROYW1lID0gbGVmdFZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgICAgIGxlZnRUeXBlID0gcmlnaHRUZXJtVHlwZTsgLy8vXG5cbiAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVHlwZUFuZE5hbWUobGVmdFR5cGUsIGxlZnROYW1lKTtcblxuICAgICAgICAgIGNvbnRleHQuYWRkVmFyaWFibGUobGVmdFZhcmlhYmxlKTtcblxuICAgICAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXF1YWxpdHkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgbGVmdFRlcm1UeXBlTmFtZSA9IGxlZnRUZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICByaWdodFRlcm1UeXBlTmFtZSA9IHJpZ2h0VGVybVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgbGVmdCAnJHtsZWZ0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtsZWZ0VGVybVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gdGhlIHJpZ2h0ICcke3JpZ2h0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtyaWdodFRlcm1UeXBlTmFtZX0nIHR5cGUgYW5kIG5laXRoZXIgY2FuIGJlIGluZmVycmVkLidgLCBsZWZ0VGVybU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlcyIsInJldmVyc2VkIiwiZXF1YWxpdGllcyIsImNvbnRleHQiLCJsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2giLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlTm9uVGVybWluYWxOb2RlIiwibWF0Y2giLCJlcXVhbGl0eSIsIm1hdGNoZXMiLCJmaWx0ZXJFcXVhbGl0aWVzIiwiZXF1YXRlIiwiZXF1YXRlcyIsImZyb21Qcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJlcXVhbGl0eVN0YXRlbWVudE5vZGUiLCJkZXB0aCIsIkVRVUFMSVRZX0RFUFRIIiwibm9kZU1hdGNoZXMiLCJtYXRjaGVyIiwibWF0Y2hOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJjb21iaW5hdG9yIiwiZXF1YWxpdHlDb21iaW5hdG9yIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIiwiZXF1YWxpdHlGcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZSIsImVxdWF0ZU5vZGUiLCJub2RlRXF1YXRlcyIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlRXF1YXRlcyIsImVxdWF0ZVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZXF1YXRlTm9kZXMiLCJsZWZ0Tm9kZXMiLCJyaWdodE5vZGVzIiwibm9kZXNFcXVhdGUiLCJsZWZ0Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyaWdodE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJMZWZ0Tm9kZSIsImluZGV4IiwicmlnaHROb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZVRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybU5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJlcXVhbGl0eUEiLCJlcXVhbGl0aWVzQiIsImVxdWFsaXR5TWF0Y2hlcyIsInNvbWUiLCJlcXVhbGl0eUIiLCJlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCIiwiZmlsdGVyIiwidHlwZXMiLCJsZWZ0VGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInJpZ2h0VGVybVZlcmlmaWVkIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJzZWNvbmRUeXBlIiwic2Vjb25kIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9SaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvIiwibGVmdFRlcm1UeXBlU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzU3ViVHlwZU9mIiwicmlnaHRUZXJtVHlwZVN1YlR5cGVPZkxlZnRUZXJtVHlwZSIsInZhcmlhYmxlcyIsInJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwicmlnaHRWYXJpYWJsZSIsImZpcnN0VmFyaWFibGUiLCJyaWdodFZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJyaWdodE5hbWUiLCJyaWdodFR5cGUiLCJWYXJpYWJsZSIsImZyb21UeXBlQW5kTmFtZSIsImFkZFZhcmlhYmxlIiwibGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJsZWZ0VmFyaWFibGUiLCJsZWZ0VmFyaWFibGVOYW1lIiwibGVmdE5hbWUiLCJsZWZ0VHlwZSIsImxlZnRUZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwibGVmdFRlcm1UeXBlTmFtZSIsInJpZ2h0VGVybVR5cGVOYW1lIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBa0JxQkE7Ozs0REFoQkQ7NkRBQ0M7MERBQ0U7NkRBQ1E7OERBQ0c7cUJBRVI7cUJBQ0k7eUJBQ0M7eUJBQ0E7eUJBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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