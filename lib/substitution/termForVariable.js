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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var termNodeQuery = (0, _query.nodeQuery)("/*/term!"), variableNodeQuery = (0, _query.nodeQuery)("/*/variable!");
var TermForVariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermForVariableSubstitution, Substitution);
    function TermForVariableSubstitution(variableNode, termNode) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _call_super(this, TermForVariableSubstitution);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBpc1RyYW5zZm9ybWVkKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHRlcm1Ob2QgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtTm9kZS5tYXRjaCh0ZXJtTm9kKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy52YXJpYWJsZU5vZGUubWF0Y2godmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB0cmFuc2Zvcm1lZCA9ICgoIXRlcm1Ob2RlTWF0Y2hlcykgJiYgKCF2YXJpYWJsZU5vZGVNYXRjaGVzKSk7XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWQ7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc1Rlcm1Ob2RlID0gdGhpcy50ZXJtTm9kZS5tYXRjaCh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1Rlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHRoaXMudmFyaWFibGVOb2RlLm1hdGNoKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1ZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSh2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTsgLy8vXG5cbiAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7IC8vL1xuXG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTsgLy8vXG5cbiAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7IC8vL1xuXG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJzdGl0dXRpb25zLnNvbWUoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh0ZXJtVmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1Ob2RlO1xufVxuXG5mdW5jdGlvbiBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBzdWJzdGl0dXRpb25zLnNvbWUoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFRlcm1Ob2RlIiwiaXNUcmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbiIsInRlcm1Ob2QiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaCIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJ0cmFuc2Zvcm1lZCIsIm1hdGNoVGVybU5vZGUiLCJtYXRjaGVzVGVybU5vZGUiLCJtYXRjaFZhcmlhYmxlTm9kZSIsIm1hdGNoZXNWYXJpYWJsZU5vZGUiLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUiLCJmcm9tU3Vic3RpdHV0aW9uQW5kU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRlVGVybU5vZGUiLCJzdWJzdGl0dXRlVmFyaWFibGVOb2RlIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9uIiwidGVybVZhcmlhYmxlTm9kZSIsInNvbWUiLCJzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzttRUFQSTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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