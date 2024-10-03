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
            value: function verify(errorNode, fileContext) {
                var verified = false;
                var errorString = this.string; ///
                fileContext.debug("The '".concat(errorString, "' error cannot be verified."), errorNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgdmVyaWZ5KGVycm9yTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVycm9yU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7ZXJyb3JTdHJpbmd9JyBlcnJvciBjYW5ub3QgYmUgdmVyaWZpZWQuYCwgZXJyb3JOb2RlKTtcblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gZXJyb3JOb2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZmlsZUNvbnRleHQsIHN0cmluZyk7XG5cbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIkVycm9yIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsInZlcmlmeSIsImVycm9yTm9kZSIsInZlcmlmaWVkIiwiZXJyb3JTdHJpbmciLCJkZWJ1ZyIsImZyb21FcnJvck5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsc0JBQU47YUFBTUEsTUFDUEMsV0FBVyxFQUFFQyxNQUFNO2dDQURaRjtRQUVqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFIR0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsU0FBUyxFQUFFTCxXQUFXO2dCQUMzQixJQUFJTSxXQUFXO2dCQUVmLElBQU1DLGNBQWMsSUFBSSxDQUFDTixNQUFNLEVBQUcsR0FBRztnQkFFckNELFlBQVlRLEtBQUssQ0FBQyxBQUFDLFFBQW1CLE9BQVpELGFBQVksZ0NBQThCRjtnQkFFcEUsT0FBT0M7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSxjQUFjSixTQUFTLEVBQUVMLFdBQVc7Z0JBQ3pDLElBQU1VLE9BQU9MLFdBQ1BKLFNBQVNELFlBQVlXLFlBQVksQ0FBQ0QsT0FDbENFLFFBQVEsSUEzQkdiLE1BMkJPQyxhQUFhQztnQkFFckMsT0FBT1c7WUFDVDs7O1dBOUJtQmIifQ==