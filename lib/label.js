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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbGFiZWxOb2RlRnJvbUxhYmVsU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5vZGUgPSB0aGlzLm5vZGUsXG4gICAgICAgICAgbGFiZWxOYW1lID0gbGFiZWxOYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpLFxuICAgICAgICAgIG1hdGNoZXNOYW1lID0gKGxhYmVsTmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSksXG4gICAgICAgICAganNvbiA9IHN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGpzb24sIC8vL1xuICAgICAgICAgIGxhYmVsTm9kZSA9IGxhYmVsTm9kZUZyb21MYWJlbFN0cmluZyhsYWJlbFN0cmluZywgcmVsZWFzZUNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICAgIGxhYmVsID0gbmV3IExhYmVsKG5vZGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgTGFiZWwobm9kZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGFiZWwiLCJub2RlIiwiZ2V0Tm9kZSIsIm1hdGNoTmFtZSIsIm5hbWUiLCJsYWJlbE5vZGUiLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIiwibWF0Y2hlc05hbWUiLCJhc1N0cmluZyIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0IiwibGFiZWxTdHJpbmciLCJsYWJlbE5vZGVGcm9tTGFiZWxTdHJpbmciLCJsYWJlbCIsImZyb21MYWJlbE5vZGUiLCJ2YXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0JBSlE7cUJBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3hCLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsSUFBSTs4QkFER0Q7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztpQkFGS0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJLEVBQUU7Z0JBQ2QsSUFBTUMsWUFBWSxJQUFJLENBQUNKLElBQUksRUFDckJLLFlBQVlDLElBQUFBLDZCQUFzQixFQUFDRixZQUNuQ0csY0FBZUYsY0FBY0Y7Z0JBRW5DLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFNQyxTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1YsSUFBSTtnQkFFckMsT0FBT1M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1GLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDVixJQUFJLEdBQy9CWSxPQUFPSCxRQUFTLEdBQUc7Z0JBRXpCLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxjQUFjLEVBQUU7Z0JBQ3BDLElBQU1DLGNBQWNILE1BQ2RSLFlBQVlZLElBQUFBLGdDQUF3QixFQUFDRCxhQUFhRCxpQkFDbERkLE9BQU9JLFdBQ1BhLFFBQVEsSUFsQ0dsQixNQWtDT0M7Z0JBRXhCLE9BQU9pQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY2QsU0FBUyxFQUFFO2dCQUM5QixJQUFNSixPQUFPSSxXQUNQZSxXQUFXLElBekNBcEIsTUF5Q1VDO2dCQUUzQixPQUFPbUI7WUFDVDs7O1dBNUNtQnBCIn0=