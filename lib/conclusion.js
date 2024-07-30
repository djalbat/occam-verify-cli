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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metaLevel"));
var _metaLevelToIntrinsicLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metaLevelToIntrinsicLevel"));
var _string = require("./utilities/string");
var _node = require("./utilities/node");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Conclusion = /*#__PURE__*/ function() {
    function Conclusion(metastatementNode) {
        _class_call_check(this, Conclusion);
        this.metastatementNode = metastatementNode;
    }
    _create_class(Conclusion, [
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions, fileContext, statementLocalContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, fileContextA = fileContext, localContextB = statementLocalContext, nonTerminalNodeVerified = _metaLevelToIntrinsicLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localContextB, function() {
                    var verifyAhead = true;
                    return verifyAhead;
                }), statementNodeMatches = nonTerminalNodeVerified; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementLocalMetaContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, fileContextA = fileContext, localMetaContextB = metastatementLocalMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                }), metastatementNodeMatches = nonTerminalNodeVerified; ///
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
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var conclusion = new Conclusion(metastatementNode);
                return conclusion;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metastatement = json.metastatement, metastatementString = metastatement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), conclusion = new Conclusion(metastatementNode);
                return conclusion;
            }
        }
    ]);
    return Conclusion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25jbHVzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbWV0YUxldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxcIjtcbmltcG9ydCBtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9tZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsXCI7XG5cbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25jbHVzaW9uIHtcbiAgY29uc3RydWN0b3IobWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhc3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0QSA9IGZpbGVDb250ZXh0LCAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gc3RhdGVtZW50TG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBtZXRhTGV2ZWxUb0ludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZnlBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZnlBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIGxvY2FsTWV0YUNvbnRleHRCID0gbWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxNZXRhQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50ID0gbWV0YXN0YXRlbWVudFN0cmluZywgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBtZXRhc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyhtZXRhc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gbmV3IENvbmNsdXNpb24obWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb25jbHVzaW9uIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRMb2NhbENvbnRleHQiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm1ldGFMZXZlbFRvSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZ5QWhlYWQiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCIsImxvY2FsTWV0YUNvbnRleHRCIiwibWV0YUxldmVsTm9kZXNWZXJpZmllciIsInZlcmlmaWVkQWhlYWQiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJ0b2tlbnMiLCJtZXRhc3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibWV0YXN0YXRlbWVudCIsImpzb24iLCJmcm9tTWV0YXN0YXRlbWVudE5vZGUiLCJjb25jbHVzaW9uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztnRUFOYztnRkFDZ0I7c0JBRXRCO29CQUM0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQyxJQUFBLEFBQU1BLDJCQUFELEFBQUw7YUFBTUEsV0FDUEMsaUJBQWlCO2dDQURWRDtRQUVqQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7a0JBRlJEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxxQkFBcUI7Z0JBQ2pGLElBQU1DLG1CQUFtQixJQUFJLENBQUNQLGlCQUFpQixFQUN6Q1EsbUJBQW1CTCxlQUNuQk0sZUFBZUosYUFDZkssZ0JBQWdCSix1QkFDaEJLLDBCQUEwQkMsa0NBQXNDLENBQUNDLHFCQUFxQixDQUFDTixrQkFBa0JDLGtCQUFrQkosZUFBZUssY0FBY0MsZUFBZTtvQkFDckssSUFBTUksY0FBYztvQkFFcEIsT0FBT0E7Z0JBQ1QsSUFDQUMsdUJBQXVCSix5QkFBeUIsR0FBRztnQkFFekQsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJoQixpQkFBaUIsRUFBRUksYUFBYSxFQUFFQyxXQUFXLEVBQUVZLDZCQUE2QjtnQkFDakcsSUFBTVYsbUJBQW1CLElBQUksQ0FBQ1AsaUJBQWlCLEVBQ3pDUSxtQkFBbUJSLG1CQUNuQlMsZUFBZUosYUFDZmEsb0JBQW9CRCwrQkFDcEJOLDBCQUEwQlEsa0JBQXNCLENBQUNOLHFCQUFxQixDQUFDTixrQkFBa0JDLGtCQUFrQkosZUFBZUssY0FBY1MsbUJBQW1CO29CQUN6SixJQUFNRSxnQkFBZ0I7b0JBRXRCLE9BQU9BO2dCQUNULElBQ0FDLDJCQUEyQlYseUJBQXlCLEdBQUc7Z0JBRTdELE9BQU9VO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTTtnQkFDWCxJQUFNQyxzQkFBc0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDekIsaUJBQWlCLEVBQUV1QixTQUMzREcsZ0JBQWdCRixxQkFDaEJHLE9BQU87b0JBQ0xELGVBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCNUIsaUJBQWlCO2dCQUM1QyxJQUFNNkIsYUFBYSxJQWxERjlCLFdBa0RpQkM7Z0JBRWxDLE9BQU82QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCSCxJQUFJLEVBQUV0QixXQUFXO2dCQUM3QyxJQUFNLEFBQUVxQixnQkFBa0JDLEtBQWxCRCxlQUNGRixzQkFBc0JFLGVBQ3RCSyxRQUFRMUIsWUFBWTJCLFFBQVEsSUFDNUJDLFNBQVM1QixZQUFZNkIsU0FBUyxJQUM5QmxDLG9CQUFvQm1DLElBQUFBLDhDQUF3QyxFQUFDWCxxQkFBcUJPLE9BQU9FLFNBQ3pGSixhQUFhLElBN0RGOUIsV0E2RGlCQztnQkFFbEMsT0FBTzZCO1lBQ1Q7OztXQWhFbUI5QiJ9