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
var _kinds = require("./kinds");
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
                var statementString = (0, _string.nodeAsString)(this.statementNode, tokens), kind = _kinds.COMBINATOR_KIND, statement = statementString, json = {
                    kind: kind,
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var statement = json.statement, statementString = statement, lexer = context.getLexer(), parser = context.getParser(), statementNode = (0, _node.statementNodeFromStatementString)(statementString, lexer, parser), combinator = new Combinator(statementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBDT01CSU5BVE9SX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5hdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50Tm9kZSwgdG9rZW5zKTtcblxuICAgIHN0cmluZyA9IGAke3N0YXRlbWVudFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5zdGF0ZW1lbnROb2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGtpbmQgPSBDT01CSU5BVE9SX0tJTkQsXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50U3RyaW5nLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIGxleGVyID0gY29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGVGcm9tU3RhdGVtZW50U3RyaW5nKHN0YXRlbWVudFN0cmluZywgbGV4ZXIsIHBhcnNlciksXG4gICAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbWJpbmF0b3IiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImFzU3RyaW5nIiwidG9rZW5zIiwic3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidG9KU09OIiwia2luZCIsIkNPTUJJTkFUT1JfS0lORCIsInN0YXRlbWVudCIsImpzb24iLCJmcm9tSlNPTiIsImNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwic3RhdGVtZW50Tm9kZUZyb21TdGF0ZW1lbnRTdHJpbmciLCJjb21iaW5hdG9yIiwiZnJvbVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NCQUpRO3FCQUNHO29CQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxhQUFhOzhCQURORDtRQUVqQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7O2lCQUZKRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxtQkFBbUI7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDRCxhQUFhO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU0sRUFBRTtnQkFDZixJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDTixhQUFhLEVBQUVHO2dCQUV6REMsU0FBUyxBQUFDLEdBQWtCLE9BQWhCQztnQkFFWixPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9KLE1BQU0sRUFBRTtnQkFDYixJQUFNRSxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDTixhQUFhLEVBQUVHLFNBQ25ESyxPQUFPQyxzQkFBZSxFQUN0QkMsWUFBWUwsaUJBQ1pNLE9BQU87b0JBQ0xILE1BQUFBO29CQUNBRSxXQUFBQTtnQkFDRjtnQkFFTixPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsT0FBTyxFQUFFO2dCQUM3QixJQUFNLEFBQUVILFlBQWNDLEtBQWRELFdBQ0ZMLGtCQUFrQkssV0FDbEJJLFFBQVFELFFBQVFFLFFBQVEsSUFDeEJDLFNBQVNILFFBQVFJLFNBQVMsSUFDMUJqQixnQkFBZ0JrQixJQUFBQSxzQ0FBZ0MsRUFBQ2IsaUJBQWlCUyxPQUFPRSxTQUN6RUcsYUFBYSxJQXJDRnBCLFdBcUNpQkM7Z0JBRWxDLE9BQU9tQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCcEIsYUFBYSxFQUFFO2dCQUN0QyxJQUFNbUIsYUFBYSxJQTNDRnBCLFdBMkNpQkM7Z0JBRWxDLE9BQU9tQjtZQUNUOzs7V0E5Q21CcEIifQ==