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
                var nodesA = this.nodes, nodesB = nodes, nodesMatch = (0, _node.matchNodes)(nodesA, nodesB);
                matches = nodesMatch; ///
                if (!matches) {
                    var childNodes = nodes, bracketedChildNode = (0, _node.bracketedChildNodeFromChildNodes)(childNodes);
                    if (bracketedChildNode !== null) {
                        var nonTerminalNode = bracketedChildNode, childNodes1 = nonTerminalNode.getChildNodes(), nodesB1 = childNodes1, nodesMatch1 = (0, _node.matchNodes)(nodesA, nodesB1);
                        matches = nodesMatch1; ///
                    }
                }
                return matches;
            }
        }
    ], [
        {
            key: "fromMetavariableNameAndNodes",
            value: function fromMetavariableNameAndNodes(metavariableName, nodes) {
                var bracketedChildNode = (0, _node.bracketedChildNodeFromChildNodes)(nodes);
                if (bracketedChildNode !== null) {
                    var nonTerminalNode = bracketedChildNode, childNodes = nonTerminalNode.getChildNodes();
                    nodes = childNodes; ///
                }
                var metaSubstitution = new MetaSubstitution(metavariableName, nodes);
                return metaSubstitution;
            }
        }
    ]);
    return MetaSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhU3Vic3RpdHV0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtYXRjaE5vZGVzLCBicmFja2V0ZWRDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOYW1lLCBub2Rlcykge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWU7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gIH1cblxuICBtYXRjaE5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IG1hdGNoZXM7XG5cbiAgICBjb25zdCBub2Rlc0EgPSB0aGlzLm5vZGVzLCAgLy8vXG4gICAgICAgICAgbm9kZXNCID0gbm9kZXMsXG4gICAgICAgICAgbm9kZXNNYXRjaCA9IG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpO1xuXG4gICAgbWF0Y2hlcyA9IG5vZGVzTWF0Y2g7ICAvLy9cblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGVzLCAvLy9cbiAgICAgICAgICAgIGJyYWNrZXRlZENoaWxkTm9kZSA9IGJyYWNrZXRlZENoaWxkTm9kZUZyb21DaGlsZE5vZGVzKGNoaWxkTm9kZXMpO1xuXG4gICAgICBpZiAoYnJhY2tldGVkQ2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGJyYWNrZXRlZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgbm9kZXNCID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIG5vZGVzTWF0Y2ggPSBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKTtcblxuICAgICAgICBtYXRjaGVzID0gbm9kZXNNYXRjaDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmROb2RlcyhtZXRhdmFyaWFibGVOYW1lLCBub2Rlcykge1xuICAgIGNvbnN0IGJyYWNrZXRlZENoaWxkTm9kZSA9IGJyYWNrZXRlZENoaWxkTm9kZUZyb21DaGlsZE5vZGVzKG5vZGVzKTtcblxuICAgIGlmIChicmFja2V0ZWRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IGJyYWNrZXRlZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgICAgIG5vZGVzID0gY2hpbGROb2RlczsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbiA9IG5ldyBNZXRhU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIG5vZGVzKTtcblxuICAgIHJldHVybiBtZXRhU3Vic3RpdHV0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk1ldGFTdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGVOYW1lIiwibm9kZXMiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZ2V0Tm9kZXMiLCJtYXRjaE5vZGVzIiwibWF0Y2hlcyIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJjaGlsZE5vZGVzIiwiYnJhY2tldGVkQ2hpbGROb2RlIiwiYnJhY2tldGVkQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmROb2RlcyIsIm1ldGFTdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O29CQUZ3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBQSxBQUFNQSxpQ0FBTjthQUFNQSxpQkFDUEMsZ0JBQWdCLEVBQUVDLEtBQUs7OEJBRGhCRjtRQUVqQixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtRQUN4QixJQUFJLENBQUNDLEtBQUssR0FBR0E7O2lCQUhJRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0I7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7WUFDOUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXSCxLQUFLLEVBQUU7Z0JBQ2hCLElBQUlJO2dCQUVKLElBQU1DLFNBQVMsSUFBSSxDQUFDTCxLQUFLLEVBQ25CTSxTQUFTTixPQUNUTyxhQUFhSixJQUFBQSxnQkFBVSxFQUFDRSxRQUFRQztnQkFFdENGLFVBQVVHLFlBQWEsR0FBRztnQkFFMUIsSUFBSSxDQUFDSCxTQUFTO29CQUNaLElBQU1JLGFBQWFSLE9BQ2JTLHFCQUFxQkMsSUFBQUEsc0NBQWdDLEVBQUNGO29CQUU1RCxJQUFJQyx1QkFBdUIsSUFBSSxFQUFFO3dCQUMvQixJQUFNRSxrQkFBa0JGLG9CQUNsQkQsY0FBYUcsZ0JBQWdCQyxhQUFhLElBQzFDTixVQUFTRSxhQUNURCxjQUFhSixJQUFBQSxnQkFBVSxFQUFDRSxRQUFRQzt3QkFFdENGLFVBQVVHLGFBQVksR0FBRztvQkFDM0IsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9IO1lBQ1Q7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCZCxnQkFBZ0IsRUFBRUMsS0FBSyxFQUFFO2dCQUMzRCxJQUFNUyxxQkFBcUJDLElBQUFBLHNDQUFnQyxFQUFDVjtnQkFFNUQsSUFBSVMsdUJBQXVCLElBQUksRUFBRTtvQkFDL0IsSUFBTUUsa0JBQWtCRixvQkFDbEJELGFBQWFHLGdCQUFnQkMsYUFBYTtvQkFFaERaLFFBQVFRLFlBQVksR0FBRztnQkFDekIsQ0FBQztnQkFFRCxJQUFNTSxtQkFBbUIsSUFsRFJoQixpQkFrRDZCQyxrQkFBa0JDO2dCQUVoRSxPQUFPYztZQUNUOzs7V0FyRG1CaEIifQ==