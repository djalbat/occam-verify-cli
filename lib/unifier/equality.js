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
                var nonTerminalNodeA = leftTermNode, nonTerminalNodeB = rightTermNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, function() {
                    var unifiedAhead = true;
                    return unifiedAhead;
                });
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
        unify: function(termNodeA, termNodeB, localContext, unifyAhead) {
            var termVerifiedAgainstTerm;
            var leftTermNode = termNodeA, rightTermNode = termNodeB; ///
            termVerifiedAgainstTerm = (0, _termAgainstTerm.default)(leftTermNode, rightTermNode, localContext, unifyAhead);
            if (!termVerifiedAgainstTerm) {
                var nonTerminalNodeA = termNodeA, nonTerminalNodeB = termNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = equalityUnifier.unifyChildNodes(childNodesA, childNodesB, localContext, unifyAhead);
                termVerifiedAgainstTerm = childNodesVerified; ///
            }
            return termVerifiedAgainstTerm;
        }
    }
]);
var equalityUnifier = new EqualityUnifier();
var _default = equalityUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IHVuaWZ5VGVybUFnYWluc3RUZXJtIGZyb20gXCIuLi91bmlmeS90ZXJtQWdhaW5zdFRlcm1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpO1xuXG5jbGFzcyBFcXVhbGl0eVVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHlVbmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdW5pZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHVuaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGVxdWFsaXR5VW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5VW5pZmllZDtcbiAgfTtcblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5QjogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAodGVybU5vZGVBLCB0ZXJtTm9kZUIsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkgPT4ge1xuICAgICAgICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdFRlcm07XG5cbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRlcm1Ob2RlQjsgIC8vL1xuXG4gICAgICAgIHRlcm1WZXJpZmllZEFnYWluc3RUZXJtID0gdW5pZnlUZXJtQWdhaW5zdFRlcm0obGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBsb2NhbENvbnRleHQsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgIGlmICghdGVybVZlcmlmaWVkQWdhaW5zdFRlcm0pIHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gdGVybU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gZXF1YWxpdHlVbmlmaWVyLnVuaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCk7XG5cbiAgICAgICAgICB0ZXJtVmVyaWZpZWRBZ2FpbnN0VGVybSA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdFRlcm07XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBlcXVhbGl0eVVuaWZpZXIgPSBuZXcgRXF1YWxpdHlVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsaXR5VW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiRXF1YWxpdHlVbmlmaWVyIiwidW5pZnkiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwibG9jYWxDb250ZXh0IiwiZXF1YWxpdHlVbmlmaWVkIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJ1bmlmaWVkQWhlYWQiLCJVbmlmaWVyIiwibWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwidGVybU5vZGVBIiwidGVybU5vZGVCIiwidW5pZnlBaGVhZCIsInRlcm1WZXJpZmllZEFnYWluc3RUZXJtIiwidW5pZnlUZXJtQWdhaW5zdFRlcm0iLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNBIiwiY2hpbGROb2Rlc0IiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJlcXVhbGl0eVVuaWZpZXIiLCJ1bmlmeUNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBEQTs7O2VBQUE7Ozs4REF4RG9CO3NFQUNhO3FCQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNQyxnQ0FBRCxBQUFMO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxZQUFZO2dCQUM3QyxJQUFJQztnQkFFSixJQUFNQyxtQkFBbUJKLGNBQ25CSyxtQkFBbUJKLGVBQ25CSyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCQyxrQkFBa0JILGNBQWM7b0JBQ25HLElBQU1NLGVBQWU7b0JBRXJCLE9BQU9BO2dCQUNUO2dCQUVOTCxrQkFBa0JHLHdCQUF3QixHQUFHO2dCQUU3QyxPQUFPSDtZQUNUOzs7V0FmSUw7RUFBd0JXLGdCQUFPO0FBaUJuQyxpQkFqQklYLGlCQWlCR1ksUUFBTztJQUNaO1FBQ0VDLFlBQVlmO1FBQ1pnQixZQUFZaEI7UUFDWkcsT0FBTyxTQUFDYyxXQUFXQyxXQUFXWixjQUFjYTtZQUMxQyxJQUFJQztZQUVKLElBQU1oQixlQUFlYSxXQUNmWixnQkFBZ0JhLFdBQVksR0FBRztZQUVyQ0UsMEJBQTBCQyxJQUFBQSx3QkFBb0IsRUFBQ2pCLGNBQWNDLGVBQWVDLGNBQWNhO1lBRTFGLElBQUksQ0FBQ0MseUJBQXlCO2dCQUM1QixJQUFNWixtQkFBbUJTLFdBQ25CUixtQkFBbUJTLFdBQ25CSSw2QkFBNkJkLGlCQUFpQmUsYUFBYSxJQUMzREMsNkJBQTZCZixpQkFBaUJjLGFBQWEsSUFDM0RFLGNBQWNILDRCQUNkSSxjQUFjRiw0QkFDZEcscUJBQXFCQyxnQkFBZ0JDLGVBQWUsQ0FBQ0osYUFBYUMsYUFBYXBCLGNBQWNhO2dCQUVuR0MsMEJBQTBCTyxvQkFBb0IsR0FBRztZQUNuRDtZQUVBLE9BQU9QO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTVEsa0JBQWtCLElBQUkxQjtJQUU1QixXQUFlMEIifQ==