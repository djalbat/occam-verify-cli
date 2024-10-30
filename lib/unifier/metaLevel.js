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
                var Metavariable = _shim.default.Metavariable, Statement = _shim.default.Statement, metavariableNode = statementMetavariableNode, statementNode1 = specificStatementNode; ///
                var context;
                context = generalContext; ///
                var frameSubstitution = _frame.default.fromStatementNode(statementNode1, context), termSubstitution = _term.default.fromStatementNode(statementNode1, context), substitution = frameSubstitution || termSubstitution, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
                context = specificContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyXCI7XG5pbXBvcnQgVGVybVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL3Rlcm1cIjtcbmltcG9ydCBGcmFtZVN1YnN0aXR1dGlvbiBmcm9tIFwiLi4vc3Vic3RpdHV0aW9uL2ZyYW1lXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRBdE1ldGFMZXZlbDtcblxuICAgIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsTm9kZSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUgPSBzcGVjaWZpY05vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWRBdE1ldGFMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxTdGF0ZW1lbnROb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlLCBTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSAoZnJhbWVTdWJzdGl0dXRpb24gfHwgdGVybVN1YnN0aXR1dGlvbiksXG4gICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZnlDaGlsZE5vZGVzKGdlbmVyYWxTdGF0ZW1lbnROb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IGZyYW1lVW5pZmllZDtcblxuICAgICAgICBjb25zdCB7IEZyYW1lLCBNZXRhdmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBmcmFtZVVuaWZpZWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHRlcm1VbmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1VbmlmaWVkID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuXG5mdW5jdGlvbiB1bmlmeUNoaWxkTm9kZXMoZ2VuZXJhbFN0YXRlbWVudE5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXMgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIHNwZWNpZmljQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gY2hpbGROb2Rlc1ZlcmlmaWVkOyAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImdlbmVyYWxOb2RlIiwic3BlY2lmaWNOb2RlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllZEF0TWV0YUxldmVsIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwibm9uVGVybWluYWxOb2RlVW5pZmllZCIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsU3RhdGVtZW50Tm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsIk1ldGF2YXJpYWJsZSIsInNoaW0iLCJTdGF0ZW1lbnQiLCJtZXRhdmFyaWFibGVOb2RlIiwiY29udGV4dCIsImZyYW1lU3Vic3RpdHV0aW9uIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb24iLCJUZXJtU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5Q2hpbGROb2RlcyIsImdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0ZyYW1lTm9kZSIsImZyYW1lVW5pZmllZCIsIkZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmcm9tRnJhbWVOb2RlIiwidW5pZnlGcmFtZSIsImdlbmVyYWxUZXJtVmFyaWFibGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInRlcm1VbmlmaWVkIiwiVGVybSIsIlZhcmlhYmxlIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidW5pZnlUZXJtIiwibWV0YUxldmVsVW5pZmllciIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdlbmVyYWxDaGlsZE5vZGVzIiwic3BlY2lmaWNDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3SEE7OztlQUFBOzs7MkRBdEhpQjs4REFDRzsyREFDUzs0REFDQztxQkFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxpQkFBaUJELElBQUFBLGdCQUFTLEVBQUMsV0FDM0JFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQyxlQUMvQkcsd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0ksNkJBQTZCSixJQUFBQSxnQkFBUyxFQUFDLHlCQUN2Q0ssaUNBQWlDTCxJQUFBQSxnQkFBUyxFQUFDO0FBRWpELElBQUEsQUFBTU0saUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dCQUM3RSxJQUFJQztnQkFFSixJQUFNQyx5QkFBeUJOLGFBQ3pCTywwQkFBMEJOLGNBQzFCTyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0gsd0JBQXdCQyx5QkFBeUJMLGVBQWVDLGdCQUFnQkM7Z0JBRXpJQyxxQkFBcUJHLHdCQUF3QixHQUFHO2dC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