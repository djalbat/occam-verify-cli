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
            value: function fromJSON(json, callback) {
                var content = json, ruleName = _ruleNames.LABEL_RULE_NAME, node = callback(content, ruleName), label = new Label(node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgTEFCRUxfUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIHtcbiAgY29uc3RydWN0b3Iobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTm9kZSA9IHRoaXMubm9kZSxcbiAgICAgICAgICBsYWJlbE5hbWUgPSBsYWJlbE5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSksXG4gICAgICAgICAgbWF0Y2hlc05hbWUgPSAobGFiZWxOYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlKSxcbiAgICAgICAgICBqc29uID0gc3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBqc29uLCAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IExBQkVMX1JVTEVfTkFNRSxcbiAgICAgICAgICBub2RlID0gY2FsbGJhY2soY29udGVudCwgcnVsZU5hbWUpLFxuICAgICAgICAgIGxhYmVsID0gbmV3IExhYmVsKG5vZGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgTGFiZWwobm9kZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGFiZWwiLCJub2RlIiwiZ2V0Tm9kZSIsIm1hdGNoTmFtZSIsIm5hbWUiLCJsYWJlbE5vZGUiLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIiwibWF0Y2hlc05hbWUiLCJhc1N0cmluZyIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImNhbGxiYWNrIiwiY29udGVudCIsInJ1bGVOYW1lIiwiTEFCRUxfUlVMRV9OQU1FIiwibGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwidmFyaWFibGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NCQUpRO3lCQUNHO3FCQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLElBQUk7OEJBREdEO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7aUJBRktEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSSxFQUFFO2dCQUNkLElBQU1DLFlBQVksSUFBSSxDQUFDSixJQUFJLEVBQ3JCSyxZQUFZQyxJQUFBQSw2QkFBc0IsRUFBQ0YsWUFDbkNHLGNBQWVGLGNBQWNGO2dCQUVuQyxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTUMsU0FBU0MsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNWLElBQUk7Z0JBRXJDLE9BQU9TO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNRixTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1YsSUFBSSxHQUMvQlksT0FBT0gsUUFBUyxHQUFHO2dCQUV6QixPQUFPRztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsUUFBUSxFQUFFO2dCQUM5QixJQUFNQyxVQUFVSCxNQUNWSSxXQUFXQywwQkFBZSxFQUMxQmpCLE9BQU9jLFNBQVNDLFNBQVNDLFdBQ3pCRSxRQUFRLElBbENHbkIsTUFrQ09DO2dCQUV4QixPQUFPa0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNmLFNBQVMsRUFBRTtnQkFDOUIsSUFBTUosT0FBT0ksV0FDUGdCLFdBQVcsSUF6Q0FyQixNQXlDVUM7Z0JBRTNCLE9BQU9vQjtZQUNUOzs7V0E1Q21CckIifQ==