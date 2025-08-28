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
var _Error;
var _default = (0, _dom.domAssigned)((_Error = /*#__PURE__*/ function() {
    function Error(context, string) {
        _class_call_check(this, Error);
        this.context = context;
        this.string = string;
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
            key: "verify",
            value: function verify() {
                var verifies = false;
                var errorString = this.string; ///
                this.context.warning("The '".concat(errorString, "' error cannot be verified."));
                return verifies;
            }
        }
    ], [
        {
            key: "fromErrorNode",
            value: function fromErrorNode(errorNode, context) {
                var node = errorNode, string = context.nodeAsString(node), error = new Error(context, string);
                return error;
            }
        }
    ]);
    return Error;
}(), _define_property(_Error, "name", "Error"), _Error));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXJyb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXJyb3JTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5jb250ZXh0Lndhcm5pbmcoYFRoZSAnJHtlcnJvclN0cmluZ30nIGVycm9yIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcnJvclwiO1xuXG4gIHN0YXRpYyBmcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKGNvbnRleHQsIHN0cmluZyk7XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiRXJyb3IiLCJjb250ZXh0Iiwic3RyaW5nIiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsInZlcmlmeSIsInZlcmlmaWVzIiwiZXJyb3JTdHJpbmciLCJ3YXJuaW5nIiwiZnJvbUVycm9yTm9kZSIsImVycm9yTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJlcnJvciIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBQTs7O21CQUY0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1QixXQUFlQSxJQUFBQSxnQkFBVywwQkFBQzthQUFNQyxNQUNuQkMsT0FBTyxFQUFFQyxNQUFNO2dDQURJRjtRQUU3QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLE1BQU0sR0FBR0E7Ozs7WUFHaEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGNBQWMsSUFBSSxDQUFDTCxNQUFNLEVBQUcsR0FBRztnQkFFckMsSUFBSSxDQUFDRCxPQUFPLENBQUNPLE9BQU8sQ0FBQyxBQUFDLFFBQW1CLE9BQVpELGFBQVk7Z0JBRXpDLE9BQU9EO1lBQ1Q7Ozs7WUFJT0csS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFVCxPQUFPO2dCQUNyQyxJQUFNVSxPQUFPRCxXQUNQUixTQUFTRCxRQUFRVyxZQUFZLENBQUNELE9BQzlCRSxRQUFRLElBQUliLE1BQU1DLFNBQVNDO2dCQUVqQyxPQUFPVztZQUNUOzs7O0tBUkEseUJBQU9DLFFBQU8ifQ==