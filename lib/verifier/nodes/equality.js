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
var _equality = /*#__PURE__*/ _interop_require_default(require("../../equality"));
var _terms = /*#__PURE__*/ _interop_require_default(require("../../verify/terms"));
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _ruleNames = require("../../ruleNames");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var EqualityNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(EqualityNodesVerifier, NodesVerifier);
    var _super = _create_super(EqualityNodesVerifier);
    function EqualityNodesVerifier() {
        _class_call_check(this, EqualityNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(EqualityNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();
                if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
                    var leftNonTerminalNodeRuleNameTermRuleName = leftNonTerminalNodeRuleName === _ruleNames.TERM_RULE_NAME, rightNonTerminalNodeRuleNameTermRuleName = rightNonTerminalNodeRuleName === _ruleNames.TERM_RULE_NAME;
                    if (leftNonTerminalNodeRuleNameTermRuleName && rightNonTerminalNodeRuleNameTermRuleName) {
                        var leftTermNode = leftNonTerminalNode, rightTermNode = rightNonTerminalNode, termNodeVerified = this.verifyTermNode(leftTermNode, rightTermNode, equalities, context, verifyAhead);
                        nonTerminalNodeVerified = termNodeVerified; ///
                    }
                    if (!nonTerminalNodeVerified) {
                        var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, childNodesVerified = this.verifyChildNodes(leftChildNodes, rightChildNodes, equalities, context, verifyAhead);
                        nonTerminalNodeVerified = childNodesVerified; ///
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(leftTermNode, rightTermNode, equalities, context, verifyAhead) {
                var termNodeVerified = false;
                var termsVerified = (0, _terms.default)(leftTermNode, rightTermNode, context, verifyAhead);
                if (termsVerified) {
                    var equality = _equality.default.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode), equalityA = equality, equalitiesB = equalities, equalityMatches = equalitiesB.some(function(equalityB) {
                        var equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, context);
                        if (equalityAMatchesEqualityB) {
                            return true;
                        }
                    });
                    termNodeVerified = equalityMatches; ///
                }
                return termNodeVerified;
            }
        }
    ]);
    return EqualityNodesVerifier;
}(_nodes.default);
var equalityNodesVerifier = new EqualityNodesVerifier();
var _default = equalityNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVxdWFsaXR5IGZyb20gXCIuLi8uLi9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVRlcm1zIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybXNcIjtcbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY2xhc3MgRXF1YWxpdHlOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGlmIChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZVRlcm1SdWxlTmFtZSA9IChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKSxcbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAocmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lVGVybVJ1bGVOYW1lICYmIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgIC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgbGVmdENoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0Q2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhsZWZ0Q2hpbGROb2RlcywgcmlnaHRDaGlsZE5vZGVzLCBlcXVhbGl0aWVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgIGVxdWFsaXR5QSA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICAgIGVxdWFsaXRpZXNCID0gZXF1YWxpdGllcywgLy8vXG4gICAgICAgICAgICBlcXVhbGl0eU1hdGNoZXMgPSBlcXVhbGl0aWVzQi5zb21lKChlcXVhbGl0eUIpID0+IHsgLy8vXG4gICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIgPSBlcXVhbGl0eUEubWF0Y2goZXF1YWxpdHlCLCBlcXVhbGl0aWVzQiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSBlcXVhbGl0eU1hdGNoZXM7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybU5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBlcXVhbGl0eU5vZGVzVmVyaWZpZXIgPSBuZXcgRXF1YWxpdHlOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsaXR5Tm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJFcXVhbGl0eU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJlcXVhbGl0aWVzIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWVUZXJtUnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWVUZXJtUnVsZU5hbWUiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwidGVybU5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1Ob2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibGVmdENoaWxkTm9kZXMiLCJyaWdodENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidGVybXNWZXJpZmllZCIsInZlcmlmeVRlcm1zIiwiZXF1YWxpdHkiLCJFcXVhbGl0eSIsImZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwiZXF1YWxpdHlBIiwiZXF1YWxpdGllc0IiLCJlcXVhbGl0eU1hdGNoZXMiLCJzb21lIiwiZXF1YWxpdHlCIiwiZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5QiIsIm1hdGNoIiwiTm9kZXNWZXJpZmllciIsImVxdWFsaXR5Tm9kZXNWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUVBOzs7ZUFBQTs7OytEQWpFcUI7NERBQ0c7NERBQ0U7eUJBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSxzQ0F5REgsQUF6REg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsbUJBQW1CLEVBQUVDLG9CQUFvQixFQUFFQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztnQkFDL0YsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNQyw4QkFBOEJOLG9CQUFvQk8sV0FBVyxJQUM3REMsK0JBQStCUCxxQkFBcUJNLFdBQVc7Z0JBRXJFLElBQUlELGdDQUFnQ0UsOEJBQThCO29CQUNoRSxJQUFNQywwQ0FBMkNILGdDQUFnQ0kseUJBQWMsRUFDekZDLDJDQUE0Q0gsaUNBQWlDRSx5QkFBYztvQkFFakcsSUFBSUQsMkNBQTJDRSwwQ0FBMEM7d0JBQ3ZGLElBQU1DLGVBQWVaLHFCQUNmYSxnQkFBZ0JaLHNCQUNoQmEsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDSCxjQUFjQyxlQUFlWCxZQUFZQyxTQUFTQzt3QkFFL0ZDLDBCQUEwQlMsa0JBQW1CLEdBQUc7b0JBQ2xEO29CQUVBLElBQUksQ0FBQ1QseUJBQXlCO3dCQUM1QixJQUFNVyxnQ0FBZ0NoQixvQkFBb0JpQixhQUFhLElBQ2pFQyxpQ0FBaUNqQixxQkFBcUJnQixhQUFhLElBQ25FRSxpQkFBaUJILCtCQUNqQkksa0JBQWtCRixnQ0FDbEJHLHFCQUFxQixJQUFJLENBQUNDLGdCQUFnQixDQUFDSCxnQkFBZ0JDLGlCQUFpQmxCLFlBQVlDLFNBQVNDO3dCQUV2R0MsMEJBQTBCZ0Isb0JBQW9CLEdBQUc7b0JBQ25EO2dCQUNGO2dCQUVBLE9BQU9oQjtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVILFlBQVksRUFBRUMsYUFBYSxFQUFFWCxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztnQkFDMUUsSUFBSVUsbUJBQW1CO2dCQUV2QixJQUFNUyxnQkFBZ0JDLElBQUFBLGNBQVcsRUFBQ1osY0FBY0MsZUFBZVYsU0FBU0M7Z0JBRXhFLElBQUltQixlQUFlO29CQUNqQixJQUFNRSxXQUFXQyxpQkFBUSxDQUFDQyxnQ0FBZ0MsQ0FBQ2YsY0FBY0MsZ0JBQ25FZSxZQUFZSCxVQUNaSSxjQUFjM0IsWUFDZDRCLGtCQUFrQkQsWUFBWUUsSUFBSSxDQUFDLFNBQUNDO3dCQUNsQyxJQUFNQyw0QkFBNEJMLFVBQVVNLEtBQUssQ0FBQ0YsV0FBV0gsYUFBYTFCO3dCQUUxRSxJQUFJOEIsMkJBQTJCOzRCQUM3QixPQUFPO3dCQUNUO29CQUNGO29CQUVObkIsbUJBQW1CZ0IsaUJBQWtCLEdBQUc7Z0JBQzFDO2dCQUVBLE9BQU9oQjtZQUNUOzs7V0F0REloQjtFQUE4QnFDLGNBQWE7QUF5RGpELElBQU1DLHdCQUF3QixJQUFJdEM7SUFFbEMsV0FBZXNDIn0=