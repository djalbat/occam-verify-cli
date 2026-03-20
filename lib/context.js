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
    findRuleByReference(reference) {
        const context = this.getContext(), rule = context.findRuleByReference(reference);
        return rule;
    }
    findTopLevelAssertionByReference(reference) {
        const context = this.getContext(), topLevelAssertion = context.findTopLevelAssertionByReference(reference);
        return topLevelAssertion;
    }
    findTopLevelMetaAssertionsByReference(reference) {
        const context = this.getContext(), topLevelMetaAssertion = context.findTopLevelMetaAssertionsByReference(reference);
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
    isLabelPresentByReference(reference) {
        const context = this.getContext(), labelPresent = context.isLabelPresentByReference(reference);
        return labelPresent;
    }
    isTopLevelMetaAssertionPresentByReference(reference) {
        const context = this.getContext(), topLevelMetaAssertionPresent = context.isTopLevelMetaAssertionPresentByReference(reference);
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
    isStated() {
        const context = this.getContext(), stated = context.isStated();
        return stated;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIGZyYW1lcyA9IGNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICByZXR1cm4gZnJhbWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gY29udGV4dC5nZXRFcXVhbGl0aWVzKCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBjb250ZXh0LmdldFN0YXRlbWVudHMoKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0QXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gY29udGV4dC5nZXRSZWZlcmVuY2VzKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IGNvbnRleHQuZ2V0QXNzdW1wdGlvbnMoKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBjb250ZXh0LmdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICByZXRyaWV2ZUVwaGVtZXJhbENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBjb250ZXh0LnJldHJpZXZlRXBoZW1lcmFsQ29udGV4dCgpO1xuXG4gICAgcmV0dXJuIGVwaGVtZXJhbENvbnRleHQ7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlID0gcGFyZW50Q29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY2hpbGRDb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kTWV0YUxldmVsU3Vic3RpdHV0aW9uQnlNZXRhTGV2ZWxTdWJzdGl0dXRpb25Ob2RlKG1ldGFMZXZlbFN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kTWV0YUxldmVsU3Vic3RpdHV0aW9uQnlNZXRhTGV2ZWxTdWJzdGl0dXRpb25Ob2RlKG1ldGFMZXZlbFN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBwYXJlbnRDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNoaWxkQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9IGNvbnRleHQuaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gY29udGV4dC5pc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eVByZXNlbnQgPSBjb250ZXh0LmlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgc3RhdGVtZW50UHJlc2VudCA9IGNvbnRleHQuaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXR2dmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZVByZXNlbnQgPSBjb250ZXh0LmlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXR2dmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IGNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVByZXNlbnQ7XG4gIH1cblxuICBoYXNNZXRhTGV2ZWxTdWJzdGl0dXRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zID0gY29udGV4dC5oYXNNZXRhTGV2ZWxTdWJzdGl0dXRpb25zKCk7XG5cbiAgICByZXR1cm4gbWV0YUxldmVsU3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgYWRkVGVybXModGVybXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFRlcm1zKHRlcm1zKTtcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG4gIH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHkpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG4gIH1cblxuICBhZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbik7XG4gIH1cblxuICBhZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIGFkZE1ldGFMZXZlbFN1YnN0aXR1dGlvbihtZXRhTGV2ZWxTdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGFMZXZlbFN1YnN0aXR1dGlvbihtZXRhTGV2ZWxTdWJzdGl0dXRpb24pO1xuICB9XG5cbiAgYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiQ29udGV4dEJhc2UiLCJnZXRMZXhlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRGaWxlUGF0aCIsImZpbGVQYXRoIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImZyYW1lcyIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXRpZXMiLCJnZXRTdGF0ZW1lbnRzIiwic3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImFzc3VtcHRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJnZXRWYXJpYWJsZXMiLCJpbmNsdWRlUmVsZWFzZSIsInZhcmlhYmxlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwicmV0cmlldmVFcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dCIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJjaGlsZENvbnRleHQiLCJwYXJlbnRDb250ZXh0IiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJ1bGUiLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImZpbmRUeXBlQnlUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsInR5cGUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHkiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudCIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudCIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbiIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kTWV0YUxldmVsU3Vic3RpdHV0aW9uQnlNZXRhTGV2ZWxTdWJzdGl0dXRpb25Ob2RlIiwibWV0YUxldmVsU3Vic3RpdHV0aW9uTm9kZSIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbiIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImxhYmVsUHJlc2VudCIsImlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCIsImlzVGVybVByZXNlbnRCeVRlcm1Ob2RlIiwidGVybVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwibGFiZWxOb2RlIiwiaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZSIsImZyYW1lUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwiaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uUHJlc2VudCIsImlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldHZ2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJoYXNNZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwibWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsImlzU3RhdGVkIiwic3RhdGVkIiwiYWRkVGVybXMiLCJhZGRUZXJtIiwiYWRkRnJhbWUiLCJhZGRFcXVhbGl0eSIsImFkZEp1ZGdlbWVudCIsImFkZFN0YXRlbWVudCIsImFkZEFzc2VydGlvbiIsImFkZFJlZmVyZW5jZSIsImFkZEFzc3VtcHRpb24iLCJhZGRBc3NpZ25tZW50IiwiYXNzaWdubWVudCIsImFkZFN1YnN0aXR1dGlvbiIsImFkZE1ldGFMZXZlbFN1YnN0aXR1dGlvbiIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztnQ0FGa0I7QUFFeEIsTUFBTUEsZ0JBQWdCQyx1QkFBVztJQUM5Q0MsV0FBVztRQUNULE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxRQUFRRixRQUFRRCxRQUFRO1FBRTlCLE9BQU9HO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1ILFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCRyxTQUFTSixRQUFRRyxTQUFTO1FBRWhDLE9BQU9DO0lBQ1Q7SUFFQUMsY0FBYztRQUNaLE1BQU1MLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCSyxXQUFXTixRQUFRSyxXQUFXO1FBRXBDLE9BQU9DO0lBQ1Q7SUFFQUMsV0FBVztRQUNULE1BQU1QLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCTyxRQUFRUixRQUFRTyxRQUFRO1FBRTlCLE9BQU9DO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1ULFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQzdCUyxTQUFTVixRQUFRUyxTQUFTO1FBRTVCLE9BQU9DO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTVgsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJXLGFBQWFaLFFBQVFXLGFBQWE7UUFFeEMsT0FBT0M7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNYixVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QmEsYUFBYWQsUUFBUWEsYUFBYTtRQUV4QyxPQUFPQztJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1B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