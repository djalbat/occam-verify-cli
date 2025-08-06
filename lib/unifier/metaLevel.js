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
var termNodeQuery = (0, _query.nodeQuery)("/term"), frameNodeQuery = (0, _query.nodeQuery)("/frame"), statementNodeQuery = (0, _query.nodeQuery)("/statement"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), frameMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/metavariable!"), declarationMetavariableNodeQuery = (0, _query.nodeQuery)("/declaration/metavariable!");
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
            var statementNode = generalStatementNode, singularMetavariableNode = statementNode.getSingularMetavariableNode();
            if (singularMetavariableNode !== null) {
                var Metavariable = _dom.default.Metavariable, Statement = _dom.default.Statement; ///
                var context, statementNode1;
                context = generalContext; ///
                statementNode1 = generalStatementNode; ///
                var TermSubstitution = _dom.default.TermSubstitution, FrameSubstitution = _dom.default.FrameSubstitution, frameSubstitution = FrameSubstitution.fromStatementNode(statementNode1, context), termSubstitution = TermSubstitution.fromStatementNode(statementNode1, context), metavariable = Metavariable.fromStatementNode(statementNode1, context), substitution = frameSubstitution || termSubstitution;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBkZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZWRBdE1ldGFMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZWRBdE1ldGFMZXZlbCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZWRBdE1ldGFMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxTdGF0ZW1lbnROb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgICAgICBpZiAoc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgeyBNZXRhdmFyaWFibGUsIFN0YXRlbWVudCB9ID0gZG9tOyAvLy9cblxuICAgICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlO1xuXG4gICAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24sIEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKGZyYW1lU3Vic3RpdHV0aW9uIHx8IHRlcm1TdWJzdGl0dXRpb24pO1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzVW5pZmllZCA9IHVuaWZ5Q2hpbGROb2RlcyhnZW5lcmFsU3RhdGVtZW50Tm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBjaGlsZE5vZGVzVW5pZmllZDsgLy8vXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGRlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGRlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0RlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgcmVmZXJlbmNlVW5pZmllZDtcblxuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZSwgTWV0YXZhcmlhYmxlIH0gPSBkb207XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0RlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZWQgPSBtZXRhdmFyaWFibGUudW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgZnJhbWVVbmlmaWVkO1xuXG4gICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllZCA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gZnJhbWVVbmlmaWVkO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllZDtcblxuICAgICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1VbmlmaWVkID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllZDtcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuXG5mdW5jdGlvbiB1bmlmeUNoaWxkTm9kZXMoZ2VuZXJhbFN0YXRlbWVudE5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXMgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIHNwZWNpZmljQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICBjaGlsZE5vZGVzVW5pZmllZCA9IGNoaWxkTm9kZXNWZXJpZmllZDsgLy8vXG5cbiAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVkQXRNZXRhTGV2ZWwiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVkIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsImdlbmVyYWxTdGF0ZW1lbnROb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudE5vZGUiLCJzaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJnZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUiLCJNZXRhdmFyaWFibGUiLCJkb20iLCJTdGF0ZW1lbnQiLCJjb250ZXh0IiwiVGVybVN1YnN0aXR1dGlvbiIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb24iLCJtZXRhdmFyaWFibGUiLCJzdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudCIsImNoaWxkTm9kZXNVbmlmaWVkIiwidW5pZnlDaGlsZE5vZGVzIiwiZ2VuZXJhbERlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlVW5pZmllZCIsIlJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZSIsInVuaWZ5UmVmZXJlbmNlIiwiZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVkIiwiRnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZyb21GcmFtZU5vZGUiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybVVuaWZpZWQiLCJUZXJtIiwiVmFyaWFibGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInRlcm0iLCJmcm9tVGVybU5vZGUiLCJ1bmlmeVRlcm0iLCJtZXRhTGV2ZWxVbmlmaWVyIiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2VuZXJhbENoaWxkTm9kZXMiLCJzcGVjaWZpY0NoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXNKQTs7O2VBQUE7OzswREFwSmdCOzhEQUNJO3FCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLGlCQUFpQkQsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDLGVBQy9CRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUMsb0JBQ2xDSSw2QkFBNkJKLElBQUFBLGdCQUFTLEVBQUMseUJBQ3ZDSyxtQ0FBbUNMLElBQUFBLGdCQUFTLEVBQUM7QUFFbkQsSUFBQSxBQUFNTSxpQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsc0JBQXNCLEVBQUVDLHVCQUF1QixF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