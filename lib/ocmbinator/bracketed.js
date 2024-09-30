"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return BracketedCombinator;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
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
                var Statement = _shim.default.Statement, statementNode = _bracketed.default, statement = Statement.fromStatementNode(statementNode, fileContext), bracketedCombinator = new BracketedCombinator(statement);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vY21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudE5vZGUgZnJvbSBcIi4uL25vZGUvc3RhdGVtZW50L2NvbWJpbmF0b3IvYnJhY2tldGVkXCI7XG5cbmltcG9ydCB7IGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnRTdHJpbmcgfSBmcm9tIFwiLi4vbm9kZS9zdGF0ZW1lbnQvY29tYmluYXRvci9icmFja2V0ZWRcIjtcblxuY29uc3QgZmlsZUNvbnRleHQgPSB7XG4gIG5vZGVBc1N0cmluZzogKG5vZGUpID0+IHtcbiAgICBjb25zdCBzdHJpbmcgPSBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50U3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFja2V0ZWRDb21iaW5hdG9yIGV4dGVuZHMgQ29tYmluYXRvciB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGJyYWNrZXRlZENvbWJpbmF0b3IgPSBuZXcgQnJhY2tldGVkQ29tYmluYXRvcihzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGJyYWNrZXRlZENvbWJpbmF0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJCcmFja2V0ZWRDb21iaW5hdG9yIiwiZmlsZUNvbnRleHQiLCJub2RlQXNTdHJpbmciLCJub2RlIiwic3RyaW5nIiwiYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudFN0cmluZyIsImZyb21Ob3RoaW5nIiwiU3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudE5vZGUiLCJicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwiYnJhY2tldGVkQ29tYmluYXRvciIsIkNvbWJpbmF0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OzsyREFkSjtpRUFDTTtpRUFDc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QyxJQUFNQyxjQUFjO0lBQ2xCQyxjQUFjLFNBQUNDO1FBQ2IsSUFBTUMsU0FBU0MsNkNBQWtDLEVBQUcsR0FBRztRQUV2RCxPQUFPRDtJQUNUO0FBQ0Y7QUFFZSxJQUFBLEFBQU1KLG9DQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDWk0sS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTSxBQUFFQyxZQUFjQyxhQUFJLENBQWxCRCxXQUNGRSxnQkFBZ0JDLGtCQUFnQyxFQUNoREMsWUFBWUosVUFBVUssaUJBQWlCLENBQUNILGVBQWVSLGNBQ3ZEWSxzQkFBc0IsSUFMWGIsb0JBS21DVztnQkFFcEQsT0FBT0U7WUFDVDs7O1dBUm1CYjtFQUE0QmMsbUJBQVUifQ==