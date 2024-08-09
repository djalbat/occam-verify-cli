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
            key: "isIntrinsic",
            value: function isIntrinsic(substitution) {
                var termNod = substitution.getTermNode(), variableNode = substitution.getVariableNode(), termNodeMatches = this.termNode.match(termNod), variableNodeMatches = this.variableNode.match(variableNode), intrinsic = !termNodeMatches && !variableNodeMatches;
                return intrinsic;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var termNodeMatches = this.termNode.match(termNode);
                return termNodeMatches;
            }
        },
        {
            key: "matchVariableNode",
            value: function matchVariableNode(variableNode) {
                var variableNodeMatches = this.variableNode.match(variableNode);
                return variableNodeMatches;
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
            var variableNodeMatches = substitution.matchVariableNode(termVariableNode);
            if (variableNodeMatches) {
                termNode = substitution.getTermNode(); ///
                return true;
            }
        });
    }
    return termNode;
}
function substituteVariableNode(variableNode, substitutions) {
    substitutions.some(function(substitution) {
        var variableNodeMatches = substitution.matchVariableNode(variableNode);
        if (variableNodeMatches) {
            var termNode = substitution.getTermNode(), termVariableNode = variableNodeQuery(termNode);
            if (termVariableNode !== null) {
                variableNode = termVariableNode; ///
                return true;
            }
        }
    });
    return variableNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBpc0ludHJpbnNpYyhzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCB0ZXJtTm9kID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMudGVybU5vZGUubWF0Y2godGVybU5vZCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMudmFyaWFibGVOb2RlLm1hdGNoKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgaW50cmluc2ljID0gKCghdGVybU5vZGVNYXRjaGVzKSAmJiAoIXZhcmlhYmxlTm9kZU1hdGNoZXMpKTtcblxuICAgIHJldHVybiBpbnRyaW5zaWM7XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtTm9kZS5tYXRjaCh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMudmFyaWFibGVOb2RlLm1hdGNoKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSh2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTsgLy8vXG5cbiAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7IC8vL1xuXG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTsgLy8vXG5cbiAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7IC8vL1xuXG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJzdGl0dXRpb25zLnNvbWUoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh0ZXJtVmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1Ob2RlO1xufVxuXG5mdW5jdGlvbiBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBzdWJzdGl0dXRpb25zLnNvbWUoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFRlcm1Ob2RlIiwiaXNJbnRyaW5zaWMiLCJzdWJzdGl0dXRpb24iLCJ0ZXJtTm9kIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2giLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwiaW50cmluc2ljIiwibWF0Y2hUZXJtTm9kZSIsIm1hdGNoVmFyaWFibGVOb2RlIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlIiwiZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0ZVRlcm1Ob2RlIiwic3Vic3RpdHV0ZVZhcmlhYmxlTm9kZSIsImZyb21TdWJzdGl0dXRpb25Ob2RlQW5kU3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbiIsInRlcm1WYXJpYWJsZU5vZGUiLCJzb21lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7OzttRUFQSTtxQkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsYUFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixJQUFB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