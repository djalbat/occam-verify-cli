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
            var metavariableNode = frameMetavariableNodeA, metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariablePresent = localContextA.isMetavariablePresentByMetavariableName(metavariableName);
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
            if (variablePresent) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5pbXBvcnQgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi9mcmFtZUZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlLCBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtIVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lIVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQhXCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShub2RlQSwgbm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZEF0TWV0YUxldmVsO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlQSA9IG5vZGVBLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gbm9kZUIsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgdW5pZmllZEF0TWV0YUxldmVsID0gbm9uVGVybWluYWxOb2RlVW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllZEF0TWV0YUxldmVsO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgbm9kZVF1ZXJ5Qjogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVBLm1hdGNoKHN0YXRlbWVudE5vZGVCKTtcblxuICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBsb2NhbENvbnRleHQsXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGU7XG5cbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBsb2NhbENvbnRleHRBOyAvLy9cblxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlQTsgLy8vXG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IEZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCB7IFN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHRBLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEI7IC8vL1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUI7IC8vL1xuXG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IG1ldGF2YXJpYWJsZS51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5U3RhdGVtZW50V2l0aFN0YXRlbWVudChzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlQSwgZnJhbWVOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBsZXQgZnJhbWVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dEEuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEIsIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHRBKSxcbiAgICAgICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgIGZyYW1lVW5pZmllZCA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lVW5pZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpID0+IHtcbiAgICAgICAgbGV0IHRlcm1VbmlmaWVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dEEuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEIsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHRBKSxcbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgICAgdGVybVVuaWZpZWQgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuXG5mdW5jdGlvbiB1bmlmeVN0YXRlbWVudFdpdGhTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlQSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSxcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZyYW1lTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJub2RlQSIsIm5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZEF0TWV0YUxldmVsIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudFVuaWZpZWQiLCJtYXRjaGVzIiwibWF0Y2giLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsIkZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnQiLCJzaGltIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudFdpdGhTdGF0ZW1lbnQiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVBIiwiZnJhbWVOb2RlQiIsImZyYW1lVW5pZmllZCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJGcmFtZSIsIk1ldGF2YXJpYWJsZSIsImZyYW1lTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJhbWUiLCJmcm9tRnJhbWVOb2RlIiwidW5pZnlGcmFtZSIsInRlcm1WYXJpYWJsZU5vZGVBIiwidGVybU5vZGVCIiwidGVybVVuaWZpZWQiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIlRlcm0iLCJWYXJpYWJsZSIsInRlcm1Ob2RlIiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInVuaWZ5VGVybSIsIm1ldGFMZXZlbFVuaWZpZXIiLCJub25UZXJtaW5hbE5vZGVBQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJub25UZXJtaW5hbE5vZGVCQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNBIiwiY2hpbGROb2Rlc0IiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ1bmlmeUNoaWxkTm9kZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStIQTs7O2VBQUE7OzsyREE3SGlCOzhEQUNHO3NFQUNvQjsyRUFDSztxQkFFbkI7b0JBQ3lEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsV0FDMUJDLGlCQUFpQkQsSUFBQUEsZ0JBQVMsRUFBQyxZQUMzQkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDLGdCQUMvQkcsd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0ksNkJBQTZCSixJQUFBQSxnQkFBUyxFQUFDLHlCQUN2Q0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpELElBQUEsQUFBTU0saUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhO2dCQUM3RCxJQUFJQztnQkFFSixJQUFNQyxtQkFBbUJOLE9BQ25CTyxtQkFBbUJOLE9BQ25CTyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsa0JBQWtCQyxrQkFBa0JMLGVBQWVDLGVBQWVDO2dCQUUzSEMscUJBQXFCRyx3QkFBd0IsR0FBRztnQkFFaEQsT0FBT0g7WUFDVDs7O1dBWElQO0VBQXlCWSxnQkFBTztBQWFwQyxpQkFiSVosa0JBYUdhLFFBQU87SUFDWjtRQUNFQyxZQUFZbEI7UUFDWm1CLFlBQVluQjtRQUNaSyxPQUFPLFNBQUNlLGdCQUFnQkMsZ0JBQWdCYixlQUFlQyxlQUFlQztZQUNwRSxJQUFJWTtZQUVKLElBQU1DLFVBQVVILGVB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