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
const _breakPoint = require("../utilities/breakPoint");
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
    setLineIndex(breakPoint) {
        this.breakPoint = breakPoint;
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
            const name = this.getName(), string = this.getString();
            let breakPoint;
            breakPoint = this.getBreakPoint();
            const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
            breakPoint = breakPointJSON; ///
            const json = {
                name,
                contexts,
                string,
                breakPoint
            };
            return json;
        }, ...contexts);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHNlcmlhbGlzZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5cbmNvbnN0IHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHByaW1pdGl2ZUZyb21Ob2RlIH0gPXByaW1pdGl2ZVV0aWxpdGllcztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpIHtcbiAgICB0aGlzLmNvbnRleHRzID0gY29udGV4dHM7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmJyZWFrUG9pbnQgPSBicmVha1BvaW50O1xuICB9XG5cbiAgZ2V0Q29udGV4dHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dHM7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0QnJlYWtQb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5icmVha1BvaW50O1xuICB9XG5cbiAgc2V0Q29udGV4dHMoY29udGV4dHMpIHtcbiAgICB0aGlzLmNvbnRleHRzID0gY29udGV4dHM7XG4gIH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cblxuICBzZXROb2RlKG5vZGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICB9XG5cbiAgc2V0TGluZUluZGV4KGJyZWFrUG9pbnQpIHtcbiAgICB0aGlzLmJyZWFrUG9pbnQgPSBicmVha1BvaW50O1xuICB9XG5cbiAgYXN5bmMgYnJlYWsoY29udGV4dCkge1xuICAgIHRoaXMuYnJlYWtQb2ludCA9IGF3YWl0IGNvbnRleHQuYnJlYWsodGhpcy5ub2RlLCB0aGlzLmJyZWFrUG9pbnQpO1xuICB9XG5cbiAgbWF0Y2hOb2RlKG5vZGUpIHsgcmV0dXJuIHRoaXMubm9kZS5tYXRjaChub2RlKTsgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJzdGl0dXRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0TmFtZSgpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gbmFtZTtcbiAgfVxuXG4gIGdldFByaW1pdGl2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnROb2RlID0gdGhpcy5nZXRSZXBsYWNlbWVudE5vZGUoKSxcbiAgICAgICAgICBub2RlID0gcmVwbGFjZW1lbnROb2RlLCAvLy9cbiAgICAgICAgICBwcmltaXRpdmUgPSBwcmltaXRpdmVGcm9tTm9kZShub2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmltaXRpdmU7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldEdlbmVyYWxDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHRzID0gdGhpcy5nZXRDb250ZXh0cygpLFxuICAgICAgICAgIGZpcnN0Q29udGV4dCA9IGZpcnN0KGNvbnRleHRzKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGZpcnN0Q29udGV4dDsgIC8vL1xuXG4gICAgcmV0dXJuIGdlbmVyYWxDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3BlY2lmaWNDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHRzID0gdGhpcy5nZXRDb250ZXh0cygpLFxuICAgICAgICAgIHNlY29uZENvbnRleHQgPSBzZWNvbmQoY29udGV4dHMpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNlY29uZENvbnRleHQ7ICAvLy9cblxuICAgIHJldHVybiBzcGVjaWZpY0NvbnRleHQ7XG4gIH1cblxuICBzZXRHZW5lcmFsQ29udGV4dChnZW5lcmFsQ29udGV4dCkge1xuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IHRoaXMuZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgY29udGV4dHMgPSBbXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNldENvbnRleHRzKGNvbnRleHRzKTtcbiAgfVxuXG4gIHNldFNwZWNpZmljQ29udGV4dChzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuZ2V0R2VuZXJhbENvbnRleHQoKSxcbiAgICAgICAgICBjb250ZXh0cyA9IFtcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0XG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc2V0Q29udGV4dHMoY29udGV4dHMpO1xuICB9XG5cbiAgaXNFcXVhbFRvKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdWJzdGl0dXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzQ29tcGxleCgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSB0aGlzLmlzU2ltcGxlKCksXG4gICAgICAgICAgY29tcGxleCA9ICFzaW1wbGU7XG5cbiAgICByZXR1cm4gY29tcGxleDtcbiAgfVxuXG4gIGlzTm9uVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0cml2aWFsID0gdGhpcy5pc1RyaXZpYWwoKSxcbiAgICAgICAgICBub25Ucml2bGFsID0gIXRyaXZpYWw7XG5cbiAgICByZXR1cm4gbm9uVHJpdmxhbDtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50VGVybSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm0gPSBudWxsO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50RnJhbWUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRGcmFtZSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRGcmFtZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50ID0gbnVsbDtcblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50UmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50UmVmZXJlbmNlID0gbnVsbDtcblxuICAgIHJldHVybiByZXBsYWNlbWVudFJlZmVyZW5jZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBzdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gdGhpcy5nZXRTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRTdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21taXQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHRzID0gW1xuICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICBdO1xuXG4gICAgdGhpcy5zZXRDb250ZXh0cyhjb250ZXh0cyk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dHMgPSB0aGlzLmdldENvbnRleHRzKCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlcygoLi4uY29udGV4dHMpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBjb250ZXh0cyxcbiAgICAgICAgc3RyaW5nLFxuICAgICAgICBicmVha1BvaW50XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCAuLi5jb250ZXh0cyk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb24iLCJmaXJzdCIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwicHJpbWl0aXZlRnJvbU5vZGUiLCJwcmltaXRpdmVVdGlsaXRpZXMiLCJFbGVtZW50IiwiY29udGV4dHMiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsImdldENvbnRleHRzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldEJyZWFrUG9pbnQiLCJzZXRDb250ZXh0cyIsInNldFN0cmluZyIsInNldE5vZGUiLCJzZXRMaW5lSW5kZXgiLCJicmVhayIsImNvbnRleHQiLCJtYXRjaE5vZGUiLCJtYXRjaCIsImdldE5hbWUiLCJuYW1lIiwiZ2V0UHJpbWl0aXZlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicHJpbWl0aXZlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRHZW5lcmFsQ29udGV4dCIsImZpcnN0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0Iiwic2Vjb25kQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInNldEdlbmVyYWxDb250ZXh0Iiwic2V0U3BlY2lmaWNDb250ZXh0IiwiaXNFcXVhbFRvIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJlcXVhbFRvIiwiaXNDb21wbGV4Iiwic2ltcGxlIiwiaXNTaW1wbGUiLCJjb21wbGV4IiwiaXNOb25Ucml2aWFsIiwidHJpdmlhbCIsImlzVHJpdmlhbCIsIm5vblRyaXZsYWwiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm0iLCJyZXBsYWNlbWVudFRlcm0iLCJnZXRSZXBsYWNlbWVudEZyYW1lIiwicmVwbGFjZW1lbnRGcmFtZSIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJnZXRSZXBsYWNlbWVudFJlZmVyZW5jZSIsInJlcGxhY2VtZW50UmVmZXJlbmNlIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJub2RlTWF0Y2hlcyIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImNvbW1pdCIsInRvSlNPTiIsInNlcmlhbGlzZXMiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMERBOzs7ZUFBcUJBOzs7MkJBeERVO3lCQUVKOzZCQUNROzRCQUNRO0FBRTNDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWMsRUFDbEMsRUFBRUMsaUJBQWlCLEVBQUUsR0FBRUMsK0JBQWtCO0FBRS9DLE1BQU1DO0lBQ0osWUFBWUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxDQUFFO1FBQzlDLElBQUksQ0FBQ0gsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDSixRQUFRO0lBQ3RCO0lBRUFLLFlBQVk7UUFDVixPQUFPLElBQUksQ0FB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