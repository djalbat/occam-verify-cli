"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Combinator;
    }
});
var _string = require("./utilities/string");
var _node = require("./utilities/node");
var _tokens = require("./utilities/tokens");
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
var Combinator = /*#__PURE__*/ function() {
    function Combinator(statementNode, string) {
        _class_call_check(this, Combinator);
        this.statementNode = statementNode;
        this.string = string;
    }
    _create_class(Combinator, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
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
            key: "fromStatementNodeAndTokens",
            value: function fromStatementNodeAndTokens(statementNode, tokens) {
                var string = stringFromStatementNodeAndTokens(statementNode, tokens), combinator = new Combinator(statementNode, string);
                return combinator;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var statement = json.statement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), unqualifiedStatementTokens = (0, _tokens.unqualifiedStatementTokensFromStatementString)(statementString, lexer), statementNode = (0, _node.statementNodeFromUnqualifiedStatementTokens)(unqualifiedStatementTokens, parser), tokens = unqualifiedStatementTokens, string = stringFromStatementNodeAndTokens(statementNode, tokens), combinator = new Combinator(statementNode, string);
                return combinator;
            }
        }
    ]);
    return Combinator;
}();
function stringFromStatementNodeAndTokens(statementNode, tokens) {
    var statementString = (0, _string.nodeAsString)(statementNode, tokens), string = statementString; ///
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy90b2tlbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmluYXRvciB7XG4gIGNvbnN0cnVjdG9yKHN0YXRlbWVudE5vZGUsIHN0cmluZykge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZUFuZFRva2VucyhzdGF0ZW1lbnROb2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50Tm9kZUFuZFRva2VucyhzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBzdHJpbmcpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICB1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyA9IHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21VbnF1YWxpZmllZFN0YXRlbWVudFRva2Vucyh1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgcGFyc2VyKSxcbiAgICAgICAgICB0b2tlbnMgPSB1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucywgIC8vXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVN0YXRlbWVudE5vZGVBbmRUb2tlbnMoc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSwgc3RyaW5nKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21TdGF0ZW1lbnROb2RlQW5kVG9rZW5zKHN0YXRlbWVudE5vZGUsIHRva2Vucykge1xuICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcoc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3RyaW5nOyAvLy9cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIkNvbWJpbmF0b3IiLCJzdGF0ZW1lbnROb2RlIiwic3RyaW5nIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImdldFN0cmluZyIsInRvSlNPTiIsInRva2VucyIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInN0YXRlbWVudCIsImpzb24iLCJmcm9tU3RhdGVtZW50Tm9kZUFuZFRva2VucyIsInN0cmluZ0Zyb21TdGF0ZW1lbnROb2RlQW5kVG9rZW5zIiwiY29tYmluYXRvciIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2VucyIsInVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zRnJvbVN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudE5vZGVGcm9tVW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NCQUpRO29CQUMrQjtzQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBQSxBQUFNQSwyQkE4Q2xCLEFBOUNZO2FBQU1BLFdBQ1BDLGFBQWEsRUFBRUMsTUFBTTtnQ0FEZEY7UUFFakIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSEdGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTUMsa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1AsYUFBYSxFQUFFSyxTQUNuREcsWUFBWUYsaUJBQ1pHLE9BQU87b0JBQ0xELFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCVixhQUFhLEVBQUVLLE1BQU07Z0JBQ3JELElBQU1KLFNBQVNVLGlDQUFpQ1gsZUFBZUssU0FDekRPLGFBQWEsSUExQkZiLFdBMEJpQkMsZUFBZUM7Z0JBRWpELE9BQU9XO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJKLElBQUksRUFBRUssV0FBVztnQkFDN0MsSUFBTSxBQUFFTixZQUFjQyxLQUFkRCxXQUNGRixrQkFBa0JFLFdBQ2xCTyxRQUFRRCxZQUFZRSxRQUFRLElBQzVCQyxTQUFTSCxZQUFZSSxTQUFTLElBQzlCQyw2QkFBNkJDLElBQUFBLHFEQUE2QyxFQUFDZCxpQkFBaUJTLFFBQzVGZixnQkFBZ0JxQixJQUFBQSxpREFBMkMsRUFBQ0YsNEJBQTRCRixTQUN4RlosU0FBU2MsNEJBQ1RsQixTQUFTVSxpQ0FBaUNYLGVBQWVLLFNBQ3pETyxhQUFhLElBeENGYixXQXdDaUJDLGVBQWVDO2dCQUVqRCxPQUFPVztZQUNUOzs7V0EzQ21CYjs7QUE4Q3JCLFNBQVNZLGlDQUFpQ1gsYUFBYSxFQUFFSyxNQUFNO0lBQzdELElBQU1DLGtCQUFrQkMsSUFBQUEsb0JBQVksRUFBQ1AsZUFBZUssU0FDOUNKLFNBQVNLLGlCQUFpQixHQUFHO0lBRW5DLE9BQU9MO0FBQ1QifQ==