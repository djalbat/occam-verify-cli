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
                    var substitution = _frameForMetavariable.default.fromStatementNode(statementNode, context) || _termForVariable.default.fromStatementNode(statementNode, context) || null;
                    var Statement = _shim.default.Statement, metavariableNode = statementMetavariableNode, metavariable = generalContext.findMetavariableByMetavariableNode(metavariableNode, specificContext);
                    context = specificContext; ///
                    statementNode = specificStatementNode; ///
                    var statement = Statement.fromStatementNode(statementNode, context);
                    statementUnified = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);
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
                frameUnified = metavariable.unifyFrame(frame, substitutions, generalContext, specificContext);
            }
            return frameUnified;
        }
    },
    {
        generalNodeQuery: termVariableNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(termVariableNodeA, termNodeB, substitutions, generalContext, specificContext) {
            var termUnified = false;
            var variableNode = termVariableNodeA, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variablePresent = generalContext.isVariablePresentByVariableName(variableName);
            if (variablePresent) {
                var context;
                var Term = _shim.default.Term, Variable = _shim.default.Variable, termNode = termNodeB; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlXCI7XG5pbXBvcnQgRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi9mcmFtZUZvck1ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbFVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkoZ2VuZXJhbE5vZGUsIHNwZWNpZmljTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkQXRNZXRhTGV2ZWw7XG5cbiAgICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbE5vZGUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3BlY2lmaWNOb2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVVbmlmaWVkID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICB1bmlmaWVkQXRNZXRhTGV2ZWwgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiB1bmlmaWVkQXRNZXRhTGV2ZWw7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsU3RhdGVtZW50Tm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZS5tYXRjaChzcGVjaWZpY1N0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGU7XG5cbiAgICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUgPSBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gRnJhbWVGb3JNZXRhdmFyaWFibGVTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgICAgICAgICAgY29uc3QgeyBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBnZW5lcmFsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5Q2hpbGROb2RlcyhnZW5lcmFsU3RhdGVtZW50Tm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgZnJhbWVVbmlmaWVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGdlbmVyYWxDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlOyAvLy9cblxuICAgICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGZyYW1lVW5pZmllZCA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmcmFtZVVuaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAodGVybVZhcmlhYmxlTm9kZUEsIHRlcm1Ob2RlQiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdGVybVVuaWZpZWQgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSB0ZXJtVmFyaWFibGVOb2RlQSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gZ2VuZXJhbENvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZUI7IC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29uc3QgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHRlcm1VbmlmaWVkID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVkO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsVW5pZmllciA9IG5ldyBNZXRhTGV2ZWxVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFVuaWZpZXI7XG5cbmZ1bmN0aW9uIHVuaWZ5Q2hpbGROb2RlcyhnZW5lcmFsU3RhdGVtZW50Tm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBnZW5lcmFsQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGVzID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gbWV0YUxldmVsVW5pZmllci51bmlmeUNoaWxkTm9kZXMoZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2Rlcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBjaGlsZE5vZGVzVmVyaWZpZWQ7IC8vL1xuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiZ2VuZXJhbE5vZGUiLCJzcGVjaWZpY05vZGUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVkQXRNZXRhTGV2ZWwiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsImdlbmVyYWxTdGF0ZW1lbnROb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VW5pZmllZCIsIm1hdGNoZXMiLCJtYXRjaCIsImNvbnRleHQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsIkZyYW1lRm9yTWV0YXZhcmlhYmxlU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJTdGF0ZW1lbnQiLCJzaGltIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5Q2hpbGROb2RlcyIsImdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0ZyYW1lTm9kZSIsImZyYW1lVW5pZmllZCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJGcmFtZSIsIk1ldGF2YXJpYWJsZSIsImZyYW1lTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJhbWUiLCJmcm9tRnJhbWVOb2RlIiwidW5pZnlGcmFtZSIsInRlcm1WYXJpYWJsZU5vZGVBIiwidGVybU5vZGVCIiwidGVybVVuaWZpZWQiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsIlRlcm0iLCJWYXJpYWJsZSIsInRlcm1Ob2RlIiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInVuaWZ5VGVybSIsIm1ldGFMZXZlbFVuaWZpZXIiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZW5lcmFsQ2hpbGROb2RlcyIsInNwZWNpZmljQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMklBOzs7ZUFBQTs7OzJEQXpJaUI7OERBQ0c7c0VBQ29COzJFQUNLO3FCQUVuQjtvQkFDbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsaUJBQWlCRCxJQUFBQSxnQkFBUyxFQUFDLFdBQzNCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUMsZUFDL0JHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbENJLDZCQUE2QkosSUFBQUEsZ0JBQVMsRUFBQyx5QkFDdkNLLGlDQUFpQ0wsSUFBQUEsZ0JBQVMsRUFBQztBQUVqRCxJQUFBLEFBQU1NLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDN0UsSUFBSUM7Z0JBRUosSUFBTUMseUJBQXlCTixhQUN6Qk8sMEJBQTBCTixjQUMxQk8seUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILHdCQUF3QkMseUJBQXlCTCxlQUFlQyxnQkFBZ0JDO2dCQUV6SUMscUJBQXFCRyx3QkFBd0IsR0FBRztnQkFFaEQsT0FBT0g7WUFDVDs7O1dBWElQO0VBQXlCWSxnQkFBTztBQWFwQyxpQkFiSVosa0JBYUdhLFFBQU87SUFDWjtRQUNFQyxrQkFBa0JsQjtRQUNsQm1CLG1CQUFtQm5CO1FBQ25CSyxPQUFPLFNBQUNlLHNCQUFzQkMsdUJBQXVCYixlQUFlQyxnQkFBZ0JDO1lBQ2xGLElBQUlZO1lBRUosSUFBTUMsVUFBVUgscUJBQXFCSSxLQUFLLENBQUNIO1lBRTNDLElBQUlFLFNBQVM7Z0JBQ1hELG1CQUFtQjtZQUNyQixPQUFPO2dCQUNMLElBQUlHLFNBQ0FDO2dCQUVKRCxVQUFVaEIsZ0JBQWdCLEdBQUc7Z0JBRTdCaUIsZ0JBQWdCTixzQkFBc0IsR0FBRztnQkFFekMsSUFBTU8sNEJBQTRCeEIsK0JBQStCdUI7Z0JBRWpFLElBQUlDLDhCQUE4QixNQUFNO29CQUN0QyxJQUFNQyxlQUFlQyw2QkFBZ0MsQ0FBQ0MsaUJBQWlCLENBQUNKLGVBQWVELFlBQ2hFTSx3QkFBMkIsQ0FBQ0QsaUJBQWlCLENBQUNKLGVBQWVELFlBQzNEO29CQUV6QixJQUFNLEFBQUVPLFlBQWNDLGFBQUksQ0FBbEJELFdBQ0ZFLG1CQUFtQlAsMkJBQ25CUSxlQUFlMUIsZUFBZTJCLGtDQUFrQyxDQUFDRixrQkFBa0J4QjtvQkFFekZlLFVBQVVmLGlCQUFpQixHQUFHO29CQUU5QmdCLGdCQUFnQkwsdUJBQXVCLEdBQUc7b0JBRTFDLElBQU1nQixZQUFZTCxVQUFVRixpQkFBaUIsQ0FBQ0osZUFBZUQ7b0JBRTdESCxtQkFBbUJhLGFBQWFHLGNBQWMsQ0FBQ0QsV0FBV1QsY0FBY3BCLGVBQWVDLGdCQUFnQkM7Z0JBQ3pHLE9BQU87b0JBQ0xZLG1CQUFtQmlCLGdCQUFnQm5CLHNCQUFzQkMsdUJBQXVCYixlQUFlQyxnQkFBZ0JDO2dCQUNqSDtZQUNGO1lBRUEsT0FBT1k7UUFDVDtJQUNGO0lBQ0E7UUFDRUosa0JBQWtCaEI7UUFDbEJpQixtQkFBbUJwQjtRQUNuQk0sT0FBTyxTQUFDbUMsOEJBQThCQyxtQkFBbUJqQyxlQUFlQyxnQkFBZ0JDO1lBQ3RGLElBQUlnQyxlQUFlO1lBRW5CLElBQU1SLG1CQUFtQk0sOEJBQ25CRyxzQkFBc0JsQyxlQUFlbUMsdUNBQXVDLENBQUNWLGtCQUFrQnpCLGdCQUFnQkM7WUFFckgsSUFBSWlDLHFCQUFxQjtnQkFDdkIsSUFBSWxCO2dCQUVKLElBQVFvQixRQUF3QlosYUFBSSxDQUE1QlksT0FBT0MsZUFBaUJiLGFBQUksQ0FBckJhLGNBQ1RDLFlBQVlOLG1CQUFtQixHQUFHO2dCQUV4Q2hCLFVBQVVoQixnQkFBZ0IsR0FBRztnQkFFN0IsSUFBTTBCLGVBQWVXLGFBQWFFLG9CQUFvQixDQUFDZCxrQkFBa0JUO2dCQUV6RUEsVUFBVWYsaUJBQWtCLEdBQUc7Z0JBRS9CLElBQU11QyxRQUFRSixNQUFNSyxhQUFhLENBQUNILFdBQVd0QjtnQkFFN0NpQixlQUFlUCxhQUFhZ0IsVUFBVSxDQUFDRixPQUFPekMsZUFBZUMsZ0JBQWdCQztZQUMvRTtZQUVBLE9BQU9nQztRQUNUO0lBQ0Y7SUFDQTtRQUNFeEIsa0JBQWtCakI7UUFDbEJrQixtQkFBbUJ0QjtRQUNuQlEsT0FBTyxTQUFDK0MsbUJBQW1CQyxXQUFXN0MsZUFBZUMsZ0JBQWdCQztZQUNuRSxJQUFJNEMsY0FBYztZQUVsQixJQUFNQyxlQUFlSCxtQkFDZkksZUFBZUMsSUFBQUEsa0NBQTRCLEVBQUNGLGVBQzVDRyxrQkFBa0JqRCxlQUFla0QsK0JBQStCLENBQUNIO1lBRXZFLElBQUlFLGlCQUFpQjtnQkFDbkIsSUFBSWpDO2dCQUVKLElBQVFtQyxPQUFtQjNCLGFBQUksQ0FBdkIyQixNQUFNQyxXQUFhNUIsYUFBSSxDQUFqQjRCLFVBQ1JDLFdBQVdULFdBQVcsR0FBRztnQkFFL0I1QixVQUFVaEIsZ0JBQWdCLEdBQUc7Z0JBRTdCLElBQU1zRCxXQUFXRixTQUFTRyxnQkFBZ0IsQ0FBQ1QsY0FBYzlCO2dCQUV6REEsVUFBVWYsaUJBQWtCLEdBQUc7Z0JBRS9CLElBQU11RCxPQUFPTCxLQUFLTSxZQUFZLENBQUNKLFVBQVVyQztnQkFFekM2QixjQUFjUyxTQUFTSSxTQUFTLENBQUNGLE1BQU16RCxlQUFlQyxnQkFBZ0JDO1lBQ3hFO1lBRUEsT0FBTzRDO1FBQ1Q7SUFDRjtDQUNEO0FBR0gsSUFBTWMsbUJBQW1CLElBQUloRTtJQUU3QixXQUFlZ0U7QUFFZixTQUFTN0IsZ0JBQWdCbkIsb0JBQW9CLEVBQUVDLHFCQUFxQixFQUFFYixhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtJQUNsSCxJQUFNRSx5QkFBeUJRLHNCQUN6QlAsMEJBQTBCUSx1QkFDMUJnRCxtQ0FBbUN6RCx1QkFBdUIwRCxhQUFhLElBQ3ZFQyxvQ0FBb0MxRCx3QkFBd0J5RCxhQUFhLElBQ3pFRSxvQkFBb0JILGtDQUNwQkkscUJBQXFCRixtQ0FDckJHLHFCQUFxQk4saUJBQWlCN0IsZUFBZSxDQUFDaUMsbUJBQW1CQyxvQkFBb0JqRSxlQUFlQyxnQkFBZ0JDLGtCQUM1SFksbUJBQW1Cb0Qsb0JBQW9CLEdBQUc7SUFFaEQsT0FBT3BEO0FBQ1QifQ==