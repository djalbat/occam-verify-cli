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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
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
    function TermForVariableSubstitution(variableNode, termNode, substitutions) {
        _class_call_check(this, TermForVariableSubstitution);
        var _this;
        _this = _call_super(this, TermForVariableSubstitution);
        _this.variableNode = variableNode;
        _this.termNode = termNode;
        _this.substitutions = substitutions;
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
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
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
                    var termNode = transformedTermNode, variableNode = transformedVariableNode, _$substitutions = _substitutions.default.fromNothing(), termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode, _$substitutions);
                    transformedSubstitution = termForVariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "transformedTermNode",
            value: function transformedTermNode(substitutions) {
                var transformedSubstitution = null;
                var transformedTermNode = transformTermNode(this.termNode, substitutions);
                if (transformedTermNode !== null) {
                    var termNode = transformedTermNode, variableNode = this.variableNode, _$substitutions = _substitutions.default.fromNothing(), termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode, _$substitutions);
                    transformedSubstitution = termForVariableSubstitution; ///
                }
                return transformedSubstitution;
            }
        },
        {
            key: "transformedVariableNode",
            value: function transformedVariableNode(substitutions) {
                var transformedSubstitution = null;
                var transformedVariableNode = transformVariableNode(this.variableNode, substitutions);
                if (transformedVariableNode !== null) {
                    var termNode = this.termNode, variableNode = transformedVariableNode, _$substitutions = _substitutions.default.fromNothing(), termForVariableSubstitution = new TermForVariableSubstitution(termNode, variableNode, _$substitutions);
                    transformedSubstitution = termForVariableSubstitution; ///
                }
                return transformedSubstitution;
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
            key: "unifyWithEquivalence",
            value: function unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
                var unifiedWithEquivalence;
                var equivalenceMatchesVariableNode = equivalence.matchVariableNode(this.variableNode);
                if (equivalenceMatchesVariableNode) {
                    var equivalenceMatchesTermNode = equivalence.matchTermNode(this.termNode);
                    if (equivalenceMatchesTermNode) {
                        unifiedWithEquivalence = true;
                    }
                }
                return unifiedWithEquivalence;
            }
        },
        {
            key: "asString",
            value: function asString(localContextA, localContextB) {
                var termNodeB = this.termNode, termStringB = localContextB.nodeAsString(termNodeB), variableNodeA = this.variableNode, variableStringA = localContextA.nodeAsString(variableNodeA), substitutionsString = this.substitutions.asString(localContextB, localContextB); ///
                var string = "[".concat(termStringB, " for ").concat(variableStringA).concat(substitutionsString, "]");
                return string;
            }
        }
    ], [
        {
            key: "fromSubstitutionNode",
            value: function fromSubstitutionNode(substitutionNode) {
                var termNode = termNodeQuery(substitutionNode), variableNode = variableNodeQuery(substitutionNode), substitutions = _substitutions.default.fromNothing(), termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode, substitutions);
                return termForVariableSubstitution;
            }
        },
        {
            key: "fromVariableNodeAndTermNode",
            value: function fromVariableNodeAndTermNode(variableNode, termNode) {
                var substitutions = _substitutions.default.fromNothing(), termForVariableSubstitution = new TermForVariableSubstitution(variableNode, termNode, substitutions);
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}(_substitution.default);
function transformTermNode(termNode, substitutions) {
    var transformedTermNode = null;
    var termVariableNode = variableNodeQuery(termNode);
    if (termVariableNode !== null) {
        substitutions.someSubstitution(function(substitution) {
            var substitutionMatchesVariableNode = substitution.matchVariableNode(termVariableNode);
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
        var substitutionMatchesVariableNode = substitution.matchVariableNode(variableNode);
        if (substitutionMatchesVariableNode) {
            var termNode = substitution.getTermNode(), _$variableNode = variableNodeQuery(termNode);
            if (_$variableNode !== null) {
                transformedVariableNode = _$variableNode; ///
                return true;
            }
        }
    });
    return transformedVariableNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3Rlcm0hXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy52YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGU7XG4gICAgdGhpcy50ZXJtTm9kZSA9IHRlcm1Ob2RlO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybU5vZGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgdHJhbnNmb3JtZWQoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gdHJhbnNmb3JtVGVybU5vZGUodGhpcy50ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB0cmFuc2Zvcm1WYXJpYWJsZU5vZGUodGhpcy52YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKCh0cmFuc2Zvcm1lZFRlcm1Ob2RlICE9PSBudWxsKSAmJiAodHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRyYW5zZm9ybWVkVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odGVybU5vZGUsIHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdHJhbnNmb3JtZWRUZXJtTm9kZShzdWJzdGl0dXRpb25zKSB7XG4gICAgbGV0IHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRyYW5zZm9ybWVkVGVybU5vZGUgPSB0cmFuc2Zvcm1UZXJtTm9kZSh0aGlzLnRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmICh0cmFuc2Zvcm1lZFRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHRyYW5zZm9ybWVkVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdGhpcy52YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odGVybU5vZGUsIHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uID0gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHRyYW5zZm9ybWVkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUoc3Vic3RpdHV0aW9ucykge1xuICAgIGxldCB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybVZhcmlhYmxlTm9kZSh0aGlzLnZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAodHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gdGhpcy50ZXJtTm9kZSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRyYW5zZm9ybWVkVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHRlcm1Ob2RlLCB2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbiA9IHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0cmFuc2Zvcm1lZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzVGVybU5vZGUgPSB0aGlzLnRlcm1Ob2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzVGVybU5vZGU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzVmFyaWFibGVOb2RlID0gdGhpcy52YXJpYWJsZU5vZGUubWF0Y2godmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzVmFyaWFibGVOb2RlO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZTtcblxuICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IGVxdWl2YWxlbmNlLm1hdGNoVmFyaWFibGVOb2RlKHRoaXMudmFyaWFibGVOb2RlKTtcblxuICAgIGlmIChlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgIGNvbnN0IGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlID0gZXF1aXZhbGVuY2UubWF0Y2hUZXJtTm9kZSh0aGlzLnRlcm1Ob2RlKTtcblxuICAgICAgaWYgKGVxdWl2YWxlbmNlTWF0Y2hlc1Rlcm1Ob2RlKSB7XG4gICAgICAgIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkV2l0aEVxdWl2YWxlbmNlO1xuICB9XG5cbiAgYXNTdHJpbmcobG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGNvbnN0IHRlcm1Ob2RlQiA9IHRoaXMudGVybU5vZGUsICAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nQiA9IGxvY2FsQ29udGV4dEIubm9kZUFzU3RyaW5nKHRlcm1Ob2RlQiksXG4gICAgICAgICAgdmFyaWFibGVOb2RlQSA9IHRoaXMudmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmdBID0gbG9jYWxDb250ZXh0QS5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlQSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc1N0cmluZyA9IHRoaXMuc3Vic3RpdHV0aW9ucy5hc1N0cmluZyhsb2NhbENvbnRleHRCLCBsb2NhbENvbnRleHRCKTsgIC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gYFske3Rlcm1TdHJpbmdCfSBmb3IgJHt2YXJpYWJsZVN0cmluZ0F9JHtzdWJzdGl0dXRpb25zU3RyaW5nfV1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlKHZhcmlhYmxlTm9kZSwgdGVybU5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiA9IG5ldyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24odmFyaWFibGVOb2RlLCB0ZXJtTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGxldCB0cmFuc2Zvcm1lZFRlcm1Ob2RlID0gbnVsbDtcblxuICBjb25zdCB0ZXJtVmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh0ZXJtVmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgc3Vic3RpdHV0aW9ucy5zb21lU3Vic3RpdHV0aW9uKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodGVybVZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25NYXRjaGVzVmFyaWFibGVOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCk7XG5cbiAgICAgICAgdHJhbnNmb3JtZWRUZXJtTm9kZSA9IHRlcm1Ob2RlOyAvLy8vXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdHJhbnNmb3JtZWRUZXJtTm9kZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBsZXQgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gIHN1YnN0aXR1dGlvbnMuc29tZVN1YnN0aXR1dGlvbigoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbk1hdGNoZXNWYXJpYWJsZU5vZGUpIHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3Vic3RpdHV0aW9uLmdldFRlcm1Ob2RlKCksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdHJhbnNmb3JtZWRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJnZXRWYXJpYWJsZU5vZGUiLCJnZXRUZXJtTm9kZSIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXROb2RlIiwibm9kZSIsInRyYW5zZm9ybWVkIiwidHJhbnNmb3JtZWRTdWJzdGl0dXRpb24iLCJ0cmFuc2Zvcm1lZFRlcm1Ob2RlIiwidHJhbnNmb3JtVGVybU5vZGUiLCJ0cmFuc2Zvcm1lZFZhcmlhYmxlTm9kZSIsInRyYW5zZm9ybVZhcmlhYmxlTm9kZSIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbiIsIm1hdGNoVGVybU5vZGUiLCJtYXRjaGVzVGVybU5vZGUiLCJtYXRjaCIsIm1hdGNoVmFyaWFibGVOb2RlIiwibWF0Y2hlc1ZhcmlhYmxlTm9kZSIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRXaXRoRXF1aXZhbGVuY2UiLCJlcXVpdmFsZW5jZU1hdGNoZXNWYXJpYWJsZU5vZGUiLCJlcXVpdmFsZW5jZU1hdGNoZXNUZXJtTm9kZSIsImFzU3RyaW5nIiwidGVybU5vZGVCIiwidGVybVN0cmluZ0IiLCJub2RlQXNTdHJpbmciLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVTdHJpbmdBIiwic3Vic3RpdHV0aW9uc1N0cmluZyIsInN0cmluZyIsImZyb21TdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSIsIlN1YnN0aXR1dGlvbiIsInRlcm1WYXJpYWJsZU5vZGUiLCJzb21lU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTWF0Y2hlc1ZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7bUVBUkk7b0VBQ0M7cUJBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGFBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUM7QUFFckIsSUFBQSxBQUFNRiw0Q0FBTjtjQUFNQTthQUFBQSw0QkFDUEksWUFBWSxFQUFFQyxRQUFRLEVBQUVDLGFBQWE7Z0NBRDlCTjs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0ksWUFBWSxHQUFHQTtRQUNwQixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLGFBQWEs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