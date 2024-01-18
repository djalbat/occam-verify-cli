"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Variable;
    }
});
var _type = /*#__PURE__*/ _interop_require_default(require("./type"));
var _string = require("./utilities/string");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Variable = /*#__PURE__*/ function() {
    function Variable(node, type) {
        _class_call_check(this, Variable);
        this.node = node;
        this.type = type;
    }
    _create_class(Variable, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "match",
            value: function match(variable) {
                var type = variable.getType(), node = variable.getNode(), typeMatches = this.matchType(type), nodeMatches = this.matchNode(node), matches = nodeMatches && typeMatches;
                return matches;
            }
        },
        {
            key: "matchNode",
            value: function matchNode(node) {
                var nodeMatches = this.node.match(node);
                return nodeMatches;
            }
        },
        {
            key: "matchType",
            value: function matchType(type) {
                var typeMatches = this.type.match(type);
                return typeMatches;
            }
        },
        {
            key: "matchNodeAndType",
            value: function matchNodeAndType(node, type) {
                var nodeMatches = this.matchNode(node), typeMatches = this.matchType(type), nodeAndTypeMatch = nodeMatches && typeMatches;
                return nodeAndTypeMatch;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var typeName = this.type.getName();
                var string = (0, _string.nodeAsString)(this.node, tokens);
                string = "".concat(string, ":").concat(typeName); ///
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var typeJSON = this.type.toJSON(tokens), string = (0, _string.nodeAsString)(this.node, tokens), node = string, type = typeJSON, json = {
                    node: node,
                    type: type
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var node = json.node;
                var lexer = fileContext.getLexer(), parser = fileContext.getParser(), variableString = node, variableNode = (0, _node.variableNodeFromVariableString)(variableString, lexer, parser);
                node = variableNode; ///
                var type = json.type;
                json = type; ///
                type = _type.default.fromJSONAndFileContext(json, fileContext);
                var typeName = type.getName();
                type = fileContext.findTypeByTypeName(typeName); ///
                var variable = new Variable(node, type);
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type) {
                var node = variableNode, variable = new Variable(node, type);
                return variable;
            }
        }
    ]);
    return Variable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUeXBlKHR5cGUpLFxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IG5vZGVNYXRjaGVzICYmIHR5cGVNYXRjaGVzO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUpIHtcbiAgICBjb25zdCB0eXBlTWF0Y2hlcyA9IHRoaXMudHlwZS5tYXRjaCh0eXBlKTtcblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9kZUFuZFR5cGUobm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgdHlwZU1hdGNoZXMgPSB0aGlzLm1hdGNoVHlwZSh0eXBlKSxcbiAgICAgICAgICBub2RlQW5kVHlwZU1hdGNoID0gbm9kZU1hdGNoZXMgJiYgdHlwZU1hdGNoZXM7XG5cbiAgICByZXR1cm4gbm9kZUFuZFR5cGVNYXRjaDtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgIGxldCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfToke3R5cGVOYW1lfWA7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHRoaXMudHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG5vZGUgPSBzdHJpbmcsICAvL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbm9kZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIG5vZGUgPSB2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBqc29uID0gdHlwZTsgIC8vL1xuXG4gICAgdHlwZSA9IFR5cGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7IC8vL1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGUiLCJub2RlIiwidHlwZSIsImdldE5vZGUiLCJnZXRUeXBlIiwibWF0Y2giLCJ2YXJpYWJsZSIsInR5cGVNYXRjaGVzIiwibWF0Y2hUeXBlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJtYXRjaGVzIiwibWF0Y2hOb2RlQW5kVHlwZSIsIm5vZGVBbmRUeXBlTWF0Y2giLCJhc1N0cmluZyIsInRva2VucyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRvSlNPTiIsInR5cGVKU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyIsIlR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7MkRBTEo7c0JBRVk7b0JBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEseUJBQUQsQUFBTDthQUFNQSxTQUNQQyxJQUFJLEVBQUVDLElBQUk7Z0NBREhGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSEtGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFFBQVE7Z0JBQ1osSUFBTUosT0FBT0ksU0FBU0YsT0FBTyxJQUN2QkgsT0FBT0ssU0FBU0gsT0FBTyxJQUN2QkksY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sT0FDN0JPLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNULE9BQzdCVSxVQUFVRixlQUFlRjtnQkFFL0IsT0FBT0k7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVVCxJQUFJO2dCQUNaLElBQU1RLGNBQWMsSUFBSSxDQUFDUixJQUFJLENBQUNJLEtBQUssQ0FBQ0o7Z0JBRXBDLE9BQU9RO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVU4sSUFBSTtnQkFDWixJQUFNSyxjQUFjLElBQUksQ0FBQ0wsSUFBSSxDQUFDRyxLQUFLLENBQUNIO2dCQUVwQyxPQUFPSztZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlgsSUFBSSxFQUFFQyxJQUFJO2dCQUN6QixJQUFNTyxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxPQUM3Qk0sY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sT0FDN0JXLG1CQUFtQkosZUFBZUY7Z0JBRXhDLE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTTtnQkFDYixJQUFNQyxXQUFXLElBQUksQ0FBQ2QsSUFBSSxDQUFDZSxPQUFPO2dCQUVsQyxJQUFJQyxTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ2xCLElBQUksRUFBRWM7Z0JBRXJDRyxTQUFTLEFBQUMsR0FBWUYsT0FBVkUsUUFBTyxLQUFZLE9BQVRGLFdBQVksR0FBRztnQkFFckMsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPTCxNQUFNO2dCQUNYLElBQU1NLFdBQVcsSUFBSSxDQUFDbkIsSUFBSSxDQUFDa0IsTUFBTSxDQUFDTCxTQUM1QkcsU0FBU0MsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNsQixJQUFJLEVBQUVjLFNBQ2pDZCxPQUFPaUIsUUFDUGhCLE9BQU9tQixVQUNQQyxPQUFPO29CQUNMckIsTUFBQUE7b0JBQ0FDLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9vQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkQsSUFBSSxFQUFFRSxXQUFXO2dCQUM3QyxJQUFJLEFBQUV2QixPQUFTcUIsS0FBVHJCO2dCQUVOLElBQU13QixRQUFTRCxZQUFZRSxRQUFRLElBQzdCQyxTQUFTSCxZQUFZSSxTQUFTLElBQzlCQyxpQkFBaUI1QixNQUNqQjZCLGVBQWVDLElBQUFBLG9DQUE4QixFQUFDRixnQkFBZ0JKLE9BQU9FO2dCQUUzRTFCLE9BQU82QixjQUFlLEdBQUc7Z0JBRXpCLElBQUksQUFBRTVCLE9BQVNvQixLQUFUcEI7Z0JBRU5vQixPQUFPcEIsTUFBTyxHQUFHO2dCQUVqQkEsT0FBTzhCLGFBQUksQ0FBQ1Qsc0JBQXNCLENBQUNELE1BQU1FO2dCQUV6QyxJQUFNUixXQUFXZCxLQUFLZSxPQUFPO2dCQUU3QmYsT0FBT3NCLFlBQVlTLGtCQUFrQixDQUFDakIsV0FBVyxHQUFHO2dCQUVwRCxJQUFNVixXQUFXLElBdkZBTixTQXVGYUMsTUFBTUM7Z0JBRXBDLE9BQU9JO1lBQ1Q7OztZQUVPNEIsS0FBQUE7bUJBQVAsU0FBT0Esd0JBQXdCSixZQUFZLEVBQUU1QixJQUFJO2dCQUMvQyxJQUFNRCxPQUFPNkIsY0FDUHhCLFdBQVcsSUE5RkFOLFNBOEZhQyxNQUFNQztnQkFFcEMsT0FBT0k7WUFDVDs7O1dBakdtQk4ifQ==