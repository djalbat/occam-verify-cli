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
var _structure = require("../structure");
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
var _default = (0, _structure.define)((_Error = /*#__PURE__*/ function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvZXJyb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVycm9yU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuY29udGV4dC53YXJuaW5nKGBUaGUgJyR7ZXJyb3JTdHJpbmd9JyBlcnJvciBjYW5ub3QgYmUgdmVyaWZpZWQuYCwgdGhpcy5ub2RlKTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcnJvclwiO1xuXG4gIHN0YXRpYyBmcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBlcnJvck5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKGNvbnRleHQsIG5vZGUsIHN0cmluZyk7XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkVycm9yIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsInZlcmlmeSIsInZlcmlmaWVzIiwiZXJyb3JTdHJpbmciLCJ3YXJuaW5nIiwiZnJvbUVycm9yTm9kZSIsImVycm9yTm9kZSIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7eUJBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGlCQUFNLDBCQUFDO2FBQU1DLE1BQ2RDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNO2dDQURQSDtRQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7Ozs7WUFHaEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGNBQWMsSUFBSSxDQUFDTixNQUFNLEVBQUcsR0FBRztnQkFFckMsSUFBSSxDQUFDRixPQUFPLENBQUNTLE9BQU8sQ0FBQyxBQUFDLFFBQW1CLE9BQVpELGFBQVksZ0NBQThCLElBQUksQ0FBQ1AsSUFBSTtnQkFFaEYsT0FBT007WUFDVDs7OztZQUlPRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjQyxTQUFTLEVBQUVYLE9BQU87Z0JBQ3JDLElBQU1DLE9BQU9VLFdBQ1BULFNBQVNGLFFBQVFZLFlBQVksQ0FBQ1gsT0FDOUJZLFFBQVEsSUFBSWQsTUFBTUMsU0FBU0MsTUFBTUM7Z0JBRXZDLE9BQU9XO1lBQ1Q7Ozs7S0FSQSx5QkFBT0MsUUFBTyJ9