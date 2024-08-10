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
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../../substitution/termForVariable"));
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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable");
var SubstitutionNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(SubstitutionNodesVerifier, NodesVerifier);
    var _super = _create_super(SubstitutionNodesVerifier);
    function SubstitutionNodesVerifier() {
        _class_call_check(this, SubstitutionNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(SubstitutionNodesVerifier, [
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
                                nonTerminalNodeVerified = termNodeVerified; ///
                                break;
                            }
                        default:
                            {
                                nonTerminalNodeVerified = _get(_get_prototype_of(SubstitutionNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
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
                var termNodeVerified;
                var variableNodeA = variableNodeQuery(termNodeA);
                if (variableNodeA !== null) {
                    var variableNodeVerified = this.verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);
                    termNodeVerified = variableNodeVerified; ///
                } else {
                    var nonTerminalNodeA = termNodeA, nonTerminalNodeB = termNodeB, nonTerminalNodeVerified = _get(_get_prototype_of(SubstitutionNodesVerifier.prototype), "verifyNonTerminalNode", this).call(this, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);
                    termNodeVerified = nonTerminalNodeVerified; ///
                }
                return termNodeVerified;
            }
        },
        {
            key: "verifyVariableNode",
            value: function verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
                var variableNodeVerified = false;
                if (variableNodeVerified === false) {
                    var variableNodeB = variableNodeQuery(termNodeB);
                    if (variableNodeB !== null) {
                        var variableNodeAMatchedVariableNodeB = variableNodeA.match(variableNodeB);
                        if (variableNodeAMatchedVariableNodeB) {
                            var verifiedAhead = verifyAhead();
                            variableNodeVerified = verifiedAhead; ///
                        }
                    }
                }
                if (variableNodeVerified === false) {
                    var variableNode = variableNodeA, substitution = substitutions.find(function(substitution) {
                        var matches = substitution.matchVariableNode(variableNode);
                        if (matches) {
                            return true;
                        }
                    }) || null;
                    if (substitution !== null) {
                        var termNode = termNodeB, termNodeMatches = substitution.matchTermNode(termNode);
                        if (termNodeMatches) {
                            var verifiedAhead1 = verifyAhead();
                            variableNodeVerified = verifiedAhead1; ///
                        }
                    } else {
                        var verifiedAhead2;
                        var termNode1 = termNodeB, termForVariableSubstitution = _termForVariable.default.fromVariableNodeAndTermNode(variableNode, termNode1), substitution1 = termForVariableSubstitution; ///
                        substitutions.push(substitution1);
                        verifiedAhead2 = verifyAhead();
                        if (!verifiedAhead2) {
                            substitutions.pop();
                        }
                        variableNodeVerified = verifiedAhead2; ///
                    }
                }
                return variableNodeVerified;
            }
        }
    ]);
    return SubstitutionNodesVerifier;
}(_nodes.default);
var substitutionNodesVerifier = new SubstitutionNodesVerifier();
var _default = substitutionNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9zdWJzdGl0dXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBOb2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi8uLi92ZXJpZmllci9ub2Rlc1wiO1xuXG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi8uLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5jbGFzcyBTdWJzdGl0dXRpb25Ob2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlQS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVBUnVsZU5hbWUgPT09IG5vblRlcm1pbmFsTm9kZUJSdWxlTmFtZSkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGVBUnVsZU5hbWU7ICAvLy9cblxuICAgICAgc3dpdGNoIChydWxlTmFtZSkge1xuICAgICAgICBjYXNlIFRFUk1fUlVMRV9OQU1FOiB7XG4gICAgICAgICAgY29uc3QgdGVybU5vZGVBID0gbm9uVGVybWluYWxOb2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGVCID0gbm9uVGVybWluYWxOb2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybU5vZGUodGVybU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgLy8vXG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IHN1cGVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlKHRlcm1Ob2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB2ZXJpZnlBaGVhZCkge1xuICAgIGxldCB0ZXJtTm9kZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlQSk7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgdGVybU5vZGVWZXJpZmllZCA9IHZhcmlhYmxlTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHRlcm1Ob2RlQSwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gc3VwZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgdGVybU5vZGVWZXJpZmllZCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybU5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHZlcmlmeUFoZWFkKSB7XG4gICAgbGV0IHZhcmlhYmxlTm9kZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodmFyaWFibGVOb2RlVmVyaWZpZWQgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5vZGVCID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGVCKTtcblxuICAgICAgaWYgKHZhcmlhYmxlTm9kZUIgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlQU1hdGNoZWRWYXJpYWJsZU5vZGVCID0gdmFyaWFibGVOb2RlQS5tYXRjaCh2YXJpYWJsZU5vZGVCKTtcblxuICAgICAgICBpZiAodmFyaWFibGVOb2RlQU1hdGNoZWRWYXJpYWJsZU5vZGVCKSB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICB2YXJpYWJsZU5vZGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlTm9kZVZlcmlmaWVkID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlQSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIHZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgc3Vic3RpdHV0aW9ucy5wb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhcmlhYmxlTm9kZVZlcmlmaWVkID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZVZlcmlmaWVkO1xuICB9XG59XG5cbmNvbnN0IHN1YnN0aXR1dGlvbk5vZGVzVmVyaWZpZXIgPSBuZXcgU3Vic3RpdHV0aW9uTm9kZXNWZXJpZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzdWJzdGl0dXRpb25Ob2Rlc1ZlcmlmaWVyO1xuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiU3Vic3RpdHV0aW9uTm9kZXNWZXJpZmllciIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidmVyaWZ5QWhlYWQiLCJub25UZXJtaW5hbE5vZGVWZXJpZmllZCIsIm5vblRlcm1pbmFsTm9kZUFSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlQlJ1bGVOYW1lIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlQSIsInRlcm1Ob2RlQiIsInRlcm1Ob2RlVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtTm9kZSIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZU5vZGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZUIiLCJ2YXJpYWJsZU5vZGVBTWF0Y2hlZFZhcmlhYmxlTm9kZUIiLCJtYXRjaCIsInZlcmlmaWVkQWhlYWQiLCJ2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlIiwicHVzaCIsInBvcCIsIk5vZGVzVmVyaWZpZXIiLCJzdWJzdGl0dXRpb25Ob2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0SEE7OztlQUFBOzs7NERBMUgwQjtzRUFFYztxQkFFZDt5QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxJQUFBLEFBQU1DLDBDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO2dCQUNoSCxJQUFJQywwQkFBMEI7Z0JBRTlCLElB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