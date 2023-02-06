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
    function Variable(type, name, termNode) {
        _classCallCheck(this, Variable);
        this.type = type;
        this.name = name;
        this.termNode = termNode;
    }
    _createClass(Variable, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
            }
        },
        {
            key: "isUndefined",
            value: function isUndefined() {
                return this.termNode === null;
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
            key: "fromTypeAndName",
            value: function fromTypeAndName(type, name) {
                var termNode = null, variable = new Variable(type, name, termNode);
                return variable;
            }
        },
        {
            key: "fromTypeNameAndTermNode",
            value: function fromTypeNameAndTermNode(type, name, termNode) {
                var variable = new Variable(type, name, termNode);
                return variable;
            }
        }
    ]);
    return Variable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB0ZXJtTm9kZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIGlzVW5kZWZpbmVkKCkge1xuICAgIHJldHVybiAodGhpcy50ZXJtTm9kZSA9PT0gbnVsbCk7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOYW1lID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke3R5cGVOYW1lfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWVBbmRUZXJtTm9kZSh0eXBlLCBuYW1lLCB0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJWYXJpYWJsZSIsInR5cGUiLCJuYW1lIiwidGVybU5vZGUiLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldFRlcm1Ob2RlIiwiaXNVbmRlZmluZWQiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsImFzU3RyaW5nIiwidG9rZW5zIiwidHlwZU5hbWUiLCJzdHJpbmciLCJmcm9tVHlwZUFuZE5hbWUiLCJ2YXJpYWJsZSIsImZyb21UeXBlTmFtZUFuZFRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHlCQUFOO2FBQU1BLFNBQ1BDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFROzhCQURiSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2lCQUpDSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQVEsSUFBSSxDQUFDSixRQUFRLEtBQUssSUFBSTtZQUNoQzs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVTixJQUFJLEVBQUU7Z0JBQ2QsSUFBTU8sY0FBZSxJQUFJLENBQUNQLElBQUksS0FBS0E7Z0JBRW5DLE9BQU9PO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTSxFQUFFO2dCQUNmLElBQU1DLFdBQVcsSUFBSSxDQUFDWCxJQUFJLENBQUNJLE9BQU8sSUFDNUJRLFNBQVMsQUFBQyxHQUFlRCxPQUFiLElBQUksQ0FBQ1YsSUFBSSxFQUFDLEtBQVksT0FBVFU7Z0JBRS9CLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCYixJQUFJLEVBQUVDLElBQUksRUFBRTtnQkFDakMsSUFBTUMsV0FBVyxJQUFJLEVBQ2ZZLFdBQVcsSUF0Q0FmLFNBc0NhQyxNQUFNQyxNQUFNQztnQkFFMUMsT0FBT1k7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHdCQUF3QmYsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRTtnQkFDbkQsSUFBTVksV0FBVyxJQTVDQWYsU0E0Q2FDLE1BQU1DLE1BQU1DO2dCQUUxQyxPQUFPWTtZQUNUOzs7V0EvQ21CZiJ9