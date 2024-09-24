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
var _metavariableWithFrame = /*#__PURE__*/ _interop_require_default(require("../unify/metavariableWithFrame"));
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
            var statementMetavariableNodeA = statementMetavariableNodeQuery(statementNodeA);
            if (statementMetavariableNodeA !== null) {
                var metavariableNodeA = statementMetavariableNodeA, statementSubstitutionNodeA = statementSubstitutionNodeQuery(statementNodeA);
                if (statementSubstitutionNodeA === null) {
                    var metavariableUnifiedWithStatement = (0, _metavariableWithStatement.default)(metavariableNodeA, statementNodeB, substitutions, localContextA, localContextB);
                    statementUnifiedWithStatement = metavariableUnifiedWithStatement; ///
                } else {
                    var substitutionNodeA = statementSubstitutionNodeA, metavariableUnifiedWithStatementGivenSubstitution = (0, _metavariableWithStatementGivenSubstitution.default)(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB);
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
        nodeQueryA: frameMetavariableNodeQuery,
        nodeQueryB: frameNodeQuery,
        unify: function(frameMetavariableNodeA, frameNodeB, substitutions, localContextA, localContextB) {
            var metavariableNodeA = frameMetavariableNodeA, metavariableUnifiedWithFrame = (0, _metavariableWithFrame.default)(metavariableNodeA, frameNodeB, substitutions, localContextA, localContextB);
            return metavariableUnifiedWithFrame;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlWYXJpYWJsZVdpdGhUZXJtIGZyb20gXCIuLi91bmlmeS92YXJpYWJsZVdpdGhUZXJtXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVXaXRoRnJhbWUgZnJvbSBcIi4uL3VuaWZ5L21ldGF2YXJpYWJsZVdpdGhGcmFtZVwiO1xuaW1wb3J0IHVuaWZ5TWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudCBmcm9tIFwiLi4vdW5pZnkvbWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudFwiO1xuaW1wb3J0IHVuaWZ5TWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uIGZyb20gXCIuLi91bmlmeS9tZXRhdmFyaWFibGVXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0hXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUhXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudCFcIiksXG4gICAgICB0ZXJtVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9zdWJzdGl0dXRpb24hXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KG5vZGVBLCBub2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICAgIGxldCB1bmlmaWVkO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgdW5pZmllZCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBsZXQgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQ7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZUEpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGVBKTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlQSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnQgPSB1bmlmeU1ldGF2YXJpYWJsZVdpdGhTdGF0ZW1lbnQobWV0YXZhcmlhYmxlTm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQgPSBtZXRhdmFyaWFibGVVbmlmaWVkV2l0aFN0YXRlbWVudDsgLy8vXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVBID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiA9IHVuaWZ5TWV0YXZhcmlhYmxlV2l0aFN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9uTm9kZUEsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudCA9IG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb247IC8vL1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZUEsIC8vL1xuICAgICAgICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aFN0YXRlbWVudCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZFdpdGhTdGF0ZW1lbnQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChmcmFtZU1ldGF2YXJpYWJsZU5vZGVBLCBmcmFtZU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWUgPSB1bmlmeU1ldGF2YXJpYWJsZVdpdGhGcmFtZShtZXRhdmFyaWFibGVOb2RlQSwgZnJhbWVOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWU7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZUEgPSB0ZXJtVmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlVW5pZmllZFdpdGhUZXJtID0gdW5pZnlWYXJpYWJsZVdpdGhUZXJtKHZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlVW5pZmllZFdpdGhUZXJtO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsVW5pZmllciA9IG5ldyBNZXRhTGV2ZWxVbmlmaWVyKCk7XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBtZXRhTGV2ZWxVbmlmaWVyXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsVW5pZmllcjtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsIm5vZGVBIiwibm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudFVuaWZpZWRXaXRoU3RhdGVtZW50Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEiLCJtZXRhdmFyaWFibGVOb2RlQSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGVBIiwibWV0YXZhcmlhYmxlVW5pZmllZFdpdGhTdGF0ZW1lbnQiLCJ1bmlmeU1ldGF2YXJpYWJsZVdpdGhTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25Ob2RlQSIsIm1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoU3RhdGVtZW50R2l2ZW5TdWJzdGl0dXRpb24iLCJ1bmlmeU1ldGF2YXJpYWJsZVdpdGhTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbiIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZmllZCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeUNoaWxkTm9kZXMiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVBIiwiZnJhbWVOb2RlQiIsIm1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWUiLCJ1bmlmeU1ldGF2YXJpYWJsZVdpdGhGcmFtZSIsInRlcm1WYXJpYWJsZU5vZGVBIiwidGVybU5vZGVCIiwidmFyaWFibGVOb2RlQSIsInZhcmlhYmxlVW5pZmllZFdpdGhUZXJtIiwidW5pZnlWYXJpYWJsZVdpdGhUZXJtIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbUdBOzs7ZUFBQTs7OzJEQWpHaUI7OERBQ0c7dUVBQ2M7NEVBQ0s7Z0ZBQ0k7aUdBQ2lCO3FCQUVsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFdBQzFCQyxpQkFBaUJELElBQUFBLGdCQUFTLEVBQUMsWUFDM0JFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDL0JHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbENJLDZCQUE2QkosSUFBQUEsZ0JBQVMsRUFBQyx5QkFDdkNLLGlDQUFpQ0wsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDM0NNLGlDQUFpQ04sSUFBQUEsZ0JBQVMsRUFBQztBQUVqRCxJQUFBLEFBQU1PLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYTtnQkFDN0QsSUFBSUM7Z0JBRUosSUFBTUMsbUJBQW1CTixPQUNuQk8sbUJBQW1CTixPQUNuQk8seUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILGtCQUFrQkMsa0JBQWtCTCxlQUFlQyxlQUFlQztnQkFFM0hDLFVBQVVHLHdCQUF3QixHQUFHO2dCQUVyQyxPQUFPSDtZQUNUOzs7V0FYSVA7RUFBeUJZLGdCQUFPO0FBYXBDLGlCQWJJWixrQkFhR2EsUUFBTztJQUNaO1FBQ0VDLFlBQVluQjtRQUNab0IsWUFBWXBCO1FBQ1pNLE9BQU8sU0FBQ2UsZ0JBQWdCQyxnQkFBZ0JiLGVBQWVDLGVBQWVDO1lBQ3BFLElBQUlZO1lBRUosSUFBTUMsNkJBQTZCcEIsK0JBQStCaUI7WUFFbEUsSUFBSUcsK0JBQStCLE1BQU07Z0JBQ3ZDLElBQU1DLG9CQUFvQkQsNEJBQ3BCRSw2QkFBNkJ2QiwrQkFBK0JrQjtnQkFFbEUsSUFBSUssK0JBQStCLE1BQU07b0JBQ3ZDLElBQU1DLG1DQUFtQ0MsSUFBQUEsa0NBQThCLEVBQUNILG1CQUFtQkgsZ0JBQWdCYixlQUFlQyxlQUFlQztvQkFFeklZLGdDQUFnQ0ksa0NBQWtDLEdBQUc7Z0JBQ3ZFLE9BQU87b0JBQ0wsSUFBTUUsb0JBQW9CSCw0QkFDcEJJLG9EQUFvREMsSUFBQUEsbURBQStDLEVBQUNOLG1CQUFtQkgsZ0JBQWdCTyxtQkFBbUJwQixlQUFlQyxlQUFlQztvQkFFOUxZLGdDQUFnQ08sbURBQW1ELEdBQUc7Z0JBQ3hGO1lBQ0YsT0FBTztnQkFDTCxJQUFNakIsbUJBQW1CUSxnQkFDbkJQLG1CQUFtQlEsZ0JBQ25CVSw2QkFBNkJuQixpQkFBaUJvQixhQUFhLElBQzNEQyw2QkFBNkJwQixpQkFBaUJtQixhQUFhLElBQzNERSxjQUFjSCw0QkFDZEksY0FBY0YsNEJBQ2RHLHFCQUFxQkMsaUJBQWlCQyxlQUFlLENBQUNKLGFBQWFDLGFBQWEzQixlQUFlQyxlQUFlQztnQkFFcEhZLGdDQUFnQ2Msb0JBQW9CLEdBQUc7WUFDekQ7WUFFQSxPQUFPZDtRQUNUO0lBQ0Y7SUFDQTtRQUNFSixZQUFZakI7UUFDWmtCLFlBQVlyQjtRQUNaTyxPQUFPLFNBQUNrQyx3QkFBd0JDLFlBQVloQyxlQUFlQyxlQUFlQztZQUN4RSxJQUFNYyxvQkFBb0JlLHdCQUNwQkUsK0JBQStCQyxJQUFBQSw4QkFBMEIsRUFBQ2xCLG1CQUFtQmdCLFlBQVloQyxlQUFlQyxlQUFlQztZQUU3SCxPQUFPK0I7UUFDVDtJQUNGO0lBQ0E7UUFDRXZCLFlBQVlsQjtRQUNabUIsWUFBWXZCO1FBQ1pTLE9BQU8sU0FBQ3NDLG1CQUFtQkMsV0FBV3BDLGVBQWVDLGVBQWVDO1lBQ2xFLElBQU1tQyxnQkFBZ0JGLG1CQUNoQkcsMEJBQTBCQyxJQUFBQSx5QkFBcUIsRUFBQ0YsZUFBZUQsV0FBV3BDLGVBQWVDLGVBQWVDO1lBRTlHLE9BQU9vQztRQUNUO0lBQ0Y7Q0FDRDtBQUdILElBQU1ULG1CQUFtQixJQUFJakM7QUFFN0I0QyxPQUFPQyxNQUFNLENBQUNDLGFBQUksRUFBRTtJQUNsQmIsa0JBQUFBO0FBQ0Y7SUFFQSxXQUFlQSJ9