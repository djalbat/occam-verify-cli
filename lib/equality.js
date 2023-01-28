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
            context.error("The left '".concat(leftTermString, "' term's '").concat(leftTermTypeName, "' type is not equal to the right '").concat(rightTermString, "' term's '").concat(rightTermTypeName, "' type.'"), leftTermNode);
        }
    }
    return equality;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBlcXVhbGl0eUNvbWJpbmF0b3IgZnJvbSBcIi4vb2NtYmluYXRvci9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBtYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlclwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBFUVVBTElUWV9ERVBUSCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIH0gZnJvbSBcIi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5jb25zdCBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMF0vdGVybSFcIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIHRoaXMubGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlO1xuICAgIHRoaXMucmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMZWZ0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICAgIGxldCBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0cnVlO1xuXG4gICAgaWYgKGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCkge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHJldmVyc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cblxuICAgIGlmIChsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDtcbiAgfVxuXG4gIG1hdGNoKGVxdWFsaXR5LCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRSaWdodFRlcm1Ob2RlKCk7XG5cbiAgICBlcXVhbGl0aWVzID0gZmlsdGVyRXF1YWxpdGllcyhlcXVhbGl0aWVzLCBlcXVhbGl0eSk7ICAvLy9cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hUZXJtTm9kZXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG1hdGNoZXMgPSBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHJldmVyc2VkID0gdHJ1ZSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hUZXJtTm9kZXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG1hdGNoZXMgPSBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGVxdWF0ZShlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgICBlcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG5cbiAgICByZXR1cm4gZXF1YXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb21iaW5hdG9yID0gZXF1YWxpdHlDb21iaW5hdG9yLCAgLy8vXG4gICAgICAgICAgICBjb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50Tm9kZSgpLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgICAgIGRlcHRoID0gRVFVQUxJVFlfREVQVEgsXG4gICAgICAgICAgICBub2RlQSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gY29tYmluYXRvclN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBkZXB0aCk7XG5cbiAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBlcXVhbGl0eUNvbWJpbmF0b3IsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgY29tYmluYXRvciwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvcikge1xuICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlKG5vZGVBLCBub2RlQiwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBsZXQgbm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlQVRlcm1pbmFsTm9kZSA9IG5vZGVBLmlzVGVybWluYWxOb2RlKCksXG4gICAgICAgIG5vZGVCVGVybWluYWxOb2RlID0gbm9kZUIuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZUFUZXJtaW5hbE5vZGUgPT09IG5vZGVCVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVBVGVybWluYWxOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUIgPSBub2RlQiwgIC8vL1xuICAgICAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZVRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGVBLCB0ZXJtaW5hbE5vZGVCLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbm9kZUVxdWF0ZXMgPSB0ZXJtaW5hbE5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVFcXVhdGVzO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVOb2RlcyhsZWZ0Tm9kZXMsIHJpZ2h0Tm9kZXMsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVzRXF1YXRlID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdE5vZGVzTGVuZ3RoID0gbGVmdE5vZGVzLmxlbmd0aCxcbiAgICAgICAgcmlnaHROb2Rlc0xlbmd0aCA9IHJpZ2h0Tm9kZXMubGVuZ3RoO1xuXG4gIGlmIChsZWZ0Tm9kZXNMZW5ndGggPT09IHJpZ2h0Tm9kZXNMZW5ndGgpIHtcbiAgICBub2Rlc0VxdWF0ZSA9IGxlZnROb2Rlcy5ldmVyeSgoTGVmdE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCByaWdodE5vZGUgPSByaWdodE5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIG5vZGVFcXVhdGVzID0gZXF1YXRlTm9kZShMZWZ0Tm9kZSwgcmlnaHROb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG5vZGVFcXVhdGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG5vZGVzRXF1YXRlO1xufVxuXG5mdW5jdGlvbiBlcXVhdGVUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBjb25zdCBtYXRjaGVzID0gdGVybWluYWxOb2RlQS5tYXRjaCh0ZXJtaW5hbE5vZGVCKSxcbiAgICAgICAgdGVybWluYWxOb2RlRXF1YXRlcyA9IG1hdGNoZXM7ICAvLy9cblxuICByZXR1cm4gdGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIGxldCBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lVGVybVJ1bGVOYW1lID0gKHJ1bGVOYW1lID09PSBURVJNX1JVTEVfTkFNRSk7XG5cbiAgICBpZiAocnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnROb25UZXJtaW5hbE5vZGUsIC8vL1xuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWF0ZVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSB0ZXJtTm9kZUVxdWF0ZXM7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW5vblRlcm1pbmFsTm9kZUVxdWF0ZXMpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICBsZWZ0Tm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICByaWdodE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgIG5vZGVzRXF1YXRlID0gZXF1YXRlTm9kZXMobGVmdE5vZGVzLCByaWdodE5vZGVzLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IG5vZGVzRXF1YXRlOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9uVGVybWluYWxOb2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIGxldCB0ZXJtTm9kZUVxdWF0ZXMgPSBmYWxzZTtcblxuICBjb25zdCBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICBjb25zdCBlcXVhbGl0eUEgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgICAgZXF1YWxpdGllc0IgPSBlcXVhbGl0aWVzLCAvLy9cbiAgICAgICAgICBlcXVhbGl0eU1hdGNoZXMgPSBlcXVhbGl0aWVzQi5zb21lKChlcXVhbGl0eUIpID0+IHsgLy8vXG4gICAgICAgICAgICBjb25zdCBlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCID0gZXF1YWxpdHlBLm1hdGNoKGVxdWFsaXR5QiwgZXF1YWxpdGllc0IsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5Qikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHRlcm1Ob2RlRXF1YXRlcyA9IGVxdWFsaXR5TWF0Y2hlczsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHRlcm1Ob2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZmlsdGVyRXF1YWxpdGllcyhlcXVhbGl0aWVzLCBlcXVhbGl0eSkge1xuICBjb25zdCBlcXVhbGl0eUEgPSBlcXVhbGl0eTsgLy8vXG5cbiAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXMuZmlsdGVyKChlcXVhbGl0eSkgPT4ge1xuICAgIGNvbnN0IGVxdWFsaXR5QiA9IGVxdWFsaXR5OyAvLy9cblxuICAgIGlmIChlcXVhbGl0eUEgIT09IGVxdWFsaXR5Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXF1YWxpdGllcztcbn1cblxuZnVuY3Rpb24gZXF1YWxpdHlGcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICBjb25zdCB0eXBlcyA9IFtdLFxuICAgICAgICBsZWZ0VGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KSxcbiAgICAgICAgcmlnaHRUZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHJpZ2h0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICBpZiAobGVmdFRlcm1WZXJpZmllZCAmJiByaWdodFRlcm1WZXJpZmllZCkge1xuICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICBzZWNvbmRUeXBlID0gc2Vjb25kKHR5cGVzKSxcbiAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsIC8vL1xuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSBzZWNvbmRUeXBlLCAvLy9cbiAgICAgICAgICBsZWZ0VGVybVR5cGVFcXVhbFRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG8ocmlnaHRUZXJtVHlwZSk7XG5cbiAgICBpZiAobGVmdFRlcm1UeXBlRXF1YWxUb1JpZ2h0VGVybVR5cGUpIHtcbiAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgbGVmdFRlcm1UeXBlTmFtZSA9IGxlZnRUZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICByaWdodFRlcm1UeXBlTmFtZSA9IHJpZ2h0VGVybVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb250ZXh0LmVycm9yKGBUaGUgbGVmdCAnJHtsZWZ0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtsZWZ0VGVybVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gdGhlIHJpZ2h0ICcke3JpZ2h0VGVybVN0cmluZ30nIHRlcm0ncyAnJHtyaWdodFRlcm1UeXBlTmFtZX0nIHR5cGUuJ2AsIGxlZnRUZXJtTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVxdWFsaXR5O1xufVxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsIm1hdGNoVGVybU5vZGVzIiwicmV2ZXJzZWQiLCJlcXVhbGl0aWVzIiwiY29udGV4dCIsImxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCIsImxlZnROb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUVxdWF0ZXMiLCJlcXVhdGVOb25UZXJtaW5hbE5vZGUiLCJtYXRjaCIsImVxdWFsaXR5IiwibWF0Y2hlcyIsImZpbHRlckVxdWFsaXRpZXMiLCJlcXVhdGUiLCJlcXVhdGVzIiwiZnJvbVByb29mU3RlcCIsInByb29mU3RlcCIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiY29tYmluYXRvciIsImVxdWFsaXR5Q29tYmluYXRvciIsImNvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsImRlcHRoIiwiRVFVQUxJVFlfREVQVEgiLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaGVyIiwibWF0Y2hOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RDb21iaW5hdG9yIiwidmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IiLCJlcXVhdGVOb2RlIiwibm9kZUVxdWF0ZXMiLCJub2RlQVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwibm9kZUJUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVBIiwidGVybWluYWxOb2RlQiIsInRlcm1pbmFsTm9kZUVxdWF0ZXMiLCJlcXVhdGVUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImVxdWF0ZU5vZGVzIiwibGVmdE5vZGVzIiwicmlnaHROb2RlcyIsIm5vZGVzRXF1YXRlIiwibGVmdE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwicmlnaHROb2Rlc0xlbmd0aCIsImV2ZXJ5IiwiTGVmdE5vZGUiLCJpbmRleCIsInJpZ2h0Tm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwicmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsInJ1bGVOYW1lIiwicnVsZU5hbWVUZXJtUnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlRXF1YXRlcyIsImVxdWF0ZVRlcm1Ob2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZXF1YWxpdHlGcm9tTGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZSIsImVxdWFsaXR5QSIsImVxdWFsaXRpZXNCIiwiZXF1YWxpdHlNYXRjaGVzIiwic29tZSIsImVxdWFsaXR5QiIsImVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIiLCJmaWx0ZXIiLCJ0eXBlcyIsImxlZnRUZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwicmlnaHRUZXJtVmVyaWZpZWQiLCJmaXJzdFR5cGUiLCJmaXJzdCIsInNlY29uZFR5cGUiLCJzZWNvbmQiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb1JpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG8iLCJsZWZ0VGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsImxlZnRUZXJtVHlwZU5hbWUiLCJnZXROYW1lIiwicmlnaHRUZXJtVHlwZU5hbWUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7eURBYkU7NkRBQ1E7dUJBRVA7cUJBQ0U7cUJBQ0k7eUJBQ0M7eUJBQ0E7eUJBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHlCQW9IbEIsQUFwSFk7YUFBTUEsU0FDUEksWUFBWSxFQUFFQyxhQUFhOzhCQURwQkw7UUFFakIsSUFBSSxDQUFDSSxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7aUJBSEpMOztZQU1uQk0sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFB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