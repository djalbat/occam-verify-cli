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
var _elements = require("../elements");
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
var _Error;
var _default = (0, _elements.define)((_Error = /*#__PURE__*/ function() {
    function Error(context, string, node) {
        _class_call_check(this, Error);
        this.context = context;
        this.string = string;
        this.node = node;
    }
    _create_class(Error, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var errorString = this.string; ///
                this.context.warning("The '".concat(errorString, "' error cannot be verified."), this.node);
                return verifies;
            }
        }
    ], [
        {
            key: "fromErrorNode",
            value: function fromErrorNode(errorNode, context) {
                var node = errorNode, string = context.nodeAsString(node), error = new Error(context, string, node);
                return error;
            }
        }
    ]);
    return Error;
}(), _define_property(_Error, "name", "Error"), _Error));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Vycm9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVycm9yU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuY29udGV4dC53YXJuaW5nKGBUaGUgJyR7ZXJyb3JTdHJpbmd9JyBlcnJvciBjYW5ub3QgYmUgdmVyaWZpZWQuYCwgdGhpcy5ub2RlKTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcnJvclwiO1xuXG4gIHN0YXRpYyBmcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkVycm9yIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZXJyb3JTdHJpbmciLCJ3YXJuaW5nIiwiZnJvbUVycm9yTm9kZSIsImVycm9yTm9kZSIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7d0JBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDBCQUFDO2FBQU1DLE1BQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJO2dDQURQSDtRQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsY0FBYyxJQUFJLENBQUNQLE1BQU0sRUFBRyxHQUFHO2dCQUVyQyxJQUFJLENBQUNELE9BQU8sQ0FBQ1MsT0FBTyxDQUFDLEFBQUMsUUFBbUIsT0FBWkQsYUFBWSxnQ0FBOEIsSUFBSSxDQUFDTixJQUFJO2dCQUVoRixPQUFPSztZQUNUOzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLGNBQWNDLFNBQVMsRUFBRVgsT0FBTztnQkFDckMsSUFBTUUsT0FBT1MsV0FDUFYsU0FBU0QsUUFBUVksWUFBWSxDQUFDVixPQUM5QlcsUUFBUSxJQUFJZCxNQUFNQyxTQUFTQyxRQUFRQztnQkFFekMsT0FBT1c7WUFDVDs7OztLQVJBLHlCQUFPQyxRQUFPIn0=