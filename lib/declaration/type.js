"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TypeDeclaration;
    }
});
var _type = /*#__PURE__*/ _interop_require_default(require("../type"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var TypeDeclaration = /*#__PURE__*/ function() {
    function TypeDeclaration(fileContext, type) {
        _class_call_check(this, TypeDeclaration);
        this.fileContext = fileContext;
        this.type = type;
    }
    _create_class(TypeDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.type.getString();
            }
        },
        {
            key: "verify",
            value: function verify(fileContext) {
                var verified = false;
                var typeDeclarationString = this.getString(); ///
                fileContext.trace("Verifying the '".concat(typeDeclarationString, "' type declaration..."));
                var typeVerified = this.type.verify(fileContext);
                if (typeVerified) {
                    fileContext.addType(this.type);
                    verified = true;
                }
                if (verified) {
                    fileContext.debug("...verified the '".concat(typeDeclarationString, "' type declaration."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromTypeDeclarationNode",
            value: function fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
                var type = _type.default.fromTypeDeclarationNode(typeDeclarationNode, fileContext), typeDeclaration = new TypeDeclaration(fileContext, type);
                return typeDeclaration;
            }
        }
    ]);
    return TypeDeclaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVHlwZSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgdHlwZSkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7IH1cblxuICB2ZXJpZnkoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy50eXBlLnZlcmlmeShmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5hZGRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gVHlwZS5mcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdHlwZURlY2xhcmF0aW9uID0gbmV3IFR5cGVEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgdHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZURlY2xhcmF0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVHlwZURlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJ0eXBlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRUeXBlIiwiZ2V0U3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ0eXBlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllZCIsImFkZFR5cGUiLCJkZWJ1ZyIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJ0eXBlRGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUYsSUFBQSxBQUFNQSxnQ0FBTjthQUFNQSxnQkFDUEMsV0FBVyxFQUFFQyxJQUFJO2dDQURWRjtRQUVqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNILElBQUksQ0FBQ0csU0FBUztZQUFJOzs7WUFFNUNDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPTCxXQUFXO2dCQUNoQixJQUFJTSxXQUFXO2dCQUVmLElBQU1DLHdCQUF3QixJQUFJLENBQUNILFNBQVMsSUFBSSxHQUFHO2dCQUVuREosWUFBWVEsS0FBSyxDQUFDLEFBQUMsa0JBQXVDLE9BQXRCRCx1QkFBc0I7Z0JBRTFELElBQU1FLGVBQWUsSUFBSSxDQUFDUixJQUFJLENBQUNJLE1BQU0sQ0FBQ0w7Z0JBRXRDLElBQUlTLGNBQWM7b0JBQ2hCVCxZQUFZVSxPQUFPLENBQUMsSUFBSSxDQUFDVCxJQUFJO29CQUU3QkssV0FBVztnQkFDYjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaTixZQUFZVyxLQUFLLENBQUMsQUFBQyxvQkFBeUMsT0FBdEJKLHVCQUFzQjtnQkFDOUQ7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSx3QkFBd0JDLG1CQUFtQixFQUFFYixXQUFXO2dCQUM3RCxJQUFNQyxPQUFPYSxhQUFJLENBQUNGLHVCQUF1QixDQUFDQyxxQkFBcUJiLGNBQ3pEZSxrQkFBa0IsSUF4Q1BoQixnQkF3QzJCQyxhQUFhQztnQkFFekQsT0FBT2M7WUFDVDs7O1dBM0NtQmhCIn0=