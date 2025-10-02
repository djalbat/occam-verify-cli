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
    function CombinatorDeclaration(context, node, string, combinator) {
        _class_call_check(this, CombinatorDeclaration);
        this.context = context;
        this.node = node;
        this.string = string;
        this.combinator = combinator;
    }
    _create_class(CombinatorDeclaration, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
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
                this.context.trace("Verifying the '".concat(combinatorDeclarationString, "' combinator declaration..."), this.node);
                var combinatorVerifies = this.verifyCombinator();
                if (combinatorVerifies) {
                    this.context.addCombinator(this.combinator);
                    verifies = true;
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(combinatorDeclarationString, "' combinator declaration."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyCombinator",
            value: function verifyCombinator() {
                var statementVerifies;
                var combinatorString = this.combinator.getString();
                this.context.trace("Verifying the '".concat(combinatorString, "' combinator..."), this.node);
                var statement = this.combinator.getStatement(), statementNode = statement.getNode();
                statementVerifies = _combinator.default.verifyStatement(statementNode, this.context);
                if (statementVerifies) {
                    this.context.debug("...verified the '".concat(combinatorString, "' combinator."), this.node);
                }
                return statementVerifies;
            }
        }
    ], [
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
                var Combinator = _dom.default.Combinator, node = combinatorDeclarationNode, string = context.nodeAsString(node), combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclaration = new CombinatorDeclaration(context, node, string, combinator);
                return combinatorDeclaration;
            }
        }
    ]);
    return CombinatorDeclaration;
}(), _define_property(_CombinatorDeclaration, "name", "CombinatorDeclaration"), _CombinatorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29tYmluYXRvclZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9jb21iaW5hdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbWJpbmF0b3JEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgY29tYmluYXRvcikge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmNvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tYmluYXRvcjtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgY29tYmluYXRvclZlcmlmaWVzID0gdGhpcy52ZXJpZnlDb21iaW5hdG9yKCk7XG5cbiAgICBpZiAoY29tYmluYXRvclZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYWRkQ29tYmluYXRvcih0aGlzLmNvbWJpbmF0b3IpO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Q29tYmluYXRvcigpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5jb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuY29tYmluYXRvci5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVzID0gY29tYmluYXRvclZlcmlmaWVyLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21iaW5hdG9yRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgY29tYmluYXRvcik7XG5cbiAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwiY29tYmluYXRvciIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0Q29tYmluYXRvciIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJjb21iaW5hdG9yVmVyaWZpZXMiLCJ2ZXJpZnlDb21iaW5hdG9yIiwiYWRkQ29tYmluYXRvciIsImRlYnVnIiwic3RhdGVtZW50VmVyaWZpZXMiLCJjb21iaW5hdG9yU3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImNvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3IiLCJkb20iLCJub2RlQXNTdHJpbmciLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7aUVBSWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRS9CLFdBQWVBLElBQUFBLGdCQUFXLDBDQUFDO2FBQU1DLHNCQUNuQkMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsVUFBVTtnQ0FEZEo7UUFFN0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyw4QkFBOEIsSUFBSSxDQUFDSixTQUFTLElBQUksR0FBRztnQkFFekQsSUFBSSxDQUFDTixPQUFPLENBQUNXLEtBQUssQ0FBQyxBQUFDLGtCQUE2QyxPQUE1QkQsNkJBQTRCLGdDQUE4QixJQUFJLENBQUNULElBQUk7Z0JBRXhHLElBQU1XLHFCQUFxQixJQUFJLENBQUNDLGdCQUFnQjtnQkFFaEQsSUFBSUQsb0JBQW9CO29CQUN0QixJQUFJLENBQUNaLE9BQU8sQ0FBQ2MsYUFBYSxDQUFDLElBQUksQ0FBQ1gsVUFBVTtvQkFFMUNNLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNULE9BQU8sQ0FBQ2UsS0FBSyxDQUFDLEFBQUMsb0JBQStDLE9BQTVCTCw2QkFBNEIsOEJBQTRCLElBQUksQ0FBQ1QsSUFBSTtnQkFDMUc7Z0JBRUEsT0FBT1E7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRztnQkFFSixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDZCxVQUFVLENBQUNHLFNBQVM7Z0JBRWxELElBQUksQ0FBQ04sT0FBTyxDQUFDVyxLQUFLLENBQUMsQUFBQyxrQkFBa0MsT0FBakJNLGtCQUFpQixvQkFBa0IsSUFBSSxDQUFDaEIsSUFBSTtnQkFFakYsSUFBTWlCLFlBQVksSUFBSSxDQUFDZixVQUFVLENBQUNnQixZQUFZLElBQ3hDQyxnQkFBZ0JGLFVBQVViLE9BQU87Z0JBRXZDVyxvQkFBb0JLLG1CQUFrQixDQUFDQyxlQUFlLENBQUNGLGVBQWUsSUFBSSxDQUFDcEIsT0FBTztnQkFFbEYsSUFBSWdCLG1CQUFtQjtvQkFDckIsSUFBSSxDQUFDaEIsT0FBTyxDQUFDZSxLQUFLLENBQUMsQUFBQyxvQkFBb0MsT0FBakJFLGtCQUFpQixrQkFBZ0IsSUFBSSxDQUFDaEIsSUFBSTtnQkFDbkY7Z0JBRUEsT0FBT2U7WUFDVDs7OztZQUlPTyxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFeEIsT0FBTztnQkFDckUsSUFBTSxBQUFFeUIsYUFBZUMsWUFBRyxDQUFsQkQsWUFDRnhCLE9BQU91QiwyQkFDUHRCLFNBQVNGLFFBQVEyQixZQUFZLENBQUMxQixPQUM5QkUsYUFBYXNCLFdBQVdGLDZCQUE2QixDQUFDQywyQkFBMkJ4QixVQUNqRjRCLHdCQUF3QixJQUFJN0Isc0JBQXNCQyxTQUFTQyxNQUFNQyxRQUFRQztnQkFFL0UsT0FBT3lCO1lBQ1Q7Ozs7S0FWQSx5Q0FBT0MsUUFBTyJ9