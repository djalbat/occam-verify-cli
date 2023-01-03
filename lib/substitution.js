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
var _node = require("./utilities/node");
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
                var nodesA = this.nodes, nodesB = nodes, metaSubstitutionNodesMatch = (0, _node.matchNodes)(nodesA, nodesB);
                matches = metaSubstitutionNodesMatch; ///
                if (!matches) {
                    var childNodes = nodes, bracketedChildNode = (0, _node.bracketedChildNodeFromChildNodes)(childNodes);
                    if (bracketedChildNode !== null) {
                        var nonTerminalNode = bracketedChildNode, childNodes1 = nonTerminalNode.getChildNodes(), nodesB1 = childNodes1, nodesMatch = (0, _node.matchNodes)(nodesA, nodesB1);
                        matches = nodesMatch; ///
                    }
                }
                return matches;
            }
        }
    ], [
        {
            key: "fromMetavariableNameAndNodes",
            value: function fromMetavariableNameAndNodes(variableName, nodes) {
                var bracketedChildNode = (0, _node.bracketedChildNodeFromChildNodes)(nodes);
                if (bracketedChildNode !== null) {
                    var nonTerminalNode = bracketedChildNode, childNodes = nonTerminalNode.getChildNodes();
                    nodes = childNodes; ///
                }
                var metaSubstitution = new Substitution(variableName, nodes);
                return metaSubstitution;
            }
        }
    ]);
    return Substitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1hdGNoTm9kZXMsIGJyYWNrZXRlZENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOYW1lLCBub2Rlcykge1xuICAgIHRoaXMudmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZU5hbWU7XG4gIH1cblxuICBnZXROb2RlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlcztcbiAgfVxuXG4gIG1hdGNoTm9kZXMobm9kZXMpIHtcbiAgICBsZXQgbWF0Y2hlcztcblxuICAgIGNvbnN0IG5vZGVzQSA9IHRoaXMubm9kZXMsICAvLy9cbiAgICAgICAgICBub2Rlc0IgPSBub2RlcyxcbiAgICAgICAgICBtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaCA9IG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpO1xuXG4gICAgbWF0Y2hlcyA9IG1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoOyAgLy8vXG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgICBicmFja2V0ZWRDaGlsZE5vZGUgPSBicmFja2V0ZWRDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcblxuICAgICAgaWYgKGJyYWNrZXRlZENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBicmFja2V0ZWRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIG5vZGVzQiA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgbWF0Y2hlcyA9IG5vZGVzTWF0Y2g7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOYW1lQW5kTm9kZXModmFyaWFibGVOYW1lLCBub2Rlcykge1xuICAgIGNvbnN0IGJyYWNrZXRlZENoaWxkTm9kZSA9IGJyYWNrZXRlZENoaWxkTm9kZUZyb21DaGlsZE5vZGVzKG5vZGVzKTtcblxuICAgIGlmIChicmFja2V0ZWRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGJyYWNrZXRlZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbiA9IG5ldyBTdWJzdGl0dXRpb24odmFyaWFibGVOYW1lLCBub2Rlcyk7XG5cbiAgICByZXR1cm4gbWV0YVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb24iLCJ2YXJpYWJsZU5hbWUiLCJub2RlcyIsImdldFZhcmlhYmxlTmFtZSIsImdldE5vZGVzIiwibWF0Y2hOb2RlcyIsIm1hdGNoZXMiLCJub2Rlc0EiLCJub2Rlc0IiLCJtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsImNoaWxkTm9kZXMiLCJicmFja2V0ZWRDaGlsZE5vZGUiLCJicmFja2V0ZWRDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImdldENoaWxkTm9kZXMiLCJub2Rlc01hdGNoIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmROb2RlcyIsIm1ldGFTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O29CQUZ3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxZQUFZLEVBQUVDLEtBQUs7OEJBRFpGO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLEtBQUssR0FBR0E7O2lCQUhJRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0gsS0FBSyxFQUFFO2dCQUNoQixJQUFJSTtnQkFFSixJQUFNQyxTQUFTLElBQUksQ0FBQ0wsS0FBSyxFQUNuQk0sU0FBU04sT0FDVE8sNkJBQTZCSixJQUFBQSxnQkFBVSxFQUFDRSxRQUFRQztnQkFFdERGLFVBQVVHLDRCQUE2QixHQUFHO2dCQUUxQyxJQUFJLENBQUNILFNBQVM7b0JBQ1osSUFBTUksYUFBYVIsT0FDYlMscUJBQXFCQyxJQUFBQSxzQ0FBZ0MsRUFBQ0Y7b0JBRTVELElBQUlDLHVCQUF1QixJQUFJLEVBQUU7d0JBQy9CLElBQU1FLGtCQUFrQkYsb0JBQ2xCRCxjQUFhRyxnQkFBZ0JDLGFBQWEsSUFDMUNOLFVBQVNFLGFBQ1RLLGFBQWFWLElBQUFBLGdCQUFVLEVBQUNFLFFBQVFDO3dCQUV0Q0YsVUFBVVMsWUFBWSxHQUFHO29CQUMzQixDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT1Q7WUFDVDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJmLFlBQVksRUFBRUMsS0FBSyxFQUFFO2dCQUN2RCxJQUFNUyxxQkFBcUJDLElBQUFBLHNDQUFnQyxFQUFDVjtnQkFFNUQsSUFBSVMsdUJBQXVCLElBQUksRUFBRTtvQkFDL0IsSUFBTUUsa0JBQWtCRixvQkFDbEJELGFBQWFHLGdCQUFnQkMsYUFBYTtvQkFFaERaLFFBQVFRLFlBQVksR0FBRztnQkFDekIsQ0FBQztnQkFFRCxJQUFNTyxtQkFBbUIsSUFsRFJqQixhQWtEeUJDLGNBQWNDO2dCQUV4RCxPQUFPZTtZQUNUOzs7V0FyRG1CakIifQ==