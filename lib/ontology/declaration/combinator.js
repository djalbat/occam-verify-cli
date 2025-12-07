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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
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
var _default = (0, _ontology.define)((_CombinatorDeclaration = /*#__PURE__*/ function() {
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
                var combinatorDeclarationString = this.string; ///
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
                var Combinator = _ontology.default.Combinator, node = combinatorDeclarationNode, string = context.nodeAsString(node), combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclaration = new CombinatorDeclaration(context, node, string, combinator);
                return combinatorDeclaration;
            }
        }
    ]);
    return CombinatorDeclaration;
}(), _define_property(_CombinatorDeclaration, "name", "CombinatorDeclaration"), _CombinatorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9kZWNsYXJhdGlvbi9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgY29tYmluYXRvclZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9jb21iaW5hdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5jb21iaW5hdG9yID0gY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRDb21iaW5hdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbWJpbmF0b3I7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgY29tYmluYXRvclZlcmlmaWVzID0gdGhpcy52ZXJpZnlDb21iaW5hdG9yKCk7XG5cbiAgICBpZiAoY29tYmluYXRvclZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuYWRkQ29tYmluYXRvcih0aGlzLmNvbWJpbmF0b3IpO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Q29tYmluYXRvcigpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5jb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuY29tYmluYXRvci5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKTtcblxuICAgIHN0YXRlbWVudFZlcmlmaWVzID0gY29tYmluYXRvclZlcmlmaWVyLnZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21iaW5hdG9yRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgQ29tYmluYXRvciB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb21iaW5hdG9yRGVjbGFyYXRpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCBjb21iaW5hdG9yKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwiY29tYmluYXRvciIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0Q29tYmluYXRvciIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJjb21iaW5hdG9yVmVyaWZpZXMiLCJ2ZXJpZnlDb21iaW5hdG9yIiwiYWRkQ29tYmluYXRvciIsImRlYnVnIiwic3RhdGVtZW50VmVyaWZpZXMiLCJjb21iaW5hdG9yU3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImNvbWJpbmF0b3JWZXJpZmllciIsInZlcmlmeVN0YXRlbWVudCIsImZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsIkNvbWJpbmF0b3IiLCJvbnRvbG9neSIsIm5vZGVBc1N0cmluZyIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5xQjtpRUFJVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFL0IsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7YUFBTUMsc0JBQ2RDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFVBQVU7Z0NBRG5CSjtRQUV4QixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osT0FBTztZQUNyQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osVUFBVTtZQUN4Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLDhCQUE4QixJQUFJLENBQUNSLE1BQU0sRUFBRyxHQUFHO2dCQUVyRCxJQUFJLENBQUNGLE9BQU8sQ0FBQ1csS0FBSyxDQUFDLEFBQUMsa0JBQTZDLE9BQTVCRCw2QkFBNEIsZ0NBQThCLElBQUksQ0FBQ1QsSUFBSTtnQkFFeEcsSUFBTVcscUJBQXFCLElBQUksQ0FBQ0MsZ0JBQWdCO2dCQUVoRCxJQUFJRCxvQkFBb0I7b0JBQ3RCLElBQUksQ0FBQ1osT0FBTyxDQUFDYyxhQUFhLENBQUMsSUFBSSxDQUFDWCxVQUFVO29CQUUxQ00sV0FBVztnQkFDYjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaLElBQUksQ0FBQ1QsT0FBTyxDQUFDZSxLQUFLLENBQUMsQUFBQyxvQkFBK0MsT0FBNUJMLDZCQUE0Qiw4QkFBNEIsSUFBSSxDQUFDVCxJQUFJO2dCQUMxRztnQkFFQSxPQUFPUTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlHO2dCQUVKLElBQU1DLG1CQUFtQixJQUFJLENBQUNkLFVBQVUsQ0FBQ0csU0FBUztnQkFFbEQsSUFBSSxDQUFDTixPQUFPLENBQUNXLEtBQUssQ0FBQyxBQUFDLGtCQUFrQyxPQUFqQk0sa0JBQWlCLG9CQUFrQixJQUFJLENBQUNoQixJQUFJO2dCQUVqRixJQUFNaUIsWUFBWSxJQUFJLENBQUNmLFVBQVUsQ0FBQ2dCLFlBQVksSUFDeENDLGdCQUFnQkYsVUFBVWIsT0FBTztnQkFFdkNXLG9CQUFvQkssbUJBQWtCLENBQUNDLGVBQWUsQ0FBQ0YsZUFBZSxJQUFJLENBQUNwQixPQUFPO2dCQUVsRixJQUFJZ0IsbUJBQW1CO29CQUNyQixJQUFJLENBQUNoQixPQUFPLENBQUNlLEtBQUssQ0FBQyxBQUFDLG9CQUFvQyxPQUFqQkUsa0JBQWlCLGtCQUFnQixJQUFJLENBQUNoQixJQUFJO2dCQUNuRjtnQkFFQSxPQUFPZTtZQUNUOzs7O1lBSU9PLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUV4QixPQUFPO2dCQUNyRSxJQUFNLEFBQUV5QixhQUFlQyxpQkFBUSxDQUF2QkQsWUFDRnhCLE9BQU91QiwyQkFDUHRCLFNBQVNGLFFBQVEyQixZQUFZLENBQUMxQixPQUM5QkUsYUFBYXNCLFdBQVdGLDZCQUE2QixDQUFDQywyQkFBMkJ4QixVQUNqRjRCLHdCQUF3QixJQUFJN0Isc0JBQXNCQyxTQUFTQyxNQUFNQyxRQUFRQztnQkFFL0UsT0FBT3lCO1lBQ1Q7Ozs7S0FWQSx5Q0FBT0MsUUFBTyJ9