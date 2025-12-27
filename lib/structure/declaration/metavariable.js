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
var _MetavariableDeclaration;
var _default = (0, _structure.define)((_MetavariableDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(MetavariableDeclaration, Declaration);
    function MetavariableDeclaration(context, node, string, metavariable) {
        _class_call_check(this, MetavariableDeclaration);
        var _this;
        _this = _call_super(this, MetavariableDeclaration, [
            context,
            node,
            string
        ]);
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(MetavariableDeclaration, [
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var node = this.getNode(), context = this.getContext(), metavariableDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(metavariableDeclarationString, "' metavariable declaration..."), node);
                var metavariableVerifies = this.verifyMetavariable(this.metavariable);
                if (metavariableVerifies) {
                    context.addMetavariable(this.metavariable);
                    verifies = true;
                }
                if (verifies) {
                    context.debug("...verified the '".concat(metavariableDeclarationString, "' metavariable declaration."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(type) {
                var typeVerifies;
                var node = this.getNode(), context = this.getContext();
                if (type === null) {
                    typeVerifies = true;
                } else {
                    var typeString = type.getString();
                    context.trace("Verifying the '".concat(typeString, "' type..."), node);
                    var nominalTypeName = type.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                    if (!typePresent) {
                        context.debug("The '".concat(typeString, "' type is not present."), node);
                    } else {
                        typeVerifies = true;
                    }
                    if (typeVerifies) {
                        context.debug("...verified the '".concat(typeString, "' type."), node);
                    }
                }
                return typeVerifies;
            }
        },
        {
            key: "verifyMetavariable",
            value: function verifyMetavariable(metavariable) {
                var metavariableVerifies = false;
                var node = this.getNode(), context = this.getContext(), metavariableString = metavariable.getString();
                context.trace("Verifying the '".concat(metavariableString, "' metavariable when declared..."), node);
                var metavariableNode = metavariable.getNode(), termNode = metavariableNode.getTermNode();
                if (termNode !== null) {
                    context.debug("A term was found in the '".concat(metavariableString, "' metavariable when a type should have been present."), node);
                } else {
                    var metavariableName = metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        context.debug("The '".concat(metavariableName, "' metavariable is already present."), node);
                    } else {
                        var type = metavariable.getType(), typeVerifies = this.verifyType(type);
                        metavariableVerifies = typeVerifies; ///
                    }
                }
                if (metavariableVerifies) {
                    context.debug("...verified the '".concat(metavariableString, "' metavariable when declared."), node);
                }
                return metavariableVerifies;
            }
        }
    ], [
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
                var Metavariable = _structure.default.Metavariable, node = metavariableDeclarationNode, metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), string = stringFromMetavariableAndMetaType(metavariable, metaType), metavariableDeclaration = new MetavariableDeclaration(context, node, string, metavariable);
                return metavariableDeclaration;
            }
        }
    ]);
    return MetavariableDeclaration;
}(_declaration.default), _define_property(_MetavariableDeclaration, "name", "MetavariableDeclaration"), _MetavariableDeclaration));
function stringFromMetavariableAndMetaType(metavariable, metaType) {
    var string;
    var metavariableString = metavariable.getString();
    if (metaType === null) {
        string = metavariableString; ///
    } else {
        var metaTypeString = metaType.getString();
        string = "".concat(metavariableString, ":").concat(metaTypeString);
    }
    return string;
}
function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
    var MetaType = _structure.default.MetaType, metaTypeNode = metavariableDeclarationNode.getMetaTypeNode(), metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc3RydWN0dXJlIGZyb20gXCIuLi8uLi9zdHJ1Y3R1cmVcIjtcbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL3N0cnVjdHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgbm9kZSwgc3RyaW5nKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5hZGRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSh0eXBlKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCBub2RlKTtcblxuICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCBub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSwgLy8vXG4gICAgICAgICAgdGVybU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFRlcm1Ob2RlKCk7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYEEgdGVybSB3YXMgZm91bmQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG1ldGF2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlID0gbWV0YXZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlKHR5cGUpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gdHlwZVZlcmlmaWVzOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICBub2RlID0gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU1ldGF2YXJpYWJsZUFuZE1ldGFUeXBlKG1ldGF2YXJpYWJsZSwgbWV0YVR5cGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgbWV0YXZhcmlhYmxlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZShtZXRhdmFyaWFibGUsIG1ldGFUeXBlKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gIGlmIChtZXRhVHlwZSA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IG1ldGF2YXJpYWJsZVN0cmluZzsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWV0YVR5cGVTdHJpbmcgPSBtZXRhVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke21ldGF2YXJpYWJsZVN0cmluZ306JHttZXRhVHlwZVN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE1ldGFUeXBlIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgIG1ldGFUeXBlTm9kZSA9IG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZS5nZXRNZXRhVHlwZU5vZGUoKSxcbiAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldE5vZGUiLCJnZXRDb250ZXh0IiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVzIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwiYWRkTWV0YXZhcmlhYmxlIiwiZGVidWciLCJ2ZXJpZnlUeXBlIiwidHlwZSIsInR5cGVWZXJpZmllcyIsInR5cGVTdHJpbmciLCJub21pbmFsVHlwZU5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiZ2V0VHlwZSIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGUiLCJzdHJ1Y3R1cmUiLCJtZXRhVHlwZSIsIm1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiRGVjbGFyYXRpb24iLCJuYW1lIiwibWV0YVR5cGVTdHJpbmciLCJNZXRhVHlwZSIsIm1ldGFUeXBlTm9kZSIsImdldE1ldGFUeXBlTm9kZSIsImZyb21NZXRhVHlwZU5vZGUiXSwibWFwcGluZ3Mi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