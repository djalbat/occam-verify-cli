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
var _term = /*#__PURE__*/ _interop_require_default(require("../../verify/term"));
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../../substitution/termForVariable"));
var _array = require("../../utilities/array");
var _query = require("../../utilities/query");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var variableNodeQuery = (0, _query.nodeQuery)('/term/variable!');
var IntrinsicLevelNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(IntrinsicLevelNodesVerifier, NodesVerifier);
    var _super = _create_super(IntrinsicLevelNodesVerifier);
    function IntrinsicLevelNodesVerifier() {
        _class_call_check(this, IntrinsicLevelNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(IntrinsicLevelNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(), nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();
                if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
                    var ruleName = nonTerminalNodeARuleName; ///
                    switch(ruleName){
                        case _ruleNames.TERM_RULE_NAME:
                            {
                                var termNodeA = nonTerminalNodeA, termNodeB = nonTerminalNodeB, termNodeVerified = this.verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                                if (termNodeVerified) {
                                    nonTerminalNodeVerified = true; ///
                                } else {
                                    nonTerminalNodeVerified = _get(_get_prototype_of(IntrinsicLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                                }
                                break;
                            }
                        default:
                            {
                                nonTerminalNodeVerified = _get(_get_prototype_of(IntrinsicLevelNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                                break;
                            }
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(termNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var termNodeVerified = false;
                var variableNodeA = variableNodeQuery(termNodeA);
                if (variableNodeA !== null) {
                    var variableVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                    termNodeVerified = variableVerified; ///
                }
                return termNodeVerified;
            }
        },
        {
            key: "verifyVariableNode",
            value: function verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var variableVerified = false;
                var substitution = substitutions.find(function(substitution) {
                    var substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNodeA);
                    if (substitutionMatchesVariableNodeA) {
                        return true;
                    }
                }) || null;
                if (substitution !== null) {
                    var termNode = termNodeB, substitutionNodesVerified = substitution.matchTermNode(termNode);
                    if (substitutionNodesVerified) {
                        var verifiedAhead = verifyAhead();
                        variableVerified = verifiedAhead; ///
                    }
                } else {
                    var variableNode = variableNodeA, localContext = localContextA, variable = localContext.findVariableByVariableNode(variableNode);
                    if (variable !== null) {
                        var terms = [], context = localContextB, termNode1 = termNodeB, termVerified = (0, _term.default)(termNode1, terms, context, function() {
                            var verifiedAhead = false;
                            var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), variableType = variable.getType(), variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);
                            if (variableTypeEqualToOrSuperTypeOfTermType) {
                                var termForVariableSubstitution = _termForVariable.default.fromVariableNodeAndTermNode(variableNode, termNode1), substitution = termForVariableSubstitution; ///
                                substitutions.push(substitution);
                                verifiedAhead = verifyAhead();
                                if (!verifiedAhead) {
                                    substitutions.pop();
                                }
                            }
                            return verifiedAhead;
                        });
                        variableVerified = termVerified; ///
                    }
                }
                return variableVerified;
            }
        }
    ]);
    return IntrinsicLevelNodesVerifier;
}(_nodes.default);
var intrinsicLevelNodesVerifier = new IntrinsicLevelNodesVerifier();
var _default = intrinsicLevelNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9pbnRyaW5zaWNMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcbmltcG9ydCBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uLy4uL3N1YnN0aXR1dGlvbi90ZXJtRm9yVmFyaWFibGVcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoJy90ZXJtL3ZhcmlhYmxlIScpO1xuXG5jbGFzcyBJbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIgZXh0ZW5kcyBOb2Rlc1ZlcmlmaWVyIHtcbiAgdmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSA9PT0gbm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lKSB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZTsgIC8vL1xuXG4gICAgICBzd2l0Y2ggKHJ1bGVOYW1lKSB7XG4gICAgICAgIGNhc2UgVEVSTV9SVUxFX05BTUU6IHtcbiAgICAgICAgICBjb25zdCB0ZXJtTm9kZUEgPSBub25UZXJtaW5hbE5vZGVBLCAgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBpZiAodGVybU5vZGVWZXJpZmllZCkge1xuICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSB0cnVlOyAgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGVBKTtcblxuICAgIGlmICh2YXJpYWJsZU5vZGVBICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB2YXJpYWJsZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybU5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlQSA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVBKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25Ob2Rlc1ZlcmlmaWVkID0gc3Vic3RpdHV0aW9uLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZXNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEEsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHRCLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMucG9wKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWQ7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBpbnRyaW5zaWNMZXZlbE5vZGVzVmVyaWZpZXIgPSBuZXcgSW50cmluc2ljTGV2ZWxOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIkludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlQSIsInRlcm1Ob2RlQiIsInRlcm1Ob2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZCIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGVBIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZWQiLCJtYXRjaFRlcm1Ob2RlIiwidmVyaWZpZWRBaGVhZCIsInZhcmlhYmxlTm9kZSIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ0ZXJtcyIsImNvbnRleHQiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidmFyaWFibGVUeXBlIiwidmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUiLCJwdXNoIiwicG9wIiwiTm9kZXNWZXJpZmllciIsImludHJpbnNpY0xldmVsTm9kZXNWZXJpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOEhBOzs7ZUFBQTs7OzJEQTVIdUI7NERBQ0c7c0VBQ2M7cUJBRWxCO3FCQUNJO3lCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLElBQUEsQUFBTUMsNENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0JBQ2hILElBQUlDLDBCQUEwQjtnQkFFOUIsSUFBTUMsMkJBQTJCUCxpQkFBaUJRLFdBQVcsSUFDdkRDLDJCQUEyQlIsaUJBQWlCTyxXQUFXO2dCQUU3RCxJQUFJRCw2QkFBNkJFLDBCQUEwQjtvQkFDekQsSUFBTUMsV0FBV0gsMEJBQTJCLEdBQUc7b0JBRS9DLE9BQVFHO3dCQUNOLEtBQUtDLHlCQUFjOzRCQUFFO2dDQUNuQixJQUFNQyxZQUFZWixrQkFDWmEsWUFBWVosa0JBQ1phLG1CQUFtQixJQUFJLENBQUNDLGNBQWMsQ0FBQ0gsV0FBV0MsV0FBV1gsZUFBZUMsZUFBZUMsZUFBZUM7Z0NB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