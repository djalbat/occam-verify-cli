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
    getMetavariables() {
        const context = this.getContext(), metavariables = context.getMetavariables();
        return metavariables;
    }
    getSubstitutions() {
        const context = this.getContext(), substitutions = context.getSubstitutions();
        return substitutions;
    }
    getEquivalences() {
        const context = this.getContext(), equivalences = context.getEquivalences();
        return equivalences;
    }
    getCombinators(includeRelease) {
        const context = this.getContext(), combinators = context.getCombinators(includeRelease);
        return combinators;
    }
    getConstructors(includeRelease) {
        const context = this.getContext(), constructors = context.getConstructors(includeRelease);
        return constructors;
    }
    getDeclaredVariables(includeRelease) {
        const context = this.getContext(), declaredVariables = context.getDeclaredVariables(includeRelease);
        return declaredVariables;
    }
    getDeclaredMetavariables(includeRelease) {
        const context = this.getContext(), declaredMetavariables = context.getDeclaredMetavariables(includeRelease);
        return declaredMetavariables;
    }
    getSubproofOrProofAssertions() {
        const context = this.getContext(), subproofOrProofAssertions = context.getSubproofOrProofAssertions();
        return subproofOrProofAssertions;
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
    findStatementByStatementNode(statementNode) {
        const context = this.getContext(), statement = context.findStatementByStatementNode(statementNode);
        return statement;
    }
    findReferenceByReferenceNode(referenceNode) {
        const context = this.getContext(), reference = context.findReferenceByReferenceNode(referenceNode);
        return reference;
    }
    findAssumptionByAssumptionNode(assumptionNode) {
        const context = this.getContext(), assumption = context.findAssumptionByAssumptionNode(assumptionNode);
        return assumption;
    }
    findReferenceByMetavariableNode(metavariableNode) {
        const context = this.getContext(), reference = context.findReferenceByMetavariableNode(metavariableNode);
        return reference;
    }
    findJudgementsByMetavariableNode(metavariableNode) {
        const context = this.getContext(), judgement = context.findJudgementsByMetavariableNode(metavariableNode);
        return judgement;
    }
    findMetavariableByMetavariableNode(metavariableNode) {
        const context = this.getContext(), metavariable = context.findMetavariableByMetavariableNode(metavariableNode);
        return metavariable;
    }
    findSubstitutionBySubstitutionNode(substitutionNode) {
        const context = this.getContext(), substitution = context.findSubstitutionBySubstitutionNode(substitutionNode);
        return substitution;
    }
    findMetaLevelAssumptionByMetaLevelAssumptionNode(metaLevelAssumptionNode) {
        const context = this.getContext(), metaLevelAssumption = context.findMetaLevelAssumptionByMetaLevelAssumptionNode(metaLevelAssumptionNode);
        return metaLevelAssumption;
    }
    findTypeByNominalTypeName(nominalTypeName) {
        const context = this.getContext(), type = context.findTypeByNominalTypeName(nominalTypeName);
        return type;
    }
    findVariableByVariableNode(variableNode) {
        const context = this.getContext(), variable = context.findVariableByVariableNode(variableNode);
        return variable;
    }
    findSubstitutionByMetavariableName(metavariableName) {
        const context = this.getContext(), substitution = context.findSubstitutionByMetavariableName(metavariableName);
        return substitution;
    }
    findDeclaredMetavariableByMetavariableName(metavariableName) {
        const context = this.getContext(), declaredMetavariable = context.findDeclaredMetavariableByMetavariableName(metavariableName);
        return declaredMetavariable;
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
    isDeclaredMetavariablePresentByMetavariableName(metavariableName) {
        const context = this.getContext(), metavariablePresent = context.isDeclaredMetavariablePresentByMetavariableName(metavariableName);
        return metavariablePresent;
    }
    isMetavariablePresentByMetavariableNode(metavariableNode) {
        const context = this.getContext(), metavariablePresent = context.isMetavariablePresentByMetavariableNode(metavariableNode);
        return metavariablePresent;
    }
    isSubstitutionPresentBySubstitutionNode(substitutionNode) {
        const context = this.getContext(), substitutionPresent = context.isSubstitutionPresentBySubstitutionNode(substitutionNode);
        return substitutionPresent;
    }
    isSubstitutionPresentByMetavariableNameAndSubstitution(metavariableName, substitution) {
        const context = this.getContext(), substitutionPresent = context.isSubstitutionPresentByMetavariableNameAndSubstitution(metavariableName, substitution);
        return substitutionPresent;
    }
    isSubstitutionPresentByMetavariableName(metavariableName) {
        const context = this.getContext(), substitutionPresent = context.isSubstitutionPresentByMetavariableName(metavariableName);
        return substitutionPresent;
    }
    isProcedurePresentByProcedureName(procedureName) {
        const context = this.getContext(), procedurePresent = context.isProcedurePresentByProcedureName(procedureName);
        return procedurePresent;
    }
    isMetaLevel() {
        const context = this.getContext(), metaLevel = context.isMetaLevel();
        return metaLevel;
    }
    isStated() {
        const context = this.getContext(), stated = context.isStated();
        return stated;
    }
    addTerms(terms) {
        const context = this.getContext();
        context.addTerms(terms);
    }
    addFrames(frames) {
        const context = this.getContext();
        context.addFrames(frames);
    }
    addEqualities(equalities) {
        const context = this.getContext();
        context.addEqualities(equalities);
    }
    addJudgements(judgements) {
        const context = this.getContext();
        context.addJudgements(judgements);
    }
    addAssertions(assertions) {
        const context = this.getContext();
        context.addAssertions(assertions);
    }
    addStatements(statements) {
        const context = this.getContext();
        context.addStatements(statements);
    }
    addReferences(references) {
        const context = this.getContext();
        context.addReferences(references);
    }
    addAssumptions(assumptions) {
        const context = this.getContext();
        context.addAssumptions(assumptions);
    }
    addMetavariables(metavariables) {
        const context = this.getContext();
        context.addMetavariables(metavariables);
    }
    addSubstitutions(substitutions) {
        const context = this.getContext();
        context.addSubstitutions(substitutions);
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
    addMetavariable(metavariable) {
        const context = this.getContext();
        context.addMetavariable(metavariable);
    }
    addSubstitution(substitution) {
        const context = this.getContext();
        context.addSubstitution(substitution);
    }
    addMetaLevelAssumption(metaLevelAssumption) {
        const context = this.getContext();
        context.addMetaLevelAssumption(metaLevelAssumption);
    }
    addSubproofOrProofAssertion(subproofOrProofAssertion) {
        const context = this.getContext();
        context.addSubproofOrProofAssertion(subproofOrProofAssertion);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIGZyYW1lcyA9IGNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICByZXR1cm4gZnJhbWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gY29udGV4dC5nZXRFcXVhbGl0aWVzKCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBjb250ZXh0LmdldFN0YXRlbWVudHMoKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0QXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gY29udGV4dC5nZXRSZWZlcmVuY2VzKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IGNvbnRleHQuZ2V0QXNzdW1wdGlvbnMoKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBjb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXREZWNsYXJlZFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0RGVjbGFyZWRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBkZWNsYXJlZE1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBwYXJlbnRDb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjaGlsZENvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gY29udGV4dC5maW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZShtZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uID0gY29udGV4dC5maW5kTWV0YUxldmVsQXNzdW1wdGlvbkJ5TWV0YUxldmVsQXNzdW1wdGlvbk5vZGUobWV0YUxldmVsQXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbEFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBkZWNsYXJlZE1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBwYXJlbnRDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNoaWxkQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9IGNvbnRleHQuaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gY29udGV4dC5pc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eVByZXNlbnQgPSBjb250ZXh0LmlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgc3RhdGVtZW50UHJlc2VudCA9IGNvbnRleHQuaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXR2dmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZVByZXNlbnQgPSBjb250ZXh0LmlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXR2dmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTmFtZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YUxldmVsKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGV2ZWwgPSBjb250ZXh0LmlzTWV0YUxldmVsKCk7XG5cbiAgICByZXR1cm4gbWV0YUxldmVsO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBhZGRUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkVGVybXModGVybXMpO1xuICB9XG5cbiAgYWRkRnJhbWVzKGZyYW1lcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRnJhbWVzKGZyYW1lcyk7XG4gIH1cblxuICBhZGRFcXVhbGl0aWVzKGVxdWFsaXRpZXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEVxdWFsaXRpZXMoZXF1YWxpdGllcyk7XG4gIH1cblxuICBhZGRKdWRnZW1lbnRzKGp1ZGdlbWVudHMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEp1ZGdlbWVudHMoanVkZ2VtZW50cyk7XG4gIH1cblxuICBhZGRBc3NlcnRpb25zKGFzc2VydGlvbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2VydGlvbnMoYXNzZXJ0aW9ucyk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnRzKHN0YXRlbWVudHMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN0YXRlbWVudHMoc3RhdGVtZW50cyk7XG4gIH1cblxuICBhZGRSZWZlcmVuY2VzKHJlZmVyZW5jZXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFJlZmVyZW5jZXMocmVmZXJlbmNlcyk7XG4gIH1cblxuICBhZGRBc3N1bXB0aW9ucyhhc3N1bXB0aW9ucykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMpO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlcyhtZXRhdmFyaWFibGVzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRNZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZXMpO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUZXJtKHRlcm0pO1xuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuICB9XG5cbiAgYWRkQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcbiAgfVxuXG4gIGFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcbiAgfVxuXG4gIGFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gIH1cblxuICBhZGRNZXRhTGV2ZWxBc3N1bXB0aW9uKG1ldGFMZXZlbEFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGFMZXZlbEFzc3VtcHRpb24obWV0YUxldmVsQXNzdW1wdGlvbik7XG4gIH1cblxuICBhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJDb250ZXh0QmFzZSIsImdldExleGVyIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJnZXRUZXJtcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZnJhbWVzIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdGllcyIsImdldFN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImdldEFzc3VtcHRpb25zIiwiYXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwiZ2V0Q29tYmluYXRvcnMiLCJpbmNsdWRlUmVsZWFzZSIsImNvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0RGVjbGFyZWRWYXJpYWJsZXMiLCJkZWNsYXJlZFZhcmlhYmxlcyIsImdldERlY2xhcmVkTWV0YXZhcmlhYmxlcyIsImRlY2xhcmVkTWV0YXZhcmlhYmxlcyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImNoaWxkQ29udGV4dCIsInBhcmVudENvbnRleHQiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicnVsZSIsImZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwidHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eSIsImZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwianVkZ2VtZW50IiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb24iLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudCIsImZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSIsIm1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbiIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5hbWUiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbiIsImZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJsYWJlbFByZXNlbnQiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSIsInRlcm1QcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZSIsImxhYmVsTm9kZSIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eVByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJlc2VudCIsImlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXR2dmFyaWFibGVOb2RlIiwicmVmZXJlbmNlUHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbiIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc01ldGFMZXZlbCIsIm1ldGFMZXZlbCIsImlzU3RhdGVkIiwic3RhdGVkIiwiYWRkVGVybXMiLCJhZGRGcmFtZXMiLCJhZGRFcXVhbGl0aWVzIiwiYWRkSnVkZ2VtZW50cyIsImFkZEFzc2VydGlvbnMiLCJhZGRTdGF0ZW1lbnRzIiwiYWRkUmVmZXJlbmNlcyIsImFkZEFzc3VtcHRpb25zIiwiYWRkTWV0YXZhcmlhYmxlcyIsImFkZFN1YnN0aXR1dGlvbnMiLCJhZGRUZXJtIiwiYWRkRnJhbWUiLCJhZGRFcXVhbGl0eSIsImFkZEp1ZGdlbWVudCIsImFkZFN0YXRlbWVudCIsImFkZEFzc2VydGlvbiIsImFkZFJlZmVyZW5jZSIsImFkZEFzc3VtcHRpb24iLCJhZGRBc3NpZ25tZW50IiwiYXNzaWdubWVudCIsImFkZE1ldGF2YXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsImFkZE1ldGFMZXZlbEFzc3VtcHRpb24iLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0NBRmtCO0FBRXhCLE1BQU1BLGdCQUFnQkMsdUJBQVc7SUFDOUNDLFdBQVc7UUFDVCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsUUFBUUYsUUFBUUQsUUFBUTtRQUU5QixPQUFPRztJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNSCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkcsU0FBU0osUUFBUUcsU0FBUztRQUVoQyxPQUFPQztJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNTCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkssV0FBV04sUUFBUUssV0FBVztRQUVwQyxPQUFPQztJQUNUO0lBRUFDLFdBQVc7UUFDVCxNQUFNUCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6Qk8sUUFBUVIsUUFBUU8sUUFBUTtRQUU5QixPQUFPQztJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNVCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUM3QlMsU0FBU1YsUUFBUVMsU0FBUztRQUU1QixPQUFPQztJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1YLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCVyxh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