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
    constructor(contexts, string, node, breakPoint){
        this.contexts = contexts;
        this.string = string;
        this.node = node;
        this.breakPoint = breakPoint;
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
    getBreakPoint() {
        return this.breakPoint;
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
        this.breakPoint = lineIndex;
    }
    async break(context) {
        this.breakPoint = await context.break(this.node, this.breakPoint);
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
            const name = this.getName(), string = this.getString(), lineIndex = this.getBreakPoint(), json = {
                name,
                contexts,
                string,
                lineIndex
            };
            return json;
        }, ...contexts);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHNlcmlhbGlzZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcHJpbWl0aXZlRnJvbU5vZGUgfSA9cHJpbWl0aXZlVXRpbGl0aWVzO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCkge1xuICAgIHRoaXMuY29udGV4dHMgPSBjb250ZXh0cztcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuYnJlYWtQb2ludCA9IGJyZWFrUG9pbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRCcmVha1BvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmJyZWFrUG9pbnQ7XG4gIH1cblxuICBzZXRDb250ZXh0cyhjb250ZXh0cykge1xuICAgIHRoaXMuY29udGV4dHMgPSBjb250ZXh0cztcbiAgfVxuXG4gIHNldFN0cmluZyhzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBzZXRMaW5lSW5kZXgobGluZUluZGV4KSB7XG4gICAgdGhpcy5icmVha1BvaW50ID0gbGluZUluZGV4O1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoY29udGV4dCkge1xuICAgIHRoaXMuYnJlYWtQb2ludCA9IGF3YWl0IGNvbnRleHQuYnJlYWsodGhpcy5ub2RlLCB0aGlzLmJyZWFrUG9pbnQpO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaChub2RlKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzdGl0dXRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldFByaW1pdGl2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gdGhpcy5nZXRSZXBsYWNlbWVudE5vZGUoKSxcbiAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldEdlbmVyYWxDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHRzID0gdGhpcy5nZXRDb250ZXh0cygpLFxuICAgICAgICAgIGZpcnN0Q29udGV4dCA9IGZpcnN0KGNvbnRleHRzKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGZpcnN0Q29udGV4dDsgIC8vL1xuXG4gICAgcmV0dXJuIGdlbmVyYWxDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3BlY2lmaWNDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHRzID0gdGhpcy5nZXRDb250ZXh0cygpLFxuICAgICAgICAgIHNlY29uZENvbnRleHQgPSBzZWNvbmQoY29udGV4dHMpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNlY29uZENvbnRleHQ7ICAvLy9cblxuICAgIHJldHVybiBzcGVjaWZpY0NvbnRleHQ7XG4gIH1cblxuICBzZXRHZW5lcmFsQ29udGV4dChnZW5lcmFsQ29udGV4dCkge1xuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IHRoaXMuZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgY29udGV4dHMgPSBbXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNldENvbnRleHRzKGNvbnRleHRzKTtcbiAgfVxuXG4gIHNldFNwZWNpZmljQ29udGV4dChzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuZ2V0R2VuZXJhbENvbnRleHQoKSxcbiAgICAgICAgICBjb250ZXh0cyA9IFtcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0XG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc2V0Q29udGV4dHMoY29udGV4dHMpO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCksXG4gICAgICAgICAgY29tcGxleCA9ICFzaW1wbGU7XG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzTm9uVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0cml2aWFsID0gdGhpcy5pc1RyaXZpYWwoKSxcbiAgICAgICAgICBub25Ucml2bGFsID0gIXRyaXZpYWw7XG5cbiAgICByZXR1cm4gbm9uVHJpdmxhbDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50VGVybSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm0gPSBudWxsO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50RnJhbWUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50ID0gbnVsbDtcblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlID0gbnVsbDtcblxuICAgIHJldHVybiByZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gdGhpcy5nZXRTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdWJzdGl0dXRpb247XG4gIH1cblxuICByZXNvbHZlKHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCByZXNvbHZlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gIH1cblxuICBjb21taXQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHRzID0gW1xuICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICBdO1xuXG4gICAgdGhpcy5zZXRDb250ZXh0cyhjb250ZXh0cyk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dHMgPSB0aGlzLmdldENvbnRleHRzKCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlcygoLi4uY29udGV4dHMpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldEJyZWFrUG9pbnQoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGNvbnRleHRzLFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgLi4uY29udGV4dHMpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwiZmlyc3QiLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsInByaW1pdGl2ZUZyb21Ob2RlIiwicHJpbWl0aXZlVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHRzIiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJnZXRDb250ZXh0cyIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRCcmVha1BvaW50Iiwic2V0Q29udGV4dHMiLCJzZXRTdHJpbmciLCJzZXROb2RlIiwic2V0TGluZUluZGV4IiwibGluZUluZGV4IiwiYnJlYWsiLCJjb250ZXh0IiwibWF0Y2hOb2RlIiwibWF0Y2giLCJnZXROYW1lIiwibmFtZSIsImdldFByaW1pdGl2ZSIsInJlcGxhY2VtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInByaW1pdGl2ZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0R2VuZXJhbENvbnRleHQiLCJmaXJzdENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsImdldFNwZWNpZmljQ29udGV4dCIsInNlY29uZENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzZXRHZW5lcmFsQ29udGV4dCIsInNldFNwZWNpZmljQ29udGV4dCIsImlzRXF1YWxUbyIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwiZXF1YWxUbyIsImlzQ29tcGxleCIsInNpbXBsZSIsImlzU2ltcGxlIiwiY29tcGxleCIsImlzTm9uVHJpdmlhbCIsInRyaXZpYWwiLCJpc1RyaXZpYWwiLCJub25Ucml2bGFsIiwiZ2V0VmFyaWFibGUiLCJ2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImdldFN1YnN0aXR1dGlvbiIsImdldFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0UmVwbGFjZW1lbnRUZXJtIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0UmVwbGFjZW1lbnRGcmFtZSIsInJlcGxhY2VtZW50RnJhbWUiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50IiwiZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJyZXBsYWNlbWVudFJlZmVyZW5jZSIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwibm9kZU1hdGNoZXMiLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwidmFsaWRTdWJzdGl0dXRpb24iLCJyZXNvbHZlIiwic3Vic3RpdHV0aW9ucyIsInJlc29sdmVkIiwiY29tbWl0IiwidG9KU09OIiwic2VyaWFsaXNlcyIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlEQTs7O2VBQXFCQTs7OzJCQXZEVTt5QkFFSjs2QkFDUTtBQUVuQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjLEVBQ2xDLEVBQUVDLGlCQUFpQixFQUFFLEdBQUVDLCtCQUFrQjtBQUUvQyxNQUFNQztJQUNKLFlBQVlDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsQ0FBRTtRQUM5QyxJQUFJLENBQUNILFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0osUUFBUTtJQUN0QjtJQUVBSyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNKLE1BQU07SUFDcEI7SUFFQUssVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLGdCQUFn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