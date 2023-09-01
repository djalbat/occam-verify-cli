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
    function Label(node) {
        _class_call_check(this, Label);
        this.node = node;
    }
    _create_class(Label, [
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
            key: "fromLabelNode",
            value: function fromLabelNode(labelNode) {
                var node = labelNode, variable = new Label(node);
                return variable;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var labelString = json, lexer = fileContext.getLexer(), parser = fileContext.getParser(), labelNode = (0, _node.labelNodeFromLabelString)(labelString, lexer, parser), node = labelNode, label = new Label(node);
                return label;
            }
        }
    ]);
    return Label;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbGFiZWxOb2RlRnJvbUxhYmVsU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwge1xuICBjb25zdHJ1Y3Rvcihub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOb2RlID0gdGhpcy5ub2RlLFxuICAgICAgICAgIGxhYmVsTmFtZSA9IGxhYmVsTmFtZUZyb21MYWJlbE5vZGUobGFiZWxOb2RlKSxcbiAgICAgICAgICBtYXRjaGVzTmFtZSA9IChsYWJlbE5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBqc29uID0gc3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IExhYmVsKG5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGpzb24sIC8vL1xuICAgICAgICAgIGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgbGFiZWxOb2RlID0gbGFiZWxOb2RlRnJvbUxhYmVsU3RyaW5nKGxhYmVsU3RyaW5nLCBsZXhlciwgcGFyc2VyKSxcbiAgICAgICAgICBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICBsYWJlbCA9IG5ldyBMYWJlbChub2RlKTtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkxhYmVsIiwibm9kZSIsImdldE5vZGUiLCJtYXRjaE5hbWUiLCJuYW1lIiwibGFiZWxOb2RlIiwibGFiZWxOYW1lIiwibGFiZWxOYW1lRnJvbUxhYmVsTm9kZSIsIm1hdGNoZXNOYW1lIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZnJvbUxhYmVsTm9kZSIsInZhcmlhYmxlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibGFiZWxTdHJpbmciLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwibGFiZWxOb2RlRnJvbUxhYmVsU3RyaW5nIiwibGFiZWwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NCQUpRO3FCQUNVO29CQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLElBQUk7Z0NBREdEO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBRktEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUk7Z0JBQ1osSUFBTUMsWUFBWSxJQUFJLENBQUNKLElBQUksRUFDckJLLFlBQVlDLElBQUFBLDZCQUFzQixFQUFDRixZQUNuQ0csY0FBZUYsY0FBY0Y7Z0JBRW5DLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTTtnQkFDYixJQUFNQyxTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1gsSUFBSSxFQUFFUztnQkFFdkMsT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPSCxNQUFNO2dCQUNYLElBQU1DLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDWCxJQUFJLEVBQUVTLFNBQ2pDSSxPQUFPSCxRQUFTLEdBQUc7Z0JBRXpCLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY1YsU0FBUztnQkFDNUIsSUFBTUosT0FBT0ksV0FDUFcsV0FBVyxJQWhDQWhCLE1BZ0NVQztnQkFFM0IsT0FBT2U7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkgsSUFBSSxFQUFFSSxXQUFXO2dCQUM3QyxJQUFNQyxjQUFjTCxNQUNkTSxRQUFTRixZQUFZRyxRQUFRLElBQzdCQyxTQUFTSixZQUFZSyxTQUFTLElBQzlCbEIsWUFBWW1CLElBQUFBLDhCQUF3QixFQUFDTCxhQUFhQyxPQUFPRSxTQUN6RHJCLE9BQU9JLFdBQ1BvQixRQUFRLElBM0NHekIsTUEyQ09DO2dCQUV4QixPQUFPd0I7WUFDVDs7O1dBOUNtQnpCIn0=