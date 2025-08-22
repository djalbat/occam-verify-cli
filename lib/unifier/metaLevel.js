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
            var Reference = _dom.default.Reference, Metavariable = _dom.default.Metavariable;
            var context, metavariableNode;
            context = generalContext; ///
            metavariableNode = generalDeclarationMetavariableNode; ///
            var metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
            context = specificContext; ///
            metavariableNode = specificDeclarationMetavariableNode; ///
            var reference = Reference.fromMetavariableNode(metavariableNode, context);
            referenceUnifies = metavariable.unifyReference(reference, substitutions, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgVW5pZmllciBmcm9tIFwiLi4vdW5pZmllclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBkZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNBdE1ldGFMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZVVuaWZpZXMgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZXNBdE1ldGFMZXZlbCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZXNBdE1ldGFMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxTdGF0ZW1lbnROb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICAgICAgc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTaW5ndWxhck1ldGF2YXJpYWJsZU5vZGUoKTtcblxuICAgICAgICBpZiAoc2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgeyBNZXRhdmFyaWFibGUsIFN0YXRlbWVudCB9ID0gZG9tOyAvLy9cblxuICAgICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlO1xuXG4gICAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24sIEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKGZyYW1lU3Vic3RpdHV0aW9uIHx8IHRlcm1TdWJzdGl0dXRpb24pO1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzVW5pZnkgPSB1bmlmeUNoaWxkTm9kZXMoZ2VuZXJhbFN0YXRlbWVudE5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gY2hpbGROb2Rlc1VuaWZ5OyAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCByZWZlcmVuY2VVbmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IHsgUmVmZXJlbmNlLCBNZXRhdmFyaWFibGUgfSA9IGRvbTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbERlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZnJhbWVNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRnJhbWVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBmcmFtZVVuaWZpZXM7XG5cbiAgICAgICAgY29uc3QgeyBGcmFtZSwgTWV0YXZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZU1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBmcmFtZVVuaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHRlcm1VbmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IHsgVGVybSwgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgICAgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGU7IC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsVW5pZmllciA9IG5ldyBNZXRhTGV2ZWxVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFVuaWZpZXI7XG5cbmZ1bmN0aW9uIHVuaWZ5Q2hpbGROb2RlcyhnZW5lcmFsU3RhdGVtZW50Tm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGNvbnN0IGdlbmVyYWxOb25UZXJtaW5hbE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9uVGVybWluYWxOb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCAvLy9cbiAgICAgICAgZ2VuZXJhbE5vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMgPSBnZW5lcmFsTm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBnZW5lcmFsQ2hpbGROb2RlcyA9IGdlbmVyYWxOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgc3BlY2lmaWNDaGlsZE5vZGVzID0gc3BlY2lmaWNOb25UZXJtaW5hbE5vZGVDaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGROb2Rlc1VuaWZ5ID0gbWV0YUxldmVsVW5pZmllci51bmlmeUNoaWxkTm9kZXMoZ2VuZXJhbENoaWxkTm9kZXMsIHNwZWNpZmljQ2hpbGROb2Rlcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgcmV0dXJuIGNoaWxkTm9kZXNVbmlmeTtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZU1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImRlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllc0F0TWV0YUxldmVsIiwibm9uVGVybWluYWxOb2RlVW5pZmllcyIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsU3RhdGVtZW50Tm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnROb2RlIiwic2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJNZXRhdmFyaWFibGVOb2RlIiwiTWV0YXZhcmlhYmxlIiwiZG9tIiwiU3RhdGVtZW50IiwiY29udGV4dCIsIlRlcm1TdWJzdGl0dXRpb24iLCJGcmFtZVN1YnN0aXR1dGlvbiIsImZyYW1lU3Vic3RpdHV0aW9uIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwibWV0YXZhcmlhYmxlIiwic3Vic3RpdHV0aW9uIiwic3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnQiLCJjaGlsZE5vZGVzVW5pZnkiLCJ1bmlmeUNoaWxkTm9kZXMiLCJnZW5lcmFsRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VVbmlmaWVzIiwiUmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTm9kZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlIiwidW5pZnlSZWZlcmVuY2UiLCJnZW5lcmFsRnJhbWVNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNGcmFtZU5vZGUiLCJmcmFtZVVuaWZpZXMiLCJGcmFtZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZnJvbUZyYW1lTm9kZSIsInVuaWZ5RnJhbWUiLCJnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSIsInNwZWNpZmljVGVybU5vZGUiLCJ0ZXJtVW5pZmllcyIsIlRlcm0iLCJWYXJpYWJsZSIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlIiwidGVybSIsImZyb21UZXJtTm9kZSIsInVuaWZ5VGVybSIsIm1ldGFMZXZlbFVuaWZpZXIiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlQ2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZUNoaWxkTm9kZXMiLCJnZW5lcmFsQ2hpbGROb2RlcyIsInNwZWNpZmljQ2hpbGROb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0pBOzs7ZUFBQTs7OzBEQXBKZ0I7OERBQ0k7cUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsaUJBQWlCRCxJQUFBQSxnQkFBUyxFQUFDLFdBQzNCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUMsZUFDL0JHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbENJLDZCQUE2QkosSUFBQUEsZ0JBQVMsRUFBQyx5QkFDdkNLLG1DQUFtQ0wsSUFBQUEsZ0JBQVMsRUFBQztBQUVuRCxJQUFBLEFBQU1NLGlDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxzQkFBc0IsRUFBRUMsdUJBQXVCLEVBQUVDLGFBQWEsRUFBRUMsY0FBYyxFQUFFQyxlQUFlO2dCQUNuRyxJQUFJQztnQkFFSixJQUFNQyx5QkFBeUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FB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