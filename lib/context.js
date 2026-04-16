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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXModGVybXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0VGVybXModGVybXMpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKGZyYW1lcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRGcmFtZXMoZnJhbWVzKTtcblxuICAgIHJldHVybiBmcmFtZXM7XG4gIH1cblxuICBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcyhlcXVhbGl0aWVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldEVxdWFsaXRpZXMoZXF1YWxpdGllcyk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoanVkZ2VtZW50cyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRKdWRnZW1lbnRzKGp1ZGdlbWVudHMpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKGFzc2VydGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0QXNzZXJ0aW9ucyhhc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cyhzdGF0ZW1lbnRzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldFN0YXRlbWVudHMoc3RhdGVtZW50cyk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFNpZ25hdHVyZXMoc2lnbmF0dXJlcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRTaWduYXR1cmVzKHNpZ25hdHVyZXMpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZXM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKHJlZmVyZW5jZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0UmVmZXJlbmNlcyhyZWZlcmVuY2VzKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuZ2V0QXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhtZXRhdmFyaWFibGVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmdldE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucyhwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXRQcm9wZXJ0eVJlbGF0aW9ucyhwcm9wZXJ0eVJlbGF0aW9ucyk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbnM7XG4gIH1cblxuICBnZXREZXJpdmVkU3Vic3RpdHV0aW9ucyhkZXJpdmVkU3Vic3RpdHV0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5nZXREZXJpdmVkU3Vic3RpdHV0aW9ucyhkZXJpdmVkU3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZGVyaXZlZFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRWYXJpYWJsZXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVzID0gY29udGV4dC5nZXREZWNsYXJlZFZhcmlhYmxlcygpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZXMgPSBjb250ZXh0LmdldERlY2xhcmVkTWV0YXZhcmlhYmxlcygpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldERlY2xhcmVkSnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzID0gY29udGV4dC5nZXREZWNsYXJlZEp1ZGdlbWVudHMoKTtcblxuICAgIHJldHVybiBkZWNsYXJlZEp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gY2hpbGRDb250ZXh0OyAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IHBhcmVudENvbnRleHQuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIGZpbmRQcm9wZXJ0eUJ5UHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IGNvbnRleHQuZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBjb250ZXh0LmZpbmRTaWduYXR1cmVCeVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSk7XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGNvbnRleHQuZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRQcm9wZXJ0eVJlbGF0aW9uQnlQcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gY29udGV4dC5maW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBmaW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRzID0gY29udGV4dC5maW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkSnVkZ2VtZW50cztcbiAgfVxuXG4gIGZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZShtZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uID0gY29udGV4dC5maW5kTWV0YUxldmVsQXNzdW1wdGlvbkJ5TWV0YUxldmVsQXNzdW1wdGlvbk5vZGUobWV0YUxldmVsQXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbEFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgIHJldHVybiBjb21wbGV4U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IGNvbnRleHQuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRWYXJpYWJsZTtcbiAgfVxuXG4gIGZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRNZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IGNoaWxkQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVQcmVzZW50ID0gcGFyZW50Q29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBwYXJlbnRDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IGNoaWxkQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBsYWJlbFByZXNlbnQgPSBwYXJlbnRDb250ZXh0LmlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdGVybVByZXNlbnQgPSBjb250ZXh0LmlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGNvbnRleHQuaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZyYW1lUHJlc2VudCA9IGNvbnRleHQuaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgcmV0dXJuIGZyYW1lUHJlc2VudDtcbiAgfVxuXG4gIGlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVxdWFsaXR5UHJlc2VudCA9IGNvbnRleHQuaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5UHJlc2VudDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSBjb250ZXh0LmlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIHN0YXRlbWVudFByZXNlbnQgPSBjb250ZXh0LmlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNTaWduYXR1cmVQcmVzZW50QnlTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc2lnbmF0dXJlUHJlc2VudCA9IGNvbnRleHQuaXNTaWduYXR1cmVQcmVzZW50QnlTaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUpO1xuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gY29udGV4dC5pc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXR2dmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgcmVmZXJlbmNlUHJlc2VudCA9IGNvbnRleHQuaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldHZ2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc0Rlcml2ZWRTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzRGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gZGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpc0RlY2xhcmVkSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZEp1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNEZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOb2RlLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzRGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGVBbmRTdWJzdGl0dXRpb24obWV0YXZhcmlhYmxlTm9kZSwgc3Vic3RpdHV0aW9uKTtcblxuICAgIHJldHVybiBkZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YUxldmVsKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhTGV2ZWwgPSBjb250ZXh0LmlzTWV0YUxldmVsKCk7XG5cbiAgICByZXR1cm4gbWV0YUxldmVsO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBhZGRUZXJtcyh0ZXJtcykge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkVGVybXModGVybXMpO1xuICB9XG5cbiAgYWRkRGVyaXZlZFN1YnN0aXR1dGlvbnMoZGVyaXZlZFN1YnN0aXR1dGlvbnMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZERlcml2ZWRTdWJzdGl0dXRpb25zKGRlcml2ZWRTdWJzdGl0dXRpb25zKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkTGVtbWEobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUaGVvcmVtKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRUZXJtKHRlcm0pO1xuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEZyYW1lKGZyYW1lKTtcbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG4gIH1cblxuICBhZGRQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkUHJvcGVydHkocHJvcGVydHkpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuICB9XG5cbiAgYWRkU2lnbmF0dXJlKHNpZ25hdHVyZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU2lnbmF0dXJlKHNpZ25hdHVyZSk7XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcbiAgfVxuXG4gIGFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcbiAgfVxuXG4gIGFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gIH1cblxuICBhZGRQcm9wZXJ0eVJlbGF0aW9uKHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFByb3BlcnR5UmVsYXRpb24ocHJvcGVydHlSZWxhdGlvbik7XG4gIH1cblxuICBhZGREZWNsYXJlZFZhcmlhYmxlKGRlY2xhcmVkVmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZERlY2xhcmVkVmFyaWFibGUoZGVjbGFyZWRWYXJpYWJsZSk7XG4gIH1cblxuICBhZGRNZXRhTGV2ZWxBc3N1bXB0aW9uKG1ldGFMZXZlbEFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZE1ldGFMZXZlbEFzc3VtcHRpb24obWV0YUxldmVsQXNzdW1wdGlvbik7XG4gIH1cblxuICBhZGREZWNsYXJlZE1ldGF2YXJpYWJsZShkZWNsYXJlZE1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUoZGVjbGFyZWRNZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiQ29udGV4dEJhc2UiLCJnZXRMZXhlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRGaWxlUGF0aCIsImZpbGVQYXRoIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImZyYW1lcyIsImdldFByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXRpZXMiLCJnZXRKdWRnZW1lbnRzIiwianVkZ2VtZW50cyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiZ2V0U3RhdGVtZW50cyIsInN0YXRlbWVudHMiLCJnZXRTaWduYXR1cmVzIiwic2lnbmF0dXJlcyIsImdldFJlZmVyZW5jZXMiLCJyZWZlcmVuY2VzIiwiZ2V0QXNzdW1wdGlvbnMiLCJhc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJnZXRQcm9wZXJ0eVJlbGF0aW9ucyIsInByb3BlcnR5UmVsYXRpb25zIiwiZ2V0RGVyaXZlZFN1YnN0aXR1dGlvbnMiLCJkZXJpdmVkU3Vic3RpdHV0aW9ucyIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsImdldENvbWJpbmF0b3JzIiwiaW5jbHVkZVJlbGVhc2UiLCJjb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldERlY2xhcmVkVmFyaWFibGVzIiwiZGVjbGFyZWRWYXJpYWJsZXMiLCJnZXREZWNsYXJlZE1ldGF2YXJpYWJsZXMiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZXMiLCJnZXREZWNsYXJlZEp1ZGdlbWVudHMiLCJkZWNsYXJlZEp1ZGdlbWVudHMiLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJjaGlsZENvbnRleHQiLCJwYXJlbnRDb250ZXh0IiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJ1bGUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHkiLCJmaW5kUHJvcGVydHlCeVByb3BlcnR5Tm9kZSIsInByb3BlcnR5Tm9kZSIsInByb3BlcnR5IiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnQiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50IiwiZmluZFNpZ25hdHVyZUJ5U2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZU5vZGUiLCJzaWduYXR1cmUiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbiIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb24iLCJmaW5kUHJvcGVydHlSZWxhdGlvbkJ5UHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb24iLCJmaW5kRGVjbGFyZWRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kQ29tcGxleFN1YnN0aXR1dGlvbnNCeU1ldGF2YXJpYWJsZU5vZGUiLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbiIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZGVjbGFyZWRWYXJpYWJsZSIsImZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwibGFiZWxQcmVzZW50IiwiaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50IiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlIiwiZnJhbWVQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25QcmVzZW50IiwiaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJlc2VudCIsImlzU2lnbmF0dXJlUHJlc2VudEJ5U2lnbmF0dXJlTm9kZSIsInNpZ25hdHVyZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVQcmVzZW50IiwiaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXR2dmFyaWFibGVOb2RlIiwicmVmZXJlbmNlUHJlc2VudCIsImlzRGVyaXZlZFN1YnN0aXR1dGlvblByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJkZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudCIsImlzRGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiZGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50IiwiaXNEZXJpdmVkU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZUFuZFN1YnN0aXR1dGlvbiIsImlzTWV0YUxldmVsIiwibWV0YUxldmVsIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJhZGRUZXJtcyIsImFkZERlcml2ZWRTdWJzdGl0dXRpb25zIiwiYWRkQXhpb20iLCJhZGRMZW1tYSIsImxlbW1hIiwiYWRkVGhlb3JlbSIsInRoZW9yZW0iLCJhZGRDb25qZWN0dXJlIiwiY29uamVjdHVyZSIsImFkZFRlcm0iLCJhZGRGcmFtZSIsImFkZEVxdWFsaXR5IiwiYWRkUHJvcGVydHkiLCJhZGRKdWRnZW1lbnQiLCJhZGRBc3NlcnRpb24iLCJhZGRTdGF0ZW1lbnQiLCJhZGRTaWduYXR1cmUiLCJhZGRSZWZlcmVuY2UiLCJhZGRBc3N1bXB0aW9uIiwiYWRkQXNzaWdubWVudCIsImFzc2lnbm1lbnQiLCJhZGRNZXRhdmFyaWFibGUiLCJhZGRTdWJzdGl0dXRpb24iLCJhZGRQcm9wZXJ0eVJlbGF0aW9uIiwiYWRkRGVjbGFyZWRWYXJpYWJsZSIsImFkZE1ldGFMZXZlbEFzc3VtcHRpb24iLCJhZGREZWNsYXJlZE1ldGF2YXJpYWJsZSIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7OztnQ0FGa0I7QUFFeEIsTUFBTUEsZ0JBQWdCQyx1QkFBVztJQUM5Q0MsV0FBVztRQUNULE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxRQUFRRixRQUFRRCxRQUFRO1FBRTlCLE9BQU9HO0lBQ1Q7SUFFQUMsWUFBWTtRQUNWLE1BQU1ILFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCRyxTQUFTSixRQUFRRyxTQUFTO1FBRWhDLE9BQU9DO0lBQ1Q7SUFFQUMsY0FBYztRQUNaLE1BQU1MLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCSyxXQUFXTixRQUFRSyxXQUFXO1FBRXBDLE9BQU9DO0lBQ1Q7SUFFQUMsU0FBU0MsUUFBUSxFQUFFLEVBQUU7UUFDbkIsTUFBTVIsVUFBVSxJQUFJLENBQUNDLFVBQVU7UUFFL0JELFFBQVFPLFFBQVEsQ0FBQ0M7UUFFakIsT0FBT0E7SUFDVDtJQUVBQyxVQUFVQyxTQUFTLEVBQUUsRUFBRTtRQUNyQixNQUFNVixVQUFVLElBQUksQ0FBQ0MsVUFBVTtRQUUvQkQsUUFBUVMsU0FBUyxDQUFDQztRQUVsQixPQUFPQTtJQUNUO0lBRUFDLGNBQWNDLGFBQWEsRUFBRSxFQUFFO1FBQzdCLE1BQU1aLFVBQVUsSUFBSSxDQUFD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