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
var _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
var _elements = require("../../elements");
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
var _default = (0, _elements.define)((_ConstructorDeclaration = /*#__PURE__*/ function(Declaration) {
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
    ]);
    return ConstructorDeclaration;
}(_declaration.default), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybSB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL3ZlcmlmeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBjb25zdHJ1Y3Rvcikge1xuICAgIHN1cGVyKGNvbnRleHQsIG5vZGUsIHN0cmluZyk7XG5cbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5Q29uc3RydWN0b3JUeXBlKCk7XG5cbiAgICBpZiAoY29uc3RydWN0b3JUeXBlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGNvbnN0cnVjdG9yVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbnN0cnVjdG9yKCk7XG5cbiAgICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkQ29uc3RydWN0b3IodGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgY29uc3RydWN0b3JWZXJpZmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUZXJtKCksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIGNvbnN0cnVjdG9yVmVyaWZpZXMgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUNvbnN0cnVjdG9yVHlwZSgpIHtcbiAgICBsZXQgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBsZXQgdHlwZTtcblxuICAgIHR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpXG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluY2x1ZGVTdXBlcnR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IHR5cGUuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyksXG4gICAgICAgICAgICBwcm92aXNpb25hbE1hdGNoZXMgPSB0eXBlLm1hdGNoUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICBpZiAoIXByb3Zpc2lvbmFsTWF0Y2hlcykge1xuICAgICAgICBwcm92aXNpb25hbCA/XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gLCBub2RlKSA6XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgcHJvdmlzaW9uYWwuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25zdHJ1Y3RvclR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJjb25zdHJ1Y3RvciIsImdldENvbnN0cnVjdG9yIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXROb2RlIiwiZ2V0Q29udGV4dCIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzIiwidmVyaWZ5Q29uc3RydWN0b3JUeXBlIiwiY29uc3RydWN0b3JWZXJpZmllcyIsInZlcmlmeUNvbnN0cnVjdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJkZWJ1ZyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidGVybSIsImdldFRlcm0iLCJ0ZXJtTm9kZSIsInZlcmlmeVRlcm0iLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpbmNsdWRlU3VwZXJ0eXBlcyIsInByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInByb3Zpc2lvbmFsTWF0Y2hlcyIsIm1hdGNoUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztrRUFMd0I7d0JBRUQ7c0JBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzQixXQUFlQSxJQUFBQSxnQkFBTSwyQ0FBQzs7YUFBTUMsdUJBQ2RDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFdBQVc7Z0NBRHBCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQU1DOztRQUVyQixNQUFLLFdBQVcsR0FBR0M7Ozs7O1lBR3JCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVztZQUN6Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQlAsVUFBVSxJQUFJLENBQUNRLFVBQVUsSUFDekJDLCtCQUErQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dCQUUxRFYsUUFBUVcsS0FBSyxDQUFDLEFBQUMsa0JBQThDLE9BQTdCRiw4QkFBNkIsaUNBQStCUjtnQkFFNUYsSUFBTVcsMEJBQTBCLElBQUksQ0FBQ0MscUJBQXFCO2dCQUUxRCxJQUFJRCx5QkFBeUI7b0JBQzNCLElBQU1FLHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQjtvQkFFbEQsSUFBSUQscUJBQXFCO3dCQUN2QmQsUUFBUWdCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVzt3QkFFdkNWLFdBQVc7b0JBQ2I7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWk4sUUFBUWlCLEtBQUssQ0FBQyxBQUFDLG9CQUFnRCxPQUE3QlIsOEJBQTZCLCtCQUE2QlI7Z0JBQzlGO2dCQUVBLE9BQU9LO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUQ7Z0JBRUosSUFBTWIsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVLElBQ3pCVSxvQkFBb0IsSUFBSSxDQUFDLFdBQVcsQ0FBQ1IsU0FBUztnQkFFcERWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLGtCQUFtQyxPQUFsQk8sbUJBQWtCLHFCQUFtQmpCO2dCQUVyRSxJQUFNa0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDQyxPQUFPLElBQy9CQyxXQUFXRixLQUFLWixPQUFPO2dCQUU3Qk8sc0JBQXNCUSxJQUFBQSxrQkFBVSxFQUFDRCxVQUFVckI7Z0JBRTNDLElBQUljLHFCQUFxQjtvQkFDdkJkLFFBQVFpQixLQUFLLENBQUMsQUFBQyxvQkFBcUMsT0FBbEJDLG1CQUFrQixtQkFBaUJqQjtnQkFDdkU7Z0JBRUEsT0FBT2E7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCwwQkFBMEI7Z0JBRTlCLElBQU1YLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CUCxVQUFVLElBQUksQ0FBQ1EsVUFBVTtnQkFFL0IsSUFBSWU7Z0JBRUpBLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQ0MsT0FBTztnQkFFL0IsSUFBTUMsYUFBYUYsS0FBS2IsU0FBUztnQkFFakNWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYYyxZQUFXLGNBQVl4QjtnQkFFdkQsSUFBTXlCLGtCQUFrQkgsS0FBS0ksa0JBQWtCO2dCQUUvQ0osT0FBT3ZCLFFBQVE0Qix5QkFBeUIsQ0FBQ0Y7Z0JBRXpDLElBQU1HLGNBQWVOLFNBQVM7Z0JBRTlCLElBQUksQ0FBQ00sYUFBYTtvQkFDaEI3QixRQUFRaUIsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWFEsWUFBVywyQkFBeUJ4QjtnQkFDNUQsT0FBTztvQkFDTCxJQUFNNkIsb0JBQW9CLE9BQ3BCQyxjQUFjUixLQUFLUyxhQUFhLENBQUNGLG9CQUNqQ0cscUJBQXFCVixLQUFLVyxnQkFBZ0IsQ0FBQ0g7b0JBRWpELElBQUksQ0FBQ0Usb0JBQW9CO3dCQUN2QkYsY0FDRS9CLFFBQVFpQixLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYUSxZQUFXLDJDQUF5Q3hCLFFBQ3hFRCxRQUFRaUIsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWFEsWUFBVyx1Q0FBcUN4QjtvQkFDNUUsT0FBTzt3QkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDa0MsT0FBTyxDQUFDWjt3QkFFekJYLDBCQUEwQjtvQkFDNUI7Z0JBQ0Y7Z0JBRUEsSUFBSUEseUJBQXlCO29CQUMzQlosUUFBUWlCLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYUSxZQUFXLFlBQVV4QjtnQkFDekQ7Z0JBRUEsT0FBT1c7WUFDVDs7OztFQXZHeUR3QixvQkFBVyxHQXlHcEUsMENBQU9DLFFBQU8ifQ==