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
var _name = require("./utilities/name");
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
            key: "matchNode",
            value: function matchNode(node) {
                var matches = this.node.match(node);
                return matches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9sYWJlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbGFiZWxOYW1lRnJvbUxhYmVsTm9kZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBsYWJlbE5vZGVGcm9tTGFiZWxTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCB7XG4gIGNvbnN0cnVjdG9yKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGpzb24gPSBzdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGxhYmVsTm9kZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgTGFiZWwobm9kZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0ganNvbiwgLy8vXG4gICAgICAgICAgbGV4ZXIgID0gZmlsZUNvbnRleHQuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSBmaWxlQ29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBsYWJlbE5vZGUgPSBsYWJlbE5vZGVGcm9tTGFiZWxTdHJpbmcobGFiZWxTdHJpbmcsIGxleGVyLCBwYXJzZXIpLFxuICAgICAgICAgIG5vZGUgPSBsYWJlbE5vZGUsIC8vL1xuICAgICAgICAgIGxhYmVsID0gbmV3IExhYmVsKG5vZGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTGFiZWwiLCJub2RlIiwiZ2V0Tm9kZSIsIm1hdGNoTm9kZSIsIm1hdGNoZXMiLCJtYXRjaCIsImFzU3RyaW5nIiwidG9rZW5zIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidG9KU09OIiwianNvbiIsImZyb21MYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJ2YXJpYWJsZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxhYmVsU3RyaW5nIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsImxhYmVsTm9kZUZyb21MYWJlbFN0cmluZyIsImxhYmVsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztzQkFKUTtvQkFDVTtvQkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBQSxBQUFNQSxzQkFBRCxBQUFMO2FBQU1BLE1BQ1BDLElBQUk7Z0NBREdEO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBRktEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVGLElBQUk7Z0JBQ1osSUFBTUcsVUFBVSxJQUFJLENBQUNILElBQUksQ0FBQ0ksS0FBSyxDQUFDSjtnQkFFaEMsT0FBT0c7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNO2dCQUNiLElBQU1DLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDUixJQUFJLEVBQUVNO2dCQUV2QyxPQUFPQztZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9ILE1BQU07Z0JBQ1gsSUFBTUMsU0FBU0MsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNSLElBQUksRUFBRU0sU0FDakNJLE9BQU9ILFFBQVMsR0FBRztnQkFFekIsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTO2dCQUM1QixJQUFNWixPQUFPWSxXQUNQQyxXQUFXLElBOUJBZCxNQThCVUM7Z0JBRTNCLE9BQU9hO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJKLElBQUksRUFBRUssV0FBVztnQkFDN0MsSUFBTUMsY0FBY04sTUFDZE8sUUFBU0YsWUFBWUcsUUFBUSxJQUM3QkMsU0FBU0osWUFBWUssU0FBUyxJQUM5QlIsWUFBWVMsSUFBQUEsOEJBQXdCLEVBQUNMLGFBQWFDLE9BQU9FLFNBQ3pEbkIsT0FBT1ksV0FDUFUsUUFBUSxJQXpDR3ZCLE1BeUNPQztnQkFFeEIsT0FBT3NCO1lBQ1Q7OztXQTVDbUJ2QiJ9