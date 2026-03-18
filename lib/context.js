"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Context;
    }
});
const _occamlanguages = require("occam-languages");
class Context extends _occamlanguages.Context {
    getLexer() {
        const context = this.getContext(), lexer = context.getLexer();
        return lexer;
    }
    getParser() {
        const context = this.getContext(), parser = context.getParser();
        return parser;
    }
    getFilePath() {
        const context = this.getContext(), filePath = context.getFilePath();
        return filePath;
    }
    getTerms() {
        const context = this.getContext(), terms = context.getTerms();
        return terms;
    }
    getFrames() {
        const context = this.getContext(), frames = context.getFrames();
        return frames;
    }
    getJudgements() {
        const context = this.getContext(), judgements = context.getJudgements();
        return judgements;
    }
    getEqualities() {
        const context = this.getContext(), equalities = context.getEqualities();
        return equalities;
    }
    getStatements() {
        const context = this.getContext(), statements = context.getStatements();
        return statements;
    }
    getAssertions() {
        const context = this.getContext(), assertions = context.getAssertions();
        return assertions;
    }
    getReferences() {
        const context = this.getContext(), references = context.getReferences();
        return references;
    }
    getAssumptions() {
        const context = this.getContext(), assumptions = context.getAssumptions();
        return assumptions;
    }
    getSubstitutions() {
        const context = this.getContext(), substitutions = context.getSubstitutions();
        return substitutions;
    }
    getEquivalences() {
        const context = this.getContext(), equivalences = context.getEquivalences();
        return equivalences;
    }
    getVariables(includeRelease) {
        const context = this.getContext(), variables = context.getVariables(includeRelease);
        return variables;
    }
    getCombinators(includeRelease) {
        const context = this.getContext(), combinators = context.getCombinators(includeRelease);
        return combinators;
    }
    getConstructors(includeRelease) {
        const context = this.getContext(), constructors = context.getConstructors(includeRelease);
        return constructors;
    }
    getMetavariables(includeRelease) {
        const context = this.getContext(), metavariables = context.getMetavariables(includeRelease);
        return metavariables;
    }
    getSubproofOrProofAssertions() {
        const context = this.getContext(), subproofOrProofAssertions = context.getSubproofOrProofAssertions();
        return subproofOrProofAssertions;
    }
    retrieveEphemeralContext() {
        const context = this.getContext(), ephemeralContext = context.retrieveEphemeralContext();
        return ephemeralContext;
    }
    findMetavariable(metavariable, context) {
        const childContext = context; ///
        context = this.getContext();
        const parentContext = context; ///
        metavariable = parentContext.findMetavariable(metavariable, childContext); ///
        return metavariable;
    }
    findRuleByReference(reference, context) {
        const childContext = context; ///
        context = this.getContext();
        const parentContext = context, rule = parentContext.findRuleByReference(reference, childContext);
        return rule;
    }
    findTopLevelAssertionByReference(reference, context) {
        const childContext = context; ///
        context = this.getContext();
        const parentContext = context, topLevelAssertion = parentContext.findTopLevelAssertionByReference(reference, childContext);
        return topLevelAssertion;
    }
    findTopLevelMetaAssertionsByReference(reference, context) {
        const childContext = context; ///
        context = this.getContext();
        const parentContext = context, topLevelMetaAssertion = parentContext.findTopLevelMetaAssertionsByReference(reference, childContext);
        return topLevelMetaAssertion;
    }
    findTypeByTypeName(metaTypeName) {
        const context = this.getContext(), type = context.findTypeByTypeName(metaTypeName);
        return type;
    }
    findMetaTypeByMetaTypeName(metaTypeName) {
        const context = this.getContext(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
        return metaType;
    }
    findTermByTermNode(termNode) {
        const context = this.getContext(), term = context.findTermByTermNode(termNode);
        return term;
    }
    findFrameByFrameNode(frameNode) {
        const context = this.getContext(), frame = context.findFrameByFrameNode(frameNode);
        return frame;
    }
    findEqualityByEqualityNode(equalityNode) {
        const context = this.getContext(), equality = context.findEqualityByEqualityNode(equalityNode);
        return equality;
    }
    findJudgementByJudgementNode(judgementNode) {
        const context = this.getContext(), judgement = context.findJudgementByJudgementNode(judgementNode);
        return judgement;
    }
    findAssertionByAssertionNode(assertionNode) {
        const context = this.getContext(), assertion = context.findAssertionByAssertionNode(assertionNode);
        return assertion;
    }
    findReferenceByReferenceNode(referenceNode) {
        const context = this.getContext(), reference = context.findReferenceByReferenceNode(referenceNode);
        return reference;
    }
    findStatementByStatementNode(statementNode) {
        const context = this.getContext(), statement = context.findStatementByStatementNode(statementNode);
        return statement;
    }
    findAssumptionByAssumptionNode(assumptionNode) {
        const context = this.getContext(), assumption = context.findAssumptionByAssumptionNode(assumptionNode);
        return assumption;
    }
    findReferenceByMetavariableNode(metavariableNode) {
        const context = this.getContext(), reference = context.findReferenceByMetavariableNode(metavariableNode);
        return reference;
    }
    findSubstitutionBySubstitutionNode(substitutionNode) {
        const context = this.getContext(), substitution = context.findSubstitutionBySubstitutionNode(substitutionNode);
        return substitution;
    }
    findMetaLevelSubstitutionByMetaLevelSubstitutionNode(metaLevelSubstitutionNode) {
        const context = this.getContext(), metaLevelSubstitution = context.findMetaLevelSubstitutionByMetaLevelSubstitutionNode(metaLevelSubstitutionNode);
        return metaLevelSubstitution;
    }
    findTypeByNominalTypeName(nominalTypeName) {
        const context = this.getContext(), type = context.findTypeByNominalTypeName(nominalTypeName);
        return type;
    }
    findVariableByVariableIdentifier(variableIdentifier) {
        const context = this.getContext(), variable = context.findVariableByVariableIdentifier(variableIdentifier);
        return variable;
    }
    findSubstitutionByMetavariableName(metavariableName) {
        const context = this.getContext(), substitution = context.findSubstitutionByMetavariableName(metavariableName);
        return substitution;
    }
    findMetavariableByMetavariableName(metavariableName) {
        const context = this.getContext(), metavariable = context.findMetavariableByMetavariableName(metavariableName);
        return metavariable;
    }
    findSubstitutionByVariableIdentifier(variableIdentifier) {
        const context = this.getContext(), substitution = context.findSubstitutionByVariableIdentifier(variableIdentifier);
        return substitution;
    }
    findSimpleSubstitutionByMetavariableName(metavariableName) {
        const context = this.getContext(), simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName);
        return simpleSubstitution;
    }
    findComplexSubstitutionsByMetavariableName(metavariableName) {
        const context = this.getContext(), complexSubstitution = context.findComplexSubstitutionsByMetavariableName(metavariableName);
        return complexSubstitution;
    }
    findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution) {
        const context = this.getContext();
        substitution = context.findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution); ///
        return substitution;
    }
    findProcedureByProcedureName(procedureName) {
        const context = this.getContext(), procedure = context.findProcedureByProcedureName(procedureName);
        return procedure;
    }
    isMetavariablePresent(metavariable, context) {
        const childContext = context; ///
        context = this.getContext();
        const parentContext = context, metavariablePresent = parentContext.isMetavariablePresent(metavariable, childContext);
        return metavariablePresent;
    }
    isLabelPresentByReference(reference, context) {
        const childContext = context; ///
        context = this.getContext();
        const parentContext = context, labelPresent = parentContext.isLabelPresentByReference(reference, childContext);
        return labelPresent;
    }
    isTopLevelMetaAssertionPresentByReference(reference, context) {
        const childContext = context; ///
        context = this.getContext();
        const parentContext = context, topLevelMetaAssertionPresent = parentContext.isTopLevelMetaAssertionPresentByReference(reference, childContext);
        return topLevelMetaAssertionPresent;
    }
    isTermPresentByTermNode(termNode) {
        const context = this.getContext(), termPresent = context.isTermPresentByTermNode(termNode);
        return termPresent;
    }
    isLabelPresentByLabelNode(labelNode) {
        const context = this.getContext(), labelPresent = context.isLabelPresentByLabelNode(labelNode);
        return labelPresent;
    }
    isFramePresentByFrameNode(frameNode) {
        const context = this.getContext(), framePresent = context.isFramePresentByFrameNode(frameNode);
        return framePresent;
    }
    isTypePresentByNominalTypeName(nominalTypeName) {
        const context = this.getContext(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
        return typePresent;
    }
    isEqualityPresentByEqualityNode(equalityNode) {
        const context = this.getContext(), equalityPresent = context.isEqualityPresentByEqualityNode(equalityNode);
        return equalityPresent;
    }
    isJudgementPresentByJudgementNode(judgementNode) {
        const context = this.getContext(), judgementPresent = context.isJudgementPresentByJudgementNode(judgementNode);
        return judgementPresent;
    }
    isStatementPresentByStatementNode(statementNode) {
        const context = this.getContext(), statementPresent = context.isStatementPresentByStatementNode(statementNode);
        return statementPresent;
    }
    isAssertionPresentByAssertionNode(assertionNode) {
        const context = this.getContext(), assertionPresent = context.isAssertionPresentByAssertionNode(assertionNode);
        return assertionPresent;
    }
    isReferencePresentByMetavariableNode(metvvariableNode) {
        const context = this.getContext(), referencePresent = context.isReferencePresentByMetavariableNode(metvvariableNode);
        return referencePresent;
    }
    isJudgementPresentByMetavariableName(metavariableName) {
        const context = this.getContext(), judgementPresent = context.isJudgementPresentByMetavariableName(metavariableName);
        return judgementPresent;
    }
    isMetavariablePresentByMetavariableName(metavariableName) {
        const context = this.getContext(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
        return metavariablePresent;
    }
    isSubstitutionPresentBySubstitutionNode(substitutionNode) {
        const context = this.getContext(), substitutionPresent = context.isSubstitutionPresentBySubstitutionNode(substitutionNode);
        return substitutionPresent;
    }
    isProcedurePresentByProcedureName(procedureName) {
        const context = this.getContext(), procedurePresent = context.isProcedurePresentByProcedureName(procedureName);
        return procedurePresent;
    }
    hasMetaLevelSubstitutions() {
        const context = this.getContext(), metaLevelSubstitutions = context.hasMetaLevelSubstitutions();
        return metaLevelSubstitutions;
    }
    addTerms(terms) {
        const context = this.getContext();
        context.addTerms(terms);
    }
    addTerm(term) {
        const context = this.getContext();
        context.addTerm(term);
    }
    addFrame(frame) {
        const context = this.getContext();
        context.addFrame(frame);
    }
    addEquality(equality) {
        const context = this.getContext();
        context.addEquality(equality);
    }
    addJudgement(judgement) {
        const context = this.getContext();
        context.addJudgement(judgement);
    }
    addStatement(statement) {
        const context = this.getContext();
        context.addStatement(statement);
    }
    addAssertion(assertion) {
        const context = this.getContext();
        context.addAssertion(assertion);
    }
    addReference(reference) {
        const context = this.getContext();
        context.addReference(reference);
    }
    addAssumption(assumption) {
        const context = this.getContext();
        context.addAssumption(assumption);
    }
    addAssignment(assignment) {
        const context = this.getContext();
        context.addAssignment(assignment);
    }
    addSubstitution(substitution) {
        const context = this.getContext();
        context.addSubstitution(substitution);
    }
    addMetaLevelSubstitution(metaLevelSubstitution) {
        const context = this.getContext();
        context.addMetaLevelSubstitution(metaLevelSubstitution);
    }
    addSubproofOrProofAssertion(subproofOrProofAssertion) {
        const context = this.getContext();
        context.addSubproofOrProofAssertion(subproofOrProofAssertion);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIGZyYW1lcyA9IGNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICByZXR1cm4gZnJhbWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gY29udGV4dC5nZXRFcXVhbGl0aWVzKCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBjb250ZXh0LmdldFN0YXRlbWVudHMoKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0QXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gY29udGV4dC5nZXRSZWZlcmVuY2VzKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IGNvbnRleHQuZ2V0QXNzdW1wdGlvbnMoKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBjb250ZXh0LmdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICByZXRyaWV2ZUVwaGVtZXJhbENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBjb250ZXh0LnJldHJpZXZlRXBoZW1lcmFsQ29udGV4dCgpO1xuXG4gICAgcmV0dXJuIGVwaGVtZXJhbENvbnRleHQ7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlID0gcGFyZW50Q29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY2hpbGRDb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgcnVsZSA9IHBhcmVudENvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gcGFyZW50Q29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHBhcmVudENvbnRleHQuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gY29udGV4dC5maW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRNZXRhTGV2ZWxTdWJzdGl0dXRpb25CeU1ldGFMZXZlbFN1YnN0aXR1dGlvbk5vZGUobWV0YUxldmVsU3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGV2ZWxTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRNZXRhTGV2ZWxTdWJzdGl0dXRpb25CeU1ldGFMZXZlbFN1YnN0aXR1dGlvbk5vZGUobWV0YUxldmVsU3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YUxldmVsU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHBhcmVudENvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IHBhcmVudENvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY2hpbGRDb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHBhcmVudENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBwYXJlbnRDb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSBwYXJlbnRDb250ZXh0LmlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdGVybVByZXNlbnQgPSBjb250ZXh0LmlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZyYW1lUHJlc2VudCA9IGNvbnRleHQuaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZXF1YWxpdHlQcmVzZW50ID0gY29udGV4dC5pc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIHN0YXRlbWVudFByZXNlbnQgPSBjb250ZXh0LmlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0dnZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VQcmVzZW50ID0gY29udGV4dC5pc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0dnZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSBjb250ZXh0LmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgaGFzTWV0YUxldmVsU3Vic3RpdHV0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuaGFzTWV0YUxldmVsU3Vic3RpdHV0aW9ucygpO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkVGVybXModGVybXMpO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUZXJtKHRlcm0pO1xuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuICB9XG5cbiAgYWRkQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcbiAgfVxuXG4gIGFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcbiAgfVxuXG4gIGFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICB9XG5cbiAgYWRkTWV0YUxldmVsU3Vic3RpdHV0aW9uKG1ldGFMZXZlbFN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkTWV0YUxldmVsU3Vic3RpdHV0aW9uKG1ldGFMZXZlbFN1YnN0aXR1dGlvbik7XG4gIH1cblxuICBhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJDb250ZXh0QmFzZSIsImdldExleGVyIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJnZXRUZXJtcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZnJhbWVzIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdGllcyIsImdldFN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImdldEFzc3VtcHRpb25zIiwiYXNzdW1wdGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsImdldFZhcmlhYmxlcyIsImluY2x1ZGVSZWxlYXNlIiwidmFyaWFibGVzIiwiZ2V0Q29tYmluYXRvcnMiLCJjb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJyZXRyaWV2ZUVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0IiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImNoaWxkQ29udGV4dCIsInBhcmVudENvbnRleHQiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicnVsZSIsImZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwidHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eSIsImZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwianVkZ2VtZW50IiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb24iLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50IiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRNZXRhTGV2ZWxTdWJzdGl0dXRpb25CeU1ldGFMZXZlbFN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25Ob2RlIiwibWV0YUxldmVsU3Vic3RpdHV0aW9uIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24iLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwibGFiZWxQcmVzZW50IiwiaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50IiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlIiwiZnJhbWVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFByZXNlbnQiLCJpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25QcmVzZW50IiwiaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwibWV0dnZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImhhc01ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwiYWRkVGVybXMiLCJhZGRUZXJtIiwiYWRkRnJhbWUiLCJhZGRFcXVhbGl0eSIsImFkZEp1ZGdlbWVudCIsImFkZFN0YXRlbWVudCIsImFkZEFzc2VydGlvbiIsImFkZFJlZmVyZW5jZSIsImFkZEFzc3VtcHRpb24iLCJhZGRBc3NpZ25tZW50IiwiYXNzaWdubWVudCIsImFkZFN1YnN0aXR1dGlvbiIsImFkZE1ldGFMZXZlbFN1YnN0aXR1dGlvbiIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztnQ0FGa0I7QUFFeEIsTUFBTUEsZ0JBQWdCQyx1QkFBVztJQUM5Q0MsV0FBVztRQUNULE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxRQUFRRixRQUFRRCxRQUFRO1FBRTlCLE9BQU9HO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1ILFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCRyxTQUFTSixRQUFRRyxTQUFTO1FBRWhDLE9BQU9DO0lBQ1Q7SUFFQUMsY0FBYztRQUNaLE1BQU1MLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCSyxXQUFXTixRQUFRSyxX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