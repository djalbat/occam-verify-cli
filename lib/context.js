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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0LmdldFRva2VucygpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHNldFRva2Vucyh0b2tlbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LnNldFRva2Vucyh0b2tlbnMpO1xuICB9XG5cbiAgZ2V0VGVybXModGVybXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0VGVybXModGVybXMpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKGZyYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRGcmFtZXMoZnJhbWVzKTtcblxuICAgIHJldHVybiBmcmFtZXM7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcyhlcXVhbGl0aWVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldEVxdWFsaXRpZXMoZXF1YWxpdGllcyk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoanVkZ2VtZW50cyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRKdWRnZW1lbnRzKGp1ZGdlbWVudHMpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKGFzc2VydGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0QXNzZXJ0aW9ucyhhc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cyhzdGF0ZW1lbnRzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldFN0YXRlbWVudHMoc3RhdGVtZW50cyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZXMoc2lnbmF0dXJlcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRTaWduYXR1cmVzKHNpZ25hdHVyZXMpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZXM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKHJlZmVyZW5jZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0UmVmZXJlbmNlcyhyZWZlcmVuY2VzKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0QXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhtZXRhdmFyaWFibGVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucyhwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRQcm9wZXJ0eVJlbGF0aW9ucyhwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBnZXREZXJpdmVkU3Vic3RpdHV0aW9ucyhkZXJpdmVkU3Vic3RpdHV0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXREZXJpdmVkU3Vic3RpdHV0aW9ucyhkZXJpdmVkU3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZGVyaXZlZFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVzID0gY29udGV4dC5nZXREZWNsYXJlZFZhcmlhYmxlcygpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZXMgPSBjb250ZXh0LmdldERlY2xhcmVkTWV0YXZhcmlhYmxlcygpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldERlY2xhcmVkSnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzID0gY29udGV4dC5nZXREZWNsYXJlZEp1ZGdlbWVudHMoKTtcblxuICAgIHJldHVybiBkZWNsYXJlZEp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gY2hpbGRDb250ZXh0OyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IHBhcmVudENvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIGZpbmRQcm9wZXJ0eUJ5UHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IGNvbnRleHQuZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBjb250ZXh0LmZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRQcm9wZXJ0eVJlbGF0aW9uQnlQcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gY29udGV4dC5maW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBmaW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzID0gY29udGV4dC5maW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkSnVkZ2VtZW50cztcbiAgfVxuXG4gIGZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZShtZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uID0gY29udGV4dC5maW5kTWV0YUxldmVsQXNzdW1wdGlvbkJ5TWV0YUxldmVsQXNzdW1wdGlvbk5vZGUobWV0YUxldmVsQXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbEFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBjb250ZXh0LmZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBkZWNsYXJlZFZhcmlhYmxlO1xuICB9XG5cbiAgZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBkZWNsYXJlZE1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHBhcmVudENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gY2hpbGRDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSBwYXJlbnRDb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCA9IG51bGwpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHBhcmVudENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gY2hpbGRDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGxhYmVsUHJlc2VudCA9IHBhcmVudENvbnRleHQuaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9IGNvbnRleHQuaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gY29udGV4dC5pc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICByZXR1cm4gZnJhbWVQcmVzZW50O1xuICB9XG5cbiAgaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZXF1YWxpdHlQcmVzZW50ID0gY29udGV4dC5pc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgc3RhdGVtZW50UHJlc2VudCA9IGNvbnRleHQuaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1NpZ25hdHVyZVByZXNlbnRCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaWduYXR1cmVQcmVzZW50ID0gY29udGV4dC5pc1NpZ25hdHVyZVByZXNlbnRCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXR2dmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgcmVmZXJlbmNlUHJlc2VudCA9IGNvbnRleHQuaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldHZ2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc0Rlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzRGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gZGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc0RlY2xhcmVkSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZEp1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNEZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzRGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBkZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgaXNNZXRhTGV2ZWwoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFMZXZlbCA9IGNvbnRleHQuaXNNZXRhTGV2ZWwoKTtcblxuICAgIHJldHVybiBtZXRhTGV2ZWw7XG4gIH1cblxuICBhZGRUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkVGVybXModGVybXMpO1xuICB9XG5cbiAgYWRkRGVyaXZlZFN1YnN0aXR1dGlvbnMoZGVyaXZlZFN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZERlcml2ZWRTdWJzdGl0dXRpb25zKGRlcml2ZWRTdWJzdGl0dXRpb25zKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkTGVtbWEobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUaGVvcmVtKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUZXJtKHRlcm0pO1xuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG4gIH1cblxuICBhZGRQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkUHJvcGVydHkocHJvcGVydHkpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuICB9XG5cbiAgYWRkU2lnbmF0dXJlKHNpZ25hdHVyZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU2lnbmF0dXJlKHNpZ25hdHVyZSk7XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcbiAgfVxuXG4gIGFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcbiAgfVxuXG4gIGFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gIH1cblxuICBhZGRQcm9wZXJ0eVJlbGF0aW9uKHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFByb3BlcnR5UmVsYXRpb24ocHJvcGVydHlSZWxhdGlvbik7XG4gIH1cblxuICBhZGREZWNsYXJlZFZhcmlhYmxlKGRlY2xhcmVkVmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZERlY2xhcmVkVmFyaWFibGUoZGVjbGFyZWRWYXJpYWJsZSk7XG4gIH1cblxuICBhZGRNZXRhTGV2ZWxBc3N1bXB0aW9uKG1ldGFMZXZlbEFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGFMZXZlbEFzc3VtcHRpb24obWV0YUxldmVsQXNzdW1wdGlvbik7XG4gIH1cblxuICBhZGREZWNsYXJlZE1ldGF2YXJpYWJsZShkZWNsYXJlZE1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUoZGVjbGFyZWRNZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiQ29udGV4dEJhc2UiLCJnZXRMZXhlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRGaWxlUGF0aCIsImZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwidG9rZW5zIiwic2V0VG9rZW5zIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImZyYW1lcyIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXRpZXMiLCJnZXRKdWRnZW1lbnRzIiwianVkZ2VtZW50cyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiZ2V0U3RhdGVtZW50cyIsInN0YXRlbWVudHMiLCJnZXRTaWduYXR1cmVzIiwic2lnbmF0dXJlcyIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiZ2V0QXNzdW1wdGlvbnMiLCJhc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJnZXRQcm9wZXJ0eVJlbGF0aW9ucyIsInByb3BlcnR5UmVsYXRpb25zIiwiZ2V0RGVyaXZlZFN1YnN0aXR1dGlvbnMiLCJkZXJpdmVkU3Vic3RpdHV0aW9ucyIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsImdldENvbWJpbmF0b3JzIiwiaW5jbHVkZVJlbGVhc2UiLCJjb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldERlY2xhcmVkVmFyaWFibGVzIiwiZGVjbGFyZWRWYXJpYWJsZXMiLCJnZXREZWNsYXJlZE1ldGF2YXJpYWJsZXMiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZXMiLCJnZXREZWNsYXJlZEp1ZGdlbWVudHMiLCJkZWNsYXJlZEp1ZGdlbWVudHMiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJjaGlsZENvbnRleHQiLCJwYXJlbnRDb250ZXh0IiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJ1bGUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHkiLCJmaW5kUHJvcGVydHlCeVByb3BlcnR5Tm9kZSIsInByb3BlcnR5Tm9kZSIsInByb3BlcnR5IiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnQiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50IiwiZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZU5vZGUiLCJzaWduYXR1cmUiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbiIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb24iLCJmaW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJkZWNsYXJlZFZhcmlhYmxlIiwiZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJsYWJlbFByZXNlbnQiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSIsInRlcm1QcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZSIsImxhYmVsTm9kZSIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwiaXNTaWduYXR1cmVQcmVzZW50QnlTaWduYXR1cmVOb2RlIiwic2lnbmF0dXJlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwibWV0dnZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVByZXNlbnQiLCJpc0Rlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnQiLCJpc0RlY2xhcmVkSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImRlY2xhcmVkSnVkZ2VtZW50UHJlc2VudCIsImlzRGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24iLCJpc1N0YXRlZCIsInN0YXRlZCIsImlzTWV0YUxldmVsIiwibWV0YUxldmVsIiwiYWRkVGVybXMiLCJhZGREZXJpdmVkU3Vic3RpdHV0aW9ucyIsImFkZEF4aW9tIiwiYWRkTGVtbWEiLCJsZW1tYSIsImFkZFRoZW9yZW0iLCJ0aGVvcmVtIiwiYWRkQ29uamVjdHVyZSIsImNvbmplY3R1cmUiLCJhZGRUZXJtIiwiYWRkRnJhbWUiLCJhZGRFcXVhbGl0eSIsImFkZFByb3BlcnR5IiwiYWRkSnVkZ2VtZW50IiwiYWRkQXNzZXJ0aW9uIiwiYWRkU3RhdGVtZW50IiwiYWRkU2lnbmF0dXJlIiwiYWRkUmVmZXJlbmNlIiwiYWRkQXNzdW1wdGlvbiIsImFkZEFzc2lnbm1lbnQiLCJhc3NpZ25tZW50IiwiYWRkTWV0YXZhcmlhYmxlIiwiYWRkU3Vic3RpdHV0aW9uIiwiYWRkUHJvcGVydHlSZWxhdGlvbiIsImFkZERlY2xhcmVkVmFyaWFibGUiLCJhZGRNZXRhTGV2ZWxBc3N1bXB0aW9uIiwiYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0NBRmtCO0FBRXhCLE1BQU1BLGdCQUFnQkMsdUJBQVc7SUFDOUNDLFdBQVc7UUFDVCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsUUFBUUYsUUFBUUQsUUFBUTtRQUU5QixPQUFPRztJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNSCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkcsU0FBU0osUUFBUUcsU0FBUztRQUVoQyxPQUFPQztJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNTCxVQUFVLElBQUksQ0FBQ0Ms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