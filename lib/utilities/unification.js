"use string";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    unifyEquality: function() {
        return unifyEquality;
    },
    unifyLabelWithReference: function() {
        return unifyLabelWithReference;
    },
    unifyMetavariable: function() {
        return unifyMetavariable;
    },
    unifyMetavariableIntrinsically: function() {
        return unifyMetavariableIntrinsically;
    },
    unifyStatement: function() {
        return unifyStatement;
    },
    unifyStatementWithCombinator: function() {
        return unifyStatementWithCombinator;
    },
    unifySubstitution: function() {
        return unifySubstitution;
    },
    unifyTermWithConstructor: function() {
        return unifyTermWithConstructor;
    }
});
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _label = /*#__PURE__*/ _interop_require_default(require("../unifier/label"));
var _equality = /*#__PURE__*/ _interop_require_default(require("../unifier/equality"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../unifier/metaLevel"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../unifier/metavariable"));
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("../unifier/intrinsicLevel"));
var _termWithConstructor = /*#__PURE__*/ _interop_require_default(require("../unifier/termWithConstructor"));
var _statementWithCombinator = /*#__PURE__*/ _interop_require_default(require("../unifier/statementWithCombinator"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unifyEquality(equality, context) {
    var equalityUnified;
    var leftTerm = equality.getLeftTerm(), rightTerm = equality.getRightTerm(), leftTermNode = leftTerm.getNode(), rightTermNode = rightTerm.getNode();
    equalityUnified = _equality.default.unify(leftTermNode, rightTermNode, context);
    return equalityUnified;
}
function unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext) {
    var statementUnified;
    var generalStatementNode = generalStatement.getNode(), specificStatementNode = specificStatement.getNode(), generalStatementTokens = generalStatement.getTokens(), specificStatementTokens = specificStatement.getTokens();
    generalContext = contextFromTokens(generalStatementTokens, generalContext); ///
    specificContext = contextFromTokens(specificStatementTokens, specificContext); ///
    var generalNode = generalStatementNode, specificNode = specificStatementNode, unifiedAtMetaLevel = _metaLevel.default.unify(generalNode, specificNode, substitutions, generalContext, specificContext);
    statementUnified = unifiedAtMetaLevel; ///
    return statementUnified;
}
function unifySubstitution(generalSubstitution, specificSubstitution, substitutions, generalContext, specificContext) {
    var substitutionUnified;
    var generalSubstitutionNode = generalSubstitution.getNode(), specificSubstitutionNode = specificSubstitution.getNode(), generalSubstitutionTokens = generalSubstitution.getTokens(), specificSubstitutionTokens = specificSubstitution.getTokens();
    generalContext = contextFromTokens(generalSubstitutionTokens, generalContext); ///
    specificContext = contextFromTokens(specificSubstitutionTokens, specificContext); ///
    var generalNode = generalSubstitutionNode, specificNode = specificSubstitutionNode, unifiedAtMetaLevel = _metaLevel.default.unify(generalNode, specificNode, substitutions, generalContext, specificContext);
    substitutionUnified = unifiedAtMetaLevel; ///
    return substitutionUnified;
}
function unifyMetavariable(generalMetavariable, specificMetavariable, generalContext, specificContext) {
    var metavariableUnified;
    var generalMetavariableNode = generalMetavariable.getNode(), specificMetavariableNode = specificMetavariable.getNode(), generalMetavariableTokens = generalMetavariable.getTokens(), specificMetavariableTokens = specificMetavariable.getTokens();
    generalContext = contextFromTokens(generalMetavariableTokens, generalContext); ///
    specificContext = contextFromTokens(specificMetavariableTokens, specificContext); ///
    metavariableUnified = _metavariable.default.unify(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext);
    return metavariableUnified;
}
function unifyLabelWithReference(label, reference, substitutions, generalContext, specificContext) {
    var labelUnifiedWithReference;
    var labelMetavariable = label.getMetavariable(), referenceMetavariable = reference.getMetavariable(), labelMetavariableNode = labelMetavariable.getNode(), labelMetavariableTokens = labelMetavariable.getTokens(), referenceMetavariableNode = referenceMetavariable.getNode(), referenceMetavariableTokens = referenceMetavariable.getTokens();
    generalContext = contextFromTokens(labelMetavariableTokens, generalContext); ///
    specificContext = contextFromTokens(referenceMetavariableTokens, specificContext); ///
    var labelUnified = _label.default.unify(labelMetavariableNode, referenceMetavariableNode, substitutions, generalContext, specificContext);
    labelUnifiedWithReference = labelUnified; ///
    return labelUnifiedWithReference;
}
function unifyTermWithConstructor(term, constructor, context) {
    var termUnifiedWithConstructor;
    var termNode = term.getNode(), constructorTerm = constructor.getTerm(), constructorTermNode = constructorTerm.getNode();
    termUnifiedWithConstructor = _termWithConstructor.default.unify(constructorTermNode, termNode, context);
    return termUnifiedWithConstructor;
}
function unifyStatementWithCombinator(statement, combinator, assignments, stated, context) {
    var statementUnifiedWithCombinator;
    var statementNode = statement.getNode(), statementTokens = statement.getTokens(), combinatorStatement = combinator.getStatement(), combinatorStatementNode = combinatorStatement.getNode(), combinatorStatementTokens = combinatorStatement.getTokens();
    var generalContext = context, specificContext = context; ///
    generalContext = contextFromTokens(combinatorStatementTokens, generalContext); ///
    specificContext = contextFromTokens(statementTokens, specificContext); ///
    statementUnifiedWithCombinator = _statementWithCombinator.default.unify(combinatorStatementNode, statementNode, assignments, stated, generalContext, specificContext);
    return statementUnifiedWithCombinator;
}
function unifyMetavariableIntrinsically(generalMetavariable, specificMetavariable, substitutions, generalContext, specificContext) {
    var metavariableUnifiedIntrinsically;
    var generalMetavariableNode = generalMetavariable.getNode(), specificMetavariableNode = specificMetavariable.getNode(), generalMetavariableTokens = generalMetavariable.getTokens(), specificMetavariableTokens = specificMetavariable.getTokens();
    generalContext = contextFromTokens(generalMetavariableTokens, generalContext); ///
    specificContext = contextFromTokens(specificMetavariableTokens, specificContext); ///
    metavariableUnifiedIntrinsically = _intrinsicLevel.default.unify(generalMetavariableNode, specificMetavariableNode, substitutions, generalContext, specificContext);
    return metavariableUnifiedIntrinsically;
}
function contextFromTokens(tokens, context) {
    var localContext = _local.default.fromContextAndTokens(context, tokens);
    context = localContext; ///
    return context;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdW5pZmljYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaW5nXCI7XG5cbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBsYWJlbFVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbGFiZWxcIjtcbmltcG9ydCBlcXVhbGl0eVVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvZXF1YWxpdHlcIjtcbmltcG9ydCBtZXRhTGV2ZWxVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyL21ldGFMZXZlbFwiO1xuaW1wb3J0IG1ldGF2YXJpYWJsZVVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvbWV0YXZhcmlhYmxlXCI7XG5pbXBvcnQgaW50cmluc2ljTGV2ZWxVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyL2ludHJpbnNpY0xldmVsXCI7XG5pbXBvcnQgdGVybVdpdGhDb25zdHJ1Y3RvclVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvdGVybVdpdGhDb25zdHJ1Y3RvclwiO1xuaW1wb3J0IHN0YXRlbWVudFdpdGhDb21iaW5hdG9yVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci9zdGF0ZW1lbnRXaXRoQ29tYmluYXRvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlFcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCkge1xuICBsZXQgZXF1YWxpdHlVbmlmaWVkO1xuXG4gIGNvbnN0IGxlZnRUZXJtID0gZXF1YWxpdHkuZ2V0TGVmdFRlcm0oKSxcbiAgICAgICAgcmlnaHRUZXJtID0gZXF1YWxpdHkuZ2V0UmlnaHRUZXJtKCksXG4gICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybS5nZXROb2RlKCk7XG5cbiAgZXF1YWxpdHlVbmlmaWVkID0gZXF1YWxpdHlVbmlmaWVyLnVuaWZ5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGVxdWFsaXR5VW5pZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnROb2RlID0gZ2VuZXJhbFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3RhdGVtZW50Tm9kZSA9IHNwZWNpZmljU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbFN0YXRlbWVudFRva2VucyA9IGdlbmVyYWxTdGF0ZW1lbnQuZ2V0VG9rZW5zKCksXG4gICAgICAgIHNwZWNpZmljU3RhdGVtZW50VG9rZW5zID0gc3BlY2lmaWNTdGF0ZW1lbnQuZ2V0VG9rZW5zKCk7XG5cbiAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0RnJvbVRva2VucyhnZW5lcmFsU3RhdGVtZW50VG9rZW5zLCBnZW5lcmFsQ29udGV4dCk7IC8vL1xuXG4gIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHRGcm9tVG9rZW5zKHNwZWNpZmljU3RhdGVtZW50VG9rZW5zLCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgY29uc3QgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3RhdGVtZW50Tm9kZSxcbiAgICAgICAgdW5pZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVW5pZmllci51bmlmeShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBzdGF0ZW1lbnRVbmlmaWVkID0gdW5pZmllZEF0TWV0YUxldmVsOyAvLy9cblxuICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBzdWJzdGl0dXRpb25VbmlmaWVkO1xuXG4gIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb25Ob2RlID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblRva2VucyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0VG9rZW5zKCksXG4gICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uVG9rZW5zID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0VG9rZW5zKCk7XG5cbiAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0RnJvbVRva2VucyhnZW5lcmFsU3Vic3RpdHV0aW9uVG9rZW5zLCBnZW5lcmFsQ29udGV4dCk7IC8vL1xuXG4gIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHRGcm9tVG9rZW5zKHNwZWNpZmljU3Vic3RpdHV0aW9uVG9rZW5zLCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgY29uc3QgZ2VuZXJhbE5vZGUgPSBnZW5lcmFsU3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgIHNwZWNpZmljTm9kZSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uTm9kZSxcbiAgICAgICAgdW5pZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVW5pZmllci51bmlmeShnZW5lcmFsTm9kZSwgc3BlY2lmaWNOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICBzdWJzdGl0dXRpb25VbmlmaWVkID0gdW5pZmllZEF0TWV0YUxldmVsOyAvLy9cblxuICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5TWV0YXZhcmlhYmxlKGdlbmVyYWxNZXRhdmFyaWFibGUsIHNwZWNpZmljTWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCBtZXRhdmFyaWFibGVVbmlmaWVkO1xuXG4gIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVRva2VucyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0VG9rZW5zKCksXG4gICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlVG9rZW5zID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0VG9rZW5zKCk7XG5cbiAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0RnJvbVRva2VucyhnZW5lcmFsTWV0YXZhcmlhYmxlVG9rZW5zLCBnZW5lcmFsQ29udGV4dCk7IC8vL1xuXG4gIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHRGcm9tVG9rZW5zKHNwZWNpZmljTWV0YXZhcmlhYmxlVG9rZW5zLCBzcGVjaWZpY0NvbnRleHQpOyAvLy9cblxuICBtZXRhdmFyaWFibGVVbmlmaWVkID0gbWV0YXZhcmlhYmxlVW5pZmllci51bmlmeShnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlKGxhYmVsLCByZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IGxhYmVsVW5pZmllZFdpdGhSZWZlcmVuY2U7XG5cbiAgY29uc3QgbGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICBsYWJlbE1ldGF2YXJpYWJsZU5vZGUgPSBsYWJlbE1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIGxhYmVsTWV0YXZhcmlhYmxlVG9rZW5zID0gbGFiZWxNZXRhdmFyaWFibGUuZ2V0VG9rZW5zKCksXG4gICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVUb2tlbnMgPSByZWZlcmVuY2VNZXRhdmFyaWFibGUuZ2V0VG9rZW5zKCk7XG5cbiAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0RnJvbVRva2VucyhsYWJlbE1ldGF2YXJpYWJsZVRva2VucywgZ2VuZXJhbENvbnRleHQpOyAgLy8vXG5cbiAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dEZyb21Ub2tlbnMocmVmZXJlbmNlTWV0YXZhcmlhYmxlVG9rZW5zLCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgY29uc3QgbGFiZWxVbmlmaWVkID0gbGFiZWxVbmlmaWVyLnVuaWZ5KGxhYmVsTWV0YXZhcmlhYmxlTm9kZSwgcmVmZXJlbmNlTWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgbGFiZWxVbmlmaWVkV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllZDsgLy8vXG5cbiAgcmV0dXJuIGxhYmVsVW5pZmllZFdpdGhSZWZlcmVuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGNvbnRleHQpIHtcbiAgbGV0IHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybSA9IGNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yVGVybS5nZXROb2RlKCk7XG5cbiAgdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IgPSB0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllci51bmlmeShjb25zdHJ1Y3RvclRlcm1Ob2RlLCB0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvcihzdGF0ZW1lbnQsIGNvbWJpbmF0b3IsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvcjtcblxuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50VG9rZW5zID0gc3RhdGVtZW50LmdldFRva2VucygpLFxuICAgICAgICBjb21iaW5hdG9yU3RhdGVtZW50ID0gY29tYmluYXRvci5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgY29tYmluYXRvclN0YXRlbWVudE5vZGUgPSBjb21iaW5hdG9yU3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgY29tYmluYXRvclN0YXRlbWVudFRva2VucyA9IGNvbWJpbmF0b3JTdGF0ZW1lbnQuZ2V0VG9rZW5zKCk7XG5cbiAgbGV0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0RnJvbVRva2Vucyhjb21iaW5hdG9yU3RhdGVtZW50VG9rZW5zLCBnZW5lcmFsQ29udGV4dCk7ICAvLy9cblxuICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0RnJvbVRva2VucyhzdGF0ZW1lbnRUb2tlbnMsIHNwZWNpZmljQ29udGV4dCk7ICAvLy9cblxuICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3IgPSBzdGF0ZW1lbnRXaXRoQ29tYmluYXRvclVuaWZpZXIudW5pZnkoY29tYmluYXRvclN0YXRlbWVudE5vZGUsIHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbWJpbmF0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkoZ2VuZXJhbE1ldGF2YXJpYWJsZSwgc3BlY2lmaWNNZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IG1ldGF2YXJpYWJsZVVuaWZpZWRJbnRyaW5zaWNhbGx5O1xuXG4gIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGVOb2RlID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlTm9kZSA9IHNwZWNpZmljTWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZVRva2VucyA9IGdlbmVyYWxNZXRhdmFyaWFibGUuZ2V0VG9rZW5zKCksXG4gICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlVG9rZW5zID0gc3BlY2lmaWNNZXRhdmFyaWFibGUuZ2V0VG9rZW5zKCk7XG5cbiAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0RnJvbVRva2VucyhnZW5lcmFsTWV0YXZhcmlhYmxlVG9rZW5zLCBnZW5lcmFsQ29udGV4dCk7IC8vL1xuXG4gIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHRGcm9tVG9rZW5zKHNwZWNpZmljTWV0YXZhcmlhYmxlVG9rZW5zLCBzcGVjaWZpY0NvbnRleHQpOyAvLy9cblxuICBtZXRhdmFyaWFibGVVbmlmaWVkSW50cmluc2ljYWxseSA9IGludHJpbnNpY0xldmVsVW5pZmllci51bmlmeShnZW5lcmFsTWV0YXZhcmlhYmxlTm9kZSwgc3BlY2lmaWNNZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICByZXR1cm4gbWV0YXZhcmlhYmxlVW5pZmllZEludHJpbnNpY2FsbHk7XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRGcm9tVG9rZW5zKHRva2VucywgY29udGV4dCkge1xuICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdG9rZW5zKTtcblxuICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAgLy8vXG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsidW5pZnlFcXVhbGl0eSIsInVuaWZ5TGFiZWxXaXRoUmVmZXJlbmNlIiwidW5pZnlNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZUludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsImVxdWFsaXR5IiwiY29udGV4dCIsImVxdWFsaXR5VW5pZmllZCIsImxlZnRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRSaWdodFRlcm0iLCJsZWZ0VGVybU5vZGUiLCJnZXROb2RlIiwicmlnaHRUZXJtTm9kZSIsImVxdWFsaXR5VW5pZmllciIsInVuaWZ5IiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsImdlbmVyYWxTdGF0ZW1lbnROb2RlIiwic3BlY2lmaWNTdGF0ZW1lbnROb2RlIiwiZ2VuZXJhbFN0YXRlbWVudFRva2VucyIsImdldFRva2VucyIsInNwZWNpZmljU3RhdGVtZW50VG9rZW5zIiwiY29udGV4dEZyb21Ub2tlbnMiLCJnZW5lcmFsTm9kZSIsInNwZWNpZmljTm9kZSIsInVuaWZpZWRBdE1ldGFMZXZlbCIsIm1ldGFMZXZlbFVuaWZpZXIiLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVkIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbk5vZGUiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbk5vZGUiLCJnZW5lcmFsU3Vic3RpdHV0aW9uVG9rZW5zIiwic3BlY2lmaWNTdWJzdGl0dXRpb25Ub2tlbnMiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVkIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZU5vZGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZU5vZGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlVG9rZW5zIiwic3BlY2lmaWNNZXRhdmFyaWFibGVUb2tlbnMiLCJtZXRhdmFyaWFibGVVbmlmaWVyIiwibGFiZWwiLCJyZWZlcmVuY2UiLCJsYWJlbFVuaWZpZWRXaXRoUmVmZXJlbmNlIiwibGFiZWxNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGUiLCJsYWJlbE1ldGF2YXJpYWJsZU5vZGUiLCJsYWJlbE1ldGF2YXJpYWJsZVRva2VucyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVUb2tlbnMiLCJsYWJlbFVuaWZpZWQiLCJsYWJlbFVuaWZpZXIiLCJ0ZXJtIiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciIsInRlcm1Ob2RlIiwiY29uc3RydWN0b3JUZXJtIiwiZ2V0VGVybSIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJ0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllciIsInN0YXRlbWVudCIsImNvbWJpbmF0b3IiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInN0YXRlbWVudFVuaWZpZWRXaXRoQ29tYmluYXRvciIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRUb2tlbnMiLCJjb21iaW5hdG9yU3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiY29tYmluYXRvclN0YXRlbWVudE5vZGUiLCJjb21iaW5hdG9yU3RhdGVtZW50VG9rZW5zIiwic3RhdGVtZW50V2l0aENvbWJpbmF0b3JVbmlmaWVyIiwibWV0YXZhcmlhYmxlVW5pZmllZEludHJpbnNpY2FsbHkiLCJpbnRyaW5zaWNMZXZlbFVuaWZpZXIiLCJ0b2tlbnMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dEFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztJQVdnQkEsYUFBYTtlQUFiQTs7SUF3RUFDLHVCQUF1QjtlQUF2QkE7O0lBakJBQyxpQkFBaUI7ZUFBakJBOztJQXVFQUMsOEJBQThCO2VBQTlCQTs7SUFqSEFDLGNBQWM7ZUFBZEE7O0lBNEZBQyw0QkFBNEI7ZUFBNUJBOztJQXZFQUMsaUJBQWlCO2VBQWpCQTs7SUEyREFDLHdCQUF3QjtlQUF4QkE7Ozs0REF0R1M7NERBQ0E7K0RBQ0c7Z0VBQ0M7bUVBQ0c7cUVBQ0U7MEVBQ0s7OEVBQ0k7Ozs7OztBQUVwQyxTQUFTUCxjQUFjUSxRQUFRLEVBQUVDLE9BQU87SUFDN0MsSUFBSUM7SUFFSixJQUFNQyxXQUFXSCxTQUFTSSxXQUFXLElBQy9CQyxZQUFZTCxTQUFTTSxZ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