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
    getContext() {
        const specificContext = this.getSpecificContext(), context = specificContext; ///
        return context;
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
    setContext(context) {
        const specificContext = context; ///
        this.setSpecificContext(specificContext);
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
    toJSON() {
        const contexts = this.getContexts();
        return (0, _context.serialises)((contexts)=>{
            const name = this.getName(), string = this.getString(), lineIndex = this.getLineIndex(), json = {
                name,
                contexts,
                string,
                lineIndex
            };
            return json;
        }, contexts);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHNlcmlhbGlzZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcHJpbWl0aXZlRnJvbU5vZGUgfSA9cHJpbWl0aXZlVXRpbGl0aWVzO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dHMsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KSB7XG4gICAgdGhpcy5jb250ZXh0cyA9IGNvbnRleHRzO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXg7XG4gIH1cblxuICBnZXRDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMaW5lSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZUluZGV4O1xuICB9XG5cbiAgc2V0Q29udGV4dHMoY29udGV4dHMpIHtcbiAgICB0aGlzLmNvbnRleHRzID0gY29udGV4dHM7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgc2V0TGluZUluZGV4KGxpbmVJbmRleCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbGluZUluZGV4O1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoY29udGV4dCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gYXdhaXQgY29udGV4dC5icmVhayh0aGlzLm5vZGUsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIG1hdGNoTm9kZShub2RlKSB7IHJldHVybiB0aGlzLm5vZGUubWF0Y2gobm9kZSk7IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Vic3RpdHV0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldE5hbWUoKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IHRoaXMuZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBnZXRQcmltaXRpdmUoY29udGV4dCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50Tm9kZSA9IHRoaXMuZ2V0UmVwbGFjZW1lbnROb2RlKCksXG4gICAgICAgICAgbm9kZSA9IHJlcGxhY2VtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgcHJpbWl0aXZlID0gcHJpbWl0aXZlRnJvbU5vZGUobm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJpbWl0aXZlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRHZW5lcmFsQ29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0cyA9IHRoaXMuZ2V0Q29udGV4dHMoKSxcbiAgICAgIGZpcnN0Q29udGV4dCA9IGZpcnN0KGNvbnRleHRzKSxcbiAgICAgIGdlbmVyYWxDb250ZXh0ID0gZmlyc3RDb250ZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gZ2VuZXJhbENvbnRleHQ7XG4gIH1cblxuICBnZXRTcGVjaWZpY0NvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dHMgPSB0aGlzLmdldENvbnRleHRzKCksXG4gICAgICBzZWNvbmRDb250ZXh0ID0gc2Vjb25kKGNvbnRleHRzKSxcbiAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNlY29uZENvbnRleHQ7ICAvLy9cblxuICAgIHJldHVybiBzcGVjaWZpY0NvbnRleHQ7XG4gIH1cblxuICBzZXRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICB0aGlzLnNldFNwZWNpZmljQ29udGV4dChzcGVjaWZpY0NvbnRleHQpO1xuICB9XG5cbiAgc2V0R2VuZXJhbENvbnRleHQoZ2VuZXJhbENvbnRleHQpIHtcbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSB0aGlzLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zZXRDb250ZXh0cyhjb250ZXh0cyk7XG4gIH1cblxuICBzZXRTcGVjaWZpY0NvbnRleHQoc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgY29udGV4dHMgPSBbXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNldENvbnRleHRzKGNvbnRleHRzKTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3Vic3RpdHV0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0NvbXBsZXgoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdGhpcy5pc1NpbXBsZSgpLFxuICAgICAgICAgIGNvbXBsZXggPSAhc2ltcGxlO1xuXG4gICAgcmV0dXJuIGNvbXBsZXg7XG4gIH1cblxuICBpc05vblRyaXZpYWwoKSB7XG4gICAgY29uc3QgdHJpdmlhbCA9IHRoaXMuaXNUcml2aWFsKCksXG4gICAgICAgICAgbm9uVHJpdmxhbCA9ICF0cml2aWFsO1xuXG4gICAgcmV0dXJuIG5vblRyaXZsYWw7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiB2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gc3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICB2YWxpZFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgcmVzb2x2ZShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlc29sdmVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHRzID0gdGhpcy5nZXRDb250ZXh0cygpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZXMoKGNvbnRleHRzKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXROYW1lKCksXG4gICAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGNvbnRleHRzLFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dHMpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwiZmlyc3QiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsInByaW1pdGl2ZUZyb21Ob2RlIiwicHJpbWl0aXZlVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHRzIiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImdldENvbnRleHRzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldExpbmVJbmRleCIsInNldENvbnRleHRzIiwic2V0U3RyaW5nIiwic2V0Tm9kZSIsInNldExpbmVJbmRleCIsImJyZWFrIiwiY29udGV4dCIsIm1hdGNoTm9kZSIsIm1hdGNoIiwiZ2V0TmFtZSIsIm5hbWUiLCJnZXRDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiZ2V0UHJpbWl0aXZlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicHJpbWl0aXZlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRHZW5lcmFsQ29udGV4dCIsImZpcnN0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic2Vjb25kQ29udGV4dCIsInNldENvbnRleHQiLCJzZXRTcGVjaWZpY0NvbnRleHQiLCJzZXRHZW5lcmFsQ29udGV4dCIsImlzRXF1YWxUbyIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwiZXF1YWxUbyIsImlzQ29tcGxleCIsInNpbXBsZSIsImlzU2ltcGxlIiwiY29tcGxleCIsImlzTm9uVHJpdmlhbCIsInRyaXZpYWwiLCJpc1RyaXZpYWwiLCJub25Ucml2bGFsIiwiZ2V0VmFyaWFibGUiLCJ2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImdldFN1YnN0aXR1dGlvbiIsImdldFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJub2RlTWF0Y2hlcyIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsInJlc29sdmUiLCJzdWJzdGl0dXRpb25zIiwicmVzb2x2ZWQiLCJ0b0pTT04iLCJzZXJpYWxpc2VzIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeURBOzs7ZUFBcUJBOzs7MkJBdkRVO3lCQUVKOzZCQUNRO0FBRW5DLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUs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