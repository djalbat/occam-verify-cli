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
    function Error(fileContext, string) {
        _class_call_check(this, Error);
        this.fileContext = fileContext;
        this.string = string;
    }
    _create_class(Error, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
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
                var verified = false;
                var errorString = this.string; ///
                this.fileContext.debug("The '".concat(errorString, "' error cannot be verified."));
                return verified;
            }
        }
    ], [
        {
            key: "fromErrorNode",
            value: function fromErrorNode(errorNode, fileContext) {
                var node = errorNode, string = fileContext.nodeAsString(node), error = new Error(fileContext, string);
                return error;
            }
        }
    ]);
    return Error;
}(), _define_property(_Error, "name", "Error"), _Error));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXJyb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcnJvclN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7ZXJyb3JTdHJpbmd9JyBlcnJvciBjYW5ub3QgYmUgdmVyaWZpZWQuYCk7XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXJyb3JcIjtcblxuICBzdGF0aWMgZnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKGZpbGVDb250ZXh0LCBzdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkVycm9yIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsInZlcmlmeSIsInZlcmlmaWVkIiwiZXJyb3JTdHJpbmciLCJkZWJ1ZyIsImZyb21FcnJvck5vZGUiLCJlcnJvck5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZXJyb3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQUE7OzttQkFGNEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsV0FBZUEsSUFBQUEsZ0JBQVcsMEJBQUM7YUFBTUMsTUFDbkJDLFdBQVcsRUFBRUMsTUFBTTtnQ0FEQUY7UUFFN0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7OztZQUdoQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsY0FBYyxJQUFJLENBQUNMLE1BQU0sRUFBRyxHQUFHO2dCQUVyQyxJQUFJLENBQUNELFdBQVcsQ0FBQ08sS0FBSyxDQUFDLEFBQUMsUUFBbUIsT0FBWkQsYUFBWTtnQkFFM0MsT0FBT0Q7WUFDVDs7OztZQUlPRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVULFdBQVc7Z0JBQ3pDLElBQU1VLE9BQU9ELFdBQ1BSLFNBQVNELFlBQVlXLFlBQVksQ0FBQ0QsT0FDbENFLFFBQVEsSUFBSWIsTUFBTUMsYUFBYUM7Z0JBRXJDLE9BQU9XO1lBQ1Q7Ozs7S0FSQSx5QkFBT0MsUUFBTyJ9