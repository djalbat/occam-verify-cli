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
var _type = /*#__PURE__*/ _interopRequireDefault(require("./type"));
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Variable = /*#__PURE__*/ function() {
    function Variable(name, type) {
        _classCallCheck(this, Variable);
        this.name = name;
        this.type = type;
    }
    _createClass(Variable, [
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
            key: "matchName",
            value: function matchName(name) {
                var matchesName = this.name === name;
                return matchesName;
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
        },
        {
            key: "fromNameAndType",
            value: function fromNameAndType(name, type) {
                var variable = new Variable(name, type);
                return variable;
            }
        }
    ]);
    return Variable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOYW1lID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke3R5cGVOYW1lfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdGhpcy50eXBlLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbGV0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgIGpzb24gPSB0eXBlOyAgLy8vXG5cbiAgICB0eXBlID0gVHlwZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTsgLy8vXG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZhcmlhYmxlIiwibmFtZSIsInR5cGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJ0eXBlTmFtZSIsInN0cmluZyIsInRvSlNPTiIsInR5cGVKU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsIlR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ2YXJpYWJsZSIsImZyb21OYW1lQW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7eURBRko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRixJQUFBLEFBQU1BLHlCQUFOO2FBQU1BLFNBQ1BDLElBQUksRUFBRUMsSUFBSTs4QkFESEY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztpQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVKLElBQUksRUFBRTtnQkFDZCxJQUFNSyxjQUFlLElBQUksQ0FBQ0wsSUFBSSxLQUFLQTtnQkFFbkMsT0FBT0s7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBTUMsV0FBVyxJQUFJLENBQUNQLElBQUksQ0FBQ0MsT0FBTyxJQUM1Qk8sU0FBUyxBQUFDLEdBQWVELE9BQWIsSUFBSSxDQUFDUixJQUFJLEVBQUMsS0FBWSxPQUFUUTtnQkFFL0IsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPSCxNQUFNLEVBQUU7Z0JBQ2IsSUFBTUksV0FBVyxJQUFJLENBQUNWLElBQUksQ0FBQ1MsTUFBTSxDQUFDSCxTQUM1QlAsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLE9BQU9VLFVBQ1BDLE9BQU87b0JBQ0xaLE1BQUFBO29CQUNBQyxNQUFBQTtnQkFDRjtnQkFFTixPQUFPVztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkQsSUFBSSxFQUFFRSxXQUFXLEVBQUU7Z0JBQy9DLElBQU0sQUFBRWQsT0FBU1ksS0FBVFo7Z0JBRVIsSUFBSSxBQUFFQyxPQUFTVyxLQUFUWDtnQkFFTlcsT0FBT1gsTUFBTyxHQUFHO2dCQUVqQkEsT0FBT2MsYUFBSSxDQUFDRixzQkFBc0IsQ0FBQ0QsTUFBTUU7Z0JBRXpDLElBQU1OLFdBQVdQLEtBQUtDLE9BQU87Z0JBRTdCRCxPQUFPYSxZQUFZRSxrQkFBa0IsQ0FBQ1IsV0FBVyxHQUFHO2dCQUVwRCxJQUFNUyxXQUFXLElBcERBbEIsU0FvRGFDLE1BQU1DO2dCQUVwQyxPQUFPZ0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGdCQUFnQmxCLElBQUksRUFBRUMsSUFBSSxFQUFFO2dCQUNqQyxJQUFNZ0IsV0FBVyxJQTFEQWxCLFNBMERhQyxNQUFNQztnQkFFcEMsT0FBT2dCO1lBQ1Q7OztXQTdEbUJsQiJ9