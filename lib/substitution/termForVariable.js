"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermForVariableSubstitution;
    }
});
var _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
var _query = require("../utilities/query");
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
var termNodeQuery = (0, _query.nodeQuery)("/*/term!"), variableNodeQuery = (0, _query.nodeQuery)("/*/variable!");
var TermForVariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermForVariableSubstitution, Substitution);
    var _super = _create_super(TermForVariableSubstitution);
    function TermForVariableSubstitution(variableNode, termNode) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _super.call(this);
        _this.variableNode = variableNode;
        _this.termNode = termNode;
        return _this;
    }
    _create_class(TermForVariableSubstitution, [
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                return this.variableNode;
            }
        },
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
            }
        },
        {
            key: "isTransformed",
            value: function isTransformed(substitution) {
                var termNod = substitution.getTermNode(), variableNode = substitution.getVariableNode(), termNodeMatches = this.termNode.match(termNod), variableNodeMatches = this.variableNode.match(variableNode), transformed = !termNodeMatches && !variableNodeMatches;
                return transformed;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var matchesTermNode = this.termNode.match(termNode);
                return matchesTermNode;
            }
        },
        {
            key: "matchVariableNode",
            value: function matchVariableNode(variableNode) {
                var matchesVariableNode = this.variableNode.match(variableNode);
                return matchesVariableNode;
            }
        }
    ], [
        {
            key: "fromSubstitutionNode",
            value: function fromSubstitutionNode(substitutionNode) {
                var termNode = termNodeQuery(substitutionNode), variableNode = variableNodeQuery(substitutionNode), termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromVariableNodeAndTermNode",
            value: function fromVariableNodeAndTermNode(variableNode, termNode) {
                var termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromSubstitutionAndSubstitutions",
            value: function fromSubstitutionAndSubstitutions(substitution, substitutions) {
                var termNode = substitution.getTermNode(), variableNode = substitution.getVariableNode();
                termNode = substituteTermNode(termNode, substitutions); ///
                variableNode = substituteVariableNode(variableNode, substitutions); ///
                var termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromSubstitutionNodeAndSubstitutions",
            value: function fromSubstitutionNodeAndSubstitutions(substitutionNode, substitutions) {
                var termNode = termNodeQuery(substitutionNode), variableNode = variableNodeQuery(substitutionNode);
                termNode = substituteTermNode(termNode, substitutions); ///
                variableNode = substituteVariableNode(variableNode, substitutions); ///
                var termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode);
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}(_substitution.default);
function substituteTermNode(termNode, substitutions) {
    var termVariableNode = variableNodeQuery(termNode);
    if (termVariableNode !== null) {
        substitutions.some(function(substitution) {
            var substitutionMatchesVariableNode = substitution.matchVariableNode(termVariableNode);
            if (substitutionMatchesVariableNode) {
                termNode = substitution.getTermNode(); ///
                return true;
            }
        });
    }
    return termNode;
}
function substituteVariableNode(variableNode, substitutions) {
    substitutions.some(function(substitution) {
        var substitutionMatchesVariableNode = substitution.matchVariableNode(variableNode);
        if (substitutionMatchesVariableNode) {
            var termNode = substitution.getTermNode(), termVariableNode = variableNodeQuery(termNode);
            if (termVariableNode !== null) {
                variableNode = termVariableNode; ///
                return true;
            }
        }
    });
    return variableNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBpc1RyYW5zZm9ybWVkKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHRlcm1Ob2QgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtTm9kZS5tYXRjaCh0ZXJtTm9kKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy52YXJpYWJsZU5vZGUubWF0Y2godmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB0cmFuc2Zvcm1lZCA9ICgoIXRlcm1Ob2RlTWF0Y2hlcykgJiYgKCF2YXJpYWJsZU5vZGVNYXRjaGVzKSk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc1Rlcm1Ob2RlID0gdGhpcy50ZXJtTm9kZS5tYXRjaCh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1Rlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHRoaXMudmFyaWFibGVOb2RlLm1hdGNoKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1ZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSh2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTsgLy8vXG5cbiAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7IC8vL1xuXG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTsgLy8vXG5cbiAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7IC8vL1xuXG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJzdGl0dXRpb25zLnNvbWUoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh0ZXJtVmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1Ob2RlO1xufVxuXG5mdW5jdGlvbiBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBzdWJzdGl0dXRpb25zLnNvbWUoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFRlcm1Ob2RlIiwiaXNUcmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbiIsInRlcm1Ob2QiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaCIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJ0cmFuc2Zvcm1lZCIsIm1hdGNoVGVybU5vZGUiLCJtYXRjaGVzVGVybU5vZGUiLCJtYXRjaFZhcmlhYmxlTm9kZSIsIm1hdGNoZXNWYXJpYWJsZU5vZGUiLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUiLCJmcm9tU3Vic3RpdHV0aW9uQW5kU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRlVGVybU5vZGUiLCJzdWJzdGl0dXRlVmFyaWFibGVOb2RlIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9uIiwidGVybVZhcmlhYmxlTm9kZSIsInNvbWUiLCJzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzttRUFQSTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsYUFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixJQUFBLEFBQU1GLDRDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBLDRCQUNQSSxZQUFZLEVBQUVDLFFBQVE7Z0NBRGZMOzs7UUFJakIsTUFBS0ksWUFBWSxHQUFHQTtRQUNwQixNQUFLQyxRQUFRLEdBQUdBOzs7a0JBTENMOztZQVFuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFlBQVk7Z0JBQ3hCLElBQU1DLFVBQVVELGFBQWFGLFdBQVcsSUFDbENILGVBQWVLLGFBQWFILGVBQWUsSUFDM0NLLGtCQUFrQixJQUFJLENBQUNOLFFBQVEsQ0FBQ08sS0FBSyxDQUFDRixVQUN0Q0csc0JBQXNCLElBQUksQ0FBQ1QsWUFBWSxDQUFDUSxLQUFLLENBQUNSLGVBQzlDVSxjQUFlLEFBQUMsQ0FBQ0gsbUJBQXFCLENBQUNFO2dCQUU3QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNWLFFBQVE7Z0JBQ3BCLElBQU1XLGtCQUFrQixJQUFJLENBQUNYLFFBQVEsQ0FBQ08sS0FBSyxDQUFDUDtnQkFFNUMsT0FBT1c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JiLFlBQVk7Z0JBQzVCLElBQU1jLHNCQUFzQixJQUFJLENBQUNkLFlBQVksQ0FBQ1EsS0FBSyxDQUFDUjtnQkFFcEQsT0FBT2M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJDLGdCQUFnQjtnQkFDMUMsSUFBTWYsV0FBV0osY0FBY21CLG1CQUN6QmhCLGVBQWVELGtCQUFrQmlCLG1CQUNqQ0MsOEJBQThCLElBekNuQnJCLDRCQXlDbURJLGNBQWNDO2dCQUVsRixPQUFPZ0I7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QmxCLFlBQVksRUFBRUMsUUFBUTtnQkFDdkQsSUFBTWdCLDhCQUE4QixJQS9DbkJyQiw0QkErQ21ESSxjQUFjQztnQkFFbEYsT0FBT2dCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxpQ0FBaUNkLFlBQVksRUFBRWUsYUFBYTtnQkFDakUsSUFBSW5CLFdBQVdJLGFBQWFGLFdBQVcsSUFDbkNILGVBQWVLLGFBQWFILGVBQWU7Z0JBRS9DRCxXQUFXb0IsbUJBQW1CcEIsVUFBVW1CLGdCQUFnQixHQUFHO2dCQUUzRHBCLGVBQWVzQix1QkFBdUJ0QixjQUFjb0IsZ0JBQWdCLEdBQUc7Z0JBRXZFLElBQU1ILDhCQUE4QixJQTVEbkJyQiw0QkE0RG1ESSxjQUFjQztnQkFFbEYsT0FBT2dCO1lBQ1Q7OztZQUVPTSxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUNQLGdCQUFnQixFQUFFSSxhQUFhO2dCQUN6RSxJQUFJbkIsV0FBV0osY0FBY21CLG1CQUN6QmhCLGVBQWVELGtCQUFrQmlCO2dCQUVyQ2YsV0FBV29CLG1CQUFtQnBCLFVBQVVtQixnQkFBZ0IsR0FBRztnQkFFM0RwQixlQUFlc0IsdUJBQXVCdEIsY0FBY29CLGdCQUFnQixHQUFHO2dCQUV2RSxJQUFNSCw4QkFBOEIsSUF6RW5CckIsNEJBeUVtREksY0FBY0M7Z0JBRWxGLE9BQU9nQjtZQUNUOzs7V0E1RW1CckI7RUFBb0M0QixxQkFBWTtBQStFckUsU0FBU0gsbUJBQW1CcEIsUUFBUSxFQUFFbUIsYUFBYTtJQUNqRCxJQUFNSyxtQkFBbUIxQixrQkFBa0JFO0lBRTNDLElBQUl3QixxQkFBcUIsTUFBTTtRQUM3QkwsY0FBY00sSUFBSSxDQUFDLFNBQUNyQjtZQUNsQixJQUFNc0Isa0NBQWtDdEIsYUFBYVEsaUJBQWlCLENBQUNZO1lBRXZFLElBQUlFLGlDQUFpQztnQkFDbkMxQixXQUFXSSxhQUFhRixXQUFXLElBQUssR0FBRztnQkFFM0MsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9GO0FBQ1Q7QUFFQSxTQUFTcUIsdUJBQXVCdEIsWUFBWSxFQUFFb0IsYUFBYTtJQUN6REEsY0FBY00sSUFBSSxDQUFDLFNBQUNyQjtRQUNsQixJQUFNc0Isa0NBQWtDdEIsYUFBYVEsaUJBQWlCLENBQUNiO1FBRXZFLElBQUkyQixpQ0FBaUM7WUFDbkMsSUFBTTFCLFdBQVdJLGFBQWFGLFdBQVcsSUFDbkNzQixtQkFBbUIxQixrQkFBa0JFO1lBRTNDLElBQUl3QixxQkFBcUIsTUFBTTtnQkFDN0J6QixlQUFleUIsa0JBQW1CLEdBQUc7Z0JBRXJDLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPekI7QUFDVCJ9