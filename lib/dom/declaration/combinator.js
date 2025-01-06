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
var _combinator = /*#__PURE__*/ _interop_require_default(require("../../verifier/combinator"));
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
                var verified = false;
                var combinatorDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(combinatorDeclarationString, "' combinator declaration..."));
                var statement = this.combinator.getStatement(), statementVerified = this.verifyStatement(statement);
                if (statementVerified) {
                    this.fileContext.addCombinator(this.combinator);
                    verified = true;
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(combinatorDeclarationString, "' combinator declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyStatement",
            value: function verifyStatement(statement) {
                var statementVerified;
                var statementString = statement.getString(); ///
                this.fileContext.trace("Verifying the '".concat(statementString, "' statement..."));
                var statementNode = statement.getNode();
                statementVerified = _combinator.default.verifyStatement(statementNode, this.fileContext);
                if (statementVerified) {
                    this.fileContext.debug("...verified the '".concat(statementString, "' statement."));
                }
                return statementVerified;
            }
        }
    ], [
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
                var Combinator = _dom.default.Combinator, combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext), combinatorDeclaration = new CombinatorDeclaration(fileContext, combinator);
                return combinatorDeclaration;
            }
        }
    ]);
    return CombinatorDeclaration;
}(), _define_property(_CombinatorDeclaration, "name", "CombinatorDeclaration"), _CombinatorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29tYmluYXRvclZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9jb21iaW5hdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbWJpbmF0b3JEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuY29tYmluYXRvciA9IGNvbWJpbmF0b3I7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldENvbWJpbmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHsgcmV0dXJuIHRoaXMuY29tYmluYXRvci5nZXRTdHJpbmcoKTsgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZENvbWJpbmF0b3IodGhpcy5jb21iaW5hdG9yKTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IGNvbWJpbmF0b3JWZXJpZmllci52ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgdGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbWJpbmF0b3JEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZG9tLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBjb21iaW5hdG9yKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJjb21iaW5hdG9yIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRDb21iaW5hdG9yIiwiZ2V0U3RyaW5nIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwiYWRkQ29tYmluYXRvciIsImRlYnVnIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJjb21iaW5hdG9yVmVyaWZpZXIiLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb21iaW5hdG9yIiwiZG9tIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO2lFQUllOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQixXQUFlQSxJQUFBQSxnQkFBVywwQ0FBQzthQUFNQyxzQkFDbkJDLFdBQVcsRUFBRUMsVUFBVTtnQ0FESkY7UUFFN0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixXQUFXO1lBQ3pCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFjLE9BQU8sSUFBSSxDQUFDSCxVQUFVLENBQUNHLFNBQVM7WUFBSTs7O1lBRWxEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyw4QkFBOEIsSUFBSSxDQUFDSCxTQUFTLElBQUksR0FBRztnQkFFekQsSUFBSSxDQUFDSixXQUFXLENBQUNRLEtBQUssQ0FBQyxBQUFDLGtCQUE2QyxPQUE1QkQsNkJBQTRCO2dCQUVyRSxJQUFNRSxZQUFZLElBQUksQ0FBQ1IsVUFBVSxDQUFDUyxZQUFZLElBQ3hDQyxvQkFBb0IsSUFBSSxDQUFDQyxlQUFlLENBQUNIO2dCQUUvQyxJQUFJRSxtQkFBbUI7b0JBQ3JCLElBQUksQ0FBQ1gsV0FBVyxDQUFDYSxhQUFhLENBQUMsSUFBSSxDQUFDWixVQUFVO29CQUU5Q0ssV0FBVztnQkFDYjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaLElBQUksQ0FBQ04sV0FBVyxDQUFDYyxLQUFLLENBQUMsQUFBQyxvQkFBK0MsT0FBNUJQLDZCQUE0QjtnQkFDekU7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JILFNBQVM7Z0JBQ3ZCLElBQUlFO2dCQUVKLElBQU1JLGtCQUFrQk4sVUFBVUwsU0FBUyxJQUFJLEdBQUc7Z0JBRWxELElBQUksQ0FBQ0osV0FBVyxDQUFDUSxLQUFLLENBQUMsQUFBQyxrQkFBaUMsT0FBaEJPLGlCQUFnQjtnQkFFekQsSUFBTUMsZ0JBQWdCUCxVQUFVUSxPQUFPO2dCQUV2Q04sb0JBQW9CTyxtQkFBa0IsQ0FBQ04sZUFBZSxDQUFDSSxlQUFlLElBQUksQ0FBQ2hCLFdBQVc7Z0JBRXRGLElBQUlXLG1CQUFtQjtvQkFDckIsSUFBSSxDQUFDWCxXQUFXLENBQUNjLEtBQUssQ0FBQyxBQUFDLG9CQUFtQyxPQUFoQkMsaUJBQWdCO2dCQUM3RDtnQkFFQSxPQUFPSjtZQUNUOzs7O1lBSU9RLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVwQixXQUFXO2dCQUN6RSxJQUFNLEFBQUVxQixhQUFlQyxZQUFHLENBQWxCRCxZQUNGcEIsYUFBYW9CLFdBQVdGLDZCQUE2QixDQUFDQywyQkFBMkJwQixjQUNqRnVCLHdCQUF3QixJQUFJeEIsc0JBQXNCQyxhQUFhQztnQkFFckUsT0FBT3NCO1lBQ1Q7Ozs7S0FSQSx5Q0FBT0MsUUFBTyJ9