"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaConsequent;
    }
});
var _localMeta = /*#__PURE__*/ _interop_require_default(require("./context/localMeta"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/metaLevel"));
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
var MetaConsequent = /*#__PURE__*/ function() {
    function MetaConsequent(metastatementNode, statementNode) {
        _class_call_check(this, MetaConsequent);
        this.metastatementNode = metastatementNode;
        this.statementNode = statementNode;
    }
    _create_class(MetaConsequent, [
        {
            key: "getMetastatementNode",
            value: function getMetastatementNode() {
                return this.metastatementNode;
            }
        },
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext) {
                var metastatementNodeMatches = false;
                if (this.metastatementNode !== null) {
                    var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, fileContextA = fileContext, localMetaContextA = _localMeta.default.fromFileContext(fileContextA), localMetaContextB = localMetaContext, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    metastatementNodeMatches = nonTerminalNodeVerified; ///
                }
                return metastatementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var metastatementString = (0, _string.nodeAsString)(this.metastatementNode, tokens), statementString = (0, _string.nodeAsString)(this.statementNode, tokens), metastatement = metastatementString, statement = statementString, json = {
                    metastatement: metastatement,
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromMetastatementNode",
            value: function fromMetastatementNode(metastatementNode) {
                var statementNode = null, metaConsequent = new MetaConsequent(metastatementNode, statementNode);
                return metaConsequent;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var metastatementNode = null, metaConsequent = new MetaConsequent(metastatementNode, statementNode);
                return metaConsequent;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metastatement = json.metastatement, statement = json.statement, metastatementString = metastatement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), metaConsequent = new MetaConsequent(metastatementNode, statementNode);
                return metaConsequent;
            }
        }
    ]);
    return MetaConsequent;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhQ29uc2VxdWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IExvY2FsTWV0YUNvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbE1ldGFcIjtcbmltcG9ydCBtZXRhTGV2ZWxOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuL3ZlcmlmaWVyL25vZGVzL21ldGFMZXZlbFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZywgbWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1ldGFDb25zZXF1ZW50IHtcbiAgY29uc3RydWN0b3IobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpIHtcbiAgICB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMubWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgbG9jYWxNZXRhQ29udGV4dEEgPSBMb2NhbE1ldGFDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dEEpLFxuICAgICAgICAgICAgbG9jYWxNZXRhQ29udGV4dEIgPSBsb2NhbE1ldGFDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YUxldmVsTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxNZXRhQ29udGV4dEEsIGxvY2FsTWV0YUNvbnRleHRCLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnQsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YUNvbnNlcXVlbnQgPSBuZXcgTWV0YUNvbnNlcXVlbnQobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFDb25zZXF1ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG51bGwsXG4gICAgICAgICAgbWV0YUNvbnNlcXVlbnQgPSBuZXcgTWV0YUNvbnNlcXVlbnQobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFDb25zZXF1ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG1ldGFzdGF0ZW1lbnQsIHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgbWV0YUNvbnNlcXVlbnQgPSBuZXcgTWV0YUNvbnNlcXVlbnQobWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFDb25zZXF1ZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWV0YUNvbnNlcXVlbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsImZpbGVDb250ZXh0IiwibG9jYWxNZXRhQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZmlsZUNvbnRleHRBIiwibG9jYWxNZXRhQ29udGV4dEEiLCJMb2NhbE1ldGFDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwibG9jYWxNZXRhQ29udGV4dEIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm1ldGFMZXZlbE5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwidG9KU09OIiwidG9rZW5zIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudFN0cmluZyIsIm1ldGFzdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YUNvbnNlcXVlbnQiLCJmcm9tU3RhdGVtZW50Tm9kZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibWV0YXN0YXRlbWVudE5vZGVGcm9tTWV0YXN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OztnRUFOUTtnRUFDTTtzQkFFTjtvQkFDOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxBQUFNQSwrQkFBRCxBQUFMO2FBQU1BLGVBQ1BDLGlCQUFpQixFQUFFQyxhQUFhO2dDQUR6QkY7UUFFakIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7UUFDekIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFISkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLGlCQUFpQjtZQUMvQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsYUFBYTtZQUMzQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJKLGlCQUFpQixFQUFFSyxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsZ0JBQWdCO2dCQUNwRixJQUFJQywyQkFBMkI7Z0JBRS9CLElBQUksSUFBSSxDQUFDUixpQkFBaUIsS0FBSyxNQUFNO29CQUNuQyxJQUFNUyxtQkFBbUIsSUFBSSxDQUFDVCxpQkFBaUIsRUFDekNVLG1CQUFtQlYsbUJBQ25CVyxlQUFlTCxhQUNmTSxvQkFBb0JDLGtCQUFnQixDQUFDQyxlQUFlLENBQUNILGVBQ3JESSxvQkFBb0JSLGtCQUNwQlMsMEJBQTBCQyxrQkFBc0IsQ0FBQ0MscUJBQXFCLENBQUNULGtCQUFrQkMsa0JBQWtCTCxlQUFlTyxtQkFBbUJHLG1CQUFtQjt3QkFDOUosSUFBTUksZ0JBQWdCO3dCQUV0QixPQUFPQTtvQkFDVDtvQkFFTlgsMkJBQTJCUSx5QkFBeUIsR0FBRztnQkFDekQ7Z0JBRUEsT0FBT1I7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNO2dCQUNYLElBQU1DLHNCQUFzQkMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUN2QixpQkFBaUIsRUFBRXFCLFNBQzNERyxrQkFBa0JELElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDdEIsYUFBYSxFQUFFb0IsU0FDbkRJLGdCQUFnQkgscUJBQ2hCSSxZQUFZRixpQkFDWkcsT0FBTztvQkFDTEYsZUFBQUE7b0JBQ0FDLFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCNUIsaUJBQWlCO2dCQUM1QyxJQUFNQyxnQkFBZ0IsTUFDaEI0QixpQkFBaUIsSUFsRE45QixlQWtEeUJDLG1CQUFtQkM7Z0JBRTdELE9BQU80QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCN0IsYUFBYTtnQkFDcEMsSUFBTUQsb0JBQW9CLE1BQ3BCNkIsaUJBQWlCLElBekROOUIsZUF5RHlCQyxtQkFBbUJDO2dCQUU3RCxPQUFPNEI7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkosSUFBSSxFQUFFckIsV0FBVztnQkFDN0MsSUFBUW1CLGdCQUE2QkUsS0FBN0JGLGVBQWVDLFlBQWNDLEtBQWRELFdBQ2pCSixzQkFBc0JHLGVBQ3RCRCxrQkFBa0JFLFdBQ2xCTSxRQUFRMUIsWUFBWTJCLFFBQVEsSUFDNUJDLFNBQVM1QixZQUFZNkIsU0FBUyxJQUM5Qm5DLG9CQUFvQm9DLElBQUFBLDhDQUF3QyxFQUFDZCxxQkFBcUJVLE9BQU9FLFNBQ3pGakMsZ0JBQWdCb0MsSUFBQUEsc0NBQWdDLEVBQUNiLGlCQUFpQlEsT0FBT0UsU0FDekVMLGlCQUFpQixJQXRFTjlCLGVBc0V5QkMsbUJBQW1CQztnQkFFN0QsT0FBTzRCO1lBQ1Q7OztXQXpFbUI5QiJ9