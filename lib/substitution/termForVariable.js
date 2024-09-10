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
            value: function unifyAgainstEquivalence(equivalence, substitutions, localContextA, localContextB) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgaXNUcmFuc2Zvcm1lZChzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCB0ZXJtTm9kID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLmdldFZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMudGVybU5vZGUubWF0Y2godGVybU5vZCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMudmFyaWFibGVOb2RlLm1hdGNoKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdHJhbnNmb3JtZWQgPSAoKCF0ZXJtTm9kZU1hdGNoZXMpICYmICghdmFyaWFibGVOb2RlTWF0Y2hlcykpO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNUZXJtTm9kZSA9IHRoaXMudGVybU5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNWYXJpYWJsZU5vZGUgPSB0aGlzLnZhcmlhYmxlTm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNWYXJpYWJsZU5vZGU7XG4gIH1cblxuICB1bmlmeUFnYWluc3RFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCB1bmlmaWVkQWdhaW5zdEVxdWl2YWxlbmNlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlID0gZXF1aXZhbGVuY2UubWF0Y2hWYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2RlKHRoaXMudGVybU5vZGUpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUpIHtcbiAgICAgICAgdW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZWRBZ2FpbnN0RXF1aXZhbGVuY2U7XG4gIH1cblxuICBhc1N0cmluZyhsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3QgdGVybU5vZGVCID0gdGhpcy50ZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmdCID0gbG9jYWxDb250ZXh0Qi5ub2RlQXNTdHJpbmcodGVybU5vZGVCKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVBID0gdGhpcy52YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZVN0cmluZ0EgPSBsb2NhbENvbnRleHRBLm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGVBKSxcbiAgICAgICAgICBzdHJpbmcgPSBgWyR7dGVybVN0cmluZ0J9IGZvciAke3ZhcmlhYmxlU3RyaW5nQX1dYDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUodmFyaWFibGVOb2RlLCB0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJzdGl0dXRpb25BbmRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgICB0ZXJtTm9kZSA9IHN1YnN0aXR1dGVUZXJtTm9kZSh0ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucyk7IC8vL1xuXG4gICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0ZVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJzdGl0dXRpb25Ob2RlQW5kU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICB0ZXJtTm9kZSA9IHN1YnN0aXR1dGVUZXJtTm9kZSh0ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucyk7IC8vL1xuXG4gICAgdmFyaWFibGVOb2RlID0gc3Vic3RpdHV0ZVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1YnN0aXR1dGVUZXJtTm9kZSh0ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgc3Vic3RpdHV0aW9ucy5zb21lU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodGVybVZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCk7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtTm9kZTtcbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0ZVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgc3Vic3RpdHV0aW9ucy5zb21lU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSkge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICAgIHRlcm1WYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB2YXJpYWJsZU5vZGU7XG59XG4iXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRUZXJtTm9kZSIsImdldE5vZGUiLCJub2RlIiwiaXNUcmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbiIsInRlcm1Ob2QiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaCIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJ0cmFuc2Zvcm1lZCIsIm1hdGNoVGVybU5vZGUiLCJtYXRjaGVzVGVybU5vZGUiLCJtYXRjaFZhcmlhYmxlTm9kZSIsIm1hdGNoZXNWYXJpYWJsZU5vZGUiLCJ1bmlmeUFnYWluc3RFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZEFnYWluc3RFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlIiwiYXNTdHJpbmciLCJ0ZXJtTm9kZUIiLCJ0ZXJtU3RyaW5nQiIsIm5vZGVBc1N0cmluZyIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZVN0cmluZ0EiLCJzdHJpbmciLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJ0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJmcm9tVmFyaWFibGVOb2RlQW5kVGVybU5vZGUiLCJmcm9tU3Vic3RpdHV0aW9uQW5kU3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGVUZXJtTm9kZSIsInN1YnN0aXR1dGVWYXJpYWJsZU5vZGUiLCJmcm9tU3Vic3RpdHV0aW9uTm9kZUFuZFN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb24iLCJ0ZXJtVmFyaWFibGVOb2RlIiwic29tZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7O21FQVBJO3FCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxhQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsNENBQUQsQUFBTDtjQUFNQTthQUFBQSw0QkFDUEksWUFBWSxFQUFFQyxRQUFRO2dDQURmTDs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0ksWUFBWSxHQUFHQTtRQUNwQixNQUFLQyxRQUFRLEdBQUdBOzs7a0JBTENMOztZQVFuQk0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixZQUFZO1lBQzFCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU8sSUFBSSxDQUFDSixRQUFRLEVBQUUsR0FBRztnQkFFL0IsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxZQUFZO2dCQUN4QixJQUFNQyxVQUFVRCxhQUFhSixXQUFXLElBQ2xDSCxlQUFlTyxhQUFhTCxl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