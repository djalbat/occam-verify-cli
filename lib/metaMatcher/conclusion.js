"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "conclusionMetaMatcher", {
    enumerable: true,
    get: function() {
        return conclusionMetaMatcher;
    }
});
var _metaMatcher = /*#__PURE__*/ _interopRequireDefault(require("../metaMatcher"));
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
var ConclusionMetaMatcher = /*#__PURE__*/ function(MetaMatcher) {
    _inherits(ConclusionMetaMatcher, MetaMatcher);
    var _super = _createSuper(ConclusionMetaMatcher);
    function ConclusionMetaMatcher() {
        _classCallCheck(this, ConclusionMetaMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(ConclusionMetaMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions) {
                var nonTerminalNodeMatches = false;
                var ruleName = nonTerminalNode.getRuleName(), conclusionNonTerminalNodeRuleName = conclusionNonTerminalNode.getRuleName(), ruleNameMetastatementRuleName = ruleName === _ruleNames.METASTATEMENT_RULE_NAME, conclusionNonTerminalNodeRuleNameMetastatementRuleName = conclusionNonTerminalNodeRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
                if (ruleNameMetastatementRuleName && conclusionNonTerminalNodeRuleNameMetastatementRuleName) {
                    var statementNode = nonTerminalNode, conclusionMetastatementNode = conclusionNonTerminalNode, metastatementNodeMatches = this.matchMetastatementNode(conclusionMetastatementNode, statementNode, metaSubstitutions);
                    if (metastatementNodeMatches) {
                        nonTerminalNodeMatches = true; ///
                    } else {
                        nonTerminalNodeMatches = _get(_getPrototypeOf(ConclusionMetaMatcher.prototype), "matchNonTerminalNode", this).call(this, conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions);
                    }
                } else if (ruleName === conclusionNonTerminalNodeRuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(ConclusionMetaMatcher.prototype), "matchNonTerminalNode", this).call(this, conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions);
                }
                return nonTerminalNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(conclusionMetavariableNode, metastatementNode, metaSubstitutions) {
                var metavariableNodeMatches = true;
                var conclusionMetavariableName = (0, _query.metavariableNameFromMetavariableNode)(conclusionMetavariableNode), metaSubstitution = metaSubstitutions.find(function(metaSubstitution) {
                    var metavariableName = metaSubstitution.getMetavariableName();
                    if (metavariableName === conclusionMetavariableName) {
                        return true;
                    }
                }) || null;
                if (metaSubstitution !== null) {
                    var metaSubstitutionNodesMatch = metaSubstitution.matchMetastatementNode(metastatementNode);
                    metavariableNodeMatches = metaSubstitutionNodesMatch; ///
                }
                return metavariableNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(conclusionMetastatementNode, metastatementNode, metaSubstitutions) {
                var metastatementNodeMatches = false;
                var conclusionNonTerminalNode = conclusionMetastatementNode, conclusionNonTerminalNodeChildNodes = conclusionNonTerminalNode.getChildNodes(), conclusionNonTerminalNodeChildNodesLength = conclusionNonTerminalNodeChildNodes.length;
                if (conclusionNonTerminalNodeChildNodesLength === 1) {
                    var firstConclusionChildNode = (0, _array.first)(conclusionNonTerminalNodeChildNodes), conclusionChildNode = firstConclusionChildNode, conclusionChildNodeNonTerminalNode = conclusionChildNode.isNonTerminalNode();
                    if (conclusionChildNodeNonTerminalNode) {
                        var conclusionNonTerminalChildNode = conclusionChildNode, conclusionNonTerminalChildNodeRuleName = conclusionNonTerminalChildNode.getRuleName(), conclusionNonTerminalChildNodeRuleNameMetavariableRuleName = conclusionNonTerminalChildNodeRuleName === _ruleNames.METAVARIABLE_RULE_NAME;
                        if (conclusionNonTerminalChildNodeRuleNameMetavariableRuleName) {
                            var conclusionMetavariableNode = conclusionNonTerminalChildNode, metavariableNodeMatches = this.matchMetavariableNode(conclusionMetavariableNode, metastatementNode, metaSubstitutions);
                            metastatementNodeMatches = metavariableNodeMatches; ///
                        }
                    }
                }
                return metastatementNodeMatches;
            }
        }
    ]);
    return ConclusionMetaMatcher;
}(_metaMatcher.default);
var conclusionMetaMatcher = new ConclusionMetaMatcher();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tZXRhTWF0Y2hlci9jb25jbHVzaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWV0YU1hdGNoZXIgZnJvbSBcIi4uL21ldGFNYXRjaGVyXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgTUVUQVZBUklBQkxFX1JVTEVfTkFNRSwgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmNsYXNzIENvbmNsdXNpb25NZXRhTWF0Y2hlciBleHRlbmRzIE1ldGFNYXRjaGVyIHtcbiAgbWF0Y2hOb25UZXJtaW5hbE5vZGUoY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBydWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUpLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGVSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKTtcblxuICAgIGlmIChydWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSAmJiBjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBub25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNvbmNsdXNpb25NZXRhc3RhdGVtZW50Tm9kZSA9IGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGUsICAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShjb25jbHVzaW9uTWV0YXN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdHJ1ZTsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gc3VwZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUoY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChydWxlTmFtZSA9PT0gY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lKSB7XG4gICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gc3VwZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUoY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZSwgbm9uVGVybWluYWxOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUoY29uY2x1c2lvbk1ldGF2YXJpYWJsZU5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7XG5cbiAgICBjb25zdCBjb25jbHVzaW9uTWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShjb25jbHVzaW9uTWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWV0YVN1YnN0aXR1dGlvbiA9IG1ldGFTdWJzdGl0dXRpb25zLmZpbmQoKG1ldGFTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhU3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWUgPT09IGNvbmNsdXNpb25NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAobWV0YVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBtZXRhU3Vic3RpdHV0aW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShjb25jbHVzaW9uTWV0YXN0YXRlbWVudE5vZGUsIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGUgPSBjb25jbHVzaW9uTWV0YXN0YXRlbWVudE5vZGUsICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoID0gY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBmaXJzdENvbmNsdXNpb25DaGlsZE5vZGUgPSBmaXJzdChjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyksXG4gICAgICAgICAgICBjb25jbHVzaW9uQ2hpbGROb2RlID0gZmlyc3RDb25jbHVzaW9uQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBjb25jbHVzaW9uQ2hpbGROb2RlTm9uVGVybWluYWxOb2RlID0gY29uY2x1c2lvbkNoaWxkTm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoY29uY2x1c2lvbkNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBjb25jbHVzaW9uTm9uVGVybWluYWxDaGlsZE5vZGUgPSBjb25jbHVzaW9uQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICAgIGNvbmNsdXNpb25Ob25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lID0gY29uY2x1c2lvbk5vblRlcm1pbmFsQ2hpbGROb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGNvbmNsdXNpb25Ob25UZXJtaW5hbENoaWxkTm9kZVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUgPSAoY29uY2x1c2lvbk5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUgPT09IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUpO1xuXG4gICAgICAgIGlmIChjb25jbHVzaW9uTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgY29uY2x1c2lvbk1ldGF2YXJpYWJsZU5vZGUgPSBjb25jbHVzaW9uTm9uVGVybWluYWxDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOb2RlKGNvbmNsdXNpb25NZXRhdmFyaWFibGVOb2RlLCBtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcztcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29uY2x1c2lvbk1ldGFNYXRjaGVyID0gbmV3IENvbmNsdXNpb25NZXRhTWF0Y2hlcigpO1xuIl0sIm5hbWVzIjpbImNvbmNsdXNpb25NZXRhTWF0Y2hlciIsIkNvbmNsdXNpb25NZXRhTWF0Y2hlciIsIm1hdGNoTm9uVGVybWluYWxOb2RlIiwiY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm1ldGFTdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJjb25jbHVzaW9uTm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJydWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwiY29uY2x1c2lvbk5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwic3RhdGVtZW50Tm9kZSIsImNvbmNsdXNpb25NZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJjb25jbHVzaW9uTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJjb25jbHVzaW9uTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGFTdWJzdGl0dXRpb24iLCJmaW5kIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsImNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNvbmNsdXNpb25Ob25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RDb25jbHVzaW9uQ2hpbGROb2RlIiwiZmlyc3QiLCJjb25jbHVzaW9uQ2hpbGROb2RlIiwiY29uY2x1c2lvbkNoaWxkTm9kZU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwiY29uY2x1c2lvbk5vblRlcm1pbmFsQ2hpbGROb2RlIiwiY29uY2x1c2lvbk5vblRlcm1pbmFsQ2hpbGROb2RlUnVsZU5hbWUiLCJjb25jbHVzaW9uTm9uVGVybWluYWxDaGlsZE5vZGVSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsIk1ldGFNYXRjaGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxRmFBOzs7ZUFBQUE7OztnRUFuRlc7cUJBRUY7cUJBQytCO3lCQUNXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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