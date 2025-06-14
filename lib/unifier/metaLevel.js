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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), frameNodeQuery = (0, _query.nodeQuery)("/frame"), statementNodeQuery = (0, _query.nodeQuery)("/statement"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!"), declarationMetavariableNodeQuery = (0, _query.nodeQuery)("/declaration/metavariable!");
var MetaLevelUnifier = /*#__PURE__*/ function(Unifier) {
    _inherits(MetaLevelUnifier, Unifier);
    function MetaLevelUnifier() {
        _class_call_check(this, MetaLevelUnifier);
        return _call_super(this, MetaLevelUnifier, arguments);
    }
    _create_class(MetaLevelUnifier, [
        {
            key: "unify",
            value: function unify(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext) {
                var unifiedAtMetaLevel;
                var nonTerminalNodeUnified = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);
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
                var Metavariable = _dom.default.Metavariable, Statement = _dom.default.Statement; ///
                var context, statementNode1;
                context = generalContext; ///
                statementNode1 = generalStatementNode; ///
                var frameSubstitution = _frame.default.fromStatementNode(statementNode1, context), termSubstitution = _term.default.fromStatementNode(statementNode1, context), metavariable = Metavariable.fromStatementNode(statementNode1, context), substitution = frameSubstitution || termSubstitution;
                context = specificContext; ///
                statementNode1 = specificStatementNode; ///
                var statement = Statement.fromStatementNode(statementNode1, context);
                statementUnified = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);
            } else {
                var childNodesUnified = unifyChildNodes(generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext);
                statementUnified = childNodesUnified; ///
            }
            return statementUnified;
        }
    },
    {
        generalNodeQuery: declarationMetavariableNodeQuery,
        specificNodeQuery: declarationMetavariableNodeQuery,
        unify: function(generalDeclarationMetavariableNode, specificDeclarationMetavariableNode, substitutions, generalContext, specificContext) {
            var referenceUnified;
            var Reference = _dom.default.Reference, Metavariable = _dom.default.Metavariable;
            var context, metavariableNode;
            context = generalContext; ///
            metavariableNode = generalDeclarationMetavariableNode; ///
            var metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
            context = specificContext; ///
            metavariableNode = specificDeclarationMetavariableNode; ///
            var reference = Reference.fromMetavariableNode(metavariableNode, context);
            referenceUnified = metavariable.unifyReference(reference, substitutions, generalContext, specificContext);
            return referenceUnified;
        }
    },
    {
        generalNodeQuery: frameMetavariableNodeQuery,
        specificNodeQuery: frameNodeQuery,
        unify: function(generalFrameMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) {
            var frameUnified;
            var Frame = _dom.default.Frame, Metavariable = _dom.default.Metavariable, frameNode = specificFrameNode, metavariableNode = generalFrameMetavariableNode; ///
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
            var Term = _dom.default.Term, Variable = _dom.default.Variable, termNode = specificTermNode, variableNode = generalTermVariableNode; ///
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
    var generalNonTerminalNode = generalStatementNode, specificNonTerminalNode = specificStatementNode, generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(), specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(), generalChildNodes = generalNonTerminalNodeChildNodes, specificChildNodes = specificNonTerminalNodeChildNodes, childNodesVerified = metaLevelUnifier.unifyChildNodes(generalChildNodes, specificChildNodes, substitutions, generalContext, specificContext), childNodesUnified = childNodesVerified; ///
    return childNodesUnified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuaW1wb3J0IFRlcm1TdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi90ZXJtXCI7XG5pbXBvcnQgRnJhbWVTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvbi9mcmFtZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBkZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRBdE1ldGFMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWRBdE1ldGFMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxTdGF0ZW1lbnROb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSA9IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlLCBTdGF0ZW1lbnQgfSA9IGRvbTsgLy8vXG5cbiAgICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RhdGVtZW50Tm9kZTtcblxuICAgICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgICAgICAgY29uc3QgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKGZyYW1lU3Vic3RpdHV0aW9uIHx8IHRlcm1TdWJzdGl0dXRpb24pO1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzVW5pZmllZCA9IHVuaWZ5Q2hpbGROb2RlcyhnZW5lcmFsU3RhdGVtZW50Tm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBjaGlsZE5vZGVzVW5pZmllZDsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGRlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGRlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0RlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgcmVmZXJlbmNlVW5pZmllZDtcblxuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZSwgTWV0YXZhcmlhYmxlIH0gPSBkb207XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0RlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZWQgPSBtZXRhdmFyaWFibGUudW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgZnJhbWVVbmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllZCA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gZnJhbWVVbmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZDtcblxuICAgICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1VbmlmaWVkID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuXG5mdW5jdGlvbiB1bmlmeUNoaWxkTm9kZXMoZ2VuZXJhbFN0YXRlbWVudE5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXMgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIHNwZWNpZmljQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVkQXRNZXRhTGV2ZWwiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsImdlbmVyYWxTdGF0ZW1lbnROb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwiTWV0YXZhcmlhYmxlIiwiZG9tIiwiU3RhdGVtZW50IiwiY29udGV4dCIsImZyYW1lU3Vic3RpdHV0aW9uIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb24iLCJUZXJtU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwic3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJjaGlsZE5vZGVzVW5pZmllZCIsInVuaWZ5Q2hpbGROb2RlcyIsImdlbmVyYWxEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0RlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVVuaWZpZWQiLCJSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOb2RlIiwiZnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2UiLCJ1bmlmeVJlZmVyZW5jZSIsImdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0ZyYW1lTm9kZSIsImZyYW1lVW5pZmllZCIsIkZyYW1lIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmcm9tRnJhbWVOb2RlIiwidW5pZnlGcmFtZSIsImdlbmVyYWxUZXJtVmFyaWFibGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInRlcm1VbmlmaWVkIiwiVGVybSIsIlZhcmlhYmxlIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidW5pZnlUZXJtIiwibWV0YUxldmVsVW5pZmllciIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdlbmVyYWxDaGlsZE5vZGVzIiwic3BlY2lmaWNDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3SkE7OztlQUFBOzs7MERBdEpnQjs4REFDSTsyREFDUzs0REFDQztxQkFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxpQkFBaUJELElBQUFBLGdCQUFTLEVBQUMsV0FDM0JFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQyxlQUMvQkcsd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0ksNkJBQTZCSixJQUFBQSxnQkFBUyxFQUFDLHlC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