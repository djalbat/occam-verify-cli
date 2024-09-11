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
            var statementUnifiedAgainstStatement;
            var metavariableNodeA = metavariableNodeQuery(statementNodeA);
            if (metavariableNodeA !== null) {
                var substitutionNodeA = substitutionNodeQuery(statementNodeA), metavariableUnifiedAgainstStatement = (0, _metavariableAgainstStatement.default)(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB);
                statementUnifiedAgainstStatement = metavariableUnifiedAgainstStatement; ///
            } else {
                var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB);
                statementUnifiedAgainstStatement = childNodesVerified; ///
            }
            return statementUnifiedAgainstStatement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtIGZyb20gXCIuLi91bmlmeS92YXJpYWJsZUFnYWluc3RUZXJtXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50IGZyb20gXCIuLi91bmlmeS9tZXRhdmFyaWFibGVBZ2FpbnN0U3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb24hXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgdW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBsZXQgc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZUEpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVBID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGVBKSxcbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IHVuaWZ5TWV0YXZhcmlhYmxlQWdhaW5zdFN0YXRlbWVudChtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0U3RhdGVtZW50ID0gbWV0YXZhcmlhYmxlVW5pZmllZEFnYWluc3RTdGF0ZW1lbnQ7ICAvLy9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdFN0YXRlbWVudCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB0ZXJtVmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlVW5pZmllZEFnYWluc3RUZXJtID0gdW5pZnlWYXJpYWJsZUFnYWluc3RUZXJtKHZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlVW5pZmllZEFnYWluc3RUZXJtO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsVW5pZmllciA9IG5ldyBNZXRhTGV2ZWxVbmlmaWVyKCk7XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBtZXRhTGV2ZWxVbmlmaWVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3Vic3RpdHV0aW9uTm9kZVF1ZXJ5IiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVW5pZmllciIsInVuaWZ5Iiwibm9kZUEiLCJub2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWQiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50VW5pZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGVOb2RlQSIsInN1YnN0aXR1dGlvbk5vZGVBIiwibWV0YXZhcmlhYmxlVW5pZmllZEFnYWluc3RTdGF0ZW1lbnQiLCJ1bmlmeU1ldGF2YXJpYWJsZUFnYWluc3RTdGF0ZW1lbnQiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNBIiwiY2hpbGROb2Rlc0IiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJtZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnlDaGlsZE5vZGVzIiwidGVybVZhcmlhYmxlTm9kZUEiLCJ0ZXJtTm9kZUIiLCJ2YXJpYWJsZU5vZGVBIiwidmFyaWFibGVVbmlmaWVkQWdhaW5zdFRlcm0iLCJ1bmlmeVZhcmlhYmxlQWdhaW5zdFRlcm0iLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0RUE7OztlQUFBOzs7MkRBMUVpQjs4REFDRzswRUFDaUI7bUZBQ1M7cUJBRXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDL0JFLHdCQUF3QkYsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbENHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDbENJLHdCQUF3QkosSUFBQUEsZ0JBQVMsRUFBQztBQUV4QyxJQUFBLEFBQU1LLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYTtnQkFDN0QsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CTixPQUNuQk8sbUJBQW1CTixPQUNuQk8seUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILGtCQUFrQkMsa0JBQWtCTCxlQUFlQyxlQUFlQztnQkFFM0hDLFVBQVVHLHdCQUF3QixHQUFHO2dCQUVyQyxPQUFPSDtZQUNUOzs7V0FYSVA7RUFBeUJZLGdCQUFPO0FBYXBDLGlCQWJJWixrQkFhR2EsUUFBTztJQUNaO1FBQ0VDLFlBQVlsQjtRQUNabUIsWUFBWW5CO1FBQ1pLLE9BQU8sU0FBQ2UsZ0JBQWdCQyxnQkFBZ0JiLGVBQWVDLGVBQWVDO1lBQ3BFLElBQUlZO1lBRUosSUFBTUMsb0JBQW9CcEIsc0JBQXNCaUI7WUFFaEQsSUFBSUcsc0JBQXNCLE1BQU07Z0JBQzlCLElBQU1DLG9CQUFvQnRCLHNCQUFzQmtCLGlCQUMxQ0ssc0NBQXNDQyxJQUFBQSxxQ0FBaUMsRUFBQ0gsbUJBQW1CRixnQkFBZ0JHLG1CQUFtQmhCLGVBQWVDLGVBQWVDO2dCQUVsS1ksbUNBQW1DRyxxQ0FBc0MsR0FBRztZQUM5RSxPQUFPO2dCQUNMLElBQU1iLG1CQUFtQlEsZ0JBQ25CUCxtQkFBbUJRLGdCQUNuQk0sNkJBQTZCZixpQkFBaUJnQixhQUFhLElBQzNEQyw2QkFBNkJoQixpQkFBaUJlLGFBQWEsSUFDM0RFLGNBQWNILDRCQUNkSSxjQUFjRiw0QkFDZEcscUJBQXFCQyxpQkFBaUJDLGVBQWUsQ0FBQ0osYUFBYUMsYUFBYXZCLGVBQWVDLGVBQWVDO2dCQUVwSFksbUNBQW1DVSxvQkFBb0IsR0FBRztZQUM1RDtZQUVBLE9BQU9WO1FBQ1Q7SUFDRjtJQUNBO1FBQ0VKLFlBQVlqQjtRQUNaa0IsWUFBWXJCO1FBQ1pPLE9BQU8sU0FBQzhCLG1CQUFtQkMsV0FBVzVCLGVBQWVDLGVBQWVDO1lBQ2xFLElBQU0yQixnQkFBZ0JGLG1CQUNoQkcsNkJBQTZCQyxJQUFBQSw0QkFBd0IsRUFBQ0YsZUFBZUQsV0FBVzVCLGVBQWVDLGVBQWVDO1lBRXBILE9BQU80QjtRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1MLG1CQUFtQixJQUFJN0I7QUFFN0JvQyxPQUFPQyxNQUFNLENBQUNDLGFBQUksRUFBRTtJQUNsQlQsa0JBQUFBO0FBQ0Y7SUFFQSxXQUFlQSJ9