"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetaSubstitutionMatcher;
    }
});
var _generic = /*#__PURE__*/ _interopRequireDefault(require("../matcher/generic"));
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
var MetaSubstitutionMatcher = /*#__PURE__*/ function(GenericMatcher) {
    _inherits(MetaSubstitutionMatcher, GenericMatcher);
    var _super = _createSuper(MetaSubstitutionMatcher);
    function MetaSubstitutionMatcher() {
        _classCallCheck(this, MetaSubstitutionMatcher);
        return _super.apply(this, arguments);
    }
    _createClass(MetaSubstitutionMatcher, [
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
                        nonTerminalNodeMatches = _get(_getPrototypeOf(MetaSubstitutionMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions);
                    }
                } else if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    nonTerminalNodeMatches = _get(_getPrototypeOf(MetaSubstitutionMatcher.prototype), "matchNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions);
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
    return MetaSubstitutionMatcher;
}(_generic.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVyL21ldGFTdWJzdGl0dXRpb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBHZW5lcmljTWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlci9nZW5lcmljXCI7XG5pbXBvcnQgTWV0YVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vbWV0YVN1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUsIE1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhU3Vic3RpdHV0aW9uTWF0Y2hlciBleHRlbmRzIEdlbmVyaWNNYXRjaGVyIHtcbiAgbWF0Y2hOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSAmJiBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vblRlcm1pbmFsTm9kZUIsICAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQiA9IG5vblRlcm1pbmFsTm9kZUEsICAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQiwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSB0cnVlOyAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBzdXBlci5tYXRjaE5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSkge1xuICAgICAgbm9uVGVybWluYWxOb2RlTWF0Y2hlcyA9IHN1cGVyLm1hdGNoTm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIG1ldGFTdWJzdGl0dXRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVGVybWluYWxOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlQiwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXNMZW5ndGggPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2Rlcy5sZW5ndGg7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Tm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZSA9IGZpcnN0KG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzKSxcbiAgICAgICAgICAgIGNDaGlsZE5vZGVCID0gZmlyc3ROb25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgICAgICBjQ2hpbGROb2RlQk5vblRlcm1pbmFsTm9kZSA9IGNDaGlsZE5vZGVCLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjQ2hpbGROb2RlQk5vblRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVCID0gY0NoaWxkTm9kZUIsICAvLy9cbiAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWUgPT09IE1FVEFWQVJJQUJMRV9SVUxFX05BTUUpO1xuXG4gICAgICAgIGlmIChub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhdmFyaWFibGVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlQiA9IG1ldGFzdGF0ZW1lbnROb2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbWV0YVZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSwgbWV0YXN0YXRlbWVudE5vZGVCLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBtZXRhVmFyaWFibGVOb2RlTWF0Y2hlczsgLy8vXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEpLFxuICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb24gPSBtZXRhU3Vic3RpdHV0aW9ucy5maW5kKChtZXRhU3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YVN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lID09PSBtZXRhdmFyaWFibGVOYW1lQSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKG1ldGFTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIG1ldGFTdWJzdGl0dXRpb25Ob2Rlc01hdGNoID0gbWV0YVN1YnN0aXR1dGlvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhU3Vic3RpdHV0aW9uTm9kZXNNYXRjaDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGNyZWF0ZU1ldGFTdWJzdGl0dXRpb25zIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgICBpZiAoY3JlYXRlTWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVBLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgICBtZXRhU3Vic3RpdHV0aW9uID0gTWV0YVN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBtZXRhU3Vic3RpdHV0aW9ucy5wdXNoKG1ldGFTdWJzdGl0dXRpb24pO1xuICAgICAgfVxuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk1ldGFTdWJzdGl0dXRpb25NYXRjaGVyIiwibWF0Y2hOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm1ldGFTdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJtZXRhc3RhdGVtZW50Tm9kZUEiLCJtZXRhc3RhdGVtZW50Tm9kZUIiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdE5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGUiLCJmaXJzdCIsImNDaGlsZE5vZGVCIiwiY0NoaWxkTm9kZUJOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZU1ldGF2YXJpYWJsZVJ1bGVOYW1lIiwiTUVUQVZBUklBQkxFX1JVTEVfTkFNRSIsIm1ldGF2YXJpYWJsZU5vZGVBIiwibWV0YVZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YVN1YnN0aXR1dGlvbiIsImZpbmQiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YnN0aXR1dGlvbk5vZGVzTWF0Y2giLCJjcmVhdGVNZXRhU3Vic3RpdHV0aW9ucyIsImNvbnN0cnVjdG9yIiwiTWV0YVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOYW1lQW5kTWV0YXN0YXRlbWVudE5vZGUiLCJwdXNoIiwiR2VuZXJpY01hdGNoZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzREQVBNO3FFQUNFO3FCQUVQO3FCQUMrQjt5QkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQUEsQUFBTUEsd0NBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLGdCQUFnQixFQUFFQyxnQkFBZ0IsRUFBRUMsaUJBQWlCLEVBQUU7Z0JBQzFFLElBQUlDLHlCQUF5QixLQUFLO2dCQUVsQyxJQUFNQywyQkFBMkJKLGlCQUFpQkssV0FBVyxJQUN2REMsMkJBQTJCTCxpQkFBaUJJLFdBQVcsSUFDdkRFLGdEQUFpREgsNkJBQTZCSSxrQ0FBdUIsRUFDckdDLGdEQUFpREgsNkJBQTZCRSxrQ0FBdUI7Z0JBRTNHLElBQUlELGlEQUFpREUsK0NBQStDO29CQUNsRyxJQUFNQyxxQkFBcUJULGtCQUNyQlUscUJBQXFCWCxrQkFDckJZLDJCQUEyQixJQUFJLENBQUNDLHNCQUFzQixDQUFDSCxvQkFBb0JDLG9CQUFvQlQ7b0JBRXJHLElBQUlVLDBCQUEwQjt3QkFDNUJULHlCQUF5QixJQUFJLEVBQUUsR0FBRztvQkFDcEMsT0FBTzt3QkFDTEEseUJBQXlCLHFCQWpCWkwsb0NBaUJrQkMsd0JBQU4sSUFBSyxhQUFzQkMsa0JBQWtCQyxrQkFBa0JDO29CQUMxRixDQUFDO2dCQUNILE9BQU8sSUFBSUksNkJBQTZCRiwwQkFBMEI7b0JBQ2hFRCx5QkFBeUIscUJBcEJWTCxvQ0FvQmdCQyx3QkFBTixJQUFLLGFBQXNCQyxrQkFBa0JDLGtCQUFrQkM7Z0JBQzFGLENBQUM7Z0JBRUQsT0FBT0M7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJILGtCQUFrQixFQUFFQyxrQkFBa0IsRUFBRVQsaUJBQWlCLEVBQUU7Z0JBQ2hGLElBQUlVLDJCQUEyQixLQUFLO2dCQUVwQyxJQUFNWCxtQkFBbUJVLG9CQUNuQkcsNkJBQTZCYixpQkFBaUJjLGFBQWEsSUFDM0RDLG1DQUFtQ0YsMkJBQTJCRyxNQUFNO2dCQUUxRSxJQUFJRCxxQ0FBcUMsR0FBRztvQkFDMUMsSUFBTUUsaUNBQWlDQyxJQUFBQSxZQUFLLEVBQUNMLDZCQUN2Q00sY0FBY0YsZ0NBQ2RHLDZCQUE2QkQsWUFBWUUsaUJBQWlCO29CQUVoRSxJQUFJRCw0QkFBNEI7d0JBQzlCLElBQU1wQixvQkFBbUJtQixhQUNuQmQsMkJBQTJCTCxrQkFBaUJJLFdBQVcsSUFDdkRrQiwrQ0FBZ0RqQiw2QkFBNkJrQixpQ0FBc0I7d0JBRXpHLElBQUlELDhDQUE4Qzs0QkFDaEQsSUFBTUUsb0JBQW9CeEIsbUJBQ3BCVSx1QkFBcUJELG9CQUNyQmdCLDBCQUEwQixJQUFJLENBQUNDLHFCQUFxQixDQUFDRixtQkFBbUJkLHNCQUFvQlQ7NEJBRWxHVSwyQkFBMkJjLHlCQUF5QixHQUFHO3dCQUN6RCxDQUFDO29CQUNILENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPZDtZQUNUOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkYsaUJBQWlCLEVBQUVkLGtCQUFrQixFQUFFVCxpQkFBaUIsRUFBRTtnQkFDOUUsSUFBSTBCO2dCQUVKLElBQU1DLG9CQUFvQkMsSUFBQUEsMkNBQW9DLEVBQUNMLG9CQUN6RE0sbUJBQW1CN0Isa0JBQWtCOEIsSUFBSSxDQUFDLFNBQUNELGtCQUFxQjtvQkFDOUQsSUFBTUUsbUJBQW1CRixpQkFBaUJHLG1CQUFtQjtvQkFFN0QsSUFBSUQscUJBQXFCSixtQkFBbUI7d0JBQzFDLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNILE1BQU0sSUFBSTtnQkFFaEIsSUFBSUUscUJBQXFCLElBQUksRUFBRTtvQkFDN0IsSUFBTUksb0JBQW9CeEIsb0JBQ3BCeUIsNkJBQTZCTCxpQkFBaUJsQixzQkFBc0IsQ0FBQ3NCO29CQUUzRVAsMEJBQTBCUSw0QkFBNkIsR0FBRztnQkFDNUQsT0FBTztvQkFDTCxJQUFNLEFBQUVDLDBCQUE0QixJQUFJLENBQUNDLFdBQVcsQ0FBNUNEO29CQUVSLElBQUlBLHlCQUF5Qjt3QkFDM0IsSUFBTUosbUJBQW1CSixtQkFDbkJNLHFCQUFvQnhCLG9CQUNwQm9CLG9CQUFtQlEseUJBQWdCLENBQUNDLHdDQUF3QyxDQUFDUCxrQkFBa0JFO3dCQUVyR2pDLGtCQUFrQnVDLElBQUksQ0FBQ1Y7b0JBQ3pCLENBQUM7b0JBRURILDBCQUEwQixJQUFJO2dCQUNoQyxDQUFDO2dCQUVELE9BQU9BO1lBQ1Q7OztXQXhGbUI5QjtFQUFnQzRDLGdCQUFjIn0=