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
    function Variable(type, name, value) {
        _classCallCheck(this, Variable);
        this.type = type;
        this.name = name;
        this.value = value;
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
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "isDefined",
            value: function isDefined() {
                var defined = this.value !== undefined;
                return defined;
            }
        },
        {
            key: "setValue",
            value: function setValue(value) {
                this.value = value;
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
            value: function asString() {
                var string;
                if (this.type === null) {
                    string = this.name;
                } else {
                    var typeName = this.type.getName();
                    string = "".concat(this.name, ":").concat(typeName);
                }
                return string;
            }
        }
    ], [
        {
            key: "fromTypeAndName",
            value: function fromTypeAndName(type, name) {
                var value = undefined, variable = new Variable(type, name, value);
                return variable;
            }
        }
    ]);
    return Variable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGlzRGVmaW5lZCgpIHtcbiAgICBjb25zdCBkZWZpbmVkID0gKHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZCk7XG5cbiAgICByZXR1cm4gZGVmaW5lZDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9OiR7dHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSB1bmRlZmluZWQsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgdmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZhcmlhYmxlIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0VmFsdWUiLCJpc0RlZmluZWQiLCJkZWZpbmVkIiwidW5kZWZpbmVkIiwic2V0VmFsdWUiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsImFzU3RyaW5nIiwic3RyaW5nIiwidHlwZU5hbWUiLCJmcm9tVHlwZUFuZE5hbWUiLCJ2YXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx5QkFBTjthQUFNQSxTQUNQQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSzs4QkFEVkg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBOztpQkFKSUg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixJQUFNQyxVQUFXLElBQUksQ0FBQ0wsS0FBSyxLQUFLTTtnQkFFaEMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTUCxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO1lBQ2Y7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVQsSUFBSSxFQUFFO2dCQUNkLElBQU1VLGNBQWUsSUFBSSxDQUFDVixJQUFJLEtBQUtBO2dCQUVuQyxPQUFPVTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBSUM7Z0JBRUosSUFBSSxJQUFJLENBQUNiLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3RCYSxTQUFTLElBQUksQ0FBQ1osSUFBSTtnQkFDcEIsT0FBTztvQkFDTCxJQUFNYSxXQUFXLElBQUksQ0FBQ2QsSUFBSSxDQUFDSSxPQUFPO29CQUVsQ1MsU0FBUyxBQUFDLEdBQWVDLE9BQWIsSUFBSSxDQUFDYixJQUFJLEVBQUMsS0FBWSxPQUFUYTtnQkFDM0IsQ0FBQztnQkFFRCxPQUFPRDtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGdCQUFnQmYsSUFBSSxFQUFFQyxJQUFJLEVBQUU7Z0JBQ2pDLElBQU1DLFFBQVFNLFdBQ1JRLFdBQVcsSUFuREFqQixTQW1EYUMsTUFBTUMsTUFBTUM7Z0JBRTFDLE9BQU9jO1lBQ1Q7OztXQXREbUJqQiJ9