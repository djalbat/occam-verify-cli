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
var _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
var _verify = require("../../process/verify");
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
var _default = (0, _ontology.define)((_CombinatorDeclaration = /*#__PURE__*/ function(Declaration) {
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
                statementVerifies = (0, _verify.verifyStatement)(statementNode, context);
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
                var Combinator = _ontology.default.Combinator, node = combinatorDeclarationNode, string = context.nodeAsString(node), combinator = Combinator.fromCombinatorDeclarationNode(combinatorDeclarationNode, context), combinatorDeclaration = new CombinatorDeclaration(context, node, string, combinator);
                return combinatorDeclaration;
            }
        }
    ]);
    return CombinatorDeclaration;
}(_declaration.default), _define_property(_CombinatorDeclaration, "name", "CombinatorDeclaration"), _CombinatorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9kZWNsYXJhdGlvbi9jb21iaW5hdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgY29tYmluYXRvcikge1xuICAgIHN1cGVyKGNvbnRleHQsIG5vZGUsIHN0cmluZyk7XG5cbiAgICB0aGlzLmNvbWJpbmF0b3IgPSBjb21iaW5hdG9yO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb21iaW5hdG9yO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbWJpbmF0b3IgZGVjbGFyYXRpb24uLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JWZXJpZmllcyA9IHRoaXMudmVyaWZ5Q29tYmluYXRvcigpO1xuXG4gICAgaWYgKGNvbWJpbmF0b3JWZXJpZmllcykge1xuICAgICAgY29udGV4dC5hZGRDb21iaW5hdG9yKHRoaXMuY29tYmluYXRvcik7XG5cbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb21iaW5hdG9yIGRlY2xhcmF0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUNvbWJpbmF0b3IoKSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5jb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5jb21iaW5hdG9yLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpO1xuXG4gICAgc3RhdGVtZW50VmVyaWZpZXMgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvckRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlKGNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IENvbWJpbmF0b3IgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIG5vZGUgPSBjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZShjb21iaW5hdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29tYmluYXRvckRlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgY29tYmluYXRvcik7XG5cbiAgICByZXR1cm4gY29tYmluYXRvckRlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb21iaW5hdG9yRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsImNvbWJpbmF0b3IiLCJnZXRDb21iaW5hdG9yIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXROb2RlIiwiZ2V0Q29udGV4dCIsImNvbWJpbmF0b3JEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiY29tYmluYXRvclZlcmlmaWVzIiwidmVyaWZ5Q29tYmluYXRvciIsImFkZENvbWJpbmF0b3IiLCJkZWJ1ZyIsInN0YXRlbWVudFZlcmlmaWVzIiwiY29tYmluYXRvclN0cmluZyIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJmcm9tQ29tYmluYXRvckRlY2xhcmF0aW9uTm9kZSIsImNvbWJpbmF0b3JEZWNsYXJhdGlvbk5vZGUiLCJDb21iaW5hdG9yIiwib250b2xvZ3kiLCJub2RlQXNTdHJpbmciLCJjb21iaW5hdG9yRGVjbGFyYXRpb24iLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5xQjtrRUFDRztzQkFHUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFaEMsV0FBZUEsSUFBQUEsZ0JBQU0sMENBQUM7O2FBQU1DLHNCQUNkQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxVQUFVO2dDQURuQko7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFNQzs7UUFFckIsTUFBS0MsVUFBVSxHQUFHQTs7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsVUFBVTtZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CUCxVQUFVLElBQUksQ0FBQ1EsVUFBVSxJQUN6QkMsOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7Z0JBRTFEVixRQUFRVyxLQUFLLENBQUMsQUFBQyxrQkFBNkMsT0FBNUJGLDZCQUE0QixnQ0FBOEJSO2dCQUUxRixJQUFNVyxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0I7Z0JBRWhELElBQUlELG9CQUFvQjtvQkFDdEJaLFFBQVFjLGFBQWEsQ0FBQyxJQUFJLENBQUNYLFVBQVU7b0JBRXJDRyxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1pOLFFBQVFlLEtBQUssQ0FBQyxBQUFDLG9CQUErQyxPQUE1Qk4sNkJBQTRCLDhCQUE0QlI7Z0JBQzVGO2dCQUVBLE9BQU9LO1lBQ1Q7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUc7Z0JBRUosSUFBTWYsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVLElBQ3pCUyxtQkFBbUIsSUFBSSxDQUFDZCxVQUFVLENBQUNPLFNBQVM7Z0JBRWxEVixRQUFRVyxLQUFLLENBQUMsQUFBQyxrQkFBa0MsT0FBakJNLGtCQUFpQixvQkFBa0JoQjtnQkFFbkUsSUFBTWlCLFlBQVksSUFBSSxDQUFDZixVQUFVLENBQUNnQixZQUFZLElBQ3hDQyxnQkFBZ0JGLFVBQVVYLE9BQU87Z0JBRXZDUyxvQkFBb0JLLElBQUFBLHVCQUFlLEVBQUNELGVBQWVwQjtnQkFFbkQsSUFBSWdCLG1CQUFtQjtvQkFDckJoQixRQUFRZSxLQUFLLENBQUMsQUFBQyxvQkFBb0MsT0FBakJFLGtCQUFpQixrQkFBZ0JoQjtnQkFDckU7Z0JBRUEsT0FBT2U7WUFDVDs7OztZQUlPTSxLQUFBQTttQkFBUCxTQUFPQSw4QkFBOEJDLHlCQUF5QixFQUFFdkIsT0FBTztnQkFDckUsSUFBTSxBQUFFd0IsYUFBZUMsaUJBQVEsQ0FBdkJELFlBQ0Z2QixPQUFPc0IsMkJBQ1ByQixTQUFTRixRQUFRMEIsWUFBWSxDQUFDekIsT0FDOUJFLGFBQWFxQixXQUFXRiw2QkFBNkIsQ0FBQ0MsMkJBQTJCdkIsVUFDakYyQix3QkFBd0IsSUFBSTVCLHNCQUFzQkMsU0FBU0MsTUFBTUMsUUFBUUM7Z0JBRS9FLE9BQU93QjtZQUNUOzs7O0VBbEV3REMsb0JBQVcsR0F3RG5FLHlDQUFPQyxRQUFPIn0=