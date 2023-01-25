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
var _equality = /*#__PURE__*/ _interopRequireDefault(require("./ocmbinator/equality"));
var _matcher = require("./matcher");
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
                    var combinator = _equality.default, combinatorStatementNode = combinator.getStatementNode(), substitutions = null, depth = _constants.EQUALITY_DEPTH, nodeA = statementNode, nodeB = combinatorStatementNode, nodeMatches = _matcher.matcher.matchNode(nodeA, nodeB, substitutions, depth);
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
                    equality = new Equality(leftTermNode, rightTermNode);
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
            var leftTermString = context.nodeAsString(leftTermNode), rightTermString = context.nodeAsString(rightTermNode), leftTermTypeName = leftTermType.getName(), rightTermTypeName = rightTermType.getName();
            context.error("The left '".concat(leftTermString, "' term's '").concat(leftTermTypeName, "' type is not equal to the right '").concat(rightTermString, "' term's '").concat(rightTermTypeName, "' type.'"));
        }
    }
    return equality;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBlcXVhbGl0eUNvbWJpbmF0b3IgZnJvbSBcIi4vb2NtYmluYXRvci9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBtYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlclwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBFUVVBTElUWV9ERVBUSCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIH0gZnJvbSBcIi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5jb25zdCBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMF0vdGVybSFcIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIHRoaXMubGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlO1xuICAgIHRoaXMucmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMZWZ0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICAgIGxldCBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0cnVlO1xuXG4gICAgaWYgKGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCkge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHJldmVyc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cblxuICAgIGlmIChsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDtcbiAgfVxuXG4gIG1hdGNoKGVxdWFsaXR5LCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRSaWdodFRlcm1Ob2RlKCk7XG5cbiAgICBlcXVhbGl0aWVzID0gZmlsdGVyRXF1YWxpdGllcyhlcXVhbGl0aWVzLCBlcXVhbGl0eSk7ICAvLy9cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hUZXJtTm9kZXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG1hdGNoZXMgPSBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHJldmVyc2VkID0gdHJ1ZSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hUZXJtTm9kZXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG1hdGNoZXMgPSBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGVxdWF0ZShlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgICBlcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG5cbiAgICByZXR1cm4gZXF1YXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb21iaW5hdG9yID0gZXF1YWxpdHlDb21iaW5hdG9yLCAgLy8vXG4gICAgICAgICAgICBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50Tm9kZSgpLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgICAgIGRlcHRoID0gRVFVQUxJVFlfREVQVEgsXG4gICAgICAgICAgICBub2RlQSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBkZXB0aCk7XG5cbiAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBlcXVhbGl0eUNvbWJpbmF0b3IsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlKG5vZGVBLCBub2RlQiwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBsZXQgbm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZUFUZXJtaW5hbE5vZGUgPT09IG5vZGVCVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVBVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbm9kZUVxdWF0ZXMgPSB0ZXJtaW5hbE5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVzRXF1YXRlID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdE5vZGVzTGVuZ3RoID0gbGVmdE5vZGVzLmxlbmd0aCxcbiAgICAgICAgcmlnaHROb2Rlc0xlbmd0aCA9IHJpZ2h0Tm9kZXMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0Tm9kZXNMZW5ndGggPT09IHJpZ2h0Tm9kZXNMZW5ndGgpIHtcbiAgICBub2Rlc0VxdWF0ZSA9IGxlZnROb2Rlcy5ldmVyeSgoTGVmdE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByaWdodE5vZGUgPSByaWdodE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGVFcXVhdGVzID0gZXF1YXRlTm9kZShMZWZ0Tm9kZSwgcmlnaHROb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG5vZGVFcXVhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzRXF1YXRlO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IG1hdGNoZXM7ICAvLy9cblxuICByZXR1cm4gdGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lVGVybVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBURVJNX1JVTEVfTkFNRSk7XG5cbiAgICBpZiAocnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWF0ZVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSB0ZXJtTm9kZUVxdWF0ZXM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW5vblRlcm1pbmFsTm9kZUVxdWF0ZXMpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBsZWZ0Tm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICByaWdodE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzRXF1YXRlID0gZXF1YXRlTm9kZXMobGVmdE5vZGVzLCByaWdodE5vZGVzLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IG5vZGVzRXF1YXRlOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtTm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcXVhbGl0eUEgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgICAgZXF1YWxpdGllc0IgPSBlcXVhbGl0aWVzLCAvLy9cbiAgICAgICAgICBlcXVhbGl0eU1hdGNoZXMgPSBlcXVhbGl0aWVzQi5zb21lKChlcXVhbGl0eUIpID0+IHsgLy8vXG4gICAgICAgICAgICBjb25zdCBlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCID0gZXF1YWxpdHlBLm1hdGNoKGVxdWFsaXR5QiwgZXF1YWxpdGllc0IsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5Qikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWFsaXR5TWF0Y2hlczsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRlcm1Ob2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZmlsdGVyRXF1YWxpdGllcyhlcXVhbGl0aWVzLCBlcXVhbGl0eSkge1xuICBjb25zdCBlcXVhbGl0eUEgPSBlcXVhbGl0eTsgLy8vXG5cbiAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXMuZmlsdGVyKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5QiA9IGVxdWFsaXR5OyAvLy9cblxuICAgIGlmIChlcXVhbGl0eUEgIT09IGVxdWFsaXR5Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXF1YWxpdGllcztcbn1cblxuZnVuY3Rpb24gZXF1YWxpdHlGcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICBsZWZ0VGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICBpZiAobGVmdFRlcm1WZXJpZmllZCAmJiByaWdodFRlcm1WZXJpZmllZCkge1xuICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICBzZWNvbmRUeXBlID0gc2Vjb25kKHR5cGVzKSxcbiAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSBzZWNvbmRUeXBlLCAvLy9cbiAgICAgICAgICBsZWZ0VGVybVR5cGVFcXVhbFRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG8ocmlnaHRUZXJtVHlwZSk7XG5cbiAgICBpZiAobGVmdFRlcm1UeXBlRXF1YWxUb1JpZ2h0VGVybVR5cGUpIHtcbiAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgbGVmdFRlcm1UeXBlTmFtZSA9IGxlZnRUZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICByaWdodFRlcm1UeXBlTmFtZSA9IHJpZ2h0VGVybVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgbGVmdCAnJHtsZWZ0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtsZWZ0VGVybVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gdGhlIHJpZ2h0ICcke3JpZ2h0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtyaWdodFRlcm1UeXBlTmFtZX0nIHR5cGUuJ2ApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlcyIsInJldmVyc2VkIiwiZXF1YWxpdGllcyIsImNvbnRleHQiLCJsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2giLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlTm9uVGVybWluYWxOb2RlIiwibWF0Y2giLCJlcXVhbGl0eSIsIm1hdGNoZXMiLCJmaWx0ZXJFcXVhbGl0aWVzIiwiZXF1YXRlIiwiZXF1YXRlcyIsImZyb21Qcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImNvbWJpbmF0b3IiLCJlcXVhbGl0eUNvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJkZXB0aCIsIkVRVUFMSVRZX0RFUFRIIiwibm9kZUEiLCJub2RlQiIsIm5vZGVNYXRjaGVzIiwibWF0Y2hlciIsIm1hdGNoTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIiwiZXF1YXRlTm9kZSIsIm5vZGVFcXVhdGVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJlcXVhdGVOb2RlcyIsImxlZnROb2RlcyIsInJpZ2h0Tm9kZXMiLCJub2Rlc0VxdWF0ZSIsImxlZnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJpZ2h0Tm9kZXNMZW5ndGgiLCJldmVyeSIsIkxlZnROb2RlIiwiaW5kZXgiLCJyaWdodE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZUVxdWF0ZXMiLCJlcXVhdGVUZXJtTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImVxdWFsaXR5RnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUiLCJlcXVhbGl0eUEiLCJlcXVhbGl0aWVzQiIsImVxdWFsaXR5TWF0Y2hlcyIsInNvbWUiLCJlcXVhbGl0eUIiLCJlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCIiwiZmlsdGVyIiwidHlwZXMiLCJsZWZ0VGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInJpZ2h0VGVybVZlcmlmaWVkIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJzZWNvbmRUeXBlIiwic2Vjb25kIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9SaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvIiwibGVmdFRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJyaWdodFRlcm1TdHJpbmciLCJsZWZ0VGVybVR5cGVOYW1lIiwiZ2V0TmFtZSIsInJpZ2h0VGVybVR5cGVOYW1lIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O3lEQWJFOzZEQUNRO3VCQUVQO3FCQUNFO3FCQUNJO3lCQUNDO3lCQUNBO3lCQUNrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsaUNBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRix5QkFvSGxCLEFBcEhZO2FBQU1BLFNBQ1BJLFlBQVksRUFBRUMsYUFBYTs4QkFEcEJMO1FBRWpCLElBQUksQ0FBQ0ksWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUhKTDs7WUFNbkJNLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsT0FBTyxJQUFJLENBQUNGLGFBQWE7WUFDM0I7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUosWUFBWSxF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