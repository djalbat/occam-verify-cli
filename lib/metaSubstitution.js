"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaSubstitution;
    }
});
var _metastatement = require("./utilities/metastatement");
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
var MetaSubstitution = /*#__PURE__*/ function() {
    function MetaSubstitution(metavariableName, nodes) {
        _classCallCheck(this, MetaSubstitution);
        this.metavariableName = metavariableName;
        this.nodes = nodes;
    }
    _createClass(MetaSubstitution, [
        {
            key: "getMetavariableName",
            value: function getMetavariableName() {
                return this.metavariableName;
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
                var metaSubstitutionNodes = this.nodes, metaSubstitutionNonTerminalNodeMatches = matchMetaSubstitutionNodes(metaSubstitutionNodes, nodes);
                matches = metaSubstitutionNonTerminalNodeMatches; ///
                if (!matches) {
                    var childNodes = nodes, bracketedMetastatementChildNodeMatches = (0, _metastatement.matchBracketedMetastatementChildNode)(childNodes, function(bracketedMetastatementChildNode) {
                        var nonTerminalNode = bracketedMetastatementChildNode, childNodes = nonTerminalNode.getChildNodes(), _$nodes = childNodes, metaAssertionNonTerminalNodeMatches = matchMetaSubstitutionNodes(metaSubstitutionNodes, _$nodes), bracketedMetastatementChildNodeMatches = metaAssertionNonTerminalNodeMatches; ///
                        return bracketedMetastatementChildNodeMatches;
                    });
                    matches = bracketedMetastatementChildNodeMatches; ///
                }
                return matches;
            }
        }
    ], [
        {
            key: "fromMetavariableNameAndNodes",
            value: function fromMetavariableNameAndNodes(metavariableName, nodes) {
                var bracketedMetastatementChildNode = (0, _metastatement.bracketedMetastatementChildNodeFromChildNodes)(nodes);
                if (bracketedMetastatementChildNode !== null) {
                    var nonTerminalNode = bracketedMetastatementChildNode, childNodes = nonTerminalNode.getChildNodes();
                    nodes = childNodes; ///
                }
                var metaSubstitution = new MetaSubstitution(metavariableName, nodes);
                return metaSubstitution;
            }
        }
    ]);
    return MetaSubstitution;
}();
function matchMetaSubstitutionNode(metaSubstitutionNode, node) {
    var metaSubstitutionNodeMatches = false;
    var nodeTerminalNode = node.isTerminalNode(), ruleNodeTerminalNode = metaSubstitutionNode.isTerminalNode();
    if (nodeTerminalNode === ruleNodeTerminalNode) {
        if (nodeTerminalNode) {
            var terminalNode = node, metaSubstitutionTerminalNode = metaSubstitutionNode, metaSubstitutionTerminalNodeMatches = matchMetaSubstitutionTerminalNode(metaSubstitutionTerminalNode, terminalNode);
            metaSubstitutionNodeMatches = metaSubstitutionTerminalNodeMatches; ///
        } else {
            var nonTerminalNode = node, metaSubstitutionNonTerminalNode = metaSubstitutionNode, metaSubstitutionNonTerminalNodeMatches = matchMetaSubstitutionNonTerminalNode(metaSubstitutionNonTerminalNode, nonTerminalNode);
            metaSubstitutionNodeMatches = metaSubstitutionNonTerminalNodeMatches; ///
        }
    }
    return metaSubstitutionNodeMatches;
}
function matchMetaSubstitutionNodes(metaSubstitutionNodes, nodes) {
    var metaSubstitutionNodesMatches = false;
    var nodesLength = nodes.length, metaSubstitutionNodesLength = metaSubstitutionNodes.length;
    if (nodesLength === metaSubstitutionNodesLength) {
        metaSubstitutionNodesMatches = nodes.every(function(node, index) {
            var metaSubstitutionNode = metaSubstitutionNodes[index], metaSubstitutionNodeMatches = matchMetaSubstitutionNode(metaSubstitutionNode, node);
            if (metaSubstitutionNodeMatches) {
                return true;
            }
        });
    }
    return metaSubstitutionNodesMatches;
}
function matchMetaSubstitutionTerminalNode(metaSubstitutionTerminalNode, terminalNode) {
    var matches = metaSubstitutionTerminalNode.match(terminalNode), metaSubstitutionTerminalNodeMatches = matches; ///
    return metaSubstitutionTerminalNodeMatches;
}
function matchMetaSubstitutionNonTerminalNode(metaSubstitutionNonTerminalNode, nonTerminalNode) {
    var metaSubstitutionNonTerminalNodeMatches = false;
    var ruleName = nonTerminalNode.getRuleName(), metaSubstitutionRuleName = metaSubstitutionNonTerminalNode.getRuleName(); ///
    if (ruleName === metaSubstitutionRuleName) {
        var childNodes = nonTerminalNode.getChildNodes(), metaSubstitutionChildNodes = metaSubstitutionNonTerminalNode.getChildNodes(), nodes = childNodes, metaSubstitutionNodes = metaSubstitutionChildNodes, metaSubstitutionNodesMatches = matchMetaSubstitutionNodes(metaSubstitutionNodes, nodes);
        metaSubstitutionNonTerminalNodeMatches = metaSubstitutionNodesMatches; ///
    }
    return metaSubstitutionNonTerminalNodeMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhU3Vic3RpdHV0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtYXRjaEJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUsIGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9tZXRhc3RhdGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOYW1lLCBub2Rlcykge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWU7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gIH1cblxuICBtYXRjaE5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IG1hdGNoZXM7XG5cbiAgICBjb25zdCBtZXRhU3Vic3RpdHV0aW9uTm9kZXMgPSB0aGlzLm5vZGVzLCAgLy8vXG4gICAgICAgICAgbWV0YVN1YnN0aXR1dGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaE1ldGFTdWJzdGl0dXRpb25Ob2RlcyhtZXRhU3Vic3RpdHV0aW9uTm9kZXMsIG5vZGVzKTtcblxuICAgIG1hdGNoZXMgPSBtZXRhU3Vic3RpdHV0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZU1hdGNoZXMgPSBtYXRjaEJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUoY2hpbGROb2RlcywgKGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgbWV0YUFzc2VydGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaE1ldGFTdWJzdGl0dXRpb25Ob2RlcyhtZXRhU3Vic3RpdHV0aW9uTm9kZXMsIG5vZGVzKSxcbiAgICAgICAgICAgICAgICAgICAgYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZU1hdGNoZXMgPSBtZXRhQXNzZXJ0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGVNYXRjaGVzO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIG1hdGNoZXMgPSBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlTWF0Y2hlczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmROb2RlcyhtZXRhdmFyaWFibGVOYW1lLCBub2Rlcykge1xuICAgIGNvbnN0IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgPSBicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlRnJvbUNoaWxkTm9kZXMobm9kZXMpO1xuXG4gICAgaWYgKGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBub2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG1ldGFTdWJzdGl0dXRpb24gPSBuZXcgTWV0YVN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBub2Rlcyk7XG5cbiAgICByZXR1cm4gbWV0YVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFTdWJzdGl0dXRpb25Ob2RlKG1ldGFTdWJzdGl0dXRpb25Ob2RlLCBub2RlKSB7XG4gIGxldCBtZXRhU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpLFxuICAgICAgICBydWxlTm9kZVRlcm1pbmFsTm9kZSA9IG1ldGFTdWJzdGl0dXRpb25Ob2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVUZXJtaW5hbE5vZGUgPT09IHJ1bGVOb2RlVGVybWluYWxOb2RlKSB7XG4gICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb25UZXJtaW5hbE5vZGUgPSBtZXRhU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YVN1YnN0aXR1dGlvblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaE1ldGFTdWJzdGl0dXRpb25UZXJtaW5hbE5vZGUobWV0YVN1YnN0aXR1dGlvblRlcm1pbmFsTm9kZSwgdGVybWluYWxOb2RlKTtcblxuICAgICAgbWV0YVN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gbWV0YVN1YnN0aXR1dGlvblRlcm1pbmFsTm9kZU1hdGNoZXM7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICBtZXRhU3Vic3RpdHV0aW9uTm9uVGVybWluYWxOb2RlID0gbWV0YVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWF0Y2hNZXRhU3Vic3RpdHV0aW9uTm9uVGVybWluYWxOb2RlKG1ldGFTdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICAgIG1ldGFTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IG1ldGFTdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWV0YVN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFTdWJzdGl0dXRpb25Ob2RlcyhtZXRhU3Vic3RpdHV0aW9uTm9kZXMsIG5vZGVzKSB7XG4gIGxldCBtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZXNMZW5ndGggPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgIG1ldGFTdWJzdGl0dXRpb25Ob2Rlc0xlbmd0aCA9IG1ldGFTdWJzdGl0dXRpb25Ob2Rlcy5sZW5ndGg7XG5cbiAgaWYgKG5vZGVzTGVuZ3RoID09PSBtZXRhU3Vic3RpdHV0aW9uTm9kZXNMZW5ndGgpIHtcbiAgICBtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaGVzID0gbm9kZXMuZXZlcnkoKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBtZXRhU3Vic3RpdHV0aW9uTm9kZSA9IG1ldGFTdWJzdGl0dXRpb25Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgICBtZXRhU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBtYXRjaE1ldGFTdWJzdGl0dXRpb25Ob2RlKG1ldGFTdWJzdGl0dXRpb25Ob2RlLCBub2RlKTtcblxuICAgICAgaWYgKG1ldGFTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIG1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTWV0YVN1YnN0aXR1dGlvblRlcm1pbmFsTm9kZShtZXRhU3Vic3RpdHV0aW9uVGVybWluYWxOb2RlLCB0ZXJtaW5hbE5vZGUpIHtcbiAgY29uc3QgbWF0Y2hlcyA9IG1ldGFTdWJzdGl0dXRpb25UZXJtaW5hbE5vZGUubWF0Y2godGVybWluYWxOb2RlKSxcbiAgICAgICAgbWV0YVN1YnN0aXR1dGlvblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBtYXRjaGVzOyAgLy8vXG5cbiAgcmV0dXJuIG1ldGFTdWJzdGl0dXRpb25UZXJtaW5hbE5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE1ldGFTdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGUobWV0YVN1YnN0aXR1dGlvbk5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlKSB7XG4gIGxldCBtZXRhU3Vic3RpdHV0aW9uTm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgIG1ldGFTdWJzdGl0dXRpb25SdWxlTmFtZSA9IG1ldGFTdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTsgLy8vXG5cbiAgaWYgKHJ1bGVOYW1lID09PSBtZXRhU3Vic3RpdHV0aW9uUnVsZU5hbWUpIHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBtZXRhU3Vic3RpdHV0aW9uQ2hpbGROb2RlcyA9IG1ldGFTdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIG5vZGVzID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgbWV0YVN1YnN0aXR1dGlvbk5vZGVzID0gbWV0YVN1YnN0aXR1dGlvbkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoZXMgPSBtYXRjaE1ldGFTdWJzdGl0dXRpb25Ob2RlcyhtZXRhU3Vic3RpdHV0aW9uTm9kZXMsIG5vZGVzKTtcblxuICAgIG1ldGFTdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGVNYXRjaGVzID0gbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2hlczsgLy8vXG4gIH1cblxuICByZXR1cm4gbWV0YVN1YnN0aXR1dGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiTWV0YVN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5hbWUiLCJub2RlcyIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXROb2RlcyIsIm1hdGNoTm9kZXMiLCJtYXRjaGVzIiwibWV0YVN1YnN0aXR1dGlvbk5vZGVzIiwibWV0YVN1YnN0aXR1dGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGFTdWJzdGl0dXRpb25Ob2RlcyIsImNoaWxkTm9kZXMiLCJicmFja2V0ZWRNZXRhc3RhdGVtZW50Q2hpbGROb2RlTWF0Y2hlcyIsIm1hdGNoQnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZSIsImJyYWNrZXRlZE1ldGFzdGF0ZW1lbnRDaGlsZE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwibWV0YUFzc2VydGlvbk5vblRlcm1pbmFsTm9kZU1hdGNoZXMiLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE5vZGVzIiwiYnJhY2tldGVkTWV0YXN0YXRlbWVudENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIiwibWV0YVN1YnN0aXR1dGlvbiIsIm1hdGNoTWV0YVN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhU3Vic3RpdHV0aW9uTm9kZSIsIm5vZGUiLCJtZXRhU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJydWxlTm9kZVRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsIm1ldGFTdWJzdGl0dXRpb25UZXJtaW5hbE5vZGUiLCJtZXRhU3Vic3RpdHV0aW9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YVN1YnN0aXR1dGlvblRlcm1pbmFsTm9kZSIsIm1ldGFTdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGUiLCJtYXRjaE1ldGFTdWJzdGl0dXRpb25Ob25UZXJtaW5hbE5vZGUiLCJtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaGVzIiwibm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhU3Vic3RpdHV0aW9uTm9kZXNMZW5ndGgiLCJldmVyeSIsImluZGV4IiwibWF0Y2giLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibWV0YVN1YnN0aXR1dGlvblJ1bGVOYW1lIiwibWV0YVN1YnN0aXR1dGlvbkNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzZCQUYrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckYsSUFBQSxBQUFNQSxpQ0F3RGxCLEFBeERZO2FBQU1BLGlCQUNQQyxnQkFBZ0IsRUFBRUMsS0FBSzs4QkFEaEJGO1FBRWpCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7aUJBSElGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQjtnQkFDcEIsT0FBTyxJQUFJLENBQUNGLGdCQUFnQjtZQUM5Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdILEtBQUssRUFBRTtnQkFDaEIsSUFBSUk7Z0JBRUos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