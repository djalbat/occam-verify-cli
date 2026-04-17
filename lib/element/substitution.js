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
            const name = this.getName(), string = this.getString(), breakPoint = this.getBreakPoint(), json = {
                name,
                contexts,
                string,
                breakPoint
            };
            return json;
        }, ...contexts);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHNlcmlhbGlzZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByaW1pdGl2ZVV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgcHJpbWl0aXZlRnJvbU5vZGUgfSA9cHJpbWl0aXZlVXRpbGl0aWVzO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCkge1xuICAgIHRoaXMuY29udGV4dHMgPSBjb250ZXh0cztcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuYnJlYWtQb2ludCA9IGJyZWFrUG9pbnQ7XG4gIH1cblxuICBnZXRDb250ZXh0cygpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRCcmVha1BvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmJyZWFrUG9pbnQ7XG4gIH1cblxuICBzZXRDb250ZXh0cyhjb250ZXh0cykge1xuICAgIHRoaXMuY29udGV4dHMgPSBjb250ZXh0cztcbiAgfVxuXG4gIHNldFN0cmluZyhzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgfVxuXG4gIHNldE5vZGUobm9kZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gIH1cblxuICBzZXRMaW5lSW5kZXgoYnJlYWtQb2ludCkge1xuICAgIHRoaXMuYnJlYWtQb2ludCA9IGJyZWFrUG9pbnQ7XG4gIH1cblxuICBhc3luYyBicmVhayhjb250ZXh0KSB7XG4gICAgdGhpcy5icmVha1BvaW50ID0gYXdhaXQgY29udGV4dC5icmVhayh0aGlzLm5vZGUsIHRoaXMuYnJlYWtQb2ludCk7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSkgeyByZXR1cm4gdGhpcy5ub2RlLm1hdGNoKG5vZGUpOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBnZXROYW1lKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKGNvbnRleHQpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudE5vZGUgPSB0aGlzLmdldFJlcGxhY2VtZW50Tm9kZSgpLFxuICAgICAgICAgIG5vZGUgPSByZXBsYWNlbWVudE5vZGUsIC8vL1xuICAgICAgICAgIHByaW1pdGl2ZSA9IHByaW1pdGl2ZUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0R2VuZXJhbENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dHMgPSB0aGlzLmdldENvbnRleHRzKCksXG4gICAgICAgICAgZmlyc3RDb250ZXh0ID0gZmlyc3QoY29udGV4dHMpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZmlyc3RDb250ZXh0OyAgLy8vXG5cbiAgICByZXR1cm4gZ2VuZXJhbENvbnRleHQ7XG4gIH1cblxuICBnZXRTcGVjaWZpY0NvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dHMgPSB0aGlzLmdldENvbnRleHRzKCksXG4gICAgICAgICAgc2Vjb25kQ29udGV4dCA9IHNlY29uZChjb250ZXh0cyksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc2Vjb25kQ29udGV4dDsgIC8vL1xuXG4gICAgcmV0dXJuIHNwZWNpZmljQ29udGV4dDtcbiAgfVxuXG4gIHNldEdlbmVyYWxDb250ZXh0KGdlbmVyYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gdGhpcy5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBjb250ZXh0cyA9IFtcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0XG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc2V0Q29udGV4dHMoY29udGV4dHMpO1xuICB9XG5cbiAgc2V0U3BlY2lmaWNDb250ZXh0KHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zZXRDb250ZXh0cyhjb250ZXh0cyk7XG4gIH1cblxuICBpc0VxdWFsVG8oc3Vic3RpdHV0aW9uKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN1YnN0aXR1dGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNDb21wbGV4KCkge1xuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKSxcbiAgICAgICAgICBjb21wbGV4ID0gIXNpbXBsZTtcblxuICAgIHJldHVybiBjb21wbGV4O1xuICB9XG5cbiAgaXNOb25Ucml2aWFsKCkge1xuICAgIGNvbnN0IHRyaXZpYWwgPSB0aGlzLmlzVHJpdmlhbCgpLFxuICAgICAgICAgIG5vblRyaXZsYWwgPSAhdHJpdmlhbDtcblxuICAgIHJldHVybiBub25Ucml2bGFsO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZSA9IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRUZXJtKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybSA9IG51bGw7XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRGcmFtZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudEZyYW1lID0gbnVsbDtcblxuICAgIHJldHVybiByZXBsYWNlbWVudEZyYW1lO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRSZWZlcmVuY2UgPSBudWxsO1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50UmVmZXJlbmNlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gdHJ1ZTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5vZGVNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSB0aGlzLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgIHJldHVybiB2YWxpZFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHJlc29sdmUoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHJlc29sdmVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXNvbHZlZDtcbiAgfVxuXG4gIGNvbW1pdChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dHMgPSBbXG4gICAgICBnZW5lcmFsQ29udGV4dCxcbiAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgIF07XG5cbiAgICB0aGlzLnNldENvbnRleHRzKGNvbnRleHRzKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0cyA9IHRoaXMuZ2V0Q29udGV4dHMoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2VzKCguLi5jb250ZXh0cykgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHRoaXMuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGNvbnRleHRzLFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGJyZWFrUG9pbnRcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIC4uLmNvbnRleHRzKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlN1YnN0aXR1dGlvbiIsImZpcnN0Iiwic2Vjb25kIiwiYXJyYXlVdGlsaXRpZXMiLCJwcmltaXRpdmVGcm9tTm9kZSIsInByaW1pdGl2ZVV0aWxpdGllcyIsIkVsZW1lbnQiLCJjb250ZXh0cyIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwiZ2V0Q29udGV4dHMiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0QnJlYWtQb2ludCIsInNldENvbnRleHRzIiwic2V0U3RyaW5nIiwic2V0Tm9kZSIsInNldExpbmVJbmRleCIsImJyZWFrIiwiY29udGV4dCIsIm1hdGNoTm9kZSIsIm1hdGNoIiwiZ2V0TmFtZSIsIm5hbWUiLCJnZXRQcmltaXRpdmUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJwcmltaXRpdmUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldEdlbmVyYWxDb250ZXh0IiwiZmlyc3RDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJnZXRTcGVjaWZpY0NvbnRleHQiLCJzZWNvbmRDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic2V0R2VuZXJhbENvbnRleHQiLCJzZXRTcGVjaWZpY0NvbnRleHQiLCJpc0VxdWFsVG8iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImVxdWFsVG8iLCJpc0NvbXBsZXgiLCJzaW1wbGUiLCJpc1NpbXBsZSIsImNvbXBsZXgiLCJpc05vblRyaXZpYWwiLCJ0cml2aWFsIiwiaXNUcml2aWFsIiwibm9uVHJpdmxhbCIsImdldFZhcmlhYmxlIiwidmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldFJlcGxhY2VtZW50VGVybSIsInJlcGxhY2VtZW50VGVybSIsImdldFJlcGxhY2VtZW50RnJhbWUiLCJyZXBsYWNlbWVudEZyYW1lIiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50UmVmZXJlbmNlIiwicmVwbGFjZW1lbnRSZWZlcmVuY2UiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm5vZGVNYXRjaGVzIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInZhbGlkU3Vic3RpdHV0aW9uIiwicmVzb2x2ZSIsInN1YnN0aXR1dGlvbnMiLCJyZXNvbHZlZCIsImNvbW1pdCIsInRvSlNPTiIsInNlcmlhbGlzZXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5REE7OztlQUFxQkE7OzsyQkF2RFU7eUJBRUo7NkJBQ1E7QUFFbkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyx5QkFBYyxFQUNsQyxFQUFFQyxpQkFBaUIsRUFBRSxHQUFFQywrQkFBa0I7QUFFL0MsTUFBTUM7SUFDSixZQUFZQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLENBQUU7UUFDOUMsSUFBSSxDQUFDSCxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSixNQUFNO0lBQ3BCO0lBRUFLLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxnQkFBZ0I7UUFDZCxP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