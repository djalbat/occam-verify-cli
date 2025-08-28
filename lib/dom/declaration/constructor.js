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
    function ConstructorDeclaration(context, string, constructor) {
        _class_call_check(this, ConstructorDeclaration);
        this.context = context;
        this.string = string;
        this.constructor = constructor;
    }
    _create_class(ConstructorDeclaration, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
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
                var verifies;
                var constructorDeclarationString = this.getString(); ///
                this.context.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."));
                var constructorTypeVerifies = this.verifyConstructorType();
                if (constructorTypeVerifies) {
                    var constructorVerifies = this.verifyConstructor();
                    if (constructorVerifies) {
                        this.context.addConstructor(this.constructor);
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration."));
                }
                return verifies;
            }
        },
        {
            key: "verifyConstructor",
            value: function verifyConstructor() {
                var constructorVerifies;
                var constructorString = this.constructor.getString();
                this.context.trace("Verifying the '".concat(constructorString, "' constructor..."));
                var term = this.constructor.getTerm(), termNode = term.getNode();
                constructorVerifies = _constructor.default.verifyTerm(termNode, this.context);
                if (constructorVerifies) {
                    this.context.debug("...verified the '".concat(constructorString, "' constructor."));
                }
                return constructorVerifies;
            }
        },
        {
            key: "verifyConstructorType",
            value: function verifyConstructorType() {
                var constructorTypeVerifies = false;
                var type;
                type = this.constructor.getType();
                var typeName = type.getName(), typeString = type.getString();
                this.context.trace("Verifying the '".concat(typeString, "' type..."));
                var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes);
                type = this.context.findTypeByTypeName(typeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    this.context.debug("The '".concat(typeString, "' type is not present."));
                } else {
                    var provisionalMatches = type.matchProvisional(provisional);
                    if (!provisionalMatches) {
                        provisional ? this.context.debug("The '".concat(typeString, "' type is present but not provisional.")) : this.context.debug("The '".concat(typeString, "' type is present but provisional."));
                    } else {
                        this.constructor.setType(type);
                        constructorTypeVerifies = true;
                    }
                }
                if (constructorTypeVerifies) {
                    this.context.debug("...verified the '".concat(typeString, "' type."));
                }
                return constructorTypeVerifies;
            }
        }
    ], [
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, context) {
                var Constructor = _dom.default.Constructor, node = constructorDeclarationNode, string = context.nodeAsString(node), constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclaration = new ConstructorDeclaration(context, string, constructor);
                return constructorDeclaration;
            }
        }
    ]);
    return ConstructorDeclaration;
}(), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbnN0cnVjdG9yRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3I7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbnN0cnVjdG9yVHlwZSgpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvclZlcmlmaWVzID0gdGhpcy52ZXJpZnlDb25zdHJ1Y3RvcigpO1xuXG4gICAgICBpZiAoY29uc3RydWN0b3JWZXJpZmllcykge1xuICAgICAgICB0aGlzLmNvbnRleHQuYWRkQ29uc3RydWN0b3IodGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBjb25zdHJ1Y3RvclZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLmNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgY29uc3RydWN0b3JWZXJpZmllcyA9IGNvbnN0cnVjdG9yVmVyaWZpZXIudmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGhpcy5jb250ZXh0KTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvclZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Q29uc3RydWN0b3JUeXBlKCkge1xuICAgIGxldCBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgbGV0IHR5cGU7XG5cbiAgICB0eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJ0eXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHlwZS5pc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlcnR5cGVzKTtcblxuICAgIHR5cGUgPSB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpXG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvdmlzaW9uYWxNYXRjaGVzID0gdHlwZS5tYXRjaFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgaWYgKCFwcm92aXNpb25hbE1hdGNoZXMpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgP1xuICAgICAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gKSA6XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3Iuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JUeXBlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBzdHJpbmcsIGNvbnN0cnVjdG9yKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwiY29uc3RydWN0b3IiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Q29uc3RydWN0b3IiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsImNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzIiwidmVyaWZ5Q29uc3RydWN0b3JUeXBlIiwiY29uc3RydWN0b3JWZXJpZmllcyIsInZlcmlmeUNvbnN0cnVjdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJkZWJ1ZyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidGVybSIsImdldFRlcm0iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJjb25zdHJ1Y3RvclZlcmlmaWVyIiwidmVyaWZ5VGVybSIsInR5cGUiLCJnZXRUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwidHlwZVN0cmluZyIsImluY2x1ZGVTdXBlcnR5cGVzIiwicHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJwcm92aXNpb25hbE1hdGNoZXMiLCJtYXRjaFByb3Zpc2lvbmFsIiwic2V0VHlwZSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3IiLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzJEQU5nQjtrRUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhDLFdBQWVBLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNuQkMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLFdBQVc7Z0NBRFRIO1FBRTdCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtR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