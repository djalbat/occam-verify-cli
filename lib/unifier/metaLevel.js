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
var _termForVariable = /*#__PURE__*/ _interop_require_default(require("../substitution/termForVariable"));
var _frameForMetavariable = /*#__PURE__*/ _interop_require_default(require("../substitution/frameForMetavariable"));
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
                var localContext, statementNode;
                localContext = localContextA; ///
                statementNode = statementNodeA; ///
                var statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
                if (statementMetavariableNode !== null) {
                    var substitution = _frameForMetavariable.default.fromStatementNode(statementNode, localContext) || _termForVariable.default.fromStatementNode(statementNode, localContext) || null;
                    var Statement = _shim.default.Statement, metavariableNode = statementMetavariableNode, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariable = localContextA.findMetavariableByMetavariableName(metavariableName);
                    localContext = localContextB; ///
                    statementNode = statementNodeB; ///
                    var statement = Statement.fromStatementNode(statementNode, localContext);
                    statementUnified = metavariable.unifyStatement(statement, substitution, substitutions, localContext);
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
            var frameUnified = false;
            var metavariableNode = frameMetavariableNodeA, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariablePresent = localContextA.findMetavariableByMetavariableName(metavariableName);
            if (metavariablePresent) {
                var Frame = _shim.default.Frame, Metavariable = _shim.default.Metavariable, localContext = localContextB, frameNode = frameNodeB, metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContextA), frame = Frame.fromFrameNode(frameNode, localContextB);
                frameUnified = metavariable.unifyFrame(frame, substitutions, localContext);
            }
            return frameUnified;
        }
    },
    {
        nodeQueryA: termVariableNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: function(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB) {
            var termUnified = false;
            var variableNode = termVariableNodeA, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variablePresent = localContextA.isVariablePresentByVariableName(variableName);
            if (variablePresent !== null) {
                var Term = _shim.default.Term, Variable = _shim.default.Variable, localContext = localContextB, termNode = termNodeB, variable = Variable.fromVariableNode(variableNode, localContextA), term = Term.fromTermNode(termNode, localContextB);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5pbXBvcnQgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi9mcmFtZUZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlLCBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZEF0TWV0YUxldmVsO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgdW5pZmllZEF0TWV0YUxldmVsID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllZEF0TWV0YUxldmVsO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5Qjogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVBLm1hdGNoKHN0YXRlbWVudE5vZGVCKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBsb2NhbENvbnRleHQsXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGU7XG5cbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHRBOyAvLy9cblxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQTsgLy8vXG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHRBLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEI7IC8vL1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUI7IC8vL1xuXG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IG1ldGF2YXJpYWJsZS51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50V2l0aFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlQSwgZnJhbWVOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBsZXQgZnJhbWVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dEEuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGF2YXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHRCLCAvLy9cbiAgICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0QSksXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICBmcmFtZVVuaWZpZWQgPSBtZXRhdmFyaWFibGUudW5pZnlGcmFtZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZVVuaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBub2RlUXVlcnlBOiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6ICh0ZXJtVmFyaWFibGVOb2RlQSwgdGVybU5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1WYXJpYWJsZU5vZGVBLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBsb2NhbENvbnRleHRBLmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAodmFyaWFibGVQcmVzZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgeyBUZXJtLCBWYXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICBsb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHRCLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0QSksXG4gICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgIHRlcm1VbmlmaWVkID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBtZXRhTGV2ZWxVbmlmaWVyID0gbmV3IE1ldGFMZXZlbFVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsVW5pZmllcjtcblxuZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRXaXRoU3RhdGVtZW50KHN0YXRlbWVudE5vZGVBLCBzdGF0ZW1lbnROb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0Qikge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVBID0gc3RhdGVtZW50Tm9kZUEsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gc3RhdGVtZW50Tm9kZUIsIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUEuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZUIuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBjaGlsZE5vZGVzQSA9IG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGROb2Rlc0IgPSBub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXNBLCBjaGlsZE5vZGVzQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QiksXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVW5pZmllciIsInVuaWZ5Iiwibm9kZUEiLCJub2RlQiIsInN1YnN0aXR1dGlvbnMiLCJsb2NhbENvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInVuaWZpZWRBdE1ldGFMZXZlbCIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJub2RlUXVlcnlBIiwibm9kZVF1ZXJ5QiIsInN0YXRlbWVudE5vZGVBIiwic3RhdGVtZW50Tm9kZUIiLCJzdGF0ZW1lbnRVbmlmaWVkIiwibWF0Y2hlcyIsIm1hdGNoIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzdWJzdGl0dXRpb24iLCJGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnROb2RlIiwiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiU3RhdGVtZW50Iiwic2hpbSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRXaXRoU3RhdGVtZW50IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlQSIsImZyYW1lTm9kZUIiLCJmcmFtZVVuaWZpZWQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiRnJhbWUiLCJNZXRhdmFyaWFibGUiLCJmcmFtZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lIiwiZnJvbUZyYW1lTm9kZSIsInVuaWZ5RnJhbWUiLCJ0ZXJtVmFyaWFibGVOb2RlQSIsInRlcm1Ob2RlQiIsInRlcm1VbmlmaWVkIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJUZXJtIiwiVmFyaWFibGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ1bmlmeVRlcm0iLCJtZXRhTGV2ZWxVbmlmaWVyIiwibm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibm9uVGVybWluYWxOb2RlQkNoaWxkTm9kZXMiLCJjaGlsZE5vZGVzQSIsImNoaWxkTm9kZXNC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