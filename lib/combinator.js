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
var Combinator = /*#__PURE__*/ function() {
    function Combinator(statementNode) {
        _classCallCheck(this, Combinator);
        this.statementNode = statementNode;
    }
    _createClass(Combinator, [
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
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var statement = json.statement, statementString = statement, lexer = fileContext.getLexer(), parser = fileContext.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), combinator = new Combinator(statementNode);
                return combinator;
            }
        },
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode) {
                var combinator = new Combinator(statementNode);
                return combinator;
            }
        }
    ]);
    return Combinator;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9ub2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbWJpbmF0b3Ige1xuICBjb25zdHJ1Y3RvcihzdGF0ZW1lbnROb2RlKSB7XG4gICAgdGhpcy5zdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RhdGVtZW50U3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnN0YXRlbWVudE5vZGUsIHRva2VucyksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdGF0ZW1lbnQgfSA9IGpzb24sXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgbGV4ZXIgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlRnJvbVN0YXRlbWVudFN0cmluZyhzdGF0ZW1lbnRTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3Ioc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb21iaW5hdG9yIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJhc1N0cmluZyIsInRva2VucyIsInN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRvSlNPTiIsInN0YXRlbWVudCIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciLCJjb21iaW5hdG9yIiwiZnJvbVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBS3FCQTs7O3NCQUhRO29CQUNvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxhQUFhOzhCQURORDtRQUVqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUZKRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDRCxhQUFhO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU0sRUFBRTtnQkFDZixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDTixhQUFhLEVBQUVHO2dCQUV6REMsU0FBUyxBQUFDLEdBQWtCLE9BQWhCQztnQkFFWixPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9KLE1BQU0sRUFBRTtnQkFDYixJQUFNRSxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDTixhQUFhLEVBQUVHLFNBQ25ESyxZQUFZSCxpQkFDWkksT0FBTztvQkFDTEQsV0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJELElBQUksRUFBRUUsV0FBVyxFQUFFO2dCQUMvQyxJQUFNLEFBQUVILFlBQWNDLEtBQWRELFdBQ0ZILGtCQUFrQkcsV0FDbEJJLFFBQVFELFlBQVlFLFFBQVEsSUFDNUJDLFNBQVNILFlBQVlJLFNBQVMsSUFDOUJmLGdCQUFnQmdCLElBQUFBLHNDQUFnQyxFQUFDWCxpQkFBaUJPLE9BQU9FLFNBQ3pFRyxhQUFhLElBbkNGbEIsV0FtQ2lCQztnQkFFbEMsT0FBT2lCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JsQixhQUFhLEVBQUU7Z0JBQ3RDLElBQU1pQixhQUFhLElBekNGbEIsV0F5Q2lCQztnQkFFbEMsT0FBT2lCO1lBQ1Q7OztXQTVDbUJsQiJ9