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
var _query = require("../../utilities/query");
var _name = require("../../utilities/name");
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
var _VariableDeclaration;
var typeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type");
var _default = (0, _dom.domAssigned)((_VariableDeclaration = /*#__PURE__*/ function() {
    function VariableDeclaration(fileContext, string, variable) {
        _class_call_check(this, VariableDeclaration);
        this.fileContext = fileContext;
        this.string = string;
        this.variable = variable;
    }
    _create_class(VariableDeclaration, [
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
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var variableDeclarationString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(variableDeclarationString, "' variable declaration..."));
                var variableVerified = this.verifyVariable(this.variable);
                if (variableVerified) {
                    var metavariable = this.variable.getMetavariable(), metavariableVerified = this.verifyMetavariable(metavariable);
                    if (metavariableVerified) {
                        var type = this.variable.getType(), typeVerified = this.verifyType(type);
                        if (typeVerified) {
                            this.fileContext.addVariable(this.variable);
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(variableDeclarationString, "' variable declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(type) {
                var typeVerified = false;
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
                return typeVerified;
            }
        },
        {
            key: "verifyVariable",
            value: function verifyVariable(variable) {
                var variableVerified = false;
                var variableString = variable.getString();
                this.fileContext.trace("Verifying the '".concat(variableString, "' variable..."));
                var variableName = variable.getName(), variablePresent = this.fileContext.isVariablePresentByVariableName(variableName);
                if (variablePresent) {
                    this.fileContext.debug("The '".concat(variableName, "' variable is already present."));
                } else {
                    variableVerified = true;
                }
                if (variableVerified) {
                    this.fileContext.debug("...verified the '".concat(variableString, "' variable."));
                }
                return variableVerified;
            }
        },
        {
            key: "verifyMetavariable",
            value: function verifyMetavariable(metavariable) {
                var metavariableVerified;
                if (metavariable === null) {
                    metavariableVerified = true;
                } else {
                    var metavariableName = metavariable.getName(); ///
                    this.fileContext.trace("Verifying the '".concat(metavariableName, "' metavariable..."));
                    var metavariablePresent = this.fileContext.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        this.fileContext.debug("A '".concat(metavariableName, "' variable is already present."));
                    } else {
                        metavariableVerified = true;
                    }
                    if (metavariableVerified) {
                        this.fileContext.debug("...verified the '".concat(metavariableName, "' metavariable."));
                    }
                }
                return metavariableVerified;
            }
        }
    ], [
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var Variable = _dom.default.Variable, typeNode = typeNodeQuery(variableDeclarationNode), variable = Variable.fromVariableDeclarationNode(variableDeclarationNode, fileContext), string = stringFromVariableAndTypeNode(variable, typeNode), variableDeclaration = new VariableDeclaration(fileContext, string, variable);
                return variableDeclaration;
            }
        }
    ]);
    return VariableDeclaration;
}(), _define_property(_VariableDeclaration, "name", "VariableDeclaration"), _VariableDeclaration));
function stringFromVariableAndTypeNode(variable, typeNode) {
    var string;
    var variableString = variable.getString();
    if (typeNode === null) {
        string = variableString; ///
    } else {
        var typeName = (0, _name.typeNameFromTypeNode)(typeNode);
        string = "".concat(variableString, ":").concat(typeName);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgdmFyaWFibGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMudmFyaWFibGUuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZSh0eXBlKTtcblxuICAgICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRWYXJpYWJsZSh0aGlzLnZhcmlhYmxlKTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKHR5cGUpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgbGV0ICB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiAgdmFyaWFibGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZWQ7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlID09PSBudWxsKSB7XG4gICAgICBtZXRhdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpOyAvLy9cblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVOYW1lfScgbWV0YXZhcmlhYmxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgQSAnJHttZXRhdmFyaWFibGVOYW1lfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZU5hbWV9JyBtZXRhdmFyaWFibGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhcmlhYmxlQW5kVHlwZU5vZGUodmFyaWFibGUsIHR5cGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFyaWFibGVBbmRUeXBlTm9kZSh2YXJpYWJsZSwgdHlwZU5vZGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICBzdHJpbmcgPSBgJHt2YXJpYWJsZVN0cmluZ306JHt0eXBlTmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXZhcmlhYmxlIiwidHlwZSIsImdldFR5cGUiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwiYWRkVmFyaWFibGUiLCJkZWJ1ZyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGUiLCJkb20iLCJ0eXBlTm9kZSIsInN0cmluZ0Zyb21WYXJpYWJsZUFuZFR5cGVOb2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsIm5hbWUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkRBUmdCO3FCQUVVO29CQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTUEsZ0JBQWdCQyxJQUFBQSxn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