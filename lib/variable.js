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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9OiR7dHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSB1bmRlZmluZWQsXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUodHlwZSwgbmFtZSwgdmFsdWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlZhcmlhYmxlIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwiYXNTdHJpbmciLCJzdHJpbmciLCJ0eXBlTmFtZSIsImZyb21UeXBlQW5kTmFtZSIsInVuZGVmaW5lZCIsInZhcmlhYmxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHlCQUFOO2FBQU1BLFNBQ1BDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLOzhCQURWSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7O2lCQUpJSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTSixLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO1lBQ2Y7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVU4sSUFBSSxFQUFFO2dCQUNkLElBQU1PLGNBQWUsSUFBSSxDQUFDUCxJQUFJLEtBQUtBO2dCQUVuQyxPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVc7Z0JBQ1QsSUFBSUM7Z0JBRUosSUFBSSxJQUFJLENBQUNWLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3RCVSxTQUFTLElBQUksQ0FBQ1QsSUFBSTtnQkFDcEIsT0FBTztvQkFDTCxJQUFNVSxXQUFXLElBQUksQ0FBQ1gsSUFBSSxDQUFDSSxPQUFPO29CQUVsQ00sU0FBUyxBQUFDLEdBQWVDLE9BQWIsSUFBSSxDQUFDVixJQUFJLEVBQUMsS0FBWSxPQUFUVTtnQkFDM0IsQ0FBQztnQkFFRCxPQUFPRDtZQUNUOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGdCQUFnQlosSUFBSSxFQUFFQyxJQUFJLEVBQUU7Z0JBQ2pDLElBQU1DLFFBQVFXLFdBQ1JDLFdBQVcsSUE3Q0FmLFNBNkNhQyxNQUFNQyxNQUFNQztnQkFFMUMsT0FBT1k7WUFDVDs7O1dBaERtQmYifQ==