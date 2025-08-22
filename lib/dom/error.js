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
                var verifies = false;
                var errorString = this.string; ///
                this.fileContext.warning("The '".concat(errorString, "' error cannot be verified."));
                return verifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vZXJyb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcnJvclN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0Lndhcm5pbmcoYFRoZSAnJHtlcnJvclN0cmluZ30nIGVycm9yIGNhbm5vdCBiZSB2ZXJpZmllZC5gKTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcnJvclwiO1xuXG4gIHN0YXRpYyBmcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZmlsZUNvbnRleHQsIHN0cmluZyk7XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiRXJyb3IiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJlcnJvclN0cmluZyIsIndhcm5pbmciLCJmcm9tRXJyb3JOb2RlIiwiZXJyb3JOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7bUJBRjRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCLFdBQWVBLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxXQUFXLEVBQUVDLE1BQU07Z0NBREFGO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7Ozs7WUFHaEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGNBQWMsSUFBSSxDQUFDTCxNQUFNLEVBQUcsR0FBRztnQkFFckMsSUFBSSxDQUFDRCxXQUFXLENBQUNPLE9BQU8sQ0FBQyxBQUFDLFFBQW1CLE9BQVpELGFBQVk7Z0JBRTdDLE9BQU9EO1lBQ1Q7Ozs7WUFJT0csS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFVCxXQUFXO2dCQUN6QyxJQUFNVSxPQUFPRCxXQUNQUixTQUFTRCxZQUFZVyxZQUFZLENBQUNELE9BQ2xDRSxRQUFRLElBQUliLE1BQU1DLGFBQWFDO2dCQUVyQyxPQUFPVztZQUNUOzs7O0tBUkEseUJBQU9DLFFBQU8ifQ==