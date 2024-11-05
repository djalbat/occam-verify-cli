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
var _constructor = /*#__PURE__*/ _interop_require_default(require("../../constructor"));
var _dom = require("../../dom");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _ConstructorDeclaration;
var _default = (0, _dom.domAssigned)((_ConstructorDeclaration = /*#__PURE__*/ function() {
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
                var constructorVerifiedWhenDeclared = this.constructor.verifyWhenDeclared(this.fileContext);
                if (constructorVerifiedWhenDeclared) {
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
}(), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vLi4vY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbnN0cnVjdG9yRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7IH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0aGlzLmNvbnN0cnVjdG9yLnZlcmlmeVdoZW5EZWNsYXJlZCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgY29uc3RydWN0b3IpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0IiwiY29uc3RydWN0b3IiLCJnZXRGaWxlQ29udGV4dCIsImdldENvbnN0cnVjdG9yIiwiZ2V0U3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJjb25zdHJ1Y3RvclZlcmlmaWVkV2hlbkRlY2xhcmVkIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwiYWRkQ29uc3RydWN0b3IiLCJkZWJ1ZyIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7a0VBSndCO21CQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFNUIsV0FBZUEsSUFBQUEsZ0JBQVcsMkNBQUM7YUFBTUMsdUJBQ25CQyxXQUFXLEVBQUVDLFdBQVc7Z0NBRExGO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBYyxPQUFPLElBQUksQ0FBQ0gsV0FBVyxDQUFDRyxTQUFTO1lBQUk7OztZQUVuREMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLCtCQUErQixJQUFJLENBQUNILFNBQVMsSUFBSSxHQUFHO2dCQUUxRCxJQUFJLENBQUNKLFdBQVcsQ0FBQ1EsS0FBSyxDQUFDLEFBQUMsa0JBQThDLE9BQTdCRCw4QkFBNkI7Z0JBRXRFLElBQU1FLGtDQUFrQyxJQUFJLENBQUNSLFdBQVcsQ0FBQ1Msa0JBQWtCLENBQUMsSUFBSSxDQUFDVixXQUFXO2dCQUU1RixJQUFJUyxpQ0FBaUM7b0JBQ25DLElBQUksQ0FBQ1QsV0FBVyxDQUFDVyxjQUFjLENBQUMsSUFBSSxDQUFDVixXQUFXO29CQUVoREssV0FBVztnQkFDYjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaLElBQUksQ0FBQ04sV0FBVyxDQUFDWSxLQUFLLENBQUMsQUFBQyxvQkFBZ0QsT0FBN0JMLDhCQUE2QjtnQkFDMUU7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUlPTyxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFZCxXQUFXO2dCQUMzRSxJQUFNQyxjQUFjYyxvQkFBVyxDQUFDRiw4QkFBOEIsQ0FBQ0MsNEJBQTRCZCxjQUNyRmdCLHlCQUF5QixJQUFJakIsdUJBQXVCQyxhQUFhQztnQkFFdkUsT0FBT2U7WUFDVDs7OztLQVBBLDBDQUFPQyxRQUFPIn0=