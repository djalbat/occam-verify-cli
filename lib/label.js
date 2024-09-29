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
            value: function matchMetavariableNode(metavariableNode) {
                return this.metavariable.matchMetavariableNode(metavariableNode);
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
            key: "fromLabelNodeAndMetavariable",
            value: function fromLabelNodeAndMetavariable(labelNode, metavariable, fileContext) {
                var node = labelNode, string = fileContext.nodeAsString(node), label = new Label(string, metavariable);
                return label;
            }
        }
    ]);
    return Label;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi9tZXRhdmFyaWFibGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFiZWwge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgdG9KU09OKGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IHRoaXMubWV0YXZhcmlhYmxlLnRvSlNPTihmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbjtcblxuICAgIGxldCB7IG1ldGF2YXJpYWJsZSB9ID0ganNvbjtcblxuICAgIGpzb24gPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBsYWJlbCA9IG5ldyBMYWJlbChzdHJpbmcsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsTm9kZUFuZE1ldGF2YXJpYWJsZShsYWJlbE5vZGUsIG1ldGF2YXJpYWJsZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbGFiZWxOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwoc3RyaW5nLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGFiZWwiLCJzdHJpbmciLCJtZXRhdmFyaWFibGUiLCJnZXRTdHJpbmciLCJnZXRNZXRhdmFyaWFibGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwiZmlsZUNvbnRleHQiLCJtZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwiTWV0YXZhcmlhYmxlIiwibGFiZWwiLCJmcm9tTGFiZWxOb2RlQW5kTWV0YXZhcmlhYmxlIiwibGFiZWxOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7bUVBRkk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVixJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLE1BQU0sRUFBRUMsWUFBWTtnQ0FEYkY7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBOztrQkFISEY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQUksT0FBTyxJQUFJLENBQUNKLFlBQVksQ0FBQ0cscUJBQXFCLENBQUNDO1lBQW1COzs7WUFFNUdDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXO2dCQUNoQixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDUCxZQUFZLENBQUNLLE1BQU0sQ0FBQ0MsY0FDNUNOLGVBQWVPLGtCQUNmUixTQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQlMsT0FBTztvQkFDTFQsUUFBQUE7b0JBQ0FDLGNBQUFBO2dCQUNGO2dCQUVOLE9BQU9RO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRixXQUFXO2dCQUMvQixJQUFNLEFBQUVQLFNBQVdTLEtBQVhUO2dCQUVSLElBQUksQUFBRUMsZUFBaUJRLEtBQWpCUjtnQkFFTlEsT0FBT1IsY0FBZSxHQUFHO2dCQUV6QkEsZUFBZVUscUJBQVksQ0FBQ0QsUUFBUSxDQUFDRCxNQUFNRjtnQkFFM0MsSUFBTUssUUFBUSxJQXJDR2IsTUFxQ09DLFFBQVFDO2dCQUVoQyxPQUFPVztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNkJBQTZCQyxTQUFTLEVBQUViLFlBQVksRUFBRU0sV0FBVztnQkFDdEUsSUFBTVEsT0FBT0QsV0FDUGQsU0FBU08sWUFBWVMsWUFBWSxDQUFDRCxPQUNsQ0gsUUFBUSxJQTdDR2IsTUE2Q09DLFFBQVFDO2dCQUVoQyxPQUFPVztZQUNUOzs7V0FoRG1CYiJ9