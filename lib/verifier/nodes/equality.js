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
                debugger;
                // const types = [],
                //       termsVerified = verifyTerms(leftTermNode, rightTermNode, types, context, verifyAhead);
                //
                // if (termsVerified) {
                //   const equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode),
                //         equalityA = equality, ///
                //         equalitiesB = equalities, ///
                //         equalityMatches = equalitiesB.some((equalityB) => { ///
                //           const equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, context);
                //
                //           if (equalityAMatchesEqualityB) {
                //             return true;
                //           }
                //         });
                //
                //   termNodeVerified = equalityMatches;  ///
                // }
                return termNodeVerified;
            }
        }
    ]);
    return EqualityNodesVerifier;
}(_nodes.default);
var equalityNodesVerifier = new EqualityNodesVerifier();
var _default = equalityNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVxdWFsaXR5IGZyb20gXCIuLi8uLi9lcXVhbGl0eVwiO1xuaW1wb3J0IHZlcmlmeVRlcm1zIGZyb20gXCIuLi8uLi92ZXJpZnkvdGVybXNcIjtcbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuXG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY2xhc3MgRXF1YWxpdHlOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGlmIChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZVRlcm1SdWxlTmFtZSA9IChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKSxcbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAocmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lVGVybVJ1bGVOYW1lICYmIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgIC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgbGVmdENoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0Q2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhsZWZ0Q2hpbGROb2RlcywgcmlnaHRDaGlsZE5vZGVzLCBlcXVhbGl0aWVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgZGVidWdnZXJcblxuICAgIC8vIGNvbnN0IHR5cGVzID0gW10sXG4gICAgLy8gICAgICAgdGVybXNWZXJpZmllZCA9IHZlcmlmeVRlcm1zKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcbiAgICAvL1xuICAgIC8vIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgLy8gICBjb25zdCBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSksXG4gICAgLy8gICAgICAgICBlcXVhbGl0eUEgPSBlcXVhbGl0eSwgLy8vXG4gICAgLy8gICAgICAgICBlcXVhbGl0aWVzQiA9IGVxdWFsaXRpZXMsIC8vL1xuICAgIC8vICAgICAgICAgZXF1YWxpdHlNYXRjaGVzID0gZXF1YWxpdGllc0Iuc29tZSgoZXF1YWxpdHlCKSA9PiB7IC8vL1xuICAgIC8vICAgICAgICAgICBjb25zdCBlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCID0gZXF1YWxpdHlBLm1hdGNoKGVxdWFsaXR5QiwgZXF1YWxpdGllc0IsIGNvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gICAgICAgICAgIGlmIChlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgLy8gICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vXG4gICAgLy8gICB0ZXJtTm9kZVZlcmlmaWVkID0gZXF1YWxpdHlNYXRjaGVzOyAgLy8vXG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIHRlcm1Ob2RlVmVyaWZpZWQ7XG4gIH1cbn1cblxuY29uc3QgZXF1YWxpdHlOb2Rlc1ZlcmlmaWVyID0gbmV3IEVxdWFsaXR5Tm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBlcXVhbGl0eU5vZGVzVmVyaWZpZXI7XG4iXSwibmFtZXMiOlsiRXF1YWxpdHlOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlIiwiZXF1YWxpdGllcyIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwibGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwiVEVSTV9SVUxFX05BTUUiLCJyaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lVGVybVJ1bGVOYW1lIiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsInRlcm1Ob2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtTm9kZSIsImxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImxlZnRDaGlsZE5vZGVzIiwicmlnaHRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Q2hpbGROb2RlcyIsIk5vZGVzVmVyaWZpZXIiLCJlcXVhbGl0eU5vZGVzVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNFQTs7O2VBQUE7OzsrREFwRXFCOzREQUNHOzREQUNFO3lCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQUEsQUFBTUEsc0NBNERILEFBNURIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLG1CQUFtQixFQUFFQyxvQkFBb0IsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7Z0JBQy9GLElBQUlDLDBCQUEwQjtnQkFFOUIsSUFBTUMsOEJBQThCTixvQkFBb0JPLFdBQVcsSUFDN0RDLCtCQUErQlAscUJBQXFCTSxXQUFXO2dCQUVyRSxJQUFJRCxnQ0FBZ0NFLDhCQUE4QjtvQkFDaEUsSUFBTUMsMENBQTJDSCxnQ0FBZ0NJLHlCQUFjLEVBQ3pGQywyQ0FBNENILGlDQUFpQ0UseUJBQWM7b0JBRWpHLElBQUlELDJDQUEyQ0UsMENBQTBDO3dCQUN2RixJQUFNQyxlQUFlWixxQkFDZmEsZ0JBQWdCWixzQkFDaEJhLG1CQUFtQixJQUFJLENBQUNDLGNBQWMsQ0FBQ0gsY0FBY0MsZUFBZVgsWUFBWUMsU0FBU0M7d0JBRS9GQywwQkFBMEJTLGtCQUFtQixHQUFHO29CQUNsRDtvQkFFQSxJQUFJLENBQUNULHlCQUF5Qjt3QkFDNUIsSUFBTVcsZ0NBQWdDaEIsb0JBQW9CaUIsYUFBYSxJQUNqRUMsaUNBQWlDakIscUJBQXFCZ0IsYUFBYSxJQUNuRUUsaUJBQWlCSCwrQkFDakJJLGtCQUFrQkYsZ0NBQ2xCRyxxQkFBcUIsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsZ0JBQWdCQyxpQkFBaUJsQixZQUFZQyxTQUFTQzt3QkFFdkdDLDBCQUEwQmdCLG9CQUFvQixHQUFHO29CQUNuRDtnQkFDRjtnQkFFQSxPQUFPaEI7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlSCxZQUFZLEVBQUVDLGFBQWEsRUFBRVgsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7Z0JBQzFFLElBQUlVLG1CQUFtQjtnQkFFdkIsUUFBUTtnQkFFUixvQkFBb0I7Z0JBQ3BCLCtGQUErRjtnQkFDL0YsRUFBRTtnQkFDRix1QkFBdUI7Z0JBQ3ZCLDZGQUE2RjtnQkFDN0Ysb0NBQW9DO2dCQUNwQyx3Q0FBd0M7Z0JBQ3hDLGtFQUFrRTtnQkFDbEUsZ0dBQWdHO2dCQUNoRyxFQUFFO2dCQUNGLDZDQUE2QztnQkFDN0MsMkJBQTJCO2dCQUMzQixjQUFjO2dCQUNkLGNBQWM7Z0JBQ2QsRUFBRTtnQkFDRiw2Q0FBNkM7Z0JBQzdDLElBQUk7Z0JBRUosT0FBT0E7WUFDVDs7O1dBekRJaEI7RUFBOEJ5QixjQUFhO0FBNERqRCxJQUFNQyx3QkFBd0IsSUFBSTFCO0lBRWxDLFdBQWUwQiJ9