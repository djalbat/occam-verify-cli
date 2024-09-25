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
                var termNodeB = this.termNode, termStringB = localContextB.nodeAsString(termNodeB), variableNodeA = this.variableNode, variableStringA = localContextA.nodeAsString(variableNodeA), string = "[".concat(termStringB, " for ").concat(variableStringA, "]");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N1YnN0aXR1dGlvbi90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgICB0aGlzLnZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMudGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICB0cmFuc2Zvcm1lZChzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRyYW5zZm9ybWVkVGVybU5vZGUgPSB0cmFuc2Zvcm1UZXJtTm9kZSh0aGlzLnRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmICh0cmFuc2Zvcm1lZFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRyYW5zZm9ybWVkVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdGhpcy52YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKTtcblxuICAgICAgdHJhbnNmb3JtZWRTdWJzdGl0dXRpb24gPSB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHJhbnNmb3JtZWRTdWJzdGl0dXRpb247XG4gIH1cblxuICBtYXRjaChzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbWF0Y2hlcyA9ICh0ZXJtTm9kZU1hdGNoZXMgJiYgdmFyaWFibGVOb2RlTWF0Y2hlcyk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICB0ZXJtTm9kZSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGhpcy50ZXJtTm9kZS5tYXRjaCh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLnZhcmlhYmxlTm9kZS5tYXRjaCh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0aGlzLnRlcm1Ob2RlKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSkge1xuICAgICAgY29uc3QgZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlID0gZXF1aXZhbGVuY2UubWF0Y2hWYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAoZXF1aXZhbGVuY2VNYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcbiAgfVxuXG4gIGFzU3RyaW5nKGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBjb25zdCB0ZXJtTm9kZUIgPSB0aGlzLnRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdGVybVN0cmluZ0IgPSBsb2NhbENvbnRleHRCLm5vZGVBc1N0cmluZyh0ZXJtTm9kZUIpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZUEgPSB0aGlzLnZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nQSA9IGxvY2FsQ29udGV4dEEubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZUEpLFxuICAgICAgICAgIHN0cmluZyA9IGBbJHt0ZXJtU3RyaW5nQn0gZm9yICR7dmFyaWFibGVTdHJpbmdBfV1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBsZXQgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybU5vZGUpOyAvLy9cblxuICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJuTm9kZUFuZFZhcmlhYmxlTm9kZSh0ZXJtTm9kZSwgdmFyaWFibGVOb2RlKSB7XG4gICAgdGVybU5vZGUgPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybU5vZGUpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odGVybU5vZGUsIHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gbnVsbDtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlID0gc3Vic3RpdHV0aW9uLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCk7XG5cbiAgICAgICAgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRlcm1Ob2RlOyAvLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtZWRUZXJtTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsImdldFRlcm1Ob2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiZ2V0Tm9kZSIsIm5vZGUiLCJ0cmFuc2Zvcm1lZCIsInN1YnN0aXR1dGlvbnMiLCJ0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiIsInRyYW5zZm9ybWVkVGVybU5vZGUiLCJ0cmFuc2Zvcm1UZXJtTm9kZSIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIm1hdGNoIiwic3Vic3RpdHV0aW9uIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlTm9kZSIsIm1hdGNoZXMiLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSIsImVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSIsImFzU3RyaW5nIiwidGVybU5vZGVCIiwidGVybVN0cmluZ0IiLCJub2RlQXNTdHJpbmciLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVTdHJpbmdBIiwic3RyaW5nIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVRlcm5Ob2RlQW5kVmFyaWFibGVOb2RlIiwiU3Vic3RpdHV0aW9uIiwic29tZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O21FQVJJO3FCQUVDO3dCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixJQUFBLEFBQU1GLDRDQUFOO2NBQU1BO2FBQUFBLDRCQUNQSSxRQUFRLEVBQUVDLFlBQVk7Z0NBRGZMOztnQkFFakIsa0JBRmlCQTtRQUlqQixNQUFLSSxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFlBQVksR0FBR0E7OztrQkFMSEw7O1lBUW5CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFB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