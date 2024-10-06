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
var _type = /*#__PURE__*/ _interop_require_wildcard(require("../type"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _query = require("../utilities/query");
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
                var typeNode = typeNodeQuery(variableDeclarationNode), type = typeNode === null ? _type.objectType : _type.default.fromTypeNode(typeNode, fileContext), variable = _variable.default.fromVariableDeclarationNode(variableDeclarationNode, fileContext), string = stringFromVariableAndType(variable, type), variableDeclaration = new VariableDeclaration(fileContext, string, variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUsIHtvYmplY3RUeXBlfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi90eXBlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgdmFyaWFibGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMudmFyaWFibGUudmVyaWZ5QXRUb3BMZXZlbCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRWYXJpYWJsZSh0aGlzLnZhcmlhYmxlKTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZSA9ICh0eXBlTm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOlxuICAgICAgICAgICAgICAgICAgICAgVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21WYXJpYWJsZUFuZFR5cGUodmFyaWFibGUsIHR5cGUpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgVmFyaWFibGVEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVmFyaWFibGVBbmRUeXBlKHZhcmlhYmxlLCB0eXBlKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgJHt2YXJpYWJsZVN0cmluZ306JHt0eXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlVmVyaWZpZWRBdFRvcExldmVsIiwidmVyaWZ5QXRUb3BMZXZlbCIsImFkZFZhcmlhYmxlIiwiZGVidWciLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInR5cGVOb2RlIiwidHlwZSIsIm9iamVjdFR5cGUiLCJUeXBlIiwiZnJvbVR5cGVOb2RlIiwiVmFyaWFibGUiLCJzdHJpbmdGcm9tVmFyaWFibGVBbmRUeXBlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlU3RyaW5nIiwidHlwZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NERBUFU7K0RBQ1Y7cUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFakIsSUFBQSxBQUFNRixvQ0FBTjthQUFNQSxvQkFDUEcsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7Z0NBRHRCTDtRQUVqQixJQUFJLENBQUNHLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFKQ0w7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsNEJBQTRCLElBQUksQ0FBQ1AsTUFBTSxFQUFFLEdBQUc7Z0JBRWxELElBQUksQ0FBQ0QsV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBMkMsT0FBMUJELDJCQUEwQjtnQkFFbkUsSUFBTUUsNkJBQTZCLElBQUksQ0FBQ1IsUUFBUSxDQUFDUyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUNYLFdBQVc7Z0JBRWxGLElBQUlVLDRCQUE0QjtvQkFDOUIsSUFBSSxDQUFDVixXQUFXLENBQUNZLFdBQVcsQ0FBQyxJQUFJLENBQUNWLFFBQVE7b0JBRTFDSyxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDUCxXQUFXLENBQUNhLEtBQUssQ0FBQyxBQUFDLG9CQUE2QyxPQUExQkwsMkJBQTBCO2dCQUN2RTtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsdUJBQXVCLEVBQUVmLFdBQVc7Z0JBQ3JFLElBQU1nQixXQUFXbEIsY0FBY2lCLDBCQUN6QkUsT0FBTyxBQUFDRCxhQUFhLE9BQ1pFLGdCQUFVLEdBQ1JDLGFBQUksQ0FBQ0MsWUFBWSxDQUFDSixVQUFVaEIsY0FDdkNFLFdBQVdtQixpQkFBUSxDQUFDUCwyQkFBMkIsQ0FBQ0MseUJBQXlCZixjQUN6RUMsU0FBU3FCLDBCQUEwQnBCLFVBQVVlLE9BQzdDTSxzQkFBc0IsSUFoRFgxQixvQkFnRG1DRyxhQUFhQyxRQUFRQztnQkFFekUsT0FBT3FCO1lBQ1Q7OztXQW5EbUIxQjs7QUFzRHJCLFNBQVN5QiwwQkFBMEJwQixRQUFRLEVBQUVlLElBQUk7SUFDL0MsSUFBSWhCO0lBRUosSUFBTXVCLGlCQUFpQnRCLFNBQVNFLFNBQVM7SUFFekMsSUFBSWEsU0FBUyxNQUFNO1FBQ2pCaEIsU0FBU3VCLGdCQUFpQixHQUFHO0lBQy9CLE9BQU87UUFDTCxJQUFNQyxhQUFhUixLQUFLYixTQUFTO1FBRWpDSCxTQUFTLEFBQUMsR0FBb0J3QixPQUFsQkQsZ0JBQWUsS0FBYyxPQUFYQztJQUNoQztJQUVBLE9BQU94QjtBQUNUIn0=