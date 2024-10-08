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
            var statementUnified;
            var matches = statementNodeA.match(statementNodeB);
            if (matches) {
                statementUnified = true;
            } else {
                var Statement = _shim.default.Statement, statementB = Statement.fromStatementNode(statementNodeB, localContextB), statementMetavariableNodeA = statementMetavariableNodeQuery(statementNodeA);
                if (statementMetavariableNodeA !== null) {
                    var statement;
                    var statementA = Statement.fromStatementNode(statementNodeA, localContextA);
                    statement = statementA; ///
                    var substitution = statement.getSubstitution();
                    statement = statementB; ///
                    var localContext = localContextB, metavariableNode = statementMetavariableNodeA, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariable = localContextA.findMetavariableByMetavariableName(metavariableName);
                    if (substitution === null) {
                        statementUnified = metavariable.unifyStatement(statement, substitutions, localContext);
                    } else {
                        var statementUnifiedGivenSubstitution = metavariableNode.unifyStatementGivenSubstitution(statement, substitution, substitutions, localContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgdW5pZnlNZXRhdmFyaWFibGVXaXRoRnJhbWUgZnJvbSBcIi4uL3VuaWZ5L21ldGF2YXJpYWJsZVdpdGhGcmFtZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlLCBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHVuaWZpZWQgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiB1bmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5Qjogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVBLm1hdGNoKHN0YXRlbWVudE5vZGVCKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudEIgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZUIsIGxvY2FsQ29udGV4dEIpLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVBID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGVBKTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50QSA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlQSwgbG9jYWxDb250ZXh0QSk7XG5cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEE7IC8vL1xuXG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnQuZ2V0U3Vic3RpdHV0aW9uKCk7XG5cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEI7IC8vL1xuXG4gICAgICAgICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHRCLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlQSwgIC8vL1xuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dEEuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWRHaXZlblN1YnN0aXR1dGlvbiA9IG1ldGF2YXJpYWJsZU5vZGUudW5pZnlTdGF0ZW1lbnRHaXZlblN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZEdpdmVuU3Vic3RpdHV0aW9uOyAvLy9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50V2l0aFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlQSwgZnJhbWVOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBkZWJ1Z2dlclxuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVBID0gZnJhbWVNZXRhdmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWUgPSB1bmlmeU1ldGF2YXJpYWJsZVdpdGhGcmFtZShtZXRhdmFyaWFibGVOb2RlQSwgZnJhbWVOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWU7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dEEuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0QiwgLy8vXG4gICAgICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllZCA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsVW5pZmllciA9IG5ldyBNZXRhTGV2ZWxVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFVuaWZpZXI7XG5cbmZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IHN0YXRlbWVudE5vZGVBLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IHN0YXRlbWVudE5vZGVCLCAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVBLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGVCLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc0EgPSBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIGNoaWxkTm9kZXNCID0gbm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzQSwgY2hpbGROb2Rlc0IsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpLFxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsIm5vZGVBIiwibm9kZUIiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudFVuaWZpZWQiLCJtYXRjaGVzIiwibWF0Y2giLCJTdGF0ZW1lbnQiLCJzaGltIiwic3RhdGVtZW50QiIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZUEiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRBIiwic3Vic3RpdHV0aW9uIiwiZ2V0U3Vic3RpdHV0aW9uIiwibG9jYWxDb250ZXh0IiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkR2l2ZW5TdWJzdGl0dXRpb24iLCJ1bmlmeVN0YXRlbWVudEdpdmVuU3Vic3RpdHV0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoU3RhdGVtZW50IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlQSIsImZyYW1lTm9kZUIiLCJtZXRhdmFyaWFibGVOb2RlQSIsIm1ldGF2YXJpYWJsZVVuaWZpZWRXaXRoRnJhbWUiLCJ1bmlmeU1ldGF2YXJpYWJsZVdpdGhGcmFtZSIsInRlcm1WYXJpYWJsZU5vZGVBIiwidGVybU5vZGVCIiwidGVybVVuaWZpZWQiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsIlRlcm0iLCJ0ZXJtTm9kZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ1bmlmeVRlcm0iLCJtZXRhTGV2ZWxVbmlmaWVyIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNCIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidW5pZnlDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtSEE7OztlQUFBOzs7MkRBakhpQjs4REFDRzs0RUFDbUI7cUJBRWI7b0JBQ3lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLGlCQUFpQkQsSUFBQUEsZ0JBQVMsRUFBQyxZQUMzQkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDLGdCQUMvQkcsd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0ksNkJBQTZCSixJQUFBQSxnQkFBUyxFQUFDLHlCQUN2Q0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpELElBQUEsQUFBTU0saUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhO2dCQUM3RCxJQUFJQztnQkFFSixJQUFNQyxtQkFBbUJOLE9BQ25CTyxtQkFBbUJOLE9BQ25CTyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCQyxrQkFBa0JMLGVBQWVDLGVBQWVDO2dCQUUzSEMsVUFBVUcsd0JBQXdCLEdBQUc7Z0JBRXJDLE9BQU9IO1lBQ1Q7OztXQVhJUDtFQUF5QlksZ0JBQU87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