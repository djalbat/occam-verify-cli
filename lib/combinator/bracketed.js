"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    bracketedStatementNode: function() {
        return bracketedStatementNode;
    },
    default: function() {
        return BracketedCombinator;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
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
var combinatorBracketedContext = _combinator1.default.fromNothing();
var bracketedStatementNode = combinatorBracketedContext.getBracketedStatementNode(); ///
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
                var Statement = _shim.default.Statement, statementNode = bracketedStatementNode, context = combinatorBracketedContext, statement = Statement.fromStatementNode(statementNode, context), bracketedCombinator = new BracketedCombinator(statement);
                return bracketedCombinator;
            }
        }
    ]);
    return BracketedCombinator;
}(_combinator.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21iaW5hdG9yL2JyYWNrZXRlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29tYmluYXRvckJyYWNrZXRlZENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvYnJhY2tldGVkL2NvbWJpbmF0b3JcIjtcblxuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciB9IGZyb20gXCIuLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcblxuY29uc3QgY29tYmluYXRvckJyYWNrZXRlZENvbnRleHQgPSBDb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgY29uc3QgYnJhY2tldGVkU3RhdGVtZW50Tm9kZSA9IGNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0LmdldEJyYWNrZXRlZFN0YXRlbWVudE5vZGUoKTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFja2V0ZWRDb21iaW5hdG9yIGV4dGVuZHMgQ29tYmluYXRvciB7XG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBicmFja2V0ZWQgY29tYmluYXRvci4uLmApO1xuXG4gICAgY29uc3QgYnJhY2tldGVkQ29tYmluYXRvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3IgPSBicmFja2V0ZWRDb21iaW5hdG9yLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3IgPSB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yKHN0YXRlbWVudCwgY29tYmluYXRvciwgYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZFdpdGhDb21iaW5hdG9yO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSBicmFja2V0ZWQgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gYnJhY2tldGVkU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IGNvbWJpbmF0b3JCcmFja2V0ZWRDb250ZXh0LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgYnJhY2tldGVkQ29tYmluYXRvciA9IG5ldyBCcmFja2V0ZWRDb21iaW5hdG9yKHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gYnJhY2tldGVkQ29tYmluYXRvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImJyYWNrZXRlZFN0YXRlbWVudE5vZGUiLCJCcmFja2V0ZWRDb21iaW5hdG9yIiwiY29tYmluYXRvckJyYWNrZXRlZENvbnRleHQiLCJDb21iaW5hdG9yQnJhY2tldGVkQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiZ2V0QnJhY2tldGVkU3RhdGVtZW50Tm9kZSIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYnJhY2tldGVkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIiwiZGVidWciLCJTdGF0ZW1lbnQiLCJzaGltIiwic3RhdGVtZW50Tm9kZSIsImZyb21TdGF0ZW1lbnROb2RlIiwiQ29tYmluYXRvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBVWFBLHNCQUFzQjtlQUF0QkE7OztlQUVRQzs7OzJEQVZKO2lFQUNNO2tFQUNnQjsyQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNQyw2QkFBNkJDLG9CQUEwQixDQUFDQyxXQUFXO0FBRWxFLElBQU1KLHlCQUF5QkUsMkJBQTJCRyx5QkFBeUIsSUFBSyxHQUFHO0FBRW5GLElBQUEsQUFBTUosb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkssS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLE9BQU87Z0JBQ3BELElBQUlDO2dCQUVKLElBQU1DLGtCQUFrQkwsVUFBVU0sU0FBUztnQkFFM0NILFFBQVFJLEtBQUssQ0FBQyxBQUFDLGlCQUFnQyxPQUFoQkYsaUJBQWdCO2dCQUUvQyxJQUFNRyxzQkFBc0IsSUFBSSxFQUMxQkMsYUFBYUQscUJBQ2JFLGlDQUFpQ0MsSUFBQUEseUNBQTRCLEVBQUNYLFdBQVdTLFlBQVlSLGFBQWFDLFFBQVFDO2dCQUVoSEMsbUJBQW1CTTtnQkFFbkIsSUFBSU4sa0JBQWtCO29CQUNwQkQsUUFBUVMsS0FBSyxDQUFDLEFBQUMsbUJBQWtDLE9BQWhCUCxpQkFBZ0I7Z0JBQ25EO2dCQUVBLE9BQU9EO1lBQ1Q7Ozs7WUFFT1AsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTSxBQUFFZ0IsWUFBY0MsYUFBSSxDQUFsQkQsV0FDRkUsZ0JBQWdCdEIsd0JBQ2hCVSxVQUFVUiw0QkFDVkssWUFBWWEsVUFBVUcsaUJBQWlCLENBQUNELGVBQWVaLFVBQ3ZESyxzQkFBc0IsSUExQlhkLG9CQTBCbUNNO2dCQUVwRCxPQUFPUTtZQUNUOzs7V0E3Qm1CZDtFQUE0QnVCLG1CQUFVIn0=