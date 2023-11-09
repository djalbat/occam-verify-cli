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
                var statement = json.statement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), unqualifiedStatementTokens = (0, _node.unqualifiedStatementTokensFromStatementString)(statementString, lexer), tokens = unqualifiedStatementTokens, string = stringFromStatementNodeAndTokens(statementNode, tokens), combinator = new Combinator(statementNode, string);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyB1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5hdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50Tm9kZSwgc3RyaW5nKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlQW5kVG9rZW5zKHN0YXRlbWVudE5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHN0cmluZyA9IHN0cmluZ0Zyb21TdGF0ZW1lbnROb2RlQW5kVG9rZW5zKHN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUsIHN0cmluZyk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zID0gdW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnNGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIpLFxuICAgICAgICAgIHRva2VucyA9IHVucXVhbGlmaWVkU3RhdGVtZW50VG9rZW5zLCAgLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tU3RhdGVtZW50Tm9kZUFuZFRva2VucyhzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnROb2RlLCBzdHJpbmcpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVN0YXRlbWVudE5vZGVBbmRUb2tlbnMoc3RhdGVtZW50Tm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyhzdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmc7IC8vL1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiQ29tYmluYXRvciIsInN0YXRlbWVudE5vZGUiLCJzdHJpbmciLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0U3RyaW5nIiwidG9KU09OIiwidG9rZW5zIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwic3RhdGVtZW50IiwianNvbiIsImZyb21TdGF0ZW1lbnROb2RlQW5kVG9rZW5zIiwic3RyaW5nRnJvbVN0YXRlbWVudE5vZGVBbmRUb2tlbnMiLCJjb21iaW5hdG9yIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nIiwidW5xdWFsaWZpZWRTdGF0ZW1lbnRUb2tlbnMiLCJ1bnF1YWxpZmllZFN0YXRlbWVudFRva2Vuc0Zyb21TdGF0ZW1lbnRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NCQUpRO29CQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbEMsSUFBQSxBQUFNQSwyQkE4Q2xCLEFBOUNZO2FBQU1BLFdBQ1BDLGFBQWEsRUFBRUMsTUFBTTtnQ0FEZEY7UUFFakIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSEdGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixhQUFhO1lBQzNCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLE1BQU07Z0JBQ1gsSUFBTUMsa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1AsYUFBYSxFQUFFSyxTQUNuREcsWUFBWUYsaUJBQ1pHLE9BQU87b0JBQ0xELFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCVixhQUFhLEVBQUVLLE1BQU07Z0JBQ3JELElBQU1KLFNBQVNVLGlDQUFpQ1gsZUFBZUssU0FDekRPLGFBQWEsSUExQkZiLFdBMEJpQkMsZUFBZUM7Z0JBRWpELE9BQU9XO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJKLElBQUksRUFBRUssV0FBVztnQkFDN0MsSUFBTSxBQUFFTixZQUFjQyxLQUFkRCxXQUNGRixrQkFBa0JFLFdBQ2xCTyxRQUFRRCxZQUFZRSxRQUFRLElBQzVCQyxTQUFTSCxZQUFZSSxTQUFTLElBQzlCbEIsZ0JBQWdCbUIsSUFBQUEsc0NBQWdDLEVBQUNiLGlCQUFpQlMsT0FBT0UsU0FDekVHLDZCQUE2QkMsSUFBQUEsbURBQTZDLEVBQUNmLGlCQUFpQlMsUUFDNUZWLFNBQVNlLDRCQUNUbkIsU0FBU1UsaUNBQWlDWCxlQUFlSyxTQUN6RE8sYUFBYSxJQXhDRmIsV0F3Q2lCQyxlQUFlQztnQkFFakQsT0FBT1c7WUFDVDs7O1dBM0NtQmI7O0FBOENyQixTQUFTWSxpQ0FBaUNYLGFBQWEsRUFBRUssTUFBTTtJQUM3RCxJQUFNQyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUNQLGVBQWVLLFNBQzlDSixTQUFTSyxpQkFBaUIsR0FBRztJQUVuQyxPQUFPTDtBQUNUIn0=