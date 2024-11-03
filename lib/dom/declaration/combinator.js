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
var _combinator = /*#__PURE__*/ _interop_require_default(require("../../combinator"));
var _dom = require("../../dom");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _CombinatorDeclaration;
var _default = (0, _dom.domAssigned)((_CombinatorDeclaration = /*#__PURE__*/ function() {
    function CombinatorDeclaration(fileContext, combinator) {
        _class_call_check(this, CombinatorDeclaration);
        this.fileContext = fileContext;
        this.combinator = combinator;
    }
    _create_class(CombinatorDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getCombinator",
            value: function getCombinator() {
                return this.combinator;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.combinator.getString();
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var combinatorDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(combinatorDeclarationString, "' combinator declaration..."));
                var combinatorVerifiedWhenDeclared = this.combinator.verifyWhenDeclared(this.fileContext);
                if (combinatorVerifiedWhenDeclared) {
                    this.fileContext.addCombinator(this.combinator);
                    verified = true;
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(combinatorDeclarationString, "' combinator declaration."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
                var combinator = _combinator.default.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext), combinatorDeclaration = new CombinatorDeclaration(fileContext, combinator);
                return combinatorDeclaration;
            }
        }
    ]);
    return CombinatorDeclaration;
}(), _define_property(_CombinatorDeclaration, "name", "CombinatorDeclaration"), _CombinatorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uLy4uL2NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbWJpbmF0b3JEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuY29tYmluYXRvciA9IGNvbWJpbmF0b3I7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldENvbWJpbmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMuY29tYmluYXRvci5nZXRTdHJpbmcoKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgY29tYmluYXRvclZlcmlmaWVkV2hlbkRlY2xhcmVkID0gdGhpcy5jb21iaW5hdG9yLnZlcmlmeVdoZW5EZWNsYXJlZCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGlmIChjb21iaW5hdG9yVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkQ29tYmluYXRvcih0aGlzLmNvbWJpbmF0b3IpO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvckRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb21iaW5hdG9yRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIGNvbWJpbmF0b3IpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsImNvbWJpbmF0b3IiLCJnZXRGaWxlQ29udGV4dCIsImdldENvbWJpbmF0b3IiLCJnZXRTdHJpbmciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwiY29tYmluYXRvclZlcmlmaWVkV2hlbkRlY2xhcmVkIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwiYWRkQ29tYmluYXRvciIsImRlYnVnIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2lFQUp1QjttQkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVCLFdBQWVBLElBQUFBLGdCQUFXLDBDQUFDO2FBQU1DLHNCQUNuQkMsV0FBVyxFQUFFQyxVQUFVO2dDQURKRjtRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0csU0FBUztZQUFJOzs7WUFFbERDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyw4QkFBOEIsSUFBSSxDQUFDSCxTQUFTLElBQUksR0FBRztnQkFFekQsSUFBSSxDQUFDSixXQUFXLENBQUNRLEtBQUssQ0FBQyxBQUFDLGtCQUE2QyxPQUE1QkQsNkJBQTRCO2dCQUVyRSxJQUFNRSxpQ0FBaUMsSUFBSSxDQUFDUixVQUFVLENBQUNTLGtCQUFrQixDQUFDLElBQUksQ0FBQ1YsV0FBVztnQkFFMUYsSUFBSVMsZ0NBQWdDO29CQUNsQyxJQUFJLENBQUNULFdBQVcsQ0FBQ1csYUFBYSxDQUFDLElBQUksQ0FBQ1YsVUFBVTtvQkFFOUNLLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNOLFdBQVcsQ0FBQ1ksS0FBSyxDQUFDLEFBQUMsb0JBQStDLE9BQTVCTCw2QkFBNEI7Z0JBQ3pFO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFJT08sS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRWQsV0FBVztnQkFDekUsSUFBTUMsYUFBYWMsbUJBQVUsQ0FBQ0YsNkJBQTZCLENBQUNDLDJCQUEyQmQsY0FDakZnQix3QkFBd0IsSUFBSWpCLHNCQUFzQkMsYUFBYUM7Z0JBRXJFLE9BQU9lO1lBQ1Q7Ozs7S0FQQSx5Q0FBT0MsUUFBTyJ9