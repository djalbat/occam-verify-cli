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
    function CombinatorDeclaration(combinator) {
        _class_call_check(this, CombinatorDeclaration);
        this.combinator = combinator;
    }
    _create_class(CombinatorDeclaration, [
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
                var ocmbinatorDeclarationString = this.getString(); ///
                fileContext.trace("Verifying the '".concat(ocmbinatorDeclarationString, "' combinator declaration..."));
                var combinatorVerified = this.combinator.verify(fileContext);
                if (combinatorVerified) {
                    fileContext.addCombinator(this.combinator);
                    verified = true;
                }
                if (verified) {
                    fileContext.debug("...verified the '".concat(ocmbinatorDeclarationString, "' combinator declaration."));
                }
                return verified;
            }
        }
    ], [
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
                var combinator = _combinator.default.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext), combinatorDeclaration = new CombinatorDeclaration(combinator);
                return combinatorDeclaration;
            }
        }
    ]);
    return CombinatorDeclaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWNsYXJhdGlvbi9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21iaW5hdG9yRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9yID0gY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldENvbWJpbmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMuY29tYmluYXRvci5nZXRTdHJpbmcoKTsgfVxuXG4gIHZlcmlmeShmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IG9jbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7b2NtYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgY29tYmluYXRvclZlcmlmaWVkID0gdGhpcy5jb21iaW5hdG9yLnZlcmlmeShmaWxlQ29udGV4dCk7XG5cbiAgICBpZiAoY29tYmluYXRvclZlcmlmaWVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5hZGRDb21iaW5hdG9yKHRoaXMuY29tYmluYXRvcik7XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7b2NtYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gbmV3IENvbWJpbmF0b3JEZWNsYXJhdGlvbihjb21iaW5hdG9yKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG4gIH1cbn0iXSwibmFtZXMiOlsiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29tYmluYXRvciIsImdldENvbWJpbmF0b3IiLCJnZXRTdHJpbmciLCJ2ZXJpZnkiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkIiwib2NtYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJjb21iaW5hdG9yVmVyaWZpZWQiLCJhZGRDb21iaW5hdG9yIiwiZGVidWciLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb21iaW5hdG9yIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztpRUFGRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsc0NBQU47YUFBTUEsc0JBQ1BDLFVBQVU7Z0NBREhEO1FBRWpCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7a0JBRkREOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDRixVQUFVLENBQUNFLFNBQVM7WUFBSTs7O1lBRWxEQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVztnQkFDaEIsSUFBSUM7Z0JBRUosSUFBTUMsOEJBQThCLElBQUksQ0FBQ0osU0FBUyxJQUFJLEdBQUc7Z0JBRXpERSxZQUFZRyxLQUFLLENBQUMsQUFBQyxrQkFBNkMsT0FBNUJELDZCQUE0QjtnQkFFaEUsSUFBTUUscUJBQXFCLElBQUksQ0FBQ1IsVUFBVSxDQUFDRyxNQUFNLENBQUNDO2dCQUVsRCxJQUFJSSxvQkFBb0I7b0JBQ3RCSixZQUFZSyxhQUFhLENBQUMsSUFBSSxDQUFDVCxVQUFVO29CQUV6Q0ssV0FBVztnQkFDYjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaRCxZQUFZTSxLQUFLLENBQUMsQUFBQyxvQkFBK0MsT0FBNUJKLDZCQUE0QjtnQkFDcEU7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFUixXQUFXO2dCQUN6RSxJQUFNSixhQUFhYSxtQkFBVSxDQUFDRiw2QkFBNkIsQ0FBQ0MsMkJBQTJCUixjQUNqRlUsd0JBQXdCLElBbkNiZixzQkFtQ3VDQztnQkFFeEQsT0FBT2M7WUFDVDs7O1dBdENtQmYifQ==