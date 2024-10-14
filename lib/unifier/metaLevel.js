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
var termNodeQuery = (0, _query.nodeQuery)("/term!"), frameNodeQuery = (0, _query.nodeQuery)("/frame!"), statementNodeQuery = (0, _query.nodeQuery)("/statement!"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
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
                var unifiedAtMetaLevel;
                var nonTerminalNodeA = nodeA, nonTerminalNodeB = nodeB, nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB);
                unifiedAtMetaLevel = nonTerminalNodeUnified; ///
                return unifiedAtMetaLevel;
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
            var statementUnified;
            var matches = statementNodeA.match(statementNodeB);
            if (matches) {
                statementUnified = true;
            } else {
                var statementNode = statementNodeA, statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
                if (statementMetavariableNode !== null) {
                    var Statement = _shim.default.Statement, metavariableNode = statementMetavariableNode, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariable = localContextA.findMetavariableByMetavariableName(metavariableName), substitution = substitutionA, localContext = localContextB, statementNode1 = statementNodeB, statement = Statement.fromStatementNode(statementNode1, localContext);
                    if (substitution === null) {
                        statementUnified = metavariable.unifyStatement(statement, substitutions, localContext);
                    } else {
                        var statementUnifiedGivenSubstitution = metavariable.unifyStatementGivenSubstitution(statement, substitution, substitutions, localContext);
                        statementUnified = statementUnifiedGivenSubstitution; ///
                    }
                } else {
                    statementUnified = unifyStatementWithStatement(statementNodeA, statementNodeB, substitutions, localContextA, localContextB);
                }
            }
            return statementUnified;
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
            var variableNode = termVariableNodeA, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = localContextA.findVariableByVariableName(variableName);
            if (variable !== null) {
                var Term = _shim.default.Term, localContext = localContextB, termNode = termNodeB, term = Term.fromTermNode(termNode, localContextB);
                termUnified = variable.unifyTerm(term, substitutions, localContext);
            }
            return termUnified;
        }
    }
]);
var metaLevelUnifier = new MetaLevelUnifier();
var _default = metaLevelUnifier;
function unifyStatementWithStatement(statementNodeA, statementNodeB, substitutions, localContextA, localContextB) {
    substitutionA = null;
    var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB), statementUnified = childNodesVerified; ///
    return statementUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVXaXRoRnJhbWUgZnJvbSBcIi4uL3VuaWZ5L21ldGF2YXJpYWJsZVdpdGhGcmFtZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlLCBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZEF0TWV0YUxldmVsO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgdW5pZmllZEF0TWV0YUxldmVsID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllZEF0TWV0YUxldmVsO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5Qjogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVBLm1hdGNoKHN0YXRlbWVudE5vZGVCKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHRBLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25BLCAgLy8vXG4gICAgICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHRCLCAvLy9cbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWRHaXZlblN1YnN0aXR1dGlvbiA9IG1ldGF2YXJpYWJsZS51bmlmeVN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkR2l2ZW5TdWJzdGl0dXRpb247IC8vL1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZnlTdGF0ZW1lbnRXaXRoU3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChmcmFtZU1ldGF2YXJpYWJsZU5vZGVBLCBmcmFtZU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSA9PiB7XG4gICAgICAgIGRlYnVnZ2VyXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZUEgPSBmcmFtZU1ldGF2YXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhGcmFtZSA9IHVuaWZ5TWV0YXZhcmlhYmxlV2l0aEZyYW1lKG1ldGF2YXJpYWJsZU5vZGVBLCBmcmFtZU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllZFdpdGhGcmFtZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpID0+IHtcbiAgICAgICAgbGV0IHRlcm1VbmlmaWVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlID0gbG9jYWxDb250ZXh0QS5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHRCLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgIHRlcm1VbmlmaWVkID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBtZXRhTGV2ZWxVbmlmaWVyID0gbmV3IE1ldGFMZXZlbFVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsVW5pZmllcjtcblxuZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRXaXRoU3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICBzdWJzdGl0dXRpb25BID0gbnVsbDtcblxuICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZUEsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBjaGlsZE5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiksXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVW5pZmllciIsInVuaWZ5Iiwibm9kZUEiLCJub2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRBdE1ldGFMZXZlbCIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRVbmlmaWVkIiwibWF0Y2hlcyIsIm1hdGNoIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJTdGF0ZW1lbnQiLCJzaGltIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkR2l2ZW5TdWJzdGl0dXRpb24iLCJ1bmlmeVN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoU3RhdGVtZW50IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlQSIsImZyYW1lTm9kZUIiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWUiLCJ1bmlmeU1ldGF2YXJpYWJsZVdpdGhGcmFtZSIsInRlcm1WYXJpYWJsZU5vZGVBIiwidGVybU5vZGVCIiwidGVybVVuaWZpZWQiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsIlRlcm0iLCJ0ZXJtTm9kZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ1bmlmeVRlcm0iLCJtZXRhTGV2ZWxVbmlmaWVyIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidW5pZnlDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE0R0E7OztlQUFBOzs7MkRBMUdpQjs4REFDRzs0RUFDbUI7cUJBRWI7b0JBQ3lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLGlCQUFpQkQsSUFBQUEsZ0JBQVMsRUFBQyxZQUMzQkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDLGdCQUMvQkcsd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0ksNkJBQTZCSixJQUFBQSxnQkFBUyxFQUFDLHlCQUN2Q0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpELElBQUEsQUFBTU0saUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhO2dCQUM3RCxJQUFJQztnQkFFSixJQUFNQyxtQkFBbUJOLE9BQ25CTyxtQkFBbUJOLE9BQ25CTyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCQyxrQkFBa0JMLGVBQWVDLGVBQWVDO2dCQUUzSEMscUJBQXFCRyx3QkFBd0IsR0FBRztnQkFFaEQsT0FBT0g7WUFDVDs7O1dBWElQO0VBQXlCWSxnQkFBTztBQWFwQyxpQkFiSVosa0JBYUdhLFFBQU87SUFDWjtRQUNFQyxZQUFZbEI7UUFDWm1CLFlBQVluQjtRQUNa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