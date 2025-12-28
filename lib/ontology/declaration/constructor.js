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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
var _verify = require("../../process/verify");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _ConstructorDeclaration;
var _default = (0, _ontology.define)((_ConstructorDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(ConstructorDeclaration, Declaration);
    function ConstructorDeclaration(context, node, string, constructor) {
        _class_call_check(this, ConstructorDeclaration);
        var _this;
        _this = _call_super(this, ConstructorDeclaration, [
            context,
            node,
            string
        ]);
        _this.constructor = constructor;
        return _this;
    }
    _create_class(ConstructorDeclaration, [
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
                var node = this.getNode(), context = this.getContext(), constructorDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."), node);
                var constructorTypeVerifies = this.verifyConstructorType();
                if (constructorTypeVerifies) {
                    var constructorVerifies = this.verifyConstructor();
                    if (constructorVerifies) {
                        context.addConstructor(this.constructor);
                        verifies = true;
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyConstructor",
            value: function verifyConstructor() {
                var constructorVerifies;
                var node = this.getNode(), context = this.getContext(), constructorString = this.constructor.getString();
                context.trace("Verifying the '".concat(constructorString, "' constructor..."), node);
                var term = this.constructor.getTerm(), termNode = term.getNode();
                constructorVerifies = (0, _verify.verifyTerm)(termNode, context);
                if (constructorVerifies) {
                    context.debug("...verified the '".concat(constructorString, "' constructor."), node);
                }
                return constructorVerifies;
            }
        },
        {
            key: "verifyConstructorType",
            value: function verifyConstructorType() {
                var constructorTypeVerifies = false;
                var node = this.getNode(), context = this.getContext();
                var type;
                type = this.constructor.getType();
                var typeString = type.getString();
                context.trace("Verifying the '".concat(typeString, "' type..."), node);
                var nominalTypeName = type.getNominalTypeName();
                type = context.findTypeByNominalTypeName(nominalTypeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    context.debug("The '".concat(typeString, "' type is not present."), node);
                } else {
                    var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes), provisionalMatches = type.matchProvisional(provisional);
                    if (!provisionalMatches) {
                        provisional ? context.debug("The '".concat(typeString, "' type is present but not provisional."), node) : context.debug("The '".concat(typeString, "' type is present but provisional."), node);
                    } else {
                        this.constructor.setType(type);
                        constructorTypeVerifies = true;
                    }
                }
                if (constructorTypeVerifies) {
                    context.debug("...verified the '".concat(typeString, "' type."), node);
                }
                return constructorTypeVerifies;
            }
        }
    ], [
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, context) {
                var Constructor = _ontology.default.Constructor, node = constructorDeclarationNode, string = context.nodeAsString(node), constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclaration = new ConstructorDeclaration(context, node, string, constructor);
                return constructorDeclaration;
            }
        }
    ]);
    return ConstructorDeclaration;
}(_declaration.default), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9kZWNsYXJhdGlvbi9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcbmltcG9ydCB7IHZlcmlmeVRlcm0gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy92ZXJpZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnN0cnVjdG9yRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgY29uc3RydWN0b3IpIHtcbiAgICBzdXBlcihjb250ZXh0LCBub2RlLCBzdHJpbmcpO1xuXG4gICAgdGhpcy5jb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3I7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbnN0cnVjdG9yVHlwZSgpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvclZlcmlmaWVzID0gdGhpcy52ZXJpZnlDb25zdHJ1Y3RvcigpO1xuXG4gICAgICBpZiAoY29uc3RydWN0b3JWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmFkZENvbnN0cnVjdG9yKHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Q29uc3RydWN0b3IoKSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yVmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0VGVybSgpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICBjb25zdHJ1Y3RvclZlcmlmaWVzID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoY29uc3RydWN0b3JWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb25zdHJ1Y3RvclR5cGUoKSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgbGV0IHR5cGU7XG5cbiAgICB0eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKVxuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmNsdWRlU3VwZXJ0eXBlcyA9IGZhbHNlLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWwgPSB0eXBlLmlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVydHlwZXMpLFxuICAgICAgICAgICAgcHJvdmlzaW9uYWxNYXRjaGVzID0gdHlwZS5tYXRjaFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgaWYgKCFwcm92aXNpb25hbE1hdGNoZXMpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgP1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBub3QgcHJvdmlzaW9uYWwuYCwgbm9kZSkgOlxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IHByb3Zpc2lvbmFsLmAsIG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29uc3RydWN0b3JUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JUeXBlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBub2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgY29uc3RydWN0b3IpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsImNvbnN0cnVjdG9yIiwiZ2V0Q29uc3RydWN0b3IiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldE5vZGUiLCJnZXRDb250ZXh0IiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiY29uc3RydWN0b3JUeXBlVmVyaWZpZXMiLCJ2ZXJpZnlDb25zdHJ1Y3RvclR5cGUiLCJjb25zdHJ1Y3RvclZlcmlmaWVzIiwidmVyaWZ5Q29uc3RydWN0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImRlYnVnIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0ZXJtIiwiZ2V0VGVybSIsInRlcm1Ob2RlIiwidmVyaWZ5VGVybSIsInR5cGUiLCJnZXRUeXBlIiwidHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImluY2x1ZGVTdXBlcnR5cGVzIiwicHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwicHJvdmlzaW9uYWxNYXRjaGVzIiwibWF0Y2hQcm92aXNpb25hbCIsInNldFR5cGUiLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yIiwib250b2xvZ3kiLCJub2RlQXNTdHJpbmciLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7a0VBQ0c7c0JBR0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTNCLFdBQWVBLElBQUFBLGdCQUFNLDJDQUFDOzthQUFNQyx1QkFDZEMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsV0FBVztnQ0FEcEJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBTUM7O1FBRXJCLE1BQUssV0FBVyxHQUFHQzs7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3pCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CUCxVQUFVLElBQUksQ0FBQ1EsVUFBVSxJQUN6QkMsK0JBQStCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7Z0JBRTFEVixRQUFRVyxLQUFLLENBQUMsQUFBQyxrQkFBOEMsT0FBN0JGLDhCQUE2QixpQ0FBK0JSO2dCQUU1RixJQUFNVywwQkFBMEIsSUFBSSxDQUFDQyxxQkFBcUI7Z0JBRTFELElBQUlELHlCQUF5QjtvQkFDM0IsSUFBTUUsc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCO29CQUVsRCxJQUFJRCxxQkFBcUI7d0JBQ3ZCZCxRQUFRZ0IsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXO3dCQUV2Q1YsV0FBVztvQkFDYjtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaTixRQUFRaUIsS0FBSyxDQUFDLEFBQUMsb0JBQWdELE9BQTdCUiw4QkFBNkIsK0JBQTZCUjtnQkFDOUY7Z0JBRUEsT0FBT0s7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRDtnQkFFSixJQUFNYixPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQlAsVUFBVSxJQUFJLENBQUNRLFVBQVUsSUFDekJVLG9CQUFvQixJQUFJLENBQUMsV0FBVyxDQUFDUixTQUFTO2dCQUVwRFYsUUFBUVcsS0FBSyxDQUFDLEFBQUMsa0JBQW1DLE9BQWxCTyxtQkFBa0IscUJBQW1CakI7Z0JBRXJFLElBQU1rQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUNDLE9BQU8sSUFDL0JDLFdBQVdGLEtBQUtaLE9BQU87Z0JBRTdCTyxzQkFBc0JRLElBQUFBLGtCQUFVLEVBQUNELFVBQVVyQjtnQkFFM0MsSUFBSWMscUJBQXFCO29CQUN2QmQsUUFBUWlCLEtBQUssQ0FBQyxBQUFDLG9CQUFxQyxPQUFsQkMsbUJBQWtCLG1CQUFpQmpCO2dCQUN2RTtnQkFFQSxPQUFPYTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELDBCQUEwQjtnQkFFOUIsSUFBTVgsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVO2dCQUUvQixJQUFJZTtnQkFFSkEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDQyxPQUFPO2dCQUUvQixJQUFNQyxhQUFhRixLQUFLYixTQUFTO2dCQUVqQ1YsUUFBUVcsS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhjLFlBQVcsY0FBWXhCO2dCQUV2RCxJQUFNeUIsa0JBQWtCSCxLQUFLSSxrQkFBa0I7Z0JBRS9DSixPQUFPdkIsUUFBUTRCLHlCQUF5QixDQUFDRjtnQkFFekMsSUFBTUcsY0FBZU4sU0FBUztnQkFFOUIsSUFBSSxDQUFDTSxhQUFhO29CQUNoQjdCLFFBQVFpQixLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYUSxZQUFXLDJCQUF5QnhCO2dCQUM1RCxPQUFPO29CQUNMLElBQU02QixvQkFBb0IsT0FDcEJDLGNBQWNSLEtBQUtTLGFBQWEsQ0FBQ0Ysb0JBQ2pDRyxxQkFBcUJWLEtBQUtXLGdCQUFnQixDQUFDSDtvQkFFakQsSUFBSSxDQUFDRSxvQkFBb0I7d0JBQ3ZCRixjQUNFL0IsUUFBUWlCLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhRLFlBQVcsMkNBQXlDeEIsUUFDeEVELFFBQVFpQixLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYUSxZQUFXLHVDQUFxQ3hCO29CQUM1RSxPQUFPO3dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUNrQyxPQUFPLENBQUNaO3dCQUV6QlgsMEJBQTBCO29CQUM1QjtnQkFDRjtnQkFFQSxJQUFJQSx5QkFBeUI7b0JBQzNCWixRQUFRaUIsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhRLFlBQVcsWUFBVXhCO2dCQUN6RDtnQkFFQSxPQUFPVztZQUNUOzs7O1lBSU93QixLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFckMsT0FBTztnQkFDdkUsSUFBTSxBQUFFc0MsY0FBZ0JDLGlCQUFRLENBQXhCRCxhQUNGckMsT0FBT29DLDRCQUNQbkMsU0FBU0YsUUFBUXdDLFlBQVksQ0FBQ3ZDLE9BQzlCRSxjQUFjbUMsWUFBWUYsOEJBQThCLENBQUNDLDRCQUE0QnJDLFVBQ3JGeUMseUJBQXlCLElBQUkxQyx1QkFBdUJDLFNBQVNDLE1BQU1DLFFBQVFDO2dCQUVqRixPQUFPc0M7WUFDVDs7OztFQW5IeURDLG9CQUFXLEdBeUdwRSwwQ0FBT0MsUUFBTyJ9