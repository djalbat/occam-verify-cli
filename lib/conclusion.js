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
            value: function matchStatementNode(statementNode, substitutions, fileContext, statementProofContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = statementNode, fileContextA = fileContext, proofContextB = statementProofContext, nonTerminalNodeVerified = _conclusion.conclusionStatementForMetavariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, proofContextB), statementNodeMatches = nonTerminalNodeVerified; ///
                return statementNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementMetaproofContext) {
                var nonTerminalNodeA = this.metastatementNode, nonTerminalNodeB = metastatementNode, fileContextA = fileContext, metaproofContextB = metastatementMetaproofContext, nonTerminalNodeVerified = _conclusion1.conclusionMetastatementForMetavariableVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, metaproofContextB), metastatementNodeMatches = nonTerminalNodeVerified; ///
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
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var metastatement = json.metastatement, metastatementString = metastatement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), metastatementNode = (0, _node.metastatementNodeFromMetastatementString)(metastatementString, lexer, parser), conclusion = new Conclusion(metastatementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25jbHVzaW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IGNvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciB9IGZyb20gXCIuL3ZlcmlmaWVyL3N0YXRlbWVudEZvck1ldGF2YXJpYWJsZS9jb25jbHVzaW9uXCI7XG5pbXBvcnQgeyBjb25jbHVzaW9uTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIH0gZnJvbSBcIi4vdmVyaWZpZXIvbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZS9jb25jbHVzaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmNsdXNpb24ge1xuICBjb25zdHJ1Y3RvcihtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMubWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGFzdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGhpcy5tZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIHByb29mQ29udGV4dEIgPSBzdGF0ZW1lbnRQcm9vZkNvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBwcm9vZkNvbnRleHRCKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TWV0YXByb29mQ29udGV4dCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgZmlsZUNvbnRleHRBID0gZmlsZUNvbnRleHQsIC8vL1xuICAgICAgICAgIG1ldGFwcm9vZkNvbnRleHRCID0gbWV0YXN0YXRlbWVudE1ldGFwcm9vZkNvbnRleHQsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGNvbmNsdXNpb25NZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbWV0YXByb29mQ29udGV4dEIpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm1ldGFzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnQgPSBtZXRhc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbWV0YXN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBtZXRhc3RhdGVtZW50U3RyaW5nID0gbWV0YXN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlRnJvbU1ldGFzdGF0ZW1lbnRTdHJpbmcobWV0YXN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IG5ldyBDb25jbHVzaW9uKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25jbHVzaW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21NZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbmNsdXNpb24gPSBuZXcgQ29uY2x1c2lvbihtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb25jbHVzaW9uIiwibWV0YXN0YXRlbWVudE5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHQiLCJzdGF0ZW1lbnRQcm9vZkNvbnRleHQiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsImZpbGVDb250ZXh0QSIsInByb29mQ29udGV4dEIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsImNvbmNsdXNpb25TdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRNZXRhcHJvb2ZDb250ZXh0IiwibWV0YXByb29mQ29udGV4dEIiLCJjb25jbHVzaW9uTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwidG9KU09OIiwidG9rZW5zIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm1ldGFzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJtZXRhc3RhdGVtZW50Tm9kZUZyb21NZXRhc3RhdGVtZW50U3RyaW5nIiwiY29uY2x1c2lvbiIsImZyb21NZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7c0JBTFE7b0JBQzRCOzBCQUNFOzJCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoRCxJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLGlCQUFpQjs4QkFEVkQ7UUFFakIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7O2lCQUZSRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUI7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDRCxpQkFBaUI7WUFDL0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxxQkFBcUIsRUFBRTtnQkFDbkYsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1AsaUJBQWlCLEVBQ3pDUSxtQkFBbUJMLGVBQ25CTSxlQUFlSixhQUNmSyxnQkFBZ0JKLHVCQUNoQkssMEJBQTBCQyxzREFBMEMsQ0FBQ0MscUJBQXFCLENBQUNOLGtCQUFrQkMsa0JBQWtCSixlQUFlSyxjQUFjQyxnQkFDNUpJLHVCQUF1QkgseUJBQXlCLEdBQUc7Z0JBRXpELE9BQU9HO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCZixpQkFBaUIsRUFBRUksYUFBYSxFQUFFQyxXQUFXLEVBQUVXLDZCQUE2QixFQUFFO2dCQUNuRyxJQUFNVCxtQkFBbUIsSUFBSSxDQUFDUCxpQkFBaUIsRUFDekNRLG1CQUFtQlIsbUJBQ25CUyxlQUFlSixhQUNmWSxvQkFBb0JELCtCQUNwQkwsMEJBQTBCTywyREFBOEMsQ0FBQ0wscUJBQXFCLENBQUNOLGtCQUFrQkMsa0JBQWtCSixlQUFlSyxjQUFjUSxvQkFDaEtFLDJCQUEyQlIseUJBQXlCLEdBQUc7Z0JBRTdELE9BQU9RO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTSxFQUFFO2dCQUNiLElBQU1DLHNCQUFzQkMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUN2QixpQkFBaUIsRUFBRXFCLFNBQzNERyxnQkFBZ0JGLHFCQUNoQkcsT0FBTztvQkFDTEQsZUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJELElBQUksRUFBRXBCLFdBQVcsRUFBRTtnQkFDL0MsSUFBTSxBQUFFbUIsZ0JBQWtCQyxLQUFsQkQsZUFDRkYsc0JBQXNCRSxlQUN0QkcsUUFBUXRCLFlBQVl1QixRQUFRLElBQzVCQyxTQUFTeEIsWUFBWXlCLFNBQVMsSUFDOUI5QixvQkFBb0IrQixJQUFBQSw4Q0FBd0MsRUFBQ1QscUJBQXFCSyxPQUFPRSxTQUN6RkcsYUFBYSxJQS9DRmpDLFdBK0NpQkM7Z0JBRWxDLE9BQU9nQztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCakMsaUJBQWlCLEVBQUU7Z0JBQzlDLElBQU1nQyxhQUFhLElBckRGakMsV0FxRGlCQztnQkFFbEMsT0FBT2dDO1lBQ1Q7OztXQXhEbUJqQyJ9