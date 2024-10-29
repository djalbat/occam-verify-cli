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
var _term = /*#__PURE__*/ _interop_require_default(require("../substitution/term"));
var _frame = /*#__PURE__*/ _interop_require_default(require("../substitution/frame"));
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
            value: function unify(generalNode, specificNode, substitutions, generalContext, specificContext) {
                var unifiedAtMetaLevel;
                var generalNonTerminalNode = generalNode, specificNonTerminalNode = specificNode, nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);
                unifiedAtMetaLevel = nonTerminalNodeUnified; ///
                return unifiedAtMetaLevel;
            }
        }
    ]);
    return MetaLevelUnifier;
}(_unifier.default);
_define_property(MetaLevelUnifier, "maps", [
    {
        generalNodeQuery: statementNodeQuery,
        specificNodeQuery: statementNodeQuery,
        unify: function(generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext) {
            var statementUnified;
            var matches = generalStatementNode.match(specificStatementNode);
            if (matches) {
                statementUnified = true;
            } else {
                var context, statementNode;
                context = generalContext; ///
                statementNode = generalStatementNode; ///
                var statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
                if (statementMetavariableNode !== null) {
                    var frameSubstitution = _frame.default.fromStatementNode(statementNode, context), termSubstitution = _term.default.fromStatementNode(statementNode, context), substitution = frameSubstitution || termSubstitution;
                    var Statement = _shim.default.Statement, metavariableNode = statementMetavariableNode, metavariable = generalContext.findMetavariableByMetavariableNode(metavariableNode, generalContext, specificContext);
                    context = specificContext; ///
                    statementNode = specificStatementNode; ///
                    var statement = Statement.fromStatementNode(statementNode, context);
                    statementUnified = metavariable.unifyStatement(statement, substitution, substitutions, context);
                } else {
                    statementUnified = unifyChildNodes(generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext);
                }
            }
            return statementUnified;
        }
    },
    {
        generalNodeQuery: frameMetavariableNodeQuery,
        specificNodeQuery: frameNodeQuery,
        unify: function(generalFrameMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) {
            var frameUnified = false;
            var metavariableNode = generalFrameMetavariableNode, metavariablePresent = generalContext.isMetavariablePresentByMetavariableNode(metavariableNode, generalContext, specificContext);
            if (metavariablePresent) {
                var context;
                var Frame = _shim.default.Frame, Metavariable = _shim.default.Metavariable, frameNode = specificFrameNode; ///
                context = generalContext; ///
                var metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
                context = specificContext; ///
                var frame = Frame.fromFrameNode(frameNode, context);
                frameUnified = metavariable.unifyFrame(frame, substitutions, context);
            }
            return frameUnified;
        }
    },
    {
        generalNodeQuery: termVariableNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) {
            var termUnified = false;
            var variableNode = generalTermVariableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variablePresent = generalContext.isVariablePresentByVariableName(variableName);
            if (variablePresent) {
                var context;
                var Term = _shim.default.Term, Variable = _shim.default.Variable, termNode = specificTermNode; ///
                context = generalContext; ///
                var variable = Variable.fromVariableNode(variableNode, context);
                context = specificContext; ///
                var term = Term.fromTermNode(termNode, context);
                termUnified = variable.unifyTerm(term, substitutions, generalContext, specificContext);
            }
            return termUnified;
        }
    }
]);
var metaLevelUnifier = new MetaLevelUnifier();
var _default = metaLevelUnifier;
function unifyChildNodes(generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext) {
    var generalNonTerminalNode = generalStatementNode, specificNonTerminalNode = specificStatementNode, generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(), specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(), generalChildNodes = generalNonTerminalNodeChildNodes, specificChildNodes = specificNonTerminalNodeChildNodes, childNodesVerified = metaLevelUnifier.unifyChildNodes(generalChildNodes, specificChildNodes, substitutions, generalContext, specificContext), statementUnified = childNodesVerified; ///
    return statementUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3Rlcm1cIjtcbmltcG9ydCBGcmFtZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRBdE1ldGFMZXZlbDtcblxuICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUgPSBzcGVjaWZpY05vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWRBdE1ldGFMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxTdGF0ZW1lbnROb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLm1hdGNoKHNwZWNpZmljU3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZTtcblxuICAgICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZVN1YnN0aXR1dGlvbiA9IEZyYW1lU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSAoZnJhbWVTdWJzdGl0dXRpb24gfHwgdGVybVN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBtZXRhdmFyaWFibGUudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZnlDaGlsZE5vZGVzKGdlbmVyYWxTdGF0ZW1lbnROb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBmcmFtZVVuaWZpZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gZ2VuZXJhbENvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgICBjb25zdCB7IEZyYW1lLCBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgZnJhbWVOb2RlID0gc3BlY2lmaWNGcmFtZU5vZGU7IC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgZnJhbWVVbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lVW5pZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdGVybVVuaWZpZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gZ2VuZXJhbENvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlOyAvLy9cblxuICAgICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIGNvbnN0IHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICB0ZXJtVW5pZmllZCA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuXG5mdW5jdGlvbiB1bmlmeUNoaWxkTm9kZXMoZ2VuZXJhbFN0YXRlbWVudE5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXMgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIHNwZWNpZmljQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllZEF0TWV0YUxldmVsIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsU3RhdGVtZW50Tm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFVuaWZpZWQiLCJtYXRjaGVzIiwibWF0Y2giLCJjb250ZXh0Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZVN1YnN0aXR1dGlvbiIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwiVGVybVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsIlN0YXRlbWVudCIsInNoaW0iLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlDaGlsZE5vZGVzIiwiZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVkIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIkZyYW1lIiwiTWV0YXZhcmlhYmxlIiwiZnJhbWVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJmcmFtZSIsImZyb21GcmFtZU5vZGUiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybVVuaWZpZWQiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIlRlcm0iLCJWYXJpYWJsZSIsInRlcm1Ob2RlIiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInVuaWZ5VGVybSIsIm1ldGFMZXZlbFVuaWZpZXIiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZW5lcmFsQ2hpbGROb2RlcyIsInNwZWNpZmljQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMklBOzs7ZUFBQTs7OzJEQXpJaUI7OERBQ0c7MkRBQ1M7NERBQ0M7cUJBRUo7b0JBQ21COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLGlCQUFpQkQsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDLGVBQy9CRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDSSw2QkFBNkJKLElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDSyxpQ0FBaUNMLElBQUFBLGdCQUFTLEVBQUM7QUFFakQsSUFBQSxBQUFNTSxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7aUNBQUFBOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQzdFLElBQUlDO2dCQUVKLElBQU1DLHlCQUF5Qk4sYUFDekJPLDBCQUEwQk4sY0FDMUJPLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDSCx3QkFBd0JDLHlCQUF5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