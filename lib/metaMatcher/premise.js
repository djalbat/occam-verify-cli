"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "premiseMetaMatcher", {
    enumerable: true,
    get: function() {
        return premiseMetaMatcher;
    }
});
var _metaMatcher = /*#__PURE__*/ _interopRequireDefault(require("../metaMatcher"));
var _metaSubstitution = /*#__PURE__*/ _interopRequireDefault(require("../metaSubstitution"));
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
var PremiseMetaMatcher = /*#__PURE__*/ function(MetaMatcher) {
    _inherits(PremiseMetaMatcher, MetaMatcher);
    var _super = _createSuper(PremiseMetaMatcher);
    function PremiseMetaMatcher() {
        _classCallCheck(this, PremiseMetaMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(PremiseMetaMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions) {
                var nonTerminalNodeMatches = false;
                var ruleName = nonTerminalNode.getRuleName(), premiseNonTerminalNodeRuleName = premiseNonTerminalNode.getRuleName(), ruleNameMetastatementRuleName = ruleName === _ruleNames.METASTATEMENT_RULE_NAME, premiseNonTerminalNodeRuleNameMetastatementRuleName = premiseNonTerminalNodeRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
                if (ruleNameMetastatementRuleName && premiseNonTerminalNodeRuleNameMetastatementRuleName) {
                    var metastatementNode = nonTerminalNode, premiseMetastatementNode = premiseNonTerminalNode, metastatementNodeMatches = this.matchMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions);
                    if (metastatementNodeMatches) {
                        nonTerminalNodeMatches = true;
                    } else {
                        nonTerminalNodeMatches = _get(_getPrototypeOf(PremiseMetaMatcher.prototype), "matchNonTerminalNode", this).call(this, premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);
                    }
                } else if (ruleName === premiseNonTerminalNodeRuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(PremiseMetaMatcher.prototype), "matchNonTerminalNode", this).call(this, premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);
                }
                return nonTerminalNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(premiseMetavariableNode, metastatementNode, metaSubstitutions) {
                var metavariableNodeMatches;
                var premiseMetavariableName = (0, _query.metavariableNameFromMetavariableNode)(premiseMetavariableNode), metaSubstitution = metaSubstitutions.find(function(metaSubstitution) {
                    var metavariableName = metaSubstitution.getMetavariableName();
                    if (metavariableName === premiseMetavariableName) {
                        return true;
                    }
                }) || null;
                if (metaSubstitution !== null) {
                    var metaSubstitutionNodesMatch = metaSubstitution.matchMetastatementNode(metastatementNode);
                    metavariableNodeMatches = metaSubstitutionNodesMatch; ///
                } else {
                    var metavariableName = premiseMetavariableName, metaSubstitution1 = _metaSubstitution.default.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode);
                    metaSubstitutions.push(metaSubstitution1);
                    metavariableNodeMatches = true;
                }
                return metavariableNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions) {
                var metastatementNodeMatches = false;
                var premiseNonTerminalNode = premiseMetastatementNode, premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(), premiseNonTerminalNodeChildNodesLength = premiseNonTerminalNodeChildNodes.length;
                if (premiseNonTerminalNodeChildNodesLength === 1) {
                    var firstPremiseChildNode = (0, _array.first)(premiseNonTerminalNodeChildNodes), premiseChildNode = firstPremiseChildNode, premiseChildNodeNonTerminalNode = premiseChildNode.isNonTerminalNode();
                    if (premiseChildNodeNonTerminalNode) {
                        var premiseNonTerminalChildNode = premiseChildNode, premiseNonTerminalChildNodeRuleName = premiseNonTerminalChildNode.getRuleName(), premiseNonTerminalChildNodeRuleNameMetavariableRuleName = premiseNonTerminalChildNodeRuleName === _ruleNames.METAVARIABLE_RULE_NAME;
                        if (premiseNonTerminalChildNodeRuleNameMetavariableRuleName) {
                            var premiseMetavariableNode = premiseNonTerminalChildNode, metaVariableNodeMatches = this.matchMetavariableNode(premiseMetavariableNode, metastatementNode, metaSubstitutions);
                            metastatementNodeMatches = metaVariableNodeMatches; ///
                        }
                    }
                }
                return metastatementNodeMatches;
            }
        }
    ]);
    return PremiseMetaMatcher;
}(_metaMatcher.default);
var premiseMetaMatcher = new PremiseMetaMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhTWF0Y2hlci9wcmVtaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWV0YU1hdGNoZXIgZnJvbSBcIi4uL21ldGFNYXRjaGVyXCI7XG5pbXBvcnQgTWV0YVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vbWV0YVN1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5jbGFzcyBQcmVtaXNlTWV0YU1hdGNoZXIgZXh0ZW5kcyBNZXRhTWF0Y2hlciB7XG4gIG1hdGNoTm9uVGVybWluYWxOb2RlKHByZW1pc2VOb25UZXJtaW5hbE5vZGUsIG5vblRlcm1pbmFsTm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKSxcbiAgICAgICAgICBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAocHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgICBpZiAocnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgJiYgcHJlbWlzZU5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZSA9IG5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgcHJlbWlzZU1ldGFzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZSwgIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBlci5tYXRjaE5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJ1bGVOYW1lID09PSBwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBlci5tYXRjaE5vblRlcm1pbmFsTm9kZShwcmVtaXNlTm9uVGVybWluYWxOb2RlLCBub25UZXJtaW5hbE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuXG4gICAgY29uc3QgcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb24gPSBtZXRhU3Vic3RpdHV0aW9ucy5maW5kKChtZXRhU3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YVN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lID09PSBwcmVtaXNlTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKG1ldGFTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoID0gbWV0YVN1YnN0aXR1dGlvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gcHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUsIC8vL1xuICAgICAgICAgICAgbWV0YVN1YnN0aXR1dGlvbiA9IE1ldGFTdWJzdGl0dXRpb24uZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZShtZXRhdmFyaWFibGVOYW1lLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIG1ldGFTdWJzdGl0dXRpb25zLnB1c2gobWV0YVN1YnN0aXR1dGlvbik7XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnROb2RlKHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZU5vblRlcm1pbmFsTm9kZSA9IHByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gcHJlbWlzZU5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGggPSBwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlbWlzZU5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0UHJlbWlzZUNoaWxkTm9kZSA9IGZpcnN0KHByZW1pc2VOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIHByZW1pc2VDaGlsZE5vZGUgPSBmaXJzdFByZW1pc2VDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIHByZW1pc2VDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUgPSBwcmVtaXNlQ2hpbGROb2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChwcmVtaXNlQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZSA9IHByZW1pc2VDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUgPSBwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgcHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSA9IChwcmVtaXNlTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZSA9PT0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUpIHtcbiAgICAgICAgICBjb25zdCBwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSA9IHByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGF2YXJpYWJsZU5vZGUocHJlbWlzZU1ldGF2YXJpYWJsZU5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtZXRhVmFyaWFibGVOb2RlTWF0Y2hlczsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwcmVtaXNlTWV0YU1hdGNoZXIgPSBuZXcgUHJlbWlzZU1ldGFNYXRjaGVyKCk7XG4iXSwibmFtZXMiOlsicHJlbWlzZU1ldGFNYXRjaGVyIiwiUHJlbWlzZU1ldGFNYXRjaGVyIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlIiwibWV0YVN1YnN0aXR1dGlvbnMiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInByZW1pc2VOb25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsInJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsInByZW1pc2VNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJwcmVtaXNlTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwicHJlbWlzZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhU3Vic3RpdHV0aW9uIiwiZmluZCIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2giLCJNZXRhU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZSIsInB1c2giLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJwcmVtaXNlTm9uVGVybWluYWxOb2RlQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UHJlbWlzZUNoaWxkTm9kZSIsImZpcnN0IiwicHJlbWlzZUNoaWxkTm9kZSIsInByZW1pc2VDaGlsZE5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsInByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZSIsInByZW1pc2VOb25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lIiwicHJlbWlzZU5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSIsIk1FVEFWQVJJQUJMRV9SVUxFX05BTUUiLCJtZXRhVmFyaWFibGVOb2RlTWF0Y2hlcyIsIk1ldGFNYXRjaGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2RmFBOzs7ZUFBQUE7OztnRUEzRlc7cUVBQ0s7cUJBRVA7cUJBQytCO3lCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEUsSUFBQSxBQUFNQyxtQ0FvRkgsQUFwRkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkMsc0JBQXNCLEVBQUVDLGVBQWUsRUFBRUMsaUJBQWlCLEVBQUU7Z0JBQy9FLElBQUlDLHlCQUF5QixLQUFLO2dCQUVsQyxJQUFNQyxXQUFXSCxnQkFBZ0JJLFdBQVcsSUFDdENDLGlDQUFpQ04sdUJBQXVCSyxXQUFXLElBQ25FRSxnQ0FBaUNILGFBQWFJLGtDQUF1QixFQUNyRUMsc0RBQXVESCxtQ0FBbUNFLGtDQUF1QjtnQkFFdkgsSUFBSUQsaUNBQWlDRSxxREFBcUQ7b0JBQ3hGLElBQU1DLG9CQUFvQlQsaUJBQ3BCVSwyQkFBMkJYLHdCQUMzQlksMkJBQTJCLElBQUksQ0FBQ0Msc0JBQXNCLENBQUNGLDBCQUEwQkQsbUJBQW1CUjtvQkFFMUcsSUFBSVUsMEJBQTBCO3dCQUM1QlQseUJBQXlCLElBQUk7b0JBQy9CLE9BQU87d0JBQ0xBLHlCQUF5QixxQkFqQjNCTCwrQkFpQmlDQyx3QkFBTixJQUFLLGFBQXNCQyx3QkFBd0JDLGlCQUFpQkM7b0JBQy9GLENBQUM7Z0JBQ0gsT0FBTyxJQUFJRSxhQUFhRSxnQ0FBZ0M7b0JBQ3RESCx5QkFBeUIscUJBcEJ6QkwsK0JBb0IrQkMsd0JBQU4sSUFBSyxhQUFzQkMsd0JBQXdCQyxpQkFBaUJDO2dCQUMvRixDQUFDO2dCQUVELE9BQU9DO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyx1QkFBdUIsRUFBRUwsaUJBQWlCLEVBQUVSLGlCQUFpQixFQUFFO2dCQUNuRixJQUFJYztnQkFFSixJQUFNQywwQkFBMEJDLElBQUFBLDJDQUFvQyxFQUFDSCwwQkFDL0RJLG1CQUFtQmpCLGtCQUFrQmtCLElBQUksQ0FBQyxTQUFDRCxrQkFBcUI7b0JBQzlELElBQU1FLG1CQUFtQkYsaUJBQWlCRyxtQkFBbUI7b0JBRTdELElBQUlELHFCQUFxQkoseUJBQXlCO3dCQUNoRCxPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxNQUFNLElBQUk7Z0JBRWhCLElBQUlFLHFCQUFxQixJQUFJLEVBQUU7b0JBQzdCLElBQU1JLDZCQUE2QkosaUJBQWlCTixzQkFBc0IsQ0FBQ0g7b0JBRTNFTSwwQkFBMEJPLDRCQUE2QixHQUFHO2dCQUM1RCxPQUFPO29CQUNMLElBQU1GLG1CQUFtQkoseUJBQ25CRSxvQkFBbUJLLHlCQUFnQixDQUFDQyx3Q0FBd0MsQ0FBQ0osa0JBQWtCWDtvQkFFckdSLGtCQUFrQndCLElBQUksQ0FBQ1A7b0JBRXZCSCwwQkFBMEIsSUFBSTtnQkFDaEMsQ0FBQztnQkFFRCxPQUFPQTtZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkYsd0JBQXdCLEVBQUVELGlCQUFpQixFQUFFUixpQkFBaUIsRUFBRTtnQkFDckYsSUFBSVUsMkJBQTJCLEtBQUs7Z0JBRXBDLElBQU1aLHlCQUF5QlcsMEJBQ3pCZ0IsbUNBQW1DM0IsdUJBQXVCNEIsYUFBYSxJQUN2RUMseUNBQXlDRixpQ0FBaUNHLE1BQU07Z0JBRXRGLElBQUlELDJDQUEyQyxHQUFHO29CQUNoRCxJQUFNRSx3QkFBd0JDLElBQUFBLFlBQUssRUFBQ0wsbUNBQzlCTSxtQkFBbUJGLHVCQUNuQkcsa0NBQWtDRCxpQkFBaUJFLGlCQUFpQjtvQkFFMUUsSUFBSUQsaUNBQWlDO3dCQUNuQyxJQUFNRSw4QkFBOEJILGtCQUM5Qkksc0NBQXNDRCw0QkFBNEIvQixXQUFXLElBQzdFaUMsMERBQTJERCx3Q0FBd0NFLGlDQUFzQjt3QkFFL0gsSUFBSUQseURBQXlEOzRCQUMzRCxJQUFNdkIsMEJBQTBCcUIsNkJBQzFCSSwwQkFBMEIsSUFBSSxDQUFDMUIscUJBQXFCLENBQUNDLHlCQUF5QkwsbUJBQW1CUjs0QkFFdkdVLDJCQUEyQjRCLHlCQUF5QixHQUFHO3dCQUN6RCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPNUI7WUFDVDs7O1dBakZJZDtFQUEyQjJDLG9CQUFXO0FBb0ZyQyxJQUFNNUMscUJBQXFCLElBQUlDIn0=