"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return _default;
    },
    get termVariableIdentifierFromTermNode () {
        return termVariableIdentifierFromTermNode;
    },
    get variableIdentifierFromVariableNode () {
        return variableIdentifierFromVariableNode;
    }
});
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
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
var termNodeQuery = (0, _query.nodeQuery)("/term"), frameNodeQuery = (0, _query.nodeQuery)("/frame"), statementNodeQuery = (0, _query.nodeQuery)("/statement"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), variableIdentifierNodeQuery = (0, _query.nodeQuery)("/variable/@identifier!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!"), termVariableIdentifierNodeQuery = (0, _query.nodeQuery)("/term/variable!/@identifier!"), declarationMetavariableNodeQuery = (0, _query.nodeQuery)("/declaration/metavariable!"), frameDeclarationMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/declaration!/metavariable!");
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
            var Metavariable = _ontology.default.Metavariable, Statement = _ontology.default.Statement; ///
            var context, statementNode;
            context = generalContext; ///
            var metavariableNode = generalStatementMetavariableNode, metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);
            var metavariableNodeParentNode = metavariableNode.getParentNode();
            statementNode = metavariableNodeParentNode; ///
            var TermSubstitution = _ontology.default.TermSubstitution, FrameSubstitution = _ontology.default.FrameSubstitution, frameSubstitution = FrameSubstitution.fromStatementNode(statementNode, context), termSubstitution = TermSubstitution.fromStatementNode(statementNode, context), substitution = frameSubstitution || termSubstitution;
            context = specificContext; ///
            statementNode = specificStatementNode; ///
            var statement = Statement.fromStatementNode(statementNode, context);
            statementUnifies = metavariable.unifyStatement(statement, substitution, substitutions, generalContext, specificContext);
            return statementUnifies;
        }
    },
    {
        generalNodeQuery: frameDeclarationMetavariableNodeQuery,
        specificNodeQuery: frameNodeQuery,
        unify: function(generalFrameDeclarationMetavariableNode, specificFrameNode, substitutions, generalContext, specificContext) {
            var frameUnifies;
            var Frame = _ontology.default.Frame, Metavariable = _ontology.default.Metavariable, frameNode = specificFrameNode, metavariableNode = generalFrameDeclarationMetavariableNode; ///
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
            var termUnifies = false;
            var termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableIdentifierFromVariableNode(variableNode);
            var context;
            context = generalContext; ///
            var variable = context.findVariableByVariableIdentifier(variableIdentifier);
            context = specificContext; ///
            var term = context.findTermByTermNode(termNode);
            if (term !== null) {
                termUnifies = variable.unifyTerm(term, substitutions, generalContext, specificContext);
            } else {
                var termVariaibleIdentifer = termVariableIdentifierFromTermNode(termNode), termVariable = context.findVariableByVariableIdentifier(termVariaibleIdentifer), termVariableUnifies = variable.unifyTermVariable(termVariable, substitutions, generalContext, specificContext);
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
            var Metavariable = _ontology.default.Metavariable, Reference = _ontology.default.Reference;
            var context, metavariableNode;
            context = generalContext; ///
            metavariableNode = generalDeclarationMetavariableNode; ///
            var metavariable = Metavariable.fromMetavariableNode(metavariableNode, context); ///
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
function termVariableIdentifierFromTermNode(TermNode) {
    var termVariableIdentifierTerminalNode = termVariableIdentifierNodeQuery(TermNode), termVariableIdentifierTerminalNodeContent = termVariableIdentifierTerminalNode.getContent(), termVariableIdentifier = termVariableIdentifierTerminalNodeContent; ///
    return termVariableIdentifier;
}
function variableIdentifierFromVariableNode(variableNode) {
    var variableIdentifierTerminalNode = variableIdentifierNodeQuery(variableNode), variableIdentifierTerminalNodeContent = variableIdentifierTerminalNode.getContent(), variableIdentifier = variableIdentifierTerminalNodeContent; ///
    return variableIdentifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIiksXG4gICAgICB0ZXJtVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICB2YXJpYWJsZUlkZW50aWZpZXJOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGUvQGlkZW50aWZpZXIhXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgdGVybVZhcmlhYmxlSWRlbnRpZmllck5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIS9AaWRlbnRpZmllciFcIiksXG4gICAgICBkZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWNsYXJhdGlvbi9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgZnJhbWVEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZS9kZWNsYXJhdGlvbiEvbWV0YXZhcmlhYmxlIVwiKTtcblxuY2xhc3MgTWV0YUxldmVsVW5pZmllciBleHRlbmRzIFVuaWZpZXIge1xuICB1bmlmeShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzQXRNZXRhTGV2ZWw7XG5cbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGVVbmlmaWVzID0gdGhpcy51bmlmeU5vblRlcm1pbmFsTm9kZShnZW5lcmFsTm9uVGVybWluYWxOb2RlLCBzcGVjaWZpY05vblRlcm1pbmFsTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICB1bmlmaWVzQXRNZXRhTGV2ZWwgPSBub25UZXJtaW5hbE5vZGVVbmlmaWVzOyAvLy9cblxuICAgIHJldHVybiB1bmlmaWVzQXRNZXRhTGV2ZWw7XG4gIH1cblxuICBzdGF0aWMgbWFwcyA9IFtcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiBzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogc3RhdGVtZW50Tm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNTdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlLCBTdGF0ZW1lbnQgfSA9IG9udG9sb2d5OyAvLy9cblxuICAgICAgICBsZXQgY29udGV4dCxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGU7XG5cbiAgICAgICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRQYXJlbnROb2RlKCk7XG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVQYXJlbnROb2RlOyAvLy9cblxuICAgICAgICBjb25zdCB7IFRlcm1TdWJzdGl0dXRpb24sIEZyYW1lU3Vic3RpdHV0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgICAgZnJhbWVTdWJzdGl0dXRpb24gPSBGcmFtZVN1YnN0aXR1dGlvbi5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IFRlcm1TdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IChmcmFtZVN1YnN0aXR1dGlvbiB8fCB0ZXJtU3Vic3RpdHV0aW9uKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAvLy9cblxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gc3BlY2lmaWNTdGF0ZW1lbnROb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZnJhbWVEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiBmcmFtZU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbEZyYW1lRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlLCBzcGVjaWZpY0ZyYW1lTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgZnJhbWVVbmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IHsgRnJhbWUsIE1ldGF2YXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIGZyYW1lTm9kZSA9IHNwZWNpZmljRnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxGcmFtZURlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZTsgIC8vL1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IEZyYW1lLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBmcmFtZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlGcmFtZShmcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIGZyYW1lVW5pZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IHRlcm1WYXJpYWJsZU5vZGVRdWVyeSxcbiAgICAgIHNwZWNpZmljTm9kZVF1ZXJ5OiB0ZXJtTm9kZVF1ZXJ5LFxuICAgICAgdW5pZnk6IChnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgc3BlY2lmaWNUZXJtTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgdGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCB0ZXJtTm9kZSA9IHNwZWNpZmljVGVybU5vZGUsIC8vL1xuICAgICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSBnZW5lcmFsVGVybVZhcmlhYmxlTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdGVybVZhcmlhaWJsZUlkZW50aWZlciA9IHRlcm1WYXJpYWJsZUlkZW50aWZpZXJGcm9tVGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1WYXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodGVybVZhcmlhaWJsZUlkZW50aWZlciksXG4gICAgICAgICAgICAgICAgdGVybVZhcmlhYmxlVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybVZhcmlhYmxlKHRlcm1WYXJpYWJsZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGVybVZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCByZWZlcmVuY2VVbmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlLCBSZWZlcmVuY2UgfSA9IG9udG9sb2d5O1xuXG4gICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0RlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuXG5leHBvcnQgZnVuY3Rpb24gdGVybVZhcmlhYmxlSWRlbnRpZmllckZyb21UZXJtTm9kZShUZXJtTm9kZSkge1xuICBjb25zdCB0ZXJtVmFyaWFibGVJZGVudGlmaWVyVGVybWluYWxOb2RlID0gdGVybVZhcmlhYmxlSWRlbnRpZmllck5vZGVRdWVyeShUZXJtTm9kZSksXG4gICAgICAgIHRlcm1WYXJpYWJsZUlkZW50aWZpZXJUZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybVZhcmlhYmxlSWRlbnRpZmllclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHRlcm1WYXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtVmFyaWFibGVJZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHRlcm1WYXJpYWJsZUlkZW50aWZpZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YXJpYWJsZUlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXJUZXJtaW5hbE5vZGUgPSB2YXJpYWJsZUlkZW50aWZpZXJOb2RlUXVlcnkodmFyaWFibGVOb2RlKSxcbiAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudCA9IHZhcmlhYmxlSWRlbnRpZmllclRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlSWRlbnRpZmllclRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB2YXJpYWJsZUlkZW50aWZpZXI7XG59XG4iXSwibmFtZXMiOlsidGVybVZhcmlhYmxlSWRlbnRpZmllckZyb21UZXJtTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllckZyb21WYXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZnJhbWVOb2RlUXVlcnkiLCJzdGF0ZW1lbnROb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZUlkZW50aWZpZXJOb2RlUXVlcnkiLCJzdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJ0ZXJtVmFyaWFibGVJZGVudGlmaWVyTm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZURlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllc0F0TWV0YUxldmVsIiwibm9uVGVybWluYWxOb2RlVW5pZmllcyIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFVuaWZpZXMiLCJNZXRhdmFyaWFibGUiLCJvbnRvbG9neSIsIlN0YXRlbWVudCIsImNvbnRleHQiLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwiVGVybVN1YnN0aXR1dGlvbiIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudCIsImdlbmVyYWxGcmFtZURlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVzIiwiRnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZyb21GcmFtZU5vZGUiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybVVuaWZpZXMiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ0ZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidW5pZnlUZXJtIiwidGVybVZhcmlhaWJsZUlkZW50aWZlciIsInRlcm1WYXJpYWJsZSIsInRlcm1WYXJpYWJsZVVuaWZpZXMiLCJ1bmlmeVRlcm1WYXJpYWJsZSIsImdlbmVyYWxEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY0RlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVVuaWZpZXMiLCJSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJ1bmlmeVJlZmVyZW5jZSIsIm1ldGFMZXZlbFVuaWZpZXIiLCJUZXJtTm9kZSIsInRlcm1WYXJpYWJsZUlkZW50aWZpZXJUZXJtaW5hbE5vZGUiLCJ0ZXJtVmFyaWFibGVJZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ0ZXJtVmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyVGVybWluYWxOb2RlIiwidmFyaWFibGVJZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBOEpBO2VBQUE7O1FBRWdCQTtlQUFBQTs7UUFRQUM7ZUFBQUE7OzsrREF0S0s7OERBQ0Q7cUJBRU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxVQUMxQkMsaUJBQWlCRCxJQUFBQSxnQkFBUyxFQUFDLFdBQzNCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUMsZUFDL0JHLHdCQUF3QkgsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDbENJLDhCQUE4QkosSUFBQUEsZ0JBQVMsRUFBQywyQkFDeENLLGlDQUFpQ0wsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDM0NNLGtDQUFrQ04sSUFBQUEsZ0JBQVMsRUFBQyxpQ0FDNUNPLG1DQUFtQ1AsSUFBQUEsZ0JBQVMsRUFBQywrQkFDN0NRLHdDQUF3Q1IsSUFBQUEsZ0JBQVMsRUFBQztBQUV4RCxJQUFBLEFBQU1TLGlDQUFOO2NBQU1B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