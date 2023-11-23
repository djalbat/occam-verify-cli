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
var _term = /*#__PURE__*/ _interop_require_wildcard(require("../../verify/term"));
var _nodes = /*#__PURE__*/ _interop_require_default(require("../../verifier/nodes"));
var _array = require("../../utilities/array");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var EqualityNodesVerifier = /*#__PURE__*/ function(NodesVerifier) {
    _inherits(EqualityNodesVerifier, NodesVerifier);
    var _super = _create_super(EqualityNodesVerifier);
    function EqualityNodesVerifier() {
        _class_call_check(this, EqualityNodesVerifier);
        return _super.apply(this, arguments);
    }
    _create_class(EqualityNodesVerifier, [
        {
            key: "verifyNonTerminalNode",
            value: function verifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, equalities, context, verifyAhead) {
                var nonTerminalNodeVerified = false;
                var leftNonTerminalNodeRuleName = leftNonTerminalNode.getRuleName(), rightNonTerminalNodeRuleName = rightNonTerminalNode.getRuleName();
                if (leftNonTerminalNodeRuleName === rightNonTerminalNodeRuleName) {
                    var leftNonTerminalNodeRuleNameTermRuleName = leftNonTerminalNodeRuleName === _ruleNames.TERM_RULE_NAME, rightNonTerminalNodeRuleNameTermRuleName = rightNonTerminalNodeRuleName === _ruleNames.TERM_RULE_NAME;
                    if (leftNonTerminalNodeRuleNameTermRuleName && rightNonTerminalNodeRuleNameTermRuleName) {
                        var leftTermNode = leftNonTerminalNode, rightTermNode = rightNonTerminalNode, termNodeVerified = this.verifyTermNode(leftTermNode, rightTermNode, equalities, context, verifyAhead);
                        nonTerminalNodeVerified = termNodeVerified; ///
                    }
                    if (!nonTerminalNodeVerified) {
                        var leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(), rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(), leftChildNodes = leftNonTerminalNodeChildNodes, rightChildNodes = rightNonTerminalNodeChildNodes, childNodesVerified = this.verifyChildNodes(leftChildNodes, rightChildNodes, equalities, context, verifyAhead);
                        nonTerminalNodeVerified = childNodesVerified; ///
                    }
                }
                return nonTerminalNodeVerified;
            }
        },
        {
            key: "verifyTermNode",
            value: function verifyTermNode(leftTermNode, rightTermNode, equalities, context, verifyAhead) {
                var termNodeVerified = false;
                var variables = [], leftTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(leftTermNode, variables, context), rightTermVerifiedAsVariable = (0, _term.verifyTermAsVariable)(rightTermNode, variables, context);
                var equality = null;
                if (leftTermVerifiedAsVariable && rightTermVerifiedAsVariable) {
                    var firstVariable = (0, _array.first)(variables), secondVariable = (0, _array.second)(variables), leftVariable = firstVariable, rightVariable = secondVariable, leftVariableType = leftVariable.getType(), rightVariableType = rightVariable.getType(), leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType = leftVariableType.isEqualToOrSubTypeOfOfSuperTypeOf(rightVariableType);
                    if (leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType) {
                        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
                    }
                } else if (leftTermVerifiedAsVariable) {
                    var types = [];
                    (0, _term.default)(rightTermNode, types, context);
                    var firstType = (0, _array.first)(types), firstVariable1 = (0, _array.first)(variables), leftVariable1 = firstVariable1, rightTermType = firstType, leftVariableType1 = leftVariable1.getType(), leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType1.isEqualToOrSuperTypeOf(rightTermType);
                    if (leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
                        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
                    }
                } else if (rightTermVerifiedAsVariable) {
                    var types1 = [];
                    (0, _term.default)(leftTermNode, types1, context);
                    var firstType1 = (0, _array.first)(types1), firstVariable2 = (0, _array.first)(variables), leftTermType = firstType1, rightVariable1 = firstVariable2, rightVariableType1 = rightVariable1.getType(), rightVariableTypeEqualToOrSuperTypeOfRightTermType = rightVariableType1.isEqualToOrSuperTypeOf(leftTermType);
                    if (rightVariableTypeEqualToOrSuperTypeOfRightTermType) {
                        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
                    }
                } else {
                    var types2 = [];
                    (0, _term.default)(leftTermNode, types2, context);
                    (0, _term.default)(rightTermNode, types2, context);
                    var firstType2 = (0, _array.first)(types2), secondType = (0, _array.second)(types2), leftTermType1 = firstType2, rightTermType1 = secondType, leftTermTypeEqualToOrSubTypeOfOfSuperTypeOfRightTermType = leftTermType1.isEqualToOrSubTypeOfOfSuperTypeOf(rightTermType1);
                    if (leftTermTypeEqualToOrSubTypeOfOfSuperTypeOfRightTermType) {
                        equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode);
                    }
                }
                if (equality !== null) {
                    var equalityA = equality, equalitiesB = equalities, equalityMatches = equalitiesB.some(function(equalityB) {
                        var equalityAMatchesEqualityB = equalityA.match(equalityB, equalitiesB, context);
                        if (equalityAMatchesEqualityB) {
                            return true;
                        }
                    });
                    termNodeVerified = equalityMatches; ///
                }
                return termNodeVerified;
            }
        }
    ]);
    return EqualityNodesVerifier;
}(_nodes.default);
var equalityNodesVerifier = new EqualityNodesVerifier();
var _default = equalityNodesVerifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZmllci9ub2Rlcy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4uLy4uL3ZlcmlmeS90ZXJtXCI7XG5pbXBvcnQgTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvbm9kZXNcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFRFUk1fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuaW1wb3J0IHsgdmVyaWZ5VGVybUFzVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdmVyaWZ5L3Rlcm1cIjtcblxuY2xhc3MgRXF1YWxpdHlOb2Rlc1ZlcmlmaWVyIGV4dGVuZHMgTm9kZXNWZXJpZmllciB7XG4gIHZlcmlmeU5vblRlcm1pbmFsTm9kZShsZWZ0Tm9uVGVybWluYWxOb2RlLCByaWdodE5vblRlcm1pbmFsTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IGxlZnROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByaWdodE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gcmlnaHROb25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKTtcblxuICAgIGlmIChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUpIHtcbiAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVSdWxlTmFtZVRlcm1SdWxlTmFtZSA9IChsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IFRFUk1fUlVMRV9OQU1FKSxcbiAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWVUZXJtUnVsZU5hbWUgPSAocmlnaHROb25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gVEVSTV9SVUxFX05BTUUpO1xuXG4gICAgICBpZiAobGVmdE5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lVGVybVJ1bGVOYW1lICYmIHJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWVUZXJtUnVsZU5hbWUpIHtcbiAgICAgICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gbGVmdE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodE5vblRlcm1pbmFsTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkID0gdGVybU5vZGVWZXJpZmllZDsgIC8vL1xuICAgICAgfVxuXG4gICAgICBpZiAoIW5vblRlcm1pbmFsTm9kZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGxlZnROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gbGVmdE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgbGVmdENoaWxkTm9kZXMgPSBsZWZ0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIHJpZ2h0Q2hpbGROb2RlcyA9IHJpZ2h0Tm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q2hpbGROb2RlcyhsZWZ0Q2hpbGROb2RlcywgcmlnaHRDaGlsZE5vZGVzLCBlcXVhbGl0aWVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbE5vZGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgZXF1YWxpdGllcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgICBsZXQgdGVybU5vZGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZShsZWZ0VGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCksXG4gICAgICAgICAgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUocmlnaHRUZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBpZiAobGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUgJiYgcmlnaHRUZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgIHNlY29uZFZhcmlhYmxlID0gc2Vjb25kKHZhcmlhYmxlcyksXG4gICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBzZWNvbmRWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlID0gcmlnaHRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YocmlnaHRWYXJpYWJsZVR5cGUpO1xuXG4gICAgICBpZiAobGVmdFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFZhcmlhYmxlVHlwZSkge1xuICAgICAgICBlcXVhbGl0eSA9IEVxdWFsaXR5LmZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsZWZ0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgIGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICByaWdodFRlcm1UeXBlID0gZmlyc3RUeXBlLCAgLy8vXG4gICAgICAgICAgICBsZWZ0VmFyaWFibGVUeXBlID0gbGVmdFZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIGxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgIGlmIChsZWZ0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgY29uc3QgZmlyc3RUeXBlID0gZmlyc3QodHlwZXMpLFxuICAgICAgICAgICAgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBmaXJzdFR5cGUsICAvLy9cbiAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVUeXBlID0gcmlnaHRWYXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICByaWdodFZhcmlhYmxlVHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IHJpZ2h0VmFyaWFibGVUeXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgICAgaWYgKHJpZ2h0VmFyaWFibGVUeXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgICAgdmVyaWZ5VGVybShsZWZ0VGVybU5vZGUsIHR5cGVzLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZ5VGVybShyaWdodFRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCk7XG5cbiAgICAgIGNvbnN0IGZpcnN0VHlwZSA9IGZpcnN0KHR5cGVzKSxcbiAgICAgICAgICAgIHNlY29uZFR5cGUgPSBzZWNvbmQodHlwZXMpLFxuICAgICAgICAgICAgbGVmdFRlcm1UeXBlID0gZmlyc3RUeXBlLCAvLy9cbiAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSBzZWNvbmRUeXBlLCAvLy9cbiAgICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZihyaWdodFRlcm1UeXBlKTtcblxuICAgICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgIGVxdWFsaXR5ID0gRXF1YWxpdHkuZnJvbUxlZnRUZXJtTm9kZUFuZFJpZ2h0VGVybU5vZGUobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5QSA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICAgIGVxdWFsaXRpZXNCID0gZXF1YWxpdGllcywgLy8vXG4gICAgICAgICAgICBlcXVhbGl0eU1hdGNoZXMgPSBlcXVhbGl0aWVzQi5zb21lKChlcXVhbGl0eUIpID0+IHsgLy8vXG4gICAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIgPSBlcXVhbGl0eUEubWF0Y2goZXF1YWxpdHlCLCBlcXVhbGl0aWVzQiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKGVxdWFsaXR5QU1hdGNoZXNFcXVhbGl0eUIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRlcm1Ob2RlVmVyaWZpZWQgPSBlcXVhbGl0eU1hdGNoZXM7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybU5vZGVWZXJpZmllZDtcbiAgfVxufVxuXG5jb25zdCBlcXVhbGl0eU5vZGVzVmVyaWZpZXIgPSBuZXcgRXF1YWxpdHlOb2Rlc1ZlcmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVxdWFsaXR5Tm9kZXNWZXJpZmllcjtcbiJdLCJuYW1lcyI6WyJFcXVhbGl0eU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlIiwicmlnaHROb25UZXJtaW5hbE5vZGUiLCJlcXVhbGl0aWVzIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWUiLCJsZWZ0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWVUZXJtUnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInJpZ2h0Tm9uVGVybWluYWxOb2RlUnVsZU5hbWVUZXJtUnVsZU5hbWUiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwidGVybU5vZGVWZXJpZmllZCIsInZlcmlmeVRlcm1Ob2RlIiwibGVmdE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicmlnaHROb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwibGVmdENoaWxkTm9kZXMiLCJyaWdodENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidmFyaWFibGVzIiwibGVmdFRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInJpZ2h0VGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsImVxdWFsaXR5IiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0Iiwic2Vjb25kVmFyaWFibGUiLCJzZWNvbmQiLCJsZWZ0VmFyaWFibGUiLCJyaWdodFZhcmlhYmxlIiwibGVmdFZhcmlhYmxlVHlwZSIsImdldFR5cGUiLCJyaWdodFZhcmlhYmxlVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mUmlnaHRWYXJpYWJsZVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YiLCJFcXVhbGl0eSIsImZyb21MZWZ0VGVybU5vZGVBbmRSaWdodFRlcm1Ob2RlIiwidHlwZXMiLCJ2ZXJpZnlUZXJtIiwiZmlyc3RUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwibGVmdFRlcm1UeXBlIiwicmlnaHRWYXJpYWJsZVR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJzZWNvbmRUeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJlcXVhbGl0eUEiLCJlcXVhbGl0aWVzQiIsImVxdWFsaXR5TWF0Y2hlcyIsInNvbWUiLCJlcXVhbGl0eUIiLCJlcXVhbGl0eUFNYXRjaGVzRXF1YWxpdHlCIiwibWF0Y2giLCJOb2Rlc1ZlcmlmaWVyIiwiZXF1YWxpdHlOb2Rlc1ZlcmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtSUE7OztlQUFBOzs7NERBakl1Qjs0REFDRztxQkFFSTt5QkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRy9CLElBQUEsQUFBTUEsc0NBd0hILEFBeEhI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