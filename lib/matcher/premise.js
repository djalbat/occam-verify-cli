"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "premiseMatcher", {
    enumerable: true,
    get: function() {
        return premiseMatcher;
    }
});
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("../matcher"));
var _substitution = /*#__PURE__*/ _interopRequireDefault(require("../substitution"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
var PremiseMatcher = /*#__PURE__*/ function(Matcher) {
    _inherits(PremiseMatcher, Matcher);
    var _super = _createSuper(PremiseMatcher);
    function PremiseMatcher() {
        _classCallCheck(this, PremiseMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(PremiseMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions) {
                var nonTerminalNodeMatches = false;
                var ruleName = nonTerminalNode.getRuleName(), premiseNonTerminalNodeRuleName = premiseNonTerminalNode.getRuleName(), ruleNameStatementRuleName = ruleName === _ruleNames.STATEMENT_RULE_NAME, premiseNonTerminalNodeRuleNameMetastatementRuleName = premiseNonTerminalNodeRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
                if (ruleNameStatementRuleName && premiseNonTerminalNodeRuleNameMetastatementRuleName) {
                    var statementNode = nonTerminalNode, premiseMetastatementNode = premiseNonTerminalNode, metastatementNodeMatches = this.matchMetastatementNode(premiseMetastatementNode, statementNode, substitutions);
                    if (metastatementNodeMatches) {
                        nonTerminalNodeMatches = true;
                    } else {
                        nonTerminalNodeMatches = _get(_getPrototypeOf(PremiseMatcher.prototype), "matchNonTerminalNode", this).call(this, premiseNonTerminalNode, nonTerminalNode, substitutions);
                    }
                } else if (ruleName === premiseNonTerminalNodeRuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(PremiseMatcher.prototype), "matchNonTerminalNode", this).call(this, premiseNonTerminalNode, nonTerminalNode, substitutions);
                }
                return nonTerminalNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(premiseMetavariableNode, statementNode, substitutions) {
                var metavariableNodeMatches;
                var premiseMetavariableName = (0, _query.metavariableNameFromMetavariableNode)(premiseMetavariableNode), substitution = substitutions.find(function(substitution) {
                    var metavariableName = substitution.getMetavariableName();
                    if (metavariableName === premiseMetavariableName) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var substitutionNodesMatch = substitution.matchStatementNode(statementNode);
                    metavariableNodeMatches = substitutionNodesMatch; ///
                } else {
                    var metavariableName = premiseMetavariableName, substitution1 = _substitution.default.fromMetavariableNameAndStatementNode(metavariableName, statementNode);
                    substitutions.push(substitution1);
                    metavariableNodeMatches = true;
                }
                return metavariableNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(premiseMetastatementNode, statementNode, substitutions) {
                var metastatementNodeMatches = false;
                var premiseNonTerminalNode = premiseMetastatementNode, premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(), premiseNonTerminalNodeChildNodesLength = premiseNonTerminalNodeChildNodes.length;
                if (premiseNonTerminalNodeChildNodesLength === 1) {
                    var firstPremiseChildNode = (0, _array.first)(premiseNonTerminalNodeChildNodes), premiseChildNode = firstPremiseChildNode, premiseChildNodeNonTerminalNode = premiseChildNode.isNonTerminalNode();
                    if (premiseChildNodeNonTerminalNode) {
                        var premiseNonTerminalChildNode = premiseChildNode, premiseNonTerminalChildNodeRuleName = premiseNonTerminalChildNode.getRuleName(), premiseNonTerminalChildNodeRuleNameMetavariableRuleName = premiseNonTerminalChildNodeRuleName === _ruleNames.METAVARIABLE_RULE_NAME;
                        if (premiseNonTerminalChildNodeRuleNameMetavariableRuleName) {
                            var premiseMetavariableNode = premiseNonTerminalChildNode, metaVariableNodeMatches = this.matchMetavariableNode(premiseMetavariableNode, statementNode, substitutions);
                            metastatementNodeMatches = metaVariableNodeMatches; ///
                        }
                    }
                }
                return metastatementNodeMatches;
            }
        }
    ]);
    return PremiseMatcher;
}(_matcher.default);
var premiseMatcher = new PremiseMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVyL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXRjaGVyIGZyb20gXCIuLi9tYXRjaGVyXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBTVEFURU1FTlRfUlVMRV9OQU1FLCBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRX0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jbGFzcyBQcmVtaXNlTWF0Y2hlciBleHRlbmRzIE1hdGNoZXIge1xuICBtYXRjaE5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWVTdGF0ZW1lbnRSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gU1RBVEVNRU5UX1JVTEVfTkFNRSksXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lID0gKHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUpO1xuXG4gICAgaWYgKHJ1bGVOYW1lU3RhdGVtZW50UnVsZU5hbWUgJiYgcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gbm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLCAgLy8vXG4gICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUocHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBlci5tYXRjaE5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocnVsZU5hbWUgPT09IHByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSkge1xuICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZSA9PT0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBzdWJzdGl0dXRpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2g7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHByZW1pc2VNZXRhdmFyaWFibGVOYW1lLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IFN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTmFtZUFuZFN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTmFtZSwgc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShwcmVtaXNlTWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlTm9uVGVybWluYWxOb2RlID0gcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9IHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RQcmVtaXNlQ2hpbGROb2RlID0gZmlyc3QocHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZSA9IGZpcnN0UHJlbWlzZUNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VDaGlsZE5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKHByZW1pc2VDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlID0gcHJlbWlzZUNoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lID0gKHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID09PSBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FKTtcblxuICAgICAgICBpZiAocHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IHByZW1pc2VNZXRhdmFyaWFibGVOb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YVZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtZXRhVmFyaWFibGVOb2RlTWF0Y2hlczsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcmVtaXNlTWF0Y2hlciA9IG5ldyBQcmVtaXNlTWF0Y2hlcigpO1xuIl0sIm5hbWVzIjpbInByZW1pc2VNYXRjaGVyIiwiUHJlbWlzZU1hdGNoZXIiLCJtYXRjaE5vblRlcm1pbmFsTm9kZSIsInByZW1pc2VOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJzdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJydWxlTmFtZVN0YXRlbWVudFJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwic3RhdGVtZW50Tm9kZSIsInByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwicHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdWJzdGl0dXRpb25Ob2Rlc01hdGNoIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRTdGF0ZW1lbnROb2RlIiwicHVzaCIsInByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RQcmVtaXNlQ2hpbGROb2RlIiwiZmlyc3QiLCJwcmVtaXNlQ2hpbGROb2RlIiwicHJlbWlzZUNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwicHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlIiwicHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUiLCJwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsIm1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzIiwiTWF0Y2hlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkZhQTs7O2VBQUFBOzs7NERBM0ZPO2lFQUNLO3FCQUVIO3FCQUMrQjt5QkFD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