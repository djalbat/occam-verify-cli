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
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, metaproofContextB) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
                    var nonTerminalNodeARuleNameMetastatementRuleName = nonTerminalNodeARuleName === _ruleNames.METASTATEMENT_RULE_NAME, nonTerminalNodeBRuleNameMetastatementRuleName = nonTerminalNodeBRuleName === _ruleNames.METASTATEMENT_RULE_NAME;
                    if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameMetastatementRuleName) {
                        var metastatementNodeA = nonTerminalNodeA, metastatementNodeB = nonTerminalNodeB, metastatementNodeVerified = this.verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, metaproofContextB);
                        if (metastatementNodeVerified) {
                            nonTerminalNodeVerified = true; ///
                        } else {
                            nonTerminalNodeVerified = _get(_getPrototypeOf(MetastatementForMetavariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, metaproofContextB);
                        }
                    } else {
                        nonTerminalNodeVerified = _get(_getPrototypeOf(MetastatementForMetavariableVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, metaproofContextB);
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyMetastatementNode",
            value: function verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, metaproofContextB) {
                var metastatementNodeVerified = false;
                var metavariableNodeA = metavariableNodeQuery(metastatementNodeA);
                if (metavariableNodeA !== null) {
                    var metaVariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, metaproofContextB);
                    metastatementNodeVerified = metaVariableNodeVerified; ///
                }
                return metastatementNodeVerified;
            }
        },
        {
            key: "verifyMetavariableNode",
            value: function verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, metaproofContextB) {
                var metavariableNodeVerified;
                var metavariableNameA = (0, _query.metavariableNameFromMetavariableNode)(metavariableNodeA), substitution = substitutions.find(function(substitution) {
                    var metavariableName = substitution.getMetavariableName();
                    if (metavariableName === metavariableNameA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var metastatementNode = metastatementNodeB, metastatementNodeMatches = substitution.matchMetastatementNode(metastatementNode);
                    metavariableNodeVerified = metastatementNodeMatches; ///
                } else {
                    var createSubstitutions = this.constructor.createSubstitutions;
                    if (createSubstitutions) {
                        var metavariableName = metavariableNameA, metastatementNode1 = metastatementNodeB, metastatementForMetavariableSubstitution = _metastatementForMetavariable.default.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode1), substitution1 = metastatementForMetavariableSubstitution; ///
                        substitutions.push(substitution1);
                    }
                    metavariableNodeVerified = true;
                }
                return metavariableNodeVerified;
            }
        }
    ]);
    return MetastatementForMetavariableVerifier;
}(_verifier.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZmllci9tZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyXCI7XG5pbXBvcnQgTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL21ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5pbXBvcnQgeyBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeSgnL21ldGFzdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlVmVyaWZpZXIgZXh0ZW5kcyBWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIG1ldGFwcm9vZkNvbnRleHRCKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSksXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID09PSBNRVRBU1RBVEVNRU5UX1JVTEVfTkFNRSk7XG5cbiAgICAgIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUgJiYgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lKSB7XG4gICAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlQSA9IG5vblRlcm1pbmFsTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBtZXRhcHJvb2ZDb250ZXh0Qik7XG5cbiAgICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlVmVyaWZpZWQpIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHRydWU7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIG1ldGFwcm9vZkNvbnRleHRCKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBzdXBlci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBtZXRhcHJvb2ZDb250ZXh0Qik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbWV0YXByb29mQ29udGV4dEIpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGVBKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGVBLCBtZXRhc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbWV0YXByb29mQ29udGV4dEIpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkID0gbWV0YVZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEsIG1ldGFzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBtZXRhcHJvb2ZDb250ZXh0Qikge1xuICAgIGxldCBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lQSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTmFtZSgpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZSA9PT0gbWV0YXZhcmlhYmxlTmFtZUEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVZlcmlmaWVkID0gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgY3JlYXRlU3Vic3RpdHV0aW9ucyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgICAgaWYgKGNyZWF0ZVN1YnN0aXR1dGlvbnMpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVBLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uID0gTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tTWV0YXZhcmlhYmxlTmFtZUFuZE1ldGFzdGF0ZW1lbnROb2RlKG1ldGF2YXJpYWJsZU5hbWUsIG1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gbWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICAgICAgfVxuXG4gICAgICBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiTWV0YXN0YXRlbWVudEZvck1ldGF2YXJpYWJsZVZlcmlmaWVyIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJzdWJzdGl0dXRpb25zIiwiZmlsZUNvbnRleHRBIiwibWV0YXByb29mQ29udGV4dEIiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lTWV0YXN0YXRlbWVudFJ1bGVOYW1lIiwiTUVUQVNUQVRFTUVOVF9SVUxFX05BTUUiLCJub25UZXJtaW5hbE5vZGVCUnVsZU5hbWVNZXRhc3RhdGVtZW50UnVsZU5hbWUiLCJtZXRhc3RhdGVtZW50Tm9kZUEiLCJtZXRhc3RhdGVtZW50Tm9kZUIiLCJtZXRhc3RhdGVtZW50Tm9kZVZlcmlmaWVkIiwidmVyaWZ5TWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGFWYXJpYWJsZU5vZGVWZXJpZmllZCIsInZlcmlmeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlVmVyaWZpZWQiLCJtZXRhdmFyaWFibGVOYW1lQSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmQiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsImNyZWF0ZVN1YnN0aXR1dGlvbnMiLCJjb25zdHJ1Y3RvciIsIm1ldGFzdGF0ZW1lbnRGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24iLCJNZXRhc3RhdGVtZW50Rm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbU1ldGF2YXJpYWJsZU5hbWVBbmRNZXRhc3RhdGVtZW50Tm9kZSIsInB1c2giLCJWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7NkRBVEE7aUZBQ2dDO3FCQUUzQjt5QkFDYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR3hDLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixJQUFBLEFBQU1GLHFEQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ25CRyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVD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