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
var termNodeQuery = (0, _query.nodeQuery)("/substitution/term!"), variableNodeQuery = (0, _query.nodeQuery)("/*/variable!");
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
                var transformedTermNode = transformTermNode(this.termNode, substitutions);
                if (transformedTermNode !== null) {
                    var termNode = transformedTermNode, variableNode = this.variableNode, termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode);
                    transformedSubstitution = termForVariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "match",
            value: function match(substitution) {
                var termNode = substitution.getTermNode(), variableNode = substitution.getVariableNode(), termNodeMatches = this.matchTermNode(termNode), variableNodeMatches = this.matchVariableNode(variableNode), matches = termNodeMatches && variableNodeMatches;
                return matches;
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
                var metavariableNodeMatches = this.variableNode.match(variableNode);
                return metavariableNodeMatches;
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
                var termNodeB = this.termNode, termStringB = localContextB.nodeAsString(termNodeB), variableNodeA = this.variableNode, variableStringA = localContextA.nodeAsString(variableNodeA);
                var string = "[".concat(termStringB, " for ").concat(variableStringA, "]");
                return string;
            }
        }
    ], [
        {
            key: "fromSubstitutionNode",
            value: function fromSubstitutionNode(substitutionNode) {
                var termForVariableSubstitution = null;
                var termNode = termNodeQuery(substitutionNode), variableNode = variableNodeQuery(substitutionNode);
                if (termNode !== null) {
                    termNode = (0, _brackets.stripBracketsFromTerm)(termNode); ///
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
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMudGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB0cmFuc2Zvcm1lZChzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRyYW5zZm9ybWVkVGVybU5vZGUgPSB0cmFuc2Zvcm1UZXJtTm9kZSh0aGlzLnRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmICh0cmFuc2Zvcm1lZFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRyYW5zZm9ybWVkVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdGhpcy52YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKTtcblxuICAgICAgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRTdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXRjaChzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWF0Y2hlcyA9ICh0ZXJtTm9kZU1hdGNoZXMgJiYgdmFyaWFibGVOb2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtTm9kZS5tYXRjaCh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnZhcmlhYmxlTm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0aGlzLnRlcm1Ob2RlKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlID0gZXF1aXZhbGVuY2UubWF0Y2hWYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCB0ZXJtTm9kZUIgPSB0aGlzLnRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyh0ZXJtTm9kZUIpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZUEgPSB0aGlzLnZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nQSA9IGxvY2FsQ29udGV4dEEubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZUEpO1xuXG4gICAgY29uc3Qgc3RyaW5nID0gYFske3Rlcm1TdHJpbmdCfSBmb3IgJHt2YXJpYWJsZVN0cmluZ0F9XWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBsZXQgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGxldCB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm5Ob2RlQW5kVmFyaWFibGVOb2RlKHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUpIHtcbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVGVybU5vZGUodGVybU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgbGV0IHRyYW5zZm9ybWVkVGVybU5vZGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgc3Vic3RpdHV0aW9ucy5zb21lU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKTtcblxuICAgICAgICB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gdGVybU5vZGU7IC8vLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0cmFuc2Zvcm1lZFRlcm1Ob2RlO1xufVxuIl0sIm5hbWVzIjpbIlRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0VGVybU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXROb2RlIiwibm9kZSIsInRyYW5zZm9ybWVkIiwic3Vic3RpdHV0aW9ucyIsInRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uIiwidHJhbnNmb3JtZWRUZXJtTm9kZSIsInRyYW5zZm9ybVRlcm1Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwibWF0Y2giLCJzdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOb2RlIiwibWF0Y2hlcyIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwidW5pZnlXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZSIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlIiwiZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlIiwiYXNTdHJpbmciLCJ0ZXJtTm9kZUIiLCJ0ZXJtU3RyaW5nQiIsIm5vZGVBc1N0cmluZyIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZVN0cmluZ0EiLCJzdHJpbmciLCJmcm9tU3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tVGVybk5vZGVBbmRWYXJpYWJsZU5vZGUiLCJTdWJzdGl0dXRpb24iLCJzb21lU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7bUVBUkk7cUJBRUM7d0JBQ1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsNENBQU47Y0FBTUE7YUFBQUEsNEJBQ1BJLFFBQVEsRUFBRUMsWUFBWTtnQ0FEZkw7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtJLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsWUFBWSxHQUFHQTs7O2tCQUxITDs7WUFRbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxPQUFPLElBQUksQ0FBQ0wsUUFBUSxFQUFFLEdBQUc7Z0JBRS9CLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsYUFBYTtnQkFDdkIsSUFBSUMsMEJBQTBCO2dCQUU5QixJQUFNQyxzQkFBc0JDLGtCQUFrQixJQUFJLENBQUNWLFFBQVEsRUFBRU87Z0JBRTdELElBQUlFLHdCQUF3QixNQUFNO29CQUNoQyxJQUFNVCxXQUFXUyxxQkFDWFIsZUFBZSxJQUFJLENBQUNBLFlBQVksRUFDaENVLDhCQUE4QixJQTlCckJmLDRCQThCcURJLFVBQVVDO29CQUU5RU8sMEJBQTBCRyw2QkFBOEIsR0FBRztnQkFDN0Q7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxZQUFZO2dCQUNoQixJQUFNYixXQUFXYSxhQUFhWCxXQUFXLElBQ25DRCxlQUFlWSxhQUFhVixlQUFlLElBQzNDVyxrQkFBa0IsSUFBSSxDQUFDQyxhQUFhLENBQUNmLFdBQ3JDZ0Isc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNoQixlQUM3Q2lCLFVBQVdKLG1CQUFtQkU7Z0JBRXBDLE9BQU9FO1lBQ1Q7OztZQUVBSCxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY2YsUUFBUTtnQkFDcEJBLFdBQVdtQixJQUFBQSwrQkFBcUIsRUFBQ25CLFdBQVcsR0FBRztnQkFFL0MsSUFBTWMsa0JBQWtCLElBQUksQ0FBQ2QsUUFBUSxDQUFDWSxLQUFLLENBQUNaO2dCQUU1QyxPQUFPYztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQmhCLFlBQVk7Z0JBQzVCLElBQU1tQiwwQkFBMEIsSUFBSSxDQUFDbkIsWUFBWSxDQUFDVyxLQUFLLENBQUNYO2dCQUV4RCxPQUFPbUI7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLFdBQVcsRUFBRWYsYUFBYSxFQUFFZ0IsYUFBYSxFQUFFQyxhQUFhO2dCQUMzRSxJQUFJQztnQkFFSixJQUFNQyw2QkFBNkJKLFlBQVlQLGFBQWEsQ0FBQyxJQUFJLENBQUNmLFFBQVE7Z0JBRTFFLElBQUkwQiw0QkFBNEI7b0JBQzlCLElBQU1DLGlDQUFpQ0wsWUFBWUwsaUJBQWlCLENBQUMsSUFBSSxDQUFDaEIsWUFBWTtvQkFFdEYsSUFBSTBCLGdDQUFnQzt3QkFDaENGLHlCQUF5QjtvQkFDM0I7Z0JBQ0o7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTTCxhQUFhLEVBQUVDLGFBQWE7Z0JBQ25DLElBQU1LLFlBQVksSUFBSSxDQUFDN0IsUUFBUSxFQUN6QjhCLGNBQWNOLGNBQWNPLFlBQVksQ0FBQ0YsWUFDekNHLGdCQUFnQixJQUFJLENBQUMvQixZQUFZLEVBQ2pDZ0Msa0JBQWtCVixjQUFjUSxZQUFZLENBQUNDO2dCQUVuRCxJQUFNRSxTQUFTLEFBQUMsSUFBc0JELE9BQW5CSCxhQUFZLFNBQXVCLE9BQWhCRyxpQkFBZ0I7Z0JBRXRELE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUJBQXFCQyxnQkFBZ0I7Z0JBQzFDLElBQUl6Qiw4QkFBOEI7Z0JBRWxDLElBQUlYLFdBQVdILGNBQWN1QyxtQkFDekJuQyxlQUFlRixrQkFBa0JxQztnQkFFckMsSUFBSXBDLGFBQWEsTUFBTTtvQkFDckJBLFdBQVdtQixJQUFBQSwrQkFBcUIsRUFBQ25CLFdBQVcsR0FBRztvQkFFL0NXLDhCQUE4QixJQWxHZmYsNEJBa0crQ0ksVUFBVUM7Z0JBQzFFO2dCQUVBLE9BQU9VO1lBQ1Q7OztZQUVPMEIsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCckMsUUFBUSxFQUFFQyxZQUFZO2dCQUN2REQsV0FBV21CLElBQUFBLCtCQUFxQixFQUFDbkIsV0FBVyxHQUFHO2dCQUUvQyxJQUFNVyw4QkFBOEIsSUEzR25CZiw0QkEyR21ESSxVQUFVQztnQkFFOUUsT0FBT1U7WUFDVDs7O1dBOUdtQmY7RUFBb0MwQyxxQkFBWTtBQWlIckUsU0FBUzVCLGtCQUFrQlYsUUFBUSxFQUFFTyxhQUFhO0lBQ2hELElBQUlFLHNCQUFzQjtJQUUxQixJQUFNUixlQUFlRixrQkFBa0JDO0lBRXZDLElBQUlDLGlCQUFpQixNQUFNO1FBQ3pCTSxjQUFjZ0MsZ0JBQWdCLENBQUMsU0FBQzFCO1lBQzlCLElBQU0yQixrQ0FBa0MzQixhQUFhSSxpQkFBaUIsQ0FBQ2hCO1lBRXZFLElBQUl1QyxpQ0FBaUM7Z0JBQ25DLElBQU14QyxhQUFXYSxhQUFhWCxXQUFXO2dCQUV6Q08sc0JBQXNCVCxZQUFVLElBQUk7Z0JBRXBDLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPUztBQUNUIn0=