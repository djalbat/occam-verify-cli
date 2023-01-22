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
            value: function asString(tokens) {
                var string = (0, _string.nodeAsString)(this.node, tokens);
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var string = (0, _string.nodeAsString)(this.node, tokens), json = string; ///
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, releaseContext) {
                var labelString = json, labelNode = (0, _string.labelNodeFromLabelString)(labelString, releaseContext), node = labelNode, label = new Label(node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbGFiZWxOb2RlRnJvbUxhYmVsU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgbGFiZWxOYW1lID0gbGFiZWxOYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpLFxuICAgICAgICAgIG1hdGNoZXNOYW1lID0gKGxhYmVsTmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGpzb24gPSBzdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBqc29uLCAvLy9cbiAgICAgICAgICBsYWJlbE5vZGUgPSBsYWJlbE5vZGVGcm9tTGFiZWxTdHJpbmcobGFiZWxTdHJpbmcsIHJlbGVhc2VDb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChub2RlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IExhYmVsKG5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxhYmVsIiwibm9kZSIsImdldE5vZGUiLCJtYXRjaE5hbWUiLCJuYW1lIiwibGFiZWxOb2RlIiwibGFiZWxOYW1lIiwibGFiZWxOYW1lRnJvbUxhYmVsTm9kZSIsIm1hdGNoZXNOYW1lIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsImxhYmVsU3RyaW5nIiwibGFiZWxOb2RlRnJvbUxhYmVsU3RyaW5nIiwibGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwidmFyaWFibGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NCQUpRO3FCQUNVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd4QixJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLElBQUk7OEJBREdEO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7aUJBRktEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSSxFQUFFO2dCQUNkLElBQU1DLFlBQVksSUFBSSxDQUFDSixJQUFJLEVBQ3JCSyxZQUFZQyxJQUFBQSw2QkFBc0IsRUFBQ0YsWUFDbkNHLGNBQWVGLGNBQWNGO2dCQUVuQyxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU0sRUFBRTtnQkFDZixJQUFNQyxTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1gsSUFBSSxFQUFFUztnQkFFdkMsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPSCxNQUFNLEVBQUU7Z0JBQ2IsSUFBTUMsU0FBU0MsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNYLElBQUksRUFBRVMsU0FDakNJLE9BQU9ILFFBQVMsR0FBRztnQkFFekIsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLGNBQWMsRUFBRTtnQkFDcEMsSUFBTUMsY0FBY0gsTUFDZFQsWUFBWWEsSUFBQUEsZ0NBQXdCLEVBQUNELGFBQWFELGlCQUNsRGYsT0FBT0ksV0FDUGMsUUFBUSxJQWxDR25CLE1Ba0NPQztnQkFFeEIsT0FBT2tCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjZixTQUFTLEVBQUU7Z0JBQzlCLElBQU1KLE9BQU9JLFdBQ1BnQixXQUFXLElBekNBckIsTUF5Q1VDO2dCQUUzQixPQUFPb0I7WUFDVDs7O1dBNUNtQnJCIn0=