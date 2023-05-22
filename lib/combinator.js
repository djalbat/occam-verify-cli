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
    function Combinator(statementNode) {
        _class_call_check(this, Combinator);
        this.statementNode = statementNode;
    }
    _create_class(Combinator, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                return this.statementNode;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var string;
                var statementString = (0, _string.nodeAsString)(this.statementNode, tokens);
                string = "".concat(statementString);
                return string;
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
                var combinator = new Combinator(statementNode);
                return combinator;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var statement = json.statement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), combinator = new Combinator(statementNode);
                return combinator;
            }
        }
    ]);
    return Combinator;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmF0b3Ige1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RhdGVtZW50U3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcoc3RhdGVtZW50U3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb21iaW5hdG9yIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJhc1N0cmluZyIsInRva2VucyIsInN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRvSlNPTiIsInN0YXRlbWVudCIsImpzb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsImNvbWJpbmF0b3IiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O3NCQUhRO29CQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxhQUFhO2dDQURORDtRQUVqQixJQUFJLENBQUNDLGdCQUFnQkE7O2tCQUZKRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Q7WUFDZDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNO2dCQUNiLElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQkMsSUFBQUEsc0JBQWEsSUFBSSxDQUFDTixlQUFlRztnQkFFekRDLFNBQVMsQUFBQyxHQUFrQixPQUFoQkM7Z0JBRVosT0FBT0Q7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPSixNQUFNO2dCQUNYLElBQU1FLGtCQUFrQkMsSUFBQUEsc0JBQWEsSUFBSSxDQUFDTixlQUFlRyxTQUNuREssWUFBWUgsaUJBQ1pJLE9BQU87b0JBQ0xELFdBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCVixhQUFhO2dCQUNwQyxJQUFNVyxhQUFhLElBOUJGWixXQThCaUJDO2dCQUVsQyxPQUFPVztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCSCxJQUFJLEVBQUVJLFdBQVc7Z0JBQzdDLElBQU0sQUFBRUwsWUFBY0MsS0FBZEQsV0FDRkgsa0JBQWtCRyxXQUNsQk0sUUFBUUQsWUFBWUUsWUFDcEJDLFNBQVNILFlBQVlJLGFBQ3JCakIsZ0JBQWdCa0IsSUFBQUEsd0NBQWlDYixpQkFBaUJTLE9BQU9FLFNBQ3pFTCxhQUFhLElBekNGWixXQXlDaUJDO2dCQUVsQyxPQUFPVztZQUNUOzs7V0E1Q21CWiJ9