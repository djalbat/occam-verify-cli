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
var _query = require("./utilities/query");
var _string = require("./utilities/string");
var _kinds = require("./kinds");
var _ruleNames = require("./ruleNames");
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
var statementNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/term");
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
                var term = json.term, ruleName = _ruleNames.CONSTRUCTOR_DECLARATION_RULE_NAME, content = "Constructor ".concat(term, "\n"), constructorDeclarationNode = callback(content, ruleName), termNode = statementNodeQuery(constructorDeclarationNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IENPTlNUUlVDVE9SX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgQ09OU1RSVUNUT1JfREVDTEFSQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4vcnVsZU5hbWVzXCI7XG5cbmNvbnN0IHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3Rlcm1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0cnVjdG9yIHtcbiAgY29uc3RydWN0b3IodGVybU5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSk7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vU3VwZXJUeXBlID0gdHJ1ZSxcbiAgICAgICAgICAgIHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuYXNTdHJpbmcobm9TdXBlclR5cGUpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy50ZXJtTm9kZSksXG4gICAgICAgICAgdHlwZUpTT04gPSAodGhpcy50eXBlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlLnRvSlNPTigpLFxuICAgICAgICAgIGtpbmQgPSBDT05TVFJVQ1RPUl9LSU5ELFxuICAgICAgICAgIHRlcm0gPSB0ZXJtU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjYWxsYmFjaykge1xuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBjb25zdCB7IHRlcm0gfSA9IGpzb24sXG4gICAgICAgICAgcnVsZU5hbWUgPSBDT05TVFJVQ1RPUl9ERUNMQVJBVElPTl9SVUxFX05BTUUsXG4gICAgICAgICAgY29udGVudCA9IGBDb25zdHJ1Y3RvciAke3Rlcm19XG5gLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlID0gY2FsbGJhY2soY29udGVudCwgcnVsZU5hbWUpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gc3RhdGVtZW50Tm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKTtcblxuICAgIGpzb24gPSB0eXBlOyAgLy8vXG5cbiAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uKTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbnN0cnVjdG9yIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybU5vZGUiLCJ0eXBlIiwiZ2V0VGVybU5vZGUiLCJnZXRUeXBlIiwiYXNTdHJpbmciLCJzdHJpbmciLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibm9TdXBlclR5cGUiLCJ0eXBlU3RyaW5nIiwidG9KU09OIiwidHlwZUpTT04iLCJraW5kIiwiQ09OU1RSVUNUT1JfS0lORCIsInRlcm0iLCJqc29uIiwiZnJvbUpTT04iLCJjYWxsYmFjayIsInJ1bGVOYW1lIiwiQ09OU1RSVUNUT1JfREVDTEFSQVRJT05fUlVMRV9OQU1FIiwiY29udGVudCIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImNvbnN0cnVjdG9yIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7eURBVEo7cUJBRVM7c0JBQ0c7cUJBQ0k7eUJBQ2lCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxELElBQU1DLHFCQUFxQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLDRCQUFOO2FBQU1BLFlBQ1BHLFFBQVEsRUFBRUMsSUFBSTs4QkFEUEo7UUFFakIsSUFBSSxDQUFDRyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7aUJBSEtKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQUlDO2dCQUVKLElBQU1DLGFBQWFDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDUCxRQUFRO2dCQUU3QyxJQUFJLElBQUksQ0FBQ0MsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDdEJJLFNBQVMsQUFBQyxHQUFhLE9BQVhDO2dCQUNkLE9BQU87b0JBQ0wsSUFBTUUsY0FBYyxJQUFJLEVBQ2xCQyxhQUFhLElBQUksQ0FBQ1IsSUFBSSxDQUFDRyxRQUFRLENBQUNJO29CQUV0Q0gsU0FBUyxBQUFDLEdBQWdCSSxPQUFkSCxZQUFXLEtBQWMsT0FBWEc7Z0JBQzVCLENBQUM7Z0JBRUQsT0FBT0o7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1KLGFBQWFDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDUCxRQUFRLEdBQ3ZDVyxXQUFXLEFBQUMsSUFBSSxDQUFDVixJQUFJLEtBQUssSUFBSSxHQUNoQixJQUFJLEdBQ0YsSUFBSSxDQUFDQSxJQUFJLENBQUNTLE1BQU0sRUFBRSxFQUNsQ0UsT0FBT0MsdUJBQWdCLEVBQ3ZCQyxPQUFPUixZQUNQTCxPQUFPVSxVQUNQSSxPQUFPO29CQUNMSCxNQUFBQTtvQkFDQUUsTUFBQUE7b0JBQ0FiLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9jO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxRQUFRLEVBQUU7Z0JBQzlCLElBQUksQUFBRWhCLE9BQVNjLEtBQVRkO2dCQUVOLElBQU0sQUFBRWEsT0FBU0MsS0FBVEQsTUFDRkksV0FBV0MsNENBQWlDLEVBQzVDQyxVQUFVLEFBQUMsZUFBbUIsT0FBTE4sTUFBSyxPQUU5Qk8sNkJBQTZCSixTQUFTRyxTQUFTRixXQUMvQ2xCLFdBQVdGLG1CQUFtQnVCO2dCQUVwQ04sT0FBT2QsTUFBTyxHQUFHO2dCQUVqQkEsT0FBT3FCLGFBQUksQ0FBQ04sUUFBUSxDQUFDRDtnQkFFckIsSUFBTVEsY0FBYyxJQTlESDFCLFlBOERtQkcsVUFBVUM7Z0JBRTlDLE9BQU9zQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CeEIsUUFBUSxFQUFFQyxJQUFJLEVBQUU7Z0JBQ3pDLElBQU1zQixjQUFjLElBcEVIMUIsWUFvRW1CRyxVQUFVQztnQkFFOUMsT0FBT3NCO1lBQ1Q7OztXQXZFbUIxQiJ9