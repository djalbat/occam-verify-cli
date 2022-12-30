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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBDT05TVFJVQ1RPUl9LSU5EIH0gZnJvbSBcIi4va2luZHNcIjtcbmltcG9ydCB7IHRlcm1Ob2RlRnJvbVRlcm1KU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZSkge1xuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnRlcm1Ob2RlKTtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9TdXBlclR5cGUgPSB0cnVlLFxuICAgICAgICAgICAgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5hc1N0cmluZyhub1N1cGVyVHlwZSk7XG5cbiAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9OiR7dHlwZVN0cmluZ31gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLnRlcm1Ob2RlKSxcbiAgICAgICAgICB0eXBlSlNPTiA9ICh0aGlzLnR5cGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGUudG9KU09OKCksXG4gICAgICAgICAga2luZCA9IENPTlNUUlVDVE9SX0tJTkQsXG4gICAgICAgICAgdGVybSA9IHRlcm1TdHJpbmcsICAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIHRlcm0sXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgeyB0ZXJtIH0gPSBqc29uLFxuICAgICAgICAgIHRlcm1KU09OID0gdGVybSwgIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVGVybUpTT04odGVybUpTT04sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlOyAgLy8vXG5cbiAgICAgIGpzb24gPSB0eXBlSlNPTjsgIC8vL1xuXG4gICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIHR5cGUgPSByZWxlYXNlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gbmV3IENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvciIsInRlcm1Ob2RlIiwidHlwZSIsImdldFRlcm1Ob2RlIiwiZ2V0VHlwZSIsImFzU3RyaW5nIiwic3RyaW5nIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsIm5vU3VwZXJUeXBlIiwidHlwZVN0cmluZyIsInRvSlNPTiIsInR5cGVKU09OIiwia2luZCIsIkNPTlNUUlVDVE9SX0tJTkQiLCJ0ZXJtIiwianNvbiIsImZyb21KU09OIiwicmVsZWFzZUNvbnRleHQiLCJ0ZXJtSlNPTiIsInRlcm1Ob2RlRnJvbVRlcm1KU09OIiwiVHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImNvbnN0cnVjdG9yIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eURBTko7c0JBRVk7cUJBQ0k7b0JBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBQSxBQUFNQSw0QkFBTjthQUFNQSxZQUNQQyxRQUFRLEVBQUVDLElBQUk7OEJBRFBGO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLElBQUksR0FBR0E7O2lCQUhLRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFJQztnQkFFSixJQUFNQyxhQUFhQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1AsUUFBUTtnQkFFN0MsSUFBSSxJQUFJLENBQUNDLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3RCSSxTQUFTLEFBQUMsR0FBYSxPQUFYQztnQkFDZCxPQUFPO29CQUNMLElBQU1FLGNBQWMsSUFBSSxFQUNsQkMsYUFBYSxJQUFJLENBQUNSLElBQUksQ0FBQ0csUUFBUSxDQUFDSTtvQkFFdENILFNBQVMsQUFBQyxHQUFnQkksT0FBZEgsWUFBVyxLQUFjLE9BQVhHO2dCQUM1QixDQUFDO2dCQUVELE9BQU9KO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBUztnQkFDUCxJQUFNSixhQUFhQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ1AsUUFBUSxHQUN2Q1csV0FBVyxBQUFDLElBQUksQ0FBQ1YsSUFBSSxLQUFLLElBQUksR0FDaEIsSUFBSSxHQUNGLElBQUksQ0FBQ0EsSUFBSSxDQUFDUyxNQUFNLEVBQUUsRUFDbENFLE9BQU9DLHVCQUFnQixFQUN2QkMsT0FBT1IsWUFDUEwsT0FBT1UsVUFDUEksT0FBTztvQkFDTEgsTUFBQUE7b0JBQ0FFLE1BQUFBO29CQUNBYixNQUFBQTtnQkFDRjtnQkFFTixPQUFPYztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsY0FBYyxFQUFFO2dCQUNwQyxJQUFNLEFBQUVILE9BQVNDLEtBQVRELE1BQ0ZJLFdBQVdKLE1BQ1hkLFdBQVdtQixJQUFBQSwwQkFBb0IsRUFBQ0QsVUFBVUQ7Z0JBRWhELElBQUksQUFBRWhCLE9BQVNjLEtBQVRkO2dCQUVOLElBQUlBLFNBQVMsSUFBSSxFQUFFO29CQUNqQixJQUFNVSxXQUFXVixNQUFPLEdBQUc7b0JBRTNCYyxPQUFPSixVQUFXLEdBQUc7b0JBRXJCVixPQUFPbUIsYUFBSSxDQUFDSixRQUFRLENBQUNELE1BQU1FO29CQUUzQixJQUFNSSxXQUFXcEIsS0FBS3FCLE9BQU87b0JBRTdCckIsT0FBT2dCLGVBQWVNLGtCQUFrQixDQUFDRixXQUFXLEdBQUc7Z0JBQ3pELENBQUM7Z0JBRUQsSUFBTUcsY0FBYyxJQW5FSHpCLFlBbUVtQkMsVUFBVUM7Z0JBRTlDLE9BQU91QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CekIsUUFBUSxFQUFFQyxJQUFJLEVBQUU7Z0JBQ3pDLElBQU11QixjQUFjLElBekVIekIsWUF5RW1CQyxVQUFVQztnQkFFOUMsT0FBT3VCO1lBQ1Q7OztXQTVFbUJ6QiJ9