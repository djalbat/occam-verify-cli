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
var _type = require("../type");
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
                    var type;
                    type = this.variable.getType();
                    var typeVerified = this.verifyType(type);
                    if (typeVerified) {
                        var typeName = type.getName();
                        type = this.fileContext.findTypeByTypeName(typeName);
                        this.variable.setType(type);
                        this.fileContext.addVariable(this.variable);
                        verified = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFZhcmlhYmxlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCB2YXJpYWJsZSkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGUodGhpcy52YXJpYWJsZSk7XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgbGV0IHR5cGU7XG5cbiAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKHR5cGUpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgdHlwZSA9IHRoaXMuZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICB0aGlzLnZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRWYXJpYWJsZSh0aGlzLnZhcmlhYmxlKTtcblxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUodHlwZSkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgbGV0ICB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiAgdmFyaWFibGVWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYXJpYWJsZUFuZFR5cGVOb2RlKHZhcmlhYmxlLCB0eXBlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhcmlhYmxlQW5kVHlwZU5vZGUodmFyaWFibGUsIHR5cGVOb2RlKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZzsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgc3RyaW5nID0gYCR7dmFyaWFibGVTdHJpbmd9OiR7dHlwZU5hbWV9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwidmFyaWFibGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzZXRUeXBlIiwiYWRkVmFyaWFibGUiLCJkZWJ1ZyIsIm9iamVjdFR5cGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJWYXJpYWJsZSIsImRvbSIsInR5cGVOb2RlIiwic3RyaW5nRnJvbVZhcmlhYmxlQW5kVHlwZU5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwibmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OzsyREFUZ0I7cUJB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