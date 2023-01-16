"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetastatementForMetavariableMatcher;
    }
});
var _matcher = /*#__PURE__*/ _interopRequireDefault(require("../matcher"));
var _metastatementForMetavariable = /*#__PURE__*/ _interopRequireDefault(require("../substitution/metastatementForMetavariable"));
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
var MetastatementForMetavariableMatcher = /*#__PURE__*/ function(Matcher) {
    _inherits(MetastatementForMetavariableMatcher, Matcher);
    var _super = _createSuper(MetastatementForMetavariableMatcher);
    function MetastatementForMetavariableMatcher() {
        _classCallCheck(this, MetastatementForMetavariableMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(MetastatementForMetavariableMatcher, [
        {
            key: "matchNonTerminalNode",
            value: function matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var nonTerminalNodeMatches = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(), nonTerminalNodeARuleNameMetastatementRuleName = nonTerminalNodeARuleName === _ruleNames.METASTATEMENT_RULE_NAME, nonTerminalNodeBRuleNameMetastatementRuleName = nonTerminalNodeBRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
                if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameMetastatementRuleName) {
                    var metastatementNodeA = nonTerminalNodeA, metastatementNodeB = nonTerminalNodeB, metastatementNodeMatches = this.matchMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions);
                    if (metastatementNodeMatches) {
                        nonTerminalNodeMatches = true; ///
                    } else {
                        nonTerminalNodeMatches = _get(_getPrototypeOf(MetastatementForMetavariableMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                    }
                } else if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(MetastatementForMetavariableMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                }
                return nonTerminalNodeMatches;
            }
        },
        {
            key: "matchMetastatementNode",
            value: function matchMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions) {
                var metastatementNodeMatches = false;
                var nonTerminalNodeA = metastatementNodeA, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeAChildNodesLength = nonTerminalNodeAChildNodes.length;
                if (nonTerminalNodeAChildNodesLength === 1) {
                    var firstNonTerminalNodeAChildNode = (0, _array.first)(nonTerminalNodeAChildNodes), cChildNodeA = firstNonTerminalNodeAChildNode, cChildNodeANonTerminalNode = cChildNodeA.isNonTerminalNode();
                    if (cChildNodeANonTerminalNode) {
                        var nonTerminalNodeA1 = cChildNodeA, nonTerminalNodeARuleName = nonTerminalNodeA1.getRuleName(), nonTerminalNodeARuleNameMetavariableRuleName = nonTerminalNodeARuleName === _ruleNames.METAVARIABLE_RULE_NAME;
                        if (nonTerminalNodeARuleNameMetavariableRuleName) {
                            var metavariableNodeA = nonTerminalNodeA1, metaVariableNodeMatches = this.matchMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions);
                            metastatementNodeMatches = metaVariableNodeMatches; ///
                        }
                    }
                }
                return metastatementNodeMatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions) {
                var metavariableNodeMatches;
                var metavariableNameA = (0, _query.metavariableNameFromMetavariableNode)(metavariableNodeA), substitution = substitutions.find(function(substitution) {
                    var metavariableName = substitution.getMetavariableName();
                    if (metavariableName === metavariableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var metastatementNode = metastatementNodeB, substitutionNodesMatch = substitution.matchMetastatementNode(metastatementNode);
                    metavariableNodeMatches = substitutionNodesMatch; ///
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var metavariableName = metavariableNameA, metastatementNode1 = metastatementNodeB, metastatementForMetavariableSubstitution = _metastatementForMetavariable.default.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode1), substitution1 = metastatementForMetavariableSubstitution; ///
                        substitutions.push(substitution1);
                    }
                    metavariableNodeMatches = true;
                }
                return metavariableNodeMatches;
            }
        }
    ]);
    return MetastatementForMetavariableMatcher;
}(_matcher.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVyL21ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXRjaGVyIGZyb20gXCIuLi9tYXRjaGVyXCI7XG5pbXBvcnQgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL21ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBNRVRBVkFSSUFCTEVfUlVMRV9OQU1FLCBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZU1hdGNoZXIgZXh0ZW5kcyBNYXRjaGVyIHtcbiAgbWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lICYmIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gdHJ1ZTsgIC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUpIHtcbiAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBlci5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbWV0YXN0YXRlbWVudE5vZGVBLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2Rlc0xlbmd0aCA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLmxlbmd0aDtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVBQ2hpbGROb2Rlc0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3ROb25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlID0gZmlyc3Qobm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMpLFxuICAgICAgICAgICAgY0NoaWxkTm9kZUEgPSBmaXJzdE5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGUsICAvLy9cbiAgICAgICAgICAgIGNDaGlsZE5vZGVBTm9uVGVybWluYWxOb2RlID0gY0NoaWxkTm9kZUEuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNDaGlsZE5vZGVBTm9uVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBjQ2hpbGROb2RlQSwgIC8vL1xuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gTUVUQVZBUklBQkxFX1JVTEVfTkFNRSk7XG5cbiAgICAgICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgbWV0YVZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IG1ldGFWYXJpYWJsZU5vZGVNYXRjaGVzOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVBID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lQSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZXNNYXRjaCA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY3JlYXRlU3Vic3RpdHV0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgICAgaWYgKGNyZWF0ZVN1YnN0aXR1dGlvbnMpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVBLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICAgICAgfVxuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVNYXRjaGVyIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsInN1YnN0aXR1dGlvbnMiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIm1ldGFzdGF0ZW1lbnROb2RlQSIsIm1ldGFzdGF0ZW1lbnROb2RlQiIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2Rlc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0Tm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZSIsImZpcnN0IiwiY0NoaWxkTm9kZUEiLCJjQ2hpbGROb2RlQU5vblRlcm1pbmFsTm9kZSIsImlzTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXZhcmlhYmxlUnVsZU5hbWUiLCJNRVRBVkFSSUFCTEVfUlVMRV9OQU1FIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhVmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGVzTWF0Y2giLCJjcmVhdGVTdWJzdGl0dXRpb25zIiwiY29uc3RydWN0b3IiLCJtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOYW1lQW5kTWV0YXN0YXRlbWVudE5vZGUiLCJwdXNoIiwiTWF0Y2hlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NERBUEQ7aUZBQ2lDO3FCQUUvQjtxQkFDK0I7eUJBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFBLEFBQU1BLG9EQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUEscUJBQXFCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRTtnQkFDdEUsSUFBSUMseUJBQXlCLEtBQUs7Z0JBRWxDLElBQU1DLDJCQUEyQkosaUJBQWlCSyxXQUFXLElBQ3ZEQywyQkFBMkJMLGlCQUFpQkksV0FBVyxJQUN2REUsZ0RBQWlESCw2QkFBNkJJLGtDQUF1QixFQUNyR0MsZ0RBQWlESCw2QkFBNkJFLGtDQUF1QjtnQkFFM0csSUFBSUQsaURBQWlERSwrQ0FBK0M7b0JBQ2xHLElBQU1DLHFCQUFxQlYsa0JBQ3JCVyxxQkFBcUJWLGtCQUNyQlcsMkJBQTJCLElBQUksQ0FBQ0Msc0JBQXNCLENBQUNILG9CQUFvQkMsb0JBQW9CVDtvQkFFckcsSUFBSVUsMEJBQTBCO3dCQUM1QlQseUJBQXlCLElBQUksRUFBRyxHQUFHO29CQUNyQyxPQUFPO3dCQUNMQSx5QkFBeUIscUJBakJaTCxnREFpQmtCQyx3QkFBTixJQUFLLGFBQXNCQyxrQkFBa0JDLGtCQUFrQkM7b0JBQzFGLENBQUM7Z0JBQ0gsT0FBTyxJQUFJSSw2QkFBNkJGLDBCQUEwQjtvQkFDaEVELHlCQUF5QixxQkFwQlZMLGdEQW9CZ0JDLHdCQUFOLElBQUssYUFBc0JDLGtCQUFrQkMsa0JBQWtCQztnQkFDMUYsQ0FBQztnQkFFRCxPQUFPQztZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1Qkgsa0JBQWtCLEVBQUVDLGtCQUFrQixFQUFFVCxhQUFhLEVBQUU7Z0JBQzVFLElBQUlVLDJCQUEyQixLQUFLO2dCQUVwQyxJQUFNWixtQkFBbUJVLG9CQUNuQkksNkJBQTZCZCxpQkFBaUJlLGFBQWEsSUFDM0RDLG1DQUFtQ0YsMkJBQTJCRyxNQUFNO2dCQUUxRSxJQUFJRCxxQ0FBcUMsR0FBRztvQkFDMUMsSUFBTUUsaUNBQWlDQyxJQUFBQSxZQUFLLEVBQUNMLDZCQUN2Q00sY0FBY0YsZ0NBQ2RHLDZCQUE2QkQsWUFBWUUsaUJBQWlCO29CQUVoRSxJQUFJRCw0QkFBNEI7d0JBQzlCLElBQU1yQixvQkFBbUJvQixhQUNuQmhCLDJCQUEyQkosa0JBQWlCSyxXQUFXLElBQ3ZEa0IsK0NBQWdEbkIsNkJBQTZCb0IsaUNBQXNCO3dCQUV6RyxJQUFJRCw4Q0FBOEM7NEJBQ2hELElBQU1FLG9CQUFvQnpCLG1CQUNwQjBCLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUFDRixtQkFBbUJkLG9CQUFvQlQ7NEJBRWxHVSwyQkFBMkJjLHlCQUF5QixHQUFHO3dCQUN6RCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPZDtZQUNUOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkYsaUJBQWlCLEVBQUVkLGtCQUFrQixFQUFFVCxhQUFhLEVBQUU7Z0JBQzFFLElBQUkwQjtnQkFFSixJQUFNQyxvQkFBb0JDLElBQUFBLDJDQUFvQyxFQUFDTCxvQkFDekRNLGVBQWU3QixjQUFjOEIsSUFBSSxDQUFDLFNBQUNELGNBQWlCO29CQUNsRCxJQUFNRSxtQkFBbUJGLGFBQWFHLG1CQUFtQjtvQkFFekQsSUFBSUQscUJBQXFCSixtQkFBbUI7d0JBQzFDLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNILE1BQU0sSUFBSTtnQkFFaEIsSUFBSUUsaUJBQWlCLElBQUksRUFBRTtvQkFDekIsSUFBTUksb0JBQW9CeEIsb0JBQ3BCeUIseUJBQXlCTCxhQUFhbEIsc0JBQXNCLENBQUNzQjtvQkFFbkVQLDBCQUEwQlEsd0JBQXlCLEdBQUc7Z0JBQ3hELE9BQU87b0JBQ0wsSUFBTSxBQUFFQyxzQkFBd0IsSUFBSSxDQUFDQyxXQUFXLENBQXhDRDtvQkFFUixJQUFJQSxxQkFBcUI7d0JBQ3ZCLElBQU1KLG1CQUFtQkosbUJBQ25CTSxxQkFBb0J4QixvQkFDcEI0QiwyQ0FBMkNDLHFDQUF3QyxDQUFDQyx3Q0FBd0MsQ0FBQ1Isa0JBQWtCRSxxQkFDL0lKLGdCQUFlUSwwQ0FBMkMsR0FBRzt3QkFFbkVyQyxjQUFjd0MsSUFBSSxDQUFDWDtvQkFDckIsQ0FBQztvQkFFREgsMEJBQTBCLElBQUk7Z0JBQ2hDLENBQUM7Z0JBRUQsT0FBT0E7WUFDVDs7O1dBeEZtQjlCO0VBQTRDNkMsZ0JBQU8ifQ==