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
var termNodeQuery = (0, _query.nodeQuery)("/term");
var EqualityUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(EqualityUnifier, Unifier);
    function EqualityUnifier() {
        _class_call_check(this, EqualityUnifier);
        return _call_super(this, EqualityUnifier, arguments);
    }
    _create_class(EqualityUnifier, [
        {
            key: "unify",
            value: function unify(leftTermNode, rightTermNode, context) {
                var equalityUnified;
                var leftNonTerminalNode = leftTermNode, rightNonTerminalNode = rightTermNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, context);
                equalityUnified = nonTerminalNodeUnified; ///
                return equalityUnified;
            }
        }
    ]);
    return EqualityUnifier;
}(_unifier.default);
_define_property(EqualityUnifier, "maps", [
    {
        generalNodeQuery: termNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(leftTermNode, rightTermNode, context) {
            var termUnifiedWithTerm;
            var leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);
            if (leftTermNodeMatchesRightTermNode) {
                termUnifiedWithTerm = true;
            } else {
                var equivalences = context.getEquivalences(), termNodes = [
                    leftTermNode,
                    rightTermNode
                ], equivalence = equivalences.findEquivalenceByTermNodes(termNodes);
                termUnifiedWithTerm = equivalence !== null;
            }
            if (!termUnifiedWithTerm) {
                var childNodesUnified = unifyChildNodes(leftTermNode, rightTermNode, context);
                termUnifiedWithTerm = childNodesUnified; ///
            }
            return termUnifiedWithTerm;
        }
    }
]);
var equalityUnifier = new EqualityUnifier();
var _default = equalityUnifier;
function unifyChildNodes(leftTermNode, rightTermNode, context) {
    var leftNonTerminalNode = leftTermNode, rightNonTerminalNode = rightTermNode, leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, childNodesUnified = equalityUnifier.unifyChildNodes(leftChildNodes, rightChildNodes, context);
    return childNodesUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKTtcblxuY2xhc3MgRXF1YWxpdHlVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eVVuaWZpZWQ7XG5cbiAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gbGVmdFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIGVxdWFsaXR5VW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5VW5pZmllZDtcbiAgfTtcblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LCAgLy8vXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSwgLy8vXG4gICAgICB1bmlmeTogKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdGVybVVuaWZpZWRXaXRoVGVybTtcblxuICAgICAgICBjb25zdCBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlKTtcblxuICAgICAgICBpZiAobGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUpIHtcbiAgICAgICAgICB0ZXJtVW5pZmllZFdpdGhUZXJtID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgICAgICAgIHRlcm1Ob2RlcyA9IFtcbiAgICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllZFdpdGhUZXJtID0gKGVxdWl2YWxlbmNlICE9PSBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGVybVVuaWZpZWRXaXRoVGVybSkge1xuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXNVbmlmaWVkID0gdW5pZnlDaGlsZE5vZGVzKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllZFdpdGhUZXJtID0gY2hpbGROb2Rlc1VuaWZpZWQ7IC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVkV2l0aFRlcm07XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBlcXVhbGl0eVVuaWZpZXIgPSBuZXcgRXF1YWxpdHlVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsaXR5VW5pZmllcjtcblxuZnVuY3Rpb24gdW5pZnlDaGlsZE5vZGVzKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gbGVmdFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGUgPSByaWdodFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBsZWZ0Q2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgcmlnaHRDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWQgPSBlcXVhbGl0eVVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGxlZnRDaGlsZE5vZGVzLCByaWdodENoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzVW5pZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiRXF1YWxpdHlVbmlmaWVyIiwidW5pZnkiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiY29udGV4dCIsImVxdWFsaXR5VW5pZmllZCIsImxlZnROb25UZXJtaW5hbE5vZGUiLCJyaWdodE5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwidGVybVVuaWZpZWRXaXRoVGVybSIsImxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJlcXVpdmFsZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJ0ZXJtTm9kZXMiLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwiY2hpbGROb2Rlc1VuaWZpZWQiLCJ1bmlmeUNoaWxkTm9kZXMiLCJlcXVhbGl0eVVuaWZpZXIiLCJsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJsZWZ0Q2hpbGROb2RlcyIsInJpZ2h0Q2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeURBOzs7ZUFBQTs7OzhEQXZEb0I7cUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVoQyxJQUFBLEFBQU1DLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLE9BQU87Z0JBQ3hDLElBQUlDO2dCQUVKLElBQU1DLHNCQUFzQkosY0FDdEJLLHVCQUF1QkosZUFDdkJLLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCxxQkFBcUJDLHNCQUFzQkg7Z0JBRXBHQyxrQkFBa0JHLHdCQUF3QixHQUFHO2dCQUU3QyxPQUFPSDtZQUNUOzs7V0FYSUw7RUFBd0JVLGdCQUFPO0FBYW5DLGlCQWJJVixpQkFhR1csUUFBTztJQUNaO1FBQ0VDLGtCQUFrQmQ7UUFDbEJlLG1CQUFtQmY7UUFDbkJHLE9BQU8sU0FBQ0MsY0FBY0MsZUFBZUM7WUFDbkMsSUFBSVU7WUFFSixJQUFNQyxtQ0FBbUNiLGFBQWFjLEtBQUssQ0FBQ2I7WUFFNUQsSUFBSVksa0NBQWtDO2dCQUNwQ0Qsc0JBQXNCO1lBQ3hCLE9BQU87Z0JBQ0wsSUFBTUcsZUFBZWIsUUFBUWMsZUFBZSxJQUN0Q0MsWUFBWTtvQkFDVmpCO29CQUNBQztpQkFDRCxFQUNEaUIsY0FBY0gsYUFBYUksMEJBQTBCLENBQUNGO2dCQUU1REwsc0JBQXVCTSxnQkFBZ0I7WUFDekM7WUFFQSxJQUFJLENBQUNOLHFCQUFxQjtnQkFDeEIsSUFBTVEsb0JBQW9CQyxnQkFBZ0JyQixjQUFjQyxlQUFlQztnQkFFdkVVLHNCQUFzQlEsbUJBQW1CLEdBQUc7WUFDOUM7WUFFQSxPQUFPUjtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1VLGtCQUFrQixJQUFJeEI7SUFFNUIsV0FBZXdCO0FBRWYsU0FBU0QsZ0JBQWdCckIsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDM0QsSUFBTUUsc0JBQXNCSixjQUN0QkssdUJBQXVCSixlQUN2QnNCLGdDQUFnQ25CLG9CQUFvQm9CLGFBQWEsSUFDakVDLGlDQUFpQ3BCLHFCQUFxQm1CLGFBQWEsSUFDbkVFLGlCQUFpQkgsK0JBQ2pCSSxrQkFBa0JGLGdDQUNsQkwsb0JBQW9CRSxnQkFBZ0JELGVBQWUsQ0FBQ0ssZ0JBQWdCQyxpQkFBaUJ6QjtJQUUzRixPQUFPa0I7QUFDVCJ9