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
var termNodeQuery = (0, _query.nodeQuery)("/term"), frameNodeQuery = (0, _query.nodeQuery)("/frame"), statementNodeQuery = (0, _query.nodeQuery)("/statement"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!"), assumptionMetavariableNodeQuery = (0, _query.nodeQuery)("/assumption/metavariable!"), frameAssumptionMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/assumption!/metavariable!");
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
        generalNodeQuery: frameAssumptionMetavariableNodeQuery,
        specificNodeQuery: frameNodeQuery,
        unify: function(generalFrameAssumptionMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) {
            var frameUnifies;
            var frameNode = specificFrameNode, metavariableNode = generalFrameAssumptionMetavariableNode, metavariableName = (0, _metavariable.metavariableNameFromMetavariableNode)(metavariableNode);
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
        generalNodeQuery: assumptionMetavariableNodeQuery,
        specificNodeQuery: assumptionMetavariableNodeQuery,
        unify: function(generalAssumptionMetavariableNode, specificAssumptionMetavariableNode, substitutions, generalContext, specificContext) {
            var referenceUnifies;
            var Reference = _ontology.default.Reference;
            var context, metavariableNode;
            context = generalContext; ///
            metavariableNode = generalAssumptionMetavariableNode; ///
            var metavariableName = (0, _metavariable.metavariableNameFromMetavariableNode)(metavariableNode), metavariable = context.findMetavariableByMetavariableName(metavariableName);
            context = specificContext; ///
            metavariableNode = specificAssumptionMetavariableNode; ///
            var reference = Reference.fromMetavariableNode(metavariableNode, context);
            referenceUnifies = metavariable.unifyReference(reference, substitutions, generalContext, specificContext);
            return referenceUnifies;
        }
    }
]);
var metaLevelUnifier = new MetaLevelUnifier();
var _default = metaLevelUnifier;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tZXRhdmFyaWFibGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlSWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUsIHRlcm1WYXJpYWJsZUlkZW50aWZpZXJGcm9tVGVybU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZhcmlhYmxlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybVwiKSxcbiAgICAgIGZyYW1lTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lXCIpLFxuICAgICAgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudFwiKSxcbiAgICAgIHRlcm1WYXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIGFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXNzdW1wdGlvbi9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2ZyYW1lL2Fzc3VtcHRpb24hL21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbFVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0F0TWV0YUxldmVsO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlVW5pZmllcyA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0F0TWV0YUxldmVsID0gbm9uVGVybWluYWxOb2RlVW5pZmllczsgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllc0F0TWV0YUxldmVsO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIHN0YXRlbWVudCxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlOyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uLCBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gVGVybVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IChmcmFtZVN1YnN0aXR1dGlvbiB8fCB0ZXJtU3Vic3RpdHV0aW9uKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZnJhbWVBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IGZyYW1lTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsRnJhbWVBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IGZyYW1lVW5pZmllcztcblxuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgICBmcmFtZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlGcmFtZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lVW5pZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGVybVZhcmlhaWJsZUlkZW50aWZlciA9IHRlcm1WYXJpYWJsZUlkZW50aWZpZXJGcm9tVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodGVybVZhcmlhaWJsZUlkZW50aWZlciksXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybVZhcmlhYmxlKHRlcm1WYXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBhc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHJlZmVyZW5jZVVuaWZpZXM7XG5cbiAgICAgICAgY29uc3QgeyBSZWZlcmVuY2UgfSA9IG9udG9sb2d5O1xuXG4gICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAvLy9cblxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBSZWZlcmVuY2UuZnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgcmVmZXJlbmNlVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgbWV0YUxldmVsVW5pZmllciA9IG5ldyBNZXRhTGV2ZWxVbmlmaWVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1ldGFMZXZlbFVuaWZpZXI7XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZyYW1lTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImZyYW1lQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIk1ldGFMZXZlbFVuaWZpZXIiLCJ1bmlmeSIsImdlbmVyYWxOb25UZXJtaW5hbE5vZGUiLCJzcGVjaWZpY05vblRlcm1pbmFsTm9kZSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZXNBdE1ldGFMZXZlbCIsIm5vblRlcm1pbmFsTm9kZVVuaWZpZXMiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsIlVuaWZpZXIiLCJtYXBzIiwiZ2VuZXJhbE5vZGVRdWVyeSIsInNwZWNpZmljTm9kZVF1ZXJ5IiwiZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY1N0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiY29udGV4dCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZSIsImdldFBhcmVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwiVGVybVN1YnN0aXR1dGlvbiIsIm9udG9sb2d5IiwiRnJhbWVTdWJzdGl0dXRpb24iLCJmcmFtZVN1YnN0aXR1dGlvbiIsImZyb21TdGF0ZW1lbnQiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwidW5pZnlTdGF0ZW1lbnQiLCJnZW5lcmFsRnJhbWVBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVzIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsInVuaWZ5RnJhbWUiLCJnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSIsInNwZWNpZmljVGVybU5vZGUiLCJ0ZXJtVW5pZmllcyIsInRlcm1Ob2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ0ZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidW5pZnlUZXJtIiwidGVybVZhcmlhaWJsZUlkZW50aWZlciIsInRlcm1WYXJpYWJsZUlkZW50aWZpZXJGcm9tVGVybU5vZGUiLCJ0ZXJtVmFyaWFibGUiLCJ0ZXJtVmFyaWFibGVVbmlmaWVzIiwidW5pZnlUZXJtVmFyaWFibGUiLCJnZW5lcmFsQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlVW5pZmllcyIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwidW5pZnlSZWZlcmVuY2UiLCJtZXRhTGV2ZWxVbmlmaWVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpS0E7OztlQUFBOzs7K0RBL0pxQjs4REFDRDtxQkFFTTs0QkFDMkI7d0JBQ2tDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsVUFDMUJDLGlCQUFpQkQsSUFBQUEsZ0JBQVMsRUFBQyxXQUMzQkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDLGVBQy9CRyx3QkFB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