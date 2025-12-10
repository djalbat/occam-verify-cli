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
var termNodeQuery = (0, _query.nodeQuery)("/term"), frameNodeQuery = (0, _query.nodeQuery)("/frame"), statementNodeQuery = (0, _query.nodeQuery)("/statement"), termVariableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), variableIdentifierNodeQuery = (0, _query.nodeQuery)("/variable/@identifier!"), statementMetavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!"), declarationMetavariableNodeQuery = (0, _query.nodeQuery)("/declaration/metavariable!"), frameDeclarationMetavariableNodeQuery = (0, _query.nodeQuery)("/frame/declaration!/metavariable!");
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
            var termUnifies;
            var termNode = specificTermNode, variableNode = generalTermVariableNode, variableIdentifier = variableIdentifierFromVariableNode(variableNode);
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
function variableIdentifierFromVariableNode(variableNode) {
    var identifierTerminalNode = variableIdentifierNodeQuery(variableNode), identifierTerminalNodeContent = identifierTerminalNode.getContent(), variableIdentifier = identifierTerminalNodeContent; ///
    return variableIdentifier;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmaWVyL21ldGFMZXZlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuaW1wb3J0IFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXJcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm1cIiksXG4gICAgICBmcmFtZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9mcmFtZVwiKSxcbiAgICAgIHN0YXRlbWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnRcIiksXG4gICAgICB0ZXJtVmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICB2YXJpYWJsZUlkZW50aWZpZXJOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGUvQGlkZW50aWZpZXIhXCIpLFxuICAgICAgc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpLFxuICAgICAgZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVjbGFyYXRpb24vbWV0YXZhcmlhYmxlIVwiKSxcbiAgICAgIGZyYW1lRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZnJhbWUvZGVjbGFyYXRpb24hL21ldGF2YXJpYWJsZSFcIik7XG5cbmNsYXNzIE1ldGFMZXZlbFVuaWZpZXIgZXh0ZW5kcyBVbmlmaWVyIHtcbiAgdW5pZnkoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0F0TWV0YUxldmVsO1xuXG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlVW5pZmllcyA9IHRoaXMudW5pZnlOb25UZXJtaW5hbE5vZGUoZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSwgc3BlY2lmaWNOb25UZXJtaW5hbE5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0F0TWV0YUxldmVsID0gbm9uVGVybWluYWxOb2RlVW5pZmllczsgLy8vXG5cbiAgICByZXR1cm4gdW5pZmllc0F0TWV0YUxldmVsO1xuICB9XG5cbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogc3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5LFxuICAgICAgc3BlY2lmaWNOb2RlUXVlcnk6IHN0YXRlbWVudE5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFN0YXRlbWVudE1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljU3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgICAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSwgU3RhdGVtZW50IH0gPSBvbnRvbG9neTsgLy8vXG5cbiAgICAgICAgbGV0IGNvbnRleHQsXG4gICAgICAgICAgICBzdGF0ZW1lbnROb2RlO1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGdlbmVyYWxTdGF0ZW1lbnRNZXRhdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0UGFyZW50Tm9kZSgpO1xuXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUGFyZW50Tm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3QgeyBUZXJtU3Vic3RpdHV0aW9uLCBGcmFtZVN1YnN0aXR1dGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uID0gRnJhbWVTdWJzdGl0dXRpb24uZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBUZXJtU3Vic3RpdHV0aW9uLmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSAoZnJhbWVTdWJzdGl0dXRpb24gfHwgdGVybVN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZTsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGdlbmVyYWxOb2RlUXVlcnk6IGZyYW1lRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZnJhbWVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxGcmFtZURlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNGcmFtZU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IGZyYW1lVW5pZmllcztcblxuICAgICAgICBjb25zdCB7IEZyYW1lLCBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgICBmcmFtZU5vZGUgPSBzcGVjaWZpY0ZyYW1lTm9kZSwgLy8vXG4gICAgICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRnJhbWVEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSBGcmFtZS5mcm9tRnJhbWVOb2RlKGZyYW1lTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgZnJhbWVVbmlmaWVzID0gbWV0YXZhcmlhYmxlLnVuaWZ5RnJhbWUoZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBmcmFtZVVuaWZpZXM7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBnZW5lcmFsTm9kZVF1ZXJ5OiB0ZXJtVmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogdGVybU5vZGVRdWVyeSxcbiAgICAgIHVuaWZ5OiAoZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUsIHNwZWNpZmljVGVybU5vZGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHRlcm1VbmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IHRlcm1Ob2RlID0gc3BlY2lmaWNUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IGdlbmVyYWxUZXJtVmFyaWFibGVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVJZGVudGlmaWVyRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGxldCBjb250ZXh0O1xuXG4gICAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnN0IHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRlcm1VbmlmaWVzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgZ2VuZXJhbE5vZGVRdWVyeTogZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICBzcGVjaWZpY05vZGVRdWVyeTogZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnksXG4gICAgICB1bmlmeTogKGdlbmVyYWxEZWNsYXJhdGlvbk1ldGF2YXJpYWJsZU5vZGUsIHNwZWNpZmljRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCByZWZlcmVuY2VVbmlmaWVzO1xuXG4gICAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlLCBSZWZlcmVuY2UgfSA9IG9udG9sb2d5O1xuXG4gICAgICAgIGxldCBjb250ZXh0LFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZTtcblxuICAgICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBnZW5lcmFsRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpOyAgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSBzcGVjaWZpY0RlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZTsgLy8vXG5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gUmVmZXJlbmNlLmZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJlZmVyZW5jZVVuaWZpZXMgPSBtZXRhdmFyaWFibGUudW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IG1ldGFMZXZlbFVuaWZpZXIgPSBuZXcgTWV0YUxldmVsVW5pZmllcigpO1xuXG5leHBvcnQgZGVmYXVsdCBtZXRhTGV2ZWxVbmlmaWVyO1xuXG5leHBvcnQgZnVuY3Rpb24gdmFyaWFibGVJZGVudGlmaWVyRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgY29uc3QgaWRlbnRpZmllclRlcm1pbmFsTm9kZSA9IHZhcmlhYmxlSWRlbnRpZmllck5vZGVRdWVyeSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICBpZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudCA9IGlkZW50aWZpZXJUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSBpZGVudGlmaWVyVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHZhcmlhYmxlSWRlbnRpZmllcjtcbn1cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZUlkZW50aWZpZXJGcm9tVmFyaWFibGVOb2RlIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImZyYW1lTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZVF1ZXJ5IiwidGVybVZhcmlhYmxlTm9kZVF1ZXJ5IiwidmFyaWFibGVJZGVudGlmaWVyTm9kZVF1ZXJ5Iiwic3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiZGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJmcmFtZURlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZVF1ZXJ5IiwiTWV0YUxldmVsVW5pZmllciIsInVuaWZ5IiwiZ2VuZXJhbE5vblRlcm1pbmFsTm9kZSIsInNwZWNpZmljTm9uVGVybWluYWxOb2RlIiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllc0F0TWV0YUxldmVsIiwibm9uVGVybWluYWxOb2RlVW5pZmllcyIsInVuaWZ5Tm9uVGVybWluYWxOb2RlIiwiVW5pZmllciIsIm1hcHMiLCJnZW5lcmFsTm9kZVF1ZXJ5Iiwic3BlY2lmaWNOb2RlUXVlcnkiLCJnZW5lcmFsU3RhdGVtZW50TWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFVuaWZpZXMiLCJNZXRhdmFyaWFibGUiLCJvbnRvbG9neSIsIlN0YXRlbWVudCIsImNvbnRleHQiLCJzdGF0ZW1lbnROb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZyb21NZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZVBhcmVudE5vZGUiLCJnZXRQYXJlbnROb2RlIiwiVGVybVN1YnN0aXR1dGlvbiIsIkZyYW1lU3Vic3RpdHV0aW9uIiwiZnJhbWVTdWJzdGl0dXRpb24iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudCIsImdlbmVyYWxGcmFtZURlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRnJhbWVOb2RlIiwiZnJhbWVVbmlmaWVzIiwiRnJhbWUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZyb21GcmFtZU5vZGUiLCJ1bmlmeUZyYW1lIiwiZ2VuZXJhbFRlcm1WYXJpYWJsZU5vZGUiLCJzcGVjaWZpY1Rlcm1Ob2RlIiwidGVybVVuaWZpZXMiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ0ZXJtIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidW5pZnlUZXJtIiwiZ2VuZXJhbERlY2xhcmF0aW9uTWV0YXZhcmlhYmxlTm9kZSIsInNwZWNpZmljRGVjbGFyYXRpb25NZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlVW5pZmllcyIsIlJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInVuaWZ5UmVmZXJlbmNlIiwibWV0YUxldmVsVW5pZmllciIsImlkZW50aWZpZXJUZXJtaW5hbE5vZGUi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