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
    function ConstructorDeclaration(context, node, string, constructor) {
        _class_call_check(this, ConstructorDeclaration);
        this.context = context;
        this.node = node;
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
            key: "getNode",
            value: function getNode() {
                return this.node;
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
                var constructorDeclarationString = this.string; ///
                this.context.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."), this.node);
                var constructorTypeVerifies = this.verifyConstructorType();
                if (constructorTypeVerifies) {
                    var constructorVerifies = this.verifyConstructor();
                    if (constructorVerifies) {
                        this.context.addConstructor(this.constructor);
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyConstructor",
            value: function verifyConstructor() {
                var constructorVerifies;
                var constructorString = this.constructor.getString();
                this.context.trace("Verifying the '".concat(constructorString, "' constructor..."), this.node);
                var term = this.constructor.getTerm(), termNode = term.getNode();
                constructorVerifies = _constructor.default.verifyTerm(termNode, this.context);
                if (constructorVerifies) {
                    this.context.debug("...verified the '".concat(constructorString, "' constructor."), this.node);
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
                this.context.trace("Verifying the '".concat(typeString, "' type..."), this.node);
                var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes);
                type = this.context.findTypeByTypeName(typeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    this.context.debug("The '".concat(typeString, "' type is not present."), this.node);
                } else {
                    var provisionalMatches = type.matchProvisional(provisional);
                    if (!provisionalMatches) {
                        provisional ? this.context.debug("The '".concat(typeString, "' type is present but not provisional."), this.node) : this.context.debug("The '".concat(typeString, "' type is present but provisional."), this.node);
                    } else {
                        this.constructor.setType(type);
                        constructorTypeVerifies = true;
                    }
                }
                if (constructorTypeVerifies) {
                    this.context.debug("...verified the '".concat(typeString, "' type."), this.node);
                }
                return constructorTypeVerifies;
            }
        }
    ], [
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, context) {
                var Constructor = _dom.default.Constructor, node = constructorDeclarationNode, string = context.nodeAsString(node), constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclaration = new ConstructorDeclaration(context, node, string, constructor);
                return constructorDeclaration;
            }
        }
    ]);
    return ConstructorDeclaration;
}(), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbnN0cnVjdG9yRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5Q29uc3RydWN0b3JUeXBlKCk7XG5cbiAgICBpZiAoY29uc3RydWN0b3JUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbnN0cnVjdG9yKCk7XG5cbiAgICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5hZGRDb25zdHJ1Y3Rvcih0aGlzLmNvbnN0cnVjdG9yKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgY29uc3RydWN0b3JWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLmNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgY29uc3RydWN0b3JWZXJpZmllcyA9IGNvbnN0cnVjdG9yVmVyaWZpZXIudmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGhpcy5jb250ZXh0KTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb25zdHJ1Y3RvclR5cGUoKSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBsZXQgdHlwZTtcblxuICAgIHR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVydHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHR5cGUuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyk7XG5cbiAgICB0eXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKVxuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvdmlzaW9uYWxNYXRjaGVzID0gdHlwZS5tYXRjaFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgaWYgKCFwcm92aXNpb25hbE1hdGNoZXMpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgP1xuICAgICAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gLCB0aGlzLm5vZGUpIDpcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IHByb3Zpc2lvbmFsLmAsIHRoaXMubm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25zdHJ1Y3RvclR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JUeXBlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGNvbnN0cnVjdG9yKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsImNvbnN0cnVjdG9yIiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRDb25zdHJ1Y3RvciIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwiY29uc3RydWN0b3JUeXBlVmVyaWZpZXMiLCJ2ZXJpZnlDb25zdHJ1Y3RvclR5cGUiLCJjb25zdHJ1Y3RvclZlcmlmaWVzIiwidmVyaWZ5Q29uc3RydWN0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImRlYnVnIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0ZXJtIiwiZ2V0VGVybSIsInRlcm1Ob2RlIiwiY29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInR5cGVTdHJpbmciLCJpbmNsdWRlU3VwZXJ0eXBlcyIsInByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwicHJvdmlzaW9uYWxNYXRjaGVzIiwibWF0Y2hQcm92aXNpb25hbCIsInNldFR5cGUiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yIiwiZG9tIiwibm9kZUFzU3RyaW5nIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzJEQU5nQjtrRUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhDLFdBQWVBLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNuQkMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsV0FBVztnQ0FEZko7UUFFN0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBR0M7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3pCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLCtCQUErQixJQUFJLENBQUNSLE1BQU0sRUFBRSxHQUFHO2dCQUVyRCxJQUFJLENBQUNGLE9BQU8sQ0FBQ1csS0FBSyxDQUFDLEFBQUMsa0JBQThDLE9BQTdCRCw4QkFBNkIsaUNBQStCLElBQUksQ0FBQ1QsSUFBSTtnQkFFMUcsSUFBTVcsMEJBQTBCLElBQUksQ0FBQ0MscUJBQXFCO2dCQUUxRCxJQUFJRCx5QkFBeUI7b0JBQzNCLElBQU1FLHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQjtvQkFFbEQsSUFBSUQscUJBQXFCO3dCQUN2QixJQUFJLENBQUNkLE9BQU8sQ0FBQ2dCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVzt3QkFFNUNQLFdBQVc7b0JBQ2I7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNULE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQyxBQUFDLG9CQUFnRCxPQUE3QlAsOEJBQTZCLCtCQUE2QixJQUFJLENBQUNULElBQUk7Z0JBQzVHO2dCQUVBLE9BQU9RO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUQ7Z0JBRUosSUFBTUksb0JBQW9CLElBQUksQ0FBQyxXQUFXLENBQUNaLFNBQVM7Z0JBRXBELElBQUksQ0FBQ04sT0FBTyxDQUFDVyxLQUFLLENBQUMsQUFBQyxrQkFBbUMsT0FBbEJPLG1CQUFrQixxQkFBbUIsSUFBSSxDQUFDakIsSUFBSTtnQkFFbkYsSUFBTWtCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQ0MsT0FBTyxJQUMvQkMsV0FBV0YsS0FBS2QsT0FBTztnQkFFN0JTLHNCQUFzQlEsb0JBQW1CLENBQUNDLFVBQVUsQ0FBQ0YsVUFBVSxJQUFJLENBQUNyQixPQUFPO2dCQUUzRSxJQUFJYyxxQkFBcUI7b0JBQ3ZCLElBQUksQ0FBQ2QsT0FBTyxDQUFDaUIsS0FBSyxDQUFDLEFBQUMsb0JBQXFDLE9BQWxCQyxtQkFBa0IsbUJBQWlCLElBQUksQ0FBQ2pCLElBQUk7Z0JBQ3JGO2dCQUVBLE9BQU9hO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUQsMEJBQTBCO2dCQUU5QixJQUFJWTtnQkFFSkEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDQyxPQUFPO2dCQUUvQixJQUFNQyxXQUFXRixLQUFLRyxPQUFPLElBQ3ZCQyxhQUFhSixLQUFLbEIsU0FBUztnQkFFakMsSUFBSSxDQUFDTixPQUFPLENBQUNXLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYaUIsWUFBVyxjQUFZLElBQUksQ0FBQzNCLElBQUk7Z0JBRXJFLElBQU00QixvQkFBb0IsT0FDcEJDLGNBQWNOLEtBQUtPLGFBQWEsQ0FBQ0Y7Z0JBRXZDTCxPQUFPLElBQUksQ0FBQ3hCLE9BQU8sQ0FBQ2dDLGtCQUFrQixDQUFDTjtnQkFFdkMsSUFBTU8sY0FBZVQsU0FBUztnQkFFOUIsSUFBSSxDQUFDUyxhQUFhO29CQUNoQixJQUFJLENBQUNqQyxPQUFPLENBQUNpQixLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYVyxZQUFXLDJCQUF5QixJQUFJLENBQUMzQixJQUFJO2dCQUMxRSxPQUFPO29CQUNMLElBQU1pQyxxQkFBcUJWLEtBQUtXLGdCQUFnQixDQUFDTDtvQkFFakQsSUFBSSxDQUFDSSxvQkFBb0I7d0JBQ3ZCSixjQUNFLElBQUksQ0FBQzlCLE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhXLFlBQVcsMkNBQXlDLElBQUksQ0FBQzNCLElBQUksSUFDdEYsSUFBSSxDQUFDRCxPQUFPLENBQUNpQixLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYVyxZQUFXLHVDQUFxQyxJQUFJLENBQUMzQixJQUFJO29CQUMxRixPQUFPO3dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUNtQyxPQUFPLENBQUNaO3dCQUV6QlosMEJBQTBCO29CQUM1QjtnQkFDRjtnQkFFQSxJQUFJQSx5QkFBeUI7b0JBQzNCLElBQUksQ0FBQ1osT0FBTyxDQUFDaUIsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhXLFlBQVcsWUFBVSxJQUFJLENBQUMzQixJQUFJO2dCQUN2RTtnQkFFQSxPQUFPVztZQUNUOzs7O1lBSU95QixLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFdEMsT0FBTztnQkFDdkUsSUFBTSxBQUFFdUMsY0FBZ0JDLFlBQUcsQ0FBbkJELGFBQ0Z0QyxPQUFPcUMsNEJBQ1BwQyxTQUFTRixRQUFReUMsWUFBWSxDQUFDeEMsT0FDOUJFLGNBQWNvQyxZQUFZRiw4QkFBOEIsQ0FBQ0MsNEJBQTRCdEMsVUFDckYwQyx5QkFBeUIsSUFBSTNDLHVCQUF1QkMsU0FBU0MsTUFBTUMsUUFBUUM7Z0JBRWpGLE9BQU91QztZQUNUOzs7O0tBVkEsMENBQU9DLFFBQU8ifQ==