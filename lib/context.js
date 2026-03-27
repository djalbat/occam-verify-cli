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
    findTermByTermNode(termNode) {
        const context = this.getContext(), term = context.findTermByTermNode(termNode);
        return term;
    }
    findFrameByFrameNode(frameNode) {
        const context = this.getContext(), frame = context.findFrameByFrameNode(frameNode);
        return frame;
    }
    findVariableByVariableNode(variableNode) {
        const context = this.getContext(), variable = context.findVariableByVariableNode(variableNode);
        return variable;
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
    findSubstitutionByVariableNode(variableNode) {
        const context = this.getContext(), substitution = context.findSubstitutionByVariableNode(variableNode);
        return substitution;
    }
    findSubstitutionByMetavariableNode(metavariableNode) {
        const context = this.getContext(), substitution = context.findSubstitutionByMetavariableNode(metavariableNode);
        return substitution;
    }
    findSimpleSubstitutionByMetavariableNode(metavariableNode) {
        const context = this.getContext(), simpleSubstitution = context.findSimpleSubstitutionByMetavariableNode(metavariableNode);
        return simpleSubstitution;
    }
    findComplexSubstitutionsByMetavariableNode(metavariableNode) {
        const context = this.getContext(), complexSubstitution = context.findComplexSubstitutionsByMetavariableNode(metavariableNode);
        return complexSubstitution;
    }
    findSubstitutionByMetavariableNodeAndSubstitution(metavariableNode, substitution) {
        const context = this.getContext();
        substitution = context.findSubstitutionByMetavariableNodeAndSubstitution(metavariableNode, substitution); ///
        return substitution;
    }
    findTypeByTypeName(metaTypeName) {
        const context = this.getContext(), type = context.findTypeByTypeName(metaTypeName);
        return type;
    }
    findTypeByNominalTypeName(nominalTypeName) {
        const context = this.getContext(), type = context.findTypeByNominalTypeName(nominalTypeName);
        return type;
    }
    findMetaTypeByMetaTypeName(metaTypeName) {
        const context = this.getContext(), metaType = context.findMetaTypeByMetaTypeName(metaTypeName);
        return metaType;
    }
    findProcedureByProcedureName(procedureName) {
        const context = this.getContext(), procedure = context.findProcedureByProcedureName(procedureName);
        return procedure;
    }
    findDeclaredVariableByVariableIdentifier(variableIdentifier) {
        const context = this.getContext(), declaredVariable = context.findDeclaredVariableByVariableIdentifier(variableIdentifier);
        return declaredVariable;
    }
    findDeclaredMetavariableByMetavariableName(metavariableName) {
        const context = this.getContext(), declaredMetavariable = context.findDeclaredMetavariableByMetavariableName(metavariableName);
        return declaredMetavariable;
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
    isMetavariablePresentByMetavariableNode(metavariableNode) {
        const context = this.getContext(), metavariablePresent = context.isMetavariablePresentByMetavariableNode(metavariableNode);
        return metavariablePresent;
    }
    isSubstitutionPresentBySubstitutionNode(substitutionNode) {
        const context = this.getContext(), substitutionPresent = context.isSubstitutionPresentBySubstitutionNode(substitutionNode);
        return substitutionPresent;
    }
    isTypePresentByNominalTypeName(nominalTypeName) {
        const context = this.getContext(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
        return typePresent;
    }
    isProcedurePresentByProcedureName(procedureName) {
        const context = this.getContext(), procedurePresent = context.isProcedurePresentByProcedureName(procedureName);
        return procedurePresent;
    }
    isDeclaredMetavariablePresentByMetavariableName(metavariableName) {
        const context = this.getContext(), metavariablePresent = context.isDeclaredMetavariablePresentByMetavariableName(metavariableName);
        return metavariablePresent;
    }
    isReferencePresentByMetavariableNode(metvvariableNode) {
        const context = this.getContext(), referencePresent = context.isReferencePresentByMetavariableNode(metvvariableNode);
        return referencePresent;
    }
    isJudgementPresentByMetavariableNode(metavariableNode) {
        const context = this.getContext(), judgementPresent = context.isJudgementPresentByMetavariableNode(metavariableNode);
        return judgementPresent;
    }
    isSubstitutionPresentByMetavariableNode(metavariableNode) {
        const context = this.getContext(), substitutionPresent = context.isSubstitutionPresentByMetavariableNode(metavariableNode);
        return substitutionPresent;
    }
    isSubstitutionPresentByMetavariableNodeAndSubstitution(metavariableNode, substitution) {
        const context = this.getContext(), substitutionPresent = context.isSubstitutionPresentByMetavariableNodeAndSubstitution(metavariableNode, substitution);
        return substitutionPresent;
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
    addDeclaredVariable(declaredVariable) {
        const context = this.getContext();
        context.addDeclaredVariable(declaredVariable);
    }
    addMetaLevelAssumption(metaLevelAssumption) {
        const context = this.getContext();
        context.addMetaLevelAssumption(metaLevelAssumption);
    }
    addDeclaredMetavariable(declaredMetavariable) {
        const context = this.getContext();
        context.addDeclaredMetavariable(declaredMetavariable);
    }
    addSubproofOrProofAssertion(subproofOrProofAssertion) {
        const context = this.getContext();
        context.addSubproofOrProofAssertion(subproofOrProofAssertion);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIGZyYW1lcyA9IGNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICByZXR1cm4gZnJhbWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gY29udGV4dC5nZXRFcXVhbGl0aWVzKCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBjb250ZXh0LmdldFN0YXRlbWVudHMoKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0QXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gY29udGV4dC5nZXRSZWZlcmVuY2VzKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IGNvbnRleHQuZ2V0QXNzdW1wdGlvbnMoKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBjb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXREZWNsYXJlZFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0RGVjbGFyZWRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBkZWNsYXJlZE1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBwYXJlbnRDb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjaGlsZENvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gY29udGV4dC5maW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZShtZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uID0gY29udGV4dC5maW5kTWV0YUxldmVsQXNzdW1wdGlvbkJ5TWV0YUxldmVsQXNzdW1wdGlvbk5vZGUobWV0YUxldmVsQXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbEFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBkZWNsYXJlZFZhcmlhYmxlO1xuICB9XG5cbiAgZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBkZWNsYXJlZE1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHBhcmVudENvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IHBhcmVudENvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY2hpbGRDb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSBjb250ZXh0LmlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gY29udGV4dC5pc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSBjb250ZXh0LmlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eVByZXNlbnQgPSBjb250ZXh0LmlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgc3RhdGVtZW50UHJlc2VudCA9IGNvbnRleHQuaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldHZ2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICByZWZlcmVuY2VQcmVzZW50ID0gY29udGV4dC5pc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0dnZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAganVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhTGV2ZWwoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFMZXZlbCA9IGNvbnRleHQuaXNNZXRhTGV2ZWwoKTtcblxuICAgIHJldHVybiBtZXRhTGV2ZWw7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGFkZFRlcm1zKHRlcm1zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUZXJtcyh0ZXJtcyk7XG4gIH1cblxuICBhZGRGcmFtZXMoZnJhbWVzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRGcmFtZXMoZnJhbWVzKTtcbiAgfVxuXG4gIGFkZEVxdWFsaXRpZXMoZXF1YWxpdGllcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRXF1YWxpdGllcyhlcXVhbGl0aWVzKTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudHMoanVkZ2VtZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkSnVkZ2VtZW50cyhqdWRnZW1lbnRzKTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbnMoYXNzZXJ0aW9ucykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9ucyhhc3NlcnRpb25zKTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3RhdGVtZW50cyhzdGF0ZW1lbnRzKTtcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZXMocmVmZXJlbmNlcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlcyhyZWZlcmVuY2VzKTtcbiAgfVxuXG4gIGFkZEFzc3VtcHRpb25zKGFzc3VtcHRpb25zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3N1bXB0aW9ucyhhc3N1bXB0aW9ucyk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcyk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5KTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3RhdGVtZW50KHN0YXRlbWVudCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuICB9XG5cbiAgYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pO1xuICB9XG5cbiAgYWRkQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIGFkZERlY2xhcmVkVmFyaWFibGUoZGVjbGFyZWRWYXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRGVjbGFyZWRWYXJpYWJsZShkZWNsYXJlZFZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZE1ldGFMZXZlbEFzc3VtcHRpb24obWV0YUxldmVsQXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkTWV0YUxldmVsQXNzdW1wdGlvbihtZXRhTGV2ZWxBc3N1bXB0aW9uKTtcbiAgfVxuXG4gIGFkZERlY2xhcmVkTWV0YXZhcmlhYmxlKGRlY2xhcmVkTWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGREZWNsYXJlZE1ldGF2YXJpYWJsZShkZWNsYXJlZE1ldGF2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJDb250ZXh0QmFzZSIsImdldExleGVyIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJnZXRUZXJtcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZnJhbWVzIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdGllcyIsImdldFN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImdldEFzc3VtcHRpb25zIiwiYXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwiZ2V0Q29tYmluYXRvcnMiLCJpbmNsdWRlUmVsZWFzZSIsImNvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0RGVjbGFyZWRWYXJpYWJsZXMiLCJkZWNsYXJlZFZhcmlhYmxlcyIsImdldERlY2xhcmVkTWV0YXZhcmlhYmxlcyIsImRlY2xhcmVkTWV0YXZhcmlhYmxlcyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImNoaWxkQ29udGV4dCIsInBhcmVudENvbnRleHQiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicnVsZSIsImZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5IiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnQiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50IiwiZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb24iLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImZpbmRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbiIsImZpbmRUeXBlQnlUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlIiwiZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImRlY2xhcmVkVmFyaWFibGUiLCJmaW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZGVjbGFyZWRNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImxhYmVsUHJlc2VudCIsImlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCIsImlzVGVybVByZXNlbnRCeVRlcm1Ob2RlIiwidGVybVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwibGFiZWxOb2RlIiwiaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZSIsImZyYW1lUHJlc2VudCIsImlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eVByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJlc2VudCIsImlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVQcmVzZW50IiwiaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXR2dmFyaWFibGVOb2RlIiwicmVmZXJlbmNlUHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbiIsImlzTWV0YUxldmVsIiwibWV0YUxldmVsIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJhZGRUZXJtcyIsImFkZEZyYW1lcyIsImFkZEVxdWFsaXRpZXMiLCJhZGRKdWRnZW1lbnRzIiwiYWRkQXNzZXJ0aW9ucyIsImFkZFN0YXRlbWVudHMiLCJhZGRSZWZlcmVuY2VzIiwiYWRkQXNzdW1wdGlvbnMiLCJhZGRNZXRhdmFyaWFibGVzIiwiYWRkU3Vic3RpdHV0aW9ucyIsImFkZFRlcm0iLCJhZGRGcmFtZSIsImFkZEVxdWFsaXR5IiwiYWRkSnVkZ2VtZW50IiwiYWRkU3RhdGVtZW50IiwiYWRkQXNzZXJ0aW9uIiwiYWRkUmVmZXJlbmNlIiwiYWRkQXNzdW1wdGlvbiIsImFkZEFzc2lnbm1lbnQiLCJhc3NpZ25tZW50IiwiYWRkTWV0YXZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwiYWRkRGVjbGFyZWRWYXJpYWJsZSIsImFkZE1ldGFMZXZlbEFzc3VtcHRpb24iLCJhZGREZWNsYXJlZE1ldGF2YXJpYWJsZSIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztnQ0FGa0I7QUFFeEIsTUFBTUEsZ0JBQWdCQyx1QkFBVztJQUM5Q0MsV0FBVztRQUNULE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxRQUFRRixRQUFRRCxRQUFRO1FBRTlCLE9BQU9HO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1ILFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCRyxTQUFTSixRQUFRRyxTQUFTO1FBRWhDLE9BQU9DO0lBQ1Q7SUFFQUMsY0FBYztRQUNaLE1BQU1MLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCSyxXQUFXTixRQUFRSyxXQUFXO1FBRXBDLE9BQU9DO0lBQ1Q7SUFFQUMsV0FBVztRQUNULE1BQU1QLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCTyxRQUFRUixRQUFRTyxRQUFRO1FBRTlCLE9BQU9DO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1ULFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQzdCUyxTQUFTVixRQUFRUyxTQUFTO1FBRTVCLE9BQU9DO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTVgsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJXLGFBQWFaLFFBQVFXLGFBQWE7UUFFeEMsT0FBT0M7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNYixVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QmEsYUFBYWQsUUFBUWEsYUFBYTtRQUV4QyxPQUFPQztJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1mLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCZSxhQUFhaEIsUUFBUWUsYUFBYTtRQUV4QyxPQUFPQztJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1qQixVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QmlCLGFBQWFsQixRQUFRaUIsYUFBYTtRQUV4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