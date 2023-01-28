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
var _kinds = require("./kinds");
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
            value: function asString(tokens) {
                var string;
                var termString = (0, _string.nodeAsString)(this.termNode, tokens);
                if (this.type === null) {
                    string = "".concat(termString);
                } else {
                    var noSuperType = true, typeString = this.type.asString(tokens, noSuperType);
                    string = "".concat(termString, ":").concat(typeString);
                }
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var termString = (0, _string.nodeAsString)(this.termNode, tokens), typeJSON = this.type === null ? null : this.type.toJSON(tokens), kind = _kinds.CONSTRUCTOR_KIND, term = termString, type = typeJSON, json = {
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
            value: function fromJSON(json, lexer, parser) {
                var term = json.term, termString = term, termNode = (0, _node.termNodeFromTermString)(termString, lexer, parser);
                var type = json.type;
                if (type !== null) {
                    var typeJSON = type; ///
                    json = typeJSON; ///
                    type = _type.default.fromJSON(json, lexer, parser);
                    var typeName = type.getName();
                    type = releaseContext.findTypeByTypeName(typeName); ///
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBDT05TVFJVQ1RPUl9LSU5EIH0gZnJvbSBcIi4va2luZHNcIjtcbmltcG9ydCB7IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvciB7XG4gIGNvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKSB7XG4gICAgdGhpcy50ZXJtTm9kZSA9IHRlcm1Ob2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMudGVybU5vZGUsIHRva2Vucyk7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vU3VwZXJUeXBlID0gdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuYXNTdHJpbmcodG9rZW5zLCBub1N1cGVyVHlwZSk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9OiR7dHlwZVN0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnRlcm1Ob2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHR5cGVKU09OID0gKHRoaXMudHlwZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBraW5kID0gQ09OU1RSVUNUT1JfS0lORCxcbiAgICAgICAgICB0ZXJtID0gdGVybVN0cmluZywgIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgdGVybSxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgbGV4ZXIsIHBhcnNlcikge1xuICAgIGNvbnN0IHsgdGVybSB9ID0ganNvbixcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybSwgIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlOyAgLy8vXG5cbiAgICAgIGpzb24gPSB0eXBlSlNPTjsgIC8vL1xuXG4gICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCBsZXhlciwgcGFyc2VyKTtcblxuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgICAgdHlwZSA9IHJlbGVhc2VDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbnN0cnVjdG9yIiwidGVybU5vZGUiLCJ0eXBlIiwiZ2V0VGVybU5vZGUiLCJnZXRUeXBlIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJzdHJpbmciLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibm9TdXBlclR5cGUiLCJ0eXBlU3RyaW5nIiwidG9KU09OIiwidHlwZUpTT04iLCJraW5kIiwiQ09OU1RSVUNUT1JfS0lORCIsInRlcm0iLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsInBhcnNlciIsInRlcm1Ob2RlRnJvbVRlcm1TdHJpbmciLCJUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwicmVsZWFzZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJjb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZUFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lEQU5KO3NCQUVZO3FCQUNJO29CQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhCLElBQUEsQUFBTUEsNEJBQU47YUFBTUEsWUFDUEMsUUFBUSxFQUFFQyxJQUFJOzhCQURQRjtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztpQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU0sRUFBRTtnQkFDZixJQUFJQztnQkFFSixJQUFNQyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1IsUUFBUSxFQUFFSztnQkFFL0MsSUFBSSxJQUFJLENBQUNKLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3RCSyxTQUFTLEFBQUMsR0FBYSxPQUFYQztnQkFDZCxPQUFPO29CQUNMLElBQU1FLGNBQWMsSUFBSSxFQUNsQkMsYUFBYSxJQUFJLENBQUNULElBQUksQ0FBQ0csUUFBUSxDQUFDQyxRQUFRSTtvQkFFOUNILFNBQVMsQUFBQyxHQUFnQkksT0FBZEgsWUFBVyxLQUFjLE9BQVhHO2dCQUM1QixDQUFDO2dCQUVELE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT04sTUFBTSxFQUFFO2dCQUNiLElBQU1FLGFBQWFDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDUixRQUFRLEVBQUVLLFNBQ3pDTyxXQUFXLEFBQUMsSUFBSSxDQUFDWCxJQUFJLEtBQUssSUFBSSxHQUNoQixJQUFJLEdBQ0YsSUFBSSxDQUFDQSxJQUFJLENBQUNVLE1BQU0sQ0FBQ04sT0FBTyxFQUN4Q1EsT0FBT0MsdUJBQWdCLEVBQ3ZCQyxPQUFPUixZQUNQTixPQUFPVyxVQUNQSSxPQUFPO29CQUNMSCxNQUFBQTtvQkFDQUUsTUFBQUE7b0JBQ0FkLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9lO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxLQUFLLEVBQUVDLE1BQU0sRUFBRTtnQkFDbkMsSUFBTSxBQUFFSixPQUFTQyxLQUFURCxNQUNGUixhQUFhUSxNQUNiZixXQUFXb0IsSUFBQUEsNEJBQXNCLEVBQUNiLFlBQVlXLE9BQU9DO2dCQUUzRCxJQUFJLEFBQUVsQixPQUFTZSxLQUFUZjtnQkFFTixJQUFJQSxTQUFTLElBQUksRUFBRTtvQkFDakIsSUFBTVcsV0FBV1gsTUFBTyxHQUFHO29CQUUzQmUsT0FBT0osVUFBVyxHQUFHO29CQUVyQlgsT0FBT29CLGFBQUksQ0FBQ0osUUFBUSxDQUFDRCxNQUFNRSxPQUFPQztvQkFFbEMsSUFBTUcsV0FBV3JCLEtBQUtzQixPQUFPO29CQUU3QnRCLE9BQU91QixlQUFlQyxrQkFBa0IsQ0FBQ0gsV0FBVyxHQUFHO2dCQUN6RCxDQUFDO2dCQUVELElBQU1JLGNBQWMsSUFuRUgzQixZQW1FbUJDLFVBQVVDO2dCQUU5QyxPQUFPeUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQjNCLFFBQVEsRUFBRUMsSUFBSSxFQUFFO2dCQUN6QyxJQUFNeUIsY0FBYyxJQXpFSDNCLFlBeUVtQkMsVUFBVUM7Z0JBRTlDLE9BQU95QjtZQUNUOzs7V0E1RW1CM0IifQ==