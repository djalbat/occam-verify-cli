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
            key: "setTermNode",
            value: function setTermNode(termNode) {
                this.termNode = termNode;
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
                    var termNode = variable.getTermNode();
                    if (termNode === this.termNode) {
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
                var termNode = null, variable = new Variable(type, name, termNode);
                return variable;
            }
        }
    ]);
    return Variable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyaWFibGUge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB0ZXJtTm9kZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIHNldFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGhpcy50ZXJtTm9kZSA9IHRlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgaXNFcXVhbFRvKHZhcmlhYmxlKSB7XG4gICAgbGV0IGVxdWFsVG8gPSBmYWxzZTtcblxuICAgIGlmICh2YXJpYWJsZSA9PT0gdGhpcykge1xuICAgICAgZXF1YWxUbyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdmFyaWFibGUuZ2V0VGVybU5vZGUoKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlID09PSB0aGlzLnRlcm1Ob2RlKSB7XG4gICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHRoaXMubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9OiR7dHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQW5kTmFtZSh0eXBlLCBuYW1lKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKHR5cGUsIG5hbWUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJWYXJpYWJsZSIsInR5cGUiLCJuYW1lIiwidGVybU5vZGUiLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImdldFRlcm1Ob2RlIiwic2V0VGVybU5vZGUiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsImlzRXF1YWxUbyIsInZhcmlhYmxlIiwiZXF1YWxUbyIsImFzU3RyaW5nIiwic3RyaW5nIiwidHlwZU5hbWUiLCJmcm9tVHlwZUFuZE5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEseUJBQU47YUFBTUEsU0FDUEMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7OEJBRGJIO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7aUJBSkNIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlKLFFBQVEsRUFBRTtnQkFDcEIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVOLElBQUksRUFBRTtnQkFDZCxJQUFNTyxjQUFlLElBQUksQ0FBQ1AsSUFBSSxLQUFLQTtnQkFFbkMsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUlDLFVBQVUsS0FBSztnQkFFbkIsSUFBSUQsYUFBYSxJQUFJLEVBQUU7b0JBQ3JCQyxVQUFVLElBQUk7Z0JBQ2hCLE9BQU87b0JBQ0wsSUFBTVQsV0FBV1EsU0FBU0wsV0FBVztvQkFFckMsSUFBSUgsYUFBYSxJQUFJLENBQUNBLFFBQVEsRUFBRTt3QkFDOUJTLFVBQVUsSUFBSTtvQkFDaEIsQ0FBQztnQkFDSCxDQUFDO2dCQUVELE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBVztnQkFDVCxJQUFJQztnQkFFSixJQUFJLElBQUksQ0FBQ2IsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDdEJhLFNBQVMsSUFBSSxDQUFDWixJQUFJO2dCQUNwQixPQUFPO29CQUNMLElBQU1hLFdBQVcsSUFBSSxDQUFDZCxJQUFJLENBQUNJLE9BQU87b0JBRWxDUyxTQUFTLEFBQUMsR0FBZUMsT0FBYixJQUFJLENBQUNiLElBQUksRUFBQyxLQUFZLE9BQVRhO2dCQUMzQixDQUFDO2dCQUVELE9BQU9EO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCZixJQUFJLEVBQUVDLElBQUksRUFBRTtnQkFDakMsSUFBTUMsV0FBVyxJQUFJLEVBQ2ZRLFdBQVcsSUE3REFYLFNBNkRhQyxNQUFNQyxNQUFNQztnQkFFMUMsT0FBT1E7WUFDVDs7O1dBaEVtQlgifQ==