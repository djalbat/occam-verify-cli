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
var _verifier = /*#__PURE__*/ _interopRequireDefault(require("../verifier"));
var _ruleNames = require("../ruleNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var EqualityVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(EqualityVerifier, Verifier);
    var _super = _createSuper(EqualityVerifier);
    function EqualityVerifier() {
        _classCallCheck(this, EqualityVerifier);
        return _super.apply(this, arguments);
    }
    _createClass(EqualityVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context) {
                var nonTerminalNodeVerified = false;
                var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();
                if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
                    var ruleName = leftNonTerminalNodeRuleName, ruleNameTermRuleName = ruleName === _ruleNames.TERM_RULE_NAME;
                    if (ruleNameTermRuleName) {
                        var leftTermNode = leftNonTerminalNode, rightTermNode = rightNonTerminalNode, termNodeVerified = this.verifyTermNode(leftTermNode, rightTermNode, equalities, context);
                        nonTerminalNodeVerified = termNodeVerified; ///
                    }
                    if (!nonTerminalNodeVerified) {
                        var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftNodes = leftNonTerminalNodeChildNodes, rightNodes = rightNonTerminalNodeChildNodes, nodesEquate = this.verifyNodes(leftNodes, rightNodes, equalities, context);
                        nonTerminalNodeVerified = nodesEquate; ///
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(leftTermNode, rightTermNode, equalities, context) {
                var termNodeVerified = false;
                var equality = equalityFromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode, equalities, context);
                if (equality !== null) {
                    var equalityA = equality, equalitiesB = equalities, equalityMatches = equalitiesB.some(function(equalityB) {
                        var equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, equalities, context);
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
    return EqualityVerifier;
}(_verifier.default);
var equalityVerifier = new EqualityVerifier();
var _default = equalityVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuY2xhc3MgRXF1YWxpdHlWZXJpZmllciBleHRlbmRzIFZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKGxlZnROb25UZXJtaW5hbE5vZGUsIHJpZ2h0Tm9uVGVybWluYWxOb2RlLCBlcXVhbGl0aWVzLCBjb250ZXh0KSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCk7XG5cbiAgICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBydWxlTmFtZVRlcm1SdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAocnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0ZXJtTm9kZVZlcmlmaWVkOyAgLy8vXG4gICAgICB9XG5cbiAgICAgIGlmICghbm9uVGVybWluYWxOb2RlVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgbGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgcmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBsZWZ0Tm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0Tm9kZXMgPSByaWdodE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc0VxdWF0ZSA9IHRoaXMudmVyaWZ5Tm9kZXMobGVmdE5vZGVzLCByaWdodE5vZGVzLCBlcXVhbGl0aWVzLCBjb250ZXh0KTtcblxuICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG5vZGVzRXF1YXRlOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtTm9kZShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGVxdWFsaXRpZXMsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5QSA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICAgIGVxdWFsaXRpZXNCID0gZXF1YWxpdGllcywgLy8vXG4gICAgICAgICAgICBlcXVhbGl0eU1hdGNoZXMgPSBlcXVhbGl0aWVzQi5zb21lKChlcXVhbGl0eUIpID0+IHsgLy8vXG4gICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIgPSBlcXVhbGl0eUEubWF0Y2goZXF1YWxpdHlCLCBlcXVhbGl0aWVzQiwgZXF1YWxpdGllcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSBlcXVhbGl0eU1hdGNoZXM7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybU5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBlcXVhbGl0eVZlcmlmaWVyID0gbmV3IEVxdWFsaXR5VmVyaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXF1YWxpdHlWZXJpZmllcjtcblxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5VmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJlcXVhbGl0aWVzIiwiY29udGV4dCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwicnVsZU5hbWUiLCJydWxlTmFtZVRlcm1SdWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsInRlcm1Ob2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImxlZnROb2RlcyIsInJpZ2h0Tm9kZXMiLCJub2Rlc0VxdWF0ZSIsInZlcmlmeU5vZGVzIiwiZXF1YWxpdHkiLCJlcXVhbGl0eUZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwiZXF1YWxpdHlBIiwiZXF1YWxpdGllc0IiLCJlcXVhbGl0eU1hdGNoZXMiLCJzb21lIiwiZXF1YWxpdHlCIiwiZXF1YWxpdHlBTWF0Y2hlc0VxdWFsaXR5QiIsIm1hdGNoIiwiVmVyaWZpZXIiLCJlcXVhbGl0eVZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnRUE7OztlQUFBOzs7NkRBOURxQjt5QkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFBLEFBQU1BLGlDQXdESCxBQXhESDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxtQkFBbUIsRUFBRUMsb0JBQW9CLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFO2dCQUNwRixJQUFJQywwQkFBMEIsS0FBSztnQkFFbkMsSUFBTUMsOEJBQThCTCxvQkFBb0JNLFdBQVcsSUFDN0RDLCtCQUErQk4scUJBQXFCSyxXQUFXO2dCQUVyRSxJQUFJRCxnQ0FBZ0NFLDhCQUE4QjtvQkFDaEUsSUFBTUMsV0FBV0gsNkJBQ1hJLHVCQUF3QkQsYUFBYUUseUJBQWM7b0JBRXpELElBQUlELHNCQUFzQjt3QkFDeEIsSUFBTUUsZUFBZVgscUJBQ2ZZLGdCQUFnQlgsc0JBQ2hCWSxtQkFBbUIsSUFBSSxDQUFDQyxjQUFjLENBQUNILGNBQWNDLGVBQWVWLFlBQVlDO3dCQUV0RkMsMEJBQTBCUyxrQkFBbUIsR0FBRztvQkFDbEQsQ0FBQztvQkFFRCxJQUFJLENBQUNULHlCQUF5Qjt3QkFDNUIsSUFBTVcsZ0NBQWdDZixvQkFBb0JnQixhQUFhLElBQ2pFQyxpQ0FBaUNoQixxQkFBcUJlLGFBQWEsSUFDbkVFLFlBQVlILCtCQUNaSSxhQUFhRixnQ0FDYkcsY0FBYyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0gsV0FBV0MsWUFBWWpCLFlBQVlDO3dCQUV4RUMsMEJBQTBCZ0IsYUFBYSxHQUFHO29CQUM1QyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT2hCO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUgsWUFBWSxFQUFFQyxhQUFhLEVBQUVWLFVBQVUsRUFBRUMsT0FBTyxFQUFFO2dCQUMvRCxJQUFJVSxtQkFBbUIsS0FBSztnQkFFNUIsSUFBTVMsV0FBV0MseUNBQXlDWixjQUFjQyxlQUFlVixZQUFZQztnQkFFbkcsSUFBSW1CLGFBQWEsSUFBSSxFQUFFO29CQUNyQixJQUFNRSxZQUFZRixVQUNaRyxjQUFjdkIsWUFDZHdCLGtCQUFrQkQsWUFBWUUsSUFBSSxDQUFDLFNBQUNDLFdBQWM7d0JBQ2hELElBQU1DLDRCQUE0QkwsVUFBVU0sS0FBSyxDQUFDRixXQUFXSCxhQUFhdkIsWUFBWUM7d0JBRXRGLElBQUkwQiwyQkFBMkI7NEJBQzdCLE9BQU8sSUFBSTt3QkFDYixDQUFDO29CQUNIO29CQUVOaEIsbUJBQW1CYSxpQkFBa0IsR0FBRztnQkFDMUMsQ0FBQztnQkFFRCxPQUFPYjtZQUNUOzs7V0FyRElmO0VBQXlCaUMsaUJBQVE7QUF3RHZDLElBQU1DLG1CQUFtQixJQUFJbEM7SUFFN0IsV0FBZWtDIn0=