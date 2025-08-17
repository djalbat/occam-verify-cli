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
var EquationalUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(EquationalUnifier, Unifier);
    function EquationalUnifier() {
        _class_call_check(this, EquationalUnifier);
        return _call_super(this, EquationalUnifier, arguments);
    }
    _create_class(EquationalUnifier, [
        {
            key: "equateTerms",
            value: function equateTerms(leftTermNode, rightTermNode, context) {
                var termsEquated;
                var generalNonTerminalNode = leftTermNode, specificNonTerminalNode = rightTermNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);
                termsEquated = nonTerminalNodeUnified; ///
                return termsEquated;
            }
        },
        {
            key: "equateStatements",
            value: function equateStatements(statementANode, statementBNode, context) {
                var statementsEquated;
                var generalNonTerminalNode = statementANode, specificNonTerminalNode = statementBNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, context);
                statementsEquated = nonTerminalNodeUnified; ///
                return statementsEquated;
            }
        }
    ]);
    return EquationalUnifier;
}(_unifier.default);
_define_property(EquationalUnifier, "maps", [
    {
        generalNodeQuery: termNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(leftTermNode, rightTermNode, context) {
            var termUnified = false;
            if (!termUnified) {
                var depth = Infinity, leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode, depth);
                if (leftTermNodeMatchesRightTermNode) {
                    termUnified = true;
                }
            }
            if (!termUnified) {
                var equivalences = context.getEquivalences(), termNodes = [
                    leftTermNode,
                    rightTermNode
                ], equivalence = equivalences.findEquivalenceByTermNodes(termNodes);
                if (equivalence !== null) {
                    termUnified = true;
                }
            }
            if (!termUnified) {
                var depth1 = 1, leftTermNodeMatchesRightTermNode1 = leftTermNode.match(rightTermNode, depth1);
                if (leftTermNodeMatchesRightTermNode1) {
                    var leftNonTerminalNode = leftTermNode, rightNonTerminalNode = rightTermNode, leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, childNodesUnified = equationalUnifier.unifyChildNodes(leftChildNodes, rightChildNodes, context);
                    if (childNodesUnified) {
                        termUnified = true;
                    }
                }
            }
            return termUnified;
        }
    }
]);
var equationalUnifier = new EquationalUnifier();
var _default = equationalUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2VxdWFudGlvbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKTtcblxuY2xhc3MgRXF1YXRpb25hbFVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgZXF1YXRlVGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zRXF1YXRlZDtcblxuICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBsZWZ0VGVybU5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gcmlnaHRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGVybXNFcXVhdGVkID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gdGVybXNFcXVhdGVkO1xuICB9O1xuXG4gIGVxdWF0ZVN0YXRlbWVudHMoc3RhdGVtZW50QU5vZGUsIHN0YXRlbWVudEJOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudHNFcXVhdGVkO1xuXG4gICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudEFOb2RlLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudEJOb2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRzRXF1YXRlZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNFcXVhdGVkO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksICAvLy9cbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LCAvLy9cbiAgICAgIHVuaWZ5OiAobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghdGVybVVuaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBkZXB0aCA9IEluZmluaXR5LFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLm1hdGNoKHJpZ2h0VGVybU5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSkge1xuICAgICAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGVybVVuaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgICAgICAgIHRlcm1Ob2RlcyA9IFtcbiAgICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGVxdWl2YWxlbmNlID0gZXF1aXZhbGVuY2VzLmZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzKHRlcm1Ob2Rlcyk7XG5cbiAgICAgICAgICBpZiAoZXF1aXZhbGVuY2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRlcm1VbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRlcm1VbmlmaWVkKSB7XG4gICAgICAgICAgY29uc3QgZGVwdGggPSAxLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLm1hdGNoKHJpZ2h0VGVybU5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZSA9IGxlZnRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZSA9IHJpZ2h0VGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICAgIGxlZnRDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgcmlnaHRDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNVbmlmaWVkID0gZXF1YXRpb25hbFVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGxlZnRDaGlsZE5vZGVzLCByaWdodENoaWxkTm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2Rlc1VuaWZpZWQpIHtcbiAgICAgICAgICAgICAgdGVybVVuaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IGVxdWF0aW9uYWxVbmlmaWVyID0gbmV3IEVxdWF0aW9uYWxVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWF0aW9uYWxVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJFcXVhdGlvbmFsVW5pZmllciIsImVxdWF0ZVRlcm1zIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImNvbnRleHQiLCJ0ZXJtc0VxdWF0ZWQiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJlcXVhdGVTdGF0ZW1lbnRzIiwic3RhdGVtZW50QU5vZGUiLCJzdGF0ZW1lbnRCTm9kZSIsInN0YXRlbWVudHNFcXVhdGVkIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJ1bmlmeSIsInRlcm1VbmlmaWVkIiwiZGVwdGgiLCJJbmZpbml0eSIsImxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlIiwibWF0Y2giLCJlcXVpdmFsZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJ0ZXJtTm9kZXMiLCJlcXVpdmFsZW5jZSIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybU5vZGVzIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibGVmdENoaWxkTm9kZXMiLCJyaWdodENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVW5pZmllZCIsImVxdWF0aW9uYWxVbmlmaWVyIiwidW5pZnlDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5RkE7OztlQUFBOzs7OERBdkZvQjtxQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRWhDLElBQUEsQUFBTUMsa0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxPQUFPO2dCQUM5QyxJQUFJQztnQkFFSixJQUFNQyx5QkFBeUJKLGNBQ3pCSywwQkFBMEJKLGVBQzFCSyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsd0JBQXdCQyx5QkFBeUJIO2dCQUUxR0MsZUFBZUcsd0JBQXdCLEdBQUc7Z0JBRTFDLE9BQU9IO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxjQUFjLEVBQUVDLGNBQWMsRUFBRVIsT0FBTztnQkFDdEQsSUFBSVM7Z0JBRUosSUFBTVAseUJBQXlCSyxnQkFDekJKLDBCQUEwQkssZ0JBQzFCSix5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsd0JBQXdCQyx5QkFBeUJIO2dCQUUxR1Msb0JBQW9CTCx3QkFBd0IsR0FBRztnQkFFL0MsT0FBT0s7WUFDVDs7O1dBdkJJYjtFQUEwQmMsZ0JBQU87QUF5QnJDLGlCQXpCSWQsbUJBeUJHZSxRQUFPO0lBQ1o7UUFDRUMsa0JBQWtCbEI7UUFDbEJtQixtQkFBbUJuQjtRQUNuQm9CLE9BQU8sU0FBQ2hCLGNBQWNDLGVBQWVDO1lBQ25DLElBQUllLGNBQWM7WUFFbEIsSUFBSSxDQUFDQSxhQUFhO2dCQUNoQixJQUFNQyxRQUFRQyxVQUNSQyxtQ0FBbUNwQixhQUFhcUIsS0FBSyxDQUFDcEIsZUFBZWlCO2dCQUUzRSxJQUFJRSxrQ0FBa0M7b0JBQ3BDSCxjQUFjO2dCQUNoQjtZQUNGO1lBRUEsSUFBSSxDQUFDQSxhQUFhO2dCQUNoQixJQUFNSyxlQUFlcEIsUUFBUXFCLGVBQWUsSUFDdENDLFlBQVk7b0JBQ1Z4QjtvQkFDQUM7aUJBQ0QsRUFDRHdCLGNBQWNILGFBQWFJLDBCQUEwQixDQUFDRjtnQkFFNUQsSUFBSUMsZ0JBQWdCLE1BQU07b0JBQ3hCUixjQUFjO2dCQUNoQjtZQUNGO1lBRUEsSUFBSSxDQUFDQSxhQUFhO2dCQUNoQixJQUFNQyxTQUFRLEdBQ1JFLG9DQUFtQ3BCLGFBQWFxQixLQUFLLENBQUNwQixlQUFlaUI7Z0JBRTNFLElBQUlFLG1DQUFrQztvQkFDcEMsSUFBTU8sc0JBQXNCM0IsY0FDdEI0Qix1QkFBdUIzQixlQUN2QjRCLGdDQUFnQ0Ysb0JBQW9CRyxhQUFhLElBQ2pFQyxpQ0FBaUNILHFCQUFxQkUsYUFBYSxJQUNuRUUsaUJBQWlCSCwrQkFDakJJLGtCQUFrQkYsZ0NBQ2xCRyxvQkFBb0JDLGtCQUFrQkMsZUFBZSxDQUFDSixnQkFBZ0JDLGlCQUFpQi9CO29CQUU3RixJQUFJZ0MsbUJBQW1CO3dCQUNyQmpCLGNBQWM7b0JBQ2hCO2dCQUNGO1lBQ0Y7WUFFQSxPQUFPQTtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1rQixvQkFBb0IsSUFBSXJDO0lBRTlCLFdBQWVxQyJ9