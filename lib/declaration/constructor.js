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
            value: function verify(fileContext) {
                var verified;
                var constructorDeclarationString = this.getString(); ///
                fileContext.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."));
                var constructorVerified = this.constructor.verify(fileContext);
                if (constructorVerified) {
                    fileContext.addConstructor(this.constructor);
                    verified = true;
                }
                if (verified) {
                    fileContext.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3I7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZygpOyB9XG5cbiAgdmVyaWZ5KGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclZlcmlmaWVkID0gdGhpcy5jb25zdHJ1Y3Rvci52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yVmVyaWZpZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBjb25zdHJ1Y3Rvcik7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbjtcbiAgfVxufSJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImdldEZpbGVDb250ZXh0IiwiZ2V0Q29uc3RydWN0b3IiLCJnZXRTdHJpbmciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsImNvbnN0cnVjdG9yVmVyaWZpZWQiLCJhZGRDb25zdHJ1Y3RvciIsImRlYnVnIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2tFQUZHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVQsSUFBQSxBQUFNQSx1Q0FBTjthQUFNQSx1QkFDUEMsV0FBVyxFQUFFQyxXQUFXO2dDQURqQkY7UUFFakIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBSEZGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDSCxXQUFXLENBQUNHLFNBQVM7WUFBSTs7O1lBRW5EQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0wsV0FBVztnQkFDaEIsSUFBSU07Z0JBRUosSUFBTUMsK0JBQStCLElBQUksQ0FBQ0gsU0FBUyxJQUFJLEdBQUc7Z0JBRTFESixZQUFZUSxLQUFLLENBQUMsQUFBQyxrQkFBOEMsT0FBN0JELDhCQUE2QjtnQkFFakUsSUFBTUUsc0JBQXNCLElBQUksQ0FBQ1IsV0FBVyxDQUFDSSxNQUFNLENBQUNMO2dCQUVwRCxJQUFJUyxxQkFBcUI7b0JBQ3ZCVCxZQUFZVSxjQUFjLENBQUMsSUFBSSxDQUFDVCxXQUFXO29CQUUzQ0ssV0FBVztnQkFDYjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaTixZQUFZVyxLQUFLLENBQUMsQUFBQyxvQkFBZ0QsT0FBN0JKLDhCQUE2QjtnQkFDckU7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFYixXQUFXO2dCQUMzRSxJQUFNQyxjQUFjYSxvQkFBVyxDQUFDRiw4QkFBOEIsQ0FBQ0MsNEJBQTRCYixjQUNyRmUseUJBQXlCLElBeENkaEIsdUJBd0N5Q0MsYUFBYUM7Z0JBRXZFLE9BQU9jO1lBQ1Q7OztXQTNDbUJoQiJ9