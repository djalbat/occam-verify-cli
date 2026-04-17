"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Substitution;
    }
});
const _necessary = require("necessary");
const _context = require("../utilities/context");
const _occamfurtle = require("occam-furtle");
const { first, second } = _necessary.arrayUtilities, { primitiveFromNode } = _occamfurtle.primitiveUtilities;
class Element {
    constructor(contexts, string, node, lineIndex){
        this.contexts = contexts;
        this.string = string;
        this.node = node;
        this.lineIndex = lineIndex;
    }
    getContexts() {
        return this.contexts;
    }
    getString() {
        return this.string;
    }
    getNode() {
        return this.node;
    }
    getLineIndex() {
        return this.lineIndex;
    }
    setContexts(contexts) {
        this.contexts = contexts;
    }
    setString(string) {
        this.string = string;
    }
    setNode(node) {
        this.node = node;
    }
    setLineIndex(lineIndex) {
        this.lineIndex = lineIndex;
    }
    async break(context) {
        this.lineIndex = await context.break(this.node, this.lineIndex);
    }
    matchNode(node) {
        return this.node.match(node);
    }
}
class Substitution extends Element {
    getName() {
        const { name } = this.constructor;
        return name;
    }
    getPrimitive(context) {
        const replacementNode = this.getReplacementNode(), node = replacementNode, primitive = primitiveFromNode(node, context);
        return primitive;
    }
    getSubstitutionNode() {
        const node = this.getNode(), substitutionNode = node; ///
        return substitutionNode;
    }
    getGeneralContext() {
        const contexts = this.getContexts(), firstContext = first(contexts), generalContext = firstContext; ///
        return generalContext;
    }
    getSpecificContext() {
        const contexts = this.getContexts(), secondContext = second(contexts), specificContext = secondContext; ///
        return specificContext;
    }
    setGeneralContext(generalContext) {
        const specificContext = this.getSpecificContext(), contexts = [
            generalContext,
            specificContext
        ];
        this.setContexts(contexts);
    }
    setSpecificContext(specificContext) {
        const generalContext = this.getGeneralContext(), contexts = [
            generalContext,
            specificContext
        ];
        this.setContexts(contexts);
    }
    isEqualTo(substitution) {
        const substitutionNode = substitution.getNode(), substitutionNodeMatches = this.matchSubstitutionNode(substitutionNode), equalTo = substitutionNodeMatches; ///
        return equalTo;
    }
    isComplex() {
        const simple = this.isSimple(), complex = !simple;
        return complex;
    }
    isNonTrivial() {
        const trivial = this.isTrivial(), nonTrivlal = !trivial;
        return nonTrivlal;
    }
    getVariable() {
        const variable = null;
        return variable;
    }
    getMetavariable() {
        const metavariable = null;
        return metavariable;
    }
    getSubstitution() {
        const substitution = null;
        return substitution;
    }
    getVariableNode() {
        const variableNode = null;
        return variableNode;
    }
    getMetavariableNode() {
        const metavariableNode = null;
        return metavariableNode;
    }
    getReplacementTerm() {
        const replacementTerm = null;
        return replacementTerm;
    }
    getReplacementFrame() {
        const replacementFrame = null;
        return replacementFrame;
    }
    getReplacementStatement() {
        const replacementStatement = null;
        return replacementStatement;
    }
    getReplacementReference() {
        const replacementReference = null;
        return replacementReference;
    }
    isSimple() {
        const simple = true;
        return simple;
    }
    matchVariableNode(variableNode) {
        const variableNodeMatches = false;
        return variableNodeMatches;
    }
    matchMetavariableNode(metavariableNode) {
        const metavariableNodeMatches = false;
        return metavariableNodeMatches;
    }
    matchSubstitutionNode(substitutionNode) {
        const node = substitutionNode, nodeMatches = this.matchNode(node), substitutionNodeMatches = nodeMatches; ///
        return substitutionNodeMatches;
    }
    findValidSubstitution(context) {
        const substitutionNode = this.getSubstitutionNode(), substitution = context.findSubstitutionBySubstitutionNode(substitutionNode), validSubstitution = substitution; ///
        return validSubstitution;
    }
    resolve(substitutions, generalContext, specificContext) {
        const resolved = true;
        return resolved;
    }
    commit(generalContext, specificContext) {
        const contexts = [
            generalContext,
            specificContext
        ];
        this.setContexts(contexts);
    }
    toJSON() {
        const contexts = this.getContexts();
        return (0, _context.serialises)((...contexts)=>{
            const name = this.getName(), string = this.getString(), lineIndex = this.getLineIndex(), json = {
                name,
                contexts,
                string,
                lineIndex
            };
            return json;
        }, ...contexts);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHNlcmlhbGlzZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcHJpbWl0aXZlRnJvbU5vZGUgfSA9cHJpbWl0aXZlVXRpbGl0aWVzO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dHMsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KSB7XG4gICAgdGhpcy5jb250ZXh0cyA9IGNvbnRleHRzO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXg7XG4gIH1cblxuICBnZXRDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMaW5lSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZUluZGV4O1xuICB9XG5cbiAgc2V0Q29udGV4dHMoY29udGV4dHMpIHtcbiAgICB0aGlzLmNvbnRleHRzID0gY29udGV4dHM7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgc2V0TGluZUluZGV4KGxpbmVJbmRleCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbGluZUluZGV4O1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoY29udGV4dCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gYXdhaXQgY29udGV4dC5icmVhayh0aGlzLm5vZGUsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIG1hdGNoTm9kZShub2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2gobm9kZSk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRQcmltaXRpdmUoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZSA9IHRoaXMuZ2V0UmVwbGFjZW1lbnROb2RlKCksXG4gICAgICAgICAgbm9kZSA9IHJlcGxhY2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRHZW5lcmFsQ29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0cyA9IHRoaXMuZ2V0Q29udGV4dHMoKSxcbiAgICAgICAgICBmaXJzdENvbnRleHQgPSBmaXJzdChjb250ZXh0cyksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBmaXJzdENvbnRleHQ7ICAvLy9cblxuICAgIHJldHVybiBnZW5lcmFsQ29udGV4dDtcbiAgfVxuXG4gIGdldFNwZWNpZmljQ29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0cyA9IHRoaXMuZ2V0Q29udGV4dHMoKSxcbiAgICAgICAgICBzZWNvbmRDb250ZXh0ID0gc2Vjb25kKGNvbnRleHRzKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBzZWNvbmRDb250ZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gc3BlY2lmaWNDb250ZXh0O1xuICB9XG5cbiAgc2V0R2VuZXJhbENvbnRleHQoZ2VuZXJhbENvbnRleHQpIHtcbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSB0aGlzLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zZXRDb250ZXh0cyhjb250ZXh0cyk7XG4gIH1cblxuICBzZXRTcGVjaWZpY0NvbnRleHQoc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgY29udGV4dHMgPSBbXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNldENvbnRleHRzKGNvbnRleHRzKTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0NvbXBsZXgoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpLFxuICAgICAgICAgIGNvbXBsZXggPSAhc2ltcGxlO1xuXG4gICAgcmV0dXJuIGNvbXBsZXg7XG4gIH1cblxuICBpc05vblRyaXZpYWwoKSB7XG4gICAgY29uc3QgdHJpdmlhbCA9IHRoaXMuaXNUcml2aWFsKCksXG4gICAgICAgICAgbm9uVHJpdmxhbCA9ICF0cml2aWFsO1xuXG4gICAgcmV0dXJuIG5vblRyaXZsYWw7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFRlcm0oKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtID0gbnVsbDtcblxuICAgIHJldHVybiByZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudEZyYW1lKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50RnJhbWUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50RnJhbWU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudCA9IG51bGw7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFJlZmVyZW5jZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRSZWZlcmVuY2U7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICB2YWxpZFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgY29tbWl0KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0cyA9IFtcbiAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgc3BlY2lmaWNDb250ZXh0XG4gICAgXTtcblxuICAgIHRoaXMuc2V0Q29udGV4dHMoY29udGV4dHMpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHRzID0gdGhpcy5nZXRDb250ZXh0cygpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZXMoKC4uLmNvbnRleHRzKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGNvbnRleHRzLFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgLi4uY29udGV4dHMpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwiZmlyc3QiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsInByaW1pdGl2ZUZyb21Ob2RlIiwicHJpbWl0aXZlVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHRzIiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImdldENvbnRleHRzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldExpbmVJbmRleCIsInNldENvbnRleHRzIiwic2V0U3RyaW5nIiwic2V0Tm9kZSIsInNldExpbmVJbmRleCIsImJyZWFrIiwiY29udGV4dCIsIm1hdGNoTm9kZSIsIm1hdGNoIiwiZ2V0TmFtZSIsIm5hbWUiLCJnZXRQcmltaXRpdmUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJwcmltaXRpdmUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldEdlbmVyYWxDb250ZXh0IiwiZmlyc3RDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJnZXRTcGVjaWZpY0NvbnRleHQiLCJzZWNvbmRDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic2V0R2VuZXJhbENvbnRleHQiLCJzZXRTcGVjaWZpY0NvbnRleHQiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImVxdWFsVG8iLCJpc0NvbXBsZXgiLCJzaW1wbGUiLCJpc1NpbXBsZSIsImNvbXBsZXgiLCJpc05vblRyaXZpYWwiLCJ0cml2aWFsIiwiaXNUcml2aWFsIiwibm9uVHJpdmxhbCIsImdldFZhcmlhYmxlIiwidmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldFJlcGxhY2VtZW50VGVybSIsInJlcGxhY2VtZW50VGVybSIsImdldFJlcGxhY2VtZW50RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lIiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm5vZGVNYXRjaGVzIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInZhbGlkU3Vic3RpdHV0aW9uIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJyZXNvbHZlZCIsImNvbW1pdCIsInRvSlNPTiIsInNlcmlhbGlzZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5REE7OztlQUFxQkE7OzsyQkF2RFU7eUJBRUo7NkJBQ1E7QUFFbkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyx5QkFBYyxFQUNsQyxFQUFFQyxpQkFBaUIsRUFBRSxHQUFFQywrQkFBa0I7QUFFL0MsTUFBTUM7SUFDSixZQUFZQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLENBQUU7UUFDN0MsSUFBSSxDQUFDSCxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSixNQUFNO0lBQ3BCO0lBRUFLLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNKLFNB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