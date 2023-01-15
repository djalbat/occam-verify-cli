"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaMatcher;
    }
});
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("./matcher"));
var _metaSubstitution = /*#__PURE__*/ _interopRequireDefault(require("./metaSubstitution"));
var _array = require("./utilities/array");
var _query = require("./utilities/query");
var _ruleNames = require("./ruleNames");
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
var MetaMatcher = /*#__PURE__*/ function(Matcher) {
    _inherits(MetaMatcher, Matcher);
    var _super = _createSuper(MetaMatcher);
    function MetaMatcher() {
        _classCallCheck(this, MetaMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(MetaMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions) {
                var nonTerminalNodeMatches = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(), nonTerminalNodeARuleNameMetastatementRuleName = nonTerminalNodeARuleName === _ruleNames.METASTATEMENT_RULE_NAME, nonTerminalNodeBRuleNameMetastatementRuleName = nonTerminalNodeBRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
                if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameMetastatementRuleName) {
                    var metastatementNodeA = nonTerminalNodeB, metastatementNodeB = nonTerminalNodeA, metastatementNodeMatches = this.matchMetastatementNode(metastatementNodeA, metastatementNodeB, metaSubstitutions);
                    if (metastatementNodeMatches) {
                        nonTerminalNodeMatches = true; ///
                    } else {
                        nonTerminalNodeMatches = _get(_getPrototypeOf(MetaMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions);
                    }
                } else if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(MetaMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions);
                }
                return nonTerminalNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNodeA, metastatementNodeB, metaSubstitutions) {
                var metastatementNodeMatches = false;
                var nonTerminalNodeB = metastatementNodeB, nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), nonTerminalNodeBChildNodesLength = nonTerminalNodeBChildNodes.length;
                if (nonTerminalNodeBChildNodesLength === 1) {
                    var firstNonTerminalNodeBChildNode = (0, _array.first)(nonTerminalNodeBChildNodes), cChildNodeB = firstNonTerminalNodeBChildNode, cChildNodeBNonTerminalNode = cChildNodeB.isNonTerminalNode();
                    if (cChildNodeBNonTerminalNode) {
                        var nonTerminalNodeB1 = cChildNodeB, nonTerminalNodeBRuleName = nonTerminalNodeB1.getRuleName(), nonTerminalNodeBRuleNameMetavariableRuleName = nonTerminalNodeBRuleName === _ruleNames.METAVARIABLE_RULE_NAME;
                        if (nonTerminalNodeBRuleNameMetavariableRuleName) {
                            var metavariableNodeA = nonTerminalNodeB1, _$metastatementNodeB = metastatementNodeA, metaVariableNodeMatches = this.matchMetavariableNode(metavariableNodeA, _$metastatementNodeB, metaSubstitutions);
                            metastatementNodeMatches = metaVariableNodeMatches; ///
                        }
                    }
                }
                return metastatementNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNodeA, metastatementNodeB, metaSubstitutions) {
                var metavariableNodeMatches;
                var metavariableNameA = (0, _query.metavariableNameFromMetavariableNode)(metavariableNodeA), metaSubstitution = metaSubstitutions.find(function(metaSubstitution) {
                    var metavariableName = metaSubstitution.getMetavariableName();
                    if (metavariableName === metavariableNameA) {
                        return true;
                    }
                }) || null;
                if (metaSubstitution !== null) {
                    var metastatementNode = metastatementNodeB, metaSubstitutionNodesMatch = metaSubstitution.matchMetastatementNode(metastatementNode);
                    metavariableNodeMatches = metaSubstitutionNodesMatch; ///
                } else {
                    var createMetaSubstitutions = this.constructor.createMetaSubstitutions;
                    if (createMetaSubstitutions) {
                        var metavariableName = metavariableNameA, metastatementNode1 = metastatementNodeB, metaSubstitution1 = _metaSubstitution.default.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode1);
                        metaSubstitutions.push(metaSubstitution1);
                    }
                    metavariableNodeMatches = true;
                }
                return metavariableNodeMatches;
            }
        }
    ]);
    return MetaMatcher;
}(_matcher.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tZXRhTWF0Y2hlci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hdGNoZXIgZnJvbSBcIi4vbWF0Y2hlclwiO1xuaW1wb3J0IE1ldGFTdWJzdGl0dXRpb24gZnJvbSBcIi4vbWV0YVN1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhTWF0Y2hlciBleHRlbmRzIE1hdGNoZXIge1xuICBtYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lICYmIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVBID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVCID0gbm9uVGVybWluYWxOb2RlQSwgIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHRydWU7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIG1ldGFTdWJzdGl0dXRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lKSB7XG4gICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gc3VwZXIubWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQiwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGVCLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2Rlc0xlbmd0aCA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVCQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3ROb25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlID0gZmlyc3Qobm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgY0NoaWxkTm9kZUIgPSBmaXJzdE5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNDaGlsZE5vZGVCTm9uVGVybWluYWxOb2RlID0gY0NoaWxkTm9kZUIuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNDaGlsZE5vZGVCTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUIgPSBjQ2hpbGROb2RlQiwgIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVCLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSk7XG5cbiAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBub25UZXJtaW5hbE5vZGVCLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVCID0gbWV0YXN0YXRlbWVudE5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhVmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQiwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgbWV0YVN1YnN0aXR1dGlvbiA9IG1ldGFTdWJzdGl0dXRpb25zLmZpbmQoKG1ldGFTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhU3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWUgPT09IG1ldGF2YXJpYWJsZU5hbWVBKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAobWV0YVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgbWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBtZXRhU3Vic3RpdHV0aW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY3JlYXRlTWV0YVN1YnN0aXR1dGlvbnMgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICAgIGlmIChjcmVhdGVNZXRhU3Vic3RpdHV0aW9ucykge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUEsIC8vL1xuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb24gPSBNZXRhU3Vic3RpdHV0aW9uLmZyb21NZXRhdmFyaWFibGVOYW1lQW5kTWV0YXN0YXRlbWVudE5vZGUobWV0YXZhcmlhYmxlTmFtZSwgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIG1ldGFTdWJzdGl0dXRpb25zLnB1c2gobWV0YVN1YnN0aXR1dGlvbik7XG4gICAgICB9XG5cbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YU1hdGNoZXIiLCJtYXRjaE5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibWV0YVN1YnN0aXR1dGlvbnMiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIm1ldGFzdGF0ZW1lbnROb2RlQSIsIm1ldGFzdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZSIsImZpcnN0IiwiY0NoaWxkTm9kZUIiLCJjQ2hpbGROb2RlQk5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhVmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhU3Vic3RpdHV0aW9uIiwiZmluZCIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaCIsImNyZWF0ZU1ldGFTdWJzdGl0dXRpb25zIiwiY29uc3RydWN0b3IiLCJNZXRhU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZSIsInB1c2giLCJNYXRjaGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozs0REFQRDtxRUFDUztxQkFFUDtxQkFDK0I7eUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFBLEFBQU1BLDRCQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFO2dCQUMxRSxJQUFJQyx5QkFBeUIsS0FBSztnQkFFbEMsSUFBTUMsMkJBQTJCSixpQkFBaUJLLFdBQVcsSUFDdkRDLDJCQUEyQkwsaUJBQWlCSSxXQUFXLElBQ3ZERSxnREFBaURILDZCQUE2Qkksa0NBQXVCLEVBQ3JHQyxnREFBaURILDZCQUE2QkUsa0NBQXVCO2dCQUUzRyxJQUFJRCxpREFBaURFLCtDQUErQztvQkFDbEcsSUFBTUMscUJBQXFCVCxrQkFDckJVLHFCQUFxQlgsa0JBQ3JCWSwyQkFBMkIsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQ0gsb0JBQW9CQyxvQkFBb0JUO29CQUVyRyxJQUFJVSwwQkFBMEI7d0JBQzVCVCx5QkFBeUIsSUFBSSxFQUFFLEdBQUc7b0JBQ3BDLE9BQU87d0JBQ0xBLHlCQUF5QixxQkFqQlpMLHdCQWlCa0JDLHdCQUFOLElBQUssYUFBc0JDLGtCQUFrQkMsa0JBQWtCQztvQkFDMUYsQ0FBQztnQkFDSCxPQUFPLElBQUlJLDZCQUE2QkYsMEJBQTBCO29CQUNoRUQseUJBQXlCLHFCQXBCVkwsd0JBb0JnQkMsd0JBQU4sSUFBSyxhQUFzQkMsa0JBQWtCQyxrQkFBa0JDO2dCQUMxRixDQUFDO2dCQUVELE9BQU9DO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCSCxrQkFBa0IsRUFBRUMsa0JBQWtCLEVBQUVULGlCQUFpQixFQUFFO2dCQUNoRixJQUFJVSwyQkFBMkIsS0FBSztnQkFFcEMsSUFBTVgsbUJBQW1CVSxvQkFDbkJHLDZCQUE2QmIsaUJBQWlCYyxhQUFhLElBQzNEQyxtQ0FBbUNGLDJCQUEyQkcsTUFBTTtnQkFFMUUsSUFBSUQscUNBQXFDLEdBQUc7b0JBQzFDLElBQU1FLGlDQUFpQ0MsSUFBQUEsWUFBSyxFQUFDTCw2QkFDdkNNLGNBQWNGLGdDQUNkRyw2QkFBNkJELFlBQVlFLGlCQUFpQjtvQkFFaEUsSUFBSUQsNEJBQTRCO3dCQUM5QixJQUFNcEIsb0JBQW1CbUIsYUFDbkJkLDJCQUEyQkwsa0JBQWlCSSxXQUFXLElBQ3ZEa0IsK0NBQWdEakIsNkJBQTZCa0IsaUNBQXNCO3dCQUV6RyxJQUFJRCw4Q0FBOEM7NEJBQ2hELElBQU1FLG9CQUFvQnhCLG1CQUNwQlUsdUJBQXFCRCxvQkFDckJnQiwwQkFBMEIsSUFBSSxDQUFDQyxxQkFBcUIsQ0FBQ0YsbUJBQW1CZCxzQkFBb0JUOzRCQUVsR1UsMkJBQTJCYyx5QkFBeUIsR0FBRzt3QkFDekQsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT2Q7WUFDVDs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JGLGlCQUFpQixFQUFFZCxrQkFBa0IsRUFBRVQsaUJBQWlCLEVBQUU7Z0JBQzlFLElBQUkwQjtnQkFFSixJQUFNQyxvQkFBb0JDLElBQUFBLDJDQUFvQyxFQUFDTCxvQkFDekRNLG1CQUFtQjdCLGtCQUFrQjhCLElBQUksQ0FBQyxTQUFDRCxrQkFBcUI7b0JBQzlELElBQU1FLG1CQUFtQkYsaUJBQWlCRyxtQkFBbUI7b0JBRTdELElBQUlELHFCQUFxQkosbUJBQW1CO3dCQUMxQyxPQUFPLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxNQUFNLElBQUk7Z0JBRWhCLElBQUlFLHFCQUFxQixJQUFJLEVBQUU7b0JBQzdCLElBQU1JLG9CQUFvQnhCLG9CQUNwQnlCLDZCQUE2QkwsaUJBQWlCbEIsc0JBQXNCLENBQUNzQjtvQkFFM0VQLDBCQUEwQlEsNEJBQTZCLEdBQUc7Z0JBQzVELE9BQU87b0JBQ0wsSUFBTSxBQUFFQywwQkFBNEIsSUFBSSxDQUFDQyxXQUFXLENBQTVDRDtvQkFFUixJQUFJQSx5QkFBeUI7d0JBQzNCLElBQU1KLG1CQUFtQkosbUJBQ25CTSxxQkFBb0J4QixvQkFDcEJvQixvQkFBbUJRLHlCQUFnQixDQUFDQyx3Q0FBd0MsQ0FBQ1Asa0JBQWtCRTt3QkFFckdqQyxrQkFBa0J1QyxJQUFJLENBQUNWO29CQUN6QixDQUFDO29CQUVESCwwQkFBMEIsSUFBSTtnQkFDaEMsQ0FBQztnQkFFRCxPQUFPQTtZQUNUOzs7V0F4Rm1COUI7RUFBb0I0QyxnQkFBTyJ9