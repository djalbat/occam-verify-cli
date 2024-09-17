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
var _variableWithTerm = /*#__PURE__*/ _interop_require_default(require("../unify/variableWithTerm"));
var _metavariableWithStatement = /*#__PURE__*/ _interop_require_default(require("../unify/metavariableWithStatement"));
var _metavariableWithStatementGivenSubstitution = /*#__PURE__*/ _interop_require_default(require("../unify/metavariableWithStatementGivenSubstitution"));
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
            var statementUnifiedWithStatement;
            var metavariableNodeA = metavariableNodeQuery(statementNodeA);
            if (metavariableNodeA !== null) {
                var substitutionNodeA = substitutionNodeQuery(statementNodeA);
                if (substitutionNodeA === null) {
                    var metavariableUnifiedWithStatement = (0, _metavariableWithStatement.default)(metavariableNodeA, statementNodeB, substitutions, localContextA, localContextB);
                    statementUnifiedWithStatement = metavariableUnifiedWithStatement; ///
                } else {
                    var metavariableUnifiedWithStatementGivenSubstitution = (0, _metavariableWithStatementGivenSubstitution.default)(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB);
                    statementUnifiedWithStatement = metavariableUnifiedWithStatementGivenSubstitution; ///
                }
            } else {
                var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB);
                statementUnifiedWithStatement = childNodesVerified; ///
            }
            return statementUnifiedWithStatement;
        }
    },
    {
        nodeQueryA: termVariableNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: function(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB) {
            var variableNodeA = termVariableNodeA, variableUnifiedWithTerm = (0, _variableWithTerm.default)(variableNodeA, termNodeB, substitutions, localContextA, localContextB);
            return variableUnifiedWithTerm;
        }
    }
]);
var metaLevelUnifier = new MetaLevelUnifier();
Object.assign(_shim.default, {
    metaLevelUnifier: metaLevelUnifier
});
var _default = metaLevelUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlWYXJpYWJsZVdpdGhUZXJtIGZyb20gXCIuLi91bmlmeS92YXJpYWJsZVdpdGhUZXJtXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVXaXRoU3RhdGVtZW50IGZyb20gXCIuLi91bmlmeS9tZXRhdmFyaWFibGVXaXRoU3RhdGVtZW50XCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24gZnJvbSBcIi4uL3VuaWZ5L21ldGF2YXJpYWJsZVdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN1YnN0aXR1dGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvc3Vic3RpdHV0aW9uIVwiKSxcbiAgICAgIG1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHVuaWZpZWQgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiB1bmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5Qjogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50O1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGVBKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZUEgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlQSA9IHN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZUEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50ID0gdW5pZnlNZXRhdmFyaWFibGVXaXRoU3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50ID0gbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnQ7IC8vL1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uID0gdW5pZnlNZXRhdmFyaWFibGVXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25Ob2RlQSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50ID0gbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbjsgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50ID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpID0+IHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlQSA9IHRlcm1WYXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVVbmlmaWVkV2l0aFRlcm0gPSB1bmlmeVZhcmlhYmxlV2l0aFRlcm0odmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICByZXR1cm4gdmFyaWFibGVVbmlmaWVkV2l0aFRlcm07XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBtZXRhTGV2ZWxVbmlmaWVyID0gbmV3IE1ldGFMZXZlbFVuaWZpZXIoKTtcblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIG1ldGFMZXZlbFVuaWZpZXJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJzdWJzdGl0dXRpb25Ob2RlUXVlcnkiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJub2RlQSIsIm5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZCIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZU5vZGVBIiwic3Vic3RpdHV0aW9uTm9kZUEiLCJtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudCIsInVuaWZ5TWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudCIsIm1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24iLCJ1bmlmeU1ldGF2YXJpYWJsZVdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZmllZCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeUNoaWxkTm9kZXMiLCJ0ZXJtVmFyaWFibGVOb2RlQSIsInRlcm1Ob2RlQiIsInZhcmlhYmxlTm9kZUEiLCJ2YXJpYWJsZVVuaWZpZWRXaXRoVGVybSIsInVuaWZ5VmFyaWFibGVXaXRoVGVybSIs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