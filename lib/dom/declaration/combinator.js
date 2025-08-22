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
    function CombinatorDeclaration(fileContext, string, combinator) {
        _class_call_check(this, CombinatorDeclaration);
        this.fileContext = fileContext;
        this.string = string;
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
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getCombinator",
            value: function getCombinator() {
                return this.combinator;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var combinatorDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(combinatorDeclarationString, "' combinator declaration..."));
                var combinatorVerifies = this.verifyCombinator();
                if (combinatorVerifies) {
                    this.fileContext.addCombinator(this.combinator);
                    verifies = true;
                }
                if (verifies) {
                    this.fileContext.debug("...verified the '".concat(combinatorDeclarationString, "' combinator declaration."));
                }
                return verifies;
            }
        },
        {
            key: "verifyCombinator",
            value: function verifyCombinator() {
                var statementVerifies;
                var combinatorString = this.combinator.getString();
                this.fileContext.trace("Verifying the '".concat(combinatorString, "' combinator..."));
                var statement = this.combinator.getStatement(), statementNode = statement.getNode();
                statementVerifies = _combinator.default.verifyStatement(statementNode, this.fileContext);
                if (statementVerifies) {
                    this.fileContext.debug("...verified the '".concat(combinatorString, "' combinator."));
                }
                return statementVerifies;
            }
        }
    ], [
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
                var Combinator = _dom.default.Combinator, node = combinatorDeclarationNode, string = fileContext.nodeAsString(node), combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext), combinatorDeclaration = new CombinatorDeclaration(fileContext, string, combinator);
                return combinatorDeclaration;
            }
        }
    ]);
    return CombinatorDeclaration;
}(), _define_property(_CombinatorDeclaration, "name", "CombinatorDeclaration"), _CombinatorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29tYmluYXRvclZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9jb21iaW5hdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbWJpbmF0b3JEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5jb21iaW5hdG9yID0gY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tYmluYXRvcjtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbWJpbmF0b3IoKTtcblxuICAgIGlmIChjb21iaW5hdG9yVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkQ29tYmluYXRvcih0aGlzLmNvbWJpbmF0b3IpO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb21iaW5hdG9yKCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmNvbWJpbmF0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IGNvbWJpbmF0b3JWZXJpZmllci52ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgdGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvckRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gbmV3IENvbWJpbmF0b3JEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCBjb21iaW5hdG9yKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJjb21iaW5hdG9yIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRDb21iaW5hdG9yIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsImNvbWJpbmF0b3JWZXJpZmllcyIsInZlcmlmeUNvbWJpbmF0b3IiLCJhZGRDb21iaW5hdG9yIiwiZGVidWciLCJzdGF0ZW1lbnRWZXJpZmllcyIsImNvbWJpbmF0b3JTdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0Tm9kZSIsImNvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3IiLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiY29tYmluYXRvckRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO2lFQUllOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQixXQUFlQSxJQUFBQSxnQkFBVywwQ0FBQzthQUFNQyxzQkFDbkJDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxVQUFVO2dDQURaSDtRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyw4QkFBOEIsSUFBSSxDQUFDSixTQUFTLElBQUksR0FBRztnQkFFekQsSUFBSSxDQUFDSixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUE2QyxPQUE1QkQsNkJBQTRCO2dCQUVyRSxJQUFNRSxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0I7Z0JBRWhELElBQUlELG9CQUFvQjtvQkFDdEIsSUFBSSxDQUFDVixXQUFXLENBQUNZLGFBQWEsQ0FBQyxJQUFJLENBQUNWLFVBQVU7b0JBRTlDSyxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDUCxXQUFXLENBQUNhLEtBQUssQ0FBQyxBQUFDLG9CQUErQyxPQUE1QkwsNkJBQTRCO2dCQUN6RTtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlHO2dCQUVKLElBQU1DLG1CQUFtQixJQUFJLENBQUNiLFVBQVUsQ0FBQ0UsU0FBUztnQkFFbEQsSUFBSSxDQUFDSixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUFrQyxPQUFqQk0sa0JBQWlCO2dCQUUxRCxJQUFNQyxZQUFZLElBQUksQ0FBQ2QsVUFBVSxDQUFDZSxZQUFZLElBQ3hDQyxnQkFBZ0JGLFVBQVVHLE9BQU87Z0JBRXZDTCxvQkFBb0JNLG1CQUFrQixDQUFDQyxlQUFlLENBQUNILGVBQWUsSUFBSSxDQUFDbEIsV0FBVztnQkFFdEYsSUFBSWMsbUJBQW1CO29CQUNyQixJQUFJLENBQUNkLFdBQVcsQ0FBQ2EsS0FBSyxDQUFDLEFBQUMsb0JBQW9DLE9BQWpCRSxrQkFBaUI7Z0JBQzlEO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFJT1EsS0FBQUE7bUJBQVAsU0FBT0EsOEJBQThCQyx5QkFBeUIsRUFBRXZCLFdBQVc7Z0JBQ3pFLElBQU0sQUFBRXdCLGFBQWVDLFlBQUcsQ0FBbEJELFlBQ0ZFLE9BQU9ILDJCQUNQdEIsU0FBU0QsWUFBWTJCLFlBQVksQ0FBQ0QsT0FDbEN4QixhQUFhc0IsV0FBV0YsNkJBQTZCLENBQUNDLDJCQUEyQnZCLGNBQ2pGNEIsd0JBQXdCLElBQUk3QixzQkFBc0JDLGFBQWFDLFFBQVFDO2dCQUU3RSxPQUFPMEI7WUFDVDs7OztLQVZBLHlDQUFPQyxRQUFPIn0=