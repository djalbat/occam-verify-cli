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
    getProperties(properties = []) {
        const context = this.getContext();
        context.getProperties(properties);
        return properties;
    }
    getEqualities(equalities = []) {
        const context = this.getContext();
        context.getEqualities(equalities);
        return equalities;
    }
    getJudgements(judgements = []) {
        const context = this.getContext();
        context.getJudgements(judgements);
        return judgements;
    }
    getAssertions(assertions = []) {
        const context = this.getContext();
        context.getAssertions(assertions);
        return assertions;
    }
    getStatements(statements = []) {
        const context = this.getContext();
        context.getStatements(statements);
        return statements;
    }
    getSignatures(signatures = []) {
        const context = this.getContext();
        context.getSignatures(signatures);
        return signatures;
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
    getPropertyRelations(propertyRelations = []) {
        const context = this.getContext();
        context.getPropertyRelations(propertyRelations);
        return propertyRelations;
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
    findAxiomByReference(reference) {
        const context = this.getContext(), axiom = context.findAxiomByReference(reference);
        return axiom;
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
    findPropertyByPropertyNode(propertyNode) {
        const context = this.getContext(), property = context.findPropertyByPropertyNode(propertyNode);
        return property;
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
    findSignatureBySignatureNode(signatureNode) {
        const context = this.getContext(), signature = context.findSignatureBySignatureNode(signatureNode);
        return signature;
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
    findPropertyRelationByPropertyRelationNode(propertyRelationNode) {
        const context = this.getContext(), propertyRelation = context.findPropertyRelationByPropertyRelationNode(propertyRelationNode);
        return propertyRelation;
    }
    findDeclaredJudgementsByMetavariableNode(metavariableNode) {
        const context = this.getContext(), declaredJudgements = context.findDeclaredJudgementsByMetavariableNode(metavariableNode);
        return declaredJudgements;
    }
    findMetaLevelAssumptionByMetaLevelAssumptionNode(metaLevelAssumptionNode) {
        const context = this.getContext(), metaLevelAssumption = context.findMetaLevelAssumptionByMetaLevelAssumptionNode(metaLevelAssumptionNode);
        return metaLevelAssumption;
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
    isAssertionPresentByAssertionNode(assertionNode) {
        const context = this.getContext(), assertionPresent = context.isAssertionPresentByAssertionNode(assertionNode);
        return assertionPresent;
    }
    isStatementPresentByStatementNode(statementNode) {
        const context = this.getContext(), statementPresent = context.isStatementPresentByStatementNode(statementNode);
        return statementPresent;
    }
    isSignaturePresentBySignatureNode(signatureNode) {
        const context = this.getContext(), signaturePresent = context.isSignaturePresentBySignatureNode(signatureNode);
        return signaturePresent;
    }
    isMetavariablePresentByMetavariableNode(metavariableNode) {
        const context = this.getContext(), metavariablePresent = context.isMetavariablePresentByMetavariableNode(metavariableNode);
        return metavariablePresent;
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
    addAxiom(axiom) {
        const context = this.getContext();
        context.addAxiom(axiom);
    }
    addLemma(lemma) {
        const context = this.getContext();
        context.addLemma(lemma);
    }
    addTheorem(theorem) {
        const context = this.getContext();
        context.addTheorem(theorem);
    }
    addConjecture(conjecture) {
        const context = this.getContext();
        context.addConjecture(conjecture);
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
    addProperty(property) {
        const context = this.getContext();
        context.addProperty(property);
    }
    addJudgement(judgement) {
        const context = this.getContext();
        context.addJudgement(judgement);
    }
    addAssertion(assertion) {
        const context = this.getContext();
        context.addAssertion(assertion);
    }
    addStatement(statement) {
        const context = this.getContext();
        context.addStatement(statement);
    }
    addSignature(signature) {
        const context = this.getContext();
        context.addSignature(signature);
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
    addPropertyRelation(propertyRelation) {
        const context = this.getContext();
        context.addPropertyRelation(propertyRelation);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXModGVybXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0VGVybXModGVybXMpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKGZyYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRGcmFtZXMoZnJhbWVzKTtcblxuICAgIHJldHVybiBmcmFtZXM7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcyhlcXVhbGl0aWVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldEVxdWFsaXRpZXMoZXF1YWxpdGllcyk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoanVkZ2VtZW50cyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRKdWRnZW1lbnRzKGp1ZGdlbWVudHMpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKGFzc2VydGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0QXNzZXJ0aW9ucyhhc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cyhzdGF0ZW1lbnRzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldFN0YXRlbWVudHMoc3RhdGVtZW50cyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZXMoc2lnbmF0dXJlcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRTaWduYXR1cmVzKHNpZ25hdHVyZXMpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZXM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKHJlZmVyZW5jZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0UmVmZXJlbmNlcyhyZWZlcmVuY2VzKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0QXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhtZXRhdmFyaWFibGVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucyhwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRQcm9wZXJ0eVJlbGF0aW9ucyhwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBnZXREZXJpdmVkU3Vic3RpdHV0aW9ucyhkZXJpdmVkU3Vic3RpdHV0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXREZXJpdmVkU3Vic3RpdHV0aW9ucyhkZXJpdmVkU3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZGVyaXZlZFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVzID0gY29udGV4dC5nZXREZWNsYXJlZFZhcmlhYmxlcygpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZXMgPSBjb250ZXh0LmdldERlY2xhcmVkTWV0YXZhcmlhYmxlcygpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldERlY2xhcmVkSnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzID0gY29udGV4dC5nZXREZWNsYXJlZEp1ZGdlbWVudHMoKTtcblxuICAgIHJldHVybiBkZWNsYXJlZEp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gY2hpbGRDb250ZXh0OyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IHBhcmVudENvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIGZpbmRQcm9wZXJ0eUJ5UHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IGNvbnRleHQuZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBjb250ZXh0LmZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRQcm9wZXJ0eVJlbGF0aW9uQnlQcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gY29udGV4dC5maW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBmaW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzID0gY29udGV4dC5maW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkSnVkZ2VtZW50cztcbiAgfVxuXG4gIGZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZShtZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uID0gY29udGV4dC5maW5kTWV0YUxldmVsQXNzdW1wdGlvbkJ5TWV0YUxldmVsQXNzdW1wdGlvbk5vZGUobWV0YUxldmVsQXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbEFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBkZWNsYXJlZFZhcmlhYmxlO1xuICB9XG5cbiAgZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBkZWNsYXJlZE1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHBhcmVudENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gY2hpbGRDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSBwYXJlbnRDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCA9IG51bGwpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHBhcmVudENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gY2hpbGRDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGxhYmVsUHJlc2VudCA9IHBhcmVudENvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9IGNvbnRleHQuaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gY29udGV4dC5pc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWVQcmVzZW50O1xuICB9XG5cbiAgaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZXF1YWxpdHlQcmVzZW50ID0gY29udGV4dC5pc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgc3RhdGVtZW50UHJlc2VudCA9IGNvbnRleHQuaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1NpZ25hdHVyZVByZXNlbnRCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaWduYXR1cmVQcmVzZW50ID0gY29udGV4dC5pc1NpZ25hdHVyZVByZXNlbnRCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXR2dmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgcmVmZXJlbmNlUHJlc2VudCA9IGNvbnRleHQuaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldHZ2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc0Rlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzRGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gZGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc0RlY2xhcmVkSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZEp1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNEZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzRGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBkZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YUxldmVsKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGV2ZWwgPSBjb250ZXh0LmlzTWV0YUxldmVsKCk7XG5cbiAgICByZXR1cm4gbWV0YUxldmVsO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBhZGRUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkVGVybXModGVybXMpO1xuICB9XG5cbiAgYWRkRGVyaXZlZFN1YnN0aXR1dGlvbnMoZGVyaXZlZFN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZERlcml2ZWRTdWJzdGl0dXRpb25zKGRlcml2ZWRTdWJzdGl0dXRpb25zKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkTGVtbWEobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUaGVvcmVtKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUZXJtKHRlcm0pO1xuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG4gIH1cblxuICBhZGRQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkUHJvcGVydHkocHJvcGVydHkpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuICB9XG5cbiAgYWRkU2lnbmF0dXJlKHNpZ25hdHVyZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU2lnbmF0dXJlKHNpZ25hdHVyZSk7XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcbiAgfVxuXG4gIGFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcbiAgfVxuXG4gIGFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gIH1cblxuICBhZGRQcm9wZXJ0eVJlbGF0aW9uKHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFByb3BlcnR5UmVsYXRpb24ocHJvcGVydHlSZWxhdGlvbik7XG4gIH1cblxuICBhZGREZWNsYXJlZFZhcmlhYmxlKGRlY2xhcmVkVmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZERlY2xhcmVkVmFyaWFibGUoZGVjbGFyZWRWYXJpYWJsZSk7XG4gIH1cblxuICBhZGRNZXRhTGV2ZWxBc3N1bXB0aW9uKG1ldGFMZXZlbEFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGFMZXZlbEFzc3VtcHRpb24obWV0YUxldmVsQXNzdW1wdGlvbik7XG4gIH1cblxuICBhZGREZWNsYXJlZE1ldGF2YXJpYWJsZShkZWNsYXJlZE1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUoZGVjbGFyZWRNZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiQ29udGV4dEJhc2UiLCJnZXRMZXhlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRGaWxlUGF0aCIsImZpbGVQYXRoIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImZyYW1lcyIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXRpZXMiLCJnZXRKdWRnZW1lbnRzIiwianVkZ2VtZW50cyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiZ2V0U3RhdGVtZW50cyIsInN0YXRlbWVudHMiLCJnZXRTaWduYXR1cmVzIiwic2lnbmF0dXJlcyIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiZ2V0QXNzdW1wdGlvbnMiLCJhc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJnZXRQcm9wZXJ0eVJlbGF0aW9ucyIsInByb3BlcnR5UmVsYXRpb25zIiwiZ2V0RGVyaXZlZFN1YnN0aXR1dGlvbnMiLCJkZXJpdmVkU3Vic3RpdHV0aW9ucyIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsImdldENvbWJpbmF0b3JzIiwiaW5jbHVkZVJlbGVhc2UiLCJjb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldERlY2xhcmVkVmFyaWFibGVzIiwiZGVjbGFyZWRWYXJpYWJsZXMiLCJnZXREZWNsYXJlZE1ldGF2YXJpYWJsZXMiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZXMiLCJnZXREZWNsYXJlZEp1ZGdlbWVudHMiLCJkZWNsYXJlZEp1ZGdlbWVudHMiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJjaGlsZENvbnRleHQiLCJwYXJlbnRDb250ZXh0IiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJ1bGUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHkiLCJmaW5kUHJvcGVydHlCeVByb3BlcnR5Tm9kZSIsInByb3BlcnR5Tm9kZSIsInByb3BlcnR5IiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnQiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50IiwiZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZU5vZGUiLCJzaWduYXR1cmUiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbiIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb24iLCJmaW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJkZWNsYXJlZFZhcmlhYmxlIiwiZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJsYWJlbFByZXNlbnQiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSIsInRlcm1QcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZSIsImxhYmVsTm9kZSIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwiaXNTaWduYXR1cmVQcmVzZW50QnlTaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwibWV0dnZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVByZXNlbnQiLCJpc0Rlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnQiLCJpc0RlY2xhcmVkSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImRlY2xhcmVkSnVkZ2VtZW50UHJlc2VudCIsImlzRGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24iLCJpc01ldGFMZXZlbCIsIm1ldGFMZXZlbCIsImlzU3RhdGVkIiwic3RhdGVkIiwiYWRkVGVybXMiLCJhZGREZXJpdmVkU3Vic3RpdHV0aW9ucyIsImFkZEF4aW9tIiwiYWRkTGVtbWEiLCJsZW1tYSIsImFkZFRoZW9yZW0iLCJ0aGVvcmVtIiwiYWRkQ29uamVjdHVyZSIsImNvbmplY3R1cmUiLCJhZGRUZXJtIiwiYWRkRnJhbWUiLCJhZGRFcXVhbGl0eSIsImFkZFByb3BlcnR5IiwiYWRkSnVkZ2VtZW50IiwiYWRkQXNzZXJ0aW9uIiwiYWRkU3RhdGVtZW50IiwiYWRkU2lnbmF0dXJlIiwiYWRkUmVmZXJlbmNlIiwiYWRkQXNzdW1wdGlvbiIsImFkZEFzc2lnbm1lbnQiLCJhc3NpZ25tZW50IiwiYWRkTWV0YXZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwiYWRkUHJvcGVydHlSZWxhdGlvbiIsImFkZERlY2xhcmVkVmFyaWFibGUiLCJhZGRNZXRhTGV2ZWxBc3N1bXB0aW9uIiwiYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0NBRmtCO0FBRXhCLE1BQU1BLGdCQUFnQkMsdUJBQVc7SUFDOUNDLFdBQVc7UUFDVCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsUUFBUUYsUUFBUUQsUUFBUTtRQUU5QixPQUFPRztJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNSCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkcsU0FBU0osUUFBUUcsU0FBUztRQUVoQyxPQUFPQztJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNTCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkssV0FBV04sUUFBUUssV0FBVztRQUVwQyxPQUFPQztJQUNUO0lBRUFDLFNBQVNDLFFBQVEsRUFBRSxFQUFFO1FBQ25CLE1BQU1SLFVBQVUsSUFBSSxDQUFDQyxVQUFVO1FBRS9CRCxRQUFRTyxRQUFRLENBQUNDO1FBRWpCLE9BQU9BO0lBQ1Q7SUFFQUMsVUFBVUMsU0FBUyxFQUFFLEVBQUU7UUFDckIsTUFBTVYsVUFBVSxJQUFJLENBQUNDLFVBQVU7UUFFL0JELFFBQVFTLFNBQVMsQ0FBQ0M7UUFFbEIsT0FBT0E7SUFDVDtJQUVBQyxjQUFjQyxhQUFh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