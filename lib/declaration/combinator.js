"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CombinatorDeclaration;
    }
});
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
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
var CombinatorDeclaration = /*#__PURE__*/ function() {
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
            value: function verify(fileContext) {
                var verified;
                var combinatorDeclarationString = this.getString(); ///
                fileContext.trace("Verifying the '".concat(combinatorDeclarationString, "' combinator declaration..."));
                var combinatorVerified = this.combinator.verify(fileContext);
                if (combinatorVerified) {
                    fileContext.addCombinator(this.combinator);
                    verified = true;
                }
                if (verified) {
                    fileContext.debug("...verified the '".concat(combinatorDeclarationString, "' combinator declaration."));
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
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5hdG9yRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgY29tYmluYXRvcikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLmNvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRDb21iaW5hdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbWJpbmF0b3I7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLmNvbWJpbmF0b3IuZ2V0U3RyaW5nKCk7IH1cblxuICB2ZXJpZnkoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JWZXJpZmllZCA9IHRoaXMuY29tYmluYXRvci52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgaWYgKGNvbWJpbmF0b3JWZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuYWRkQ29tYmluYXRvcih0aGlzLmNvbWJpbmF0b3IpO1xuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb21iaW5hdG9yRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIGNvbWJpbmF0b3IpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbjtcbiAgfVxufSJdLCJuYW1lcyI6WyJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsImNvbWJpbmF0b3IiLCJnZXRGaWxlQ29udGV4dCIsImdldENvbWJpbmF0b3IiLCJnZXRTdHJpbmciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwiY29tYmluYXRvclZlcmlmaWVkIiwiYWRkQ29tYmluYXRvciIsImRlYnVnIiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29tYmluYXRvciIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7aUVBRkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLHNDQUFOO2FBQU1BLHNCQUNQQyxXQUFXLEVBQUVDLFVBQVU7Z0NBRGhCRjtRQUVqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFIREY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0csU0FBUztZQUFJOzs7WUFFbERDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPTCxXQUFXO2dCQUNoQixJQUFJTTtnQkFFSixJQUFNQyw4QkFBOEIsSUFBSSxDQUFDSCxTQUFTLElBQUksR0FBRztnQkFFekRKLFlBQVlRLEtBQUssQ0FBQyxBQUFDLGtCQUE2QyxPQUE1QkQsNkJBQTRCO2dCQUVoRSxJQUFNRSxxQkFBcUIsSUFBSSxDQUFDUixVQUFVLENBQUNJLE1BQU0sQ0FBQ0w7Z0JBRWxELElBQUlTLG9CQUFvQjtvQkFDdEJULFlBQVlVLGFBQWEsQ0FBQyxJQUFJLENBQUNULFVBQVU7b0JBRXpDSyxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1pOLFlBQVlXLEtBQUssQ0FBQyxBQUFDLG9CQUErQyxPQUE1QkosNkJBQTRCO2dCQUNwRTtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUViLFdBQVc7Z0JBQ3pFLElBQU1DLGFBQWFhLG1CQUFVLENBQUNGLDZCQUE2QixDQUFDQywyQkFBMkJiLGNBQ2pGZSx3QkFBd0IsSUF4Q2JoQixzQkF3Q3VDQyxhQUFhQztnQkFFckUsT0FBT2M7WUFDVDs7O1dBM0NtQmhCIn0=