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
var _ontology = require("../ontology");
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
var _default = (0, _ontology.define)((_Parameter = /*#__PURE__*/ function() {
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
                var replacementNode = null;
                var parameter = this, substitution = substitutions.findSubstitution(function(substitution) {
                    var nameMatches = substitution.matchParameter(parameter);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9wYXJhbWV0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5uYW1lOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBmaW5kUmVwbGFjZW1lbnROb2RlKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnROb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHBhcmFtZXRlciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZFN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFBhcmFtZXRlcihwYXJhbWV0ZXIpO1xuXG4gICAgICAgICAgICBpZiAobmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICByZXBsYWNlbWVudE5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnROb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIobmFtZSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21QYXJhbWV0ZXJOb2RlKHBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwYXJhbWV0ZXJOYW1lID0gcGFyYW1ldGVyTm9kZS5nZXRQYXJhbWV0ZXJOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlck5hbWUsIC8vL1xuICAgICAgICAgIHBhcmFtZXRlciA9IG5ldyBQYXJhbWV0ZXIobmFtZSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQYXJhbWV0ZXIiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFN0cmluZyIsInN0cmluZyIsImZpbmRSZXBsYWNlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25zIiwicmVwbGFjZW1lbnROb2RlIiwicGFyYW1ldGVyIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbiIsIm5hbWVNYXRjaGVzIiwibWF0Y2hQYXJhbWV0ZXIiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwiZnJvbVBhcmFtZXRlck5vZGUiLCJwYXJhbWV0ZXJOb2RlIiwicGFyYW1ldGVyTmFtZSIsImdldFBhcmFtZXRlck5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O3dCQUZ1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSw4QkFBQzthQUFNQyxVQUNkQyxJQUFJO2dDQURVRDtRQUV4QixJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDSCxJQUFJLEVBQUUsR0FBRztnQkFFN0IsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLGFBQWE7Z0JBQy9CLElBQUlDLGtCQUFrQjtnQkFFdEIsSUFBTUMsWUFBWSxJQUFJLEVBQ2hCQyxlQUFlSCxjQUFjSSxnQkFBZ0IsQ0FBQyxTQUFDRDtvQkFDN0MsSUFBTUUsY0FBY0YsYUFBYUcsY0FBYyxDQUFDSjtvQkFFaEQsSUFBSUcsYUFBYTt3QkFDZixPQUFPO29CQUNUO2dCQUNGO2dCQUVOLElBQUlGLGlCQUFpQixNQUFNO29CQUN6QkYsa0JBQWtCRSxhQUFhSSxrQkFBa0I7Z0JBQ25EO2dCQUVBLE9BQU9OO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWIsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJjLE9BQU87b0JBQ0xkLE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9jO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxPQUFPO2dCQUMzQixJQUFNLEFBQUVoQixPQUFTYyxLQUFUZCxNQUNGTyxZQUFZLElBQUlSLFVBQVVDO2dCQUVoQyxPQUFPTztZQUNUOzs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVGLE9BQU87Z0JBQzdDLElBQU1HLGdCQUFnQkQsY0FBY0UsZ0JBQWdCLElBQzlDcEIsT0FBT21CLGVBQ1BaLFlBQVksSUFBSVIsVUFBVUM7Z0JBRWhDLE9BQU9PO1lBQ1Q7Ozs7S0FmQSw2QkFBT1AsUUFBTyJ9