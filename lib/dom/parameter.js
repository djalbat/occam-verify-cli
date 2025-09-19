"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _dom = require("../dom");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var _Parameter;
var _default = (0, _dom.domAssigned)((_Parameter = /*#__PURE__*/ function() {
    function Parameter(value) {
        _class_call_check(this, Parameter);
        this.value = value;
    }
    _create_class(Parameter, [
        {
            key: "getValue",
            value: function getValue() {
                return this.value;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string = this.value; ///
                return string;
            }
        },
        {
            key: "findReplacementNode",
            value: function findReplacementNode(substitutions) {
                var _this = this;
                var replacementNode = null;
                var substitution = substitutions.findSubstitution(function(substitution) {
                    var valueMatches = substitution.matchValue(_this.value);
                    if (valueMatches) {
                        return true;
                    }
                });
                if (substitution !== null) {
                    replacementNode = substitution.getReplacementNode();
                }
                return replacementNode;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var value = this.value, json = {
                    value: value
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var value = json.value, parameter = new Parameter(value);
                return parameter;
            }
        },
        {
            key: "fromParameterNode",
            value: function fromParameterNode(parameterNode, context) {
                var parameterValue = parameterNode.getParameterValue(), value = parameterValue, parameter = new Parameter(value);
                return parameter;
            }
        }
    ]);
    return Parameter;
}(), _define_property(_Parameter, "name", "Parameter"), _Parameter));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLnZhbHVlOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBmaW5kUmVwbGFjZW1lbnROb2RlKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnROb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYWx1ZSh0aGlzLnZhbHVlKTtcblxuICAgICAgaWYgKHZhbHVlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudE5vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBqc29uLFxuICAgICAgICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIodmFsdWUpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGFyYW1ldGVyVmFsdWUgPSBwYXJhbWV0ZXJOb2RlLmdldFBhcmFtZXRlclZhbHVlKCksXG4gICAgICAgICAgdmFsdWUgPSBwYXJhbWV0ZXJWYWx1ZSwgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcih2YWx1ZSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlBhcmFtZXRlciIsInZhbHVlIiwiZ2V0VmFsdWUiLCJnZXRTdHJpbmciLCJzdHJpbmciLCJmaW5kUmVwbGFjZW1lbnROb2RlIiwic3Vic3RpdHV0aW9ucyIsInJlcGxhY2VtZW50Tm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb24iLCJ2YWx1ZU1hdGNoZXMiLCJtYXRjaFZhbHVlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY29udGV4dCIsInBhcmFtZXRlciIsImZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlclZhbHVlIiwiZ2V0UGFyYW1ldGVyVmFsdWUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQUE7OzttQkFGNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsV0FBZUEsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLEtBQUs7Z0NBRGNEO1FBRTdCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUyxJQUFJLENBQUNILEtBQUssRUFBRSxHQUFHO2dCQUU5QixPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsYUFBYTs7Z0JBQy9CLElBQUlDLGtCQUFrQjtnQkFFdEIsSUFBTUMsZUFBZUYsY0FBY0csZ0JBQWdCLENBQUMsU0FBQ0Q7b0JBQ25ELElBQU1FLGVBQWVGLGFBQWFHLFVBQVUsQ0FBQyxNQUFLVixLQUFLO29CQUV2RCxJQUFJUyxjQUFjO3dCQUNoQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlGLGlCQUFpQixNQUFNO29CQUN6QkQsa0JBQWtCQyxhQUFhSSxrQkFBa0I7Z0JBQ25EO2dCQUVBLE9BQU9MO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVosUUFBUSxJQUFJLENBQUNBLEtBQUssRUFDbEJhLE9BQU87b0JBQ0xiLE9BQUFBO2dCQUNGO2dCQUVOLE9BQU9hO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxPQUFPO2dCQUMzQixJQUFNLEFBQUVmLFFBQVVhLEtBQVZiLE9BQ0ZnQixZQUFZLElBQUlqQixVQUFVQztnQkFFaEMsT0FBT2dCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRUgsT0FBTztnQkFDN0MsSUFBTUksaUJBQWlCRCxjQUFjRSxpQkFBaUIsSUFDaERwQixRQUFRbUIsZ0JBQ1JILFlBQVksSUFBSWpCLFVBQVVDO2dCQUVoQyxPQUFPZ0I7WUFDVDs7OztLQWZBLDZCQUFPSyxRQUFPIn0=