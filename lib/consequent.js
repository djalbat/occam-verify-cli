"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Consequent;
    }
});
var _consequent = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/termForVariable/consequent"));
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
var Consequent = /*#__PURE__*/ function() {
    function Consequent(statementNode) {
        _class_call_check(this, Consequent);
        this.statementNode = statementNode;
    }
    _create_class(Consequent, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode, substitutions, proofContext) {
                var nonTerminalNodeA = this.statementNode, nonTerminalNodeB = statementNode, proofContextA = proofContext, proofContextB = null, nonTerminalNodeVerified = _consequent.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContextA, proofContextB, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                }), statementNodeMatches = nonTerminalNodeVerified; ///
                return statementNodeMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var statementString = (0, _string.nodeAsString)(this.statementNode, tokens), statement = statementString, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var consequent = new Consequent(statementNode);
                return consequent;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var statement = json.statement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), consequent = new Consequent(statementNode);
                return consequent;
            }
        }
    ]);
    return Consequent;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zZXF1ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgY29uc2VxdWVudFRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvdGVybUZvclZhcmlhYmxlL2NvbnNlcXVlbnRcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zZXF1ZW50IHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgcHJvb2ZDb250ZXh0QSA9IHByb29mQ29udGV4dCwgLy8vXG4gICAgICAgICAgcHJvb2ZDb250ZXh0QiA9IG51bGwsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gY29uc2VxdWVudFRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIHByb29mQ29udGV4dEEsIHByb29mQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudFN0cmluZywgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnNlcXVlbnQgPSBuZXcgQ29uc2VxdWVudChzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25zZXF1ZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0YXRlbWVudCB9ID0ganNvbixcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBsZXhlciA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgY29uc2VxdWVudCA9IG5ldyBDb25zZXF1ZW50KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbnNlcXVlbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb25zZXF1ZW50Iiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwicHJvb2ZDb250ZXh0Iiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJwcm9vZkNvbnRleHRBIiwicHJvb2ZDb250ZXh0QiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwiY29uc2VxdWVudFRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJ0b0pTT04iLCJ0b2tlbnMiLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJqc29uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJjb25zZXF1ZW50IiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztpRUFMOEI7c0JBRXRCO29CQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLGFBQWE7Z0NBRE5EO1FBRWpCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7a0JBRkpEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxhQUFhO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkYsYUFBYSxFQUFFRyxhQUFhLEVBQUVDLFlBQVk7Z0JBQzNELElBQU1DLG1CQUFtQixJQUFJLENBQUNMLGFBQWEsRUFDckNNLG1CQUFtQk4sZUFDbkJPLGdCQUFnQkgsY0FDaEJJLGdCQUFnQixNQUNoQkMsMEJBQTBCQyxtQkFBc0MsQ0FBQ0MscUJBQXFCLENBQUNOLGtCQUFrQkMsa0JBQWtCSCxlQUFlSSxlQUFlQyxlQUFlO29CQUN0SyxJQUFNSSxnQkFBZ0I7b0JBRXRCLE9BQU9BO2dCQUNULElBQ0FDLHVCQUF1QkoseUJBQXlCLEdBQUc7Z0JBRXpELE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTTtnQkFDWCxJQUFNQyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDakIsYUFBYSxFQUFFZSxTQUNuREcsWUFBWUYsaUJBQ1pHLE9BQU87b0JBQ0xELFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCcEIsYUFBYTtnQkFDcEMsSUFBTXFCLGFBQWEsSUFuQ0Z0QixXQW1DaUJDO2dCQUVsQyxPQUFPcUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkgsSUFBSSxFQUFFSSxXQUFXO2dCQUM3QyxJQUFNLEFBQUVMLFlBQWNDLEtBQWRELFdBQ0ZGLGtCQUFrQkUsV0FDbEJNLFFBQVFELFlBQVlFLFFBQVEsSUFDNUJDLFNBQVNILFlBQVlJLFNBQVMsSUFDOUIzQixnQkFBZ0I0QixJQUFBQSxzQ0FBZ0MsRUFBQ1osaUJBQWlCUSxPQUFPRSxTQUN6RUwsYUFBYSxJQTlDRnRCLFdBOENpQkM7Z0JBRWxDLE9BQU9xQjtZQUNUOzs7V0FqRG1CdEIifQ==