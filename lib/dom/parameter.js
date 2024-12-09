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
var _query = require("../utilities/query");
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
var nameTerminalNodeQuery = (0, _query.nodeQuery)("/parameter/@name");
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
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var parameterString = this.string; ///
                context.trace("Verifying the '".concat(parameterString, "' parameter..."));
                debugger;
                if (verified) {
                    context.debug("...verified the '".concat(parameterString, "' parameter."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromParameterNode",
            value: function fromParameterNode(parameterNode, context) {
                var nameTerminalNode = nameTerminalNodeQuery(parameterNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent, parameter = new Parameter(name);
                return parameter;
            }
        }
    ]);
    return Parameter;
}(), _define_property(_Parameter, "name", "Parameter"), _Parameter));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcGFyYW1ldGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3BhcmFtZXRlci9AbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5uYW1lOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlclwiO1xuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyTm9kZShwYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShwYXJhbWV0ZXJOb2RlKSxcbiAgICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudCwgLy8vXG4gICAgICAgICAgcGFyYW1ldGVyID0gbmV3IFBhcmFtZXRlcihuYW1lKTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUGFyYW1ldGVyIiwibmFtZSIsImdldE5hbWUiLCJnZXRTdHJpbmciLCJzdHJpbmciLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwiZGVidWciLCJmcm9tUGFyYW1ldGVyTm9kZSIsInBhcmFtZXRlck5vZGUiLCJuYW1lVGVybWluYWxOb2RlIiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwicGFyYW1ldGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztxQkFMMEI7bUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDO0lBRXhDLFdBQWVDLElBQUFBLGdCQUFXLDhCQUFDO2FBQU1DLFVBQ25CQyxJQUFJO2dDQURlRDtRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDSCxJQUFJLEVBQUUsR0FBRztnQkFFN0IsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDakMsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxrQkFBa0IsSUFBSSxDQUFDTixNQUFNLEVBQUUsR0FBRztnQkFFeENJLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUFpQyxPQUFoQkQsaUJBQWdCO2dCQUVoRCxRQUFRO2dCQUVSLElBQUlELFVBQVU7b0JBQ1pELFFBQVFJLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQkYsaUJBQWdCO2dCQUNwRDtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBSU9JLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFTixPQUFPO2dCQUM3QyxJQUFNTyxtQkFBbUJsQixzQkFBc0JpQixnQkFDekNFLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEaEIsT0FBT2UseUJBQ1BFLFlBQVksSUFBSWxCLFVBQVVDO2dCQUVoQyxPQUFPaUI7WUFDVDs7OztLQVRBLDZCQUFPakIsUUFBTyJ9