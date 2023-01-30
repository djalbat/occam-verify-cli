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
var _equality1 = /*#__PURE__*/ _interopRequireDefault(require("./node/statement/equality"));
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
                    var substitutions = null, depth = _constants.EQUALITY_DEPTH, nodeA = statementNode, nodeB = _equality1.default, nodeMatches = _matcher.matcher.matchNode(nodeA, nodeB, substitutions, depth);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBlcXVhbGl0eUNvbWJpbmF0b3IgZnJvbSBcIi4vb2NtYmluYXRvci9lcXVhbGl0eVwiO1xuaW1wb3J0IGVxdWFsaXR5U3RhdGVtZW50Tm9kZSBmcm9tIFwiLi9ub2RlL3N0YXRlbWVudC9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBtYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlclwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBFUVVBTElUWV9ERVBUSCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIH0gZnJvbSBcIi4vdmVyaWZ5L3N0YXRlbWVudFwiO1xuXG5jb25zdCBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMF0vdGVybSFcIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2FyZ3VtZW50WzFdL3Rlcm0hXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSkge1xuICAgIHRoaXMubGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlO1xuICAgIHRoaXMucmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBnZXRMZWZ0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICAgIGxldCBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSB0cnVlO1xuXG4gICAgaWYgKGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCkge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHJldmVyc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cblxuICAgIGlmIChsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGUgPSByZXZlcnNlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRUZXJtTm9kZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDtcbiAgfVxuXG4gIG1hdGNoKGVxdWFsaXR5LCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgbGV0IG1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eS5nZXRSaWdodFRlcm1Ob2RlKCk7XG5cbiAgICBlcXVhbGl0aWVzID0gZmlsdGVyRXF1YWxpdGllcyhlcXVhbGl0aWVzLCBlcXVhbGl0eSk7ICAvLy9cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hUZXJtTm9kZXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG1hdGNoZXMgPSBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHJldmVyc2VkID0gdHJ1ZSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRoaXMubWF0Y2hUZXJtTm9kZXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCByZXZlcnNlZCwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG1hdGNoZXMgPSBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2g7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGVxdWF0ZShlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHRoaXMubGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSB0aGlzLnJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KSxcbiAgICAgICAgICBlcXVhdGVzID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG5cbiAgICByZXR1cm4gZXF1YXRlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvb2ZTdGVwKHByb29mU3RlcCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgICAgIGRlcHRoID0gRVFVQUxJVFlfREVQVEgsXG4gICAgICAgICAgICBub2RlQSA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vZGVCID0gZXF1YWxpdHlTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoZXIubWF0Y2hOb2RlKG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgZGVwdGgpO1xuXG4gICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yID0gZXF1YWxpdHlDb21iaW5hdG9yLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9kZShub2RlQSwgbm9kZUIsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZUFUZXJtaW5hbE5vZGUgPSBub2RlQS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBub2RlQlRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVBVGVybWluYWxOb2RlID09PSBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChub2RlQVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gdGVybWluYWxOb2RlRXF1YXRlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBub2RlRXF1YXRlcyA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9kZXMobGVmdE5vZGVzLCByaWdodE5vZGVzLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc0VxdWF0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnROb2Rlc0xlbmd0aCA9IGxlZnROb2Rlcy5sZW5ndGgsXG4gICAgICAgIHJpZ2h0Tm9kZXNMZW5ndGggPSByaWdodE5vZGVzLmxlbmd0aDtcblxuICBpZiAobGVmdE5vZGVzTGVuZ3RoID09PSByaWdodE5vZGVzTGVuZ3RoKSB7XG4gICAgbm9kZXNFcXVhdGUgPSBsZWZ0Tm9kZXMuZXZlcnkoKExlZnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmlnaHROb2RlID0gcmlnaHROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBub2RlRXF1YXRlcyA9IGVxdWF0ZU5vZGUoTGVmdE5vZGUsIHJpZ2h0Tm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc0VxdWF0ZTtcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQiksXG4gICAgICAgIHRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBtYXRjaGVzOyAgLy8vXG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBsZXQgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgaWYgKGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZVRlcm1SdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lVGVybVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhdGVUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gdGVybU5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFub25UZXJtaW5hbE5vZGVFcXVhdGVzKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbGVmdE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBub2Rlc0VxdWF0ZSA9IGVxdWF0ZU5vZGVzKGxlZnROb2RlcywgcmlnaHROb2RlcywgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBub2Rlc0VxdWF0ZTsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBsZXQgdGVybU5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgIGVxdWFsaXRpZXNCID0gZXF1YWxpdGllcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlNYXRjaGVzID0gZXF1YWxpdGllc0Iuc29tZSgoZXF1YWxpdHlCKSA9PiB7IC8vL1xuICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5QiA9IGVxdWFsaXR5QS5tYXRjaChlcXVhbGl0eUIsIGVxdWFsaXRpZXNCLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhbGl0eU1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0ZXJtTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckVxdWFsaXRpZXMoZXF1YWxpdGllcywgZXF1YWxpdHkpIHtcbiAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHk7IC8vL1xuXG4gIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzLmZpbHRlcigoZXF1YWxpdHkpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eTsgLy8vXG5cbiAgICBpZiAoZXF1YWxpdHlBICE9PSBlcXVhbGl0eUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWFsaXR5RnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgbGVmdFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgaWYgKGxlZnRUZXJtVmVyaWZpZWQgJiYgcmlnaHRUZXJtVmVyaWZpZWQpIHtcbiAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgc2Vjb25kVHlwZSA9IHNlY29uZCh0eXBlcyksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gc2Vjb25kVHlwZSwgLy8vXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9SaWdodFRlcm1UeXBlKSB7XG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGxlZnRUZXJtTm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgIGxlZnRUZXJtVHlwZU5hbWUgPSBsZWZ0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtVHlwZU5hbWUgPSByaWdodFRlcm1UeXBlLmdldE5hbWUoKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlIGxlZnQgJyR7bGVmdFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7bGVmdFRlcm1UeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIHRoZSByaWdodCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlLidgLCBsZWZ0VGVybU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlcyIsInJldmVyc2VkIiwiZXF1YWxpdGllcyIsImNvbnRleHQiLCJsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2giLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlTm9uVGVybWluYWxOb2RlIiwibWF0Y2giLCJlcXVhbGl0eSIsIm1hdGNoZXMiLCJmaWx0ZXJFcXVhbGl0aWVzIiwiZXF1YXRlIiwiZXF1YXRlcyIsImZyb21Qcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbnMiLCJkZXB0aCIsIkVRVUFMSVRZX0RFUFRIIiwibm9kZUEiLCJub2RlQiIsImVxdWFsaXR5U3RhdGVtZW50Tm9kZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hlciIsIm1hdGNoTm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiY29tYmluYXRvciIsImVxdWFsaXR5Q29tYmluYXRvciIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IiLCJ2ZXJpZnlTdGF0ZW1lbnRBZ2FpbnN0Q29tYmluYXRvciIsImVxdWF0ZU5vZGUiLCJub2RlRXF1YXRlcyIsIm5vZGVBVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJub2RlQlRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUEiLCJ0ZXJtaW5hbE5vZGVCIiwidGVybWluYWxOb2RlRXF1YXRlcyIsImVxdWF0ZVRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZXF1YXRlTm9kZXMiLCJsZWZ0Tm9kZXMiLCJyaWdodE5vZGVzIiwibm9kZXNFcXVhdGUiLCJsZWZ0Tm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJyaWdodE5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJMZWZ0Tm9kZSIsImluZGV4IiwicmlnaHROb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZVRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybU5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJlcXVhbGl0eUZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwiZXF1YWxpdHlBIiwiZXF1YWxpdGllc0IiLCJlcXVhbGl0eU1hdGNoZXMiLCJzb21lIiwiZXF1YWxpdHlCIiwiZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5QiIsImZpbHRlciIsInR5cGVzIiwibGVmdFRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJyaWdodFRlcm1WZXJpZmllZCIsImZpcnN0VHlwZSIsImZpcnN0Iiwic2Vjb25kVHlwZSIsInNlY29uZCIsImxlZnRUZXJtVHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVR5cGVFcXVhbFRvUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUbyIsImxlZnRUZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwibGVmdFRlcm1UeXBlTmFtZSIsImdldE5hbWUiLCJyaWdodFRlcm1UeXBlTmFtZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWdCcUJBOzs7eURBZEU7NkRBQ1E7OERBQ0c7dUJBRVY7cUJBQ0U7cUJBQ0k7eUJBQ0M7eUJBQ0E7eUJBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHlCQWtIbEIsQUFsSFk7YUFBTUEsU0FDUEksWUFBWSxFQUFFQyxhQUFhOzhCQURwQkw7UUFFakIsSUFBSSxDQUFDSSxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7aUJBSEpMOztZQU1uQk0sS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CO2dCQUNqQixPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSixZQUFZLEVBQUVDLGFBQWEsRUFBRUksUUFBUSxFQUFFQyxVQUFVLEVBQUVDLE9BQU8s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