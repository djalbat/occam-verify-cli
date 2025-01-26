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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _type = require("../type");
var _constructor = /*#__PURE__*/ _interop_require_default(require("../../verifier/constructor"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _ConstructorDeclaration;
var _default = (0, _dom.domAssigned)((_ConstructorDeclaration = /*#__PURE__*/ function() {
    function ConstructorDeclaration(fileContext, string, constructor) {
        _class_call_check(this, ConstructorDeclaration);
        this.fileContext = fileContext;
        this.string = string;
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
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getConstructor",
            value: function getConstructor() {
                return this.constructor;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var constructorDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."));
                var constructorVerified = this.verifyConstructor();
                if (constructorVerified) {
                    var typeVerified = this.verifyType();
                    if (typeVerified) {
                        var type;
                        type = this.constructor.getType();
                        var typeName = type.getName();
                        type = this.fileContext.findTypeByTypeName(typeName);
                        var typeProvisional = type.isProvisional(), constructorProvisional = this.constructor.isProvisional();
                        if (typeProvisional !== constructorProvisional) {
                            var typeString = type.getString(), constructorString = this.constructor.getString();
                            if (typeProvisional) {
                                this.fileContext.debug("The '".concat(typeString, "' type is provisional whilst the '").concat(constructorString, "' constructor's type is not."));
                            }
                            if (constructorProvisional) {
                                this.fileContext.debug("The '".concat(typeString, "' type is not provisional whilst the '").concat(constructorString, "' constructor's type is."));
                            }
                        } else {
                            this.constructor.setType(type);
                            this.fileContext.addConstructor(this.constructor);
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerified;
                var type = this.constructor.getType();
                if (type === _type.objectType) {
                    typeVerified = true;
                } else {
                    var typeName = type.getName();
                    this.fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                    var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                    if (!typePresent) {
                        this.fileContext.debug("The '".concat(typeName, "' type is not present."));
                    } else {
                        typeVerified = true;
                    }
                    if (typeVerified) {
                        this.fileContext.debug("...verified the '".concat(typeName, "' type."));
                    }
                }
                return typeVerified;
            }
        },
        {
            key: "verifyConstructor",
            value: function verifyConstructor() {
                var constructorVerified;
                var constructorString = this.constructor.getString();
                this.fileContext.trace("Verifying the '".concat(constructorString, "' constructor..."));
                var term = this.constructor.getTerm(), termNode = term.getNode();
                constructorVerified = _constructor.default.verifyTerm(termNode, this.fileContext);
                if (constructorVerified) {
                    this.fileContext.debug("...verified the '".concat(constructorString, "' constructor."));
                }
                return constructorVerified;
            }
        }
    ], [
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var Constructor = _dom.default.Constructor, node = constructorDeclarationNode, string = fileContext.nodeAsString(node), constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext), constructorDeclaration = new ConstructorDeclaration(fileContext, string, constructor);
                return constructorDeclaration;
            }
        }
    ]);
    return ConstructorDeclaration;
}(), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclZlcmlmaWVkID0gdGhpcy52ZXJpZnlDb25zdHJ1Y3RvcigpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGxldCB0eXBlO1xuXG4gICAgICAgIHR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgIHR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgY29uc3QgdHlwZVByb3Zpc2lvbmFsID0gdHlwZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yUHJvdmlzaW9uYWwgPSB0aGlzLmNvbnN0cnVjdG9yLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgICBpZiAodHlwZVByb3Zpc2lvbmFsICE9PSBjb25zdHJ1Y3RvclByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByb3Zpc2lvbmFsIHdoaWxzdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzIHR5cGUgaXMgbm90LmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb25zdHJ1Y3RvclByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByb3Zpc2lvbmFsIHdoaWxzdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzIHR5cGUgaXMuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3Iuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkQ29uc3RydWN0b3IodGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Q29uc3RydWN0b3IoKSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLmNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgY29uc3RydWN0b3JWZXJpZmllZCA9IGNvbnN0cnVjdG9yVmVyaWZpZXIudmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICBpZiAoY29uc3RydWN0b3JWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCBjb25zdHJ1Y3Rvcik7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJjb25zdHJ1Y3RvciIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Q29uc3RydWN0b3IiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsImNvbnN0cnVjdG9yVmVyaWZpZWQiLCJ2ZXJpZnlDb25zdHJ1Y3RvciIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVQcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJjb25zdHJ1Y3RvclByb3Zpc2lvbmFsIiwidHlwZVN0cmluZyIsImNvbnN0cnVjdG9yU3RyaW5nIiwiZGVidWciLCJzZXRUeXBlIiwiYWRkQ29uc3RydWN0b3IiLCJvYmplY3RUeXBlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInRlcm0iLCJnZXRUZXJtIiwidGVybU5vZGUiLCJnZXROb2RlIiwiY29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyREFQZ0I7b0JBRVc7a0VBR0s7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWhDLFdBQWVBLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFdBQVc7Z0NBRGJIO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFdBQVcsR0FBR0E7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQywrQkFBK0IsSUFBSSxDQUFDSixTQUFTLElBQUksR0FBRztnQkFFMUQsSUFBSSxDQUFDSixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUE4QyxPQUE3QkQsOEJBQTZCO2dCQUV0RSxJQUFNRSxzQkFBc0IsSUFBSSxDQUFDQyxpQkFBaUI7Z0JB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