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
            value: function fromJSON(json, releaseContext) {
                var term = json.term, termString = term, termNode = (0, _string.termNodeFromTermString)(termString, releaseContext);
                var type = json.type;
                if (type !== null) {
                    var typeJSON = type; ///
                    json = typeJSON; ///
                    type = _type.default.fromJSON(json, releaseContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBDT05TVFJVQ1RPUl9LSU5EIH0gZnJvbSBcIi4va2luZHNcIjtcbmltcG9ydCB7IHRlcm1Ob2RlRnJvbVRlcm1TdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3IodGVybU5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSwgdG9rZW5zKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9TdXBlclR5cGUgPSB0cnVlLFxuICAgICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5hc1N0cmluZyh0b2tlbnMsIG5vU3VwZXJUeXBlKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlU3RyaW5nfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMudGVybU5vZGUsIHRva2VucyksXG4gICAgICAgICAgdHlwZUpTT04gPSAodGhpcy50eXBlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGtpbmQgPSBDT05TVFJVQ1RPUl9LSU5ELFxuICAgICAgICAgIHRlcm0gPSB0ZXJtU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgdGVybSB9ID0ganNvbixcbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybSwgIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybVN0cmluZyh0ZXJtU3RyaW5nLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZTsgIC8vL1xuXG4gICAgICBqc29uID0gdHlwZUpTT047ICAvLy9cblxuICAgICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICB0eXBlID0gcmVsZWFzZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ29uc3RydWN0b3IiLCJ0ZXJtTm9kZSIsInR5cGUiLCJnZXRUZXJtTm9kZSIsImdldFR5cGUiLCJhc1N0cmluZyIsInRva2VucyIsInN0cmluZyIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJub1N1cGVyVHlwZSIsInR5cGVTdHJpbmciLCJ0b0pTT04iLCJ0eXBlSlNPTiIsImtpbmQiLCJDT05TVFJVQ1RPUl9LSU5EIiwidGVybSIsImpzb24iLCJmcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0IiwidGVybU5vZGVGcm9tVGVybVN0cmluZyIsIlR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJjb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZUFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lEQU5KO3NCQUVZO3FCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2xCLElBQUEsQUFBTUEsNEJBQU47YUFBTUEsWUFDUEMsUUFBUSxFQUFFQyxJQUFJOzhCQURQRjtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztpQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU0sRUFBRTtnQkFDZixJQUFJQztnQkFFSixJQUFNQyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1IsUUFBUSxFQUFFSztnQkFFL0MsSUFBSSxJQUFJLENBQUNKLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3RCSyxTQUFTLEFBQUMsR0FBYSxPQUFYQztnQkFDZCxPQUFPO29CQUNMLElBQU1FLGNBQWMsSUFBSSxFQUNsQkMsYUFBYSxJQUFJLENBQUNULElBQUksQ0FBQ0csUUFBUSxDQUFDQyxRQUFRSTtvQkFFOUNILFNBQVMsQUFBQyxHQUFnQkksT0FBZEgsWUFBVyxLQUFjLE9BQVhHO2dCQUM1QixDQUFDO2dCQUVELE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT04sTUFBTSxFQUFFO2dCQUNiLElBQU1FLGFBQWFDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDUixRQUFRLEVBQUVLLFNBQ3pDTyxXQUFXLEFBQUMsSUFBSSxDQUFDWCxJQUFJLEtBQUssSUFBSSxHQUNoQixJQUFJLEdBQ0YsSUFBSSxDQUFDQSxJQUFJLENBQUNVLE1BQU0sQ0FBQ04sT0FBTyxFQUN4Q1EsT0FBT0MsdUJBQWdCLEVBQ3ZCQyxPQUFPUixZQUNQTixPQUFPVyxVQUNQSSxPQUFPO29CQUNMSCxNQUFBQTtvQkFDQUUsTUFBQUE7b0JBQ0FkLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9lO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxjQUFjLEVBQUU7Z0JBQ3BDLElBQU0sQUFBRUgsT0FBU0MsS0FBVEQsTUFDRlIsYUFBYVEsTUFDYmYsV0FBV21CLElBQUFBLDhCQUFzQixFQUFDWixZQUFZVztnQkFFcEQsSUFBSSxBQUFFakIsT0FBU2UsS0FBVGY7Z0JBRU4sSUFBSUEsU0FBUyxJQUFJLEVBQUU7b0JBQ2pCLElBQU1XLFdBQVdYLE1BQU8sR0FBRztvQkFFM0JlLE9BQU9KLFVBQVcsR0FBRztvQkFFckJYLE9BQU9tQixhQUFJLENBQUNILFFBQVEsQ0FBQ0QsTUFBTUU7b0JBRTNCLElBQU1HLFdBQVdwQixLQUFLcUIsT0FBTztvQkFFN0JyQixPQUFPaUIsZUFBZUssa0JBQWtCLENBQUNGLFdBQVcsR0FBRztnQkFDekQsQ0FBQztnQkFFRCxJQUFNRyxjQUFjLElBbkVIekIsWUFtRW1CQyxVQUFVQztnQkFFOUMsT0FBT3VCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0J6QixRQUFRLEVBQUVDLElBQUksRUFBRTtnQkFDekMsSUFBTXVCLGNBQWMsSUF6RUh6QixZQXlFbUJDLFVBQVVDO2dCQUU5QyxPQUFPdUI7WUFDVDs7O1dBNUVtQnpCIn0=