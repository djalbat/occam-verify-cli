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
    findTypeByTypeName(typeName) {
        const context = this.getContext(), type = context.findTypeByTypeName(typeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIGZyYW1lcyA9IGNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICByZXR1cm4gZnJhbWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gY29udGV4dC5nZXRFcXVhbGl0aWVzKCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBjb250ZXh0LmdldFN0YXRlbWVudHMoKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0QXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gY29udGV4dC5nZXRSZWZlcmVuY2VzKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IGNvbnRleHQuZ2V0QXNzdW1wdGlvbnMoKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBjb250ZXh0LmdldE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbnRleHQuZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXREZWNsYXJlZFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0RGVjbGFyZWRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBkZWNsYXJlZE1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBwYXJlbnRDb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjaGlsZENvbnRleHQpOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcnVsZSA9IGNvbnRleHQuZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZyYW1lID0gY29udGV4dC5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gY29udGV4dC5maW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZShtZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uID0gY29udGV4dC5maW5kTWV0YUxldmVsQXNzdW1wdGlvbkJ5TWV0YUxldmVsQXNzdW1wdGlvbk5vZGUobWV0YUxldmVsQXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbEFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRWYXJpYWJsZTtcbiAgfVxuXG4gIGZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRNZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBwYXJlbnRDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNoaWxkQ29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9IGNvbnRleHQuaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gY29udGV4dC5pc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWVQcmVzZW50O1xuICB9XG5cbiAgaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZXF1YWxpdHlQcmVzZW50ID0gY29udGV4dC5pc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIHN0YXRlbWVudFByZXNlbnQgPSBjb250ZXh0LmlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXR2dmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgcmVmZXJlbmNlUHJlc2VudCA9IGNvbnRleHQuaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldHZ2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc01ldGFMZXZlbCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YUxldmVsID0gY29udGV4dC5pc01ldGFMZXZlbCgpO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgYWRkVGVybXModGVybXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFRlcm1zKHRlcm1zKTtcbiAgfVxuXG4gIGFkZEZyYW1lcyhmcmFtZXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEZyYW1lcyhmcmFtZXMpO1xuICB9XG5cbiAgYWRkRXF1YWxpdGllcyhlcXVhbGl0aWVzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRFcXVhbGl0aWVzKGVxdWFsaXRpZXMpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50cyhqdWRnZW1lbnRzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRKdWRnZW1lbnRzKGp1ZGdlbWVudHMpO1xuICB9XG5cbiAgYWRkQXNzZXJ0aW9ucyhhc3NlcnRpb25zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3NlcnRpb25zKGFzc2VydGlvbnMpO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50cyhzdGF0ZW1lbnRzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdGF0ZW1lbnRzKHN0YXRlbWVudHMpO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlcyhyZWZlcmVuY2VzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRSZWZlcmVuY2VzKHJlZmVyZW5jZXMpO1xuICB9XG5cbiAgYWRkQXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc3VtcHRpb25zKGFzc3VtcHRpb25zKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkTWV0YXZhcmlhYmxlcyhtZXRhdmFyaWFibGVzKTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG4gIH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHkpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG4gIH1cblxuICBhZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbik7XG4gIH1cblxuICBhZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICB9XG5cbiAgYWRkRGVjbGFyZWRWYXJpYWJsZShkZWNsYXJlZFZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGREZWNsYXJlZFZhcmlhYmxlKGRlY2xhcmVkVmFyaWFibGUpO1xuICB9XG5cbiAgYWRkTWV0YUxldmVsQXNzdW1wdGlvbihtZXRhTGV2ZWxBc3N1bXB0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRNZXRhTGV2ZWxBc3N1bXB0aW9uKG1ldGFMZXZlbEFzc3VtcHRpb24pO1xuICB9XG5cbiAgYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUoZGVjbGFyZWRNZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZERlY2xhcmVkTWV0YXZhcmlhYmxlKGRlY2xhcmVkTWV0YXZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGV4dCIsIkNvbnRleHRCYXNlIiwiZ2V0TGV4ZXIiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwiZ2V0RmlsZVBhdGgiLCJmaWxlUGF0aCIsImdldFRlcm1zIiwidGVybXMiLCJnZXRGcmFtZXMiLCJmcmFtZXMiLCJnZXRKdWRnZW1lbnRzIiwianVkZ2VtZW50cyIsImdldEVxdWFsaXRpZXMiLCJlcXVhbGl0aWVzIiwiZ2V0U3RhdGVtZW50cyIsInN0YXRlbWVudHMiLCJnZXRBc3NlcnRpb25zIiwiYXNzZXJ0aW9ucyIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiZ2V0QXNzdW1wdGlvbnMiLCJhc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJnZXRDb21iaW5hdG9ycyIsImluY2x1ZGVSZWxlYXNlIiwiY29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXREZWNsYXJlZFZhcmlhYmxlcyIsImRlY2xhcmVkVmFyaWFibGVzIiwiZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzIiwiZGVjbGFyZWRNZXRhdmFyaWFibGVzIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJmaW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiY2hpbGRDb250ZXh0IiwicGFyZW50Q29udGV4dCIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJydWxlIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHkiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudCIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnQiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbiIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kTWV0YUxldmVsQXNzdW1wdGlvbkJ5TWV0YUxldmVsQXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSIsIm1ldGFMZXZlbEFzc3VtcHRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZSIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJkZWNsYXJlZFZhcmlhYmxlIiwiZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJsYWJlbFByZXNlbnQiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSIsInRlcm1QcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZSIsImxhYmVsTm9kZSIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFByZXNlbnQiLCJpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25QcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwibWV0dnZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24iLCJpc01ldGFMZXZlbCIsIm1ldGFMZXZlbCIsImlzU3RhdGVkIiwic3RhdGVkIiwiYWRkVGVybXMiLCJhZGRGcmFtZXMiLCJhZGRFcXVhbGl0aWVzIiwiYWRkSnVkZ2VtZW50cyIsImFkZEFzc2VydGlvbnMiLCJhZGRTdGF0ZW1lbnRzIiwiYWRkUmVmZXJlbmNlcyIsImFkZEFzc3VtcHRpb25zIiwiYWRkTWV0YXZhcmlhYmxlcyIsImFkZFN1YnN0aXR1dGlvbnMiLCJhZGRUZXJtIiwiYWRkRnJhbWUiLCJhZGRFcXVhbGl0eSIsImFkZEp1ZGdlbWVudCIsImFkZFN0YXRlbWVudCIsImFkZEFzc2VydGlvbiIsImFkZFJlZmVyZW5jZSIsImFkZEFzc3VtcHRpb24iLCJhZGRBc3NpZ25tZW50IiwiYXNzaWdubWVudCIsImFkZE1ldGF2YXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsImFkZERlY2xhcmVkVmFyaWFibGUiLCJhZGRNZXRhTGV2ZWxBc3N1bXB0aW9uIiwiYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0NBRmtCO0FBRXhCLE1BQU1BLGdCQUFnQkMsdUJBQVc7SUFDOUNDLFdBQVc7UUFDVCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsUUFBUUYsUUFBUUQsUUFBUTtRQUU5QixPQUFPRztJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNSCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkcsU0FBU0osUUFBUUcsU0FBUztRQUVoQyxPQUFPQztJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNTCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkssV0FBV04sUUFBUUssV0FBVztRQUVwQyxPQUFPQztJQUNUO0lBRUFDLFdBQVc7UUFDVCxNQUFNUCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6Qk8sUUFBUVIsUUFBUU8sUUFBUTtRQUU5QixPQUFPQztJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNVCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUM3QlMsU0FBU1YsUUFBUVMsU0FBUztRQUU1QixPQUFPQztJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1YLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCVyxhQUFhWixRQUFRVyxhQUFhO1FBRXhDLE9BQU9DO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTWIsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJhLGFBQWFkLFFBQVFhLGFBQWE7UUFFeEMsT0FBT0M7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNZixVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QmUsYUFBYWhCLFFBQVFlLGFBQWE7UUFFeEMsT0FBT0M7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNakIsVUFBVSxJQUFJLENBQUNDLFVBQVUsSUFDekJpQixhQUFhbEIsUUFBUWlCLGFB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