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
            key: "fromLabelNode",
            value: function fromLabelNode(labelNode) {
                var node = labelNode, variable = new Label(node);
                return variable;
            }
        }
    ]);
    return Label;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgbGFiZWxOYW1lID0gbGFiZWxOYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpLFxuICAgICAgICAgIG1hdGNoZXNOYW1lID0gKGxhYmVsTmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSksXG4gICAgICAgICAganNvbiA9IHN0cmluZzsgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IExhYmVsKG5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxhYmVsIiwibm9kZSIsImdldE5vZGUiLCJtYXRjaE5hbWUiLCJuYW1lIiwibGFiZWxOb2RlIiwibGFiZWxOYW1lIiwibGFiZWxOYW1lRnJvbUxhYmVsTm9kZSIsIm1hdGNoZXNOYW1lIiwiYXNTdHJpbmciLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZnJvbUxhYmVsTm9kZSIsInZhcmlhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7OztzQkFIUTtxQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEIsSUFBQSxBQUFNQSxzQkFBTjthQUFNQSxNQUNQQyxJQUFJOzhCQURHRDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7O2lCQUZLRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUksRUFBRTtnQkFDZCxJQUFNQyxZQUFZLElBQUksQ0FBQ0osSUFBSSxFQUNyQkssWUFBWUMsSUFBQUEsNkJBQXNCLEVBQUNGLFlBQ25DRyxjQUFlRixjQUFjRjtnQkFFbkMsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQU1DLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDVixJQUFJO2dCQUVyQyxPQUFPUztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTUYsU0FBU0MsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNWLElBQUksR0FDL0JZLE9BQU9ILFFBQVEsR0FBRztnQkFFeEIsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjVCxTQUFTLEVBQUU7Z0JBQzlCLElBQU1KLE9BQU9JLFdBQ1BVLFdBQVcsSUFoQ0FmLE1BZ0NVQztnQkFFM0IsT0FBT2M7WUFDVDs7O1dBbkNtQmYifQ==