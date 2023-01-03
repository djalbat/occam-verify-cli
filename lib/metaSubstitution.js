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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhU3Vic3RpdHV0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBtYXRjaE5vZGVzLCBicmFja2V0ZWRDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhdmFyaWFibGVOYW1lLCBub2Rlcykge1xuICAgIHRoaXMubWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWU7XG4gICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgZ2V0Tm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZXM7XG4gIH1cblxuICBtYXRjaE5vZGVzKG5vZGVzKSB7XG4gICAgbGV0IG1hdGNoZXM7XG5cbiAgICBjb25zdCBub2Rlc0EgPSB0aGlzLm5vZGVzLCAgLy8vXG4gICAgICAgICAgbm9kZXNCID0gbm9kZXMsXG4gICAgICAgICAgbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKTtcblxuICAgIG1hdGNoZXMgPSBtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaDsgIC8vL1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9kZXMsIC8vL1xuICAgICAgICAgICAgYnJhY2tldGVkQ2hpbGROb2RlID0gYnJhY2tldGVkQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMoY2hpbGROb2Rlcyk7XG5cbiAgICAgIGlmIChicmFja2V0ZWRDaGlsZE5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gYnJhY2tldGVkQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBub2Rlc0IgPSBjaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgbm9kZXNNYXRjaCA9IG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpO1xuXG4gICAgICAgIG1hdGNoZXMgPSBub2Rlc01hdGNoOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE5vZGVzKG1ldGF2YXJpYWJsZU5hbWUsIG5vZGVzKSB7XG4gICAgY29uc3QgYnJhY2tldGVkQ2hpbGROb2RlID0gYnJhY2tldGVkQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMobm9kZXMpO1xuXG4gICAgaWYgKGJyYWNrZXRlZENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gYnJhY2tldGVkQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICAgICAgbm9kZXMgPSBjaGlsZE5vZGVzOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBtZXRhU3Vic3RpdHV0aW9uID0gbmV3IE1ldGFTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgbm9kZXMpO1xuXG4gICAgcmV0dXJuIG1ldGFTdWJzdGl0dXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YVN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5hbWUiLCJub2RlcyIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXROb2RlcyIsIm1hdGNoTm9kZXMiLCJtYXRjaGVzIiwibm9kZXNBIiwibm9kZXNCIiwibWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2giLCJjaGlsZE5vZGVzIiwiYnJhY2tldGVkQ2hpbGROb2RlIiwiYnJhY2tldGVkQ2hpbGROb2RlRnJvbUNoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGUiLCJnZXRDaGlsZE5vZGVzIiwibm9kZXNNYXRjaCIsImZyb21NZXRhdmFyaWFibGVOYW1lQW5kTm9kZXMiLCJtZXRhU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztvQkFGd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQUEsQUFBTUEsaUNBQU47YUFBTUEsaUJBQ1BDLGdCQUFnQixFQUFFQyxLQUFLOzhCQURoQkY7UUFFakIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztpQkFISUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCO2dCQUNwQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0gsS0FBSyxFQUFFO2dCQUNoQixJQUFJSTtnQkFFSixJQUFNQyxTQUFTLElBQUksQ0FBQ0wsS0FBSyxFQUNuQk0sU0FBU04sT0FDVE8sNkJBQTZCSixJQUFBQSxnQkFBVSxFQUFDRSxRQUFRQztnQkFFdERGLFVBQVVHLDRCQUE2QixHQUFHO2dCQUUxQyxJQUFJLENBQUNILFNBQVM7b0JBQ1osSUFBTUksYUFBYVIsT0FDYlMscUJBQXFCQyxJQUFBQSxzQ0FBZ0MsRUFBQ0Y7b0JBRTVELElBQUlDLHVCQUF1QixJQUFJLEVBQUU7d0JBQy9CLElBQU1FLGtCQUFrQkYsb0JBQ2xCRCxjQUFhRyxnQkFBZ0JDLGFBQWEsSUFDMUNOLFVBQVNFLGFBQ1RLLGFBQWFWLElBQUFBLGdCQUFVLEVBQUNFLFFBQVFDO3dCQUV0Q0YsVUFBVVMsWUFBWSxHQUFHO29CQUMzQixDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT1Q7WUFDVDs7OztZQUVPVSxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJmLGdCQUFnQixFQUFFQyxLQUFLLEVBQUU7Z0JBQzNELElBQU1TLHFCQUFxQkMsSUFBQUEsc0NBQWdDLEVBQUNWO2dCQUU1RCxJQUFJUyx1QkFBdUIsSUFBSSxFQUFFO29CQUMvQixJQUFNRSxrQkFBa0JGLG9CQUNsQkQsYUFBYUcsZ0JBQWdCQyxhQUFhO29CQUVoRFosUUFBUVEsWUFBWSxHQUFHO2dCQUN6QixDQUFDO2dCQUVELElBQU1PLG1CQUFtQixJQWxEUmpCLGlCQWtENkJDLGtCQUFrQkM7Z0JBRWhFLE9BQU9lO1lBQ1Q7OztXQXJEbUJqQiJ9