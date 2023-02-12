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
                var typeJSON = this.type.toJSON(tokens), kind = _kinds.VARIABLE_KIND, name = this.name, type = typeJSON, json = {
                    kind: kind,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBWQVJJQUJMRV9LSU5EIH0gZnJvbSBcIi4va2luZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3RoaXMubmFtZX06JHt0eXBlTmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHRoaXMudHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBraW5kID0gVkFSSUFCTEVfS0lORCxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBqc29uID0gdHlwZTsgIC8vL1xuXG4gICAgdHlwZSA9IFR5cGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7IC8vL1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmFyaWFibGUiLCJuYW1lIiwidHlwZSIsImdldE5hbWUiLCJnZXRUeXBlIiwibWF0Y2hOYW1lIiwibWF0Y2hlc05hbWUiLCJhc1N0cmluZyIsInRva2VucyIsInR5cGVOYW1lIiwic3RyaW5nIiwidG9KU09OIiwidHlwZUpTT04iLCJraW5kIiwiVkFSSUFCTEVfS0lORCIsImpzb24iLCJmcm9tTmFtZUFuZFR5cGUiLCJ2YXJpYWJsZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsIlR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3lEQUpKO3FCQUVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSx5QkFBTjthQUFNQSxTQUNQQyxJQUFJLEVBQUVDLElBQUk7OEJBREhGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7aUJBSEtGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVSixJQUFJLEVBQUU7Z0JBQ2QsSUFBTUssY0FBZSxJQUFJLENBQUNMLElBQUksS0FBS0E7Z0JBRW5DLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTSxFQUFFO2dCQUNmLElBQU1DLFdBQVcsSUFBSSxDQUFDUCxJQUFJLENBQUNDLE9BQU8sSUFDNUJPLFNBQVMsQUFBQyxHQUFlRCxPQUFiLElBQUksQ0FBQ1IsSUFBSSxFQUFDLEtBQVksT0FBVFE7Z0JBRS9CLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0gsTUFBTSxFQUFFO2dCQUNiLElBQU1JLFdBQVcsSUFBSSxDQUFDVixJQUFJLENBQUNTLE1BQU0sQ0FBQ0gsU0FDNUJLLE9BQU9DLG9CQUFhLEVBQ3BCYixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsT0FBT1UsVUFDUEcsT0FBTztvQkFDTEYsTUFBQUE7b0JBQ0FaLE1BQUFBO29CQUNBQyxNQUFBQTtnQkFDRjtnQkFFTixPQUFPYTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGdCQUFnQmYsSUFBSSxFQUFFQyxJQUFJLEVBQUU7Z0JBQ2pDLElBQU1lLFdBQVcsSUExQ0FqQixTQTBDYUMsTUFBTUM7Z0JBRXBDLE9BQU9lO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJILElBQUksRUFBRUksV0FBVyxFQUFFO2dCQUMvQyxJQUFNLEFBQUVsQixPQUFTYyxLQUFUZDtnQkFFUixJQUFJLEFBQUVDLE9BQVNhLEtBQVRiO2dCQUVOYSxPQUFPYixNQUFPLEdBQUc7Z0JBRWpCQSxPQUFPa0IsYUFBSSxDQUFDRixzQkFBc0IsQ0FBQ0gsTUFBTUk7Z0JBRXpDLElBQU1WLFdBQVdQLEtBQUtDLE9BQU87Z0JBRTdCRCxPQUFPaUIsWUFBWUUsa0JBQWtCLENBQUNaLFdBQVcsR0FBRztnQkFFcEQsSUFBTVEsV0FBVyxJQTVEQWpCLFNBNERhQyxNQUFNQztnQkFFcEMsT0FBT2U7WUFDVDs7O1dBL0RtQmpCIn0=