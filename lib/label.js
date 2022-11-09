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
                var content = json, ruleName = _ruleNames.TERM_RULE_NAME, node = callback(content, ruleName), label = new Label(node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcbmltcG9ydCB7IGxhYmVsTmFtZUZyb21MYWJlbE5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwge1xuICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIGxhYmVsTmFtZSA9IGxhYmVsTmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlKSxcbiAgICAgICAgICBtYXRjaGVzTmFtZSA9IChsYWJlbE5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUpLFxuICAgICAgICAgIGpzb24gPSBzdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgY29udGVudCA9IGpzb24sIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gVEVSTV9SVUxFX05BTUUsXG4gICAgICAgICAgbm9kZSA9IGNhbGxiYWNrKGNvbnRlbnQsIHJ1bGVOYW1lKSxcbiAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChub2RlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IExhYmVsKG5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxhYmVsIiwibm9kZSIsImdldE5vZGUiLCJtYXRjaE5hbWUiLCJuYW1lIiwibGFiZWxOb2RlIiwibGFiZWxOYW1lIiwibGFiZWxOYW1lRnJvbUxhYmVsTm9kZSIsIm1hdGNoZXNOYW1lIiwiYXNTdHJpbmciLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjYWxsYmFjayIsImNvbnRlbnQiLCJydWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwibGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwidmFyaWFibGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NCQUpRO3lCQUNFO3FCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLElBQUk7OEJBREdEO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7aUJBRktEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSSxFQUFFO2dCQUNkLElBQU1DLFlBQVksSUFBSSxDQUFDSixJQUFJLEVBQ3JCSyxZQUFZQyxJQUFBQSw2QkFBc0IsRUFBQ0YsWUFDbkNHLGNBQWVGLGNBQWNGO2dCQUVuQyxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBTUMsU0FBU0MsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNWLElBQUk7Z0JBRXJDLE9BQU9TO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNRixTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1YsSUFBSSxHQUMvQlksT0FBT0gsUUFBUyxHQUFHO2dCQUV6QixPQUFPRztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsUUFBUSxFQUFFO2dCQUM5QixJQUFNQyxVQUFVSCxNQUNWSSxXQUFXQyx5QkFBYyxFQUN6QmpCLE9BQU9jLFNBQVNDLFNBQVNDLFdBQ3pCRSxRQUFRLElBbENHbkIsTUFrQ09DO2dCQUV4QixPQUFPa0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNmLFNBQVMsRUFBRTtnQkFDOUIsSUFBTUosT0FBT0ksV0FDUGdCLFdBQVcsSUF6Q0FyQixNQXlDVUM7Z0JBRTNCLE9BQU9vQjtZQUNUOzs7V0E1Q21CckIifQ==