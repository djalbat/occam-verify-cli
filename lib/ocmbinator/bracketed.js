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
var _statement = /*#__PURE__*/ _interop_require_default(require("../statement"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _bracketed = /*#__PURE__*/ _interop_require_wildcard(require("../node/statement/combinator/bracketed"));
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
var fileContext = {
    nodeAsString: function(node) {
        var string = _bracketed.bracketedCombinatorStatementString; ///
        return string;
    }
};
var BracketedCombinator = /*#__PURE__*/ function(Combinator) {
    _inherits(BracketedCombinator, Combinator);
    function BracketedCombinator() {
        _class_call_check(this, BracketedCombinator);
        return _call_super(this, BracketedCombinator, arguments);
    }
    _create_class(BracketedCombinator, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var statementNode = _bracketed.default, statement = _statement.default.fromStatementNode(statementNode, fileContext), bracketedCombinator = new BracketedCombinator(statement);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);
var bracketedCombinator = BracketedCombinator.fromNothing();
var _default = bracketedCombinator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vY21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN0YXRlbWVudCBmcm9tIFwiLi4vc3RhdGVtZW50XCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnROb2RlIGZyb20gXCIuLi9ub2RlL3N0YXRlbWVudC9jb21iaW5hdG9yL2JyYWNrZXRlZFwiO1xuXG5pbXBvcnQgeyBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50U3RyaW5nIH0gZnJvbSBcIi4uL25vZGUvc3RhdGVtZW50L2NvbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5cbmNvbnN0IGZpbGVDb250ZXh0ID0ge1xuICBub2RlQXNTdHJpbmc6IChub2RlKSA9PiB7XG4gICAgY29uc3Qgc3RyaW5nID0gYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudFN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxufTtcblxuY2xhc3MgQnJhY2tldGVkQ29tYmluYXRvciBleHRlbmRzIENvbWJpbmF0b3Ige1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBicmFja2V0ZWRDb21iaW5hdG9yID0gbmV3IEJyYWNrZXRlZENvbWJpbmF0b3Ioc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBicmFja2V0ZWRDb21iaW5hdG9yO1xuICB9XG59XG5cbmNvbnN0IGJyYWNrZXRlZENvbWJpbmF0b3IgPSBCcmFja2V0ZWRDb21iaW5hdG9yLmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGJyYWNrZXRlZENvbWJpbmF0b3I7XG4iXSwibmFtZXMiOlsiZmlsZUNvbnRleHQiLCJub2RlQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwiYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudFN0cmluZyIsIkJyYWNrZXRlZENvbWJpbmF0b3IiLCJmcm9tTm90aGluZyIsInN0YXRlbWVudE5vZGUiLCJicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudCIsIlN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwiYnJhY2tldGVkQ29tYmluYXRvciIsIkNvbWJpbmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRCQTs7O2VBQUE7OztnRUExQnNCO2lFQUNDO2lFQUNzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTdDLElBQU1BLGNBQWM7SUFDbEJDLGNBQWMsU0FBQ0M7UUFDYixJQUFNQyxTQUFTQyw2Q0FBa0MsRUFBRyxHQUFHO1FBRXZELE9BQU9EO0lBQ1Q7QUFDRjtBQUVBLElBQUEsQUFBTUUsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNHQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQyxnQkFBZ0JDLGtCQUFnQyxFQUNoREMsWUFBWUMsa0JBQVMsQ0FBQ0MsaUJBQWlCLENBQUNKLGVBQWVQLGNBQ3ZEWSxzQkFBc0IsSUFKMUJQLG9CQUlrREk7Z0JBRXBELE9BQU9HO1lBQ1Q7OztXQVBJUDtFQUE0QlEsbUJBQVU7QUFVNUMsSUFBTUQsc0JBQXNCUCxvQkFBb0JDLFdBQVc7SUFFM0QsV0FBZU0ifQ==