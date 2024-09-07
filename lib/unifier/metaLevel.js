"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
var _variableAgainstTerm = /*#__PURE__*/ _interop_require_default(require("../unify/variableAgainstTerm"));
var _metavariableAgainstStatement = /*#__PURE__*/ _interop_require_default(require("../unify/metavariableAgainstStatement"));
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), substitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution!"), metavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
var MetaLevelUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(MetaLevelUnifier, Unifier);
    function MetaLevelUnifier() {
        _class_call_check(this, MetaLevelUnifier);
        return _call_super(this, MetaLevelUnifier, arguments);
    }
    _create_class(MetaLevelUnifier, [
        {
            key: "unify",
            value: function unify(nodeA, nodeB, substitutions, localContextA, localContextB) {
                var unified;
                var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, function() {
                    var unifiedAhead = true;
                    return unifiedAhead;
                });
                unified = nonTerminalNodeUnified; ///
                return unified;
            }
        }
    ]);
    return MetaLevelUnifier;
}(_unifier.default);
_define_property(MetaLevelUnifier, "maps", [
    {
        nodeQueryA: statementNodeQuery,
        nodeQueryB: statementNodeQuery,
        unify: function(statementNodeA, statementNodeB, substitutions, localContextA, localContextB, unifyAhead) {
            var statementVerifiedAgainstStatement;
            var metavariableNodeA = metavariableNodeQuery(statementNodeA);
            if (metavariableNodeA !== null) {
                var substitutionNodeA = substitutionNodeQuery(statementNodeA), metavariableUnifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB, unifyAhead);
                statementVerifiedAgainstStatement = metavariableUnifiedAgainstStatement; ///
            } else {
                var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB, unifyAhead);
                statementVerifiedAgainstStatement = childNodesVerified; ///
            }
            return statementVerifiedAgainstStatement;
        }
    },
    {
        nodeQueryA: termVariableNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: function(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead) {
            var variableNodeA = termVariableNodeA, variableUnifiedAgainstTerm = (0, _variableAgainstTerm.default)(variableNodeA, termNodeB, substitutions, localContextA, localContextB, unifyAhead);
            return variableUnifiedAgainstTerm;
        }
    }
]);
var metaLevelUnifier = new MetaLevelUnifier();
Object.assign(_shim.default, {
    metaLevelUnifier: metaLevelUnifier
});
var _default = metaLevelUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtIGZyb20gXCIuLi91bmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50IGZyb20gXCIuLi91bmlmeS9tZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb24hXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVuaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB1bmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICB1bmlmaWVkID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZUEpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVBID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGVBKSxcbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHVuaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudChtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKTtcblxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IG1ldGF2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50OyAgLy8vXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIsIHVuaWZ5QWhlYWQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCLCB1bmlmeUFoZWFkKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB0ZXJtVmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlVW5pZmllZEFnYWluc3RUZXJtID0gdW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtKHZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiwgdW5pZnlBaGVhZCk7XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlVW5pZmllZEFnYWluc3RUZXJtO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsVW5pZmllciA9IG5ldyBNZXRhTGV2ZWxVbmlmaWVyKCk7XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBtZXRhTGV2ZWxVbmlmaWVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVW5pZmllciIsInVuaWZ5Iiwibm9kZUEiLCJub2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsInVuaWZpZWRBaGVhZCIsIlVuaWZpZXIiLCJtYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwidW5pZnlBaGVhZCIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZU5vZGVBIiwic3Vic3RpdHV0aW9uTm9kZUEiLCJtZXRhdmFyaWFibGVVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCIsInVuaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudCIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZmllZCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeUNoaWxkTm9kZXMiLCJ0ZXJtVmFyaWFibGVOb2RlQSIsInRlcm1Ob2RlQiIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybSIsInVuaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdGQTs7O2VBQUE7OzsyREE5RWlCOzhEQUNHOzBFQUNpQjttRkFDUztxQkFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLGdCQUMvQkUsd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0csd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLDZCQUNsQ0ksd0JBQXdCSixJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUssaUNBQUQsQUFBTDtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWE7Z0JBQzdELElBQUlDO2dCQUVKLElBQU1DLG1CQUFtQk4sT0FDbkJPLG1CQUFtQk4sT0FDbkJPLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCxrQkFBa0JDLGtCQUFrQkwsZUFBZUMsZUFBZUMsZUFBZTtvQkFDbEksSUFBTU0sZUFBZTtvQkFFckIsT0FBT0E7Z0JBQ1Q7Z0JBRU5MLFVBQVVHLHdCQUF3QixHQUFHO2dCQUVyQyxPQUFPSDtZQUNUOzs7V0FmSVA7RUFBeUJhLGdCQUFPO0FBaUJwQyxpQkFqQkliLGtCQWlCR2MsUUFBTztJQUNaO1FBQ0VDLFlBQVluQjtRQUNab0IsWUFBWXBCO1FBQ1pLLE9BQU8sU0FBQ2dCLGdCQUFnQkMsZ0JBQWdCZCxlQUFlQyxlQUFlQyxlQUFlYTtZQUNuRixJQUFJQztZQUVKLElBQU1DLG9CQUFvQnRCLHNCQUFzQmtCO1lBRWhELElBQUlJLHNCQUFzQixNQUFNO2dCQUM5QixJQUFNQyxvQkFBb0J4QixzQkFBc0JtQixpQkFDMUNNLHNDQUFzQ0MsSUFBQUEscUNBQWlDLEVBQUNILG1CQUFtQkgsZ0JBQWdCSSxtQkFBbUJsQixlQUFlQyxlQUFlQyxlQUFlYTtnQkFFakxDLG9DQUFvQ0cscUNBQXNDLEdBQUc7WUFDL0UsT0FBTztnQkFDTCxJQUFNZixtQkFBbUJTLGdCQUNuQlIsbUJBQW1CUyxnQkFDbkJPLDZCQUE2QmpCLGlCQUFpQmtCLGFBQWEsSUFDM0RDLDZCQUE2QmxCLGlCQUFpQmlCLGFBQWEsSUFDM0RFLGNBQWNILDRCQUNkSSxjQUFjRiw0QkFDZEcscUJBQXFCQyxpQkFBaUJDLGVBQWUsQ0FBQ0osYUFBYUMsYUFBYXpCLGVBQWVDLGVBQWVDLGVBQWVhO2dCQUVuSUMsb0NBQW9DVSxvQkFBb0IsR0FBRztZQUM3RDtZQUVBLE9BQU9WO1FBQ1Q7SUFDRjtJQUNBO1FBQ0VMLFlBQVlsQjtRQUNabUIsWUFBWXRCO1FBQ1pPLE9BQU8sU0FBQ2dDLG1CQUFtQkMsV0FBVzlCLGVBQWVDLGVBQWVDLGVBQWVhO1lBQ2pGLElBQU1nQixnQkFBZ0JGLG1CQUNoQkcsNkJBQTZCQyxJQUFBQSw0QkFBd0IsRUFBQ0YsZUFBZUQsV0FBVzlCLGVBQWVDLGVBQWVDLGVBQWVhO1lBRW5JLE9BQU9pQjtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1MLG1CQUFtQixJQUFJL0I7QUFFN0JzQyxPQUFPQyxNQUFNLENBQUNDLGFBQUksRUFBRTtJQUNsQlQsa0JBQUFBO0FBQ0Y7SUFFQSxXQUFlQSJ9