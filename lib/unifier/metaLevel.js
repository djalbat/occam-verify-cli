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
var termNodeQuery = (0, _query.nodeQuery)("/term"), frameNodeQuery = (0, _query.nodeQuery)("/frame"), statementNodeQuery = (0, _query.nodeQuery)("/statement"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
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
                    var Statement = _shim.default.Statement, metavariableNode = statementMetavariableNode, metavariable = localContextA.findMetavariableByMetavariableNode(metavariableNode, localContextB);
                    localContext = localContextB; ///
                    statementNode = statementNodeB; ///
                    var statement = Statement.fromStatementNode(statementNode, localContext);
                    statementUnified = metavariable.unifyStatement(statement, substitution, substitutions, localContext);
                } else {
                    statementUnified = unifyChildNodes(statementNodeA, statementNodeB, substitutions, localContextA, localContextB);
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
            var metavariableNode = frameMetavariableNodeA, metavariablePresent = localContextA.isMetavariablePresentByMetavariableNode(metavariableNode, localContextB);
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
function unifyChildNodes(statementNodeA, statementNodeB, substitutions, localContextA, localContextB) {
    var nonTerminalNodeA = statementNodeA, nonTerminalNodeB = statementNodeB, nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(), nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(), childNodesA = nonTerminalNodeAChildNodes, childNodesB = nonTerminalNodeBChildNodes, childNodesVerified = metaLevelUnifier.unifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB), statementUnified = childNodesVerified; ///
    return statementUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5pbXBvcnQgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi9mcmFtZUZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbFVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkobm9kZUEsIG5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgbGV0IHVuaWZpZWRBdE1ldGFMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBub2RlQSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IG5vZGVCLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5vZGVBLCBub25UZXJtaW5hbE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWRBdE1ldGFMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBzdGF0ZW1lbnROb2RlQS5tYXRjaChzdGF0ZW1lbnROb2RlQik7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbG9jYWxDb250ZXh0LFxuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlO1xuXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0QTsgLy8vXG5cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUE7IC8vL1xuXG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBGcmFtZUZvck1ldGF2YXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHRBLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEI7IC8vL1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50Tm9kZUI7IC8vL1xuXG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IG1ldGF2YXJpYWJsZS51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5Q2hpbGROb2RlcyhzdGF0ZW1lbnROb2RlQSwgc3RhdGVtZW50Tm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5QTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBub2RlUXVlcnlCOiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZnJhbWVNZXRhdmFyaWFibGVOb2RlQSwgZnJhbWVOb2RlQiwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0QSwgbG9jYWxDb250ZXh0QikgPT4ge1xuICAgICAgICBsZXQgZnJhbWVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGZyYW1lTWV0YXZhcmlhYmxlTm9kZUEsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dEEuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEIsIC8vL1xuICAgICAgICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lTm9kZUIsIC8vL1xuICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHRBKSxcbiAgICAgICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICAgIGZyYW1lVW5pZmllZCA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lVW5pZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeUE6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIG5vZGVRdWVyeUI6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKHRlcm1WYXJpYWJsZU5vZGVBLCB0ZXJtTm9kZUIsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpID0+IHtcbiAgICAgICAgbGV0IHRlcm1VbmlmaWVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybVZhcmlhYmxlTm9kZUEsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dEEuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dEIsIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVCLCAvLy9cbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHRBKSxcbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgICAgdGVybVVuaWZpZWQgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuXG5mdW5jdGlvbiB1bmlmeUNoaWxkTm9kZXMoc3RhdGVtZW50Tm9kZUEsIHN0YXRlbWVudE5vZGVCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZUEgPSBzdGF0ZW1lbnROb2RlQSwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBzdGF0ZW1lbnROb2RlQiwgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlQi5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGNoaWxkTm9kZXNBID0gbm9uVGVybWluYWxOb2RlQUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzQiA9IG5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeUNoaWxkTm9kZXMoY2hpbGROb2Rlc0EsIGNoaWxkTm9kZXNCLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSxcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZyYW1lTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJub2RlQSIsIm5vZGVCIiwic3Vic3RpdHV0aW9ucyIsImxvY2FsQ29udGV4dEEiLCJsb2NhbENvbnRleHRCIiwidW5pZmllZEF0TWV0YUxldmVsIiwibm9uVGVybWluYWxOb2RlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsIm5vZGVRdWVyeUEiLCJub2RlUXVlcnlCIiwic3RhdGVtZW50Tm9kZUEiLCJzdGF0ZW1lbnROb2RlQiIsInN0YXRlbWVudFVuaWZpZWQiLCJtYXRjaGVzIiwibWF0Y2giLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsIkZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnQiLCJzaGltIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5Q2hpbGROb2RlcyIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZUEiLCJmcmFtZU5vZGVCIiwiZnJhbWVVbmlmaWVkIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIkZyYW1lIiwiTWV0YXZhcmlhYmxlIiwiZnJhbWVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZSIsImZyb21GcmFtZU5vZGUiLCJ1bmlmeUZyYW1lIiwidGVybVZhcmlhYmxlTm9kZUEiLCJ0ZXJtTm9kZUIiLCJ0ZXJtVW5pZmllZCIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwiVGVybSIsIlZhcmlhYmxlIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidW5pZnlUZXJtIiwibWV0YUxldmVsVW5pZmllciIsIm5vblRlcm1pbmFsTm9kZUFDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsIm5vblRlcm1pbmFsTm9kZUJDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc0EiLCJjaGlsZE5vZGVzQiIsImNoaWxkTm9kZXNWZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkhBOzs7ZUFBQTs7OzJEQTNIaUI7OERBQ0c7c0VBQ29COzJFQUNLO3FCQUVuQjtvQkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsaUJBQWlCRCxJQUFBQSxn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