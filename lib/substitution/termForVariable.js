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
            key: "getNode",
            value: function getNode() {
                var node = this.termNode; ///
                return node;
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
        },
        {
            key: "unifyAgainstEquivalence",
            value: function unifyAgainstEquivalence(equivalence, substitutions, localContext) {
                var unifiedAgainstEquivalence;
                var equivalenceMatchesVariableNode = equivalence.matchVariableNode(this.variableNode);
                if (equivalenceMatchesVariableNode) {
                    var equivalenceMatchesTermNode = equivalence.matchTermNode(this.termNode);
                    if (equivalenceMatchesTermNode) {
                        unifiedAgainstEquivalence = true;
                    }
                }
                return unifiedAgainstEquivalence;
            }
        },
        {
            key: "asString",
            value: function asString(localContextA, localContextB) {
                var termNodeB = this.termNode, termStringB = localContextB.nodeAsString(termNodeB), variableNodeA = this.variableNode, variableStringA = localContextA.nodeAsString(variableNodeA), string = "[".concat(termStringB, " for ").concat(variableStringA, "]");
                return string;
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
        substitutions.someSubstitution(function(substitution) {
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
    substitutions.someSubstitution(function(substitution) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgaXNUcmFuc2Zvcm1lZChzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCB0ZXJtTm9kID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMudGVybU5vZGUubWF0Y2godGVybU5vZCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMudmFyaWFibGVOb2RlLm1hdGNoKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdHJhbnNmb3JtZWQgPSAoKCF0ZXJtTm9kZU1hdGNoZXMpICYmICghdmFyaWFibGVOb2RlTWF0Y2hlcykpO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNUZXJtTm9kZSA9IHRoaXMudGVybU5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNWYXJpYWJsZU5vZGUgPSB0aGlzLnZhcmlhYmxlTm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNWYXJpYWJsZU5vZGU7XG4gIH1cblxuICB1bmlmeUFnYWluc3RFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2U7XG5cbiAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFZhcmlhYmxlTm9kZSh0aGlzLnZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVGVybU5vZGUodGhpcy50ZXJtTm9kZSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgICB1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCB0ZXJtTm9kZUIgPSB0aGlzLnRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyh0ZXJtTm9kZUIpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZUEgPSB0aGlzLnZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nQSA9IGxvY2FsQ29udGV4dEEubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZUEpLFxuICAgICAgICAgIHN0cmluZyA9IGBbJHt0ZXJtU3RyaW5nQn0gZm9yICR7dmFyaWFibGVTdHJpbmdBfV1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSh2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbkFuZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5vZGUoKTtcblxuICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTsgLy8vXG5cbiAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7IC8vL1xuXG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTsgLy8vXG5cbiAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7IC8vL1xuXG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh0ZXJtVmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1Ob2RlO1xufVxuXG5mdW5jdGlvbiBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBzdWJzdGl0dXRpb25zLnNvbWVTdWJzdGl0dXRpb24oKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsIm5vZGUiLCJpc1RyYW5zZm9ybWVkIiwic3Vic3RpdHV0aW9uIiwidGVybU5vZCIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsInRyYW5zZm9ybWVkIiwibWF0Y2hUZXJtTm9kZSIsIm1hdGNoZXNUZXJtTm9kZSIsIm1hdGNoVmFyaWFibGVOb2RlIiwibWF0Y2hlc1ZhcmlhYmxlTm9kZSIsInVuaWZ5QWdhaW5zdEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0IiwidW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlIiwiYXNTdHJpbmciLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInRlcm1Ob2RlQiIsInRlcm1TdHJpbmdCIiwibm9kZUFzU3RyaW5nIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlU3RyaW5nQSIsInN0cmluZyIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSIsImZyb21TdWJzdGl0dXRpb25BbmRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0ZVRlcm1Ob2RlIiwic3Vic3RpdHV0ZVZhcmlhYmxlTm9kZSIsImZyb21TdWJzdGl0dXRpb25Ob2RlQW5kU3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbiIsInRlcm1WYXJpYWJsZU5vZGUiLCJzb21lU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7bUVBUEk7cUJBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGFBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUM7QUFFckIsSUFBQSxBQUFNRiw0Q0FBRCxBQUFMO2NBQU1BO2FBQUFBLDRCQUNQSSxZQUFZLEVBQUVDLFFBQVE7Z0NBRGZMOztnQkFFakIsa0JBRmlCQTtRQUlqQixNQUFLSSxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtDLFFBQVEsR0FBR0E7OztrQkFMQ0w7O1lBUW5CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNKLFFBQVEsRUFBRSxHQUFHO2dCQUUvQixPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFlBQVk7Z0JBQ3hCLElBQU1DLFVBQVVELGFBQWFKLFdBQVcsSUFDbENILGVBQWVPLGFBQWFMLGVB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