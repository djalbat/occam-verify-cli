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
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _instantiate = require("../../process/instantiate");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var _BracketedCombinator;
var _default = (0, _ontology.define)((_BracketedCombinator = /*#__PURE__*/ function(Combinator) {
    _inherits(BracketedCombinator, Combinator);
    function BracketedCombinator() {
        _class_call_check(this, BracketedCombinator);
        return _call_super(this, BracketedCombinator, arguments);
    }
    _create_class(BracketedCombinator, [
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, assignments, stated, context) {
                var statementUnifies;
                var statementString = statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the bracketed combinator..."));
                statementUnifies = _get(_get_prototype_of(BracketedCombinator.prototype), "unifyStatement", this).call(this, statement, assignments, stated, context);
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the bracketed combinator."));
                }
                return statementUnifies;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var Statement = _ontology.default.Statement, bracketedCombinatorStatementNode = (0, _instantiate.instantiateBracketedCombinatorStatement)(), string = _instantiate.bracketedCombinatorStatementString, node = bracketedCombinatorStatementNode, statement = new Statement(string, node), bracketedCombinator = new BracketedCombinator(statement);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default), _define_property(_BracketedCombinator, "name", "BracketedCombinator"), _BracketedCombinator));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9jb21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50U3RyaW5nLCBpbnN0YW50aWF0ZUJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQnJhY2tldGVkQ29tYmluYXRvciBleHRlbmRzIENvbWJpbmF0b3Ige1xuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgYnJhY2tldGVkIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzdXBlci51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBicmFja2V0ZWQgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCcmFja2V0ZWRDb21iaW5hdG9yXCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSA9IGluc3RhbnRpYXRlQnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0cmluZyA9IGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnRTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlID0gYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlKSxcbiAgICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yID0gbmV3IEJyYWNrZXRlZENvbWJpbmF0b3Ioc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBicmFja2V0ZWRDb21iaW5hdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJCcmFja2V0ZWRDb21iaW5hdG9yIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21Ob3RoaW5nIiwiU3RhdGVtZW50Iiwib250b2xvZ3kiLCJicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsImluc3RhbnRpYXRlQnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudCIsInN0cmluZyIsImJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnRTdHJpbmciLCJub2RlIiwiYnJhY2tldGVkQ29tYmluYXRvciIsIkNvbWJpbmF0b3IiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7aUVBQ0U7MkJBR3FFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVGLFdBQWVBLElBQUFBLGdCQUFNLHdDQUFDOzthQUFNQztnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7OztZQUMxQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ3BELElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQkwsVUFBVU0sU0FBUztnQkFFM0NILFFBQVFJLEtBQUssQ0FBQyxBQUFDLGlCQUFnQyxPQUFoQkYsaUJBQWdCO2dCQUUvQ0QsbUJBQW1CLHVCQVJLTixnQ0FRQ0Msa0JBQU4sSUFBSyxhQUFnQkMsV0FBV0MsYUFBYUMsUUFBUUM7Z0JBRXhFLElBQUlDLGtCQUFrQjtvQkFDcEJELFFBQVFLLEtBQUssQ0FBQyxBQUFDLG1CQUFrQyxPQUFoQkgsaUJBQWdCO2dCQUNuRDtnQkFFQSxPQUFPRDtZQUNUOzs7O1lBSU9LLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU0sQUFBRUMsWUFBY0MsaUJBQVEsQ0FBdEJELFdBQ0ZFLG1DQUFtQ0MsSUFBQUEsb0RBQXVDLEtBQzFFQyxTQUFTQywrQ0FBa0MsRUFDM0NDLE9BQU9KLGtDQUNQWixZQUFZLElBQUlVLFVBQVVJLFFBQVFFLE9BQ2xDQyxzQkFBc0IsSUFBSW5CLG9CQUFvQkU7Z0JBRXBELE9BQU9pQjtZQUNUOzs7O0VBNUJzREMsbUJBQVUsR0FpQmhFLHVDQUFPQyxRQUFPIn0=