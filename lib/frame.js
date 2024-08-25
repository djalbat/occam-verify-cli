"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Frame;
    }
});
var _array = require("./utilities/array");
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
var Frame = /*#__PURE__*/ function() {
    function Frame(declarations) {
        _class_call_check(this, Frame);
        this.declarations = declarations;
    }
    _create_class(Frame, [
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "addDeclarations",
            value: function addDeclarations(declarations) {
                (0, _array.push)(this.declarations, declarations);
            }
        }
    ], [
        {
            key: "fromDeclarations",
            value: function fromDeclarations(declarations) {
                var frame = new Frame(declarations);
                return frame;
            }
        }
    ]);
    return Frame;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9mcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmFtZSB7XG4gIGNvbnN0cnVjdG9yKGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGFkZERlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgICBwdXNoKHRoaXMuZGVjbGFyYXRpb25zLCBkZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWNsYXJhdGlvbnMoZGVjbGFyYXRpb25zKSB7XG4gICAgY29uc3QgZnJhbWUgPSBuZXcgRnJhbWUoZGVjbGFyYXRpb25zKTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZyYW1lIiwiZGVjbGFyYXRpb25zIiwiZ2V0RGVjbGFyYXRpb25zIiwiYWRkRGVjbGFyYXRpb25zIiwicHVzaCIsImZyb21EZWNsYXJhdGlvbnMiLCJmcmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7cUJBRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU4sSUFBQSxBQUFNQSxzQkFBRCxBQUFMO2FBQU1BLE1BQ1BDLFlBQVk7Z0NBRExEO1FBRWpCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7a0JBRkhEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxZQUFZO1lBQzFCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQkYsWUFBWTtnQkFDMUJHLElBQUFBLFdBQUksRUFBQyxJQUFJLENBQUNILFlBQVksRUFBRUE7WUFDMUI7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCSixZQUFZO2dCQUNsQyxJQUFNSyxRQUFRLElBZEdOLE1BY09DO2dCQUV4QixPQUFPSztZQUNUOzs7V0FqQm1CTiJ9