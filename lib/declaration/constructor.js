"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ConstructorDeclaration;
    }
});
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
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
var ConstructorDeclaration = /*#__PURE__*/ function() {
    function ConstructorDeclaration(fileContext, constructor) {
        _class_call_check(this, ConstructorDeclaration);
        this.fileContext = fileContext;
        this.constructor = constructor;
    }
    _create_class(ConstructorDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getConstructor",
            value: function getConstructor() {
                return this.constructor;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.constructor.getString();
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var constructorDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."));
                var constructorVerifiedAtTopLevel = this.constructor.verifyAtTopLevel(this.fileContext);
                if (constructorVerifiedAtTopLevel) {
                    this.fileContext.addConstructor(this.constructor);
                    verified = true;
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var constructor = _constructor.default.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext), constructorDeclaration = new ConstructorDeclaration(fileContext, constructor);
                return constructorDeclaration;
            }
        }
    ]);
    return ConstructorDeclaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3I7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZygpOyB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMuY29uc3RydWN0b3IudmVyaWZ5QXRUb3BMZXZlbCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRDb25zdHJ1Y3Rvcih0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBjb25zdHJ1Y3Rvcik7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbjtcbiAgfVxufSJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImdldEZpbGVDb250ZXh0IiwiZ2V0Q29uc3RydWN0b3IiLCJnZXRTdHJpbmciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsImNvbnN0cnVjdG9yVmVyaWZpZWRBdFRvcExldmVsIiwidmVyaWZ5QXRUb3BMZXZlbCIsImFkZENvbnN0cnVjdG9yIiwiZGVidWciLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7a0VBRkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFVCxJQUFBLEFBQU1BLHVDQUFOO2FBQU1BLHVCQUNQQyxXQUFXLEVBQUVDLFdBQVc7Z0NBRGpCRjtRQUVqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFIRkY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNILFdBQVcsQ0FBQ0csU0FBUztZQUFJOzs7WUFFbkRDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQywrQkFBK0IsSUFBSSxDQUFDSCxTQUFTLElBQUksR0FBRztnQkFFMUQsSUFBSSxDQUFDSixXQUFXLENBQUNRLEtBQUssQ0FBQyxBQUFDLGtCQUE4QyxPQUE3QkQsOEJBQTZCO2dCQUV0RSxJQUFNRSxnQ0FBZ0MsSUFBSSxDQUFDUixXQUFXLENBQUNTLGdCQUFnQixDQUFDLElBQUksQ0FBQ1YsV0FBVztnQkFFeEYsSUFBSVMsK0JBQStCO29CQUNqQyxJQUFJLENBQUNULFdBQVcsQ0FBQ1csY0FBYyxDQUFDLElBQUksQ0FBQ1YsV0FBVztvQkFFaERLLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNOLFdBQVcsQ0FBQ1ksS0FBSyxDQUFDLEFBQUMsb0JBQWdELE9BQTdCTCw4QkFBNkI7Z0JBQzFFO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsK0JBQStCQywwQkFBMEIsRUFBRWQsV0FBVztnQkFDM0UsSUFBTUMsY0FBY2Msb0JBQVcsQ0FBQ0YsOEJBQThCLENBQUNDLDRCQUE0QmQsY0FDckZnQix5QkFBeUIsSUF4Q2RqQix1QkF3Q3lDQyxhQUFhQztnQkFFdkUsT0FBT2U7WUFDVDs7O1dBM0NtQmpCIn0=