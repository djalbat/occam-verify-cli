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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../../structure"));
var _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../../verifier/combinator"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _CombinatorDeclaration;
var _default = (0, _structure.define)((_CombinatorDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(CombinatorDeclaration, Declaration);
    function CombinatorDeclaration(context, node, string, combinator) {
        _class_call_check(this, CombinatorDeclaration);
        var _this;
        _this = _call_super(this, CombinatorDeclaration, [
            context,
            node,
            string
        ]);
        _this.combinator = combinator;
        return _this;
    }
    _create_class(CombinatorDeclaration, [
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
                var node = this.getNode(), context = this.getContext(), combinatorDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(combinatorDeclarationString, "' combinator declaration..."), node);
                var combinatorVerifies = this.verifyCombinator();
                if (combinatorVerifies) {
                    context.addCombinator(this.combinator);
                    verifies = true;
                }
                if (verifies) {
                    context.debug("...verified the '".concat(combinatorDeclarationString, "' combinator declaration."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyCombinator",
            value: function verifyCombinator() {
                var statementVerifies;
                var node = this.getNode(), context = this.getContext(), combinatorString = this.combinator.getString();
                context.trace("Verifying the '".concat(combinatorString, "' combinator..."), node);
                var statement = this.combinator.getStatement(), statementNode = statement.getNode();
                statementVerifies = _combinator.default.verifyStatement(statementNode, context);
                if (statementVerifies) {
                    context.debug("...verified the '".concat(combinatorString, "' combinator."), node);
                }
                return statementVerifies;
            }
        }
    ], [
        {
            key: "fromCombinatorDeclarationNode",
            value: function fromCombinatorDeclarationNode(combinatorDeclarationNode, context) {
                var Combinator = _structure.default.Combinator, node = combinatorDeclarationNode, string = context.nodeAsString(node), combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclaration = new CombinatorDeclaration(context, node, string, combinator);
                return combinatorDeclaration;
            }
        }
    ]);
    return CombinatorDeclaration;
}(_declaration.default), _define_property(_CombinatorDeclaration, "name", "CombinatorDeclaration"), _CombinatorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvZGVjbGFyYXRpb24vY29tYmluYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vLi4vc3RydWN0dXJlXCI7XG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9zdHJ1Y3R1cmVcIjtcblxuaW1wb3J0IGNvbWJpbmF0b3JWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvY29tYmluYXRvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tYmluYXRvckRlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGNvbWJpbmF0b3IpIHtcbiAgICBzdXBlcihjb250ZXh0LCBub2RlLCBzdHJpbmcpO1xuICAgIHRoaXMuY29tYmluYXRvciA9IGNvbWJpbmF0b3I7XG4gIH1cblxuICBnZXRDb21iaW5hdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbWJpbmF0b3I7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tYmluYXRvckRlY2xhcmF0aW9uU3RyaW5nfScgY29tYmluYXRvciBkZWNsYXJhdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgY29tYmluYXRvclZlcmlmaWVzID0gdGhpcy52ZXJpZnlDb21iaW5hdG9yKCk7XG5cbiAgICBpZiAoY29tYmluYXRvclZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmFkZENvbWJpbmF0b3IodGhpcy5jb21iaW5hdG9yKTtcblxuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Q29tYmluYXRvcigpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmNvbWJpbmF0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmNvbWJpbmF0b3IuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCk7XG5cbiAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IGNvbWJpbmF0b3JWZXJpZmllci52ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvckRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICBub2RlID0gY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUoY29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29tYmluYXRvckRlY2xhcmF0aW9uID0gbmV3IENvbWJpbmF0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGNvbWJpbmF0b3IpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tYmluYXRvckRlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJjb21iaW5hdG9yIiwiZ2V0Q29tYmluYXRvciIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Tm9kZSIsImdldENvbnRleHQiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImNvbWJpbmF0b3JWZXJpZmllcyIsInZlcmlmeUNvbWJpbmF0b3IiLCJhZGRDb21iaW5hdG9yIiwiZGVidWciLCJzdGF0ZW1lbnRWZXJpZmllcyIsImNvbWJpbmF0b3JTdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiY29tYmluYXRvclZlcmlmaWVyIiwidmVyaWZ5U3RhdGVtZW50IiwiZnJvbUNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29tYmluYXRvciIsInN0cnVjdHVyZSIsIm5vZGVBc1N0cmluZyIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7aUVBUHNCO2tFQUNFO2lFQUlPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQixXQUFlQSxJQUFBQSxpQkFBTSwwQ0FBQzs7YUFBTUMsc0JBQ2RDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFVBQVU7Z0NBRG5CSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQU1DOztRQUNyQixNQUFLQyxVQUFVLEdBQUdBOzs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVLElBQ3pCQyw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQkFFMURWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLGtCQUE2QyxPQUE1QkYsNkJBQTRCLGdDQUE4QlI7Z0JBRTFGLElBQU1XLHFCQUFxQixJQUFJLENBQUNDLGdCQUFnQjtnQkFFaEQsSUFBSUQsb0JBQW9CO29CQUN0QlosUUFBUWMsYUFBYSxDQUFDLElBQUksQ0FBQ1gsVUFBVTtvQkFFckNHLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWk4sUUFBUWUsS0FBSyxDQUFDLEFBQUMsb0JBQStDLE9BQTVCTiw2QkFBNEIsOEJBQTRCUjtnQkFDNUY7Z0JBRUEsT0FBT0s7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRztnQkFFSixJQUFNZixPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQlAsVUFBVSxJQUFJLENBQUNRLFVBQVUsSUFDekJTLG1CQUFtQixJQUFJLENBQUNkLFVBQVUsQ0FBQ08sU0FBUztnQkFFbERWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLGtCQUFrQyxPQUFqQk0sa0JBQWlCLG9CQUFrQmhCO2dCQUVuRSxJQUFNaUIsWUFBWSxJQUFJLENBQUNmLFVBQVUsQ0FBQ2dCLFlBQVksSUFDeENDLGdCQUFnQkYsVUFBVVgsT0FBTztnQkFFdkNTLG9CQUFvQkssbUJBQWtCLENBQUNDLGVBQWUsQ0FBQ0YsZUFBZXBCO2dCQUV0RSxJQUFJZ0IsbUJBQW1CO29CQUNyQmhCLFFBQVFlLEtBQUssQ0FBQyxBQUFDLG9CQUFvQyxPQUFqQkUsa0JBQWlCLGtCQUFnQmhCO2dCQUNyRTtnQkFFQSxPQUFPZTtZQUNUOzs7O1lBSU9PLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUV4QixPQUFPO2dCQUNyRSxJQUFNLEFBQUV5QixhQUFlQyxrQkFBUyxDQUF4QkQsWUFDRnhCLE9BQU91QiwyQkFDUHRCLFNBQVNGLFFBQVEyQixZQUFZLENBQUMxQixPQUM5QkUsYUFBYXNCLFdBQVdGLDZCQUE2QixDQUFDQywyQkFBMkJ4QixVQUNqRjRCLHdCQUF3QixJQUFJN0Isc0JBQXNCQyxTQUFTQyxNQUFNQyxRQUFRQztnQkFFL0UsT0FBT3lCO1lBQ1Q7Ozs7RUFqRXdEQyxvQkFBVyxHQXVEbkUseUNBQU9DLFFBQU8ifQ==