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
var Label = /*#__PURE__*/ function() {
    function Label(metavariableNode) {
        _class_call_check(this, Label);
        this.metavariableNode = metavariableNode;
    }
    _create_class(Label, [
        {
            key: "getMetavariableNode",
            value: function getMetavariableNode() {
                return this.metavariableNode;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matches = this.metavariableNode.match(metavariableNode);
                return matches;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var string = (0, _string.nodeAsString)(this.metavariableNode, tokens);
                return string;
            }
        }
    ], [
        {
            key: "fromMetavariableNode",
            value: function fromMetavariableNode(metavariableNode) {
                var label = new Label(metavariableNode);
                return label;
            }
        }
    ]);
    return Label;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5tZXRhdmFyaWFibGVOb2RlLm1hdGNoKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5tZXRhdmFyaWFibGVOb2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbGFiZWwgPSBuZXcgTGFiZWwobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMYWJlbCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hlcyIsIm1hdGNoIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztzQkFGUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLGdCQUFnQjtnQ0FEVEQ7UUFFakIsSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7O2tCQUZQRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsZ0JBQWdCO1lBQzlCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkYsZ0JBQWdCO2dCQUNwQyxJQUFNRyxVQUFVLElBQUksQ0FBQ0gsZ0JBQWdCLENBQUNJLEtBQUssQ0FBQ0o7Z0JBRTVDLE9BQU9HO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTTtnQkFDYixJQUFNQyxTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1IsZ0JBQWdCLEVBQUVNO2dCQUVuRCxPQUFPQztZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHFCQUFxQlQsZ0JBQWdCO2dCQUMxQyxJQUFNVSxRQUFRLElBdEJHWCxNQXNCT0M7Z0JBRXhCLE9BQU9VO1lBQ1Q7OztXQXpCbUJYIn0=