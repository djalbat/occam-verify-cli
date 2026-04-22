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
    getTokens() {
        const context = this.getContext(), tokens = context.getTokens();
        return tokens;
    }
    setTokens(tokens) {
        const context = this.getContext();
        context.setTokens(tokens);
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
    findDerivedSubstitutionByVariableNode(variableNode) {
        const context = this.getContext(), derivedSubstitution = context.findDerivedSubstitutionByVariableNode(variableNode);
        return derivedSubstitution;
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
    isStated() {
        const context = this.getContext(), stated = context.isStated();
        return stated;
    }
    isMetaLevel() {
        const context = this.getContext(), metaLevel = context.isMetaLevel();
        return metaLevel;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0LmdldFRva2VucygpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LnNldFRva2Vucyh0b2tlbnMpO1xuICB9XG5cbiAgZ2V0VGVybXModGVybXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0VGVybXModGVybXMpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKGZyYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRGcmFtZXMoZnJhbWVzKTtcblxuICAgIHJldHVybiBmcmFtZXM7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcyhlcXVhbGl0aWVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldEVxdWFsaXRpZXMoZXF1YWxpdGllcyk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoanVkZ2VtZW50cyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRKdWRnZW1lbnRzKGp1ZGdlbWVudHMpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKGFzc2VydGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0QXNzZXJ0aW9ucyhhc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cyhzdGF0ZW1lbnRzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldFN0YXRlbWVudHMoc3RhdGVtZW50cyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZXMoc2lnbmF0dXJlcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRTaWduYXR1cmVzKHNpZ25hdHVyZXMpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZXM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKHJlZmVyZW5jZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0UmVmZXJlbmNlcyhyZWZlcmVuY2VzKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0QXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhtZXRhdmFyaWFibGVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucyhwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRQcm9wZXJ0eVJlbGF0aW9ucyhwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBnZXREZXJpdmVkU3Vic3RpdHV0aW9ucyhkZXJpdmVkU3Vic3RpdHV0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXREZXJpdmVkU3Vic3RpdHV0aW9ucyhkZXJpdmVkU3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZGVyaXZlZFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVzID0gY29udGV4dC5nZXREZWNsYXJlZFZhcmlhYmxlcygpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZXMgPSBjb250ZXh0LmdldERlY2xhcmVkTWV0YXZhcmlhYmxlcygpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldERlY2xhcmVkSnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzID0gY29udGV4dC5nZXREZWNsYXJlZEp1ZGdlbWVudHMoKTtcblxuICAgIHJldHVybiBkZWNsYXJlZEp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gY2hpbGRDb250ZXh0OyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IHBhcmVudENvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIGZpbmRQcm9wZXJ0eUJ5UHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IGNvbnRleHQuZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBjb250ZXh0LmZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRQcm9wZXJ0eVJlbGF0aW9uQnlQcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gY29udGV4dC5maW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBmaW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kRGVyaXZlZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gZGVyaXZlZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmREZWNsYXJlZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZEp1ZGdlbWVudHMgPSBjb250ZXh0LmZpbmREZWNsYXJlZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRKdWRnZW1lbnRzO1xuICB9XG5cbiAgZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKG1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZShtZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YUxldmVsQXNzdW1wdGlvbjtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IGNvbnRleHQuZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBjb250ZXh0LmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGU7XG4gIH1cblxuICBmaW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBjaGlsZENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IHBhcmVudENvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0ID0gbnVsbCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBjaGlsZENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgbGFiZWxQcmVzZW50ID0gcGFyZW50Q29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSBjb250ZXh0LmlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gY29udGV4dC5pc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSBjb250ZXh0LmlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eVByZXNlbnQgPSBjb250ZXh0LmlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc2VydGlvblByZXNlbnQgPSBjb250ZXh0LmlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICBzdGF0ZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU2lnbmF0dXJlUHJlc2VudEJ5U2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNpZ25hdHVyZVByZXNlbnQgPSBjb250ZXh0LmlzU2lnbmF0dXJlUHJlc2VudEJ5U2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlKTtcblxuICAgIHJldHVybiBzaWduYXR1cmVQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSBjb250ZXh0LmlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldHZ2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICByZWZlcmVuY2VQcmVzZW50ID0gY29udGV4dC5pc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0dnZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzRGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNEZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBkZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzRGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0RlY2xhcmVkSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBkZWNsYXJlZEp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Rlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5vZGUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNEZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pO1xuXG4gICAgcmV0dXJuIGRlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBpc01ldGFMZXZlbCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YUxldmVsID0gY29udGV4dC5pc01ldGFMZXZlbCgpO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbDtcbiAgfVxuXG4gIGFkZFRlcm1zKHRlcm1zKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUZXJtcyh0ZXJtcyk7XG4gIH1cblxuICBhZGREZXJpdmVkU3Vic3RpdHV0aW9ucyhkZXJpdmVkU3Vic3RpdHV0aW9ucykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRGVyaXZlZFN1YnN0aXR1dGlvbnMoZGVyaXZlZFN1YnN0aXR1dGlvbnMpO1xuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEF4aW9tKGF4aW9tKTtcbiAgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRMZW1tYShsZW1tYSk7XG4gIH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFRoZW9yZW0odGhlb3JlbSk7XG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZENvbmplY3R1cmUoY29uamVjdHVyZSk7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFRlcm0odGVybSk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRnJhbWUoZnJhbWUpO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5KTtcbiAgfVxuXG4gIGFkZFByb3BlcnR5KHByb3BlcnR5KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gIH1cblxuICBhZGRKdWRnZW1lbnQoanVkZ2VtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3RhdGVtZW50KHN0YXRlbWVudCk7XG4gIH1cblxuICBhZGRTaWduYXR1cmUoc2lnbmF0dXJlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTaWduYXR1cmUoc2lnbmF0dXJlKTtcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuICB9XG5cbiAgYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pO1xuICB9XG5cbiAgYWRkQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgfVxuXG4gIGFkZFByb3BlcnR5UmVsYXRpb24ocHJvcGVydHlSZWxhdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkUHJvcGVydHlSZWxhdGlvbihwcm9wZXJ0eVJlbGF0aW9uKTtcbiAgfVxuXG4gIGFkZERlY2xhcmVkVmFyaWFibGUoZGVjbGFyZWRWYXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRGVjbGFyZWRWYXJpYWJsZShkZWNsYXJlZFZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZE1ldGFMZXZlbEFzc3VtcHRpb24obWV0YUxldmVsQXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkTWV0YUxldmVsQXNzdW1wdGlvbihtZXRhTGV2ZWxBc3N1bXB0aW9uKTtcbiAgfVxuXG4gIGFkZERlY2xhcmVkTWV0YXZhcmlhYmxlKGRlY2xhcmVkTWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGREZWNsYXJlZE1ldGF2YXJpYWJsZShkZWNsYXJlZE1ldGF2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbnRleHQiLCJDb250ZXh0QmFzZSIsImdldExleGVyIiwiY29udGV4dCIsImdldENvbnRleHQiLCJsZXhlciIsImdldFBhcnNlciIsInBhcnNlciIsImdldEZpbGVQYXRoIiwiZmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJnZXRUZXJtcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZnJhbWVzIiwiZ2V0UHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdGllcyIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImFzc2VydGlvbnMiLCJnZXRTdGF0ZW1lbnRzIiwic3RhdGVtZW50cyIsImdldFNpZ25hdHVyZXMiLCJzaWduYXR1cmVzIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImdldFByb3BlcnR5UmVsYXRpb25zIiwicHJvcGVydHlSZWxhdGlvbnMiLCJnZXREZXJpdmVkU3Vic3RpdHV0aW9ucyIsImRlcml2ZWRTdWJzdGl0dXRpb25zIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwiZ2V0Q29tYmluYXRvcnMiLCJpbmNsdWRlUmVsZWFzZSIsImNvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0RGVjbGFyZWRWYXJpYWJsZXMiLCJkZWNsYXJlZFZhcmlhYmxlcyIsImdldERlY2xhcmVkTWV0YXZhcmlhYmxlcyIsImRlY2xhcmVkTWV0YXZhcmlhYmxlcyIsImdldERlY2xhcmVkSnVkZ2VtZW50cyIsImRlY2xhcmVkSnVkZ2VtZW50cyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImNoaWxkQ29udGV4dCIsInBhcmVudENvbnRleHQiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicnVsZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb20iLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eSIsImZpbmRQcm9wZXJ0eUJ5UHJvcGVydHlOb2RlIiwicHJvcGVydHlOb2RlIiwicHJvcGVydHkiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudCIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnQiLCJmaW5kU2lnbmF0dXJlQnlTaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZSIsImZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRQcm9wZXJ0eVJlbGF0aW9uQnlQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbiIsImZpbmREZXJpdmVkU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUiLCJkZXJpdmVkU3Vic3RpdHV0aW9uIiwiZmluZERlY2xhcmVkSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSIsIm1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbiIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZGVjbGFyZWRWYXJpYWJsZSIsImZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwibGFiZWxQcmVzZW50IiwiaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50IiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlIiwiZnJhbWVQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25QcmVzZW50IiwiaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJlc2VudCIsImlzU2lnbmF0dXJlUHJlc2VudEJ5U2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldHZ2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VQcmVzZW50IiwiaXNEZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImRlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50IiwiaXNEZWNsYXJlZEp1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJkZWNsYXJlZEp1ZGdlbWVudFByZXNlbnQiLCJpc0Rlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlQW5kU3Vic3RpdHV0aW9uIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJpc01ldGFMZXZlbCIsIm1ldGFMZXZlbCIsImFkZFRlcm1zIiwiYWRkRGVyaXZlZFN1YnN0aXR1dGlvbnMiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwibGVtbWEiLCJhZGRUaGVvcmVtIiwidGhlb3JlbSIsImFkZENvbmplY3R1cmUiLCJjb25qZWN0dXJlIiwiYWRkVGVybSIsImFkZEZyYW1lIiwiYWRkRXF1YWxpdHkiLCJhZGRQcm9wZXJ0eSIsImFkZEp1ZGdlbWVudCIsImFkZEFzc2VydGlvbiIsImFkZFN0YXRlbWVudCIsImFkZFNpZ25hdHVyZSIsImFkZFJlZmVyZW5jZSIsImFkZEFzc3VtcHRpb24iLCJhZGRBc3NpZ25tZW50IiwiYXNzaWdubWVudCIsImFkZE1ldGF2YXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsImFkZFByb3BlcnR5UmVsYXRpb24iLCJhZGREZWNsYXJlZFZhcmlhYmxlIiwiYWRkTWV0YUxldmVsQXNzdW1wdGlvbiIsImFkZERlY2xhcmVkTWV0YXZhcmlhYmxlIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZP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