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
            value: function fromJSON(json, releaseContext) {
                var term = json.term, termJSON = term, termNode = (0, _node.termNodeFromTermJSON)(termJSON, releaseContext);
                var type = json.type;
                var typeJSON = type; ///
                json = typeJSON; ///
                type = _type.default.fromJSON(json, releaseContext);
                var typeName = type.getName();
                type = releaseContext.findTypeByTypeName(typeName); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBDT05TVFJVQ1RPUl9LSU5EIH0gZnJvbSBcIi4va2luZHNcIjtcbmltcG9ydCB7IHRlcm1Ob2RlRnJvbVRlcm1KU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZSkge1xuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnRlcm1Ob2RlKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9TdXBlclR5cGUgPSB0cnVlLFxuICAgICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5hc1N0cmluZyhub1N1cGVyVHlwZSk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9OiR7dHlwZVN0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnRlcm1Ob2RlKSxcbiAgICAgICAgICB0eXBlSlNPTiA9ICh0aGlzLnR5cGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUudG9KU09OKCksXG4gICAgICAgICAga2luZCA9IENPTlNUUlVDVE9SX0tJTkQsXG4gICAgICAgICAgdGVybSA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIHRlcm0sXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgeyB0ZXJtIH0gPSBqc29uLFxuICAgICAgICAgIHRlcm1KU09OID0gdGVybSwgIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybUpTT04odGVybUpTT04sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGU7ICAvLy9cblxuICAgIGpzb24gPSB0eXBlSlNPTjsgIC8vL1xuXG4gICAgdHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgIHR5cGUgPSByZWxlYXNlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyAvLy9cblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3IgPSBuZXcgQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkNvbnN0cnVjdG9yIiwidGVybU5vZGUiLCJ0eXBlIiwiZ2V0VGVybU5vZGUiLCJnZXRUeXBlIiwiYXNTdHJpbmciLCJzdHJpbmciLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwibm9TdXBlclR5cGUiLCJ0eXBlU3RyaW5nIiwidG9KU09OIiwidHlwZUpTT04iLCJraW5kIiwiQ09OU1RSVUNUT1JfS0lORCIsInRlcm0iLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsInRlcm1KU09OIiwidGVybU5vZGVGcm9tVGVybUpTT04iLCJUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiY29uc3RydWN0b3IiLCJmcm9tVGVybU5vZGVBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5REFOSjtzQkFFWTtxQkFDSTtvQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFBLEFBQU1BLDRCQUFOO2FBQU1BLFlBQ1BDLFFBQVEsRUFBRUMsSUFBSTs4QkFEUEY7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7aUJBSEtGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQUlDO2dCQUVKLElBQU1DLGFBQWFDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDUCxRQUFRO2dCQUU3QyxJQUFJLElBQUksQ0FBQ0MsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDdEJJLFNBQVMsQUFBQyxHQUFhLE9BQVhDO2dCQUNkLE9BQU87b0JBQ0wsSUFBTUUsY0FBYyxJQUFJLEVBQ2xCQyxhQUFhLElBQUksQ0FBQ1IsSUFBSSxDQUFDRyxRQUFRLENBQUNJO29CQUV0Q0gsU0FBUyxBQUFDLEdBQWdCSSxPQUFkSCxZQUFXLEtBQWMsT0FBWEc7Z0JBQzVCLENBQUM7Z0JBRUQsT0FBT0o7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1KLGFBQWFDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDUCxRQUFRLEdBQ3ZDVyxXQUFXLEFBQUMsSUFBSSxDQUFDVixJQUFJLEtBQUssSUFBSSxHQUNoQixJQUFJLEdBQ0YsSUFBSSxDQUFDQSxJQUFJLENBQUNTLE1BQU0sRUFBRSxFQUNsQ0UsT0FBT0MsdUJBQWdCLEVBQ3ZCQyxPQUFPUixZQUNQTCxPQUFPVSxVQUNQSSxPQUFPO29CQUNMSCxNQUFBQTtvQkFDQUUsTUFBQUE7b0JBQ0FiLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9jO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxjQUFjLEVBQUU7Z0JBQ3BDLElBQU0sQUFBRUgsT0FBU0MsS0FBVEQsTUFDRkksV0FBV0osTUFDWGQsV0FBV21CLElBQUFBLDBCQUFvQixFQUFDRCxVQUFVRDtnQkFFaEQsSUFBSSxBQUFFaEIsT0FBU2MsS0FBVGQ7Z0JBRU4sSUFBTVUsV0FBV1YsTUFBTyxHQUFHO2dCQUUzQmMsT0FBT0osVUFBVyxHQUFHO2dCQUVyQlYsT0FBT21CLGFBQUksQ0FBQ0osUUFBUSxDQUFDRCxNQUFNRTtnQkFFM0IsSUFBTUksV0FBV3BCLEtBQUtxQixPQUFPO2dCQUU3QnJCLE9BQU9nQixlQUFlTSxrQkFBa0IsQ0FBQ0YsV0FBVyxHQUFHO2dCQUV2RCxJQUFNRyxjQUFjLElBakVIekIsWUFpRW1CQyxVQUFVQztnQkFFOUMsT0FBT3VCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0J6QixRQUFRLEVBQUVDLElBQUksRUFBRTtnQkFDekMsSUFBTXVCLGNBQWMsSUF2RUh6QixZQXVFbUJDLFVBQVVDO2dCQUU5QyxPQUFPdUI7WUFDVDs7O1dBMUVtQnpCIn0=