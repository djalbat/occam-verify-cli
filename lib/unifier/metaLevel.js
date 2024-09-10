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
                var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB);
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
        unify: function(statementNodeA, statementNodeB, substitutions, localContextA, localContextB) {
            var statementVerifiedAgainstStatement;
            var metavariableNodeA = metavariableNodeQuery(statementNodeA);
            if (metavariableNodeA !== null) {
                var substitutionNodeA = substitutionNodeQuery(statementNodeA), metavariableUnifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB);
                statementVerifiedAgainstStatement = metavariableUnifiedAgainstStatement; ///
            } else {
                var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB);
                statementVerifiedAgainstStatement = childNodesVerified; ///
            }
            return statementVerifiedAgainstStatement;
        }
    },
    {
        nodeQueryA: termVariableNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: function(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB) {
            var variableNodeA = termVariableNodeA, variableUnifiedAgainstTerm = (0, _variableAgainstTerm.default)(variableNodeA, termNodeB, substitutions, localContextA, localContextB);
            return variableUnifiedAgainstTerm;
        }
    }
]);
var metaLevelUnifier = new MetaLevelUnifier();
Object.assign(_shim.default, {
    metaLevelUnifier: metaLevelUnifier
});
var _default = metaLevelUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtIGZyb20gXCIuLi91bmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50IGZyb20gXCIuLi91bmlmeS9tZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb24hXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgdW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBsZXQgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50O1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGVBKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlQSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlQSksXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZEFnYWluc3RTdGF0ZW1lbnQgPSB1bmlmeU1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQobWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25Ob2RlQSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RTdGF0ZW1lbnQgPSBtZXRhdmFyaWFibGVVbmlmaWVkQWdhaW5zdFN0YXRlbWVudDsgIC8vL1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0U3RhdGVtZW50O1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5QjogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAodGVybVZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdGVybVZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybSA9IHVuaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgIHJldHVybiB2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybTtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgbWV0YUxldmVsVW5pZmllclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsIm5vZGVBIiwibm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdFN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZU5vZGVBIiwic3Vic3RpdHV0aW9uTm9kZUEiLCJtZXRhdmFyaWFibGVVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCIsInVuaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudCIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZmllZCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeUNoaWxkTm9kZXMiLCJ0ZXJtVmFyaWFibGVOb2RlQSIsInRlcm1Ob2RlQiIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZVVuaWZpZWRBZ2FpbnN0VGVybSIsInVuaWZ5VmFyaWFibGVBZ2FpbnN0VGVybSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTRFQTs7O2VBQUE7OzsyREExRWlCOzhEQUNHOzBFQUNpQjttRkFDUztxQkFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDLGdCQUMvQkUsd0JBQXdCRixJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0csd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLDZCQUNsQ0ksd0JBQXdCSixJQUFBQSxnQkFBUyxFQUFDO0FBRXhDLElBQUEsQUFBTUssaUNBQUQsQUFBTDtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWE7Z0JBQzdELElBQUlDO2dCQUVKLElBQU1DLG1CQUFtQk4sT0FDbkJPLG1CQUFtQk4sT0FDbkJPLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCxrQkFBa0JDLGtCQUFrQkwsZUFBZUMsZUFBZUM7Z0JBRTNIQyxVQUFVRyx3QkFBd0IsR0FBRztnQkFFckMsT0FBT0g7WUFDVDs7O1dBWElQO0VBQXlCWSxnQkFBTztBQWFwQyxpQkFiSVosa0JBYUdhLFFBQU87SUFDWjtRQUNFQyxZQUFZbEI7UUFDWm1CLFlBQVluQjtRQUNaSyxPQUFPLFNBQUNlLGdCQUFnQkMsZ0JBQWdCYixlQUFlQyxlQUFlQztZQUNwRSxJQUFJWTtZQUVKLElBQU1DLG9CQUFvQnBCLHNCQUFzQmlCO1lBRWhELElBQUlHLHNCQUFzQixNQUFNO2dCQUM5QixJQUFNQyxvQkFBb0J0QixzQkFBc0JrQixpQkFDMUNLLHNDQUFzQ0MsSUFBQUEscUNBQWlDLEVBQUNILG1CQUFtQkYsZ0JBQWdCRyxtQkFBbUJoQixlQUFlQyxlQUFlQztnQkFFbEtZLG9DQUFvQ0cscUNBQXNDLEdBQUc7WUFDL0UsT0FBTztnQkFDTCxJQUFNYixtQkFBbUJRLGdCQUNuQlAsbUJBQW1CUSxnQkFDbkJNLDZCQUE2QmYsaUJBQWlCZ0IsYUFBYSxJQUMzREMsNkJBQTZCaEIsaUJBQWlCZSxhQUFhLElBQzNERSxjQUFjSCw0QkFDZEksY0FBY0YsNEJBQ2RHLHFCQUFxQkMsaUJBQWlCQyxlQUFlLENBQUNKLGFBQWFDLGFBQWF2QixlQUFlQyxlQUFlQztnQkFFcEhZLG9DQUFvQ1Usb0JBQW9CLEdBQUc7WUFDN0Q7WUFFQSxPQUFPVjtRQUNUO0lBQ0Y7SUFDQTtRQUNFSixZQUFZakI7UUFDWmtCLFlBQVlyQjtRQUNaTyxPQUFPLFNBQUM4QixtQkFBbUJDLFdBQVc1QixlQUFlQyxlQUFlQztZQUNsRSxJQUFNMkIsZ0JBQWdCRixtQkFDaEJHLDZCQUE2QkMsSUFBQUEsNEJBQXdCLEVBQUNGLGVBQWVELFdBQVc1QixlQUFlQyxlQUFlQztZQUVwSCxPQUFPNEI7UUFDVDtJQUNGO0NBQ0Q7QUFHSCxJQUFNTCxtQkFBbUIsSUFBSTdCO0FBRTdCb0MsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJULGtCQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==