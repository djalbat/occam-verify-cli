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
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                debugger;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IGAke3RoaXMubmFtZX06JHt0eXBlTmFtZX1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZhcmlhYmxlIiwibmFtZSIsInR5cGUiLCJnZXROYW1lIiwiZ2V0VHlwZSIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJ0eXBlTmFtZSIsInN0cmluZyIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJqc29uIiwiZmlsZUNvbnRleHQiLCJmcm9tTmFtZUFuZFR5cGUiLCJ2YXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx5QkFBTjthQUFNQSxTQUNQQyxJQUFJLEVBQUVDLElBQUk7OEJBREhGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7aUJBSEtGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVSixJQUFJLEVBQUU7Z0JBQ2QsSUFBTUssY0FBZSxJQUFJLENBQUNMLElBQUksS0FBS0E7Z0JBRW5DLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTSxFQUFFO2dCQUNmLElBQU1DLFdBQVcsSUFBSSxDQUFDUCxJQUFJLENBQUNDLE9BQU8sSUFDNUJPLFNBQVMsQUFBQyxHQUFlRCxPQUFiLElBQUksQ0FBQ1IsSUFBSSxFQUFDLEtBQVksT0FBVFE7Z0JBRS9CLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCQyxJQUFJLEVBQUVDLFdBQVcsRUFBRTtnQkFDL0MsUUFBUTtZQUNWOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCYixJQUFJLEVBQUVDLElBQUksRUFBRTtnQkFDakMsSUFBTWEsV0FBVyxJQWhDQWYsU0FnQ2FDLE1BQU1DO2dCQUVwQyxPQUFPYTtZQUNUOzs7V0FuQ21CZiJ9