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
            var statementNode = generalStatementNode, statementMetavariableNode = statementMetavariableNodeQuery(statementNode);
            if (statementMetavariableNode !== null) {
                var Metavariable = _shim.default.Metavariable, Statement = _shim.default.Statement; ///
                var context, statementNode1;
                context = generalContext; ///
                statementNode1 = generalStatementNode; ///
                var frameSubstitution = _frame.default.fromStatementNode(statementNode1, context), termSubstitution = _term.default.fromStatementNode(statementNode1, context), metavariable = Metavariable.fromStatementNode(statementNode1, context), substitution = frameSubstitution || termSubstitution;
                context = specificContext; ///
                statementNode1 = specificStatementNode; ///
                var statement = Statement.fromStatementNode(statementNode1, context);
                statementUnified = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);
            } else {
                statementUnified = unifyChildNodes(generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext);
            }
            return statementUnified;
        }
    },
    {
        generalNodeQuery: frameMetavariableNodeQuery,
        specificNodeQuery: frameNodeQuery,
        unify: function(generalFrameMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) {
            var frameUnified;
            var Frame = _shim.default.Frame, Metavariable = _shim.default.Metavariable, frameNode = specificFrameNode, metavariableNode = generalFrameMetavariableNode; ///
            var context;
            context = generalContext; ///
            var metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
            context = specificContext; ///
            var frame = Frame.fromFrameNode(frameNode, context);
            frameUnified = metavariable.unifyFrame(frame, substitutions, generalContext, specificContext);
            return frameUnified;
        }
    },
    {
        generalNodeQuery: termVariableNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) {
            var termUnified;
            var Term = _shim.default.Term, Variable = _shim.default.Variable, termNode = specificTermNode, variableNode = generalTermVariableNode; ///
            var context;
            context = generalContext; ///
            var variable = Variable.fromVariableNode(variableNode, context);
            context = specificContext; ///
            var term = Term.fromTermNode(termNode, context);
            termUnified = variable.unifyTerm(term, substitutions, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3Rlcm1cIjtcbmltcG9ydCBGcmFtZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRBdE1ldGFMZXZlbDtcblxuICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUgPSBzcGVjaWZpY05vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWRBdE1ldGFMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxTdGF0ZW1lbnROb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlLCBTdGF0ZW1lbnQgfSA9IHNoaW07IC8vL1xuXG4gICAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICAgIHN0YXRlbWVudE5vZGU7XG5cbiAgICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgICAgICAgIGNvbnN0IGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IChmcmFtZVN1YnN0aXR1dGlvbiB8fCB0ZXJtU3Vic3RpdHV0aW9uKTtcblxuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IG1ldGF2YXJpYWJsZS51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHVuaWZ5Q2hpbGROb2RlcyhnZW5lcmFsU3RhdGVtZW50Tm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBmcmFtZVVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllZCA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gZnJhbWVVbmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZDtcblxuICAgICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtVW5pZmllZCA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdGVybVVuaWZpZWQ7XG4gICAgICB9XG4gICAgfVxuICBdO1xufVxuXG5jb25zdCBtZXRhTGV2ZWxVbmlmaWVyID0gbmV3IE1ldGFMZXZlbFVuaWZpZXIoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWV0YUxldmVsVW5pZmllcjtcblxuZnVuY3Rpb24gdW5pZnlDaGlsZE5vZGVzKGdlbmVyYWxTdGF0ZW1lbnROb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgY29uc3QgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIGdlbmVyYWxDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBzcGVjaWZpY0NoaWxkTm9kZXMgPSBzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzVmVyaWZpZWQgPSBtZXRhTGV2ZWxVbmlmaWVyLnVuaWZ5Q2hpbGROb2RlcyhnZW5lcmFsQ2hpbGROb2Rlcywgc3BlY2lmaWNDaGlsZE5vZGVzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgc3RhdGVtZW50VW5pZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZyYW1lTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJnZW5lcmFsTm9kZSIsInNwZWNpZmljTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZWRBdE1ldGFMZXZlbCIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbFN0YXRlbWVudE5vZGUiLCJzcGVjaWZpY1N0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJNZXRhdmFyaWFibGUiLCJzaGltIiwiU3RhdGVtZW50IiwiY29udGV4dCIsImZyYW1lU3Vic3RpdHV0aW9uIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb24iLCJUZXJtU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwic3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeUNoaWxkTm9kZXMiLCJnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNGcmFtZU5vZGUiLCJmcmFtZVVuaWZpZWQiLCJGcmFtZSIsImZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsImZyYW1lIiwiZnJvbUZyYW1lTm9kZSIsInVuaWZ5RnJhbWUiLCJnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSIsInNwZWNpZmljVGVybU5vZGUiLCJ0ZXJtVW5pZmllZCIsIlRlcm0iLCJWYXJpYWJsZSIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInVuaWZ5VGVybSIsIm1ldGFMZXZlbFVuaWZpZXIiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZW5lcmFsQ2hpbGROb2RlcyIsInNwZWNpZmljQ2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkhBOzs7ZUFBQTs7OzJEQXpIaUI7OERBQ0c7MkRBQ1M7NERBQ0M7cUJBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsaUJBQWlCRCxJQUFBQSxnQkFBUyxFQUFDLFdBQzNCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUMsZUFDL0JHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbENJLDZCQUE2QkosSUFBQUEsZ0JBQVMsRUFBQyx5QkFDdkNLLGlDQUFpQ0wsSUFBQUEsZ0JBQVMsRUFBQztBQUVqRCxJQUFBLEFBQU1NLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDN0UsSUFBSUM7Z0JBRUosSUFBTUMseUJBQXlCTixhQUN6Qk8sMEJBQTBCTixjQUMxQk8seUJBQXlCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNILHdCQUF3QkMseUJBQXlCTCxlQUFlQyxnQkFBZ0JDO2dCQUV6SUMscUJBQXFCRyx3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