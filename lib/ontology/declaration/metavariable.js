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
var _MetavariableDeclaration;
var _default = (0, _ontology.define)((_MetavariableDeclaration = /*#__PURE__*/ function() {
    function MetavariableDeclaration(context, node, string, metavariable) {
        _class_call_check(this, MetavariableDeclaration);
        this.context = context;
        this.node = node;
        this.string = string;
        this.metavariable = metavariable;
    }
    _create_class(MetavariableDeclaration, [
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
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var metavariableDeclarationString = this.string; ///
                this.context.trace("Verifying the '".concat(metavariableDeclarationString, "' metavariable declaration..."), this.node);
                var metavariableVerifies = this.verifyMetavariable(this.metavariable);
                if (metavariableVerifies) {
                    this.context.addMetavariable(this.metavariable);
                    verifies = true;
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(metavariableDeclarationString, "' metavariable declaration."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(type) {
                var typeVerifies;
                if (type === null) {
                    typeVerifies = true;
                } else {
                    var typeString = type.getString();
                    this.context.trace("Verifying the '".concat(typeString, "' type..."), this.node);
                    var nominalTypeName = type.getNominalTypeName(), typePresent = this.context.isTypePresentByNominalTypeName(nominalTypeName);
                    if (!typePresent) {
                        this.context.debug("The '".concat(typeString, "' type is not present."), this.node);
                    } else {
                        typeVerifies = true;
                    }
                    if (typeVerifies) {
                        this.context.debug("...verified the '".concat(typeString, "' type."), this.node);
                    }
                }
                return typeVerifies;
            }
        },
        {
            key: "verifyMetavariable",
            value: function verifyMetavariable(metavariable) {
                var metavariableVerifies = false;
                var metavariableString = metavariable.getString();
                this.context.trace("Verifying the '".concat(metavariableString, "' metavariable when declared..."), this.node);
                var metavariableNode = metavariable.getNode(), termNode = metavariableNode.getTermNode();
                if (termNode !== null) {
                    this.context.debug("A term was found in the '".concat(metavariableString, "' metavariable when a type should have been present."), this.node);
                } else {
                    var metavariableName = metavariable.getName(), metavariablePresent = this.context.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        this.context.debug("The '".concat(metavariableName, "' metavariable is already present."), this.node);
                    } else {
                        var type = metavariable.getType(), typeVerifies = this.verifyType(type);
                        metavariableVerifies = typeVerifies; ///
                    }
                }
                if (metavariableVerifies) {
                    this.context.debug("...verified the '".concat(metavariableString, "' metavariable when declared."), this.node);
                }
                return metavariableVerifies;
            }
        }
    ], [
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, context) {
                var Metavariable = _ontology.default.Metavariable, node = metavariableDeclarationNode, metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, context), metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, context), string = stringFromMetavariableAndMetaType(metavariable, metaType), metavariableDeclaration = new MetavariableDeclaration(context, node, string, metavariable);
                return metavariableDeclaration;
            }
        }
    ]);
    return MetavariableDeclaration;
}(), _define_property(_MetavariableDeclaration, "name", "MetavariableDeclaration"), _MetavariableDeclaration));
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
    var MetaType = _ontology.default.MetaType, metaTypeNode = metavariableDeclarationNode.getMetaTypeNode(), metaType = MetaType.fromMetaTypeNode(metaTypeNode, context);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgbWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5hZGRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUodHlwZSkge1xuICAgIGxldCB0eXBlVmVyaWZpZXM7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYEEgdGVybSB3YXMgZm91bmQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG1ldGF2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUodHlwZSk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0eXBlVmVyaWZpZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIG5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVGcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTWV0YXZhcmlhYmxlQW5kTWV0YVR5cGUobWV0YXZhcmlhYmxlLCBtZXRhVHlwZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCBtZXRhdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbU1ldGF2YXJpYWJsZUFuZE1ldGFUeXBlKG1ldGF2YXJpYWJsZSwgbWV0YVR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKG1ldGFUeXBlID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gbWV0YXZhcmlhYmxlU3RyaW5nOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtZXRhVHlwZVN0cmluZyA9IG1ldGFUeXBlLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYCR7bWV0YXZhcmlhYmxlU3RyaW5nfToke21ldGFUeXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YVR5cGUgfSA9IG9udG9sb2d5LFxuICAgICAgICBtZXRhVHlwZU5vZGUgPSBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUuZ2V0TWV0YVR5cGVOb2RlKCksXG4gICAgICAgIG1ldGFUeXBlID0gTWV0YVR5cGUuZnJvbU1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwibWV0YXZhcmlhYmxlIiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRNZXRhdmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImFkZE1ldGF2YXJpYWJsZSIsImRlYnVnIiwidmVyaWZ5VHlwZSIsInR5cGUiLCJ0eXBlVmVyaWZpZXMiLCJ0eXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImdldFR5cGUiLCJmcm9tTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiTWV0YXZhcmlhYmxlIiwib250b2xvZ3kiLCJtZXRhVHlwZSIsIm1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibmFtZSIsIm1ldGFUeXBlU3RyaW5nIiwiTWV0YVR5cGUiLCJtZXRhVHlwZU5vZGUiLCJnZXRNZXRhVHlwZU5vZGUiLCJmcm9tTWV0YVR5cGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7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