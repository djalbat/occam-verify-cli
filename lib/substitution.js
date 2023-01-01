"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Substitution;
    }
});
var _statement = require("./utilities/statement");
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
var Substitution = /*#__PURE__*/ function() {
    function Substitution(variableName, nodes) {
        _classCallCheck(this, Substitution);
        this.variableName = variableName;
        this.nodes = nodes;
    }
    _createClass(Substitution, [
        {
            key: "getVariableName",
            value: function getVariableName() {
                return this.variableName;
            }
        },
        {
            key: "getNodes",
            value: function getNodes() {
                return this.nodes;
            }
        },
        {
            key: "matchNodes",
            value: function matchNodes(nodes) {
                var matches;
                var substitutionNodes = this.nodes, substitutionNonTerminalNodeMatches = matchSubstitutionNodes(substitutionNodes, nodes);
                matches = substitutionNonTerminalNodeMatches; ///
                if (!matches) {
                    var childNodes = nodes, bracketedStatementChildNodeMatches = (0, _statement.matchBracketedStatementChildNode)(childNodes, function(bracketedStatementChildNode) {
                        var nonTerminalNode = bracketedStatementChildNode, childNodes = nonTerminalNode.getChildNodes(), _$nodes = childNodes, assertionNonTerminalNodeMatches = matchSubstitutionNodes(substitutionNodes, _$nodes), bracketedStatementChildNodeMatches = assertionNonTerminalNodeMatches; ///
                        return bracketedStatementChildNodeMatches;
                    });
                    matches = bracketedStatementChildNodeMatches; ///
                }
                return matches;
            }
        }
    ], [
        {
            key: "fromVariableNameAndNodes",
            value: function fromVariableNameAndNodes(variableName, nodes) {
                var bracketedStatementChildNode = (0, _statement.bracketedStatementChildNodeFromChildNodes)(nodes);
                if (bracketedStatementChildNode !== null) {
                    var nonTerminalNode = bracketedStatementChildNode, childNodes = nonTerminalNode.getChildNodes();
                    nodes = childNodes; ///
                }
                var substitution = new Substitution(variableName, nodes);
                return substitution;
            }
        }
    ]);
    return Substitution;
}();
function matchSubstitutionNode(substitutionNode, node) {
    var substitutionNodeMatches = false;
    var nodeTerminalNode = node.isTerminalNode(), ruleNodeTerminalNode = substitutionNode.isTerminalNode();
    if (nodeTerminalNode === ruleNodeTerminalNode) {
        if (nodeTerminalNode) {
            var terminalNode = node, substitutionTerminalNode = substitutionNode, substitutionTerminalNodeMatches = matchSubstitutionTerminalNode(substitutionTerminalNode, terminalNode);
            substitutionNodeMatches = substitutionTerminalNodeMatches; ///
        } else {
            var nonTerminalNode = node, substitutionNonTerminalNode = substitutionNode, substitutionNonTerminalNodeMatches = matchSubstitutionNonTerminalNode(substitutionNonTerminalNode, nonTerminalNode);
            substitutionNodeMatches = substitutionNonTerminalNodeMatches; ///
        }
    }
    return substitutionNodeMatches;
}
function matchSubstitutionNodes(substitutionNodes, nodes) {
    var substitutionNodesMatches = false;
    var nodesLength = nodes.length, substitutionNodesLength = substitutionNodes.length;
    if (nodesLength === substitutionNodesLength) {
        substitutionNodesMatches = nodes.every(function(node, index) {
            var substitutionNode = substitutionNodes[index], substitutionNodeMatches = matchSubstitutionNode(substitutionNode, node);
            if (substitutionNodeMatches) {
                return true;
            }
        });
    }
    return substitutionNodesMatches;
}
function matchSubstitutionTerminalNode(substitutionTerminalNode, terminalNode) {
    var matches = substitutionTerminalNode.match(terminalNode), substitutionTerminalNodeMatches = matches; ///
    return substitutionTerminalNodeMatches;
}
function matchSubstitutionNonTerminalNode(substitutionNonTerminalNode, nonTerminalNode) {
    var substitutionNonTerminalNodeMatches = false;
    var ruleName = nonTerminalNode.getRuleName(), substitutionRuleName = substitutionNonTerminalNode.getRuleName(); ///
    if (ruleName === substitutionRuleName) {
        var childNodes = nonTerminalNode.getChildNodes(), substitutionChildNodes = substitutionNonTerminalNode.getChildNodes(), nodes = childNodes, substitutionNodes = substitutionChildNodes, substitutionNodesMatches = matchSubstitutionNodes(substitutionNodes, nodes);
        substitutionNonTerminalNodeMatches = substitutionNodesMatches; ///
    }
    return substitutionNonTerminalNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1hdGNoQnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlLCBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdGF0ZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOYW1lLCBub2Rlcykge1xuICAgIHRoaXMudmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgfVxuXG4gIG1hdGNoTm9kZXMobm9kZXMpIHtcbiAgICBsZXQgbWF0Y2hlcztcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVzID0gdGhpcy5ub2RlcywgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaFN1YnN0aXR1dGlvbk5vZGVzKHN1YnN0aXR1dGlvbk5vZGVzLCBub2Rlcyk7XG5cbiAgICBtYXRjaGVzID0gc3Vic3RpdHV0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlTWF0Y2hlcyA9IG1hdGNoQnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlKGNoaWxkTm9kZXMsIChicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hTdWJzdGl0dXRpb25Ob2RlcyhzdWJzdGl0dXRpb25Ob2Rlcywgbm9kZXMpLFxuICAgICAgICAgICAgICAgICAgICBicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVNYXRjaGVzID0gYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZU1hdGNoZXM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgbWF0Y2hlcyA9IGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZU1hdGNoZXM7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5hbWVBbmROb2Rlcyh2YXJpYWJsZU5hbWUsIG5vZGVzKSB7XG4gICAgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlRnJvbUNoaWxkTm9kZXMobm9kZXMpO1xuXG4gICAgaWYgKGJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Q2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBuZXcgU3Vic3RpdHV0aW9uKHZhcmlhYmxlTmFtZSwgbm9kZXMpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSwgbm9kZSkge1xuICBsZXQgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBydWxlTm9kZVRlcm1pbmFsTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSA9PT0gcnVsZU5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybWluYWxOb2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoU3Vic3RpdHV0aW9uVGVybWluYWxOb2RlKHN1YnN0aXR1dGlvblRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlKTtcblxuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb25UZXJtaW5hbE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9uVGVybWluYWxOb2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoU3Vic3RpdHV0aW9uTm9uVGVybWluYWxOb2RlKHN1YnN0aXR1dGlvbk5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlKTtcblxuICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3Vic3RpdHV0aW9uTm9kZXMoc3Vic3RpdHV0aW9uTm9kZXMsIG5vZGVzKSB7XG4gIGxldCBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2Rlc0xlbmd0aCA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgc3Vic3RpdHV0aW9uTm9kZXNMZW5ndGggPSBzdWJzdGl0dXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSBzdWJzdGl0dXRpb25Ob2Rlc0xlbmd0aCkge1xuICAgIHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2hlcyA9IG5vZGVzLmV2ZXJ5KChub2RlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbk5vZGVzW2luZGV4XSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUsIG5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoU3Vic3RpdHV0aW9uVGVybWluYWxOb2RlKHN1YnN0aXR1dGlvblRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlKSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBzdWJzdGl0dXRpb25UZXJtaW5hbE5vZGUubWF0Y2godGVybWluYWxOb2RlKSxcbiAgICAgICAgc3Vic3RpdHV0aW9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IG1hdGNoZXM7ICAvLy9cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uVGVybWluYWxOb2RlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hTdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGUoc3Vic3RpdHV0aW9uTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUpIHtcbiAgbGV0IHN1YnN0aXR1dGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICBzdWJzdGl0dXRpb25SdWxlTmFtZSA9IHN1YnN0aXR1dGlvbk5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICBpZiAocnVsZU5hbWUgPT09IHN1YnN0aXR1dGlvblJ1bGVOYW1lKSB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQ2hpbGROb2RlcyA9IHN1YnN0aXR1dGlvbk5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlcyA9IHN1YnN0aXR1dGlvbkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2hlcyA9IG1hdGNoU3Vic3RpdHV0aW9uTm9kZXMoc3Vic3RpdHV0aW9uTm9kZXMsIG5vZGVzKTtcblxuICAgIHN1YnN0aXR1dGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoZXM7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwidmFyaWFibGVOYW1lIiwibm9kZXMiLCJnZXRWYXJpYWJsZU5hbWUiLCJnZXROb2RlcyIsIm1hdGNoTm9kZXMiLCJtYXRjaGVzIiwic3Vic3RpdHV0aW9uTm9kZXMiLCJzdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlcyIsImNoaWxkTm9kZXMiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGVNYXRjaGVzIiwibWF0Y2hCcmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUiLCJicmFja2V0ZWRTdGF0ZW1lbnRDaGlsZE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiYXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsImZyb21WYXJpYWJsZU5hbWVBbmROb2RlcyIsImJyYWNrZXRlZFN0YXRlbWVudENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIiwic3Vic3RpdHV0aW9uIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsIm5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInJ1bGVOb2RlVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwic3Vic3RpdHV0aW9uVGVybWluYWxOb2RlIiwic3Vic3RpdHV0aW9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uVGVybWluYWxOb2RlIiwic3Vic3RpdHV0aW9uTm9uVGVybWluYWxOb2RlIiwibWF0Y2hTdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGUiLCJzdWJzdGl0dXRpb25Ob2Rlc01hdGNoZXMiLCJub2Rlc0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbk5vZGVzTGVuZ3RoIiwiZXZlcnkiLCJpbmRleCIsIm1hdGNoIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIs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