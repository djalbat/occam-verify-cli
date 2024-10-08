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
var _metavariableWithFrame = /*#__PURE__*/ _interop_require_default(require("../unify/metavariableWithFrame"));
var _metavariableWithStatement = /*#__PURE__*/ _interop_require_default(require("../unify/metavariableWithStatement"));
var _metavariableWithStatementGivenSubstitution = /*#__PURE__*/ _interop_require_default(require("../unify/metavariableWithStatementGivenSubstitution"));
var _query = require("../utilities/query");
var _name = require("../utilities/name");
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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), frameNodeQuery = (0, _query.nodeQuery)("/frame!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), statementSubstitutionNodeQuery = (0, _query.nodeQuery)("/statement/substitution!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
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
            var matches = statementNodeA.match(statementNodeB);
            if (matches) {
                statementUnifiedWithStatement = true;
            } else {
                var statementMetavariableNodeA = statementMetavariableNodeQuery(statementNodeA);
                if (statementMetavariableNodeA !== null) {
                    var metavariableNodeA = statementMetavariableNodeA, statementSubstitutionNodeA = statementSubstitutionNodeQuery(statementNodeA);
                    if (statementSubstitutionNodeA === null) {
                        var Statement = _shim.default.Statement, metavariableNameA = (0, _name.metavariableNameFromMetavariableNode)(metavariableNodeA), metavariableA = localContextA.findMetavariableByMetavariableName(metavariableNameA), statementB = Statement.fromStatementNode(statementNodeB, localContextB), localContext = localContextB, metavariable = metavariableA, statement = statementB, statementUnified = metavariable.unifyStatement(statement, localContext);
                        var metavariableUnifiedWithStatement = (0, _metavariableWithStatement.default)(metavariableNodeA, statementNodeB, substitutions, localContextA, localContextB);
                        statementUnifiedWithStatement = metavariableUnifiedWithStatement; ///
                    } else {
                        var substitutionNodeA = statementSubstitutionNodeA, metavariableUnifiedWithStatementGivenSubstitution = (0, _metavariableWithStatementGivenSubstitution.default)(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB);
                        statementUnifiedWithStatement = metavariableUnifiedWithStatementGivenSubstitution; ///
                    }
                } else {
                    statementUnifiedWithStatement = unifyStatementWithStatement(statementNodeA, statementNodeB, substitutions, localContextA, localContextB);
                }
            }
            return statementUnifiedWithStatement;
        }
    },
    {
        nodeQueryA: frameMetavariableNodeQuery,
        nodeQueryB: frameNodeQuery,
        unify: function(frameMetavariableNodeA, frameNodeB, substitutions, localContextA, localContextB) {
            debugger;
            var metavariableNodeA = frameMetavariableNodeA, metavariableUnifiedWithFrame = (0, _metavariableWithFrame.default)(metavariableNodeA, frameNodeB, substitutions, localContextA, localContextB);
            return metavariableUnifiedWithFrame;
        }
    },
    {
        nodeQueryA: termVariableNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: function(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB) {
            var termUnified = false;
            var variableNodeA = termVariableNodeA, variableNameA = (0, _name.variableNameFromVariableNode)(variableNodeA), variableA = localContextA.findVariableByVariableName(variableNameA);
            if (variableA !== null) {
                var Term = _shim.default.Term, termB = Term.fromTermNode(termNodeB, localContextB), localContext = localContextB, variable = variableA, term = termB; ///
                termUnified = variable.unifyTerm(term, substitutions, localContext);
            }
            return termUnified;
        }
    }
]);
var metaLevelUnifier = new MetaLevelUnifier();
var _default = metaLevelUnifier;
function unifyStatementWithStatement(statementNodeA, statementNodeB, substitutions, localContextA, localContextB) {
    var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB), statementUnifiedWithStatement = childNodesVerified; ///
    return statementUnifiedWithStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVXaXRoRnJhbWUgZnJvbSBcIi4uL3VuaWZ5L21ldGF2YXJpYWJsZVdpdGhGcmFtZVwiO1xuaW1wb3J0IHVuaWZ5TWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudCBmcm9tIFwiLi4vdW5pZnkvbWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudFwiO1xuaW1wb3J0IHVuaWZ5TWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uIGZyb20gXCIuLi91bmlmeS9tZXRhdmFyaWFibGVXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSwgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybSFcIiksXG4gICAgICBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZSFcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50IVwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3N1YnN0aXR1dGlvbiFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbFVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHVuaWZpZWQ7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gbm9kZUEsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBub2RlQiwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVW5pZmllZCA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICB1bmlmaWVkID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudDtcblxuICAgICAgICBjb25zdCBtYXRjaGVzID0gc3RhdGVtZW50Tm9kZUEubWF0Y2goc3RhdGVtZW50Tm9kZUIpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGVBKTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlQSk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZUEgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZUEpLFxuICAgICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVBID0gbG9jYWxDb250ZXh0QS5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWVBKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50QiA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQiwgbG9jYWxDb250ZXh0QiksXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEIsIC8vL1xuICAgICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVBLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50QiwgLy8vXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBtZXRhdmFyaWFibGUudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50ID0gdW5pZnlNZXRhdmFyaWFibGVXaXRoU3RhdGVtZW50KG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQgPSBtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudDsgLy8vXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlQSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiA9IHVuaWZ5TWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uTm9kZUEsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50ID0gbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbjsgLy8vXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50ID0gdW5pZnlTdGF0ZW1lbnRXaXRoU3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50O1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlQSwgZnJhbWVOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWUgPSB1bmlmeU1ldGF2YXJpYWJsZVdpdGhGcmFtZShtZXRhdmFyaWFibGVOb2RlQSwgZnJhbWVOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWU7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB0ZXJtVmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTmFtZUEgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZUEpLFxuICAgICAgICAgICAgICB2YXJpYWJsZUEgPSBsb2NhbENvbnRleHRBLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZUEpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZUEgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgdGVybUIgPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZUIsIGxvY2FsQ29udGV4dEIpLFxuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEIsIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVBLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtID0gdGVybUI7IC8vL1xuXG4gICAgICAgICAgdGVybVVuaWZpZWQgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlQSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSxcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsIm5vZGVBIiwibm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVOb2RlQSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBIiwiU3RhdGVtZW50Iiwic2hpbSIsIm1ldGF2YXJpYWJsZU5hbWVBIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlQSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJzdGF0ZW1lbnRCIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJtZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudCIsInVuaWZ5TWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudCIsInN1YnN0aXR1dGlvbk5vZGVBIiwibWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiIsInVuaWZ5TWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoU3RhdGVtZW50IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlQSIsImZyYW1lTm9kZUIiLCJtZXRhdmFyaWFibGVVbmlmaWVkV2l0aEZyYW1lIiwidW5pZnlNZXRhdmFyaWFibGVXaXRoRnJhbWUiLCJ0ZXJtVmFyaWFibGVOb2RlQSIsInRlcm1Ob2RlQiIsInRlcm1VbmlmaWVkIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlTmFtZUEiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVBIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJUZXJtIiwidGVybUIiLCJmcm9tVGVybU5vZGUiLCJ2YXJpYWJsZSIsInRlcm0iLCJ1bmlmeVRlcm0iLCJtZXRhTGV2ZWxVbmlmaWVyIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidW5pZnlDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxSEE7OztlQUFBOzs7MkRBbkhpQjs4REFDRzs0RUFDbUI7Z0ZBQ0k7aUdBQ2lCO3FCQUVsQztvQkFDeUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5GLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxXQUMxQkMsaUJBQWlCRCxJQUFBQSxnQkFBUyxFQUFDLFlBQzNCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUMsZ0JBQy9CRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDSSw2QkFBNkJKLElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDSyxpQ0FBaUNMLElBQUFBLGdCQUFTLEVBQUMsNkJBQzNDTSxpQ0FBaUNOLElBQUFBLGdCQUFTLEVBQUM7QUFFakQsSUFBQSxBQUFNTyxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWE7Z0JBQzdELElBQUlDO2dCQUVKLElBQU1DLG1CQUFtQk4sT0FDbkJPLG1CQUFtQk4sT0FDbkJPLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFD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