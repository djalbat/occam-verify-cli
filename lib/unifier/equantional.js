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
                    termUnified = leftTermNodeMatchesRightTermNode; ///
                }
            }
            if (!termUnified) {
                var equivalences = context.getEquivalences(), termNodes = [
                    leftTermNode,
                    rightTermNode
                ], equivalence = equivalences.findEquivalenceByTermNodes(termNodes);
                termUnified = equivalence !== null;
            }
            if (!termUnified) {
                var depth1 = 1, leftTermNodeMatchesRightTermNode1 = leftTermNode.match(rightTermNode, depth1);
                if (leftTermNodeMatchesRightTermNode1) {
                    var leftNonTerminalNode = leftTermNode, rightNonTerminalNode = rightTermNode, leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, childNodesUnified = equationalUnifier.unifyChildNodes(leftChildNodes, rightChildNodes, context);
                    termUnified = childNodesUnified; ////
                }
            }
            return termUnified;
        }
    }
]);
var equationalUnifier = new EquationalUnifier();
var _default = equationalUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL2VxdWFudGlvbmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKTtcblxuY2xhc3MgRXF1YXRpb25hbFVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgZXF1YXRlVGVybXMobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zRXF1YXRlZDtcblxuICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBsZWZ0VGVybU5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gcmlnaHRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgdGVybXNFcXVhdGVkID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gdGVybXNFcXVhdGVkO1xuICB9O1xuXG4gIGVxdWF0ZVN0YXRlbWVudHMoc3RhdGVtZW50QU5vZGUsIHN0YXRlbWVudEJOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudHNFcXVhdGVkO1xuXG4gICAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudEFOb2RlLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHN0YXRlbWVudEJOb2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgY29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRzRXF1YXRlZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHNFcXVhdGVkO1xuICB9O1xuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksICAvLy9cbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LCAvLy9cbiAgICAgIHVuaWZ5OiAobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghdGVybVVuaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBkZXB0aCA9IEluZmluaXR5LFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlLm1hdGNoKHJpZ2h0VGVybU5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSkge1xuICAgICAgICAgICAgdGVybVVuaWZpZWQgPSBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZTsgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0ZXJtVW5pZmllZCkge1xuICAgICAgICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgICAgICAgdGVybU5vZGVzID0gW1xuICAgICAgICAgICAgICAgICAgbGVmdFRlcm1Ob2RlLFxuICAgICAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBlcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXModGVybU5vZGVzKTtcblxuICAgICAgICAgIHRlcm1VbmlmaWVkID0gKGVxdWl2YWxlbmNlICE9PSBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGVybVVuaWZpZWQpIHtcbiAgICAgICAgICBjb25zdCBkZXB0aCA9IDEsXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGUubWF0Y2gocmlnaHRUZXJtTm9kZSwgZGVwdGgpO1xuXG4gICAgICAgICAgaWYgKGxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlID0gbGVmdFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlID0gcmlnaHRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgICAgbGVmdENoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgICByaWdodENoaWxkTm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgY2hpbGROb2Rlc1VuaWZpZWQgPSBlcXVhdGlvbmFsVW5pZmllci51bmlmeUNoaWxkTm9kZXMobGVmdENoaWxkTm9kZXMsIHJpZ2h0Q2hpbGROb2RlcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRlcm1VbmlmaWVkID0gY2hpbGROb2Rlc1VuaWZpZWQ7ICAvLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgZXF1YXRpb25hbFVuaWZpZXIgPSBuZXcgRXF1YXRpb25hbFVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXF1YXRpb25hbFVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkVxdWF0aW9uYWxVbmlmaWVyIiwiZXF1YXRlVGVybXMiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiY29udGV4dCIsInRlcm1zRXF1YXRlZCIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsImVxdWF0ZVN0YXRlbWVudHMiLCJzdGF0ZW1lbnRBTm9kZSIsInN0YXRlbWVudEJOb2RlIiwic3RhdGVtZW50c0VxdWF0ZWQiLCJVbmlmaWVyIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsInVuaWZ5IiwidGVybVVuaWZpZWQiLCJkZXB0aCIsIkluZmluaXR5IiwibGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUiLCJtYXRjaCIsImVxdWl2YWxlbmNlcyIsImdldEVxdWl2YWxlbmNlcyIsInRlcm1Ob2RlcyIsImVxdWl2YWxlbmNlIiwiZmluZEVxdWl2YWxlbmNlQnlUZXJtTm9kZXMiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJyaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJsZWZ0Q2hpbGROb2RlcyIsInJpZ2h0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNVbmlmaWVkIiwiZXF1YXRpb25hbFVuaWZpZXIiLCJ1bmlmeUNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFGQTs7O2VBQUE7Ozs4REFuRm9CO3FCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsSUFBQSxBQUFNQyxrQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLE9BQU87Z0JBQzlDLElBQUlDO2dCQUVKLElBQU1DLHlCQUF5QkosY0FDekJLLDBCQUEwQkosZUFDMUJLLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCx3QkFBd0JDLHlCQUF5Qkg7Z0JBRTFHQyxlQUFlRyx3QkFBd0IsR0FBRztnQkFFMUMsT0FBT0g7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLGNBQWMsRUFBRUMsY0FBYyxFQUFFUixPQUFPO2dCQUN0RCxJQUFJUztnQkFFSixJQUFNUCx5QkFBeUJLLGdCQUN6QkosMEJBQTBCSyxnQkFDMUJKLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCx3QkFBd0JDLHlCQUF5Qkg7Z0JBRTFHUyxvQkFBb0JMLHdCQUF3QixHQUFHO2dCQUUvQyxPQUFPSztZQUNUOzs7V0F2QkliO0VBQTBCYyxnQkFBTztBQXlCckMsaUJBekJJZCxtQkF5QkdlLFFBQU87SUFDWjtRQUNFQyxrQkFBa0JsQjtRQUNsQm1CLG1CQUFtQm5CO1FBQ25Cb0IsT0FBTyxTQUFDaEIsY0FBY0MsZUFBZUM7WUFDbkMsSUFBSWUsY0FBYztZQUVsQixJQUFJLENBQUNBLGFBQWE7Z0JBQ2hCLElBQU1DLFFBQVFDLFVBQ1JDLG1DQUFtQ3BCLGFBQWFxQixLQUFLLENBQUNwQixlQUFlaUI7Z0JBRTNFLElBQUlFLGtDQUFrQztvQkFDcENILGNBQWNHLGtDQUFrQyxHQUFHO2dCQUNyRDtZQUNGO1lBRUEsSUFBSSxDQUFDSCxhQUFhO2dCQUNoQixJQUFNSyxlQUFlcEIsUUFBUXFCLGVBQWUsSUFDdENDLFlBQVk7b0JBQ1Z4QjtvQkFDQUM7aUJBQ0QsRUFDRHdCLGNBQWNILGFBQWFJLDBCQUEwQixDQUFDRjtnQkFFNURQLGNBQWVRLGdCQUFnQjtZQUNqQztZQUVBLElBQUksQ0FBQ1IsYUFBYTtnQkFDaEIsSUFBTUMsU0FBUSxHQUNSRSxvQ0FBbUNwQixhQUFhcUIsS0FBSyxDQUFDcEIsZUFBZWlCO2dCQUUzRSxJQUFJRSxtQ0FBa0M7b0JBQ3BDLElBQU1PLHNCQUFzQjNCLGNBQ3RCNEIsdUJBQXVCM0IsZUFDdkI0QixnQ0FBZ0NGLG9CQUFvQkcsYUFBYSxJQUNqRUMsaUNBQWlDSCxxQkFBcUJFLGFBQWEsSUFDbkVFLGlCQUFpQkgsK0JBQ2pCSSxrQkFBa0JGLGdDQUNsQkcsb0JBQW9CQyxrQkFBa0JDLGVBQWUsQ0FBQ0osZ0JBQWdCQyxpQkFBaUIvQjtvQkFFN0ZlLGNBQWNpQixtQkFBb0IsSUFBSTtnQkFDeEM7WUFDRjtZQUVBLE9BQU9qQjtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1rQixvQkFBb0IsSUFBSXJDO0lBRTlCLFdBQWVxQyJ9