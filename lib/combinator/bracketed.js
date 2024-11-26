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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _combinator1 = /*#__PURE__*/ _interop_require_default(require("../context/bracketed/combinator"));
var _unification = require("../utilities/unification");
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
var BracketedCombinator = /*#__PURE__*/ function(Combinator) {
    _inherits(BracketedCombinator, Combinator);
    function BracketedCombinator() {
        _class_call_check(this, BracketedCombinator);
        return _call_super(this, BracketedCombinator, arguments);
    }
    _create_class(BracketedCombinator, [
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, assignments, stated, context) {
                var statementUnified;
                var statementString = statement.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the bracketed combinator..."));
                var bracketedCombinator = this, combinator = bracketedCombinator, statementUnifiedWithCombinator = (0, _unification.unifyStatementWithCombinator)(statement, combinator, assignments, stated, context);
                statementUnified = statementUnifiedWithCombinator;
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the bracketed combinator."));
                }
                return statementUnified;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var Statement = _dom.default.Statement, bracketedStatementNode = _combinator1.default.getBracketedStatementNode(), statementNode = bracketedStatementNode, context = _combinator1.default, statement = Statement.fromStatementNode(statementNode, context), bracketedCombinator = new BracketedCombinator(statement);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IGNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2JyYWNrZXRlZC9jb21iaW5hdG9yXCI7XG5cbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYWNrZXRlZENvbWJpbmF0b3IgZXh0ZW5kcyBDb21iaW5hdG9yIHtcbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIGJyYWNrZXRlZCBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBjb25zdCBicmFja2V0ZWRDb21iaW5hdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgY29tYmluYXRvciA9IGJyYWNrZXRlZENvbWJpbmF0b3IsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvciA9IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3I7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlIGJyYWNrZXRlZCBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgYnJhY2tldGVkU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0LmdldEJyYWNrZXRlZFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IGNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29tYmluYXRvciA9IG5ldyBCcmFja2V0ZWRDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkJyYWNrZXRlZENvbWJpbmF0b3IiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImJyYWNrZXRlZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciIsImRlYnVnIiwiZnJvbU5vdGhpbmciLCJTdGF0ZW1lbnQiLCJkb20iLCJicmFja2V0ZWRTdGF0ZW1lbnROb2RlIiwiY29tYmluYXRvckJyYWNrZXRlZENvbnRleHQiLCJnZXRCcmFja2V0ZWRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MERBTkw7aUVBQ087a0VBQ2dCOzJCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlCLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDcEQsSUFBSUM7Z0JBRUosSUFBTUMsa0JBQWtCTCxVQUFVTSxTQUFTO2dCQUUzQ0gsUUFBUUksS0FBSyxDQUFDLEFBQUMsaUJBQWdDLE9BQWhCRixpQkFBZ0I7Z0JBRS9DLElBQU1HLHNCQUFzQixJQUFJLEVBQzFCQyxhQUFhRCxxQkFDYkUsaUNBQWlDQyxJQUFBQSx5Q0FBNEIsRUFBQ1gsV0FBV1MsWUFBWVIsYUFBYUMsUUFBUUM7Z0JBRWhIQyxtQkFBbUJNO2dCQUVuQixJQUFJTixrQkFBa0I7b0JBQ3BCRCxRQUFRUyxLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJQLGlCQUFnQjtnQkFDbkQ7Z0JBRUEsT0FBT0Q7WUFDVDs7OztZQUVPUyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNLEFBQUVDLFlBQWNDLFlBQUcsQ0FBakJELFdBQ0ZFLHlCQUF5QkMsb0JBQTBCLENBQUNDLHlCQUF5QixJQUM3RUMsZ0JBQWdCSCx3QkFDaEJiLFVBQVVjLG9CQUEwQixFQUNwQ2pCLFlBQVljLFVBQVVNLGlCQUFpQixDQUFDRCxlQUFlaEIsVUFDdkRLLHNCQUFzQixJQTNCWFYsb0JBMkJtQ0U7Z0JBRXBELE9BQU9RO1lBQ1Q7OztXQTlCbUJWO0VBQTRCdUIsbUJBQVUifQ==