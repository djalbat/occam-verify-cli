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
var _combinator = /*#__PURE__*/ _interop_require_default(require("../../statement/combinator"));
var _elements = require("../../../elements");
var _instance = require("../../../utilities/instance");
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
var _BracketedCombinatorStatement;
var _default = (0, _elements.define)((_BracketedCombinatorStatement = /*#__PURE__*/ function(CombinatorStatement) {
    _inherits(BracketedCombinatorStatement, CombinatorStatement);
    function BracketedCombinatorStatement() {
        _class_call_check(this, BracketedCombinatorStatement);
        return _call_super(this, BracketedCombinatorStatement, arguments);
    }
    _create_class(BracketedCombinatorStatement, [
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, assignments, stated, context) {
                var statementUnifies;
                var statementString = statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the bracketed combinator..."));
                statementUnifies = _get(_get_prototype_of(BracketedCombinatorStatement.prototype), "unifyStatement", this).call(this, statement, assignments, stated, context);
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
                var bracketedCombinatorStatement = (0, _instance.bracketedCombinatorStatementFromNothing)();
                return bracketedCombinatorStatement;
            }
        }
    ]);
    return BracketedCombinatorStatement;
}(_combinator.default), _define_property(_BracketedCombinatorStatement, "name", "BracketedCombinatorStatement"), _BracketedCombinatorStatement));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbGVtZW50L3N0YXRlbWVudC9jb21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbWJpbmF0b3JTdGF0ZW1lbnQgZnJvbSBcIi4uLy4uL3N0YXRlbWVudC9jb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudEZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9pbnN0YW5jZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudCBleHRlbmRzIENvbWJpbmF0b3JTdGF0ZW1lbnQge1xuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgYnJhY2tldGVkIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzdXBlci51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBicmFja2V0ZWQgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCcmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50XCI7XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnQgPSBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50RnJvbU5vdGhpbmcoKTtcblxuICAgIHJldHVybiBicmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJCcmFja2V0ZWRDb21iaW5hdG9yU3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZyb21Ob3RoaW5nIiwiYnJhY2tldGVkQ29tYmluYXRvclN0YXRlbWVudCIsImJyYWNrZXRlZENvbWJpbmF0b3JTdGF0ZW1lbnRGcm9tTm90aGluZyIsIkNvbWJpbmF0b3JTdGF0ZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OztpRUFMZ0M7d0JBRVQ7d0JBQ2lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV4RCxXQUFlQSxJQUFBQSxnQkFBTSxpREFBQzs7YUFBTUM7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7Ozs7WUFDMUJDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUNwRCxJQUFJQztnQkFFSixJQUFNQyxrQkFBa0JMLFVBQVVNLFNBQVM7Z0JBRTNDSCxRQUFRSSxLQUFLLENBQUMsQUFBQyxpQkFBZ0MsT0FBaEJGLGlCQUFnQjtnQkFFL0NELG1CQUFtQix1QkFSS04seUNBUUNDLGtCQUFOLElBQUssYUFBZ0JDLFdBQVdDLGFBQWFDLFFBQVFDO2dCQUV4RSxJQUFJQyxrQkFBa0I7b0JBQ3BCRCxRQUFRSyxLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJILGlCQUFnQjtnQkFDbkQ7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUlPSyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNQywrQkFBK0JDLElBQUFBLGlEQUF1QztnQkFFNUUsT0FBT0Q7WUFDVDs7OztFQXZCK0RFLG1CQUFtQixHQWlCbEYsZ0RBQU9DLFFBQU8ifQ==