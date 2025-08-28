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
    function CombinatorDeclaration(context, string, combinator) {
        _class_call_check(this, CombinatorDeclaration);
        this.context = context;
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
                this.context.trace("Verifying the '".concat(combinatorDeclarationString, "' combinator declaration..."));
                var combinatorVerifies = this.verifyCombinator();
                if (combinatorVerifies) {
                    this.context.addCombinator(this.combinator);
                    verifies = true;
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(combinatorDeclarationString, "' combinator declaration."));
                }
                return verifies;
            }
        },
        {
            key: "verifyCombinator",
            value: function verifyCombinator() {
                var statementVerifies;
                var combinatorString = this.combinator.getString();
                this.context.trace("Verifying the '".concat(combinatorString, "' combinator..."));
                var statement = this.combinator.getStatement(), statementNode = statement.getNode();
                statementVerifies = _combinator.default.verifyStatement(statementNode, this.context);
                if (statementVerifies) {
                    this.context.debug("...verified the '".concat(combinatorString, "' combinator."));
                }
                return statementVerifies;
            }
        }
    ], [
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
                var Combinator = _dom.default.Combinator, node = combinatorDeclarationNode, string = context.nodeAsString(node), combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclaration = new CombinatorDeclaration(context, string, combinator);
                return combinatorDeclaration;
            }
        }
    ]);
    return CombinatorDeclaration;
}(), _define_property(_CombinatorDeclaration, "name", "CombinatorDeclaration"), _CombinatorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29tYmluYXRvclZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9jb21iaW5hdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbWJpbmF0b3JEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgY29tYmluYXRvcikge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5jb21iaW5hdG9yID0gY29tYmluYXRvcjtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRDb21iaW5hdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbWJpbmF0b3I7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbWJpbmF0b3IoKTtcblxuICAgIGlmIChjb21iaW5hdG9yVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5hZGRDb21iaW5hdG9yKHRoaXMuY29tYmluYXRvcik7XG5cbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Q29tYmluYXRvcigpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5jb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IGNvbWJpbmF0b3JWZXJpZmllci52ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgdGhpcy5jb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbWJpbmF0b3JEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBDb21iaW5hdG9yIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb21iaW5hdG9yRGVjbGFyYXRpb24oY29udGV4dCwgc3RyaW5nLCBjb21iaW5hdG9yKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsImNvbWJpbmF0b3IiLCJnZXRDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Q29tYmluYXRvciIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJjb21iaW5hdG9yVmVyaWZpZXMiLCJ2ZXJpZnlDb21iaW5hdG9yIiwiYWRkQ29tYmluYXRvciIsImRlYnVnIiwic3RhdGVtZW50VmVyaWZpZXMiLCJjb21iaW5hdG9yU3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJjb21iaW5hdG9yVmVyaWZpZXIiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb21iaW5hdG9yIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImNvbWJpbmF0b3JEZWNsYXJh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