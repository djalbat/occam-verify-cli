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
                var Combinator = shim.Combinator, combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext), combinatorDeclaration = new CombinatorDeclaration(fileContext, combinator);
                return combinatorDeclaration;
            }
        }
    ]);
    return CombinatorDeclaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5hdG9yRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgY29tYmluYXRvcikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLmNvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRDb21iaW5hdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbWJpbmF0b3I7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLmNvbWJpbmF0b3IuZ2V0U3RyaW5nKCk7IH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgY29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JWZXJpZmllZFdoZW5EZWNsYXJlZCA9IHRoaXMuY29tYmluYXRvci52ZXJpZnlXaGVuRGVjbGFyZWQodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICBpZiAoY29tYmluYXRvclZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZENvbWJpbmF0b3IodGhpcy5jb21iaW5hdG9yKTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBzaGltLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBjb21iaW5hdG9yKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG4gIH1cbn0iXSwibmFtZXMiOlsiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJjb21iaW5hdG9yIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRDb21iaW5hdG9yIiwiZ2V0U3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsImNvbWJpbmF0b3JWZXJpZmllZFdoZW5EZWNsYXJlZCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsImFkZENvbWJpbmF0b3IiLCJkZWJ1ZyIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3IiLCJzaGltIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLHNDQUFOO2FBQU1BLHNCQUNQQyxXQUFXLEVBQUVDLFVBQVU7Z0NBRGhCRjtRQUVqQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFIREY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNILFVBQVUsQ0FBQ0csU0FBUztZQUFJOzs7WUFFbERDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNQyw4QkFBOEIsSUFBSSxDQUFDSCxTQUFTLElBQUksR0FBRztnQkFFekQsSUFBSSxDQUFDSixXQUFXLENBQUNRLEtBQUssQ0FBQyxBQUFDLGtCQUE2QyxPQUE1QkQsNkJBQTRCO2dCQUVyRSxJQUFNRSxpQ0FBaUMsSUFBSSxDQUFDUixVQUFVLENBQUNTLGtCQUFrQixDQUFDLElBQUksQ0FBQ1YsV0FBVztnQkFFMUYsSUFBSVMsZ0NBQWdDO29CQUNsQyxJQUFJLENBQUNULFdBQVcsQ0FBQ1csYUFBYSxDQUFDLElBQUksQ0FBQ1YsVUFBVTtvQkFFOUNLLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNOLFdBQVcsQ0FBQ1ksS0FBSyxDQUFDLEFBQUMsb0JBQStDLE9BQTVCTCw2QkFBNEI7Z0JBQ3pFO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRWQsV0FBVztnQkFDekUsSUFBTSxBQUFFZSxhQUFlQyxLQUFmRCxZQUNGZCxhQUFhYyxXQUFXRiw2QkFBNkIsQ0FBQ0MsMkJBQTJCZCxjQUNqRmlCLHdCQUF3QixJQXpDYmxCLHNCQXlDdUNDLGFBQWFDO2dCQUVyRSxPQUFPZ0I7WUFDVDs7O1dBNUNtQmxCIn0=