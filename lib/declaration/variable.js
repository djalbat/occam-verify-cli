"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VariableDeclaration;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _query = require("../utilities/query");
var _type = require("../type");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type");
var VariableDeclaration = /*#__PURE__*/ function() {
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
                var verified;
                var variableDeclarationString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(variableDeclarationString, "' variable declaration..."));
                var variableVerifiedAtTopLevel = this.variable.verifyAtTopLevel(this.fileContext);
                if (variableVerifiedAtTopLevel) {
                    this.fileContext.addVariable(this.variable);
                    verified = true;
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(variableDeclarationString, "' variable declaration."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var Type = _shim.default.Type, typeNode = typeNodeQuery(variableDeclarationNode), type = typeNode === null ? _type.objectType : Type.fromTypeNode(typeNode, fileContext), variable = _variable.default.fromVariableDeclarationNode(variableDeclarationNode, fileContext), string = stringFromVariableAndType(variable, type), variableDeclaration = new VariableDeclaration(fileContext, string, variable);
                return variableDeclaration;
            }
        }
    ]);
    return VariableDeclaration;
}();
function stringFromVariableAndType(variable, type) {
    var string;
    var variableString = variable.getString();
    if (type === null) {
        string = variableString; ///
    } else {
        var typeString = type.getString();
        string = "".concat(variableString, ":").concat(typeString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgdmFyaWFibGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMudmFyaWFibGUudmVyaWZ5QXRUb3BMZXZlbCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRWYXJpYWJsZSh0aGlzLnZhcmlhYmxlKTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGUgPSAodHlwZU5vZGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDpcbiAgICAgICAgICAgICAgICAgICAgIFR5cGUuZnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVmFyaWFibGVBbmRUeXBlKHZhcmlhYmxlLCB0eXBlKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhcmlhYmxlQW5kVHlwZSh2YXJpYWJsZSwgdHlwZSkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZzsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYCR7dmFyaWFibGVTdHJpbmd9OiR7dHlwZVN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJWYXJpYWJsZURlY2xhcmF0aW9uIiwidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwidmFyaWFibGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVZlcmlmaWVkQXRUb3BMZXZlbCIsInZlcmlmeUF0VG9wTGV2ZWwiLCJhZGRWYXJpYWJsZSIsImRlYnVnIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwic2hpbSIsInR5cGVOb2RlIiwidHlwZSIsIm9iamVjdFR5cGUiLCJmcm9tVHlwZU5vZGUiLCJWYXJpYWJsZSIsInN0cmluZ0Zyb21WYXJpYWJsZUFuZFR5cGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFibGVTdHJpbmciLCJ0eXBlU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzsyREFSSjsrREFDSTtxQkFFSztvQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFakIsSUFBQSxBQUFNRixvQ0FBTjthQUFNQSxvQkFDUEcsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7Z0NBRHRCTDtRQUVqQixJQUFJLENBQUNHLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFKQ0w7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsNEJBQTRCLElBQUksQ0FBQ1AsTUFBTSxFQUFFLEdBQUc7Z0JBRWxELElBQUksQ0FBQ0QsV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBMkMsT0FBMUJELDJCQUEwQjtnQkFFbkUsSUFBTUUsNkJBQTZCLElBQUksQ0FBQ1IsUUFBUSxDQUFDUyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNYLFdBQVc7Z0JBRWxGLElBQUlVLDRCQUE0QjtvQkFDOUIsSUFBSSxDQUFDVixXQUFXLENBQUNZLFdBQVcsQ0FBQyxJQUFJLENBQUNWLFFBQVE7b0JBRTFDSyxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDUCxXQUFXLENBQUNhLEtBQUssQ0FBQyxBQUFDLG9CQUE2QyxPQUExQkwsMkJBQTBCO2dCQUN2RTtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsdUJBQXVCLEVBQUVmLFdBQVc7Z0JBQ3JFLElBQU0sQUFBRWdCLE9BQVNDLGFBQUksQ0FBYkQsTUFDRkUsV0FBV3BCLGNBQWNpQiwwQkFDekJJLE9BQU8sQUFBQ0QsYUFBYSxPQUNaRSxnQkFBVSxHQUNSSixLQUFLSyxZQUFZLENBQUNILFVBQVVsQixjQUN2Q0UsV0FBV29CLGlCQUFRLENBQUNSLDJCQUEyQixDQUFDQyx5QkFBeUJmLGNBQ3pFQyxTQUFTc0IsMEJBQTBCckIsVUFBVWlCLE9BQzdDSyxzQkFBc0IsSUFqRFgzQixvQkFpRG1DRyxhQUFhQyxRQUFRQztnQkFFekUsT0FBT3NCO1lBQ1Q7OztXQXBEbUIzQjs7QUF1RHJCLFNBQVMwQiwwQkFBMEJyQixRQUFRLEVBQUVpQixJQUFJO0lBQy9DLElBQUlsQjtJQUVKLElBQU13QixpQkFBaUJ2QixTQUFTRSxTQUFTO0lBRXpDLElBQUllLFNBQVMsTUFBTTtRQUNqQmxCLFNBQVN3QixnQkFBaUIsR0FBRztJQUMvQixPQUFPO1FBQ0wsSUFBTUMsYUFBYVAsS0FBS2YsU0FBUztRQUVqQ0gsU0FBUyxBQUFDLEdBQW9CeUIsT0FBbEJELGdCQUFlLEtBQWMsT0FBWEM7SUFDaEM7SUFFQSxPQUFPekI7QUFDVCJ9