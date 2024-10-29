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
var _equivalences = require("../utilities/equivalences");
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
                ], equivalence = (0, _equivalences.findEquivalenceByTermNodes)(equivalences, termNodes);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZXF1aXZhbGVuY2VzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKTtcblxuY2xhc3MgRXF1YWxpdHlVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eVVuaWZpZWQ7XG5cbiAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gbGVmdFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBjb250ZXh0KTtcblxuICAgIGVxdWFsaXR5VW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5VW5pZmllZDtcbiAgfTtcblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LCAgLy8vXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSwgLy8vXG4gICAgICB1bmlmeTogKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdGVybVVuaWZpZWRXaXRoVGVybTtcblxuICAgICAgICBjb25zdCBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZS5tYXRjaChyaWdodFRlcm1Ob2RlKTtcblxuICAgICAgICBpZiAobGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUpIHtcbiAgICAgICAgICB0ZXJtVW5pZmllZFdpdGhUZXJtID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgICAgICAgIHRlcm1Ob2RlcyA9IFtcbiAgICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMoZXF1aXZhbGVuY2VzLCB0ZXJtTm9kZXMpO1xuXG4gICAgICAgICAgdGVybVVuaWZpZWRXaXRoVGVybSA9IChlcXVpdmFsZW5jZSAhPT0gbnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRlcm1VbmlmaWVkV2l0aFRlcm0pIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzVW5pZmllZCA9IHVuaWZ5Q2hpbGROb2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgdGVybVVuaWZpZWRXaXRoVGVybSA9IGNoaWxkTm9kZXNVbmlmaWVkOyAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZFdpdGhUZXJtO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgZXF1YWxpdHlVbmlmaWVyID0gbmV3IEVxdWFsaXR5VW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBlcXVhbGl0eVVuaWZpZXI7XG5cbmZ1bmN0aW9uIHVuaWZ5Q2hpbGROb2RlcyhsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHRUZXJtTm9kZSwgLy8vXG4gICAgICAgIGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbGVmdENoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIHJpZ2h0Q2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gZXF1YWxpdHlVbmlmaWVyLnVuaWZ5Q2hpbGROb2RlcyhsZWZ0Q2hpbGROb2RlcywgcmlnaHRDaGlsZE5vZGVzLCBjb250ZXh0KTtcblxuICByZXR1cm4gY2hpbGROb2Rlc1VuaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkVxdWFsaXR5VW5pZmllciIsInVuaWZ5IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImNvbnRleHQiLCJlcXVhbGl0eVVuaWZpZWQiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsInRlcm1VbmlmaWVkV2l0aFRlcm0iLCJsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSIsIm1hdGNoIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwidGVybU5vZGVzIiwiZXF1aXZhbGVuY2UiLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyIsImNoaWxkTm9kZXNVbmlmaWVkIiwidW5pZnlDaGlsZE5vZGVzIiwiZXF1YWxpdHlVbmlmaWVyIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibGVmdENoaWxkTm9kZXMiLCJyaWdodENoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBEQTs7O2VBQUE7Ozs4REF4RG9CO3FCQUVNOzRCQUNpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWhDLElBQUEsQUFBTUMsZ0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLE9BQU87Z0JBQ3hDLElBQUlDO2dCQUVKLElBQU1DLHNCQUFzQkosY0FDdEJLLHVCQUF1QkosZUFDdkJLLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCxxQkFBcUJDLHNCQUFzQkg7Z0JBRXBHQyxrQkFBa0JHLHdCQUF3QixHQUFHO2dCQUU3QyxPQUFPSDtZQUNUOzs7V0FYSUw7RUFBd0JVLGdCQUFPO0FBYW5DLGlCQWJJVixpQkFhR1csUUFBTztJQUNaO1FBQ0VDLGtCQUFrQmQ7UUFDbEJlLG1CQUFtQmY7UUFDbkJHLE9BQU8sU0FBQ0MsY0FBY0MsZUFBZUM7WUFDbkMsSUFBSVU7WUFFSixJQUFNQyxtQ0FBbUNiLGFBQWFjLEtBQUssQ0FBQ2I7WUFFNUQsSUFBSVksa0NBQWtDO2dCQUNwQ0Qsc0JBQXNCO1lBQ3hCLE9BQU87Z0JBQ0wsSUFBTUcsZUFBZWIsUUFBUWMsZUFBZSxJQUN0Q0MsWUFBWTtvQkFDVmpCO29CQUNBQztpQkFDRCxFQUNEaUIsY0FBY0MsSUFBQUEsd0NBQTBCLEVBQUNKLGNBQWNFO2dCQUU3REwsc0JBQXVCTSxnQkFBZ0I7WUFDekM7WUFFQSxJQUFJLENBQUNOLHFCQUFxQjtnQkFDeEIsSUFBTVEsb0JBQW9CQyxnQkFBZ0JyQixjQUFjQyxlQUFlQztnQkFFdkVVLHNCQUFzQlEsbUJBQW1CLEdBQUc7WUFDOUM7WUFFQSxPQUFPUjtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1VLGtCQUFrQixJQUFJeEI7SUFFNUIsV0FBZXdCO0FBRWYsU0FBU0QsZ0JBQWdCckIsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLE9BQU87SUFDM0QsSUFBTUUsc0JBQXNCSixjQUN0QkssdUJBQXVCSixlQUN2QnNCLGdDQUFnQ25CLG9CQUFvQm9CLGFBQWEsSUFDakVDLGlDQUFpQ3BCLHFCQUFxQm1CLGFBQWEsSUFDbkVFLGlCQUFpQkgsK0JBQ2pCSSxrQkFBa0JGLGdDQUNsQkwsb0JBQW9CRSxnQkFBZ0JELGVBQWUsQ0FBQ0ssZ0JBQWdCQyxpQkFBaUJ6QjtJQUUzRixPQUFPa0I7QUFDVCJ9