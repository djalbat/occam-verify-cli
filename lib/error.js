"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Error;
    }
});
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
var Error = /*#__PURE__*/ function() {
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
            value: function verify(errorNode) {
                var verified = false;
                var errorString = this.string; ///
                this.fileContext.debug("The '".concat(errorString, "' error cannot be verified."), errorNode);
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
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgdmVyaWZ5KGVycm9yTm9kZSkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXJyb3JTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke2Vycm9yU3RyaW5nfScgZXJyb3IgY2Fubm90IGJlIHZlcmlmaWVkLmAsIGVycm9yTm9kZSk7XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IGVycm9yTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGVycm9yID0gbmV3IEVycm9yKGZpbGVDb250ZXh0LCBzdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG59XG5cbiJdLCJuYW1lcyI6WyJFcnJvciIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJ2ZXJpZnkiLCJlcnJvck5vZGUiLCJ2ZXJpZmllZCIsImVycm9yU3RyaW5nIiwiZGVidWciLCJmcm9tRXJyb3JOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLFdBQVcsRUFBRUMsTUFBTTtnQ0FEWkY7UUFFakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBSEdGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFNBQVM7Z0JBQ2QsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxjQUFjLElBQUksQ0FBQ04sTUFBTSxFQUFHLEdBQUc7Z0JBRXJDLElBQUksQ0FBQ0QsV0FBVyxDQUFDUSxLQUFLLENBQUMsQUFBQyxRQUFtQixPQUFaRCxhQUFZLGdDQUE4QkY7Z0JBRXpFLE9BQU9DO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0osU0FBUyxFQUFFTCxXQUFXO2dCQUN6QyxJQUFNVSxPQUFPTCxXQUNQSixTQUFTRCxZQUFZVyxZQUFZLENBQUNELE9BQ2xDRSxRQUFRLElBM0JHYixNQTJCT0MsYUFBYUM7Z0JBRXJDLE9BQU9XO1lBQ1Q7OztXQTlCbUJiIn0=