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
    function Parameter(name) {
        _class_call_check(this, Parameter);
        this.name = name;
    }
    _create_class(Parameter, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string = this.name; ///
                return string;
            }
        },
        {
            key: "findReplacementNode",
            value: function findReplacementNode(substitutions) {
                var _this = this;
                var replacementNode = null;
                var substitution = substitutions.findSubstitution(function(substitution) {
                    var nameMatches = substitution.matchName(_this.name);
                    if (nameMatches) {
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
                var name = this.name, json = {
                    name: name
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var name = json.name, parameter = new Parameter(name);
                return parameter;
            }
        },
        {
            key: "fromParameterNode",
            value: function fromParameterNode(parameterNode, context) {
                var parameterName = parameterNode.getParameterName(), name = parameterName, parameter = new Parameter(name);
                return parameter;
            }
        }
    ]);
    return Parameter;
}(), _define_property(_Parameter, "name", "Parameter"), _Parameter));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5uYW1lOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBmaW5kUmVwbGFjZW1lbnROb2RlKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnROb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE5hbWUodGhpcy5uYW1lKTtcblxuICAgICAgaWYgKG5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgcmVwbGFjZW1lbnROb2RlID0gc3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50Tm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKG5hbWUpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcGFyYW1ldGVyTmFtZSA9IHBhcmFtZXRlck5vZGUuZ2V0UGFyYW1ldGVyTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXJOYW1lLCAvLy9cbiAgICAgICAgICBwYXJhbWV0ZXIgPSBuZXcgUGFyYW1ldGVyKG5hbWUpO1xuXG4gICAgcmV0dXJuIHBhcmFtZXRlcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJQYXJhbWV0ZXIiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFN0cmluZyIsInN0cmluZyIsImZpbmRSZXBsYWNlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwicmVwbGFjZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbiIsIm5hbWVNYXRjaGVzIiwibWF0Y2hOYW1lIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY29udGV4dCIsInBhcmFtZXRlciIsImZyb21QYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlck5hbWUiLCJnZXRQYXJhbWV0ZXJOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQUE7OzttQkFGNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsV0FBZUEsSUFBQUEsZ0JBQVcsOEJBQUM7YUFBTUMsVUFDbkJDLElBQUk7Z0NBRGVEO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELElBQUk7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUyxJQUFJLENBQUNILElBQUksRUFBRSxHQUFHO2dCQUU3QixPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsYUFBYTs7Z0JBQy9CLElBQUlDLGtCQUFrQjtnQkFFdEIsSUFBTUMsZUFBZUYsY0FBY0csZ0JBQWdCLENBQUMsU0FBQ0Q7b0JBQ25ELElBQU1FLGNBQWNGLGFBQWFHLFNBQVMsQ0FBQyxNQUFLVixJQUFJO29CQUVwRCxJQUFJUyxhQUFhO3dCQUNmLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsSUFBSUYsaUJBQWlCLE1BQU07b0JBQ3pCRCxrQkFBa0JDLGFBQWFJLGtCQUFrQjtnQkFDbkQ7Z0JBRUEsT0FBT0w7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNWixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQmEsT0FBTztvQkFDTGIsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2E7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLE9BQU87Z0JBQzNCLElBQU0sQUFBRWYsT0FBU2EsS0FBVGIsTUFDRmdCLFlBQVksSUFBSWpCLFVBQVVDO2dCQUVoQyxPQUFPZ0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFSCxPQUFPO2dCQUM3QyxJQUFNSSxnQkFBZ0JELGNBQWNFLGdCQUFnQixJQUM5Q3BCLE9BQU9tQixlQUNQSCxZQUFZLElBQUlqQixVQUFVQztnQkFFaEMsT0FBT2dCO1lBQ1Q7Ozs7S0FmQSw2QkFBT2hCLFFBQU8ifQ==