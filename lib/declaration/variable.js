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
var _query = require("../utilities/query");
var _name = require("../utilities/name");
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
                var variableVerifiedWhenDeclared = this.variable.verifyWhenDeclared(this.fileContext);
                if (variableVerifiedWhenDeclared) {
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
                var Variable = _shim.default.Variable, typeNode = typeNodeQuery(variableDeclarationNode), variable = Variable.fromVariableDeclarationNode(variableDeclarationNode, fileContext), string = stringFromVariableAndTypeNode(variable, typeNode), variableDeclaration = new VariableDeclaration(fileContext, string, variable);
                return variableDeclaration;
            }
        }
    ]);
    return VariableDeclaration;
}();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhcmlhYmxlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCB2YXJpYWJsZSkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0aGlzLnZhcmlhYmxlLnZlcmlmeVdoZW5EZWNsYXJlZCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhcmlhYmxlQW5kVHlwZU5vZGUodmFyaWFibGUsIHR5cGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVZhcmlhYmxlQW5kVHlwZU5vZGUodmFyaWFibGUsIHR5cGVOb2RlKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZzsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgc3RyaW5nID0gYCR7dmFyaWFibGVTdHJpbmd9OiR7dHlwZU5hbWV9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGVEZWNsYXJhdGlvbiIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsInZhcmlhYmxlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVkIiwidmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidmFyaWFibGVWZXJpZmllZFdoZW5EZWNsYXJlZCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImFkZFZhcmlhYmxlIiwiZGVidWciLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlIiwic2hpbSIsInR5cGVOb2RlIiwic3RyaW5nRnJvbVZhcmlhYmxlQW5kVHlwZU5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFibGVTdHJpbmciLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzsyREFQSjtxQkFFUztvQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFakIsSUFBQSxBQUFNRixvQ0FBTjthQUFNQSxvQkFDUEcsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7Z0NBRHRCTDtRQUVqQixJQUFJLENBQUNHLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFKQ0w7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsNEJBQTRCLElBQUksQ0FBQ1AsTUFBTSxFQUFFLEdBQUc7Z0JBRWxELElBQUksQ0FBQ0QsV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBMkMsT0FBMUJELDJCQUEwQjtnQkFFbkUsSUFBTUUsK0JBQStCLElBQUksQ0FBQ1IsUUFBUSxDQUFDUyxrQkFBa0IsQ0FBQyxJQUFJLENBQUNYLFdBQVc7Z0JBRXRGLElBQUlVLDhCQUE4QjtvQkFDaEMsSUFBSSxDQUFDVixXQUFXLENBQUNZLFdBQVcsQ0FBQyxJQUFJLENBQUNWLFFBQVE7b0JBRTFDSyxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDUCxXQUFXLENBQUNhLEtBQUssQ0FBQyxBQUFDLG9CQUE2QyxPQUExQkwsMkJBQTBCO2dCQUN2RTtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsdUJBQXVCLEVBQUVmLFdBQVc7Z0JBQ3JFLElBQU0sQUFBRWdCLFdBQWFDLGFBQUksQ0FBakJELFVBQ0ZFLFdBQVdwQixjQUFjaUIsMEJBQ3pCYixXQUFXYyxTQUFTRiwyQkFBMkIsQ0FBQ0MseUJBQXlCZixjQUN6RUMsU0FBU2tCLDhCQUE4QmpCLFVBQVVnQixXQUNqREUsc0JBQXNCLElBOUNYdkIsb0JBOENtQ0csYUFBYUMsUUFBUUM7Z0JBRXpFLE9BQU9rQjtZQUNUOzs7V0FqRG1CdkI7O0FBb0RyQixTQUFTc0IsOEJBQThCakIsUUFBUSxFQUFFZ0IsUUFBUTtJQUN2RCxJQUFJakI7SUFFSixJQUFNb0IsaUJBQWlCbkIsU0FBU0UsU0FBUztJQUV6QyxJQUFJYyxhQUFhLE1BQU07UUFDckJqQixTQUFTb0IsZ0JBQWlCLEdBQUc7SUFDL0IsT0FBTztRQUNMLElBQU1DLFdBQVdDLElBQUFBLDBCQUFvQixFQUFDTDtRQUV0Q2pCLFNBQVMsQUFBQyxHQUFvQnFCLE9BQWxCRCxnQkFBZSxLQUFZLE9BQVRDO0lBQ2hDO0lBRUEsT0FBT3JCO0FBQ1QifQ==