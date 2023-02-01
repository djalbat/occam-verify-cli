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
var _term = /*#__PURE__*/ _interopRequireDefault(require("./verify/term"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG1hdGNoZXIgZnJvbSBcIi4vbWF0Y2hlclwiO1xuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdmVyaWZ5L3Rlcm1cIjtcbmltcG9ydCBlcXVhbGl0eUNvbWJpbmF0b3IgZnJvbSBcIi4vb2NtYmluYXRvci9lcXVhbGl0eVwiO1xuaW1wb3J0IGVxdWFsaXR5U3RhdGVtZW50Tm9kZSBmcm9tIFwiLi9ub2RlL3N0YXRlbWVudC9lcXVhbGl0eVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVRVUFMSVRZX0RFUFRIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50QWdhaW5zdENvbWJpbmF0b3IgfSBmcm9tIFwiLi92ZXJpZnkvc3RhdGVtZW50XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9hcmd1bWVudFswXS90ZXJtIVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvYXJndW1lbnRbMV0vdGVybSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVxdWFsaXR5IHtcbiAgY29uc3RydWN0b3IobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSB7XG4gICAgdGhpcy5sZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGU7XG4gICAgdGhpcy5yaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybU5vZGU7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgbGV0IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCA9IHRydWU7XG5cbiAgICBpZiAobGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gcmV2ZXJzZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFRlcm1Ob2RlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gbGVmdFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gbm9uVGVybWluYWxOb2RlRXF1YXRlczsgLy8vXG4gICAgfVxuXG4gICAgaWYgKGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaCkge1xuICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IHJldmVyc2VkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFRlcm1Ob2RlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2ggPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoO1xuICB9XG5cbiAgbWF0Y2goZXF1YWxpdHksIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5LmdldFJpZ2h0VGVybU5vZGUoKTtcblxuICAgIGVxdWFsaXRpZXMgPSBmaWx0ZXJFcXVhbGl0aWVzKGVxdWFsaXRpZXMsIGVxdWFsaXR5KTsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCByZXZlcnNlZCA9IGZhbHNlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgcmV2ZXJzZWQgPSB0cnVlLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlQW5kUmlnaHRUZXJtTm9kZU1hdGNoID0gdGhpcy5tYXRjaFRlcm1Ob2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIHJldmVyc2VkLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgbWF0Y2hlcyA9IGxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGVNYXRjaDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgZXF1YXRlKGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gdGhpcy5sZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHRoaXMucmlnaHRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVOb25UZXJtaW5hbE5vZGUobGVmdE5vblRlcm1pbmFsTm9kZSwgcmlnaHROb25UZXJtaW5hbE5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGVxdWF0ZXMgPSBub25UZXJtaW5hbE5vZGVFcXVhdGVzOyAvLy9cblxuICAgIHJldHVybiBlcXVhdGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9vZlN0ZXAocHJvb2ZTdGVwKSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vZGVBID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbm9kZUIgPSBlcXVhbGl0eVN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIGRlcHRoID0gRVFVQUxJVFlfREVQVEgsXG4gICAgICAgICAgICBub2RlTWF0Y2hlcyA9IG1hdGNoZXIubWF0Y2hOb2RlKG5vZGVBLCBub2RlQiwgZGVwdGgpO1xuXG4gICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yID0gZXF1YWxpdHlDb21iaW5hdG9yLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIGNvbWJpbmF0b3IsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdENvbWJpbmF0b3IpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9kZShub2RlQSwgbm9kZUIsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgbGV0IG5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZUFUZXJtaW5hbE5vZGUgPSBub2RlQS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBub2RlQlRlcm1pbmFsTm9kZSA9IG5vZGVCLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVBVGVybWluYWxOb2RlID09PSBub2RlQlRlcm1pbmFsTm9kZSkge1xuICAgIGlmIChub2RlQVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlQSA9IG5vZGVBLCAgLy8vXG4gICAgICAgICAgICB0ZXJtaW5hbE5vZGVCID0gbm9kZUIsICAvLy9cbiAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBlcXVhdGVUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlQSwgdGVybWluYWxOb2RlQiwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vZGVFcXVhdGVzID0gdGVybWluYWxOb2RlRXF1YXRlczsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gZXF1YXRlTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBub2RlRXF1YXRlcyA9IG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlRXF1YXRlcztcbn1cblxuZnVuY3Rpb24gZXF1YXRlTm9kZXMobGVmdE5vZGVzLCByaWdodE5vZGVzLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gIGxldCBub2Rlc0VxdWF0ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnROb2Rlc0xlbmd0aCA9IGxlZnROb2Rlcy5sZW5ndGgsXG4gICAgICAgIHJpZ2h0Tm9kZXNMZW5ndGggPSByaWdodE5vZGVzLmxlbmd0aDtcblxuICBpZiAobGVmdE5vZGVzTGVuZ3RoID09PSByaWdodE5vZGVzTGVuZ3RoKSB7XG4gICAgbm9kZXNFcXVhdGUgPSBsZWZ0Tm9kZXMuZXZlcnkoKExlZnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcmlnaHROb2RlID0gcmlnaHROb2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBub2RlRXF1YXRlcyA9IGVxdWF0ZU5vZGUoTGVmdE5vZGUsIHJpZ2h0Tm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIGlmIChub2RlRXF1YXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBub2Rlc0VxdWF0ZTtcbn1cblxuZnVuY3Rpb24gZXF1YXRlVGVybWluYWxOb2RlKHRlcm1pbmFsTm9kZUEsIHRlcm1pbmFsTm9kZUIsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IHRlcm1pbmFsTm9kZUEubWF0Y2godGVybWluYWxOb2RlQiksXG4gICAgICAgIHRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBtYXRjaGVzOyAgLy8vXG5cbiAgcmV0dXJuIHRlcm1pbmFsTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBsZXQgbm9uVGVybWluYWxOb2RlRXF1YXRlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgaWYgKGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBydWxlTmFtZVRlcm1SdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lVGVybVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhdGVUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpO1xuXG4gICAgICBub25UZXJtaW5hbE5vZGVFcXVhdGVzID0gdGVybU5vZGVFcXVhdGVzOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKCFub25UZXJtaW5hbE5vZGVFcXVhdGVzKSB7XG4gICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgbGVmdE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgcmlnaHROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICBub2Rlc0VxdWF0ZSA9IGVxdWF0ZU5vZGVzKGxlZnROb2RlcywgcmlnaHROb2RlcywgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXMgPSBub2Rlc0VxdWF0ZTsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWF0ZVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCkge1xuICBsZXQgdGVybU5vZGVFcXVhdGVzID0gZmFsc2U7XG5cbiAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKGVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgIGVxdWFsaXRpZXNCID0gZXF1YWxpdGllcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlNYXRjaGVzID0gZXF1YWxpdGllc0Iuc29tZSgoZXF1YWxpdHlCKSA9PiB7IC8vL1xuICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5QiA9IGVxdWFsaXR5QS5tYXRjaChlcXVhbGl0eUIsIGVxdWFsaXRpZXNCLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtTm9kZUVxdWF0ZXMgPSBlcXVhbGl0eU1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0ZXJtTm9kZUVxdWF0ZXM7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckVxdWFsaXRpZXMoZXF1YWxpdGllcywgZXF1YWxpdHkpIHtcbiAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHk7IC8vL1xuXG4gIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzLmZpbHRlcigoZXF1YWxpdHkpID0+IHtcbiAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eTsgLy8vXG5cbiAgICBpZiAoZXF1YWxpdHlBICE9PSBlcXVhbGl0eUIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsaXRpZXM7XG59XG5cbmZ1bmN0aW9uIGVxdWFsaXR5RnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgY29uc3QgdHlwZXMgPSBbXSxcbiAgICAgICAgbGVmdFRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0obGVmdFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCksXG4gICAgICAgIHJpZ2h0VGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgaWYgKGxlZnRUZXJtVmVyaWZpZWQgJiYgcmlnaHRUZXJtVmVyaWZpZWQpIHtcbiAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgc2Vjb25kVHlwZSA9IHNlY29uZCh0eXBlcyksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gc2Vjb25kVHlwZSwgLy8vXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9SaWdodFRlcm1UeXBlKSB7XG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKGxlZnRUZXJtTm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgIGxlZnRUZXJtVHlwZU5hbWUgPSBsZWZ0VGVybVR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcmlnaHRUZXJtVHlwZU5hbWUgPSByaWdodFRlcm1UeXBlLmdldE5hbWUoKTtcblxuICAgICAgY29udGV4dC5lcnJvcihgVGhlIGxlZnQgJyR7bGVmdFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7bGVmdFRlcm1UeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIHRoZSByaWdodCAnJHtyaWdodFRlcm1TdHJpbmd9JyB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlLidgLCBsZWZ0VGVybU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcXVhbGl0eTtcbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldExlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlcyIsInJldmVyc2VkIiwiZXF1YWxpdGllcyIsImNvbnRleHQiLCJsZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlTWF0Y2giLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlTm9uVGVybWluYWxOb2RlIiwibWF0Y2giLCJlcXVhbGl0eSIsIm1hdGNoZXMiLCJmaWx0ZXJFcXVhbGl0aWVzIiwiZXF1YXRlIiwiZXF1YXRlcyIsImZyb21Qcm9vZlN0ZXAiLCJwcm9vZlN0ZXAiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsIm5vZGVBIiwibm9kZUIiLCJlcXVhbGl0eVN0YXRlbWVudE5vZGUiLCJkZXB0aCIsIkVRVUFMSVRZX0RFUFRIIiwibm9kZU1hdGNoZXMiLCJtYXRjaGVyIiwibWF0Y2hOb2RlIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJjb21iaW5hdG9yIiwiZXF1YWxpdHlDb21iaW5hdG9yIiwic3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0Q29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFnYWluc3RDb21iaW5hdG9yIiwiZXF1YXRlTm9kZSIsIm5vZGVFcXVhdGVzIiwibm9kZUFUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsIm5vZGVCVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQSIsInRlcm1pbmFsTm9kZUIiLCJ0ZXJtaW5hbE5vZGVFcXVhdGVzIiwiZXF1YXRlVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJlcXVhdGVOb2RlcyIsImxlZnROb2RlcyIsInJpZ2h0Tm9kZXMiLCJub2Rlc0VxdWF0ZSIsImxlZnROb2Rlc0xlbmd0aCIsImxlbmd0aCIsInJpZ2h0Tm9kZXNMZW5ndGgiLCJldmVyeSIsIkxlZnROb2RlIiwiaW5kZXgiLCJyaWdodE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJydWxlTmFtZSIsInJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJ0ZXJtTm9kZUVxdWF0ZXMiLCJlcXVhdGVUZXJtTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImVxdWFsaXR5RnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUiLCJlcXVhbGl0eUEiLCJlcXVhbGl0aWVzQiIsImVxdWFsaXR5TWF0Y2hlcyIsInNvbWUiLCJlcXVhbGl0eUIiLCJlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCIiwiZmlsdGVyIiwidHlwZXMiLCJsZWZ0VGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInJpZ2h0VGVybVZlcmlmaWVkIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJzZWNvbmRUeXBlIiwic2Vjb25kIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9SaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvIiwibGVmdFRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJyaWdodFRlcm1TdHJpbmciLCJsZWZ0VGVybVR5cGVOYW1lIiwiZ2V0TmFtZSIsInJpZ2h0VGVybVR5cGVOYW1lIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7Ozs0REFkRDt5REFDRzs2REFDUTs4REFDRztxQkFFUjtxQkFDSTt5QkFDQzt5QkFDQTt5QkFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGlDQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYseUJBaUhsQixBQWpIWTthQUFNQSxTQUNQSSxZQUFZLEVBQUVDLGFBQWE7OEJBRHBCTDtRQUVqQixJQUFJLENBQUNJLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztpQkFISkw7O1lBTW5CTSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVKLFlBQVksRUFBRUMsYUFBYSxFQUFFSSxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFO2dCQUN6RSxJQUFJQyxvQ0FBb0MsSUFBSTtnQkFFNUMsSUFBSUEsbUNBQW1DO29CQUNyQyxJQUFNQyxzQkFBc0JK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