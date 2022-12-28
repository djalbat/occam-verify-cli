"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Label;
    }
});
var _string = require("./utilities/string");
var _ruleNames = require("./ruleNames");
var _query = require("./utilities/query");
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
var Label = /*#__PURE__*/ function() {
    function Label(node) {
        _classCallCheck(this, Label);
        this.node = node;
    }
    _createClass(Label, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                var labelNode = this.node, labelName = (0, _query.labelNameFromLabelNode)(labelNode), matchesName = labelName === name;
                return matchesName;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = (0, _string.nodeAsString)(this.node);
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var string = (0, _string.nodeAsString)(this.node), json = string; ///
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                var content = json, ruleName = _ruleNames.LABEL_RULE_NAME, node = releaseContext.nodeFromContentAndRuleName(content, ruleName), label = new Label(node);
                return label;
            }
        },
        {
            key: "fromLabelNode",
            value: function fromLabelNode(labelNode) {
                var node = labelNode, variable = new Label(node);
                return variable;
            }
        }
    ]);
    return Label;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgTEFCRUxfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIHtcbiAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBsYWJlbE5hbWUgPSBsYWJlbE5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSksXG4gICAgICAgICAgbWF0Y2hlc05hbWUgPSAobGFiZWxOYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlKSxcbiAgICAgICAgICBqc29uID0gc3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBqc29uLCAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IExBQkVMX1JVTEVfTkFNRSxcbiAgICAgICAgICBub2RlID0gcmVsZWFzZUNvbnRleHQubm9kZUZyb21Db250ZW50QW5kUnVsZU5hbWUoY29udGVudCwgcnVsZU5hbWUpLFxuICAgICAgICAgIGxhYmVsID0gbmV3IExhYmVsKG5vZGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgTGFiZWwobm9kZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGFiZWwiLCJub2RlIiwiZ2V0Tm9kZSIsIm1hdGNoTmFtZSIsIm5hbWUiLCJsYWJlbE5vZGUiLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIiwibWF0Y2hlc05hbWUiLCJhc1N0cmluZyIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0IiwiY29udGVudCIsInJ1bGVOYW1lIiwiTEFCRUxfUlVMRV9OQU1FIiwibm9kZUZyb21Db250ZW50QW5kUnVsZU5hbWUiLCJsYWJlbCIsImZyb21MYWJlbE5vZGUiLCJ2YXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0JBSlE7eUJBQ0c7cUJBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsSUFBSTs4QkFER0Q7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztpQkFGS0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJLEVBQUU7Z0JBQ2QsSUFBTUMsWUFBWSxJQUFJLENBQUNKLElBQUksRUFDckJLLFlBQVlDLElBQUFBLDZCQUFzQixFQUFDRixZQUNuQ0csY0FBZUYsY0FBY0Y7Z0JBRW5DLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1YsSUFBSTtnQkFFckMsT0FBT1M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1GLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDVixJQUFJLEdBQy9CWSxPQUFPSCxRQUFTLEdBQUc7Z0JBRXpCLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxjQUFjLEVBQUU7Z0JBQ3BDLElBQU1DLFVBQVVILE1BQ1ZJLFdBQVdDLDBCQUFlLEVBQzFCakIsT0FBT2MsZUFBZUksMEJBQTBCLENBQUNILFNBQVNDLFdBQzFERyxRQUFRLElBbENHcEIsTUFrQ09DO2dCQUV4QixPQUFPbUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNoQixTQUFTLEVBQUU7Z0JBQzlCLElBQU1KLE9BQU9JLFdBQ1BpQixXQUFXLElBekNBdEIsTUF5Q1VDO2dCQUUzQixPQUFPcUI7WUFDVDs7O1dBNUNtQnRCIn0=