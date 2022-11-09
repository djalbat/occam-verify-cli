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
var _ruleNames = require("./ruleNames");
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
            key: "asString",
            value: function asString() {
                var string;
                var statementString = (0, _string.nodeAsString)(this.statementNode);
                string = "".concat(statementString);
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementString = (0, _string.nodeAsString)(this.statementNode), kind = _kinds.COMBINATOR_KIND, statement = statementString, json = {
                    kind: kind,
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, callback) {
                var statement = json.statement, content = statement, ruleName = _ruleNames.STATEMENT_RULE_NAME, node = callback(content, ruleName), statementNode = node, combinator = new Combinator(statementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21iaW5hdG9yLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBDT01CSU5BVE9SX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5hdG9yIHtcbiAgY29uc3RydWN0b3Ioc3RhdGVtZW50Tm9kZSkge1xuICAgIHRoaXMuc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdGF0ZW1lbnRTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMuc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAga2luZCA9IENPTUJJTkFUT1JfS0lORCxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHsgc3RhdGVtZW50IH0gPSBqc29uLFxuICAgICAgICAgIGNvbnRlbnQgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgbm9kZSA9IGNhbGxiYWNrKGNvbnRlbnQsIHJ1bGVOYW1lKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSBuZXcgQ29tYmluYXRvcihzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbWJpbmF0b3IiLCJzdGF0ZW1lbnROb2RlIiwiYXNTdHJpbmciLCJzdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0b0pTT04iLCJraW5kIiwiQ09NQklOQVRPUl9LSU5EIiwic3RhdGVtZW50IiwianNvbiIsImZyb21KU09OIiwiY2FsbGJhY2siLCJjb250ZW50IiwicnVsZU5hbWUiLCJTVEFURU1FTlRfUlVMRV9OQU1FIiwibm9kZSIsImNvbWJpbmF0b3IiLCJmcm9tU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0JBSlE7cUJBQ0c7eUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJCLElBQUEsQUFBTUEsMkJBQU47YUFBTUEsV0FDUEMsYUFBYTs4QkFETkQ7UUFFakIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOztpQkFGSkQ7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDSixhQUFhO2dCQUV2REUsU0FBUyxBQUFDLEdBQWtCLE9BQWhCQztnQkFFWixPQUFPRDtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTUYsa0JBQWtCQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ0osYUFBYSxHQUNqRE0sT0FBT0Msc0JBQWUsRUFDdEJDLFlBQVlMLGlCQUNaTSxPQUFPO29CQUNMSCxNQUFBQTtvQkFDQUUsV0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLFFBQVEsRUFBRTtnQkFDOUIsSUFBTSxBQUFFSCxZQUFjQyxLQUFkRCxXQUNGSSxVQUFVSixXQUNWSyxXQUFXQyw4QkFBbUIsRUFDOUJDLE9BQU9KLFNBQVNDLFNBQVNDLFdBQ3pCYixnQkFBZ0JlLE1BQ2hCQyxhQUFhLElBakNGakIsV0FpQ2lCQztnQkFFbEMsT0FBT2dCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JqQixhQUFhLEVBQUU7Z0JBQ3RDLElBQU1nQixhQUFhLElBdkNGakIsV0F1Q2lCQztnQkFFbEMsT0FBT2dCO1lBQ1Q7OztXQTFDbUJqQiJ9