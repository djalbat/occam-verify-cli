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
var _term = /*#__PURE__*/ _interop_require_default(require("../verify/term"));
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
            key: "fromVariableNodeAndTermNode",
            value: function fromVariableNodeAndTermNode(variableNode, termNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHRlcm0gZnJvbSBcIi4uL3ZlcmlmeS90ZXJtXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiLyovdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlO1xuICAgIHRoaXMudGVybU5vZGUgPSB0ZXJtTm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtTm9kZTtcbiAgfVxuXG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnRlcm1Ob2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy52YXJpYWJsZU5vZGUubWF0Y2godmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUZXJtTm9kZSh2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbk5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBsZXQgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHRlcm1Ob2RlID0gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKTsgLy8vXG5cbiAgICB2YXJpYWJsZU5vZGUgPSBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucyk7IC8vL1xuXG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5vZGUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0ZVRlcm1Ob2RlKHRlcm1Ob2RlLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHRlcm1WYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBzdWJzdGl0dXRpb25zLnNvbWUoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFZhcmlhYmxlTm9kZSh0ZXJtVmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgdGVybU5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0VGVybU5vZGUoKTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1Ob2RlO1xufVxuXG5mdW5jdGlvbiBzdWJzdGl0dXRlVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBzdWJzdGl0dXRpb25zLnNvbWUoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXRUZXJtTm9kZSgpLFxuICAgICAgICAgICAgdGVybVZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1WYXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImdldFRlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFRlcm1Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN1YnN0aXR1dGlvbk5vZGVBbmRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRlVGVybU5vZGUiLCJzdWJzdGl0dXRlVmFyaWFibGVOb2RlIiwiU3Vic3RpdHV0aW9uIiwidGVybVZhcmlhYmxlTm9kZSIsInNvbWUiLCJzdWJzdGl0dXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O21FQVJJO3FCQUVDOzJEQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxhQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsNENBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsNEJBQ1BJLFlBQVksRUFBRUMsUUFBUTtnQ0FEZkw7OztRQUlqQixNQUFLSSxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtDLFFBQVEsR0FBR0E7OztrQkFMQ0w7O1lBUW5CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0gsUUFBUTtnQkFDcEIsSUFBTUksa0JBQWtCLElBQUksQ0FBQ0osUUFBUSxDQUFDSyxLQUFLLENBQUNMO2dCQUU1QyxPQUFPSTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQlAsWUFBWTtnQkFDNUIsSUFBTVEsc0JBQXNCLElBQUksQ0FBQ1IsWUFBWSxDQUFDTSxLQUFLLENBQUNOO2dCQUVwRCxPQUFPUTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QlQsWUFBWSxFQUFFQyxRQUFRO2dCQUN2RCxJQUFNUyw4QkFBOEIsSUE3Qm5CZCw0QkE2Qm1ESSxjQUFjQztnQkFFbEYsT0FBT1M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHFDQUFxQ0MsZ0JBQWdCLEVBQUVDLGFBQWE7Z0JBQ3pFLElBQUlaLFdBQVdKLGNBQWNlLG1CQUN6QlosZUFBZUQsa0JBQWtCYTtnQkFFckNYLFdBQVdhLG1CQUFtQmIsVUFBVVksZ0JBQWdCLEdBQUc7Z0JBRTNEYixlQUFlZSx1QkFBdUJmLGNBQWNhLGdCQUFnQixHQUFHO2dCQUV2RSxJQUFNSCw4QkFBOEIsSUExQ25CZCw0QkEwQ21ESSxjQUFjQztnQkFFbEYsT0FBT1M7WUFDVDs7O1dBN0NtQmQ7RUFBb0NvQixxQkFBWTtBQWdEckUsU0FBU0YsbUJBQW1CYixRQUFRLEVBQUVZLGFBQWE7SUFDakQsSUFBTUksbUJBQW1CbEIsa0JBQWtCRTtJQUUzQyxJQUFJZ0IscUJBQXFCLE1BQU07UUFDN0JKLGNBQWNLLElBQUksQ0FBQyxTQUFDQztZQUNsQixJQUFNWCxzQkFBc0JXLGFBQWFaLGlCQUFpQixDQUFDVTtZQUUzRCxJQUFJVCxxQkFBcUI7Z0JBQ3ZCUCxXQUFXa0IsYUFBYWhCLFdBQVcsSUFBSyxHQUFHO2dCQUUzQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT0Y7QUFDVDtBQUVBLFNBQVNjLHVCQUF1QmYsWUFBWSxFQUFFYSxhQUFhO0lBQ3pEQSxjQUFjSyxJQUFJLENBQUMsU0FBQ0M7UUFDbEIsSUFBTVgsc0JBQXNCVyxhQUFhWixpQkFBaUIsQ0FBQ1A7UUFFM0QsSUFBSVEscUJBQXFCO1lBQ3ZCLElBQU1QLFdBQVdrQixhQUFhaEIsV0FBVyxJQUNuQ2MsbUJBQW1CbEIsa0JBQWtCRTtZQUUzQyxJQUFJZ0IscUJBQXFCLE1BQU07Z0JBQzdCakIsZUFBZWlCLGtCQUFtQixHQUFHO2dCQUVyQyxPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsT0FBT2pCO0FBQ1QifQ==