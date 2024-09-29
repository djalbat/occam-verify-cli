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
var _metavariable = /*#__PURE__*/ _interop_require_default(require("./metavariable"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Label = /*#__PURE__*/ function() {
    function Label(string, metavariable) {
        _class_call_check(this, Label);
        this.string = string;
        this.metavariable = metavariable;
    }
    _create_class(Label, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode1) {
                return this.metavariable.matchMetavariableNode(metavariableNode1);
            }
        },
        {
            key: "toJSON",
            value: function toJSON(fileContext) {
                var metavariableJSON = this.metavariable.toJSON(fileContext), metavariable = metavariableJSON, string = this.string, json = {
                    string: string,
                    metavariable: metavariable
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var string = json.string;
                var metavariable = json.metavariable;
                json = metavariable; ///
                metavariable = _metavariable.default.fromJSON(json, fileContext);
                var label = new Label(string, metavariable);
                return label;
            }
        },
        {
            key: "fromLabelNode",
            value: function fromLabelNode(labelNode, fileContext) {
                var node = labelNode, string = fileContext.nodeAsString(node), metavariable = _metavariable.default.fromMetavariableNode(metavariableNode), label = new Label(string, metavariable);
                return label;
            }
        }
    ]);
    return Label;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9tZXRhdmFyaWFibGVcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhYmVsIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIHRvSlNPTihmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSB0aGlzLm1ldGF2YXJpYWJsZS50b0pTT04oZmlsZUNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLnN0cmluZyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb247XG5cbiAgICBsZXQgeyBtZXRhdmFyaWFibGUgfSA9IGpzb247XG5cbiAgICBqc29uID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBuZXcgTGFiZWwoc3RyaW5nLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoc3RyaW5nLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGFiZWwiLCJzdHJpbmciLCJtZXRhdmFyaWFibGUiLCJnZXRTdHJpbmciLCJnZXRNZXRhdmFyaWFibGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwiZmlsZUNvbnRleHQiLCJtZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwiTWV0YXZhcmlhYmxlIiwibGFiZWwiLCJmcm9tTGFiZWxOb2RlIiwibGFiZWxOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21NZXRhdmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzttRUFKSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlWLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsTUFBTSxFQUFFQyxZQUFZO2dDQURiRjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUhIRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGlCQUFnQjtnQkFBSSxPQUFPLElBQUksQ0FBQ0osWUFBWSxDQUFDRyxxQkFBcUIsQ0FBQ0M7WUFBbUI7OztZQUU1R0MsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVc7Z0JBQ2hCLElBQU1DLG1CQUFtQixJQUFJLENBQUNQLFlBQVksQ0FBQ0ssTUFBTSxDQUFDQyxjQUM1Q04sZUFBZU8sa0JBQ2ZSLFNBQVMsSUFBSSxDQUFDQSxNQUFNLEVBQ3BCUyxPQUFPO29CQUNMVCxRQUFBQTtvQkFDQUMsY0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT1E7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVGLFdBQVc7Z0JBQy9CLElBQU0sQUFBRVAsU0FBV1MsS0FBWFQ7Z0JBRVIsSUFBSSxBQUFFQyxlQUFpQlEsS0FBakJSO2dCQUVOUSxPQUFPUixjQUFlLEdBQUc7Z0JBRXpCQSxlQUFlVSxxQkFBWSxDQUFDRCxRQUFRLENBQUNELE1BQU1GO2dCQUUzQyxJQUFNSyxRQUFRLElBckNHYixNQXFDT0MsUUFBUUM7Z0JBRWhDLE9BQU9XO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVQLFdBQVc7Z0JBQ3pDLElBQU1RLE9BQU9ELFdBQ1BkLFNBQVNPLFlBQVlTLFlBQVksQ0FBQ0QsT0FDbENkLGVBQWVVLHFCQUFZLENBQUNNLG9CQUFvQixDQUFDWixtQkFDakRPLFFBQVEsSUE5Q0diLE1BOENPQyxRQUFRQztnQkFFaEMsT0FBT1c7WUFDVDs7O1dBakRtQmIifQ==