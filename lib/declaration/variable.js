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
var _type = /*#__PURE__*/ _interop_require_default(require("../type"));
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
                var typeNode = typeNodeQuery(variableDeclarationNode), type = _type.default.fromTypeNode(typeNode, fileContext), variable = _variable.default.fromVariableDeclarationNode(variableDeclarationNode, fileContext), string = stringFromVariableAndType(variable, type), variableDeclaration = new VariableDeclaration(fileContext, string, variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhcmlhYmxlRGVjbGFyYXRpb24vdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHZhcmlhYmxlKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IHZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZEF0VG9wTGV2ZWwgPSB0aGlzLnZhcmlhYmxlLnZlcmlmeUF0VG9wTGV2ZWwodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSk7XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVZhcmlhYmxlQW5kVHlwZSh2YXJpYWJsZSwgdHlwZSksXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21WYXJpYWJsZUFuZFR5cGUodmFyaWFibGUsIHR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmc7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke3ZhcmlhYmxlU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGVEZWNsYXJhdGlvbiIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsInZhcmlhYmxlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVkIiwidmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidmFyaWFibGVWZXJpZmllZEF0VG9wTGV2ZWwiLCJ2ZXJpZnlBdFRvcExldmVsIiwiYWRkVmFyaWFibGUiLCJkZWJ1ZyIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidHlwZU5vZGUiLCJ0eXBlIiwiVHlwZSIsImZyb21UeXBlTm9kZSIsIlZhcmlhYmxlIiwic3RyaW5nRnJvbVZhcmlhYmxlQW5kVHlwZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZVN0cmluZyIsInR5cGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzJEQVBKOytEQUNJO3FCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixJQUFBLEFBQU1GLG9DQUFOO2FBQU1BLG9CQUNQRyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsUUFBUTtnQ0FEdEJMO1FBRWpCLElBQUksQ0FBQ0csV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUpDTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyw0QkFBNEIsSUFBSSxDQUFDUCxNQUFNLEVBQUUsR0FBRztnQkFFbEQsSUFBSSxDQUFDRCxXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUEyQyxPQUExQkQsMkJBQTBCO2dCQUVuRSxJQUFNRSw2QkFBNkIsSUFBSSxDQUFDUixRQUFRLENBQUNTLGdCQUFnQixDQUFDLElBQUksQ0FBQ1gsV0FBVztnQkFFbEYsSUFBSVUsNEJBQTRCO29CQUM5QixJQUFJLENBQUNWLFdBQVcsQ0FBQ1ksV0FBVyxDQUFDLElBQUksQ0FBQ1YsUUFBUTtvQkFFMUNLLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNQLFdBQVcsQ0FBQ2EsS0FBSyxDQUFDLEFBQUMsb0JBQTZDLE9BQTFCTCwyQkFBMEI7Z0JBQ3ZFO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyx1QkFBdUIsRUFBRWYsV0FBVztnQkFDckUsSUFBTWdCLFdBQVdsQixjQUFjaUIsMEJBQ3pCRSxPQUFPQyxhQUFJLENBQUNDLFlBQVksQ0FBQ0gsVUFBVWhCLGNBQ25DRSxXQUFXa0IsaUJBQVEsQ0FBQ04sMkJBQTJCLENBQUNDLHlCQUF5QmYsY0FDekVDLFNBQVNvQiwwQkFBMEJuQixVQUFVZSxPQUM3Q0ssc0JBQXNCLElBOUNYekIsb0JBOENtQ0csYUFBYUMsUUFBUUM7Z0JBRXpFLE9BQU9vQjtZQUNUOzs7V0FqRG1CekI7O0FBb0RyQixTQUFTd0IsMEJBQTBCbkIsUUFBUSxFQUFFZSxJQUFJO0lBQy9DLElBQUloQjtJQUVKLElBQU1zQixpQkFBaUJyQixTQUFTRSxTQUFTO0lBRXpDLElBQUlhLFNBQVMsTUFBTTtRQUNqQmhCLFNBQVNzQixnQkFBaUIsR0FBRztJQUMvQixPQUFPO1FBQ0wsSUFBTUMsYUFBYVAsS0FBS2IsU0FBUztRQUVqQ0gsU0FBUyxBQUFDLEdBQW9CdUIsT0FBbEJELGdCQUFlLEtBQWMsT0FBWEM7SUFDaEM7SUFFQSxPQUFPdkI7QUFDVCJ9