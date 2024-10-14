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
                var statementNode = statementNodeA, statementSubstitution = null, statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
                if (statementMetavariableNode !== null) {
                    var Statement = _shim.default.Statement, metavariableNode = statementMetavariableNode, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariable = localContextA.findMetavariableByMetavariableName(metavariableName), substitution = statementSubstitution, localContext = localContextB, statementNode1 = statementNodeB, statement = Statement.fromStatementNode(statementNode1, localContext);
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
    var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB), statementUnified = childNodesVerified; ///
    return statementUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVXaXRoRnJhbWUgZnJvbSBcIi4uL3VuaWZ5L21ldGF2YXJpYWJsZVdpdGhGcmFtZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlLCBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZEF0TWV0YUxldmVsO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgdW5pZmllZEF0TWV0YUxldmVsID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllZEF0TWV0YUxldmVsO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5Qjogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVBLm1hdGNoKHN0YXRlbWVudE5vZGVCKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQSwgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbnVsbCwgLy8vXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHRBLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0QiwgLy8vXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb24gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IG1ldGF2YXJpYWJsZS51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkR2l2ZW5TdWJzdGl0dXRpb24gPSBtZXRhdmFyaWFibGUudW5pZnlTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZEdpdmVuU3Vic3RpdHV0aW9uOyAvLy9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50V2l0aFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlQSwgZnJhbWVOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWUgPSB1bmlmeU1ldGF2YXJpYWJsZVdpdGhGcmFtZShtZXRhdmFyaWFibGVOb2RlQSwgZnJhbWVOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWU7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dEEuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0QiwgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllZCA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsVW5pZmllciA9IG5ldyBNZXRhTGV2ZWxVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFVuaWZpZXI7XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGVBLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIGNoaWxkTm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpLFxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsIm5vZGVBIiwibm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkQXRNZXRhTGV2ZWwiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwibm9kZVF1ZXJ5QSIsIm5vZGVRdWVyeUIiLCJzdGF0ZW1lbnROb2RlQSIsInN0YXRlbWVudE5vZGVCIiwic3RhdGVtZW50VW5pZmllZCIsIm1hdGNoZXMiLCJtYXRjaCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwiU3RhdGVtZW50Iiwic2hpbSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsInN1YnN0aXR1dGlvbiIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudCIsImZyb21TdGF0ZW1lbnROb2RlIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkR2l2ZW5TdWJzdGl0dXRpb24iLCJ1bmlmeVN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoU3RhdGVtZW50IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlQSIsImZyYW1lTm9kZUIiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWUiLCJ1bmlmeU1ldGF2YXJpYWJsZVdpdGhGcmFtZSIsInRlcm1WYXJpYWJsZU5vZGVBIiwidGVybU5vZGVCIiwidGVybVVuaWZpZWQiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsIlRlcm0iLCJ0ZXJtTm9kZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ1bmlmeVRlcm0iLCJtZXRhTGV2ZWxVbmlmaWVyIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidW5pZnlDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2R0E7OztlQUFBOzs7MkRBM0dpQjs4REFDRzs0RUFDbUI7cUJBRWI7b0JBQ3lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLGlCQUFpQkQsSUFBQUEsZ0JBQVMsRUFBQyxZQUMzQkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDLGdCQUMvQkcsd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0ksNkJBQTZCSixJQUFBQSxnQkFBUyxFQUFDLHlCQUN2Q0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpELElBQUEsQUFBTU0saUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhO2dCQUM3RCxJQUFJQztnQkFFSixJQUFNQyxtQkFBbUJOLE9BQ25CTyxtQkFBbUJOLE9BQ25CTyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCQyxrQkFBa0JMLGVBQWVDLGVBQWVDO2dCQUUzSEMscUJBQXFCRyx3QkFBd0IsR0FBRztnQkFFaEQsT0FBT0g7WUFDVDs7O1dBWElQO0VBQXlCWSxnQkFBTztBQWFwQyxpQkFiSVosa0JBYUdhLFFB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