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
    getTerms(terms = []) {
        const context = this.getContext();
        context.getTerms(terms);
        return terms;
    }
    getFrames(frames = []) {
        const context = this.getContext();
        context.getFrames(frames);
        return frames;
    }
    getJudgements(judgements = []) {
        const context = this.getContext();
        context.getJudgements(judgements);
        return judgements;
    }
    getEqualities(equalities = []) {
        const context = this.getContext();
        context.getEqualities(equalities);
        return equalities;
    }
    getStatements(statements = []) {
        const context = this.getContext();
        context.getStatements(statements);
        return statements;
    }
    getAssertions(assertions = []) {
        const context = this.getContext();
        context.getAssertions(assertions);
        return assertions;
    }
    getReferences(references = []) {
        const context = this.getContext();
        context.getReferences(references);
        return references;
    }
    getAssumptions(assumptions = []) {
        const context = this.getContext();
        context.getAssumptions(assumptions);
        return assumptions;
    }
    getMetavariables(metavariables = []) {
        const context = this.getContext();
        context.getMetavariables(metavariables);
        return metavariables;
    }
    getSubstitutions(substitutions = []) {
        const context = this.getContext();
        context.getSubstitutions(substitutions);
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
    getDeclaredVariables() {
        const context = this.getContext(), declaredVariables = context.getDeclaredVariables();
        return declaredVariables;
    }
    getDeclaredMetavariables() {
        const context = this.getContext(), declaredMetavariables = context.getDeclaredMetavariables();
        return declaredMetavariables;
    }
    getDeclaredJudgements() {
        const context = this.getContext(), declaredJudgements = context.getDeclaredJudgements();
        return declaredJudgements;
    }
    getSubproofOrProofAssertions() {
        const context = this.getContext(), subproofOrProofAssertions = context.getSubproofOrProofAssertions();
        return subproofOrProofAssertions;
    }
    findMetavariable(metavariable, context) {
        const childContext = context; ///
        context = this.getContext();
        const parentContext = context; ///
        context = childContext; ///
        metavariable = parentContext.findMetavariable(metavariable, context);
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
    findDeclaredJudgementsByMetavariableNode(metavariableNode) {
        const context = this.getContext(), declaredJudgements = context.findDeclaredJudgementsByMetavariableNode(metavariableNode);
        return declaredJudgements;
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
        const parentContext = context; ///
        context = childContext; ///
        const metavariablePresent = parentContext.isMetavariablePresent(metavariable, context);
        return metavariablePresent;
    }
    isLabelPresentByReference(reference, context = null) {
        const childContext = context; ///
        context = this.getContext();
        const parentContext = context; ///
        context = childContext; ///
        const labelPresent = parentContext.isLabelPresentByReference(reference, context);
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
    isSubstitutionPresentByMetavariableNode(metavariableNode) {
        const context = this.getContext(), substitutionPresent = context.isSubstitutionPresentByMetavariableNode(metavariableNode);
        return substitutionPresent;
    }
    isDeclaredJudgementPresentByMetavariableNode(metavariableNode) {
        const context = this.getContext(), declaredJudgementPresent = context.isDeclaredJudgementPresentByMetavariableNode(metavariableNode);
        return declaredJudgementPresent;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXModGVybXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0VGVybXModGVybXMpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKGZyYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRGcmFtZXMoZnJhbWVzKTtcblxuICAgIHJldHVybiBmcmFtZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKGp1ZGdlbWVudHMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0SnVkZ2VtZW50cyhqdWRnZW1lbnRzKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcyhlcXVhbGl0aWVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldEVxdWFsaXRpZXMoZXF1YWxpdGllcyk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoc3RhdGVtZW50cyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRTdGF0ZW1lbnRzKHN0YXRlbWVudHMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKGFzc2VydGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0QXNzZXJ0aW9ucyhhc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcyhyZWZlcmVuY2VzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldFJlZmVyZW5jZXMocmVmZXJlbmNlcyk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKGFzc3VtcHRpb25zID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldEFzc3VtcHRpb25zKGFzc3VtcHRpb25zKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gY29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldERlY2xhcmVkVmFyaWFibGVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0RGVjbGFyZWRWYXJpYWJsZXMoKTtcblxuICAgIHJldHVybiBkZWNsYXJlZFZhcmlhYmxlcztcbiAgfVxuXG4gIGdldERlY2xhcmVkTWV0YXZhcmlhYmxlcygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gY29udGV4dC5nZXREZWNsYXJlZE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIHJldHVybiBkZWNsYXJlZE1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXREZWNsYXJlZEp1ZGdlbWVudHMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0RGVjbGFyZWRKdWRnZW1lbnRzKCk7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRKdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IGNoaWxkQ29udGV4dDsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBwYXJlbnRDb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBydWxlID0gY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBjb250ZXh0LmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZERlY2xhcmVkSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50cyA9IGNvbnRleHQuZmluZERlY2xhcmVkSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBkZWNsYXJlZEp1ZGdlbWVudHM7XG4gIH1cblxuICBmaW5kTWV0YUxldmVsQXNzdW1wdGlvbkJ5TWV0YUxldmVsQXNzdW1wdGlvbk5vZGUobWV0YUxldmVsQXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKG1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKTtcblxuICAgIHJldHVybiBtZXRhTGV2ZWxBc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gY29tcGxleFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbik7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGU7XG4gIH1cblxuICBmaW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBjaGlsZENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IHBhcmVudENvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0ID0gbnVsbCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBjaGlsZENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgbGFiZWxQcmVzZW50ID0gcGFyZW50Q29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSBjb250ZXh0LmlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gY29udGV4dC5pc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSBjb250ZXh0LmlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eVByZXNlbnQgPSBjb250ZXh0LmlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgc3RhdGVtZW50UHJlc2VudCA9IGNvbnRleHQuaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldHZ2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICByZWZlcmVuY2VQcmVzZW50ID0gY29udGV4dC5pc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0dnZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNEZWNsYXJlZEp1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZEp1ZGdlbWVudFByZXNlbnQgPSBjb250ZXh0LmlzRGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkSnVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhTGV2ZWwoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFMZXZlbCA9IGNvbnRleHQuaXNNZXRhTGV2ZWwoKTtcblxuICAgIHJldHVybiBtZXRhTGV2ZWw7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGFkZFRlcm1zKHRlcm1zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUZXJtcyh0ZXJtcyk7XG4gIH1cblxuICBhZGRGcmFtZXMoZnJhbWVzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRGcmFtZXMoZnJhbWVzKTtcbiAgfVxuXG4gIGFkZEVxdWFsaXRpZXMoZXF1YWxpdGllcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRXF1YWxpdGllcyhlcXVhbGl0aWVzKTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudHMoanVkZ2VtZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkSnVkZ2VtZW50cyhqdWRnZW1lbnRzKTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbnMoYXNzZXJ0aW9ucykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9ucyhhc3NlcnRpb25zKTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3RhdGVtZW50cyhzdGF0ZW1lbnRzKTtcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZXMocmVmZXJlbmNlcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlcyhyZWZlcmVuY2VzKTtcbiAgfVxuXG4gIGFkZEFzc3VtcHRpb25zKGFzc3VtcHRpb25zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3N1bXB0aW9ucyhhc3N1bXB0aW9ucyk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcyk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5KTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3RhdGVtZW50KHN0YXRlbWVudCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuICB9XG5cbiAgYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pO1xuICB9XG5cbiAgYWRkQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIGFkZERlY2xhcmVkVmFyaWFibGUoZGVjbGFyZWRWYXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRGVjbGFyZWRWYXJpYWJsZShkZWNsYXJlZFZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZE1ldGFMZXZlbEFzc3VtcHRpb24obWV0YUxldmVsQXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkTWV0YUxldmVsQXNzdW1wdGlvbihtZXRhTGV2ZWxBc3N1bXB0aW9uKTtcbiAgfVxuXG4gIGFkZERlY2xhcmVkTWV0YXZhcmlhYmxlKGRlY2xhcmVkTWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGREZWNsYXJlZE1ldGF2YXJpYWJsZShkZWNsYXJlZE1ldGF2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJDb250ZXh0QmFzZSIsImdldExleGVyIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJnZXRUZXJtcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZnJhbWVzIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdGllcyIsImdldFN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImdldEFzc3VtcHRpb25zIiwiYXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwiZ2V0Q29tYmluYXRvcnMiLCJpbmNsdWRlUmVsZWFzZSIsImNvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0RGVjbGFyZWRWYXJpYWJsZXMiLCJkZWNsYXJlZFZhcmlhYmxlcyIsImdldERlY2xhcmVkTWV0YXZhcmlhYmxlcyIsImRlY2xhcmVkTWV0YXZhcmlhYmxlcyIsImdldERlY2xhcmVkSnVkZ2VtZW50cyIsImRlY2xhcmVkSnVkZ2VtZW50cyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImNoaWxkQ29udGV4dCIsInBhcmVudENvbnRleHQiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicnVsZSIsImZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5IiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnQiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50IiwiZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb24iLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImZpbmRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZERlY2xhcmVkSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSIsIm1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOb2RlIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24iLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlIiwiZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImRlY2xhcmVkVmFyaWFibGUiLCJmaW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZGVjbGFyZWRNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImxhYmVsUHJlc2VudCIsImlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCIsImlzVGVybVByZXNlbnRCeVRlcm1Ob2RlIiwidGVybVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwibGFiZWxOb2RlIiwiaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZSIsImZyYW1lUHJlc2VudCIsImlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eVByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJlc2VudCIsImlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVQcmVzZW50IiwiaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXR2dmFyaWFibGVOb2RlIiwicmVmZXJlbmNlUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImlzRGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uIiwiaXNNZXRhTGV2ZWwiLCJtZXRhTGV2ZWwiLCJpc1N0YXRlZCIsInN0YXRlZCIsImFkZFRlcm1zIiwiYWRkRnJhbWVzIiwiYWRkRXF1YWxpdGllcyIsImFkZEp1ZGdlbWVudHMiLCJhZGRBc3NlcnRpb25zIiwiYWRkU3RhdGVtZW50cyIsImFkZFJlZmVyZW5jZXMiLCJhZGRBc3N1bXB0aW9ucyIsImFkZE1ldGF2YXJpYWJsZXMiLCJhZGRTdWJzdGl0dXRpb25zIiwiYWRkVGVybSIsImFkZEZyYW1lIiwiYWRkRXF1YWxpdHkiLCJhZGRKdWRnZW1lbnQiLCJhZGRTdGF0ZW1lbnQiLCJhZGRBc3NlcnRpb24iLCJhZGRSZWZlcmVuY2UiLCJhZGRBc3N1bXB0aW9uIiwiYWRkQXNzaWdubWVudCIsImFzc2lnbm1lbnQiLCJhZGRNZXRhdmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJhZGREZWNsYXJlZFZhcmlhYmxlIiwiYWRkTWV0YUxldmVsQXNzdW1wdGlvbiIsImFkZERlY2xhcmVkTWV0YXZhcmlhYmxlIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIl0sIm1hcHBpbmdzIjoi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