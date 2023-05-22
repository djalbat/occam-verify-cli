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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hOYW1lKG5hbWUpLFxuICAgICAgICAgIHR5cGVNYXRjaGVzID0gdGhpcy5tYXRjaFR5cGUodHlwZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IChuYW1lTWF0Y2hlcyAmJiB0eXBlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVHlwZSh0eXBlKSB7XG4gICAgY29uc3QgdHlwZU1hdGNoZXMgPSB0aGlzLnR5cGUubWF0Y2godHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpIHtcbiAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hOYW1lKG5hbWUpLFxuICAgICAgICAgIHR5cGVNYXRjaGVzID0gdGhpcy5tYXRjaFR5cGUodHlwZSksXG4gICAgICAgICAgbmFtZUFuZFR5cGVNYXRjaCA9IChuYW1lTWF0Y2hlcyAmJiB0eXBlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbmFtZUFuZFR5cGVNYXRjaDtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9OiR7dHlwZU5hbWV9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0aGlzLnR5cGUudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBqc29uID0gdHlwZTsgIC8vL1xuXG4gICAgdHlwZSA9IFR5cGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7IC8vL1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmFyaWFibGUiLCJuYW1lIiwidHlwZSIsImdldE5hbWUiLCJnZXRUeXBlIiwibWF0Y2giLCJ2YXJpYWJsZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hOYW1lIiwidHlwZU1hdGNoZXMiLCJtYXRjaFR5cGUiLCJtYXRjaGVzIiwibWF0Y2hOYW1lQW5kVHlwZSIsIm5hbWVBbmRUeXBlTWF0Y2giLCJhc1N0cmluZyIsInRva2VucyIsInR5cGVOYW1lIiwic3RyaW5nIiwidG9KU09OIiwidHlwZUpTT04iLCJqc29uIiwiZnJvbU5hbWVBbmRUeXBlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwiVHlwZSIsImZpbmRUeXBlQnlUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRixJQUFBLEFBQU1BLHlCQUFOO2FBQU1BLFNBQ1BDLElBQUksRUFBRUMsSUFBSTtnQ0FESEY7UUFFakIsSUFBSSxDQUFDQyxPQUFPQTtRQUNaLElBQUksQ0FBQ0MsT0FBT0E7O2tCQUhLRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0Y7WUFDZDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxRQUFRO2dCQUNaLElBQU1MLE9BQU9LLFNBQVNILFdBQ2hCRCxPQUFPSSxTQUFTRixXQUNoQkcsY0FBYyxJQUFJLENBQUNDLFVBQVVQLE9BQzdCUSxjQUFjLElBQUksQ0FBQ0MsVUFBVVIsT0FDN0JTLFVBQVdKLGVBQWVFO2dCQUVoQyxPQUFPRTtZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVQLElBQUk7Z0JBQ1osSUFBTU0sY0FBZSxJQUFJLENBQUNOLFNBQVNBO2dCQUVuQyxPQUFPTTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVSLElBQUk7Z0JBQ1osSUFBTU8sY0FBYyxJQUFJLENBQUNQLEtBQUtHLE1BQU1IO2dCQUVwQyxPQUFPTztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlgsSUFBSSxFQUFFQyxJQUFJO2dCQUN6QixJQUFNSyxjQUFjLElBQUksQ0FBQ0MsVUFBVVAsT0FDN0JRLGNBQWMsSUFBSSxDQUFDQyxVQUFVUixPQUM3QlcsbUJBQW9CTixlQUFlRTtnQkFFekMsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNO2dCQUNiLElBQU1DLFdBQVcsSUFBSSxDQUFDZCxLQUFLQyxXQUNyQmMsU0FBUyxBQUFDLEdBQWVELE9BQWIsSUFBSSxDQUFDZixNQUFLLEtBQVksT0FBVGU7Z0JBRS9CLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0gsTUFBTTtnQkFDWCxJQUFNSSxXQUFXLElBQUksQ0FBQ2pCLEtBQUtnQixPQUFPSCxTQUM1QmQsT0FBTyxJQUFJLENBQUNBLE1BQ1pDLE9BQU9pQixVQUNQQyxPQUFPO29CQUNMbkIsTUFBQUE7b0JBQ0FDLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9rQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGdCQUFnQnBCLElBQUksRUFBRUMsSUFBSTtnQkFDL0IsSUFBTUksV0FBVyxJQWhFQU4sU0FnRWFDLE1BQU1DO2dCQUVwQyxPQUFPSTtZQUNUOzs7WUFFT2dCLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkYsSUFBSSxFQUFFRyxXQUFXO2dCQUM3QyxJQUFNLEFBQUV0QixPQUFTbUIsS0FBVG5CO2dCQUVSLElBQUksQUFBRUMsT0FBU2tCLEtBQVRsQjtnQkFFTmtCLE9BQU9sQixNQUFPLEdBQUc7Z0JBRWpCQSxPQUFPc0IsY0FBS0YsdUJBQXVCRixNQUFNRztnQkFFekMsSUFBTVAsV0FBV2QsS0FBS0M7Z0JBRXRCRCxPQUFPcUIsWUFBWUUsbUJBQW1CVCxXQUFXLEdBQUc7Z0JBRXBELElBQU1WLFdBQVcsSUFsRkFOLFNBa0ZhQyxNQUFNQztnQkFFcEMsT0FBT0k7WUFDVDs7O1dBckZtQk4ifQ==