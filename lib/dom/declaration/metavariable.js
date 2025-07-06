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
var _query = require("../../utilities/query");
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
var termNodeQuery = (0, _query.nodeQuery)("/metavariable/argument/term"), metaTypeNodeQuery = (0, _query.nodeQuery)("/metavariableDeclaration/metaType");
var _default = (0, _dom.domAssigned)((_MetavariableDeclaration = /*#__PURE__*/ function() {
    function MetavariableDeclaration(fileContext, string, metavariable) {
        _class_call_check(this, MetavariableDeclaration);
        this.fileContext = fileContext;
        this.string = string;
        this.metavariable = metavariable;
    }
    _create_class(MetavariableDeclaration, [
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
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var metavariableDeclarationString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(metavariableDeclarationString, "' metavariable declaration..."));
                var metavariableVerified = this.verifyMetavariable(this.metavariable);
                if (metavariableVerified) {
                    this.fileContext.addMetavariable(this.metavariable);
                    verified = true;
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(metavariableDeclarationString, "' metavariable declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(type) {
                var typeVerified;
                if (type === null) {
                    typeVerified = true;
                } else {
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
                }
                return typeVerified;
            }
        },
        {
            key: "verifyMetavariable",
            value: function verifyMetavariable(metavariable) {
                var metavariableVerified = false;
                var metavariableString = metavariable.getString();
                this.fileContext.trace("Verifying the '".concat(metavariableString, "' metavariable when declared..."));
                var metavariableNode = metavariable.getNode(), termNode = termNodeQuery(metavariableNode);
                if (termNode !== null) {
                    this.fileContext.debug("A term was found in the '".concat(metavariableString, "' metavariable when a type should have been present."));
                } else {
                    var metavariableName = metavariable.getName(), metavariablePresent = this.fileContext.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        this.fileContext.debug("The '".concat(metavariableName, "' metavariable is already present."));
                    } else {
                        var type = metavariable.getType(), typeVerified = this.verifyType(type);
                        metavariableVerified = typeVerified; ///
                    }
                }
                if (metavariableVerified) {
                    this.fileContext.debug("...verified the '".concat(metavariableString, "' metavariable when declared."));
                }
                return metavariableVerified;
            }
        }
    ], [
        {
            key: "fromMetavariableDeclarationNode",
            value: function fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
                var Metavariable = _dom.default.Metavariable, metaType = metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext), metavariable = Metavariable.fromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext), string = stringFromMetavariableAndMetaType(metavariable, metaType), metavariableDeclaration = new MetavariableDeclaration(fileContext, string, metavariable);
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
function metaTypeFromMetavariableDeclarationNode(metavariableDeclarationNode, fileContext) {
    var MetaType = _dom.default.MetaType, metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode), metaType = MetaType.fromMetaTypeNode(metaTypeNode, fileContext);
    return metaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9tZXRhdmFyaWFibGUvYXJndW1lbnQvdGVybVwiKSxcbiAgICAgIG1ldGFUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGF2YXJpYWJsZURlY2xhcmF0aW9uL21ldGFUeXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIG1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSh0eXBlKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLCAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYEEgdGVybSB3YXMgZm91bmQgaW4gdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGEgdHlwZSBzaG91bGQgaGF2ZSBiZWVuIHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7bWV0YXZhcmlhYmxlTmFtZX0nIG1ldGF2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlID0gbWV0YXZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKHR5cGUpO1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZVZlcmlmaWVkID0gdHlwZVZlcmlmaWVkOyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZUZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU1ldGF2YXJpYWJsZUFuZE1ldGFUeXBlKG1ldGF2YXJpYWJsZSwgbWV0YVR5cGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIG1ldGF2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTWV0YXZhcmlhYmxlQW5kTWV0YVR5cGUobWV0YXZhcmlhYmxlLCBtZXRhVHlwZSkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICBpZiAobWV0YVR5cGUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBtZXRhdmFyaWFibGVTdHJpbmc7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1ldGFUeXBlU3RyaW5nID0gbWV0YVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgJHttZXRhdmFyaWFibGVTdHJpbmd9OiR7bWV0YVR5cGVTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZShtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgTWV0YVR5cGUgfSA9IGRvbSxcbiAgICAgICAgbWV0YVR5cGVOb2RlID0gbWV0YVR5cGVOb2RlUXVlcnkobWV0YXZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgbWV0YVR5cGUgPSBNZXRhVHlwZS5mcm9tTWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBtZXRhVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YVR5cGVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJtZXRhdmFyaWFibGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldE1ldGF2YXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVkIiwibWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwiYWRkTWV0YXZhcmlhYmxlIiwiZGVidWciLCJ2ZXJpZnlUeXBlIiwidHlwZSIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE5vZGUiLCJ0ZXJtTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiZ2V0VHlwZSIsImZyb21NZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJNZXRhdmFyaWFibGUiLCJkb20iLCJtZXRhVHlwZSIsIm1ldGFUeXBlRnJvbU1ldGF2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInN0cmluZ0Zyb21NZXRhdmFyaWFibGVBbmRNZXRhVHlwZSIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIiwibmFtZSIsIm1ldGFUeXBlU3RyaW5nIiwiTWV0YVR5cGUiLCJtZXRhVHlwZU5vZGUiLCJmcm9tTWV0YVR5cGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzsyREFUZ0I7b0JBRVc7cUJBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUM7SUFFcEMsV0FBZUUsSUFBQUEsZ0JBQVcsNENBQUM7YUFBTUMsd0JBQ25CQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtnQ0FEZEg7UUFFN0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTs7OztZQUd0QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxZQUFZO1lBQzFCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLGdDQUFnQyxJQUFJLENBQUNQLE1BQU0sRUFBRSxHQUFHO2dCQUV0RCxJQUFJLENBQUNELFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQStDLE9BQTlCRCwrQkFBOEI7Z0JBRXZFLElBQU1FLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDLElBQUksQ0FBQ1QsWUFBWTtnQkFFdEUsSUFBSVEsc0JBQXNCO29CQUN4QixJQUFJLENBQUNWLFdBQVcsQ0FBQ1ksZUFBZSxDQUFDLElBQUksQ0FBQ1YsWUFBWTtvQkFFbERLLFdBQVc7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