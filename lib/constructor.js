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
                var constructor = null;
                var type = json.type;
                var term = json.term, content = term, ruleName = _ruleNames.TERM_RULE_NAME, node = callback(content, ruleName), termNode = node; ///
                if (termNode !== null) {
                    json = type; ///
                    type = _type.default.fromJSON(json);
                    constructor = new Constructor(termNode, type);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgQ09OU1RSVUNUT1JfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3IodGVybU5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSk7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vU3VwZXJUeXBlID0gdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuYXNTdHJpbmcobm9TdXBlclR5cGUpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSksXG4gICAgICAgICAgdHlwZUpTT04gPSAodGhpcy50eXBlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlLnRvSlNPTigpLFxuICAgICAgICAgIGtpbmQgPSBDT05TVFJVQ1RPUl9LSU5ELFxuICAgICAgICAgIHRlcm0gPSB0ZXJtU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjYWxsYmFjaykge1xuICAgIGxldCBjb25zdHJ1Y3RvciA9IG51bGw7XG5cbiAgICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAgY29uc3QgeyB0ZXJtIH0gPSBqc29uLFxuICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtLCAgLy8vXG4gICAgICAgICAgcnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICBub2RlID0gY2FsbGJhY2soY29udGVudCwgcnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGpzb24gPSB0eXBlOyAgLy8vXG5cbiAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24pO1xuXG4gICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ29uc3RydWN0b3IiLCJ0ZXJtTm9kZSIsInR5cGUiLCJnZXRUZXJtTm9kZSIsImdldFR5cGUiLCJhc1N0cmluZyIsInN0cmluZyIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJub1N1cGVyVHlwZSIsInR5cGVTdHJpbmciLCJ0b0pTT04iLCJ0eXBlSlNPTiIsImtpbmQiLCJDT05TVFJVQ1RPUl9LSU5EIiwidGVybSIsImpzb24iLCJmcm9tSlNPTiIsImNhbGxiYWNrIiwiY29uc3RydWN0b3IiLCJjb250ZW50IiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsIm5vZGUiLCJUeXBlIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eURBTko7c0JBRVk7eUJBQ0U7cUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxRQUFRLEVBQUVDLElBQUk7OEJBRFBGO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLElBQUksR0FBR0E7O2lCQUhLRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFJQztnQkFFSixJQUFNQyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1AsUUFBUTtnQkFFN0MsSUFBSSxJQUFJLENBQUNDLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3RCSSxTQUFTLEFBQUMsR0FBYSxPQUFYQztnQkFDZCxPQUFPO29CQUNMLElBQU1FLGNBQWMsSUFBSSxFQUNsQkMsYUFBYSxJQUFJLENBQUNSLElBQUksQ0FBQ0csUUFBUSxDQUFDSTtvQkFFdENILFNBQVMsQUFBQyxHQUFnQkksT0FBZEgsWUFBVyxLQUFjLE9BQVhHO2dCQUM1QixDQUFDO2dCQUVELE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNSixhQUFhQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1AsUUFBUSxHQUN2Q1csV0FBVyxBQUFDLElBQUksQ0FBQ1YsSUFBSSxLQUFLLElBQUksR0FDaEIsSUFBSSxHQUNGLElBQUksQ0FBQ0EsSUFBSSxDQUFDUyxNQUFNLEVBQUUsRUFDbENFLE9BQU9DLHVCQUFnQixFQUN2QkMsT0FBT1IsWUFDUEwsT0FBT1UsVUFDUEksT0FBTztvQkFDTEgsTUFBQUE7b0JBQ0FFLE1BQUFBO29CQUNBYixNQUFBQTtnQkFDRjtnQkFFTixPQUFPYztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsUUFBUSxFQUFFO2dCQUM5QixJQUFJQyxjQUFjLElBQUk7Z0JBRXRCLElBQUksQUFBRWpCLE9BQVNjLEtBQVRkO2dCQUVOLElBQU0sQUFBRWEsT0FBU0MsS0FBVEQsTUFDRkssVUFBVUwsTUFDVk0sV0FBV0MseUJBQWMsRUFDekJDLE9BQU9MLFNBQVNFLFNBQVNDLFdBQ3pCcEIsV0FBV3NCLE1BQU0sR0FBRztnQkFFMUIsSUFBSXRCLGFBQWEsSUFBSSxFQUFFO29CQUNyQmUsT0FBT2QsTUFBTyxHQUFHO29CQUVqQkEsT0FBT3NCLGFBQUksQ0FBQ1AsUUFBUSxDQUFDRDtvQkFFckJHLGNBQWMsSUFoRUNuQixZQWdFZUMsVUFBVUM7Z0JBQzFDLENBQUM7Z0JBRUQsT0FBT2lCO1lBQ1Q7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0J4QixRQUFRLEVBQUVDLElBQUksRUFBRTtnQkFDekMsSUFBTWlCLGNBQWMsSUF2RUhuQixZQXVFbUJDLFVBQVVDO2dCQUU5QyxPQUFPaUI7WUFDVDs7O1dBMUVtQm5CIn0=