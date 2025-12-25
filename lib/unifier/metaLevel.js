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
var _unifier = /*#__PURE__*/ _interop_require_default(require("../unifier"));
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
var _query = require("../utilities/query");
var _metavariable = require("../utilities/metavariable");
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
            var termUnifies;
            var termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableNode.getVariableIdentifier();
            var context;
            context = generalContext; ///
            var variable = context.findVariableByVariableIdentifier(variableIdentifier);
            context = specificContext; ///
            var term = context.findTermByTermNode(termNode);
            termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9tZXRhdmFyaWFibGVcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtXCIpLFxuICAgICAgZnJhbWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWVcIiksXG4gICAgICBzdGF0ZW1lbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50XCIpLFxuICAgICAgdGVybVZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hc3N1bXB0aW9uL21ldGF2YXJpYWJsZSFcIiksXG4gICAgICBmcmFtZUFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvYXNzdW1wdGlvbiEvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzQXRNZXRhTGV2ZWw7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVVbmlmaWVzID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICB1bmlmaWVzQXRNZXRhTGV2ZWwgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVzOyAvLy9cblxuICAgIHJldHVybiB1bmlmaWVzQXRNZXRhTGV2ZWw7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgICAgc3RhdGVtZW50Tm9kZTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlLmdldFBhcmVudE5vZGUoKTtcblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGU7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24sIEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gKGZyYW1lU3Vic3RpdHV0aW9uIHx8IHRlcm1TdWJzdGl0dXRpb24pO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7IC8vL1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBzcGVjaWZpY1N0YXRlbWVudE5vZGU7ICAvLy9cblxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBmcmFtZUFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxGcmFtZUFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgZnJhbWVVbmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZUFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgbGV0IGNvbnRleHQ7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICAgIGZyYW1lVW5pZmllcyA9IG1ldGF2YXJpYWJsZS51bmlmeUZyYW1lKGZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gZnJhbWVVbmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogdGVybVZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHRlcm1Ob2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCBzcGVjaWZpY1Rlcm1Ob2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCB0ZXJtVW5pZmllcztcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlTm9kZS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0ZXJtVW5pZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogYXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0Fzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCByZWZlcmVuY2VVbmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IHsgUmVmZXJlbmNlIH0gPSBvbnRvbG9neTtcblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gc3BlY2lmaWNBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJmcmFtZU5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGVRdWVyeSIsInRlcm1WYXJpYWJsZU5vZGVRdWVyeSIsInN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsImFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZUFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJNZXRhTGV2ZWxVbmlmaWVyIiwidW5pZnkiLCJnZW5lcmFsTm9uVGVybWluYWxOb2RlIiwic3BlY2lmaWNOb25UZXJtaW5hbE5vZGUiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVzQXRNZXRhTGV2ZWwiLCJub25UZXJtaW5hbE5vZGVVbmlmaWVzIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJVbmlmaWVyIiwibWFwcyIsImdlbmVyYWxOb2RlUXVlcnkiLCJzcGVjaWZpY05vZGVRdWVyeSIsImdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50VW5pZmllcyIsImNvbnRleHQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lRnJvbU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJvbnRvbG9neSIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50IiwidGVybVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInVuaWZ5U3RhdGVtZW50IiwiZ2VuZXJhbEZyYW1lQXNzdW1wdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0ZyYW1lTm9kZSIsImZyYW1lVW5pZmllcyIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybVVuaWZpZXMiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ0ZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidW5pZnlUZXJtIiwiZ2VuZXJhbEFzc3VtcHRpb25NZXRhdmFyaWFibGVOb2RlIiwic3BlY2lmaWNBc3N1bXB0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJmcm9tTWV0YXZhcmlhYmxlTm9kZSIsInVuaWZ5UmVmZXJlbmNlIiwibWV0YUxldmVsVW5pZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0pBOzs7ZUFBQTs7OzhEQXBKb0I7K0RBQ0M7cUJBRUs7NEJBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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