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
                    var metavariableUnifiedWithStatementGivenSubstitution = unifyMetavariableWithStatementGivenSubstitution(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlWYXJpYWJsZVdpdGhUZXJtIGZyb20gXCIuLi91bmlmeS92YXJpYWJsZVdpdGhUZXJtXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVXaXRoU3RhdGVtZW50IGZyb20gXCIuLi91bmlmeS9tZXRhdmFyaWFibGVXaXRoU3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb24hXCIpLFxuICAgICAgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgdW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBsZXQgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQ7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZUEpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVBID0gc3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGVBKTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlQSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnQgPSB1bmlmeU1ldGF2YXJpYWJsZVdpdGhTdGF0ZW1lbnQobWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQgPSBtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudDsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24gPSB1bmlmeU1ldGF2YXJpYWJsZVdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbk5vZGVBLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQgPSBtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uOyAvLy9cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50O1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5QjogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAodGVybVZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGVBID0gdGVybVZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZVVuaWZpZWRXaXRoVGVybSA9IHVuaWZ5VmFyaWFibGVXaXRoVGVybSh2YXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgIHJldHVybiB2YXJpYWJsZVVuaWZpZWRXaXRoVGVybTtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgbWV0YUxldmVsVW5pZmllclxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsInN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsIm5vZGVBIiwibm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50IiwibWV0YXZhcmlhYmxlTm9kZUEiLCJzdWJzdGl0dXRpb25Ob2RlQSIsIm1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50IiwidW5pZnlNZXRhdmFyaWFibGVXaXRoU3RhdGVtZW50IiwibWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiIsInVuaWZ5TWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwibWV0YUxldmVsVW5pZmllciIsInVuaWZ5Q2hpbGROb2RlcyIsInRlcm1WYXJpYWJsZU5vZGVBIiwidGVybU5vZGVCIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlVW5pZmllZFdpdGhUZXJtIiwidW5pZnlWYXJpYWJsZVdpdGhUZXJtIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUZBOzs7ZUFBQTs7OzJEQWpGaUI7OERBQ0c7dUVBQ2M7Z0ZBQ1M7cUJBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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