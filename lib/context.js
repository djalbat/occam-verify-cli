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
    getDerivedSubstitutions(derivedSubstitutions = []) {
        const context = this.getContext();
        context.getDerivedSubstitutions(derivedSubstitutions);
        return derivedSubstitutions;
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
    isDerivedSubstitutionPresentByMetavariableNode(metavariableNode) {
        const context = this.getContext(), derivedSubstitutionPresent = context.isDerivedSubstitutionPresentByMetavariableNode(metavariableNode);
        return derivedSubstitutionPresent;
    }
    isDeclaredJudgementPresentByMetavariableNode(metavariableNode) {
        const context = this.getContext(), declaredJudgementPresent = context.isDeclaredJudgementPresentByMetavariableNode(metavariableNode);
        return declaredJudgementPresent;
    }
    isDerivedSubstitutionPresentByMetavariableNodeAndSubstitution(metavariableNode, substitution) {
        const context = this.getContext(), derivedSubstitutionPresent = context.isDerivedSubstitutionPresentByMetavariableNodeAndSubstitution(metavariableNode, substitution);
        return derivedSubstitutionPresent;
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
    addDerivedSubstitutions(derivedSubstitutions) {
        const context = this.getContext();
        context.addDerivedSubstitutions(derivedSubstitutions);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXModGVybXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0VGVybXModGVybXMpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKGZyYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRGcmFtZXMoZnJhbWVzKTtcblxuICAgIHJldHVybiBmcmFtZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKGp1ZGdlbWVudHMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0SnVkZ2VtZW50cyhqdWRnZW1lbnRzKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcyhlcXVhbGl0aWVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldEVxdWFsaXRpZXMoZXF1YWxpdGllcyk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoc3RhdGVtZW50cyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRTdGF0ZW1lbnRzKHN0YXRlbWVudHMpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKGFzc2VydGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0QXNzZXJ0aW9ucyhhc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcyhyZWZlcmVuY2VzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldFJlZmVyZW5jZXMocmVmZXJlbmNlcyk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKGFzc3VtcHRpb25zID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldEFzc3VtcHRpb25zKGFzc3VtcHRpb25zKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0U3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RGVyaXZlZFN1YnN0aXR1dGlvbnMoZGVyaXZlZFN1YnN0aXR1dGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0RGVyaXZlZFN1YnN0aXR1dGlvbnMoZGVyaXZlZFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIGRlcml2ZWRTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gY29udGV4dC5nZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldERlY2xhcmVkVmFyaWFibGVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0RGVjbGFyZWRWYXJpYWJsZXMoKTtcblxuICAgIHJldHVybiBkZWNsYXJlZFZhcmlhYmxlcztcbiAgfVxuXG4gIGdldERlY2xhcmVkTWV0YXZhcmlhYmxlcygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gY29udGV4dC5nZXREZWNsYXJlZE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIHJldHVybiBkZWNsYXJlZE1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXREZWNsYXJlZEp1ZGdlbWVudHMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0RGVjbGFyZWRKdWRnZW1lbnRzKCk7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRKdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IGNoaWxkQ29udGV4dDsgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBwYXJlbnRDb250ZXh0LmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBydWxlID0gY29udGV4dC5maW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IGNvbnRleHQuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0ZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZnJhbWUgPSBjb250ZXh0LmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBjb250ZXh0LmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50ID0gY29udGV4dC5maW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZERlY2xhcmVkSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50cyA9IGNvbnRleHQuZmluZERlY2xhcmVkSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBkZWNsYXJlZEp1ZGdlbWVudHM7XG4gIH1cblxuICBmaW5kTWV0YUxldmVsQXNzdW1wdGlvbkJ5TWV0YUxldmVsQXNzdW1wdGlvbk5vZGUobWV0YUxldmVsQXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKG1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKTtcblxuICAgIHJldHVybiBtZXRhTGV2ZWxBc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gY29tcGxleFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbik7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGU7XG4gIH1cblxuICBmaW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBjaGlsZENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IHBhcmVudENvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0ID0gbnVsbCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBjaGlsZENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgbGFiZWxQcmVzZW50ID0gcGFyZW50Q29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSBjb250ZXh0LmlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gY29udGV4dC5pc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSBjb250ZXh0LmlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eVByZXNlbnQgPSBjb250ZXh0LmlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgc3RhdGVtZW50UHJlc2VudCA9IGNvbnRleHQuaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldHZ2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICByZWZlcmVuY2VQcmVzZW50ID0gY29udGV4dC5pc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0dnZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzRGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNEZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBkZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzRGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0RlY2xhcmVkSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBkZWNsYXJlZEp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Rlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNEZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIGRlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhTGV2ZWwoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFMZXZlbCA9IGNvbnRleHQuaXNNZXRhTGV2ZWwoKTtcblxuICAgIHJldHVybiBtZXRhTGV2ZWw7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGFkZFRlcm1zKHRlcm1zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUZXJtcyh0ZXJtcyk7XG4gIH1cblxuICBhZGREZXJpdmVkU3Vic3RpdHV0aW9ucyhkZXJpdmVkU3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRGVyaXZlZFN1YnN0aXR1dGlvbnMoZGVyaXZlZFN1YnN0aXR1dGlvbnMpO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUZXJtKHRlcm0pO1xuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuICB9XG5cbiAgYWRkQXNzZXJ0aW9uKGFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcbiAgfVxuXG4gIGFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcbiAgfVxuXG4gIGFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gIH1cblxuICBhZGREZWNsYXJlZFZhcmlhYmxlKGRlY2xhcmVkVmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZERlY2xhcmVkVmFyaWFibGUoZGVjbGFyZWRWYXJpYWJsZSk7XG4gIH1cblxuICBhZGRNZXRhTGV2ZWxBc3N1bXB0aW9uKG1ldGFMZXZlbEFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGFMZXZlbEFzc3VtcHRpb24obWV0YUxldmVsQXNzdW1wdGlvbik7XG4gIH1cblxuICBhZGREZWNsYXJlZE1ldGF2YXJpYWJsZShkZWNsYXJlZE1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUoZGVjbGFyZWRNZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiQ29udGV4dEJhc2UiLCJnZXRMZXhlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRGaWxlUGF0aCIsImZpbGVQYXRoIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImZyYW1lcyIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXRpZXMiLCJnZXRTdGF0ZW1lbnRzIiwic3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImdldERlcml2ZWRTdWJzdGl0dXRpb25zIiwiZGVyaXZlZFN1YnN0aXR1dGlvbnMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJnZXRDb21iaW5hdG9ycyIsImluY2x1ZGVSZWxlYXNlIiwiY29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXREZWNsYXJlZFZhcmlhYmxlcyIsImRlY2xhcmVkVmFyaWFibGVzIiwiZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzIiwiZGVjbGFyZWRNZXRhdmFyaWFibGVzIiwiZ2V0RGVjbGFyZWRKdWRnZW1lbnRzIiwiZGVjbGFyZWRKdWRnZW1lbnRzIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJmaW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiY2hpbGRDb250ZXh0IiwicGFyZW50Q29udGV4dCIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJydWxlIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHkiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudCIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnQiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbiIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbiIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZGVjbGFyZWRWYXJpYWJsZSIsImZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwibGFiZWxQcmVzZW50IiwiaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50IiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlIiwiZnJhbWVQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwiaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldHZ2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VQcmVzZW50IiwiaXNEZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImRlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNEZWNsYXJlZEp1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJkZWNsYXJlZEp1ZGdlbWVudFByZXNlbnQiLCJpc0Rlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uIiwiaXNNZXRhTGV2ZWwiLCJtZXRhTGV2ZWwiLCJpc1N0YXRlZCIsInN0YXRlZCIsImFkZFRlcm1zIiwiYWRkRGVyaXZlZFN1YnN0aXR1dGlvbnMiLCJhZGRUZXJtIiwiYWRkRnJhbWUiLCJhZGRFcXVhbGl0eSIsImFkZEp1ZGdlbWVudCIsImFkZFN0YXRlbWVudCIsImFkZEFzc2VydGlvbiIsImFkZFJlZmVyZW5jZSIsImFkZEFzc3VtcHRpb24iLCJhZGRBc3NpZ25tZW50IiwiYXNzaWdubWVudCIsImFkZE1ldGF2YXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsImFkZERlY2xhcmVkVmFyaWFibGUiLCJhZGRNZXRhTGV2ZWxBc3N1bXB0aW9uIiwiYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0NBRmtCO0FBRXhCLE1BQU1BLGdCQUFnQkMsdUJBQVc7SUFDOUNDLFdBQVc7UUFDVCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsUUFBUUYsUUFBUUQsUUFBUTtRQUU5QixPQUFPRztJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNSCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkcsU0FBU0osUUFBUUcsU0FBUztRQUVoQyxPQUFPQztJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNTCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkssV0FBV04sUUFBUUssV0FBVztRQUVwQyxPQUFPQztJQUNUO0lBRUFDLFNBQVNDLFFBQVEsRUFBRSxFQUFFO1FBQ25CLE1BQU1SLFVBQVUsSUFBSSxDQUFDQyxVQUFVO1FBRS9CRCxRQUFRTyxRQUFRLENBQUNDO1FBRWpCLE9BQU9BO0lBQ1Q7SUFFQUMsVUFBVUMsU0FBUyxFQUFFLEVBQUU7UUFDckIsTUFBTVYsVUFBVSxJQUFJLENBQUNDLFVBQVU7UUFFL0JELFFBQVFTLFNBQVMsQ0FBQ0M7UUFFbEIsT0FBT0E7SUFDVDtJQUVBQyxjQUFjQyxhQUFhLEVBQUUsRUFBRTtRQUM3QixNQUFNWixVQUFVLElBQUksQ0FBQ0MsVUFBVTtRQUUvQkQsUUFBUVcsYUFBYSxDQUFDQztRQUV0QixPQUFPQTtJQUNUO0lBRUFDLGNBQWNDLGFBQWEsRUFBRSxFQUFFO1FBQzdCLE1BQU1kLFVBQVUsSUFBSSxDQUFDQyxVQUFVO1FBRS9CRCxRQUFRYSxhQUFhLENBQUNDO1FB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