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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../../structure"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
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
var _VariableDeclaration;
var _default = (0, _structure.define)((_VariableDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(VariableDeclaration, Declaration);
    function VariableDeclaration(context, node, string, variable) {
        _class_call_check(this, VariableDeclaration);
        var _this;
        _this = _call_super(this, VariableDeclaration, [
            context,
            node,
            string
        ]);
        _this.variable = variable;
        return _this;
    }
    _create_class(VariableDeclaration, [
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var node = this.getNode(), context = this.getContext(), variableDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(variableDeclarationString, "' variable declaration..."), node);
                var variableTypeVerifies = this.verifyVariableType();
                if (variableTypeVerifies) {
                    var variableVerifies = this.verifyVariable();
                    if (variableVerifies) {
                        context.addVariable(this.variable);
                        verifies = true;
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(variableDeclarationString, "' variable declaration."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyVariable",
            value: function verifyVariable() {
                var variableVerifies = false;
                var node = this.getNode(), context = this.getContext(), variableString = this.variable.getString();
                context.trace("Verifying the '".concat(variableString, "' variable..."), node);
                var variableIdentifier = this.variable.getIdentifier(), variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);
                if (variablePresent) {
                    context.debug("The '".concat(variableName, "' variable is already present."), node);
                } else {
                    variableVerifies = true;
                }
                if (variableVerifies) {
                    context.debug("...verified the '".concat(variableString, "' variable."), node);
                }
                return variableVerifies;
            }
        },
        {
            key: "verifyVariableType",
            value: function verifyVariableType() {
                var variableTypeVerifies = false;
                var node = this.getNode(), context = this.getContext();
                var type;
                type = this.variable.getType();
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
                        this.variable.setType(type);
                        variableTypeVerifies = true;
                    }
                }
                if (variableTypeVerifies) {
                    context.debug("...verified the '".concat(typeString, "' type."), node);
                }
                return variableTypeVerifies;
            }
        }
    ], [
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, context) {
                var Variable = _structure.default.Variable, node = variableDeclarationNode, string = context.nodeAsString(node), variable = Variable.fromVariableDeclarationNode(variableDeclarationNode, context), variableDeclaration = new VariableDeclaration(context, node, string, variable);
                return variableDeclaration;
            }
        }
    ]);
    return VariableDeclaration;
}(_declaration.default), _define_property(_VariableDeclaration, "name", "VariableDeclaration"), _VariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvZGVjbGFyYXRpb24vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uLy4uL3N0cnVjdHVyZVwiO1xuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vc3RydWN0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgbm9kZSwgc3RyaW5nKTtcblxuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGVUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVZhcmlhYmxlVHlwZSgpO1xuXG4gICAgaWYgKHZhcmlhYmxlVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAodmFyaWFibGVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmFkZFZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGUoKSB7XG4gICAgbGV0ICB2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy52YXJpYWJsZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIHZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiAgdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlVHlwZSgpIHtcbiAgICBsZXQgdmFyaWFibGVUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBsZXQgdHlwZTtcblxuICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpXG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluY2x1ZGVTdXBlcnR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgICBwcm92aXNpb25hbCA9IHR5cGUuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyksXG4gICAgICAgICAgICBwcm92aXNpb25hbE1hdGNoZXMgPSB0eXBlLm1hdGNoUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICBpZiAoIXByb3Zpc2lvbmFsTWF0Y2hlcykge1xuICAgICAgICBwcm92aXNpb25hbCA/XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gLCBub2RlKSA6XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgcHJvdmlzaW9uYWwuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdmFyaWFibGVUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZVR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZVR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICBub2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwidmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Tm9kZSIsImdldENvbnRleHQiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVR5cGVWZXJpZmllcyIsInZlcmlmeVZhcmlhYmxlVHlwZSIsInZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlWYXJpYWJsZSIsImFkZFZhcmlhYmxlIiwiZGVidWciLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVOYW1lIiwidHlwZSIsImdldFR5cGUiLCJ0eXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaW5jbHVkZVN1cGVydHlwZXMiLCJwcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbE1hdGNoZXMiLCJtYXRjaFByb3Zpc2lvbmFsIiwic2V0VHlwZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGUiLCJzdHJ1Y3R1cmUiLCJub2RlQXNTdHJpbmciLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFP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