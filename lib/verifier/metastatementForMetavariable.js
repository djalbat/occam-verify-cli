"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MetastatementForMetavariableVerifier;
    }
});
var _verifier = /*#__PURE__*/ _interopRequireDefault(require("../verifier"));
var _metastatementForMetavariable = /*#__PURE__*/ _interopRequireDefault(require("../substitution/metastatementForMetavariable"));
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
var metavariableNodeQuery = (0, _query.nodeQuery)("/metastatement/metavariable!");
var MetastatementForMetavariableVerifier = /*#__PURE__*/ function(Verifier) {
    _inherits(MetastatementForMetavariableVerifier, Verifier);
    var _super = _createSuper(MetastatementForMetavariableVerifier);
    function MetastatementForMetavariableVerifier() {
        _classCallCheck(this, MetastatementForMetavariableVerifier);
        return _super.apply(this, arguments);
    }
    _createClass(MetastatementForMetavariableVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
                var nonTerminalNodeVerifies = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    var nonTerminalNodeARuleNameMetastatementRuleName = nonTerminalNodeARuleName === _ruleNames.METASTATEMENT_RULE_NAME, nonTerminalNodeBRuleNameMetastatementRuleName = nonTerminalNodeBRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
                    if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameMetastatementRuleName) {
                        var metastatementNodeA = nonTerminalNodeA, metastatementNodeB = nonTerminalNodeB, metastatementNodeVerifies = this.verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions);
                        if (metastatementNodeVerifies) {
                            nonTerminalNodeVerifies = true; ///
                        } else {
                            nonTerminalNodeVerifies = _get(_getPrototypeOf(MetastatementForMetavariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                        }
                    } else {
                        nonTerminalNodeVerifies = _get(_getPrototypeOf(MetastatementForMetavariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions);
                    }
                }
                return nonTerminalNodeVerifies;
            }
        },
        {
            key: "verifyMetastatementNode",
            value: function verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions) {
                var metastatementNodeVerifies = false;
                var metavariableNodeA = metavariableNodeQuery(metastatementNodeA);
                if (metavariableNodeA !== null) {
                    var metaVariableNodeVerifies = this.verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions);
                    metastatementNodeVerifies = metaVariableNodeVerifies; ///
                }
                return metastatementNodeVerifies;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions) {
                var metavariableNodeVerifies;
                var metavariableNameA = (0, _query.metavariableNameFromMetavariableNode)(metavariableNodeA), substitution = substitutions.find(function(substitution) {
                    var metavariableName = substitution.getMetavariableName();
                    if (metavariableName === metavariableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var metastatementNode = metastatementNodeB, substitutionNodesMatch = substitution.verifyMetastatementNode(metastatementNode);
                    metavariableNodeVerifies = substitutionNodesMatch; ///
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var metavariableName = metavariableNameA, metastatementNode1 = metastatementNodeB, metastatementForMetavariableSubstitution = _metastatementForMetavariable.default.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode1), substitution1 = metastatementForMetavariableSubstitution; ///
                        substitutions.push(substitution1);
                    }
                    metavariableNodeVerifies = true;
                }
                return metavariableNodeVerifies;
            }
        }
    ]);
    return MetastatementForMetavariableVerifier;
}(_verifier.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9tZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL21ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL21ldGFzdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgJiYgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZXMpIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllcyA9IHRydWU7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllcyA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZXMgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGVBKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVZhcmlhYmxlTm9kZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVzID0gbWV0YVZhcmlhYmxlTm9kZVZlcmlmaWVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZUEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVzTWF0Y2ggPSBzdWJzdGl0dXRpb24udmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZXMgPSBzdWJzdGl0dXRpb25Ob2Rlc01hdGNoOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY3JlYXRlU3Vic3RpdHV0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgICAgaWYgKGNyZWF0ZVN1YnN0aXR1dGlvbnMpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVBLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICAgICAgfVxuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZXM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZXMiLCJub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZU1ldGFzdGF0ZW1lbnRSdWxlTmFtZSIsIk1FVEFTVEFURU1FTlRfUlVMRV9OQU1FIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwibWV0YXN0YXRlbWVudE5vZGVBIiwibWV0YXN0YXRlbWVudE5vZGVCIiwibWV0YXN0YXRlbWVudE5vZGVWZXJpZmllcyIsInZlcmlmeU1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhVmFyaWFibGVOb2RlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVzIiwibWV0YXZhcmlhYmxlTmFtZUEiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhc3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGVzTWF0Y2giLCJjcmVhdGVTdWJzdGl0dXRpb25zIiwiY29uc3RydWN0b3IiLCJtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21NZXRhdmFyaWFibGVOYW1lQW5kTWV0YXN0YXRlbWVudE5vZGUiLCJwdXNoIiwiVmVyaWZpZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzZEQVRBO2lGQUNnQztxQkFFM0I7eUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd4QyxJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsSUFBQSxBQUFNRixxREFBTjtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNuQkcsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUU7Z0JBQ3ZFLElBQUlDLDBCQUEwQixLQUFLO2dCQUVuQyxJQUFNQywyQkFBMkJKLGlCQUFpQkssV0FBVyxJQUN2REMsMkJBQTJCTCxpQkFBaUJJLFdBQVc7Z0JBRTdELElBQUlDLDZCQUE2QkYsMEJBQTBCO29CQUN6RCxJQUFNRyxnREFBaURILDZCQUE2Qkksa0NBQXVCLEVBQ3JHQyxnREFBaURILDZCQUE2QkUsa0NBQXVCO29CQUUzRyxJQUFJRCxpREFBaURFLCtDQUErQzt3QkFDbEcsSUFBTUMscUJBQXFCVixrQkFDckJXLHFCQUFxQlYsa0JBQ3JCVyw0QkFBNEIsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQ0gsb0JBQW9CQyxvQkFBb0JUO3dCQUV2RyxJQUFJVSwyQkFBMkI7NEJBQzdCVCwwQkFBMEIsSUFBSSxFQUFHLEdBQUc7d0JBQ3RDLE9BQU87NEJBQ0xBLDBCQUEwQixxQkFuQmZQLGlEQW1CcUJHLHlCQUFOLElBQUssYUFBdUJDLGtCQUFrQkMsa0JBQWtCQzt3QkFDNUYsQ0FBQztvQkFDSCxPQUFPO3dCQUNMQywwQkFBMEIscUJBdEJiUCxpREFzQm1CRyx5QkFBTixJQUFLLGFBQXVCQyxrQkFBa0JDLGtCQUFrQkM7b0JBQzVGLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPQztZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUF3Qkgsa0JBQWtCLEVBQUVDLGtCQUFrQixFQUFFVCxhQUFhLEVBQUU7Z0JBQzdFLElBQUlVLDRCQUE0QixLQUFLO2dCQUVyQyxJQUFNRSxvQkFBb0JqQixzQkFBc0JhO2dCQUVoRCxJQUFJSSxzQkFBc0IsSUFBSSxFQUFFO29CQUM5QixJQUFNQywyQkFBMkIsSUFBSSxDQUFDQyxzQkFBc0IsQ0FBQ0YsbUJBQW1CSCxvQkFBb0JUO29CQUVwR1UsNEJBQTRCRywwQkFBMEIsR0FBRztnQkFDM0QsQ0FBQztnQkFFRCxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkYsaUJBQWlCLEVBQUVILGtCQUFrQixFQUFFVCxhQUFhLEVBQUU7Z0JBQzNFLElBQUllO2dCQUVKLElBQU1DLG9CQUFvQkMsSUFBQUEsMkNBQW9DLEVBQUNMLG9CQUN6RE0sZUFBZWxCLGNBQWNtQixJQUFJLENBQUMsU0FBQ0QsY0FBaUI7b0JBQ2xELElBQU1FLG1CQUFtQkYsYUFBYUcsbUJBQW1CO29CQUV6RCxJQUFJRCxxQkFBcUJKLG1CQUFtQjt3QkFDMUMsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsTUFBTSxJQUFJO2dCQUVoQixJQUFJRSxpQkFBaUIsSUFBSSxFQUFFO29CQUN6QixJQUFNSSxvQkFBb0JiLG9CQUNwQmMseUJBQXlCTCxhQUFhUCx1QkFBdUIsQ0FBQ1c7b0JBRXBFUCwyQkFBMkJRLHdCQUF5QixHQUFHO2dCQUN6RCxPQUFPO29CQUNMLElBQU0sQUFBRUMsc0JBQXdCLElBQUksQ0FBQ0MsV0FBVyxDQUF4Q0Q7b0JBRVIsSUFBSUEscUJBQXFCO3dCQUN2QixJQUFNSixtQkFBbUJKLG1CQUNuQk0scUJBQW9CYixvQkFDcEJpQiwyQ0FBMkNDLHFDQUF3QyxDQUFDQyx3Q0FBd0MsQ0FBQ1Isa0JBQWtCRSxxQkFDL0lKLGdCQUFlUSwwQ0FBMkMsR0FBRzt3QkFFbkUxQixjQUFjNkIsSUFBSSxDQUFDWDtvQkFDckIsQ0FBQztvQkFFREgsMkJBQTJCLElBQUk7Z0JBQ2pDLENBQUM7Z0JBRUQsT0FBT0E7WUFDVDs7O1dBNUVtQnJCO0VBQTZDb0MsaUJBQVEifQ==