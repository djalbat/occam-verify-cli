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
                var nonTerminalNodeA = this.statementNode, nonTerminalNodeB = statementNode, nonTerminalNodeVerified = _consequent.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, proofContext, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zZXF1ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgY29uc2VxdWVudFRlcm1Gb3JWYXJpYWJsZU5vZGVzVmVyaWZpZXIgZnJvbSBcIi4vdmVyaWZpZXIvbm9kZXMvdGVybUZvclZhcmlhYmxlL2NvbnNlcXVlbnRcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zZXF1ZW50IHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBtYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRoaXMuc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjb25zZXF1ZW50VGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgcHJvb2ZDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb25zZXF1ZW50ID0gbmV3IENvbnNlcXVlbnQoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29uc2VxdWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBuZXcgQ29uc2VxdWVudChzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb25zZXF1ZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29uc2VxdWVudCIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsInByb29mQ29udGV4dCIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJjb25zZXF1ZW50VGVybUZvclZhcmlhYmxlTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsInRvSlNPTiIsInRva2VucyIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudCIsImpzb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsImNvbnNlcXVlbnQiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O2lFQUw4QjtzQkFFdEI7b0JBQ29COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxDLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsYUFBYTtnQ0FETkQ7UUFFakIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztrQkFGSkQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELGFBQWE7WUFDM0I7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CRixhQUFhLEVBQUVHLGFBQWEsRUFBRUMsWUFBWTtnQkFDM0QsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ0wsYUFBYSxFQUNyQ00sbUJBQW1CTixlQUNuQk8sMEJBQTBCQyxtQkFBc0MsQ0FBQ0MscUJBQXFCLENBQUNKLGtCQUFrQkMsa0JBQWtCSCxlQUFlQyxjQUFjO29CQUN0SixJQUFNTSxnQkFBZ0I7b0JBRXRCLE9BQU9BO2dCQUNULElBQ0FDLHVCQUF1QkoseUJBQXlCLEdBQUc7Z0JBRXpELE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsTUFBTTtnQkFDWCxJQUFNQyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDZixhQUFhLEVBQUVhLFNBQ25ERyxZQUFZRixpQkFDWkcsT0FBTztvQkFDTEQsV0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JsQixhQUFhO2dCQUNwQyxJQUFNbUIsYUFBYSxJQWpDRnBCLFdBaUNpQkM7Z0JBRWxDLE9BQU9tQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCSCxJQUFJLEVBQUVJLFdBQVc7Z0JBQzdDLElBQU0sQUFBRUwsWUFBY0MsS0FBZEQsV0FDRkYsa0JBQWtCRSxXQUNsQk0sUUFBUUQsWUFBWUUsUUFBUSxJQUM1QkMsU0FBU0gsWUFBWUksU0FBUyxJQUM5QnpCLGdCQUFnQjBCLElBQUFBLHNDQUFnQyxFQUFDWixpQkFBaUJRLE9BQU9FLFNBQ3pFTCxhQUFhLElBNUNGcEIsV0E0Q2lCQztnQkFFbEMsT0FBT21CO1lBQ1Q7OztXQS9DbUJwQiJ9