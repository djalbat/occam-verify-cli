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
                var nonTerminalNodeA = leftTermNode, nonTerminalNodeB = rightTermNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context);
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
        unify: function(termNodeA, termNodeB, context) {
            var termUnifiedWithTerm;
            var leftTermNode = termNodeA, rightTermNode = termNodeB, leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);
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
                var nonTerminalNodeA = termNodeA, nonTerminalNodeB = termNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = equalityUnifier.unifyChildNodes(childNodesA, childNodesB, context);
                termUnifiedWithTerm = childNodesVerified; ///
            }
            return termUnifiedWithTerm;
        }
    }
]);
var equalityUnifier = new EqualityUnifier();
var _default = equalityUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZXF1aXZhbGVuY2VzXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKTtcblxuY2xhc3MgRXF1YWxpdHlVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eVVuaWZpZWQ7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbGVmdFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gcmlnaHRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCk7XG5cbiAgICBlcXVhbGl0eVVuaWZpZWQgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eVVuaWZpZWQ7XG4gIH07XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtTm9kZUEsIHRlcm1Ob2RlQiwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdGVybVVuaWZpZWRXaXRoVGVybTtcblxuICAgICAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGVybU5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgIGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLm1hdGNoKHJpZ2h0VGVybU5vZGUpO1xuXG4gICAgICAgIGlmIChsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSkge1xuICAgICAgICAgIHRlcm1VbmlmaWVkV2l0aFRlcm0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBmaW5kRXF1aXZhbGVuY2VCeVRlcm1Ob2RlcyhlcXVpdmFsZW5jZXMsIHRlcm1Ob2Rlcyk7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllZFdpdGhUZXJtID0gKGVxdWl2YWxlbmNlICE9PSBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGVybVVuaWZpZWRXaXRoVGVybSkge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSB0ZXJtTm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSBlcXVhbGl0eVVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgY29udGV4dCk7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllZFdpdGhUZXJtID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZFdpdGhUZXJtO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgZXF1YWxpdHlVbmlmaWVyID0gbmV3IEVxdWFsaXR5VW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBlcXVhbGl0eVVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkVxdWFsaXR5VW5pZmllciIsInVuaWZ5IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImNvbnRleHQiLCJlcXVhbGl0eVVuaWZpZWQiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwidGVybU5vZGVBIiwidGVybU5vZGVCIiwidGVybVVuaWZpZWRXaXRoVGVybSIsImxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJlcXVpdmFsZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJ0ZXJtTm9kZXMiLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwiZXF1YWxpdHlVbmlmaWVyIiwidW5pZnlDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrRUE7OztlQUFBOzs7OERBaEVvQjtxQkFFTTs0QkFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVoQyxJQUFBLEFBQU1DLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxPQUFPO2dCQUN4QyxJQUFJQztnQkFFSixJQUFNQyxtQkFBbUJKLGNBQ25CSyxtQkFBbUJKLGVBQ25CSyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCQyxrQkFBa0JIO2dCQUU3RkMsa0JBQWtCRyx3QkFBd0IsR0FBRztnQkFFN0MsT0FBT0g7WUFDVDs7O1dBWElMO0VBQXdCVSxnQkFBTztBQWFuQyxpQkFiSVYsaUJBYUdXLFFBQU87SUFDWjtRQUNFQyxrQkFBa0JkO1FBQ2xCZSxtQkFBbUJmO1FBQ25CRyxPQUFPLFNBQUNhLFdBQVdDLFdBQVdYO1lBQzVCLElBQUlZO1lBRUosSUFBTWQsZUFBZVksV0FDZlgsZ0JBQWdCWSxXQUNoQkUsbUNBQW1DZixhQUFhZ0IsS0FBSyxDQUFDZjtZQUU1RCxJQUFJYyxrQ0FBa0M7Z0JBQ3BDRCxzQkFBc0I7WUFDeEIsT0FBTztnQkFDTCxJQUFNRyxlQUFlZixRQUFRZ0IsZUFBZSxJQUN0Q0MsWUFBWTtvQkFDVm5CO29CQUNBQztpQkFDRCxFQUNEbUIsY0FBY0MsSUFBQUEsd0NBQTBCLEVBQUNKLGNBQWNFO2dCQUU3REwsc0JBQXVCTSxnQkFBZ0I7WUFDekM7WUFFQSxJQUFJLENBQUNOLHFCQUFxQjtnQkFDeEIsSUFBTVYsbUJBQW1CUSxXQUNuQlAsbUJBQW1CUSxXQUNuQlMsNkJBQTZCbEIsaUJBQWlCbUIsYUFBYSxJQUMzREMsNkJBQTZCbkIsaUJBQWlCa0IsYUFBYSxJQUMzREUsY0FBY0gsNEJBQ2RJLGNBQWNGLDRCQUNkRyxxQkFBcUJDLGdCQUFnQkMsZUFBZSxDQUFDSixhQUFhQyxhQUFheEI7Z0JBRXJGWSxzQkFBc0JhLG9CQUFvQixHQUFHO1lBQy9DO1lBRUEsT0FBT2I7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNYyxrQkFBa0IsSUFBSTlCO0lBRTVCLFdBQWU4QiJ9