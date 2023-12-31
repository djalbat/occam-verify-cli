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
    function Variable(name, type) {
        _class_call_check(this, Variable);
        this.name = name;
        this.type = type;
    }
    _create_class(Variable, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
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
                var name = variable.getName(), type = variable.getType(), nameMatches = this.matchName(name), typeMatches = this.matchType(type), matches = nameMatches && typeMatches;
                return matches;
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                var nameMatches = this.name === name;
                return nameMatches;
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
            key: "matchNameAndType",
            value: function matchNameAndType(name, type) {
                var nameMatches = this.matchName(name), typeMatches = this.matchType(type), nameAndTypeMatch = nameMatches && typeMatches;
                return nameAndTypeMatch;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var typeName = this.type.getName(), string = "".concat(this.name, ":").concat(typeName);
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var typeJSON = this.type.toJSON(tokens), name = this.name, type = typeJSON, json = {
                    name: name,
                    type: type
                };
                return json;
            }
        }
    ], [
        {
            key: "fromNameAndType",
            value: function fromNameAndType(name, type) {
                var variable = new Variable(name, type);
                return variable;
            }
        },
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var name = json.name;
                var type = json.type;
                json = type; ///
                type = _type.default.fromJSONAndFileContext(json, fileContext);
                var typeName = type.getName();
                type = fileContext.findTypeByTypeName(typeName); ///
                var variable = new Variable(name, type);
                return variable;
            }
        }
    ]);
    return Variable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hOYW1lKG5hbWUpLFxuICAgICAgICAgIHR5cGVNYXRjaGVzID0gdGhpcy5tYXRjaFR5cGUodHlwZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IChuYW1lTWF0Y2hlcyAmJiB0eXBlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVHlwZSh0eXBlKSB7XG4gICAgY29uc3QgdHlwZU1hdGNoZXMgPSB0aGlzLnR5cGUubWF0Y2godHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hOYW1lKG5hbWUpLFxuICAgICAgICAgIHR5cGVNYXRjaGVzID0gdGhpcy5tYXRjaFR5cGUodHlwZSksXG4gICAgICAgICAgbmFtZUFuZFR5cGVNYXRjaCA9IChuYW1lTWF0Y2hlcyAmJiB0eXBlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbmFtZUFuZFR5cGVNYXRjaDtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9OiR7dHlwZU5hbWV9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0aGlzLnR5cGUudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBqc29uID0gdHlwZTsgIC8vL1xuXG4gICAgdHlwZSA9IFR5cGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7IC8vL1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWYXJpYWJsZSIsIm5hbWUiLCJ0eXBlIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJtYXRjaCIsInZhcmlhYmxlIiwibmFtZU1hdGNoZXMiLCJtYXRjaE5hbWUiLCJ0eXBlTWF0Y2hlcyIsIm1hdGNoVHlwZSIsIm1hdGNoZXMiLCJtYXRjaE5hbWVBbmRUeXBlIiwibmFtZUFuZFR5cGVNYXRjaCIsImFzU3RyaW5nIiwidG9rZW5zIiwidHlwZU5hbWUiLCJzdHJpbmciLCJ0b0pTT04iLCJ0eXBlSlNPTiIsImpzb24iLCJmcm9tTmFtZUFuZFR5cGUiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsyREFGSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVGLElBQUEsQUFBTUEseUJBQUQsQUFBTDthQUFNQSxTQUNQQyxJQUFJLEVBQUVDLElBQUk7Z0NBREhGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSEtGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFFBQVE7Z0JBQ1osSUFBTUwsT0FBT0ssU0FBU0gsT0FBTyxJQUN2QkQsT0FBT0ksU0FBU0YsT0FBTyxJQUN2QkcsY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsT0FDN0JRLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNSLE9BQzdCUyxVQUFXSixlQUFlRTtnQkFFaEMsT0FBT0U7WUFDVDs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVUCxJQUFJO2dCQUNaLElBQU1NLGNBQWUsSUFBSSxDQUFDTixJQUFJLEtBQUtBO2dCQUVuQyxPQUFPTTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVSLElBQUk7Z0JBQ1osSUFBTU8sY0FBYyxJQUFJLENBQUNQLElBQUksQ0FBQ0csS0FBSyxDQUFDSDtnQkFFcEMsT0FBT087WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJYLElBQUksRUFBRUMsSUFBSTtnQkFDekIsSUFBTUssY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1AsT0FDN0JRLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNSLE9BQzdCVyxtQkFBb0JOLGVBQWVFO2dCQUV6QyxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU07Z0JBQ2IsSUFBTUMsV0FBVyxJQUFJLENBQUNkLElBQUksQ0FBQ0MsT0FBTyxJQUM1QmMsU0FBUyxBQUFDLEdBQWVELE9BQWIsSUFBSSxDQUFDZixJQUFJLEVBQUMsS0FBWSxPQUFUZTtnQkFFL0IsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPSCxNQUFNO2dCQUNYLElBQU1JLFdBQVcsSUFBSSxDQUFDakIsSUFBSSxDQUFDZ0IsTUFBTSxDQUFDSCxTQUM1QmQsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLE9BQU9pQixVQUNQQyxPQUFPO29CQUNMbkIsTUFBQUE7b0JBQ0FDLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9rQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGdCQUFnQnBCLElBQUksRUFBRUMsSUFBSTtnQkFDL0IsSUFBTUksV0FBVyxJQWhFQU4sU0FnRWFDLE1BQU1DO2dCQUVwQyxPQUFPSTtZQUNUOzs7WUFFT2dCLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkYsSUFBSSxFQUFFRyxXQUFXO2dCQUM3QyxJQUFNLEFBQUV0QixPQUFTbUIsS0FBVG5CO2dCQUVSLElBQUksQUFBRUMsT0FBU2tCLEtBQVRsQjtnQkFFTmtCLE9BQU9sQixNQUFPLEdBQUc7Z0JBRWpCQSxPQUFPc0IsYUFBSSxDQUFDRixzQkFBc0IsQ0FBQ0YsTUFBTUc7Z0JBRXpDLElBQU1QLFdBQVdkLEtBQUtDLE9BQU87Z0JBRTdCRCxPQUFPcUIsWUFBWUUsa0JBQWtCLENBQUNULFdBQVcsR0FBRztnQkFFcEQsSUFBTVYsV0FBVyxJQWxGQU4sU0FrRmFDLE1BQU1DO2dCQUVwQyxPQUFPSTtZQUNUOzs7V0FyRm1CTiJ9