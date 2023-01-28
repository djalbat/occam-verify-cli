"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Conclusion;
    }
});
var _string = require("./utilities/string");
var _node = require("./utilities/node");
var _conclusion = require("./matcher/statementForMetavariable/conclusion");
var _conclusion1 = require("./matcher/metastatementForMetavariable/conclusion");
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
var Conclusion = /*#__PURE__*/ function() {
    function Conclusion(metastatementNode) {
        _classCallCheck(this, Conclusion);
        this.metastatementNode = metastatementNode;
    }
    _createClass(Conclusion, [
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, nonTerminalNodeMatches = _conclusion.conclusionStatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions), statementNodeMatches = nonTerminalNodeMatches; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, nonTerminalNodeMatches = _conclusion1.conclusionMetastatementForMetavariableMatcher.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions), metastatementNodeMatches = nonTerminalNodeMatches; ///
                return metastatementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var metastatementString = (0, _string.nodeAsString)(this.metastatementNode, tokens), metastatement = metastatementString, json = {
                    metastatement: metastatement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, lexer, parser) {
                var metastatement = json.metastatement, metastatementString = metastatement, metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), conclusion = new Conclusion(metastatementNode);
                return conclusion;
            }
        },
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var conclusion = new Conclusion(metastatementNode);
                return conclusion;
            }
        }
    ]);
    return Conclusion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25jbHVzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IGNvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlci9zdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUvY29uY2x1c2lvblwiO1xuaW1wb3J0IHsgY29uY2x1c2lvbk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIH0gZnJvbSBcIi4vbWF0Y2hlci9tZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlL2NvbmNsdXNpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uY2x1c2lvbiB7XG4gIGNvbnN0cnVjdG9yKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gY29uY2x1c2lvblN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25jbHVzaW9uTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGxleGVyLCBwYXJzZXIpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgbWV0YXN0YXRlbWVudFN0cmluZyA9IG1ldGFzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb25jbHVzaW9uIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwiY29uY2x1c2lvblN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIiLCJtYXRjaE5vblRlcm1pbmFsTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsImNvbmNsdXNpb25NZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlTWF0Y2hlciIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsInRva2VucyIsIm1ldGFzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJtZXRhc3RhdGVtZW50IiwianNvbiIsImZyb21KU09OIiwibGV4ZXIiLCJwYXJzZXIiLCJtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIiwiY29uY2x1c2lvbiIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7c0JBTFE7b0JBQzRCOzBCQUNDOzJCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLGlCQUFpQjs4QkFEVkQ7UUFFakIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7O2lCQUZSRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUI7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhLEVBQUVDLGFBQWEsRUFBRTtnQkFDL0MsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0wsaUJBQWlCLEVBQ3pDTSxtQkFBbUJILGVBQ25CSSx5QkFBeUJDLHFEQUF5QyxDQUFDQyxvQkFBb0IsQ0FBQ0osa0JBQWtCQyxrQkFBa0JGLGdCQUM1SE0sdUJBQXVCSCx3QkFBd0IsR0FBRztnQkFFeEQsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJYLGlCQUFpQixFQUFFSSxhQUFhLEVBQUU7Z0JBQ3ZELElBQU1DLG1CQUFtQixJQUFJLENBQUNMLGlCQUFpQixFQUN6Q00sbUJBQW1CTixtQkFDbkJPLHlCQUF5QkssMERBQTZDLENBQUNILG9CQUFvQixDQUFDSixrQkFBa0JDLGtCQUFrQkYsZ0JBQ2hJUywyQkFBMkJOLHdCQUF3QixHQUFHO2dCQUU1RCxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU0sRUFBRTtnQkFDYixJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDakIsaUJBQWlCLEVBQUVlLFNBQzNERyxnQkFBZ0JGLHFCQUNoQkcsT0FBTztvQkFDTEQsZUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLEtBQUssRUFBRUMsTUFBTSxFQUFFO2dCQUNuQyxJQUFNLEFBQUVKLGdCQUFrQkMsS0FBbEJELGVBQ0ZGLHNCQUFzQkUsZUFDdEJsQixvQkFBb0J1QixJQUFBQSw4Q0FBd0MsRUFBQ1AscUJBQXFCSyxPQUFPQyxTQUN6RkUsYUFBYSxJQXpDRnpCLFdBeUNpQkM7Z0JBRWxDLE9BQU93QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCekIsaUJBQWlCLEVBQUU7Z0JBQzlDLElBQU13QixhQUFhLElBL0NGekIsV0ErQ2lCQztnQkFFbEMsT0FBT3dCO1lBQ1Q7OztXQWxEbUJ6QiJ9