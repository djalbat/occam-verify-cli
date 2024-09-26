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
var _brackets = require("../utilities/brackets");
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
var termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), substitutionTermmNodeQuery = (0, _query.nodeQuery)("/substitution/term!"), substitutionsVariableNodeQuery = (0, _query.nodeQuery)("/substitution/variable!");
var TermForVariableSubstitution = /*#__PURE__*/ function(Substitution) {
    _inherits(TermForVariableSubstitution, Substitution);
    function TermForVariableSubstitution(termNode, variableNode) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _call_super(this, TermForVariableSubstitution);
        _this.termNode = termNode;
        _this.variableNode = variableNode;
        return _this;
    }
    _create_class(TermForVariableSubstitution, [
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
            }
        },
        {
            key: "getVariableNode",
            value: function getVariableNode() {
                return this.variableNode;
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
            key: "transformed",
            value: function transformed(substitutions) {
                var transformedSubstitution = null;
                var transformedTermNode = transformTermNode(this.termNode, substitutions), transformedVariableNode = transformVariableNode(this.variableNode, substitutions);
                if (transformedTermNode !== null && transformedVariableNode !== null) {
                    var termNode = transformedTermNode, variableNode = transformedVariableNode, termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
                    transformedSubstitution = termForVariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(substitution) {
                var termNode = substitution.getTermNode(), variableNode = substitution.getVariableNode(), termNodeMatches = this.matchTermNode(termNode), variableNodeMatches = this.matchVariableNode(variableNode), equalTo = termNodeMatches && variableNodeMatches;
                return equalTo;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
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
        },
        {
            key: "unifyWithEquivalence",
            value: function unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
                var unifiedWithEquivalence;
                var equivalenceMatchesTermNode = equivalence.matchTermNode(this.termNode);
                if (equivalenceMatchesTermNode) {
                    var equivalenceMatchesVariableNode = equivalence.matchVariableNode(this.variableNode);
                    if (equivalenceMatchesVariableNode) {
                        unifiedWithEquivalence = true;
                    }
                }
                return unifiedWithEquivalence;
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
                var termForVariableSubstitution = null;
                var substitutionTermNode = substitutionTermmNodeQuery(substitutionNode);
                if (substitutionTermNode !== null) {
                    var termNode = substitutionTermNode; ///
                    termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                    var substitutionVariableNode = substitutionsVariableNodeQuery(substitutionNode), variableNode = substitutionVariableNode; ///
                    termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
                }
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromTernNodeAndVariableNode",
            value: function fromTernNodeAndVariableNode(termNode, variableNode) {
                termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
                var termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}(_substitution.default);
function transformTermNode(termNode, substitutions) {
    var transformedTermNode = null;
    var termVariableNode = termVariableNodeQuery(termNode);
    if (termVariableNode !== null) {
        var variableNode = termVariableNode; ///
        substitutions.someSubstitution(function(substitution) {
            var substitutionMatchesVariableNode = substitution.matchVariableNode(variableNode);
            if (substitutionMatchesVariableNode) {
                var _$termNode = substitution.getTermNode();
                transformedTermNode = _$termNode; ////
                return true;
            }
        });
    }
    return transformedTermNode;
}
function transformVariableNode(variableNode, substitutions) {
    var transformedVariableNode = null;
    substitutions.someSubstitution(function(substitution) {
        var variableNodeMatches = substitution.matchVariableNode(variableNode);
        if (variableNodeMatches) {
            var termNode = substitution.getTermNode(), termVariableNode = termVariableNodeQuery(termNode);
            if (termVariableNode !== null) {
                transformedVariableNode = termVariableNode; ///
                return true;
            }
        }
    });
    return transformedVariableNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCB0ZXJtVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25UZXJtbU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdWJzdGl0dXRpb24vdGVybSFcIiksXG4gICAgICBzdWJzdGl0dXRpb25zVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3Vic3RpdHV0aW9uL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IodGVybU5vZGUsIHZhcmlhYmxlTm9kZSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRlcm1Ob2RlID0gdGVybU5vZGU7XG4gICAgdGhpcy52YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdHJhbnNmb3JtZWQoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gdHJhbnNmb3JtVGVybU5vZGUodGhpcy50ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1WYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKCh0cmFuc2Zvcm1lZFRlcm1Ob2RlICE9PSBudWxsKSAmJiAodHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRyYW5zZm9ybWVkVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKTtcblxuICAgICAgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRTdWJzdGl0dXRpb247XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgdGVybU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSAodGVybU5vZGVNYXRjaGVzICYmIHZhcmlhYmxlTm9kZU1hdGNoZXMpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRoaXMudGVybU5vZGUubWF0Y2godGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnZhcmlhYmxlTm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuXG4gICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVGVybU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFRlcm1Ob2RlKHRoaXMudGVybU5vZGUpO1xuXG4gICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICBjb25zdCBlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUgPSBlcXVpdmFsZW5jZS5tYXRjaFZhcmlhYmxlTm9kZSh0aGlzLnZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGNvbnN0IHRlcm1Ob2RlQiA9IHRoaXMudGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKHRlcm1Ob2RlQiksXG4gICAgICAgICAgdmFyaWFibGVOb2RlQSA9IHRoaXMudmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmdBID0gbG9jYWxDb250ZXh0QS5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3RyaW5nID0gYFske3Rlcm1TdHJpbmdCfSBmb3IgJHt2YXJpYWJsZVN0cmluZ0F9XWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBsZXQgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGxldCBzdWJzdGl0dXRpb25UZXJtTm9kZSA9IHN1YnN0aXR1dGlvblRlcm1tTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBsZXQgdGVybU5vZGUgPSBzdWJzdGl0dXRpb25UZXJtTm9kZTsgIC8vL1xuXG4gICAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25zVmFyaWFibGVOb2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuTm9kZUFuZFZhcmlhYmxlTm9kZSh0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odGVybU5vZGUsIHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gbnVsbDtcblxuICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodGVybVZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCk7XG5cbiAgICAgICAgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRlcm1Ob2RlOyAvLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtZWRUZXJtTm9kZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgICB0ZXJtVmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGU7XG59XG4iXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uVGVybW1Ob2RlUXVlcnkiLCJzdWJzdGl0dXRpb25zVmFyaWFibGVOb2RlUXVlcnkiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsImdldFRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm5vZGUiLCJ0cmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbnMiLCJ0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiIsInRyYW5zZm9ybWVkVGVybU5vZGUiLCJ0cmFuc2Zvcm1UZXJtTm9kZSIsInRyYW5zZm9ybWVkVmFyaWFibGVOb2RlIiwidHJhbnNmb3JtVmFyaWFibGVOb2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsImVxdWFsVG8iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJtYXRjaCIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsImFzU3RyaW5nIiwidGVybU5vZGVCIiwidGVybVN0cmluZ0IiLCJub2RlQXNTdHJpbmciLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVTdHJpbmdBIiwic3RyaW5nIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uVGVybU5vZGUiLCJzdWJzdGl0dXRpb25WYXJpYWJsZU5vZGUiLCJmcm9tVGVybk5vZGVBbmRWYXJpYWJsZU5vZGUiLCJTdWJzdGl0dXRpb24iLCJ0ZXJtVmFyaWFibGVOb2RlIiwic29tZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O21FQVRJO3FCQUVDO3dCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbENDLDZCQUE2QkQsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDdkNFLGlDQUFpQ0YsSUFBQUEsZ0JBQVMsRUFBQztBQUVsQyxJQUFBLEFBQU1GLDRDQUFOO2NBQU1BO2FBQUFBLDRCQUNQSyxRQUFRLEVBQUVDLFlBQVk7Z0NBRGZOOztnQkFFakIsa0JBRmlCQTtRQUlqQixNQUFLSyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFlBQVksR0FBR0E7OztrQkFMSE47O1lBUW5CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsT0FBTyxJQUFJLENBQUNMLFFBQVEsRUFBRSxHQUFHO2dCQUUvQixPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLGFBQWE7Z0JBQ3ZCLElBQUlDLDBCQUEwQjtnQkFFOUIsSUFBTUMsc0JBQXNCQyxrQkFBa0IsSUFBSSxDQUFDVixRQUFRLEVBQUVPLGdCQUN2REksMEJBQTBCQyxzQkFBc0IsSUFBSSxDQUFDWCxZQUFZLEVBQUVNO2dCQUV6RSxJQUFJLEFBQUNFLHdCQUF3QixRQUFVRSw0QkFBNEIsTUFBTztvQkFDeEUsSUFBTVgsV0FBV1MscUJBQ1hSLGVBQWVVLHlCQUNmRSw4QkFBOEIsSUEvQnJCbEIsNEJBK0JxREssVUFBVUM7b0JBRTlFTywwQkFBMEJLLDZCQUE4QixHQUFHO2dCQUM3RDtnQkFFQSxPQUFPTDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLFlBQVk7Z0JBQ3BCLElBQU1mLFdBQVdlLGFBQWFiLFdBQVcsSUFDbkNELGVBQWVjLGFBQWFaLGVBQWUsSUFDM0NhLGtCQUFrQixJQUFJLENBQUNDLGFBQWEsQ0FBQ2pCLFdBQ3JDa0Isc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNsQixlQUM3Q21CLFVBQVdKLG1CQUFtQkU7Z0JBRXBDLE9BQU9FO1lBQ1Q7OztZQUVBSCxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY2pCLFFBQVE7Z0JBQ3BCQSxXQUFXcUIsSUFBQUEsK0JBQXFCLEVBQUNyQixXQUFXLEdBQUc7Z0JBRS9DLElBQU1nQixrQkFBa0IsSUFBSSxDQUFDaEIsUUFBUSxDQUFDc0IsS0FBSyxDQUFDdEI7Z0JBRTVDLE9BQU9nQjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQmxCLFlBQVk7Z0JBQzVCLElBQU1pQixzQkFBc0IsSUFBSSxDQUFDakIsWUFBWSxDQUFDcUIsS0FBSyxDQUFDckI7Z0JBRXBELE9BQU9pQjtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkMsV0FBVyxFQUFFakIsYUFBYSxFQUFFa0IsYUFBYSxFQUFFQyxhQUFhO2dCQUMzRSxJQUFJQztnQkFFSixJQUFNQyw2QkFBNkJKLFlBQVlQLGFBQWEsQ0FBQyxJQUFJLENBQUNqQixRQUFRO2dCQUUxRSxJQUFJNEIsNEJBQTRCO29CQUM5QixJQUFNQyxpQ0FBaUNMLFlBQVlMLGlCQUFpQixDQUFDLElBQUksQ0FBQ2xCLFlBQVk7b0JBRXRGLElBQUk0QixnQ0FBZ0M7d0JBQ2hDRix5QkFBeUI7b0JBQzNCO2dCQUNKO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0wsYUFBYSxFQUFFQyxhQUFhO2dCQUNuQyxJQUFNSyxZQUFZLElBQUksQ0FBQy9CLFFBQVEsRUFDekJnQyxjQUFjTixjQUFjTyxZQUFZLENBQUNGLFlBQ3pDRyxnQkFBZ0IsSUFBSSxDQUFDakMsWUFBWSxFQUNqQ2tDLGtCQUFrQlYsY0FBY1EsWUFBWSxDQUFDQyxnQkFDN0NFLFNBQVMsQUFBQyxJQUFzQkQsT0FBbkJILGFBQVksU0FBdUIsT0FBaEJHLGlCQUFnQjtnQkFFdEQsT0FBT0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQkFBcUJDLGdCQUFnQjtnQkFDMUMsSUFBSXpCLDhCQUE4QjtnQkFFbEMsSUFBSTBCLHVCQUF1QnpDLDJCQUEyQndDO2dCQUV0RCxJQUFJQyx5QkFBeUIsTUFBTTtvQkFDakMsSUFBSXZDLFdBQVd1QyxzQkFBdUIsR0FBRztvQkFFekN2QyxXQUFXcUIsSUFBQUEsK0JBQXFCLEVBQUNyQixXQUFXLEdBQUc7b0JBRS9DLElBQU13QywyQkFBMkJ6QywrQkFBK0J1QyxtQkFDMURyQyxlQUFldUMsMEJBQTJCLEdBQUc7b0JBRW5EM0IsOEJBQThCLElBdEdmbEIsNEJBc0crQ0ssVUFBVUM7Z0JBQzFFO2dCQUVBLE9BQU9ZO1lBQ1Q7OztZQUVPNEIsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCekMsUUFBUSxFQUFFQyxZQUFZO2dCQUN2REQsV0FBV3FCLElBQUFBLCtCQUFxQixFQUFDckIsV0FBVyxHQUFHO2dCQUUvQyxJQUFNYSw4QkFBOEIsSUEvR25CbEIsNEJBK0dtREssVUFBVUM7Z0JBRTlFLE9BQU9ZO1lBQ1Q7OztXQWxIbUJsQjtFQUFvQytDLHFCQUFZO0FBcUhyRSxTQUFTaEMsa0JBQWtCVixRQUFRLEVBQUVPLGFBQWE7SUFDaEQsSUFBSUUsc0JBQXNCO0lBRTFCLElBQU1rQyxtQkFBbUIvQyxzQkFBc0JJO0lBRS9DLElBQUkyQyxxQkFBcUIsTUFBTTtRQUM3QixJQUFNMUMsZUFBZTBDLGtCQUFtQixHQUFHO1FBRTNDcEMsY0FBY3FDLGdCQUFnQixDQUFDLFNBQUM3QjtZQUM5QixJQUFNOEIsa0NBQWtDOUIsYUFBYUksaUJBQWlCLENBQUNsQjtZQUV2RSxJQUFJNEMsaUNBQWlDO2dCQUNuQyxJQUFNN0MsYUFBV2UsYUFBYWIsV0FBVztnQkFFekNPLHNCQUFzQlQsWUFBVSxJQUFJO2dCQUVwQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT1M7QUFDVDtBQUVBLFNBQVNHLHNCQUFzQlgsWUFBWSxFQUFFTSxhQUFhO0lBQ3hELElBQUlJLDBCQUEwQjtJQUU5QkosY0FBY3FDLGdCQUFnQixDQUFDLFNBQUM3QjtRQUM5QixJQUFNRyxzQkFBc0JILGFBQWFJLGlCQUFpQixDQUFDbEI7UUFFM0QsSUFBSWlCLHFCQUFxQjtZQUN2QixJQUFNbEIsV0FBV2UsYUFBYWIsV0FBVyxJQUNuQ3lDLG1CQUFtQi9DLHNCQUFzQkk7WUFFL0MsSUFBSTJDLHFCQUFxQixNQUFNO2dCQUM3QmhDLDBCQUEwQmdDLGtCQUFtQixHQUFHO2dCQUVoRCxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT2hDO0FBQ1QifQ==