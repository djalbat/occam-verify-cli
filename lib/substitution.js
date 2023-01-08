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
    function Substitution(metavariableName, nodes) {
        _classCallCheck(this, Substitution);
        this.metavariableName = metavariableName;
        this.nodes = nodes;
    }
    _createClass(Substitution, [
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
                var metaSubstitution = new Substitution(metavariableName, nodes);
                return metaSubstitution;
            }
        }
    ]);
    return Substitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1hdGNoTm9kZXMsIGJyYWNrZXRlZENoaWxkTm9kZUZyb21DaGlsZE5vZGVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXZhcmlhYmxlTmFtZSwgbm9kZXMpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lO1xuICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgbWF0Y2hOb2Rlcyhub2Rlcykge1xuICAgIGxldCBtYXRjaGVzO1xuXG4gICAgY29uc3Qgbm9kZXNBID0gdGhpcy5ub2RlcywgIC8vL1xuICAgICAgICAgIG5vZGVzQiA9IG5vZGVzLFxuICAgICAgICAgIG5vZGVzTWF0Y2ggPSBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKTtcblxuICAgIG1hdGNoZXMgPSBub2Rlc01hdGNoOyAgLy8vXG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub2RlcywgLy8vXG4gICAgICAgICAgICBicmFja2V0ZWRDaGlsZE5vZGUgPSBicmFja2V0ZWRDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyhjaGlsZE5vZGVzKTtcblxuICAgICAgaWYgKGJyYWNrZXRlZENoaWxkTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBicmFja2V0ZWRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIG5vZGVzQiA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc01hdGNoID0gbWF0Y2hOb2Rlcyhub2Rlc0EsIG5vZGVzQik7XG5cbiAgICAgICAgbWF0Y2hlcyA9IG5vZGVzTWF0Y2g7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVOYW1lQW5kTm9kZXMobWV0YXZhcmlhYmxlTmFtZSwgbm9kZXMpIHtcbiAgICBjb25zdCBicmFja2V0ZWRDaGlsZE5vZGUgPSBicmFja2V0ZWRDaGlsZE5vZGVGcm9tQ2hpbGROb2Rlcyhub2Rlcyk7XG5cbiAgICBpZiAoYnJhY2tldGVkQ2hpbGROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBicmFja2V0ZWRDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gICAgICBub2RlcyA9IGNoaWxkTm9kZXM7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG1ldGFTdWJzdGl0dXRpb24gPSBuZXcgU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIG5vZGVzKTtcblxuICAgIHJldHVybiBtZXRhU3Vic3RpdHV0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZU5hbWUiLCJub2RlcyIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJnZXROb2RlcyIsIm1hdGNoTm9kZXMiLCJtYXRjaGVzIiwibm9kZXNBIiwibm9kZXNCIiwibm9kZXNNYXRjaCIsImNoaWxkTm9kZXMiLCJicmFja2V0ZWRDaGlsZE5vZGUiLCJicmFja2V0ZWRDaGlsZE5vZGVGcm9tQ2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZSIsImdldENoaWxkTm9kZXMiLCJmcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE5vZGVzIiwibWV0YVN1YnN0aXR1dGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7b0JBRndDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFBLEFBQU1BLDZCQUFOO2FBQU1BLGFBQ1BDLGdCQUFnQixFQUFFQyxLQUFLOzhCQURoQkY7UUFFakIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7UUFDeEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztpQkFISUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCO2dCQUNwQixPQUFPLElBQUksQ0FBQ0YsZ0JBQWdCO1lBQzlCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0gsS0FBSyxFQUFFO2dCQUNoQixJQUFJSTtnQkFFSixJQUFNQyxTQUFTLElBQUksQ0FBQ0wsS0FBSyxFQUNuQk0sU0FBU04sT0FDVE8sYUFBYUosSUFBQUEsZ0JBQVUsRUFBQ0UsUUFBUUM7Z0JBRXRDRixVQUFVRyxZQUFhLEdBQUc7Z0JBRTFCLElBQUksQ0FBQ0gsU0FBUztvQkFDWixJQUFNSSxhQUFhUixPQUNiUyxxQkFBcUJDLElBQUFBLHNDQUFnQyxFQUFDRjtvQkFFNUQsSUFBSUMsdUJBQXVCLElBQUksRUFBRTt3QkFDL0IsSUFBTUUsa0JBQWtCRixvQkFDbEJELGNBQWFHLGdCQUFnQkMsYUFBYSxJQUMxQ04sVUFBU0UsYUFDVEQsY0FBYUosSUFBQUEsZ0JBQVUsRUFBQ0UsUUFBUUM7d0JBRXRDRixVQUFVRyxhQUFZLEdBQUc7b0JBQzNCLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPSDtZQUNUOzs7O1lBRU9TLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QmQsZ0JBQWdCLEVBQUVDLEtBQUssRUFBRTtnQkFDM0QsSUFBTVMscUJBQXFCQyxJQUFBQSxzQ0FBZ0MsRUFBQ1Y7Z0JBRTVELElBQUlTLHVCQUF1QixJQUFJLEVBQUU7b0JBQy9CLElBQU1FLGtCQUFrQkYsb0JBQ2xCRCxhQUFhRyxnQkFBZ0JDLGFBQWE7b0JBRWhEWixRQUFRUSxZQUFZLEdBQUc7Z0JBQ3pCLENBQUM7Z0JBRUQsSUFBTU0sbUJBQW1CLElBbERSaEIsYUFrRHlCQyxrQkFBa0JDO2dCQUU1RCxPQUFPYztZQUNUOzs7V0FyRG1CaEIifQ==