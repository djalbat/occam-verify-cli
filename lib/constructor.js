"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Constructor;
    }
});
var _type = /*#__PURE__*/ _interopRequireDefault(require("./type"));
var _string = require("./utilities/string");
var _ruleNames = require("./ruleNames");
var _kinds = require("./kinds");
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
var Constructor = /*#__PURE__*/ function() {
    function Constructor(termNode, type) {
        _classCallCheck(this, Constructor);
        this.termNode = termNode;
        this.type = type;
    }
    _createClass(Constructor, [
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string;
                var termString = (0, _string.nodeAsString)(this.termNode);
                if (this.type === null) {
                    string = "".concat(termString);
                } else {
                    var noSuperType = true, typeString = this.type.asString(noSuperType);
                    string = "".concat(termString, ":").concat(typeString);
                }
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var termString = (0, _string.nodeAsString)(this.termNode), typeJSON = this.type === null ? null : this.type.toJSON(), kind = _kinds.CONSTRUCTOR_KIND, term = termString, type = typeJSON, json = {
                    kind: kind,
                    term: term,
                    type: type
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, callback) {
                var type = json.type;
                var term = json.term, content = term, ruleName = _ruleNames.TERM_RULE_NAME, node = callback(content, ruleName), termNode = node; ///
                json = type; ///
                type = _type.default.fromJSON(json);
                var constructor = new Constructor(termNode, type);
                return constructor;
            }
        },
        {
            key: "fromTermNodeAndType",
            value: function fromTermNodeAndType(termNode, type) {
                var constructor = new Constructor(termNode, type);
                return constructor;
            }
        }
    ]);
    return Constructor;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgQ09OU1RSVUNUT1JfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3IodGVybU5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSk7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vU3VwZXJUeXBlID0gdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuYXNTdHJpbmcobm9TdXBlclR5cGUpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSksXG4gICAgICAgICAgdHlwZUpTT04gPSAodGhpcy50eXBlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlLnRvSlNPTigpLFxuICAgICAgICAgIGtpbmQgPSBDT05TVFJVQ1RPUl9LSU5ELFxuICAgICAgICAgIHRlcm0gPSB0ZXJtU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjYWxsYmFjaykge1xuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBjb25zdCB7IHRlcm0gfSA9IGpzb24sXG4gICAgICAgICAgY29udGVudCA9IHRlcm0sICAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIG5vZGUgPSBjYWxsYmFjayhjb250ZW50LCBydWxlTmFtZSksXG4gICAgICAgICAgdGVybU5vZGUgPSBub2RlOyAvLy9cblxuICAgIGpzb24gPSB0eXBlOyAgLy8vXG5cbiAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uKTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbnN0cnVjdG9yIiwidGVybU5vZGUiLCJ0eXBlIiwiZ2V0VGVybU5vZGUiLCJnZXRUeXBlIiwiYXNTdHJpbmciLCJzdHJpbmciLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibm9TdXBlclR5cGUiLCJ0eXBlU3RyaW5nIiwidG9KU09OIiwidHlwZUpTT04iLCJraW5kIiwiQ09OU1RSVUNUT1JfS0lORCIsInRlcm0iLCJqc29uIiwiZnJvbUpTT04iLCJjYWxsYmFjayIsImNvbnRlbnQiLCJydWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwibm9kZSIsIlR5cGUiLCJjb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZUFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lEQU5KO3NCQUVZO3lCQUNFO3FCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsNEJBQU47YUFBTUEsWUFDUEMsUUFBUSxFQUFFQyxJQUFJOzhCQURQRjtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztpQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBSUM7Z0JBRUosSUFBTUMsYUFBYUMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNQLFFBQVE7Z0JBRTdDLElBQUksSUFBSSxDQUFDQyxJQUFJLEtBQUssSUFBSSxFQUFFO29CQUN0QkksU0FBUyxBQUFDLEdBQWEsT0FBWEM7Z0JBQ2QsT0FBTztvQkFDTCxJQUFNRSxjQUFjLElBQUksRUFDbEJDLGFBQWEsSUFBSSxDQUFDUixJQUFJLENBQUNHLFFBQVEsQ0FBQ0k7b0JBRXRDSCxTQUFTLEFBQUMsR0FBZ0JJLE9BQWRILFlBQVcsS0FBYyxPQUFYRztnQkFDNUIsQ0FBQztnQkFFRCxPQUFPSjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVM7Z0JBQ1AsSUFBTUosYUFBYUMsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNQLFFBQVEsR0FDdkNXLFdBQVcsQUFBQyxJQUFJLENBQUNWLElBQUksS0FBSyxJQUFJLEdBQ2hCLElBQUksR0FDRixJQUFJLENBQUNBLElBQUksQ0FBQ1MsTUFBTSxFQUFFLEVBQ2xDRSxPQUFPQyx1QkFBZ0IsRUFDdkJDLE9BQU9SLFlBQ1BMLE9BQU9VLFVBQ1BJLE9BQU87b0JBQ0xILE1BQUFBO29CQUNBRSxNQUFBQTtvQkFDQWIsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLFFBQVEsRUFBRTtnQkFDOUIsSUFBSSxBQUFFaEIsT0FBU2MsS0FBVGQ7Z0JBRU4sSUFBTSxBQUFFYSxPQUFTQyxLQUFURCxNQUNGSSxVQUFVSixNQUNWSyxXQUFXQyx5QkFBYyxFQUN6QkMsT0FBT0osU0FBU0MsU0FBU0MsV0FDekJuQixXQUFXcUIsTUFBTSxHQUFHO2dCQUUxQk4sT0FBT2QsTUFBTyxHQUFHO2dCQUVqQkEsT0FBT3FCLGFBQUksQ0FBQ04sUUFBUSxDQUFDRDtnQkFFckIsSUFBTVEsY0FBYyxJQTdESHhCLFlBNkRtQkMsVUFBVUM7Z0JBRTlDLE9BQU9zQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CeEIsUUFBUSxFQUFFQyxJQUFJLEVBQUU7Z0JBQ3pDLElBQU1zQixjQUFjLElBbkVIeEIsWUFtRW1CQyxVQUFVQztnQkFFOUMsT0FBT3NCO1lBQ1Q7OztXQXRFbUJ4QiJ9