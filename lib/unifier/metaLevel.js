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
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
var _query = require("../utilities/query");
var _metavariable = require("../utilities/metavariable");
var _variable = require("../utilities/variable");
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), frameNodeQuery = (0, _query.nodeQuery)("/frame"), statementNodeQuery = (0, _query.nodeQuery)("/statement"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!"), declarationMetavariableNodeQuery = (0, _query.nodeQuery)("/declaration/metavariable!"), frameDeclarationMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/declaration!/metavariable!");
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
        generalNodeQuery: statementMetavariableNodeQuery,
        specificNodeQuery: statementNodeQuery,
        unify: function(generalStatementMetavariableNode, specificStatementNode, substitutions, generalContext, specificContext) {
            var statementUnifies;
            var context, statement, statementNode;
            context = generalContext; ///
            var metavariableNode = generalStatementMetavariableNode, metavariableName = (0, _metavariable.metavariableNameFromMetavariableNode)(metavariableNode), metavariable = context.findMetavariableByMetavariableName(metavariableName);
            var metavariableNodeParentNode = metavariableNode.getParentNode();
            statementNode = metavariableNodeParentNode; ///
            statement = context.findStatementByStatementNode(statementNode);
            var TermSubstitution = _ontology.default.TermSubstitution, FrameSubstitution = _ontology.default.FrameSubstitution, frameSubstitution = FrameSubstitution.fromStatement(statement, context), termSubstitution = TermSubstitution.fromStatement(statement, context), substitution = frameSubstitution || termSubstitution;
            context = specificContext; ///
            statementNode = specificStatementNode; ///
            statement = context.findStatementByStatementNode(statementNode);
            statementUnifies = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);
            return statementUnifies;
        }
    },
    {
        generalNodeQuery: frameDeclarationMetavariableNodeQuery,
        specificNodeQuery: frameNodeQuery,
        unify: function(generalFrameDeclarationMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) {
            var frameUnifies;
            var frameNode = specificFrameNode, metavariableNode = generalFrameDeclarationMetavariableNode, metavariableName = (0, _metavariable.metavariableNameFromMetavariableNode)(metavariableNode);
            var context;
            context = generalContext; ///
            var metavariable = context.findMetavariableByMetavariableName(metavariableName);
            context = specificContext; ///
            var frame = context.findFrameByFrameNode(frameNode);
            frameUnifies = metavariable.unifyFrame(frame, substitutions, generalContext, specificContext);
            return frameUnifies;
        }
    },
    {
        generalNodeQuery: termVariableNodeQuery,
        specificNodeQuery: termNodeQuery,
        unify: function(generalTermVariableNode, specificTermNode, substitutions, generalContext, specificContext) {
            var termUnifies = false;
            var termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = (0, _variable.variableIdentifierFromVariableNode)(variableNode);
            var context;
            context = generalContext; ///
            var variable = context.findVariableByVariableIdentifier(variableIdentifier);
            context = specificContext; ///
            var term = context.findTermByTermNode(termNode);
            if (term !== null) {
                termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);
            } else {
                var termVariaibleIdentifer = (0, _variable.termVariableIdentifierFromTermNode)(termNode), termVariable = context.findVariableByVariableIdentifier(termVariaibleIdentifer), termVariableUnifies = variable.unifyTermVariable(termVariable, substitutions, generalContext, specificContext);
                if (termVariableUnifies) {
                    termUnifies = true;
                }
            }
            return termUnifies;
        }
    },
    {
        generalNodeQuery: declarationMetavariableNodeQuery,
        specificNodeQuery: declarationMetavariableNodeQuery,
        unify: function(generalDeclarationMetavariableNode, specificDeclarationMetavariableNode, substitutions, generalContext, specificContext) {
            var referenceUnifies;
            var Reference = _ontology.default.Reference;
            var context, metavariableNode;
            context = generalContext; ///
            metavariableNode = generalDeclarationMetavariableNode; ///
            var metavariableName = (0, _metavariable.metavariableNameFromMetavariableNode)(metavariableNode), metavariable = context.findMetavariableByMetavariableName(metavariableName);
            context = specificContext; ///
            metavariableNode = specificDeclarationMetavariableNode; ///
            var reference = Reference.fromMetavariableNode(metavariableNode, context);
            referenceUnifies = metavariable.unifyReference(reference, substitutions, generalContext, specificContext);
            return referenceUnifies;
        }
    }
]);
var metaLevelUnifier = new MetaLevelUnifier();
var _default = metaLevelUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tZXRhdmFyaWFibGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlSWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUsIHRlcm1WYXJpYWJsZUlkZW50aWZpZXJGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhcmlhYmxlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIGRlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBmcmFtZURlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL2RlY2xhcmF0aW9uIS9tZXRhdmFyaWFibGUhXCIpO1xuXG5jbGFzcyBNZXRhTGV2ZWxVbmlmaWVyIGV4dGVuZHMgVW5pZmllciB7XG4gIHVuaWZ5KGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNBdE1ldGFMZXZlbDtcblxuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZVVuaWZpZXMgPSB0aGlzLnVuaWZ5Tm9uVGVybWluYWxOb2RlKGdlbmVyYWxOb25UZXJtaW5hbE5vZGUsIHNwZWNpZmljTm9uVGVybWluYWxOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZXNBdE1ldGFMZXZlbCA9IG5vblRlcm1pbmFsTm9kZVVuaWZpZXM7IC8vL1xuXG4gICAgcmV0dXJuIHVuaWZpZXNBdE1ldGFMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBzdGF0ZW1lbnROb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY1N0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGNvbnN0IHsgVGVybVN1YnN0aXR1dGlvbiwgRnJhbWVTdWJzdGl0dXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBmcmFtZVN1YnN0aXR1dGlvbiA9IEZyYW1lU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSAoZnJhbWVTdWJzdGl0dXRpb24gfHwgdGVybVN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxGcmFtZURlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IGZyYW1lVW5pZmllcztcblxuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBmcmFtZVVuaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdGVybU5vZGUgPSBzcGVjaWZpY1Rlcm1Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZUlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRlcm1WYXJpYWlibGVJZGVudGlmZXIgPSB0ZXJtVmFyaWFibGVJZGVudGlmaWVyRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICB0ZXJtVmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHRlcm1WYXJpYWlibGVJZGVudGlmZXIpLFxuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm1WYXJpYWJsZSh0ZXJtVmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRlcm1WYXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgICAgdGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGRlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGRlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0RlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgcmVmZXJlbmNlVW5pZmllcztcblxuICAgICAgICBjb25zdCB7IFJlZmVyZW5jZSB9ID0gb250b2xvZ3k7XG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0RlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImRlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZnJhbWVEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZXNBdE1ldGFMZXZlbCIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZXMiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY1N0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiY29udGV4dCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwiVGVybVN1YnN0aXR1dGlvbiIsIm9udG9sb2d5IiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnQiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwidW5pZnlTdGF0ZW1lbnQiLCJnZW5lcmFsRnJhbWVEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0ZyYW1lTm9kZSIsImZyYW1lVW5pZmllcyIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybVVuaWZpZXMiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidGVybSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInVuaWZ5VGVybSIsInRlcm1WYXJpYWlibGVJZGVudGlmZXIiLCJ0ZXJtVmFyaWFibGVJZGVudGlmaWVyRnJvbVRlcm1Ob2RlIiwidGVybVZhcmlhYmxlIiwidGVybVZhcmlhYmxlVW5pZmllcyIsInVuaWZ5VGVybVZhcmlhYmxlIiwiZ2VuZXJhbERlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlVW5pZmllcyIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwidW5pZnlSZWZlcmVuY2UiLCJtZXRhTGV2ZWxVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpS0E7OztlQUFBOzs7K0RBL0pxQjs4REFDRDtxQkFFTTs0QkFDMkI7d0JBQ2tDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLGlCQUFpQkQsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkUscUJBQXFCRixJQUFBQSxnQkFB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