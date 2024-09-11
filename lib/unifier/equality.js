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
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
var _termAgainstTerm = /*#__PURE__*/ _interop_require_default(require("../unify/termAgainstTerm"));
var _query = require("../utilities/query");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!");
var EqualityUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(EqualityUnifier, Unifier);
    function EqualityUnifier() {
        _class_call_check(this, EqualityUnifier);
        return _call_super(this, EqualityUnifier, arguments);
    }
    _create_class(EqualityUnifier, [
        {
            key: "unify",
            value: function unify(leftTermNode, rightTermNode, localContext) {
                var equalityUnified;
                var nonTerminalNodeA = leftTermNode, nonTerminalNodeB = rightTermNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);
                equalityUnified = nonTerminalNodeUnified; ///
                return equalityUnified;
            }
        }
    ]);
    return EqualityUnifier;
}(_unifier.default);
_define_property(EqualityUnifier, "maps", [
    {
        nodeQueryA: termNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: function(termNodeA, termNodeB, localContext) {
            var termUnifiedAgainstTerm;
            var leftTermNode = termNodeA, rightTermNode = termNodeB; ///
            termUnifiedAgainstTerm = (0, _termAgainstTerm.default)(leftTermNode, rightTermNode, localContext);
            if (!termUnifiedAgainstTerm) {
                var nonTerminalNodeA = termNodeA, nonTerminalNodeB = termNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = equalityUnifier.unifyChildNodes(childNodesA, childNodesB, localContext);
                termUnifiedAgainstTerm = childNodesVerified; ///
            }
            return termUnifiedAgainstTerm;
        }
    }
]);
var equalityUnifier = new EqualityUnifier();
var _default = equalityUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHVuaWZ5VGVybUFnYWluc3RUZXJtIGZyb20gXCIuLi91bmlmeS90ZXJtQWdhaW5zdFRlcm1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpO1xuXG5jbGFzcyBFcXVhbGl0eVVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHlVbmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBlcXVhbGl0eVVuaWZpZWQgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eVVuaWZpZWQ7XG4gIH07XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogdGVybU5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKHRlcm1Ob2RlQSwgdGVybU5vZGVCLCBsb2NhbENvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHRlcm1VbmlmaWVkQWdhaW5zdFRlcm07XG5cbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRlcm1Ob2RlQjsgIC8vL1xuXG4gICAgICAgIHRlcm1VbmlmaWVkQWdhaW5zdFRlcm0gPSB1bmlmeVRlcm1BZ2FpbnN0VGVybShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKCF0ZXJtVW5pZmllZEFnYWluc3RUZXJtKSB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRlcm1Ob2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IGVxdWFsaXR5VW5pZmllci51bmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgdGVybVVuaWZpZWRBZ2FpbnN0VGVybSA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybVVuaWZpZWRBZ2FpbnN0VGVybTtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IGVxdWFsaXR5VW5pZmllciA9IG5ldyBFcXVhbGl0eVVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXF1YWxpdHlVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJFcXVhbGl0eVVuaWZpZXIiLCJ1bmlmeSIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJsb2NhbENvbnRleHQiLCJlcXVhbGl0eVVuaWZpZWQiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJ0ZXJtTm9kZUEiLCJ0ZXJtTm9kZUIiLCJ0ZXJtVW5pZmllZEFnYWluc3RUZXJtIiwidW5pZnlUZXJtQWdhaW5zdFRlcm0iLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNBIiwiY2hpbGROb2Rlc0IiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJlcXVhbGl0eVVuaWZpZXIiLCJ1bmlmeUNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNEQTs7O2VBQUE7Ozs4REFwRG9CO3NFQUNhO3FCQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNQyxnQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsWUFBWTtnQkFDN0MsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CSixjQUNuQkssbUJBQW1CSixlQUNuQksseUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILGtCQUFrQkMsa0JBQWtCSDtnQkFFN0ZDLGtCQUFrQkcsd0JBQXdCLEdBQUc7Z0JBRTdDLE9BQU9IO1lBQ1Q7OztXQVhJTDtFQUF3QlUsZ0JBQU87QUFhbkMsaUJBYklWLGlCQWFHVyxRQUFPO0lBQ1o7UUFDRUMsWUFBWWQ7UUFDWmUsWUFBWWY7UUFDWkcsT0FBTyxTQUFDYSxXQUFXQyxXQUFXWDtZQUM1QixJQUFJWTtZQUVKLElBQU1kLGVBQWVZLFdBQ2ZYLGdCQUFnQlksV0FBWSxHQUFHO1lBRXJDQyx5QkFBeUJDLElBQUFBLHdCQUFvQixFQUFDZixjQUFjQyxlQUFlQztZQUUzRSxJQUFJLENBQUNZLHdCQUF3QjtnQkFDM0IsSUFBTVYsbUJBQW1CUSxXQUNuQlAsbUJBQW1CUSxXQUNuQkcsNkJBQTZCWixpQkFBaUJhLGFBQWEsSUFDM0RDLDZCQUE2QmIsaUJBQWlCWSxhQUFhLElBQzNERSxjQUFjSCw0QkFDZEksY0FBY0YsNEJBQ2RHLHFCQUFxQkMsZ0JBQWdCQyxlQUFlLENBQUNKLGFBQWFDLGFBQWFsQjtnQkFFckZZLHlCQUF5Qk8sb0JBQW9CLEdBQUc7WUFDbEQ7WUFFQSxPQUFPUDtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1RLGtCQUFrQixJQUFJeEI7SUFFNUIsV0FBZXdCIn0=