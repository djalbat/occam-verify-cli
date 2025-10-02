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
    function Error(context, node, string) {
        _class_call_check(this, Error);
        this.context = context;
        this.node = node;
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
            key: "getNode",
            value: function getNode() {
                return this.node;
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
                this.context.warning("The '".concat(errorString, "' error cannot be verified."), this.node);
                return verifies;
            }
        }
    ], [
        {
            key: "fromErrorNode",
            value: function fromErrorNode(errorNode, context) {
                var node = errorNode, string = context.nodeAsString(node), error = new Error(context, node, string);
                return error;
            }
        }
    ]);
    return Error;
}(), _define_property(_Error, "name", "Error"), _Error));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXJyb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcnJvclN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQud2FybmluZyhgVGhlICcke2Vycm9yU3RyaW5nfScgZXJyb3IgY2Fubm90IGJlIHZlcmlmaWVkLmAsIHRoaXMubm9kZSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXJyb3JcIjtcblxuICBzdGF0aWMgZnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBlcnJvciA9IG5ldyBFcnJvcihjb250ZXh0LCBub2RlLCBzdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkVycm9yIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsInZlcmlmeSIsInZlcmlmaWVzIiwiZXJyb3JTdHJpbmciLCJ3YXJuaW5nIiwiZnJvbUVycm9yTm9kZSIsImVycm9yTm9kZSIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7bUJBRjRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCLFdBQWVBLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTTtnQ0FERkg7UUFFN0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOzs7O1lBR2hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxjQUFjLElBQUksQ0FBQ04sTUFBTSxFQUFHLEdBQUc7Z0JBRXJDLElBQUksQ0FBQ0YsT0FBTyxDQUFDUyxPQUFPLENBQUMsQUFBQyxRQUFtQixPQUFaRCxhQUFZLGdDQUE4QixJQUFJLENBQUNQLElBQUk7Z0JBRWhGLE9BQU9NO1lBQ1Q7Ozs7WUFJT0csS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFWCxPQUFPO2dCQUNyQyxJQUFNQyxPQUFPVSxXQUNQVCxTQUFTRixRQUFRWSxZQUFZLENBQUNYLE9BQzlCWSxRQUFRLElBQUlkLE1BQU1DLFNBQVNDLE1BQU1DO2dCQUV2QyxPQUFPVztZQUNUOzs7O0tBUkEseUJBQU9DLFFBQU8ifQ==