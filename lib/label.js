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
            value: function fromJSON(json, lexer, parser) {
                var labelString = json, labelNode = (0, _node.labelNodeFromLabelString)(labelString, lexer, parser), node = labelNode, label = new Label(node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbGFiZWxOb2RlRnJvbUxhYmVsU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwge1xuICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIGxhYmVsTmFtZSA9IGxhYmVsTmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlKSxcbiAgICAgICAgICBtYXRjaGVzTmFtZSA9IChsYWJlbE5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBqc29uID0gc3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBsZXhlciwgcGFyc2VyKSB7XG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBqc29uLCAvLy9cbiAgICAgICAgICBsYWJlbE5vZGUgPSBsYWJlbE5vZGVGcm9tTGFiZWxTdHJpbmcobGFiZWxTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICAgIGxhYmVsID0gbmV3IExhYmVsKG5vZGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgTGFiZWwobm9kZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTGFiZWwiLCJub2RlIiwiZ2V0Tm9kZSIsIm1hdGNoTmFtZSIsIm5hbWUiLCJsYWJlbE5vZGUiLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVGcm9tTGFiZWxOb2RlIiwibWF0Y2hlc05hbWUiLCJhc1N0cmluZyIsInRva2VucyIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwicGFyc2VyIiwibGFiZWxTdHJpbmciLCJsYWJlbE5vZGVGcm9tTGFiZWxTdHJpbmciLCJsYWJlbCIsImZyb21MYWJlbE5vZGUiLCJ2YXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7c0JBSlE7cUJBQ1U7b0JBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsSUFBSTs4QkFER0Q7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztpQkFGS0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJLEVBQUU7Z0JBQ2QsSUFBTUMsWUFBWSxJQUFJLENBQUNKLElBQUksRUFDckJLLFlBQVlDLElBQUFBLDZCQUFzQixFQUFDRixZQUNuQ0csY0FBZUYsY0FBY0Y7Z0JBRW5DLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTSxFQUFFO2dCQUNmLElBQU1DLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDWCxJQUFJLEVBQUVTO2dCQUV2QyxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9ILE1BQU0sRUFBRTtnQkFDYixJQUFNQyxTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1gsSUFBSSxFQUFFUyxTQUNqQ0ksT0FBT0gsUUFBUyxHQUFHO2dCQUV6QixPQUFPRztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsS0FBSyxFQUFFQyxNQUFNLEVBQUU7Z0JBQ25DLElBQU1DLGNBQWNKLE1BQ2RULFlBQVljLElBQUFBLDhCQUF3QixFQUFDRCxhQUFhRixPQUFPQyxTQUN6RGhCLE9BQU9JLFdBQ1BlLFFBQVEsSUFsQ0dwQixNQWtDT0M7Z0JBRXhCLE9BQU9tQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY2hCLFNBQVMsRUFBRTtnQkFDOUIsSUFBTUosT0FBT0ksV0FDUGlCLFdBQVcsSUF6Q0F0QixNQXlDVUM7Z0JBRTNCLE9BQU9xQjtZQUNUOzs7V0E1Q21CdEIifQ==