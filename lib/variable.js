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
            key: "isEqualTo",
            value: function isEqualTo(variable) {
                var equalTo = false;
                if (variable === this) {
                    equalTo = true;
                } else {
                    var value = variable.getValue();
                    if (value === this.value) {
                        equalTo = true;
                    }
                }
                return equalTo;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGlzRGVmaW5lZCgpIHtcbiAgICBjb25zdCBkZWZpbmVkID0gKHRoaXMudmFsdWUgIT09IHVuZGVmaW5lZCk7XG5cbiAgICByZXR1cm4gZGVmaW5lZDtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKHZhcmlhYmxlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGlmICh2YXJpYWJsZSA9PT0gdGhpcykge1xuICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdmFyaWFibGUuZ2V0VmFsdWUoKTtcblxuICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9OiR7dHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSB1bmRlZmluZWQsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgdmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZhcmlhYmxlIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0VmFsdWUiLCJpc0RlZmluZWQiLCJkZWZpbmVkIiwidW5kZWZpbmVkIiwic2V0VmFsdWUiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsImlzRXF1YWxUbyIsInZhcmlhYmxlIiwiZXF1YWxUbyIsImFzU3RyaW5nIiwic3RyaW5nIiwidHlwZU5hbWUiLCJmcm9tVHlwZUFuZE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEseUJBQU47YUFBTUEsU0FDUEMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUs7OEJBRFZIO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7aUJBSklIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVk7Z0JBQ1YsSUFBTUMsVUFBVyxJQUFJLENBQUNMLEtBQUssS0FBS007Z0JBRWhDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU1AsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtZQUNmOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVULElBQUksRUFBRTtnQkFDZCxJQUFNVSxjQUFlLElBQUksQ0FBQ1YsSUFBSSxLQUFLQTtnQkFFbkMsT0FBT1U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUlDLFVBQVUsS0FBSztnQkFFbkIsSUFBSUQsYUFBYSxJQUFJLEVBQUU7b0JBQ3JCQyxVQUFVLElBQUk7Z0JBQ2hCLE9BQU87b0JBQ0wsSUFBTVosUUFBUVcsU0FBU1IsUUFBUTtvQkFFL0IsSUFBSUgsVUFBVSxJQUFJLENBQUNBLEtBQUssRUFBRTt3QkFDeEJZLFVBQVUsSUFBSTtvQkFDaEIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFJQztnQkFFSixJQUFJLElBQUksQ0FBQ2hCLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3RCZ0IsU0FBUyxJQUFJLENBQUNmLElBQUk7Z0JBQ3BCLE9BQU87b0JBQ0wsSUFBTWdCLFdBQVcsSUFBSSxDQUFDakIsSUFBSSxDQUFDSSxPQUFPO29CQUVsQ1ksU0FBUyxBQUFDLEdBQWVDLE9BQWIsSUFBSSxDQUFDaEIsSUFBSSxFQUFDLEtBQVksT0FBVGdCO2dCQUMzQixDQUFDO2dCQUVELE9BQU9EO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCbEIsSUFBSSxFQUFFQyxJQUFJLEVBQUU7Z0JBQ2pDLElBQU1DLFFBQVFNLFdBQ1JLLFdBQVcsSUFuRUFkLFNBbUVhQyxNQUFNQyxNQUFNQztnQkFFMUMsT0FBT1c7WUFDVDs7O1dBdEVtQmQifQ==