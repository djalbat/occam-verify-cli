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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHNlcmlhbGlzZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcHJpbWl0aXZlRnJvbU5vZGUgfSA9cHJpbWl0aXZlVXRpbGl0aWVzO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dHMsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KSB7XG4gICAgdGhpcy5jb250ZXh0cyA9IGNvbnRleHRzO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXg7XG4gIH1cblxuICBnZXRDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMaW5lSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZUluZGV4O1xuICB9XG5cbiAgc2V0Q29udGV4dHMoY29udGV4dHMpIHtcbiAgICB0aGlzLmNvbnRleHRzID0gY29udGV4dHM7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgc2V0TGluZUluZGV4KGxpbmVJbmRleCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbGluZUluZGV4O1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoY29udGV4dCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gYXdhaXQgY29udGV4dC5icmVhayh0aGlzLm5vZGUsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIG1hdGNoTm9kZShub2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2gobm9kZSk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRQcmltaXRpdmUoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZSA9IHRoaXMuZ2V0UmVwbGFjZW1lbnROb2RlKCksXG4gICAgICAgICAgbm9kZSA9IHJlcGxhY2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRHZW5lcmFsQ29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0cyA9IHRoaXMuZ2V0Q29udGV4dHMoKSxcbiAgICAgICAgICBmaXJzdENvbnRleHQgPSBmaXJzdChjb250ZXh0cyksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBmaXJzdENvbnRleHQ7ICAvLy9cblxuICAgIHJldHVybiBnZW5lcmFsQ29udGV4dDtcbiAgfVxuXG4gIGdldFNwZWNpZmljQ29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0cyA9IHRoaXMuZ2V0Q29udGV4dHMoKSxcbiAgICAgICAgICBzZWNvbmRDb250ZXh0ID0gc2Vjb25kKGNvbnRleHRzKSxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBzZWNvbmRDb250ZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gc3BlY2lmaWNDb250ZXh0O1xuICB9XG5cbiAgc2V0R2VuZXJhbENvbnRleHQoZ2VuZXJhbENvbnRleHQpIHtcbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSB0aGlzLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zZXRDb250ZXh0cyhjb250ZXh0cyk7XG4gIH1cblxuICBzZXRTcGVjaWZpY0NvbnRleHQoc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgY29udGV4dHMgPSBbXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNldENvbnRleHRzKGNvbnRleHRzKTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0NvbXBsZXgoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpLFxuICAgICAgICAgIGNvbXBsZXggPSAhc2ltcGxlO1xuXG4gICAgcmV0dXJuIGNvbXBsZXg7XG4gIH1cblxuICBpc05vblRyaXZpYWwoKSB7XG4gICAgY29uc3QgdHJpdmlhbCA9IHRoaXMuaXNUcml2aWFsKCksXG4gICAgICAgICAgbm9uVHJpdmxhbCA9ICF0cml2aWFsO1xuXG4gICAgcmV0dXJuIG5vblRyaXZsYWw7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICB2YWxpZFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgY29tbWl0KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0cyA9IFtcbiAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgc3BlY2lmaWNDb250ZXh0XG4gICAgXTtcblxuICAgIHRoaXMuc2V0Q29udGV4dHMoY29udGV4dHMpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHRzID0gdGhpcy5nZXRDb250ZXh0cygpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZXMoKC4uLmNvbnRleHRzKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGNvbnRleHRzLFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgLi4uY29udGV4dHMpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwiZmlyc3QiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsInByaW1pdGl2ZUZyb21Ob2RlIiwicHJpbWl0aXZlVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHRzIiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImdldENvbnRleHRzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldExpbmVJbmRleCIsInNldENvbnRleHRzIiwic2V0U3RyaW5nIiwic2V0Tm9kZSIsInNldExpbmVJbmRleCIsImJyZWFrIiwiY29udGV4dCIsIm1hdGNoTm9kZSIsIm1hdGNoIiwiZ2V0TmFtZSIsIm5hbWUiLCJnZXRQcmltaXRpdmUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJwcmltaXRpdmUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldEdlbmVyYWxDb250ZXh0IiwiZmlyc3RDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJnZXRTcGVjaWZpY0NvbnRleHQiLCJzZWNvbmRDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic2V0R2VuZXJhbENvbnRleHQiLCJzZXRTcGVjaWZpY0NvbnRleHQiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImVxdWFsVG8iLCJpc0NvbXBsZXgiLCJzaW1wbGUiLCJpc1NpbXBsZSIsImNvbXBsZXgiLCJpc05vblRyaXZpYWwiLCJ0cml2aWFsIiwiaXNUcml2aWFsIiwibm9uVHJpdmxhbCIsImdldFZhcmlhYmxlIiwidmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibm9kZU1hdGNoZXMiLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwidmFsaWRTdWJzdGl0dXRpb24iLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9ucyIsInJlc29sdmVkIiwiY29tbWl0IiwidG9KU09OIiwic2VyaWFsaXNlcyIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlEQTs7O2VBQXFCQTs7OzJCQXZEVTt5QkFFSjs2QkFDUTtBQUVuQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjLEVBQ2xDLEVBQUVDLGlCQUFpQixFQUFFLEdBQUVDLCtCQUFrQjtBQUUvQyxNQUFNQztJQUNKLFlBQVlDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVB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