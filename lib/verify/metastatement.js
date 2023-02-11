"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyMetastatement;
    }
});
var _verifier = /*#__PURE__*/ _interopRequireDefault(require("../verifier"));
var _ruleNames = require("../ruleNames");
var _query = require("../utilities/query");
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
var MetastatementVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(MetastatementVerifier, Verifier);
    var _super = _createSuper(MetastatementVerifier);
    function MetastatementVerifier() {
        _classCallCheck(this, MetastatementVerifier);
        return _super.apply(this, arguments);
    }
    _createClass(MetastatementVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaproofContext) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNode = nonTerminalNodeA, ruleName = nonTerminalNode.getRuleName(); ///
                switch(ruleName){
                    case _ruleNames.METAVARIABLE_RULE_NAME:
                        {
                            var metavariableNode = nonTerminalNode, metavariableNodeVerified = this.verifyMetavariableNode(metavariableNode, metaproofContext);
                            nonTerminalNodeVerified = metavariableNodeVerified; ///
                            break;
                        }
                    default:
                        {
                            var childNodes = nonTerminalNode.getChildNodes(), nodesA = childNodes, nodesB = childNodes, nodesVerified = this.verifyNodes(nodesA, nodesB, metaproofContext);
                            nonTerminalNodeVerified = nodesVerified; ///
                            break;
                        }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNode, metaproofContext) {
                var metavariableNodeVerified = false;
                var metavariableName = (0, _query.metavariableNameFromMetavariableNode)(metavariableNode), metavariablePresent = metaproofContext.isMetavariablePresentByMetavariableName(metavariableName);
                if (!metavariablePresent) {
                    var metavariableString = metaproofContext.nodeAsString(metavariableNode);
                    metaproofContext.error("The '".concat(metavariableString, "' metavariable is not present."), metavariableNode);
                } else {
                    metavariableNodeVerified = true;
                }
                return metavariableNodeVerified;
            }
        }
    ]);
    return MetastatementVerifier;
}(_verifier.default);
var metastatementVerifier = new MetastatementVerifier();
function verifyMetastatement(metastatementNode, assignments, derived, metaproofContext) {
    var metastatementVerified = false;
    if (!metastatementVerified) {
        var nonTerminalNodeA = metastatementNode, nonTerminalNodeB = metastatementNode, nonTerminalNodeVerified = metastatementVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaproofContext);
        metastatementVerified = nonTerminalNodeVerified; ///
    }
    return metastatementVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXN0YXRlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllclwiO1xuXG5pbXBvcnQgeyBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jbGFzcyBNZXRhc3RhdGVtZW50VmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBtZXRhcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub25UZXJtaW5hbE5vZGVBLCAvLy9cbiAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpOyAvLy9cblxuICAgIHN3aXRjaCAocnVsZU5hbWUpIHtcbiAgICAgIGNhc2UgTUVUQVZBUklBQkxFX1JVTEVfTkFNRToge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbm9uVGVybWluYWxOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgbm9kZXNBID0gY2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIG5vZGVzQiA9IGNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICBub2Rlc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlOb2Rlcyhub2Rlc0EsIG5vZGVzQiwgbWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBub2Rlc1ZlcmlmaWVkOyAvLy9cblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBtZXRhcHJvb2ZDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXByb29mQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIG1ldGFwcm9vZkNvbnRleHQuZXJyb3IoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCwgbWV0YXZhcmlhYmxlTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBtZXRhc3RhdGVtZW50VmVyaWZpZXIgPSBuZXcgTWV0YXN0YXRlbWVudFZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeU1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBtZXRhcHJvb2ZDb250ZXh0KSB7XG4gIGxldCBtZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBmYWxzZTtcblxuICBpZiAoIW1ldGFzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBtZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFzdGF0ZW1lbnRWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbWV0YXByb29mQ29udGV4dCk7XG5cbiAgICBtZXRhc3RhdGVtZW50VmVyaWZpZWQgPSBub25UZXJtaW5hbE5vZGVWZXJpZmllZDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlNZXRhc3RhdGVtZW50IiwiTWV0YXN0YXRlbWVudFZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJtZXRhcHJvb2ZDb250ZXh0Iiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJub25UZXJtaW5hbE5vZGUiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQiLCJ2ZXJpZnlNZXRhdmFyaWFibGVOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc1ZlcmlmaWVkIiwidmVyaWZ5Tm9kZXMiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImVycm9yIiwiVmVyaWZpZXIiLCJtZXRhc3RhdGVtZW50VmVyaWZpZXIiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsIm1ldGFzdGF0ZW1lbnRWZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkRBOzs7ZUFBd0JBOzs7NkRBekRIO3lCQUVrQjtxQkFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRCxJQUFBLEFBQU1DLHNDQWtESCxBQWxESDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFO2dCQUMxRSxJQUFJQywwQkFBMEIsS0FBSztnQkFFbkMsSUFBTUMsa0JBQWtCSixrQkFDbEJLLFdBQVdELGdCQUFnQkUsV0FBVyxJQUFJLEdBQUc7Z0JBRW5ELE9BQVFEO29CQUNOLEtBQUtFLGlDQUFzQjt3QkFBRTs0QkFDM0IsSUFBTUMsbUJBQW1CSixpQkFDbkJLLDJCQUEyQixJQUFJLENBQUNDLHNCQUFzQixDQUFDRixrQkFBa0JOOzRCQUUvRUMsMEJBQTBCTSwwQkFBMEIsR0FBRzs0QkFFdkQsS0FBTTt3QkFDUjtvQkFFQTt3QkFBUzs0QkFDUCxJQUFNRSxhQUFhUCxnQkFBZ0JRLGFBQWEsSUFDMUNDLFNBQVNGLFlBQ1RHLFNBQVNILFlBQ1RJLGdCQUFnQixJQUFJLENBQUNDLFdBQVcsQ0FBQ0gsUUFBUUMsUUFBUVo7NEJBRXZEQywwQkFBMEJZLGVBQWUsR0FBRzs0QkFFNUMsS0FBTTt3QkFDUjtnQkFDRjtnQkFFQSxPQUFPWjtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkYsZ0JBQWdCLEVBQUVOLGdCQUFnQixFQUFFO2dCQUN6RCxJQUFJTywyQkFBMkIsS0FBSztnQkFFcEMsSUFBTVEsbUJBQW1CQyxJQUFBQSwyQ0FBb0MsRUFBQ1YsbUJBQ3hEVyxzQkFBc0JqQixpQkFBaUJrQix1Q0FBdUMsQ0FBQ0g7Z0JBRXJGLElBQUksQ0FBQ0UscUJBQXFCO29CQUN4QixJQUFNRSxxQkFBcUJuQixpQkFBaUJvQixZQUFZLENBQUNkO29CQUV6RE4saUJBQWlCcUIsS0FBSyxDQUFDLEFBQUMsUUFBMEIsT0FBbkJGLG9CQUFtQixtQ0FBaUNiO2dCQUNyRixPQUFPO29CQUNMQywyQkFBMkIsSUFBSTtnQkFDakMsQ0FBQztnQkFFRCxPQUFPQTtZQUNUOzs7V0EvQ0lYO0VBQThCMEIsaUJBQVE7QUFrRDVDLElBQU1DLHdCQUF3QixJQUFJM0I7QUFFbkIsU0FBU0Qsb0JBQW9CNkIsaUJBQWlCLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFMUIsZ0JBQWdCLEVBQUU7SUFDckcsSUFBSTJCLHdCQUF3QixLQUFLO0lBRWpDLElBQUksQ0FBQ0EsdUJBQXVCO1FBQzFCLElBQU03QixtQkFBbUIwQixtQkFDbkJ6QixtQkFBbUJ5QixtQkFDbkJ2QiwwQkFBMEJzQixzQkFBc0IxQixxQkFBcUIsQ0FBQ0Msa0JBQWtCQyxrQkFBa0JDO1FBRWhIMkIsd0JBQXdCMUIseUJBQTBCLEdBQUc7SUFDdkQsQ0FBQztJQUVELE9BQU8wQjtBQUNUIn0=