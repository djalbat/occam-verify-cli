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
var _conclusion = require("./verifier/statementForMetavariable/conclusion");
var _conclusion1 = require("./verifier/metastatementForMetavariable/conclusion");
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
            value: function matchStatementNode(statementNode, substitutions, proofContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, nonTerminalNodeVerified = _conclusion.conclusionStatementForMetavariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContext), statementNodeMatches = nonTerminalNodeVerified; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions, metaproofContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, nonTerminalNodeVerified = _conclusion1.conclusionMetastatementForMetavariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, metaproofContext), metastatementNodeMatches = nonTerminalNodeVerified; ///
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
            value: function fromJSON(json, context) {
                var metastatement = json.metastatement, metastatementString = metastatement, lexer = context.getLexer(), parser = context.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), conclusion = new Conclusion(metastatementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25jbHVzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IGNvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciB9IGZyb20gXCIuL3ZlcmlmaWVyL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZS9jb25jbHVzaW9uXCI7XG5pbXBvcnQgeyBjb25jbHVzaW9uTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIH0gZnJvbSBcIi4vdmVyaWZpZXIvbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS9jb25jbHVzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmNsdXNpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBtZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gY29uY2x1c2lvbk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbWV0YXByb29mQ29udGV4dCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubWV0YXN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudCA9IG1ldGFzdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBtZXRhc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBtZXRhc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb25jbHVzaW9uIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwicHJvb2ZDb250ZXh0Iiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsImNvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFwcm9vZkNvbnRleHQiLCJjb25jbHVzaW9uTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwidG9KU09OIiwidG9rZW5zIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm1ldGFzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsIm1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmciLCJjb25jbHVzaW9uIiwiZnJvbU1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztzQkFMUTtvQkFDNEI7MEJBQ0U7MkJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsaUJBQWlCOzhCQURWRDtRQUVqQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTs7aUJBRlJEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QjtnQkFDckIsT0FBTyxJQUFJLENBQUNELGlCQUFpQjtZQUMvQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUJDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxZQUFZLEVBQUU7Z0JBQzdELElBQU1DLG1CQUFtQixJQUFJLENBQUNOLGlCQUFpQixFQUN6Q08sbUJBQW1CSixlQUNuQkssMEJBQTBCQyxzREFBMEMsQ0FBQ0MscUJBQXFCLENBQUNKLGtCQUFrQkMsa0JBQWtCSCxlQUFlQyxlQUM5SU0sdUJBQXVCSCx5QkFBeUIsR0FBRztnQkFFekQsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJaLGlCQUFpQixFQUFFSSxhQUFhLEVBQUVTLGdCQUFnQixFQUFFO2dCQUN6RSxJQUFNUCxtQkFBbUIsSUFBSSxDQUFDTixpQkFBaUIsRUFDekNPLG1CQUFtQlAsbUJBQ25CUSwwQkFBMEJNLDJEQUE4QyxDQUFDSixxQkFBcUIsQ0FBQ0osa0JBQWtCQyxrQkFBa0JILGVBQWVTLG1CQUNsSkUsMkJBQTJCUCx5QkFBeUIsR0FBRztnQkFFN0QsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBTUMsc0JBQXNCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ25CLGlCQUFpQixFQUFFaUIsU0FDM0RHLGdCQUFnQkYscUJBQ2hCRyxPQUFPO29CQUNMRCxlQUFBQTtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsT0FBTyxFQUFFO2dCQUM3QixJQUFNLEFBQUVILGdCQUFrQkMsS0FBbEJELGVBQ0ZGLHNCQUFzQkUsZUFDdEJJLFFBQVFELFFBQVFFLFFBQVEsSUFDeEJDLFNBQVNILFFBQVFJLFNBQVMsSUFDMUIzQixvQkFBb0I0QixJQUFBQSw4Q0FBd0MsRUFBQ1YscUJBQXFCTSxPQUFPRSxTQUN6RkcsYUFBYSxJQTNDRjlCLFdBMkNpQkM7Z0JBRWxDLE9BQU82QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCOUIsaUJBQWlCLEVBQUU7Z0JBQzlDLElBQU02QixhQUFhLElBakRGOUIsV0FpRGlCQztnQkFFbEMsT0FBTzZCO1lBQ1Q7OztXQXBEbUI5QiJ9