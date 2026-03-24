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
    findAssumptionByAssumptionNode(assumptionNode, metaLevel = false) {
        const context = this.getContext(), assumption = context.findAssumptionByAssumptionNode(assumptionNode, metaLevel);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDb250ZXh0IGFzIENvbnRleHRCYXNlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0IGV4dGVuZHMgQ29udGV4dEJhc2Uge1xuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gY29udGV4dC5nZXRGaWxlUGF0aCgpO1xuXG4gICAgcmV0dXJuIGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1zID0gY29udGV4dC5nZXRUZXJtcygpO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgZ2V0RnJhbWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgIGZyYW1lcyA9IGNvbnRleHQuZ2V0RnJhbWVzKCk7XG5cbiAgICByZXR1cm4gZnJhbWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gY29udGV4dC5nZXRFcXVhbGl0aWVzKCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBjb250ZXh0LmdldFN0YXRlbWVudHMoKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0QXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gY29udGV4dC5nZXRSZWZlcmVuY2VzKCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IGNvbnRleHQuZ2V0QXNzdW1wdGlvbnMoKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBjb250ZXh0LmdldFN1YnN0aXR1dGlvbnMoKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBjb250ZXh0LmdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb250ZXh0LmdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSk7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gY29udGV4dC5nZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgcGFyZW50Q29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlID0gcGFyZW50Q29udGV4dC5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY2hpbGRDb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJ1bGUgPSBjb250ZXh0LmZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGFUeXBlID0gY29udGV4dC5maW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBtZXRhTGV2ZWwgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIG1ldGFMZXZlbCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudHNCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBjb250ZXh0LmZpbmRKdWRnZW1lbnRzQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kTWV0YUxldmVsQXNzdW1wdGlvbkJ5TWV0YUxldmVsQXNzdW1wdGlvbk5vZGUobWV0YUxldmVsQXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKG1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKTtcblxuICAgIHJldHVybiBtZXRhTGV2ZWxBc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZENvbXBsZXhTdWJzdGl0dXRpb25zQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGNvbXBsZXhTdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gY29udGV4dC5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHBhcmVudENvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IHBhcmVudENvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY2hpbGRDb250ZXh0KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gY29udGV4dC5pc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSBjb250ZXh0LmlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gY29udGV4dC5pc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICByZXR1cm4gdGVybVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlKGxhYmVsTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBjb250ZXh0LmlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSBjb250ZXh0LmlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGVxdWFsaXR5UHJlc2VudCA9IGNvbnRleHQuaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5UHJlc2VudDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSBjb250ZXh0LmlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICBzdGF0ZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc2VydGlvblByZXNlbnQgPSBjb250ZXh0LmlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldHZ2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcmVmZXJlbmNlUHJlc2VudCA9IGNvbnRleHQuaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldHZ2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gY29udGV4dC5pc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbihtZXRhdmFyaWFibGVOYW1lLCBzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNTdWJzdGl0dXRpb25QcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uKG1ldGF2YXJpYWJsZU5hbWUsIHN1YnN0aXR1dGlvbik7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSBjb250ZXh0LmlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IGNvbnRleHQuaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGFMZXZlbCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YUxldmVsID0gY29udGV4dC5pc01ldGFMZXZlbCgpO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgYWRkVGVybXModGVybXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFRlcm1zKHRlcm1zKTtcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkVGVybSh0ZXJtKTtcbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRGcmFtZShmcmFtZSk7XG4gIH1cblxuICBhZGRFcXVhbGl0eShlcXVhbGl0eSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHkpO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG4gIH1cblxuICBhZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbik7XG4gIH1cblxuICBhZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICB9XG5cbiAgYWRkTWV0YUxldmVsQXNzdW1wdGlvbihtZXRhTGV2ZWxBc3N1bXB0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29udGV4dC5hZGRNZXRhTGV2ZWxBc3N1bXB0aW9uKG1ldGFMZXZlbEFzc3VtcHRpb24pO1xuICB9XG5cbiAgYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250ZXh0IiwiQ29udGV4dEJhc2UiLCJnZXRMZXhlciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwibGV4ZXIiLCJnZXRQYXJzZXIiLCJwYXJzZXIiLCJnZXRGaWxlUGF0aCIsImZpbGVQYXRoIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImZyYW1lcyIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXRpZXMiLCJnZXRTdGF0ZW1lbnRzIiwic3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImFzc3VtcHRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJnZXRWYXJpYWJsZXMiLCJpbmNsdWRlUmVsZWFzZSIsInZhcmlhYmxlcyIsImdldENvbWJpbmF0b3JzIiwiY29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImNoaWxkQ29udGV4dCIsInBhcmVudENvbnRleHQiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicnVsZSIsImZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwidHlwZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lIiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eSIsImZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwianVkZ2VtZW50IiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb24iLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudCIsImZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWwiLCJhc3N1bXB0aW9uIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kSnVkZ2VtZW50c0J5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSIsIm1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbiIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVJZGVudGlmaWVyIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRDb21wbGV4U3Vic3RpdHV0aW9uc0J5TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lQW5kU3Vic3RpdHV0aW9uIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImxhYmVsUHJlc2VudCIsImlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCIsImlzVGVybVByZXNlbnRCeVRlcm1Ob2RlIiwidGVybVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwibGFiZWxOb2RlIiwiaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZSIsImZyYW1lUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwiaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uUHJlc2VudCIsImlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldHZ2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZUFuZFN1YnN0aXR1dGlvbiIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc01ldGFMZXZlbCIsImlzU3RhdGVkIiwic3RhdGVkIiwiYWRkVGVybXMiLCJhZGRUZXJtIiwiYWRkRnJhbWUiLCJhZGRFcXVhbGl0eSIsImFkZEp1ZGdlbWVudCIsImFkZFN0YXRlbWVudCIsImFkZEFzc2VydGlvbiIsImFkZFJlZmVyZW5jZSIsImFkZEFzc3VtcHRpb24iLCJhZGRBc3NpZ25tZW50IiwiYXNzaWdubWVudCIsImFkZE1ldGF2YXJpYWJsZSIsImFkZFN1YnN0aXR1dGlvbiIsImFkZE1ldGFMZXZlbEFzc3VtcHRpb24iLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7Z0NBRmtCO0FBRXhCLE1BQU1BLGdCQUFnQkMsdUJBQVc7SUFDOUNDLFdBQVc7UUFDVCxNQUFNQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsUUFBUUYsUUFBUUQsUUFBUTtRQUU5QixPQUFPRztJQUNUO0lBRUFDLFlBQVk7UUFDVixNQUFNSCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkcsU0FBU0osUUFBUUcsU0FBUztRQUVoQyxPQUFPQztJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNTCxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkssV0FBV04sUUFBUUssV0FBVztR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