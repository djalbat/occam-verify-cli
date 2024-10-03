"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Constructor;
    }
});
var _type = /*#__PURE__*/ _interop_require_default(require("./type"));
var _term = /*#__PURE__*/ _interop_require_default(require("./term"));
var _query = require("./utilities/query");
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
var termNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/term"), typeNodeQuery = (0, _query.nodeQuery)("/constructorDeclaration/type");
var Constructor = /*#__PURE__*/ function() {
    function Constructor(string, term) {
        _class_call_check(this, Constructor);
        this.string = string;
        this.term = term;
    }
    _create_class(Constructor, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.term.getType();
            }
        },
        {
            key: "verify",
            value: function verify(fileContext) {
                var verified;
                var constructorString = this.string; ///
                fileContext.trace("Verifying the '".concat(constructorString, "' constructor..."));
                var termTypeVerified = this.term.verifyType(fileContext);
                if (termTypeVerified) {
                    var termVerifiedAsConstructor = this.term.verifyAsConstructor(fileContext);
                    if (termVerifiedAsConstructor) {
                        verified = true; ///
                    }
                }
                if (verified) {
                    fileContext.debug("...verified the '".concat(constructorString, "' constructor."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var termNode = termNodeQuery(constructorDeclarationNode), typeNode = typeNodeQuery(constructorDeclarationNode), type = _type.default.fromTypeNode(typeNode), term = _term.default.fromTermNodeAndType(termNode, type, fileContext), string = stringFromTermAndType(term, type), constructor = new Constructor(string, term);
                return constructor;
            }
        }
    ]);
    return Constructor;
}();
function stringFromTermAndType(term, type) {
    var string;
    var termString = term.getString();
    if (type === null) {
        string = "".concat(termString);
    } else {
        var typeString = type.getString();
        string = "".concat(termString, ":").concat(typeString);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IFRlcm0gZnJvbSBcIi4vdGVybVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25zdHJ1Y3RvckRlY2xhcmF0aW9uL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnN0cnVjdG9yRGVjbGFyYXRpb24vdHlwZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RydWN0b3Ige1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgdmVyaWZ5KGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3QgdGVybVR5cGVWZXJpZmllZCA9IHRoaXMudGVybS52ZXJpZnlUeXBlKGZpbGVDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVHlwZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdGhpcy50ZXJtLnZlcmlmeUFzQ29uc3RydWN0b3IoZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBDb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiQ29uc3RydWN0b3IiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInN0cmluZyIsInRlcm0iLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwiZ2V0VHlwZSIsInZlcmlmeSIsImZpbGVDb250ZXh0IiwidmVyaWZpZWQiLCJjb25zdHJ1Y3RvclN0cmluZyIsInRyYWNlIiwidGVybVR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwidmVyaWZ5QXNDb25zdHJ1Y3RvciIsImRlYnVnIiwiZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwidHlwZSIsIlR5cGUiLCJmcm9tVHlwZU5vZGUiLCJUZXJtIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsImNvbnN0cnVjdG9yIiwidGVybVN0cmluZyIsInR5cGVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzJEQVJKOzJEQUNBO3FCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVqQixJQUFBLEFBQU1GLDRCQUFOO2FBQU1BLFlBQ1BJLE1BQU0sRUFBRUMsSUFBSTtnQ0FETEw7UUFFakIsSUFBSSxDQUFDSSxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS0w7O1lBTW5CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNILElBQUksQ0FBQ0csT0FBTztZQUFJOzs7WUFFeENDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXO2dCQUNoQixJQUFJQztnQkFFSixJQUFNQyxvQkFBb0IsSUFBSSxDQUFDUixNQUFNLEVBQUcsR0FBRztnQkFFM0NNLFlBQVlHLEtBQUssQ0FBQyxBQUFDLGtCQUFtQyxPQUFsQkQsbUJBQWtCO2dCQUV0RCxJQUFNRSxtQkFBbUIsSUFBSSxDQUFDVCxJQUFJLENBQUNVLFVBQVUsQ0FBQ0w7Z0JBRTlDLElBQUlJLGtCQUFrQjtvQkFDcEIsSUFBTUUsNEJBQTRCLElBQUksQ0FBQ1gsSUFBSSxDQUFDWSxtQkFBbUIsQ0FBQ1A7b0JBRWhFLElBQUlNLDJCQUEyQjt3QkFDN0JMLFdBQVcsTUFBTSxHQUFHO29CQUN0QjtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaRCxZQUFZUSxLQUFLLENBQUMsQUFBQyxvQkFBcUMsT0FBbEJOLG1CQUFrQjtnQkFDMUQ7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JDLDBCQUEwQixFQUFFVixXQUFXO2dCQUMzRSxJQUFNVyxXQUFXcEIsY0FBY21CLDZCQUN6QkUsV0FBV25CLGNBQWNpQiw2QkFDekJHLE9BQU9DLGFBQUksQ0FBQ0MsWUFBWSxDQUFDSCxXQUN6QmpCLE9BQU9xQixhQUFJLENBQUNDLG1CQUFtQixDQUFDTixVQUFVRSxNQUFNYixjQUNoRE4sU0FBU3dCLHNCQUFzQnZCLE1BQU1rQixPQUNyQ00sY0FBYyxJQTlDSDdCLFlBOENtQkksUUFBUUM7Z0JBRTVDLE9BQU93QjtZQUNUOzs7V0FqRG1CN0I7O0FBb0RyQixTQUFTNEIsc0JBQXNCdkIsSUFBSSxFQUFFa0IsSUFBSTtJQUN2QyxJQUFJbkI7SUFFSixJQUFNMEIsYUFBYXpCLEtBQUtDLFNBQVM7SUFFakMsSUFBSWlCLFNBQVMsTUFBTTtRQUNqQm5CLFNBQVMsQUFBQyxHQUFhLE9BQVgwQjtJQUNkLE9BQU87UUFDTCxJQUFNQyxhQUFhUixLQUFLakIsU0FBUztRQUVqQ0YsU0FBUyxBQUFDLEdBQWdCMkIsT0FBZEQsWUFBVyxLQUFjLE9BQVhDO0lBQzVCO0lBRUEsT0FBTzNCO0FBQ1QifQ==