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
var _TypePrefixDeclaration;
var _default = (0, _ontology.define)((_TypePrefixDeclaration = /*#__PURE__*/ function() {
    function TypePrefixDeclaration(context, node, string, typePrefix) {
        _class_call_check(this, TypePrefixDeclaration);
        this.context = context;
        this.node = node;
        this.string = string;
        this.typePrefix = typePrefix;
    }
    _create_class(TypePrefixDeclaration, [
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
            key: "getTypePrefix",
            value: function getTypePrefix() {
                return this.typePrefix;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var typePrefixDeclarationString = this.string; ///
                this.context.trace("Verifying the '".concat(typePrefixDeclarationString, "' type prefix declaration..."), this.node);
                var includeRelease = true, includeDependencies = false, types = this.context.getTypes(includeRelease, includeDependencies), typesLength = types.length;
                if (typesLength > 0) {
                    this.context.debug("Cannot verify the '".concat(typePrefixDeclarationString, "' type prefix declaration because types have already been declared."), this.node);
                } else {
                    var typePrefixVerifies = this.verifyTypePrefix();
                    if (typePrefixVerifies) {
                        this.context.addTypePrefix(this.typePrefix);
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(typePrefixDeclarationString, "' type prefix declaration."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyTypePrefix",
            value: function verifyTypePrefix() {
                var typePrefixVerifies = false;
                var typePrefixString = this.typePrefix.getString();
                this.context.trace("Verifying the '".concat(typePrefixString, "' type prefix..."), this.node);
                var typePrefix = this.context.getTypePrefix();
                if (typePrefix !== null) {
                    this.context.trace("The package already has a '".concat(typePrefixString, "' type prefix."), this.node);
                } else {
                    var typePrefixName = this.typePrefix.getName(), typePrefixPresent = this.context.isTypePrefixPresentByTypePrefixName(typePrefixName);
                    if (typePrefixPresent) {
                        this.context.trace("The '".concat(typePrefixString, "' type prefix is already present."), this.node);
                    } else {
                        var nominalTypeName = typePrefixName, typePresent = this.context.isTypePresentByNominalTypeName(nominalTypeName);
                        if (typePresent) {
                            this.context.trace("The '".concat(typePrefixString, "' type is already present."), this.node);
                        } else {
                            typePrefixVerifies = true;
                        }
                    }
                }
                if (typePrefixVerifies) {
                    this.context.debug("...verified the '".concat(typePrefixString, "' type prefix."), this.node);
                }
                return typePrefixVerifies;
            }
        }
    ], [
        {
            key: "fromTypePrefixDeclarationNode",
            value: function fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
                var TypePrefix = _ontology.default.TypePrefix, node = typePrefixDeclarationNode, typePrefix = TypePrefix.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context), typePrefixName = typePrefix.getName(), string = typePrefixName, simpleTypeDeclaration = new TypePrefixDeclaration(context, node, string, typePrefix);
                return simpleTypeDeclaration;
            }
        }
    ]);
    return TypePrefixDeclaration;
}(), _define_property(_TypePrefixDeclaration, "name", "TypePrefixDeclaration"), _TypePrefixDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9kZWNsYXJhdGlvbi90eXBlUHJlZml4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZVByZWZpeERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlUHJlZml4KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZVByZWZpeCA9IHR5cGVQcmVmaXg7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlUHJlZml4O1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IHRydWUsXG4gICAgICAgICAgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVzID0gdGhpcy5jb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlc0xlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24gYmVjYXVzZSB0eXBlcyBoYXZlIGFscmVhZHkgYmVlbiBkZWNsYXJlZC5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlUHJlZml4VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGVQcmVmaXgoKTtcblxuICAgICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgICB0aGlzLmNvbnRleHQuYWRkVHlwZVByZWZpeCh0aGlzLnR5cGVQcmVmaXgpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4U3RyaW5nID0gdGhpcy50eXBlUHJlZml4LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ID0gdGhpcy5jb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcblxuICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbnRleHQudHJhY2UoYFRoZSBwYWNrYWdlIGFscmVhZHkgaGFzIGEgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4LmAsIHRoaXMubm9kZSk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0aGlzLnR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4IGlzIGFscmVhZHkgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSB0aGlzLmNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgdGhpcy5jb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHRoaXMubm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4VmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeERlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IG9udG9sb2d5LFxuICAgICAgICAgIG5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gbmV3IFR5cGVQcmVmaXhEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGVQcmVmaXgpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJ0eXBlUHJlZml4IiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRUeXBlUHJlZml4IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVzIiwiZ2V0VHlwZXMiLCJ0eXBlc0xlbmd0aCIsImxlbmd0aCIsImRlYnVnIiwidHlwZVByZWZpeFZlcmlmaWVzIiwidmVyaWZ5VHlwZVByZWZpeCIsImFkZFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4U3RyaW5nIiwidHlwZVByZWZpeE5hbWUiLCJnZXROYW1lIiwidHlwZVByZWZpeFByZXNlbnQiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiZnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeCIsIm9udG9sb2d5Iiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0VBSnFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJckIsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7YUFBTUMsc0JBQ2RDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFVBQVU7Z0NBRG5CSjtRQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFB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