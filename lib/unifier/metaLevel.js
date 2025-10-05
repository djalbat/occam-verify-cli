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
                var unifiesAtMetaLevel;
                var nonTerminalNodeUnifies = this.unifyNonTerminalNode(generalNonTerminalNode, specificNonTerminalNode, substitutions, generalContext, specificContext);
                unifiesAtMetaLevel = nonTerminalNodeUnifies; ///
                return unifiesAtMetaLevel;
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
            var statementUnifies;
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
                statementUnifies = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);
            } else {
                var childNodesUnify = unifyChildNodes(generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext);
                statementUnifies = childNodesUnify; ///
            }
            return statementUnifies;
        }
    },
    {
        generalNodeQuery: declarationMetavariableNodeQuery,
        specificNodeQuery: declarationMetavariableNodeQuery,
        unify: function(generalDeclarationMetavariableNode, specificDeclarationMetavariableNode, substitutions, generalContext, specificContext) {
            var referenceUnifies;
            var Frame = _dom.default.Frame, Metavariable = _dom.default.Metavariable;
            var context, metavariableNode;
            context = generalContext; ///
            metavariableNode = generalDeclarationMetavariableNode; ///
            var metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
            context = specificContext; ///
            metavariableNode = specificDeclarationMetavariableNode; ///
            var frame = Frame.fromMetavariableNode(metavariableNode, context);
            referenceUnifies = metavariable.unifyFrame(frame, substitutions, generalContext, specificContext);
            return referenceUnifies;
        }
    },
    {
        generalNodeQuery: frameMetavariableNodeQuery,
        specificNodeQuery: frameNodeQuery,
        unify: function(generalFrameMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) {
            var frameUnifies;
            var Frame = _dom.default.Frame, Metavariable = _dom.default.Metavariable, frameNode = specificFrameNode, metavariableNode = generalFrameMetavariableNode; ///
            var context;
            context = generalContext; ///
            var metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
            context = specificContext; ///
            var frame = Frame.fromFrameNode(frameNode, context);
            frameUnifies = metavariable.unifyFrame(frame, substitutions, generalContext, specificContext);
            return frameUnifies;
        }
    },
    {
        generalNodeQuery: termVariableNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) {
            var termUnifies;
            var Term = _dom.default.Term, Variable = _dom.default.Variable, termNode = specificTermNode, variableNode = generalTermVariableNode; ///
            var context;
            context = generalContext; ///
            var variable = Variable.fromVariableNode(variableNode, context);
            context = specificContext; ///
            var term = Term.fromTermNode(termNode, context);
            termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);
            return termUnifies;
        }
    }
]);
var metaLevelUnifier = new MetaLevelUnifier();
var _default = metaLevelUnifier;
function unifyChildNodes(generalStatementNode, specificStatementNode, substitutions, generalContext, specificContext) {
    var generalNonTerminalNode = generalStatementNode, specificNonTerminalNode = specificStatementNode, generalNonTerminalNodeChildNodes = generalNonTerminalNode.getChildNodes(), specificNonTerminalNodeChildNodes = specificNonTerminalNode.getChildNodes(), generalChildNodes = generalNonTerminalNodeChildNodes, specificChildNodes = specificNonTerminalNodeChildNodes, childNodesUnify = metaLevelUnifier.unifyChildNodes(generalChildNodes, specificChildNodes, substitutions, generalContext, specificContext);
    return childNodesUnify;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBkZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNBdE1ldGFMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZVVuaWZpZXMgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZXNBdE1ldGFMZXZlbCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZXNBdE1ldGFMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxTdGF0ZW1lbnROb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgICAgICBpZiAoc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgeyBNZXRhdmFyaWFibGUsIFN0YXRlbWVudCB9ID0gZG9tOyAvLy9cblxuICAgICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlO1xuXG4gICAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24sIEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKGZyYW1lU3Vic3RpdHV0aW9uIHx8IHRlcm1TdWJzdGl0dXRpb24pO1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzVW5pZnkgPSB1bmlmeUNoaWxkTm9kZXMoZ2VuZXJhbFN0YXRlbWVudE5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gY2hpbGROb2Rlc1VuaWZ5OyAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCByZWZlcmVuY2VVbmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGF2YXJpYWJsZSB9ID0gZG9tO1xuXG4gICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgZnJhbWVVbmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGF2YXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGZyYW1lID0gRnJhbWUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gZnJhbWVVbmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllcztcblxuICAgICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuXG5mdW5jdGlvbiB1bmlmeUNoaWxkTm9kZXMoZ2VuZXJhbFN0YXRlbWVudE5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCBnZW5lcmFsTm9uVGVybWluYWxOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE5vZGUsIC8vL1xuICAgICAgICBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gZ2VuZXJhbE5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgZ2VuZXJhbENoaWxkTm9kZXMgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIHNwZWNpZmljQ2hpbGROb2RlcyA9IHNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcywgLy8vXG4gICAgICAgIGNoaWxkTm9kZXNVbmlmeSA9IG1ldGFMZXZlbFVuaWZpZXIudW5pZnlDaGlsZE5vZGVzKGdlbmVyYWxDaGlsZE5vZGVzLCBzcGVjaWZpY0NoaWxkTm9kZXMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIHJldHVybiBjaGlsZE5vZGVzVW5pZnk7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZyYW1lTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJkZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZXNBdE1ldGFMZXZlbCIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZXMiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbFN0YXRlbWVudE5vZGUiLCJzcGVjaWZpY1N0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50Tm9kZSIsInNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsImdldFNpbmd1bGFyTWV0YXZhcmlhYmxlTm9kZSIsIk1ldGF2YXJpYWJsZSIsImRvbSIsIlN0YXRlbWVudCIsImNvbnRleHQiLCJUZXJtU3Vic3RpdHV0aW9uIiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbiIsIm1ldGF2YXJpYWJsZSIsInN1YnN0aXR1dGlvbiIsInN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50IiwiY2hpbGROb2Rlc1VuaWZ5IiwidW5pZnlDaGlsZE5vZGVzIiwiZ2VuZXJhbERlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlVW5pZmllcyIsIkZyYW1lIiwibWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwiZnJhbWUiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbEZyYW1lTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVzIiwiZnJhbWVOb2RlIiwiZnJvbUZyYW1lTm9kZSIsImdlbmVyYWxUZXJtVmFyaWFibGVOb2RlIiwic3BlY2lmaWNUZXJtTm9kZSIsInRlcm1VbmlmaWVzIiwiVGVybSIsIlZhcmlhYmxlIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGUiLCJ0ZXJtIiwiZnJvbVRlcm1Ob2RlIiwidW5pZnlUZXJtIiwibWV0YUxldmVsVW5pZmllciIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdlbmVyYWxDaGlsZE5vZGVzIiwic3BlY2lmaWNDaGlsZE5vZGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzSkE7OztlQUFBOzs7MERBcEpnQjs4REFDSTtxQkFFTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLFVBQzFCQyxpQkFBaUJELElBQUFBLGdCQUFTLEVBQUMsV0FDM0JFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQyxlQUMvQkcsd0JBQXdCSCxJQUFBQSxnQkFBUyxFQUFDLG9CQUNsQ0ksNkJBQTZCSixJQUFBQSxnQkFBUyxFQUFDLHlCQUN2Q0ssbUNBQW1DTCxJQUFBQSxnQkFBUyxFQUFDO0FBRW5ELElBQUEsQUFBTU0saUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLHNCQUFzQixFQUFFQyx1QkFBdUIsRUFBRUMsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ25HLElBQUlDO2dCQUVKLElBQU1DLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDUCx3QkFBd0JDLHlCQUF5QkMsZUFBZUMsZ0JBQWdCQztnQkFFeklDLHFCQUFxQkMsd0JBQXdCLEdBQUc7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